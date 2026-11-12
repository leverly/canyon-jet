import * as THREE from 'three';
import { mulberry32 } from '../core/math';
import { canvasTexture } from './tex';

export const PAL = {
  skyZenith: 0x3f7fd0, skyMid: 0x62a8e2, skyLow: 0x8fcbee, skyHaze: 0xd9ecf4,
  fog: 0xd3c4d2,
  rock: 0xb5412a, rockDark: 0x80281d, rockLit: 0xe47c46, rockDeep: 0x5a2219,
  grass: 0x6f9a35, grassDark: 0x3f6d2a,
  waterDeep: 0x125c64, waterMid: 0x1bab9c, waterShallow: 0x74dcc6, foam: 0xf6fdfb,
  boatOrange: 0xf27420, boatBlue: 0x2b63c0, boatGrey: 0xcfd0d6, boatDark: 0x26282e,
  vest: 0xf6b921, shirt: 0x2456a8, skin: 0xe9b48c, hairBrown: 0x4a2a22, hairBlond: 0xf2d065,
  boulder: 0x9a8c82, boulderDark: 0x6a6268,
  sun: 0xffd84a, cyan: 0x58e6ee,
};

export const SUN_DIR = new THREE.Vector3(0.42, 0.74, 0.52).normalize();

export interface Env {
  sky: THREE.Mesh;
  sunLight: THREE.DirectionalLight;
  hemi: THREE.HemisphereLight;
  clouds: THREE.Group;
  update(camera: THREE.Camera, focus: THREE.Vector3, t: number): void;
}

const skyVert = /* glsl */ `
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  vec4 p = projectionMatrix * mat4(mat3(modelViewMatrix)) * vec4(position, 1.0);
  gl_Position = p.xyww;
}`;

