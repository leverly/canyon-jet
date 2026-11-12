(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const al="180",Zh=0,zl=1,Jh=2,Kc=1,$c=2,Xn=3,hi=0,Ye=1,qe=2,Kn=0,Li=1,$s=2,Bl=3,kl=4,Qh=5,Ri=100,tu=101,eu=102,nu=103,iu=104,su=200,ru=201,au=202,ou=203,oo=204,lo=205,lu=206,cu=207,hu=208,uu=209,fu=210,du=211,pu=212,mu=213,gu=214,co=0,ho=1,uo=2,vs=3,fo=4,po=5,mo=6,go=7,ol=0,_u=1,vu=2,ri=0,jc=1,Zc=2,Jc=3,Qc=4,th=5,eh=6,ll=7,nh=300,xs=301,Ms=302,_o=303,vo=304,ua=306,Ss=1e3,Pi=1001,xo=1002,an=1003,xu=1004,ur=1005,sn=1006,va=1007,Yn=1008,On=1009,ih=1010,sh=1011,js=1012,cl=1013,Ui=1014,In=1015,Fn=1016,hl=1017,ul=1018,Zs=1020,rh=35902,ah=35899,oh=1021,lh=1022,rn=1023,Js=1026,Qs=1027,fl=1028,dl=1029,ch=1030,pl=1031,ml=1033,$r=33776,jr=33777,Zr=33778,Jr=33779,Mo=35840,So=35841,yo=35842,Eo=35843,bo=36196,To=37492,wo=37496,Ao=37808,Ro=37809,Co=37810,Po=37811,Do=37812,Lo=37813,Uo=37814,Io=37815,No=37816,Fo=37817,Oo=37818,zo=37819,Bo=37820,ko=37821,Vo=36492,Ho=36494,Go=36495,Wo=36283,Xo=36284,qo=36285,Yo=36286,Mu=3200,Su=3201,gl=0,yu=1,ii="",$e="srgb",ys="srgb-linear",aa="linear",ee="srgb",Bi=7680,Vl=519,Eu=512,bu=513,Tu=514,hh=515,wu=516,Au=517,Ru=518,Cu=519,Ko=35044,ds=35048,Hl="300 es",Nn=2e3,oa=2001;class ws{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xa=Math.PI/180,$o=180/Math.PI;function ai(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Oe[i&255]+Oe[i>>8&255]+Oe[i>>16&255]+Oe[i>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]).toLowerCase()}function qt(i,t,e){return Math.max(t,Math.min(e,i))}function Pu(i,t){return(i%t+t)%t}function Ma(i,t,e){return(1-e)*i+e*t}function Ln(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class bt{constructor(t=0,e=0){bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3];const p=r[a+0],m=r[a+1],M=r[a+2],S=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=p,t[e+1]=m,t[e+2]=M,t[e+3]=S;return}if(d!==S||c!==p||l!==m||h!==M){let u=1-o;const f=c*p+l*m+h*M+d*S,y=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const b=Math.sqrt(v),E=Math.atan2(b,f*y);u=Math.sin(u*E)/b,o=Math.sin(o*E)/b}const _=o*y;if(c=c*u+p*_,l=l*u+m*_,h=h*u+M*_,d=d*u+S*_,u===1-o){const b=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=b,l*=b,h*=b,d*=b}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],p=r[a+1],m=r[a+2],M=r[a+3];return t[e]=o*M+h*d+c*m-l*p,t[e+1]=c*M+h*p+l*d-o*m,t[e+2]=l*M+h*m+o*p-c*d,t[e+3]=h*M-o*d-c*p-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),p=c(n/2),m=c(s/2),M=c(r/2);switch(a){case"XYZ":this._x=p*h*d+l*m*M,this._y=l*m*d-p*h*M,this._z=l*h*M+p*m*d,this._w=l*h*d-p*m*M;break;case"YXZ":this._x=p*h*d+l*m*M,this._y=l*m*d-p*h*M,this._z=l*h*M-p*m*d,this._w=l*h*d+p*m*M;break;case"ZXY":this._x=p*h*d-l*m*M,this._y=l*m*d+p*h*M,this._z=l*h*M+p*m*d,this._w=l*h*d-p*m*M;break;case"ZYX":this._x=p*h*d-l*m*M,this._y=l*m*d+p*h*M,this._z=l*h*M-p*m*d,this._w=l*h*d+p*m*M;break;case"YZX":this._x=p*h*d+l*m*M,this._y=l*m*d+p*h*M,this._z=l*h*M-p*m*d,this._w=l*h*d-p*m*M;break;case"XZY":this._x=p*h*d-l*m*M,this._y=l*m*d-p*h*M,this._z=l*h*M+p*m*d,this._w=l*h*d+p*m*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],p=n+o+d;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(h-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-e)*h)/l,p=Math.sin(e*h)/l;return this._w=a*d+this._w*p,this._x=n*d+this._x*p,this._y=s*d+this._y*p,this._z=r*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Sa.copy(this).projectOnVector(t),this.sub(Sa)}reflect(t){return this.sub(Sa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sa=new N,Gl=new Fi;class zt{constructor(t,e,n,s,r,a,o,c,l){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],p=n[2],m=n[5],M=n[8],S=s[0],u=s[3],f=s[6],y=s[1],v=s[4],_=s[7],b=s[2],E=s[5],C=s[8];return r[0]=a*S+o*y+c*b,r[3]=a*u+o*v+c*E,r[6]=a*f+o*_+c*C,r[1]=l*S+h*y+d*b,r[4]=l*u+h*v+d*E,r[7]=l*f+h*_+d*C,r[2]=p*S+m*y+M*b,r[5]=p*u+m*v+M*E,r[8]=p*f+m*_+M*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,p=o*c-h*r,m=l*r-a*c,M=e*d+n*p+s*m;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/M;return t[0]=d*S,t[1]=(s*l-h*n)*S,t[2]=(o*n-s*a)*S,t[3]=p*S,t[4]=(h*e-s*c)*S,t[5]=(s*r-o*e)*S,t[6]=m*S,t[7]=(n*c-l*e)*S,t[8]=(a*e-n*r)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ya.makeScale(t,e)),this}rotate(t){return this.premultiply(ya.makeRotation(-t)),this}translate(t,e){return this.premultiply(ya.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ya=new zt;function uh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function tr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Du(){const i=tr("canvas");return i.style.display="block",i}const Wl={};function er(i){i in Wl||(Wl[i]=!0,console.warn(i))}function Lu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Xl=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ql=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Uu(){const i={enabled:!0,workingColorSpace:ys,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ee&&(s.r=$n(s.r),s.g=$n(s.g),s.b=$n(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ee&&(s.r=ps(s.r),s.g=ps(s.g),s.b=ps(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ii?aa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return er("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return er("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ys]:{primaries:t,whitePoint:n,transfer:aa,toXYZ:Xl,fromXYZ:ql,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:t,whitePoint:n,transfer:ee,toXYZ:Xl,fromXYZ:ql,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}}),i}const $t=Uu();function $n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ps(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ki;class Iu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ki===void 0&&(ki=tr("canvas")),ki.width=t.width,ki.height=t.height;const s=ki.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ki}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=tr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=$n(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor($n(e[n]/255)*255):e[n]=$n(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Nu=0;class _l{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=ai(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ea(s[a].image)):r.push(Ea(s[a]))}else r=Ea(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ea(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Iu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fu=0;const ba=new N;class Ne extends ws{constructor(t=Ne.DEFAULT_IMAGE,e=Ne.DEFAULT_MAPPING,n=Pi,s=Pi,r=sn,a=Yn,o=rn,c=On,l=Ne.DEFAULT_ANISOTROPY,h=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=ai(),this.name="",this.source=new _l(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ba).x}get height(){return this.source.getSize(ba).y}get depth(){return this.source.getSize(ba).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ss:t.x=t.x-Math.floor(t.x);break;case Pi:t.x=t.x<0?0:1;break;case xo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ss:t.y=t.y-Math.floor(t.y);break;case Pi:t.y=t.y<0?0:1;break;case xo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=nh;Ne.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,n=0,s=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],d=c[8],p=c[1],m=c[5],M=c[9],S=c[2],u=c[6],f=c[10];if(Math.abs(h-p)<.01&&Math.abs(d-S)<.01&&Math.abs(M-u)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+S)<.1&&Math.abs(M+u)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,_=(m+1)/2,b=(f+1)/2,E=(h+p)/4,C=(d+S)/4,w=(M+u)/4;return v>_&&v>b?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=E/n,r=C/n):_>b?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=E/s,r=w/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=C/r,s=w/r),this.set(n,s,r,e),this}let y=Math.sqrt((u-M)*(u-M)+(d-S)*(d-S)+(p-h)*(p-h));return Math.abs(y)<.001&&(y=1),this.x=(u-M)/y,this.y=(d-S)/y,this.z=(p-h)/y,this.w=Math.acos((l+m+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this.w=qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this.w=qt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ou extends ws{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Ne(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new _l(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gn extends Ou{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class fh extends Ne{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class zu extends Ne{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oi{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,vn):vn.fromBufferAttribute(r,a),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fr.copy(n.boundingBox)),fr.applyMatrix4(t.matrixWorld),this.union(fr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ds),dr.subVectors(this.max,Ds),Vi.subVectors(t.a,Ds),Hi.subVectors(t.b,Ds),Gi.subVectors(t.c,Ds),Zn.subVectors(Hi,Vi),Jn.subVectors(Gi,Hi),vi.subVectors(Vi,Gi);let e=[0,-Zn.z,Zn.y,0,-Jn.z,Jn.y,0,-vi.z,vi.y,Zn.z,0,-Zn.x,Jn.z,0,-Jn.x,vi.z,0,-vi.x,-Zn.y,Zn.x,0,-Jn.y,Jn.x,0,-vi.y,vi.x,0];return!Ta(e,Vi,Hi,Gi,dr)||(e=[1,0,0,0,1,0,0,0,1],!Ta(e,Vi,Hi,Gi,dr))?!1:(pr.crossVectors(Zn,Jn),e=[pr.x,pr.y,pr.z],Ta(e,Vi,Hi,Gi,dr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const kn=[new N,new N,new N,new N,new N,new N,new N,new N],vn=new N,fr=new Oi,Vi=new N,Hi=new N,Gi=new N,Zn=new N,Jn=new N,vi=new N,Ds=new N,dr=new N,pr=new N,xi=new N;function Ta(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){xi.fromArray(i,r);const o=s.x*Math.abs(xi.x)+s.y*Math.abs(xi.y)+s.z*Math.abs(xi.z),c=t.dot(xi),l=e.dot(xi),h=n.dot(xi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Bu=new Oi,Ls=new N,wa=new N;class As{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Bu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ls.subVectors(t,this.center);const e=Ls.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ls,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ls.copy(t.center).add(wa)),this.expandByPoint(Ls.copy(t.center).sub(wa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Vn=new N,Aa=new N,mr=new N,Qn=new N,Ra=new N,gr=new N,Ca=new N;class dh{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vn.copy(this.origin).addScaledVector(this.direction,e),Vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Aa.copy(t).add(e).multiplyScalar(.5),mr.copy(e).sub(t).normalize(),Qn.copy(this.origin).sub(Aa);const r=t.distanceTo(e)*.5,a=-this.direction.dot(mr),o=Qn.dot(this.direction),c=-Qn.dot(mr),l=Qn.lengthSq(),h=Math.abs(1-a*a);let d,p,m,M;if(h>0)if(d=a*c-o,p=a*o-c,M=r*h,d>=0)if(p>=-M)if(p<=M){const S=1/h;d*=S,p*=S,m=d*(d+a*p+2*o)+p*(a*d+p+2*c)+l}else p=r,d=Math.max(0,-(a*p+o)),m=-d*d+p*(p+2*c)+l;else p=-r,d=Math.max(0,-(a*p+o)),m=-d*d+p*(p+2*c)+l;else p<=-M?(d=Math.max(0,-(-a*r+o)),p=d>0?-r:Math.min(Math.max(-r,-c),r),m=-d*d+p*(p+2*c)+l):p<=M?(d=0,p=Math.min(Math.max(-r,-c),r),m=p*(p+2*c)+l):(d=Math.max(0,-(a*r+o)),p=d>0?r:Math.min(Math.max(-r,-c),r),m=-d*d+p*(p+2*c)+l);else p=a>0?-r:r,d=Math.max(0,-(a*p+o)),m=-d*d+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Aa).addScaledVector(mr,p),m}intersectSphere(t,e){Vn.subVectors(t.center,this.origin);const n=Vn.dot(this.direction),s=Vn.dot(Vn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return l>=0?(n=(t.min.x-p.x)*l,s=(t.max.x-p.x)*l):(n=(t.max.x-p.x)*l,s=(t.min.x-p.x)*l),h>=0?(r=(t.min.y-p.y)*h,a=(t.max.y-p.y)*h):(r=(t.max.y-p.y)*h,a=(t.min.y-p.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-p.z)*d,c=(t.max.z-p.z)*d):(o=(t.max.z-p.z)*d,c=(t.min.z-p.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Vn)!==null}intersectTriangle(t,e,n,s,r){Ra.subVectors(e,t),gr.subVectors(n,t),Ca.crossVectors(Ra,gr);let a=this.direction.dot(Ca),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Qn.subVectors(this.origin,t);const c=o*this.direction.dot(gr.crossVectors(Qn,gr));if(c<0)return null;const l=o*this.direction.dot(Ra.cross(Qn));if(l<0||c+l>a)return null;const h=-o*Qn.dot(Ca);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(t,e,n,s,r,a,o,c,l,h,d,p,m,M,S,u){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,d,p,m,M,S,u)}set(t,e,n,s,r,a,o,c,l,h,d,p,m,M,S,u){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=d,f[14]=p,f[3]=m,f[7]=M,f[11]=S,f[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Wi.setFromMatrixColumn(t,0).length(),r=1/Wi.setFromMatrixColumn(t,1).length(),a=1/Wi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const p=a*h,m=a*d,M=o*h,S=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=m+M*l,e[5]=p-S*l,e[9]=-o*c,e[2]=S-p*l,e[6]=M+m*l,e[10]=a*c}else if(t.order==="YXZ"){const p=c*h,m=c*d,M=l*h,S=l*d;e[0]=p+S*o,e[4]=M*o-m,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=m*o-M,e[6]=S+p*o,e[10]=a*c}else if(t.order==="ZXY"){const p=c*h,m=c*d,M=l*h,S=l*d;e[0]=p-S*o,e[4]=-a*d,e[8]=M+m*o,e[1]=m+M*o,e[5]=a*h,e[9]=S-p*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const p=a*h,m=a*d,M=o*h,S=o*d;e[0]=c*h,e[4]=M*l-m,e[8]=p*l+S,e[1]=c*d,e[5]=S*l+p,e[9]=m*l-M,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const p=a*c,m=a*l,M=o*c,S=o*l;e[0]=c*h,e[4]=S-p*d,e[8]=M*d+m,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=m*d+M,e[10]=p-S*d}else if(t.order==="XZY"){const p=a*c,m=a*l,M=o*c,S=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=p*d+S,e[5]=a*h,e[9]=m*d-M,e[2]=M*d-m,e[6]=o*h,e[10]=S*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ku,t,Vu)}lookAt(t,e,n){const s=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),ti.crossVectors(n,tn),ti.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),ti.crossVectors(n,tn)),ti.normalize(),_r.crossVectors(tn,ti),s[0]=ti.x,s[4]=_r.x,s[8]=tn.x,s[1]=ti.y,s[5]=_r.y,s[9]=tn.y,s[2]=ti.z,s[6]=_r.z,s[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],p=n[9],m=n[13],M=n[2],S=n[6],u=n[10],f=n[14],y=n[3],v=n[7],_=n[11],b=n[15],E=s[0],C=s[4],w=s[8],g=s[12],x=s[1],R=s[5],P=s[9],U=s[13],F=s[2],O=s[6],V=s[10],G=s[14],k=s[3],K=s[7],Q=s[11],dt=s[15];return r[0]=a*E+o*x+c*F+l*k,r[4]=a*C+o*R+c*O+l*K,r[8]=a*w+o*P+c*V+l*Q,r[12]=a*g+o*U+c*G+l*dt,r[1]=h*E+d*x+p*F+m*k,r[5]=h*C+d*R+p*O+m*K,r[9]=h*w+d*P+p*V+m*Q,r[13]=h*g+d*U+p*G+m*dt,r[2]=M*E+S*x+u*F+f*k,r[6]=M*C+S*R+u*O+f*K,r[10]=M*w+S*P+u*V+f*Q,r[14]=M*g+S*U+u*G+f*dt,r[3]=y*E+v*x+_*F+b*k,r[7]=y*C+v*R+_*O+b*K,r[11]=y*w+v*P+_*V+b*Q,r[15]=y*g+v*U+_*G+b*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],p=t[10],m=t[14],M=t[3],S=t[7],u=t[11],f=t[15];return M*(+r*c*d-s*l*d-r*o*p+n*l*p+s*o*m-n*c*m)+S*(+e*c*m-e*l*p+r*a*p-s*a*m+s*l*h-r*c*h)+u*(+e*l*d-e*o*m-r*a*d+n*a*m+r*o*h-n*l*h)+f*(-s*o*h-e*c*d+e*o*p+s*a*d-n*a*p+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],p=t[10],m=t[11],M=t[12],S=t[13],u=t[14],f=t[15],y=d*u*l-S*p*l+S*c*m-o*u*m-d*c*f+o*p*f,v=M*p*l-h*u*l-M*c*m+a*u*m+h*c*f-a*p*f,_=h*S*l-M*d*l+M*o*m-a*S*m-h*o*f+a*d*f,b=M*d*c-h*S*c-M*o*p+a*S*p+h*o*u-a*d*u,E=e*y+n*v+s*_+r*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/E;return t[0]=y*C,t[1]=(S*p*r-d*u*r-S*s*m+n*u*m+d*s*f-n*p*f)*C,t[2]=(o*u*r-S*c*r+S*s*l-n*u*l-o*s*f+n*c*f)*C,t[3]=(d*c*r-o*p*r-d*s*l+n*p*l+o*s*m-n*c*m)*C,t[4]=v*C,t[5]=(h*u*r-M*p*r+M*s*m-e*u*m-h*s*f+e*p*f)*C,t[6]=(M*c*r-a*u*r-M*s*l+e*u*l+a*s*f-e*c*f)*C,t[7]=(a*p*r-h*c*r+h*s*l-e*p*l-a*s*m+e*c*m)*C,t[8]=_*C,t[9]=(M*d*r-h*S*r-M*n*m+e*S*m+h*n*f-e*d*f)*C,t[10]=(a*S*r-M*o*r+M*n*l-e*S*l-a*n*f+e*o*f)*C,t[11]=(h*o*r-a*d*r-h*n*l+e*d*l+a*n*m-e*o*m)*C,t[12]=b*C,t[13]=(h*S*s-M*d*s+M*n*p-e*S*p-h*n*u+e*d*u)*C,t[14]=(M*o*s-a*S*s-M*n*c+e*S*c+a*n*u-e*o*u)*C,t[15]=(a*d*s-h*o*s+h*n*c-e*d*c-a*n*p+e*o*p)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,p=r*l,m=r*h,M=r*d,S=a*h,u=a*d,f=o*d,y=c*l,v=c*h,_=c*d,b=n.x,E=n.y,C=n.z;return s[0]=(1-(S+f))*b,s[1]=(m+_)*b,s[2]=(M-v)*b,s[3]=0,s[4]=(m-_)*E,s[5]=(1-(p+f))*E,s[6]=(u+y)*E,s[7]=0,s[8]=(M+v)*C,s[9]=(u-y)*C,s[10]=(1-(p+S))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Wi.set(s[0],s[1],s[2]).length();const a=Wi.set(s[4],s[5],s[6]).length(),o=Wi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],xn.copy(this);const l=1/r,h=1/a,d=1/o;return xn.elements[0]*=l,xn.elements[1]*=l,xn.elements[2]*=l,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=d,xn.elements[9]*=d,xn.elements[10]*=d,e.setFromRotationMatrix(xn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Nn,c=!1){const l=this.elements,h=2*r/(e-t),d=2*r/(n-s),p=(e+t)/(e-t),m=(n+s)/(n-s);let M,S;if(c)M=r/(a-r),S=a*r/(a-r);else if(o===Nn)M=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===oa)M=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=M,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Nn,c=!1){const l=this.elements,h=2/(e-t),d=2/(n-s),p=-(e+t)/(e-t),m=-(n+s)/(n-s);let M,S;if(c)M=1/(a-r),S=a/(a-r);else if(o===Nn)M=-2/(a-r),S=-(a+r)/(a-r);else if(o===oa)M=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=d,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=M,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Wi=new N,xn=new Kt,ku=new N(0,0,0),Vu=new N(1,1,1),ti=new N,_r=new N,tn=new N,Yl=new Kt,Kl=new Fi;class on{constructor(t=0,e=0,n=0,s=on.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],p=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(qt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-qt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Yl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Kl.setFromEuler(this),this.setFromQuaternion(Kl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}on.DEFAULT_ORDER="XYZ";class ph{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Hu=0;const $l=new N,Xi=new Fi,Hn=new Kt,vr=new N,Us=new N,Gu=new N,Wu=new Fi,jl=new N(1,0,0),Zl=new N(0,1,0),Jl=new N(0,0,1),Ql={type:"added"},Xu={type:"removed"},qi={type:"childadded",child:null},Pa={type:"childremoved",child:null};class we extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=we.DEFAULT_UP.clone();const t=new N,e=new on,n=new Fi,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Kt},normalMatrix:{value:new zt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=we.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ph,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xi.setFromAxisAngle(t,e),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(t,e){return Xi.setFromAxisAngle(t,e),this.quaternion.premultiply(Xi),this}rotateX(t){return this.rotateOnAxis(jl,t)}rotateY(t){return this.rotateOnAxis(Zl,t)}rotateZ(t){return this.rotateOnAxis(Jl,t)}translateOnAxis(t,e){return $l.copy(t).applyQuaternion(this.quaternion),this.position.add($l.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(jl,t)}translateY(t){return this.translateOnAxis(Zl,t)}translateZ(t){return this.translateOnAxis(Jl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?vr.copy(t):vr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Us,vr,this.up):Hn.lookAt(vr,Us,this.up),this.quaternion.setFromRotationMatrix(Hn),s&&(Hn.extractRotation(s.matrixWorld),Xi.setFromRotationMatrix(Hn),this.quaternion.premultiply(Xi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ql),qi.child=t,this.dispatchEvent(qi),qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xu),Pa.child=t,this.dispatchEvent(Pa),Pa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ql),qi.child=t,this.dispatchEvent(qi),qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,t,Gu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,Wu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),p=a(t.skeletons),m=a(t.animations),M=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),M.length>0&&(n.nodes=M)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}we.DEFAULT_UP=new N(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new N,Gn=new N,Da=new N,Wn=new N,Yi=new N,Ki=new N,tc=new N,La=new N,Ua=new N,Ia=new N,Na=new le,Fa=new le,Oa=new le;class dn{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Mn.subVectors(t,e),s.cross(Mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Mn.subVectors(s,e),Gn.subVectors(n,e),Da.subVectors(t,e);const a=Mn.dot(Mn),o=Mn.dot(Gn),c=Mn.dot(Da),l=Gn.dot(Gn),h=Gn.dot(Da),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const p=1/d,m=(l*c-o*h)*p,M=(a*h-o*c)*p;return r.set(1-m-M,M,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Wn.x),c.addScaledVector(a,Wn.y),c.addScaledVector(o,Wn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Na.setScalar(0),Fa.setScalar(0),Oa.setScalar(0),Na.fromBufferAttribute(t,e),Fa.fromBufferAttribute(t,n),Oa.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Na,r.x),a.addScaledVector(Fa,r.y),a.addScaledVector(Oa,r.z),a}static isFrontFacing(t,e,n,s){return Mn.subVectors(n,e),Gn.subVectors(t,e),Mn.cross(Gn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),Mn.cross(Gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return dn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return dn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Yi.subVectors(s,n),Ki.subVectors(r,n),La.subVectors(t,n);const c=Yi.dot(La),l=Ki.dot(La);if(c<=0&&l<=0)return e.copy(n);Ua.subVectors(t,s);const h=Yi.dot(Ua),d=Ki.dot(Ua);if(h>=0&&d<=h)return e.copy(s);const p=c*d-h*l;if(p<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Yi,a);Ia.subVectors(t,r);const m=Yi.dot(Ia),M=Ki.dot(Ia);if(M>=0&&m<=M)return e.copy(r);const S=m*l-c*M;if(S<=0&&l>=0&&M<=0)return o=l/(l-M),e.copy(n).addScaledVector(Ki,o);const u=h*M-m*d;if(u<=0&&d-h>=0&&m-M>=0)return tc.subVectors(r,s),o=(d-h)/(d-h+(m-M)),e.copy(s).addScaledVector(tc,o);const f=1/(u+S+p);return a=S*f,o=p*f,e.copy(n).addScaledVector(Yi,a).addScaledVector(Ki,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const mh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},xr={h:0,s:0,l:0};function za(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=$t.workingColorSpace){if(t=Pu(t,1),e=qt(e,0,1),n=qt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=za(a,r,t+1/3),this.g=za(a,r,t),this.b=za(a,r,t-1/3)}return $t.colorSpaceToWorking(this,s),this}setStyle(t,e=$e){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){const n=mh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$n(t.r),this.g=$n(t.g),this.b=$n(t.b),this}copyLinearToSRGB(t){return this.r=ps(t.r),this.g=ps(t.g),this.b=ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return $t.workingToColorSpace(ze.copy(this),t),Math.round(qt(ze.r*255,0,255))*65536+Math.round(qt(ze.g*255,0,255))*256+Math.round(qt(ze.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.workingToColorSpace(ze.copy(this),e);const n=ze.r,s=ze.g,r=ze.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.workingToColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=$e){$t.workingToColorSpace(ze.copy(this),t);const e=ze.r,n=ze.g,s=ze.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ei),this.setHSL(ei.h+t,ei.s+e,ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ei),t.getHSL(xr);const n=Ma(ei.h,xr.h,e),s=Ma(ei.s,xr.s,e),r=Ma(ei.l,xr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ze=new ht;ht.NAMES=mh;let qu=0;class pi extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=ai(),this.name="",this.type="Material",this.blending=Li,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oo,this.blendDst=lo,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bi,this.stencilZFail=Bi,this.stencilZPass=Bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Li&&(n.blending=this.blending),this.side!==hi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==oo&&(n.blendSrc=this.blendSrc),this.blendDst!==lo&&(n.blendDst=this.blendDst),this.blendEquation!==Ri&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ms extends pi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=ol,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Se=new N,Mr=new bt;let Yu=0;class Ee{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ko,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Mr.fromBufferAttribute(this,e),Mr.applyMatrix3(t),this.setXY(e,Mr.x,Mr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ln(e,this.array)),e}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ln(e,this.array)),e}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ln(e,this.array)),e}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ln(e,this.array)),e}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array),r=se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ko&&(t.usage=this.usage),t}}class gh extends Ee{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class _h extends Ee{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class kt extends Ee{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ku=0;const hn=new Kt,Ba=new we,$i=new N,en=new Oi,Is=new Oi,De=new N;class he extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(uh(t)?_h:gh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,n){return hn.makeTranslation(t,e,n),this.applyMatrix4(hn),this}scale(t,e,n){return hn.makeScale(t,e,n),this.applyMatrix4(hn),this}lookAt(t){return Ba.lookAt(t),Ba.updateMatrix(),this.applyMatrix4(Ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new kt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new As);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Is.setFromBufferAttribute(o),this.morphTargetsRelative?(De.addVectors(en.min,Is.min),en.expandByPoint(De),De.addVectors(en.max,Is.max),en.expandByPoint(De)):(en.expandByPoint(Is.min),en.expandByPoint(Is.max))}en.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)De.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(De));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)De.fromBufferAttribute(o,l),c&&($i.fromBufferAttribute(t,l),De.add($i)),s=Math.max(s,n.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ee(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let w=0;w<n.count;w++)o[w]=new N,c[w]=new N;const l=new N,h=new N,d=new N,p=new bt,m=new bt,M=new bt,S=new N,u=new N;function f(w,g,x){l.fromBufferAttribute(n,w),h.fromBufferAttribute(n,g),d.fromBufferAttribute(n,x),p.fromBufferAttribute(r,w),m.fromBufferAttribute(r,g),M.fromBufferAttribute(r,x),h.sub(l),d.sub(l),m.sub(p),M.sub(p);const R=1/(m.x*M.y-M.x*m.y);isFinite(R)&&(S.copy(h).multiplyScalar(M.y).addScaledVector(d,-m.y).multiplyScalar(R),u.copy(d).multiplyScalar(m.x).addScaledVector(h,-M.x).multiplyScalar(R),o[w].add(S),o[g].add(S),o[x].add(S),c[w].add(u),c[g].add(u),c[x].add(u))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let w=0,g=y.length;w<g;++w){const x=y[w],R=x.start,P=x.count;for(let U=R,F=R+P;U<F;U+=3)f(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const v=new N,_=new N,b=new N,E=new N;function C(w){b.fromBufferAttribute(s,w),E.copy(b);const g=o[w];v.copy(g),v.sub(b.multiplyScalar(b.dot(g))).normalize(),_.crossVectors(E,g);const R=_.dot(c[w])<0?-1:1;a.setXYZW(w,v.x,v.y,v.z,R)}for(let w=0,g=y.length;w<g;++w){const x=y[w],R=x.start,P=x.count;for(let U=R,F=R+P;U<F;U+=3)C(t.getX(U+0)),C(t.getX(U+1)),C(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ee(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const s=new N,r=new N,a=new N,o=new N,c=new N,l=new N,h=new N,d=new N;if(t)for(let p=0,m=t.count;p<m;p+=3){const M=t.getX(p+0),S=t.getX(p+1),u=t.getX(p+2);s.fromBufferAttribute(e,M),r.fromBufferAttribute(e,S),a.fromBufferAttribute(e,u),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,M),c.fromBufferAttribute(n,S),l.fromBufferAttribute(n,u),o.add(h),c.add(h),l.add(h),n.setXYZ(M,o.x,o.y,o.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(u,l.x,l.y,l.z)}else for(let p=0,m=e.count;p<m;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,d=o.normalized,p=new l.constructor(c.length*h);let m=0,M=0;for(let S=0,u=c.length;S<u;S++){o.isInterleavedBufferAttribute?m=c[S]*o.data.stride+o.offset:m=c[S]*h;for(let f=0;f<h;f++)p[M++]=l[m++]}return new Ee(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new he,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){const p=l[h],m=t(p,n);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,p=l.length;d<p;d++){const m=l[d];h.push(m.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],d=r[l];for(let p=0,m=d.length;p<m;p++)h.push(d[p].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ec=new Kt,Mi=new dh,Sr=new As,nc=new N,yr=new N,Er=new N,br=new N,ka=new N,Tr=new N,ic=new N,wr=new N;class Jt extends we{constructor(t=new he,e=new ms){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Tr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],d=r[c];h!==0&&(ka.fromBufferAttribute(d,t),a?Tr.addScaledVector(ka,h):Tr.addScaledVector(ka.sub(e),h))}e.add(Tr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(r),Mi.copy(t.ray).recast(t.near),!(Sr.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(Sr,nc)===null||Mi.origin.distanceToSquared(nc)>(t.far-t.near)**2))&&(ec.copy(r).invert(),Mi.copy(t.ray).applyMatrix4(ec),!(n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Mi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,p=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let M=0,S=p.length;M<S;M++){const u=p[M],f=a[u.materialIndex],y=Math.max(u.start,m.start),v=Math.min(o.count,Math.min(u.start+u.count,m.start+m.count));for(let _=y,b=v;_<b;_+=3){const E=o.getX(_),C=o.getX(_+1),w=o.getX(_+2);s=Ar(this,f,t,n,l,h,d,E,C,w),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=u.materialIndex,e.push(s))}}else{const M=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let u=M,f=S;u<f;u+=3){const y=o.getX(u),v=o.getX(u+1),_=o.getX(u+2);s=Ar(this,a,t,n,l,h,d,y,v,_),s&&(s.faceIndex=Math.floor(u/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let M=0,S=p.length;M<S;M++){const u=p[M],f=a[u.materialIndex],y=Math.max(u.start,m.start),v=Math.min(c.count,Math.min(u.start+u.count,m.start+m.count));for(let _=y,b=v;_<b;_+=3){const E=_,C=_+1,w=_+2;s=Ar(this,f,t,n,l,h,d,E,C,w),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=u.materialIndex,e.push(s))}}else{const M=Math.max(0,m.start),S=Math.min(c.count,m.start+m.count);for(let u=M,f=S;u<f;u+=3){const y=u,v=u+1,_=u+2;s=Ar(this,a,t,n,l,h,d,y,v,_),s&&(s.faceIndex=Math.floor(u/3),e.push(s))}}}}function $u(i,t,e,n,s,r,a,o){let c;if(t.side===Ye?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===hi,o),c===null)return null;wr.copy(o),wr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(wr);return l<e.near||l>e.far?null:{distance:l,point:wr.clone(),object:i}}function Ar(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,yr),i.getVertexPosition(c,Er),i.getVertexPosition(l,br);const h=$u(i,t,e,n,yr,Er,br,ic);if(h){const d=new N;dn.getBarycoord(ic,yr,Er,br,d),s&&(h.uv=dn.getInterpolatedAttribute(s,o,c,l,d,new bt)),r&&(h.uv1=dn.getInterpolatedAttribute(r,o,c,l,d,new bt)),a&&(h.normal=dn.getInterpolatedAttribute(a,o,c,l,d,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:c,c:l,normal:new N,materialIndex:0};dn.getNormal(yr,Er,br,p.normal),h.face=p,h.barycoord=d}return h}class mi extends he{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],d=[];let p=0,m=0;M("z","y","x",-1,-1,n,e,t,a,r,0),M("z","y","x",1,-1,n,e,-t,a,r,1),M("x","z","y",1,1,t,n,e,s,a,2),M("x","z","y",1,-1,t,n,-e,s,a,3),M("x","y","z",1,-1,t,e,n,s,r,4),M("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new kt(l,3)),this.setAttribute("normal",new kt(h,3)),this.setAttribute("uv",new kt(d,2));function M(S,u,f,y,v,_,b,E,C,w,g){const x=_/C,R=b/w,P=_/2,U=b/2,F=E/2,O=C+1,V=w+1;let G=0,k=0;const K=new N;for(let Q=0;Q<V;Q++){const dt=Q*R-U;for(let Ut=0;Ut<O;Ut++){const Ft=Ut*x-P;K[S]=Ft*y,K[u]=dt*v,K[f]=F,l.push(K.x,K.y,K.z),K[S]=0,K[u]=0,K[f]=E>0?1:-1,h.push(K.x,K.y,K.z),d.push(Ut/C),d.push(1-Q/w),G+=1}}for(let Q=0;Q<w;Q++)for(let dt=0;dt<C;dt++){const Ut=p+dt+O*Q,Ft=p+dt+O*(Q+1),ue=p+(dt+1)+O*(Q+1),Qt=p+(dt+1)+O*Q;c.push(Ut,Ft,Qt),c.push(Ft,ue,Qt),k+=6}o.addGroup(m,k,g),m+=k,p+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Es(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ge(i){const t={};for(let e=0;e<i.length;e++){const n=Es(i[e]);for(const s in n)t[s]=n[s]}return t}function ju(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function vh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}const nr={clone:Es,merge:Ge};var Zu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ju=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Me extends pi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zu,this.fragmentShader=Ju,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Es(t.uniforms),this.uniformsGroups=ju(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class xh extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ni=new N,sc=new bt,rc=new bt;class fn extends xh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=$o*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(xa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $o*2*Math.atan(Math.tan(xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ni.x,ni.y).multiplyScalar(-t/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-t/ni.z)}getViewSize(t,e){return this.getViewBounds(t,sc,rc),e.subVectors(rc,sc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(xa*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ji=-90,Zi=1;class Qu extends we{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new fn(ji,Zi,t,e);s.layers=this.layers,this.add(s);const r=new fn(ji,Zi,t,e);r.layers=this.layers,this.add(r);const a=new fn(ji,Zi,t,e);a.layers=this.layers,this.add(a);const o=new fn(ji,Zi,t,e);o.layers=this.layers,this.add(o);const c=new fn(ji,Zi,t,e);c.layers=this.layers,this.add(c);const l=new fn(ji,Zi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===oa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,p,m),t.xr.enabled=M,n.texture.needsPMREMUpdate=!0}}class Mh extends Ne{constructor(t=[],e=xs,n,s,r,a,o,c,l,h){super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class tf extends gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Mh(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new mi(5,5,5),r=new Me({name:"CubemapFromEquirect",uniforms:Es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ye,blending:Kn});r.uniforms.tEquirect.value=e;const a=new Jt(s,r),o=e.minFilter;return e.minFilter===Yn&&(e.minFilter=sn),new Qu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class bn extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ef={type:"move"};class Va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const S of t.hand.values()){const u=e.getJointPose(S,n),f=this._getHandJoint(l,S);u!==null&&(f.matrix.fromArray(u.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=u.radius),f.visible=u!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=h.position.distanceTo(d.position),m=.02,M=.005;l.inputState.pinching&&p>m+M?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=m-M&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ef)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new bn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class vl{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ht(t),this.density=e}clone(){return new vl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Sh extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class nf{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ko,this.updateRanges=[],this.version=0,this.uuid=ai()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const He=new N;class la{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ln(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ln(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ln(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ln(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array),r=se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ee(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new la(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class yh extends pi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ji;const Ns=new N,Qi=new N,ts=new N,es=new bt,Fs=new bt,Eh=new Kt,Rr=new N,Os=new N,Cr=new N,ac=new bt,Ha=new bt,oc=new bt;class sf extends we{constructor(t=new yh){if(super(),this.isSprite=!0,this.type="Sprite",Ji===void 0){Ji=new he;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new nf(e,5);Ji.setIndex([0,1,2,0,2,3]),Ji.setAttribute("position",new la(n,3,0,!1)),Ji.setAttribute("uv",new la(n,2,3,!1))}this.geometry=Ji,this.material=t,this.center=new bt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Qi.setFromMatrixScale(this.matrixWorld),Eh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ts.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qi.multiplyScalar(-ts.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Pr(Rr.set(-.5,-.5,0),ts,a,Qi,s,r),Pr(Os.set(.5,-.5,0),ts,a,Qi,s,r),Pr(Cr.set(.5,.5,0),ts,a,Qi,s,r),ac.set(0,0),Ha.set(1,0),oc.set(1,1);let o=t.ray.intersectTriangle(Rr,Os,Cr,!1,Ns);if(o===null&&(Pr(Os.set(-.5,.5,0),ts,a,Qi,s,r),Ha.set(0,1),o=t.ray.intersectTriangle(Rr,Cr,Os,!1,Ns),o===null))return;const c=t.ray.origin.distanceTo(Ns);c<t.near||c>t.far||e.push({distance:c,point:Ns.clone(),uv:dn.getInterpolation(Ns,Rr,Os,Cr,ac,Ha,oc,new bt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Pr(i,t,e,n,s,r){es.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Fs.x=r*es.x-s*es.y,Fs.y=s*es.x+r*es.y):Fs.copy(es),i.copy(t),i.x+=Fs.x,i.y+=Fs.y,i.applyMatrix4(Eh)}class xl extends Ne{constructor(t=null,e=1,n=1,s,r,a,o,c,l=an,h=an,d,p){super(null,a,o,c,l,h,s,r,d,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lc extends Ee{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ns=new Kt,cc=new Kt,Dr=[],hc=new Oi,rf=new Kt,zs=new Jt,Bs=new As;class as extends Jt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new lc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,rf)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Oi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ns),hc.copy(t.boundingBox).applyMatrix4(ns),this.boundingBox.union(hc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new As),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ns),Bs.copy(t.boundingSphere).applyMatrix4(ns),this.boundingSphere.union(Bs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(zs.geometry=this.geometry,zs.material=this.material,zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bs.copy(this.boundingSphere),Bs.applyMatrix4(n),t.ray.intersectsSphere(Bs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ns),cc.multiplyMatrices(n,ns),zs.matrixWorld=cc,zs.raycast(t,Dr);for(let a=0,o=Dr.length;a<o;a++){const c=Dr[a];c.instanceId=r,c.object=this,e.push(c)}Dr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new lc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new xl(new Float32Array(s*this.count),s,this.count,fl,In));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ga=new N,af=new N,of=new zt;class bi{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ga.subVectors(n,e).cross(af.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ga),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||of.getNormalMatrix(t),s=this.coplanarPoint(Ga).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new As,lf=new bt(.5,.5),Lr=new N;class Ml{constructor(t=new bi,e=new bi,n=new bi,s=new bi,r=new bi,a=new bi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Nn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],p=r[6],m=r[7],M=r[8],S=r[9],u=r[10],f=r[11],y=r[12],v=r[13],_=r[14],b=r[15];if(s[0].setComponents(l-a,m-h,f-M,b-y).normalize(),s[1].setComponents(l+a,m+h,f+M,b+y).normalize(),s[2].setComponents(l+o,m+d,f+S,b+v).normalize(),s[3].setComponents(l-o,m-d,f-S,b-v).normalize(),n)s[4].setComponents(c,p,u,_).normalize(),s[5].setComponents(l-c,m-p,f-u,b-_).normalize();else if(s[4].setComponents(l-c,m-p,f-u,b-_).normalize(),e===Nn)s[5].setComponents(l+c,m+p,f+u,b+_).normalize();else if(e===oa)s[5].setComponents(c,p,u,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(t){Si.center.set(0,0,0);const e=lf.distanceTo(t.center);return Si.radius=.7071067811865476+e,Si.applyMatrix4(t.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Lr.x=s.normal.x>0?t.max.x:t.min.x,Lr.y=s.normal.y>0?t.max.y:t.min.y,Lr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Lr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cf extends pi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const uc=new Kt,jo=new dh,Ur=new As,Ir=new N;class hf extends we{constructor(t=new he,e=new cf){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(s),Ur.radius+=r,t.ray.intersectsSphere(Ur)===!1)return;uc.copy(s).invert(),jo.copy(t.ray).applyMatrix4(uc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){const p=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let M=p,S=m;M<S;M++){const u=l.getX(M);Ir.fromBufferAttribute(d,u),fc(Ir,u,c,s,t,e,this)}}else{const p=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let M=p,S=m;M<S;M++)Ir.fromBufferAttribute(d,M),fc(Ir,M,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function fc(i,t,e,n,s,r,a){const o=jo.distanceSqToPoint(i);if(o<e){const c=new N;jo.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class uf extends Ne{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bh extends Ne{constructor(t,e,n=Ui,s,r,a,o=an,c=an,l,h=Js,d=1){if(h!==Js&&h!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:t,height:e,depth:d};super(p,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new _l(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Th extends Ne{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class oi extends he{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],p=[],m=[];let M=0;const S=[],u=n/2;let f=0;y(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new kt(d,3)),this.setAttribute("normal",new kt(p,3)),this.setAttribute("uv",new kt(m,2));function y(){const _=new N,b=new N;let E=0;const C=(e-t)/n;for(let w=0;w<=r;w++){const g=[],x=w/r,R=x*(e-t)+t;for(let P=0;P<=s;P++){const U=P/s,F=U*c+o,O=Math.sin(F),V=Math.cos(F);b.x=R*O,b.y=-x*n+u,b.z=R*V,d.push(b.x,b.y,b.z),_.set(O,C,V).normalize(),p.push(_.x,_.y,_.z),m.push(U,1-x),g.push(M++)}S.push(g)}for(let w=0;w<s;w++)for(let g=0;g<r;g++){const x=S[g][w],R=S[g+1][w],P=S[g+1][w+1],U=S[g][w+1];(t>0||g!==0)&&(h.push(x,R,U),E+=3),(e>0||g!==r-1)&&(h.push(R,P,U),E+=3)}l.addGroup(f,E,0),f+=E}function v(_){const b=M,E=new bt,C=new N;let w=0;const g=_===!0?t:e,x=_===!0?1:-1;for(let P=1;P<=s;P++)d.push(0,u*x,0),p.push(0,x,0),m.push(.5,.5),M++;const R=M;for(let P=0;P<=s;P++){const F=P/s*c+o,O=Math.cos(F),V=Math.sin(F);C.x=g*V,C.y=u*x,C.z=g*O,d.push(C.x,C.y,C.z),p.push(0,x,0),E.x=O*.5+.5,E.y=V*.5*x+.5,m.push(E.x,E.y),M++}for(let P=0;P<s;P++){const U=b+P,F=R+P;_===!0?h.push(F,F+1,U):h.push(F+1,F,U),w+=3}l.addGroup(f,w,_===!0?1:2),f+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class fa extends oi{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new fa(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Sl extends he{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new kt(r,3)),this.setAttribute("normal",new kt(r.slice(),3)),this.setAttribute("uv",new kt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const v=new N,_=new N,b=new N;for(let E=0;E<e.length;E+=3)m(e[E+0],v),m(e[E+1],_),m(e[E+2],b),c(v,_,b,y)}function c(y,v,_,b){const E=b+1,C=[];for(let w=0;w<=E;w++){C[w]=[];const g=y.clone().lerp(_,w/E),x=v.clone().lerp(_,w/E),R=E-w;for(let P=0;P<=R;P++)P===0&&w===E?C[w][P]=g:C[w][P]=g.clone().lerp(x,P/R)}for(let w=0;w<E;w++)for(let g=0;g<2*(E-w)-1;g++){const x=Math.floor(g/2);g%2===0?(p(C[w][x+1]),p(C[w+1][x]),p(C[w][x])):(p(C[w][x+1]),p(C[w+1][x+1]),p(C[w+1][x]))}}function l(y){const v=new N;for(let _=0;_<r.length;_+=3)v.x=r[_+0],v.y=r[_+1],v.z=r[_+2],v.normalize().multiplyScalar(y),r[_+0]=v.x,r[_+1]=v.y,r[_+2]=v.z}function h(){const y=new N;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];const _=u(y)/2/Math.PI+.5,b=f(y)/Math.PI+.5;a.push(_,1-b)}M(),d()}function d(){for(let y=0;y<a.length;y+=6){const v=a[y+0],_=a[y+2],b=a[y+4],E=Math.max(v,_,b),C=Math.min(v,_,b);E>.9&&C<.1&&(v<.2&&(a[y+0]+=1),_<.2&&(a[y+2]+=1),b<.2&&(a[y+4]+=1))}}function p(y){r.push(y.x,y.y,y.z)}function m(y,v){const _=y*3;v.x=t[_+0],v.y=t[_+1],v.z=t[_+2]}function M(){const y=new N,v=new N,_=new N,b=new N,E=new bt,C=new bt,w=new bt;for(let g=0,x=0;g<r.length;g+=9,x+=6){y.set(r[g+0],r[g+1],r[g+2]),v.set(r[g+3],r[g+4],r[g+5]),_.set(r[g+6],r[g+7],r[g+8]),E.set(a[x+0],a[x+1]),C.set(a[x+2],a[x+3]),w.set(a[x+4],a[x+5]),b.copy(y).add(v).add(_).divideScalar(3);const R=u(b);S(E,x+0,y,R),S(C,x+2,v,R),S(w,x+4,_,R)}}function S(y,v,_,b){b<0&&y.x===1&&(a[v]=y.x-1),_.x===0&&_.z===0&&(a[v]=b/2/Math.PI+.5)}function u(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sl(t.vertices,t.indices,t.radius,t.details)}}class da extends Sl{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new da(t.radius,t.detail)}}class li extends he{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=t/o,p=e/c,m=[],M=[],S=[],u=[];for(let f=0;f<h;f++){const y=f*p-a;for(let v=0;v<l;v++){const _=v*d-r;M.push(_,-y,0),S.push(0,0,1),u.push(v/o),u.push(1-f/c)}}for(let f=0;f<c;f++)for(let y=0;y<o;y++){const v=y+l*f,_=y+l*(f+1),b=y+1+l*(f+1),E=y+1+l*f;m.push(v,_,E),m.push(_,b,E)}this.setIndex(m),this.setAttribute("position",new kt(M,3)),this.setAttribute("normal",new kt(S,3)),this.setAttribute("uv",new kt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new li(t.width,t.height,t.widthSegments,t.heightSegments)}}class ar extends he{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new N,p=new N,m=[],M=[],S=[],u=[];for(let f=0;f<=n;f++){const y=[],v=f/n;let _=0;f===0&&a===0?_=.5/e:f===n&&c===Math.PI&&(_=-.5/e);for(let b=0;b<=e;b++){const E=b/e;d.x=-t*Math.cos(s+E*r)*Math.sin(a+v*o),d.y=t*Math.cos(a+v*o),d.z=t*Math.sin(s+E*r)*Math.sin(a+v*o),M.push(d.x,d.y,d.z),p.copy(d).normalize(),S.push(p.x,p.y,p.z),u.push(E+_,1-v),y.push(l++)}h.push(y)}for(let f=0;f<n;f++)for(let y=0;y<e;y++){const v=h[f][y+1],_=h[f][y],b=h[f+1][y],E=h[f+1][y+1];(f!==0||a>0)&&m.push(v,_,E),(f!==n-1||c<Math.PI)&&m.push(_,b,E)}this.setIndex(m),this.setAttribute("position",new kt(M,3)),this.setAttribute("normal",new kt(S,3)),this.setAttribute("uv",new kt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ar(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ff extends Me{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class si extends pi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gl,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Qr extends pi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gl,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=ol,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class df extends pi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class pf extends pi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Wa={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class mf{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){const d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,p=l.length;d<p;d+=2){const m=l[d],M=l[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return M}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const gf=new mf;class yl{constructor(t){this.manager=t!==void 0?t:gf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}yl.DEFAULT_MATERIAL_NAME="__DEFAULT";const is=new WeakMap;class _f extends yl{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Wa.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let d=is.get(a);d===void 0&&(d=[],is.set(a,d)),d.push({onLoad:e,onError:s})}return a}const o=tr("img");function c(){h(),e&&e(this);const d=is.get(this)||[];for(let p=0;p<d.length;p++){const m=d[p];m.onLoad&&m.onLoad(this)}is.delete(this),r.manager.itemEnd(t)}function l(d){h(),s&&s(d),Wa.remove(`image:${t}`);const p=is.get(this)||[];for(let m=0;m<p.length;m++){const M=p[m];M.onError&&M.onError(d)}is.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Wa.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}}class vf extends yl{constructor(t){super(t)}load(t,e,n,s){const r=new Ne,a=new _f(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class wh extends we{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class xf extends wh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Xa=new Kt,dc=new N,pc=new N;class Mf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.mapType=On,this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ml,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;dc.setFromMatrixPosition(t.matrixWorld),e.position.copy(dc),pc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(pc),e.updateMatrixWorld(),Xa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xa,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class El extends xh{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Sf extends Mf{constructor(){super(new El(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yf extends wh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.shadow=new Sf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ef extends fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class bf{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function mc(i,t,e,n){const s=Tf(n);switch(e){case oh:return i*t;case fl:return i*t/s.components*s.byteLength;case dl:return i*t/s.components*s.byteLength;case ch:return i*t*2/s.components*s.byteLength;case pl:return i*t*2/s.components*s.byteLength;case lh:return i*t*3/s.components*s.byteLength;case rn:return i*t*4/s.components*s.byteLength;case ml:return i*t*4/s.components*s.byteLength;case $r:case jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Zr:case Jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case So:case Eo:return Math.max(i,16)*Math.max(t,8)/4;case Mo:case yo:return Math.max(i,8)*Math.max(t,8)/2;case bo:case To:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ro:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Co:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Po:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Do:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Lo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Uo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Io:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case No:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case zo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Bo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ko:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Vo:case Ho:case Go:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Wo:case Xo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case qo:case Yo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Tf(i){switch(i){case On:case ih:return{byteLength:1,components:1};case js:case sh:case Fn:return{byteLength:2,components:1};case hl:case ul:return{byteLength:2,components:4};case Ui:case cl:case In:return{byteLength:4,components:1};case rh:case ah:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:al}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=al);function Ah(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function wf(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,d=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((m,M)=>m.start-M.start);let p=0;for(let m=1;m<d.length;m++){const M=d[p],S=d[m];S.start<=M.start+M.count+1?M.count=Math.max(M.count,S.start+S.count-M.start):(++p,d[p]=S)}d.length=p+1;for(let m=0,M=d.length;m<M;m++){const S=d[m];i.bufferSubData(l,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Af=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Cf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Df=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,If=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ff=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Of=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,kf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Vf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$f=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,jf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,td=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ed=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,id="gl_FragColor = linearToOutputTexel( gl_FragColor );",sd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ad=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,od=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ld=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ud=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,md=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_d=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Md=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ed=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Td=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ad=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Rd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ld=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ud=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Id=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Fd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Od=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Gd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Xd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$d=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ep=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,np=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ip=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ap=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,op=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,cp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,up=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_p=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Tp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ap=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Up=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ip=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Np=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Op=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Vp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Xp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Yp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Kp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$p=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Zp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,em=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,im=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ht={alphahash_fragment:Af,alphahash_pars_fragment:Rf,alphamap_fragment:Cf,alphamap_pars_fragment:Pf,alphatest_fragment:Df,alphatest_pars_fragment:Lf,aomap_fragment:Uf,aomap_pars_fragment:If,batching_pars_vertex:Nf,batching_vertex:Ff,begin_vertex:Of,beginnormal_vertex:zf,bsdfs:Bf,iridescence_fragment:kf,bumpmap_pars_fragment:Vf,clipping_planes_fragment:Hf,clipping_planes_pars_fragment:Gf,clipping_planes_pars_vertex:Wf,clipping_planes_vertex:Xf,color_fragment:qf,color_pars_fragment:Yf,color_pars_vertex:Kf,color_vertex:$f,common:jf,cube_uv_reflection_fragment:Zf,defaultnormal_vertex:Jf,displacementmap_pars_vertex:Qf,displacementmap_vertex:td,emissivemap_fragment:ed,emissivemap_pars_fragment:nd,colorspace_fragment:id,colorspace_pars_fragment:sd,envmap_fragment:rd,envmap_common_pars_fragment:ad,envmap_pars_fragment:od,envmap_pars_vertex:ld,envmap_physical_pars_fragment:xd,envmap_vertex:cd,fog_vertex:hd,fog_pars_vertex:ud,fog_fragment:fd,fog_pars_fragment:dd,gradientmap_pars_fragment:pd,lightmap_pars_fragment:md,lights_lambert_fragment:gd,lights_lambert_pars_fragment:_d,lights_pars_begin:vd,lights_toon_fragment:Md,lights_toon_pars_fragment:Sd,lights_phong_fragment:yd,lights_phong_pars_fragment:Ed,lights_physical_fragment:bd,lights_physical_pars_fragment:Td,lights_fragment_begin:wd,lights_fragment_maps:Ad,lights_fragment_end:Rd,logdepthbuf_fragment:Cd,logdepthbuf_pars_fragment:Pd,logdepthbuf_pars_vertex:Dd,logdepthbuf_vertex:Ld,map_fragment:Ud,map_pars_fragment:Id,map_particle_fragment:Nd,map_particle_pars_fragment:Fd,metalnessmap_fragment:Od,metalnessmap_pars_fragment:zd,morphinstance_vertex:Bd,morphcolor_vertex:kd,morphnormal_vertex:Vd,morphtarget_pars_vertex:Hd,morphtarget_vertex:Gd,normal_fragment_begin:Wd,normal_fragment_maps:Xd,normal_pars_fragment:qd,normal_pars_vertex:Yd,normal_vertex:Kd,normalmap_pars_fragment:$d,clearcoat_normal_fragment_begin:jd,clearcoat_normal_fragment_maps:Zd,clearcoat_pars_fragment:Jd,iridescence_pars_fragment:Qd,opaque_fragment:tp,packing:ep,premultiplied_alpha_fragment:np,project_vertex:ip,dithering_fragment:sp,dithering_pars_fragment:rp,roughnessmap_fragment:ap,roughnessmap_pars_fragment:op,shadowmap_pars_fragment:lp,shadowmap_pars_vertex:cp,shadowmap_vertex:hp,shadowmask_pars_fragment:up,skinbase_vertex:fp,skinning_pars_vertex:dp,skinning_vertex:pp,skinnormal_vertex:mp,specularmap_fragment:gp,specularmap_pars_fragment:_p,tonemapping_fragment:vp,tonemapping_pars_fragment:xp,transmission_fragment:Mp,transmission_pars_fragment:Sp,uv_pars_fragment:yp,uv_pars_vertex:Ep,uv_vertex:bp,worldpos_vertex:Tp,background_vert:wp,background_frag:Ap,backgroundCube_vert:Rp,backgroundCube_frag:Cp,cube_vert:Pp,cube_frag:Dp,depth_vert:Lp,depth_frag:Up,distanceRGBA_vert:Ip,distanceRGBA_frag:Np,equirect_vert:Fp,equirect_frag:Op,linedashed_vert:zp,linedashed_frag:Bp,meshbasic_vert:kp,meshbasic_frag:Vp,meshlambert_vert:Hp,meshlambert_frag:Gp,meshmatcap_vert:Wp,meshmatcap_frag:Xp,meshnormal_vert:qp,meshnormal_frag:Yp,meshphong_vert:Kp,meshphong_frag:$p,meshphysical_vert:jp,meshphysical_frag:Zp,meshtoon_vert:Jp,meshtoon_frag:Qp,points_vert:tm,points_frag:em,shadow_vert:nm,shadow_frag:im,sprite_vert:sm,sprite_frag:rm},at={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},Cn={basic:{uniforms:Ge([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Ge([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new ht(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Ge([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Ge([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Ge([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new ht(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Ge([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Ge([at.points,at.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Ge([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Ge([at.common,at.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Ge([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Ge([at.sprite,at.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Ge([at.common,at.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Ge([at.lights,at.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};Cn.physical={uniforms:Ge([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const Nr={r:0,b:0,g:0},yi=new on,am=new Kt;function om(i,t,e,n,s,r,a){const o=new ht(0);let c=r===!0?0:1,l,h,d=null,p=0,m=null;function M(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?e:t).get(_)),_}function S(v){let _=!1;const b=M(v);b===null?f(o,c):b&&b.isColor&&(f(b,1),_=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function u(v,_){const b=M(_);b&&(b.isCubeTexture||b.mapping===ua)?(h===void 0&&(h=new Jt(new mi(1,1,1),new Me({name:"BackgroundCubeMaterial",uniforms:Es(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),yi.copy(_.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(am.makeRotationFromEuler(yi)),h.material.toneMapped=$t.getTransfer(b.colorSpace)!==ee,(d!==b||p!==b.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=b,p=b.version,m=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Jt(new li(2,2),new Me({name:"BackgroundMaterial",uniforms:Es(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=$t.getTransfer(b.colorSpace)!==ee,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||p!==b.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,d=b,p=b.version,m=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function f(v,_){v.getRGB(Nr,vh(i)),n.buffers.color.setClear(Nr.r,Nr.g,Nr.b,_,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,_=1){o.set(v),c=_,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,f(o,c)},render:S,addToRenderList:u,dispose:y}}function lm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let r=s,a=!1;function o(x,R,P,U,F){let O=!1;const V=d(U,P,R);r!==V&&(r=V,l(r.object)),O=m(x,U,P,F),O&&M(x,U,P,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,_(x,R,P,U),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function d(x,R,P){const U=P.wireframe===!0;let F=n[x.id];F===void 0&&(F={},n[x.id]=F);let O=F[R.id];O===void 0&&(O={},F[R.id]=O);let V=O[U];return V===void 0&&(V=p(c()),O[U]=V),V}function p(x){const R=[],P=[],U=[];for(let F=0;F<e;F++)R[F]=0,P[F]=0,U[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:P,attributeDivisors:U,object:x,attributes:{},index:null}}function m(x,R,P,U){const F=r.attributes,O=R.attributes;let V=0;const G=P.getAttributes();for(const k in G)if(G[k].location>=0){const Q=F[k];let dt=O[k];if(dt===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(dt=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(dt=x.instanceColor)),Q===void 0||Q.attribute!==dt||dt&&Q.data!==dt.data)return!0;V++}return r.attributesNum!==V||r.index!==U}function M(x,R,P,U){const F={},O=R.attributes;let V=0;const G=P.getAttributes();for(const k in G)if(G[k].location>=0){let Q=O[k];Q===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(Q=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(Q=x.instanceColor));const dt={};dt.attribute=Q,Q&&Q.data&&(dt.data=Q.data),F[k]=dt,V++}r.attributes=F,r.attributesNum=V,r.index=U}function S(){const x=r.newAttributes;for(let R=0,P=x.length;R<P;R++)x[R]=0}function u(x){f(x,0)}function f(x,R){const P=r.newAttributes,U=r.enabledAttributes,F=r.attributeDivisors;P[x]=1,U[x]===0&&(i.enableVertexAttribArray(x),U[x]=1),F[x]!==R&&(i.vertexAttribDivisor(x,R),F[x]=R)}function y(){const x=r.newAttributes,R=r.enabledAttributes;for(let P=0,U=R.length;P<U;P++)R[P]!==x[P]&&(i.disableVertexAttribArray(P),R[P]=0)}function v(x,R,P,U,F,O,V){V===!0?i.vertexAttribIPointer(x,R,P,F,O):i.vertexAttribPointer(x,R,P,U,F,O)}function _(x,R,P,U){S();const F=U.attributes,O=P.getAttributes(),V=R.defaultAttributeValues;for(const G in O){const k=O[G];if(k.location>=0){let K=F[G];if(K===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(K=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(K=x.instanceColor)),K!==void 0){const Q=K.normalized,dt=K.itemSize,Ut=t.get(K);if(Ut===void 0)continue;const Ft=Ut.buffer,ue=Ut.type,Qt=Ut.bytesPerElement,$=ue===i.INT||ue===i.UNSIGNED_INT||K.gpuType===cl;if(K.isInterleavedBufferAttribute){const J=K.data,pt=J.stride,Lt=K.offset;if(J.isInstancedInterleavedBuffer){for(let Et=0;Et<k.locationSize;Et++)f(k.location+Et,J.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Et=0;Et<k.locationSize;Et++)u(k.location+Et);i.bindBuffer(i.ARRAY_BUFFER,Ft);for(let Et=0;Et<k.locationSize;Et++)v(k.location+Et,dt/k.locationSize,ue,Q,pt*Qt,(Lt+dt/k.locationSize*Et)*Qt,$)}else{if(K.isInstancedBufferAttribute){for(let J=0;J<k.locationSize;J++)f(k.location+J,K.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let J=0;J<k.locationSize;J++)u(k.location+J);i.bindBuffer(i.ARRAY_BUFFER,Ft);for(let J=0;J<k.locationSize;J++)v(k.location+J,dt/k.locationSize,ue,Q,dt*Qt,dt/k.locationSize*J*Qt,$)}}else if(V!==void 0){const Q=V[G];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(k.location,Q);break;case 3:i.vertexAttrib3fv(k.location,Q);break;case 4:i.vertexAttrib4fv(k.location,Q);break;default:i.vertexAttrib1fv(k.location,Q)}}}}y()}function b(){w();for(const x in n){const R=n[x];for(const P in R){const U=R[P];for(const F in U)h(U[F].object),delete U[F];delete R[P]}delete n[x]}}function E(x){if(n[x.id]===void 0)return;const R=n[x.id];for(const P in R){const U=R[P];for(const F in U)h(U[F].object),delete U[F];delete R[P]}delete n[x.id]}function C(x){for(const R in n){const P=n[R];if(P[x.id]===void 0)continue;const U=P[x.id];for(const F in U)h(U[F].object),delete U[F];delete P[x.id]}}function w(){g(),a=!0,r!==s&&(r=s,l(r.object))}function g(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:g,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfProgram:C,initAttributes:S,enableAttribute:u,disableUnusedAttributes:y}}function cm(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function o(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let m=0;for(let M=0;M<d;M++)m+=h[M];e.update(m,n,1)}function c(l,h,d,p){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let M=0;M<l.length;M++)a(l[M],h[M],p[M]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,h,0,p,0,d);let M=0;for(let S=0;S<d;S++)M+=h[S]*p[S];e.update(M,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function hm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==rn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const w=C===Fn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==On&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==In&&!w)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),u=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=M>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:M,maxTextureSize:S,maxCubemapSize:u,maxAttributes:f,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:b,maxSamples:E}}function um(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new bi,o=new zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const m=d.length!==0||p||n!==0||s;return s=p,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){e=h(d,p,0)},this.setState=function(d,p,m){const M=d.clippingPlanes,S=d.clipIntersection,u=d.clipShadows,f=i.get(d);if(!s||M===null||M.length===0||r&&!u)r?h(null):l();else{const y=r?0:n,v=y*4;let _=f.clippingState||null;c.value=_,_=h(M,p,v,m);for(let b=0;b!==v;++b)_[b]=e[b];f.clippingState=_,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,p,m,M){const S=d!==null?d.length:0;let u=null;if(S!==0){if(u=c.value,M!==!0||u===null){const f=m+S*4,y=p.matrixWorldInverse;o.getNormalMatrix(y),(u===null||u.length<f)&&(u=new Float32Array(f));for(let v=0,_=m;v!==S;++v,_+=4)a.copy(d[v]).applyMatrix4(y,o),a.normal.toArray(u,_),u[_+3]=a.constant}c.value=u,c.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,u}}function fm(i){let t=new WeakMap;function e(a,o){return o===_o?a.mapping=xs:o===vo&&(a.mapping=Ms),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===_o||o===vo)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new tf(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const cs=4,gc=[.125,.215,.35,.446,.526,.582],Ci=20,qa=new El,_c=new ht;let Ya=null,Ka=0,$a=0,ja=!1;const Ti=(1+Math.sqrt(5))/2,ss=1/Ti,vc=[new N(-Ti,ss,0),new N(Ti,ss,0),new N(-ss,0,Ti),new N(ss,0,Ti),new N(0,Ti,-ss),new N(0,Ti,ss),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],dm=new N;class Zo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=dm}=r;Ya=this._renderer.getRenderTarget(),Ka=this._renderer.getActiveCubeFace(),$a=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ya,Ka,$a),this._renderer.xr.enabled=ja,t.scissorTest=!1,Fr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xs||t.mapping===Ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ya=this._renderer.getRenderTarget(),Ka=this._renderer.getActiveCubeFace(),$a=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Fn,format:rn,colorSpace:ys,depthBuffer:!1},s=xc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pm(r)),this._blurMaterial=mm(r,t,e)}return s}_compileMaterial(t){const e=new Jt(this._lodPlanes[0],t);this._renderer.compile(e,qa)}_sceneToCubeUV(t,e,n,s,r){const c=new fn(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,m=d.toneMapping;d.getClearColor(_c),d.toneMapping=ri,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const S=new ms({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1}),u=new Jt(new mi,S);let f=!1;const y=t.background;y?y.isColor&&(S.color.copy(y),t.background=null,f=!0):(S.color.copy(_c),f=!0);for(let v=0;v<6;v++){const _=v%3;_===0?(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[v],r.y,r.z)):_===1?(c.up.set(0,0,l[v]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[v],r.z)):(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[v]));const b=this._cubeSize;Fr(s,_*b,v>2?b:0,b,b),d.setRenderTarget(s),f&&d.render(u,c),d.render(t,c)}u.geometry.dispose(),u.material.dispose(),d.toneMapping=m,d.autoClear=p,t.background=y}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===xs||t.mapping===Ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Jt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Fr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,qa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=vc[(s-r-1)%vc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Jt(this._lodPlanes[s],l),p=l.uniforms,m=this._sizeLods[n]-1,M=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Ci-1),S=r/M,u=isFinite(r)?1+Math.floor(h*S):Ci;u>Ci&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${Ci}`);const f=[];let y=0;for(let C=0;C<Ci;++C){const w=C/S,g=Math.exp(-w*w/2);f.push(g),C===0?y+=g:C<u&&(y+=2*g)}for(let C=0;C<f.length;C++)f[C]=f[C]/y;p.envMap.value=t.texture,p.samples.value=u,p.weights.value=f,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:v}=this;p.dTheta.value=M,p.mipInt.value=v-n;const _=this._sizeLods[s],b=3*_*(s>v-cs?s-v+cs:0),E=4*(this._cubeSize-_);Fr(e,b,E,3*_,2*_),c.setRenderTarget(e),c.render(d,qa)}}function pm(i){const t=[],e=[],n=[];let s=i;const r=i-cs+1+gc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-cs?c=gc[a-i+cs-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,d=1+l,p=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,M=6,S=3,u=2,f=1,y=new Float32Array(S*M*m),v=new Float32Array(u*M*m),_=new Float32Array(f*M*m);for(let E=0;E<m;E++){const C=E%3*2/3-1,w=E>2?0:-1,g=[C,w,0,C+2/3,w,0,C+2/3,w+1,0,C,w,0,C+2/3,w+1,0,C,w+1,0];y.set(g,S*M*E),v.set(p,u*M*E);const x=[E,E,E,E,E,E];_.set(x,f*M*E)}const b=new he;b.setAttribute("position",new Ee(y,S)),b.setAttribute("uv",new Ee(v,u)),b.setAttribute("faceIndex",new Ee(_,f)),t.push(b),s>cs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function xc(i,t,e){const n=new gn(i,t,e);return n.texture.mapping=ua,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function mm(i,t,e){const n=new Float32Array(Ci),s=new N(0,1,0);return new Me({name:"SphericalGaussianBlur",defines:{n:Ci,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Mc(){return new Me({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Sc(){return new Me({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function bl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gm(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===_o||c===vo,h=c===xs||c===Ms;if(l||h){let d=t.get(o);const p=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return e===null&&(e=new Zo(i)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return l&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new Zo(i)),d=l?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function _m(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&er("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function vm(i,t,e,n){const s={},r=new WeakMap;function a(d){const p=d.target;p.index!==null&&t.remove(p.index);for(const M in p.attributes)t.remove(p.attributes[M]);p.removeEventListener("dispose",a),delete s[p.id];const m=r.get(p);m&&(t.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(d,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,e.memory.geometries++),p}function c(d){const p=d.attributes;for(const m in p)t.update(p[m],i.ARRAY_BUFFER)}function l(d){const p=[],m=d.index,M=d.attributes.position;let S=0;if(m!==null){const y=m.array;S=m.version;for(let v=0,_=y.length;v<_;v+=3){const b=y[v+0],E=y[v+1],C=y[v+2];p.push(b,E,E,C,C,b)}}else if(M!==void 0){const y=M.array;S=M.version;for(let v=0,_=y.length/3-1;v<_;v+=3){const b=v+0,E=v+1,C=v+2;p.push(b,E,E,C,C,b)}}else return;const u=new(uh(p)?_h:gh)(p,1);u.version=S;const f=r.get(d);f&&t.remove(f),r.set(d,u)}function h(d){const p=r.get(d);if(p){const m=d.index;m!==null&&p.version<m.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function xm(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function c(p,m){i.drawElements(n,m,r,p*a),e.update(m,n,1)}function l(p,m,M){M!==0&&(i.drawElementsInstanced(n,m,r,p*a,M),e.update(m,n,M))}function h(p,m,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,p,0,M);let u=0;for(let f=0;f<M;f++)u+=m[f];e.update(u,n,1)}function d(p,m,M,S){if(M===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let f=0;f<p.length;f++)l(p[f]/a,m[f],S[f]);else{u.multiDrawElementsInstancedWEBGL(n,m,0,r,p,0,S,0,M);let f=0;for(let y=0;y<M;y++)f+=m[y]*S[y];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Mm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Sm(i,t,e){const n=new WeakMap,s=new le;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let p=n.get(o);if(p===void 0||p.count!==d){let x=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var m=x;p!==void 0&&p.texture.dispose();const M=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,u=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let _=0;M===!0&&(_=1),S===!0&&(_=2),u===!0&&(_=3);let b=o.attributes.position.count*_,E=1;b>t.maxTextureSize&&(E=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const C=new Float32Array(b*E*4*d),w=new fh(C,b,E,d);w.type=In,w.needsUpdate=!0;const g=_*4;for(let R=0;R<d;R++){const P=f[R],U=y[R],F=v[R],O=b*E*4*R;for(let V=0;V<P.count;V++){const G=V*g;M===!0&&(s.fromBufferAttribute(P,V),C[O+G+0]=s.x,C[O+G+1]=s.y,C[O+G+2]=s.z,C[O+G+3]=0),S===!0&&(s.fromBufferAttribute(U,V),C[O+G+4]=s.x,C[O+G+5]=s.y,C[O+G+6]=s.z,C[O+G+7]=0),u===!0&&(s.fromBufferAttribute(F,V),C[O+G+8]=s.x,C[O+G+9]=s.y,C[O+G+10]=s.z,C[O+G+11]=F.itemSize===4?s.w:1)}}p={count:d,texture:w,size:new bt(b,E)},n.set(o,p),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let M=0;for(let u=0;u<l.length;u++)M+=l[u];const S=o.morphTargetsRelative?1:1-M;c.getUniforms().setValue(i,"morphTargetBaseInfluence",S),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function ym(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return d}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}const Rh=new Ne,yc=new bh(1,1),Ch=new fh,Ph=new zu,Dh=new Mh,Ec=[],bc=[],Tc=new Float32Array(16),wc=new Float32Array(9),Ac=new Float32Array(4);function Rs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Ec[s];if(r===void 0&&(r=new Float32Array(s),Ec[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Re(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function pa(i,t){let e=bc[t];e===void 0&&(e=new Int32Array(t),bc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Em(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function Tm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function Am(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Ac.set(n),i.uniformMatrix2fv(this.addr,!1,Ac),Ce(e,n)}}function Rm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;wc.set(n),i.uniformMatrix3fv(this.addr,!1,wc),Ce(e,n)}}function Cm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Tc.set(n),i.uniformMatrix4fv(this.addr,!1,Tc),Ce(e,n)}}function Pm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function Lm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function Um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function Im(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Nm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function Fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function Om(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function zm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(yc.compareFunction=hh,r=yc):r=Rh,e.setTexture2D(t||r,s)}function Bm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ph,s)}function km(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Dh,s)}function Vm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ch,s)}function Hm(i){switch(i){case 5126:return Em;case 35664:return bm;case 35665:return Tm;case 35666:return wm;case 35674:return Am;case 35675:return Rm;case 35676:return Cm;case 5124:case 35670:return Pm;case 35667:case 35671:return Dm;case 35668:case 35672:return Lm;case 35669:case 35673:return Um;case 5125:return Im;case 36294:return Nm;case 36295:return Fm;case 36296:return Om;case 35678:case 36198:case 36298:case 36306:case 35682:return zm;case 35679:case 36299:case 36307:return Bm;case 35680:case 36300:case 36308:case 36293:return km;case 36289:case 36303:case 36311:case 36292:return Vm}}function Gm(i,t){i.uniform1fv(this.addr,t)}function Wm(i,t){const e=Rs(t,this.size,2);i.uniform2fv(this.addr,e)}function Xm(i,t){const e=Rs(t,this.size,3);i.uniform3fv(this.addr,e)}function qm(i,t){const e=Rs(t,this.size,4);i.uniform4fv(this.addr,e)}function Ym(i,t){const e=Rs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Km(i,t){const e=Rs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function $m(i,t){const e=Rs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function jm(i,t){i.uniform1iv(this.addr,t)}function Zm(i,t){i.uniform2iv(this.addr,t)}function Jm(i,t){i.uniform3iv(this.addr,t)}function Qm(i,t){i.uniform4iv(this.addr,t)}function t0(i,t){i.uniform1uiv(this.addr,t)}function e0(i,t){i.uniform2uiv(this.addr,t)}function n0(i,t){i.uniform3uiv(this.addr,t)}function i0(i,t){i.uniform4uiv(this.addr,t)}function s0(i,t,e){const n=this.cache,s=t.length,r=pa(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Rh,r[a])}function r0(i,t,e){const n=this.cache,s=t.length,r=pa(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Ph,r[a])}function a0(i,t,e){const n=this.cache,s=t.length,r=pa(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Dh,r[a])}function o0(i,t,e){const n=this.cache,s=t.length,r=pa(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Ch,r[a])}function l0(i){switch(i){case 5126:return Gm;case 35664:return Wm;case 35665:return Xm;case 35666:return qm;case 35674:return Ym;case 35675:return Km;case 35676:return $m;case 5124:case 35670:return jm;case 35667:case 35671:return Zm;case 35668:case 35672:return Jm;case 35669:case 35673:return Qm;case 5125:return t0;case 36294:return e0;case 36295:return n0;case 36296:return i0;case 35678:case 36198:case 36298:case 36306:case 35682:return s0;case 35679:case 36299:case 36307:return r0;case 35680:case 36300:case 36308:case 36293:return a0;case 36289:case 36303:case 36311:case 36292:return o0}}class c0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Hm(e.type)}}class h0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=l0(e.type)}}class u0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Za=/(\w+)(\])?(\[|\.)?/g;function Rc(i,t){i.seq.push(t),i.map[t.id]=t}function f0(i,t,e){const n=i.name,s=n.length;for(Za.lastIndex=0;;){const r=Za.exec(n),a=Za.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Rc(e,l===void 0?new c0(o,i,t):new h0(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new u0(o),Rc(e,d)),e=d}}}class ta{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);f0(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Cc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const d0=37297;let p0=0;function m0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Pc=new zt;function g0(i){$t._getMatrix(Pc,$t.workingColorSpace,i);const t=`mat3( ${Pc.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(i)){case aa:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Dc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+m0(i.getShaderSource(t),o)}else return r}function _0(i,t){const e=g0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function v0(i,t){let e;switch(t){case jc:e="Linear";break;case Zc:e="Reinhard";break;case Jc:e="Cineon";break;case Qc:e="ACESFilmic";break;case eh:e="AgX";break;case ll:e="Neutral";break;case th:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Or=new N;function x0(){$t.getLuminanceCoefficients(Or);const i=Or.x.toFixed(4),t=Or.y.toFixed(4),e=Or.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function M0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ws).join(`
`)}function S0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function y0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ws(i){return i!==""}function Lc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Uc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const E0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jo(i){return i.replace(E0,T0)}const b0=new Map;function T0(i,t){let e=Ht[t];if(e===void 0){const n=b0.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Jo(e)}const w0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ic(i){return i.replace(w0,A0)}function A0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function R0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Kc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===$c?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Xn&&(t="SHADOWMAP_TYPE_VSM"),t}function C0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case xs:case Ms:t="ENVMAP_TYPE_CUBE";break;case ua:t="ENVMAP_TYPE_CUBE_UV";break}return t}function P0(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ms&&(t="ENVMAP_MODE_REFRACTION"),t}function D0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ol:t="ENVMAP_BLENDING_MULTIPLY";break;case _u:t="ENVMAP_BLENDING_MIX";break;case vu:t="ENVMAP_BLENDING_ADD";break}return t}function L0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function U0(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=R0(e),l=C0(e),h=P0(e),d=D0(e),p=L0(e),m=M0(e),M=S0(r),S=s.createProgram();let u,f,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(Ws).join(`
`),u.length>0&&(u+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(Ws).join(`
`),f.length>0&&(f+=`
`)):(u=[Nc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),f=[Nc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ri?"#define TONE_MAPPING":"",e.toneMapping!==ri?Ht.tonemapping_pars_fragment:"",e.toneMapping!==ri?v0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,_0("linearToOutputTexel",e.outputColorSpace),x0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ws).join(`
`)),a=Jo(a),a=Lc(a,e),a=Uc(a,e),o=Jo(o),o=Lc(o,e),o=Uc(o,e),a=Ic(a),o=Ic(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,u=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,f=["#define varying in",e.glslVersion===Hl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Hl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=y+u+a,_=y+f+o,b=Cc(s,s.VERTEX_SHADER,v),E=Cc(s,s.FRAGMENT_SHADER,_);s.attachShader(S,b),s.attachShader(S,E),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function C(R){if(i.debug.checkShaderErrors){const P=s.getProgramInfoLog(S)||"",U=s.getShaderInfoLog(b)||"",F=s.getShaderInfoLog(E)||"",O=P.trim(),V=U.trim(),G=F.trim();let k=!0,K=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,b,E);else{const Q=Dc(s,b,"vertex"),dt=Dc(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+O+`
`+Q+`
`+dt)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(V===""||G==="")&&(K=!1);K&&(R.diagnostics={runnable:k,programLog:O,vertexShader:{log:V,prefix:u},fragmentShader:{log:G,prefix:f}})}s.deleteShader(b),s.deleteShader(E),w=new ta(s,S),g=y0(s,S)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let g;this.getAttributes=function(){return g===void 0&&C(this),g};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(S,d0)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=p0++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=b,this.fragmentShader=E,this}let I0=0;class N0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new F0(t),e.set(t,n)),n}}class F0{constructor(t){this.id=I0++,this.code=t,this.usedTimes=0}}function O0(i,t,e,n,s,r,a){const o=new ph,c=new N0,l=new Set,h=[],d=s.logarithmicDepthBuffer,p=s.vertexTextures;let m=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(g){return l.add(g),g===0?"uv":`uv${g}`}function u(g,x,R,P,U){const F=P.fog,O=U.geometry,V=g.isMeshStandardMaterial?P.environment:null,G=(g.isMeshStandardMaterial?e:t).get(g.envMap||V),k=G&&G.mapping===ua?G.image.height:null,K=M[g.type];g.precision!==null&&(m=s.getMaxPrecision(g.precision),m!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",m,"instead."));const Q=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,dt=Q!==void 0?Q.length:0;let Ut=0;O.morphAttributes.position!==void 0&&(Ut=1),O.morphAttributes.normal!==void 0&&(Ut=2),O.morphAttributes.color!==void 0&&(Ut=3);let Ft,ue,Qt,$;if(K){const te=Cn[K];Ft=te.vertexShader,ue=te.fragmentShader}else Ft=g.vertexShader,ue=g.fragmentShader,c.update(g),Qt=c.getVertexShaderID(g),$=c.getFragmentShaderID(g);const J=i.getRenderTarget(),pt=i.state.buffers.depth.getReversed(),Lt=U.isInstancedMesh===!0,Et=U.isBatchedMesh===!0,Yt=!!g.map,Fe=!!g.matcap,L=!!G,fe=!!g.aoMap,Ot=!!g.lightMap,Pt=!!g.bumpMap,_t=!!g.normalMap,de=!!g.displacementMap,vt=!!g.emissiveMap,Vt=!!g.metalnessMap,Pe=!!g.roughnessMap,xe=g.anisotropy>0,D=g.clearcoat>0,T=g.dispersion>0,H=g.iridescence>0,Y=g.sheen>0,Z=g.transmission>0,q=xe&&!!g.anisotropyMap,yt=D&&!!g.clearcoatMap,st=D&&!!g.clearcoatNormalMap,xt=D&&!!g.clearcoatRoughnessMap,Mt=H&&!!g.iridescenceMap,nt=H&&!!g.iridescenceThicknessMap,ct=Y&&!!g.sheenColorMap,Ct=Y&&!!g.sheenRoughnessMap,St=!!g.specularMap,ot=!!g.specularColorMap,Bt=!!g.specularIntensityMap,I=Z&&!!g.transmissionMap,it=Z&&!!g.thicknessMap,rt=!!g.gradientMap,ft=!!g.alphaMap,tt=g.alphaTest>0,j=!!g.alphaHash,gt=!!g.extensions;let It=ri;g.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(It=i.toneMapping);const ae={shaderID:K,shaderType:g.type,shaderName:g.name,vertexShader:Ft,fragmentShader:ue,defines:g.defines,customVertexShaderID:Qt,customFragmentShaderID:$,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:m,batching:Et,batchingColor:Et&&U._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&U.instanceColor!==null,instancingMorph:Lt&&U.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:ys,alphaToCoverage:!!g.alphaToCoverage,map:Yt,matcap:Fe,envMap:L,envMapMode:L&&G.mapping,envMapCubeUVHeight:k,aoMap:fe,lightMap:Ot,bumpMap:Pt,normalMap:_t,displacementMap:p&&de,emissiveMap:vt,normalMapObjectSpace:_t&&g.normalMapType===yu,normalMapTangentSpace:_t&&g.normalMapType===gl,metalnessMap:Vt,roughnessMap:Pe,anisotropy:xe,anisotropyMap:q,clearcoat:D,clearcoatMap:yt,clearcoatNormalMap:st,clearcoatRoughnessMap:xt,dispersion:T,iridescence:H,iridescenceMap:Mt,iridescenceThicknessMap:nt,sheen:Y,sheenColorMap:ct,sheenRoughnessMap:Ct,specularMap:St,specularColorMap:ot,specularIntensityMap:Bt,transmission:Z,transmissionMap:I,thicknessMap:it,gradientMap:rt,opaque:g.transparent===!1&&g.blending===Li&&g.alphaToCoverage===!1,alphaMap:ft,alphaTest:tt,alphaHash:j,combine:g.combine,mapUv:Yt&&S(g.map.channel),aoMapUv:fe&&S(g.aoMap.channel),lightMapUv:Ot&&S(g.lightMap.channel),bumpMapUv:Pt&&S(g.bumpMap.channel),normalMapUv:_t&&S(g.normalMap.channel),displacementMapUv:de&&S(g.displacementMap.channel),emissiveMapUv:vt&&S(g.emissiveMap.channel),metalnessMapUv:Vt&&S(g.metalnessMap.channel),roughnessMapUv:Pe&&S(g.roughnessMap.channel),anisotropyMapUv:q&&S(g.anisotropyMap.channel),clearcoatMapUv:yt&&S(g.clearcoatMap.channel),clearcoatNormalMapUv:st&&S(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&S(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&S(g.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&S(g.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&S(g.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&S(g.sheenRoughnessMap.channel),specularMapUv:St&&S(g.specularMap.channel),specularColorMapUv:ot&&S(g.specularColorMap.channel),specularIntensityMapUv:Bt&&S(g.specularIntensityMap.channel),transmissionMapUv:I&&S(g.transmissionMap.channel),thicknessMapUv:it&&S(g.thicknessMap.channel),alphaMapUv:ft&&S(g.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(_t||xe),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!O.attributes.uv&&(Yt||ft),fog:!!F,useFog:g.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:g.flatShading===!0&&g.wireframe===!1,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pt,skinning:U.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:Ut,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:It,decodeVideoTexture:Yt&&g.map.isVideoTexture===!0&&$t.getTransfer(g.map.colorSpace)===ee,decodeVideoTextureEmissive:vt&&g.emissiveMap.isVideoTexture===!0&&$t.getTransfer(g.emissiveMap.colorSpace)===ee,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===qe,flipSided:g.side===Ye,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:gt&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&g.extensions.multiDraw===!0||Et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return ae.vertexUv1s=l.has(1),ae.vertexUv2s=l.has(2),ae.vertexUv3s=l.has(3),l.clear(),ae}function f(g){const x=[];if(g.shaderID?x.push(g.shaderID):(x.push(g.customVertexShaderID),x.push(g.customFragmentShaderID)),g.defines!==void 0)for(const R in g.defines)x.push(R),x.push(g.defines[R]);return g.isRawShaderMaterial===!1&&(y(x,g),v(x,g),x.push(i.outputColorSpace)),x.push(g.customProgramCacheKey),x.join()}function y(g,x){g.push(x.precision),g.push(x.outputColorSpace),g.push(x.envMapMode),g.push(x.envMapCubeUVHeight),g.push(x.mapUv),g.push(x.alphaMapUv),g.push(x.lightMapUv),g.push(x.aoMapUv),g.push(x.bumpMapUv),g.push(x.normalMapUv),g.push(x.displacementMapUv),g.push(x.emissiveMapUv),g.push(x.metalnessMapUv),g.push(x.roughnessMapUv),g.push(x.anisotropyMapUv),g.push(x.clearcoatMapUv),g.push(x.clearcoatNormalMapUv),g.push(x.clearcoatRoughnessMapUv),g.push(x.iridescenceMapUv),g.push(x.iridescenceThicknessMapUv),g.push(x.sheenColorMapUv),g.push(x.sheenRoughnessMapUv),g.push(x.specularMapUv),g.push(x.specularColorMapUv),g.push(x.specularIntensityMapUv),g.push(x.transmissionMapUv),g.push(x.thicknessMapUv),g.push(x.combine),g.push(x.fogExp2),g.push(x.sizeAttenuation),g.push(x.morphTargetsCount),g.push(x.morphAttributeCount),g.push(x.numDirLights),g.push(x.numPointLights),g.push(x.numSpotLights),g.push(x.numSpotLightMaps),g.push(x.numHemiLights),g.push(x.numRectAreaLights),g.push(x.numDirLightShadows),g.push(x.numPointLightShadows),g.push(x.numSpotLightShadows),g.push(x.numSpotLightShadowsWithMaps),g.push(x.numLightProbes),g.push(x.shadowMapType),g.push(x.toneMapping),g.push(x.numClippingPlanes),g.push(x.numClipIntersection),g.push(x.depthPacking)}function v(g,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),x.gradientMap&&o.enable(22),g.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reversedDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),g.push(o.mask)}function _(g){const x=M[g.type];let R;if(x){const P=Cn[x];R=nr.clone(P.uniforms)}else R=g.uniforms;return R}function b(g,x){let R;for(let P=0,U=h.length;P<U;P++){const F=h[P];if(F.cacheKey===x){R=F,++R.usedTimes;break}}return R===void 0&&(R=new U0(i,x,g,r),h.push(R)),R}function E(g){if(--g.usedTimes===0){const x=h.indexOf(g);h[x]=h[h.length-1],h.pop(),g.destroy()}}function C(g){c.remove(g)}function w(){c.dispose()}return{getParameters:u,getProgramCacheKey:f,getUniforms:_,acquireProgram:b,releaseProgram:E,releaseShaderCache:C,programs:h,dispose:w}}function z0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function B0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Fc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Oc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,p,m,M,S,u){let f=i[t];return f===void 0?(f={id:d.id,object:d,geometry:p,material:m,groupOrder:M,renderOrder:d.renderOrder,z:S,group:u},i[t]=f):(f.id=d.id,f.object=d,f.geometry=p,f.material=m,f.groupOrder=M,f.renderOrder=d.renderOrder,f.z=S,f.group=u),t++,f}function o(d,p,m,M,S,u){const f=a(d,p,m,M,S,u);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):e.push(f)}function c(d,p,m,M,S,u){const f=a(d,p,m,M,S,u);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):e.unshift(f)}function l(d,p){e.length>1&&e.sort(d||B0),n.length>1&&n.sort(p||Fc),s.length>1&&s.sort(p||Fc)}function h(){for(let d=t,p=i.length;d<p;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function k0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Oc,i.set(n,[a])):s>=r.length?(a=new Oc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function V0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new ht};break;case"SpotLight":e={position:new N,direction:new N,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":e={color:new ht,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function H0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let G0=0;function W0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function X0(i){const t=new V0,e=H0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const s=new N,r=new Kt,a=new Kt;function o(l){let h=0,d=0,p=0;for(let g=0;g<9;g++)n.probe[g].set(0,0,0);let m=0,M=0,S=0,u=0,f=0,y=0,v=0,_=0,b=0,E=0,C=0;l.sort(W0);for(let g=0,x=l.length;g<x;g++){const R=l[g],P=R.color,U=R.intensity,F=R.distance,O=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=P.r*U,d+=P.g*U,p+=P.b*U;else if(R.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(R.sh.coefficients[V],U);C++}else if(R.isDirectionalLight){const V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const G=R.shadow,k=e.get(R);k.shadowIntensity=G.intensity,k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,n.directionalShadow[m]=k,n.directionalShadowMap[m]=O,n.directionalShadowMatrix[m]=R.shadow.matrix,y++}n.directional[m]=V,m++}else if(R.isSpotLight){const V=t.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(P).multiplyScalar(U),V.distance=F,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,n.spot[S]=V;const G=R.shadow;if(R.map&&(n.spotLightMap[b]=R.map,b++,G.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[S]=G.matrix,R.castShadow){const k=e.get(R);k.shadowIntensity=G.intensity,k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,n.spotShadow[S]=k,n.spotShadowMap[S]=O,_++}S++}else if(R.isRectAreaLight){const V=t.get(R);V.color.copy(P).multiplyScalar(U),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),n.rectArea[u]=V,u++}else if(R.isPointLight){const V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){const G=R.shadow,k=e.get(R);k.shadowIntensity=G.intensity,k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,k.shadowCameraNear=G.camera.near,k.shadowCameraFar=G.camera.far,n.pointShadow[M]=k,n.pointShadowMap[M]=O,n.pointShadowMatrix[M]=R.shadow.matrix,v++}n.point[M]=V,M++}else if(R.isHemisphereLight){const V=t.get(R);V.skyColor.copy(R.color).multiplyScalar(U),V.groundColor.copy(R.groundColor).multiplyScalar(U),n.hemi[f]=V,f++}}u>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=p;const w=n.hash;(w.directionalLength!==m||w.pointLength!==M||w.spotLength!==S||w.rectAreaLength!==u||w.hemiLength!==f||w.numDirectionalShadows!==y||w.numPointShadows!==v||w.numSpotShadows!==_||w.numSpotMaps!==b||w.numLightProbes!==C)&&(n.directional.length=m,n.spot.length=S,n.rectArea.length=u,n.point.length=M,n.hemi.length=f,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+b-E,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,w.directionalLength=m,w.pointLength=M,w.spotLength=S,w.rectAreaLength=u,w.hemiLength=f,w.numDirectionalShadows=y,w.numPointShadows=v,w.numSpotShadows=_,w.numSpotMaps=b,w.numLightProbes=C,n.version=G0++)}function c(l,h){let d=0,p=0,m=0,M=0,S=0;const u=h.matrixWorldInverse;for(let f=0,y=l.length;f<y;f++){const v=l[f];if(v.isDirectionalLight){const _=n.directional[d];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(u),d++}else if(v.isSpotLight){const _=n.spot[m];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(u),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(u),m++}else if(v.isRectAreaLight){const _=n.rectArea[M];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(u),a.identity(),r.copy(v.matrixWorld),r.premultiply(u),a.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),M++}else if(v.isPointLight){const _=n.point[p];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(u),p++}else if(v.isHemisphereLight){const _=n.hemi[S];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(u),S++}}}return{setup:o,setupView:c,state:n}}function zc(i){const t=new X0(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function q0(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new zc(i),t.set(s,[o])):r>=a.length?(o=new zc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Y0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $0(i,t,e){let n=new Ml;const s=new bt,r=new bt,a=new le,o=new df({depthPacking:Su}),c=new pf,l={},h=e.maxTextureSize,d={[hi]:Ye,[Ye]:hi,[qe]:qe},p=new Me({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:Y0,fragmentShader:K0}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const M=new he;M.setAttribute("position",new Ee(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Jt(M,p),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kc;let f=this.type;this.render=function(E,C,w){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||E.length===0)return;const g=i.getRenderTarget(),x=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),P=i.state;P.setBlending(Kn),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const U=f!==Xn&&this.type===Xn,F=f===Xn&&this.type!==Xn;for(let O=0,V=E.length;O<V;O++){const G=E[O],k=G.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const K=k.getFrameExtents();if(s.multiply(K),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/K.x),s.x=r.x*K.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/K.y),s.y=r.y*K.y,k.mapSize.y=r.y)),k.map===null||U===!0||F===!0){const dt=this.type!==Xn?{minFilter:an,magFilter:an}:{};k.map!==null&&k.map.dispose(),k.map=new gn(s.x,s.y,dt),k.map.texture.name=G.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const Q=k.getViewportCount();for(let dt=0;dt<Q;dt++){const Ut=k.getViewport(dt);a.set(r.x*Ut.x,r.y*Ut.y,r.x*Ut.z,r.y*Ut.w),P.viewport(a),k.updateMatrices(G,dt),n=k.getFrustum(),_(C,w,k.camera,G,this.type)}k.isPointLightShadow!==!0&&this.type===Xn&&y(k,w),k.needsUpdate=!1}f=this.type,u.needsUpdate=!1,i.setRenderTarget(g,x,R)};function y(E,C){const w=t.update(S);p.defines.VSM_SAMPLES!==E.blurSamples&&(p.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new gn(s.x,s.y)),p.uniforms.shadow_pass.value=E.map.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(C,null,w,p,S,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(C,null,w,m,S,null)}function v(E,C,w,g){let x=null;const R=w.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)x=R;else if(x=w.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const P=x.uuid,U=C.uuid;let F=l[P];F===void 0&&(F={},l[P]=F);let O=F[U];O===void 0&&(O=x.clone(),F[U]=O,C.addEventListener("dispose",b)),x=O}if(x.visible=C.visible,x.wireframe=C.wireframe,g===Xn?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:d[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,w.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const P=i.properties.get(x);P.light=w}return x}function _(E,C,w,g,x){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===Xn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,E.matrixWorld);const U=t.update(E),F=E.material;if(Array.isArray(F)){const O=U.groups;for(let V=0,G=O.length;V<G;V++){const k=O[V],K=F[k.materialIndex];if(K&&K.visible){const Q=v(E,K,g,x);E.onBeforeShadow(i,E,C,w,U,Q,k),i.renderBufferDirect(w,null,U,Q,E,k),E.onAfterShadow(i,E,C,w,U,Q,k)}}}else if(F.visible){const O=v(E,F,g,x);E.onBeforeShadow(i,E,C,w,U,O,null),i.renderBufferDirect(w,null,U,O,E,null),E.onAfterShadow(i,E,C,w,U,O,null)}}const P=E.children;for(let U=0,F=P.length;U<F;U++)_(P[U],C,w,g,x)}function b(E){E.target.removeEventListener("dispose",b);for(const w in l){const g=l[w],x=E.target.uuid;x in g&&(g[x].dispose(),delete g[x])}}}const j0={[co]:ho,[uo]:mo,[fo]:go,[vs]:po,[ho]:co,[mo]:uo,[go]:fo,[po]:vs};function Z0(i,t){function e(){let I=!1;const it=new le;let rt=null;const ft=new le(0,0,0,0);return{setMask:function(tt){rt!==tt&&!I&&(i.colorMask(tt,tt,tt,tt),rt=tt)},setLocked:function(tt){I=tt},setClear:function(tt,j,gt,It,ae){ae===!0&&(tt*=It,j*=It,gt*=It),it.set(tt,j,gt,It),ft.equals(it)===!1&&(i.clearColor(tt,j,gt,It),ft.copy(it))},reset:function(){I=!1,rt=null,ft.set(-1,0,0,0)}}}function n(){let I=!1,it=!1,rt=null,ft=null,tt=null;return{setReversed:function(j){if(it!==j){const gt=t.get("EXT_clip_control");j?gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.ZERO_TO_ONE_EXT):gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.NEGATIVE_ONE_TO_ONE_EXT),it=j;const It=tt;tt=null,this.setClear(It)}},getReversed:function(){return it},setTest:function(j){j?J(i.DEPTH_TEST):pt(i.DEPTH_TEST)},setMask:function(j){rt!==j&&!I&&(i.depthMask(j),rt=j)},setFunc:function(j){if(it&&(j=j0[j]),ft!==j){switch(j){case co:i.depthFunc(i.NEVER);break;case ho:i.depthFunc(i.ALWAYS);break;case uo:i.depthFunc(i.LESS);break;case vs:i.depthFunc(i.LEQUAL);break;case fo:i.depthFunc(i.EQUAL);break;case po:i.depthFunc(i.GEQUAL);break;case mo:i.depthFunc(i.GREATER);break;case go:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ft=j}},setLocked:function(j){I=j},setClear:function(j){tt!==j&&(it&&(j=1-j),i.clearDepth(j),tt=j)},reset:function(){I=!1,rt=null,ft=null,tt=null,it=!1}}}function s(){let I=!1,it=null,rt=null,ft=null,tt=null,j=null,gt=null,It=null,ae=null;return{setTest:function(te){I||(te?J(i.STENCIL_TEST):pt(i.STENCIL_TEST))},setMask:function(te){it!==te&&!I&&(i.stencilMask(te),it=te)},setFunc:function(te,Bn,wn){(rt!==te||ft!==Bn||tt!==wn)&&(i.stencilFunc(te,Bn,wn),rt=te,ft=Bn,tt=wn)},setOp:function(te,Bn,wn){(j!==te||gt!==Bn||It!==wn)&&(i.stencilOp(te,Bn,wn),j=te,gt=Bn,It=wn)},setLocked:function(te){I=te},setClear:function(te){ae!==te&&(i.clearStencil(te),ae=te)},reset:function(){I=!1,it=null,rt=null,ft=null,tt=null,j=null,gt=null,It=null,ae=null}}}const r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},d={},p=new WeakMap,m=[],M=null,S=!1,u=null,f=null,y=null,v=null,_=null,b=null,E=null,C=new ht(0,0,0),w=0,g=!1,x=null,R=null,P=null,U=null,F=null;const O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,G=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(k)[1]),V=G>=1):k.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),V=G>=2);let K=null,Q={};const dt=i.getParameter(i.SCISSOR_BOX),Ut=i.getParameter(i.VIEWPORT),Ft=new le().fromArray(dt),ue=new le().fromArray(Ut);function Qt(I,it,rt,ft){const tt=new Uint8Array(4),j=i.createTexture();i.bindTexture(I,j),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let gt=0;gt<rt;gt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,ft,0,i.RGBA,i.UNSIGNED_BYTE,tt):i.texImage2D(it+gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,tt);return j}const $={};$[i.TEXTURE_2D]=Qt(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=Qt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=Qt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=Qt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(i.DEPTH_TEST),a.setFunc(vs),Pt(!1),_t(zl),J(i.CULL_FACE),fe(Kn);function J(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function pt(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function Lt(I,it){return d[I]!==it?(i.bindFramebuffer(I,it),d[I]=it,I===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=it),I===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=it),!0):!1}function Et(I,it){let rt=m,ft=!1;if(I){rt=p.get(it),rt===void 0&&(rt=[],p.set(it,rt));const tt=I.textures;if(rt.length!==tt.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let j=0,gt=tt.length;j<gt;j++)rt[j]=i.COLOR_ATTACHMENT0+j;rt.length=tt.length,ft=!0}}else rt[0]!==i.BACK&&(rt[0]=i.BACK,ft=!0);ft&&i.drawBuffers(rt)}function Yt(I){return M!==I?(i.useProgram(I),M=I,!0):!1}const Fe={[Ri]:i.FUNC_ADD,[tu]:i.FUNC_SUBTRACT,[eu]:i.FUNC_REVERSE_SUBTRACT};Fe[nu]=i.MIN,Fe[iu]=i.MAX;const L={[su]:i.ZERO,[ru]:i.ONE,[au]:i.SRC_COLOR,[oo]:i.SRC_ALPHA,[fu]:i.SRC_ALPHA_SATURATE,[hu]:i.DST_COLOR,[lu]:i.DST_ALPHA,[ou]:i.ONE_MINUS_SRC_COLOR,[lo]:i.ONE_MINUS_SRC_ALPHA,[uu]:i.ONE_MINUS_DST_COLOR,[cu]:i.ONE_MINUS_DST_ALPHA,[du]:i.CONSTANT_COLOR,[pu]:i.ONE_MINUS_CONSTANT_COLOR,[mu]:i.CONSTANT_ALPHA,[gu]:i.ONE_MINUS_CONSTANT_ALPHA};function fe(I,it,rt,ft,tt,j,gt,It,ae,te){if(I===Kn){S===!0&&(pt(i.BLEND),S=!1);return}if(S===!1&&(J(i.BLEND),S=!0),I!==Qh){if(I!==u||te!==g){if((f!==Ri||_!==Ri)&&(i.blendEquation(i.FUNC_ADD),f=Ri,_=Ri),te)switch(I){case Li:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $s:i.blendFunc(i.ONE,i.ONE);break;case Bl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Li:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $s:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Bl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,v=null,b=null,E=null,C.set(0,0,0),w=0,u=I,g=te}return}tt=tt||it,j=j||rt,gt=gt||ft,(it!==f||tt!==_)&&(i.blendEquationSeparate(Fe[it],Fe[tt]),f=it,_=tt),(rt!==y||ft!==v||j!==b||gt!==E)&&(i.blendFuncSeparate(L[rt],L[ft],L[j],L[gt]),y=rt,v=ft,b=j,E=gt),(It.equals(C)===!1||ae!==w)&&(i.blendColor(It.r,It.g,It.b,ae),C.copy(It),w=ae),u=I,g=!1}function Ot(I,it){I.side===qe?pt(i.CULL_FACE):J(i.CULL_FACE);let rt=I.side===Ye;it&&(rt=!rt),Pt(rt),I.blending===Li&&I.transparent===!1?fe(Kn):fe(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const ft=I.stencilWrite;o.setTest(ft),ft&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),vt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(I){x!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),x=I)}function _t(I){I!==Zh?(J(i.CULL_FACE),I!==R&&(I===zl?i.cullFace(i.BACK):I===Jh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pt(i.CULL_FACE),R=I}function de(I){I!==P&&(V&&i.lineWidth(I),P=I)}function vt(I,it,rt){I?(J(i.POLYGON_OFFSET_FILL),(U!==it||F!==rt)&&(i.polygonOffset(it,rt),U=it,F=rt)):pt(i.POLYGON_OFFSET_FILL)}function Vt(I){I?J(i.SCISSOR_TEST):pt(i.SCISSOR_TEST)}function Pe(I){I===void 0&&(I=i.TEXTURE0+O-1),K!==I&&(i.activeTexture(I),K=I)}function xe(I,it,rt){rt===void 0&&(K===null?rt=i.TEXTURE0+O-1:rt=K);let ft=Q[rt];ft===void 0&&(ft={type:void 0,texture:void 0},Q[rt]=ft),(ft.type!==I||ft.texture!==it)&&(K!==rt&&(i.activeTexture(rt),K=rt),i.bindTexture(I,it||$[I]),ft.type=I,ft.texture=it)}function D(){const I=Q[K];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function T(){try{i.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function H(){try{i.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{i.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{i.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function yt(){try{i.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function st(){try{i.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xt(){try{i.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Mt(){try{i.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function nt(){try{i.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ct(I){Ft.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Ft.copy(I))}function Ct(I){ue.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),ue.copy(I))}function St(I,it){let rt=l.get(it);rt===void 0&&(rt=new WeakMap,l.set(it,rt));let ft=rt.get(I);ft===void 0&&(ft=i.getUniformBlockIndex(it,I.name),rt.set(I,ft))}function ot(I,it){const ft=l.get(it).get(I);c.get(it)!==ft&&(i.uniformBlockBinding(it,ft,I.__bindingPointIndex),c.set(it,ft))}function Bt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},K=null,Q={},d={},p=new WeakMap,m=[],M=null,S=!1,u=null,f=null,y=null,v=null,_=null,b=null,E=null,C=new ht(0,0,0),w=0,g=!1,x=null,R=null,P=null,U=null,F=null,Ft.set(0,0,i.canvas.width,i.canvas.height),ue.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:J,disable:pt,bindFramebuffer:Lt,drawBuffers:Et,useProgram:Yt,setBlending:fe,setMaterial:Ot,setFlipSided:Pt,setCullFace:_t,setLineWidth:de,setPolygonOffset:vt,setScissorTest:Vt,activeTexture:Pe,bindTexture:xe,unbindTexture:D,compressedTexImage2D:T,compressedTexImage3D:H,texImage2D:Mt,texImage3D:nt,updateUBOMapping:St,uniformBlockBinding:ot,texStorage2D:st,texStorage3D:xt,texSubImage2D:Y,texSubImage3D:Z,compressedTexSubImage2D:q,compressedTexSubImage3D:yt,scissor:ct,viewport:Ct,reset:Bt}}function J0(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new bt,h=new WeakMap;let d;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(D,T){return m?new OffscreenCanvas(D,T):tr("canvas")}function S(D,T,H){let Y=1;const Z=xe(D);if((Z.width>H||Z.height>H)&&(Y=H/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const q=Math.floor(Y*Z.width),yt=Math.floor(Y*Z.height);d===void 0&&(d=M(q,yt));const st=T?M(q,yt):d;return st.width=q,st.height=yt,st.getContext("2d").drawImage(D,0,0,q,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+q+"x"+yt+")."),st}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),D;return D}function u(D){return D.generateMipmaps}function f(D){i.generateMipmap(D)}function y(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(D,T,H,Y,Z=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let q=T;if(T===i.RED&&(H===i.FLOAT&&(q=i.R32F),H===i.HALF_FLOAT&&(q=i.R16F),H===i.UNSIGNED_BYTE&&(q=i.R8)),T===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(q=i.R8UI),H===i.UNSIGNED_SHORT&&(q=i.R16UI),H===i.UNSIGNED_INT&&(q=i.R32UI),H===i.BYTE&&(q=i.R8I),H===i.SHORT&&(q=i.R16I),H===i.INT&&(q=i.R32I)),T===i.RG&&(H===i.FLOAT&&(q=i.RG32F),H===i.HALF_FLOAT&&(q=i.RG16F),H===i.UNSIGNED_BYTE&&(q=i.RG8)),T===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(q=i.RG8UI),H===i.UNSIGNED_SHORT&&(q=i.RG16UI),H===i.UNSIGNED_INT&&(q=i.RG32UI),H===i.BYTE&&(q=i.RG8I),H===i.SHORT&&(q=i.RG16I),H===i.INT&&(q=i.RG32I)),T===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(q=i.RGB8UI),H===i.UNSIGNED_SHORT&&(q=i.RGB16UI),H===i.UNSIGNED_INT&&(q=i.RGB32UI),H===i.BYTE&&(q=i.RGB8I),H===i.SHORT&&(q=i.RGB16I),H===i.INT&&(q=i.RGB32I)),T===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),H===i.UNSIGNED_INT&&(q=i.RGBA32UI),H===i.BYTE&&(q=i.RGBA8I),H===i.SHORT&&(q=i.RGBA16I),H===i.INT&&(q=i.RGBA32I)),T===i.RGB&&(H===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),T===i.RGBA){const yt=Z?aa:$t.getTransfer(Y);H===i.FLOAT&&(q=i.RGBA32F),H===i.HALF_FLOAT&&(q=i.RGBA16F),H===i.UNSIGNED_BYTE&&(q=yt===ee?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function _(D,T){let H;return D?T===null||T===Ui||T===Zs?H=i.DEPTH24_STENCIL8:T===In?H=i.DEPTH32F_STENCIL8:T===js&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ui||T===Zs?H=i.DEPTH_COMPONENT24:T===In?H=i.DEPTH_COMPONENT32F:T===js&&(H=i.DEPTH_COMPONENT16),H}function b(D,T){return u(D)===!0||D.isFramebufferTexture&&D.minFilter!==an&&D.minFilter!==sn?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function E(D){const T=D.target;T.removeEventListener("dispose",E),w(T),T.isVideoTexture&&h.delete(T)}function C(D){const T=D.target;T.removeEventListener("dispose",C),x(T)}function w(D){const T=n.get(D);if(T.__webglInit===void 0)return;const H=D.source,Y=p.get(H);if(Y){const Z=Y[T.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&g(D),Object.keys(Y).length===0&&p.delete(H)}n.remove(D)}function g(D){const T=n.get(D);i.deleteTexture(T.__webglTexture);const H=D.source,Y=p.get(H);delete Y[T.__cacheKey],a.memory.textures--}function x(D){const T=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(T.__webglFramebuffer[Y]))for(let Z=0;Z<T.__webglFramebuffer[Y].length;Z++)i.deleteFramebuffer(T.__webglFramebuffer[Y][Z]);else i.deleteFramebuffer(T.__webglFramebuffer[Y]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[Y])}else{if(Array.isArray(T.__webglFramebuffer))for(let Y=0;Y<T.__webglFramebuffer.length;Y++)i.deleteFramebuffer(T.__webglFramebuffer[Y]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Y=0;Y<T.__webglColorRenderbuffer.length;Y++)T.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[Y]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const H=D.textures;for(let Y=0,Z=H.length;Y<Z;Y++){const q=n.get(H[Y]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(H[Y])}n.remove(D)}let R=0;function P(){R=0}function U(){const D=R;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),R+=1,D}function F(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function O(D,T){const H=n.get(D);if(D.isVideoTexture&&Vt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&H.__version!==D.version){const Y=D.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(H,D,T);return}}else D.isExternalTexture&&(H.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+T)}function V(D,T){const H=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&H.__version!==D.version){$(H,D,T);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+T)}function G(D,T){const H=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&H.__version!==D.version){$(H,D,T);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+T)}function k(D,T){const H=n.get(D);if(D.version>0&&H.__version!==D.version){J(H,D,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+T)}const K={[Ss]:i.REPEAT,[Pi]:i.CLAMP_TO_EDGE,[xo]:i.MIRRORED_REPEAT},Q={[an]:i.NEAREST,[xu]:i.NEAREST_MIPMAP_NEAREST,[ur]:i.NEAREST_MIPMAP_LINEAR,[sn]:i.LINEAR,[va]:i.LINEAR_MIPMAP_NEAREST,[Yn]:i.LINEAR_MIPMAP_LINEAR},dt={[Eu]:i.NEVER,[Cu]:i.ALWAYS,[bu]:i.LESS,[hh]:i.LEQUAL,[Tu]:i.EQUAL,[Ru]:i.GEQUAL,[wu]:i.GREATER,[Au]:i.NOTEQUAL};function Ut(D,T){if(T.type===In&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===sn||T.magFilter===va||T.magFilter===ur||T.magFilter===Yn||T.minFilter===sn||T.minFilter===va||T.minFilter===ur||T.minFilter===Yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,K[T.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,K[T.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,K[T.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,Q[T.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,Q[T.minFilter]),T.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,dt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===an||T.minFilter!==ur&&T.minFilter!==Yn||T.type===In&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(D,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Ft(D,T){let H=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",E));const Y=T.source;let Z=p.get(Y);Z===void 0&&(Z={},p.set(Y,Z));const q=F(T);if(q!==D.__cacheKey){Z[q]===void 0&&(Z[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),Z[q].usedTimes++;const yt=Z[D.__cacheKey];yt!==void 0&&(Z[D.__cacheKey].usedTimes--,yt.usedTimes===0&&g(T)),D.__cacheKey=q,D.__webglTexture=Z[q].texture}return H}function ue(D,T,H){return Math.floor(Math.floor(D/H)/T)}function Qt(D,T,H,Y){const q=D.updateRanges;if(q.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,H,Y,T.data);else{q.sort((nt,ct)=>nt.start-ct.start);let yt=0;for(let nt=1;nt<q.length;nt++){const ct=q[yt],Ct=q[nt],St=ct.start+ct.count,ot=ue(Ct.start,T.width,4),Bt=ue(ct.start,T.width,4);Ct.start<=St+1&&ot===Bt&&ue(Ct.start+Ct.count-1,T.width,4)===ot?ct.count=Math.max(ct.count,Ct.start+Ct.count-ct.start):(++yt,q[yt]=Ct)}q.length=yt+1;const st=i.getParameter(i.UNPACK_ROW_LENGTH),xt=i.getParameter(i.UNPACK_SKIP_PIXELS),Mt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let nt=0,ct=q.length;nt<ct;nt++){const Ct=q[nt],St=Math.floor(Ct.start/4),ot=Math.ceil(Ct.count/4),Bt=St%T.width,I=Math.floor(St/T.width),it=ot,rt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Bt),i.pixelStorei(i.UNPACK_SKIP_ROWS,I),e.texSubImage2D(i.TEXTURE_2D,0,Bt,I,it,rt,H,Y,T.data)}D.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,st),i.pixelStorei(i.UNPACK_SKIP_PIXELS,xt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Mt)}}function $(D,T,H){let Y=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Y=i.TEXTURE_3D);const Z=Ft(D,T),q=T.source;e.bindTexture(Y,D.__webglTexture,i.TEXTURE0+H);const yt=n.get(q);if(q.version!==yt.__version||Z===!0){e.activeTexture(i.TEXTURE0+H);const st=$t.getPrimaries($t.workingColorSpace),xt=T.colorSpace===ii?null:$t.getPrimaries(T.colorSpace),Mt=T.colorSpace===ii||st===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let nt=S(T.image,!1,s.maxTextureSize);nt=Pe(T,nt);const ct=r.convert(T.format,T.colorSpace),Ct=r.convert(T.type);let St=v(T.internalFormat,ct,Ct,T.colorSpace,T.isVideoTexture);Ut(Y,T);let ot;const Bt=T.mipmaps,I=T.isVideoTexture!==!0,it=yt.__version===void 0||Z===!0,rt=q.dataReady,ft=b(T,nt);if(T.isDepthTexture)St=_(T.format===Qs,T.type),it&&(I?e.texStorage2D(i.TEXTURE_2D,1,St,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,St,nt.width,nt.height,0,ct,Ct,null));else if(T.isDataTexture)if(Bt.length>0){I&&it&&e.texStorage2D(i.TEXTURE_2D,ft,St,Bt[0].width,Bt[0].height);for(let tt=0,j=Bt.length;tt<j;tt++)ot=Bt[tt],I?rt&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,ot.width,ot.height,ct,Ct,ot.data):e.texImage2D(i.TEXTURE_2D,tt,St,ot.width,ot.height,0,ct,Ct,ot.data);T.generateMipmaps=!1}else I?(it&&e.texStorage2D(i.TEXTURE_2D,ft,St,nt.width,nt.height),rt&&Qt(T,nt,ct,Ct)):e.texImage2D(i.TEXTURE_2D,0,St,nt.width,nt.height,0,ct,Ct,nt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){I&&it&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,St,Bt[0].width,Bt[0].height,nt.depth);for(let tt=0,j=Bt.length;tt<j;tt++)if(ot=Bt[tt],T.format!==rn)if(ct!==null)if(I){if(rt)if(T.layerUpdates.size>0){const gt=mc(ot.width,ot.height,T.format,T.type);for(const It of T.layerUpdates){const ae=ot.data.subarray(It*gt/ot.data.BYTES_PER_ELEMENT,(It+1)*gt/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,It,ot.width,ot.height,1,ct,ae)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,ot.width,ot.height,nt.depth,ct,ot.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,St,ot.width,ot.height,nt.depth,0,ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?rt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,ot.width,ot.height,nt.depth,ct,Ct,ot.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,St,ot.width,ot.height,nt.depth,0,ct,Ct,ot.data)}else{I&&it&&e.texStorage2D(i.TEXTURE_2D,ft,St,Bt[0].width,Bt[0].height);for(let tt=0,j=Bt.length;tt<j;tt++)ot=Bt[tt],T.format!==rn?ct!==null?I?rt&&e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,ot.width,ot.height,ct,ot.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,St,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?rt&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,ot.width,ot.height,ct,Ct,ot.data):e.texImage2D(i.TEXTURE_2D,tt,St,ot.width,ot.height,0,ct,Ct,ot.data)}else if(T.isDataArrayTexture)if(I){if(it&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,St,nt.width,nt.height,nt.depth),rt)if(T.layerUpdates.size>0){const tt=mc(nt.width,nt.height,T.format,T.type);for(const j of T.layerUpdates){const gt=nt.data.subarray(j*tt/nt.data.BYTES_PER_ELEMENT,(j+1)*tt/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,nt.width,nt.height,1,ct,Ct,gt)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,ct,Ct,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,St,nt.width,nt.height,nt.depth,0,ct,Ct,nt.data);else if(T.isData3DTexture)I?(it&&e.texStorage3D(i.TEXTURE_3D,ft,St,nt.width,nt.height,nt.depth),rt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,ct,Ct,nt.data)):e.texImage3D(i.TEXTURE_3D,0,St,nt.width,nt.height,nt.depth,0,ct,Ct,nt.data);else if(T.isFramebufferTexture){if(it)if(I)e.texStorage2D(i.TEXTURE_2D,ft,St,nt.width,nt.height);else{let tt=nt.width,j=nt.height;for(let gt=0;gt<ft;gt++)e.texImage2D(i.TEXTURE_2D,gt,St,tt,j,0,ct,Ct,null),tt>>=1,j>>=1}}else if(Bt.length>0){if(I&&it){const tt=xe(Bt[0]);e.texStorage2D(i.TEXTURE_2D,ft,St,tt.width,tt.height)}for(let tt=0,j=Bt.length;tt<j;tt++)ot=Bt[tt],I?rt&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,ct,Ct,ot):e.texImage2D(i.TEXTURE_2D,tt,St,ct,Ct,ot);T.generateMipmaps=!1}else if(I){if(it){const tt=xe(nt);e.texStorage2D(i.TEXTURE_2D,ft,St,tt.width,tt.height)}rt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct,Ct,nt)}else e.texImage2D(i.TEXTURE_2D,0,St,ct,Ct,nt);u(T)&&f(Y),yt.__version=q.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function J(D,T,H){if(T.image.length!==6)return;const Y=Ft(D,T),Z=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+H);const q=n.get(Z);if(Z.version!==q.__version||Y===!0){e.activeTexture(i.TEXTURE0+H);const yt=$t.getPrimaries($t.workingColorSpace),st=T.colorSpace===ii?null:$t.getPrimaries(T.colorSpace),xt=T.colorSpace===ii||yt===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const Mt=T.isCompressedTexture||T.image[0].isCompressedTexture,nt=T.image[0]&&T.image[0].isDataTexture,ct=[];for(let j=0;j<6;j++)!Mt&&!nt?ct[j]=S(T.image[j],!0,s.maxCubemapSize):ct[j]=nt?T.image[j].image:T.image[j],ct[j]=Pe(T,ct[j]);const Ct=ct[0],St=r.convert(T.format,T.colorSpace),ot=r.convert(T.type),Bt=v(T.internalFormat,St,ot,T.colorSpace),I=T.isVideoTexture!==!0,it=q.__version===void 0||Y===!0,rt=Z.dataReady;let ft=b(T,Ct);Ut(i.TEXTURE_CUBE_MAP,T);let tt;if(Mt){I&&it&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Bt,Ct.width,Ct.height);for(let j=0;j<6;j++){tt=ct[j].mipmaps;for(let gt=0;gt<tt.length;gt++){const It=tt[gt];T.format!==rn?St!==null?I?rt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt,0,0,It.width,It.height,St,It.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt,Bt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt,0,0,It.width,It.height,St,ot,It.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt,Bt,It.width,It.height,0,St,ot,It.data)}}}else{if(tt=T.mipmaps,I&&it){tt.length>0&&ft++;const j=xe(ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Bt,j.width,j.height)}for(let j=0;j<6;j++)if(nt){I?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ct[j].width,ct[j].height,St,ot,ct[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Bt,ct[j].width,ct[j].height,0,St,ot,ct[j].data);for(let gt=0;gt<tt.length;gt++){const ae=tt[gt].image[j].image;I?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt+1,0,0,ae.width,ae.height,St,ot,ae.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt+1,Bt,ae.width,ae.height,0,St,ot,ae.data)}}else{I?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,St,ot,ct[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Bt,St,ot,ct[j]);for(let gt=0;gt<tt.length;gt++){const It=tt[gt];I?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt+1,0,0,St,ot,It.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt+1,Bt,St,ot,It.image[j])}}}u(T)&&f(i.TEXTURE_CUBE_MAP),q.__version=Z.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function pt(D,T,H,Y,Z,q){const yt=r.convert(H.format,H.colorSpace),st=r.convert(H.type),xt=v(H.internalFormat,yt,st,H.colorSpace),Mt=n.get(T),nt=n.get(H);if(nt.__renderTarget=T,!Mt.__hasExternalTextures){const ct=Math.max(1,T.width>>q),Ct=Math.max(1,T.height>>q);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,q,xt,ct,Ct,T.depth,0,yt,st,null):e.texImage2D(Z,q,xt,ct,Ct,0,yt,st,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),vt(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Z,nt.__webglTexture,0,de(T)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Z,nt.__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(D,T,H){if(i.bindRenderbuffer(i.RENDERBUFFER,D),T.depthBuffer){const Y=T.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,q=_(T.stencilBuffer,Z),yt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=de(T);vt(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,q,T.width,T.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,st,q,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,q,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,D)}else{const Y=T.textures;for(let Z=0;Z<Y.length;Z++){const q=Y[Z],yt=r.convert(q.format,q.colorSpace),st=r.convert(q.type),xt=v(q.internalFormat,yt,st,q.colorSpace),Mt=de(T);H&&vt(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,xt,T.width,T.height):vt(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt,xt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,xt,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Et(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(T.depthTexture);Y.__renderTarget=T,(!Y.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),O(T.depthTexture,0);const Z=Y.__webglTexture,q=de(T);if(T.depthTexture.format===Js)vt(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(T.depthTexture.format===Qs)vt(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Yt(D){const T=n.get(D),H=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const Y=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Y){const Z=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),T.__depthDisposeCallback=Z}T.__boundDepthTexture=Y}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const Y=D.texture.mipmaps;Y&&Y.length>0?Et(T.__webglFramebuffer[0],D):Et(T.__webglFramebuffer,D)}else if(H){T.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[Y]),T.__webglDepthbuffer[Y]===void 0)T.__webglDepthbuffer[Y]=i.createRenderbuffer(),Lt(T.__webglDepthbuffer[Y],D,!1);else{const Z=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=T.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,q)}}else{const Y=D.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Lt(T.__webglDepthbuffer,D,!1);else{const Z=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,q)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(D,T,H){const Y=n.get(D);T!==void 0&&pt(Y.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Yt(D)}function L(D){const T=D.texture,H=n.get(D),Y=n.get(T);D.addEventListener("dispose",C);const Z=D.textures,q=D.isWebGLCubeRenderTarget===!0,yt=Z.length>1;if(yt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=T.version,a.memory.textures++),q){H.__webglFramebuffer=[];for(let st=0;st<6;st++)if(T.mipmaps&&T.mipmaps.length>0){H.__webglFramebuffer[st]=[];for(let xt=0;xt<T.mipmaps.length;xt++)H.__webglFramebuffer[st][xt]=i.createFramebuffer()}else H.__webglFramebuffer[st]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){H.__webglFramebuffer=[];for(let st=0;st<T.mipmaps.length;st++)H.__webglFramebuffer[st]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(yt)for(let st=0,xt=Z.length;st<xt;st++){const Mt=n.get(Z[st]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=i.createTexture(),a.memory.textures++)}if(D.samples>0&&vt(D)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let st=0;st<Z.length;st++){const xt=Z[st];H.__webglColorRenderbuffer[st]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[st]);const Mt=r.convert(xt.format,xt.colorSpace),nt=r.convert(xt.type),ct=v(xt.internalFormat,Mt,nt,xt.colorSpace,D.isXRRenderTarget===!0),Ct=de(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,ct,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,H.__webglColorRenderbuffer[st])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Lt(H.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Ut(i.TEXTURE_CUBE_MAP,T);for(let st=0;st<6;st++)if(T.mipmaps&&T.mipmaps.length>0)for(let xt=0;xt<T.mipmaps.length;xt++)pt(H.__webglFramebuffer[st][xt],D,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,xt);else pt(H.__webglFramebuffer[st],D,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);u(T)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let st=0,xt=Z.length;st<xt;st++){const Mt=Z[st],nt=n.get(Mt);let ct=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ct=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,nt.__webglTexture),Ut(ct,Mt),pt(H.__webglFramebuffer,D,Mt,i.COLOR_ATTACHMENT0+st,ct,0),u(Mt)&&f(ct)}e.unbindTexture()}else{let st=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(st=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,Y.__webglTexture),Ut(st,T),T.mipmaps&&T.mipmaps.length>0)for(let xt=0;xt<T.mipmaps.length;xt++)pt(H.__webglFramebuffer[xt],D,T,i.COLOR_ATTACHMENT0,st,xt);else pt(H.__webglFramebuffer,D,T,i.COLOR_ATTACHMENT0,st,0);u(T)&&f(st),e.unbindTexture()}D.depthBuffer&&Yt(D)}function fe(D){const T=D.textures;for(let H=0,Y=T.length;H<Y;H++){const Z=T[H];if(u(Z)){const q=y(D),yt=n.get(Z).__webglTexture;e.bindTexture(q,yt),f(q),e.unbindTexture()}}}const Ot=[],Pt=[];function _t(D){if(D.samples>0){if(vt(D)===!1){const T=D.textures,H=D.width,Y=D.height;let Z=i.COLOR_BUFFER_BIT;const q=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(D),st=T.length>1;if(st)for(let Mt=0;Mt<T.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer);const xt=D.texture.mipmaps;xt&&xt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let Mt=0;Mt<T.length;Mt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),st){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[Mt]);const nt=n.get(T[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,nt,0)}i.blitFramebuffer(0,0,H,Y,0,0,H,Y,Z,i.NEAREST),c===!0&&(Ot.length=0,Pt.length=0,Ot.push(i.COLOR_ATTACHMENT0+Mt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Ot.push(q),Pt.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Pt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ot))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),st)for(let Mt=0;Mt<T.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,yt.__webglColorRenderbuffer[Mt]);const nt=n.get(T[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,nt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){const T=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function de(D){return Math.min(s.maxSamples,D.samples)}function vt(D){const T=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Vt(D){const T=a.render.frame;h.get(D)!==T&&(h.set(D,T),D.update())}function Pe(D,T){const H=D.colorSpace,Y=D.format,Z=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||H!==ys&&H!==ii&&($t.getTransfer(H)===ee?(Y!==rn||Z!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),T}function xe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=P,this.setTexture2D=O,this.setTexture2DArray=V,this.setTexture3D=G,this.setTextureCube=k,this.rebindTextures=Fe,this.setupRenderTarget=L,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=vt}function Q0(i,t){function e(n,s=ii){let r;const a=$t.getTransfer(s);if(n===On)return i.UNSIGNED_BYTE;if(n===hl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ul)return i.UNSIGNED_SHORT_5_5_5_1;if(n===rh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ah)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ih)return i.BYTE;if(n===sh)return i.SHORT;if(n===js)return i.UNSIGNED_SHORT;if(n===cl)return i.INT;if(n===Ui)return i.UNSIGNED_INT;if(n===In)return i.FLOAT;if(n===Fn)return i.HALF_FLOAT;if(n===oh)return i.ALPHA;if(n===lh)return i.RGB;if(n===rn)return i.RGBA;if(n===Js)return i.DEPTH_COMPONENT;if(n===Qs)return i.DEPTH_STENCIL;if(n===fl)return i.RED;if(n===dl)return i.RED_INTEGER;if(n===ch)return i.RG;if(n===pl)return i.RG_INTEGER;if(n===ml)return i.RGBA_INTEGER;if(n===$r||n===jr||n===Zr||n===Jr)if(a===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$r)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$r)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Mo||n===So||n===yo||n===Eo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Mo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===So)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Eo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===bo||n===To||n===wo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===bo||n===To)return a===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ao||n===Ro||n===Co||n===Po||n===Do||n===Lo||n===Uo||n===Io||n===No||n===Fo||n===Oo||n===zo||n===Bo||n===ko)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ao)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ro)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Co)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Po)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Do)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Uo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Io)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===No)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ko)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vo||n===Ho||n===Go)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Vo)return a===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ho)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Go)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wo||n===Xo||n===qo||n===Yo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Wo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Zs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const tg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ng{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Th(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Me({vertexShader:tg,fragmentShader:eg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Jt(new li(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ig extends ws{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,p=null,m=null,M=null;const S=typeof XRWebGLBinding<"u",u=new ng,f={},y=e.getContextAttributes();let v=null,_=null;const b=[],E=[],C=new bt;let w=null;const g=new fn;g.viewport=new le;const x=new fn;x.viewport=new le;const R=[g,x],P=new Ef;let U=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let J=b[$];return J===void 0&&(J=new Va,b[$]=J),J.getTargetRaySpace()},this.getControllerGrip=function($){let J=b[$];return J===void 0&&(J=new Va,b[$]=J),J.getGripSpace()},this.getHand=function($){let J=b[$];return J===void 0&&(J=new Va,b[$]=J),J.getHandSpace()};function O($){const J=E.indexOf($.inputSource);if(J===-1)return;const pt=b[J];pt!==void 0&&(pt.update($.inputSource,$.frame,l||a),pt.dispatchEvent({type:$.type,data:$.inputSource}))}function V(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",G);for(let $=0;$<b.length;$++){const J=E[$];J!==null&&(E[$]=null,b[$].disconnect(J))}U=null,F=null,u.reset();for(const $ in f)delete f[$];t.setRenderTarget(v),m=null,p=null,d=null,s=null,_=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(v=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",V),s.addEventListener("inputsourceschange",G),y.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(C),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,Lt=null,Et=null;y.depth&&(Et=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=y.stencil?Qs:Js,Lt=y.stencil?Zs:Ui);const Yt={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:r};d=this.getBinding(),p=d.createProjectionLayer(Yt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),_=new gn(p.textureWidth,p.textureHeight,{format:rn,type:On,depthTexture:new bh(p.textureWidth,p.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const pt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new gn(m.framebufferWidth,m.framebufferHeight,{format:rn,type:On,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Qt.setContext(s),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return u.getDepthTexture()};function G($){for(let J=0;J<$.removed.length;J++){const pt=$.removed[J],Lt=E.indexOf(pt);Lt>=0&&(E[Lt]=null,b[Lt].disconnect(pt))}for(let J=0;J<$.added.length;J++){const pt=$.added[J];let Lt=E.indexOf(pt);if(Lt===-1){for(let Yt=0;Yt<b.length;Yt++)if(Yt>=E.length){E.push(pt),Lt=Yt;break}else if(E[Yt]===null){E[Yt]=pt,Lt=Yt;break}if(Lt===-1)break}const Et=b[Lt];Et&&Et.connect(pt)}}const k=new N,K=new N;function Q($,J,pt){k.setFromMatrixPosition(J.matrixWorld),K.setFromMatrixPosition(pt.matrixWorld);const Lt=k.distanceTo(K),Et=J.projectionMatrix.elements,Yt=pt.projectionMatrix.elements,Fe=Et[14]/(Et[10]-1),L=Et[14]/(Et[10]+1),fe=(Et[9]+1)/Et[5],Ot=(Et[9]-1)/Et[5],Pt=(Et[8]-1)/Et[0],_t=(Yt[8]+1)/Yt[0],de=Fe*Pt,vt=Fe*_t,Vt=Lt/(-Pt+_t),Pe=Vt*-Pt;if(J.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Pe),$.translateZ(Vt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Et[10]===-1)$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const xe=Fe+Vt,D=L+Vt,T=de-Pe,H=vt+(Lt-Pe),Y=fe*L/D*xe,Z=Ot*L/D*xe;$.projectionMatrix.makePerspective(T,H,Y,Z,xe,D),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function dt($,J){J===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(J.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let J=$.near,pt=$.far;u.texture!==null&&(u.depthNear>0&&(J=u.depthNear),u.depthFar>0&&(pt=u.depthFar)),P.near=x.near=g.near=J,P.far=x.far=g.far=pt,(U!==P.near||F!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),U=P.near,F=P.far),P.layers.mask=$.layers.mask|6,g.layers.mask=P.layers.mask&3,x.layers.mask=P.layers.mask&5;const Lt=$.parent,Et=P.cameras;dt(P,Lt);for(let Yt=0;Yt<Et.length;Yt++)dt(Et[Yt],Lt);Et.length===2?Q(P,g,x):P.projectionMatrix.copy(g.projectionMatrix),Ut($,P,Lt)};function Ut($,J,pt){pt===null?$.matrix.copy(J.matrixWorld):($.matrix.copy(pt.matrixWorld),$.matrix.invert(),$.matrix.multiply(J.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=$o*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function($){c=$,p!==null&&(p.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return u.texture!==null},this.getDepthSensingMesh=function(){return u.getMesh(P)},this.getCameraTexture=function($){return f[$]};let Ft=null;function ue($,J){if(h=J.getViewerPose(l||a),M=J,h!==null){const pt=h.views;m!==null&&(t.setRenderTargetFramebuffer(_,m.framebuffer),t.setRenderTarget(_));let Lt=!1;pt.length!==P.cameras.length&&(P.cameras.length=0,Lt=!0);for(let L=0;L<pt.length;L++){const fe=pt[L];let Ot=null;if(m!==null)Ot=m.getViewport(fe);else{const _t=d.getViewSubImage(p,fe);Ot=_t.viewport,L===0&&(t.setRenderTargetTextures(_,_t.colorTexture,_t.depthStencilTexture),t.setRenderTarget(_))}let Pt=R[L];Pt===void 0&&(Pt=new fn,Pt.layers.enable(L),Pt.viewport=new le,R[L]=Pt),Pt.matrix.fromArray(fe.transform.matrix),Pt.matrix.decompose(Pt.position,Pt.quaternion,Pt.scale),Pt.projectionMatrix.fromArray(fe.projectionMatrix),Pt.projectionMatrixInverse.copy(Pt.projectionMatrix).invert(),Pt.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),L===0&&(P.matrix.copy(Pt.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Lt===!0&&P.cameras.push(Pt)}const Et=s.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){d=n.getBinding();const L=d.getDepthInformation(pt[0]);L&&L.isValid&&L.texture&&u.init(L,s.renderState)}if(Et&&Et.includes("camera-access")&&S){t.state.unbindTexture(),d=n.getBinding();for(let L=0;L<pt.length;L++){const fe=pt[L].camera;if(fe){let Ot=f[fe];Ot||(Ot=new Th,f[fe]=Ot);const Pt=d.getCameraImage(fe);Ot.sourceTexture=Pt}}}}for(let pt=0;pt<b.length;pt++){const Lt=E[pt],Et=b[pt];Lt!==null&&Et!==void 0&&Et.update(Lt,J,l||a)}Ft&&Ft($,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),M=null}const Qt=new Ah;Qt.setAnimationLoop(ue),this.setAnimationLoop=function($){Ft=$},this.dispose=function(){}}}const Ei=new on,sg=new Kt;function rg(i,t){function e(u,f){u.matrixAutoUpdate===!0&&u.updateMatrix(),f.value.copy(u.matrix)}function n(u,f){f.color.getRGB(u.fogColor.value,vh(i)),f.isFog?(u.fogNear.value=f.near,u.fogFar.value=f.far):f.isFogExp2&&(u.fogDensity.value=f.density)}function s(u,f,y,v,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(u,f):f.isMeshToonMaterial?(r(u,f),d(u,f)):f.isMeshPhongMaterial?(r(u,f),h(u,f)):f.isMeshStandardMaterial?(r(u,f),p(u,f),f.isMeshPhysicalMaterial&&m(u,f,_)):f.isMeshMatcapMaterial?(r(u,f),M(u,f)):f.isMeshDepthMaterial?r(u,f):f.isMeshDistanceMaterial?(r(u,f),S(u,f)):f.isMeshNormalMaterial?r(u,f):f.isLineBasicMaterial?(a(u,f),f.isLineDashedMaterial&&o(u,f)):f.isPointsMaterial?c(u,f,y,v):f.isSpriteMaterial?l(u,f):f.isShadowMaterial?(u.color.value.copy(f.color),u.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(u,f){u.opacity.value=f.opacity,f.color&&u.diffuse.value.copy(f.color),f.emissive&&u.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(u.map.value=f.map,e(f.map,u.mapTransform)),f.alphaMap&&(u.alphaMap.value=f.alphaMap,e(f.alphaMap,u.alphaMapTransform)),f.bumpMap&&(u.bumpMap.value=f.bumpMap,e(f.bumpMap,u.bumpMapTransform),u.bumpScale.value=f.bumpScale,f.side===Ye&&(u.bumpScale.value*=-1)),f.normalMap&&(u.normalMap.value=f.normalMap,e(f.normalMap,u.normalMapTransform),u.normalScale.value.copy(f.normalScale),f.side===Ye&&u.normalScale.value.negate()),f.displacementMap&&(u.displacementMap.value=f.displacementMap,e(f.displacementMap,u.displacementMapTransform),u.displacementScale.value=f.displacementScale,u.displacementBias.value=f.displacementBias),f.emissiveMap&&(u.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,u.emissiveMapTransform)),f.specularMap&&(u.specularMap.value=f.specularMap,e(f.specularMap,u.specularMapTransform)),f.alphaTest>0&&(u.alphaTest.value=f.alphaTest);const y=t.get(f),v=y.envMap,_=y.envMapRotation;v&&(u.envMap.value=v,Ei.copy(_),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),u.envMapRotation.value.setFromMatrix4(sg.makeRotationFromEuler(Ei)),u.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.reflectivity.value=f.reflectivity,u.ior.value=f.ior,u.refractionRatio.value=f.refractionRatio),f.lightMap&&(u.lightMap.value=f.lightMap,u.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,u.lightMapTransform)),f.aoMap&&(u.aoMap.value=f.aoMap,u.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,u.aoMapTransform))}function a(u,f){u.diffuse.value.copy(f.color),u.opacity.value=f.opacity,f.map&&(u.map.value=f.map,e(f.map,u.mapTransform))}function o(u,f){u.dashSize.value=f.dashSize,u.totalSize.value=f.dashSize+f.gapSize,u.scale.value=f.scale}function c(u,f,y,v){u.diffuse.value.copy(f.color),u.opacity.value=f.opacity,u.size.value=f.size*y,u.scale.value=v*.5,f.map&&(u.map.value=f.map,e(f.map,u.uvTransform)),f.alphaMap&&(u.alphaMap.value=f.alphaMap,e(f.alphaMap,u.alphaMapTransform)),f.alphaTest>0&&(u.alphaTest.value=f.alphaTest)}function l(u,f){u.diffuse.value.copy(f.color),u.opacity.value=f.opacity,u.rotation.value=f.rotation,f.map&&(u.map.value=f.map,e(f.map,u.mapTransform)),f.alphaMap&&(u.alphaMap.value=f.alphaMap,e(f.alphaMap,u.alphaMapTransform)),f.alphaTest>0&&(u.alphaTest.value=f.alphaTest)}function h(u,f){u.specular.value.copy(f.specular),u.shininess.value=Math.max(f.shininess,1e-4)}function d(u,f){f.gradientMap&&(u.gradientMap.value=f.gradientMap)}function p(u,f){u.metalness.value=f.metalness,f.metalnessMap&&(u.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,u.metalnessMapTransform)),u.roughness.value=f.roughness,f.roughnessMap&&(u.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,u.roughnessMapTransform)),f.envMap&&(u.envMapIntensity.value=f.envMapIntensity)}function m(u,f,y){u.ior.value=f.ior,f.sheen>0&&(u.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),u.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(u.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,u.sheenColorMapTransform)),f.sheenRoughnessMap&&(u.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,u.sheenRoughnessMapTransform))),f.clearcoat>0&&(u.clearcoat.value=f.clearcoat,u.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(u.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,u.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(u.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ye&&u.clearcoatNormalScale.value.negate())),f.dispersion>0&&(u.dispersion.value=f.dispersion),f.iridescence>0&&(u.iridescence.value=f.iridescence,u.iridescenceIOR.value=f.iridescenceIOR,u.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(u.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,u.iridescenceMapTransform)),f.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),f.transmission>0&&(u.transmission.value=f.transmission,u.transmissionSamplerMap.value=y.texture,u.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(u.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,u.transmissionMapTransform)),u.thickness.value=f.thickness,f.thicknessMap&&(u.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=f.attenuationDistance,u.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(u.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(u.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=f.specularIntensity,u.specularColor.value.copy(f.specularColor),f.specularColorMap&&(u.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,u.specularColorMapTransform)),f.specularIntensityMap&&(u.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,u.specularIntensityMapTransform))}function M(u,f){f.matcap&&(u.matcap.value=f.matcap)}function S(u,f){const y=t.get(f).light;u.referencePosition.value.setFromMatrixPosition(y.matrixWorld),u.nearDistance.value=y.shadow.camera.near,u.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ag(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,v){const _=v.program;n.uniformBlockBinding(y,_)}function l(y,v){let _=s[y.id];_===void 0&&(M(y),_=h(y),s[y.id]=_,y.addEventListener("dispose",u));const b=v.program;n.updateUBOMapping(y,b);const E=t.render.frame;r[y.id]!==E&&(p(y),r[y.id]=E)}function h(y){const v=d();y.__bindingPointIndex=v;const _=i.createBuffer(),b=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,b,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,_),_}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){const v=s[y.id],_=y.uniforms,b=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let E=0,C=_.length;E<C;E++){const w=Array.isArray(_[E])?_[E]:[_[E]];for(let g=0,x=w.length;g<x;g++){const R=w[g];if(m(R,E,g,b)===!0){const P=R.__offset,U=Array.isArray(R.value)?R.value:[R.value];let F=0;for(let O=0;O<U.length;O++){const V=U[O],G=S(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,P+F,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,F),F+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,P,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,v,_,b){const E=y.value,C=v+"_"+_;if(b[C]===void 0)return typeof E=="number"||typeof E=="boolean"?b[C]=E:b[C]=E.clone(),!0;{const w=b[C];if(typeof E=="number"||typeof E=="boolean"){if(w!==E)return b[C]=E,!0}else if(w.equals(E)===!1)return w.copy(E),!0}return!1}function M(y){const v=y.uniforms;let _=0;const b=16;for(let C=0,w=v.length;C<w;C++){const g=Array.isArray(v[C])?v[C]:[v[C]];for(let x=0,R=g.length;x<R;x++){const P=g[x],U=Array.isArray(P.value)?P.value:[P.value];for(let F=0,O=U.length;F<O;F++){const V=U[F],G=S(V),k=_%b,K=k%G.boundary,Q=k+K;_+=K,Q!==0&&b-Q<G.storage&&(_+=b-Q),P.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=_,_+=G.storage}}}const E=_%b;return E>0&&(_+=b-E),y.__size=_,y.__cache={},this}function S(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function u(y){const v=y.target;v.removeEventListener("dispose",u);const _=a.indexOf(v.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function f(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:f}}class og{constructor(t={}){const{canvas:e=Du(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const M=new Uint32Array(4),S=new Int32Array(4);let u=null,f=null;const y=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let b=!1;this._outputColorSpace=$e;let E=0,C=0,w=null,g=-1,x=null;const R=new le,P=new le;let U=null;const F=new ht(0);let O=0,V=e.width,G=e.height,k=1,K=null,Q=null;const dt=new le(0,0,V,G),Ut=new le(0,0,V,G);let Ft=!1;const ue=new Ml;let Qt=!1,$=!1;const J=new Kt,pt=new N,Lt=new le,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function Fe(){return w===null?k:1}let L=n;function fe(A,z){return e.getContext(A,z)}try{const A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${al}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",tt,!1),L===null){const z="webgl2";if(L=fe(z,A),L===null)throw fe(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ot,Pt,_t,de,vt,Vt,Pe,xe,D,T,H,Y,Z,q,yt,st,xt,Mt,nt,ct,Ct,St,ot,Bt;function I(){Ot=new _m(L),Ot.init(),St=new Q0(L,Ot),Pt=new hm(L,Ot,t,St),_t=new Z0(L,Ot),Pt.reversedDepthBuffer&&p&&_t.buffers.depth.setReversed(!0),de=new Mm(L),vt=new z0,Vt=new J0(L,Ot,_t,vt,Pt,St,de),Pe=new fm(_),xe=new gm(_),D=new wf(L),ot=new lm(L,D),T=new vm(L,D,de,ot),H=new ym(L,T,D,de),nt=new Sm(L,Pt,Vt),st=new um(vt),Y=new O0(_,Pe,xe,Ot,Pt,ot,st),Z=new rg(_,vt),q=new k0,yt=new q0(Ot),Mt=new om(_,Pe,xe,_t,H,m,c),xt=new $0(_,H,Pt),Bt=new ag(L,de,Pt,_t),ct=new cm(L,Ot,de),Ct=new xm(L,Ot,de),de.programs=Y.programs,_.capabilities=Pt,_.extensions=Ot,_.properties=vt,_.renderLists=q,_.shadowMap=xt,_.state=_t,_.info=de}I();const it=new ig(_,L);this.xr=it,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const A=Ot.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ot.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(A){A!==void 0&&(k=A,this.setSize(V,G,!1))},this.getSize=function(A){return A.set(V,G)},this.setSize=function(A,z,W=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=A,G=z,e.width=Math.floor(A*k),e.height=Math.floor(z*k),W===!0&&(e.style.width=A+"px",e.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(V*k,G*k).floor()},this.setDrawingBufferSize=function(A,z,W){V=A,G=z,k=W,e.width=Math.floor(A*W),e.height=Math.floor(z*W),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(dt)},this.setViewport=function(A,z,W,X){A.isVector4?dt.set(A.x,A.y,A.z,A.w):dt.set(A,z,W,X),_t.viewport(R.copy(dt).multiplyScalar(k).round())},this.getScissor=function(A){return A.copy(Ut)},this.setScissor=function(A,z,W,X){A.isVector4?Ut.set(A.x,A.y,A.z,A.w):Ut.set(A,z,W,X),_t.scissor(P.copy(Ut).multiplyScalar(k).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(A){_t.setScissorTest(Ft=A)},this.setOpaqueSort=function(A){K=A},this.setTransparentSort=function(A){Q=A},this.getClearColor=function(A){return A.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor(...arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,W=!0){let X=0;if(A){let B=!1;if(w!==null){const et=w.texture.format;B=et===ml||et===pl||et===dl}if(B){const et=w.texture.type,lt=et===On||et===Ui||et===js||et===Zs||et===hl||et===ul,mt=Mt.getClearColor(),ut=Mt.getClearAlpha(),Rt=mt.r,Dt=mt.g,wt=mt.b;lt?(M[0]=Rt,M[1]=Dt,M[2]=wt,M[3]=ut,L.clearBufferuiv(L.COLOR,0,M)):(S[0]=Rt,S[1]=Dt,S[2]=wt,S[3]=ut,L.clearBufferiv(L.COLOR,0,S))}else X|=L.COLOR_BUFFER_BIT}z&&(X|=L.DEPTH_BUFFER_BIT),W&&(X|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",tt,!1),Mt.dispose(),q.dispose(),yt.dispose(),vt.dispose(),Pe.dispose(),xe.dispose(),H.dispose(),ot.dispose(),Bt.dispose(),Y.dispose(),it.dispose(),it.removeEventListener("sessionstart",wn),it.removeEventListener("sessionend",Ll),gi.stop()};function rt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const A=de.autoReset,z=xt.enabled,W=xt.autoUpdate,X=xt.needsUpdate,B=xt.type;I(),de.autoReset=A,xt.enabled=z,xt.autoUpdate=W,xt.needsUpdate=X,xt.type=B}function tt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function j(A){const z=A.target;z.removeEventListener("dispose",j),gt(z)}function gt(A){It(A),vt.remove(A)}function It(A){const z=vt.get(A).programs;z!==void 0&&(z.forEach(function(W){Y.releaseProgram(W)}),A.isShaderMaterial&&Y.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,W,X,B,et){z===null&&(z=Et);const lt=B.isMesh&&B.matrixWorld.determinant()<0,mt=Xh(A,z,W,X,B);_t.setMaterial(X,lt);let ut=W.index,Rt=1;if(X.wireframe===!0){if(ut=T.getWireframeAttribute(W),ut===void 0)return;Rt=2}const Dt=W.drawRange,wt=W.attributes.position;let Xt=Dt.start*Rt,ie=(Dt.start+Dt.count)*Rt;et!==null&&(Xt=Math.max(Xt,et.start*Rt),ie=Math.min(ie,(et.start+et.count)*Rt)),ut!==null?(Xt=Math.max(Xt,0),ie=Math.min(ie,ut.count)):wt!=null&&(Xt=Math.max(Xt,0),ie=Math.min(ie,wt.count));const _e=ie-Xt;if(_e<0||_e===1/0)return;ot.setup(B,X,mt,W,ut);let ce,re=ct;if(ut!==null&&(ce=D.get(ut),re=Ct,re.setIndex(ce)),B.isMesh)X.wireframe===!0?(_t.setLineWidth(X.wireframeLinewidth*Fe()),re.setMode(L.LINES)):re.setMode(L.TRIANGLES);else if(B.isLine){let At=X.linewidth;At===void 0&&(At=1),_t.setLineWidth(At*Fe()),B.isLineSegments?re.setMode(L.LINES):B.isLineLoop?re.setMode(L.LINE_LOOP):re.setMode(L.LINE_STRIP)}else B.isPoints?re.setMode(L.POINTS):B.isSprite&&re.setMode(L.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)er("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),re.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))re.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const At=B._multiDrawStarts,me=B._multiDrawCounts,Zt=B._multiDrawCount,Je=ut?D.get(ut).bytesPerElement:1,zi=vt.get(X).currentProgram.getUniforms();for(let Qe=0;Qe<Zt;Qe++)zi.setValue(L,"_gl_DrawID",Qe),re.render(At[Qe]/Je,me[Qe])}else if(B.isInstancedMesh)re.renderInstances(Xt,_e,B.count);else if(W.isInstancedBufferGeometry){const At=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,me=Math.min(W.instanceCount,At);re.renderInstances(Xt,_e,me)}else re.render(Xt,_e)};function ae(A,z,W){A.transparent===!0&&A.side===qe&&A.forceSinglePass===!1?(A.side=Ye,A.needsUpdate=!0,hr(A,z,W),A.side=hi,A.needsUpdate=!0,hr(A,z,W),A.side=qe):hr(A,z,W)}this.compile=function(A,z,W=null){W===null&&(W=A),f=yt.get(W),f.init(z),v.push(f),W.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),A!==W&&A.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights();const X=new Set;return A.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const et=B.material;if(et)if(Array.isArray(et))for(let lt=0;lt<et.length;lt++){const mt=et[lt];ae(mt,W,B),X.add(mt)}else ae(et,W,B),X.add(et)}),f=v.pop(),X},this.compileAsync=function(A,z,W=null){const X=this.compile(A,z,W);return new Promise(B=>{function et(){if(X.forEach(function(lt){vt.get(lt).currentProgram.isReady()&&X.delete(lt)}),X.size===0){B(A);return}setTimeout(et,10)}Ot.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let te=null;function Bn(A){te&&te(A)}function wn(){gi.stop()}function Ll(){gi.start()}const gi=new Ah;gi.setAnimationLoop(Bn),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(A){te=A,it.setAnimationLoop(A),A===null?gi.stop():gi.start()},it.addEventListener("sessionstart",wn),it.addEventListener("sessionend",Ll),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(z),z=it.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,z,w),f=yt.get(A,v.length),f.init(z),v.push(f),J.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ue.setFromProjectionMatrix(J,Nn,z.reversedDepth),$=this.localClippingEnabled,Qt=st.init(this.clippingPlanes,$),u=q.get(A,y.length),u.init(),y.push(u),it.enabled===!0&&it.isPresenting===!0){const et=_.xr.getDepthSensingMesh();et!==null&&ga(et,z,-1/0,_.sortObjects)}ga(A,z,0,_.sortObjects),u.finish(),_.sortObjects===!0&&u.sort(K,Q),Yt=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Yt&&Mt.addToRenderList(u,A),this.info.render.frame++,Qt===!0&&st.beginShadows();const W=f.state.shadowsArray;xt.render(W,A,z),Qt===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=u.opaque,B=u.transmissive;if(f.setupLights(),z.isArrayCamera){const et=z.cameras;if(B.length>0)for(let lt=0,mt=et.length;lt<mt;lt++){const ut=et[lt];Il(X,B,A,ut)}Yt&&Mt.render(A);for(let lt=0,mt=et.length;lt<mt;lt++){const ut=et[lt];Ul(u,A,ut,ut.viewport)}}else B.length>0&&Il(X,B,A,z),Yt&&Mt.render(A),Ul(u,A,z);w!==null&&C===0&&(Vt.updateMultisampleRenderTarget(w),Vt.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(_,A,z),ot.resetDefaultState(),g=-1,x=null,v.pop(),v.length>0?(f=v[v.length-1],Qt===!0&&st.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,y.pop(),y.length>0?u=y[y.length-1]:u=null};function ga(A,z,W,X){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)f.pushLight(A),A.castShadow&&f.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ue.intersectsSprite(A)){X&&Lt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(J);const lt=H.update(A),mt=A.material;mt.visible&&u.push(A,lt,mt,W,Lt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ue.intersectsObject(A))){const lt=H.update(A),mt=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Lt.copy(A.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Lt.copy(lt.boundingSphere.center)),Lt.applyMatrix4(A.matrixWorld).applyMatrix4(J)),Array.isArray(mt)){const ut=lt.groups;for(let Rt=0,Dt=ut.length;Rt<Dt;Rt++){const wt=ut[Rt],Xt=mt[wt.materialIndex];Xt&&Xt.visible&&u.push(A,lt,Xt,W,Lt.z,wt)}}else mt.visible&&u.push(A,lt,mt,W,Lt.z,null)}}const et=A.children;for(let lt=0,mt=et.length;lt<mt;lt++)ga(et[lt],z,W,X)}function Ul(A,z,W,X){const B=A.opaque,et=A.transmissive,lt=A.transparent;f.setupLightsView(W),Qt===!0&&st.setGlobalState(_.clippingPlanes,W),X&&_t.viewport(R.copy(X)),B.length>0&&cr(B,z,W),et.length>0&&cr(et,z,W),lt.length>0&&cr(lt,z,W),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function Il(A,z,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[X.id]===void 0&&(f.state.transmissionRenderTarget[X.id]=new gn(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?Fn:On,minFilter:Yn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));const et=f.state.transmissionRenderTarget[X.id],lt=X.viewport||R;et.setSize(lt.z*_.transmissionResolutionScale,lt.w*_.transmissionResolutionScale);const mt=_.getRenderTarget(),ut=_.getActiveCubeFace(),Rt=_.getActiveMipmapLevel();_.setRenderTarget(et),_.getClearColor(F),O=_.getClearAlpha(),O<1&&_.setClearColor(16777215,.5),_.clear(),Yt&&Mt.render(W);const Dt=_.toneMapping;_.toneMapping=ri;const wt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),f.setupLightsView(X),Qt===!0&&st.setGlobalState(_.clippingPlanes,X),cr(A,W,X),Vt.updateMultisampleRenderTarget(et),Vt.updateRenderTargetMipmap(et),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let ie=0,_e=z.length;ie<_e;ie++){const ce=z[ie],re=ce.object,At=ce.geometry,me=ce.material,Zt=ce.group;if(me.side===qe&&re.layers.test(X.layers)){const Je=me.side;me.side=Ye,me.needsUpdate=!0,Nl(re,W,X,At,me,Zt),me.side=Je,me.needsUpdate=!0,Xt=!0}}Xt===!0&&(Vt.updateMultisampleRenderTarget(et),Vt.updateRenderTargetMipmap(et))}_.setRenderTarget(mt,ut,Rt),_.setClearColor(F,O),wt!==void 0&&(X.viewport=wt),_.toneMapping=Dt}function cr(A,z,W){const X=z.isScene===!0?z.overrideMaterial:null;for(let B=0,et=A.length;B<et;B++){const lt=A[B],mt=lt.object,ut=lt.geometry,Rt=lt.group;let Dt=lt.material;Dt.allowOverride===!0&&X!==null&&(Dt=X),mt.layers.test(W.layers)&&Nl(mt,z,W,ut,Dt,Rt)}}function Nl(A,z,W,X,B,et){A.onBeforeRender(_,z,W,X,B,et),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),B.onBeforeRender(_,z,W,X,A,et),B.transparent===!0&&B.side===qe&&B.forceSinglePass===!1?(B.side=Ye,B.needsUpdate=!0,_.renderBufferDirect(W,z,X,B,A,et),B.side=hi,B.needsUpdate=!0,_.renderBufferDirect(W,z,X,B,A,et),B.side=qe):_.renderBufferDirect(W,z,X,B,A,et),A.onAfterRender(_,z,W,X,B,et)}function hr(A,z,W){z.isScene!==!0&&(z=Et);const X=vt.get(A),B=f.state.lights,et=f.state.shadowsArray,lt=B.state.version,mt=Y.getParameters(A,B.state,et,z,W),ut=Y.getProgramCacheKey(mt);let Rt=X.programs;X.environment=A.isMeshStandardMaterial?z.environment:null,X.fog=z.fog,X.envMap=(A.isMeshStandardMaterial?xe:Pe).get(A.envMap||X.environment),X.envMapRotation=X.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Rt===void 0&&(A.addEventListener("dispose",j),Rt=new Map,X.programs=Rt);let Dt=Rt.get(ut);if(Dt!==void 0){if(X.currentProgram===Dt&&X.lightsStateVersion===lt)return Ol(A,mt),Dt}else mt.uniforms=Y.getUniforms(A),A.onBeforeCompile(mt,_),Dt=Y.acquireProgram(mt,ut),Rt.set(ut,Dt),X.uniforms=mt.uniforms;const wt=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(wt.clippingPlanes=st.uniform),Ol(A,mt),X.needsLights=Yh(A),X.lightsStateVersion=lt,X.needsLights&&(wt.ambientLightColor.value=B.state.ambient,wt.lightProbe.value=B.state.probe,wt.directionalLights.value=B.state.directional,wt.directionalLightShadows.value=B.state.directionalShadow,wt.spotLights.value=B.state.spot,wt.spotLightShadows.value=B.state.spotShadow,wt.rectAreaLights.value=B.state.rectArea,wt.ltc_1.value=B.state.rectAreaLTC1,wt.ltc_2.value=B.state.rectAreaLTC2,wt.pointLights.value=B.state.point,wt.pointLightShadows.value=B.state.pointShadow,wt.hemisphereLights.value=B.state.hemi,wt.directionalShadowMap.value=B.state.directionalShadowMap,wt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,wt.spotShadowMap.value=B.state.spotShadowMap,wt.spotLightMatrix.value=B.state.spotLightMatrix,wt.spotLightMap.value=B.state.spotLightMap,wt.pointShadowMap.value=B.state.pointShadowMap,wt.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=Dt,X.uniformsList=null,Dt}function Fl(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=ta.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Ol(A,z){const W=vt.get(A);W.outputColorSpace=z.outputColorSpace,W.batching=z.batching,W.batchingColor=z.batchingColor,W.instancing=z.instancing,W.instancingColor=z.instancingColor,W.instancingMorph=z.instancingMorph,W.skinning=z.skinning,W.morphTargets=z.morphTargets,W.morphNormals=z.morphNormals,W.morphColors=z.morphColors,W.morphTargetsCount=z.morphTargetsCount,W.numClippingPlanes=z.numClippingPlanes,W.numIntersection=z.numClipIntersection,W.vertexAlphas=z.vertexAlphas,W.vertexTangents=z.vertexTangents,W.toneMapping=z.toneMapping}function Xh(A,z,W,X,B){z.isScene!==!0&&(z=Et),Vt.resetTextureUnits();const et=z.fog,lt=X.isMeshStandardMaterial?z.environment:null,mt=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:ys,ut=(X.isMeshStandardMaterial?xe:Pe).get(X.envMap||lt),Rt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Dt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),wt=!!W.morphAttributes.position,Xt=!!W.morphAttributes.normal,ie=!!W.morphAttributes.color;let _e=ri;X.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(_e=_.toneMapping);const ce=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,re=ce!==void 0?ce.length:0,At=vt.get(X),me=f.state.lights;if(Qt===!0&&($===!0||A!==x)){const Ve=A===x&&X.id===g;st.setState(X,A,Ve)}let Zt=!1;X.version===At.__version?(At.needsLights&&At.lightsStateVersion!==me.state.version||At.outputColorSpace!==mt||B.isBatchedMesh&&At.batching===!1||!B.isBatchedMesh&&At.batching===!0||B.isBatchedMesh&&At.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&At.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&At.instancing===!1||!B.isInstancedMesh&&At.instancing===!0||B.isSkinnedMesh&&At.skinning===!1||!B.isSkinnedMesh&&At.skinning===!0||B.isInstancedMesh&&At.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&At.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&At.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&At.instancingMorph===!1&&B.morphTexture!==null||At.envMap!==ut||X.fog===!0&&At.fog!==et||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==st.numPlanes||At.numIntersection!==st.numIntersection)||At.vertexAlphas!==Rt||At.vertexTangents!==Dt||At.morphTargets!==wt||At.morphNormals!==Xt||At.morphColors!==ie||At.toneMapping!==_e||At.morphTargetsCount!==re)&&(Zt=!0):(Zt=!0,At.__version=X.version);let Je=At.currentProgram;Zt===!0&&(Je=hr(X,z,B));let zi=!1,Qe=!1,Ps=!1;const ge=Je.getUniforms(),ln=At.uniforms;if(_t.useProgram(Je.program)&&(zi=!0,Qe=!0,Ps=!0),X.id!==g&&(g=X.id,Qe=!0),zi||x!==A){_t.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ge.setValue(L,"projectionMatrix",A.projectionMatrix),ge.setValue(L,"viewMatrix",A.matrixWorldInverse);const Ke=ge.map.cameraPosition;Ke!==void 0&&Ke.setValue(L,pt.setFromMatrixPosition(A.matrixWorld)),Pt.logarithmicDepthBuffer&&ge.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ge.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),x!==A&&(x=A,Qe=!0,Ps=!0)}if(B.isSkinnedMesh){ge.setOptional(L,B,"bindMatrix"),ge.setOptional(L,B,"bindMatrixInverse");const Ve=B.skeleton;Ve&&(Ve.boneTexture===null&&Ve.computeBoneTexture(),ge.setValue(L,"boneTexture",Ve.boneTexture,Vt))}B.isBatchedMesh&&(ge.setOptional(L,B,"batchingTexture"),ge.setValue(L,"batchingTexture",B._matricesTexture,Vt),ge.setOptional(L,B,"batchingIdTexture"),ge.setValue(L,"batchingIdTexture",B._indirectTexture,Vt),ge.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&ge.setValue(L,"batchingColorTexture",B._colorsTexture,Vt));const cn=W.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0)&&nt.update(B,W,Je),(Qe||At.receiveShadow!==B.receiveShadow)&&(At.receiveShadow=B.receiveShadow,ge.setValue(L,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(ln.envMap.value=ut,ln.flipEnvMap.value=ut.isCubeTexture&&ut.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&z.environment!==null&&(ln.envMapIntensity.value=z.environmentIntensity),Qe&&(ge.setValue(L,"toneMappingExposure",_.toneMappingExposure),At.needsLights&&qh(ln,Ps),et&&X.fog===!0&&Z.refreshFogUniforms(ln,et),Z.refreshMaterialUniforms(ln,X,k,G,f.state.transmissionRenderTarget[A.id]),ta.upload(L,Fl(At),ln,Vt)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ta.upload(L,Fl(At),ln,Vt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ge.setValue(L,"center",B.center),ge.setValue(L,"modelViewMatrix",B.modelViewMatrix),ge.setValue(L,"normalMatrix",B.normalMatrix),ge.setValue(L,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Ve=X.uniformsGroups;for(let Ke=0,_a=Ve.length;Ke<_a;Ke++){const _i=Ve[Ke];Bt.update(_i,Je),Bt.bind(_i,Je)}}return Je}function qh(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function Yh(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,z,W){const X=vt.get(A);X.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),vt.get(A.texture).__webglTexture=z,vt.get(A.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:W,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){const W=vt.get(A);W.__webglFramebuffer=z,W.__useDefaultFramebuffer=z===void 0};const Kh=L.createFramebuffer();this.setRenderTarget=function(A,z=0,W=0){w=A,E=z,C=W;let X=!0,B=null,et=!1,lt=!1;if(A){const ut=vt.get(A);if(ut.__useDefaultFramebuffer!==void 0)_t.bindFramebuffer(L.FRAMEBUFFER,null),X=!1;else if(ut.__webglFramebuffer===void 0)Vt.setupRenderTarget(A);else if(ut.__hasExternalTextures)Vt.rebindTextures(A,vt.get(A.texture).__webglTexture,vt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const wt=A.depthTexture;if(ut.__boundDepthTexture!==wt){if(wt!==null&&vt.has(wt)&&(A.width!==wt.image.width||A.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Vt.setupDepthRenderbuffer(A)}}const Rt=A.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(lt=!0);const Dt=vt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Dt[z])?B=Dt[z][W]:B=Dt[z],et=!0):A.samples>0&&Vt.useMultisampledRTT(A)===!1?B=vt.get(A).__webglMultisampledFramebuffer:Array.isArray(Dt)?B=Dt[W]:B=Dt,R.copy(A.viewport),P.copy(A.scissor),U=A.scissorTest}else R.copy(dt).multiplyScalar(k).floor(),P.copy(Ut).multiplyScalar(k).floor(),U=Ft;if(W!==0&&(B=Kh),_t.bindFramebuffer(L.FRAMEBUFFER,B)&&X&&_t.drawBuffers(A,B),_t.viewport(R),_t.scissor(P),_t.setScissorTest(U),et){const ut=vt.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+z,ut.__webglTexture,W)}else if(lt){const ut=z;for(let Rt=0;Rt<A.textures.length;Rt++){const Dt=vt.get(A.textures[Rt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Rt,Dt.__webglTexture,W,ut)}}else if(A!==null&&W!==0){const ut=vt.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ut.__webglTexture,W)}g=-1},this.readRenderTargetPixels=function(A,z,W,X,B,et,lt,mt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ut=vt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&lt!==void 0&&(ut=ut[lt]),ut){_t.bindFramebuffer(L.FRAMEBUFFER,ut);try{const Rt=A.textures[mt],Dt=Rt.format,wt=Rt.type;if(!Pt.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pt.textureTypeReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-X&&W>=0&&W<=A.height-B&&(A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+mt),L.readPixels(z,W,X,B,St.convert(Dt),St.convert(wt),et))}finally{const Rt=w!==null?vt.get(w).__webglFramebuffer:null;_t.bindFramebuffer(L.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(A,z,W,X,B,et,lt,mt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ut=vt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&lt!==void 0&&(ut=ut[lt]),ut)if(z>=0&&z<=A.width-X&&W>=0&&W<=A.height-B){_t.bindFramebuffer(L.FRAMEBUFFER,ut);const Rt=A.textures[mt],Dt=Rt.format,wt=Rt.type;if(!Pt.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pt.textureTypeReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Xt),L.bufferData(L.PIXEL_PACK_BUFFER,et.byteLength,L.STREAM_READ),A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+mt),L.readPixels(z,W,X,B,St.convert(Dt),St.convert(wt),0);const ie=w!==null?vt.get(w).__webglFramebuffer:null;_t.bindFramebuffer(L.FRAMEBUFFER,ie);const _e=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Lu(L,_e,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Xt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,et),L.deleteBuffer(Xt),L.deleteSync(_e),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,W=0){const X=Math.pow(2,-W),B=Math.floor(A.image.width*X),et=Math.floor(A.image.height*X),lt=z!==null?z.x:0,mt=z!==null?z.y:0;Vt.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,lt,mt,B,et),_t.unbindTexture()};const $h=L.createFramebuffer(),jh=L.createFramebuffer();this.copyTextureToTexture=function(A,z,W=null,X=null,B=0,et=null){et===null&&(B!==0?(er("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),et=B,B=0):et=0);let lt,mt,ut,Rt,Dt,wt,Xt,ie,_e;const ce=A.isCompressedTexture?A.mipmaps[et]:A.image;if(W!==null)lt=W.max.x-W.min.x,mt=W.max.y-W.min.y,ut=W.isBox3?W.max.z-W.min.z:1,Rt=W.min.x,Dt=W.min.y,wt=W.isBox3?W.min.z:0;else{const cn=Math.pow(2,-B);lt=Math.floor(ce.width*cn),mt=Math.floor(ce.height*cn),A.isDataArrayTexture?ut=ce.depth:A.isData3DTexture?ut=Math.floor(ce.depth*cn):ut=1,Rt=0,Dt=0,wt=0}X!==null?(Xt=X.x,ie=X.y,_e=X.z):(Xt=0,ie=0,_e=0);const re=St.convert(z.format),At=St.convert(z.type);let me;z.isData3DTexture?(Vt.setTexture3D(z,0),me=L.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Vt.setTexture2DArray(z,0),me=L.TEXTURE_2D_ARRAY):(Vt.setTexture2D(z,0),me=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,z.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,z.unpackAlignment);const Zt=L.getParameter(L.UNPACK_ROW_LENGTH),Je=L.getParameter(L.UNPACK_IMAGE_HEIGHT),zi=L.getParameter(L.UNPACK_SKIP_PIXELS),Qe=L.getParameter(L.UNPACK_SKIP_ROWS),Ps=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ce.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ce.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Rt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Dt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,wt);const ge=A.isDataArrayTexture||A.isData3DTexture,ln=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){const cn=vt.get(A),Ve=vt.get(z),Ke=vt.get(cn.__renderTarget),_a=vt.get(Ve.__renderTarget);_t.bindFramebuffer(L.READ_FRAMEBUFFER,Ke.__webglFramebuffer),_t.bindFramebuffer(L.DRAW_FRAMEBUFFER,_a.__webglFramebuffer);for(let _i=0;_i<ut;_i++)ge&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,vt.get(A).__webglTexture,B,wt+_i),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,vt.get(z).__webglTexture,et,_e+_i)),L.blitFramebuffer(Rt,Dt,lt,mt,Xt,ie,lt,mt,L.DEPTH_BUFFER_BIT,L.NEAREST);_t.bindFramebuffer(L.READ_FRAMEBUFFER,null),_t.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(B!==0||A.isRenderTargetTexture||vt.has(A)){const cn=vt.get(A),Ve=vt.get(z);_t.bindFramebuffer(L.READ_FRAMEBUFFER,$h),_t.bindFramebuffer(L.DRAW_FRAMEBUFFER,jh);for(let Ke=0;Ke<ut;Ke++)ge?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,cn.__webglTexture,B,wt+Ke):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,cn.__webglTexture,B),ln?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ve.__webglTexture,et,_e+Ke):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ve.__webglTexture,et),B!==0?L.blitFramebuffer(Rt,Dt,lt,mt,Xt,ie,lt,mt,L.COLOR_BUFFER_BIT,L.NEAREST):ln?L.copyTexSubImage3D(me,et,Xt,ie,_e+Ke,Rt,Dt,lt,mt):L.copyTexSubImage2D(me,et,Xt,ie,Rt,Dt,lt,mt);_t.bindFramebuffer(L.READ_FRAMEBUFFER,null),_t.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ln?A.isDataTexture||A.isData3DTexture?L.texSubImage3D(me,et,Xt,ie,_e,lt,mt,ut,re,At,ce.data):z.isCompressedArrayTexture?L.compressedTexSubImage3D(me,et,Xt,ie,_e,lt,mt,ut,re,ce.data):L.texSubImage3D(me,et,Xt,ie,_e,lt,mt,ut,re,At,ce):A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,et,Xt,ie,lt,mt,re,At,ce.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,et,Xt,ie,ce.width,ce.height,re,ce.data):L.texSubImage2D(L.TEXTURE_2D,et,Xt,ie,lt,mt,re,At,ce);L.pixelStorei(L.UNPACK_ROW_LENGTH,Zt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Je),L.pixelStorei(L.UNPACK_SKIP_PIXELS,zi),L.pixelStorei(L.UNPACK_SKIP_ROWS,Qe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ps),et===0&&z.generateMipmaps&&L.generateMipmap(me),_t.unbindTexture()},this.initRenderTarget=function(A){vt.get(A).__webglFramebuffer===void 0&&Vt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Vt.setTextureCube(A,0):A.isData3DTexture?Vt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Vt.setTexture2DArray(A,0):Vt.setTexture2D(A,0),_t.unbindTexture()},this.resetState=function(){E=0,C=0,w=null,_t.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}}const ea={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Cs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const lg=new El(-1,1,1,-1,0,1);class cg extends he{constructor(){super(),this.setAttribute("position",new kt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new kt([0,2,0,0,2,0],2))}}const hg=new cg;class Tl{constructor(t){this._mesh=new Jt(hg,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,lg)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Lh extends Cs{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Me?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=nr.clone(t.uniforms),this.material=new Me({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Tl(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Bc extends Cs{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class ug extends Cs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class fg{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new bt);this._width=n.width,this._height=n.height,e=new gn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Fn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Lh(ea),this.copyPass.material.blending=Kn,this.clock=new bf}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Bc!==void 0&&(a instanceof Bc?n=!0:a instanceof ug&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new bt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class dg extends Cs{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ht}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const pg={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ht(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class bs extends Cs{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new bt(t.x,t.y):new bt(256,256),this.clearColor=new ht(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new gn(r,a,{type:Fn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new gn(r,a,{type:Fn});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new gn(r,a,{type:Fn});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}const o=pg;this.highPassUniforms=nr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Me({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new bt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=nr.clone(ea.uniforms),this.blendMaterial=new Me({uniforms:this.copyUniforms,vertexShader:ea.vertexShader,fragmentShader:ea.fragmentShader,blending:$s,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ht,this._oldClearAlpha=1,this._basic=new ms,this._fsQuad=new Tl(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new bt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=bs.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=bs.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Me({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new bt(.5,.5)},direction:{value:new bt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(t){return new Me({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}bs.BlurDirectionX=new bt(1,0);bs.BlurDirectionY=new bt(0,1);const zr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class mg extends Cs{constructor(){super(),this.uniforms=nr.clone(zr.uniforms),this.material=new ff({name:zr.name,uniforms:this.uniforms,vertexShader:zr.vertexShader,fragmentShader:zr.fragmentShader}),this._fsQuad=new Tl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},$t.getTransfer(this._outputColorSpace)===ee&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===jc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Zc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Jc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Qc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===eh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ll?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===th&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class gg{ctx=null;muted=!1;master;sfx;music;eng=null;rush=null;noiseBuf;last={};step=0;nextNote=0;musicOn=!1;unlock(){if(this.ctx){this.ctx.resume();return}const t=window.AudioContext??window.webkitAudioContext;if(!t)return;const e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=this.muted?0:.8;const n=e.createDynamicsCompressor();this.master.connect(n).connect(e.destination),this.sfx=e.createGain(),this.sfx.gain.value=.9,this.sfx.connect(this.master),this.music=e.createGain(),this.music.gain.value=.16,this.music.connect(this.master),this.noiseBuf=e.createBuffer(1,e.sampleRate*2,e.sampleRate);const s=this.noiseBuf.getChannelData(0);for(let d=0;d<s.length;d++)s[d]=Math.random()*2-1;const r=e.createBiquadFilter();r.type="lowpass",r.frequency.value=400,r.Q.value=2;const a=e.createGain();a.gain.value=0;const o=(d,p)=>{const m=e.createOscillator();return m.type=d,m.detune.value=p,m.connect(r),m.start(),m};this.eng={o1:o("sawtooth",-8),o2:o("sawtooth",9),sub:o("square",0),filt:r,gain:a},r.connect(a).connect(this.sfx);const c=e.createBufferSource();c.buffer=this.noiseBuf,c.loop=!0;const l=e.createBiquadFilter();l.type="bandpass",l.frequency.value=900,l.Q.value=.6;const h=e.createGain();h.gain.value=0,c.connect(l).connect(h).connect(this.sfx),c.start(),this.rush={filt:l,gain:h}}setMuted(t){this.muted=t,this.ctx&&this.master.gain.setTargetAtTime(t?0:.8,this.ctx.currentTime,.05)}suspend(t){this.ctx&&(t?this.ctx.suspend():this.ctx.resume())}engine(t,e,n,s,r){if(!this.ctx||!this.eng||!this.rush)return;const a=this.ctx.currentTime,o=46+Math.abs(t)*2.6+e*22+(n?26:0)+(s?0:30);this.eng.o1.frequency.setTargetAtTime(o,a,.06),this.eng.o2.frequency.setTargetAtTime(o*1.5,a,.06),this.eng.sub.frequency.setTargetAtTime(o*.5,a,.06),this.eng.filt.frequency.setTargetAtTime(260+Math.abs(t)*22+e*500,a,.08),this.eng.gain.gain.setTargetAtTime(r?.05+e*.05:0,a,.1),this.rush.filt.frequency.setTargetAtTime(600+Math.abs(t)*45,a,.1),this.rush.gain.gain.setTargetAtTime(r&&s?Math.min(.22,Math.abs(t)*.006):r?.03:0,a,.12)}tone(t,e,n,s,r=0,a=0,o){const c=this.ctx,l=c.currentTime+r,h=c.createOscillator();h.type=n,h.frequency.setValueAtTime(t,l),a&&h.frequency.exponentialRampToValueAtTime(Math.max(20,t*a),l+e);const d=c.createGain();d.gain.setValueAtTime(0,l),d.gain.linearRampToValueAtTime(s,l+.008),d.gain.exponentialRampToValueAtTime(8e-4,l+e),h.connect(d).connect(o??this.sfx),h.start(l),h.stop(l+e+.02)}burst(t,e,n,s,r=.8,a=0){const o=this.ctx,c=o.currentTime+a,l=o.createBufferSource();l.buffer=this.noiseBuf,l.loop=!0;const h=o.createBiquadFilter();h.type="bandpass",h.Q.value=r,h.frequency.setValueAtTime(n,c),h.frequency.exponentialRampToValueAtTime(s,c+t);const d=o.createGain();d.gain.setValueAtTime(0,c),d.gain.linearRampToValueAtTime(e,c+.015),d.gain.exponentialRampToValueAtTime(8e-4,c+t),l.connect(h).connect(d).connect(this.sfx),l.start(c,Math.random()),l.stop(c+t+.02)}play(t,e=1){if(!this.ctx)return;const n=this.ctx.currentTime;if(!(n-(this.last[t]??-1)<.045))switch(this.last[t]=n,t){case"count":this.tone(440,.18,"square",.14);break;case"go":this.tone(880,.5,"square",.16),this.tone(1320,.5,"sine",.1);break;case"sun":this.tone(880*Math.pow(1.06,e),.14,"sine",.2),this.tone(1320*Math.pow(1.06,e),.2,"sine",.12,.05);break;case"gate":[523,659,784].forEach((s,r)=>this.tone(s,.28,"triangle",.2,r*.06));break;case"miss":this.tone(160,.35,"sawtooth",.16,0,.6);break;case"boost":this.burst(.7,.3,500,3200,1.2),this.tone(180,.6,"sawtooth",.08,0,2.5);break;case"hit":this.tone(90,.25,"sine",Math.min(.5,.15+e*.03),0,.5),this.burst(.22,Math.min(.4,.12+e*.02),1800,300,.7);break;case"splash":this.burst(.7,Math.min(.5,.2+e*.02),2400,350,.5),this.tone(70,.3,"sine",.3,0,.6);break;case"launch":this.burst(.35,.16,900,2600,1);break;case"near":this.burst(.25,.14,2600,5200,2);break;case"finish":[523,659,784,1047,1319].forEach((s,r)=>this.tone(s,.5,"triangle",.22,r*.11));break;case"ui":this.tone(660,.08,"sine",.12);break}}tickMusic(){if(!this.ctx||!this.musicOn){this.nextNote=0;return}const t=this.ctx;this.nextNote<t.currentTime&&(this.nextNote=t.currentTime+.05);const e=60/132/2,n=[220,174.6,261.6,196],s=[1,1.2,1.5,1.8,2,2.4,3];for(;this.nextNote<t.currentTime+.25;){const r=this.step++,a=n[Math.floor(r/16)%4],o=this.nextNote-t.currentTime;(r%4===0||r%16===10)&&this.tone(a/2,e*1.8,"triangle",.5,o,0,this.music);const c=[0,2,4,2,5,4,2,3][r%8];(r%2===0||r%8===7)&&this.tone(a*s[c],e*1.4,"square",.12,o,0,this.music),r%4===2&&this.tone(a*2*s[r/2%5|0],e*3,"sine",.16,o,0,this.music),this.nextNote+=e}}}class _g{keys=new Set;edges=new Set;touch={left:!1,right:!1,boost:!1,brake:!1,used:!1};padPrev=[];constructor(){addEventListener("keydown",t=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(t.code)&&t.preventDefault(),t.repeat||this.edges.add(t.code),this.keys.add(t.code)}),addEventListener("keyup",t=>this.keys.delete(t.code)),addEventListener("blur",()=>this.clear()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.clear()})}clear(){this.keys.clear(),this.edges.clear(),this.touch.left=this.touch.right=this.touch.boost=this.touch.brake=!1}hit(...t){let e=!1;for(const n of t)this.edges.delete(n)&&(e=!0);return e}endFrame(){this.edges.clear()}pad(){const t=navigator.getGamepads?navigator.getGamepads():[];for(const e of t)if(e&&e.connected)return e;return null}read(){const t=this.keys;let e=(t.has("KeyD")||t.has("ArrowRight")?1:0)-(t.has("KeyA")||t.has("ArrowLeft")?1:0),n=t.has("KeyW")||t.has("ArrowUp")?1:0,s=t.has("KeyS")||t.has("ArrowDown")?1:0,r=t.has("Space")||t.has("ShiftLeft")||t.has("ShiftRight"),a=this.edges.has("KeyR");this.touch.used&&(e+=(this.touch.right?1:0)-(this.touch.left?1:0),n=this.touch.brake?0:1,s=Math.max(s,this.touch.brake?1:0),r=r||this.touch.boost);const o=this.pad();if(o){const c=o.axes[0]??0;Math.abs(c)>.15&&(e+=c),n=Math.max(n,o.buttons[7]?.value??0,o.buttons[0]?.pressed?1:0),s=Math.max(s,o.buttons[6]?.value??0),r=r||!!o.buttons[1]?.pressed||!!o.buttons[5]?.pressed;const l=o.buttons.map(h=>h.pressed);l[3]&&!this.padPrev[3]&&(a=!0),l[9]&&!this.padPrev[9]&&this.edges.add("Escape"),this.padPrev=l}return{steer:Math.max(-1,Math.min(1,e)),throttle:n,brake:s,boost:r,reset:a}}}const Nt=(i,t,e)=>i<t?t:i>e?e:i,Wt=(i,t,e)=>i+(t-i)*e,gs=(i,t,e)=>{const n=Nt((e-i)/(t-i),0,1);return n*n*(3-2*n)},qn=i=>{for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return i},Xe=(i,t,e,n)=>i+(t-i)*(1-Math.exp(-e*n));function jn(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Di(i,t,e){let n=Math.imul(i,374761393)^Math.imul(t,668265263)^Math.imul(e,2147483647);return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}function vg(i,t,e=0){const n=Math.floor(i),s=Math.floor(t),r=i-n,a=t-s,o=r*r*(3-2*r),c=a*a*(3-2*a),l=Di(n,s,e),h=Di(n+1,s,e),d=Di(n,s+1,e),p=Di(n+1,s+1,e);return Wt(Wt(l,h,o),Wt(d,p,o),c)}function hs(i,t,e=4,n=0){let s=0,r=.5,a=1,o=0;for(let c=0;c<e;c++)s+=r*vg(i*a,t*a,n+c*17),o+=r,r*=.5,a*=2.03;return s/o}function us(i,t,e,n=.12){const s=i/t,r=Math.floor(s),a=s-r,o=Di(r,7,e),c=Di(r+1,7,e);return Wt(o,c,gs(1-n,1,a))}const Xs=Di,Be=2,Qo=12,Ja=[[150,0,17],[160,35,15],[180,-60,14],[150,50,14],[200,-20,17],[180,40,11.5],[170,-70,12],[160,0,14],[180,55,15],[140,0,15],[150,-25,20],[200,45,15],[190,-50,14],[170,20,15],[140,0,28],[160,0,70]],kc=[[480,620,2.6],[1655,1668,8.5],[2030,2190,2.8]],xg=16;function Tn(i,t){const e=Nt(t/Be,0,i.n-1.001),n=Math.floor(e),s=e-n;return{i:n,f:s,x:Wt(i.px[n],i.px[n+1],s),z:Wt(i.pz[n],i.pz[n+1],s),tx:Wt(i.tx[n],i.tx[n+1],s),tz:Wt(i.tz[n],i.tz[n+1],s),hw:Wt(i.hw[n],i.hw[n+1],s),wy:Wt(i.wy[n],i.wy[n+1],s),curv:Wt(i.curv[n],i.curv[n+1],s)}}function ve(i,t,e){const n=Tn(i,t),s=Math.hypot(n.tx,n.tz)||1;return{x:n.x-n.tz/s*e,z:n.z+n.tx/s*e,wy:n.wy,tx:n.tx/s,tz:n.tz/s,hw:n.hw}}function wi(i,t,e,n,s=10){let r=-1,a=1/0;const o=Math.max(0,n-s),c=Math.min(i.n-1,n+s);for(let S=o;S<=c;S++){const u=t-i.px[S],f=e-i.pz[S],y=u*u+f*f;y<a&&(a=y,r=S)}const l=t-i.px[r],h=e-i.pz[r],d=i.tx[r],p=i.tz[r],m=l*d+h*p,M=l*-p+h*d;return{i:r,s:r*Be+m,lat:M}}function ui(i,t){const e=Nt(t/Be,0,i.n-1.001),n=Math.floor(e);return Wt(i.wy[n],i.wy[n+1],e-n)}function Mg(i,t,e){for(const n of i.ramps)if(t>=n.s0&&t<=n.s1&&Math.abs(e-n.lat)<=n.half)return(t-n.s0)/(n.s1-n.s0)*n.height;return 0}const tl=(i,t,e)=>ui(i,t)+Mg(i,t,e);function ci(i,t){const e=i.gates;if(t<=e[0].s)return e[0].lat*gs(e[0].s-80,e[0].s,t);for(let n=0;n<e.length-1;n++)if(t<=e[n+1].s)return Wt(e[n].lat,e[n+1].lat,gs(e[n].s,e[n+1].s,t));return e[e.length-1].lat*(1-gs(e[e.length-1].s,e[e.length-1].s+60,t))}function Sg(){const i=Ja.reduce((g,x)=>g+x[0],0),t=Math.floor(i/Be)+1,e=new Float32Array(t),n=new Float32Array(t);let s=0,r=Ja[0][2];for(const[g,x,R]of Ja){const P=Math.round(s/Be),U=Math.min(t,Math.round((s+g)/Be));for(let F=P;F<U;F++)e[F]=x*Math.PI/180/g,n[F]=Wt(r,R,gs(0,1,(F-P)/(U-P)));r=R,s+=g}n[t-1]=r;const a=new Float32Array(t),o=14;for(let g=0;g<t;g++){let x=0,R=0;for(let P=-o;P<=o;P++){const U=Nt(g+P,0,t-1),F=1-Math.abs(P)/(o+1);x+=e[U]*F,R+=F}a[g]=x/R}const c=new Float32Array(t),l=new Float32Array(t),h=new Float32Array(t),d=new Float32Array(t),p=new Float32Array(t),m=new Float32Array(t);let M=-Math.PI/2,S=0,u=0;for(let g=0;g<t;g++){c[g]=S,l[g]=u,h[g]=Math.cos(M),d[g]=Math.sin(M);const x=g*Be;p[g]=n[g]+Math.sin(x*.021)*1.1+Math.sin(x*.047+1.3)*.6;let R=xg;for(const[P,U,F]of kc)R-=F*gs(P,U,x);m[g]=R,S+=Math.cos(M)*Be,u+=Math.sin(M)*Be,M+=a[g]*Be}const f={n:t,length:(t-1)*Be,px:c,pz:l,tx:h,tz:d,hw:p,wy:m,curv:a,startS:60,finishS:i-230,endS:i-40,fallS:kc[1][0],gates:[],suns:[],rocks:[],pads:[],ramps:[],grid:[]},y=jn(20261111);f.ramps=[{id:0,s0:1240,s1:1251,lat:-1.5,half:3.4,height:2.5},{id:1,s0:2290,s1:2301,lat:2,half:3.4,height:2.5}],f.pads=[{id:0,s0:250,s1:262,lat:3,half:3},{id:1,s0:705,s1:717,lat:-4,half:3},{id:2,s0:1196,s1:1208,lat:-1.5,half:3},{id:3,s0:1560,s1:1572,lat:0,half:3.2},{id:4,s0:1905,s1:1917,lat:4,half:3},{id:5,s0:2250,s1:2262,lat:2,half:3}];const v=[150,270,390,500,610,740,860,980,1090,1320,1410,1500,1620,1790,1900,2020,2130,2230,2380],_=[0,3,-4,3.5,-3,-4,2,-2.5,1.5,-1,3.5,-3,0,2,4,-4,4,2,0];v.forEach((g,x)=>{const R=Tn(f,g).hw,P=Nt(_[x],-(R-7),R-7);f.gates.push({id:x,s:g,lat:P,half:x===v.length-1?9:5})}),f.gates.push({id:f.gates.length,s:f.finishS,lat:0,half:60});const b=[[330,440,36],[520,600,27],[650,700,30],[800,960,32],[1010,1070,30],[1345,1480,34],[1720,1770,26],[1820,1880,32],[1950,2190,29],[2330,2360,30]];let E=0;for(const[g,x,R]of b)for(let P=g;P<=x;P+=R){const U=Tn(f,P).hw,F=ci(f,P),O=U>13.5?2:1;for(let V=0;V<O;V++){const G=1.5+y()*1.4;let k=0,K=!1;for(let Ut=0;Ut<12&&!K;Ut++){k=(y()*2-1)*(U-G-1.5),K=Math.abs(k-F)>G+5.2;for(const Ft of f.gates)Math.abs(Ft.s-P)<16&&Math.abs(k-Ft.lat)<Ft.half+G+1.5&&(K=!1);for(const Ft of f.pads)P>Ft.s0-25&&P<Ft.s1+25&&Math.abs(k-Ft.lat)<Ft.half+G+2&&(K=!1);for(const Ft of f.ramps)P>Ft.s0-30&&P<Ft.s1+60&&(K=!1);for(const Ft of f.rocks)Math.abs(Ft.s-P)<10&&Math.abs(Ft.lat-k)<Ft.r+G+5&&(K=!1)}if(!K)continue;const Q=P+(y()-.5)*8,dt=ve(f,Q,k);f.rocks.push({id:E++,s:Q,lat:k,x:dt.x,z:dt.z,r:G,h:1.2+G*.7,seed:Math.floor(y()*1e3)})}}let C=0;const w=(g,x,R)=>{for(const U of f.rocks)if(Math.abs(U.s-g)<U.r+3&&Math.abs(U.lat-x)<U.r+3)return;const P=ve(f,g,x);f.suns.push({id:C++,s:g,lat:x,x:P.x,z:P.z,y:tl(f,g,x)+1.3+R})};for(let g=0;g<f.gates.length-2;g++){const x=f.gates[g],R=f.gates[g+1],P=(x.s+R.s)/2;if(!(P>1630&&P<1760))for(let U=-2;U<=2;U++){const F=P+U*9;f.ramps.some(O=>F>O.s0-6&&F<O.s1+50)||w(F,ci(f,F),0)}}for(const g of f.ramps)for(let x=0;x<5;x++){const R=.18+x*.17;w(g.s1+30*R,g.lat,g.height+6.8*R-.5*Qo*R*R)}for(let g=0;g<6;g++){const x=.1+g*.2,R=f.fallS+31*x,P=ve(f,R,0);f.suns.push({id:C++,s:R,lat:0,x:P.x,z:P.z,y:ui(f,f.fallS)+1.2-.5*Qo*x*x})}return f.grid=[{s:f.startS-6,lat:-3.2},{s:f.startS-6,lat:3.2},{s:f.startS-16,lat:-6.4},{s:f.startS-16,lat:6.4}],f}const yg={steer:0,throttle:0,brake:0,boost:!1,reset:!1},ye={dt:1/120,vmax:33,vboost:44,acc:15,brake:22,reverse:8,drag:.05,grip:4.2,turn:1.45,hullR:1.25,boostDrain:.34,surgeTime:1.7,timeLimit:300,rivalBase:33.5},Eg=[{name:"MARA",skill:1,bias:-2.2},{name:"KODA",skill:.955,bias:2.4},{name:"IVY",skill:.91,bias:-.6}];class bg{course;boats=[];st;events=[];constructor(t){this.course=t,this.reset()}get player(){return this.boats[0]}reset(){const t=this.course;this.boats=[];for(let n=0;n<4;n++){const s=t.grid[n],r=ve(t,s.s,s.lat),a=Eg[n-1];this.boats.push({id:n,isPlayer:n===0,name:n===0?"YOU":a.name,x:r.x,z:r.z,y:r.wy,vx:0,vz:0,vy:0,heading:Math.atan2(r.tz,r.tx),yawRate:0,steer:0,throttle:0,speed:0,s:s.s,lat:s.lat,idx:Math.round(s.s/2),maxS:s.s,grounded:!0,airTime:0,boosting:!1,surge:0,finished:!1,finishTime:0,skill:a?a.skill:1,latBias:a?a.bias:0,latV:0})}const e=(n,s)=>{const r=t.grid[s],a=ve(t,r.s,r.lat);n.x=a.x,n.z=a.z,n.y=a.wy,n.s=r.s,n.lat=r.lat,n.maxS=r.s,n.idx=Math.round(r.s/2),n.heading=Math.atan2(a.tz,a.tx)};e(this.boats[0],2),e(this.boats[1],0),e(this.boats[2],1),e(this.boats[3],3),this.st={phase:"grid",t:0,countdown:3,clock:0,penalty:0,score:0,combo:1,boostMeter:.35,nextGate:0,gatesPassed:0,gatesMissed:0,sunsTaken:new Uint8Array(t.suns.length),sunCount:0,padCooldown:new Float32Array(t.pads.length*4),nearDone:new Uint8Array(t.rocks.length),stuckT:0,wrongWayT:0,resetCooldown:0,place:4,dnf:!1,bestAir:0,bonus:{place:0,time:0}},this.events=[]}start(){this.st.phase==="grid"&&(this.st.phase="countdown",this.st.countdown=3,this.events.push({type:"countdown",n:3}))}get time(){return this.st.clock+this.st.penalty}placeOf(t){let e=1;for(const n of this.boats)n!==t&&(n.finished&&(!t.finished||n.finishTime<t.finishTime)||!n.finished&&!t.finished&&n.maxS>t.maxS)&&e++;return e}step(t,e){const n=this.st;if(n.t+=t,n.phase==="grid")return;if(n.phase==="countdown"){const r=Math.ceil(n.countdown);n.countdown-=t;const a=Math.ceil(n.countdown);n.countdown<=0?(n.phase="racing",this.events.push({type:"go"})):a!==r&&this.events.push({type:"countdown",n:a}),this.player.throttle=e.throttle;return}n.phase==="racing"&&(n.clock+=t,this.time>=ye.timeLimit&&(n.phase="finished",n.dnf=!0,n.place=this.placeOf(this.player),this.events.push({type:"dnf"})));for(let r=0;r<n.padCooldown.length;r++)n.padCooldown[r]>0&&(n.padCooldown[r]-=t);n.resetCooldown>0&&(n.resetCooldown-=t);const s=n.phase==="racing";this.stepPlayer(t,s?e:this.coastInput());for(let r=1;r<this.boats.length;r++)this.stepRival(this.boats[r],t);this.collideBoats(),s&&(this.resolveCourse(e,t),n.place=this.placeOf(this.player))}coastInput(){const t=this.player,e=this.course,n=ve(e,Math.min(e.endS-30,t.s+30),0),s=Math.atan2(n.z-t.z,n.x-t.x),r=qn(s-t.heading),a=t.s>e.endS-70;return{steer:Nt(r*2,-1,1),throttle:a?0:.25,brake:a&&t.speed>1?1:0,boost:!1,reset:!1}}stepPlayer(t,e){const n=this.course,s=this.player,r=this.st,a=s.s,o=s.grounded;s.steer=Xe(s.steer,Nt(e.steer,-1,1),Math.abs(e.steer)>Math.abs(s.steer)?7:10,t),s.throttle=Nt(e.throttle,0,1),s.surge>0&&(s.surge-=t);const c=e.boost&&r.boostMeter>0&&r.phase==="racing";c&&(r.boostMeter=Math.max(0,r.boostMeter-ye.boostDrain*t)),s.boosting=c||s.surge>0;const l=Math.cos(s.heading),h=Math.sin(s.heading),d=-h,p=l;let m=s.vx*l+s.vz*h,M=s.vx*d+s.vz*p;if(s.grounded){const E=s.boosting?ye.vboost:ye.vmax;let C=s.throttle*ye.acc*(s.boosting?1.7:1)*Math.max(0,1-m/E);s.boosting&&s.throttle<.2&&(C+=ye.acc*1.2*Math.max(0,1-m/E)),e.brake>0&&(C-=m>.5?ye.brake*e.brake:ye.reverse*e.brake*Math.max(0,1+m/9)),C-=(ye.drag+.45*(1-Math.max(s.throttle,s.boosting?1:0)))*m,m>E&&(C-=(m-E)*1.4),m+=C*t;const w=ye.grip-1.6*Math.abs(s.steer)*Nt(m/30,0,1);M*=Math.exp(-w*t);const g=Nt(m/9,-1,1)*(1-.32*Nt((Math.abs(m)-20)/24,0,1));s.yawRate=Xe(s.yawRate,s.steer*ye.turn*g,7,t)}else m*=Math.exp(-.04*t),s.yawRate=Xe(s.yawRate,s.steer*.45,2,t);s.vx=l*m+d*M,s.vz=h*m+p*M,s.heading=qn(s.heading+s.yawRate*t),s.speed=m;let S=0,u=0;if(s.grounded){const E=1.2+2.2*Nt(-(n.wy[Math.min(n.n-1,s.idx+3)]-n.wy[s.idx])/.25,0,1);S=n.tx[s.idx]*E,u=n.tz[s.idx]*E}const f=s.x,y=s.z;s.x+=(s.vx+S)*t,s.z+=(s.vz+u)*t;for(const E of n.rocks){const C=E.r+ye.hullR*.85,w=s.x-E.x,g=s.z-E.z;if(Math.abs(w)>C+1||Math.abs(g)>C+1){if(!r.nearDone[E.id]&&r.phase==="racing"&&Math.abs(E.s-s.s)<1.2&&Math.abs(s.lat-E.lat)<E.r+4&&m>18&&s.grounded){r.nearDone[E.id]=1;const Q=150*r.combo;r.score+=Q,this.events.push({type:"nearmiss",points:Q})}continue}if(s.y>ui(n,E.s)+E.h)continue;const x=s.x-f,R=s.z-y,P=x*x+R*R||1e-9,U=Nt(((E.x-f)*x+(E.z-y)*R)/P,0,1),F=f+x*U,O=y+R*U;let V=F-E.x,G=O-E.z;const k=Math.hypot(V,G);if(k>=C)continue;k<1e-4?(V=-l,G=-h):(V/=k,G/=k),s.x=E.x+V*C,s.z=E.z+G*C;const K=s.vx*V+s.vz*G;K<0&&(s.vx-=1.35*K*V,s.vz-=1.35*K*G,s.vx*=.82,s.vz*=.82,-K>2&&(this.events.push({type:"hit",boat:0,kind:"rock",power:-K}),r.combo=1,r.nearDone[E.id]=1))}let v=wi(n,s.x,s.z,s.idx);s.idx=v.i;const b=Tn(n,v.s).hw-ye.hullR;if(Math.abs(v.lat)>b){const E=Math.sign(v.lat),C=-n.tz[s.idx]*E,w=n.tx[s.idx]*E,g=Math.abs(v.lat)-b;s.x-=C*g,s.z-=w*g;const x=s.vx*C+s.vz*w;if(x>0){s.vx-=1.25*x*C,s.vz-=1.25*x*w;const R=Nt(x*.02,0,.25);s.vx*=1-R,s.vz*=1-R;const P=Math.atan2(n.tz[s.idx],n.tx[s.idx]);s.heading=qn(s.heading+qn(P-s.heading)*Nt(x*.03,0,.5)),x>2.5&&(this.events.push({type:"hit",boat:0,kind:"bank",power:x}),x>5&&(r.combo=1))}v=wi(n,s.x,s.z,s.idx),s.idx=v.i}if(v.s>n.endS){s.x-=n.tx[s.idx]*(v.s-n.endS),s.z-=n.tz[s.idx]*(v.s-n.endS);const E=s.vx*n.tx[s.idx]+s.vz*n.tz[s.idx];E>0&&(s.vx-=E*n.tx[s.idx],s.vz-=E*n.tz[s.idx]),v=wi(n,s.x,s.z,s.idx)}else if(v.s<6){s.x+=n.tx[s.idx]*(6-v.s),s.z+=n.tz[s.idx]*(6-v.s);const E=s.vx*n.tx[s.idx]+s.vz*n.tz[s.idx];E<0&&(s.vx-=E*n.tx[s.idx],s.vz-=E*n.tz[s.idx]),v=wi(n,s.x,s.z,s.idx)}for(const E of n.ramps)if(v.s>E.s0+1.5&&v.s<E.s1&&Math.abs(v.lat-E.lat)<E.half){const C=(v.s-E.s0)/(E.s1-E.s0)*E.height;if(s.y<ui(n,v.s)+C-.9){const w=Math.sign(v.lat-E.lat)||1,g=E.half-Math.abs(v.lat-E.lat)+.05;s.x+=-n.tz[s.idx]*w*g,s.z+=n.tx[s.idx]*w*g;const x=-n.tz[s.idx]*w,R=n.tx[s.idx]*w,P=s.vx*x+s.vz*R;P<0&&(s.vx-=1.3*P*x,s.vz-=1.3*P*R,this.events.push({type:"hit",boat:0,kind:"ramp",power:-P})),v=wi(n,s.x,s.z,s.idx)}}s.s=v.s,s.lat=v.lat,s.s>s.maxS&&(s.maxS=s.s),this.stepVertical(s,t,a,o)}stepVertical(t,e,n,s){const r=this.course,a=tl(r,t.s,t.lat),o=tl(r,n,t.lat);if(t.vy-=Qo*e,t.y+=t.vy*e,t.y<=a){const c=(a-o)/e,l=-t.vy;if(t.y=a,t.vy=Math.max(0,Math.min(c,8.5)),c<=0&&(t.vy=0),t.airTime>.3){let h=0;t.isPlayer&&this.st.phase==="racing"&&(h=Math.round(t.airTime*4)*100*this.st.combo,this.st.score+=h,this.st.bestAir=Math.max(this.st.bestAir,t.airTime)),this.events.push({type:"land",boat:t.id,power:l,airTime:t.airTime,points:h}),t.isPlayer&&(t.vx*=.96,t.vz*=.96)}t.grounded=!0,t.airTime=0}else t.y-a>.12?(s&&t.y-a>.25&&this.events.push({type:"launch",boat:t.id}),t.grounded=t.airTime===0&&t.y-a<.25&&t.vy<=.5,t.grounded||(t.airTime+=e)):t.grounded=!0}rivalTargetLat(t,e){const n=this.course,s=t.s+e,r=Tn(n,s).hw;let a=Nt(ci(n,s)+t.latBias,-(r-3),r-3);for(const o of n.ramps)o.s0-t.s>-2&&o.s0-t.s<60&&Math.abs(a-o.lat)<o.half+2.2&&(a=o.lat);for(const o of n.rocks){const c=o.s-t.s;if(c<-3||c>45)continue;const l=o.r+2.6;if(Math.abs(a-o.lat)<l){const h=t.lat>=o.lat?1:-1;let d=o.lat+h*l;Math.abs(d)>r-2.5&&(d=o.lat-h*l),a=d}}return a}stepRival(t,e){const n=this.course,s=this.st,r=this.player,a=t.s,o=t.grounded,c=Tn(n,t.s);let l=ye.rivalBase*t.skill*(1-.22*Math.min(1,Math.abs(c.curv)*70));const h=t.s-r.s;l*=1-.1*Nt((h-40)/120,0,1)+.1*Nt((-h-40)/120,0,1),t.surge>0&&(t.surge-=e,l+=7),t.finished&&(l=t.s>n.endS-90?0:9),s.phase!=="racing"&&!t.finished&&s.phase!=="finished"&&(l=0),t.grounded&&(t.speed+=Nt(l-t.speed,-9*e,(4+9*Nt(1-t.speed/Math.max(1,l),0,1))*e)),t.throttle=l>t.speed-.5?1:.3,t.boosting=t.surge>0;const d=this.rivalTargetLat(t,14),p=Nt((d-t.lat)*1.6,-7,7)*Nt(t.speed/12,0,1);t.latV=Xe(t.latV,p,4,e),t.lat+=t.latV*e;const m=c.hw-ye.hullR;t.lat=Nt(t.lat,-m,m),t.s=Math.min(n.endS-4-t.id*7,t.s+t.speed*e),t.s>t.maxS&&(t.maxS=t.s);const M=ve(n,t.s,t.lat);t.vx=(M.x-t.x)/e,t.vz=(M.z-t.z)/e,t.x=M.x,t.z=M.z,t.idx=Math.round(t.s/2);const u=Math.atan2(M.tz,M.tx)+Math.atan2(t.latV,Math.max(6,t.speed));t.yawRate=Xe(t.yawRate,qn(u-t.heading)/e,6,e),t.steer=Nt(t.yawRate/1.1,-1,1),t.heading=u;for(const f of n.pads){const y=f.id*4+t.id;t.grounded&&s.padCooldown[y]<=0&&t.s>=f.s0&&t.s<=f.s1&&Math.abs(t.lat-f.lat)<=f.half&&(s.padCooldown[y]=3,t.surge=1.4,this.events.push({type:"pad",id:f.id,boat:t.id}))}this.stepVertical(t,e,a,o),!t.finished&&t.s>=n.finishS&&s.phase!=="grid"&&s.phase!=="countdown"&&(t.finished=!0,t.finishTime=s.clock,this.events.push({type:"finish",boat:t.id,place:this.placeOf(t)}))}collideBoats(){const t=this.course,e=this.player,n=3;for(let r=1;r<this.boats.length;r++){const a=this.boats[r];if(Math.abs(a.y-e.y)>1.6)continue;const o=e.x-a.x,c=e.z-a.z,l=Math.hypot(o,c);if(l>=n||l<1e-4)continue;const h=o/l,d=c/l,p=n-l;e.x+=h*p*.7,e.z+=d*p*.7;const m=e.vx-a.vx,M=e.vz-a.vz,S=m*h+M*d;S<0&&(e.vx-=1.1*S*h,e.vz-=1.1*S*d,-S>1.5&&this.events.push({type:"hit",boat:0,kind:"boat",power:-S}));const u=-(h*-t.tz[a.idx]+d*t.tx[a.idx]);a.lat+=u*p*.3,a.latV+=u*1.5}for(let r=1;r<this.boats.length;r++)for(let a=r+1;a<this.boats.length;a++){const o=this.boats[r],c=this.boats[a];if(Math.abs(o.s-c.s)<6.5&&Math.abs(o.lat-c.lat)<3){const l=o.lat>=c.lat?1:-1;o.latV+=l*.25,c.latV-=l*.25}}const s=wi(t,e.x,e.z,e.idx);e.idx=s.i,e.s=s.s,e.lat=s.lat}resolveCourse(t,e){const n=this.course,s=this.st,r=this.player;for(;s.nextGate<n.gates.length&&r.s>=n.gates[s.nextGate].s;){const l=n.gates[s.nextGate],h=s.nextGate===n.gates.length-1,d=Math.abs(r.lat-l.lat)<=l.half+.4;if(s.nextGate++,h)break;if(d){const p=250*s.combo;s.score+=p,s.gatesPassed++,s.combo=Math.min(5,s.combo+1),s.boostMeter=Math.min(1,s.boostMeter+.04),this.events.push({type:"gate",id:l.id,passed:!0,points:p})}else s.gatesMissed++,s.penalty+=3,s.combo=1,this.events.push({type:"gate",id:l.id,passed:!1,points:0})}for(const l of n.suns){if(s.sunsTaken[l.id]||Math.abs(l.s-r.s)>6)continue;const h=l.x-r.x,d=l.z-r.z;if(h*h+d*d<9&&Math.abs(l.y-(r.y+1))<2.6){s.sunsTaken[l.id]=1,s.sunCount++;const p=100*s.combo;s.score+=p,s.boostMeter=Math.min(1,s.boostMeter+.025),this.events.push({type:"sun",id:l.id,points:p})}}for(const l of n.pads){const h=l.id*4;r.grounded&&s.padCooldown[h]<=0&&r.s>=l.s0&&r.s<=l.s1&&Math.abs(r.lat-l.lat)<=l.half+.6&&(s.padCooldown[h]=3,r.surge=ye.surgeTime,s.boostMeter=Math.min(1,s.boostMeter+.12),this.events.push({type:"pad",id:l.id,boat:0}))}if(!r.finished&&s.nextGate>=n.gates.length){r.finished=!0,r.finishTime=this.time,s.phase="finished",s.place=this.placeOf(r),s.bonus.place=[3e3,2e3,1e3,0][s.place-1],s.bonus.time=Math.max(0,Math.round((115-this.time)*40)),s.score+=s.bonus.place+s.bonus.time,this.events.push({type:"finish",boat:0,place:s.place});return}const a=Math.atan2(n.tz[r.idx],n.tx[r.idx]),o=Math.cos(qn(r.heading-a));s.wrongWayT=o<-.3&&r.speed>3?s.wrongWayT+e:0;const c=t.throttle>.5||t.brake>.5;s.stuckT=c&&Math.hypot(r.vx,r.vz)<1.2?s.stuckT+e:0,(t.reset&&s.resetCooldown<=0||s.stuckT>2.5)&&this.recover()}recover(){const t=this.course,e=this.player,n=this.st;let s=Nt(e.s,t.startS-20,t.endS-20);for(const o of t.ramps)s>o.s0-12&&s<o.s1+4&&(s=o.s0-14);s>t.fallS-4&&s<t.fallS+24&&(s=t.fallS-8);let r=ci(t,s);for(const o of t.rocks)Math.abs(o.s-s)<o.r+5&&Math.abs(o.lat-r)<o.r+3&&(s-=o.r+7);r=ci(t,s);const a=ve(t,s,r);e.x=a.x,e.z=a.z,e.y=a.wy,e.vx=0,e.vz=0,e.vy=0,e.heading=Math.atan2(a.tz,a.tx),e.yawRate=0,e.steer=0,e.speed=0,e.s=s,e.lat=r,e.idx=Math.round(s/2),e.grounded=!0,e.airTime=0,e.surge=0,n.penalty+=2,n.combo=1,n.stuckT=0,n.resetCooldown=1,this.events.push({type:"reset"})}drain(){const t=this.events;return this.events=[],t}}function Tg(i){const t=i.course,e=i.player,n=12+Math.max(0,e.speed)*.55,s=e.s+n,r=Tn(t,s).hw;let a=Nt(ci(t,s),-(r-3),r-3);for(const l of t.ramps)l.s0-e.s>-2&&l.s0-e.s<70&&Math.abs(a-l.lat)<l.half+3&&(a=l.lat);for(const l of t.rocks){const h=l.s-e.s;if(h<-2||h>n+8)continue;const d=l.r+3;if(Math.abs(a-l.lat)<d){const p=e.lat>=l.lat?1:-1;let m=l.lat+p*d;Math.abs(m)>r-2.5&&(m=l.lat-p*d),a=m}}const o=ve(t,s,a),c=qn(Math.atan2(o.z-e.z,o.x-e.x)-e.heading);return{steer:Nt(c*2.4,-1,1),throttle:Math.abs(c)>.9?.4:1,brake:0,boost:i.st.boostMeter>.25&&Math.abs(c)<.12&&e.grounded,reset:!1}}const An=i=>document.getElementById(i);function wg(i){const t=Math.floor(i/60),e=Math.floor(i%60);return`${t}:${e.toString().padStart(2,"0")}`}function Uh(i){const t=Math.floor(i/60),e=i-t*60;return`${t}:${e.toFixed(2).padStart(5,"0")}`}class Ag{root=An("hud");cache={};dots=Array.from(document.querySelectorAll("#progress .d"));bar=document.querySelector("#progress i");lastCombo=1;set(t,e){this.cache[t]!==e&&(this.cache[t]=e,An(t).textContent=e)}show(t){this.root.classList.toggle("hidden",!t)}update(t){const e=t.st,n=t.course,s=t.player;if(this.set("timer",wg(t.time)),this.set("scoreVal",e.score.toLocaleString("en-US")),this.set("speedVal",String(Math.round(Math.abs(s.speed)*3.6))),this.set("posVal",String(e.place)),this.set("gateVal",`GATE ${Math.min(e.nextGate,n.gates.length-1)}/${n.gates.length-1}`),this.set("combo","x"+e.combo),e.combo!==this.lastCombo){const l=An("combo");l.classList.add("pop"),setTimeout(()=>l.classList.remove("pop"),140),this.lastCombo=e.combo}const r=Math.round(e.boostMeter*100)+"%";this.cache.boost!==r&&(this.cache.boost=r,An("boostFill").style.width=r),An("boost").classList.toggle("on",s.boosting);const a=n.finishS-n.startS;[1,2,3,0].forEach((l,h)=>{const d=Math.max(0,Math.min(1,(t.boats[l].s-n.startS)/a));this.dots[h].style.left=(d*100).toFixed(1)+"%",l===0&&(this.bar.style.width=(d*100).toFixed(1)+"%")});const c=e.phase==="racing"&&e.wrongWayT>.8?"方向反了！WRONG WAY":"";this.set("warn",c)}center(t){const e=An("center");e.textContent=t,e.classList.remove("pulse"),e.offsetWidth,e.classList.add("pulse")}popup(t,e=""){const n=An("popups");for(;n.children.length>3;)n.firstChild.remove();const s=document.createElement("div");s.className="pop "+e,s.textContent=t,n.appendChild(s),setTimeout(()=>s.remove(),1250)}clear(){An("popups").innerHTML="",An("center").textContent="",An("center").classList.remove("pulse"),this.lastCombo=1}}function Br(i,t,e,n){i=(i%e+e)%e,t=(t%e+e)%e;let s=Math.imul(i,374761393)^Math.imul(t,668265263)^Math.imul(n+1,1442695041);return s=Math.imul(s^s>>>13,1274126177),s^=s>>>16,(s>>>0)/4294967296}function Rg(i,t,e,n){const s=Math.floor(i),r=Math.floor(t),a=i-s,o=t-r,c=a*a*(3-2*a),l=o*o*(3-2*o);return Wt(Wt(Br(s,r,e,n),Br(s+1,r,e,n),c),Wt(Br(s,r+1,e,n),Br(s+1,r+1,e,n),c),l)}function fs(i,t,e,n){let s=0,r=.5,a=0,o=e;for(let c=0;c<5;c++)s+=r*Rg(i*o,t*o,o,n+c*31),a+=r,r*=.5,o*=2;return s/a}function Cg(i=256){const t=new Uint8Array(i*i*4);for(let n=0;n<i;n++)for(let s=0;s<i;s++){const r=s/i,a=n/i,o=(n*i+s)*4;t[o]=Math.round(255*fs(r,a,4,1)),t[o+1]=Math.round(255*fs(r,a,4,2)),t[o+2]=Math.round(255*fs(r,a,8,3)),t[o+3]=Math.round(255*fs(r,a,16,4))}const e=new xl(t,i,i,rn);return e.wrapS=e.wrapT=Ss,e.magFilter=sn,e.minFilter=Yn,e.generateMipmaps=!0,e.needsUpdate=!0,e}function Pg(i=256){const t=new Float32Array(i*i);for(let r=0;r<i;r++)for(let a=0;a<i;a++)t[r*i+a]=fs(a/i,r/i,4,1);const e=new Uint8Array(i*i*4),n=(r,a)=>t[(a+i)%i*i+(r+i)%i];for(let r=0;r<i;r++)for(let a=0;a<i;a++){const o=(r*i+a)*4,c=(n(a+1,r)-n(a-1,r))*i*.5,l=(n(a,r+1)-n(a,r-1))*i*.5;e[o]=Math.round(255*t[r*i+a]),e[o+1]=Math.round(255*Math.min(1,Math.max(0,.5+c/40))),e[o+2]=Math.round(255*Math.min(1,Math.max(0,.5+l/40))),e[o+3]=Math.round(255*fs(a/i,r/i,8,3))}const s=new xl(e,i,i,rn);return s.wrapS=s.wrapT=Ss,s.magFilter=sn,s.minFilter=Yn,s.generateMipmaps=!0,s.needsUpdate=!0,s}function qs(i,t,e){const n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"));const s=new uf(n);return s.colorSpace=$e,s.anisotropy=4,s}const Dg=new vf;function Ys(i,t=!0){const e=Dg.load(`./tex/${i}.jpg`);return e.colorSpace=$e,e.wrapS=e.wrapT=Ss,e.anisotropy=8,t||(e.generateMipmaps=!1,e.minFilter=sn),e}class Ze{pos=[];nor=[];col=[];c=new ht;v=new N;n=new N;nm=new zt;tri(t,e,n,s){this.c.set(s);const r=e[0]-t[0],a=e[1]-t[1],o=e[2]-t[2],c=n[0]-t[0],l=n[1]-t[1],h=n[2]-t[2];this.n.set(a*h-o*l,o*c-r*h,r*l-a*c).normalize();for(const d of[t,e,n])this.pos.push(d[0],d[1],d[2]),this.nor.push(this.n.x,this.n.y,this.n.z),this.col.push(this.c.r,this.c.g,this.c.b)}vtri(t,e,n,s,r,a){const o=e[0]-t[0],c=e[1]-t[1],l=e[2]-t[2],h=n[0]-t[0],d=n[1]-t[1],p=n[2]-t[2];this.n.set(c*p-l*d,l*h-o*p,o*d-c*h).normalize(),this.n.y<0&&this.n.negate();const m=[s,r,a];[t,e,n].forEach((M,S)=>{this.pos.push(M[0],M[1],M[2]),this.nor.push(this.n.x,this.n.y,this.n.z),this.col.push(m[S].r,m[S].g,m[S].b)})}face(t,e,n,s=1){const[r,a,o]=t,c=a[0]-r[0],l=a[1]-r[1],h=a[2]-r[2],d=o[0]-r[0],p=o[1]-r[1],m=o[2]-r[2],M=l*m-h*p,S=h*d-c*m,u=c*p-l*d;let f=0,y=0,v=0;for(const E of t)f+=E[0],y+=E[1],v+=E[2];f/=t.length,y/=t.length,v/=t.length;const b=(M*(f-n[0])+S*(y-n[1])+u*(v-n[2]))*s>=0?t:[...t].reverse();this.tri(b[0],b[1],b[2],e),b.length===4&&this.tri(b[0],b[2],b[3],e)}up(t,e){this.face(t,e,[t[0][0],-1e3,t[0][2]])}add(t,e,n){const s=t.index?t.toNonIndexed():t;s.getAttribute("normal")||s.computeVertexNormals();const r=s.getAttribute("position"),a=s.getAttribute("normal");this.c.set(e),this.nm.getNormalMatrix(n);for(let o=0;o<r.count;o++)this.v.fromBufferAttribute(r,o).applyMatrix4(n),this.pos.push(this.v.x,this.v.y,this.v.z),this.n.fromBufferAttribute(a,o).applyMatrix3(this.nm).normalize(),this.nor.push(this.n.x,this.n.y,this.n.z),this.col.push(this.c.r,this.c.g,this.c.b)}append(t,e){this.nm.getNormalMatrix(e);for(let n=0;n<t.pos.length;n+=3)this.v.set(t.pos[n],t.pos[n+1],t.pos[n+2]).applyMatrix4(e),this.pos.push(this.v.x,this.v.y,this.v.z),this.n.set(t.nor[n],t.nor[n+1],t.nor[n+2]).applyMatrix3(this.nm).normalize(),this.nor.push(this.n.x,this.n.y,this.n.z);for(const n of t.col)this.col.push(n)}build(){const t=new he;return t.setAttribute("position",new kt(this.pos,3)),t.setAttribute("normal",new kt(this.nor,3)),t.setAttribute("color",new kt(this.col,3)),t.computeBoundingSphere(),t}}const el=new Fi,Lg=new on,Ih=new N,Nh=new N,Ug=new N(0,1,0),Qa=new N;function Tt(i,t,e,n=0,s=0,r=0,a=1,o=a,c=a){return new Kt().compose(Nh.set(i,t,e),el.setFromEuler(Lg.set(n,s,r)),Ih.set(a,o,c))}function Te(i,t,e=1){Qa.set(t[0]-i[0],t[1]-i[1],t[2]-i[2]);const n=Qa.length();return el.setFromUnitVectors(Ug,Qa.normalize()),new Kt().compose(Nh.set((i[0]+t[0])/2,(i[1]+t[1])/2,(i[2]+t[2])/2),el,Ih.set(e,n,e))}const pe={skyZenith:4161488,skyMid:6465762,skyLow:9423854,skyHaze:14281972,fog:13878482,rock:11878698,rockDark:8398877,rockLit:14974022,grass:7313973,grassDark:4156714,waterDeep:1203300,waterMid:1813404,waterShallow:7658694,foam:16186875,boatOrange:15889440,boatBlue:2843584,boatGrey:13619414,vest:16169249,shirt:2381480,skin:15316108,hairBrown:4860450,hairBlond:15913061,boulder:10128514,boulderDark:6972008},Vc=new N(.42,.74,.52).normalize(),Ig=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  vec4 p = projectionMatrix * mat4(mat3(modelViewMatrix)) * vec4(position, 1.0);
  gl_Position = p.xyww;
}`,Ng=`
uniform vec3 uZenith; uniform vec3 uMid; uniform vec3 uLow; uniform vec3 uHaze; uniform vec3 uGround; uniform vec3 uSun;
uniform sampler2D tSky;
varying vec3 vDir;
void main() {
  vec3 d = normalize(vDir);
  float h = d.y;
  vec3 c = mix(uHaze, uLow, smoothstep(0.0, 0.10, h));
  c = mix(c, uMid, smoothstep(0.06, 0.32, h));
  c = mix(c, uZenith, smoothstep(0.28, 0.85, h));
  // painted cloud band wrapped four times round the horizon, fading into the gradient
  vec2 suv = vec2((atan(d.z, d.x) / 6.2831853 + 0.5) * 4.0, clamp(h / 0.72, 0.0, 1.0));
  vec3 sk = texture2D(tSky, suv).rgb;
  c = mix(c, sk, smoothstep(-0.01, 0.06, h) * (1.0 - smoothstep(0.55, 0.85, h)));
  c = mix(c, uGround, smoothstep(0.0, -0.12, h));
  float s = max(dot(d, uSun), 0.0);
  c += vec3(1.0, 0.92, 0.75) * (pow(s, 600.0) * 3.0 + pow(s, 24.0) * 0.10);
  gl_FragColor = vec4(c, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;function kr(i){const t=jn(i);return qs(512,256,e=>{e.clearRect(0,0,512,256);const n=[],s=9+Math.floor(t()*6);for(let a=0;a<s;a++){const o=a/(s-1),c=Math.sin(o*Math.PI),l=26+c*(34+t()*26);n.push({x:70+o*372+(t()-.5)*20,y:178-c*(38+t()*40)*.8,r:l}),t()<.6&&n.push({x:70+o*372+(t()-.5)*50,y:172-t()*10,r:l*.8})}for(const a of n){const o=e.createRadialGradient(a.x,a.y+a.r*.25,a.r*.2,a.x,a.y+a.r*.25,a.r*1.05);o.addColorStop(0,"rgba(196,200,224,0.95)"),o.addColorStop(.75,"rgba(206,210,230,0.8)"),o.addColorStop(1,"rgba(214,218,236,0)"),e.fillStyle=o,e.beginPath(),e.arc(a.x,a.y+a.r*.25,a.r*1.05,0,Math.PI*2),e.fill()}for(const a of n){const o=e.createRadialGradient(a.x-a.r*.25,a.y-a.r*.3,a.r*.1,a.x-a.r*.1,a.y-a.r*.12,a.r*.95);o.addColorStop(0,"rgba(255,252,240,1)"),o.addColorStop(.6,"rgba(252,244,226,0.96)"),o.addColorStop(1,"rgba(246,236,220,0)"),e.fillStyle=o,e.beginPath(),e.arc(a.x-a.r*.1,a.y-a.r*.12,a.r*.95,0,Math.PI*2),e.fill()}const r=e.createLinearGradient(0,170,0,230);r.addColorStop(0,"rgba(0,0,0,0)"),r.addColorStop(1,"rgba(0,0,0,1)"),e.globalCompositeOperation="destination-out",e.fillStyle=r,e.fillRect(0,170,512,90),e.globalCompositeOperation="source-over"})}function Fg(i,t,e){const n=new Me({vertexShader:Ig,fragmentShader:Ng,uniforms:{uZenith:{value:new ht(pe.skyZenith)},uMid:{value:new ht(pe.skyMid)},uLow:{value:new ht(pe.skyLow)},uHaze:{value:new ht(pe.skyHaze)},uGround:{value:new ht(8018514)},uSun:{value:Vc},tSky:{value:Ys("sky",!1)}},side:Ye,depthWrite:!1,depthTest:!0,fog:!1}),s=new Jt(new ar(1,32,16),n);s.frustumCulled=!1,s.renderOrder=-10,i.add(s);const r=new Sh,a=n.clone();a.uniforms.uGround.value=new ht(6269366),r.add(new Jt(s.geometry,a));const o=new Zo(t),c=o.fromScene(r,.04);i.environment=c.texture,i.environmentIntensity=.35,o.dispose(),i.fog=new vl(pe.fog,.00135);const l=new yf(16773332,3.3);l.castShadow=e>0;{l.shadow.mapSize.set(e,e);const S=l.shadow.camera;S.left=-70,S.right=70,S.top=70,S.bottom=-70,S.near=10,S.far=320,l.shadow.bias=-6e-4,l.shadow.normalBias=.35}i.add(l,l.target);const h=new xf(11916543,10241586,1.15);i.add(h);const d=new bn,p=jn(77),m=[kr(3),kr(11),kr(29),kr(41)];for(let S=0;S<15;S++){const u=new yh({map:m[S%m.length],transparent:!0,depthWrite:!1,fog:!1,opacity:.97}),f=new sf(u),y=p()*Math.PI*2,v=.03+p()*p()*.32,_=3e3;f.position.set(Math.cos(y)*Math.cos(v)*_,Math.sin(v)*_+60,Math.sin(y)*Math.cos(v)*_);const b=700+p()*1e3;f.scale.set(b,b*.5,1),f.renderOrder=-9,d.add(f)}d.visible=!1,i.add(d);const M=new N;return{sky:s,sunLight:l,hemi:h,clouds:d,update(S,u,f){s.position.copy(S.position),d.position.set(S.position.x,0,S.position.z),d.rotation.y=f*.0015;const y=140/Math.max(1,e);M.copy(u),M.x=Math.round(M.x/y)*y,M.z=Math.round(M.z/y)*y,l.target.position.copy(M),l.position.copy(M).addScaledVector(Vc,160)}}}const Og=`
attribute vec2 aData; attribute vec3 aColor;
uniform float uScale; uniform float uMaxPx;
varying float vAlpha; varying vec3 vColor; varying float vSeed; varying float vPx;
void main() {
  vSeed = fract(float(gl_VertexID) * 0.61803);
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  float px = aData.x * uScale / max(0.1, -mv.z);
  gl_PointSize = min(px, uMaxPx);
  vPx = gl_PointSize;
  // spray right in front of the lens thins out instead of whiting out the frame
  vAlpha = aData.y * smoothstep(1.2, 4.0, -mv.z) * min(1.0, uMaxPx / max(px, 1.0));
  vColor = aColor;
}`,zg=`
varying float vAlpha; varying vec3 vColor; varying float vSeed; varying float vPx;
uniform float uSoft;
float h21(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float vn(vec2 p) {
  vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1, 0)), f.x), mix(h21(i + vec2(0, 1)), h21(i + 1.0), f.x), f.y);
}
void main() {
  vec2 q = gl_PointCoord - 0.5;
  float d = length(q);
  // big blobs become torn foam clumps; tiny ones stay round droplets
  float lumpy = smoothstep(6.0, 26.0, vPx);
  vec2 o = vec2(vSeed * 37.0, vSeed * 91.0);
  float n = vn(q * 5.0 + o) * 0.65 + vn(q * 11.0 + o.yx) * 0.35;
  d += (n - 0.5) * 0.32 * lumpy;
  float a = smoothstep(0.5, uSoft, d) * vAlpha;
  a *= 1.0 - lumpy * 0.45 * smoothstep(0.55, 0.85, vn(q * 9.0 + o + 3.0)) * smoothstep(0.1, 0.35, d);
  if (a < 0.01) discard;
  float shade = 0.8 + 0.2 * smoothstep(0.25, -0.35, q.y + (n - 0.5) * 0.2);
  vec3 c = mix(vColor * vec3(0.78, 0.9, 0.95), vColor, shade);
  gl_FragColor = vec4(c * (0.86 + 0.14 * shade), a);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;class Fh{points;n;head=0;pos;vel;data;col;life;max;size;grow;alpha;grav;floor;scale={value:600};maxPx={value:90};alive=0;constructor(t,e,n=.12){this.n=t,this.pos=new Float32Array(t*3),this.vel=new Float32Array(t*3),this.data=new Float32Array(t*2),this.col=new Float32Array(t*3),this.life=new Float32Array(t),this.max=new Float32Array(t),this.size=new Float32Array(t),this.grow=new Float32Array(t),this.alpha=new Float32Array(t),this.grav=new Float32Array(t),this.floor=new Float32Array(t).fill(-1e9);const s=new he;s.setAttribute("position",new Ee(this.pos,3).setUsage(ds)),s.setAttribute("aData",new Ee(this.data,2).setUsage(ds)),s.setAttribute("aColor",new Ee(this.col,3).setUsage(ds));const r=new Me({vertexShader:Og,fragmentShader:zg,transparent:!0,depthWrite:!1,blending:e?$s:Li,uniforms:{uScale:this.scale,uMaxPx:this.maxPx,uSoft:{value:n}}});this.points=new hf(s,r),this.points.frustumCulled=!1,this.points.renderOrder=5}setViewport(t,e){this.scale.value=t/(2*Math.tan(e*Math.PI/360)),this.maxPx.value=t*.11}emit(t,e,n,s,r,a,o,c,l={}){const h=this.head;this.head=(this.head+1)%this.n,this.pos[h*3]=t,this.pos[h*3+1]=e,this.pos[h*3+2]=n,this.vel[h*3]=s,this.vel[h*3+1]=r,this.vel[h*3+2]=a,this.life[h]=o,this.max[h]=o,this.size[h]=c,this.grow[h]=l.grow??1.2,this.alpha[h]=l.alpha??.9,this.grav[h]=l.grav??12,this.floor[h]=l.floor??-1e9;const d=l.color??[.96,.99,1];this.col[h*3]=d[0],this.col[h*3+1]=d[1],this.col[h*3+2]=d[2]}update(t){let e=0;for(let s=0;s<this.n;s++){if(this.life[s]<=0){this.data[s*2]=0,this.data[s*2+1]=0;continue}this.life[s]-=t;const r=s*3;this.vel[r+1]-=this.grav[s]*t;const a=Math.exp(-.9*t);this.vel[r]*=a,this.vel[r+2]*=a,this.pos[r]+=this.vel[r]*t,this.pos[r+1]+=this.vel[r+1]*t,this.pos[r+2]+=this.vel[r+2]*t,this.pos[r+1]<this.floor[s]&&this.vel[r+1]<0&&(this.pos[r+1]=this.floor[s],this.life[s]=Math.min(this.life[s],this.max[s]*.12));const o=Math.max(0,this.life[s]/this.max[s]);this.size[s]+=this.grow[s]*t;const c=this.grav[s]<4;this.data[s*2]=this.size[s]*(c?1:Math.min(1,o*3.2)),this.data[s*2+1]=this.alpha[s]*(c?Math.min(1,o*2.2)*Math.min(1,(1-o)*6):Math.min(1,o*8)),e++}this.alive=e;const n=this.points.geometry;n.getAttribute("position").needsUpdate=!0,n.getAttribute("aData").needsUpdate=!0,n.getAttribute("aColor").needsUpdate=!0}clear(){this.life.fill(0)}}class Bg{constructor(t,e=2.6){this.life=e;const n=this.N;this.pos=new Float32Array(n*2*3),this.uv=new Float32Array(n*2*2),this.al=new Float32Array(n*2);const s=new he;s.setAttribute("position",new Ee(this.pos,3).setUsage(ds)),s.setAttribute("uv",new Ee(this.uv,2).setUsage(ds)),s.setAttribute("aAlpha",new Ee(this.al,1).setUsage(ds));const r=[];for(let o=0;o<n-1;o++)r.push(o*2,o*2+1,o*2+2,o*2+1,o*2+3,o*2+2);s.setIndex(r);const a=new Me({transparent:!0,depthWrite:!1,side:qe,uniforms:{tNoise:{value:t}},vertexShader:`attribute float aAlpha; varying vec2 vUv; varying float vA;
        void main(){ vUv = uv; vA = aAlpha; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,fragmentShader:`uniform sampler2D tNoise; varying vec2 vUv; varying float vA;
        void main(){
          float n = texture2D(tNoise, vec2(vUv.x * 0.9, vUv.y * 0.09)).r;
          float n2 = texture2D(tNoise, vec2(vUv.x * 2.3 + 0.3, vUv.y * 0.21)).b;
          float side = abs(vUv.x - 0.5) * 2.0;
          float body = smoothstep(1.0, 0.55, side);
          float streak = smoothstep(0.38 - vA * 0.3, 0.62, n * 0.6 + n2 * 0.4 + (1.0 - side) * 0.12);
          float a = vA * body * mix(streak, 1.0, vA * vA * 0.6);
          if (a < 0.01) discard;
          gl_FragColor = vec4(vec3(0.95, 0.985, 0.98), a);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`});this.mesh=new Jt(s,a),this.mesh.frustumCulled=!1,this.mesh.renderOrder=3}life;mesh;N=44;px=new Float32Array(this.N);py=new Float32Array(this.N);pz=new Float32Array(this.N);dx=new Float32Array(this.N);dz=new Float32Array(this.N);age=new Float32Array(this.N).fill(99);str=new Float32Array(this.N);head=0;lastX=1e9;lastZ=1e9;pos;uv;al;dist=0;reset(){this.age.fill(99),this.lastX=1e9,this.lastZ=1e9}update(t,e,n,s,r,a,o){const c=this.N;for(let p=0;p<c;p++)this.age[p]+=t;const l=Math.hypot(e-this.lastX,s-this.lastZ);l>.75&&(l>30&&this.age.fill(99),this.head=(this.head+1)%c,this.dist+=Math.min(l,2),this.lastX=e,this.lastZ=s);const h=this.head;this.px[h]=e,this.py[h]=n,this.pz[h]=s,this.dx[h]=-a,this.dz[h]=r,this.age[h]=0,this.str[h]=o;for(let p=0;p<c;p++){const m=(h-p+c*2)%c,M=this.age[m],S=Math.min(1,M/this.life),u=1.5+M*2.4,f=M>this.life?0:this.str[m]*Math.pow(1-S,1.4),y=p*6;this.pos[y]=this.px[m]+this.dx[m]*u,this.pos[y+1]=this.py[m]+.05,this.pos[y+2]=this.pz[m]+this.dz[m]*u,this.pos[y+3]=this.px[m]-this.dx[m]*u,this.pos[y+4]=this.py[m]+.05,this.pos[y+5]=this.pz[m]-this.dz[m]*u;const v=this.dist-p*.75;this.uv[p*4]=0,this.uv[p*4+1]=v,this.uv[p*4+2]=1,this.uv[p*4+3]=v,this.al[p*2]=f,this.al[p*2+1]=f}const d=this.mesh.geometry;d.getAttribute("position").needsUpdate=!0,d.getAttribute("uv").needsUpdate=!0,d.getAttribute("aAlpha").needsUpdate=!0}}class kg{mesh;u={uTime:{value:0},uAmp:{value:new N},tNoise:{value:null}};constructor(t){const e=[],n=[],s=[],r=[],c=(d,p)=>{const m=e.length/3;for(let M=0;M<=18;M++)for(let S=0;S<=9;S++){const u=p(M/18,S/9);e.push(u[0],u[1],u[2]),n.push(M/18,S/9),s.push(d)}for(let M=0;M<18;M++)for(let S=0;S<9;S++){const u=m+M*10+S,f=u+9+1;r.push(u,f,u+1,u+1,f,f+1)}};for(const d of[-1,1])c(d<0?0:1,(p,m)=>{const M=1.5-p*6.6,S=Math.pow(p,.75),u=1.85*Math.sin(Math.PI*Math.min(1,.12+p*1.25)),f=Math.max(0,(m-.68)/.32),y=(.5+3.4*S)*m+(.25+.9*S)*f*f,v=u*(Math.sin(.5*Math.PI*Math.min(1,m/.72))-.55*f*f*f);return[M-m*.9*S,.02+v,d*(1.02+y)]});c(2,(d,p)=>{const m=-3-d*6.5,M=(.35+d*1.5)*(p*2-1);return[m,.1+Math.sin(Math.PI*Math.min(1,d*1.15))*2*(1-.5*Math.abs(p*2-1)),M]});const l=new he;l.setAttribute("position",new kt(e,3)),l.setAttribute("uv",new kt(n,2)),l.setAttribute("aKind",new kt(s,1)),l.setIndex(r),this.u.tNoise.value=t;const h=new Me({transparent:!0,depthWrite:!1,side:qe,uniforms:this.u,vertexShader:`attribute float aKind; uniform vec3 uAmp; varying vec2 vUv; varying float vAmp; varying float vKind; varying vec3 vMv;
        void main(){
          vUv = uv; vKind = aKind;
          vAmp = aKind < 0.5 ? uAmp.x : aKind < 1.5 ? uAmp.y : uAmp.z;
          vec3 p = position;
          float s = 0.35 + 0.65 * vAmp;
          p.y *= vAmp; 
          if (aKind < 1.5) p.z = sign(p.z) * (1.02 + (abs(p.z) - 1.02) * s);
          else p.x = -3.0 + (p.x + 3.0) * s;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          vMv = mv.xyz;
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`uniform sampler2D tNoise; uniform float uTime; varying vec2 vUv; varying float vAmp; varying float vKind; varying vec3 vMv;
        void main(){
          float u = vUv.x, v = vUv.y;
          float across = vKind > 1.5 ? abs(v * 2.0 - 1.0) : v;
          float n = texture2D(tNoise, vec2(u * 1.6 + uTime * 1.9, across * 0.9 + vKind * 0.31)).r;
          float n2 = texture2D(tNoise, vec2(u * 4.5 + uTime * 3.6, across * 2.6)).b;
          float body = vKind > 1.5 ? 0.95 - across * 0.9 - u * 0.75 : 1.3 - across * 0.75 - u * 0.6;
          float a = smoothstep(0.52, 0.66, body * 0.62 + n * 0.55 + n2 * 0.2 - 0.12);
          // ragged fingers along the crest edge
          float fr = texture2D(tNoise, vec2(u * 9.0 + uTime * 2.4, 0.37 + vKind * 0.2)).g;
          a *= smoothstep(1.0, 0.72, across + fr * 0.28);
          a *= smoothstep(0.0, 0.06, u) * smoothstep(1.0, 0.72, u) * smoothstep(0.0, 0.25, vAmp);
          if (a < 0.02) discard;
          // streaky white foam over a glassy turquoise body near the hull
          float streak = texture2D(tNoise, vec2(u * 0.7 - uTime * 0.4, across * 5.0 + vKind)).r;
          float foam = vKind > 1.5 ? 1.0 : smoothstep(0.18, 0.55, across + (streak - 0.5) * 0.5 + n2 * 0.25);
          vec3 glass = vec3(0.42, 0.82, 0.86);
          vec3 white = mix(vec3(0.82, 0.93, 0.96), vec3(1.0), smoothstep(0.35, 0.7, n2 + across * 0.3));
          vec3 col = mix(glass, white, foam);
          a *= mix(0.55, 1.0, foam);
          // a curtain seen edge-on would collapse into a hard white line
          vec3 fn = normalize(cross(dFdx(vMv), dFdy(vMv)));
          a *= smoothstep(0.08, 0.35, abs(dot(fn, normalize(vMv))));
          gl_FragColor = vec4(col, a * 0.94);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`});this.mesh=new Jt(l,h),this.mesh.frustumCulled=!1,this.mesh.renderOrder=4}update(t,e,n,s){this.u.uTime.value=t,this.u.uAmp.value.set(e,n,s)}}const ks=new N;function un(i,t,e,n,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;ks.copy(t),ks[n]=0,ks.normalize();const l=.5*a/(a+o),h=1-ks.angleTo(i)/c;return Math.sign(ks[e])===1?h*l:o/(a+o)+l+l*(1-h)}class wl extends mi{constructor(t=1,e=1,n=1,s=2,r=.1){const a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const c=new N,l=new N,h=new N(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,p=this.attributes.normal.array,m=this.attributes.uv.array,M=d.length/6,S=new N,u=.5/a;for(let f=0,y=0;f<d.length;f+=3,y+=2)switch(c.fromArray(d,f),l.copy(c),l.x-=Math.sign(l.x)*u,l.y-=Math.sign(l.y)*u,l.z-=Math.sign(l.z)*u,l.normalize(),d[f+0]=h.x*Math.sign(c.x)+l.x*r,d[f+1]=h.y*Math.sign(c.y)+l.y*r,d[f+2]=h.z*Math.sign(c.z)+l.z*r,p[f+0]=l.x,p[f+1]=l.y,p[f+2]=l.z,Math.floor(f/M)){case 0:S.set(1,0,0),m[y+0]=un(S,l,"z","y",r,n),m[y+1]=1-un(S,l,"y","z",r,e);break;case 1:S.set(-1,0,0),m[y+0]=1-un(S,l,"z","y",r,n),m[y+1]=1-un(S,l,"y","z",r,e);break;case 2:S.set(0,1,0),m[y+0]=1-un(S,l,"x","z",r,t),m[y+1]=un(S,l,"z","x",r,n);break;case 3:S.set(0,-1,0),m[y+0]=1-un(S,l,"x","z",r,t),m[y+1]=1-un(S,l,"z","x",r,n);break;case 4:S.set(0,0,1),m[y+0]=1-un(S,l,"x","y",r,t),m[y+1]=1-un(S,l,"y","x",r,e);break;case 5:S.set(0,0,-1),m[y+0]=un(S,l,"x","y",r,t),m[y+1]=1-un(S,l,"y","x",r,e);break}}static fromJSON(t){return new wl(t.width,t.height,t.depth,t.segments,t.radius)}}const Vg={hull:pe.boatOrange,hullLight:16290362,trim:pe.boatBlue,panel:pe.boatGrey,vest:pe.vest,shirt:pe.shirt,hairA:pe.hairBrown,hairB:pe.hairBlond,badgeBg:"#e9541c"},Hg=[{hull:15856110,hullLight:16777215,trim:13777466,panel:9410211,vest:14828847,shirt:3027776,hairA:1907228,hairB:11817770,badgeBg:"#c92f2f"},{hull:2969523,hullLight:4485336,trim:15921906,panel:12107984,vest:15921906,shirt:1452646,hairA:6962210,hairB:1447446,badgeBg:"#1c3a94"},{hull:8015049,hullLight:10121186,trim:16109882,panel:13222618,vest:4507572,shirt:3811942,hairA:14275268,hairB:8007471,badgeBg:"#5a34a3"}],Vs=2303275,Hs=3356223,Vr=pe.skin,Gs=-2.6,na=3.15,Gg=30,Sn=-1.15,yn=1,Ue=.82,Rn=.24;function Al(i){const t=Nt((i-.55)/(na-.55),0,1);return{bg:(1.17-.05*Nt((-1.6-i)/1,0,1))*Math.sqrt(Math.max(0,1-t*t)),yg:.84+.2*Math.pow(t,1.6),yc:.1+.5*t*t,yk:-.25+.62*Math.pow(t,2.2)}}function to(i,t){const e=Al(i),n=e.bg*.86,s=e.yg-e.yc,r=(a,o)=>[i,e.yc+s*o,t*Wt(n,e.bg,1-(1-a)*(1-a))];return[[i,e.yk,0],[i,Wt(e.yk,e.yc,.62),t*n*.5],[i,e.yc-.02,t*n*.92],[i,e.yc+.03,t*n],r(.28,.24),r(.58,.54),r(.66,.61),r(.88,.82),[i,e.yg-.07,t*e.bg],[i,e.yg+.02,t*(e.bg-.035)],[i,e.yg+.005,t*Math.max(0,e.bg-.13)]]}const Hr=i=>Al(i).yg+.005,Gr=i=>Math.max(0,Al(i).bg-.13);function Wr(i,t,e,n){const s=[],r=[];for(let l=0;l<=i;l++)for(let h=0;h<=t;h++)s.push(...e(l/i,h/t));for(let l=0;l<i;l++)for(let h=0;h<t;h++){const d=l*(t+1)+h,p=d+t+1;r.push(d,p,d+1,d+1,p,p+1)}const a=new he;a.setAttribute("position",new kt(s,3)),a.setIndex(r),a.computeVertexNormals();const o=a.getAttribute("normal"),c=Math.floor(i/2)*(t+1)+Math.floor(t/2);if(o.getX(c)*n[0]+o.getY(c)*n[1]+o.getZ(c)*n[2]<0){for(let l=0;l<r.length;l+=3){const h=r[l+1];r[l+1]=r[l+2],r[l+2]=h}a.setIndex(r),a.computeVertexNormals()}return a}function Wg(i){const t=new Ze,e=new Ze,n=new Kt,s=new mi(1,1,1),r=new oi(1,1,1,10),a=new fa(1,1,6),o=new ar(1,14,10),c=(v,_,b,E)=>new wl(v,_,b,3,E),l=(v,_,b,E,C,w,g,x=0,R=0,P=0)=>t.add(s,g,Tt(v,_,b,x,R,P,E,C,w)),h=(v,_)=>{for(let b=0;b<v.length-1;b++)e.add(r,16777215,Te(v[b],v[b+1],_));for(const b of v)e.add(o,16777215,Tt(b[0],b[1],b[2],0,0,0,_))},d=[[0,3,Vs],[3,5,i.trim],[5,6,16053490],[6,10,i.hull]],p=v=>Gs+(na-Gs)*(1-Math.pow(1-v,1.25));for(const v of[-1,1])for(const[_,b,E]of d)t.add(Wr(Gg,b-_,(C,w)=>to(p(C),v)[_+Math.round(w*(b-_))],[0,0,v]),E,n);const m=to(Gs,-1),M=to(Gs,1),S=[0,.45,0];for(const[v,_,b]of d)for(let E=v;E<_;E++)t.face([m[E],M[E],M[E+1],m[E+1]],b,S);t.add(Wr(8,10,(v,_)=>{const b=Wt(Gs,Sn,v),E=_*2-1;return[b,Hr(b)+.06*(1-E*E),E*Gr(b)]},[0,1,0]),i.hull,n),t.add(Wr(14,10,(v,_)=>{const b=Wt(yn,na,v),E=_*2-1;return[b,Hr(b)+.13*(1-E*E)*(1-v*v),E*Gr(b)]},[0,1,0]),i.hull,n);for(const v of[-1,1])t.add(Wr(10,2,(_,b)=>{const E=Wt(Sn,yn,_);return[E,Hr(E),v*Wt(Ue,Gr(E),b)]},[0,1,0]),i.hull,n);for(const v of[-1,1]){const _=[];for(let b=0;b<=8;b++){const E=Wt(yn+.1,na-.35,b/8);_.push([E,Hr(E)+.004,v*Gr(E)*.55])}for(let b=0;b<_.length-1;b++)t.add(s,16053490,Te(_[b],_[b+1],1).multiply(new Kt().makeScale(.035,1,.012)))}const u=[-.1,.6,0],f=.86;for(const v of[-1,1])t.face([[Sn,Rn,v*Ue],[yn,Rn,v*Ue],[yn,f,v*Ue],[Sn,f,v*Ue]],Hs,u,-1);t.face([[Sn,Rn,-Ue],[Sn,Rn,Ue],[Sn,.92,Ue],[Sn,.92,-Ue]],Hs,u,-1),t.face([[yn,Rn,-Ue],[yn,Rn,Ue],[yn,.98,Ue],[yn,.98,-Ue]],Vs,u,-1),t.up([[Sn,Rn,-Ue],[yn,Rn,-Ue],[yn,Rn,Ue],[Sn,Rn,Ue]],Vs);for(const v of[-1,1])t.add(c(2.2,.09,.11,.04),i.trim,Tt(-.08,.875,v*.84));t.add(c(.11,.09,1.78,.04),i.trim,Tt(Sn-.02,.9,0)),t.add(c(.5,.22,1.66,.09),i.hull,Tt(1.22,1.02,0)),l(.98,1.2,0,.05,.34,1.52,1780282,0,0,-.42);for(const v of[-1,1])t.add(c(.08,.38,.06,.025),i.panel,Tt(.98,1.2,v*.78,0,0,-.42));t.add(c(.3,.52,1.5,.06),Vs,Tt(.84,.62,0));for(const v of[-.42,.42])t.add(r,Hs,Te([.82,.86,v],[.62,1.06,v],.035)),t.add(r,1118742,Te([.62,1.06,v-.27],[.62,1.06,v+.27],.03));for(const v of[-.42,.42])t.add(c(.62,.24,.62,.08),Hs,Tt(-.42,.36,v)),t.add(c(.16,.74,.6,.06),3948361,Tt(-.86,.72,v,0,0,.12)),t.add(c(.17,.09,.62,.04),i.panel,Tt(-.9,1.1,v,0,0,.12));for(const v of[-1,1]){t.add(c(.5,.05,.22,.02),i.panel,Tt(-2,.93,v*.42));for(const _ of[-.12,0,.12])l(-2+_,.955,v*.42,.05,.012,.16,Hs)}t.add(c(.46,.54,.98,.1),10988469,Tt(-2.82,.36,0)),t.add(c(.5,.08,1.02,.035),13159378,Tt(-2.8,.66,0));for(const v of[.47,.54])l(-3.052,v,0,.012,.03,.62,2895671);t.add(r,2895671,Te([-3,.26,0],[-3.1,.26,0],.2)),t.add(r,855570,Te([-3.09,.26,0],[-3.111,.26,0],.15)),t.add(c(.5,.12,.9,.05),Vs,Tt(-2.84,.06,0));for(const v of[-1,1])t.add(c(.38,.11,.42,.04),i.panel,Tt(-2.78,.2,v*.82)),t.add(c(.39,.04,.43,.015),i.trim,Tt(-2.78,.27,v*.82));for(const v of[-1,1])t.add(c(.62,.2,.04,.02),i.panel,Tt(-1.95,.62,v*1.16,v*-.2));for(const v of[-1,1]){const _=v*.97;h([[-1.25,.88,_],[-1.25,1.1,_],[.55,1.12,_],[.62,.9,_]],.032),h([[-.35,.88,_],[-.35,1.11,_]],.026),h([[-2.45,.92,v*.86],[-2.42,1.08,v*.86],[-1.62,1.09,v*.86],[-1.58,.92,v*.86]],.03),h([[1.7,.98,v*.86],[1.75,1.12,v*.82],[2.55,1.13,v*.36],[2.75,1.08,0]],.026)}t.add(c(.22,.06,.1,.02),i.panel,Tt(2.62,1.09,0));const y=new Ze;for(const v of[-1,1]){const _=v*.42,b=-.2,E=new Ze;l(-.3,.57,_,.56,.2,.4,1847125),l(.02,.5,_,.2,.34,.38,1847125),E.add(c(.3,.6,.46,.1),i.shirt,Tt(-.5,.95,_,0,0,b)),E.add(c(.38,.5,.52,.12),i.vest,Tt(-.5,.95,_,0,0,b)),E.add(c(.3,.12,.5,.05),i.vest,Tt(-.47,1.2,_,0,0,b));for(const P of[.84,1.02])E.add(c(.4,.045,.54,.02),2763827,Tt(-.5+(P-.95)*.2,P,_,0,0,b));E.add(s,2763827,Tt(-.69,.96,_,0,0,b,.02,.4,.07));const C=[-.4,1.19,_];for(const P of[-1,1]){const U=[C[0],C[1],_+P*.28],F=[.02,1.02,_+P*.3],O=[.45,.99,_+P*.2];E.add(o,i.shirt,Tt(U[0],U[1],U[2],0,0,0,.115)),E.add(r,i.shirt,Te(U,[Wt(U[0],F[0],.45),Wt(U[1],F[1],.45),Wt(U[2],F[2],.45)],.09)),E.add(r,Vr,Te([Wt(U[0],F[0],.4),Wt(U[1],F[1],.4),Wt(U[2],F[2],.4)],F,.07)),E.add(r,Vr,Te(F,O,.065)),E.add(o,1842466,Tt(O[0],O[1],O[2],0,0,0,.085))}E.add(r,Vr,Te([-.4,1.2,_],[-.37,1.32,_],.075));const w=-.35,g=1.47;E.add(o,Vr,Tt(w,g,_,0,0,0,.2,.215,.195));const x=v<0?i.hairA:i.hairB;if(E.add(o,x,Tt(w-.035,g+.045,_,0,0,0,.215,.2,.215)),v<0){const P=[[-.5,.9,0],[-.9,.35,.3],[-.9,.35,-.3],[-.2,1,.35],[-.2,1,-.35],[.25,.95,0],[-1,0,0],[-.6,.6,.7],[-.6,.6,-.7]];for(const U of P){const F=Math.hypot(U[0],U[1],U[2]),O=[U[0]/F,U[1]/F,U[2]/F],V=[w-.03+O[0]*.13,g+.05+O[1]*.13,_+O[2]*.13];E.add(a,x,Te(V,[V[0]+O[0]*.2,V[1]+O[1]*.2,V[2]+O[2]*.2],.085))}}else{const P=[[-1,.5,.25],[-1,.6,-.2],[-.9,.85,.05],[-1,.25,-.45],[-.3,1,.2],[.35,.9,-.1]];for(const U of P){const F=Math.hypot(U[0],U[1],U[2]),O=[U[0]/F,U[1]/F,U[2]/F],V=[w-.02+O[0]*.12,g+.06+O[1]*.12,_+O[2]*.12];E.add(a,x,Te(V,[V[0]+O[0]*.26,V[1]+O[1]*.26,V[2]+O[2]*.26],.1))}}const R=1.2;y.append(E,new Kt().makeTranslation(0,0,_).multiply(new Kt().makeScale(R,R,R)).multiply(new Kt().makeTranslation(.42,-.46,-_)))}return{hull:t.build(),crew:y.build(),chrome:e.build()}}function Xg(i){return qs(256,140,t=>{t.fillStyle=i,t.fillRect(0,0,256,140),t.lineWidth=10,t.strokeStyle="#fff6ea",t.beginPath(),t.roundRect(14,14,228,112,20),t.stroke(),t.fillStyle="#fff6ea",t.font="900 78px Nunito, Arial Black, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("JET",128,74)})}class qg{root=new bn;body=new bn;mesh;crew;lean=0;brace=0;pitch=0;roll=0;lift=0;sheets=null;ampL=0;ampR=0;ampT=0;phase;constructor(t,e){const n=new si({vertexColors:!0,roughness:.4,metalness:0}),s=Wg(t);this.mesh=new Jt(s.hull,n),this.crew=new Jt(s.crew,n);const r=new Jt(s.chrome,new si({color:14673132,metalness:.85,roughness:.22,envMapIntensity:1.4}));r.castShadow=!0,this.crew.castShadow=!0,this.crew.position.set(-.42,.46,0),this.crew.rotation.order="ZXY",this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.body.scale.set(.9,1.12,1.08),this.body.add(this.mesh,this.crew,r);const a=new Jt(new li(.52,.29),new si({map:Xg(t.badgeBg),roughness:.5}));a.position.set(-2.612,.55,-.79),a.rotation.y=-Math.PI/2,this.body.add(a),this.body.rotation.order="YZX",this.root.add(this.body),this.phase=e*1.7}addSheets(t){this.sheets=new kg(t),this.root.add(this.sheets.mesh)}update(t,e,n){const s=Nt(t.speed/30,0,1.4),r=t.grounded?.05+.09*Math.min(1,s)+.05*t.throttle*(1-Math.min(1,s)*.5)+(t.boosting?.04:0):Nt(t.vy*.04,-.45,.4);this.pitch=Xe(this.pitch,r,t.grounded?6:4,e),this.roll=Xe(this.roll,t.steer*.27*Nt(t.speed/18,0,1),6,e),this.lift=Xe(this.lift,t.grounded?.1*Math.min(1,s):.1,4,e);const a=t.grounded?Math.sin(n*12.7+this.phase)*.012*s+Math.sin(n*7.3+this.phase*2)*.01*s:0,o=Math.sin(n*1.9+this.phase)*.045*(1-Math.min(1,s)*.6);if(this.root.position.set(t.x,t.y+this.lift+o,t.z),this.body.rotation.set(this.roll+Math.sin(n*1.3+this.phase)*.012,-t.heading,this.pitch+a),this.lean=Xe(this.lean,t.steer*.2*Nt(t.speed/15,0,1),5,e),this.brace=Xe(this.brace,t.grounded?.07*t.throttle+(t.boosting?.1:0):-.12,5,e),this.crew.rotation.set(this.lean,0,this.brace+a*1.5),this.sheets){const c=t.grounded?Nt((t.speed-4)/22,0,1.15):0;this.ampL=Xe(this.ampL,c*(1+Nt(t.steer,-.6,1)*.55),7,e),this.ampR=Xe(this.ampR,c*(1+Nt(-t.steer,-.6,1)*.55),7,e),this.ampT=Xe(this.ampT,c*(.55+.45*t.throttle)*(t.boosting?1.35:1),6,e),this.sheets.mesh.rotation.y=-t.heading,this.sheets.mesh.position.y=-this.lift,this.sheets.update(n,this.ampL,this.ampR,this.ampT)}}}const eo=240;function Xr(i,t){const e=jn(t),n=new Ze,s=i?8:12,r=new ht(1919524),a=new ht(i?5020208:3967534),o=new ht(i?12375628:9750078),c=(h,d)=>(h<.5?r.clone().lerp(a,h*2):a.clone().lerp(o,(h-.5)*2)).multiplyScalar(d),l=4;for(let h=0;h<s;h++){const d=h/s*Math.PI*2+e()*.6,p=(i?1:1.15)*(.65+e()*.55),m=(i?.3:.12)*(.8+e()*.4);let M=1.3-e()*.45;const S=(i?1.25:1.75)*(.7+e()*.5),u=.82+e()*.3,f=Math.cos(d),y=Math.sin(d),v=-y,_=f;let b=.05,E=0,C=null,w=[],g=[],x=0;for(let R=0;R<=l;R++){const P=R/l,U=R===l?0:m*Math.pow(Math.sin(Math.PI*(.14+.86*P)),.7),F=i?U*.4:0,O=[f*b,E,y*b],V=[O[0]+v*U,E+F,O[2]+_*U],G=[O[0]-v*U,E+F,O[2]-_*U];if(C){const K=c(x,u),Q=c(P,u);if(i){const dt=K.clone().multiplyScalar(.8),Ut=Q.clone().multiplyScalar(.8);n.vtri(C,w,V,dt,K,Q),n.vtri(C,V,O,dt,Q,Ut),n.vtri(C,O,G,dt,Ut,Q),n.vtri(C,G,g,dt,Q,K)}else n.vtri(w,V,G,K,Q,Q),n.vtri(w,G,g,K,Q,K)}C=O,w=V,g=G,x=P;const k=p/l;b+=Math.cos(M)*k,E+=Math.sin(M)*k,M-=S/l}}return n.build()}function pn(i,t,e,n,s,r,a,o,c=1){const l=new da(1,c);i.add(l,o,Tt(t,e,n,0,t*3.1+n,0,s,r,a))}function Yg(i){const t=jn(i),e=new Ze;pn(e,0,.12,0,.6,.34,.6,3107370),pn(e,.28,.2,.15,.36,.26,.36,4162096);const n=[15750810,16155060,14827398,16492232];for(let s=0;s<11;s++){const r=t()*Math.PI*2,a=Math.sqrt(t())*.55,o=.42-a*a*.6;pn(e,Math.cos(r)*a,o+t()*.06,Math.sin(r)*a,.085+t()*.05,.07,.085+t()*.05,n[s%4],0)}return e.build()}function Hc(i){const t=jn(i),e=new Ze,n=new oi(1,1,1,5,1,!0),s=(t()-.5)*.14;e.add(n,3351583,Te([0,-.05,0],[s,.42,0],.035)),e.add(n,3351583,Te([s,.42,0],[s*1.6,.74,.02],.026)),e.add(n,3351583,Te([s,.45,0],[s+.2,.68,.08],.016)),e.add(n,3351583,Te([s,.5,0],[s-.18,.7,-.1],.016));const r=s*1.6;return pn(e,r,.76,0,.36,.09,.33,3105830),pn(e,r+.2,.7,.08,.2,.07,.2,3502122,0),pn(e,r-.2,.72,-.1,.22,.07,.2,2907941,0),pn(e,r-.03,.83,.02,.27,.08,.24,6068790,0),pn(e,r+.08,.89,-.03,.15,.05,.14,8829252,0),e.build()}function Kg(){const i=new Ze;return pn(i,0,.3,0,.6,.42,.6,4028972),pn(i,.35,.22,.2,.42,.3,.4,3105830,0),pn(i,-.3,.26,-.22,.4,.32,.42,5148466,0),pn(i,.05,.52,-.05,.36,.24,.36,6989370,0),i.build()}function no(i){const t=new da(1,2),e=t.getAttribute("position"),n=new Float32Array(e.count*3),s=new N,r=new ht(pe.boulder),a=new ht(pe.boulderDark),o=new ht;for(let l=0;l<e.count;l++){s.fromBufferAttribute(e,l);const h=hs(s.x*1.3+i,s.y*1.3+s.z*1.7,3,i),d=Math.round((.72+h*.62)*7)/7;s.multiplyScalar(d),s.y*=.86,e.setXYZ(l,s.x,s.y,s.z),o.copy(a).lerp(r,.35+.65*Math.min(1,Math.max(0,s.y*.6+.5))),o.multiplyScalar(.9+.2*Xs(Math.floor(l/3),i,3)),n[l*3]=o.r,n[l*3+1]=o.g,n[l*3+2]=o.b}t.setAttribute("color",new Ee(n,3));const c=new Float32Array(e.count*3);for(let l=0;l<e.count;l++)s.set(e.getX(l),e.getY(l)/.72,e.getZ(l)).normalize(),c[l*3]=s.x,c[l*3+1]=s.y,c[l*3+2]=s.z;return t.setAttribute("normal",new Ee(c,3)),t}function $g(){const i=new Ze,t=jn(5),e=new ht(2907941),n=new ht(5214e3),s=new ht(2377759);for(const r of[-.16,.02,.2]){const a=-t()*.05,o=-(.6+t()*.4);i.vtri([r-.012,a,0],[r+.012,a,0],[r,o,0],s,s,s);const c=10;for(let l=0;l<c;l++){const h=Wt(a,o,(l+.5)/c),d=l%2?1:-1,p=r+d*(.05+t()*.04),m=.07+t()*.03,M=.045,S=(t()-.5)*.08,u=t()<.5?e:n;i.vtri([p-m,h,S],[p,h+M,S+.02],[p+m,h,S],u,n,u),i.vtri([p-m,h,S],[p+m,h,S],[p,h-M,S-.02],u,u,e)}}return i.build()}class jg{group=new bn;fallTime={value:0};fallCount=0;kinds=new Map;bins=new Map;meshes=[];define(t,e){this.kinds.set(t,e)}add(t,e,n,s){const r=Math.floor(e/eo),a=t+":"+r;let o=this.bins.get(a);o||(o={kind:t,section:r,m:[],c:[]},this.bins.set(a,o)),o.m.push(n),o.c.push(s??new ht(1,1,1))}build(){for(const t of this.bins.values()){const e=this.kinds.get(t.kind),n=new as(e.geo,e.mat,t.m.length);t.m.forEach((s,r)=>{n.setMatrixAt(r,s),n.setColorAt(r,t.c[r])}),n.instanceMatrix.needsUpdate=!0,n.instanceColor&&(n.instanceColor.needsUpdate=!0),n.castShadow=e.cast,n.receiveShadow=!0,n.computeBoundingSphere(),this.group.add(n),this.meshes.push({mesh:n,s:(t.section+.5)*eo,range:e.range})}return this.bins.clear(),this.group}cull(t,e){for(const n of this.meshes)n.mesh.visible=Math.abs(n.s-t)<n.range*e+eo/2}get instanceCount(){return this.meshes.reduce((t,e)=>t+e.mesh.count,0)}}function Zg(i,t,e){const n=new jg,s=new Qr({vertexColors:!0,side:qe}),r=new Qr({vertexColors:!0,flatShading:!0}),a=new Qr({vertexColors:!0}),o=Ys("boulder");a.onBeforeCompile=u=>{u.uniforms.tBoulder={value:o},u.vertexShader=u.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vec4 bwp = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
        bwp = instanceMatrix * bwp;
        #endif
        vWPos = (modelMatrix * bwp).xyz;`),u.fragmentShader=u.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos; uniform sampler2D tBoulder;`).replace("#include <color_fragment>",`#include <color_fragment>
        vec3 bn = normalize(cross(dFdx(vWPos), dFdy(vWPos)));
        vec3 w3 = pow(abs(bn), vec3(4.0)); w3 /= dot(w3, vec3(1.0));
        vec3 bt = texture2D(tBoulder, vWPos.zy * 0.3).rgb * w3.x + texture2D(tBoulder, vWPos.xz * 0.3).rgb * w3.y + texture2D(tBoulder, vWPos.xy * 0.3).rgb * w3.z;
        diffuseColor.rgb *= mix(vec3(1.0), vec3(dot(bt, vec3(0.3, 0.59, 0.11)) * 5.0), 0.75);`)},n.define("broad0",{geo:Xr(!0,1),mat:s,cast:!1,range:380}),n.define("broad1",{geo:Xr(!0,2),mat:s,cast:!1,range:380}),n.define("fern0",{geo:Xr(!1,3),mat:s,cast:!1,range:320}),n.define("fern1",{geo:Xr(!1,4),mat:s,cast:!1,range:320}),n.define("flower",{geo:Yg(9),mat:r,cast:!1,range:320}),n.define("tree0",{geo:Hc(1),mat:r,cast:!1,range:1100}),n.define("tree1",{geo:Hc(7),mat:r,cast:!1,range:1100}),n.define("bush",{geo:Kg(),mat:r,cast:!1,range:700}),n.define("boulder0",{geo:no(1),mat:a,cast:!0,range:700}),n.define("boulder1",{geo:no(2),mat:a,cast:!0,range:700}),n.define("boulder2",{geo:no(3),mat:a,cast:!0,range:700}),n.define("vine",{geo:$g(),mat:s,cast:!1,range:520});const c=jn(4242),l=(u=.8,f=1.15)=>{const y=Wt(u,f,c());return new ht(y*(.94+c()*.12),y,y*(.9+c()*.15))};for(const u of t){const f=-u.nz*u.side,y=u.nx*u.side,v=_=>(c()-.5)*_;if(u.kind==="shore"){for(let _=0;_<3;_++)if(c()<.55){const b=c()<.6,E=b?1.5+c()*2.2:1.3+c()*1.6,C=v(3.6),w=c()*3.4-.6;n.add((b?"broad":"fern")+(c()<.5?0:1),u.s,Tt(u.x+f*C+u.nx*w,u.y-.1+w*.12,u.z+y*C+u.nz*w,0,c()*6.28,0,E),l())}if(c()<.16){const _=3+c()*2.2;n.add("broad"+(c()<.5?0:1),u.s,Tt(u.x-u.nx*1.2,u.y-.2,u.z-u.nz*1.2,0,c()*6.28,0,_),l(.95,1.15))}if(c()<.42){const _=1+Math.floor(c()*3),b=v(3),E=c()*2.2;for(let C=0;C<_;C++){const w=.9+c()*1.2,g=b+v(1.6),x=E+c()*1.2;n.add("flower",u.s,Tt(u.x+f*g+u.nx*x,u.y+.05,u.z+y*g+u.nz*x,0,c()*6.28,0,w),l(.95,1.1))}}if(c()<.46){const _=.8+c()*c()*2.6,b=v(3),E=_*.9-.3+c()*2.5;n.add("boulder"+Math.floor(c()*3),u.s,Tt(u.x+f*b+u.nx*E,u.y-.25*_,u.z+y*b+u.nz*E,v(.5),c()*6.28,v(.5),_,_*(.6+c()*.3),_*(.8+c()*.4)),l(.9,1.1))}}else if(u.kind==="ledge"){const _=c();if(_<.2){const b=.9+c()*1.6;n.add("bush",u.s,Tt(u.x+f*v(3),u.y-.05,u.z+y*v(3),0,c()*6.28,0,b,b*(.7+c()*.5),b),l())}else if(_<.36){const b=.9+c()*1;n.add("fern"+(c()<.5?0:1),u.s,Tt(u.x+f*v(3),u.y,u.z+y*v(3),0,c()*6.28,0,b),l())}else if(_<.4){const b=.6+c()*1;n.add("boulder"+Math.floor(c()*3),u.s,Tt(u.x,u.y+.1*b,u.z,v(.5),c()*6.28,0,b,b*.7,b),l(.95,1.15))}else if(_<.44){const b=3+c()*2.5;n.add("tree"+(c()<.5?0:1),u.s,Tt(u.x,u.y,u.z,0,c()*6.28,0,b),l(.9,1.1))}}else if(u.kind==="lip"){if(u.drop>3&&c()<.2){const _=-u.nx,b=-u.nz,E=Math.min(u.drop*.9,2.5+c()*7),C=1.6+c()*2.2;n.add("vine",u.s,Tt(u.x+_*.3+f*v(3),u.y+.1,u.z+b*.3+y*v(3),0,Math.atan2(_,b)+v(.4),0,C,E,C),l(.85,1.1))}if(c()<.1){const _=.7+c()*1;n.add("bush",u.s,Tt(u.x-u.nx*.1,u.y-.1,u.z-u.nz*.1,0,c()*6.28,0,_,_*.7,_),l())}}else{const _=c();if(_<.22){const b=4.5+c()*4;n.add("tree"+(c()<.5?0:1),u.s,Tt(u.x+f*v(3),u.y-.2,u.z+y*v(3),0,c()*6.28,0,b,b*(.9+c()*.3),b),l(.9,1.12))}else if(_<.5){const b=1.4+c()*2.4;n.add("bush",u.s,Tt(u.x+f*v(3),u.y-.1,u.z+y*v(3),0,c()*6.28,0,b,b*(.6+c()*.4),b),l())}}}const h={value:0},d=new Me({transparent:!0,depthWrite:!1,side:qe,uniforms:{uTime:h,tNoise:{value:e}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tNoise; uniform float uTime; varying vec2 vUv;
      void main(){
        float n = texture2D(tNoise, vec2(vUv.x * 1.3, vUv.y * 0.35 + uTime * 0.55)).r;
        float n2 = texture2D(tNoise, vec2(vUv.x * 3.1 + 0.4, vUv.y * 0.9 + uTime * 1.1)).b;
        float edge = smoothstep(0.0, 0.3, vUv.x) * smoothstep(1.0, 0.7, vUv.x);
        float a = edge * smoothstep(0.30, 0.62, n * 0.65 + n2 * 0.45 + edge * 0.12) * smoothstep(1.0, 0.94, vUv.y);
        a = max(a, smoothstep(0.16, 0.0, vUv.y) * edge);
        if (a < 0.02) discard;
        gl_FragColor = vec4(mix(vec3(0.74, 0.92, 0.94), vec3(1.0), n2), a * 0.92);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`});let p=-1e9;const m=[],M=[],S=[];for(const u of t){if(u.kind!=="lip"||u.tier>1||u.drop<5.5||u.s-p<150||u.s<120||u.s>i.finishS-60||c()>.08)continue;p=u.s;const f=-u.nz,y=u.nx,v=1.6+c()*1.8,_=.9,b=m.length/3,E=u.y-u.drop+.05;for(const[C,w,g,x]of[[u.x,u.y+.05,u.z,1],[u.fx,E,u.fz,0]])for(const R of[-1,1])m.push(C-u.nx*_+f*R*v*(x?.8:1.15),w,g-u.nz*_+y*R*v*(x?.8:1.15)),M.push(R<0?0:1,x);S.push(b,b+1,b+2,b+1,b+3,b+2),n.add("bush",u.s,Tt(u.x+f*(v+.8),u.y-.1,u.z+y*(v+.8),0,c()*6,0,1.3,.9,1.3),l())}if(S.length){const u=new he;u.setAttribute("position",new kt(m,3)),u.setAttribute("uv",new kt(M,2)),u.setIndex(S);const f=new Jt(u,d);f.frustumCulled=!1,f.renderOrder=2,n.group.add(f)}n.fallTime=h,n.fallCount=S.length/6;for(const u of i.rocks){const f=ui(i,u.s);n.add("boulder"+u.seed%3,u.s,Tt(u.x,f+u.h*.12,u.z,0,u.seed,0,u.r*1.08,u.h*1,u.r*1.08),new ht(1.05,1.02,1))}return n.build(),n}const io=4.2,qr={next:5826286,ahead:2789274,passed:7332746,missed:16734794};class Jg{constructor(t,e){this.c=t;const n=new oi(1,1,1,10),s=new ar(1,10,8),r=new mi(1,1,1),a=new si({vertexColors:!0,roughness:.55}),o=t.gates.length-1,c=new Ze;c.add(n,16052712,Tt(0,.12,0,0,0,0,.62,.5,.62)),c.add(n,15759906,Tt(0,.34,0,0,0,0,.64,.14,.64)),c.add(n,1780282,Te([0,.3,0],[0,io,0],.13));const l=new as(c.build(),a,o*2);l.castShadow=!0;const h=new ms({color:16777215}),d=new Ze;d.add(s,16777215,Tt(0,io+.15,0,0,0,0,.26)),d.add(n,16777215,Tt(0,1.6,0,0,0,0,.17,.3,.17));const p=d.build();p.deleteAttribute("color"),this.lamps=new as(p,h,o*2),this.banners=new as(r,h,o);for(let w=0;w<o;w++){const g=t.gates[w],x=ve(t,g.s,g.lat);[-1,1].forEach((R,P)=>{const U=ve(t,g.s,g.lat+R*g.half),F=Tt(U.x,U.wy,U.z);l.setMatrixAt(w*2+P,F),this.lamps.setMatrixAt(w*2+P,F)}),this.banners.setMatrixAt(w,Tt(x.x,x.wy+io-.35,x.z,0,-Math.atan2(x.tz,x.tx),0,.14,.5,g.half*2))}for(const w of[l,this.lamps,this.banners])w.frustumCulled=!1,this.group.add(w);const m=(w,g)=>{const x=Tn(t,w).hw-2.5,R=ve(t,w,0),P=new bn;P.position.set(R.x,R.wy,R.z),P.rotation.y=-Math.atan2(R.tz,R.tx);const U=9,F=new Ze;for(const k of[-1,1]){const K=k*x;F.add(n,16052712,Tt(0,.12,K,0,0,0,1.1,.5,1.1)),F.add(n,2106412,Tt(0,.34,K,0,0,0,1.12,.14,1.12)),F.add(n,1780282,Te([0,.3,K],[0,U,K],.3)),F.add(s,16767050,Tt(0,U+.3,K,0,0,0,.55))}const O=new Jt(F.build(),a);O.castShadow=!0;const V=qs(1024,64,g),G=new Jt(new li(x*2,1.8),new ms({map:V,side:qe}));G.rotation.y=-Math.PI/2,G.position.y=U-.9,P.add(O,G),this.group.add(P)};m(t.gates[o].s,w=>{for(let g=0;g<64;g++)for(let x=0;x<4;x++)w.fillStyle=(g+x)%2?"#101418":"#f6f3ea",w.fillRect(g*16,x*16,16,16)}),m(t.startS,w=>{w.fillStyle="#17363d",w.fillRect(0,0,1024,64),w.fillStyle="#58e6ee",w.fillRect(0,0,1024,6),w.fillRect(0,58,1024,6),w.font="900 44px Nunito, Arial Black, sans-serif",w.textAlign="center",w.textBaseline="middle";for(let g=0;g<4;g++)w.fillStyle="#f6ecd0",w.fillText("RED RIVER RUSH",128+g*256,34),w.fillStyle="#f27420",w.fillRect(g*256-6,14,12,36)});const M=new Ze;M.add(new oi(1,1,1,18),16767050,Tt(0,0,0,Math.PI/2,0,0,.5,.14,.5)),M.add(new oi(1,1,1,18),16773280,Tt(0,0,0,Math.PI/2,0,0,.36,.2,.36));const S=new fa(1,1,4);for(let w=0;w<8;w++){const g=w/8*Math.PI*2;M.add(S,16758062,Te([Math.cos(g)*.56,Math.sin(g)*.56,0],[Math.cos(g)*.9,Math.sin(g)*.9,0],.13))}const u=new si({vertexColors:!0,roughness:.35,emissive:16754718,emissiveIntensity:.55});this.suns=new as(M.build(),u,t.suns.length),this.suns.frustumCulled=!1,this.sunAlive=new Uint8Array(t.suns.length).fill(1),this.sunScale=new Float32Array(t.suns.length).fill(1),this.group.add(this.suns);const f=new Me({transparent:!0,depthWrite:!1,blending:$s,side:qe,uniforms:{uTime:this.padTime},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform float uTime; varying vec2 vUv;
        void main(){
          float v = abs(vUv.y - 0.5) * 2.0;
          float c = fract(vUv.x * 3.0 + v * 0.55 - uTime * 1.6);
          float chev = smoothstep(0.0, 0.08, c) * smoothstep(0.55, 0.42, c);
          float edge = smoothstep(1.0, 0.8, v) * smoothstep(0.0, 0.08, vUv.x) * smoothstep(1.0, 0.92, vUv.x);
          float rim = smoothstep(0.86, 0.94, v) * smoothstep(1.0, 0.97, v);
          vec3 col = mix(vec3(0.25, 0.95, 1.0), vec3(1.0, 0.9, 0.35), chev * 0.6);
          gl_FragColor = vec4(col * (chev * 0.9 + rim * 0.8 + 0.12) * edge, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`});for(const w of t.pads){const g=w.s1-w.s0+4,x=ve(t,(w.s0+w.s1)/2,w.lat),R=new Jt(new li(g,w.half*2),f);R.rotation.order="YXZ",R.rotation.set(-Math.PI/2,-Math.atan2(x.tz,x.tx),0),R.position.set(x.x,x.wy+.07,x.z),R.renderOrder=2,this.group.add(R)}const y=qs(256,512,w=>{w.fillStyle="#d9d4c8",w.fillRect(0,0,256,512);for(let g=0;g<512;g+=32)w.fillStyle=g%64?"#cfc9bb":"#e2ddd2",w.fillRect(0,g,256,30);w.strokeStyle="#f07a22",w.lineWidth=26,w.lineJoin="miter";for(let g=470;g>60;g-=110)w.beginPath(),w.moveTo(40,g),w.lineTo(128,g-80),w.lineTo(216,g),w.stroke();w.fillStyle="#2b63c0",w.fillRect(0,0,14,512),w.fillRect(242,0,14,512)}),v=new si({map:y,roughness:.6}),_=new si({color:7173248,roughness:.7,flatShading:!0});for(const w of t.ramps){const g=ve(t,w.s0,w.lat-w.half),x=ve(t,w.s0,w.lat+w.half),R=ve(t,w.s1,w.lat-w.half),P=ve(t,w.s1,w.lat+w.half),U=g.wy-.25,F=R.wy+w.height,O=new he;O.setAttribute("position",new kt([g.x,U,g.z,x.x,U,x.z,P.x,F,P.z,R.x,F,R.z],3)),O.setAttribute("uv",new kt([0,0,1,0,1,1,0,1],2)),O.setIndex([0,1,2,0,2,3]),O.computeVertexNormals();const V=new Jt(O,v);V.receiveShadow=!0,V.castShadow=!0;const G=new Ze,k=[(g.x+P.x)/2,U,(g.z+P.z)/2],K=R.wy-1;G.face([[g.x,U,g.z],[R.x,F,R.z],[R.x,K,R.z]],0,k),G.face([[x.x,U,x.z],[P.x,F,P.z],[P.x,K,P.z]],0,k),G.face([[R.x,F,R.z],[P.x,F,P.z],[P.x,K,P.z],[R.x,K,R.z]],0,k);const Q=new Jt(G.build(),_);Q.castShadow=!0,this.group.add(V,Q)}const b=qs(128,128,w=>{const g=w.createRadialGradient(64,64,26,64,64,64);g.addColorStop(0,"rgba(255,255,255,0)"),g.addColorStop(.35,"rgba(255,255,255,0.95)"),g.addColorStop(.7,"rgba(255,255,255,0.5)"),g.addColorStop(1,"rgba(255,255,255,0)"),w.fillStyle=g,w.fillRect(0,0,128,128)}),E=new ms({map:b,transparent:!0,depthWrite:!1,color:16055290}),C=new as(new li(1,1).rotateX(-Math.PI/2),E,t.rocks.length);t.rocks.forEach((w,g)=>{const x=ve(t,w.s,w.lat),R=-Math.atan2(x.tz,x.tx);C.setMatrixAt(g,Tt(w.x+x.tx*w.r*.5,ui(t,w.s)+.06,w.z+x.tz*w.r*.5,0,R,0,w.r*4.6,1,w.r*3.3))}),C.frustumCulled=!1,C.renderOrder=1,this.group.add(C)}c;group=new bn;lamps;banners;col=new ht;suns;sunAlive;sunScale;padTime={value:0};m=new Kt;q=new Fi;e=new on;p=new N;sv=new N;reset(){this.sunAlive.fill(1),this.sunScale.fill(1)}takeSun(t){this.sunAlive[t]=0}update(t,e,n,s){this.padTime.value=n;const r=this.c;for(let a=0;a<r.gates.length-1;a++){const o=e[a],c=o===1?qr.passed:o===-1?qr.missed:a===t?qr.next:qr.ahead;this.col.set(c).multiplyScalar(a===t?1.5+Math.sin(n*7)*.5:o!==0?.6:.9),this.banners.setColorAt(a,this.col),this.lamps.setColorAt(a*2,this.col),this.lamps.setColorAt(a*2+1,this.col)}this.banners.instanceColor.needsUpdate=!0,this.lamps.instanceColor.needsUpdate=!0;for(let a=0;a<r.suns.length;a++){const o=r.suns[a],c=this.sunAlive[a]?1:0;this.sunScale[a]+=(c-this.sunScale[a])*Math.min(1,s*14);const l=this.sunScale[a]<.02?0:this.sunScale[a]*(this.sunAlive[a]?.62:1.1);this.q.setFromEuler(this.e.set(0,n*2.2+a*.7,0)),this.m.compose(this.p.set(o.x,o.y+Math.sin(n*2.4+a)*.14,o.z),this.q,this.sv.set(l,l,l)),this.suns.setMatrixAt(a,this.m)}this.suns.instanceMatrix.needsUpdate=!0}}const Gc=2,rs=4,Oh=46;function Qg(i,t){return Oh+9*(hs(i*.004+t*13.7,t*3.1,3,5)-.5)+5*(us(i,90,40+t)-.5)}function Wc(i,t,e){const n=t*Be,s=i.wy[t],r=e>0?100:200,a=[],o=2.5+7.5*hs(n*.013,r,3,r),c=hs(n*.05,r+5,2,r+1);a.push([-5,s-3.2,0]),a.push([-.6,s-.35,0]),a.push([o*.55,s+.3+c*.4,1]),a.push([o,s+.8+c*1.1,1]);const l=Qg(n,e),h=l-(s+1.6),d=[17,27,38,23],p=[];let m=0;for(let y=0;y<rs;y++){const v=.45+us(n+y*131,d[y],r+y*7);p.push(v),m+=v}let M=o,S=s+.8+c*1.1;for(let y=0;y<rs;y++){const v=h*p[y]/m,_=(us(n+55+y*77,d[(y+1)%rs]*.8,r+31+y)-.42)*(y===0?2.2:3.4),b=(us(n+y*19,11,r+60+y)-.5)*1.4;a.push([M+_*.45+b,S+v*.5,2]),M+=_,S+=v-.5,a.push([M,S,2]);const E=y===rs-1?0:2+7.5*us(n+y*211,d[(y+2)%rs],r+90+y);M+=E+.4,S+=.5,a.push([M,S,y===rs-1?4:3])}const u=i.curv[t]*e,f=u>1e-4?Math.max(M+6,1/u-i.hw[t]-6):1/0;return a.push([Math.min(M+34,f-3),l+1.5*(hs(n*.02,r+9,2,3)-.5),4]),a.push([Math.min(M+130,f),l-8+12*(hs(n*.006,r+17,2,9)-.5),4]),a}function t_(i,t){const e=new bn,n=[],s=new Qr({color:16777215,flatShading:!0,vertexColors:!0});s.onBeforeCompile=o=>{o.uniforms.tNoise={value:t},o.uniforms.tCliff={value:Ys("cliff")},o.uniforms.tLedge={value:Ys("ledge")},o.uniforms.tGrass={value:Ys("grass")},o.uniforms.cRock={value:new ht(pe.rock)},o.uniforms.cRockDark={value:new ht(pe.rockDark)},o.uniforms.cRockLit={value:new ht(pe.rockLit)},o.uniforms.cGrass={value:new ht(pe.grass)},o.uniforms.cGrassDark={value:new ht(pe.grassDark)},o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWPos = (modelMatrix * vec4(position, 1.0)).xyz;`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vWPos;
        uniform sampler2D tNoise; uniform sampler2D tCliff; uniform sampler2D tLedge; uniform sampler2D tGrass; uniform vec3 cRock; uniform vec3 cRockDark; uniform vec3 cRockLit; uniform vec3 cGrass; uniform vec3 cGrassDark;`).replace("#include <color_fragment>",`
        vec3 wn = normalize(cross(dFdx(vWPos), dFdy(vWPos)));
        vec4 wn4 = texture2D(tNoise, vWPos.xz * 0.011);
        float warp = wn4.r;
        float yy = vWPos.y + warp * 3.0;
        float band = texture2D(tNoise, vec2(yy * 0.031, 0.21 + warp * 0.05)).g;
        float fine = texture2D(tNoise, vec2(yy * 0.17, vWPos.x * 0.004 + vWPos.z * 0.004)).b;
        // hand-painted strata: triplanar, with the beds locked to world height
        vec3 bw = pow(abs(wn), vec3(4.0));
        float vy = yy * 0.075;
        vec3 cx = texture2D(tCliff, vec2(vWPos.z * 0.075, vy)).rgb;
        vec3 cz = texture2D(tCliff, vec2(vWPos.x * 0.075, vy)).rgb;
        vec3 rock = (cx * bw.x + cz * bw.z) / max(bw.x + bw.z, 1e-4) * 0.74;
        vec3 top = texture2D(tLedge, vWPos.xz * 0.09).rgb * 0.52;
        rock = mix(rock, top, smoothstep(0.5, 0.85, wn.y));
        rock *= mix(0.84, 1.08, smoothstep(0.25, 0.75, band)) * (0.94 + 0.12 * fine);
        float g = vColor.r * smoothstep(0.35, 0.8, wn.y + (fine - 0.5) * 0.5);
        vec3 grass = texture2D(tGrass, vWPos.xz * 0.12).rgb * mix(0.85, 1.1, wn4.a);
        rock = mix(rock, grass, g);
        rock *= mix(1.0, 0.55, vColor.g);
        rock *= 0.92 + 0.16 * vColor.b;
        diffuseColor.rgb *= rock;
      `).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += diffuseColor.rgb * vec3(0.2, 0.15, 0.17);`)};const r=Math.floor((i.n-1)/Gc)+1,a=36;for(const o of[-1,1])for(let c=0;c<r-1;c+=a){const l=Math.min(r-1,c+a),h=[],d=[],p=[];let m=0;for(let f=c;f<=l;f++){const y=Math.min(i.n-1,f*Gc),v=y*Be,_=Wc(i,y,o);m=_.length;const b=-i.tz[y]*o,E=i.tx[y]*o,C=i.px[y]+b*i.hw[y],w=i.pz[y]+E*i.hw[y];for(let g=0;g<_.length;g++){const[x,R,P]=_[g],U=C+b*x,F=w+E*x;h.push(U,R,F);const O=P===4?1:P===3?.35*Xs(y,g,3):0,V=P<=1?P===0?1:.5:0;d.push(O,V,Xs(Math.floor(v/14),g,o+5));const G={x:U,y:R,z:F,s:v,side:o,nx:b,nz:E,drop:0,fx:U,fz:F,tier:0};if(g===3&&n.push({...G,kind:"shore",x:C+b*x*.7,z:w+E*x*.7,y:R-.25}),P===3){const k=x-_[g-1][0];k>1.6&&n.push({...G,kind:"ledge",x:C+b*(x-k*.45),z:w+E*(x-k*.45)})}P===2&&g>=5&&(g-5)%3===0&&n.push({...G,kind:"lip",drop:R-_[g-2][1],fx:C+b*_[g-2][0],fz:w+E*_[g-2][0],tier:(g-5)/3}),g===_.length-3&&n.push({...G,kind:"top",x:U+b*3,z:F+E*3}),g===_.length-2&&n.push({...G,kind:"top",x:U-b*16,z:F-E*16})}}const M=l-c+1;for(let f=0;f<M-1;f++)for(let y=0;y<m-1;y++){const v=f*m+y,_=v+1,b=v+m,E=b+1;o>0?p.push(v,_,b,_,E,b):p.push(v,b,_,_,b,E)}const S=new he;S.setAttribute("position",new kt(h,3)),S.setAttribute("color",new kt(d,3)),S.setIndex(p),S.computeVertexNormals(),S.computeBoundingSphere();const u=new Jt(S,s);u.castShadow=!0,u.receiveShadow=!0,e.add(u)}{const o=i.n-1,c=[],l=[];for(const p of[-1,1]){const m=Wc(i,o,p),M=-i.tz[o]*p,S=i.tx[o]*p,u=i.px[o]+M*i.hw[o],f=i.pz[o]+S*i.hw[o],y=(b,E)=>[u+M*b,E,f+S*b],v=m[m.length-1][0],_=y(v,i.wy[o]-3.2);for(let b=0;b<m.length-1;b++){const E=y(m[b][0],m[b][1]),C=y(m[b+1][0],m[b+1][1]),w=p>0?[_,C,E]:[_,E,C];for(const g of w)c.push(g[0],g[1],g[2]),l.push(0,0,.5)}}const h=new he;h.setAttribute("position",new kt(c,3)),h.setAttribute("color",new kt(l,3)),h.computeVertexNormals();const d=new Jt(h,s);d.material=s,e.add(d)}{const c=i.tx[0],l=i.tz[0],h=-l,d=c,p=[],m=[],M=[],S=i.hw[0]+70,u=28,f=7;for(let _=0;_<=f;_++)for(let b=0;b<=u;b++){const E=b/u*2-1,C=_/f,w=Wt(i.wy[0]-3,Oh+4,C),g=6+9*us(E*S+_*37,16,900+_)+C*5-10*Math.exp(-E*E*18)*(1-C*.4);p.push(i.px[0]+h*E*S-c*g,w,i.pz[0]+d*E*S-l*g),m.push(_===f?1:0,_===0?1:0,Xs(b,_,4))}for(let _=0;_<f;_++)for(let b=0;b<u;b++){const E=_*(u+1)+b;M.push(E,E+u+1,E+1,E+1,E+u+1,E+u+2)}const y=new he;y.setAttribute("position",new kt(p,3)),y.setAttribute("color",new kt(m,3)),y.setIndex(M),y.computeVertexNormals();const v=new Jt(y,s);v.receiveShadow=!0,e.add(v)}{const o=i.n-1,c=[],l=[],h=(v,_,b,E,C,w)=>{const x=(O,V)=>{const G=[];for(let k=0;k<9;k++){const K=k/9*Math.PI*2+w,Q=.82+.3*Xs(k,Math.round(v),7);G.push([v+Math.cos(K)*b*O*Q,V,_+Math.sin(K)*E*O*Q])}return G},R=x(1,i.wy[o]-2),P=x(.9,i.wy[o]+C*.55),U=x(.82,i.wy[o]+C),F=(O,V,G,k,K)=>{for(const Q of[O,V,G,O,G,k])c.push(Q[0],Q[1],Q[2]),l.push(K,0,.5)};for(let O=0;O<9;O++){const V=(O+1)%9;F(R[O],P[O],P[V],R[V],0),F(P[O],U[O],U[V],P[V],0);const G=[v,i.wy[o]+C+2,_];for(const k of[U[O],G,U[V]])c.push(k[0],k[1],k[2]),l.push(1,0,.5)}},d=i.tx[o],p=i.tz[o],m=-p,M=d,S=i.px[o],u=i.pz[o];[[520,-420,220,120,62],[760,260,260,150,78],[1250,-150,380,200,96],[980,-900,300,220,84],[1500,700,420,240,110],[640,720,200,130,58],[1900,-520,460,260,120],[300,-760,180,140,66]].forEach(([v,_,b,E,C],w)=>h(S+d*v+m*_,u+p*v+M*_,b,E,C,w*.7));const y=new he;y.setAttribute("position",new kt(c,3)),y.setAttribute("color",new kt(l,3)),y.computeVertexNormals(),e.add(new Jt(y,s))}return{group:e,anchors:n,material:s}}function e_(i,t){const n=[],s=[],r=[],a=[],o=[];let c=0;const l=(u,f,y,v,_,b,E,C,w)=>{const g=-_,x=v;for(let R=0;R<=14;R++){const P=(R/14*2-1)*b;n.push(u+g*P,y,f+x*P),s.push(P,E),r.push(C-Math.abs(P),w),a.push(v,_)}c++};for(let u=0;u<i.n;u++){const f=(i.wy[Math.max(0,u-1)]-i.wy[Math.min(i.n-1,u+1)])/(2*Be);l(i.px[u],i.pz[u],i.wy[u],i.tx[u],i.tz[u],i.hw[u]+2.5,u*Be,i.hw[u],f)}const h=i.n-1;for(const[u,f]of[[60,220],[600,1600],[6e3,7e3]])l(i.px[h]+i.tx[h]*u,i.pz[h]+i.tz[h]*u,i.wy[h],i.tx[h],i.tz[h],f,h*Be+u,f+60,0);for(let u=0;u<c-1;u++)for(let f=0;f<14;f++){const y=u*15+f,v=y+1,_=y+14+1;o.push(y,v,_,v,_+1,_)}const d=new he;d.setAttribute("position",new kt(n,3)),d.setAttribute("uv",new kt(s,2)),d.setAttribute("aAux",new kt(r,2)),d.setAttribute("aDir",new kt(a,2)),d.setIndex(o),d.computeVertexNormals();const p={value:0},m={value:[new le,new le,new le,new le]},M=new si({color:16777215,roughness:.1,metalness:0});M.onBeforeCompile=u=>{u.uniforms.tNoise={value:t},u.uniforms.uTime=p,u.uniforms.uBoats=m,u.uniforms.uDeep={value:new ht(pe.waterDeep)},u.uniforms.uMid={value:new ht(pe.waterMid)},u.uniforms.uShallow={value:new ht(pe.waterShallow)},u.uniforms.uFoam={value:new ht(pe.foam)},u.vertexShader=u.vertexShader.replace("#include <common>",`#include <common>
        attribute vec2 aAux; attribute vec2 aDir;
        varying vec2 vTrack; varying vec2 vAux; varying vec2 vDir; varying vec3 vWPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vTrack = uv; vAux = aAux; vDir = aDir; vWPos = (modelMatrix * vec4(position, 1.0)).xyz;`),u.fragmentShader=u.fragmentShader.replace("#include <common>",`#include <common>
        varying vec2 vTrack; varying vec2 vAux; varying vec2 vDir; varying vec3 vWPos;
        uniform sampler2D tNoise; uniform float uTime; uniform vec4 uBoats[4];
        uniform vec3 uDeep; uniform vec3 uMid; uniform vec3 uShallow; uniform vec3 uFoam;`).replace("#include <color_fragment>",`
        vec2 fl = vTrack;
        float edge = vAux.x;
        float slope = vAux.y;
        float tt = uTime;
        vec4 n1 = texture2D(tNoise, vec2(fl.x * 0.043, fl.y * 0.021 - tt * 0.050));
        vec4 n2 = texture2D(tNoise, vec2(fl.x * 0.110 + 0.37, fl.y * 0.058 - tt * 0.120));
        vec4 n3 = texture2D(tNoise, vec2(fl.x * 0.19, fl.y * 0.075 - tt * 0.26));
        float hgt = n1.r * 0.6 + n2.r * 0.4;
        float gx = ((n1.g - 0.5) * 0.6 + (n2.g - 0.5) * 0.4) * 5.3;
        float gz = ((n1.b - 0.5) * 0.6 + (n2.b - 0.5) * 0.4) * 5.3;
        float shallow = 1.0 - smoothstep(0.0, 8.0, edge);
        vec3 wcol = mix(uDeep, uMid, smoothstep(0.30, 0.72, hgt + shallow * 0.30));
        wcol = mix(wcol, uShallow, clamp(shallow * 0.55 + smoothstep(0.60, 0.88, hgt) * 0.35, 0.0, 1.0));
        float lace = smoothstep(0.030, 0.0, abs(n2.a - 0.5 + (n1.a - 0.5) * 0.35));
        wcol = mix(wcol, uShallow * 1.12, lace * 0.38);
        float fn = n3.a;
        float fn2 = n3.r;
        float bank = smoothstep(1.3 + fn * 2.4, 0.15, edge);
        float rapid = smoothstep(0.008, 0.03, slope) * smoothstep(0.50, 0.72, fn2 + slope * 3.0);
        float fall = smoothstep(0.12, 0.40, slope);
        float churn = 0.0;
        for (int i = 0; i < 4; i++) {
          float d = distance(vWPos.xz, uBoats[i].xy);
          churn = max(churn, uBoats[i].w * smoothstep(uBoats[i].z, uBoats[i].z * 0.3, d + (fn - 0.5) * 3.0));
        }
        float foam = clamp(max(max(bank, rapid), max(fall, churn)), 0.0, 1.0);
        foam = mix(foam, 0.72 + 0.28 * n3.r, fall);
        wcol *= 0.8;
        wcol = mix(wcol, uFoam, foam);
        diffuseColor.rgb = wcol;
      `).replace("#include <roughnessmap_fragment>","float roughnessFactor = mix(roughness, 0.95, foam);").replace("#include <normal_fragment_maps>",`
        vec2 acr = vec2(-vDir.y, vDir.x);
        vec2 gw = (acr * gx + vDir * gz) * (1.0 - foam * 0.8);
        normal = normalize(mat3(viewMatrix) * normalize(vec3(-gw.x, 1.0, -gw.y)));
      `)};const S=new Jt(d,M);return S.receiveShadow=!0,S.frustumCulled=!1,{mesh:S,time:p,boats:m}}const zn=new URLSearchParams(location.search),Ae=i=>document.getElementById(i),n_=Ae("game"),ke=new og({canvas:n_,antialias:!0,powerPreference:"high-performance"});ke.toneMapping=ll;ke.toneMappingExposure=1;ke.shadowMap.enabled=!0;ke.shadowMap.type=$c;ke.info.autoReset=!1;function i_(){const i=ke.getContext(),t=i.getExtension("WEBGL_debug_renderer_info"),e=t?String(i.getParameter(t.UNMASKED_RENDERER_WEBGL)):"";return{soft:/swiftshader|llvmpipe|software/i.test(e),name:e}}const zh=i_(),fi=[{dpr:1,shadow:0,post:!1,spray:.4,decor:.6,paint:!1},{dpr:1.5,shadow:1024,post:!0,spray:.75,decor:.85,paint:!1},{dpr:2,shadow:2048,post:!0,spray:1,decor:1,paint:!0}];function ca(i,t,e){try{const n=Number(localStorage.getItem(i));return Number.isFinite(n)&&localStorage.getItem(i)!==null&&n>=t&&n<=e?n:null}catch{return null}}const nl=(i,t)=>{try{localStorage.setItem(i,String(t))}catch{}};let Bh=ca("cj.quality",0,2)!==null||zn.has("q"),mn=zn.has("q")?Nt(Number(zn.get("q"))|0,0,2):ca("cj.quality",0,2)??(zh.soft?0:2);const _n=new Sh,je=new fn(58,16/9,.3,9e3),or=Cg(256),ne=Sg(),jt=new bg(ne),os=Fg(_n,ke,2048),kh=t_(ne,or);_n.add(kh.group);const ir=e_(ne,Pg(256));ir.mesh.material.envMap=_n.environment;ir.mesh.material.envMapIntensity=1.1;_n.add(ir.mesh);const il=Zg(ne,kh.anchors,or);_n.add(il.group);const ma=new Jg(ne,or);_n.add(ma.group);const ia=jt.boats.map((i,t)=>new qg(t===0?Vg:Hg[t-1],i.id));ia.forEach(i=>{const t=i.mesh.material;t.envMap=_n.environment,t.envMapIntensity=.8,i.addSheets(or),_n.add(i.root)});const sr=jt.boats.map(()=>new Bg(or));sr.forEach(i=>_n.add(i.mesh));const di=new Fh(5200,!1,.4),rr=new Fh(500,!0,0);_n.add(di.points,rr.points);const Ii=new fg(ke,new gn(4,4,{type:Fn,samples:4}));Ii.addPass(new dg(_n,je));const s_=new bs(new bt(256,256),.16,.6,.95);Ii.addPass(s_);const sl=new Lh({uniforms:{tDiffuse:{value:null},uStep:{value:new bt}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 uStep; varying vec2 vUv;
    void main(){
      vec3 m0 = vec3(0.0), m1 = vec3(0.0), m2 = vec3(0.0), m3 = vec3(0.0);
      vec3 s0 = vec3(0.0), s1 = vec3(0.0), s2 = vec3(0.0), s3 = vec3(0.0);
      for (int j = -2; j <= 2; j++) for (int i = -2; i <= 2; i++) {
        vec3 c = min(texture2D(tDiffuse, vUv + vec2(float(i), float(j)) * uStep).rgb, vec3(4.0));
        vec3 c2 = c * c;
        if (i <= 0 && j <= 0) { m0 += c; s0 += c2; }
        if (i >= 0 && j <= 0) { m1 += c; s1 += c2; }
        if (i <= 0 && j >= 0) { m2 += c; s2 += c2; }
        if (i >= 0 && j >= 0) { m3 += c; s3 += c2; }
      }
      m0 /= 9.0; m1 /= 9.0; m2 /= 9.0; m3 /= 9.0;
      vec4 v = vec4(dot(s0 / 9.0 - m0 * m0, vec3(1.0)), dot(s1 / 9.0 - m1 * m1, vec3(1.0)),
                    dot(s2 / 9.0 - m2 * m2, vec3(1.0)), dot(s3 / 9.0 - m3 * m3, vec3(1.0)));
      vec3 o = m0; float best = v.x;
      if (v.y < best) { best = v.y; o = m1; }
      if (v.z < best) { best = v.z; o = m2; }
      if (v.w < best) { o = m3; }
      vec4 src = texture2D(tDiffuse, vUv);
      gl_FragColor = vec4(mix(src.rgb, o, 0.85), src.a);
    }`});Ii.addPass(sl);Ii.addPass(new mg);function Rl(i){mn=i;const t=fi[i];os.sunLight.castShadow=t.shadow>0,t.shadow>0&&os.sunLight.shadow.mapSize.x!==t.shadow&&(os.sunLight.shadow.mapSize.set(t.shadow,t.shadow),os.sunLight.shadow.map?.dispose(),os.sunLight.shadow.map=null),document.querySelectorAll("#quality button").forEach(e=>e.classList.toggle("on",Number(e.dataset.q)===i)),Vh()}function Vh(){const i=innerWidth,t=innerHeight,e=Math.min(devicePixelRatio||1,fi[mn].dpr);ke.setPixelRatio(e),ke.setSize(i,t,!1),Ii.setPixelRatio(e),Ii.setSize(i,t),sl.enabled=fi[mn].paint&&zn.get("paint")!=="0",sl.uniforms.uStep.value.set(e/(i*e),e/(t*e)).multiplyScalar(1.25),je.aspect=i/t,je.updateProjectionMatrix()}addEventListener("resize",Vh);let be="menu";const Pn=new _g,oe=new gg,We=new Ag,Gt=jn(99),Cl=new Int8Array(ne.gates.length),ha=jt.boats.map(()=>({x:0,y:0,z:0,heading:0,speed:0,steer:0,vy:0,grounded:!0,throttle:0,boosting:!1})),Ks=jt.boats.map(()=>({x:0,y:0,z:0,heading:0,speed:0,steer:0,vy:0,grounded:!0,throttle:0,boosting:!1}));let ls=0,En=0,Un=0,_s=-1,rl=0;const Le={heading:0,y:0,fov:58,init:!1},r_=zn.has("demo"),Ai=new Float32Array(8);let Dn={score:ca("cj.bestScore",0,1e7),time:ca("cj.bestTime",10,1e3)};function Ts(i,t){t.x=i.x,t.y=i.y,t.z=i.z,t.heading=i.heading,t.speed=i.speed,t.steer=i.steer,t.vy=i.vy,t.grounded=i.grounded,t.throttle=i.throttle,t.boosting=i.boosting}function Pl(){jt.boats.forEach((i,t)=>{Ts(i,ha[t]),Ts(i,Ks[t])})}function Hh(){jt.reset(),Cl.fill(0),ma.reset(),di.clear(),rr.clear(),sr.forEach(i=>i.reset()),We.clear(),ls=0,Un=0,_s=-1,Le.init=!1,Ai.fill(0),Pn.clear(),Pl()}function sa(i,t){Ae(i).classList.toggle("hidden",!t)}function Ni(i){if(be=i,sa("menu",i==="menu"),sa("pause",i==="paused"),sa("results",i==="results"),We.show(i!=="menu"),oe.suspend(i==="paused"),i==="menu"){oe.musicOn=!1;const t=Dn.score!==null?`最高分 ${Dn.score.toLocaleString("en-US")}`+(Dn.time!==null?` · 最佳 ${Uh(Dn.time)}`:""):"";Ae("best").textContent=t}}function lr(){oe.unlock(),Hh(),jt.start(),Ni("playing")}function Gh(){Hh(),Ni("menu")}function Dl(){be==="playing"?Ni("paused"):be==="paused"&&(Pn.clear(),Ni("playing"))}function a_(){const i=jt.st,t=ne.gates.length-1;Ae("resTitle").textContent=i.dnf?"TIME UP":["1ST PLACE","2ND PLACE","3RD PLACE","4TH PLACE"][i.place-1],Ae("resMedal").textContent=i.dnf?"超时未完赛":["冠军！","亚军","季军","完赛"][i.place-1];const e=[["用时",Uh(jt.time)+(i.penalty>0?`（含罚时 ${i.penalty}s）`:"")],["检查门",`${i.gatesPassed}/${t}`],["太阳币",`${i.sunCount}/${ne.suns.length}`],["最长滞空",i.bestAir.toFixed(2)+"s"],["名次奖励","+"+i.bonus.place.toLocaleString("en-US")],["时间奖励","+"+i.bonus.time.toLocaleString("en-US")]];Ae("resTable").innerHTML=e.map(([n,s])=>`<tr><td>${n}</td><td>${s}</td></tr>`).join("")+`<tr class="total"><td>总分</td><td>${i.score.toLocaleString("en-US")}</td></tr>`,i.dnf||((Dn.score===null||i.score>Dn.score)&&(Dn.score=i.score,nl("cj.bestScore",i.score)),(Dn.time===null||jt.time<Dn.time)&&(Dn.time=jt.time,nl("cj.bestTime",Math.round(jt.time*100)/100))),Ni("results")}function so(i,t,e,n,s,r){n=Math.round(n*fi[mn].spray);for(let a=0;a<n;a++){const o=Gt()*Math.PI*2,c=(.4+Gt())*s;di.emit(i+Math.cos(o)*.8,t+.2,e+Math.sin(o)*.8,Math.cos(o)*c*2.2,(2+Gt()*4)*(.5+s*.35),Math.sin(o)*c*2.2,.5+Gt()*.7,.12+Gt()*.3,{grow:.5,alpha:1,floor:r})}}function Xc(i,t,e,n,s){for(let r=0;r<n;r++){const a=Gt()*Math.PI*2,o=Gt()*2-1,c=2+Gt()*5,l=Math.sqrt(1-o*o);rr.emit(i,t,e,Math.cos(a)*l*c,o*c+2,Math.sin(a)*l*c,.35+Gt()*.4,.22+Gt()*.25,{grow:-.3,alpha:1,grav:6,color:s})}}function o_(i,t,e){const n=Nt(Math.abs(i.speed)/30,0,1.5);if(!i.grounded||n<.06)return;const s=fi[mn].spray*(t===0?1:.3),r=Math.cos(i.heading),a=Math.sin(i.heading),o=-a,c=r,l=Math.abs(i.steer);for(Ai[t*2]+=e*s*(170*n+120*l*n+(i.boosting?80:0));Ai[t*2]>=1;){Ai[t*2]--;const h=Gt()<.5+.35*-i.steer?1:-1,d=Wt(-1.6,2,Gt()),p=(2+Gt()*4)*(.55+n*.6)*(1+l*.6),m=Gt()<.6;di.emit(i.x+r*d+o*h*1.05,i.y+.1,i.z+a*d+c*h*1.05,o*h*p*(m?1.5:1)+r*i.speed*.55,(m?3.5+Gt()*4:1.4+Gt()*3)*(.5+n*.6),c*h*p*(m?1.5:1)+a*i.speed*.55,m?.5+Gt()*.5:.45+Gt()*.55,m?.04+Gt()*.06:.09+Gt()*.17,{grow:m?0:.3,alpha:1,floor:i.y})}for(Ai[t*2+1]+=e*s*(110*n*(.4+.6*i.throttle)+(i.boosting?100:0));Ai[t*2+1]>=1;){Ai[t*2+1]--;const h=(Gt()-.5)*1.6,d=Gt()<.4;di.emit(i.x-r*3.3+o*h,i.y+.15,i.z-a*3.3+c*h,r*i.speed*.25+o*(Gt()-.5)*4,(d?3+Gt()*3:.8+Gt()*1.6)*(.5+n*.5)*(i.boosting?1.4:1),a*i.speed*.25+c*(Gt()-.5)*4,d?.5+Gt()*.4:.5+Gt()*.5,d?.04+Gt()*.06:.09+Gt()*.18,{grow:d?0:.3,alpha:1,floor:i.y})}}let ro=0;function l_(i,t){if(!(Math.abs(t-ne.fallS)>300))for(ro+=i*55*fi[mn].spray;ro>=1;){ro--;const e=ne.fallS+12+Gt()*8,n=Tn(ne,e).hw,s=ve(ne,e,(Gt()*2-1)*n);di.emit(s.x,s.wy+.3,s.z,s.tx*(1+Gt()*3),1.5+Gt()*3.2,s.tz*(1+Gt()*3),1.6+Gt()*1.2,1.8+Gt()*2.2,{grow:2.6,alpha:.38,grav:1.6})}}function c_(){for(const i of jt.drain()){const t="boat"in i?jt.boats[i.boat]:jt.player;switch(i.type){case"countdown":We.center(String(i.n)),oe.play("count");break;case"go":We.center("GO!"),oe.play("go"),oe.musicOn=!0;break;case"gate":{Cl[i.id]=i.passed?1:-1;const e=ne.gates[i.id],n=ve(ne,e.s,e.lat);i.passed?(We.popup(`GATE +${i.points}`,"good"),oe.play("gate"),Xc(n.x,n.wy+2.5,n.z,26,[.35,.95,1])):(We.popup("错过检查门 +3s","bad"),oe.play("miss"));break}case"sun":{ma.takeSun(i.id);const e=ne.suns[i.id];Xc(e.x,e.y,e.z,12,[1,.85,.3]),oe.play("sun",jt.st.combo);break}case"pad":i.boat===0&&(We.popup("BOOST!","gold"),oe.play("boost")),so(t.x,t.y,t.z,30,1.5,t.y);break;case"land":so(t.x,t.y,t.z,110,Math.min(3,1+i.power*.12),t.y),i.boat===0&&(oe.play("splash",i.power),Un=Math.max(Un,Math.min(.5,i.power*.035)),i.points>0&&We.popup(`AIR ${i.airTime.toFixed(1)}s +${i.points}`,"gold"));break;case"launch":i.boat===0&&oe.play("launch");break;case"hit":oe.play("hit",i.power),Un=Math.max(Un,Math.min(.45,i.power*.03)),so(t.x,t.y,t.z,24,1.2,t.y);break;case"nearmiss":We.popup(`NEAR MISS +${i.points}`,"gold"),oe.play("near");break;case"reset":We.popup("复位 +2s","bad"),sr[0].reset(),Le.init=!1,Pl();break;case"finish":i.boat===0?(We.center("FINISH!"),oe.play("finish"),_s=En+2.6):jt.st.phase==="racing"&&We.popup(`${t.name} 冲线`,"");break;case"dnf":We.center("TIME UP"),oe.play("miss"),_s=En+2.2;break}}}const nn=new N,Yr=new N;function h_(i,t){const e=Nt(Math.abs(i.speed)/33,0,1.4);if(be==="menu"&&!Ie){const n=En*.1+2.4,s=10.5;nn.set(i.x+Math.cos(i.heading+n)*s,i.y+2.6+Math.sin(En*.23)*.5,i.z+Math.sin(i.heading+n)*s),Yr.set(i.x,i.y+.9,i.z),je.fov=50}else{Le.init||(Le.heading=i.heading+(Ie?Ie.yaw:0),Le.y=i.y,Le.fov=58,Le.init=!0),Ie||(Le.heading+=qn(i.heading-Le.heading)*(1-Math.exp(-3.4*t))),Le.y=Xe(Le.y,i.y,i.grounded?6:2.2,t),Le.fov=Xe(Le.fov,58+e*5+(i.boosting?11:0),3,t);const n=Math.cos(Le.heading),s=Math.sin(Le.heading),r=Math.cos(i.heading),a=Math.sin(i.heading);if(rl===1)nn.set(i.x-r*.9,i.y+2,i.z-a*.9),Yr.set(i.x+r*12,i.y+1.2,i.z+a*12);else{const o=6.4+e*.8+(i.boosting?.8:0);nn.set(i.x-n*o-s*1.3,Le.y+1.85,i.z-s*o+n*1.3);const c=wi(ne,nn.x,nn.z,jt.player.idx,14),l=Tn(ne,c.s).hw-1.6;if(Math.abs(c.lat)>l){const h=(Math.abs(c.lat)-l)*Math.sign(c.lat);nn.x+=ne.tz[c.i]*h,nn.z-=ne.tx[c.i]*h}nn.y=Math.max(nn.y,ui(ne,c.s)+1.2),Yr.set(i.x+r*4.2,Wt(Le.y,i.y,.6)+1.15,i.z+a*4.2)}je.fov=Le.fov}Un>.002&&(nn.x+=(Gt()-.5)*Un,nn.y+=(Gt()-.5)*Un,nn.z+=(Gt()-.5)*Un,Un*=Math.exp(-7*t)),je.position.copy(nn),je.lookAt(Yr),je.updateProjectionMatrix()}const Ie=zn.has("view")?(()=>{const[i,t=26,e=.5,n=-.5,s=0]=zn.get("view").split(",").map(Number);return{s:i,speed:t,steer:e,yaw:n,latOff:s}})():null;function u_(){if(!Ie)return;const i=jt.player,t=ci(ne,Ie.s)+Ie.latOff,e=ve(ne,Ie.s,t);i.x=e.x,i.z=e.z,i.y=e.wy,i.heading=Math.atan2(e.tz,e.tx),i.s=Ie.s,i.lat=t,i.idx=Math.round(Ie.s/2),i.speed=Ie.speed,i.steer=Ie.steer,i.throttle=1,i.grounded=!0,Ts(i,Ks[0]),Ts(i,ha[0])}let ao=performance.now(),ra=60,Kr=0,qc=0;const Yc=new N;function Wh(i){requestAnimationFrame(Wh);const t=ao,e=Math.min(.05,Math.max(5e-4,(i-ao)/1e3));ao=i,ra=Wt(ra,1e3/Math.max(1,i-t),.08),qc++,Pn.hit("Escape","KeyP")&&Dl(),Pn.hit("KeyM")&&(oe.setMuted(!oe.muted),Ae("btnMute").classList.toggle("off",oe.muted)),Pn.hit("KeyC")&&(rl=1-rl),Pn.hit("Enter")&&(be==="menu"||be==="results")&&lr();const n=be==="paused"?0:e;if(En+=n,Ie)u_();else if(be==="playing"||be==="results"){ls+=n;let a=0;const o=r_?Tg(jt):Pn.read();for(;ls>=ye.dt&&a<8;)jt.boats.forEach((c,l)=>Ts(c,ha[l])),jt.step(ye.dt,a===0?o:{...o,reset:!1}),jt.boats.forEach((c,l)=>Ts(c,Ks[l])),c_(),ls-=ye.dt,a++;a===8&&(ls=0),be==="playing"&&_s>0&&En>=_s&&(_s=-1,a_())}else be==="menu"&&jt.step(n,yg);const s=Ie?1:Nt(ls/ye.dt,0,1),r={...Ks[0]};jt.boats.forEach((a,o)=>{const c=ha[o],l=Ks[o],h={x:Wt(c.x,l.x,s),y:Wt(c.y,l.y,s),z:Wt(c.z,l.z,s),heading:c.heading+qn(l.heading-c.heading)*s,speed:l.speed,steer:l.steer,vy:l.vy,grounded:l.grounded,throttle:l.throttle,boosting:l.boosting};o===0&&Object.assign(r,h),ia[o].update(h,n,En),o>0&&(ia[o].root.visible=je.position.distanceToSquared(ia[o].root.position)>20);const d=Nt(Math.abs(h.speed)/30,0,1.4),p=Math.cos(h.heading),m=Math.sin(h.heading);n>0&&(o_(h,o,n),sr[o].mesh.visible=!Ie,sr[o].update(n,h.x-p*2.6,ui(ne,a.s-2.6),h.z-m*2.6,p,m,h.grounded?Nt(d*1.3,0,.95):0)),ir.boats.value[o].set(h.x-p*1.4,h.z-m*1.4,2.4+d*1.8,h.grounded?Nt(d*1.5,0,1):0)}),n>0&&(l_(n,jt.player.s),di.update(n),rr.update(n)),ir.time.value=En,il.fallTime.value=En,ma.update(be==="menu"?-1:jt.st.nextGate,Cl,En,n),il.cull(jt.player.s,fi[mn].decor),h_(r,n),Yc.set(r.x,r.y,r.z).addScaledVector(je.getWorldDirection(new N).setY(0).normalize(),28),os.update(je,Yc,En),di.setViewport(ke.domElement.height,je.fov),rr.setViewport(ke.domElement.height,je.fov),be!=="menu"&&We.update(jt),Ae("speedlines").style.opacity=be==="playing"&&r.boosting?"1":"0",oe.engine(r.speed,r.throttle,r.boosting,r.grounded,be==="playing"||be==="results"),oe.tickMusic(),ke.info.reset(),fi[mn].post?Ii.render():ke.render(_n,je),!Bh&&be==="playing"&&mn>0&&(Kr=ra<34?Kr+e:0,Kr>2.5&&(Kr=0,Rl(mn-1))),Pn.endFrame(),qc===2&&Ae("loading").remove()}Ae("btnStart").addEventListener("click",lr);Ae("btnRestart").addEventListener("click",lr);Ae("btnRestart2").addEventListener("click",lr);Ae("btnResume").addEventListener("click",Dl);Ae("btnMenu").addEventListener("click",Gh);Ae("btnMenu2").addEventListener("click",Gh);Ae("btnPause").addEventListener("click",Dl);Ae("btnMute").addEventListener("click",()=>{oe.unlock(),oe.setMuted(!oe.muted),Ae("btnMute").classList.toggle("off",oe.muted)});document.querySelectorAll("#quality button").forEach(i=>i.addEventListener("click",()=>{Bh=!0,nl("cj.quality",Number(i.dataset.q)),Rl(Number(i.dataset.q))}));document.addEventListener("visibilitychange",()=>{document.hidden&&be==="playing"&&Ni("paused")});("ontouchstart"in window||navigator.maxTouchPoints>0)&&(sa("touch",!0),document.querySelectorAll("#touch button").forEach(i=>{const t=i.dataset.k,e=n=>s=>{s.preventDefault(),Pn.touch.used=!0,Pn.touch[t]=n};i.addEventListener("pointerdown",e(!0)),i.addEventListener("pointerup",e(!1)),i.addEventListener("pointercancel",e(!1)),i.addEventListener("pointerleave",e(!1))}));window.__cj=Object.freeze({probe(){const i=jt.player,t=jt.st,e=12+Math.max(0,i.speed)*.55;return{mode:be,phase:t.phase,time:jt.time,clock:t.clock,penalty:t.penalty,score:t.score,combo:t.combo,place:t.place,nextGate:t.nextGate,gatesPassed:t.gatesPassed,gatesMissed:t.gatesMissed,suns:t.sunCount,boost:t.boostMeter,dnf:t.dnf,bestAir:t.bestAir,s:i.s,lat:i.lat,x:i.x,z:i.z,heading:i.heading,yawRate:i.yawRate,speed:i.speed,grounded:i.grounded,look:e,hwAhead:Tn(ne,i.s+e).hw,lineAhead:ci(ne,i.s+e),rocks:ne.rocks.filter(n=>n.s-i.s>-2&&n.s-i.s<e+8).map(n=>({s:n.s,lat:n.lat,r:n.r})),ramps:ne.ramps.map(n=>({s0:n.s0,lat:n.lat,half:n.half})),rivals:jt.boats.slice(1).map(n=>({name:n.name,s:n.s,finished:n.finished})),finishS:ne.finishS,fps:ra,quality:mn,gpu:zh.name,draw:{calls:ke.info.render.calls,tris:ke.info.render.triangles}}},at(i,t){const e=ve(ne,i,t);return{x:e.x,z:e.z}}});zn.has("mute")&&(oe.setMuted(!0),Ae("btnMute").classList.add("off"));Pl();Rl(mn);Ni(Ie?"playing":"menu");Ie&&zn.get("hud")==="0"&&We.show(!1);zn.has("autostart")&&lr();requestAnimationFrame(Wh);