const skyFrag = /* glsl */ `
uniform vec3 uZenith; uniform vec3 uMid; uniform vec3 uLow; uniform vec3 uHaze; uniform vec3 uGround; uniform vec3 uSun;
varying vec3 vDir;
void main() {
  vec3 d = normalize(vDir);
  float h = d.y;
  vec3 c = mix(uHaze, uLow, smoothstep(0.0, 0.10, h));
  c = mix(c, uMid, smoothstep(0.06, 0.32, h));
  c = mix(c, uZenith, smoothstep(0.28, 0.85, h));
  c = mix(c, uGround, smoothstep(0.0, -0.12, h));
  float s = max(dot(d, uSun), 0.0);
  c += vec3(1.0, 0.92, 0.75) * (pow(s, 600.0) * 3.0 + pow(s, 24.0) * 0.10);
  gl_FragColor = vec4(c, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;

function cloudTexture(seed: number) {
  const rnd = mulberry32(seed);
  return canvasTexture(512, 256, (g) => {
    g.clearRect(0, 0, 512, 256);
    const blobs: { x: number; y: number; r: number }[] = [];
    const n = 9 + Math.floor(rnd() * 6);
    for (let i = 0; i < n; i++) {
      const u = i / (n - 1);
      const arch = Math.sin(u * Math.PI);
      const r = 26 + arch * (34 + rnd() * 26);
      blobs.push({ x: 70 + u * 372 + (rnd() - 0.5) * 20, y: 178 - arch * (38 + rnd() * 40) * 0.8, r });
      if (rnd() < 0.6) blobs.push({ x: 70 + u * 372 + (rnd() - 0.5) * 50, y: 172 - rnd() * 10, r: r * 0.8 });
    }
    // soft lilac underside first, then warm cream tops offset up-left (toward the sun)
    for (const b of blobs) {
      const gr = g.createRadialGradient(b.x, b.y + b.r * 0.25, b.r * 0.2, b.x, b.y + b.r * 0.25, b.r * 1.05);
      gr.addColorStop(0, 'rgba(196,200,224,0.95)');
      gr.addColorStop(0.75, 'rgba(206,210,230,0.8)');
      gr.addColorStop(1, 'rgba(214,218,236,0)');
      g.fillStyle = gr;
      g.beginPath(); g.arc(b.x, b.y + b.r * 0.25, b.r * 1.05, 0, Math.PI * 2); g.fill();
    }
    for (const b of blobs) {
      const gr = g.createRadialGradient(b.x - b.r * 0.25, b.y - b.r * 0.3, b.r * 0.1, b.x - b.r * 0.1, b.y - b.r * 0.12, b.r * 0.95);
      gr.addColorStop(0, 'rgba(255,252,240,1)');
      gr.addColorStop(0.6, 'rgba(252,244,226,0.96)');
      gr.addColorStop(1, 'rgba(246,236,220,0)');
      g.fillStyle = gr;
      g.beginPath(); g.arc(b.x - b.r * 0.1, b.y - b.r * 0.12, b.r * 0.95, 0, Math.PI * 2); g.fill();
    }
    // flat-ish base fade
    const fade = g.createLinearGradient(0, 170, 0, 230);
    fade.addColorStop(0, 'rgba(0,0,0,0)');
    fade.addColorStop(1, 'rgba(0,0,0,1)');
    g.globalCompositeOperation = 'destination-out';
    g.fillStyle = fade;
    g.fillRect(0, 170, 512, 90);
    g.globalCompositeOperation = 'source-over';
  });
}

export function createEnv(scene: THREE.Scene, renderer: THREE.WebGLRenderer, shadowSize: number): Env {
  const skyMat = new THREE.ShaderMaterial({
    vertexShader: skyVert,
    fragmentShader: skyFrag,
    uniforms: {
      uZenith: { value: new THREE.Color(PAL.skyZenith) },
      uMid: { value: new THREE.Color(PAL.skyMid) },
      uLow: { value: new THREE.Color(PAL.skyLow) },
      uHaze: { value: new THREE.Color(PAL.skyHaze) },
      uGround: { value: new THREE.Color(0x7a5a52) },
      uSun: { value: SUN_DIR },
    },
    side: THREE.BackSide, depthWrite: false, depthTest: true, fog: false,
  });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 16), skyMat);
  sky.frustumCulled = false;
  sky.renderOrder = -10;
  scene.add(sky);

  // Reflection/ambient environment from the same sky.
  const envScene = new THREE.Scene();
  const envMat = skyMat.clone();
  envMat.uniforms.uGround.value = new THREE.Color(0x5fa9b6); // water-lit underside, keeps reflections cool
  envScene.add(new THREE.Mesh(sky.geometry, envMat));
  const pm = new THREE.PMREMGenerator(renderer);
  const envRT = pm.fromScene(envScene, 0.04);
  scene.environment = envRT.texture;
  scene.environmentIntensity = 0.35;
  pm.dispose();

  scene.fog = new THREE.FogExp2(PAL.fog, 0.00135);

  const sunLight = new THREE.DirectionalLight(0xfff0d4, 3.3);
  sunLight.castShadow = shadowSize > 0;
  if (shadowSize > 0) {
    sunLight.shadow.mapSize.set(shadowSize, shadowSize);
    const cam = sunLight.shadow.camera;
    cam.left = -70; cam.right = 70; cam.top = 70; cam.bottom = -70; cam.near = 10; cam.far = 320;
    sunLight.shadow.bias = -0.0006;
    sunLight.shadow.normalBias = 0.35;
  }
  scene.add(sunLight, sunLight.target);
  const hemi = new THREE.HemisphereLight(0xb5d4ff, 0x9c4632, 1.15);
  scene.add(hemi);

  const clouds = new THREE.Group();
  const rnd = mulberry32(77);
  const texes = [cloudTexture(3), cloudTexture(11), cloudTexture(29), cloudTexture(41)];
  for (let i = 0; i < 15; i++) {
    const mat = new THREE.SpriteMaterial({ map: texes[i % texes.length], transparent: true, depthWrite: false, fog: false, opacity: 0.97 });
    const sp = new THREE.Sprite(mat);
    const az = rnd() * Math.PI * 2;
    const el = 0.03 + rnd() * rnd() * 0.32;
    const d = 3000;
    sp.position.set(Math.cos(az) * Math.cos(el) * d, Math.sin(el) * d + 60, Math.sin(az) * Math.cos(el) * d);
    const sc = 700 + rnd() * 1000;
    sp.scale.set(sc, sc * 0.5, 1);
    sp.renderOrder = -9;
    clouds.add(sp);
  }
  scene.add(clouds);

  const tmp = new THREE.Vector3();
  return {
    sky, sunLight, hemi, clouds,
    update(camera, focus, t) {
      sky.position.copy(camera.position);
      clouds.position.set(camera.position.x, 0, camera.position.z);
      clouds.rotation.y = t * 0.0015;
      // shadow frustum follows the action, snapped to texels to avoid shimmer
      const texel = 140 / Math.max(1, shadowSize);
      tmp.copy(focus);
      tmp.x = Math.round(tmp.x / texel) * texel;
      tmp.z = Math.round(tmp.z / texel) * texel;
      sunLight.target.position.copy(tmp);
      sunLight.position.copy(tmp).addScaledVector(SUN_DIR, 160);
    },
  };
}
