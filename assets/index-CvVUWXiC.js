(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ro="168",Fi={ROTATE:0,DOLLY:1,PAN:2},Li={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sh=0,Oo=1,ah=2,ol=1,cl=2,_n=3,On=0,ke=1,Fe=2,Ln=0,Ui=1,Se=2,Fo=3,Uo=4,rh=5,Yn=100,oh=101,ch=102,lh=103,hh=104,dh=200,uh=201,ph=202,fh=203,Sr=204,Mr=205,mh=206,gh=207,vh=208,_h=209,yh=210,xh=211,Sh=212,Mh=213,bh=214,Eh=0,wh=1,Ah=2,va=3,Th=4,Rh=5,Ch=6,Ph=7,ll=0,Ih=1,Lh=2,Dn=0,Dh=1,Nh=2,Oh=3,hl=4,Fh=5,Uh=6,Bh=7,dl=300,Hi=301,Gi=302,br=303,Er=304,Ta=306,wr=1e3,Zn=1001,Ar=1002,ze=1003,zh=1004,Is=1005,Je=1006,Ua=1007,Kn=1008,Sn=1009,ul=1010,pl=1011,vs=1012,oo=1013,Qn=1014,cn=1015,As=1016,co=1017,lo=1018,Vi=1020,fl=35902,ml=1021,gl=1022,en=1023,vl=1024,_l=1025,Bi=1026,Wi=1027,ho=1028,uo=1029,yl=1030,po=1031,fo=1033,da=33776,ua=33777,pa=33778,fa=33779,Tr=35840,Rr=35841,Cr=35842,Pr=35843,Ir=36196,Lr=37492,Dr=37496,Nr=37808,Or=37809,Fr=37810,Ur=37811,Br=37812,zr=37813,kr=37814,Hr=37815,Gr=37816,Vr=37817,Wr=37818,Xr=37819,$r=37820,Yr=37821,ma=36492,qr=36494,jr=36495,xl=36283,Zr=36284,Kr=36285,Jr=36286,kh=3200,Hh=3201,Sl=0,Gh=1,In="",sn="srgb",Un="srgb-linear",mo="display-p3",Ra="display-p3-linear",_a="linear",oe="srgb",ya="rec709",xa="p3",ci=7680,Bo=519,Vh=512,Wh=513,Xh=514,Ml=515,$h=516,Yh=517,qh=518,jh=519,Qr=35044,zo="300 es",yn=2e3,Sa=2001;class si{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const a=i.indexOf(e);a!==-1&&i.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let a=0,r=i.length;a<r;a++)i[a].call(this,t);t.target=null}}}const Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ko=1234567;const hs=Math.PI/180,_s=180/Math.PI;function ln(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pe[s&255]+Pe[s>>8&255]+Pe[s>>16&255]+Pe[s>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]).toLowerCase()}function be(s,t,e){return Math.max(t,Math.min(e,s))}function go(s,t){return(s%t+t)%t}function Zh(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Kh(s,t,e){return s!==t?(e-s)/(t-s):0}function ds(s,t,e){return(1-e)*s+e*t}function Jh(s,t,e,n){return ds(s,t,1-Math.exp(-e*n))}function Qh(s,t=1){return t-Math.abs(go(s,t*2)-t)}function td(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function ed(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function nd(s,t){return s+Math.floor(Math.random()*(t-s+1))}function id(s,t){return s+Math.random()*(t-s)}function sd(s){return s*(.5-Math.random())}function ad(s){s!==void 0&&(ko=s);let t=ko+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function rd(s){return s*hs}function od(s){return s*_s}function cd(s){return(s&s-1)===0&&s!==0}function ld(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function hd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function dd(s,t,e,n,i){const a=Math.cos,r=Math.sin,o=a(e/2),c=r(e/2),l=a((t+n)/2),h=r((t+n)/2),d=a((t-n)/2),u=r((t-n)/2),p=a((n-t)/2),g=r((n-t)/2);switch(i){case"XYX":s.set(o*h,c*d,c*u,o*l);break;case"YZY":s.set(c*u,o*h,c*d,o*l);break;case"ZXZ":s.set(c*d,c*u,o*h,o*l);break;case"XZX":s.set(o*h,c*g,c*p,o*l);break;case"YXY":s.set(c*p,o*h,c*g,o*l);break;case"ZYZ":s.set(c*g,c*p,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Qe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function se(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const bl={DEG2RAD:hs,RAD2DEG:_s,generateUUID:ln,clamp:be,euclideanModulo:go,mapLinear:Zh,inverseLerp:Kh,lerp:ds,damp:Jh,pingpong:Qh,smoothstep:td,smootherstep:ed,randInt:nd,randFloat:id,randFloatSpread:sd,seededRandom:ad,degToRad:rd,radToDeg:od,isPowerOfTwo:cd,ceilPowerOfTwo:ld,floorPowerOfTwo:hd,setQuaternionFromProperEuler:dd,normalize:se,denormalize:Qe};class dt{constructor(t=0,e=0){dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),a=this.x-t.x,r=this.y-t.y;return this.x=a*n-r*i+t.x,this.y=a*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(t,e,n,i,a,r,o,c,l){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,a,r,o,c,l)}set(t,e,n,i,a,r,o,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=a,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,a=this.elements,r=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],M=i[1],v=i[4],y=i[7],D=i[2],R=i[5],P=i[8];return a[0]=r*_+o*M+c*D,a[3]=r*m+o*v+c*R,a[6]=r*f+o*y+c*P,a[1]=l*_+h*M+d*D,a[4]=l*m+h*v+d*R,a[7]=l*f+h*y+d*P,a[2]=u*_+p*M+g*D,a[5]=u*m+p*v+g*R,a[8]=u*f+p*y+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],a=t[3],r=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*o*l-n*a*h+n*o*c+i*a*l-i*r*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],a=t[3],r=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*r-o*l,u=o*c-h*a,p=l*a-r*c,g=e*d+n*u+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(i*l-h*n)*_,t[2]=(o*n-i*r)*_,t[3]=u*_,t[4]=(h*e-i*c)*_,t[5]=(i*a-o*e)*_,t[6]=p*_,t[7]=(n*c-l*e)*_,t[8]=(r*e-n*a)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,a,r,o){const c=Math.cos(a),l=Math.sin(a);return this.set(n*c,n*l,-n*(c*r+l*o)+r+t,-i*l,i*c,-i*(-l*r+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ba.makeScale(t,e)),this}rotate(t){return this.premultiply(Ba.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ba.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ba=new Xt;function El(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ma(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ud(){const s=Ma("canvas");return s.style.display="block",s}const Ho={};function zi(s){s in Ho||(Ho[s]=!0,console.warn(s))}function pd(s,t,e){return new Promise(function(n,i){function a(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:n()}}setTimeout(a,e)})}const Go=new Xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Vo=new Xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),qi={[Un]:{transfer:_a,primaries:ya,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[sn]:{transfer:oe,primaries:ya,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ra]:{transfer:_a,primaries:xa,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(Vo),fromReference:s=>s.applyMatrix3(Go)},[mo]:{transfer:oe,primaries:xa,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(Vo),fromReference:s=>s.applyMatrix3(Go).convertLinearToSRGB()}},fd=new Set([Un,Ra]),ee={enabled:!0,_workingColorSpace:Un,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!fd.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=qi[t].toReference,i=qi[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return qi[s].primaries},getTransfer:function(s){return s===In?_a:qi[s].transfer},getLuminanceCoefficients:function(s,t=this._workingColorSpace){return s.fromArray(qi[t].luminanceCoefficients)}};function ki(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function za(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let li;class md{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{li===void 0&&(li=Ma("canvas")),li.width=t.width,li.height=t.height;const n=li.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=li}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ma("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),a=i.data;for(let r=0;r<a.length;r++)a[r]=ki(a[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ki(e[n]/255)*255):e[n]=ki(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let gd=0;class wl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=ln(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?a.push(ka(i[r].image)):a.push(ka(i[r]))}else a=ka(i);n.url=a}return e||(t.images[this.uuid]=n),n}}function ka(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?md.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vd=0;class De extends si{constructor(t=De.DEFAULT_IMAGE,e=De.DEFAULT_MAPPING,n=Zn,i=Zn,a=Je,r=Kn,o=en,c=Sn,l=De.DEFAULT_ANISOTROPY,h=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=ln(),this.name="",this.source=new wl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wr:t.x=t.x-Math.floor(t.x);break;case Zn:t.x=t.x<0?0:1;break;case Ar:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wr:t.y=t.y-Math.floor(t.y);break;case Zn:t.y=t.y<0?0:1;break;case Ar:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}De.DEFAULT_IMAGE=null;De.DEFAULT_MAPPING=dl;De.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,n=0,i=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,a=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*a,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*a,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*a,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,a;const c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,y=(p+1)/2,D=(f+1)/2,R=(h+u)/4,P=(d+_)/4,F=(g+m)/4;return v>y&&v>D?v<.01?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(v),i=R/n,a=P/n):y>D?y<.01?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(y),n=R/i,a=F/i):D<.01?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(D),n=P/a,i=F/a),this.set(n,i,a,e),this}let M=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-_)/M,this.z=(u-h)/M,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _d extends si{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Je,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new De(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,a=this.textures.length;i<a;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new wl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ti extends _d{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Al extends De{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ze,this.minFilter=ze,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yd extends De{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ze,this.minFilter=ze,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ei{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,a,r,o){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3];const u=a[r+0],p=a[r+1],g=a[r+2],_=a[r+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(d!==_||c!==u||l!==p||h!==g){let m=1-o;const f=c*u+l*p+h*g+d*_,M=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const D=Math.sqrt(v),R=Math.atan2(D,f*M);m=Math.sin(m*R)/D,o=Math.sin(o*R)/D}const y=o*M;if(c=c*m+u*y,l=l*m+p*y,h=h*m+g*y,d=d*m+_*y,m===1-o){const D=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=D,l*=D,h*=D,d*=D}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,a,r){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=a[r],u=a[r+1],p=a[r+2],g=a[r+3];return t[e]=o*g+h*d+c*p-l*u,t[e+1]=c*g+h*u+l*d-o*p,t[e+2]=l*g+h*p+o*u-c*d,t[e+3]=h*g-o*d-c*u-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,a=t._z,r=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),d=o(a/2),u=c(n/2),p=c(i/2),g=c(a/2);switch(r){case"XYZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"YZX":this._x=u*h*d+l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d-u*p*g;break;case"XZY":this._x=u*h*d-l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],a=e[8],r=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(a-l)*p,this._z=(r-i)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(h-c)/p,this._x=.25*p,this._y=(i+r)/p,this._z=(a+l)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(a-l)/p,this._x=(i+r)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(r-i)/p,this._x=(a+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,a=t._z,r=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+r*o+i*l-a*c,this._y=i*h+r*c+a*o-n*l,this._z=a*h+r*l+n*c-i*o,this._w=r*h-n*o-i*c-a*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,a=this._z,r=this._w;let o=r*t._w+n*t._x+i*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=n,this._y=i,this._z=a,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*r+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*a+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=r*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=a*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(t=0,e=0,n=0){T.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Wo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Wo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6]*i,this.y=a[1]*e+a[4]*n+a[7]*i,this.z=a[2]*e+a[5]*n+a[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,a=t.elements,r=1/(a[3]*e+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*e+a[4]*n+a[8]*i+a[12])*r,this.y=(a[1]*e+a[5]*n+a[9]*i+a[13])*r,this.z=(a[2]*e+a[6]*n+a[10]*i+a[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,a=t.x,r=t.y,o=t.z,c=t.w,l=2*(r*i-o*n),h=2*(o*e-a*i),d=2*(a*n-r*e);return this.x=e+c*l+r*d-o*h,this.y=n+c*h+o*l-a*d,this.z=i+c*d+a*h-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i,this.y=a[1]*e+a[5]*n+a[9]*i,this.z=a[2]*e+a[6]*n+a[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,a=t.z,r=e.x,o=e.y,c=e.z;return this.x=i*c-a*o,this.y=a*r-n*c,this.z=n*o-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ha.copy(this).projectOnVector(t),this.sub(Ha)}reflect(t){return this.sub(Ha.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ha=new T,Wo=new ei;class ai{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const a=n.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,je):je.fromBufferAttribute(a,r),je.applyMatrix4(t.matrixWorld),this.expandByPoint(je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ls.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ls.copy(n.boundingBox)),Ls.applyMatrix4(t.matrixWorld),this.union(Ls)}const i=t.children;for(let a=0,r=i.length;a<r;a++)this.expandByObject(i[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,je),je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ji),Ds.subVectors(this.max,ji),hi.subVectors(t.a,ji),di.subVectors(t.b,ji),ui.subVectors(t.c,ji),bn.subVectors(di,hi),En.subVectors(ui,di),kn.subVectors(hi,ui);let e=[0,-bn.z,bn.y,0,-En.z,En.y,0,-kn.z,kn.y,bn.z,0,-bn.x,En.z,0,-En.x,kn.z,0,-kn.x,-bn.y,bn.x,0,-En.y,En.x,0,-kn.y,kn.x,0];return!Ga(e,hi,di,ui,Ds)||(e=[1,0,0,0,1,0,0,0,1],!Ga(e,hi,di,ui,Ds))?!1:(Ns.crossVectors(bn,En),e=[Ns.x,Ns.y,Ns.z],Ga(e,hi,di,ui,Ds))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const pn=[new T,new T,new T,new T,new T,new T,new T,new T],je=new T,Ls=new ai,hi=new T,di=new T,ui=new T,bn=new T,En=new T,kn=new T,ji=new T,Ds=new T,Ns=new T,Hn=new T;function Ga(s,t,e,n,i){for(let a=0,r=s.length-3;a<=r;a+=3){Hn.fromArray(s,a);const o=i.x*Math.abs(Hn.x)+i.y*Math.abs(Hn.y)+i.z*Math.abs(Hn.z),c=t.dot(Hn),l=e.dot(Hn),h=n.dot(Hn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const xd=new ai,Zi=new T,Va=new T;class ri{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):xd.setFromPoints(t).getCenter(n);let i=0;for(let a=0,r=t.length;a<r;a++)i=Math.max(i,n.distanceToSquared(t[a]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zi.subVectors(t,this.center);const e=Zi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Zi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Va.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zi.copy(t.center).add(Va)),this.expandByPoint(Zi.copy(t.center).sub(Va))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fn=new T,Wa=new T,Os=new T,wn=new T,Xa=new T,Fs=new T,$a=new T;class Ts{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fn.copy(this.origin).addScaledVector(this.direction,e),fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Wa.copy(t).add(e).multiplyScalar(.5),Os.copy(e).sub(t).normalize(),wn.copy(this.origin).sub(Wa);const a=t.distanceTo(e)*.5,r=-this.direction.dot(Os),o=wn.dot(this.direction),c=-wn.dot(Os),l=wn.lengthSq(),h=Math.abs(1-r*r);let d,u,p,g;if(h>0)if(d=r*c-o,u=r*o-c,g=a*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,p=d*(d+r*u+2*o)+u*(r*d+u+2*c)+l}else u=a,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*c)+l;else u=-a,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-r*a+o)),u=d>0?-a:Math.min(Math.max(-a,-c),a),p=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-a,-c),a),p=u*(u+2*c)+l):(d=Math.max(0,-(r*a+o)),u=d>0?a:Math.min(Math.max(-a,-c),a),p=-d*d+u*(u+2*c)+l);else u=r>0?-a:a,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Wa).addScaledVector(Os,u),p}intersectSphere(t,e){fn.subVectors(t.center,this.origin);const n=fn.dot(this.direction),i=fn.dot(fn)-n*n,a=t.radius*t.radius;if(i>a)return null;const r=Math.sqrt(a-i),o=n-r,c=n+r;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,a,r,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(a=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(a=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),n>r||a>i||((a>n||isNaN(n))&&(n=a),(r<i||isNaN(i))&&(i=r),d>=0?(o=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,fn)!==null}intersectTriangle(t,e,n,i,a){Xa.subVectors(e,t),Fs.subVectors(n,t),$a.crossVectors(Xa,Fs);let r=this.direction.dot($a),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;wn.subVectors(this.origin,t);const c=o*this.direction.dot(Fs.crossVectors(wn,Fs));if(c<0)return null;const l=o*this.direction.dot(Xa.cross(wn));if(l<0||c+l>r)return null;const h=-o*wn.dot($a);return h<0?null:this.at(h/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,n,i,a,r,o,c,l,h,d,u,p,g,_,m){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,a,r,o,c,l,h,d,u,p,g,_,m)}set(t,e,n,i,a,r,o,c,l,h,d,u,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=a,f[5]=r,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/pi.setFromMatrixColumn(t,0).length(),a=1/pi.setFromMatrixColumn(t,1).length(),r=1/pi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*a,e[5]=n[5]*a,e[6]=n[6]*a,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,a=t.z,r=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){const u=r*h,p=r*d,g=o*h,_=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=p+g*l,e[5]=u-_*l,e[9]=-o*c,e[2]=_-u*l,e[6]=g+p*l,e[10]=r*c}else if(t.order==="YXZ"){const u=c*h,p=c*d,g=l*h,_=l*d;e[0]=u+_*o,e[4]=g*o-p,e[8]=r*l,e[1]=r*d,e[5]=r*h,e[9]=-o,e[2]=p*o-g,e[6]=_+u*o,e[10]=r*c}else if(t.order==="ZXY"){const u=c*h,p=c*d,g=l*h,_=l*d;e[0]=u-_*o,e[4]=-r*d,e[8]=g+p*o,e[1]=p+g*o,e[5]=r*h,e[9]=_-u*o,e[2]=-r*l,e[6]=o,e[10]=r*c}else if(t.order==="ZYX"){const u=r*h,p=r*d,g=o*h,_=o*d;e[0]=c*h,e[4]=g*l-p,e[8]=u*l+_,e[1]=c*d,e[5]=_*l+u,e[9]=p*l-g,e[2]=-l,e[6]=o*c,e[10]=r*c}else if(t.order==="YZX"){const u=r*c,p=r*l,g=o*c,_=o*l;e[0]=c*h,e[4]=_-u*d,e[8]=g*d+p,e[1]=d,e[5]=r*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*d+g,e[10]=u-_*d}else if(t.order==="XZY"){const u=r*c,p=r*l,g=o*c,_=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+_,e[5]=r*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=o*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Sd,t,Md)}lookAt(t,e,n){const i=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),An.crossVectors(n,Ve),An.lengthSq()===0&&(Math.abs(n.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),An.crossVectors(n,Ve)),An.normalize(),Us.crossVectors(Ve,An),i[0]=An.x,i[4]=Us.x,i[8]=Ve.x,i[1]=An.y,i[5]=Us.y,i[9]=Ve.y,i[2]=An.z,i[6]=Us.z,i[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,a=this.elements,r=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],M=n[3],v=n[7],y=n[11],D=n[15],R=i[0],P=i[4],F=i[8],E=i[12],S=i[1],I=i[5],k=i[9],C=i[13],b=i[2],U=i[6],O=i[10],z=i[14],N=i[3],H=i[7],X=i[11],Y=i[15];return a[0]=r*R+o*S+c*b+l*N,a[4]=r*P+o*I+c*U+l*H,a[8]=r*F+o*k+c*O+l*X,a[12]=r*E+o*C+c*z+l*Y,a[1]=h*R+d*S+u*b+p*N,a[5]=h*P+d*I+u*U+p*H,a[9]=h*F+d*k+u*O+p*X,a[13]=h*E+d*C+u*z+p*Y,a[2]=g*R+_*S+m*b+f*N,a[6]=g*P+_*I+m*U+f*H,a[10]=g*F+_*k+m*O+f*X,a[14]=g*E+_*C+m*z+f*Y,a[3]=M*R+v*S+y*b+D*N,a[7]=M*P+v*I+y*U+D*H,a[11]=M*F+v*k+y*O+D*X,a[15]=M*E+v*C+y*z+D*Y,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],a=t[12],r=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+a*c*d-i*l*d-a*o*u+n*l*u+i*o*p-n*c*p)+_*(+e*c*p-e*l*u+a*r*u-i*r*p+i*l*h-a*c*h)+m*(+e*l*d-e*o*p-a*r*d+n*r*p+a*o*h-n*l*h)+f*(-i*o*h-e*c*d+e*o*u+i*r*d-n*r*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],a=t[3],r=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],M=d*m*l-_*u*l+_*c*p-o*m*p-d*c*f+o*u*f,v=g*u*l-h*m*l-g*c*p+r*m*p+h*c*f-r*u*f,y=h*_*l-g*d*l+g*o*p-r*_*p-h*o*f+r*d*f,D=g*d*c-h*_*c-g*o*u+r*_*u+h*o*m-r*d*m,R=e*M+n*v+i*y+a*D;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return t[0]=M*P,t[1]=(_*u*a-d*m*a-_*i*p+n*m*p+d*i*f-n*u*f)*P,t[2]=(o*m*a-_*c*a+_*i*l-n*m*l-o*i*f+n*c*f)*P,t[3]=(d*c*a-o*u*a-d*i*l+n*u*l+o*i*p-n*c*p)*P,t[4]=v*P,t[5]=(h*m*a-g*u*a+g*i*p-e*m*p-h*i*f+e*u*f)*P,t[6]=(g*c*a-r*m*a-g*i*l+e*m*l+r*i*f-e*c*f)*P,t[7]=(r*u*a-h*c*a+h*i*l-e*u*l-r*i*p+e*c*p)*P,t[8]=y*P,t[9]=(g*d*a-h*_*a-g*n*p+e*_*p+h*n*f-e*d*f)*P,t[10]=(r*_*a-g*o*a+g*n*l-e*_*l-r*n*f+e*o*f)*P,t[11]=(h*o*a-r*d*a-h*n*l+e*d*l+r*n*p-e*o*p)*P,t[12]=D*P,t[13]=(h*_*i-g*d*i+g*n*u-e*_*u-h*n*m+e*d*m)*P,t[14]=(g*o*i-r*_*i-g*n*c+e*_*c+r*n*m-e*o*m)*P,t[15]=(r*d*i-h*o*i+h*n*c-e*d*c-r*n*u+e*o*u)*P,this}scale(t){const e=this.elements,n=t.x,i=t.y,a=t.z;return e[0]*=n,e[4]*=i,e[8]*=a,e[1]*=n,e[5]*=i,e[9]*=a,e[2]*=n,e[6]*=i,e[10]*=a,e[3]*=n,e[7]*=i,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),a=1-n,r=t.x,o=t.y,c=t.z,l=a*r,h=a*o;return this.set(l*r+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*r,0,l*c-i*o,h*c+i*r,a*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,a,r){return this.set(1,n,a,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,a=e._x,r=e._y,o=e._z,c=e._w,l=a+a,h=r+r,d=o+o,u=a*l,p=a*h,g=a*d,_=r*h,m=r*d,f=o*d,M=c*l,v=c*h,y=c*d,D=n.x,R=n.y,P=n.z;return i[0]=(1-(_+f))*D,i[1]=(p+y)*D,i[2]=(g-v)*D,i[3]=0,i[4]=(p-y)*R,i[5]=(1-(u+f))*R,i[6]=(m+M)*R,i[7]=0,i[8]=(g+v)*P,i[9]=(m-M)*P,i[10]=(1-(u+_))*P,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let a=pi.set(i[0],i[1],i[2]).length();const r=pi.set(i[4],i[5],i[6]).length(),o=pi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(a=-a),t.x=i[12],t.y=i[13],t.z=i[14],Ze.copy(this);const l=1/a,h=1/r,d=1/o;return Ze.elements[0]*=l,Ze.elements[1]*=l,Ze.elements[2]*=l,Ze.elements[4]*=h,Ze.elements[5]*=h,Ze.elements[6]*=h,Ze.elements[8]*=d,Ze.elements[9]*=d,Ze.elements[10]*=d,e.setFromRotationMatrix(Ze),n.x=a,n.y=r,n.z=o,this}makePerspective(t,e,n,i,a,r,o=yn){const c=this.elements,l=2*a/(e-t),h=2*a/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let p,g;if(o===yn)p=-(r+a)/(r-a),g=-2*r*a/(r-a);else if(o===Sa)p=-r/(r-a),g=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,a,r,o=yn){const c=this.elements,l=1/(e-t),h=1/(n-i),d=1/(r-a),u=(e+t)*l,p=(n+i)*h;let g,_;if(o===yn)g=(r+a)*d,_=-2*d;else if(o===Sa)g=a*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const pi=new T,Ze=new ie,Sd=new T(0,0,0),Md=new T(1,1,1),An=new T,Us=new T,Ve=new T,Xo=new ie,$o=new ei;class hn{constructor(t=0,e=0,n=0,i=hn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,a=i[0],r=i[4],o=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-be(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-be(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Xo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $o.setFromEuler(this),this.setFromQuaternion($o,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hn.DEFAULT_ORDER="XYZ";class vo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let bd=0;const Yo=new T,fi=new ei,mn=new ie,Bs=new T,Ki=new T,Ed=new T,wd=new ei,qo=new T(1,0,0),jo=new T(0,1,0),Zo=new T(0,0,1),Ko={type:"added"},Ad={type:"removed"},mi={type:"childadded",child:null},Ya={type:"childremoved",child:null};class ge extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const t=new T,e=new hn,n=new ei,i=new T(1,1,1);function a(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ie},normalMatrix:{value:new Xt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fi.setFromAxisAngle(t,e),this.quaternion.multiply(fi),this}rotateOnWorldAxis(t,e){return fi.setFromAxisAngle(t,e),this.quaternion.premultiply(fi),this}rotateX(t){return this.rotateOnAxis(qo,t)}rotateY(t){return this.rotateOnAxis(jo,t)}rotateZ(t){return this.rotateOnAxis(Zo,t)}translateOnAxis(t,e){return Yo.copy(t).applyQuaternion(this.quaternion),this.position.add(Yo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qo,t)}translateY(t){return this.translateOnAxis(jo,t)}translateZ(t){return this.translateOnAxis(Zo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Bs.copy(t):Bs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(Ki,Bs,this.up):mn.lookAt(Bs,Ki,this.up),this.quaternion.setFromRotationMatrix(mn),i&&(mn.extractRotation(i.matrixWorld),fi.setFromRotationMatrix(mn),this.quaternion.premultiply(fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ko),mi.child=t,this.dispatchEvent(mi),mi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ad),Ya.child=t,this.dispatchEvent(Ya),Ya.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ko),mi.child=t,this.dispatchEvent(mi),mi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let a=0,r=i.length;a<r;a++)i[a].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,t,Ed),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,wd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let a=0,r=i.length;a<r;a++)i[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];a(t.shapes,d)}else a(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(t.materials,this.material[c]));i.material=o}else i.material=a(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(a(t.animations,c))}}if(e){const o=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),d=r(t.shapes),u=r(t.skeletons),p=r(t.animations),g=r(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ge.DEFAULT_UP=new T(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ke=new T,gn=new T,qa=new T,vn=new T,gi=new T,vi=new T,Jo=new T,ja=new T,Za=new T,Ka=new T;class tn{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ke.subVectors(t,e),i.cross(Ke);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(t,e,n,i,a){Ke.subVectors(i,e),gn.subVectors(n,e),qa.subVectors(t,e);const r=Ke.dot(Ke),o=Ke.dot(gn),c=Ke.dot(qa),l=gn.dot(gn),h=gn.dot(qa),d=r*l-o*o;if(d===0)return a.set(0,0,0),null;const u=1/d,p=(l*c-o*h)*u,g=(r*h-o*c)*u;return a.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(t,e,n,i,a,r,o,c){return this.getBarycoord(t,e,n,i,vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,vn.x),c.addScaledVector(r,vn.y),c.addScaledVector(o,vn.z),c)}static isFrontFacing(t,e,n,i){return Ke.subVectors(n,e),gn.subVectors(t,e),Ke.cross(gn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),Ke.cross(gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,a){return tn.getInterpolation(t,this.a,this.b,this.c,e,n,i,a)}containsPoint(t){return tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,a=this.c;let r,o;gi.subVectors(i,n),vi.subVectors(a,n),ja.subVectors(t,n);const c=gi.dot(ja),l=vi.dot(ja);if(c<=0&&l<=0)return e.copy(n);Za.subVectors(t,i);const h=gi.dot(Za),d=vi.dot(Za);if(h>=0&&d<=h)return e.copy(i);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(n).addScaledVector(gi,r);Ka.subVectors(t,a);const p=gi.dot(Ka),g=vi.dot(Ka);if(g>=0&&p<=g)return e.copy(a);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(vi,o);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Jo.subVectors(a,i),o=(d-h)/(d-h+(p-g)),e.copy(i).addScaledVector(Jo,o);const f=1/(m+_+u);return r=_*f,o=u*f,e.copy(n).addScaledVector(gi,r).addScaledVector(vi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Tl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tn={h:0,s:0,l:0},zs={h:0,s:0,l:0};function Ja(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Ot{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ee.workingColorSpace){if(t=go(t,1),e=be(e,0,1),n=be(n,0,1),e===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+e):n+e-n*e,r=2*n-a;this.r=Ja(r,a,t+1/3),this.g=Ja(r,a,t),this.b=Ja(r,a,t-1/3)}return ee.toWorkingColorSpace(this,i),this}setStyle(t,e=sn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=i[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=sn){const n=Tl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ki(t.r),this.g=ki(t.g),this.b=ki(t.b),this}copyLinearToSRGB(t){return this.r=za(t.r),this.g=za(t.g),this.b=za(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=sn){return ee.fromWorkingColorSpace(Ie.copy(this),t),Math.round(be(Ie.r*255,0,255))*65536+Math.round(be(Ie.g*255,0,255))*256+Math.round(be(Ie.b*255,0,255))}getHexString(t=sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Ie.copy(this),e);const n=Ie.r,i=Ie.g,a=Ie.b,r=Math.max(n,i,a),o=Math.min(n,i,a);let c,l;const h=(o+r)/2;if(o===r)c=0,l=0;else{const d=r-o;switch(l=h<=.5?d/(r+o):d/(2-r-o),r){case n:c=(i-a)/d+(i<a?6:0);break;case i:c=(a-n)/d+2;break;case a:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=sn){ee.fromWorkingColorSpace(Ie.copy(this),t);const e=Ie.r,n=Ie.g,i=Ie.b;return t!==sn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Tn),this.setHSL(Tn.h+t,Tn.s+e,Tn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Tn),t.getHSL(zs);const n=ds(Tn.h,zs.h,e),i=ds(Tn.s,zs.s,e),a=ds(Tn.l,zs.l,e);return this.setHSL(n,i,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,a=t.elements;return this.r=a[0]*e+a[3]*n+a[6]*i,this.g=a[1]*e+a[4]*n+a[7]*i,this.b=a[2]*e+a[5]*n+a[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ie=new Ot;Ot.NAMES=Tl;let Td=0;class Bn extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=ln(),this.name="",this.type="Material",this.blending=Ui,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sr,this.blendDst=Mr,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=va,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ci,this.stencilZFail=ci,this.stencilZPass=ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ui&&(n.blending=this.blending),this.side!==On&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sr&&(n.blendSrc=this.blendSrc),this.blendDst!==Mr&&(n.blendDst=this.blendDst),this.blendEquation!==Yn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==va&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(a){const r=[];for(const o in a){const c=a[o];delete c.metadata,r.push(c)}return r}if(e){const a=i(t.textures),r=i(t.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let a=0;a!==i;++a)n[a]=e[a].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ne extends Bn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=ll,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ye=new T,ks=new dt;class me{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Qr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return zi("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ks.fromBufferAttribute(this,e),ks.applyMatrix3(t),this.setXY(e,ks.x,ks.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Qe(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Qe(e,this.array)),e}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Qe(e,this.array)),e}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Qe(e,this.array)),e}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Qe(e,this.array)),e}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),i=se(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,a){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),i=se(i,this.array),a=se(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qr&&(t.usage=this.usage),t}}class Rl extends me{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Cl extends me{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Zt extends me{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Rd=0;const Ye=new ie,Qa=new ge,_i=new T,We=new ai,Ji=new ai,Ae=new T;class le extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=ln(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(El(t)?Cl:Rl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Xt().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ye.makeRotationFromQuaternion(t),this.applyMatrix4(Ye),this}rotateX(t){return Ye.makeRotationX(t),this.applyMatrix4(Ye),this}rotateY(t){return Ye.makeRotationY(t),this.applyMatrix4(Ye),this}rotateZ(t){return Ye.makeRotationZ(t),this.applyMatrix4(Ye),this}translate(t,e,n){return Ye.makeTranslation(t,e,n),this.applyMatrix4(Ye),this}scale(t,e,n){return Ye.makeScale(t,e,n),this.applyMatrix4(Ye),this}lookAt(t){return Qa.lookAt(t),Qa.updateMatrix(),this.applyMatrix4(Qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_i).negate(),this.translate(_i.x,_i.y,_i.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const a=t[n];e.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Zt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ai);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const a=e[n];We.setFromBufferAttribute(a),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ri);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){const n=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){const o=e[a];Ji.setFromBufferAttribute(o),this.morphTargetsRelative?(Ae.addVectors(We.min,Ji.min),We.expandByPoint(Ae),Ae.addVectors(We.max,Ji.max),We.expandByPoint(Ae)):(We.expandByPoint(Ji.min),We.expandByPoint(Ji.max))}We.getCenter(n);let i=0;for(let a=0,r=t.count;a<r;a++)Ae.fromBufferAttribute(t,a),i=Math.max(i,n.distanceToSquared(Ae));if(e)for(let a=0,r=e.length;a<r;a++){const o=e[a],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ae.fromBufferAttribute(o,l),c&&(_i.fromBufferAttribute(t,l),Ae.add(_i)),i=Math.max(i,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new me(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],c=[];for(let F=0;F<n.count;F++)o[F]=new T,c[F]=new T;const l=new T,h=new T,d=new T,u=new dt,p=new dt,g=new dt,_=new T,m=new T;function f(F,E,S){l.fromBufferAttribute(n,F),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,S),u.fromBufferAttribute(a,F),p.fromBufferAttribute(a,E),g.fromBufferAttribute(a,S),h.sub(l),d.sub(l),p.sub(u),g.sub(u);const I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(I),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(I),o[F].add(_),o[E].add(_),o[S].add(_),c[F].add(m),c[E].add(m),c[S].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let F=0,E=M.length;F<E;++F){const S=M[F],I=S.start,k=S.count;for(let C=I,b=I+k;C<b;C+=3)f(t.getX(C+0),t.getX(C+1),t.getX(C+2))}const v=new T,y=new T,D=new T,R=new T;function P(F){D.fromBufferAttribute(i,F),R.copy(D);const E=o[F];v.copy(E),v.sub(D.multiplyScalar(D.dot(E))).normalize(),y.crossVectors(R,E);const I=y.dot(c[F])<0?-1:1;r.setXYZW(F,v.x,v.y,v.z,I)}for(let F=0,E=M.length;F<E;++F){const S=M[F],I=S.start,k=S.count;for(let C=I,b=I+k;C<b;C+=3)P(t.getX(C+0)),P(t.getX(C+1)),P(t.getX(C+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new me(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new T,a=new T,r=new T,o=new T,c=new T,l=new T,h=new T,d=new T;if(t)for(let u=0,p=t.count;u<p;u+=3){const g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),a.fromBufferAttribute(e,_),r.fromBufferAttribute(e,m),h.subVectors(r,a),d.subVectors(i,a),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=e.count;u<p;u+=3)i.fromBufferAttribute(e,u+0),a.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),h.subVectors(r,a),d.subVectors(i,a),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*h;for(let f=0;f<h;f++)u[g++]=l[p++]}return new me(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new le,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const a=this.morphAttributes;for(const o in a){const c=[],l=a[o];for(let h=0,d=l.length;h<d;h++){const u=l[h],p=t(u,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,c=r.length;o<c;o++){const l=r[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const p=l[d];h.push(p.toJSON(t.data))}h.length>0&&(i[c]=h,a=!0)}a&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const a=t.morphAttributes;for(const l in a){const h=[],d=a[l];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,h=r.length;l<h;l++){const d=r[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qo=new ie,Gn=new Ts,Hs=new ri,tc=new T,yi=new T,xi=new T,Si=new T,tr=new T,Gs=new T,Vs=new dt,Ws=new dt,Xs=new dt,ec=new T,nc=new T,ic=new T,$s=new T,Ys=new T;class $ extends ge{constructor(t=new le,e=new ne){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(a&&o){Gs.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const h=o[c],d=a[c];h!==0&&(tr.fromBufferAttribute(d,t),r?Gs.addScaledVector(tr,h):Gs.addScaledVector(tr.sub(e),h))}e.add(Gs)}return e}raycast(t,e){const n=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere),Hs.applyMatrix4(a),Gn.copy(t.ray).recast(t.near),!(Hs.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere(Hs,tc)===null||Gn.origin.distanceToSquared(tc)>(t.far-t.near)**2))&&(Qo.copy(a).invert(),Gn.copy(t.ray).applyMatrix4(Qo),!(n.boundingBox!==null&&Gn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Gn)))}_computeIntersections(t,e,n){let i;const a=this.geometry,r=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,d=a.attributes.normal,u=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=r[m.materialIndex],M=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=M,D=v;y<D;y+=3){const R=o.getX(y),P=o.getX(y+1),F=o.getX(y+2);i=qs(this,f,t,n,l,h,d,R,P,F),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const M=o.getX(m),v=o.getX(m+1),y=o.getX(m+2);i=qs(this,r,t,n,l,h,d,M,v,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=r[m.materialIndex],M=Math.max(m.start,p.start),v=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=M,D=v;y<D;y+=3){const R=y,P=y+1,F=y+2;i=qs(this,f,t,n,l,h,d,R,P,F),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const M=m,v=m+1,y=m+2;i=qs(this,r,t,n,l,h,d,M,v,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Cd(s,t,e,n,i,a,r,o){let c;if(t.side===ke?c=n.intersectTriangle(r,a,i,!0,o):c=n.intersectTriangle(i,a,r,t.side===On,o),c===null)return null;Ys.copy(o),Ys.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Ys);return l<e.near||l>e.far?null:{distance:l,point:Ys.clone(),object:s}}function qs(s,t,e,n,i,a,r,o,c,l){s.getVertexPosition(o,yi),s.getVertexPosition(c,xi),s.getVertexPosition(l,Si);const h=Cd(s,t,e,n,yi,xi,Si,$s);if(h){i&&(Vs.fromBufferAttribute(i,o),Ws.fromBufferAttribute(i,c),Xs.fromBufferAttribute(i,l),h.uv=tn.getInterpolation($s,yi,xi,Si,Vs,Ws,Xs,new dt)),a&&(Vs.fromBufferAttribute(a,o),Ws.fromBufferAttribute(a,c),Xs.fromBufferAttribute(a,l),h.uv1=tn.getInterpolation($s,yi,xi,Si,Vs,Ws,Xs,new dt)),r&&(ec.fromBufferAttribute(r,o),nc.fromBufferAttribute(r,c),ic.fromBufferAttribute(r,l),h.normal=tn.getInterpolation($s,yi,xi,Si,ec,nc,ic,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new T,materialIndex:0};tn.getNormal(yi,xi,Si,d.normal),h.face=d}return h}class Wt extends le{constructor(t=1,e=1,n=1,i=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:a,depthSegments:r};const o=this;i=Math.floor(i),a=Math.floor(a),r=Math.floor(r);const c=[],l=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,n,e,t,r,a,0),g("z","y","x",1,-1,n,e,-t,r,a,1),g("x","z","y",1,1,t,n,e,i,r,2),g("x","z","y",1,-1,t,n,-e,i,r,3),g("x","y","z",1,-1,t,e,n,i,a,4),g("x","y","z",-1,-1,t,e,-n,i,a,5),this.setIndex(c),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(d,2));function g(_,m,f,M,v,y,D,R,P,F,E){const S=y/P,I=D/F,k=y/2,C=D/2,b=R/2,U=P+1,O=F+1;let z=0,N=0;const H=new T;for(let X=0;X<O;X++){const Y=X*I-C;for(let et=0;et<U;et++){const Q=et*S-k;H[_]=Q*M,H[m]=Y*v,H[f]=b,l.push(H.x,H.y,H.z),H[_]=0,H[m]=0,H[f]=R>0?1:-1,h.push(H.x,H.y,H.z),d.push(et/P),d.push(1-X/F),z+=1}}for(let X=0;X<F;X++)for(let Y=0;Y<P;Y++){const et=u+Y+U*X,Q=u+Y+U*(X+1),B=u+(Y+1)+U*(X+1),K=u+(Y+1)+U*X;c.push(et,Q,K),c.push(Q,B,K),N+=6}o.addGroup(p,N,E),p+=N,u+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Xi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Oe(s){const t={};for(let e=0;e<s.length;e++){const n=Xi(s[e]);for(const i in n)t[i]=n[i]}return t}function Pd(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Pl(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const Id={clone:Xi,merge:Oe};var Ld=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fn extends Bn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ld,this.fragmentShader=Dd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xi(t.uniforms),this.uniformsGroups=Pd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Il extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=yn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Rn=new T,sc=new dt,ac=new dt;class Xe extends Il{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=_s*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(hs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _s*2*Math.atan(Math.tan(hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Rn.x,Rn.y).multiplyScalar(-t/Rn.z),Rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rn.x,Rn.y).multiplyScalar(-t/Rn.z)}getViewSize(t,e){return this.getViewBounds(t,sc,ac),e.subVectors(ac,sc)}setViewOffset(t,e,n,i,a,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(hs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,a=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;a+=r.offsetX*i/c,e-=r.offsetY*n/l,i*=r.width/c,n*=r.height/l}const o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Mi=-90,bi=1;class Nd extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Xe(Mi,bi,t,e);i.layers=this.layers,this.add(i);const a=new Xe(Mi,bi,t,e);a.layers=this.layers,this.add(a);const r=new Xe(Mi,bi,t,e);r.layers=this.layers,this.add(r);const o=new Xe(Mi,bi,t,e);o.layers=this.layers,this.add(o);const c=new Xe(Mi,bi,t,e);c.layers=this.layers,this.add(c);const l=new Xe(Mi,bi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,a,r,o,c]=e;for(const l of e)this.remove(l);if(t===yn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Sa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,a),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ll extends De{constructor(t,e,n,i,a,r,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Hi,super(t,e,n,i,a,r,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Od extends ti{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ll(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Wt(5,5,5),a=new Fn({name:"CubemapFromEquirect",uniforms:Xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ke,blending:Ln});a.uniforms.tEquirect.value=e;const r=new $(i,a),o=e.minFilter;return e.minFilter===Kn&&(e.minFilter=Je),new Nd(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(a)}}const er=new T,Fd=new T,Ud=new Xt;class Pn{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=er.subVectors(n,e).cross(Fd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(er),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ud.getNormalMatrix(t),i=this.coplanarPoint(er).applyMatrix4(t),a=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vn=new ri,js=new T;class _o{constructor(t=new Pn,e=new Pn,n=new Pn,i=new Pn,a=new Pn,r=new Pn){this.planes=[t,e,n,i,a,r]}set(t,e,n,i,a,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(a),o[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=yn){const n=this.planes,i=t.elements,a=i[0],r=i[1],o=i[2],c=i[3],l=i[4],h=i[5],d=i[6],u=i[7],p=i[8],g=i[9],_=i[10],m=i[11],f=i[12],M=i[13],v=i[14],y=i[15];if(n[0].setComponents(c-a,u-l,m-p,y-f).normalize(),n[1].setComponents(c+a,u+l,m+p,y+f).normalize(),n[2].setComponents(c+r,u+h,m+g,y+M).normalize(),n[3].setComponents(c-r,u-h,m-g,y-M).normalize(),n[4].setComponents(c-o,u-d,m-_,y-v).normalize(),e===yn)n[5].setComponents(c+o,u+d,m+_,y+v).normalize();else if(e===Sa)n[5].setComponents(o,d,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Vn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Vn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vn)}intersectsSprite(t){return Vn.center.set(0,0,0),Vn.radius=.7071067811865476,Vn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(js.x=i.normal.x>0?t.max.x:t.min.x,js.y=i.normal.y>0?t.max.y:t.min.y,js.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(js)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Dl(){let s=null,t=!1,e=null,n=null;function i(a,r){e(a,r),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){s=a}}}function Bd(s){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,d=l.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=s.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=s.SHORT;else if(l instanceof Uint32Array)p=s.UNSIGNED_INT;else if(l instanceof Int32Array)p=s.INT;else if(l instanceof Int8Array)p=s.BYTE;else if(l instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const h=c.array,d=c._updateRange,u=c.updateRanges;if(s.bindBuffer(l,o),d.count===-1&&u.length===0&&s.bufferSubData(l,0,h),u.length!==0){for(let p=0,g=u.length;p<g;p++){const _=u[p];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}d.count!==-1&&(s.bufferSubData(l,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count),d.count=-1),c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}function r(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:a,update:r}}class Jn extends le{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const a=t/2,r=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,d=t/o,u=e/c,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const M=f*u-r;for(let v=0;v<l;v++){const y=v*d-a;g.push(y,-M,0),_.push(0,0,1),m.push(v/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let M=0;M<o;M++){const v=M+l*f,y=M+l*(f+1),D=M+1+l*(f+1),R=M+1+l*f;p.push(v,y,R),p.push(y,D,R)}this.setIndex(p),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(_,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jn(t.width,t.height,t.widthSegments,t.heightSegments)}}var zd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kd=`#ifdef USE_ALPHAHASH
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
#endif`,Hd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xd=`#ifdef USE_AOMAP
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
#endif`,$d=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yd=`#ifdef USE_BATCHING
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
#endif`,qd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jd=`#ifdef USE_IRIDESCENCE
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
#endif`,Qd=`#ifdef USE_BUMPMAP
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
#endif`,tu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,eu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,su=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,au=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ru=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ou=`#if defined( USE_COLOR_ALPHA )
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
#endif`,cu=`#define PI 3.141592653589793
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
} // validated`,lu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hu=`vec3 transformedNormal = objectNormal;
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
#endif`,du=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mu="gl_FragColor = linearToOutputTexel( gl_FragColor );",gu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vu=`#ifdef USE_ENVMAP
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
#endif`,_u=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yu=`#ifdef USE_ENVMAP
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
#endif`,xu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Su=`#ifdef USE_ENVMAP
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
#endif`,Mu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Au=`#ifdef USE_GRADIENTMAP
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
}`,Tu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ru=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pu=`uniform bool receiveShadow;
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
#endif`,Iu=`#ifdef USE_ENVMAP
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
#endif`,Lu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Du=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ou=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fu=`PhysicalMaterial material;
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
#endif`,Uu=`struct PhysicalMaterial {
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
}`,Bu=`
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
#endif`,zu=`#if defined( RE_IndirectDiffuse )
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
#endif`,ku=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$u=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qu=`#if defined( USE_POINTS_UV )
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
#endif`,ju=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ku=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ju=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tp=`#ifdef USE_MORPHTARGETS
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
#endif`,ep=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,np=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ip=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,op=`#ifdef USE_NORMALMAP
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
#endif`,cp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,up=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_p=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,Sp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bp=`float getShadowMask() {
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
}`,Ep=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wp=`#ifdef USE_SKINNING
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
#endif`,Ap=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tp=`#ifdef USE_SKINNING
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
#endif`,Rp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ip=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lp=`#ifdef USE_TRANSMISSION
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
#endif`,Dp=`#ifdef USE_TRANSMISSION
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
#endif`,Np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Up=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zp=`uniform sampler2D t2D;
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
}`,kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wp=`#include <common>
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
}`,Xp=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$p=`#define DISTANCE
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
}`,Yp=`#define DISTANCE
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
}`,qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zp=`uniform float scale;
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
}`,Kp=`uniform vec3 diffuse;
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
}`,Jp=`#include <common>
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
}`,Qp=`uniform vec3 diffuse;
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
}`,tf=`#define LAMBERT
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
}`,ef=`#define LAMBERT
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
}`,nf=`#define MATCAP
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
}`,sf=`#define MATCAP
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
}`,af=`#define NORMAL
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
}`,rf=`#define NORMAL
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
}`,of=`#define PHONG
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
}`,cf=`#define PHONG
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
}`,lf=`#define STANDARD
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
}`,hf=`#define STANDARD
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
}`,df=`#define TOON
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
}`,uf=`#define TOON
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
}`,pf=`uniform float size;
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
}`,ff=`uniform vec3 diffuse;
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
}`,mf=`#include <common>
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
}`,gf=`uniform vec3 color;
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
}`,vf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,_f=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:zd,alphahash_pars_fragment:kd,alphamap_fragment:Hd,alphamap_pars_fragment:Gd,alphatest_fragment:Vd,alphatest_pars_fragment:Wd,aomap_fragment:Xd,aomap_pars_fragment:$d,batching_pars_vertex:Yd,batching_vertex:qd,begin_vertex:jd,beginnormal_vertex:Zd,bsdfs:Kd,iridescence_fragment:Jd,bumpmap_pars_fragment:Qd,clipping_planes_fragment:tu,clipping_planes_pars_fragment:eu,clipping_planes_pars_vertex:nu,clipping_planes_vertex:iu,color_fragment:su,color_pars_fragment:au,color_pars_vertex:ru,color_vertex:ou,common:cu,cube_uv_reflection_fragment:lu,defaultnormal_vertex:hu,displacementmap_pars_vertex:du,displacementmap_vertex:uu,emissivemap_fragment:pu,emissivemap_pars_fragment:fu,colorspace_fragment:mu,colorspace_pars_fragment:gu,envmap_fragment:vu,envmap_common_pars_fragment:_u,envmap_pars_fragment:yu,envmap_pars_vertex:xu,envmap_physical_pars_fragment:Iu,envmap_vertex:Su,fog_vertex:Mu,fog_pars_vertex:bu,fog_fragment:Eu,fog_pars_fragment:wu,gradientmap_pars_fragment:Au,lightmap_pars_fragment:Tu,lights_lambert_fragment:Ru,lights_lambert_pars_fragment:Cu,lights_pars_begin:Pu,lights_toon_fragment:Lu,lights_toon_pars_fragment:Du,lights_phong_fragment:Nu,lights_phong_pars_fragment:Ou,lights_physical_fragment:Fu,lights_physical_pars_fragment:Uu,lights_fragment_begin:Bu,lights_fragment_maps:zu,lights_fragment_end:ku,logdepthbuf_fragment:Hu,logdepthbuf_pars_fragment:Gu,logdepthbuf_pars_vertex:Vu,logdepthbuf_vertex:Wu,map_fragment:Xu,map_pars_fragment:$u,map_particle_fragment:Yu,map_particle_pars_fragment:qu,metalnessmap_fragment:ju,metalnessmap_pars_fragment:Zu,morphinstance_vertex:Ku,morphcolor_vertex:Ju,morphnormal_vertex:Qu,morphtarget_pars_vertex:tp,morphtarget_vertex:ep,normal_fragment_begin:np,normal_fragment_maps:ip,normal_pars_fragment:sp,normal_pars_vertex:ap,normal_vertex:rp,normalmap_pars_fragment:op,clearcoat_normal_fragment_begin:cp,clearcoat_normal_fragment_maps:lp,clearcoat_pars_fragment:hp,iridescence_pars_fragment:dp,opaque_fragment:up,packing:pp,premultiplied_alpha_fragment:fp,project_vertex:mp,dithering_fragment:gp,dithering_pars_fragment:vp,roughnessmap_fragment:_p,roughnessmap_pars_fragment:yp,shadowmap_pars_fragment:xp,shadowmap_pars_vertex:Sp,shadowmap_vertex:Mp,shadowmask_pars_fragment:bp,skinbase_vertex:Ep,skinning_pars_vertex:wp,skinning_vertex:Ap,skinnormal_vertex:Tp,specularmap_fragment:Rp,specularmap_pars_fragment:Cp,tonemapping_fragment:Pp,tonemapping_pars_fragment:Ip,transmission_fragment:Lp,transmission_pars_fragment:Dp,uv_pars_fragment:Np,uv_pars_vertex:Op,uv_vertex:Fp,worldpos_vertex:Up,background_vert:Bp,background_frag:zp,backgroundCube_vert:kp,backgroundCube_frag:Hp,cube_vert:Gp,cube_frag:Vp,depth_vert:Wp,depth_frag:Xp,distanceRGBA_vert:$p,distanceRGBA_frag:Yp,equirect_vert:qp,equirect_frag:jp,linedashed_vert:Zp,linedashed_frag:Kp,meshbasic_vert:Jp,meshbasic_frag:Qp,meshlambert_vert:tf,meshlambert_frag:ef,meshmatcap_vert:nf,meshmatcap_frag:sf,meshnormal_vert:af,meshnormal_frag:rf,meshphong_vert:of,meshphong_frag:cf,meshphysical_vert:lf,meshphysical_frag:hf,meshtoon_vert:df,meshtoon_frag:uf,points_vert:pf,points_frag:ff,shadow_vert:mf,shadow_frag:gf,sprite_vert:vf,sprite_frag:_f},xt={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},an={basic:{uniforms:Oe([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Oe([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Oe([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Oe([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Oe([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Oe([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Oe([xt.points,xt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Oe([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Oe([xt.common,xt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Oe([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Oe([xt.sprite,xt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Oe([xt.common,xt.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Oe([xt.lights,xt.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};an.physical={uniforms:Oe([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const Zs={r:0,b:0,g:0},Wn=new hn,yf=new ie;function xf(s,t,e,n,i,a,r){const o=new Ot(0);let c=a===!0?0:1,l,h,d=null,u=0,p=null;function g(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function _(M){let v=!1;const y=g(M);y===null?f(o,c):y&&y.isColor&&(f(y,1),v=!0);const D=s.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,r):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(M,v){const y=g(v);y&&(y.isCubeTexture||y.mapping===Ta)?(h===void 0&&(h=new $(new Wt(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:Xi(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Wn.copy(v.backgroundRotation),Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(yf.makeRotationFromEuler(Wn)),h.material.toneMapped=ee.getTransfer(y.colorSpace)!==oe,(d!==y||u!==y.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,p=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new $(new Jn(2,2),new Fn({name:"BackgroundMaterial",uniforms:Xi(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=ee.getTransfer(y.colorSpace)!==oe,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,d=y,u=y.version,p=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function f(M,v){M.getRGB(Zs,Pl(s)),n.buffers.color.setClear(Zs.r,Zs.g,Zs.b,v,r)}return{getClearColor:function(){return o},setClearColor:function(M,v=1){o.set(M),c=v,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,f(o,c)},render:_,addToRenderList:m}}function Sf(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let a=i,r=!1;function o(S,I,k,C,b){let U=!1;const O=d(C,k,I);a!==O&&(a=O,l(a.object)),U=p(S,C,k,b),U&&g(S,C,k,b),b!==null&&t.update(b,s.ELEMENT_ARRAY_BUFFER),(U||r)&&(r=!1,y(S,I,k,C),b!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(b).buffer))}function c(){return s.createVertexArray()}function l(S){return s.bindVertexArray(S)}function h(S){return s.deleteVertexArray(S)}function d(S,I,k){const C=k.wireframe===!0;let b=n[S.id];b===void 0&&(b={},n[S.id]=b);let U=b[I.id];U===void 0&&(U={},b[I.id]=U);let O=U[C];return O===void 0&&(O=u(c()),U[C]=O),O}function u(S){const I=[],k=[],C=[];for(let b=0;b<e;b++)I[b]=0,k[b]=0,C[b]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:k,attributeDivisors:C,object:S,attributes:{},index:null}}function p(S,I,k,C){const b=a.attributes,U=I.attributes;let O=0;const z=k.getAttributes();for(const N in z)if(z[N].location>=0){const X=b[N];let Y=U[N];if(Y===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(Y=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(Y=S.instanceColor)),X===void 0||X.attribute!==Y||Y&&X.data!==Y.data)return!0;O++}return a.attributesNum!==O||a.index!==C}function g(S,I,k,C){const b={},U=I.attributes;let O=0;const z=k.getAttributes();for(const N in z)if(z[N].location>=0){let X=U[N];X===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(X=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(X=S.instanceColor));const Y={};Y.attribute=X,X&&X.data&&(Y.data=X.data),b[N]=Y,O++}a.attributes=b,a.attributesNum=O,a.index=C}function _(){const S=a.newAttributes;for(let I=0,k=S.length;I<k;I++)S[I]=0}function m(S){f(S,0)}function f(S,I){const k=a.newAttributes,C=a.enabledAttributes,b=a.attributeDivisors;k[S]=1,C[S]===0&&(s.enableVertexAttribArray(S),C[S]=1),b[S]!==I&&(s.vertexAttribDivisor(S,I),b[S]=I)}function M(){const S=a.newAttributes,I=a.enabledAttributes;for(let k=0,C=I.length;k<C;k++)I[k]!==S[k]&&(s.disableVertexAttribArray(k),I[k]=0)}function v(S,I,k,C,b,U,O){O===!0?s.vertexAttribIPointer(S,I,k,b,U):s.vertexAttribPointer(S,I,k,C,b,U)}function y(S,I,k,C){_();const b=C.attributes,U=k.getAttributes(),O=I.defaultAttributeValues;for(const z in U){const N=U[z];if(N.location>=0){let H=b[z];if(H===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(H=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(H=S.instanceColor)),H!==void 0){const X=H.normalized,Y=H.itemSize,et=t.get(H);if(et===void 0)continue;const Q=et.buffer,B=et.type,K=et.bytesPerElement,it=B===s.INT||B===s.UNSIGNED_INT||H.gpuType===oo;if(H.isInterleavedBufferAttribute){const st=H.data,At=st.stride,Tt=H.offset;if(st.isInstancedInterleavedBuffer){for(let Et=0;Et<N.locationSize;Et++)f(N.location+Et,st.meshPerAttribute);S.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Et=0;Et<N.locationSize;Et++)m(N.location+Et);s.bindBuffer(s.ARRAY_BUFFER,Q);for(let Et=0;Et<N.locationSize;Et++)v(N.location+Et,Y/N.locationSize,B,X,At*K,(Tt+Y/N.locationSize*Et)*K,it)}else{if(H.isInstancedBufferAttribute){for(let st=0;st<N.locationSize;st++)f(N.location+st,H.meshPerAttribute);S.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let st=0;st<N.locationSize;st++)m(N.location+st);s.bindBuffer(s.ARRAY_BUFFER,Q);for(let st=0;st<N.locationSize;st++)v(N.location+st,Y/N.locationSize,B,X,Y*K,Y/N.locationSize*st*K,it)}}else if(O!==void 0){const X=O[z];if(X!==void 0)switch(X.length){case 2:s.vertexAttrib2fv(N.location,X);break;case 3:s.vertexAttrib3fv(N.location,X);break;case 4:s.vertexAttrib4fv(N.location,X);break;default:s.vertexAttrib1fv(N.location,X)}}}}M()}function D(){F();for(const S in n){const I=n[S];for(const k in I){const C=I[k];for(const b in C)h(C[b].object),delete C[b];delete I[k]}delete n[S]}}function R(S){if(n[S.id]===void 0)return;const I=n[S.id];for(const k in I){const C=I[k];for(const b in C)h(C[b].object),delete C[b];delete I[k]}delete n[S.id]}function P(S){for(const I in n){const k=n[I];if(k[S.id]===void 0)continue;const C=k[S.id];for(const b in C)h(C[b].object),delete C[b];delete k[S.id]}}function F(){E(),r=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:F,resetDefaultState:E,dispose:D,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function Mf(s,t,e){let n;function i(l){n=l}function a(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function r(l,h,d){d!==0&&(s.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function o(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];e.update(p,n,1)}function c(l,h,d,u){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)r(l[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];for(let _=0;_<u.length;_++)e.update(g,n,u[_])}}this.setMode=i,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function bf(s,t,e,n){let i;function a(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(R){return!(R!==en&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const P=R===As&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Sn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==cn&&!P)}function c(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),f=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,D=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,maxTextures:u,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:f,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:y,maxSamples:D}}function Ef(s){const t=this;let e=null,n=0,i=!1,a=!1;const r=new Pn,o=new Xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||i;return i=u,n=d.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=s.get(d);if(!i||g===null||g.length===0||a&&!m)a?h(null):l();else{const M=a?0:n,v=M*4;let y=f.clippingState||null;c.value=y,y=h(g,u,v,p);for(let D=0;D!==v;++D)y[D]=e[D];f.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=p+_*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,y=p;v!==_;++v,y+=4)r.copy(d[v]).applyMatrix4(M,o),r.normal.toArray(m,y),m[y+3]=r.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function wf(s){let t=new WeakMap;function e(r,o){return o===br?r.mapping=Hi:o===Er&&(r.mapping=Gi),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===br||o===Er)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new Od(c.height);return l.fromEquirectangularTexture(s,r),t.set(r,l),r.addEventListener("dispose",i),e(l.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function a(){t=new WeakMap}return{get:n,dispose:a}}class Nl extends Il{constructor(t=-1,e=1,n=1,i=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=n-t,r=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,r=a+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Di=4,rc=[.125,.215,.35,.446,.526,.582],qn=20,nr=new Nl,oc=new Ot;let ir=null,sr=0,ar=0,rr=!1;const $n=(1+Math.sqrt(5))/2,Ei=1/$n,cc=[new T(-$n,Ei,0),new T($n,Ei,0),new T(-Ei,0,$n),new T(Ei,0,$n),new T(0,$n,-Ei),new T(0,$n,Ei),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)];class lc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ir=this._renderer.getRenderTarget(),sr=this._renderer.getActiveCubeFace(),ar=this._renderer.getActiveMipmapLevel(),rr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,n,i,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ir,sr,ar),this._renderer.xr.enabled=rr,t.scissorTest=!1,Ks(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Hi||t.mapping===Gi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ir=this._renderer.getRenderTarget(),sr=this._renderer.getActiveCubeFace(),ar=this._renderer.getActiveMipmapLevel(),rr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Je,minFilter:Je,generateMipmaps:!1,type:As,format:en,colorSpace:Un,depthBuffer:!1},i=hc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hc(t,e,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Af(a)),this._blurMaterial=Tf(a,t,e)}return i}_compileMaterial(t){const e=new $(this._lodPlanes[0],t);this._renderer.compile(e,nr)}_sceneToCubeUV(t,e,n,i){const o=new Xe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(oc),h.toneMapping=Dn,h.autoClear=!1;const p=new ne({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),g=new $(new Wt,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(oc),_=!0);for(let f=0;f<6;f++){const M=f%3;M===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):M===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));const v=this._cubeSize;Ks(i,M*v,f>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Hi||t.mapping===Gi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=uc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dc());const a=i?this._cubemapMaterial:this._equirectMaterial,r=new $(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;const c=this._cubeSize;Ks(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,nr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let a=1;a<i;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=cc[(i-a-1)%cc.length];this._blur(t,a-1,a,r,o)}e.autoClear=n}_blur(t,e,n,i,a){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",a),this._halfBlur(r,t,n,n,i,"longitudinal",a)}_halfBlur(t,e,n,i,a,r,o){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new $(this._lodPlanes[i],l),u=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*qn-1),_=a/g,m=isFinite(a)?1+Math.floor(h*_):qn;m>qn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qn}`);const f=[];let M=0;for(let P=0;P<qn;++P){const F=P/_,E=Math.exp(-F*F/2);f.push(E),P===0?M+=E:P<m&&(M+=2*E)}for(let P=0;P<f.length;P++)f[P]=f[P]/M;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-n;const y=this._sizeLods[i],D=3*y*(i>v-Di?i-v+Di:0),R=4*(this._cubeSize-y);Ks(e,D,R,3*y,2*y),c.setRenderTarget(e),c.render(d,nr)}}function Af(s){const t=[],e=[],n=[];let i=s;const a=s-Di+1+rc.length;for(let r=0;r<a;r++){const o=Math.pow(2,i);e.push(o);let c=1/o;r>s-Di?c=rc[r-s+Di-1]:r===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,_=3,m=2,f=1,M=new Float32Array(_*g*p),v=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let R=0;R<p;R++){const P=R%3*2/3-1,F=R>2?0:-1,E=[P,F,0,P+2/3,F,0,P+2/3,F+1,0,P,F,0,P+2/3,F+1,0,P,F+1,0];M.set(E,_*g*R),v.set(u,m*g*R);const S=[R,R,R,R,R,R];y.set(S,f*g*R)}const D=new le;D.setAttribute("position",new me(M,_)),D.setAttribute("uv",new me(v,m)),D.setAttribute("faceIndex",new me(y,f)),t.push(D),i>Di&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function hc(s,t,e){const n=new ti(s,t,e);return n.texture.mapping=Ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ks(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Tf(s,t,e){const n=new Float32Array(qn),i=new T(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:qn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:yo(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function dc(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yo(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function uc(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function yo(){return`

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
	`}function Rf(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===br||c===Er,h=c===Hi||c===Gi;if(l||h){let d=t.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new lc(s)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return l&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new lc(s)),d=l?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function a(o){const c=o.target;c.removeEventListener("dispose",a);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function Cf(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&zi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Pf(s,t,e,n){const i={},a=new WeakMap;function r(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}u.removeEventListener("dispose",r),delete i[u.id];const p=a.get(u);p&&(t.remove(p),a.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",r),i[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const g in u)t.update(u[g],s.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],s.ARRAY_BUFFER)}}function l(d){const u=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const M=p.array;_=p.version;for(let v=0,y=M.length;v<y;v+=3){const D=M[v+0],R=M[v+1],P=M[v+2];u.push(D,R,R,P,P,D)}}else if(g!==void 0){const M=g.array;_=g.version;for(let v=0,y=M.length/3-1;v<y;v+=3){const D=v+0,R=v+1,P=v+2;u.push(D,R,R,P,P,D)}}else return;const m=new(El(u)?Cl:Rl)(u,1);m.version=_;const f=a.get(d);f&&t.remove(f),a.set(d,m)}function h(d){const u=a.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&l(d)}else l(d);return a.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function If(s,t,e){let n;function i(u){n=u}let a,r;function o(u){a=u.type,r=u.bytesPerElement}function c(u,p){s.drawElements(n,p,a,u*r),e.update(p,n,1)}function l(u,p,g){g!==0&&(s.drawElementsInstanced(n,p,a,u*r,g),e.update(p,n,g))}function h(u,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,a,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function d(u,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)l(u[f]/r,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,a,u,0,_,0,g);let f=0;for(let M=0;M<g;M++)f+=p[M];for(let M=0;M<_.length;M++)e.update(f,n,_[M])}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Lf(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=o*(a/3);break;case s.LINES:e.lines+=o*(a/2);break;case s.LINE_STRIP:e.lines+=o*(a-1);break;case s.LINE_LOOP:e.lines+=o*a;break;case s.POINTS:e.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Df(s,t,e){const n=new WeakMap,i=new ce;function a(r,o,c){const l=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let S=function(){F.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var p=S;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let D=o.attributes.position.count*y,R=1;D>t.maxTextureSize&&(R=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const P=new Float32Array(D*R*4*d),F=new Al(P,D,R,d);F.type=cn,F.needsUpdate=!0;const E=y*4;for(let I=0;I<d;I++){const k=f[I],C=M[I],b=v[I],U=D*R*4*I;for(let O=0;O<k.count;O++){const z=O*E;g===!0&&(i.fromBufferAttribute(k,O),P[U+z+0]=i.x,P[U+z+1]=i.y,P[U+z+2]=i.z,P[U+z+3]=0),_===!0&&(i.fromBufferAttribute(C,O),P[U+z+4]=i.x,P[U+z+5]=i.y,P[U+z+6]=i.z,P[U+z+7]=0),m===!0&&(i.fromBufferAttribute(b,O),P[U+z+8]=i.x,P[U+z+9]=i.y,P[U+z+10]=i.z,P[U+z+11]=b.itemSize===4?i.w:1)}}u={count:d,texture:F,size:new dt(D,R)},n.set(o,u),o.addEventListener("dispose",S)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:a}}function Nf(s,t,e,n){let i=new WeakMap;function a(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(i.get(d)!==l&&(t.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return d}function r(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:a,dispose:r}}class Ol extends De{constructor(t,e,n,i,a,r,o,c,l,h=Bi){if(h!==Bi&&h!==Wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Bi&&(n=Qn),n===void 0&&h===Wi&&(n=Vi),super(null,i,a,r,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ze,this.minFilter=c!==void 0?c:ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Fl=new De,pc=new Ol(1,1),Ul=new Al,Bl=new yd,zl=new Ll,fc=[],mc=[],gc=new Float32Array(16),vc=new Float32Array(9),_c=new Float32Array(4);function Yi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let a=fc[i];if(a===void 0&&(a=new Float32Array(i),fc[i]=a),t!==0){n.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=e,s[r].toArray(a,o)}return a}function Ee(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function we(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Ca(s,t){let e=mc[t];e===void 0&&(e=new Int32Array(t),mc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Of(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Ff(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2fv(this.addr,t),we(e,t)}}function Uf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;s.uniform3fv(this.addr,t),we(e,t)}}function Bf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4fv(this.addr,t),we(e,t)}}function zf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(Ee(e,n))return;_c.set(n),s.uniformMatrix2fv(this.addr,!1,_c),we(e,n)}}function kf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(Ee(e,n))return;vc.set(n),s.uniformMatrix3fv(this.addr,!1,vc),we(e,n)}}function Hf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(Ee(e,n))return;gc.set(n),s.uniformMatrix4fv(this.addr,!1,gc),we(e,n)}}function Gf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Vf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2iv(this.addr,t),we(e,t)}}function Wf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;s.uniform3iv(this.addr,t),we(e,t)}}function Xf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4iv(this.addr,t),we(e,t)}}function $f(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Yf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2uiv(this.addr,t),we(e,t)}}function qf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;s.uniform3uiv(this.addr,t),we(e,t)}}function jf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4uiv(this.addr,t),we(e,t)}}function Zf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let a;this.type===s.SAMPLER_2D_SHADOW?(pc.compareFunction=Ml,a=pc):a=Fl,e.setTexture2D(t||a,i)}function Kf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Bl,i)}function Jf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||zl,i)}function Qf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Ul,i)}function tm(s){switch(s){case 5126:return Of;case 35664:return Ff;case 35665:return Uf;case 35666:return Bf;case 35674:return zf;case 35675:return kf;case 35676:return Hf;case 5124:case 35670:return Gf;case 35667:case 35671:return Vf;case 35668:case 35672:return Wf;case 35669:case 35673:return Xf;case 5125:return $f;case 36294:return Yf;case 36295:return qf;case 36296:return jf;case 35678:case 36198:case 36298:case 36306:case 35682:return Zf;case 35679:case 36299:case 36307:return Kf;case 35680:case 36300:case 36308:case 36293:return Jf;case 36289:case 36303:case 36311:case 36292:return Qf}}function em(s,t){s.uniform1fv(this.addr,t)}function nm(s,t){const e=Yi(t,this.size,2);s.uniform2fv(this.addr,e)}function im(s,t){const e=Yi(t,this.size,3);s.uniform3fv(this.addr,e)}function sm(s,t){const e=Yi(t,this.size,4);s.uniform4fv(this.addr,e)}function am(s,t){const e=Yi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function rm(s,t){const e=Yi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function om(s,t){const e=Yi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function cm(s,t){s.uniform1iv(this.addr,t)}function lm(s,t){s.uniform2iv(this.addr,t)}function hm(s,t){s.uniform3iv(this.addr,t)}function dm(s,t){s.uniform4iv(this.addr,t)}function um(s,t){s.uniform1uiv(this.addr,t)}function pm(s,t){s.uniform2uiv(this.addr,t)}function fm(s,t){s.uniform3uiv(this.addr,t)}function mm(s,t){s.uniform4uiv(this.addr,t)}function gm(s,t,e){const n=this.cache,i=t.length,a=Ca(e,i);Ee(n,a)||(s.uniform1iv(this.addr,a),we(n,a));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||Fl,a[r])}function vm(s,t,e){const n=this.cache,i=t.length,a=Ca(e,i);Ee(n,a)||(s.uniform1iv(this.addr,a),we(n,a));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||Bl,a[r])}function _m(s,t,e){const n=this.cache,i=t.length,a=Ca(e,i);Ee(n,a)||(s.uniform1iv(this.addr,a),we(n,a));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||zl,a[r])}function ym(s,t,e){const n=this.cache,i=t.length,a=Ca(e,i);Ee(n,a)||(s.uniform1iv(this.addr,a),we(n,a));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||Ul,a[r])}function xm(s){switch(s){case 5126:return em;case 35664:return nm;case 35665:return im;case 35666:return sm;case 35674:return am;case 35675:return rm;case 35676:return om;case 5124:case 35670:return cm;case 35667:case 35671:return lm;case 35668:case 35672:return hm;case 35669:case 35673:return dm;case 5125:return um;case 36294:return pm;case 36295:return fm;case 36296:return mm;case 35678:case 36198:case 36298:case 36306:case 35682:return gm;case 35679:case 36299:case 36307:return vm;case 35680:case 36300:case 36308:case 36293:return _m;case 36289:case 36303:case 36311:case 36292:return ym}}class Sm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=tm(e.type)}}class Mm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=xm(e.type)}}class bm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let a=0,r=i.length;a!==r;++a){const o=i[a];o.setValue(t,e[o.id],n)}}}const or=/(\w+)(\])?(\[|\.)?/g;function yc(s,t){s.seq.push(t),s.map[t.id]=t}function Em(s,t,e){const n=s.name,i=n.length;for(or.lastIndex=0;;){const a=or.exec(n),r=or.lastIndex;let o=a[1];const c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===i){yc(e,l===void 0?new Sm(o,s,t):new Mm(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new bm(o),yc(e,d)),e=d}}}class ga{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const a=t.getActiveUniform(e,i),r=t.getUniformLocation(e,a.name);Em(a,r,this)}}setValue(t,e,n,i){const a=this.map[e];a!==void 0&&a.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let a=0,r=e.length;a!==r;++a){const o=e[a],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,a=t.length;i!==a;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function xc(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const wm=37297;let Am=0;function Tm(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let r=i;r<a;r++){const o=r+1;n.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return n.join(`
`)}function Rm(s){const t=ee.getPrimaries(ee.workingColorSpace),e=ee.getPrimaries(s);let n;switch(t===e?n="":t===xa&&e===ya?n="LinearDisplayP3ToLinearSRGB":t===ya&&e===xa&&(n="LinearSRGBToLinearDisplayP3"),s){case Un:case Ra:return[n,"LinearTransferOETF"];case sn:case mo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Sc(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const a=/ERROR: 0:(\d+)/.exec(i);if(a){const r=parseInt(a[1]);return e.toUpperCase()+`

`+i+`

`+Tm(s.getShaderSource(t),r)}else return i}function Cm(s,t){const e=Rm(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Pm(s,t){let e;switch(t){case Dh:e="Linear";break;case Nh:e="Reinhard";break;case Oh:e="Cineon";break;case hl:e="ACESFilmic";break;case Uh:e="AgX";break;case Bh:e="Neutral";break;case Fh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Js=new T;function Im(){ee.getLuminanceCoefficients(Js);const s=Js.x.toFixed(4),t=Js.y.toFixed(4),e=Js.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(os).join(`
`)}function Dm(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Nm(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const a=s.getActiveAttrib(t,i),r=a.name;let o=1;a.type===s.FLOAT_MAT2&&(o=2),a.type===s.FLOAT_MAT3&&(o=3),a.type===s.FLOAT_MAT4&&(o=4),e[r]={type:a.type,location:s.getAttribLocation(t,r),locationSize:o}}return e}function os(s){return s!==""}function Mc(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Om=/^[ \t]*#include +<([\w\d./]+)>/gm;function to(s){return s.replace(Om,Um)}const Fm=new Map;function Um(s,t){let e=Vt[t];if(e===void 0){const n=Fm.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return to(e)}const Bm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ec(s){return s.replace(Bm,zm)}function zm(s,t,e,n){let i="";for(let a=parseInt(t);a<parseInt(e);a++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function wc(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function km(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ol?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===cl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===_n&&(t="SHADOWMAP_TYPE_VSM"),t}function Hm(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Hi:case Gi:t="ENVMAP_TYPE_CUBE";break;case Ta:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Gm(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Gi:t="ENVMAP_MODE_REFRACTION";break}return t}function Vm(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ll:t="ENVMAP_BLENDING_MULTIPLY";break;case Ih:t="ENVMAP_BLENDING_MIX";break;case Lh:t="ENVMAP_BLENDING_ADD";break}return t}function Wm(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Xm(s,t,e,n){const i=s.getContext(),a=e.defines;let r=e.vertexShader,o=e.fragmentShader;const c=km(e),l=Hm(e),h=Gm(e),d=Vm(e),u=Wm(e),p=Lm(e),g=Dm(a),_=i.createProgram();let m,f,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(os).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(os).join(`
`),f.length>0&&(f+=`
`)):(m=[wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(os).join(`
`),f=[wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Dn?"#define TONE_MAPPING":"",e.toneMapping!==Dn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Dn?Pm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,Cm("linearToOutputTexel",e.outputColorSpace),Im(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(os).join(`
`)),r=to(r),r=Mc(r,e),r=bc(r,e),o=to(o),o=Mc(o,e),o=bc(o,e),r=Ec(r),o=Ec(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===zo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=M+m+r,y=M+f+o,D=xc(i,i.VERTEX_SHADER,v),R=xc(i,i.FRAGMENT_SHADER,y);i.attachShader(_,D),i.attachShader(_,R),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function P(I){if(s.debug.checkShaderErrors){const k=i.getProgramInfoLog(_).trim(),C=i.getShaderInfoLog(D).trim(),b=i.getShaderInfoLog(R).trim();let U=!0,O=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(U=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,D,R);else{const z=Sc(i,D,"vertex"),N=Sc(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+k+`
`+z+`
`+N)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(C===""||b==="")&&(O=!1);O&&(I.diagnostics={runnable:U,programLog:k,vertexShader:{log:C,prefix:m},fragmentShader:{log:b,prefix:f}})}i.deleteShader(D),i.deleteShader(R),F=new ga(i,_),E=Nm(i,_)}let F;this.getUniforms=function(){return F===void 0&&P(this),F};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,wm)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Am++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=R,this}let $m=0;class Ym{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),a=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new qm(t),e.set(t,n)),n}}class qm{constructor(t){this.id=$m++,this.code=t,this.usedTimes=0}}function jm(s,t,e,n,i,a,r){const o=new vo,c=new Ym,l=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,S,I,k,C){const b=k.fog,U=C.geometry,O=E.isMeshStandardMaterial?k.environment:null,z=(E.isMeshStandardMaterial?e:t).get(E.envMap||O),N=z&&z.mapping===Ta?z.image.height:null,H=g[E.type];E.precision!==null&&(p=i.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const X=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Y=X!==void 0?X.length:0;let et=0;U.morphAttributes.position!==void 0&&(et=1),U.morphAttributes.normal!==void 0&&(et=2),U.morphAttributes.color!==void 0&&(et=3);let Q,B,K,it;if(H){const Kt=an[H];Q=Kt.vertexShader,B=Kt.fragmentShader}else Q=E.vertexShader,B=E.fragmentShader,c.update(E),K=c.getVertexShaderID(E),it=c.getFragmentShaderID(E);const st=s.getRenderTarget(),At=C.isInstancedMesh===!0,Tt=C.isBatchedMesh===!0,Et=!!E.map,Ht=!!E.matcap,A=!!z,J=!!E.aoMap,nt=!!E.lightMap,ut=!!E.bumpMap,tt=!!E.normalMap,St=!!E.displacementMap,at=!!E.emissiveMap,mt=!!E.metalnessMap,L=!!E.roughnessMap,x=E.anisotropy>0,j=E.clearcoat>0,ct=E.dispersion>0,ot=E.iridescence>0,ht=E.sheen>0,Nt=E.transmission>0,yt=x&&!!E.anisotropyMap,wt=j&&!!E.clearcoatMap,Gt=j&&!!E.clearcoatNormalMap,ft=j&&!!E.clearcoatRoughnessMap,bt=ot&&!!E.iridescenceMap,qt=ot&&!!E.iridescenceThicknessMap,zt=ht&&!!E.sheenColorMap,Rt=ht&&!!E.sheenRoughnessMap,kt=!!E.specularMap,$t=!!E.specularColorMap,de=!!E.specularIntensityMap,G=Nt&&!!E.transmissionMap,gt=Nt&&!!E.thicknessMap,rt=!!E.gradientMap,lt=!!E.alphaMap,_t=E.alphaTest>0,Ft=!!E.alphaHash,jt=!!E.extensions;let ve=Dn;E.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(ve=s.toneMapping);const Te={shaderID:H,shaderType:E.type,shaderName:E.name,vertexShader:Q,fragmentShader:B,defines:E.defines,customVertexShaderID:K,customFragmentShaderID:it,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Tt,batchingColor:Tt&&C._colorsTexture!==null,instancing:At,instancingColor:At&&C.instanceColor!==null,instancingMorph:At&&C.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:st===null?s.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Un,alphaToCoverage:!!E.alphaToCoverage,map:Et,matcap:Ht,envMap:A,envMapMode:A&&z.mapping,envMapCubeUVHeight:N,aoMap:J,lightMap:nt,bumpMap:ut,normalMap:tt,displacementMap:u&&St,emissiveMap:at,normalMapObjectSpace:tt&&E.normalMapType===Gh,normalMapTangentSpace:tt&&E.normalMapType===Sl,metalnessMap:mt,roughnessMap:L,anisotropy:x,anisotropyMap:yt,clearcoat:j,clearcoatMap:wt,clearcoatNormalMap:Gt,clearcoatRoughnessMap:ft,dispersion:ct,iridescence:ot,iridescenceMap:bt,iridescenceThicknessMap:qt,sheen:ht,sheenColorMap:zt,sheenRoughnessMap:Rt,specularMap:kt,specularColorMap:$t,specularIntensityMap:de,transmission:Nt,transmissionMap:G,thicknessMap:gt,gradientMap:rt,opaque:E.transparent===!1&&E.blending===Ui&&E.alphaToCoverage===!1,alphaMap:lt,alphaTest:_t,alphaHash:Ft,combine:E.combine,mapUv:Et&&_(E.map.channel),aoMapUv:J&&_(E.aoMap.channel),lightMapUv:nt&&_(E.lightMap.channel),bumpMapUv:ut&&_(E.bumpMap.channel),normalMapUv:tt&&_(E.normalMap.channel),displacementMapUv:St&&_(E.displacementMap.channel),emissiveMapUv:at&&_(E.emissiveMap.channel),metalnessMapUv:mt&&_(E.metalnessMap.channel),roughnessMapUv:L&&_(E.roughnessMap.channel),anisotropyMapUv:yt&&_(E.anisotropyMap.channel),clearcoatMapUv:wt&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&_(E.sheenRoughnessMap.channel),specularMapUv:kt&&_(E.specularMap.channel),specularColorMapUv:$t&&_(E.specularColorMap.channel),specularIntensityMapUv:de&&_(E.specularIntensityMap.channel),transmissionMapUv:G&&_(E.transmissionMap.channel),thicknessMapUv:gt&&_(E.thicknessMap.channel),alphaMapUv:lt&&_(E.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(tt||x),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!U.attributes.uv&&(Et||lt),fog:!!b,useFog:E.fog===!0,fogExp2:!!b&&b.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:C.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:et,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:ve,decodeVideoTexture:Et&&E.map.isVideoTexture===!0&&ee.getTransfer(E.map.colorSpace)===oe,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Fe,flipSided:E.side===ke,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:jt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(jt&&E.extensions.multiDraw===!0||Tt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function f(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const I in E.defines)S.push(I),S.push(E.defines[I]);return E.isRawShaderMaterial===!1&&(M(S,E),v(S,E),S.push(s.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function M(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function v(E,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.doubleSided&&o.enable(10),S.flipSided&&o.enable(11),S.useDepthPacking&&o.enable(12),S.dithering&&o.enable(13),S.transmission&&o.enable(14),S.sheen&&o.enable(15),S.opaque&&o.enable(16),S.pointsUvs&&o.enable(17),S.decodeVideoTexture&&o.enable(18),S.alphaToCoverage&&o.enable(19),E.push(o.mask)}function y(E){const S=g[E.type];let I;if(S){const k=an[S];I=Id.clone(k.uniforms)}else I=E.uniforms;return I}function D(E,S){let I;for(let k=0,C=h.length;k<C;k++){const b=h[k];if(b.cacheKey===S){I=b,++I.usedTimes;break}}return I===void 0&&(I=new Xm(s,S,E,a),h.push(I)),I}function R(E){if(--E.usedTimes===0){const S=h.indexOf(E);h[S]=h[h.length-1],h.pop(),E.destroy()}}function P(E){c.remove(E)}function F(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:D,releaseProgram:R,releaseShaderCache:P,programs:h,dispose:F}}function Zm(){let s=new WeakMap;function t(r){return s.has(r)}function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function n(r){s.delete(r)}function i(r,o,c){s.get(r)[o]=c}function a(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:a}}function Km(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Ac(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Tc(){const s=[];let t=0;const e=[],n=[],i=[];function a(){t=0,e.length=0,n.length=0,i.length=0}function r(d,u,p,g,_,m){let f=s[t];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},s[t]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=m),t++,f}function o(d,u,p,g,_,m){const f=r(d,u,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function c(d,u,p,g,_,m){const f=r(d,u,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function l(d,u){e.length>1&&e.sort(d||Km),n.length>1&&n.sort(u||Ac),i.length>1&&i.sort(u||Ac)}function h(){for(let d=t,u=s.length;d<u;d++){const p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:a,push:o,unshift:c,finish:h,sort:l}}function Jm(){let s=new WeakMap;function t(n,i){const a=s.get(n);let r;return a===void 0?(r=new Tc,s.set(n,[r])):i>=a.length?(r=new Tc,a.push(r)):r=a[i],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function Qm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new Ot};break;case"SpotLight":e={position:new T,direction:new T,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new T,halfWidth:new T,halfHeight:new T};break}return s[t.id]=e,e}}}function tg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let eg=0;function ng(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function ig(s){const t=new Qm,e=tg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new T);const i=new T,a=new ie,r=new ie;function o(l){let h=0,d=0,u=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,M=0,v=0,y=0,D=0,R=0,P=0;l.sort(ng);for(let E=0,S=l.length;E<S;E++){const I=l[E],k=I.color,C=I.intensity,b=I.distance,U=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=k.r*C,d+=k.g*C,u+=k.b*C;else if(I.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(I.sh.coefficients[O],C);P++}else if(I.isDirectionalLight){const O=t.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const z=I.shadow,N=e.get(I);N.shadowIntensity=z.intensity,N.shadowBias=z.bias,N.shadowNormalBias=z.normalBias,N.shadowRadius=z.radius,N.shadowMapSize=z.mapSize,n.directionalShadow[p]=N,n.directionalShadowMap[p]=U,n.directionalShadowMatrix[p]=I.shadow.matrix,M++}n.directional[p]=O,p++}else if(I.isSpotLight){const O=t.get(I);O.position.setFromMatrixPosition(I.matrixWorld),O.color.copy(k).multiplyScalar(C),O.distance=b,O.coneCos=Math.cos(I.angle),O.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),O.decay=I.decay,n.spot[_]=O;const z=I.shadow;if(I.map&&(n.spotLightMap[D]=I.map,D++,z.updateMatrices(I),I.castShadow&&R++),n.spotLightMatrix[_]=z.matrix,I.castShadow){const N=e.get(I);N.shadowIntensity=z.intensity,N.shadowBias=z.bias,N.shadowNormalBias=z.normalBias,N.shadowRadius=z.radius,N.shadowMapSize=z.mapSize,n.spotShadow[_]=N,n.spotShadowMap[_]=U,y++}_++}else if(I.isRectAreaLight){const O=t.get(I);O.color.copy(k).multiplyScalar(C),O.halfWidth.set(I.width*.5,0,0),O.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=O,m++}else if(I.isPointLight){const O=t.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity),O.distance=I.distance,O.decay=I.decay,I.castShadow){const z=I.shadow,N=e.get(I);N.shadowIntensity=z.intensity,N.shadowBias=z.bias,N.shadowNormalBias=z.normalBias,N.shadowRadius=z.radius,N.shadowMapSize=z.mapSize,N.shadowCameraNear=z.camera.near,N.shadowCameraFar=z.camera.far,n.pointShadow[g]=N,n.pointShadowMap[g]=U,n.pointShadowMatrix[g]=I.shadow.matrix,v++}n.point[g]=O,g++}else if(I.isHemisphereLight){const O=t.get(I);O.skyColor.copy(I.color).multiplyScalar(C),O.groundColor.copy(I.groundColor).multiplyScalar(C),n.hemi[f]=O,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const F=n.hash;(F.directionalLength!==p||F.pointLength!==g||F.spotLength!==_||F.rectAreaLength!==m||F.hemiLength!==f||F.numDirectionalShadows!==M||F.numPointShadows!==v||F.numSpotShadows!==y||F.numSpotMaps!==D||F.numLightProbes!==P)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+D-R,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=P,F.directionalLength=p,F.pointLength=g,F.spotLength=_,F.rectAreaLength=m,F.hemiLength=f,F.numDirectionalShadows=M,F.numPointShadows=v,F.numSpotShadows=y,F.numSpotMaps=D,F.numLightProbes=P,n.version=eg++)}function c(l,h){let d=0,u=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,M=l.length;f<M;f++){const v=l[f];if(v.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),d++}else if(v.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),r.identity(),a.copy(v.matrixWorld),a.premultiply(m),r.extractRotation(a),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),g++}else if(v.isPointLight){const y=n.point[u];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),u++}else if(v.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function Rc(s){const t=new ig(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function a(h){e.push(h)}function r(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:a,pushShadow:r}}function sg(s){let t=new WeakMap;function e(i,a=0){const r=t.get(i);let o;return r===void 0?(o=new Rc(s),t.set(i,[o])):a>=r.length?(o=new Rc(s),r.push(o)):o=r[a],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class ag extends Bn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class rg extends Bn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const og=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cg=`uniform sampler2D shadow_pass;
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
}`;function lg(s,t,e){let n=new _o;const i=new dt,a=new dt,r=new ce,o=new ag({depthPacking:Hh}),c=new rg,l={},h=e.maxTextureSize,d={[On]:ke,[ke]:On,[Fe]:Fe},u=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:og,fragmentShader:cg}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new le;g.setAttribute("position",new me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new $(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ol;let f=this.type;this.render=function(R,P,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const E=s.getRenderTarget(),S=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),k=s.state;k.setBlending(Ln),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const C=f!==_n&&this.type===_n,b=f===_n&&this.type!==_n;for(let U=0,O=R.length;U<O;U++){const z=R[U],N=z.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;i.copy(N.mapSize);const H=N.getFrameExtents();if(i.multiply(H),a.copy(N.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(a.x=Math.floor(h/H.x),i.x=a.x*H.x,N.mapSize.x=a.x),i.y>h&&(a.y=Math.floor(h/H.y),i.y=a.y*H.y,N.mapSize.y=a.y)),N.map===null||C===!0||b===!0){const Y=this.type!==_n?{minFilter:ze,magFilter:ze}:{};N.map!==null&&N.map.dispose(),N.map=new ti(i.x,i.y,Y),N.map.texture.name=z.name+".shadowMap",N.camera.updateProjectionMatrix()}s.setRenderTarget(N.map),s.clear();const X=N.getViewportCount();for(let Y=0;Y<X;Y++){const et=N.getViewport(Y);r.set(a.x*et.x,a.y*et.y,a.x*et.z,a.y*et.w),k.viewport(r),N.updateMatrices(z,Y),n=N.getFrustum(),y(P,F,N.camera,z,this.type)}N.isPointLightShadow!==!0&&this.type===_n&&M(N,F),N.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(E,S,I)};function M(R,P){const F=t.update(_);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ti(i.x,i.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(P,null,F,u,_,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(P,null,F,p,_,null)}function v(R,P,F,E){let S=null;const I=F.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)S=I;else if(S=F.isPointLight===!0?c:o,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const k=S.uuid,C=P.uuid;let b=l[k];b===void 0&&(b={},l[k]=b);let U=b[C];U===void 0&&(U=S.clone(),b[C]=U,P.addEventListener("dispose",D)),S=U}if(S.visible=P.visible,S.wireframe=P.wireframe,E===_n?S.side=P.shadowSide!==null?P.shadowSide:P.side:S.side=P.shadowSide!==null?P.shadowSide:d[P.side],S.alphaMap=P.alphaMap,S.alphaTest=P.alphaTest,S.map=P.map,S.clipShadows=P.clipShadows,S.clippingPlanes=P.clippingPlanes,S.clipIntersection=P.clipIntersection,S.displacementMap=P.displacementMap,S.displacementScale=P.displacementScale,S.displacementBias=P.displacementBias,S.wireframeLinewidth=P.wireframeLinewidth,S.linewidth=P.linewidth,F.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const k=s.properties.get(S);k.light=F}return S}function y(R,P,F,E,S){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===_n)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,R.matrixWorld);const C=t.update(R),b=R.material;if(Array.isArray(b)){const U=C.groups;for(let O=0,z=U.length;O<z;O++){const N=U[O],H=b[N.materialIndex];if(H&&H.visible){const X=v(R,H,E,S);R.onBeforeShadow(s,R,P,F,C,X,N),s.renderBufferDirect(F,null,C,X,R,N),R.onAfterShadow(s,R,P,F,C,X,N)}}}else if(b.visible){const U=v(R,b,E,S);R.onBeforeShadow(s,R,P,F,C,U,null),s.renderBufferDirect(F,null,C,U,R,null),R.onAfterShadow(s,R,P,F,C,U,null)}}const k=R.children;for(let C=0,b=k.length;C<b;C++)y(k[C],P,F,E,S)}function D(R){R.target.removeEventListener("dispose",D);for(const F in l){const E=l[F],S=R.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}function hg(s){function t(){let G=!1;const gt=new ce;let rt=null;const lt=new ce(0,0,0,0);return{setMask:function(_t){rt!==_t&&!G&&(s.colorMask(_t,_t,_t,_t),rt=_t)},setLocked:function(_t){G=_t},setClear:function(_t,Ft,jt,ve,Te){Te===!0&&(_t*=ve,Ft*=ve,jt*=ve),gt.set(_t,Ft,jt,ve),lt.equals(gt)===!1&&(s.clearColor(_t,Ft,jt,ve),lt.copy(gt))},reset:function(){G=!1,rt=null,lt.set(-1,0,0,0)}}}function e(){let G=!1,gt=null,rt=null,lt=null;return{setTest:function(_t){_t?it(s.DEPTH_TEST):st(s.DEPTH_TEST)},setMask:function(_t){gt!==_t&&!G&&(s.depthMask(_t),gt=_t)},setFunc:function(_t){if(rt!==_t){switch(_t){case Eh:s.depthFunc(s.NEVER);break;case wh:s.depthFunc(s.ALWAYS);break;case Ah:s.depthFunc(s.LESS);break;case va:s.depthFunc(s.LEQUAL);break;case Th:s.depthFunc(s.EQUAL);break;case Rh:s.depthFunc(s.GEQUAL);break;case Ch:s.depthFunc(s.GREATER);break;case Ph:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}rt=_t}},setLocked:function(_t){G=_t},setClear:function(_t){lt!==_t&&(s.clearDepth(_t),lt=_t)},reset:function(){G=!1,gt=null,rt=null,lt=null}}}function n(){let G=!1,gt=null,rt=null,lt=null,_t=null,Ft=null,jt=null,ve=null,Te=null;return{setTest:function(Kt){G||(Kt?it(s.STENCIL_TEST):st(s.STENCIL_TEST))},setMask:function(Kt){gt!==Kt&&!G&&(s.stencilMask(Kt),gt=Kt)},setFunc:function(Kt,un,nn){(rt!==Kt||lt!==un||_t!==nn)&&(s.stencilFunc(Kt,un,nn),rt=Kt,lt=un,_t=nn)},setOp:function(Kt,un,nn){(Ft!==Kt||jt!==un||ve!==nn)&&(s.stencilOp(Kt,un,nn),Ft=Kt,jt=un,ve=nn)},setLocked:function(Kt){G=Kt},setClear:function(Kt){Te!==Kt&&(s.clearStencil(Kt),Te=Kt)},reset:function(){G=!1,gt=null,rt=null,lt=null,_t=null,Ft=null,jt=null,ve=null,Te=null}}}const i=new t,a=new e,r=new n,o=new WeakMap,c=new WeakMap;let l={},h={},d=new WeakMap,u=[],p=null,g=!1,_=null,m=null,f=null,M=null,v=null,y=null,D=null,R=new Ot(0,0,0),P=0,F=!1,E=null,S=null,I=null,k=null,C=null;const b=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,O=0;const z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(z)[1]),U=O>=1):z.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),U=O>=2);let N=null,H={};const X=s.getParameter(s.SCISSOR_BOX),Y=s.getParameter(s.VIEWPORT),et=new ce().fromArray(X),Q=new ce().fromArray(Y);function B(G,gt,rt,lt){const _t=new Uint8Array(4),Ft=s.createTexture();s.bindTexture(G,Ft),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let jt=0;jt<rt;jt++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(gt,0,s.RGBA,1,1,lt,0,s.RGBA,s.UNSIGNED_BYTE,_t):s.texImage2D(gt+jt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,_t);return Ft}const K={};K[s.TEXTURE_2D]=B(s.TEXTURE_2D,s.TEXTURE_2D,1),K[s.TEXTURE_CUBE_MAP]=B(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[s.TEXTURE_2D_ARRAY]=B(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),K[s.TEXTURE_3D]=B(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),a.setClear(1),r.setClear(0),it(s.DEPTH_TEST),a.setFunc(va),ut(!1),tt(Oo),it(s.CULL_FACE),J(Ln);function it(G){l[G]!==!0&&(s.enable(G),l[G]=!0)}function st(G){l[G]!==!1&&(s.disable(G),l[G]=!1)}function At(G,gt){return h[G]!==gt?(s.bindFramebuffer(G,gt),h[G]=gt,G===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=gt),G===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=gt),!0):!1}function Tt(G,gt){let rt=u,lt=!1;if(G){rt=d.get(gt),rt===void 0&&(rt=[],d.set(gt,rt));const _t=G.textures;if(rt.length!==_t.length||rt[0]!==s.COLOR_ATTACHMENT0){for(let Ft=0,jt=_t.length;Ft<jt;Ft++)rt[Ft]=s.COLOR_ATTACHMENT0+Ft;rt.length=_t.length,lt=!0}}else rt[0]!==s.BACK&&(rt[0]=s.BACK,lt=!0);lt&&s.drawBuffers(rt)}function Et(G){return p!==G?(s.useProgram(G),p=G,!0):!1}const Ht={[Yn]:s.FUNC_ADD,[oh]:s.FUNC_SUBTRACT,[ch]:s.FUNC_REVERSE_SUBTRACT};Ht[lh]=s.MIN,Ht[hh]=s.MAX;const A={[dh]:s.ZERO,[uh]:s.ONE,[ph]:s.SRC_COLOR,[Sr]:s.SRC_ALPHA,[yh]:s.SRC_ALPHA_SATURATE,[vh]:s.DST_COLOR,[mh]:s.DST_ALPHA,[fh]:s.ONE_MINUS_SRC_COLOR,[Mr]:s.ONE_MINUS_SRC_ALPHA,[_h]:s.ONE_MINUS_DST_COLOR,[gh]:s.ONE_MINUS_DST_ALPHA,[xh]:s.CONSTANT_COLOR,[Sh]:s.ONE_MINUS_CONSTANT_COLOR,[Mh]:s.CONSTANT_ALPHA,[bh]:s.ONE_MINUS_CONSTANT_ALPHA};function J(G,gt,rt,lt,_t,Ft,jt,ve,Te,Kt){if(G===Ln){g===!0&&(st(s.BLEND),g=!1);return}if(g===!1&&(it(s.BLEND),g=!0),G!==rh){if(G!==_||Kt!==F){if((m!==Yn||v!==Yn)&&(s.blendEquation(s.FUNC_ADD),m=Yn,v=Yn),Kt)switch(G){case Ui:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Se:s.blendFunc(s.ONE,s.ONE);break;case Fo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Uo:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ui:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Se:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Fo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Uo:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}f=null,M=null,y=null,D=null,R.set(0,0,0),P=0,_=G,F=Kt}return}_t=_t||gt,Ft=Ft||rt,jt=jt||lt,(gt!==m||_t!==v)&&(s.blendEquationSeparate(Ht[gt],Ht[_t]),m=gt,v=_t),(rt!==f||lt!==M||Ft!==y||jt!==D)&&(s.blendFuncSeparate(A[rt],A[lt],A[Ft],A[jt]),f=rt,M=lt,y=Ft,D=jt),(ve.equals(R)===!1||Te!==P)&&(s.blendColor(ve.r,ve.g,ve.b,Te),R.copy(ve),P=Te),_=G,F=!1}function nt(G,gt){G.side===Fe?st(s.CULL_FACE):it(s.CULL_FACE);let rt=G.side===ke;gt&&(rt=!rt),ut(rt),G.blending===Ui&&G.transparent===!1?J(Ln):J(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),i.setMask(G.colorWrite);const lt=G.stencilWrite;r.setTest(lt),lt&&(r.setMask(G.stencilWriteMask),r.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),r.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),at(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?it(s.SAMPLE_ALPHA_TO_COVERAGE):st(s.SAMPLE_ALPHA_TO_COVERAGE)}function ut(G){E!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),E=G)}function tt(G){G!==sh?(it(s.CULL_FACE),G!==S&&(G===Oo?s.cullFace(s.BACK):G===ah?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):st(s.CULL_FACE),S=G}function St(G){G!==I&&(U&&s.lineWidth(G),I=G)}function at(G,gt,rt){G?(it(s.POLYGON_OFFSET_FILL),(k!==gt||C!==rt)&&(s.polygonOffset(gt,rt),k=gt,C=rt)):st(s.POLYGON_OFFSET_FILL)}function mt(G){G?it(s.SCISSOR_TEST):st(s.SCISSOR_TEST)}function L(G){G===void 0&&(G=s.TEXTURE0+b-1),N!==G&&(s.activeTexture(G),N=G)}function x(G,gt,rt){rt===void 0&&(N===null?rt=s.TEXTURE0+b-1:rt=N);let lt=H[rt];lt===void 0&&(lt={type:void 0,texture:void 0},H[rt]=lt),(lt.type!==G||lt.texture!==gt)&&(N!==rt&&(s.activeTexture(rt),N=rt),s.bindTexture(G,gt||K[G]),lt.type=G,lt.texture=gt)}function j(){const G=H[N];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ct(){try{s.compressedTexImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ot(){try{s.compressedTexImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ht(){try{s.texSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Nt(){try{s.texSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function yt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function wt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Gt(){try{s.texStorage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ft(){try{s.texStorage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function bt(){try{s.texImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function qt(){try{s.texImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function zt(G){et.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),et.copy(G))}function Rt(G){Q.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),Q.copy(G))}function kt(G,gt){let rt=c.get(gt);rt===void 0&&(rt=new WeakMap,c.set(gt,rt));let lt=rt.get(G);lt===void 0&&(lt=s.getUniformBlockIndex(gt,G.name),rt.set(G,lt))}function $t(G,gt){const lt=c.get(gt).get(G);o.get(gt)!==lt&&(s.uniformBlockBinding(gt,lt,G.__bindingPointIndex),o.set(gt,lt))}function de(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},N=null,H={},h={},d=new WeakMap,u=[],p=null,g=!1,_=null,m=null,f=null,M=null,v=null,y=null,D=null,R=new Ot(0,0,0),P=0,F=!1,E=null,S=null,I=null,k=null,C=null,et.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),i.reset(),a.reset(),r.reset()}return{buffers:{color:i,depth:a,stencil:r},enable:it,disable:st,bindFramebuffer:At,drawBuffers:Tt,useProgram:Et,setBlending:J,setMaterial:nt,setFlipSided:ut,setCullFace:tt,setLineWidth:St,setPolygonOffset:at,setScissorTest:mt,activeTexture:L,bindTexture:x,unbindTexture:j,compressedTexImage2D:ct,compressedTexImage3D:ot,texImage2D:bt,texImage3D:qt,updateUBOMapping:kt,uniformBlockBinding:$t,texStorage2D:Gt,texStorage3D:ft,texSubImage2D:ht,texSubImage3D:Nt,compressedTexSubImage2D:yt,compressedTexSubImage3D:wt,scissor:zt,viewport:Rt,reset:de}}function Cc(s,t,e,n){const i=dg(n);switch(e){case ml:return s*t;case vl:return s*t;case _l:return s*t*2;case ho:return s*t/i.components*i.byteLength;case uo:return s*t/i.components*i.byteLength;case yl:return s*t*2/i.components*i.byteLength;case po:return s*t*2/i.components*i.byteLength;case gl:return s*t*3/i.components*i.byteLength;case en:return s*t*4/i.components*i.byteLength;case fo:return s*t*4/i.components*i.byteLength;case da:case ua:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case pa:case fa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Rr:case Pr:return Math.max(s,16)*Math.max(t,8)/4;case Tr:case Cr:return Math.max(s,8)*Math.max(t,8)/2;case Ir:case Lr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Dr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Nr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Or:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Fr:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ur:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Br:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case zr:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case kr:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Hr:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Gr:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Vr:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Wr:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Xr:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case $r:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Yr:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ma:case qr:case jr:return Math.ceil(s/4)*Math.ceil(t/4)*16;case xl:case Zr:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Kr:case Jr:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function dg(s){switch(s){case Sn:case ul:return{byteLength:1,components:1};case vs:case pl:case As:return{byteLength:2,components:1};case co:case lo:return{byteLength:2,components:4};case Qn:case oo:case cn:return{byteLength:4,components:1};case fl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function ug(s,t,e,n,i,a,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new dt,h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,x){return p?new OffscreenCanvas(L,x):Ma("canvas")}function _(L,x,j){let ct=1;const ot=mt(L);if((ot.width>j||ot.height>j)&&(ct=j/Math.max(ot.width,ot.height)),ct<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ht=Math.floor(ct*ot.width),Nt=Math.floor(ct*ot.height);d===void 0&&(d=g(ht,Nt));const yt=x?g(ht,Nt):d;return yt.width=ht,yt.height=Nt,yt.getContext("2d").drawImage(L,0,0,ht,Nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+ht+"x"+Nt+")."),yt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),L;return L}function m(L){return L.generateMipmaps&&L.minFilter!==ze&&L.minFilter!==Je}function f(L){s.generateMipmap(L)}function M(L,x,j,ct,ot=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ht=x;if(x===s.RED&&(j===s.FLOAT&&(ht=s.R32F),j===s.HALF_FLOAT&&(ht=s.R16F),j===s.UNSIGNED_BYTE&&(ht=s.R8)),x===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(ht=s.R8UI),j===s.UNSIGNED_SHORT&&(ht=s.R16UI),j===s.UNSIGNED_INT&&(ht=s.R32UI),j===s.BYTE&&(ht=s.R8I),j===s.SHORT&&(ht=s.R16I),j===s.INT&&(ht=s.R32I)),x===s.RG&&(j===s.FLOAT&&(ht=s.RG32F),j===s.HALF_FLOAT&&(ht=s.RG16F),j===s.UNSIGNED_BYTE&&(ht=s.RG8)),x===s.RG_INTEGER&&(j===s.UNSIGNED_BYTE&&(ht=s.RG8UI),j===s.UNSIGNED_SHORT&&(ht=s.RG16UI),j===s.UNSIGNED_INT&&(ht=s.RG32UI),j===s.BYTE&&(ht=s.RG8I),j===s.SHORT&&(ht=s.RG16I),j===s.INT&&(ht=s.RG32I)),x===s.RGB&&j===s.UNSIGNED_INT_5_9_9_9_REV&&(ht=s.RGB9_E5),x===s.RGBA){const Nt=ot?_a:ee.getTransfer(ct);j===s.FLOAT&&(ht=s.RGBA32F),j===s.HALF_FLOAT&&(ht=s.RGBA16F),j===s.UNSIGNED_BYTE&&(ht=Nt===oe?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT_4_4_4_4&&(ht=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(ht=s.RGB5_A1)}return(ht===s.R16F||ht===s.R32F||ht===s.RG16F||ht===s.RG32F||ht===s.RGBA16F||ht===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function v(L,x){let j;return L?x===null||x===Qn||x===Vi?j=s.DEPTH24_STENCIL8:x===cn?j=s.DEPTH32F_STENCIL8:x===vs&&(j=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Qn||x===Vi?j=s.DEPTH_COMPONENT24:x===cn?j=s.DEPTH_COMPONENT32F:x===vs&&(j=s.DEPTH_COMPONENT16),j}function y(L,x){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==ze&&L.minFilter!==Je?Math.log2(Math.max(x.width,x.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?x.mipmaps.length:1}function D(L){const x=L.target;x.removeEventListener("dispose",D),P(x),x.isVideoTexture&&h.delete(x)}function R(L){const x=L.target;x.removeEventListener("dispose",R),E(x)}function P(L){const x=n.get(L);if(x.__webglInit===void 0)return;const j=L.source,ct=u.get(j);if(ct){const ot=ct[x.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&F(L),Object.keys(ct).length===0&&u.delete(j)}n.remove(L)}function F(L){const x=n.get(L);s.deleteTexture(x.__webglTexture);const j=L.source,ct=u.get(j);delete ct[x.__cacheKey],r.memory.textures--}function E(L){const x=n.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(x.__webglFramebuffer[ct]))for(let ot=0;ot<x.__webglFramebuffer[ct].length;ot++)s.deleteFramebuffer(x.__webglFramebuffer[ct][ot]);else s.deleteFramebuffer(x.__webglFramebuffer[ct]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[ct])}else{if(Array.isArray(x.__webglFramebuffer))for(let ct=0;ct<x.__webglFramebuffer.length;ct++)s.deleteFramebuffer(x.__webglFramebuffer[ct]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let ct=0;ct<x.__webglColorRenderbuffer.length;ct++)x.__webglColorRenderbuffer[ct]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[ct]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const j=L.textures;for(let ct=0,ot=j.length;ct<ot;ct++){const ht=n.get(j[ct]);ht.__webglTexture&&(s.deleteTexture(ht.__webglTexture),r.memory.textures--),n.remove(j[ct])}n.remove(L)}let S=0;function I(){S=0}function k(){const L=S;return L>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),S+=1,L}function C(L){const x=[];return x.push(L.wrapS),x.push(L.wrapT),x.push(L.wrapR||0),x.push(L.magFilter),x.push(L.minFilter),x.push(L.anisotropy),x.push(L.internalFormat),x.push(L.format),x.push(L.type),x.push(L.generateMipmaps),x.push(L.premultiplyAlpha),x.push(L.flipY),x.push(L.unpackAlignment),x.push(L.colorSpace),x.join()}function b(L,x){const j=n.get(L);if(L.isVideoTexture&&St(L),L.isRenderTargetTexture===!1&&L.version>0&&j.__version!==L.version){const ct=L.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(j,L,x);return}}e.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+x)}function U(L,x){const j=n.get(L);if(L.version>0&&j.__version!==L.version){Q(j,L,x);return}e.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+x)}function O(L,x){const j=n.get(L);if(L.version>0&&j.__version!==L.version){Q(j,L,x);return}e.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+x)}function z(L,x){const j=n.get(L);if(L.version>0&&j.__version!==L.version){B(j,L,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+x)}const N={[wr]:s.REPEAT,[Zn]:s.CLAMP_TO_EDGE,[Ar]:s.MIRRORED_REPEAT},H={[ze]:s.NEAREST,[zh]:s.NEAREST_MIPMAP_NEAREST,[Is]:s.NEAREST_MIPMAP_LINEAR,[Je]:s.LINEAR,[Ua]:s.LINEAR_MIPMAP_NEAREST,[Kn]:s.LINEAR_MIPMAP_LINEAR},X={[Vh]:s.NEVER,[jh]:s.ALWAYS,[Wh]:s.LESS,[Ml]:s.LEQUAL,[Xh]:s.EQUAL,[qh]:s.GEQUAL,[$h]:s.GREATER,[Yh]:s.NOTEQUAL};function Y(L,x){if(x.type===cn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Je||x.magFilter===Ua||x.magFilter===Is||x.magFilter===Kn||x.minFilter===Je||x.minFilter===Ua||x.minFilter===Is||x.minFilter===Kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,N[x.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,N[x.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,N[x.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,H[x.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,H[x.minFilter]),x.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,X[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ze||x.minFilter!==Is&&x.minFilter!==Kn||x.type===cn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const j=t.get("EXT_texture_filter_anisotropic");s.texParameterf(L,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function et(L,x){let j=!1;L.__webglInit===void 0&&(L.__webglInit=!0,x.addEventListener("dispose",D));const ct=x.source;let ot=u.get(ct);ot===void 0&&(ot={},u.set(ct,ot));const ht=C(x);if(ht!==L.__cacheKey){ot[ht]===void 0&&(ot[ht]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,j=!0),ot[ht].usedTimes++;const Nt=ot[L.__cacheKey];Nt!==void 0&&(ot[L.__cacheKey].usedTimes--,Nt.usedTimes===0&&F(x)),L.__cacheKey=ht,L.__webglTexture=ot[ht].texture}return j}function Q(L,x,j){let ct=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ct=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ct=s.TEXTURE_3D);const ot=et(L,x),ht=x.source;e.bindTexture(ct,L.__webglTexture,s.TEXTURE0+j);const Nt=n.get(ht);if(ht.version!==Nt.__version||ot===!0){e.activeTexture(s.TEXTURE0+j);const yt=ee.getPrimaries(ee.workingColorSpace),wt=x.colorSpace===In?null:ee.getPrimaries(x.colorSpace),Gt=x.colorSpace===In||yt===wt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let ft=_(x.image,!1,i.maxTextureSize);ft=at(x,ft);const bt=a.convert(x.format,x.colorSpace),qt=a.convert(x.type);let zt=M(x.internalFormat,bt,qt,x.colorSpace,x.isVideoTexture);Y(ct,x);let Rt;const kt=x.mipmaps,$t=x.isVideoTexture!==!0,de=Nt.__version===void 0||ot===!0,G=ht.dataReady,gt=y(x,ft);if(x.isDepthTexture)zt=v(x.format===Wi,x.type),de&&($t?e.texStorage2D(s.TEXTURE_2D,1,zt,ft.width,ft.height):e.texImage2D(s.TEXTURE_2D,0,zt,ft.width,ft.height,0,bt,qt,null));else if(x.isDataTexture)if(kt.length>0){$t&&de&&e.texStorage2D(s.TEXTURE_2D,gt,zt,kt[0].width,kt[0].height);for(let rt=0,lt=kt.length;rt<lt;rt++)Rt=kt[rt],$t?G&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,Rt.width,Rt.height,bt,qt,Rt.data):e.texImage2D(s.TEXTURE_2D,rt,zt,Rt.width,Rt.height,0,bt,qt,Rt.data);x.generateMipmaps=!1}else $t?(de&&e.texStorage2D(s.TEXTURE_2D,gt,zt,ft.width,ft.height),G&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ft.width,ft.height,bt,qt,ft.data)):e.texImage2D(s.TEXTURE_2D,0,zt,ft.width,ft.height,0,bt,qt,ft.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){$t&&de&&e.texStorage3D(s.TEXTURE_2D_ARRAY,gt,zt,kt[0].width,kt[0].height,ft.depth);for(let rt=0,lt=kt.length;rt<lt;rt++)if(Rt=kt[rt],x.format!==en)if(bt!==null)if($t){if(G)if(x.layerUpdates.size>0){const _t=Cc(Rt.width,Rt.height,x.format,x.type);for(const Ft of x.layerUpdates){const jt=Rt.data.subarray(Ft*_t/Rt.data.BYTES_PER_ELEMENT,(Ft+1)*_t/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,Ft,Rt.width,Rt.height,1,bt,jt,0,0)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,0,Rt.width,Rt.height,ft.depth,bt,Rt.data,0,0)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,rt,zt,Rt.width,Rt.height,ft.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?G&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,0,Rt.width,Rt.height,ft.depth,bt,qt,Rt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,rt,zt,Rt.width,Rt.height,ft.depth,0,bt,qt,Rt.data)}else{$t&&de&&e.texStorage2D(s.TEXTURE_2D,gt,zt,kt[0].width,kt[0].height);for(let rt=0,lt=kt.length;rt<lt;rt++)Rt=kt[rt],x.format!==en?bt!==null?$t?G&&e.compressedTexSubImage2D(s.TEXTURE_2D,rt,0,0,Rt.width,Rt.height,bt,Rt.data):e.compressedTexImage2D(s.TEXTURE_2D,rt,zt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?G&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,Rt.width,Rt.height,bt,qt,Rt.data):e.texImage2D(s.TEXTURE_2D,rt,zt,Rt.width,Rt.height,0,bt,qt,Rt.data)}else if(x.isDataArrayTexture)if($t){if(de&&e.texStorage3D(s.TEXTURE_2D_ARRAY,gt,zt,ft.width,ft.height,ft.depth),G)if(x.layerUpdates.size>0){const rt=Cc(ft.width,ft.height,x.format,x.type);for(const lt of x.layerUpdates){const _t=ft.data.subarray(lt*rt/ft.data.BYTES_PER_ELEMENT,(lt+1)*rt/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,lt,ft.width,ft.height,1,bt,qt,_t)}x.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,bt,qt,ft.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,zt,ft.width,ft.height,ft.depth,0,bt,qt,ft.data);else if(x.isData3DTexture)$t?(de&&e.texStorage3D(s.TEXTURE_3D,gt,zt,ft.width,ft.height,ft.depth),G&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,bt,qt,ft.data)):e.texImage3D(s.TEXTURE_3D,0,zt,ft.width,ft.height,ft.depth,0,bt,qt,ft.data);else if(x.isFramebufferTexture){if(de)if($t)e.texStorage2D(s.TEXTURE_2D,gt,zt,ft.width,ft.height);else{let rt=ft.width,lt=ft.height;for(let _t=0;_t<gt;_t++)e.texImage2D(s.TEXTURE_2D,_t,zt,rt,lt,0,bt,qt,null),rt>>=1,lt>>=1}}else if(kt.length>0){if($t&&de){const rt=mt(kt[0]);e.texStorage2D(s.TEXTURE_2D,gt,zt,rt.width,rt.height)}for(let rt=0,lt=kt.length;rt<lt;rt++)Rt=kt[rt],$t?G&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,bt,qt,Rt):e.texImage2D(s.TEXTURE_2D,rt,zt,bt,qt,Rt);x.generateMipmaps=!1}else if($t){if(de){const rt=mt(ft);e.texStorage2D(s.TEXTURE_2D,gt,zt,rt.width,rt.height)}G&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,bt,qt,ft)}else e.texImage2D(s.TEXTURE_2D,0,zt,bt,qt,ft);m(x)&&f(ct),Nt.__version=ht.version,x.onUpdate&&x.onUpdate(x)}L.__version=x.version}function B(L,x,j){if(x.image.length!==6)return;const ct=et(L,x),ot=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+j);const ht=n.get(ot);if(ot.version!==ht.__version||ct===!0){e.activeTexture(s.TEXTURE0+j);const Nt=ee.getPrimaries(ee.workingColorSpace),yt=x.colorSpace===In?null:ee.getPrimaries(x.colorSpace),wt=x.colorSpace===In||Nt===yt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const Gt=x.isCompressedTexture||x.image[0].isCompressedTexture,ft=x.image[0]&&x.image[0].isDataTexture,bt=[];for(let lt=0;lt<6;lt++)!Gt&&!ft?bt[lt]=_(x.image[lt],!0,i.maxCubemapSize):bt[lt]=ft?x.image[lt].image:x.image[lt],bt[lt]=at(x,bt[lt]);const qt=bt[0],zt=a.convert(x.format,x.colorSpace),Rt=a.convert(x.type),kt=M(x.internalFormat,zt,Rt,x.colorSpace),$t=x.isVideoTexture!==!0,de=ht.__version===void 0||ct===!0,G=ot.dataReady;let gt=y(x,qt);Y(s.TEXTURE_CUBE_MAP,x);let rt;if(Gt){$t&&de&&e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,kt,qt.width,qt.height);for(let lt=0;lt<6;lt++){rt=bt[lt].mipmaps;for(let _t=0;_t<rt.length;_t++){const Ft=rt[_t];x.format!==en?zt!==null?$t?G&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,_t,0,0,Ft.width,Ft.height,zt,Ft.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,_t,kt,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?G&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,_t,0,0,Ft.width,Ft.height,zt,Rt,Ft.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,_t,kt,Ft.width,Ft.height,0,zt,Rt,Ft.data)}}}else{if(rt=x.mipmaps,$t&&de){rt.length>0&&gt++;const lt=mt(bt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,kt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(ft){$t?G&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,bt[lt].width,bt[lt].height,zt,Rt,bt[lt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,kt,bt[lt].width,bt[lt].height,0,zt,Rt,bt[lt].data);for(let _t=0;_t<rt.length;_t++){const jt=rt[_t].image[lt].image;$t?G&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,_t+1,0,0,jt.width,jt.height,zt,Rt,jt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,_t+1,kt,jt.width,jt.height,0,zt,Rt,jt.data)}}else{$t?G&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,zt,Rt,bt[lt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,kt,zt,Rt,bt[lt]);for(let _t=0;_t<rt.length;_t++){const Ft=rt[_t];$t?G&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,_t+1,0,0,zt,Rt,Ft.image[lt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,_t+1,kt,zt,Rt,Ft.image[lt])}}}m(x)&&f(s.TEXTURE_CUBE_MAP),ht.__version=ot.version,x.onUpdate&&x.onUpdate(x)}L.__version=x.version}function K(L,x,j,ct,ot,ht){const Nt=a.convert(j.format,j.colorSpace),yt=a.convert(j.type),wt=M(j.internalFormat,Nt,yt,j.colorSpace);if(!n.get(x).__hasExternalTextures){const ft=Math.max(1,x.width>>ht),bt=Math.max(1,x.height>>ht);ot===s.TEXTURE_3D||ot===s.TEXTURE_2D_ARRAY?e.texImage3D(ot,ht,wt,ft,bt,x.depth,0,Nt,yt,null):e.texImage2D(ot,ht,wt,ft,bt,0,Nt,yt,null)}e.bindFramebuffer(s.FRAMEBUFFER,L),tt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ct,ot,n.get(j).__webglTexture,0,ut(x)):(ot===s.TEXTURE_2D||ot>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ct,ot,n.get(j).__webglTexture,ht),e.bindFramebuffer(s.FRAMEBUFFER,null)}function it(L,x,j){if(s.bindRenderbuffer(s.RENDERBUFFER,L),x.depthBuffer){const ct=x.depthTexture,ot=ct&&ct.isDepthTexture?ct.type:null,ht=v(x.stencilBuffer,ot),Nt=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,yt=ut(x);tt(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,yt,ht,x.width,x.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,yt,ht,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,ht,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Nt,s.RENDERBUFFER,L)}else{const ct=x.textures;for(let ot=0;ot<ct.length;ot++){const ht=ct[ot],Nt=a.convert(ht.format,ht.colorSpace),yt=a.convert(ht.type),wt=M(ht.internalFormat,Nt,yt,ht.colorSpace),Gt=ut(x);j&&tt(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Gt,wt,x.width,x.height):tt(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Gt,wt,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,wt,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function st(L,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,L),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),b(x.depthTexture,0);const ct=n.get(x.depthTexture).__webglTexture,ot=ut(x);if(x.depthTexture.format===Bi)tt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ct,0,ot):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ct,0);else if(x.depthTexture.format===Wi)tt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ct,0,ot):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function At(L){const x=n.get(L),j=L.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==L.depthTexture){const ct=L.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),ct){const ot=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,ct.removeEventListener("dispose",ot)};ct.addEventListener("dispose",ot),x.__depthDisposeCallback=ot}x.__boundDepthTexture=ct}if(L.depthTexture&&!x.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");st(x.__webglFramebuffer,L)}else if(j){x.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[ct]),x.__webglDepthbuffer[ct]===void 0)x.__webglDepthbuffer[ct]=s.createRenderbuffer(),it(x.__webglDepthbuffer[ct],L,!1);else{const ot=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=x.__webglDepthbuffer[ct];s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,ot,s.RENDERBUFFER,ht)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),it(x.__webglDepthbuffer,L,!1);else{const ct=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ot),s.framebufferRenderbuffer(s.FRAMEBUFFER,ct,s.RENDERBUFFER,ot)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Tt(L,x,j){const ct=n.get(L);x!==void 0&&K(ct.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&At(L)}function Et(L){const x=L.texture,j=n.get(L),ct=n.get(x);L.addEventListener("dispose",R);const ot=L.textures,ht=L.isWebGLCubeRenderTarget===!0,Nt=ot.length>1;if(Nt||(ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture()),ct.__version=x.version,r.memory.textures++),ht){j.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(x.mipmaps&&x.mipmaps.length>0){j.__webglFramebuffer[yt]=[];for(let wt=0;wt<x.mipmaps.length;wt++)j.__webglFramebuffer[yt][wt]=s.createFramebuffer()}else j.__webglFramebuffer[yt]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){j.__webglFramebuffer=[];for(let yt=0;yt<x.mipmaps.length;yt++)j.__webglFramebuffer[yt]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(Nt)for(let yt=0,wt=ot.length;yt<wt;yt++){const Gt=n.get(ot[yt]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=s.createTexture(),r.memory.textures++)}if(L.samples>0&&tt(L)===!1){j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let yt=0;yt<ot.length;yt++){const wt=ot[yt];j.__webglColorRenderbuffer[yt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[yt]);const Gt=a.convert(wt.format,wt.colorSpace),ft=a.convert(wt.type),bt=M(wt.internalFormat,Gt,ft,wt.colorSpace,L.isXRRenderTarget===!0),qt=ut(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,qt,bt,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,j.__webglColorRenderbuffer[yt])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),it(j.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ht){e.bindTexture(s.TEXTURE_CUBE_MAP,ct.__webglTexture),Y(s.TEXTURE_CUBE_MAP,x);for(let yt=0;yt<6;yt++)if(x.mipmaps&&x.mipmaps.length>0)for(let wt=0;wt<x.mipmaps.length;wt++)K(j.__webglFramebuffer[yt][wt],L,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,wt);else K(j.__webglFramebuffer[yt],L,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);m(x)&&f(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Nt){for(let yt=0,wt=ot.length;yt<wt;yt++){const Gt=ot[yt],ft=n.get(Gt);e.bindTexture(s.TEXTURE_2D,ft.__webglTexture),Y(s.TEXTURE_2D,Gt),K(j.__webglFramebuffer,L,Gt,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,0),m(Gt)&&f(s.TEXTURE_2D)}e.unbindTexture()}else{let yt=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(yt=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(yt,ct.__webglTexture),Y(yt,x),x.mipmaps&&x.mipmaps.length>0)for(let wt=0;wt<x.mipmaps.length;wt++)K(j.__webglFramebuffer[wt],L,x,s.COLOR_ATTACHMENT0,yt,wt);else K(j.__webglFramebuffer,L,x,s.COLOR_ATTACHMENT0,yt,0);m(x)&&f(yt),e.unbindTexture()}L.depthBuffer&&At(L)}function Ht(L){const x=L.textures;for(let j=0,ct=x.length;j<ct;j++){const ot=x[j];if(m(ot)){const ht=L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Nt=n.get(ot).__webglTexture;e.bindTexture(ht,Nt),f(ht),e.unbindTexture()}}}const A=[],J=[];function nt(L){if(L.samples>0){if(tt(L)===!1){const x=L.textures,j=L.width,ct=L.height;let ot=s.COLOR_BUFFER_BIT;const ht=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Nt=n.get(L),yt=x.length>1;if(yt)for(let wt=0;wt<x.length;wt++)e.bindFramebuffer(s.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Nt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let wt=0;wt<x.length;wt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ot|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ot|=s.STENCIL_BUFFER_BIT)),yt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Nt.__webglColorRenderbuffer[wt]);const Gt=n.get(x[wt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Gt,0)}s.blitFramebuffer(0,0,j,ct,0,0,j,ct,ot,s.NEAREST),c===!0&&(A.length=0,J.length=0,A.push(s.COLOR_ATTACHMENT0+wt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(A.push(ht),J.push(ht),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,J)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,A))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),yt)for(let wt=0;wt<x.length;wt++){e.bindFramebuffer(s.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,Nt.__webglColorRenderbuffer[wt]);const Gt=n.get(x[wt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Nt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,Gt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const x=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function ut(L){return Math.min(i.maxSamples,L.samples)}function tt(L){const x=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function St(L){const x=r.render.frame;h.get(L)!==x&&(h.set(L,x),L.update())}function at(L,x){const j=L.colorSpace,ct=L.format,ot=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||j!==Un&&j!==In&&(ee.getTransfer(j)===oe?(ct!==en||ot!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),x}function mt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=I,this.setTexture2D=b,this.setTexture2DArray=U,this.setTexture3D=O,this.setTextureCube=z,this.rebindTextures=Tt,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=K,this.useMultisampledRTT=tt}function pg(s,t){function e(n,i=In){let a;const r=ee.getTransfer(i);if(n===Sn)return s.UNSIGNED_BYTE;if(n===co)return s.UNSIGNED_SHORT_4_4_4_4;if(n===lo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===fl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ul)return s.BYTE;if(n===pl)return s.SHORT;if(n===vs)return s.UNSIGNED_SHORT;if(n===oo)return s.INT;if(n===Qn)return s.UNSIGNED_INT;if(n===cn)return s.FLOAT;if(n===As)return s.HALF_FLOAT;if(n===ml)return s.ALPHA;if(n===gl)return s.RGB;if(n===en)return s.RGBA;if(n===vl)return s.LUMINANCE;if(n===_l)return s.LUMINANCE_ALPHA;if(n===Bi)return s.DEPTH_COMPONENT;if(n===Wi)return s.DEPTH_STENCIL;if(n===ho)return s.RED;if(n===uo)return s.RED_INTEGER;if(n===yl)return s.RG;if(n===po)return s.RG_INTEGER;if(n===fo)return s.RGBA_INTEGER;if(n===da||n===ua||n===pa||n===fa)if(r===oe)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===da)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ua)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===pa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===da)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ua)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===pa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Tr||n===Rr||n===Cr||n===Pr)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Tr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Rr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Cr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ir||n===Lr||n===Dr)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Ir||n===Lr)return r===oe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Dr)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Nr||n===Or||n===Fr||n===Ur||n===Br||n===zr||n===kr||n===Hr||n===Gr||n===Vr||n===Wr||n===Xr||n===$r||n===Yr)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Nr)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Or)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fr)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ur)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Br)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zr)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kr)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Hr)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Gr)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vr)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wr)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xr)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$r)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yr)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ma||n===qr||n===jr)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(n===ma)return r===oe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qr)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jr)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xl||n===Zr||n===Kr||n===Jr)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(n===ma)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Zr)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Kr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jr)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class fg extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Yt extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mg={type:"move"};class cr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,a=null,r=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&u>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&a!==null&&(i=a),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mg)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Yt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const gg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vg=`
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

}`;class _g{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new De,a=t.properties.get(i);a.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Fn({vertexShader:gg,fragmentShader:vg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new $(new Jn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yg extends si{constructor(t,e){super();const n=this;let i=null,a=1,r=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,p=null,g=null;const _=new _g,m=e.getContextAttributes();let f=null,M=null;const v=[],y=[],D=new dt;let R=null;const P=new Xe;P.layers.enable(1),P.viewport=new ce;const F=new Xe;F.layers.enable(2),F.viewport=new ce;const E=[P,F],S=new fg;S.layers.enable(1),S.layers.enable(2);let I=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let K=v[B];return K===void 0&&(K=new cr,v[B]=K),K.getTargetRaySpace()},this.getControllerGrip=function(B){let K=v[B];return K===void 0&&(K=new cr,v[B]=K),K.getGripSpace()},this.getHand=function(B){let K=v[B];return K===void 0&&(K=new cr,v[B]=K),K.getHandSpace()};function C(B){const K=y.indexOf(B.inputSource);if(K===-1)return;const it=v[K];it!==void 0&&(it.update(B.inputSource,B.frame,l||r),it.dispatchEvent({type:B.type,data:B.inputSource}))}function b(){i.removeEventListener("select",C),i.removeEventListener("selectstart",C),i.removeEventListener("selectend",C),i.removeEventListener("squeeze",C),i.removeEventListener("squeezestart",C),i.removeEventListener("squeezeend",C),i.removeEventListener("end",b),i.removeEventListener("inputsourceschange",U);for(let B=0;B<v.length;B++){const K=y[B];K!==null&&(y[B]=null,v[B].disconnect(K))}I=null,k=null,_.reset(),t.setRenderTarget(f),p=null,u=null,d=null,i=null,M=null,Q.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",C),i.addEventListener("selectstart",C),i.addEventListener("selectend",C),i.addEventListener("squeeze",C),i.addEventListener("squeezestart",C),i.addEventListener("squeezeend",C),i.addEventListener("end",b),i.addEventListener("inputsourceschange",U),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(D),i.renderState.layers===void 0){const K={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(i,e,K),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new ti(p.framebufferWidth,p.framebufferHeight,{format:en,type:Sn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let K=null,it=null,st=null;m.depth&&(st=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=m.stencil?Wi:Bi,it=m.stencil?Vi:Qn);const At={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:a};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(At),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new ti(u.textureWidth,u.textureHeight,{format:en,type:Sn,depthTexture:new Ol(u.textureWidth,u.textureHeight,it,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await i.requestReferenceSpace(o),Q.setContext(i),Q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function U(B){for(let K=0;K<B.removed.length;K++){const it=B.removed[K],st=y.indexOf(it);st>=0&&(y[st]=null,v[st].disconnect(it))}for(let K=0;K<B.added.length;K++){const it=B.added[K];let st=y.indexOf(it);if(st===-1){for(let Tt=0;Tt<v.length;Tt++)if(Tt>=y.length){y.push(it),st=Tt;break}else if(y[Tt]===null){y[Tt]=it,st=Tt;break}if(st===-1)break}const At=v[st];At&&At.connect(it)}}const O=new T,z=new T;function N(B,K,it){O.setFromMatrixPosition(K.matrixWorld),z.setFromMatrixPosition(it.matrixWorld);const st=O.distanceTo(z),At=K.projectionMatrix.elements,Tt=it.projectionMatrix.elements,Et=At[14]/(At[10]-1),Ht=At[14]/(At[10]+1),A=(At[9]+1)/At[5],J=(At[9]-1)/At[5],nt=(At[8]-1)/At[0],ut=(Tt[8]+1)/Tt[0],tt=Et*nt,St=Et*ut,at=st/(-nt+ut),mt=at*-nt;if(K.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(mt),B.translateZ(at),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),At[10]===-1)B.projectionMatrix.copy(K.projectionMatrix),B.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const L=Et+at,x=Ht+at,j=tt-mt,ct=St+(st-mt),ot=A*Ht/x*L,ht=J*Ht/x*L;B.projectionMatrix.makePerspective(j,ct,ot,ht,L,x),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function H(B,K){K===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(K.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;let K=B.near,it=B.far;_.texture!==null&&(_.depthNear>0&&(K=_.depthNear),_.depthFar>0&&(it=_.depthFar)),S.near=F.near=P.near=K,S.far=F.far=P.far=it,(I!==S.near||k!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),I=S.near,k=S.far);const st=B.parent,At=S.cameras;H(S,st);for(let Tt=0;Tt<At.length;Tt++)H(At[Tt],st);At.length===2?N(S,P,F):S.projectionMatrix.copy(P.projectionMatrix),X(B,S,st)};function X(B,K,it){it===null?B.matrix.copy(K.matrixWorld):(B.matrix.copy(it.matrixWorld),B.matrix.invert(),B.matrix.multiply(K.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(K.projectionMatrix),B.projectionMatrixInverse.copy(K.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=_s*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(B){c=B,u!==null&&(u.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let Y=null;function et(B,K){if(h=K.getViewerPose(l||r),g=K,h!==null){const it=h.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let st=!1;it.length!==S.cameras.length&&(S.cameras.length=0,st=!0);for(let Tt=0;Tt<it.length;Tt++){const Et=it[Tt];let Ht=null;if(p!==null)Ht=p.getViewport(Et);else{const J=d.getViewSubImage(u,Et);Ht=J.viewport,Tt===0&&(t.setRenderTargetTextures(M,J.colorTexture,u.ignoreDepthValues?void 0:J.depthStencilTexture),t.setRenderTarget(M))}let A=E[Tt];A===void 0&&(A=new Xe,A.layers.enable(Tt),A.viewport=new ce,E[Tt]=A),A.matrix.fromArray(Et.transform.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale),A.projectionMatrix.fromArray(Et.projectionMatrix),A.projectionMatrixInverse.copy(A.projectionMatrix).invert(),A.viewport.set(Ht.x,Ht.y,Ht.width,Ht.height),Tt===0&&(S.matrix.copy(A.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),st===!0&&S.cameras.push(A)}const At=i.enabledFeatures;if(At&&At.includes("depth-sensing")){const Tt=d.getDepthInformation(it[0]);Tt&&Tt.isValid&&Tt.texture&&_.init(t,Tt,i.renderState)}}for(let it=0;it<v.length;it++){const st=y[it],At=v[it];st!==null&&At!==void 0&&At.update(st,K,l||r)}Y&&Y(B,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const Q=new Dl;Q.setAnimationLoop(et),this.setAnimationLoop=function(B){Y=B},this.dispose=function(){}}}const Xn=new hn,xg=new ie;function Sg(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Pl(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,M,v,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(m,f):f.isMeshToonMaterial?(a(m,f),d(m,f)):f.isMeshPhongMaterial?(a(m,f),h(m,f)):f.isMeshStandardMaterial?(a(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(a(m,f),g(m,f)):f.isMeshDepthMaterial?a(m,f):f.isMeshDistanceMaterial?(a(m,f),_(m,f)):f.isMeshNormalMaterial?a(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,M,v):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===ke&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===ke&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const M=t.get(f),v=M.envMap,y=M.envMapRotation;v&&(m.envMap.value=v,Xn.copy(y),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),m.envMapRotation.value.setFromMatrix4(xg.makeRotationFromEuler(Xn)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,M,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=v*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ke&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const M=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Mg(s,t,e,n){let i={},a={},r=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,v){const y=v.program;n.uniformBlockBinding(M,y)}function l(M,v){let y=i[M.id];y===void 0&&(g(M),y=h(M),i[M.id]=y,M.addEventListener("dispose",m));const D=v.program;n.updateUBOMapping(M,D);const R=t.render.frame;a[M.id]!==R&&(u(M),a[M.id]=R)}function h(M){const v=d();M.__bindingPointIndex=v;const y=s.createBuffer(),D=M.__size,R=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,D,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,y),y}function d(){for(let M=0;M<o;M++)if(r.indexOf(M)===-1)return r.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const v=i[M.id],y=M.uniforms,D=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let R=0,P=y.length;R<P;R++){const F=Array.isArray(y[R])?y[R]:[y[R]];for(let E=0,S=F.length;E<S;E++){const I=F[E];if(p(I,R,E,D)===!0){const k=I.__offset,C=Array.isArray(I.value)?I.value:[I.value];let b=0;for(let U=0;U<C.length;U++){const O=C[U],z=_(O);typeof O=="number"||typeof O=="boolean"?(I.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,k+b,I.__data)):O.isMatrix3?(I.__data[0]=O.elements[0],I.__data[1]=O.elements[1],I.__data[2]=O.elements[2],I.__data[3]=0,I.__data[4]=O.elements[3],I.__data[5]=O.elements[4],I.__data[6]=O.elements[5],I.__data[7]=0,I.__data[8]=O.elements[6],I.__data[9]=O.elements[7],I.__data[10]=O.elements[8],I.__data[11]=0):(O.toArray(I.__data,b),b+=z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(M,v,y,D){const R=M.value,P=v+"_"+y;if(D[P]===void 0)return typeof R=="number"||typeof R=="boolean"?D[P]=R:D[P]=R.clone(),!0;{const F=D[P];if(typeof R=="number"||typeof R=="boolean"){if(F!==R)return D[P]=R,!0}else if(F.equals(R)===!1)return F.copy(R),!0}return!1}function g(M){const v=M.uniforms;let y=0;const D=16;for(let P=0,F=v.length;P<F;P++){const E=Array.isArray(v[P])?v[P]:[v[P]];for(let S=0,I=E.length;S<I;S++){const k=E[S],C=Array.isArray(k.value)?k.value:[k.value];for(let b=0,U=C.length;b<U;b++){const O=C[b],z=_(O),N=y%D,H=N%z.boundary,X=N+H;y+=H,X!==0&&D-X<z.storage&&(y+=D-X),k.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=z.storage}}}const R=y%D;return R>0&&(y+=D-R),M.__size=y,M.__cache={},this}function _(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function m(M){const v=M.target;v.removeEventListener("dispose",m);const y=r.indexOf(v.__bindingPointIndex);r.splice(y,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete a[v.id]}function f(){for(const M in i)s.deleteBuffer(i[M]);r=[],i={},a={}}return{bind:c,update:l,dispose:f}}class bg{constructor(t={}){const{canvas:e=ud(),context:n=null,depth:i=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=r;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=sn,this.toneMapping=Dn,this.toneMappingExposure=1;const v=this;let y=!1,D=0,R=0,P=null,F=-1,E=null;const S=new ce,I=new ce;let k=null;const C=new Ot(0);let b=0,U=e.width,O=e.height,z=1,N=null,H=null;const X=new ce(0,0,U,O),Y=new ce(0,0,U,O);let et=!1;const Q=new _o;let B=!1,K=!1;const it=new ie,st=new T,At=new ce,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Et=!1;function Ht(){return P===null?z:1}let A=n;function J(w,V){return e.getContext(w,V)}try{const w={alpha:!0,depth:i,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ro}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",_t,!1),A===null){const V="webgl2";if(A=J(V,w),A===null)throw J(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let nt,ut,tt,St,at,mt,L,x,j,ct,ot,ht,Nt,yt,wt,Gt,ft,bt,qt,zt,Rt,kt,$t,de;function G(){nt=new Cf(A),nt.init(),kt=new pg(A,nt),ut=new bf(A,nt,t,kt),tt=new hg(A),St=new Lf(A),at=new Zm,mt=new ug(A,nt,tt,at,ut,kt,St),L=new wf(v),x=new Rf(v),j=new Bd(A),$t=new Sf(A,j),ct=new Pf(A,j,St,$t),ot=new Nf(A,ct,j,St),qt=new Df(A,ut,mt),Gt=new Ef(at),ht=new jm(v,L,x,nt,ut,$t,Gt),Nt=new Sg(v,at),yt=new Jm,wt=new sg(nt),bt=new xf(v,L,x,tt,ot,u,c),ft=new lg(v,ot,ut),de=new Mg(A,St,ut,tt),zt=new Mf(A,nt,St),Rt=new If(A,nt,St),St.programs=ht.programs,v.capabilities=ut,v.extensions=nt,v.properties=at,v.renderLists=yt,v.shadowMap=ft,v.state=tt,v.info=St}G();const gt=new yg(v,A);this.xr=gt,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const w=nt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=nt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(w){w!==void 0&&(z=w,this.setSize(U,O,!1))},this.getSize=function(w){return w.set(U,O)},this.setSize=function(w,V,q=!0){if(gt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=w,O=V,e.width=Math.floor(w*z),e.height=Math.floor(V*z),q===!0&&(e.style.width=w+"px",e.style.height=V+"px"),this.setViewport(0,0,w,V)},this.getDrawingBufferSize=function(w){return w.set(U*z,O*z).floor()},this.setDrawingBufferSize=function(w,V,q){U=w,O=V,z=q,e.width=Math.floor(w*q),e.height=Math.floor(V*q),this.setViewport(0,0,w,V)},this.getCurrentViewport=function(w){return w.copy(S)},this.getViewport=function(w){return w.copy(X)},this.setViewport=function(w,V,q,Z){w.isVector4?X.set(w.x,w.y,w.z,w.w):X.set(w,V,q,Z),tt.viewport(S.copy(X).multiplyScalar(z).round())},this.getScissor=function(w){return w.copy(Y)},this.setScissor=function(w,V,q,Z){w.isVector4?Y.set(w.x,w.y,w.z,w.w):Y.set(w,V,q,Z),tt.scissor(I.copy(Y).multiplyScalar(z).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(w){tt.setScissorTest(et=w)},this.setOpaqueSort=function(w){N=w},this.setTransparentSort=function(w){H=w},this.getClearColor=function(w){return w.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor.apply(bt,arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha.apply(bt,arguments)},this.clear=function(w=!0,V=!0,q=!0){let Z=0;if(w){let W=!1;if(P!==null){const vt=P.texture.format;W=vt===fo||vt===po||vt===uo}if(W){const vt=P.texture.type,Mt=vt===Sn||vt===Qn||vt===vs||vt===Vi||vt===co||vt===lo,Ct=bt.getClearColor(),Pt=bt.getClearAlpha(),Ut=Ct.r,Bt=Ct.g,It=Ct.b;Mt?(p[0]=Ut,p[1]=Bt,p[2]=It,p[3]=Pt,A.clearBufferuiv(A.COLOR,0,p)):(g[0]=Ut,g[1]=Bt,g[2]=It,g[3]=Pt,A.clearBufferiv(A.COLOR,0,g))}else Z|=A.COLOR_BUFFER_BIT}V&&(Z|=A.DEPTH_BUFFER_BIT),q&&(Z|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),yt.dispose(),wt.dispose(),at.dispose(),L.dispose(),x.dispose(),ot.dispose(),$t.dispose(),de.dispose(),ht.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",nn),gt.removeEventListener("sessionend",Ro),zn.stop()};function rt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const w=St.autoReset,V=ft.enabled,q=ft.autoUpdate,Z=ft.needsUpdate,W=ft.type;G(),St.autoReset=w,ft.enabled=V,ft.autoUpdate=q,ft.needsUpdate=Z,ft.type=W}function _t(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ft(w){const V=w.target;V.removeEventListener("dispose",Ft),jt(V)}function jt(w){ve(w),at.remove(w)}function ve(w){const V=at.get(w).programs;V!==void 0&&(V.forEach(function(q){ht.releaseProgram(q)}),w.isShaderMaterial&&ht.releaseShaderCache(w))}this.renderBufferDirect=function(w,V,q,Z,W,vt){V===null&&(V=Tt);const Mt=W.isMesh&&W.matrixWorld.determinant()<0,Ct=th(w,V,q,Z,W);tt.setMaterial(Z,Mt);let Pt=q.index,Ut=1;if(Z.wireframe===!0){if(Pt=ct.getWireframeAttribute(q),Pt===void 0)return;Ut=2}const Bt=q.drawRange,It=q.attributes.position;let Jt=Bt.start*Ut,pe=(Bt.start+Bt.count)*Ut;vt!==null&&(Jt=Math.max(Jt,vt.start*Ut),pe=Math.min(pe,(vt.start+vt.count)*Ut)),Pt!==null?(Jt=Math.max(Jt,0),pe=Math.min(pe,Pt.count)):It!=null&&(Jt=Math.max(Jt,0),pe=Math.min(pe,It.count));const fe=pe-Jt;if(fe<0||fe===1/0)return;$t.setup(W,Z,Ct,q,Pt);let He,Qt=zt;if(Pt!==null&&(He=j.get(Pt),Qt=Rt,Qt.setIndex(He)),W.isMesh)Z.wireframe===!0?(tt.setLineWidth(Z.wireframeLinewidth*Ht()),Qt.setMode(A.LINES)):Qt.setMode(A.TRIANGLES);else if(W.isLine){let Lt=Z.linewidth;Lt===void 0&&(Lt=1),tt.setLineWidth(Lt*Ht()),W.isLineSegments?Qt.setMode(A.LINES):W.isLineLoop?Qt.setMode(A.LINE_LOOP):Qt.setMode(A.LINE_STRIP)}else W.isPoints?Qt.setMode(A.POINTS):W.isSprite&&Qt.setMode(A.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Qt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))Qt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Lt=W._multiDrawStarts,Re=W._multiDrawCounts,te=W._multiDrawCount,qe=Pt?j.get(Pt).bytesPerElement:1,oi=at.get(Z).currentProgram.getUniforms();for(let Ge=0;Ge<te;Ge++)oi.setValue(A,"_gl_DrawID",Ge),Qt.render(Lt[Ge]/qe,Re[Ge])}else if(W.isInstancedMesh)Qt.renderInstances(Jt,fe,W.count);else if(q.isInstancedBufferGeometry){const Lt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Re=Math.min(q.instanceCount,Lt);Qt.renderInstances(Jt,fe,Re)}else Qt.render(Jt,fe)};function Te(w,V,q){w.transparent===!0&&w.side===Fe&&w.forceSinglePass===!1?(w.side=ke,w.needsUpdate=!0,Ps(w,V,q),w.side=On,w.needsUpdate=!0,Ps(w,V,q),w.side=Fe):Ps(w,V,q)}this.compile=function(w,V,q=null){q===null&&(q=w),m=wt.get(q),m.init(V),M.push(m),q.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),w!==q&&w.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights();const Z=new Set;return w.traverse(function(W){const vt=W.material;if(vt)if(Array.isArray(vt))for(let Mt=0;Mt<vt.length;Mt++){const Ct=vt[Mt];Te(Ct,q,W),Z.add(Ct)}else Te(vt,q,W),Z.add(vt)}),M.pop(),m=null,Z},this.compileAsync=function(w,V,q=null){const Z=this.compile(w,V,q);return new Promise(W=>{function vt(){if(Z.forEach(function(Mt){at.get(Mt).currentProgram.isReady()&&Z.delete(Mt)}),Z.size===0){W(w);return}setTimeout(vt,10)}nt.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Kt=null;function un(w){Kt&&Kt(w)}function nn(){zn.stop()}function Ro(){zn.start()}const zn=new Dl;zn.setAnimationLoop(un),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(w){Kt=w,gt.setAnimationLoop(w),w===null?zn.stop():zn.start()},gt.addEventListener("sessionstart",nn),gt.addEventListener("sessionend",Ro),this.render=function(w,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),gt.enabled===!0&&gt.isPresenting===!0&&(gt.cameraAutoUpdate===!0&&gt.updateCamera(V),V=gt.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,V,P),m=wt.get(w,M.length),m.init(V),M.push(m),it.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Q.setFromProjectionMatrix(it),K=this.localClippingEnabled,B=Gt.init(this.clippingPlanes,K),_=yt.get(w,f.length),_.init(),f.push(_),gt.enabled===!0&&gt.isPresenting===!0){const vt=v.xr.getDepthSensingMesh();vt!==null&&Da(vt,V,-1/0,v.sortObjects)}Da(w,V,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(N,H),Et=gt.enabled===!1||gt.isPresenting===!1||gt.hasDepthSensing()===!1,Et&&bt.addToRenderList(_,w),this.info.render.frame++,B===!0&&Gt.beginShadows();const q=m.state.shadowsArray;ft.render(q,w,V),B===!0&&Gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=_.opaque,W=_.transmissive;if(m.setupLights(),V.isArrayCamera){const vt=V.cameras;if(W.length>0)for(let Mt=0,Ct=vt.length;Mt<Ct;Mt++){const Pt=vt[Mt];Po(Z,W,w,Pt)}Et&&bt.render(w);for(let Mt=0,Ct=vt.length;Mt<Ct;Mt++){const Pt=vt[Mt];Co(_,w,Pt,Pt.viewport)}}else W.length>0&&Po(Z,W,w,V),Et&&bt.render(w),Co(_,w,V);P!==null&&(mt.updateMultisampleRenderTarget(P),mt.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(v,w,V),$t.resetDefaultState(),F=-1,E=null,M.pop(),M.length>0?(m=M[M.length-1],B===!0&&Gt.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function Da(w,V,q,Z){if(w.visible===!1)return;if(w.layers.test(V.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(V);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Q.intersectsSprite(w)){Z&&At.setFromMatrixPosition(w.matrixWorld).applyMatrix4(it);const Mt=ot.update(w),Ct=w.material;Ct.visible&&_.push(w,Mt,Ct,q,At.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Q.intersectsObject(w))){const Mt=ot.update(w),Ct=w.material;if(Z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),At.copy(w.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),At.copy(Mt.boundingSphere.center)),At.applyMatrix4(w.matrixWorld).applyMatrix4(it)),Array.isArray(Ct)){const Pt=Mt.groups;for(let Ut=0,Bt=Pt.length;Ut<Bt;Ut++){const It=Pt[Ut],Jt=Ct[It.materialIndex];Jt&&Jt.visible&&_.push(w,Mt,Jt,q,At.z,It)}}else Ct.visible&&_.push(w,Mt,Ct,q,At.z,null)}}const vt=w.children;for(let Mt=0,Ct=vt.length;Mt<Ct;Mt++)Da(vt[Mt],V,q,Z)}function Co(w,V,q,Z){const W=w.opaque,vt=w.transmissive,Mt=w.transparent;m.setupLightsView(q),B===!0&&Gt.setGlobalState(v.clippingPlanes,q),Z&&tt.viewport(S.copy(Z)),W.length>0&&Cs(W,V,q),vt.length>0&&Cs(vt,V,q),Mt.length>0&&Cs(Mt,V,q),tt.buffers.depth.setTest(!0),tt.buffers.depth.setMask(!0),tt.buffers.color.setMask(!0),tt.setPolygonOffset(!1)}function Po(w,V,q,Z){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Z.id]===void 0&&(m.state.transmissionRenderTarget[Z.id]=new ti(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?As:Sn,minFilter:Kn,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));const vt=m.state.transmissionRenderTarget[Z.id],Mt=Z.viewport||S;vt.setSize(Mt.z,Mt.w);const Ct=v.getRenderTarget();v.setRenderTarget(vt),v.getClearColor(C),b=v.getClearAlpha(),b<1&&v.setClearColor(16777215,.5),v.clear(),Et&&bt.render(q);const Pt=v.toneMapping;v.toneMapping=Dn;const Ut=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),m.setupLightsView(Z),B===!0&&Gt.setGlobalState(v.clippingPlanes,Z),Cs(w,q,Z),mt.updateMultisampleRenderTarget(vt),mt.updateRenderTargetMipmap(vt),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let It=0,Jt=V.length;It<Jt;It++){const pe=V[It],fe=pe.object,He=pe.geometry,Qt=pe.material,Lt=pe.group;if(Qt.side===Fe&&fe.layers.test(Z.layers)){const Re=Qt.side;Qt.side=ke,Qt.needsUpdate=!0,Io(fe,q,Z,He,Qt,Lt),Qt.side=Re,Qt.needsUpdate=!0,Bt=!0}}Bt===!0&&(mt.updateMultisampleRenderTarget(vt),mt.updateRenderTargetMipmap(vt))}v.setRenderTarget(Ct),v.setClearColor(C,b),Ut!==void 0&&(Z.viewport=Ut),v.toneMapping=Pt}function Cs(w,V,q){const Z=V.isScene===!0?V.overrideMaterial:null;for(let W=0,vt=w.length;W<vt;W++){const Mt=w[W],Ct=Mt.object,Pt=Mt.geometry,Ut=Z===null?Mt.material:Z,Bt=Mt.group;Ct.layers.test(q.layers)&&Io(Ct,V,q,Pt,Ut,Bt)}}function Io(w,V,q,Z,W,vt){w.onBeforeRender(v,V,q,Z,W,vt),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),W.onBeforeRender(v,V,q,Z,w,vt),W.transparent===!0&&W.side===Fe&&W.forceSinglePass===!1?(W.side=ke,W.needsUpdate=!0,v.renderBufferDirect(q,V,Z,W,w,vt),W.side=On,W.needsUpdate=!0,v.renderBufferDirect(q,V,Z,W,w,vt),W.side=Fe):v.renderBufferDirect(q,V,Z,W,w,vt),w.onAfterRender(v,V,q,Z,W,vt)}function Ps(w,V,q){V.isScene!==!0&&(V=Tt);const Z=at.get(w),W=m.state.lights,vt=m.state.shadowsArray,Mt=W.state.version,Ct=ht.getParameters(w,W.state,vt,V,q),Pt=ht.getProgramCacheKey(Ct);let Ut=Z.programs;Z.environment=w.isMeshStandardMaterial?V.environment:null,Z.fog=V.fog,Z.envMap=(w.isMeshStandardMaterial?x:L).get(w.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&w.envMap===null?V.environmentRotation:w.envMapRotation,Ut===void 0&&(w.addEventListener("dispose",Ft),Ut=new Map,Z.programs=Ut);let Bt=Ut.get(Pt);if(Bt!==void 0){if(Z.currentProgram===Bt&&Z.lightsStateVersion===Mt)return Do(w,Ct),Bt}else Ct.uniforms=ht.getUniforms(w),w.onBeforeCompile(Ct,v),Bt=ht.acquireProgram(Ct,Pt),Ut.set(Pt,Bt),Z.uniforms=Ct.uniforms;const It=Z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(It.clippingPlanes=Gt.uniform),Do(w,Ct),Z.needsLights=nh(w),Z.lightsStateVersion=Mt,Z.needsLights&&(It.ambientLightColor.value=W.state.ambient,It.lightProbe.value=W.state.probe,It.directionalLights.value=W.state.directional,It.directionalLightShadows.value=W.state.directionalShadow,It.spotLights.value=W.state.spot,It.spotLightShadows.value=W.state.spotShadow,It.rectAreaLights.value=W.state.rectArea,It.ltc_1.value=W.state.rectAreaLTC1,It.ltc_2.value=W.state.rectAreaLTC2,It.pointLights.value=W.state.point,It.pointLightShadows.value=W.state.pointShadow,It.hemisphereLights.value=W.state.hemi,It.directionalShadowMap.value=W.state.directionalShadowMap,It.directionalShadowMatrix.value=W.state.directionalShadowMatrix,It.spotShadowMap.value=W.state.spotShadowMap,It.spotLightMatrix.value=W.state.spotLightMatrix,It.spotLightMap.value=W.state.spotLightMap,It.pointShadowMap.value=W.state.pointShadowMap,It.pointShadowMatrix.value=W.state.pointShadowMatrix),Z.currentProgram=Bt,Z.uniformsList=null,Bt}function Lo(w){if(w.uniformsList===null){const V=w.currentProgram.getUniforms();w.uniformsList=ga.seqWithValue(V.seq,w.uniforms)}return w.uniformsList}function Do(w,V){const q=at.get(w);q.outputColorSpace=V.outputColorSpace,q.batching=V.batching,q.batchingColor=V.batchingColor,q.instancing=V.instancing,q.instancingColor=V.instancingColor,q.instancingMorph=V.instancingMorph,q.skinning=V.skinning,q.morphTargets=V.morphTargets,q.morphNormals=V.morphNormals,q.morphColors=V.morphColors,q.morphTargetsCount=V.morphTargetsCount,q.numClippingPlanes=V.numClippingPlanes,q.numIntersection=V.numClipIntersection,q.vertexAlphas=V.vertexAlphas,q.vertexTangents=V.vertexTangents,q.toneMapping=V.toneMapping}function th(w,V,q,Z,W){V.isScene!==!0&&(V=Tt),mt.resetTextureUnits();const vt=V.fog,Mt=Z.isMeshStandardMaterial?V.environment:null,Ct=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Un,Pt=(Z.isMeshStandardMaterial?x:L).get(Z.envMap||Mt),Ut=Z.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Bt=!!q.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),It=!!q.morphAttributes.position,Jt=!!q.morphAttributes.normal,pe=!!q.morphAttributes.color;let fe=Dn;Z.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(fe=v.toneMapping);const He=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Qt=He!==void 0?He.length:0,Lt=at.get(Z),Re=m.state.lights;if(B===!0&&(K===!0||w!==E)){const $e=w===E&&Z.id===F;Gt.setState(Z,w,$e)}let te=!1;Z.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==Re.state.version||Lt.outputColorSpace!==Ct||W.isBatchedMesh&&Lt.batching===!1||!W.isBatchedMesh&&Lt.batching===!0||W.isBatchedMesh&&Lt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Lt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Lt.instancing===!1||!W.isInstancedMesh&&Lt.instancing===!0||W.isSkinnedMesh&&Lt.skinning===!1||!W.isSkinnedMesh&&Lt.skinning===!0||W.isInstancedMesh&&Lt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Lt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Lt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Lt.instancingMorph===!1&&W.morphTexture!==null||Lt.envMap!==Pt||Z.fog===!0&&Lt.fog!==vt||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==Gt.numPlanes||Lt.numIntersection!==Gt.numIntersection)||Lt.vertexAlphas!==Ut||Lt.vertexTangents!==Bt||Lt.morphTargets!==It||Lt.morphNormals!==Jt||Lt.morphColors!==pe||Lt.toneMapping!==fe||Lt.morphTargetsCount!==Qt)&&(te=!0):(te=!0,Lt.__version=Z.version);let qe=Lt.currentProgram;te===!0&&(qe=Ps(Z,V,W));let oi=!1,Ge=!1,Na=!1;const _e=qe.getUniforms(),Mn=Lt.uniforms;if(tt.useProgram(qe.program)&&(oi=!0,Ge=!0,Na=!0),Z.id!==F&&(F=Z.id,Ge=!0),oi||E!==w){_e.setValue(A,"projectionMatrix",w.projectionMatrix),_e.setValue(A,"viewMatrix",w.matrixWorldInverse);const $e=_e.map.cameraPosition;$e!==void 0&&$e.setValue(A,st.setFromMatrixPosition(w.matrixWorld)),ut.logarithmicDepthBuffer&&_e.setValue(A,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&_e.setValue(A,"isOrthographic",w.isOrthographicCamera===!0),E!==w&&(E=w,Ge=!0,Na=!0)}if(W.isSkinnedMesh){_e.setOptional(A,W,"bindMatrix"),_e.setOptional(A,W,"bindMatrixInverse");const $e=W.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),_e.setValue(A,"boneTexture",$e.boneTexture,mt))}W.isBatchedMesh&&(_e.setOptional(A,W,"batchingTexture"),_e.setValue(A,"batchingTexture",W._matricesTexture,mt),_e.setOptional(A,W,"batchingIdTexture"),_e.setValue(A,"batchingIdTexture",W._indirectTexture,mt),_e.setOptional(A,W,"batchingColorTexture"),W._colorsTexture!==null&&_e.setValue(A,"batchingColorTexture",W._colorsTexture,mt));const Oa=q.morphAttributes;if((Oa.position!==void 0||Oa.normal!==void 0||Oa.color!==void 0)&&qt.update(W,q,qe),(Ge||Lt.receiveShadow!==W.receiveShadow)&&(Lt.receiveShadow=W.receiveShadow,_e.setValue(A,"receiveShadow",W.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Mn.envMap.value=Pt,Mn.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&V.environment!==null&&(Mn.envMapIntensity.value=V.environmentIntensity),Ge&&(_e.setValue(A,"toneMappingExposure",v.toneMappingExposure),Lt.needsLights&&eh(Mn,Na),vt&&Z.fog===!0&&Nt.refreshFogUniforms(Mn,vt),Nt.refreshMaterialUniforms(Mn,Z,z,O,m.state.transmissionRenderTarget[w.id]),ga.upload(A,Lo(Lt),Mn,mt)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(ga.upload(A,Lo(Lt),Mn,mt),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&_e.setValue(A,"center",W.center),_e.setValue(A,"modelViewMatrix",W.modelViewMatrix),_e.setValue(A,"normalMatrix",W.normalMatrix),_e.setValue(A,"modelMatrix",W.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const $e=Z.uniformsGroups;for(let Fa=0,ih=$e.length;Fa<ih;Fa++){const No=$e[Fa];de.update(No,qe),de.bind(No,qe)}}return qe}function eh(w,V){w.ambientLightColor.needsUpdate=V,w.lightProbe.needsUpdate=V,w.directionalLights.needsUpdate=V,w.directionalLightShadows.needsUpdate=V,w.pointLights.needsUpdate=V,w.pointLightShadows.needsUpdate=V,w.spotLights.needsUpdate=V,w.spotLightShadows.needsUpdate=V,w.rectAreaLights.needsUpdate=V,w.hemisphereLights.needsUpdate=V}function nh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,V,q){at.get(w.texture).__webglTexture=V,at.get(w.depthTexture).__webglTexture=q;const Z=at.get(w);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=q===void 0,Z.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,V){const q=at.get(w);q.__webglFramebuffer=V,q.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(w,V=0,q=0){P=w,D=V,R=q;let Z=!0,W=null,vt=!1,Mt=!1;if(w){const Pt=at.get(w);if(Pt.__useDefaultFramebuffer!==void 0)tt.bindFramebuffer(A.FRAMEBUFFER,null),Z=!1;else if(Pt.__webglFramebuffer===void 0)mt.setupRenderTarget(w);else if(Pt.__hasExternalTextures)mt.rebindTextures(w,at.get(w.texture).__webglTexture,at.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const It=w.depthTexture;if(Pt.__boundDepthTexture!==It){if(It!==null&&at.has(It)&&(w.width!==It.image.width||w.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");mt.setupDepthRenderbuffer(w)}}const Ut=w.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(Mt=!0);const Bt=at.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Bt[V])?W=Bt[V][q]:W=Bt[V],vt=!0):w.samples>0&&mt.useMultisampledRTT(w)===!1?W=at.get(w).__webglMultisampledFramebuffer:Array.isArray(Bt)?W=Bt[q]:W=Bt,S.copy(w.viewport),I.copy(w.scissor),k=w.scissorTest}else S.copy(X).multiplyScalar(z).floor(),I.copy(Y).multiplyScalar(z).floor(),k=et;if(tt.bindFramebuffer(A.FRAMEBUFFER,W)&&Z&&tt.drawBuffers(w,W),tt.viewport(S),tt.scissor(I),tt.setScissorTest(k),vt){const Pt=at.get(w.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+V,Pt.__webglTexture,q)}else if(Mt){const Pt=at.get(w.texture),Ut=V||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,Pt.__webglTexture,q||0,Ut)}F=-1},this.readRenderTargetPixels=function(w,V,q,Z,W,vt,Mt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=at.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Mt!==void 0&&(Ct=Ct[Mt]),Ct){tt.bindFramebuffer(A.FRAMEBUFFER,Ct);try{const Pt=w.texture,Ut=Pt.format,Bt=Pt.type;if(!ut.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=w.width-Z&&q>=0&&q<=w.height-W&&A.readPixels(V,q,Z,W,kt.convert(Ut),kt.convert(Bt),vt)}finally{const Pt=P!==null?at.get(P).__webglFramebuffer:null;tt.bindFramebuffer(A.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(w,V,q,Z,W,vt,Mt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=at.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Mt!==void 0&&(Ct=Ct[Mt]),Ct){tt.bindFramebuffer(A.FRAMEBUFFER,Ct);try{const Pt=w.texture,Ut=Pt.format,Bt=Pt.type;if(!ut.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=w.width-Z&&q>=0&&q<=w.height-W){const It=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,It),A.bufferData(A.PIXEL_PACK_BUFFER,vt.byteLength,A.STREAM_READ),A.readPixels(V,q,Z,W,kt.convert(Ut),kt.convert(Bt),0),A.flush();const Jt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);await pd(A,Jt,4);try{A.bindBuffer(A.PIXEL_PACK_BUFFER,It),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,vt)}finally{A.deleteBuffer(It),A.deleteSync(Jt)}return vt}}finally{const Pt=P!==null?at.get(P).__webglFramebuffer:null;tt.bindFramebuffer(A.FRAMEBUFFER,Pt)}}},this.copyFramebufferToTexture=function(w,V=null,q=0){w.isTexture!==!0&&(zi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1]);const Z=Math.pow(2,-q),W=Math.floor(w.image.width*Z),vt=Math.floor(w.image.height*Z),Mt=V!==null?V.x:0,Ct=V!==null?V.y:0;mt.setTexture2D(w,0),A.copyTexSubImage2D(A.TEXTURE_2D,q,0,0,Mt,Ct,W,vt),tt.unbindTexture()},this.copyTextureToTexture=function(w,V,q=null,Z=null,W=0){w.isTexture!==!0&&(zi("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,w=arguments[1],V=arguments[2],W=arguments[3]||0,q=null);let vt,Mt,Ct,Pt,Ut,Bt;q!==null?(vt=q.max.x-q.min.x,Mt=q.max.y-q.min.y,Ct=q.min.x,Pt=q.min.y):(vt=w.image.width,Mt=w.image.height,Ct=0,Pt=0),Z!==null?(Ut=Z.x,Bt=Z.y):(Ut=0,Bt=0);const It=kt.convert(V.format),Jt=kt.convert(V.type);mt.setTexture2D(V,0),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,V.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,V.unpackAlignment);const pe=A.getParameter(A.UNPACK_ROW_LENGTH),fe=A.getParameter(A.UNPACK_IMAGE_HEIGHT),He=A.getParameter(A.UNPACK_SKIP_PIXELS),Qt=A.getParameter(A.UNPACK_SKIP_ROWS),Lt=A.getParameter(A.UNPACK_SKIP_IMAGES),Re=w.isCompressedTexture?w.mipmaps[W]:w.image;A.pixelStorei(A.UNPACK_ROW_LENGTH,Re.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Re.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Ct),A.pixelStorei(A.UNPACK_SKIP_ROWS,Pt),w.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,W,Ut,Bt,vt,Mt,It,Jt,Re.data):w.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,W,Ut,Bt,Re.width,Re.height,It,Re.data):A.texSubImage2D(A.TEXTURE_2D,W,Ut,Bt,vt,Mt,It,Jt,Re),A.pixelStorei(A.UNPACK_ROW_LENGTH,pe),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,fe),A.pixelStorei(A.UNPACK_SKIP_PIXELS,He),A.pixelStorei(A.UNPACK_SKIP_ROWS,Qt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Lt),W===0&&V.generateMipmaps&&A.generateMipmap(A.TEXTURE_2D),tt.unbindTexture()},this.copyTextureToTexture3D=function(w,V,q=null,Z=null,W=0){w.isTexture!==!0&&(zi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Z=arguments[1]||null,w=arguments[2],V=arguments[3],W=arguments[4]||0);let vt,Mt,Ct,Pt,Ut,Bt,It,Jt,pe;const fe=w.isCompressedTexture?w.mipmaps[W]:w.image;q!==null?(vt=q.max.x-q.min.x,Mt=q.max.y-q.min.y,Ct=q.max.z-q.min.z,Pt=q.min.x,Ut=q.min.y,Bt=q.min.z):(vt=fe.width,Mt=fe.height,Ct=fe.depth,Pt=0,Ut=0,Bt=0),Z!==null?(It=Z.x,Jt=Z.y,pe=Z.z):(It=0,Jt=0,pe=0);const He=kt.convert(V.format),Qt=kt.convert(V.type);let Lt;if(V.isData3DTexture)mt.setTexture3D(V,0),Lt=A.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)mt.setTexture2DArray(V,0),Lt=A.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,V.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,V.unpackAlignment);const Re=A.getParameter(A.UNPACK_ROW_LENGTH),te=A.getParameter(A.UNPACK_IMAGE_HEIGHT),qe=A.getParameter(A.UNPACK_SKIP_PIXELS),oi=A.getParameter(A.UNPACK_SKIP_ROWS),Ge=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,fe.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,fe.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Pt),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ut),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Bt),w.isDataTexture||w.isData3DTexture?A.texSubImage3D(Lt,W,It,Jt,pe,vt,Mt,Ct,He,Qt,fe.data):V.isCompressedArrayTexture?A.compressedTexSubImage3D(Lt,W,It,Jt,pe,vt,Mt,Ct,He,fe.data):A.texSubImage3D(Lt,W,It,Jt,pe,vt,Mt,Ct,He,Qt,fe),A.pixelStorei(A.UNPACK_ROW_LENGTH,Re),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,te),A.pixelStorei(A.UNPACK_SKIP_PIXELS,qe),A.pixelStorei(A.UNPACK_SKIP_ROWS,oi),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ge),W===0&&V.generateMipmaps&&A.generateMipmap(Lt),tt.unbindTexture()},this.initRenderTarget=function(w){at.get(w).__webglFramebuffer===void 0&&mt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?mt.setTextureCube(w,0):w.isData3DTexture?mt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?mt.setTexture2DArray(w,0):mt.setTexture2D(w,0),tt.unbindTexture()},this.resetState=function(){D=0,R=0,P=null,tt.reset(),$t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===mo?"display-p3":"srgb",e.unpackColorSpace=ee.workingColorSpace===Ra?"display-p3":"srgb"}}class xo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ot(t),this.density=e}clone(){return new xo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Eg extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class wg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Qr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ln()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return zi("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,a=this.stride;i<a;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ln()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ln()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ne=new T;class ba{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Qe(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Qe(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Qe(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Qe(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Qe(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),i=se(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),i=se(i,this.array),a=se(a,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=a,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[i+a])}return new me(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ba(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[i+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class kl extends Bn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let wi;const Qi=new T,Ai=new T,Ti=new T,Ri=new dt,ts=new dt,Hl=new ie,Qs=new T,es=new T,ta=new T,Pc=new dt,lr=new dt,Ic=new dt;class Ag extends ge{constructor(t=new kl){if(super(),this.isSprite=!0,this.type="Sprite",wi===void 0){wi=new le;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new wg(e,5);wi.setIndex([0,1,2,0,2,3]),wi.setAttribute("position",new ba(n,3,0,!1)),wi.setAttribute("uv",new ba(n,2,3,!1))}this.geometry=wi,this.material=t,this.center=new dt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ai.setFromMatrixScale(this.matrixWorld),Hl.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ti.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ai.multiplyScalar(-Ti.z);const n=this.material.rotation;let i,a;n!==0&&(a=Math.cos(n),i=Math.sin(n));const r=this.center;ea(Qs.set(-.5,-.5,0),Ti,r,Ai,i,a),ea(es.set(.5,-.5,0),Ti,r,Ai,i,a),ea(ta.set(.5,.5,0),Ti,r,Ai,i,a),Pc.set(0,0),lr.set(1,0),Ic.set(1,1);let o=t.ray.intersectTriangle(Qs,es,ta,!1,Qi);if(o===null&&(ea(es.set(-.5,.5,0),Ti,r,Ai,i,a),lr.set(0,1),o=t.ray.intersectTriangle(Qs,ta,es,!1,Qi),o===null))return;const c=t.ray.origin.distanceTo(Qi);c<t.near||c>t.far||e.push({distance:c,point:Qi.clone(),uv:tn.getInterpolation(Qi,Qs,es,ta,Pc,lr,Ic,new dt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ea(s,t,e,n,i,a){Ri.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(ts.x=a*Ri.x-i*Ri.y,ts.y=i*Ri.x+a*Ri.y):ts.copy(Ri),s.copy(t),s.x+=ts.x,s.y+=ts.y,s.applyMatrix4(Hl)}class Tg extends De{constructor(t=null,e=1,n=1,i,a,r,o,c,l=ze,h=ze,d,u){super(null,r,o,c,l,h,i,a,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lc extends me{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ci=new ie,Dc=new ie,na=[],Nc=new ai,Rg=new ie,ns=new $,is=new ri;class Cg extends ${constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Lc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Rg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ai),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ci),Nc.copy(t.boundingBox).applyMatrix4(Ci),this.boundingBox.union(Nc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ri),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ci),is.copy(t.boundingSphere).applyMatrix4(Ci),this.boundingSphere.union(is)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,a=n.length+1,r=t*a+1;for(let o=0;o<n.length;o++)n[o]=i[r+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(ns.geometry=this.geometry,ns.material=this.material,ns.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),is.copy(this.boundingSphere),is.applyMatrix4(n),t.ray.intersectsSphere(is)!==!1))for(let a=0;a<i;a++){this.getMatrixAt(a,Ci),Dc.multiplyMatrices(n,Ci),ns.matrixWorld=Dc,ns.raycast(t,na);for(let r=0,o=na.length;r<o;r++){const c=na[r];c.instanceId=a,c.object=this,e.push(c)}na.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Lc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Tg(new Float32Array(i*this.count),i,this.count,ho,cn));const a=this.morphTexture.source.data.data;let r=0;for(let l=0;l<n.length;l++)r+=n[l];const o=this.geometry.morphTargetsRelative?1:1-r,c=i*t;a[c]=o,a.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Pa extends Bn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ea=new T,wa=new T,Oc=new ie,ss=new Ts,ia=new ri,hr=new T,Fc=new T;class Pg extends ge{constructor(t=new le,e=new Pa){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,a=e.count;i<a;i++)Ea.fromBufferAttribute(e,i-1),wa.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ea.distanceTo(wa);t.setAttribute("lineDistance",new Zt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,a=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ia.copy(n.boundingSphere),ia.applyMatrix4(i),ia.radius+=a,t.ray.intersectsSphere(ia)===!1)return;Oc.copy(i).invert(),ss.copy(t.ray).applyMatrix4(Oc);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const p=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let _=p,m=g-1;_<m;_+=l){const f=h.getX(_),M=h.getX(_+1),v=sa(this,t,ss,c,f,M);v&&e.push(v)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),f=sa(this,t,ss,c,_,m);f&&e.push(f)}}else{const p=Math.max(0,r.start),g=Math.min(u.count,r.start+r.count);for(let _=p,m=g-1;_<m;_+=l){const f=sa(this,t,ss,c,_,_+1);f&&e.push(f)}if(this.isLineLoop){const _=sa(this,t,ss,c,g-1,p);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function sa(s,t,e,n,i,a){const r=s.geometry.attributes.position;if(Ea.fromBufferAttribute(r,i),wa.fromBufferAttribute(r,a),e.distanceSqToSegment(Ea,wa,hr,Fc)>n)return;hr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(hr);if(!(c<t.near||c>t.far))return{distance:c,point:Fc.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,object:s}}const Uc=new T,Bc=new T;class So extends Pg{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,a=e.count;i<a;i+=2)Uc.fromBufferAttribute(e,i),Bc.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Uc.distanceTo(Bc);t.setAttribute("lineDistance",new Zt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $i extends Bn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const zc=new ie,eo=new Ts,aa=new ri,ra=new T;class ys extends ge{constructor(t=new le,e=new $i){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,a=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(i),aa.radius+=a,t.ray.intersectsSphere(aa)===!1)return;zc.copy(i).invert(),eo.copy(t.ray).applyMatrix4(zc);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){const u=Math.max(0,r.start),p=Math.min(l.count,r.start+r.count);for(let g=u,_=p;g<_;g++){const m=l.getX(g);ra.fromBufferAttribute(d,m),kc(ra,m,c,i,t,e,this)}}else{const u=Math.max(0,r.start),p=Math.min(d.count,r.start+r.count);for(let g=u,_=p;g<_;g++)ra.fromBufferAttribute(d,g),kc(ra,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function kc(s,t,e,n,i,a,r){const o=eo.distanceSqToPoint(s);if(o<e){const c=new T;eo.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;a.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,object:r})}}class Hc extends De{constructor(t,e,n,i,a,r,o,c,l){super(t,e,n,i,a,r,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class dn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),a=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),a+=n.distanceTo(i),e.push(a),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const a=n.length;let r;e?r=e:r=t*n[a-1];let o=0,c=a-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-r,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===r)return i/(a-1);const h=n[i],u=n[i+1]-h,p=(r-h)/u;return(i+p)/(a-1)}getTangent(t,e){let i=t-1e-4,a=t+1e-4;i<0&&(i=0),a>1&&(a=1);const r=this.getPoint(i),o=this.getPoint(a),c=e||(r.isVector2?new dt:new T);return c.copy(o).sub(r).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new T,i=[],a=[],r=[],o=new T,c=new ie;for(let p=0;p<=t;p++){const g=p/t;i[p]=this.getTangentAt(g,new T)}a[0]=new T,r[0]=new T;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),a[0].crossVectors(i[0],o),r[0].crossVectors(i[0],a[0]);for(let p=1;p<=t;p++){if(a[p]=a[p-1].clone(),r[p]=r[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(be(i[p-1].dot(i[p]),-1,1));a[p].applyMatrix4(c.makeRotationAxis(o,g))}r[p].crossVectors(i[p],a[p])}if(e===!0){let p=Math.acos(be(a[0].dot(a[t]),-1,1));p/=t,i[0].dot(o.crossVectors(a[0],a[t]))>0&&(p=-p);for(let g=1;g<=t;g++)a[g].applyMatrix4(c.makeRotationAxis(i[g],p*g)),r[g].crossVectors(i[g],a[g])}return{tangents:i,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Mo extends dn{constructor(t=0,e=0,n=1,i=1,a=0,r=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new dt){const n=e,i=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=i;for(;a>i;)a-=i;a<Number.EPSILON&&(r?a=0:a=i),this.aClockwise===!0&&!r&&(a===i?a=-i:a=a-i);const o=this.aStartAngle+t*a;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,p=l-this.aY;c=u*h-p*d+this.aX,l=u*d+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Ig extends Mo{constructor(t,e,n,i,a,r){super(t,e,n,n,i,a,r),this.isArcCurve=!0,this.type="ArcCurve"}}function bo(){let s=0,t=0,e=0,n=0;function i(a,r,o,c){s=a,t=o,e=-3*a+3*r-2*o-c,n=2*a-2*r+o+c}return{initCatmullRom:function(a,r,o,c,l){i(r,o,l*(o-a),l*(c-r))},initNonuniformCatmullRom:function(a,r,o,c,l,h,d){let u=(r-a)/l-(o-a)/(l+h)+(o-r)/h,p=(o-r)/h-(c-r)/(h+d)+(c-o)/d;u*=h,p*=h,i(r,o,u,p)},calc:function(a){const r=a*a,o=r*a;return s+t*a+e*r+n*o}}}const oa=new T,dr=new bo,ur=new bo,pr=new bo;class xn extends dn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new T){const n=e,i=this.points,a=i.length,r=(a-(this.closed?0:1))*t;let o=Math.floor(r),c=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:c===0&&o===a-1&&(o=a-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%a]:(oa.subVectors(i[0],i[1]).add(i[0]),l=oa);const d=i[o%a],u=i[(o+1)%a];if(this.closed||o+2<a?h=i[(o+2)%a]:(oa.subVectors(i[a-1],i[a-2]).add(i[a-1]),h=oa),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),dr.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,g,_,m),ur.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,g,_,m),pr.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(dr.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),ur.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),pr.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(dr.calc(c),ur.calc(c),pr.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new T().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Gc(s,t,e,n,i){const a=(n-t)*.5,r=(i-e)*.5,o=s*s,c=s*o;return(2*e-2*n+a+r)*c+(-3*e+3*n-2*a-r)*o+a*s+e}function Lg(s,t){const e=1-s;return e*e*t}function Dg(s,t){return 2*(1-s)*s*t}function Ng(s,t){return s*s*t}function us(s,t,e,n){return Lg(s,t)+Dg(s,e)+Ng(s,n)}function Og(s,t){const e=1-s;return e*e*e*t}function Fg(s,t){const e=1-s;return 3*e*e*s*t}function Ug(s,t){return 3*(1-s)*s*s*t}function Bg(s,t){return s*s*s*t}function ps(s,t,e,n,i){return Og(s,t)+Fg(s,e)+Ug(s,n)+Bg(s,i)}class Gl extends dn{constructor(t=new dt,e=new dt,n=new dt,i=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new dt){const n=e,i=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(ps(t,i.x,a.x,r.x,o.x),ps(t,i.y,a.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class zg extends dn{constructor(t=new T,e=new T,n=new T,i=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new T){const n=e,i=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(ps(t,i.x,a.x,r.x,o.x),ps(t,i.y,a.y,r.y,o.y),ps(t,i.z,a.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Vl extends dn{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kg extends dn{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wl extends dn{constructor(t=new dt,e=new dt,n=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new dt){const n=e,i=this.v0,a=this.v1,r=this.v2;return n.set(us(t,i.x,a.x,r.x),us(t,i.y,a.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xl extends dn{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){const n=e,i=this.v0,a=this.v1,r=this.v2;return n.set(us(t,i.x,a.x,r.x),us(t,i.y,a.y,r.y),us(t,i.z,a.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $l extends dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){const n=e,i=this.points,a=(i.length-1)*t,r=Math.floor(a),o=a-r,c=i[r===0?r:r-1],l=i[r],h=i[r>i.length-2?i.length-1:r+1],d=i[r>i.length-3?i.length-1:r+2];return n.set(Gc(o,c.x,l.x,h.x,d.x),Gc(o,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new dt().fromArray(i))}return this}}var Aa=Object.freeze({__proto__:null,ArcCurve:Ig,CatmullRomCurve3:xn,CubicBezierCurve:Gl,CubicBezierCurve3:zg,EllipseCurve:Mo,LineCurve:Vl,LineCurve3:kg,QuadraticBezierCurve:Wl,QuadraticBezierCurve3:Xl,SplineCurve:$l});class Hg extends dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Aa[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let a=0;for(;a<i.length;){if(i[a]>=n){const r=i[a]-n,o=this.curves[a],c=o.getLength(),l=c===0?0:1-r/c;return o.getPointAt(l,e)}a++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,a=this.curves;i<a.length;i++){const r=a[i],o=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Aa[i.type]().fromJSON(i))}return this}}class Vc extends Hg{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Vl(this.currentPoint.clone(),new dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const a=new Wl(this.currentPoint.clone(),new dt(t,e),new dt(n,i));return this.curves.push(a),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,a,r){const o=new Gl(this.currentPoint.clone(),new dt(t,e),new dt(n,i),new dt(a,r));return this.curves.push(o),this.currentPoint.set(a,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new $l(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,a,r){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,i,a,r),this}absarc(t,e,n,i,a,r){return this.absellipse(t,e,n,n,i,a,r),this}ellipse(t,e,n,i,a,r,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,a,r,o,c),this}absellipse(t,e,n,i,a,r,o,c){const l=new Mo(t,e,n,i,a,r,o,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class on extends le{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const a=[],r=[],o=[],c=[],l=new T,h=new dt;r.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const p=n+d/e*i;l.x=t*Math.cos(p),l.y=t*Math.sin(p),r.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(r[u]/t+1)/2,h.y=(r[u+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)a.push(d,d+1,0);this.setIndex(a),this.setAttribute("position",new Zt(r,3)),this.setAttribute("normal",new Zt(o,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new on(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Dt extends le{constructor(t=1,e=1,n=1,i=32,a=1,r=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),a=Math.floor(a);const h=[],d=[],u=[],p=[];let g=0;const _=[],m=n/2;let f=0;M(),r===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Zt(d,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(p,2));function M(){const y=new T,D=new T;let R=0;const P=(e-t)/n;for(let F=0;F<=a;F++){const E=[],S=F/a,I=S*(e-t)+t;for(let k=0;k<=i;k++){const C=k/i,b=C*c+o,U=Math.sin(b),O=Math.cos(b);D.x=I*U,D.y=-S*n+m,D.z=I*O,d.push(D.x,D.y,D.z),y.set(U,P,O).normalize(),u.push(y.x,y.y,y.z),p.push(C,1-S),E.push(g++)}_.push(E)}for(let F=0;F<i;F++)for(let E=0;E<a;E++){const S=_[E][F],I=_[E+1][F],k=_[E+1][F+1],C=_[E][F+1];h.push(S,I,C),h.push(I,k,C),R+=6}l.addGroup(f,R,0),f+=R}function v(y){const D=g,R=new dt,P=new T;let F=0;const E=y===!0?t:e,S=y===!0?1:-1;for(let k=1;k<=i;k++)d.push(0,m*S,0),u.push(0,S,0),p.push(.5,.5),g++;const I=g;for(let k=0;k<=i;k++){const b=k/i*c+o,U=Math.cos(b),O=Math.sin(b);P.x=E*O,P.y=m*S,P.z=E*U,d.push(P.x,P.y,P.z),u.push(0,S,0),R.x=U*.5+.5,R.y=O*.5*S+.5,p.push(R.x,R.y),g++}for(let k=0;k<i;k++){const C=D+k,b=I+k;y===!0?h.push(b,b+1,C):h.push(b+1,b,C),F+=3}l.addGroup(f,F,y===!0?1:2),f+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class fs extends Dt{constructor(t=1,e=1,n=32,i=1,a=!1,r=0,o=Math.PI*2){super(0,t,e,n,i,a,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(t){return new fs(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Rs extends le{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const a=[],r=[];o(i),l(n),h(),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(a.slice(),3)),this.setAttribute("uv",new Zt(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const v=new T,y=new T,D=new T;for(let R=0;R<e.length;R+=3)p(e[R+0],v),p(e[R+1],y),p(e[R+2],D),c(v,y,D,M)}function c(M,v,y,D){const R=D+1,P=[];for(let F=0;F<=R;F++){P[F]=[];const E=M.clone().lerp(y,F/R),S=v.clone().lerp(y,F/R),I=R-F;for(let k=0;k<=I;k++)k===0&&F===R?P[F][k]=E:P[F][k]=E.clone().lerp(S,k/I)}for(let F=0;F<R;F++)for(let E=0;E<2*(R-F)-1;E++){const S=Math.floor(E/2);E%2===0?(u(P[F][S+1]),u(P[F+1][S]),u(P[F][S])):(u(P[F][S+1]),u(P[F+1][S+1]),u(P[F+1][S]))}}function l(M){const v=new T;for(let y=0;y<a.length;y+=3)v.x=a[y+0],v.y=a[y+1],v.z=a[y+2],v.normalize().multiplyScalar(M),a[y+0]=v.x,a[y+1]=v.y,a[y+2]=v.z}function h(){const M=new T;for(let v=0;v<a.length;v+=3){M.x=a[v+0],M.y=a[v+1],M.z=a[v+2];const y=m(M)/2/Math.PI+.5,D=f(M)/Math.PI+.5;r.push(y,1-D)}g(),d()}function d(){for(let M=0;M<r.length;M+=6){const v=r[M+0],y=r[M+2],D=r[M+4],R=Math.max(v,y,D),P=Math.min(v,y,D);R>.9&&P<.1&&(v<.2&&(r[M+0]+=1),y<.2&&(r[M+2]+=1),D<.2&&(r[M+4]+=1))}}function u(M){a.push(M.x,M.y,M.z)}function p(M,v){const y=M*3;v.x=t[y+0],v.y=t[y+1],v.z=t[y+2]}function g(){const M=new T,v=new T,y=new T,D=new T,R=new dt,P=new dt,F=new dt;for(let E=0,S=0;E<a.length;E+=9,S+=6){M.set(a[E+0],a[E+1],a[E+2]),v.set(a[E+3],a[E+4],a[E+5]),y.set(a[E+6],a[E+7],a[E+8]),R.set(r[S+0],r[S+1]),P.set(r[S+2],r[S+3]),F.set(r[S+4],r[S+5]),D.copy(M).add(v).add(y).divideScalar(3);const I=m(D);_(R,S+0,M,I),_(P,S+2,v,I),_(F,S+4,y,I)}}function _(M,v,y,D){D<0&&M.x===1&&(r[v]=M.x-1),y.x===0&&y.z===0&&(r[v]=D/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rs(t.vertices,t.indices,t.radius,t.details)}}class xs extends Rs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new xs(t.radius,t.detail)}}class Yl extends Vc{constructor(t){super(t),this.uuid=ln(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Vc().fromJSON(i))}return this}}const Gg={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let a=ql(s,0,i,e,!0);const r=[];if(!a||a.next===a.prev)return r;let o,c,l,h,d,u,p;if(n&&(a=Yg(s,t,a,e)),s.length>80*e){o=l=s[0],c=h=s[1];for(let g=e;g<i;g+=e)d=s[g],u=s[g+1],d<o&&(o=d),u<c&&(c=u),d>l&&(l=d),u>h&&(h=u);p=Math.max(l-o,h-c),p=p!==0?32767/p:0}return Ss(a,r,e,o,c,p,0),r}};function ql(s,t,e,n,i){let a,r;if(i===sv(s,t,e,n)>0)for(a=t;a<e;a+=n)r=Wc(a,s[a],s[a+1],r);else for(a=e-n;a>=t;a-=n)r=Wc(a,s[a],s[a+1],r);return r&&Ia(r,r.next)&&(bs(r),r=r.next),r}function ni(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Ia(e,e.next)||ue(e.prev,e,e.next)===0)){if(bs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ss(s,t,e,n,i,a,r){if(!s)return;!r&&a&&Jg(s,n,i,a);let o=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,a?Wg(s,n,i,a):Vg(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),bs(s),s=l.next,o=l.next;continue}if(s=l,s===o){r?r===1?(s=Xg(ni(s),t,e),Ss(s,t,e,n,i,a,2)):r===2&&$g(s,t,e,n,i,a):Ss(ni(s),t,e,n,i,a,1);break}}}function Vg(s){const t=s.prev,e=s,n=s.next;if(ue(t,e,n)>=0)return!1;const i=t.x,a=e.x,r=n.x,o=t.y,c=e.y,l=n.y,h=i<a?i<r?i:r:a<r?a:r,d=o<c?o<l?o:l:c<l?c:l,u=i>a?i>r?i:r:a>r?a:r,p=o>c?o>l?o:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=p&&Ni(i,o,a,c,r,l,g.x,g.y)&&ue(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Wg(s,t,e,n){const i=s.prev,a=s,r=s.next;if(ue(i,a,r)>=0)return!1;const o=i.x,c=a.x,l=r.x,h=i.y,d=a.y,u=r.y,p=o<c?o<l?o:l:c<l?c:l,g=h<d?h<u?h:u:d<u?d:u,_=o>c?o>l?o:l:c>l?c:l,m=h>d?h>u?h:u:d>u?d:u,f=no(p,g,t,e,n),M=no(_,m,t,e,n);let v=s.prevZ,y=s.nextZ;for(;v&&v.z>=f&&y&&y.z<=M;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==r&&Ni(o,h,c,d,l,u,v.x,v.y)&&ue(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==i&&y!==r&&Ni(o,h,c,d,l,u,y.x,y.y)&&ue(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=f;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==r&&Ni(o,h,c,d,l,u,v.x,v.y)&&ue(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=M;){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==i&&y!==r&&Ni(o,h,c,d,l,u,y.x,y.y)&&ue(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Xg(s,t,e){let n=s;do{const i=n.prev,a=n.next.next;!Ia(i,a)&&jl(i,n,n.next,a)&&Ms(i,a)&&Ms(a,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(a.i/e|0),bs(n),bs(n.next),n=s=a),n=n.next}while(n!==s);return ni(n)}function $g(s,t,e,n,i,a){let r=s;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&ev(r,o)){let c=Zl(r,o);r=ni(r,r.next),c=ni(c,c.next),Ss(r,t,e,n,i,a,0),Ss(c,t,e,n,i,a,0);return}o=o.next}r=r.next}while(r!==s)}function Yg(s,t,e,n){const i=[];let a,r,o,c,l;for(a=0,r=t.length;a<r;a++)o=t[a]*n,c=a<r-1?t[a+1]*n:s.length,l=ql(s,o,c,n,!1),l===l.next&&(l.steiner=!0),i.push(tv(l));for(i.sort(qg),a=0;a<i.length;a++)e=jg(i[a],e);return e}function qg(s,t){return s.x-t.x}function jg(s,t){const e=Zg(s,t);if(!e)return t;const n=Zl(e,s);return ni(n,n.next),ni(e,e.next)}function Zg(s,t){let e=t,n=-1/0,i;const a=s.x,r=s.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const u=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=a&&u>n&&(n=u,i=e.x<e.next.x?e:e.next,u===a))return i}e=e.next}while(e!==t);if(!i)return null;const o=i,c=i.x,l=i.y;let h=1/0,d;e=i;do a>=e.x&&e.x>=c&&a!==e.x&&Ni(r<l?a:n,r,c,l,r<l?n:a,r,e.x,e.y)&&(d=Math.abs(r-e.y)/(a-e.x),Ms(e,s)&&(d<h||d===h&&(e.x>i.x||e.x===i.x&&Kg(i,e)))&&(i=e,h=d)),e=e.next;while(e!==o);return i}function Kg(s,t){return ue(s.prev,s,t.prev)<0&&ue(t.next,s,s.next)<0}function Jg(s,t,e,n){let i=s;do i.z===0&&(i.z=no(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Qg(i)}function Qg(s){let t,e,n,i,a,r,o,c,l=1;do{for(e=s,s=null,a=null,r=0;e;){for(r++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,c--),a?a.nextZ=i:s=i,i.prevZ=a,a=i;e=n}a.nextZ=null,l*=2}while(r>1);return s}function no(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function tv(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Ni(s,t,e,n,i,a,r,o){return(i-r)*(t-o)>=(s-r)*(a-o)&&(s-r)*(n-o)>=(e-r)*(t-o)&&(e-r)*(a-o)>=(i-r)*(n-o)}function ev(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!nv(s,t)&&(Ms(s,t)&&Ms(t,s)&&iv(s,t)&&(ue(s.prev,s,t.prev)||ue(s,t.prev,t))||Ia(s,t)&&ue(s.prev,s,s.next)>0&&ue(t.prev,t,t.next)>0)}function ue(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Ia(s,t){return s.x===t.x&&s.y===t.y}function jl(s,t,e,n){const i=la(ue(s,t,e)),a=la(ue(s,t,n)),r=la(ue(e,n,s)),o=la(ue(e,n,t));return!!(i!==a&&r!==o||i===0&&ca(s,e,t)||a===0&&ca(s,n,t)||r===0&&ca(e,s,n)||o===0&&ca(e,t,n))}function ca(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function la(s){return s>0?1:s<0?-1:0}function nv(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&jl(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Ms(s,t){return ue(s.prev,s,s.next)<0?ue(s,t,s.next)>=0&&ue(s,s.prev,t)>=0:ue(s,t,s.prev)<0||ue(s,s.next,t)<0}function iv(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,a=(s.y+t.y)/2;do e.y>a!=e.next.y>a&&e.next.y!==e.y&&i<(e.next.x-e.x)*(a-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Zl(s,t){const e=new io(s.i,s.x,s.y),n=new io(t.i,t.x,t.y),i=s.next,a=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,a.next=n,n.prev=a,n}function Wc(s,t,e,n){const i=new io(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function bs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function io(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function sv(s,t,e,n){let i=0;for(let a=t,r=e-n;a<e;a+=n)i+=(s[r]-s[a])*(s[a+1]+s[r+1]),r=a;return i}class ms{static area(t){const e=t.length;let n=0;for(let i=e-1,a=0;a<e;i=a++)n+=t[i].x*t[a].y-t[a].x*t[i].y;return n*.5}static isClockWise(t){return ms.area(t)<0}static triangulateShape(t,e){const n=[],i=[],a=[];Xc(t),$c(n,t);let r=t.length;e.forEach(Xc);for(let c=0;c<e.length;c++)i.push(r),r+=e[c].length,$c(n,e[c]);const o=Gg.triangulate(n,i);for(let c=0;c<o.length;c+=3)a.push(o.slice(c,c+3));return a}}function Xc(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function $c(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Eo extends le{constructor(t=new Yl([new dt(.5,.5),new dt(-.5,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],a=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];r(l)}this.setAttribute("position",new Zt(i,3)),this.setAttribute("uv",new Zt(a,2)),this.computeVertexNormals();function r(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:av;let v,y=!1,D,R,P,F;f&&(v=f.getSpacedPoints(h),y=!0,u=!1,D=f.computeFrenetFrames(h,!1),R=new T,P=new T,F=new T),u||(m=0,p=0,g=0,_=0);const E=o.extractPoints(l);let S=E.shape;const I=E.holes;if(!ms.isClockWise(S)){S=S.reverse();for(let A=0,J=I.length;A<J;A++){const nt=I[A];ms.isClockWise(nt)&&(I[A]=nt.reverse())}}const C=ms.triangulateShape(S,I),b=S;for(let A=0,J=I.length;A<J;A++){const nt=I[A];S=S.concat(nt)}function U(A,J,nt){return J||console.error("THREE.ExtrudeGeometry: vec does not exist"),A.clone().addScaledVector(J,nt)}const O=S.length,z=C.length;function N(A,J,nt){let ut,tt,St;const at=A.x-J.x,mt=A.y-J.y,L=nt.x-A.x,x=nt.y-A.y,j=at*at+mt*mt,ct=at*x-mt*L;if(Math.abs(ct)>Number.EPSILON){const ot=Math.sqrt(j),ht=Math.sqrt(L*L+x*x),Nt=J.x-mt/ot,yt=J.y+at/ot,wt=nt.x-x/ht,Gt=nt.y+L/ht,ft=((wt-Nt)*x-(Gt-yt)*L)/(at*x-mt*L);ut=Nt+at*ft-A.x,tt=yt+mt*ft-A.y;const bt=ut*ut+tt*tt;if(bt<=2)return new dt(ut,tt);St=Math.sqrt(bt/2)}else{let ot=!1;at>Number.EPSILON?L>Number.EPSILON&&(ot=!0):at<-Number.EPSILON?L<-Number.EPSILON&&(ot=!0):Math.sign(mt)===Math.sign(x)&&(ot=!0),ot?(ut=-mt,tt=at,St=Math.sqrt(j)):(ut=at,tt=mt,St=Math.sqrt(j/2))}return new dt(ut/St,tt/St)}const H=[];for(let A=0,J=b.length,nt=J-1,ut=A+1;A<J;A++,nt++,ut++)nt===J&&(nt=0),ut===J&&(ut=0),H[A]=N(b[A],b[nt],b[ut]);const X=[];let Y,et=H.concat();for(let A=0,J=I.length;A<J;A++){const nt=I[A];Y=[];for(let ut=0,tt=nt.length,St=tt-1,at=ut+1;ut<tt;ut++,St++,at++)St===tt&&(St=0),at===tt&&(at=0),Y[ut]=N(nt[ut],nt[St],nt[at]);X.push(Y),et=et.concat(Y)}for(let A=0;A<m;A++){const J=A/m,nt=p*Math.cos(J*Math.PI/2),ut=g*Math.sin(J*Math.PI/2)+_;for(let tt=0,St=b.length;tt<St;tt++){const at=U(b[tt],H[tt],ut);st(at.x,at.y,-nt)}for(let tt=0,St=I.length;tt<St;tt++){const at=I[tt];Y=X[tt];for(let mt=0,L=at.length;mt<L;mt++){const x=U(at[mt],Y[mt],ut);st(x.x,x.y,-nt)}}}const Q=g+_;for(let A=0;A<O;A++){const J=u?U(S[A],et[A],Q):S[A];y?(P.copy(D.normals[0]).multiplyScalar(J.x),R.copy(D.binormals[0]).multiplyScalar(J.y),F.copy(v[0]).add(P).add(R),st(F.x,F.y,F.z)):st(J.x,J.y,0)}for(let A=1;A<=h;A++)for(let J=0;J<O;J++){const nt=u?U(S[J],et[J],Q):S[J];y?(P.copy(D.normals[A]).multiplyScalar(nt.x),R.copy(D.binormals[A]).multiplyScalar(nt.y),F.copy(v[A]).add(P).add(R),st(F.x,F.y,F.z)):st(nt.x,nt.y,d/h*A)}for(let A=m-1;A>=0;A--){const J=A/m,nt=p*Math.cos(J*Math.PI/2),ut=g*Math.sin(J*Math.PI/2)+_;for(let tt=0,St=b.length;tt<St;tt++){const at=U(b[tt],H[tt],ut);st(at.x,at.y,d+nt)}for(let tt=0,St=I.length;tt<St;tt++){const at=I[tt];Y=X[tt];for(let mt=0,L=at.length;mt<L;mt++){const x=U(at[mt],Y[mt],ut);y?st(x.x,x.y+v[h-1].y,v[h-1].x+nt):st(x.x,x.y,d+nt)}}}B(),K();function B(){const A=i.length/3;if(u){let J=0,nt=O*J;for(let ut=0;ut<z;ut++){const tt=C[ut];At(tt[2]+nt,tt[1]+nt,tt[0]+nt)}J=h+m*2,nt=O*J;for(let ut=0;ut<z;ut++){const tt=C[ut];At(tt[0]+nt,tt[1]+nt,tt[2]+nt)}}else{for(let J=0;J<z;J++){const nt=C[J];At(nt[2],nt[1],nt[0])}for(let J=0;J<z;J++){const nt=C[J];At(nt[0]+O*h,nt[1]+O*h,nt[2]+O*h)}}n.addGroup(A,i.length/3-A,0)}function K(){const A=i.length/3;let J=0;it(b,J),J+=b.length;for(let nt=0,ut=I.length;nt<ut;nt++){const tt=I[nt];it(tt,J),J+=tt.length}n.addGroup(A,i.length/3-A,1)}function it(A,J){let nt=A.length;for(;--nt>=0;){const ut=nt;let tt=nt-1;tt<0&&(tt=A.length-1);for(let St=0,at=h+m*2;St<at;St++){const mt=O*St,L=O*(St+1),x=J+ut+mt,j=J+tt+mt,ct=J+tt+L,ot=J+ut+L;Tt(x,j,ct,ot)}}}function st(A,J,nt){c.push(A),c.push(J),c.push(nt)}function At(A,J,nt){Et(A),Et(J),Et(nt);const ut=i.length/3,tt=M.generateTopUV(n,i,ut-3,ut-2,ut-1);Ht(tt[0]),Ht(tt[1]),Ht(tt[2])}function Tt(A,J,nt,ut){Et(A),Et(J),Et(ut),Et(J),Et(nt),Et(ut);const tt=i.length/3,St=M.generateSideWallUV(n,i,tt-6,tt-3,tt-2,tt-1);Ht(St[0]),Ht(St[1]),Ht(St[3]),Ht(St[1]),Ht(St[2]),Ht(St[3])}function Et(A){i.push(c[A*3+0]),i.push(c[A*3+1]),i.push(c[A*3+2])}function Ht(A){a.push(A.x),a.push(A.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return rv(e,n,t)}static fromJSON(t,e){const n=[];for(let a=0,r=t.shapes.length;a<r;a++){const o=e[t.shapes[a]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Aa[i.type]().fromJSON(i)),new Eo(n,t.options)}}const av={generateTopUV:function(s,t,e,n,i){const a=t[e*3],r=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new dt(a,r),new dt(o,c),new dt(l,h)]},generateSideWallUV:function(s,t,e,n,i,a){const r=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[i*3],p=t[i*3+1],g=t[i*3+2],_=t[a*3],m=t[a*3+1],f=t[a*3+2];return Math.abs(o-h)<Math.abs(r-l)?[new dt(r,1-c),new dt(l,1-d),new dt(u,1-g),new dt(_,1-f)]:[new dt(o,1-c),new dt(h,1-d),new dt(p,1-g),new dt(m,1-f)]}};function rv(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const a=s[n];e.shapes.push(a.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class gs extends Rs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,a,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new gs(t.radius,t.detail)}}class wo extends Rs{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new wo(t.radius,t.detail)}}class ii extends le{constructor(t=.5,e=1,n=32,i=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:a,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],h=[];let d=t;const u=(e-t)/i,p=new T,g=new dt;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const f=a+m/n*r;p.x=d*Math.cos(f),p.y=d*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let _=0;_<i;_++){const m=_*(n+1);for(let f=0;f<n;f++){const M=f+m,v=M,y=M+n+1,D=M+n+2,R=M+1;o.push(v,y,R),o.push(y,D,R)}}this.setIndex(o),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(l,3)),this.setAttribute("uv",new Zt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ii(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class xe extends le{constructor(t=1,e=32,n=16,i=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:a,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(r+o,Math.PI);let l=0;const h=[],d=new T,u=new T,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const M=[],v=f/n;let y=0;f===0&&r===0?y=.5/e:f===n&&c===Math.PI&&(y=-.5/e);for(let D=0;D<=e;D++){const R=D/e;d.x=-t*Math.cos(i+R*a)*Math.sin(r+v*o),d.y=t*Math.cos(r+v*o),d.z=t*Math.sin(i+R*a)*Math.sin(r+v*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(R+y,1-v),M.push(l++)}h.push(M)}for(let f=0;f<n;f++)for(let M=0;M<e;M++){const v=h[f][M+1],y=h[f][M],D=h[f+1][M],R=h[f+1][M+1];(f!==0||r>0)&&p.push(v,y,R),(f!==n-1||c<Math.PI)&&p.push(y,D,R)}this.setIndex(p),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(_,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Be extends le{constructor(t=1,e=.4,n=12,i=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:a},n=Math.floor(n),i=Math.floor(i);const r=[],o=[],c=[],l=[],h=new T,d=new T,u=new T;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const _=g/i*a,m=p/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(_),d.y=(t+e*Math.cos(m))*Math.sin(_),d.z=e*Math.sin(m),o.push(d.x,d.y,d.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(g/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const _=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,M=(i+1)*p+g;r.push(_,m,M),r.push(m,f,M)}this.setIndex(r),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(c,3)),this.setAttribute("uv",new Zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Be(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Es extends le{constructor(t=new Xl(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),e=64,n=1,i=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:a};const r=t.computeFrenetFrames(e,a);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const o=new T,c=new T,l=new dt;let h=new T;const d=[],u=[],p=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Zt(d,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(p,2));function _(){for(let v=0;v<e;v++)m(v);m(a===!1?e:0),M(),f()}function m(v){h=t.getPointAt(v/e,h);const y=r.normals[v],D=r.binormals[v];for(let R=0;R<=i;R++){const P=R/i*Math.PI*2,F=Math.sin(P),E=-Math.cos(P);c.x=E*y.x+F*D.x,c.y=E*y.y+F*D.y,c.z=E*y.z+F*D.z,c.normalize(),u.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,d.push(o.x,o.y,o.z)}}function f(){for(let v=1;v<=e;v++)for(let y=1;y<=i;y++){const D=(i+1)*(v-1)+(y-1),R=(i+1)*v+(y-1),P=(i+1)*v+y,F=(i+1)*(v-1)+y;g.push(D,R,F),g.push(R,P,F)}}function M(){for(let v=0;v<=e;v++)for(let y=0;y<=i;y++)l.x=v/e,l.y=y/i,p.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Es(new Aa[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Kl extends le{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,i=new T,a=new T;if(t.index!==null){const r=t.attributes.position,o=t.index;let c=t.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){const d=c[l],u=d.start,p=d.count;for(let g=u,_=u+p;g<_;g+=3)for(let m=0;m<3;m++){const f=o.getX(g+m),M=o.getX(g+(m+1)%3);i.fromBufferAttribute(r,f),a.fromBufferAttribute(r,M),Yc(i,a,n)===!0&&(e.push(i.x,i.y,i.z),e.push(a.x,a.y,a.z))}}}else{const r=t.attributes.position;for(let o=0,c=r.count/3;o<c;o++)for(let l=0;l<3;l++){const h=3*o+l,d=3*o+(l+1)%3;i.fromBufferAttribute(r,h),a.fromBufferAttribute(r,d),Yc(i,a,n)===!0&&(e.push(i.x,i.y,i.z),e.push(a.x,a.y,a.z))}}this.setAttribute("position",new Zt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Yc(s,t,e){const n=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}class he extends Bn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sl,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ov extends he{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new dt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return be(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ot(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ot(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ot(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class La extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class cv extends La{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const fr=new ie,qc=new T,jc=new T;class Jl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _o,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;qc.setFromMatrixPosition(t.matrixWorld),e.position.copy(qc),jc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(jc),e.updateMatrixWorld(),fr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Zc=new ie,as=new T,mr=new T;class lv extends Jl{constructor(){super(new Xe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new dt(4,2),this._viewportCount=6,this._viewports=[new ce(2,1,1,1),new ce(0,1,1,1),new ce(3,1,1,1),new ce(1,1,1,1),new ce(3,0,1,1),new ce(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,a=t.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),as.setFromMatrixPosition(t.matrixWorld),n.position.copy(as),mr.copy(n.position),mr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(mr),n.updateMatrixWorld(),i.makeTranslation(-as.x,-as.y,-as.z),Zc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zc)}}class rn extends La{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new lv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class hv extends Jl{constructor(){super(new Nl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dv extends La{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new hv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class uv extends La{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class pv{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Kc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Kc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Kc(){return(typeof performance>"u"?Date:performance).now()}const Jc=new ie;class fv{constructor(t,e,n=0,i=1/0){this.ray=new Ts(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new vo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Jc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Jc),this}intersectObject(t,e=!0,n=[]){return so(t,this,n,e),n.sort(Qc),n}intersectObjects(t,e=!0,n=[]){for(let i=0,a=t.length;i<a;i++)so(t[i],this,n,e);return n.sort(Qc),n}}function Qc(s,t){return s.distance-t.distance}function so(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const a=s.children;for(let r=0,o=a.length;r<o;r++)so(a[r],t,e,!0)}}class tl{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(be(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class mv extends si{constructor(t,e){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ro}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ro);function gv(s){const t=new Yt;t.name="skyGroup";const e=3500,n=new le,i=new Float32Array(e*3),a=new Float32Array(e*3),r=new Float32Array(e),o=[new Ot("#ffffff"),new Ot("#9bb0ff"),new Ot("#bbccff"),new Ot("#f8f9fa"),new Ot("#ffddb4"),new Ot("#ffbe69"),new Ot("#d85dff")];for(let J=0;J<e;J++){const nt=600+Math.random()*200,ut=Math.random()*Math.PI*2,tt=Math.acos(Math.random()*.85+.05),St=nt*Math.sin(tt)*Math.cos(ut),at=nt*Math.cos(tt),mt=nt*Math.sin(tt)*Math.sin(ut);i[J*3]=St,i[J*3+1]=at,i[J*3+2]=mt;const L=o[Math.floor(Math.random()*o.length)];a[J*3]=L.r,a[J*3+1]=L.g,a[J*3+2]=L.b,r[J]=Math.random()*2.5+.8}n.setAttribute("position",new me(i,3)),n.setAttribute("color",new me(a,3)),n.setAttribute("size",new me(r,1));const c=document.createElement("canvas");c.width=32,c.height=32;const l=c.getContext("2d"),h=l.createRadialGradient(16,16,0,16,16,16);h.addColorStop(0,"rgba(255,255,255,1)"),h.addColorStop(.3,"rgba(255,255,255,0.8)"),h.addColorStop(.7,"rgba(200,220,255,0.2)"),h.addColorStop(1,"rgba(0,0,0,0)"),l.fillStyle=h,l.fillRect(0,0,32,32);const d=new Hc(c),u=new $i({size:2.2,vertexColors:!0,map:d,transparent:!0,depthWrite:!1,blending:Se}),p=new ys(n,u);t.add(p);const g=1800,_=new le,m=new Float32Array(g*3),f=new Float32Array(g*3),M=[new Ot("#7446F2"),new Ot("#D85DFF"),new Ot("#42E8F5"),new Ot("#4B8DFF"),new Ot("#2A1654")];for(let J=0;J<g;J++){const nt=(Math.random()-.5)*2,ut=nt*(Math.PI*.7),tt=620+(Math.random()-.5)*50,St=(Math.random()-.5)*90*Math.exp(-nt*nt*1.5),at=(Math.random()-.5)*40,mt=new T(tt*Math.cos(ut),250+tt*.45*Math.sin(ut)+at,tt*Math.sin(ut)+St);m[J*3]=mt.x,m[J*3+1]=Math.max(20,mt.y),m[J*3+2]=mt.z;const L=M[Math.floor(Math.random()*M.length)],x=Math.random()*.8+.2;f[J*3]=L.r*x,f[J*3+1]=L.g*x,f[J*3+2]=L.b*x}_.setAttribute("position",new me(m,3)),_.setAttribute("color",new me(f,3));const v=new $i({size:9,vertexColors:!0,map:d,transparent:!0,opacity:.65,depthWrite:!1,blending:Se}),y=new ys(_,v);t.add(y);const D=[],R=new le,P=4,F=new Float32Array(P*6);for(let J=0;J<P;J++)D.push({active:!1,head:new T,tail:new T,velocity:new T,life:0,maxLife:60,timer:Math.random()*200+100});R.setAttribute("position",new me(F,3));const E=new Pa({color:4385013,transparent:!0,opacity:.9,blending:Se,linewidth:2}),S=new So(R,E);t.add(S);const I=new Yt,k=new T(-300,260,-380);I.position.copy(k);const C=new xe(14,24,24),b=new ne({color:16775914}),U=new $(C,b);I.add(U);const O=document.createElement("canvas");O.width=128,O.height=128;const z=O.getContext("2d"),N=z.createRadialGradient(64,64,10,64,64,64);N.addColorStop(0,"rgba(255, 245, 220, 1)"),N.addColorStop(.3,"rgba(255, 180, 100, 0.6)"),N.addColorStop(.6,"rgba(116, 70, 242, 0.2)"),N.addColorStop(1,"rgba(0, 0, 0, 0)"),z.fillStyle=N,z.fillRect(0,0,128,128);const H=new Hc(O),X=new kl({map:H,blending:Se,transparent:!0,opacity:.85}),Y=new Ag(X);Y.scale.set(110,110,1),I.add(Y),t.add(I);const et=new dv(16772304,2.2);et.position.copy(k),et.castShadow=!0,et.shadow.mapSize.width=2048,et.shadow.mapSize.height=2048,et.shadow.camera.near=50,et.shadow.camera.far=900,et.shadow.camera.left=-180,et.shadow.camera.right=180,et.shadow.camera.top=180,et.shadow.camera.bottom=-180,et.shadow.bias=-5e-4,s.add(et);const Q=new cv(7620338,9646104,.7);s.add(Q);const B=new xs(6.5,1),K=B.attributes.position;for(let J=0;J<K.count;J++){const nt=K.getX(J),ut=K.getY(J),tt=K.getZ(J),St=1+(Math.sin(nt*1.5)+Math.cos(ut*1.5))*.12;K.setXYZ(J,nt*St,ut*St,tt*St)}B.computeVertexNormals();const it=new he({color:9076598,roughness:.9,metalness:.1}),st=new $(B,it);st.position.set(220,280,-250),t.add(st);const At=new xs(3.5,1),Tt=new $(At,it);Tt.position.set(-280,210,180),t.add(Tt);const Et=new Yt,Ht=new $(new Wt(4,1.2,12),new he({color:13421772,metalness:.8,roughness:.3}));Et.add(Ht);const A=new rn(4385013,1.5,25);return A.position.set(0,0,-6),Et.add(A),Et.position.set(-350,320,-100),t.add(Et),s.add(t),{group:t,update:(J,nt)=>{y.rotation.y=nt*.003,p.rotation.y=nt*.001,st.position.x=220*Math.cos(nt*.02)-250*Math.sin(nt*.02),st.position.z=220*Math.sin(nt*.02)+250*Math.cos(nt*.02),st.rotation.y+=J*.1,Et.position.x+=J*3.5,Et.position.x>450&&(Et.position.x=-450);const ut=R.attributes.position.array;let tt=!1;for(let St=0;St<P;St++){const at=D[St];if(at.active){if(at.life+=J*60,at.tail.copy(at.head),at.head.add(at.velocity),ut[St*6]=at.tail.x,ut[St*6+1]=at.tail.y,ut[St*6+2]=at.tail.z,ut[St*6+3]=at.head.x,ut[St*6+4]=at.head.y,ut[St*6+5]=at.head.z,tt=!0,at.life>=at.maxLife){at.active=!1,at.timer=Math.random()*300+150;for(let mt=0;mt<6;mt++)ut[St*6+mt]=0}}else if(at.timer-=J*60,at.timer<=0){at.active=!0,at.life=0,at.maxLife=Math.random()*30+25;const mt=Math.random()*Math.PI*2,L=450+Math.random()*100,x=220+Math.random()*120;at.head.set(Math.cos(mt)*L,x,Math.sin(mt)*L),at.tail.copy(at.head),at.velocity.set((Math.random()-.5)*180,-(Math.random()*120+60),(Math.random()-.5)*180).multiplyScalar(J*2.5)}}tt&&(R.attributes.position.needsUpdate=!0)}}}const Le={node_central:{id:"node_central",name:"Central Plaza Junction",x:0,y:.2,z:0,facilityId:"command-tower"},node_central_north:{id:"node_central_north",name:"North Boulevard Junction",x:0,y:.2,z:-35},node_central_south:{id:"node_central_south",name:"Agora South Crossing",x:-10,y:.2,z:25,facilityId:"community-centre"},node_central_east:{id:"node_central_east",name:"East Energy Way",x:35,y:.2,z:0},node_central_west:{id:"node_central_west",name:"West Habitat Concourse",x:-35,y:.2,z:-15},node_west_1:{id:"node_west_1",name:"MarsCare Emergency Ramp",x:-70,y:.2,z:40,facilityId:"marscare-hospital"},node_west_2:{id:"node_west_2",name:"Oxygen Beta Cryo Junction",x:-90,y:.2,z:-35,facilityId:"oxygen-hub-beta"},node_west_3:{id:"node_west_3",name:"SafeHaven Blast Tunnel Entrance",x:-100,y:.2,z:15,facilityId:"safehaven-shelter"},node_west_junction:{id:"node_west_junction",name:"West Ring Junction",x:-65,y:.2,z:5},node_northwest_1:{id:"node_northwest_1",name:"Horizon Youth Promenade",x:-45,y:.2,z:-80,facilityId:"horizon-school"},node_northwest_2:{id:"node_northwest_2",name:"Olympus Hab Link",x:-25,y:.2,z:-60,facilityId:"residential-habitat-beta"},node_northwest_junction:{id:"node_northwest_junction",name:"Northwest Ringway",x:-55,y:.2,z:-45},node_north_1:{id:"node_north_1",name:"AquaCycle Aqueduct Access",x:30,y:.2,z:-90,facilityId:"aquacycle-water"},node_north_junction:{id:"node_north_junction",name:"North Ring Spine",x:10,y:.2,z:-70},node_east_1:{id:"node_east_1",name:"Helios Reactor High-Tension Ring",x:110,y:.2,z:-25,facilityId:"helios-power"},node_east_2:{id:"node_east_2",name:"Nova University Campus Gate",x:65,y:.2,z:-50,facilityId:"nova-university"},node_east_3:{id:"node_east_3",name:"Kepler Labs Sensor Ridge",x:90,y:.2,z:-75,facilityId:"research-laboratory"},node_east_junction:{id:"node_east_junction",name:"East Industrial Junction",x:65,y:.2,z:-15},node_south_1:{id:"node_south_1",name:"Eden Biosphere Cargo Bay",x:45,y:.2,z:75,facilityId:"eden-greenhouse"},node_south_2:{id:"node_south_2",name:"Gateway Spaceport Terminal Bay",x:20,y:.2,z:120,facilityId:"mars-gateway-spaceport"},node_southeast_1:{id:"node_southeast_1",name:"Oxygen Alpha Trunkline Gate",x:80,y:.2,z:55,facilityId:"oxygen-hub-alpha"},node_southeast_junction:{id:"node_southeast_junction",name:"Southeast Ringway",x:45,y:.2,z:40},node_south_junction:{id:"node_south_junction",name:"Spaceport Approach Avenue",x:15,y:.2,z:65},node_southwest_1:{id:"node_southwest_1",name:"Apex Logistics Freight Bay",x:-60,y:.2,z:95,facilityId:"resource-storage-centre"},node_southwest_junction:{id:"node_southwest_junction",name:"Southwest Freight Corridor",x:-40,y:.2,z:65}},rs={"command-tower":"node_central","marscare-hospital":"node_west_1","nova-university":"node_east_2","horizon-school":"node_northwest_1","oxygen-hub-alpha":"node_southeast_1","oxygen-hub-beta":"node_west_2","residential-habitat-alpha":"node_central_west","residential-habitat-beta":"node_northwest_2","eden-greenhouse":"node_south_1","aquacycle-water":"node_north_1","helios-power":"node_east_1","safehaven-shelter":"node_west_3","mars-gateway-spaceport":"node_south_2","research-laboratory":"node_east_3","community-centre":"node_central_south","resource-storage-centre":"node_southwest_1"},Nn=[{from:"node_central",to:"node_central_north",name:"Central North Way"},{from:"node_central",to:"node_central_south",name:"Agora Avenue"},{from:"node_central",to:"node_central_east",name:"Helios Boulevard"},{from:"node_central",to:"node_central_west",name:"Ares Concourse"},{from:"node_central_north",to:"node_north_junction",name:"Olympus Transit Spine"},{from:"node_north_junction",to:"node_north_1",name:"Aqueduct Approach"},{from:"node_north_junction",to:"node_northwest_2",name:"North Hab Parkway"},{from:"node_north_junction",to:"node_east_2",name:"Nova Campus Link"},{from:"node_central_west",to:"node_northwest_junction",name:"Ares Ringway"},{from:"node_central_west",to:"node_west_junction",name:"West Sector Expressway"},{from:"node_northwest_junction",to:"node_northwest_1",name:"Horizon Youth Promenade"},{from:"node_northwest_junction",to:"node_northwest_2",name:"Olympus Hab Corridor"},{from:"node_northwest_junction",to:"node_west_2",name:"Cryo Pipeline Road"},{from:"node_west_junction",to:"node_west_1",name:"Trauma Bay Access"},{from:"node_west_junction",to:"node_west_2",name:"O2 Beta Service Road"},{from:"node_west_junction",to:"node_west_3",name:"SafeHaven Defense Way"},{from:"node_west_1",to:"node_west_3",name:"Emergency Medevac Tunnel"},{from:"node_west_1",to:"node_southwest_junction",name:"Southwest Freight Spur"},{from:"node_central_east",to:"node_east_junction",name:"Energy Grid Highway"},{from:"node_east_junction",to:"node_east_1",name:"Tokamak Reactor Ring"},{from:"node_east_junction",to:"node_east_2",name:"University South Way"},{from:"node_east_junction",to:"node_southeast_junction",name:"East Outer Bypass"},{from:"node_east_2",to:"node_east_3",name:"Kepler Science Drive"},{from:"node_east_3",to:"node_east_1",name:"Research Power Feed Road"},{from:"node_central_south",to:"node_south_junction",name:"Spaceport Avenue"},{from:"node_central_south",to:"node_southeast_junction",name:"Eden Green Boulevard"},{from:"node_central_south",to:"node_southwest_junction",name:"Logistics Access Way"},{from:"node_south_junction",to:"node_south_1",name:"Biosphere Cargo Lane"},{from:"node_south_junction",to:"node_south_2",name:"Spaceport Launch Highway"},{from:"node_southeast_junction",to:"node_southeast_1",name:"Oxygen Alpha Trunkway"},{from:"node_southeast_junction",to:"node_south_1",name:"Agricultural Perimeter"},{from:"node_south_1",to:"node_south_2",name:"Spaceport Cargo Connector"},{from:"node_southwest_junction",to:"node_southwest_1",name:"Apex Depot Terminal Road"},{from:"node_southwest_junction",to:"node_south_2",name:"Spaceport West Arterial"},{from:"node_southwest_1",to:"node_west_1",name:"Medical Supply Corridor"}],vv=[{id:"dist_command",name:"Central Command Plaza",x:0,z:0,radius:36,color:"rgba(75, 141, 255, 0.12)",border:"rgba(75, 141, 255, 0.4)"},{id:"dist_ares",name:"Ares Habitation District",x:-35,z:-35,radius:42,color:"rgba(255, 190, 105, 0.12)",border:"rgba(255, 190, 105, 0.4)"},{id:"dist_medical",name:"Medical & Trauma Campus",x:-75,z:35,radius:38,color:"rgba(255, 114, 94, 0.12)",border:"rgba(255, 114, 94, 0.4)"},{id:"dist_o2_beta",name:"Cryo Life Support Reserve",x:-95,z:-35,radius:32,color:"rgba(66, 232, 245, 0.12)",border:"rgba(66, 232, 245, 0.4)"},{id:"dist_safehaven",name:"SafeHaven Bunker Perimeter",x:-105,z:15,radius:30,color:"rgba(234, 242, 255, 0.1)",border:"rgba(234, 242, 255, 0.35)"},{id:"dist_horizon",name:"Horizon Youth District",x:-45,z:-80,radius:32,color:"rgba(216, 93, 255, 0.12)",border:"rgba(216, 93, 255, 0.4)"},{id:"dist_water",name:"AquaCycle Hydrology Sector",x:30,z:-90,radius:34,color:"rgba(66, 232, 245, 0.12)",border:"rgba(66, 232, 245, 0.4)"},{id:"dist_nova",name:"Nova Academic Campus",x:75,z:-60,radius:45,color:"rgba(116, 70, 242, 0.14)",border:"rgba(116, 70, 242, 0.4)"},{id:"dist_helios",name:"Helios Fusion & Energy Basin",x:110,z:-25,radius:42,color:"rgba(255, 170, 0, 0.12)",border:"rgba(255, 170, 0, 0.4)"},{id:"dist_o2_alpha",name:"Oxygen Hub Alpha Complex",x:80,z:55,radius:34,color:"rgba(66, 232, 245, 0.12)",border:"rgba(66, 232, 245, 0.4)"},{id:"dist_eden",name:"Eden Agricultural Biosphere",x:45,z:75,radius:38,color:"rgba(51, 255, 136, 0.14)",border:"rgba(51, 255, 136, 0.4)"},{id:"dist_spaceport",name:"Mars Gateway Spaceport",x:25,z:120,radius:44,color:"rgba(116, 70, 242, 0.15)",border:"rgba(216, 93, 255, 0.4)"},{id:"dist_storage",name:"Apex Logistics Freight Yard",x:-60,z:95,radius:32,color:"rgba(255, 190, 105, 0.1)",border:"rgba(255, 190, 105, 0.35)"}];function Ii(s,t){const e=s.x-t.x,n=s.y-t.y,i=s.z-t.z;return Math.sqrt(e*e+n*n+i*i)}function _v(s){const t=new Yt;t.name="terrainGroup";const e=700,n=160,i=new Jn(e,e,n,n);i.rotateX(-Math.PI/2);const a=i.attributes.position,r=new Float32Array(a.count*3),o=[{x:-180,z:-170,r:65,depth:14},{x:190,z:160,r:50,depth:11},{x:-160,z:180,r:42,depth:9},{x:170,z:-190,r:55,depth:12},{x:0,z:-210,r:35,depth:7}];for(let k=0;k<a.count;k++){const C=a.getX(k),b=a.getZ(k),U=Math.sqrt(C*C+b*b);let O=Math.sin(C*.015)*Math.cos(b*.015)*4.5+Math.sin(C*.035+1.2)*Math.cos(b*.032)*2.8+Math.sin(C*.07)*Math.cos(b*.07+.8)*1.2;for(const et of o){const Q=Math.hypot(C-et.x,b-et.z);if(Q<et.r*1.5){const B=Q/et.r;if(B<1)O-=(1-B*B)*et.depth;else if(B<1.35){const K=Math.sin((B-1)/.35*Math.PI);O+=K*(et.depth*.35)}}}const z=125;if(U<z){const et=bl.smoothstep(U,60,z);O=O*et*.35}if(U>200){const et=Math.min(1,(U-200)/120),Q=Math.sin(C*.04)*Math.cos(b*.04)*18+Math.sin(C*.09)*8+Math.cos(b*.08)*6;O+=et*(28+Math.abs(Q))}a.setY(k,O);const N=(O+15)/55,H=.65+Math.sin(C*.02)*.08+N*.15,X=.24+Math.cos(b*.02)*.04+N*.06,Y=.14+N*.04;r[k*3]=Math.min(1,Math.max(.2,H)),r[k*3+1]=Math.min(1,Math.max(.08,X)),r[k*3+2]=Math.min(1,Math.max(.05,Y))}i.setAttribute("color",new me(r,3)),i.computeVertexNormals();const c=new he({vertexColors:!0,roughness:.95,metalness:.05,flatShading:!0}),l=new $(i,c);l.receiveShadow=!0,t.add(l);const h=new xs(1,1),d=new he({color:7220250,roughness:.92,metalness:.08,flatShading:!0}),u=new Cg(h,d,150);u.receiveShadow=!0,u.castShadow=!0;const p=new ge;let g=0;for(let k=0;k<150;k++){const C=Math.random()*Math.PI*2,b=70+Math.random()*220,U=Math.cos(C)*b,O=Math.sin(C)*b;let z=.5;const N=Math.random()*2.8+.8;p.position.set(U,z,O),p.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),p.scale.set(N*(.8+Math.random()*.4),N*(.7+Math.random()*.6),N*(.8+Math.random()*.4)),p.updateMatrix(),u.setMatrixAt(g++,p.matrix)}u.instanceMatrix.needsUpdate=!0,t.add(u);const _=new he({color:1709344,roughness:.7,metalness:.25}),m=new ne({color:4385013,transparent:!0,opacity:.45,blending:Se}),f=new Yt;f.name="colonyRoads";for(const k of Nn){const C=Le[k.from],b=Le[k.to];if(!C||!b)continue;const U=new T(C.x,.12,C.z),O=new T(b.x,.12,b.z),z=U.distanceTo(O),N=new T().addVectors(U,O).multiplyScalar(.5),H=4.2,X=new Jn(H,z);X.rotateX(-Math.PI/2);const Y=new $(X,_);Y.position.copy(N),Y.lookAt(O.x,.12,O.z),Y.receiveShadow=!0,f.add(Y);const et=new Jn(.2,z);et.rotateX(-Math.PI/2);const Q=new $(et,m);Q.position.copy(N),Q.lookAt(O.x,.13,O.z),Q.translateX(-H*.46),f.add(Q);const B=new $(et,m);B.position.copy(N),B.lookAt(O.x,.13,O.z),B.translateX(H*.46),f.add(B)}for(const k in Le){const C=Le[k],b=new Dt(2.6,2.8,.15,16),U=new $(b,_);U.position.set(C.x,.13,C.z),f.add(U);const O=new $(new ii(1.8,2.4,16),m);O.rotation.x=-Math.PI/2,O.position.set(C.x,.16,C.z),f.add(O)}t.add(f);function M(k,C,b,U,O){const z=new Yt;z.position.set(k,.18,C);const N=new Dt(b,b*1.05,.4,8),H=new he({color:2238008,roughness:.6,metalness:.4}),X=new $(N,H);X.receiveShadow=!0,z.add(X);const Y=new ii(b*.65,b*.75,32);Y.rotateX(-Math.PI/2);const et=new ne({color:U,side:Fe}),Q=new $(Y,et);Q.position.y=.22,z.add(Q);for(let B=0;B<8;B++){const K=B/8*Math.PI*2,it=new $(new Dt(.25,.25,.5,8),new ne({color:U}));it.position.set(Math.cos(K)*(b*.92),.35,Math.sin(K)*(b*.92)),z.add(it)}return z}const v=M(20,125,18,4385013);t.add(v);const y=M(45,135,14,16760425);t.add(y);const D=M(-75,45,10,16740958);t.add(D);const R=600,P=new le,F=new Float32Array(R*3),E=[];for(let k=0;k<R;k++)F[k*3]=(Math.random()-.5)*350,F[k*3+1]=Math.random()*60+.5,F[k*3+2]=(Math.random()-.5)*350,E.push({x:(Math.random()-.3)*.8,y:(Math.random()-.5)*.2,z:(Math.random()-.5)*.6});P.setAttribute("position",new me(F,3));const S=new $i({color:16755319,size:1.2,transparent:!0,opacity:.45,blending:Se,depthWrite:!1}),I=new ys(P,S);return t.add(I),s.add(t),{group:t,update:k=>{const C=P.attributes.position.array;for(let b=0;b<R;b++)C[b*3]+=E[b].x*k*15,C[b*3+1]+=E[b].y*k*5,C[b*3+2]+=E[b].z*k*12,C[b*3]>180&&(C[b*3]=-180),C[b*3]<-180&&(C[b*3]=180),C[b*3+1]>60&&(C[b*3+1]=1),C[b*3+1]<.5&&(C[b*3+1]=58),C[b*3+2]>180&&(C[b*3+2]=-180),C[b*3+2]<-180&&(C[b*3+2]=180);P.attributes.position.needsUpdate=!0}}}function yv(s){const t=new Yt;t.name="protectiveDomeGroup";const e=158,n=110,i=new xe(e,64,36,0,Math.PI*2,0,Math.PI*.505),a=new he({color:7071999,transparent:!0,opacity:.14,roughness:.1,metalness:.25,side:Fe,depthWrite:!1}),r=new $(i,a);r.position.y=.5,t.add(r);const o=new Kl(i),c=new Pa({color:4385013,transparent:!0,opacity:.25,blending:Se,depthWrite:!1}),l=new So(o,c);l.position.y=.5,t.add(l);const h=[20,50,80,110,138],d=new he({color:4019317,emissive:1318966,metalness:.85,roughness:.35,transparent:!0,opacity:.85}),u=new ne({color:4385013,transparent:!0,opacity:.65,blending:Se});h.forEach(Q=>{const B=Math.sqrt(Math.max(1,e*e-Q*Q)),K=new $(new Be(B,.35,8,48),d);K.rotation.x=Math.PI/2,K.position.y=Q,t.add(K);const it=new $(new Be(B+.1,.18,4,48),u);it.rotation.x=Math.PI/2,it.position.y=Q,t.add(it)});const p=16;for(let Q=0;Q<p;Q++){const B=Q/p*Math.PI*2,K=[];for(let Tt=0;Tt<=24;Tt++){const Et=Tt/24*(Math.PI*.5),Ht=e+.2,A=Math.sin(Et)*Math.cos(B)*Ht,J=Math.sin(Et)*Math.sin(B)*Ht,nt=Math.cos(Et)*Ht;K.push(new T(A,nt,J))}const it=new xn(K),st=new Es(it,24,.32,6,!1),At=new $(st,d);t.add(At)}const g=new Yt;g.position.set(0,e-2,0);const _=new $(new Dt(8,12,5,16),d);g.add(_);const m=new $(new Dt(.8,2.2,22,8),new he({color:14540780,metalness:.9,roughness:.2}));m.position.y=12,g.add(m);const f=new $(new xe(2,12,12),new ne({color:4385013}));f.position.y=24,g.add(f);const M=new rn(4385013,3,120);M.position.y=25,g.add(M),t.add(g);const v=e+7,y=e-3,D=3.5,R=new ii(y,v,64);R.rotateX(-Math.PI/2);const P=new he({color:1449004,metalness:.85,roughness:.35,side:Fe}),F=new $(R,P);F.position.y=1,F.receiveShadow=!0,t.add(F);const E=new Dt(v,v+2,D,64,1,!0),S=new $(E,P);S.position.y=D/2,t.add(S);const I=new Be(e,.9,8,64);I.rotateX(Math.PI/2);const k=new ne({color:4385013,transparent:!0,opacity:.7,blending:Se}),C=new $(I,k);C.position.y=2.2,t.add(C);const b=new ne({color:7620338,transparent:!0,opacity:.5,blending:Se}),U=new $(I,b);U.position.y=2.7,U.scale.set(1.01,1.01,1.01),t.add(U);for(let Q=0;Q<16;Q++){const B=Q/16*Math.PI*2,K=new $(new Wt(4.5,6,8),d);K.position.set(Math.cos(B)*e,3,Math.sin(B)*e),K.rotation.y=-B,t.add(K);const it=new $(new Wt(1.2,3,.4),u);it.position.set(Math.cos(B)*(e+4.1),3.5,Math.sin(B)*(e+4.1)),it.rotation.y=-B,t.add(it)}const O=250,z=new le,N=new Float32Array(O*3),H=[];for(let Q=0;Q<O;Q++){const B=Math.random()*(e*.85),K=Math.random()*Math.PI*2,it=Math.random()*(Math.PI*.42);N[Q*3]=Math.sin(it)*Math.cos(K)*B,N[Q*3+1]=Math.cos(it)*B*.6+2,N[Q*3+2]=Math.sin(it)*Math.sin(K)*B,H.push({x:(Math.random()-.5)*.3,y:(Math.random()-.5)*.2,z:(Math.random()-.5)*.3})}z.setAttribute("position",new me(N,3));const X=new $i({color:6750156,size:1.6,transparent:!0,opacity:.65,blending:Se,depthWrite:!1}),Y=new ys(z,X);t.add(Y),s.add(t);let et="TRANSPARENT";return{group:t,setMode:Q=>{et=Q,Q==="OPEN"?(r.visible=!1,l.material.opacity=.08):Q==="HOLOGRAPHIC"?(r.visible=!0,a.opacity=.36,a.color.setHex(4385013),l.visible=!0,l.material.opacity=.55):(r.visible=!0,a.opacity=.16,a.color.setHex(7071999),l.visible=!0,l.material.opacity=.22)},getMode:()=>et,update:(Q,B)=>{C.rotation.z=B*.4,U.rotation.z=-B*.3;const K=1+Math.sin(B*3)*.008;C.scale.set(K,K,K),f.scale.setScalar(1+Math.sin(B*5)*.18),M.intensity=2.4+Math.sin(B*4)*.8;const it=z.attributes.position.array;for(let st=0;st<O;st++)it[st*3]+=H[st].x*Q*12,it[st*3+1]+=H[st].y*Q*8,it[st*3+2]+=H[st].z*Q*12,(Math.hypot(it[st*3],it[st*3+2])>e*.85||it[st*3+1]>n||it[st*3+1]<1)&&(it[st*3]=(Math.random()-.5)*80,it[st*3+1]=Math.random()*40+5,it[st*3+2]=(Math.random()-.5)*80);z.attributes.position.needsUpdate=!0}}}const ws=[{id:"command-tower",name:"Central Command Tower",shortName:"Command Tower",category:"command",categoryLabel:"Command & Control",icon:"tower-control",coords:{x:0,y:0,z:0},roadNode:"node_central",elevation:0,status:"OPERATIONAL",health:98,occupancy:"142 / 200 personnel",powerSource:"Helios Grid Main",powerConsumption:"450 kW",oxygenSupply:"Direct Line Alpha",description:"The administrative heart of the Martian colony. Houses colony council, planetary atmospheric monitoring, orbital uplink arrays, and planetary defense management.",services:["Colony Administration & Governance","Orbital Communication Uplink","Atmospheric & Weather Radar","Automated Traffic Control (Skyways)","Planetary Emergency Broadcast System"],resources:{power:98,oxygen:99,water:95,structural:100},synonyms:["command","headquarters","hq","tower","central","control","admin","council"],emergencyRole:"Central Emergency Dispatch & Evacuation Coordinator"},{id:"marscare-hospital",name:"MarsCare Medical Center",shortName:"MarsCare Hospital",category:"hospital",categoryLabel:"Healthcare",icon:"cross",coords:{x:-75,y:0,z:45},roadNode:"node_west_1",elevation:0,status:"OPERATIONAL",health:96,occupancy:"84 / 120 beds",powerSource:"Helios Grid Sub-B (Dual Redundant)",powerConsumption:"620 kW",oxygenSupply:"Alpha + Internal Cryo Reservoir",description:"Premier tertiary healthcare and zero-gravity trauma surgery facility. Equipped with radiation therapy wards, hyperbaric chambers, and neonatal pods.",services:["Emergency Trauma Surgery & Intensive Care","Low-G Adaptation Medicine","Atmospheric Decompression & Barotrauma Treatment","Cosmic Radiation Therapy & Cellular Regeneration","24/7 Medevac Hover-Ambulance Bay"],resources:{power:96,oxygen:98,water:92,medicalSupplies:94},synonyms:["hospital","medical","clinic","doctor","surgery","health","er","ambulance","medcare","trauma","treatment"],emergencyRole:"Primary Medical Disaster Receiving Station"},{id:"nova-university",name:"Nova Martian University",shortName:"Nova University",category:"education",categoryLabel:"Education & Research",icon:"graduation-cap",coords:{x:70,y:0,z:-55},roadNode:"node_east_2",elevation:0,status:"OPERATIONAL",health:94,occupancy:"610 / 800 researchers & students",powerSource:"Helios Grid Main",powerConsumption:"380 kW",oxygenSupply:"Oxygen Hub Alpha",description:"Higher education and advanced astrophysical engineering campus. Trains the next generation of Martian engineers, astrobiologists, and terraforming scientists.",services:["Astrobiology & Terraforming Sciences","Quantum Computation & Sub-surface Geophysics","Martian Habitat Structural Engineering","Student Residential Quarters","Open Knowledge Archive & Planetarium"],resources:{power:94,oxygen:95,water:90,compute:99},synonyms:["university","college","academy","campus","school","research","students","education","learning","nova"],emergencyRole:"Secondary Citizen Shelter & Scientific Crisis Assessment"},{id:"horizon-school",name:"Horizon Youth Academy",shortName:"Horizon School",category:"education",categoryLabel:"Education",icon:"book-open",coords:{x:-45,y:0,z:-85},roadNode:"node_northwest_1",elevation:0,status:"OPERATIONAL",health:99,occupancy:"215 / 300 children",powerSource:"Helios Grid Sub-A",powerConsumption:"190 kW",oxygenSupply:"Oxygen Hub Beta",description:"Comprehensive primary and secondary learning environment designed with pressurized play biomes, simulated Earth gardens, and low-gravity athletic gymnasiums.",services:["Primary & Intermediate Schooling","Simulated Earth Ecology Experience Lab","Youth Low-G Gymnastics & Conditioning","Safe Family Reunification Station"],resources:{power:99,oxygen:99,water:96,studentWelfare:100},synonyms:["school","academy","kids","children","youth","kindergarten","elementary","horizon"],emergencyRole:"Priority Evacuation Assembly Point Alpha"},{id:"oxygen-hub-alpha",name:"Oxygen Hub Alpha",shortName:"O2 Hub Alpha",category:"oxygen",categoryLabel:"Life Support",icon:"wind",coords:{x:85,y:0,z:60},roadNode:"node_southeast_1",elevation:0,status:"OPERATIONAL",health:97,occupancy:"Automated (12 Tech Crew)",powerSource:"Helios Dedicated High-Tension Feed",powerConsumption:"850 kW",oxygenSupply:"Primary Sub-surface Electrolysis & MOXIE IV Array",description:"Primary life support infrastructure processing atmospheric CO2 and underground perchlorate ice into medical and breathable grade O2 (12,000 m³/hr).",services:["Atmospheric CO2 Cracking (MOXIE-IV Megawatt Array)","Cryogenic Liquid Oxygen Liquefaction & Buffering","High-pressure Pipeline Grid Distribution to Sectors A, B, C","Mobile EVA Suit Recharging Stations"],resources:{power:97,oxygenProduction:"12,400 L/min",reserveCapacity:"98%",pressurePurity:"99.98%"},synonyms:["oxygen","o2","air","breathing","atmosphere","life support","alpha","tank","refill","gas"],emergencyRole:"Primary Colony Atmospheric Grid Provider"},{id:"oxygen-hub-beta",name:"Oxygen Hub Beta",shortName:"O2 Hub Beta",category:"oxygen",categoryLabel:"Life Support (Reserve)",icon:"wind",coords:{x:-95,y:0,z:-40},roadNode:"node_west_2",elevation:0,status:"OPERATIONAL",health:99,occupancy:"Automated (8 Tech Crew)",powerSource:"Helios Grid Auxiliary + Geo-thermal Tap",powerConsumption:"720 kW",oxygenSupply:"Secondary Ice-Electrolysis Plant",description:"Redundant secondary atmospheric synthesis plant built directly over glacial basalt lava tubes. Supplies western habitats and serves as primary emergency failover.",services:["Sub-glacial Ice Mining & Electrolytic O2 Generation","Deep-tube Underground Cryogenic Reserve Silos (180-day capacity)","Automated Rapid-Pressurization Failover Valves","Western Sector Oxygen Trunkline Distribution"],resources:{power:99,oxygenProduction:"9,800 L/min",reserveCapacity:"100%",pressurePurity:"99.99%"},synonyms:["oxygen beta","o2 beta","backup oxygen","air backup","reserve air","failover oxygen","beta"],emergencyRole:"Automated Failover Grid for Entire Settlement"},{id:"residential-habitat-alpha",name:"Ares Habitat Sector Alpha",shortName:"Residential Sector A",category:"residential",categoryLabel:"Residential",icon:"home",coords:{x:-40,y:0,z:-40},roadNode:"node_central_west",elevation:0,status:"OPERATIONAL",health:98,occupancy:"1,420 / 1,600 residents",powerSource:"Helios Grid Sub-A",powerConsumption:"510 kW",oxygenSupply:"Oxygen Hub Beta + Local Recyclers",description:"High-density geodesic residential biodome cluster offering private apartments, communal dining gardens, natural lighting spectrum simulation, and social lounges.",services:["Private Modular Living Units (Quads & Family Pods)","Circadian Lighting Emulation Chambers","Internal Graywater Recycling Loop","Community Kitchens & Dining Commons"],resources:{power:98,oxygen:97,water:94,residentComfort:96},synonyms:["homes","house","living","housing","apartments","residential","hab","habitat","ares","residents"],emergencyRole:"Primary Civilian Residence Sector"},{id:"residential-habitat-beta",name:"Olympus Habitat Sector Beta",shortName:"Residential Sector B",category:"residential",categoryLabel:"Residential",icon:"home",coords:{x:-20,y:0,z:-65},roadNode:"node_northwest_2",elevation:0,status:"OPERATIONAL",health:97,occupancy:"1,180 / 1,400 residents",powerSource:"Helios Grid Sub-A",powerConsumption:"480 kW",oxygenSupply:"Oxygen Hub Alpha / Beta Crosslink",description:"Secondary residential biosphere featuring modular terrace housing, family education pods, and direct subterranean connection to Eden Greenhouse and Horizon School.",services:["Terraced Habitation Quarters","Childcare and Play Hubs","Subterranean Transit Tram Access","Private Acoustic Isolation Pods"],resources:{power:97,oxygen:98,water:95,residentComfort:94},synonyms:["habitat beta","hab b","homes north","apartments 2","residential beta"],emergencyRole:"Civilian Evacuation Shelter Support"},{id:"eden-greenhouse",name:"Eden Hydroponic Biosphere",shortName:"Eden Greenhouse",category:"food",categoryLabel:"Agriculture & Food",icon:"sprout",coords:{x:45,y:0,z:80},roadNode:"node_south_1",elevation:0,status:"OPERATIONAL",health:99,occupancy:"65 Agronomists & 120 Harvest Drones",powerSource:"Helios Grid Main + Solar Skylight Concentrators",powerConsumption:"740 kW",oxygenSupply:"Net Positive Producer (+1,500 L/min to Grid)",description:"Massive double-walled geodesic botanical sanctuary. Cultivates spirulina algae, fast-cycle genetically enhanced potatoes, microgreens, dwarf wheat, and artificial pollinator apiaries.",services:["Vertical Hydroponic & Aeroponic Food Production","Spirulina & Chlorella Protein Bioreactors","Botanical Carbon Scrubbing & Natural O2 Enrichment","Seed Bank & Genetic Crop Vault"],resources:{power:99,water:96,cropYieldRate:"104% (Nominal)",biomassIndex:"Optimum"},synonyms:["greenhouse","food","farm","hydroponic","agriculture","crops","plants","vegetables","eden","garden","eat"],emergencyRole:"Emergency Food Rations Depot & Auxiliary Biological O2 Buffer"},{id:"aquacycle-water",name:"AquaCycle Hydrology Complex",shortName:"AquaCycle Water Plant",category:"water",categoryLabel:"Water Reclamation",icon:"droplets",coords:{x:30,y:0,z:-95},roadNode:"node_north_1",elevation:0,status:"OPERATIONAL",health:96,occupancy:"Automated (14 Specialists)",powerSource:"Helios Grid Sub-B",powerConsumption:"610 kW",oxygenSupply:"Oxygen Hub Alpha",description:"Sub-surface ice melting, thermal distillation, and closed-loop nanofiltration works. Recycles 99.4% of all colony water with zero wastewater discharge.",services:["Glacial Permafrost Sub-surface Extraction Well","Nanotube Membrane Filtration & Mineralization","Colony Potable Drinking Water Distribution","Agricultural Graywater Treatment"],resources:{power:96,cleanWaterReserve:"4,200,000 Liters",dailyPurityIndex:"99.997%",flowRate:"1,800 L/min"},synonyms:["water","drink","water plant","filtration","recycle","aquacycle","ice","hydrology","potable"],emergencyRole:"Emergency Water Reserves & Fire Suppression Supply"},{id:"helios-power",name:"Helios Fusion & Solar Complex",shortName:"Helios Power Station",category:"power",categoryLabel:"Power & Energy",icon:"zap",coords:{x:115,y:0,z:-25},roadNode:"node_east_1",elevation:0,status:"OPERATIONAL",health:98,occupancy:"30 Nuclear & Plasma Physicists",powerSource:"Deuterium-Helium-3 Compact Tokamak Reactor + 40MW Photovoltaic Field",powerConsumption:"Producer (+52 MW Total Output)",oxygenSupply:"Oxygen Hub Alpha",description:"The energetic engine of Mars Pulse. Operates an advanced magnetic-confinement D-He3 fusion core supplemented by high-efficiency bifacial solar tracking arrays.",services:["50 MW Primary Magnetic Fusion Core","40 MW Solar Photovoltaic & Thermal Salt Storage Basin","High-Temperature Superconducting Distribution Ring","Emergency Flywheel & Solid-State Supercapacitor Banks"],resources:{reactorOutput:"52.4 MW",gridFrequency:"60.00 Hz",reserveCapacitors:"99.4%",coolantTemperature:"480 K (Nominal)"},synonyms:["power","electricity","energy","helios","fusion","solar","generator","reactor","grid","battery"],emergencyRole:"Primary Colony Energy Heartbeat"},{id:"safehaven-shelter",name:"SafeHaven Deep Blast Shelter",shortName:"SafeHaven Shelter",category:"shelter",categoryLabel:"Emergency Defense",icon:"shield-alert",coords:{x:-105,y:0,z:15},roadNode:"node_west_3",elevation:0,status:"OPERATIONAL",health:100,occupancy:"Standby (Capacity: 3,500 people)",powerSource:"Independent Geothermal + RTG Battery Banks",powerConsumption:"95 kW (Standby)",oxygenSupply:"Autonomous Chemical O2 Candles (120-Day Supply)",description:"Subterranean bunker carved into deep basalt bedrock 40 meters beneath the surface. Shielded against Class-X solar particle events, meteor strikes, and hull breaches.",services:["Heavy Regolith & Lead Radiation Shielding (100% CME Protection)","Independent Sealed Life Support & Closed-Circuit Atmosphere","Long-life Caloric Nutrition & Medical Stockpiles","Emergency Colony Command Backup Bunker"],resources:{power:100,oxygen:100,water:100,bunkerIntegrity:"100% Sealed"},synonyms:["shelter","bunker","safe","safehaven","emergency shelter","fallout","storm","radiation","hide","blast"],emergencyRole:"Ultimate Colony Catastrophe Fallback Haven"},{id:"mars-gateway-spaceport",name:"Mars Gateway Orbital Spaceport",shortName:"Gateway Spaceport",category:"spaceport",categoryLabel:"Logistics & Aerospace",icon:"rocket",coords:{x:20,y:0,z:125},roadNode:"node_south_2",elevation:0,status:"OPERATIONAL",health:95,occupancy:"120 Flight Crew, Logistics & Ground Crew",powerSource:"Helios Grid Dedicated Line",powerConsumption:"920 kW",oxygenSupply:"Oxygen Hub Alpha",description:"Planetary arrival and departure terminal featuring three heavy-lift vertical landing pads, cryogenic methane fuel depots, and passenger disembarkation airlocks.",services:["VTOL Heavy-Cargo & Shuttle Landing Pads (Pads Alpha, Beta, Gamma)","Liquid CH4 & LOX Cryogenic Refueling Rig","Orbital Transfer Shuttles & Trans-Earth Evacuation Shuttles","Automated Drone Cargo Sorting & Decontamination Hangar"],resources:{power:95,fuelReserves:"88% Methane / 94% LOX",padAvailability:"2 of 3 Ready",trafficStatus:"Clear"},synonyms:["spaceport","shuttle","rocket","landing","pad","gateway","flight","launch","airport","hangar","spacecraft"],emergencyRole:"Planetary Evacuation & Orbital Relief Reception"},{id:"research-laboratory",name:"Kepler Astrobiology Labs",shortName:"Kepler Research Lab",category:"research",categoryLabel:"Research & Development",icon:"flask-conical",coords:{x:95,y:0,z:-80},roadNode:"node_east_3",elevation:0,status:"OPERATIONAL",health:97,occupancy:"95 Scientists & Engineers",powerSource:"Helios Grid Sub-B",powerConsumption:"420 kW",oxygenSupply:"Oxygen Hub Alpha",description:"Class-4 biosafety containment and subsurface geological drill core laboratory. Actively investigating fossil biosignatures and synthesized extremophile bacteria.",services:["Deep Crustal Sample Core Spectrometry","Extremophile Genetic Modification Cleanrooms","Superconducting Quantum Sensor Array","Direct Fiber Conduit to Nova University"],resources:{power:97,containmentStatus:"Level 4 Nominal",vacuumPurity:"99.99%",cryoTemp:"4.2 Kelvin"},synonyms:["lab","laboratory","research","kepler","science","astrobiology","experiments","analysis"],emergencyRole:"Chemical & Biological Hazard Analysis"},{id:"community-centre",name:"Red Sands Agora & Community Hub",shortName:"Community Agora",category:"community",categoryLabel:"Civic & Culture",icon:"users",coords:{x:-15,y:0,z:20},roadNode:"node_central_south",elevation:0,status:"OPERATIONAL",health:99,occupancy:"340 residents present",powerSource:"Helios Grid Sub-A",powerConsumption:"220 kW",oxygenSupply:"Direct Line Alpha",description:"Vibrant civic atrium hosting cultural amphitheater performances, social dining pavilions, holographic Earth heritage museum, and recreational gatherings.",services:["Civic Amphitheater & Assembly Hall","Earth Cultural Heritage Hologram Gallery","Citizen Mental Health & Recreation Lounge","Community Bulletin & Voting Terminal"],resources:{power:99,oxygen:99,water:98,communityMorale:"High (94%)"},synonyms:["community","agora","plaza","gathering","hall","social","civic","meeting","culture","hub"],emergencyRole:"Civilian Information Center & Family Broadcast Center"},{id:"resource-storage-centre",name:"Apex Automated Logistics Depot",shortName:"Resource Storage",category:"logistics",categoryLabel:"Logistics & Supplies",icon:"boxes",coords:{x:-65,y:0,z:100},roadNode:"node_southwest_1",elevation:0,status:"OPERATIONAL",health:98,occupancy:"Automated (6 Logistics Officers)",powerSource:"Helios Grid Sub-A",powerConsumption:"310 kW",oxygenSupply:"Oxygen Hub Alpha",description:"Robotic high-bay warehouse housing vital replacement parts, spare rover drives, construction 3D printer regolith feedstock, and medical emergency kits.",services:["Automated High-Density Pallet Retrieval (ASRS)","Spare Life-Support Filter & Seal Vaults","Regolith-Composite 3D Printing Consumables","Emergency Ration Pallets (365-day strategic stockpile)"],resources:{power:98,inventoryHealth:"99.2%",automatedRobots:"48 / 48 Online",strategicReserve:"Optimal"},synonyms:["storage","warehouse","supplies","resources","depot","logistics","materials","cargo","inventory"],emergencyRole:"Strategic Emergency Material Distribution"}],xv=[{id:"all",label:"All Facilities",icon:"grid"},{id:"command",label:"Command",icon:"tower-control"},{id:"hospital",label:"Medical",icon:"cross"},{id:"oxygen",label:"Oxygen",icon:"wind"},{id:"education",label:"Education",icon:"graduation-cap"},{id:"residential",label:"Habitats",icon:"home"},{id:"food",label:"Food & Bio",icon:"sprout"},{id:"water",label:"Water",icon:"droplets"},{id:"power",label:"Power",icon:"zap"},{id:"shelter",label:"Shelter",icon:"shield-alert"},{id:"spaceport",label:"Spaceport",icon:"rocket"}];function Sv(s){const t=new Yt;t.name="buildingsGroup";const e=new he({color:1777454,metalness:.85,roughness:.35}),n=new he({color:14540780,metalness:.4,roughness:.45}),i=new he({color:4739688,metalness:.6,roughness:.4}),a=new he({color:4385013,transparent:!0,opacity:.55,roughness:.15,metalness:.25,depthWrite:!1}),r=new he({color:5635976,transparent:!0,opacity:.55,roughness:.15,metalness:.2,depthWrite:!1}),o=new ne({color:4385013}),c=new ne({color:16760425}),l=new ne({color:16724838});new ne({color:3407752});const h=new ne({color:4951551}),d=new Map,u=[];function p(C){const b=new Yt;b.position.set(C.x,0,C.z);const U=new $(new Dt(14,16,4,6),i);U.position.y=2,U.castShadow=!0,U.receiveShadow=!0,b.add(U);const O=new $(new Dt(8,12,28,6),n);O.position.y=18,O.castShadow=!0,b.add(O);const z=new $(new Dt(3.5,7,24,6),e);z.position.y=44,z.castShadow=!0,b.add(z);const N=new $(new Dt(.4,1.2,18,8),n);N.position.y=65,b.add(N);for(let Q=0;Q<6;Q++){const B=Q/6*Math.PI*2,K=new $(new Wt(.35,26,.35),o);K.position.set(Math.cos(B)*9.8,18,Math.sin(B)*9.8),b.add(K)}const H=new $(new Dt(11,7,5,16),a);H.position.y=35,b.add(H);const X=new rn(4385013,2.5,45);X.position.y=72,b.add(X);const Y=new $(new xe(1.4,8,8),o);Y.position.y=72,b.add(Y);const et=new $(new Wt(6,1.5,8),e);return et.position.set(0,3,14),b.add(et),{group:b,update:(Q,B)=>{Y.scale.setScalar(1+Math.sin(B*4)*.15),X.intensity=2.2+Math.sin(B*3)*.6}}}function g(C){const b=new Yt;b.position.set(C.x,0,C.z);const U=new $(new Dt(12,14,10,16),n);U.position.y=5,U.castShadow=!0,b.add(U);const O=new $(new Wt(22,8,12),n);O.position.set(-8,4,0),O.castShadow=!0,b.add(O);const z=new $(new Wt(14,9,20),i);z.position.set(8,4.5,6),z.castShadow=!0,b.add(z);const N=new $(new Dt(8,8,4,16),a);N.position.y=12,b.add(N);const H=new ne({color:4385013}),X=new $(new Wt(2.4,.8,7.5),H);X.position.set(0,14.5,0);const Y=new $(new Wt(7.5,.8,2.4),H);Y.position.set(0,14.5,0),b.add(X),b.add(Y);const et=new rn(4385013,2,35);et.position.set(0,16,0),b.add(et);const Q=new $(new Wt(8,.5,12),e);return Q.position.set(0,.25,-14),b.add(Q),{group:b,update:(B,K,it)=>{const st=it&&it.status==="EMERGENCY"||b.userData.isEmergencyActive,Tt=Math.sin(K*(st?8:2))*.5+.5;H.color.setHex(st?Tt>.5?16724838:16777215:4385013),et.color.setHex(st?16724838:4385013),et.intensity=1.8+Tt*1.5}}}function _(C){const b=new Yt;b.position.set(C.x,0,C.z);const U=new xe(11,16,12,0,Math.PI*2,0,Math.PI*.55),O=new $(U,a);O.position.y=.5,b.add(O);const z=new $(new Dt(3,4,8,8),h);z.position.y=4,b.add(z);const N=new $(new Wt(16,12,10),n);N.position.set(-15,6,-8),N.castShadow=!0,b.add(N);const H=new $(new Wt(12,15,14),i);H.position.set(16,7.5,-6),H.castShadow=!0,b.add(H);const X=new $(new Dt(1.4,1.4,12,8),a);X.rotation.z=Math.PI/2,X.position.set(-8,5,-4),b.add(X);const Y=new $(new Dt(1.4,1.4,12,8),a);return Y.rotation.z=-Math.PI/2,Y.position.set(8,5,-3),b.add(Y),{group:b,update:(et,Q)=>{z.rotation.y+=et*.3}}}function m(C){const b=new Yt;b.position.set(C.x,0,C.z);const U=new Dt(14,15,6,16,1,!1,0,Math.PI*1.2),O=new $(U,n);O.position.y=3,O.castShadow=!0,b.add(O);const z=new $(new Dt(12,12,.6,16,1,!1,0,Math.PI*1.2),e);z.position.y=6.3,b.add(z);const N=new $(new xe(6,12,10,0,Math.PI*2,0,Math.PI*.5),r);N.position.set(-4,.5,4),b.add(N);const H=new $(new Be(14,.3,4,16,Math.PI*1.2),c);return H.rotation.x=Math.PI/2,H.position.y=5.2,b.add(H),{group:b,update:()=>{}}}function f(C){const b=new Yt;b.position.set(C.x,0,C.z);const U=new $(new Wt(26,1.5,22),e);U.position.y=.75,b.add(U);const O=new Dt(5.5,5.5,16,16),z=new xe(5.5,16,8,0,Math.PI*2,0,Math.PI*.5),N=new $(O,n);N.position.set(-6,9.5,0),N.castShadow=!0,b.add(N);const H=new $(z,n);H.position.set(-6,17.5,0),b.add(H);const X=new $(O,n);X.position.set(6,9.5,0),X.castShadow=!0,b.add(X);const Y=new $(z,n);Y.position.set(6,17.5,0),b.add(Y);const et=new $(new Dt(4.5,6.5,12,12,1,!0),i);et.position.set(0,7.5,-6),b.add(et);const Q=new $(new Dt(.8,.8,14,8),e);Q.rotation.z=Math.PI/2,Q.position.set(0,11,0),b.add(Q);const B=new $(new Wt(.5,12,.5),o);B.position.set(-6,9.5,5.6),b.add(B);const K=new $(new Wt(.5,12,.5),o);K.position.set(6,9.5,5.6),b.add(K);const it=new $(new xe(1.2,8,8),l);it.position.set(0,15,-6),it.visible=!1,b.add(it);const st=new rn(16724838,0,40);st.position.set(0,16,-6),b.add(st);const At=40,Tt=new le,Et=new Float32Array(At*3);for(let J=0;J<At;J++)Et[J*3]=(Math.random()-.5)*6,Et[J*3+1]=12+Math.random()*8,Et[J*3+2]=(Math.random()-.5)*6;Tt.setAttribute("position",new me(Et,3));const Ht=new $i({color:16724770,size:1.5,transparent:!0,opacity:.8,blending:Se}),A=new ys(Tt,Ht);return A.visible=!1,b.add(A),{group:b,update:(J,nt,ut)=>{if(ut&&ut.status==="OFFLINE"){it.visible=!0,A.visible=!0;const St=Math.sin(nt*12)>0?1:0;st.intensity=St*3.5,B.material=l,K.material=l;const at=Tt.attributes.position.array;for(let mt=0;mt<At;mt++)at[mt*3+1]+=J*12,at[mt*3+1]>24&&(at[mt*3+1]=10,at[mt*3]=(Math.random()-.5)*6,at[mt*3+2]=(Math.random()-.5)*6);Tt.attributes.position.needsUpdate=!0}else it.visible=!1,A.visible=!1,st.intensity=0,B.material=o,K.material=o}}}function M(C){const b=new Yt;b.position.set(C.x,0,C.z);const U=new $(new Dt(15,17,3,8),e);U.position.y=1.5,b.add(U),[{x:-5,z:-3},{x:5,z:-3},{x:0,z:6}].forEach(H=>{const X=new $(new Dt(4.2,4.2,14,14),n);X.position.set(H.x,8.5,H.z),X.castShadow=!0,b.add(X);const Y=new $(new xe(4.2,14,8,0,Math.PI*2,0,Math.PI*.5),n);Y.position.set(H.x,15.5,H.z),b.add(Y)});const z=new $(new Dt(2,4.5,22,4),i);z.position.set(0,12,0),b.add(z);const N=new $(new Be(12,.4,6,24),o);return N.rotation.x=Math.PI/2,N.position.y=4,b.add(N),{group:b,update:(H,X,Y)=>{Y&&Y.emergencyAlert&&Y.emergencyAlert.includes("failover")&&(N.scale.setScalar(1+Math.sin(X*6)*.1),N.material=o)}}}function v(C,b){const U=new Yt;U.position.set(C.x,0,C.z);const O=new $(new Dt(18,20,3,16),i);O.position.y=1.5,U.add(O),[{x:-7,z:-6,r:6.5,h:5},{x:7,z:-6,r:6,h:4.8},{x:-6,z:6,r:5.8,h:4.5},{x:6,z:6,r:6.2,h:5.2}].forEach((X,Y)=>{const et=new xe(X.r,14,10,0,Math.PI*2,0,Math.PI*.55),Q=new $(et,n);Q.position.set(X.x,2.5,X.z),Q.castShadow=!0,U.add(Q);const B=new $(new Be(X.r*.85,.25,4,16),c);B.rotation.x=Math.PI/2,B.position.set(X.x,4.5,X.z),U.add(B)});const N=new $(new xe(7,16,12,0,Math.PI*2,0,Math.PI*.5),a);N.position.set(0,3,0),U.add(N);const H=new $(new Dt(1.2,1.2,16,8),e);return H.rotation.z=Math.PI/2,H.position.set(0,2.5,0),U.add(H),{group:U,update:()=>{}}}function y(C){const b=new Yt;b.position.set(C.x,0,C.z);const U=new $(new Dt(19,20,2.5,24),e);U.position.y=1.25,b.add(U);const O=new gs(18,2),z=O.attributes.position;for(let Q=0;Q<z.count;Q++)z.getY(Q)<0&&z.setY(Q,0);O.computeVertexNormals();const N=new $(O,r);N.position.y=2.5,b.add(N);const H=new So(new Kl(O),new Pa({color:2263108,transparent:!0,opacity:.7}));H.position.y=2.5,b.add(H);const X=new $(new Dt(14,15,1.2,16),new he({color:1131554}));X.position.y=2.2,b.add(X);for(let Q=3;Q<=12;Q+=3){const B=new $(new Be(Q,.6,6,16),new he({color:3385924,roughness:.9}));B.rotation.x=Math.PI/2,B.position.y=3,b.add(B)}const Y=new $(new Dt(1.2,2,12,8),n);Y.position.y=8,b.add(Y);const et=new rn(5635976,2.4,45);return et.position.set(0,8,0),b.add(et),{group:b,update:(Q,B)=>{et.intensity=2.2+Math.sin(B*2)*.4}}}function D(C){const b=new Yt;b.position.set(C.x,0,C.z);const U=new $(new Wt(22,1.5,22),i);U.position.y=.75,b.add(U);const O=new Dt(3.5,3.5,15,16);[{x:-6,z:-5},{x:6,z:-5},{x:0,z:6}].forEach((Y,et)=>{const Q=new $(O,n);Q.position.set(Y.x,8.5,Y.z),Q.castShadow=!0,b.add(Q);const B=new $(new Wt(.3,11,.3),o);B.position.set(Y.x,8.5,Y.z+3.6),b.add(B)});const N=new $(new Dt(5,5.5,3,16),e);N.position.set(0,2.5,-5),b.add(N);const H=new $(new on(4.8,16),a);H.rotation.x=-Math.PI/2,H.position.set(0,4.1,-5),b.add(H);const X=new $(new Dt(.6,.6,12,8),e);return X.rotation.z=Math.PI/2,X.position.set(0,12,-5),b.add(X),{group:b,update:(Y,et)=>{H.rotation.z+=Y*.5}}}function R(C){const b=new Yt;b.position.set(C.x,0,C.z);const U=new $(new Dt(16,18,4,8),e);U.position.y=2,b.add(U);const O=new $(new Dt(9,10,16,16),i);O.position.y=11,O.castShadow=!0,b.add(O);const z=new Be(10.2,1.2,12,24),N=new ne({color:16760425}),H=new $(z,N);H.rotation.x=Math.PI/2,H.position.y=11,b.add(H);const X=new $(new Be(11.5,.5,8,24),o);X.rotation.x=Math.PI/2,X.position.y=13,b.add(X);const Y=new rn(16760425,3,50);Y.position.set(0,11,0),b.add(Y);for(let et=0;et<4;et++){const Q=et/4*Math.PI*2+Math.PI/4,B=new Yt;B.position.set(Math.cos(Q)*22,.5,Math.sin(Q)*22);const K=new $(new Dt(.4,.4,6,6),e);K.position.y=3,B.add(K);const it=new $(new Wt(10,.3,5),i);it.position.y=6,it.rotation.x=.45,it.rotation.y=Q,B.add(it),b.add(B)}return{group:b,update:(et,Q,B)=>{if(B&&(B.status==="CRITICAL"||B.status==="OFFLINE")){const it=Math.random()>.65?Math.random()*.6:.05;N.color.setHex(16724736),X.visible=Math.random()>.8,Y.intensity=it,H.scale.setScalar(1+(Math.random()-.5)*.1)}else N.color.setHex(16760425),X.visible=!0,H.rotation.z+=et*.8,Y.intensity=2.8+Math.sin(Q*5)*.6}}}function P(C){const b=new Yt;b.position.set(C.x,0,C.z);const U=new fs(18,9,8),O=new he({color:5909791,roughness:.95}),z=new $(U,O);z.position.y=4.5,b.add(z);const N=new $(new Wt(12,7,5),e);N.position.set(0,3.5,9),b.add(N);const H=new $(new Wt(4.8,5.5,1),i);H.position.set(-2.5,3.5,11),b.add(H);const X=new $(new Wt(4.8,5.5,1),i);X.position.set(2.5,3.5,11),b.add(X);const Y=new $(new Dt(.4,.8,18,6),n);Y.position.set(0,14,0),b.add(Y);const et=new $(new xe(1.2,8,8),c);et.position.set(0,23,0),b.add(et);const Q=new rn(16760425,1.8,30);return Q.position.set(0,23,0),b.add(Q),{group:b,update:(B,K)=>{et.scale.setScalar(1+Math.sin(K*3)*.15)}}}function F(C){const b=new Yt;b.position.set(C.x,0,C.z);const U=new $(new Wt(28,8,14),i);U.position.set(-10,4,-14),U.castShadow=!0,b.add(U);const O=new $(new Dt(3.5,4.5,20,8),n);O.position.set(-20,10,-14),b.add(O);const z=new $(new xe(3,12,8,0,Math.PI*2,0,Math.PI*.4),e);z.position.set(-20,21,-14),b.add(z);const N=new Yt;N.name="gatewayShuttle",N.position.set(0,2.5,0);const H=new fs(3.5,18,8);H.rotateX(Math.PI/2);const X=new $(H,n);X.position.z=2,N.add(X);const Y=new $(new xe(2,8,8),a);Y.scale.set(.8,.7,1.8),Y.position.set(0,1.6,5),N.add(Y);const et=new Yl;et.moveTo(0,0),et.lineTo(9,-7),et.lineTo(9,-9),et.lineTo(-9,-9),et.lineTo(-9,-7),et.closePath();const Q=new Eo(et,{depth:.6,bevelEnabled:!1});Q.rotateX(-Math.PI/2);const B=new $(Q,e);B.position.set(0,0,2),N.add(B);const K=new $(new Wt(.3,4,3),n);K.position.set(-4,2,-6),K.rotation.z=-.2,N.add(K);const it=new $(new Wt(.3,4,3),n);it.position.set(4,2,-6),it.rotation.z=.2,N.add(it);const st=new $(new Dt(1.2,1.5,2.5,8),e);st.rotation.x=Math.PI/2,st.position.set(-2,.2,-7.5),N.add(st);const At=new $(new Dt(1.2,1.5,2.5,8),e);At.rotation.x=Math.PI/2,At.position.set(2,.2,-7.5),N.add(At);const Tt=new $(new on(1.1,12),o);Tt.rotation.y=Math.PI,Tt.position.set(-2,.2,-8.8),N.add(Tt);const Et=new $(new on(1.1,12),o);return Et.rotation.y=Math.PI,Et.position.set(2,.2,-8.8),N.add(Et),b.add(N),{group:b,update:(Ht,A)=>{z.rotation.y+=Ht*.4}}}function E(C){const b=new Yt;b.position.set(C.x,0,C.z);for(let N=0;N<4;N++){const H=N/4*Math.PI*2+Math.PI/4,X=new $(new Dt(.6,.6,6,6),e);X.position.set(Math.cos(H)*9,3,Math.sin(H)*9),b.add(X)}const U=new $(new gs(8,2),n);U.position.y=10,U.castShadow=!0,b.add(U);const O=new $(new Be(8.2,.35,6,24),new ne({color:7620338}));O.rotation.x=Math.PI/2,O.position.y=10,b.add(O);const z=new $(new Dt(.3,.6,12,6),i);return z.position.set(0,19,0),b.add(z),{group:b,update:(N,H)=>{O.rotation.z+=N*.2}}}function S(C){const b=new Yt;b.position.set(C.x,0,C.z);const U=new $(new Dt(15,16,1.2,24),i);U.position.y=.6,b.add(U);for(let X=0;X<8;X++){const Y=X/8*Math.PI*2,et=new $(new Dt(.5,.5,6,8),n);et.position.set(Math.cos(Y)*12,3.6,Math.sin(Y)*12),b.add(et)}const O=new $(new Be(12,.8,6,24),e);O.rotation.x=Math.PI/2,O.position.y=6.6,b.add(O);const z=new gs(3.5,2),N=new ne({color:4385013,wireframe:!0,transparent:!0,opacity:.75}),H=new $(z,N);return H.position.y=4.2,b.add(H),{group:b,update:(X,Y)=>{H.rotation.y+=X*.6,H.rotation.x=Math.sin(Y*.8)*.2}}}function I(C){const b=new Yt;b.position.set(C.x,0,C.z);const U=new $(new Wt(26,1.2,22),e);U.position.y=.6,b.add(U);const O=new Dt(3.8,3.8,8,6);[{x:-7,z:-5},{x:0,z:-5},{x:7,z:-5},{x:-7,z:4},{x:0,z:4},{x:7,z:4}].forEach(H=>{const X=new $(O,n);X.position.set(H.x,4.6,H.z),X.castShadow=!0,b.add(X);const Y=new $(new fs(3.8,2,6),i);Y.position.set(H.x,9.6,H.z),b.add(Y)});const N=new $(new Wt(24,.6,.8),e);return N.position.set(0,11,0),b.add(N),{group:b,update:()=>{}}}const k={"command-tower":p,"marscare-hospital":g,"nova-university":_,"horizon-school":m,"oxygen-hub-alpha":f,"oxygen-hub-beta":M,"residential-habitat-alpha":C=>v(C),"residential-habitat-beta":C=>v(C),"eden-greenhouse":y,"aquacycle-water":D,"helios-power":R,"safehaven-shelter":P,"mars-gateway-spaceport":F,"research-laboratory":E,"community-centre":S,"resource-storage-centre":I};for(const C of ws){const b=k[C.id];if(!b)continue;const U=b(C.coords),O=U.group;O.name=`facility_${C.id}`;const z=new Dt(14,14,30,8),N=new ne({visible:!1}),H=new $(z,N);H.position.y=15,H.userData={facilityId:C.id,facilityData:C},O.add(H),u.push(H);const X=new ii(13.5,15,32);X.rotateX(-Math.PI/2);const Y=new ne({color:4385013,side:Fe,transparent:!0,opacity:0,blending:Se}),et=new $(X,Y);et.position.y=.28,O.add(et);const Q=new ge;Q.position.set(0,24,0),O.add(Q),t.add(O),d.set(C.id,{id:C.id,group:O,highlightRing:et,anchor:Q,update:U.update||(()=>{})})}return s.add(t),{group:t,buildingMeshes:d,raycastTargets:u,update:(C,b,U)=>{const O=U?U.selectedFacilityId:null,z=U?U.hoveredFacilityId:null;for(const[N,H]of d.entries()){const X=U?U.getFacility(N):null;H.update(C,b,X),O===N?(H.highlightRing.material.opacity=.95,H.highlightRing.material.color.setHex(4385013),H.highlightRing.scale.setScalar(1+Math.sin(b*4)*.05)):z===N?(H.highlightRing.material.opacity=.6,H.highlightRing.material.color.setHex(16760425),H.highlightRing.scale.setScalar(1)):X&&X.status==="OFFLINE"?(H.highlightRing.material.opacity=.85,H.highlightRing.material.color.setHex(16724838),H.highlightRing.scale.setScalar(1+Math.sin(b*8)*.08)):X&&X.status==="WARNING"?(H.highlightRing.material.opacity=.7,H.highlightRing.material.color.setHex(16755200),H.highlightRing.scale.setScalar(1)):H.highlightRing.material.opacity=0}}}}function Mv(s){const t=new Yt;t.name="vehiclesGroup";const e=new he({color:15265013,metalness:.8,roughness:.25}),n=new he({color:2040629,metalness:.9,roughness:.3}),i=new he({color:15087942,metalness:.7,roughness:.3}),a=new he({color:16032353,metalness:.6,roughness:.4}),r=new ov({color:4385013,transmission:.9,transparent:!0,opacity:.5}),o=new ne({color:4385013}),c=new ne({color:16760425}),l=new ne({color:16724838});function h(){const I=new Yt,k=new Dt(.8,1.4,6,12);k.rotateX(Math.PI/2);const C=new $(k,e);I.add(C);const b=new xe(1,12,8);b.scale(.8,.7,1.8);const U=new $(b,r);U.position.set(0,.7,.6),I.add(U),[{x:-1.6,z:1.5},{x:1.6,z:1.5},{x:-1.8,z:-1.8},{x:1.8,z:-1.8}].forEach(Y=>{const et=new $(new Dt(.5,.5,.3,8),n);et.position.set(Y.x,-.4,Y.z),I.add(et);const Q=new $(new on(.42,8),o);Q.rotation.x=Math.PI/2,Q.position.set(Y.x,-.58,Y.z),I.add(Q)});const z=new $(new xe(.2,6,6),o);z.position.set(-.6,0,3);const N=new $(new xe(.2,6,6),o);N.position.set(.6,0,3),I.add(z),I.add(N);const H=new $(new Dt(.5,.7,.8,8),n);H.rotation.x=Math.PI/2,H.position.set(0,0,-3.2),I.add(H);const X=new $(new on(.6,8),o);return X.rotation.y=Math.PI,X.position.set(0,0,-3.65),I.add(X),I}function d(){const I=new Yt,k=new Wt(2.8,1.4,7.5),C=new $(k,e);I.add(C);const b=new $(new Wt(2.85,.4,7.5),i);b.position.y=.1,I.add(b);const U=new $(new Wt(1.8,.8,2.5),r);U.position.set(0,.9,1.8),I.add(U);const O=new $(new Wt(1.6,.25,.4),l);O.position.set(0,1.45,.4),I.add(O);const z=new rn(16724838,1.8,25);z.position.set(0,1.8,.4),I.add(z);const N=new $(new Dt(.5,.6,1.2,8),n);N.rotation.x=Math.PI/2,N.position.set(-.9,0,-4);const H=new $(new Dt(.5,.6,1.2,8),n);H.rotation.x=Math.PI/2,H.position.set(.9,0,-4),I.add(N),I.add(H);const X=new $(new on(.55,8),o);X.rotation.y=Math.PI,X.position.set(-.9,0,-4.65);const Y=new $(new on(.55,8),o);return Y.rotation.y=Math.PI,Y.position.set(.9,0,-4.65),I.add(X),I.add(Y),{mesh:I,update:(et,Q)=>{const B=Math.sin(Q*16)>0;O.material=B?l:o,z.color.setHex(B?16724838:4385013),z.intensity=B?2.5:.8}}}function u(){const I=new Yt,k=new $(new Wt(4.2,1.2,8.5),n);I.add(k);const C=new $(new Wt(3.6,1.8,2.4),a);C.position.set(0,1.2,2.5),I.add(C);const b=new $(new Wt(3.2,.9,.4),r);b.position.set(0,1.4,3.75),I.add(b);const U=new $(new Wt(3.4,1.6,2.2),p());U.position.set(0,1.2,-.2),I.add(U);const O=new $(new Wt(3.4,1.6,2.2),e);return O.position.set(0,1.2,-2.6),I.add(O),[{x:-2.4,z:2},{x:2.4,z:2},{x:-2.4,z:-2},{x:2.4,z:-2}].forEach(N=>{const H=new $(new Be(.8,.25,6,12),n);H.rotation.x=Math.PI/2,H.position.set(N.x,0,N.z),I.add(H);const X=new $(new on(.7,8),c);X.rotation.x=Math.PI/2,X.position.set(N.x,-.2,N.z),I.add(X)}),I}function p(){return new he({color:4016996,roughness:.5})}const g=[new T(0,12,-70),new T(75,14,-50),new T(90,11,20),new T(45,10,85),new T(-40,12,75),new T(-85,13,20),new T(-75,11,-55),new T(-30,10,-75)],_=new xn(g,!0,"centripetal"),m=[new T(-70,9,45),new T(-30,11,20),new T(0,12,0),new T(20,10,50),new T(25,8,110),new T(-20,10,85),new T(-60,11,70)],f=new xn(m,!0,"catmullrom",.2),M=[new T(100,8,-25),new T(80,7,50),new T(40,8,70),new T(10,7,20),new T(25,8,-80),new T(75,9,-60)],v=new xn(M,!0,"centripetal"),y=[],D=h();t.add(D),y.push({mesh:D,curve:_,progress:.1,speed:.035,baseScale:1,bobOffset:0});const R=h();t.add(R),y.push({mesh:R,curve:_,progress:.6,speed:.032,baseScale:.95,bobOffset:Math.PI});const P=d();t.add(P.mesh),y.push({mesh:P.mesh,curve:f,progress:.35,speed:.048,baseScale:1.1,bobOffset:1.2,customUpdate:P.update});const F=u();t.add(F),y.push({mesh:F,curve:v,progress:.8,speed:.022,baseScale:1,bobOffset:2.5});const E=h();t.add(E),y.push({mesh:E,curve:v,progress:.25,speed:.028,baseScale:.9,bobOffset:.8});const S=h();return S.scale.set(1.4,1.4,1.4),t.add(S),y.push({mesh:S,curve:new xn([new T(45,18,135),new T(48,22,140),new T(42,23,130),new T(45,18,135)],!0),progress:0,speed:.012,baseScale:1.4,bobOffset:1.5}),s.add(t),{group:t,update:(I,k)=>{for(const C of y){C.progress=(C.progress+I*C.speed)%1;const b=C.curve.getPointAt(C.progress),U=C.curve.getTangentAt(C.progress).normalize(),O=Math.sin(k*3+C.bobOffset)*.35;C.mesh.position.set(b.x,b.y+O,b.z);const z=b.clone().add(U);C.mesh.lookAt(z);const N=(C.progress+.02)%1,H=C.curve.getTangentAt(N).normalize(),Y=U.clone().cross(H).y*3.5;C.mesh.rotateZ(-Y),C.customUpdate&&C.customUpdate(I,k)}}}}class bv{constructor(t){this.scene=t,this.routeGroup=new Yt,this.routeGroup.name="navigationRoute",this.scene.add(this.routeGroup),this.activeCurve=null,this.pulseMesh=null,this.pulseProgress=0,this.startBeacon=null,this.destBeacon=null,this.isRendering=!1}renderRoute(t,e=4385013,n=!1){if(this.clearRoute(),!t||t.length<2)return;const i=t.map(m=>new T(m.x,.45,m.z));this.activeCurve=new xn(i,!1,"catmullrom",.15);const a=new Es(this.activeCurve,Math.max(20,t.length*15),.4,8,!1),r=new ne({color:e,transparent:!0,opacity:.85,blending:Se}),o=new $(a,r);this.routeGroup.add(o);const c=new Es(this.activeCurve,Math.max(20,t.length*15),.95,8,!1),l=new ne({color:n?16724838:e,transparent:!0,opacity:.3,blending:Se}),h=new $(c,l);this.routeGroup.add(h);const d=new xe(1.1,12,12),u=new ne({color:16777215,blending:Se});this.pulseMesh=new $(d,u),this.routeGroup.add(this.pulseMesh);const p=new rn(e,3,18);this.pulseMesh.add(p);const g=i[0],_=i[i.length-1];this.startBeacon=this.createBeacon(g,3407752,"START"),this.destBeacon=this.createBeacon(_,n?16724838:4385013,"DESTINATION"),this.routeGroup.add(this.startBeacon.group),this.routeGroup.add(this.destBeacon.group),this.pulseProgress=0,this.isRendering=!0}createBeacon(t,e,n){const i=new Yt;i.position.set(t.x,.25,t.z);const a=new Dt(.5,1.8,22,16,1,!0),r=new ne({color:e,transparent:!0,opacity:.45,side:Fe,blending:Se}),o=new $(a,r);o.position.y=11,i.add(o);const c=new ii(3.5,4.5,32);c.rotateX(-Math.PI/2);const l=new ne({color:e,side:Fe,transparent:!0,opacity:.8,blending:Se}),h=new $(c,l);i.add(h);const d=new wo(1.6),u=new ne({color:e,wireframe:!0}),p=new $(d,u);return p.position.y=23,i.add(p),{group:i,ring:h,crest:p,update:(g,_)=>{p.rotation.y+=g*1.5,p.rotation.x=Math.sin(_*2)*.3,h.scale.setScalar(1+Math.sin(_*4)*.2)}}}clearRoute(){for(;this.routeGroup.children.length>0;){const t=this.routeGroup.children[0];this.routeGroup.remove(t),t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material.dispose())}this.activeCurve=null,this.pulseMesh=null,this.startBeacon=null,this.destBeacon=null,this.isRendering=!1}update(t,e){if(!this.isRendering||!this.activeCurve)return;this.pulseProgress=(this.pulseProgress+t*.45)%1;const n=this.activeCurve.getPointAt(this.pulseProgress);this.pulseMesh&&n&&this.pulseMesh.position.copy(n),this.startBeacon&&this.startBeacon.update(t,e),this.destBeacon&&this.destBeacon.update(t,e)}}const el={type:"change"},Ao={type:"start"},Ql={type:"end"},ha=new Ts,nl=new Pn,Ev=Math.cos(70*bl.DEG2RAD),Me=new T,Ue=2*Math.PI,ae={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},gr=1e-6;class wv extends mv{constructor(t,e=null){super(t,e),this.state=ae.NONE,this.enabled=!0,this.target=new T,this.cursor=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Fi.ROTATE,MIDDLE:Fi.DOLLY,RIGHT:Fi.PAN},this.touches={ONE:Li.ROTATE,TWO:Li.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new T,this._lastQuaternion=new ei,this._lastTargetPosition=new T,this._quat=new ei().setFromUnitVectors(t.up,new T(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new tl,this._sphericalDelta=new tl,this._scale=1,this._panOffset=new T,this._rotateStart=new dt,this._rotateEnd=new dt,this._rotateDelta=new dt,this._panStart=new dt,this._panEnd=new dt,this._panDelta=new dt,this._dollyStart=new dt,this._dollyEnd=new dt,this._dollyDelta=new dt,this._dollyDirection=new T,this._mouse=new dt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Tv.bind(this),this._onPointerDown=Av.bind(this),this._onPointerUp=Rv.bind(this),this._onContextMenu=Ov.bind(this),this._onMouseWheel=Iv.bind(this),this._onKeyDown=Lv.bind(this),this._onTouchStart=Dv.bind(this),this._onTouchMove=Nv.bind(this),this._onMouseDown=Cv.bind(this),this._onMouseMove=Pv.bind(this),this._interceptControlDown=Fv.bind(this),this._interceptControlUp=Uv.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(el),this.update(),this.state=ae.NONE}update(t=null){const e=this.object.position;Me.copy(e).sub(this.target),Me.applyQuaternion(this._quat),this._spherical.setFromVector3(Me),this.autoRotate&&this.state===ae.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Ue:n>Math.PI&&(n-=Ue),i<-Math.PI?i+=Ue:i>Math.PI&&(i-=Ue),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=r!=this._spherical.radius}if(Me.setFromSpherical(this._spherical),Me.applyQuaternion(this._quatInverse),e.copy(this.target).add(Me),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const o=Me.length();r=this._clampDistance(o*this._scale);const c=o-r;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),a=!!c}else if(this.object.isOrthographicCamera){const o=new T(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=c!==this.object.zoom;const l=new T(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),r=Me.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(ha.origin.copy(this.object.position),ha.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ha.direction))<Ev?this.object.lookAt(this.target):(nl.setFromNormalAndCoplanarPoint(this.object.up,this.target),ha.intersectPlane(nl,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>gr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>gr||this._lastTargetPosition.distanceToSquared(this.target)>gr?(this.dispatchEvent(el),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ue/60*this.autoRotateSpeed*t:Ue/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Me.setFromMatrixColumn(e,0),Me.multiplyScalar(-t),this._panOffset.add(Me)}_panUp(t,e){this.screenSpacePanning===!0?Me.setFromMatrixColumn(e,1):(Me.setFromMatrixColumn(e,0),Me.crossVectors(this.object.up,Me)),Me.multiplyScalar(t),this._panOffset.add(Me)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Me.copy(i).sub(this.target);let a=Me.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*a/n.clientHeight,this.object.matrix),this._panUp(2*e*a/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,a=e-n.top,r=n.width,o=n.height;this._mouse.x=i/r*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ue*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ue*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Ue*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Ue*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Ue*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Ue*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,a=Math.sqrt(n*n+i*i);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),a=.5*(t.pageY+n.y);this._rotateEnd.set(i,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ue*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ue*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,a=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(r,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new dt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Av(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function Tv(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Rv(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ql),this.state=ae.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Cv(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Fi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ae.DOLLY;break;case Fi.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ae.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ae.ROTATE}break;case Fi.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ae.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ae.PAN}break;default:this.state=ae.NONE}this.state!==ae.NONE&&this.dispatchEvent(Ao)}function Pv(s){switch(this.state){case ae.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ae.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ae.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Iv(s){this.enabled===!1||this.enableZoom===!1||this.state!==ae.NONE||(s.preventDefault(),this.dispatchEvent(Ao),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Ql))}function Lv(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function Dv(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Li.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ae.TOUCH_ROTATE;break;case Li.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ae.TOUCH_PAN;break;default:this.state=ae.NONE}break;case 2:switch(this.touches.TWO){case Li.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ae.TOUCH_DOLLY_PAN;break;case Li.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ae.TOUCH_DOLLY_ROTATE;break;default:this.state=ae.NONE}break;default:this.state=ae.NONE}this.state!==ae.NONE&&this.dispatchEvent(Ao)}function Nv(s){switch(this._trackPointer(s),this.state){case ae.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ae.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ae.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ae.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ae.NONE}}function Ov(s){this.enabled!==!1&&s.preventDefault()}function Fv(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Uv(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Bv{constructor(t,e,n=null){this.camera=t,this.domElement=e,this.onIntroComplete=n,this.controls=new wv(this.camera,this.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.06,this.controls.minDistance=18,this.controls.maxDistance=450,this.controls.maxPolarAngle=Math.PI/2-.05,this.controls.target.set(0,10,0),this.defaultPosition=new T(120,95,140),this.defaultTarget=new T(0,10,0),this.isCinematicIntro=!1,this.isAmbientHomeOrbit=!0,this.introElapsed=0,this.introDuration=10.5,this.controls.enabled=!1,this.flyAnimation=null,this.setupIntroSpline(),this.camera.position.copy(this.defaultPosition),this.camera.lookAt(this.defaultTarget)}setHomePreview(t){this.isAmbientHomeOrbit=t,t?this.controls.enabled=!1:(this.controls.enabled=!0,(this.camera.position.length()>300||this.camera.position.length()<30)&&(this.camera.position.copy(this.defaultPosition),this.controls.target.copy(this.defaultTarget)))}setupIntroSpline(){const t=[new T(-220,320,380),new T(-140,220,280),new T(-80,120,180),new T(40,45,95),new T(90,75,120),this.defaultPosition.clone()],e=[new T(0,80,0),new T(0,40,0),new T(-20,20,0),new T(45,10,80),new T(0,25,0),this.defaultTarget.clone()];this.introCameraCurve=new xn(t,!1,"catmullrom",.2),this.introTargetCurve=new xn(e,!1,"catmullrom",.2)}playCinematicFlythrough(){this.isCinematicIntro=!0,this.introElapsed=0,this.controls.enabled=!1;const t=this.introCameraCurve.getPointAt(0),e=this.introTargetCurve.getPointAt(0);this.camera.position.copy(t),this.camera.lookAt(e)}skipIntro(){this.isCinematicIntro=!1,this.controls.enabled=!0,this.camera.position.copy(this.defaultPosition),this.controls.target.copy(this.defaultTarget),this.controls.update(),this.onIntroComplete&&this.onIntroComplete()}focusOnFacility(t,e=1.2){this.isCinematicIntro&&this.skipIntro();const n=this.camera.position.clone(),i=this.controls.target.clone(),a=new T(t.x===0?30:Math.sign(t.x)*45,35,t.z===0?45:Math.sign(t.z)*45),r=new T(t.x,(t.y||0)+10,t.z),o=new T().addVectors(r,a);this.flyAnimation={startTime:performance.now(),duration:e*1e3,startPos:n,endPos:o,startTarget:i,endTarget:r}}resetToOverview(t=1){this.focusOnPoint(this.defaultPosition,this.defaultTarget,t)}setTacticalMapView(t=1){this.focusOnPoint(new T(0,240,2),new T(0,0,0),t)}setNavigationView(t=1){this.focusOnPoint(new T(45,55,75),new T(0,5,10),t)}focusOnPoint(t,e,n=1){const i=this.camera.position.clone(),a=this.controls.target.clone();this.flyAnimation={startTime:performance.now(),duration:n*1e3,startPos:i,endPos:t.clone(),startTarget:a,endTarget:e.clone()}}easeInOutCubic(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2}update(t){if(this.isCinematicIntro){this.introElapsed+=t;const e=Math.min(1,this.introElapsed/this.introDuration),n=this.easeInOutCubic(e),i=this.introCameraCurve.getPointAt(n),a=this.introTargetCurve.getPointAt(n);this.camera.position.copy(i),this.camera.lookAt(a),e>=1&&this.skipIntro();return}if(this.isAmbientHomeOrbit){const e=performance.now()*8e-5,n=210;this.camera.position.x=Math.cos(e)*n,this.camera.position.z=Math.sin(e)*n,this.camera.position.y=85+Math.sin(e*2)*10,this.camera.lookAt(0,12,0);return}if(this.flyAnimation){const n=performance.now()-this.flyAnimation.startTime,i=Math.min(1,n/this.flyAnimation.duration),a=this.easeInOutCubic(i);this.camera.position.lerpVectors(this.flyAnimation.startPos,this.flyAnimation.endPos,a),this.controls.target.lerpVectors(this.flyAnimation.startTarget,this.flyAnimation.endTarget,a),i>=1&&(this.flyAnimation=null)}this.controls.enabled&&this.controls.update()}}class zv{constructor(){this.facilities=JSON.parse(JSON.stringify(ws)),this.facilityMap=new Map(this.facilities.map(t=>[t.id,t])),this.viewMode="3D",this.domeMode="TRANSPARENT",this.activeScenario=null,this.selectedFacilityId="command-tower",this.hoveredFacilityId=null,this.userLocation={facilityId:"residential-habitat-alpha",name:"Ares Habitat Sector Alpha",coords:{x:-40,y:0,z:-40},role:"Citizen Beacon (MP-2050)"},this.navigation={startFacilityId:"residential-habitat-alpha",destinationFacilityId:null,activeRoute:null,isNavigating:!1,turnDirections:[]},this.telemetry={sol:428,marsTime:"14:26 MTC",atmosphericPressure:"7.8 mbar",surfaceTemperature:"-58°C",colonyPopulation:"4,150",totalPowerOutput:"52.4 MW",oxygenReserveDays:142,isOfflineDemo:!1},this.currentPage="home",this.currentRouteParams={},this.isFocusedNavigation=!1,this.facilityDetailModalId=null,this.onboardingDismissed=!1;try{this.onboardingDismissed=localStorage.getItem("mars_pulse_onboarded")==="true"}catch{}this.listeners=new Set}subscribe(t){return this.listeners.add(t),()=>this.listeners.delete(t)}notify(t,e){for(const n of this.listeners)n(t,e,this)}setPage(t,e={}){this.currentPage=t,this.currentRouteParams=e,this.notify("PAGE_CHANGED",{page:t,params:e})}setFocusedNavigation(t){this.isFocusedNavigation!==t&&(this.isFocusedNavigation=t,this.notify("FOCUSED_NAV_CHANGED",t))}openFacilityModal(t){this.facilityDetailModalId=t,this.notify("FACILITY_MODAL_OPENED",t)}closeFacilityModal(){this.facilityDetailModalId=null,this.notify("FACILITY_MODAL_CLOSED",null)}dismissOnboarding(){this.onboardingDismissed=!0;try{localStorage.setItem("mars_pulse_onboarded","true")}catch{}this.notify("ONBOARDING_CHANGED",!1)}showOnboarding(){this.onboardingDismissed=!1,this.notify("ONBOARDING_CHANGED",!0)}setViewMode(t){this.viewMode!==t&&(this.viewMode=t,this.notify("VIEW_MODE_CHANGED",t))}toggleViewMode(){return this.viewMode=this.viewMode==="2D"?"3D":"2D",this.notify("VIEW_MODE_CHANGED",this.viewMode),this.viewMode}setDomeMode(t){this.domeMode!==t&&(this.domeMode=t,this.notify("DOME_MODE_CHANGED",t))}getFacility(t){return this.facilityMap.get(t)}getAllFacilities(){return this.facilities}selectFacility(t){this.selectedFacilityId!==t&&(this.selectedFacilityId=t,this.notify("FACILITY_SELECTED",t))}setHoveredFacility(t){this.hoveredFacilityId!==t&&(this.hoveredFacilityId=t,this.notify("FACILITY_HOVERED",t))}updateFacility(t,e){const n=this.facilityMap.get(t);n&&(Object.assign(n,e),this.notify("FACILITY_UPDATED",n))}setScenario(t){this.activeScenario=t,this.notify("SCENARIO_CHANGED",t)}clearScenario(){this.activeScenario=null,this.notify("SCENARIO_CHANGED",null)}setNavigation(t){Object.assign(this.navigation,t),this.notify("NAVIGATION_UPDATED",this.navigation)}clearNavigation(){this.navigation={startFacilityId:this.userLocation.facilityId,destinationFacilityId:null,activeRoute:null,isNavigating:!1,turnDirections:[]},this.notify("NAVIGATION_CLEARED",null)}toggleOfflineDemo(){return this.telemetry.isOfflineDemo=!this.telemetry.isOfflineDemo,this.notify("TELEMETRY_UPDATED",this.telemetry),this.telemetry.isOfflineDemo}resetAll(){this.facilities=JSON.parse(JSON.stringify(ws)),this.facilityMap=new Map(this.facilities.map(t=>[t.id,t])),this.activeScenario=null,this.clearNavigation(),this.notify("COLONY_RESET",null)}}const pt=new zv;function kv(s,t={}){const e=new Eg;e.background=new Ot(527128),e.fog=new xo(1314854,.0016);const n=new uv(16777215,.85);e.add(n);const i=new Xe(48,window.innerWidth/window.innerHeight,.5,2200),a=new bg({powerPreference:"high-performance",antialias:!0,alpha:!1});a.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.setSize(window.innerWidth,window.innerHeight),a.shadowMap.enabled=!0,a.shadowMap.type=cl,a.toneMapping=hl,a.toneMappingExposure=1.2,s.appendChild(a.domElement);const r=gv(e),o=_v(e),c=yv(e),l=Sv(e),h=Mv(e),d=new bv(e),u=new Bv(i,a.domElement,t.onIntroFinished),p=new fv,g=new dt;function _(y){if(pt.viewMode!=="3D")return;g.x=y.clientX/window.innerWidth*2-1,g.y=-(y.clientY/window.innerHeight)*2+1,p.setFromCamera(g,i);const D=p.intersectObjects(l.raycastTargets,!1);if(D.length>0){const R=D[0].object,P=R.userData.facilityId;pt.setHoveredFacility(P),a.domElement.style.cursor="pointer",t.onFacilityHover&&t.onFacilityHover(R.userData.facilityData,y.clientX,y.clientY)}else pt.setHoveredFacility(null),a.domElement.style.cursor="default",t.onFacilityHover&&t.onFacilityHover(null)}function m(y){if(pt.viewMode!=="3D"||u.isCinematicIntro)return;g.x=y.clientX/window.innerWidth*2-1,g.y=-(y.clientY/window.innerHeight)*2+1,p.setFromCamera(g,i);const D=p.intersectObjects(l.raycastTargets,!1);if(D.length>0){const R=D[0].object,P=R.userData.facilityId;pt.selectFacility(P),t.onFacilitySelect&&t.onFacilitySelect(R.userData.facilityData)}}window.addEventListener("pointermove",_,{passive:!0}),window.addEventListener("click",m);function f(){i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight),a.setPixelRatio(Math.min(window.devicePixelRatio,2))}window.addEventListener("resize",f);const M=new pv;function v(){requestAnimationFrame(v);const y=Math.min(.1,M.getDelta()),D=M.getElapsedTime();r.update(y,D),o.update(y),c.update(y,D),h.update(y,D),l.update(y,D,pt),d.update(y,D),u.update(y),a.render(e,i)}return v(),{scene:e,camera:i,renderer:a,cameraController:u,routeRenderer:d,buildings:l,dome:c,dispose:()=>{window.removeEventListener("pointermove",_),window.removeEventListener("click",m),window.removeEventListener("resize",f),a.dispose()}}}class Hv{constructor(t,e={}){this.canvas=t,this.ctx=this.canvas.getContext("2d"),this.callbacks=e,this.camX=0,this.camZ=0,this.scale=3.6,this.minScale=1.2,this.maxScale=14,this.targetCamX=0,this.targetCamZ=0,this.targetScale=3.6,this.isAnimating=!1,this.userLocation={facilityId:"residential-habitat-alpha",name:"Ares Habitat Sector Alpha",x:-40,z:-40,heading:.8},this.isDragging=!1,this.dragStartX=0,this.dragStartY=0,this.camStartX=0,this.camStartZ=0,this.hoveredFacility=null,this.showTraffic=!0,this.animTime=0,this.routePulseOffset=0,this.craters=[{x:-180,z:-170,r:65},{x:190,z:160,r:50},{x:-160,z:180,r:42},{x:170,z:-190,r:55},{x:0,z:-210,r:35}],this.setupCanvas(),this.setupEvents(),this.startRenderLoop()}setupCanvas(){this.resize(),window.addEventListener("resize",()=>this.resize())}resize(){const t=Math.min(window.devicePixelRatio||1,2),e=this.canvas.parentElement,n=e&&e.clientWidth>0?e.clientWidth:window.innerWidth,i=e&&e.clientHeight>0?e.clientHeight:window.innerHeight;n===0||i===0||(this.canvas.width=Math.round(n*t),this.canvas.height=Math.round(i*t),this.width=n,this.height=i,this.ctx.setTransform(1,0,0,1,0,0),this.ctx.scale(t,t))}worldToScreen(t,e){const n=this.width/2+(t-this.camX)*this.scale,i=this.height/2+(e-this.camZ)*this.scale;return{x:n,y:i}}screenToWorld(t,e){const n=(t-this.width/2)/this.scale+this.camX,i=(e-this.height/2)/this.scale+this.camZ;return{x:n,z:i}}setupEvents(){this.canvas.addEventListener("pointerdown",t=>{this.isDragging=!0,this.dragStartX=t.clientX,this.dragStartY=t.clientY,this.camStartX=this.camX,this.camStartZ=this.camZ,this.canvas.style.cursor="grabbing"}),window.addEventListener("pointermove",t=>{if(this.isDragging){const e=t.clientX-this.dragStartX,n=t.clientY-this.dragStartY;this.camX=this.camStartX-e/this.scale,this.camZ=this.camStartZ-n/this.scale,this.targetCamX=this.camX,this.targetCamZ=this.camZ}else{const e=this.canvas.getBoundingClientRect(),n=t.clientX-e.left,i=t.clientY-e.top;let a=null;for(const r of pt.getAllFacilities()){const o=this.worldToScreen(r.coords.x,r.coords.z);if(Math.hypot(n-o.x,i-o.y)<22){a=r;break}}a!==this.hoveredFacility&&(this.hoveredFacility=a,this.canvas.style.cursor=a?"pointer":"default",pt.setHoveredFacility(a?a.id:null),this.callbacks.onHover&&this.callbacks.onHover(a,t.clientX,t.clientY))}}),window.addEventListener("pointerup",()=>{this.isDragging&&(this.isDragging=!1,this.canvas.style.cursor=this.hoveredFacility?"pointer":"default")}),this.canvas.addEventListener("click",t=>{const e=this.canvas.getBoundingClientRect(),n=t.clientX-e.left,i=t.clientY-e.top;for(const r of pt.getAllFacilities()){const o=this.worldToScreen(r.coords.x,r.coords.z);if(Math.hypot(n-o.x,i-o.y)<24){pt.selectFacility(r.id),this.callbacks.onSelect&&this.callbacks.onSelect(r);return}}const a=this.worldToScreen(this.userLocation.x,this.userLocation.z);Math.hypot(n-a.x,i-a.y)<22&&pt.selectFacility(this.userLocation.facilityId)}),this.canvas.addEventListener("wheel",t=>{t.preventDefault();const e=this.canvas.getBoundingClientRect(),n=t.clientX-e.left,i=t.clientY-e.top,a=this.screenToWorld(n,i),r=t.deltaY<0?1.15:.87,o=Math.min(this.maxScale,Math.max(this.minScale,this.scale*r));this.scale=o,this.targetScale=o,this.camX=a.x-(n-this.width/2)/this.scale,this.camZ=a.z-(i-this.height/2)/this.scale,this.targetCamX=this.camX,this.targetCamZ=this.camZ},{passive:!1})}panTo(t,e,n=null){this.targetCamX=t,this.targetCamZ=e,n&&(this.targetScale=n),this.isAnimating=!0}fitBounds(t,e=80){if(!t||t.length===0)return;let n=1/0,i=-1/0,a=1/0,r=-1/0;for(const g of t)g.x<n&&(n=g.x),g.x>i&&(i=g.x),g.z<a&&(a=g.z),g.z>r&&(r=g.z);const o=Math.max(30,i-n),c=Math.max(30,r-a),l=Math.max(200,this.width-e*2),h=Math.max(200,this.height-e*2),d=l/o,u=h/c,p=Math.min(this.maxScale,Math.max(this.minScale,Math.min(d,u)*.85));this.panTo((n+i)/2,(a+r)/2,p)}recenterOnResident(){this.panTo(this.userLocation.x,this.userLocation.z,4.8)}recenterOverview(){this.panTo(0,0,3.4)}zoomIn(){const t=Math.min(this.maxScale,this.scale*1.3);this.targetScale=t,this.scale=t}zoomOut(){const t=Math.max(this.minScale,this.scale*.77);this.targetScale=t,this.scale=t}toggleTraffic(){return this.showTraffic=!this.showTraffic,this.showTraffic}startRenderLoop(){const t=()=>{this.animTime+=.016,this.isAnimating&&(this.camX+=(this.targetCamX-this.camX)*.12,this.camZ+=(this.targetCamZ-this.camZ)*.12,this.scale+=(this.targetScale-this.scale)*.12,Math.hypot(this.targetCamX-this.camX,this.targetCamZ-this.camZ)<.2&&Math.abs(this.targetScale-this.scale)<.05&&(this.camX=this.targetCamX,this.camZ=this.targetCamZ,this.scale=this.targetScale,this.isAnimating=!1)),this.draw(),requestAnimationFrame(t)};t()}draw(){(!this.width||this.width===0||this.canvas.width===0)&&this.resize();const t=this.ctx;t.clearRect(0,0,this.width,this.height),this.drawBackground(t),this.drawDistricts(t),this.drawRoads(t),this.showTraffic&&this.drawTraffic(t),this.drawActiveRoute(t),this.drawResidentBeacon(t),this.drawFacilityPins(t),this.drawScaleBar(t),this.drawMinimap(t)}drawBackground(t){t.fillStyle="#0a0d1d",t.fillRect(0,0,this.width,this.height);const e=25,n=this.screenToWorld(0,0),i=this.screenToWorld(this.width,this.height),a=Math.floor(n.x/e)*e,r=Math.ceil(i.x/e)*e,o=Math.floor(n.z/e)*e,c=Math.ceil(i.z/e)*e;t.lineWidth=1,t.strokeStyle="rgba(66, 232, 245, 0.06)";for(let l=a;l<=r;l+=e){const h=this.worldToScreen(l,n.z),d=this.worldToScreen(l,i.z);t.beginPath(),t.moveTo(h.x,h.y),t.lineTo(d.x,d.y),t.stroke(),this.scale>2.5&&l%50===0&&(t.fillStyle="rgba(66, 232, 245, 0.25)",t.font="9px Rajdhani, monospace",t.fillText(`${l>0?"+":""}${l}m E`,h.x+4,18))}for(let l=o;l<=c;l+=e){const h=this.worldToScreen(n.x,l),d=this.worldToScreen(i.x,l);t.beginPath(),t.moveTo(h.x,h.y),t.lineTo(d.x,d.y),t.stroke(),this.scale>2.5&&l%50===0&&(t.fillStyle="rgba(66, 232, 245, 0.25)",t.font="9px Rajdhani, monospace",t.fillText(`${l>0?"+":""}${l}m N`,12,h.y-4))}for(const l of this.craters){const h=this.worldToScreen(l.x,l.z),d=l.r*this.scale;h.x+d<0||h.x-d>this.width||h.y+d<0||h.y-d>this.height||(t.save(),t.beginPath(),t.arc(h.x,h.y,d,0,Math.PI*2),t.fillStyle="rgba(255, 114, 94, 0.04)",t.fill(),t.lineWidth=1.5,t.strokeStyle="rgba(255, 114, 94, 0.15)",t.setLineDash([4,4]),t.stroke(),t.beginPath(),t.arc(h.x,h.y,d*.6,0,Math.PI*2),t.strokeStyle="rgba(255, 114, 94, 0.08)",t.stroke(),t.restore())}}drawDistricts(t){for(const e of vv){const n=this.worldToScreen(e.x,e.z),i=e.radius*this.scale;t.save(),t.beginPath(),t.arc(n.x,n.y,i,0,Math.PI*2),t.fillStyle=e.color,t.fill(),t.lineWidth=1.2,t.strokeStyle=e.border,t.setLineDash([6,6]),t.stroke(),this.scale>2.2&&(t.font=`600 ${Math.max(10,Math.min(13,11*(this.scale/3.5)))}px Rajdhani, sans-serif`,t.fillStyle=e.border,t.textAlign="center",t.letterSpacing="1px",t.fillText(e.name.toUpperCase(),n.x,n.y-i+14)),t.restore()}}drawRoads(t){const e=Math.max(5,4.2*this.scale);t.save(),t.lineCap="round",t.lineJoin="round";for(const n of Nn){const i=Le[n.from],a=Le[n.to];if(!i||!a)continue;const r=this.worldToScreen(i.x,i.z),o=this.worldToScreen(a.x,a.z);t.beginPath(),t.moveTo(r.x,r.y),t.lineTo(o.x,o.y),t.lineWidth=e+3,t.strokeStyle="rgba(66, 232, 245, 0.22)",t.stroke(),t.beginPath(),t.moveTo(r.x,r.y),t.lineTo(o.x,o.y),t.lineWidth=e,t.strokeStyle="#181e35",t.stroke(),this.scale>2.8&&(t.beginPath(),t.moveTo(r.x,r.y),t.lineTo(o.x,o.y),t.lineWidth=1,t.strokeStyle="rgba(66, 232, 245, 0.25)",t.setLineDash([5,5]),t.stroke(),t.setLineDash([]))}for(const n in Le){const i=Le[n],a=this.worldToScreen(i.x,i.z);t.beginPath(),t.arc(a.x,a.y,e*.65,0,Math.PI*2),t.fillStyle="#1c2440",t.fill(),t.lineWidth=1.2,t.strokeStyle="rgba(66, 232, 245, 0.4)",t.stroke()}if(this.scale>3){t.textAlign="center",t.textBaseline="middle",t.font="600 10px Rajdhani, sans-serif";for(const n of Nn){if(!n.name)continue;const i=Le[n.from],a=Le[n.to];if(!i||!a)continue;const r=this.worldToScreen(i.x,i.z),o=this.worldToScreen(a.x,a.z);if(Math.hypot(o.x-r.x,o.y-r.y)<55)continue;const l=(r.x+o.x)/2,h=(r.y+o.y)/2;let d=Math.atan2(o.y-r.y,o.x-r.x);(d>Math.PI/2||d<-Math.PI/2)&&(d+=Math.PI),t.save(),t.translate(l,h),t.rotate(d),t.fillStyle="rgba(234, 242, 255, 0.65)",t.fillText(n.name.toUpperCase(),0,-e*.7),t.restore()}}t.restore()}drawTraffic(t){const e=[[{x:0,z:-70},{x:75,z:-50},{x:90,z:20},{x:45,z:85},{x:-40,z:75},{x:-85,z:20},{x:-75,z:-55},{x:-30,z:-75}],[{x:-70,z:45},{x:-30,z:20},{x:0,z:0},{x:20,z:50},{x:25,z:110},{x:-20,z:85},{x:-60,z:70}]];t.save();for(let n=0;n<e.length;n++){const i=e[n],a=n===0?.08:.12,r=this.animTime*a%1,o=i.length,c=Math.floor(r*o),l=(c+1)%o,h=r*o-c,d=i[c],u=i[l],p=d.x+(u.x-d.x)*h,g=d.z+(u.z-d.z)*h,_=this.worldToScreen(p,g);t.beginPath(),t.arc(_.x,_.y,4,0,Math.PI*2),t.fillStyle=n===0?"#42E8F5":"#FFBE69",t.shadowColor=n===0?"#42E8F5":"#FFBE69",t.shadowBlur=8,t.fill()}t.restore()}drawActiveRoute(t){const e=pt.navigation;if(!e.isNavigating||!e.activeRoute||!e.activeRoute.waypoints||e.activeRoute.waypoints.length<2)return;const n=e.activeRoute.waypoints,i=e.navigationReason&&e.navigationReason.includes("EMERGENCY"),a=i?"#FF3366":e.navigationReason==="MEDEVAC_PRIORITY"?"#FF725E":"#42E8F5";t.save(),t.lineCap="round",t.lineJoin="round",t.beginPath();const r=this.worldToScreen(n[0].x,n[0].z);t.moveTo(r.x,r.y);for(let h=1;h<n.length;h++){const d=this.worldToScreen(n[h].x,n[h].z);t.lineTo(d.x,d.y)}t.lineWidth=10,t.strokeStyle=i?"rgba(255, 51, 102, 0.35)":"rgba(66, 232, 245, 0.35)",t.stroke(),t.lineWidth=5,t.strokeStyle=a,t.shadowColor=a,t.shadowBlur=12,t.stroke(),this.routePulseOffset=(this.routePulseOffset+.8)%30,t.setLineDash([10,20]),t.lineDashOffset=-this.routePulseOffset,t.lineWidth=3,t.strokeStyle="#FFFFFF",t.stroke();const o=this.worldToScreen(n[0].x,n[0].z);t.setLineDash([]),t.shadowBlur=0,t.beginPath(),t.arc(o.x,o.y,9,0,Math.PI*2),t.fillStyle="#33FF88",t.fill(),t.lineWidth=2,t.strokeStyle="#FFFFFF",t.stroke(),t.fillStyle="#080B18",t.font="bold 9px Orbitron, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("A",o.x,o.y);const c=n[n.length-1],l=this.worldToScreen(c.x,c.z);t.beginPath(),t.arc(l.x,l.y,11,0,Math.PI*2),t.fillStyle=i?"#FF3366":"#42E8F5",t.fill(),t.lineWidth=2,t.strokeStyle="#FFFFFF",t.stroke(),t.fillStyle="#080B18",t.font="bold 10px Orbitron, sans-serif",t.fillText("B",l.x,l.y),t.restore()}drawResidentBeacon(t){const e=this.worldToScreen(this.userLocation.x,this.userLocation.z);t.save();const n=12+(Math.sin(this.animTime*4)*.5+.5)*14,i=Math.max(0,1-(n-12)/14);t.beginPath(),t.arc(e.x,e.y,n,0,Math.PI*2),t.strokeStyle=`rgba(66, 232, 245, ${i})`,t.lineWidth=2,t.stroke(),t.beginPath(),t.arc(e.x,e.y,7,0,Math.PI*2),t.fillStyle="#42E8F5",t.shadowColor="#42E8F5",t.shadowBlur=10,t.fill(),t.beginPath(),t.arc(e.x,e.y,3.5,0,Math.PI*2),t.fillStyle="#FFFFFF",t.fill(),t.shadowBlur=0,t.font="bold 10px Rajdhani, sans-serif",t.textAlign="center",t.fillStyle="#42E8F5",t.fillText("YOU ARE HERE",e.x,e.y+18),t.restore()}drawFacilityPins(t){const e=pt.selectedFacilityId,n=pt.hoveredFacilityId,i={hospital:"#FF725E",oxygen:"#42E8F5",education:"#7446F2",residential:"#FFBE69",food:"#33FF88",water:"#42E8F5",power:"#FFAA00",shelter:"#EAF2FF",spaceport:"#D85DFF",command:"#4B8DFF",research:"#7446F2",community:"#42E8F5",logistics:"#FFBE69"},a={hospital:"+",oxygen:"O₂",education:"🎓",residential:"⌂",food:"🌱",water:"💧",power:"⚡",shelter:"🛡",spaceport:"🚀",command:"★",research:"🔬",community:"👥",logistics:"📦"};for(const r of pt.getAllFacilities()){const o=this.worldToScreen(r.coords.x,r.coords.z),c=r.id===e,l=r.id===n,h=r.status==="OFFLINE",d=r.status==="WARNING"||r.status==="CRITICAL";let u=i[r.category]||"#42E8F5";h?u="#FF3366":d&&(u="#FFAA00");const p=c?15:l?14:12;if(t.save(),c){t.beginPath();const _=p+6+Math.sin(this.animTime*6)*2;t.arc(o.x,o.y,_,0,Math.PI*2),t.strokeStyle="#42E8F5",t.lineWidth=2,t.setLineDash([4,4]),t.stroke(),t.setLineDash([])}t.beginPath(),t.arc(o.x,o.y,p,0,Math.PI*2),t.fillStyle="#0e1329",t.fill(),t.lineWidth=c?2.5:2,t.strokeStyle=u,t.shadowColor=u,t.shadowBlur=c?12:5,t.stroke(),t.shadowBlur=0,t.fillStyle=h?"#FF3366":"#FFFFFF",t.font=h?"bold 13px sans-serif":"10px sans-serif",t.textAlign="center",t.textBaseline="middle";const g=h?"⚠":a[r.category]||"●";if(t.fillText(g,o.x,o.y),this.scale>2||c||l){const _=r.shortName||r.name;t.font=c?"bold 11px Orbitron, sans-serif":"600 10px Rajdhani, sans-serif";const f=t.measureText(_).width,M=14,v=o.y+p+8;t.fillStyle=c?"rgba(8, 11, 24, 0.95)":"rgba(8, 11, 24, 0.8)",t.fillRect(o.x-f/2-5,v-M/2,f+10,M),t.strokeStyle=c?"#42E8F5":"rgba(255, 255, 255, 0.15)",t.lineWidth=1,t.strokeRect(o.x-f/2-5,v-M/2,f+10,M),t.fillStyle=c?"#42E8F5":"#EAF2FF",t.fillText(_,o.x,v)}t.restore()}}drawScaleBar(t){const e=this.scale>6?20:this.scale>3?50:100,n=e*this.scale,i=24,a=this.height-24;t.save(),t.lineWidth=2,t.strokeStyle="#42E8F5",t.beginPath(),t.moveTo(i,a),t.lineTo(i+n,a),t.moveTo(i,a-4),t.lineTo(i,a+4),t.moveTo(i+n,a-4),t.lineTo(i+n,a+4),t.stroke(),t.font="600 10px Rajdhani, monospace",t.fillStyle="#42E8F5",t.textAlign="center",t.fillText(`${e} m`,i+n/2,a-6),t.restore()}drawMinimap(t){const i=this.width-120-20,a=this.height-120-20;t.save(),t.fillStyle="rgba(8, 11, 24, 0.85)",t.fillRect(i,a,120,120),t.strokeStyle="rgba(66, 232, 245, 0.4)",t.lineWidth=1,t.strokeRect(i,a,120,120),t.font="8px Orbitron, sans-serif",t.fillStyle="rgba(66, 232, 245, 0.8)",t.textAlign="left",t.fillText("COLONY OVERVIEW",i+6,a+12);const r=300,o=(u,p)=>({x:i+(u+150)/r*120,y:a+(p+150)/r*120});t.lineWidth=1,t.strokeStyle="rgba(255, 255, 255, 0.15)";for(const u of Nn){const p=Le[u.from],g=Le[u.to];if(!p||!g)continue;const _=o(p.x,p.z),m=o(g.x,g.z);t.beginPath(),t.moveTo(_.x,_.y),t.lineTo(m.x,m.y),t.stroke()}for(const u of pt.getAllFacilities()){const p=o(u.coords.x,u.coords.z);t.beginPath(),t.arc(p.x,p.y,2,0,Math.PI*2),t.fillStyle=u.id===pt.selectedFacilityId?"#42E8F5":"#8E9BB8",t.fill()}const c=this.screenToWorld(0,0),l=this.screenToWorld(this.width,this.height),h=o(c.x,c.z),d=o(l.x,l.z);t.strokeStyle="#42E8F5",t.lineWidth=1.2,t.strokeRect(Math.max(i,h.x),Math.max(a,h.y),Math.min(120,d.x-h.x),Math.min(120,d.y-h.y)),t.restore()}}const jn=[{id:"perseverance-jezero",name:"Mars 2020 Perseverance & Ingenuity",agency:"NASA / JPL-Caltech",target:"Jezero Crater (Delta Remnant)",coordinates:"18.38° N, 77.58° E",elevationMeters:-2560,landingDate:"February 18, 2021",activeStatus:"ACTIVE EXPLORATION",primaryObjective:"Astrobiology investigation of ancient delta sediments, biosignature sample caching, and airborne rotorcraft demonstration.",instruments:["PIXL (X-ray)","SHERLOC (UV Raman)","SuperCam (Laser)","MOXIE (O2 In-situ)","MEDA (Weather)","RIMFAX (GPR)"],pdsArchiveUrl:"https://pds-geosciences.wustl.edu/missions/mars2020/",datasetCitation:"NASA Planetary Data System (PDS) Geosciences Node, Mars 2020 Archive, Release 11."},{id:"curiosity-gale",name:"Mars Science Laboratory Curiosity",agency:"NASA / JPL-Caltech",target:"Gale Crater (Aeolis Mons base)",coordinates:"5.4° S, 137.8° E",elevationMeters:-4450,landingDate:"August 6, 2012",activeStatus:"ACTIVE EXPLORATION",primaryObjective:"Assessment of ancient habitability, organic molecules, and fluvio-lacustrine sedimentary sequences.",instruments:["ChemCam (LIBS)","SAM (Gas Chromatograph)","CheMin (XRD)","RAD (Radiation)","DAN (Neutron Hydrometer)"],pdsArchiveUrl:"https://pds-geosciences.wustl.edu/missions/msl/",datasetCitation:"NASA PDS Geosciences Node, MSL Curiosity Archive Collection, DOIs: 10.17189/1519495."},{id:"insight-elysium",name:"InSight Seismic Lander",agency:"NASA / CNES / DLR",target:"Elysium Planitia",coordinates:"4.5° N, 135.6° E",elevationMeters:-2610,landingDate:"November 26, 2018",activeStatus:"MISSION COMPLETE (2022)",primaryObjective:"Interior structure determination, crustal thickness mapping, and core-mantle boundary seismic tomography.",instruments:["SEIS (Very Broadband Seismometer)","HP3 (Heat Flow Probe)","RISE (Radio Science)"],pdsArchiveUrl:"https://pds-geosciences.wustl.edu/missions/insight/",datasetCitation:"InSight Mars In-situ Seismic Catalog, IPGP/JPL PDS Archive, SEIS Data Set V10."},{id:"viking-1-chryse",name:"Viking 1 Lander (First Mars Landing)",agency:"NASA Langley / JPL",target:"Chryse Planitia (Historic Benchmark)",coordinates:"22.48° N, 312.05° E",elevationMeters:-2690,landingDate:"July 20, 1976",activeStatus:"HISTORIC SITE BENCHMARK",primaryObjective:"First successful operational landing on Mars; biology experiments, atmospheric meteorology, and imaging.",instruments:["Gas Chromatograph Mass Spectrometer","Lander Cameras (Facsimile)","Biology Gas Exchange Package"],pdsArchiveUrl:"https://pds-imaging.jpl.nasa.gov/volumes/viking.html",datasetCitation:"NASA Planetary Data System, Viking Mission Imaging & Atmospheric Archive."},{id:"opportunity-meridiani",name:"Mars Exploration Rover Opportunity",agency:"NASA / JPL-Caltech",target:"Meridiani Planum (Eagle & Endeavour Craters)",coordinates:"1.95° S, 354.47° E",elevationMeters:-1380,landingDate:"January 25, 2004",activeStatus:"HISTORIC SITE (2004-2018)",primaryObjective:'Discovery of hematite spherules ("blueberries") proving long-duration acidic groundwater lakes.',instruments:["Pancam (Stereo Multispectral)","Mini-TES","Mössbauer Spectrometer","APXS (Alpha Particle)"],pdsArchiveUrl:"https://pds-geosciences.wustl.edu/missions/mer/",datasetCitation:"NASA Planetary Data System (PDS), MER Opportunity Final Science Report."}],cs=[{id:"hesperian-basalt",name:"Hesperian Flood Basalt Sheet",type:"Volcanic Lava Plain",ageGa:"3.6 - 3.2 Ga (Hesperian Period)",mineralogy:"Augite Pyroxene, Plagioclase, Titanomagnetite",loadBearingCapacity:"High (Optimal for Heavy Rover & Hab Foundation)",roughnessIndex:"0.18 (Smooth Paved Terrain)",molaElevationDatum:"-2,680 m"},{id:"ares-alluvial-gravel",name:"Ares Vallis Catastrophic Outflow Gravel",type:"Fluvial Mega-flood Deposit",ageGa:"3.7 Ga (Late Noachian / Early Hesperian)",mineralogy:"Siliciclastic Cobbles, Hydrated Phyllosilicates, Smectite Clay",loadBearingCapacity:"Moderate (Requires Geotextile Track Stabilization)",roughnessIndex:"0.52 (Scattered Boulders & Cobbles)",molaElevationDatum:"-2,710 m"},{id:"chryse-permafrost-lens",name:"Chryse Sub-surface Cryosphere Permafrost",type:"Glacio-Lacustrine Ice Lens",ageGa:"Sub-surface Reservoir (Depth: 14 - 38 m)",mineralogy:"H2O Ice Core (88% purity), CO2 Clathrate, Regolith Matrix",loadBearingCapacity:"Sensitive to Thermal Creep (Pressurized Domes Jacketed)",roughnessIndex:"0.22 (Cryoturbated Polygonal Ground)",molaElevationDatum:"-2,660 m"},{id:"aeolian-regolith-dunes",name:"North-Northwest Transverse Aeolian Ridges (TARs)",type:"Active Sand & Dust Dune Field",ageGa:"Amazonian to Modern Martian Season",mineralogy:"Fine-grained Basaltic Sand, Ferric Oxide Nanoparticles",loadBearingCapacity:"Low (Wheel Sinkage Hazard for Light Vehicles)",roughnessIndex:"0.84 (Ripples, Loose Granular Slope)",molaElevationDatum:"-2,640 m"}],ls=[{id:"station-core-drill",name:"Deep Regolith Core Drill Station (Site-01)",coordinates:{x:95,z:-80},purpose:"140-meter continuous borehole extracting cryo-strata for paleoclimate paleobiology analysis.",instrument:"Diamond-Tipped Rotary Percussion Cryo-Drill",sampleOutput:"48 cores logged in Kepler Labs repository"},{id:"station-seismic-array",name:"Chryse Planitia Broadband Seismic Node (SEIS-CP)",coordinates:{x:-85,z:20},purpose:"Detects natural micro-marsquakes, meteorite hypervelocity impacts, and structural dome resonance.",instrument:"Tri-Axial Optical Very-Broadband Seismometer (0.01 - 50 Hz)",sampleOutput:"3 natural quakes detected in last 30 Sols"},{id:"station-atmospheric-mast",name:"Planetary Boundary Layer Weather Mast (PBLM-4)",coordinates:{x:0,z:-38},purpose:"Monitors vertical temperature gradients, dust opacity (Tau), and wind shear across the colony airlock apron.",instrument:"Sonic Anemometer, Thermocouple Stack, Micro-Lidar Backscatter",sampleOutput:"Mean pressure: 7.8 mbar, Tau: 0.42 (Clear atmosphere)"}],Oi=[{id:"hz-crater-slope",name:"Northwest Crater Rim Fault Zone",type:"STEEP_SLOPE",typeLabel:"Steep Regolith Slope (>24°)",center:{x:-60,z:-50},radius:38,severity:4,color:"#FF725E",description:"Unconsolidated talus slope prone to rover slippage and regolith slides. Rover speed restricted to 8 km/h.",affectedEdges:["node_central_west--node_northwest_junction","node_northwest_junction--node_northwest_1"]},{id:"hz-radiation-ridge",name:"Helios East Solar Flux Ridge",type:"RADIATION_CORRIDOR",typeLabel:"Solar Particle Event (SPE) Exposed Ridge",center:{x:105,z:-20},radius:40,severity:5,color:"#FF3366",description:"Elevated basaltic plateau outside secondary magnetic containment shield. Unprotected EVA duration strictly limited.",affectedEdges:["node_central_east--node_east_junction","node_east_junction--node_east_1"]},{id:"hz-dust-devil",name:"Southern Basin Dust Devil Alley",type:"DUST_DEVIL",typeLabel:"Dust Devil Vortex & Electrostatic Alley",center:{x:10,z:95},radius:46,severity:3,color:"#FFBE69",description:"Frequent thermal vortices with fine ferric electrostatic suspension. Optical sensor degradation risk.",affectedEdges:["node_south_junction--node_south_2","node_southwest_junction--node_south_2"]},{id:"hz-sinkhole",name:"Southwest Regolith Cavity",type:"LOOSE_REGOLITH",typeLabel:"Sub-surface Lava Tube Creep Void",center:{x:-50,z:80},radius:32,severity:3,color:"#FF725E",description:"Low-density volcanic ash sub-base. Heavy freight vehicles (> 12 tonnes) must divert to reinforced concrete arterials.",affectedEdges:["node_southwest_junction--node_southwest_1","node_west_1--node_southwest_junction"]}];function il(s,t,e=Oi){const n=s<t?`${s}--${t}`:`${t}--${s}`;let i=0,a=null;for(const r of e)r.affectedEdges&&r.affectedEdges.includes(n)&&r.severity>i&&(i=r.severity,a=r);return{edgeKey:n,hasHazard:i>0,severity:i,hazard:a,weightMultiplier:i===0?1:1+i*.85}}const vr="mars_pulse_colony_cache_v2";class Gv{constructor(){this.cacheInfo=this.loadCacheInfo()}loadCacheInfo(){try{const t=localStorage.getItem(vr);if(t)return JSON.parse(t)}catch(t){console.warn("Could not read offline cache info:",t)}return{isDownloaded:!1,timestamp:null,sizeBytes:0,itemCount:0}}async downloadColonyCache(){const t={version:"2.4.0",timestamp:new Date().toISOString(),facilities:ws,roadGraph:{nodes:Le,edges:Nn},scienceData:{landingSites:jn,geologyUnits:cs,stations:ls},hazards:Oi},e=JSON.stringify(t),n=new Blob([e]).size,i=ws.length+Object.keys(Le).length+Nn.length+jn.length;if("caches"in window)try{await(await caches.open("mars-pulse-runtime-v2")).put(new Request("/api/colony-pack.json"),new Response(e,{headers:{"Content-Type":"application/json"}}))}catch(r){console.warn("CacheStorage not supported or restricted:",r)}const a={isDownloaded:!0,timestamp:new Date().toLocaleString(),sizeBytes:n,sizeFormatted:`${(n/1024).toFixed(1)} KB`,itemCount:i};try{localStorage.setItem(vr,JSON.stringify(a))}catch{}return this.cacheInfo=a,pt.notify("OFFLINE_CACHE_UPDATED",a),a}getCacheStatus(){return this.cacheInfo}clearCache(){try{localStorage.removeItem(vr)}catch{}this.cacheInfo={isDownloaded:!1,timestamp:null,sizeBytes:0,itemCount:0},pt.notify("OFFLINE_CACHE_UPDATED",this.cacheInfo)}}const sl=new Gv;class Vv{constructor(t,e,n){this.container=t,this.colonyState=e,this.router=n,this.render(),this.setupEvents()}render(){const t=this.colonyState.currentPage,e=!!this.colonyState.activeScenario,n=this.colonyState.telemetry.isOfflineDemo,i=sl.getCacheStatus();this.container.innerHTML=`
      <header id="top-nav" class="glass-nav">
        <!-- Logo & Brand -->
        <a href="#/home" class="brand-link" title="Return to MARS PULSE Home">
          <div class="pulse-indicator"></div>
          <div class="brand-text">
            <span class="brand-title">MARS<span>PULSE</span></span>
            <span class="brand-sub">COLONY NAVIGATION</span>
          </div>
        </a>

        <!-- Main Navigation Links (All 6 Pages) -->
        <nav class="nav-links" aria-label="Main Navigation">
          <a href="#/home" class="nav-item ${t==="home"?"active":""}" data-page="home">
            <span class="nav-icon">🪐</span>
            <span class="nav-label">Home</span>
          </a>
          <a href="#/navigate" class="nav-item ${t==="navigate"?"active":""}" data-page="navigate">
            <span class="nav-icon">🧭</span>
            <span class="nav-label">Navigate</span>
          </a>
          <a href="#/science" class="nav-item ${t==="science"?"active":""}" data-page="science">
            <span class="nav-icon">🔬</span>
            <span class="nav-label">Science Map</span>
          </a>
          <a href="#/planner" class="nav-item ${t==="planner"?"active":""}" data-page="planner">
            <span class="nav-icon">🚀</span>
            <span class="nav-label">Mission Planner</span>
          </a>
          <a href="#/facilities" class="nav-item ${t==="facilities"?"active":""}" data-page="facilities">
            <span class="nav-icon">🏢</span>
            <span class="nav-label">Facilities</span>
          </a>
          <a href="#/emergency" class="nav-item ${t==="emergency"?"active":""} ${e?"has-alert":""}" data-page="emergency">
            <span class="nav-icon">🚨</span>
            <span class="nav-label">Emergency</span>
            ${e?'<span class="nav-alert-dot" title="Active Emergency Simulation Running"></span>':""}
          </a>
        </nav>

        <!-- Right Utilities -->
        <div class="nav-utilities">
          <!-- Offline Cache Download Pack Button -->
          <button id="btn-download-cache-pack" class="btn-cache-pill ${i.isDownloaded?"cached":""}" title="Download Colony Offline Data Pack for 100% offline navigation">
            <span class="cache-icon">💾</span>
            <span id="cache-pack-text">${i.isDownloaded?`CACHED (${i.sizeFormatted})`:"DOWNLOAD OFFLINE PACK"}</span>
          </button>

          <!-- Satellite / Offline Mesh Indicator Pill -->
          <button id="btn-nav-offline-pill" class="network-pill ${n?"offline":""}" title="Toggle between Satellite Uplink and Offline Subterranean Mesh">
            <span class="pill-dot">●</span>
            <span id="nav-network-text">${n?"OFFLINE MESH: ACTIVE":"SATELLITE MESH: ONLINE"}</span>
          </button>

          <!-- Help Button -->
          <button id="btn-open-help" class="btn-help-nav" title="How to use MARS PULSE">
            <span class="help-q">?</span>
            <span class="help-text">Guide</span>
          </button>
        </div>
      </header>
    `}setupEvents(){const t=document.getElementById("btn-open-help");t&&t.addEventListener("click",()=>{this.colonyState.showOnboarding()});const e=document.getElementById("btn-nav-offline-pill");e&&e.addEventListener("click",()=>{const i=this.colonyState.toggleOfflineDemo();e.classList.toggle("offline",i);const a=document.getElementById("nav-network-text");a&&(a.textContent=i?"OFFLINE MESH: ACTIVE":"SATELLITE MESH: ONLINE")});const n=document.getElementById("btn-download-cache-pack");n&&n.addEventListener("click",async()=>{const i=document.getElementById("cache-pack-text");i&&(i.textContent="CACHING COLONY...");const a=await sl.downloadColonyCache();i&&(i.textContent=`CACHED (${a.sizeFormatted})`),n.classList.add("cached"),alert(`Colony Offline Pack Saved!
• Facilities: 15
• Road Graph: 38 nodes, 42 edges
• Science Catalog: 5 NASA Landing Sites, 4 Geology Units
• Total Storage: ${a.sizeFormatted}

MARS PULSE can now navigate 100% offline without network connectivity.`)})}update(){this.render(),this.setupEvents()}}class Wv{constructor(t,e,n){this.container=t,this.colonyState=e,this.router=n}render(){if(this.colonyState.onboardingDismissed){this.container.innerHTML="";return}this.container.innerHTML=`
      <div class="modal-backdrop" id="onboarding-backdrop">
        <div class="onboarding-card glass-panel" role="dialog" aria-modal="true" aria-labelledby="onboard-title">
          <div class="onboarding-header">
            <div class="onboard-badge">🚀 FIRST-TIME RESIDENT GUIDE</div>
            <button id="btn-close-onboard" class="modal-close-btn" title="Dismiss Guide">✕</button>
          </div>

          <h2 id="onboard-title" class="onboarding-title">How to Navigate MARS PULSE</h2>
          <p class="onboarding-sub">
            Welcome to the Afternet colony navigation platform. Three simple steps to reach any facility on Mars:
          </p>

          <div class="onboarding-steps">
            <!-- Step 1 -->
            <div class="onboard-step">
              <div class="step-num">1</div>
              <div class="step-body">
                <div class="step-heading">Choose where you are</div>
                <div class="step-desc">
                  Your simulated beacon defaults to <strong>Ares Habitat Alpha</strong>. You can change your starting origin to any colony sector anytime.
                </div>
              </div>
            </div>

            <!-- Step 2 -->
            <div class="onboard-step">
              <div class="step-num">2</div>
              <div class="step-body">
                <div class="step-heading">Search for a destination</div>
                <div class="step-desc">
                  Find hospitals, oxygen hubs, water extraction plants, schools, and greenhouses with instant pathfinding.
                </div>
              </div>
            </div>

            <!-- Step 3 -->
            <div class="onboard-step">
              <div class="step-num">3</div>
              <div class="step-body">
                <div class="step-heading">Follow your route across the colony</div>
                <div class="step-desc">
                  Track turn-by-turn guidance. Seamlessly toggle between the <strong>2D Top-Down Tactical Map</strong> and the living <strong>3D Dome Colony</strong>.
                </div>
              </div>
            </div>
          </div>

          <div class="onboarding-footer">
            <button id="btn-start-exploring" class="btn-primary-glow">
              <span>Start Exploring Colony</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            </button>
          </div>
        </div>
      </div>
    `,this.setupEvents()}setupEvents(){const t=document.getElementById("btn-close-onboard"),e=document.getElementById("btn-start-exploring"),n=document.getElementById("onboarding-backdrop"),i=()=>{this.colonyState.dismissOnboarding(),this.render()};t&&t.addEventListener("click",i),e&&e.addEventListener("click",()=>{i(),this.router.navigate("navigate")}),n&&n.addEventListener("click",a=>{a.target===n&&i()})}}class Xv{constructor(t,e,n){this.container=t,this.colonyState=e,this.router=n}render(){const t=this.colonyState.facilityDetailModalId;if(!t){this.container.innerHTML="";return}const e=this.colonyState.getFacility(t);if(!e){this.container.innerHTML="";return}const n=e.status.toLowerCase(),i=e.health!==void 0?e.health:98;this.container.innerHTML=`
      <div class="modal-backdrop" id="facility-modal-backdrop">
        <div class="facility-modal glass-panel" role="dialog" aria-modal="true" aria-labelledby="modal-fac-name">
          <div class="modal-top">
            <div class="fac-meta-row">
              <span class="status-badge ${n}">${e.status}</span>
              <span class="category-tag">${e.categoryLabel}</span>
            </div>
            <button id="btn-close-fac-modal" class="modal-close-btn" title="Close details">✕</button>
          </div>

          <h2 id="modal-fac-name" class="facility-modal-title">${e.name}</h2>
          <div class="facility-modal-sub">Colony Sector ID: <code>${e.id}</code></div>

          ${e.emergencyAlert?`
            <div class="emergency-alert-banner">
              <span class="alert-icon">⚠</span>
              <span class="alert-text">${e.emergencyAlert}</span>
            </div>
          `:""}

          <!-- Health Integrity Bar -->
          <div class="health-meter-wrap">
            <div class="meter-header">
              <span>OPERATIONAL INTEGRITY</span>
              <span class="meter-val ${i<40?"danger":""}">${i}%</span>
            </div>
            <div class="meter-bar">
              <div class="meter-fill ${i<40?"danger":""}" style="width: ${i}%;"></div>
            </div>
          </div>

          <p class="facility-modal-desc">${e.description}</p>

          <!-- Specs Grid -->
          <div class="specs-grid">
            <div class="spec-card">
              <div class="spec-label">POWER SUPPLY</div>
              <div class="spec-val">${e.powerConsumption||"350 kW"}</div>
            </div>
            <div class="spec-card">
              <div class="spec-label">OXYGEN LINE</div>
              <div class="spec-val">${e.oxygenSupply||"Direct Life-Support Grid"}</div>
            </div>
            <div class="spec-card">
              <div class="spec-label">CREW CAPACITY</div>
              <div class="spec-val">${e.occupancy||"Standard Crew"}</div>
            </div>
            <div class="spec-card">
              <div class="spec-label">EMERGENCY ROLE</div>
              <div class="spec-val">${e.emergencyRole||"Civilian Support"}</div>
            </div>
          </div>

          <!-- Services List -->
          <div class="services-section">
            <div class="section-label">AVAILABLE FACILITY SERVICES</div>
            <div class="services-tags">
              ${e.services&&e.services.length>0?e.services.map(a=>`<span class="service-tag">✓ ${a}</span>`).join(""):'<span class="service-tag">Standard Colony Utilities</span>'}
            </div>
          </div>

          <!-- Actions -->
          <div class="modal-action-row">
            <button id="btn-modal-navigate" class="btn-primary-glow">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
              <span>Navigate Here</span>
            </button>
            <button id="btn-modal-view-map" class="btn-secondary-glass">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="12 8 8 16 12 14 16 16 12 8" fill="currentColor"/></svg>
              <span>View on Map</span>
            </button>
          </div>
        </div>
      </div>
    `,this.setupEvents(e)}setupEvents(t){const e=document.getElementById("btn-close-fac-modal"),n=document.getElementById("facility-modal-backdrop"),i=document.getElementById("btn-modal-navigate"),a=document.getElementById("btn-modal-view-map"),r=()=>{this.colonyState.closeFacilityModal()};e&&e.addEventListener("click",r),n&&n.addEventListener("click",o=>{o.target===n&&r()}),i&&i.addEventListener("click",()=>{r(),this.router.navigate("navigate",{to:t.id})}),a&&a.addEventListener("click",()=>{r(),this.router.navigate("navigate",{focus:t.id})})}}class $v{constructor(t,e,n){this.container=t,this.colonyState=e,this.router=n}render(){const t=!!this.colonyState.activeScenario,e=this.colonyState.activeScenario,n=this.colonyState.telemetry;this.container.innerHTML=`
      <section class="home-page-layout">
        <!-- Center Hero Card -->
        <div class="hero-container">
          <div class="hero-card glass-panel">
            <div class="hero-badge">
              <span class="badge-dot">●</span>
              <span>AFTERNET MISSION SOL ${n.sol} • MARS REBUILD</span>
            </div>

            <h1 class="hero-heading">Your next destination is just a route away.</h1>
            <p class="hero-lead">
              Evacuated from Earth in 2050, over 4,000 colonists rely on MARS PULSE for intelligent 
              3D colony navigation, life-support grid routing, and emergency lifeline navigation across the Martian frontier.
            </p>

            <!-- Primary Action Buttons -->
            <div class="hero-actions">
              <a href="#/navigate" class="btn-primary-hero" id="btn-home-explore">
                <span class="btn-icon">🧭</span>
                <span class="btn-text">Explore Colony</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>

              <a href="#/facilities" class="btn-secondary-hero" id="btn-home-facilities">
                <span class="btn-icon">🏢</span>
                <span class="btn-text">Find a Facility</span>
              </a>
            </div>

            <!-- Active Emergency Notification Area (Visible ONLY when an alert is active) -->
            ${t?`
              <div class="hero-emergency-banner" id="hero-emergency-alert">
                <div class="emergency-icon-pulse">🚨</div>
                <div class="emergency-text-wrap">
                  <div class="emergency-title">ACTIVE COLONY ALERT: ${e.title||e.shortTitle||e.name}</div>
                  <div class="emergency-desc">${e.description}</div>
                </div>
                <a href="#/emergency" class="btn-alert-link">
                  <span>Review Incident</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
                </a>
              </div>
            `:""}

            <!-- Compact Colony Status Summary -->
            <div class="hero-telemetry-strip">
              <div class="telemetry-box">
                <span class="t-label">SOL</span>
                <span class="t-val">${n.sol}</span>
              </div>
              <div class="telemetry-box">
                <span class="t-label">MARS TIME</span>
                <span class="t-val">${n.marsTime}</span>
              </div>
              <div class="telemetry-box">
                <span class="t-label">POPULATION</span>
                <span class="t-val">${n.colonyPopulation}</span>
              </div>
              <div class="telemetry-box">
                <span class="t-label">O2 GRID</span>
                <span class="t-val status-green">NOMINAL</span>
              </div>
              <div class="telemetry-box">
                <span class="t-label">POWER OUTPUT</span>
                <span class="t-val">${n.totalPowerOutput}</span>
              </div>
            </div>
          </div>

          <!-- Feature Pillars -->
          <div class="feature-pillars">
            <div class="pillar-card glass-panel">
              <div class="pillar-icon">🗺️</div>
              <h3>100% Offline Colony Graph</h3>
              <p>Fully client-side road network and A* pathfinding. Guaranteed navigation during satellite loss.</p>
            </div>
            <div class="pillar-card glass-panel">
              <div class="pillar-icon">🔮</div>
              <h3>Living 3D Dome Colony</h3>
              <p>Interactive procedural biodome, 15 distinctive facilities, flying skimmers, and road corridors.</p>
            </div>
            <div class="pillar-card glass-panel">
              <div class="pillar-icon">🚨</div>
              <h3>Emergency Intelligence</h3>
              <p>Automated failover rerouting during life-support breaches, trauma medevac, and power grid scrams.</p>
            </div>
          </div>
        </div>
      </section>
    `}setupEvents(){}}const ao=new Map;for(const s of Nn){const t=`${s.from}--${s.to}`,e=`${s.to}--${s.from}`;ao.set(t,s.name),ao.set(e,s.name)}function _r(s,t){const e=`${s}--${t}`;return ao.get(e)||"Colony Arterial Road"}function Yv(s,t,e){const n=t.x-s.x,i=t.z-s.z,a=e.x-t.x,r=e.z-t.z,o=n*r-i*a,c=n*a+i*r;return Math.atan2(o,c)*180/Math.PI}function qv(s){return Math.abs(s)<22?{type:"straight",label:"Continue straight",icon:"straight"}:s>0?s<55?{type:"slight-right",label:"Bear slightly right",icon:"slight-right"}:s<=125?{type:"turn-right",label:"Turn right",icon:"turn-right"}:{type:"sharp-right",label:"Make a sharp right turn",icon:"sharp-right"}:s>-55?{type:"slight-left",label:"Bear slightly left",icon:"slight-left"}:s>=-125?{type:"turn-left",label:"Turn left",icon:"turn-left"}:{type:"sharp-left",label:"Make a sharp left turn",icon:"sharp-left"}}function al(s,t=null,e=null){if(!s||s.length<2)return[];const n=s.map(p=>Le[p]||{id:p,name:p,x:0,y:.2,z:0}),i=[],a=[];let r=0;for(let p=0;p<n.length-1;p++){const g=Math.round(Ii(n[p],n[p+1])*3.5);a.push(g),r+=g}let o=r;const c=_r(s[0],s[1]),l=t?t.name:n[0].name,h=a[0];i.push({index:0,maneuver:"depart",icon:"depart",actionText:`Depart from ${l}`,streetName:c,targetName:n[1].name,distanceMeters:h,distanceFormatted:`${h} m`,cumulativeRemainingMeters:o,remainingFormatted:`${o} m`,displayPrimary:`Head towards ${n[1].name}`,displaySecondary:`Follow ${c} for ${h} m`,voicePrompt:`Depart from ${l}. Continue on ${c} for ${h} metres towards ${n[1].name}.`,waypoint:n[0],nextWaypoint:n[1]}),o-=h;for(let p=1;p<n.length-1;p++){const g=n[p-1],_=n[p],m=n[p+1],f=Yv(g,_,m),M=qv(f),v=_r(s[p],s[p+1]),y=a[p],D=n[p+1].name;let R=M.label,P="";M.type==="straight"?(R=`Continue straight onto ${v}`,P=`Continue straight on ${v} for ${y} metres towards ${D}.`):(R=`${M.label} onto ${v}`,P=`${M.label} onto ${v}, then continue for ${y} metres.`),i.push({index:p,maneuver:M.type,icon:M.icon,actionText:R,streetName:v,targetName:D,turnAngleDeg:Math.round(f),distanceMeters:y,distanceFormatted:`${y} m`,cumulativeRemainingMeters:o,remainingFormatted:`${o} m`,displayPrimary:R,displaySecondary:`In ${y} m • Towards ${D}`,voicePrompt:P,waypoint:_,nextWaypoint:m}),o-=y}const d=n[n.length-1],u=e?e.name:d.name;return i.push({index:n.length-1,maneuver:"arrive",icon:"arrive",actionText:`Arrive at ${u}`,streetName:_r(s[s.length-2],s[s.length-1]),targetName:u,distanceMeters:0,distanceFormatted:"0 m",cumulativeRemainingMeters:0,remainingFormatted:"0 m",displayPrimary:`Arrive at ${u}`,displaySecondary:"Destination reached on the right",voicePrompt:`You have arrived at your destination: ${u}.`,waypoint:d,nextWaypoint:null}),i}function yr(s,t=32){switch(s){case"straight":return`<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${2.4}" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>`;case"turn-right":return`<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${2.4}" stroke-linecap="round" stroke-linejoin="round"><path d="M6 19v-6a4 4 0 0 1 4-4h9"/><polyline points="15 5 19 9 15 13"/></svg>`;case"turn-left":return`<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${2.4}" stroke-linecap="round" stroke-linejoin="round"><path d="M18 19v-6a4 4 0 0 0-4-4H5"/><polyline points="9 5 5 9 9 13"/></svg>`;case"slight-right":return`<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${2.4}" stroke-linecap="round" stroke-linejoin="round"><path d="M7 19l6-9h6"/><polyline points="15 6 19 10 15 14"/></svg>`;case"slight-left":return`<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${2.4}" stroke-linecap="round" stroke-linejoin="round"><path d="M17 19l-6-9H5"/><polyline points="9 6 5 10 9 14"/></svg>`;case"sharp-right":return`<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${2.4}" stroke-linecap="round" stroke-linejoin="round"><path d="M6 19v-9a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v4"/><polyline points="11 10 15 14 19 10"/></svg>`;case"sharp-left":return`<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${2.4}" stroke-linecap="round" stroke-linejoin="round"><path d="M18 19v-9a3 3 0 0 0-3-3h-3a3 3 0 0 0-3 3v4"/><polyline points="13 10 9 14 5 10"/></svg>`;case"arrive":return`<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${2.4}" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3" fill="currentColor"/><line x1="12" y1="3" x2="12" y2="7"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`;case"depart":default:return`<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${2.4}" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>`}}class jv{constructor(){this.isSupported=typeof window<"u"&&"speechSynthesis"in window,this.isMuted=!1,this.isPaused=!1,this.rate=1,this.pitch=1.05,this.selectedVoice=null,this.availableVoices=[],this.lastSpokenText=null,this.currentUtterance=null,this.hasUserInteracted=!1,this.isSupported&&(this.initVoices(),window.speechSynthesis.onvoiceschanged!==void 0&&(window.speechSynthesis.onvoiceschanged=()=>this.initVoices()))}initVoices(){if(this.isSupported)try{this.availableVoices=window.speechSynthesis.getVoices()||[];const t=this.availableVoices.find(e=>e.lang.startsWith("en")&&(e.name.includes("Natural")||e.name.includes("Google")||e.name.includes("Samantha")))||this.availableVoices.find(e=>e.lang.startsWith("en"))||this.availableVoices[0];t&&!this.selectedVoice&&(this.selectedVoice=t)}catch(t){console.warn("Voice initialization warning:",t)}}getVoices(){return this.availableVoices.length===0&&this.initVoices(),this.availableVoices}setVoice(t){const e=this.availableVoices.find(n=>n.voiceURI===t);e&&(this.selectedVoice=e)}speak(t,e=!1){if(!(!t||!this.isSupported)&&!(this.isMuted||this.isPaused)&&!(!e&&this.lastSpokenText===t))try{window.speechSynthesis.cancel();const n=new SpeechSynthesisUtterance(t);n.rate=this.rate,n.pitch=this.pitch,this.selectedVoice&&(n.voice=this.selectedVoice),n.onend=()=>{this.currentUtterance=null},n.onerror=i=>{i.error!=="interrupted"&&i.error!=="canceled"&&console.warn("Voice speech notice:",i.error),this.currentUtterance=null},this.currentUtterance=n,this.lastSpokenText=t,this.hasUserInteracted=!0,window.speechSynthesis.speak(n)}catch(n){console.warn("Speech synthesis call failed:",n)}}repeatLastInstruction(){this.lastSpokenText&&this.speak(this.lastSpokenText,!0)}toggleMute(){return this.isMuted=!this.isMuted,this.isMuted&&this.isSupported&&window.speechSynthesis.cancel(),this.isMuted}setMuted(t){this.isMuted=!!t,this.isMuted&&this.isSupported&&window.speechSynthesis.cancel()}pause(){this.isPaused=!0,this.isSupported&&window.speechSynthesis.cancel()}resume(){this.isPaused=!1}cancel(){this.lastSpokenText=null,this.currentUtterance=null,this.isSupported&&window.speechSynthesis.cancel()}announceReroute(t="Road blockage detected"){const e=`Rerouting. ${t}. New trajectory calculated.`;this.speak(e,!0)}announceArrival(t){const e=`You have arrived at your destination: ${t}. Navigation complete.`;this.speak(e,!0)}}const Ce=new jv;class Zv{constructor(){this.isActive=!1,this.isPaused=!1,this.isAutoAdvancing=!1,this.autoTimer=null,this.route=null,this.startFacility=null,this.destFacility=null,this.instructions=[],this.currentStepIndex=0,this.simulatedSpeedKmH=28,this.subscribers=new Set}subscribe(t){return this.subscribers.add(t),()=>this.subscribers.delete(t)}notify(t,e){for(const n of this.subscribers)try{n(t,e,this)}catch(i){console.warn("Nav session subscriber error:",i)}}start(t,e,n,i=!0){if(this.stop(),!t||!t.path||t.path.length<2)return console.warn("Cannot start navigation: route path has fewer than 2 nodes."),!1;if(this.route=t,this.startFacility=e,this.destFacility=n,this.instructions=al(t.path,e,n),this.currentStepIndex=0,this.isActive=!0,this.isPaused=!1,this.instructions.length>0){const a=this.instructions[0].waypoint;pt.userLocation.coords={x:a.x,y:a.y||.2,z:a.z},pt.userLocation.name=e?e.name:a.name}return this.instructions.length>0&&Ce.speak(this.instructions[0].voicePrompt,!0),this.notify("NAV_STARTED",{instructions:this.instructions,currentStep:this.instructions[0]}),i&&this.startAutoAdvance(),!0}getCurrentStep(){return this.instructions[this.currentStepIndex]||null}getTotalSteps(){return this.instructions.length}getRemainingDistance(){const t=this.getCurrentStep();return t?t.cumulativeRemainingMeters:0}getRemainingMinutes(){return(this.getRemainingDistance()/60).toFixed(1)}nextStep(){if(!this.isActive||this.currentStepIndex>=this.instructions.length-1)return;this.currentStepIndex++;const t=this.getCurrentStep();t&&t.waypoint&&(pt.userLocation.coords={x:t.waypoint.x,y:t.waypoint.y||.2,z:t.waypoint.z}),t&&(t.maneuver==="arrive"?(Ce.announceArrival(this.destFacility?this.destFacility.name:t.targetName),this.stopAutoAdvance(),this.notify("NAV_ARRIVED",t)):Ce.speak(t.voicePrompt)),this.notify("STEP_CHANGED",{stepIndex:this.currentStepIndex,step:t})}prevStep(){if(!this.isActive||this.currentStepIndex<=0)return;this.currentStepIndex--;const t=this.getCurrentStep();t&&t.waypoint&&(pt.userLocation.coords={x:t.waypoint.x,y:t.waypoint.y||.2,z:t.waypoint.z}),t&&Ce.speak(t.voicePrompt,!0),this.notify("STEP_CHANGED",{stepIndex:this.currentStepIndex,step:t})}jumpToStep(t){if(!this.isActive||t<0||t>=this.instructions.length)return;this.currentStepIndex=t;const e=this.getCurrentStep();e&&e.waypoint&&(pt.userLocation.coords={x:e.waypoint.x,y:e.waypoint.y||.2,z:e.waypoint.z}),e&&Ce.speak(e.voicePrompt,!0),this.notify("STEP_CHANGED",{stepIndex:this.currentStepIndex,step:e})}repeatCurrentInstruction(){const t=this.getCurrentStep();t&&Ce.speak(t.voicePrompt,!0)}togglePause(){return this.isPaused?this.resume():this.pause(),this.isPaused}pause(){this.isPaused=!0,this.stopAutoAdvance(),Ce.pause(),this.notify("NAV_PAUSED",{stepIndex:this.currentStepIndex})}resume(){this.isPaused=!1,Ce.resume(),this.repeatCurrentInstruction(),this.startAutoAdvance(),this.notify("NAV_RESUMED",{stepIndex:this.currentStepIndex})}toggleAutoAdvance(){return this.isAutoAdvancing?this.stopAutoAdvance():this.startAutoAdvance(),this.isAutoAdvancing}startAutoAdvance(t=3800){this.stopAutoAdvance(),this.isAutoAdvancing=!0,this.autoTimer=setInterval(()=>{!this.isActive||this.isPaused||(this.currentStepIndex<this.instructions.length-1?this.nextStep():this.stopAutoAdvance())},t),this.notify("AUTO_ADVANCE_CHANGED",!0)}stopAutoAdvance(){this.autoTimer&&(clearInterval(this.autoTimer),this.autoTimer=null),this.isAutoAdvancing=!1,this.notify("AUTO_ADVANCE_CHANGED",!1)}updateReroute(t,e="Road blockage detected"){if(!this.isActive||!t||!t.path)return;this.route=t;const n=this.instructions.length;this.instructions=al(t.path,this.startFacility,this.destFacility),this.currentStepIndex=0,Ce.announceReroute(e),this.notify("NAV_REROUTED",{instructions:this.instructions,currentStep:this.instructions[0],oldStepCount:n})}stop(){this.stopAutoAdvance(),Ce.cancel(),this.isActive=!1,this.isPaused=!1,this.currentStepIndex=0,this.instructions=[],this.notify("NAV_ENDED",null)}}const re=new Zv;class Kv{constructor(t,e,n={}){this.container=t,this.colonyState=e,this.callbacks=n,this.showRouteDrawer=!1,this.showVoiceSettings=!1,this.unsubscribeSession=re.subscribe((i,a)=>{this.render(),(i==="STEP_CHANGED"||i==="NAV_STARTED")&&this.callbacks.onStepChanged&&a.step&&a.step.waypoint&&this.callbacks.onStepChanged(a.step.waypoint)})}destroy(){this.unsubscribeSession&&this.unsubscribeSession()}render(){if(!re.isActive){this.container.innerHTML="";return}const t=re.getCurrentStep(),e=re.getTotalSteps(),n=re.currentStepIndex,i=re.isPaused;re.isAutoAdvancing;const a=Ce.isMuted,r=re.getRemainingDistance(),o=re.getRemainingMinutes(),c=t&&t.maneuver==="arrive",l=Ce.getVoices(),h=Ce.selectedVoice?Ce.selectedVoice.voiceURI:"";this.container.innerHTML=`
      <div class="live-nav-fullscreen-overlay">
        <!-- 1. TOP TURN INSTRUCTION CARD (Google Maps Style) -->
        <div class="live-turn-card glass-panel ${c?"arrival-glow":""}">
          <div class="turn-icon-box ${t?t.maneuver:"straight"}">
            ${yr(t?t.icon:"straight",36)}
          </div>

          <div class="turn-instruction-content">
            <div class="turn-distance-badge">
              ${c?"DESTINATION REACHED":`In ${t?t.distanceFormatted:"0 m"}`}
            </div>
            <div class="turn-primary-text">
              ${t?t.displayPrimary:"Proceed along colony road"}
            </div>
            <div class="turn-secondary-text">
              ${t?t.displaySecondary:""}
            </div>
          </div>

          <div class="top-quick-actions">
            <!-- Repeat Audio Button -->
            <button id="btn-live-repeat-voice" class="live-round-btn" title="Repeat spoken instruction (Audio)">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M1 4v6h6"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
            </button>
            <!-- Mute / Unmute Button -->
            <button id="btn-live-mute-voice" class="live-round-btn ${a?"muted":""}" title="${a?"Unmute voice guidance":"Mute voice guidance"}">
              ${a?`
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
              `:`
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
              `}
            </button>
          </div>
        </div>

        <!-- 2. ROUTE OVERVIEW DRAWER (Slide-Up, Toggleable) -->
        ${this.showRouteDrawer?`
          <div class="live-route-steps-drawer glass-panel">
            <div class="drawer-header">
              <span class="drawer-title">📋 FULL ROUTE MANEUVERS (${e} STEPS)</span>
              <button id="btn-close-route-drawer" class="drawer-close-btn">✕</button>
            </div>
            <div class="drawer-steps-list">
              ${re.instructions.map((d,u)=>`
                <div class="drawer-step-row ${u===n?"active":""}" data-index="${u}">
                  <span class="row-step-icon">${yr(d.icon,20)}</span>
                  <div class="row-step-text">
                    <div class="row-step-primary">${d.displayPrimary}</div>
                    <div class="row-step-sub">${d.displaySecondary}</div>
                  </div>
                  <span class="row-step-dist">${d.distanceFormatted}</span>
                </div>
              `).join("")}
            </div>
          </div>
        `:""}

        <!-- 3. VOICE SETTINGS MODAL (Optional dropdown) -->
        ${this.showVoiceSettings?`
          <div class="voice-settings-popup glass-panel">
            <div class="popup-header">
              <span>🎙️ Voice Synthesizer Settings</span>
              <button id="btn-close-voice-settings" class="drawer-close-btn">✕</button>
            </div>
            <div class="popup-body">
              <label class="setting-label">VOICE ENGINE / LANGUAGE</label>
              <select id="select-voice-uri" class="voice-select-field">
                ${l.map(d=>`
                  <option value="${d.voiceURI}" ${d.voiceURI===h?"selected":""}>
                    ${d.name} (${d.lang})
                  </option>
                `).join("")}
              </select>
              <p class="voice-note">Audio powered by browser SpeechSynthesis API. Ensure your device volume is turned up.</p>
            </div>
          </div>
        `:""}

        <!-- 4. BOTTOM NAVIGATION STATUS & CONTROL BAR -->
        <div class="live-nav-bottom-bar glass-panel">
          <!-- Left: Trip Metrics -->
          <div class="nav-metrics-group">
            <div class="trip-time-box">
              <span class="trip-time-val green">${o}</span>
              <span class="trip-time-unit">MIN</span>
            </div>
            <div class="trip-distance-box">
              <span class="trip-dist-val cyan">${r} m</span>
              <span class="trip-speed-val">@ ${re.simulatedSpeedKmH} km/h (Rover)</span>
            </div>
          </div>

          <!-- Center: Step & Simulation Navigation Controls -->
          <div class="nav-controls-center">
            <button id="btn-nav-prev-step" class="nav-ctrl-btn" title="Previous Maneuver" ${n===0?"disabled":""}>
              ◀
            </button>
            <button id="btn-nav-toggle-pause" class="nav-ctrl-btn play-pause-btn ${i?"paused":""}" title="${i?"Resume Navigation":"Pause Navigation"}">
              ${i?"▶ Resume":"⏸ Pause"}
            </button>
            <button id="btn-nav-next-step" class="nav-ctrl-btn" title="Next Maneuver" ${n>=e-1?"disabled":""}>
              ▶
            </button>
            <button id="btn-nav-toggle-drawer" class="nav-ctrl-btn route-list-btn" title="Show all turns">
              📋 Turns (${n+1}/${e})
            </button>
            <button id="btn-open-voice-settings" class="nav-ctrl-btn voice-gear-btn" title="Voice & Language Settings">
              ⚙️ Voice
            </button>
          </div>

          <!-- Right: Exit Live Navigation -->
          <div class="nav-controls-right">
            <button id="btn-end-navigation" class="btn-end-nav-pill" title="End Live Navigation Guidance">
              <span class="end-icon">✕</span>
              <span>End Navigation</span>
            </button>
          </div>
        </div>
      </div>
    `,this.setupEvents()}setupEvents(){const t=document.getElementById("btn-live-repeat-voice");t&&t.addEventListener("click",()=>{re.repeatCurrentInstruction()});const e=document.getElementById("btn-live-mute-voice");e&&e.addEventListener("click",()=>{Ce.toggleMute(),this.render()});const n=document.getElementById("btn-nav-prev-step");n&&n.addEventListener("click",()=>{re.prevStep()});const i=document.getElementById("btn-nav-next-step");i&&i.addEventListener("click",()=>{re.nextStep()});const a=document.getElementById("btn-nav-toggle-pause");a&&a.addEventListener("click",()=>{re.togglePause(),this.render()});const r=document.getElementById("btn-nav-toggle-drawer"),o=document.getElementById("btn-close-route-drawer");r&&r.addEventListener("click",()=>{this.showRouteDrawer=!this.showRouteDrawer,this.render()}),o&&o.addEventListener("click",()=>{this.showRouteDrawer=!1,this.render()}),document.querySelectorAll(".drawer-step-row").forEach(u=>{u.addEventListener("click",()=>{const p=parseInt(u.dataset.index,10);re.jumpToStep(p),this.showRouteDrawer=!1,this.render()})});const c=document.getElementById("btn-open-voice-settings"),l=document.getElementById("btn-close-voice-settings"),h=document.getElementById("select-voice-uri");c&&c.addEventListener("click",()=>{this.showVoiceSettings=!this.showVoiceSettings,this.render()}),l&&l.addEventListener("click",()=>{this.showVoiceSettings=!1,this.render()}),h&&h.addEventListener("change",u=>{Ce.setVoice(u.target.value),Ce.speak("Voice navigation configured for Martian surface transit.",!0)});const d=document.getElementById("btn-end-navigation");d&&d.addEventListener("click",()=>{re.stop(),this.callbacks.onEndNavigation&&this.callbacks.onEndNavigation()})}}class Jv{constructor(t,e,n,i={}){this.container=t,this.colonyState=e,this.router=n,this.callbacks=i,this.searchQuery="",this.selectedOriginId=this.colonyState.navigation.startFacilityId||this.colonyState.userLocation.facilityId,this.selectedDestinationId=this.colonyState.navigation.destinationFacilityId||null,this.selectedProfile="SHORTEST",this.multiProfileData=null,this.isRoadBlockedSimulated=!1,this.blockedEdgeNotice=null,this.liveNavHud=null}render(){const t=this.colonyState.getAllFacilities(),e=this.colonyState.navigation,n=e.isNavigating&&e.activeRoute,i=re.isActive,a=this.colonyState.viewMode,r=this.colonyState.domeMode,o=this.colonyState.getFacility(this.selectedOriginId)||this.colonyState.getFacility("residential-habitat-alpha"),c=this.selectedDestinationId?this.colonyState.getFacility(this.selectedDestinationId):null,l=t.filter(h=>{if(h.id===this.selectedOriginId)return!1;if(!this.searchQuery)return!0;const d=this.searchQuery.toLowerCase();return h.name.toLowerCase().includes(d)||h.categoryLabel.toLowerCase().includes(d)||h.synonyms&&h.synonyms.some(u=>u.toLowerCase().includes(d))});if(this.container.innerHTML=`
      <div class="navigate-page-overlay ${i?"live-nav-active":""}">
        <!-- 1. TOP VIEW MODE & DOME CONTROLS BAR (Hidden during distraction-free live navigation on mobile, accessible on desktop) -->
        <div class="map-view-bar glass-panel ${i?"live-mode-compact":""}">
          <div class="mode-toggles">
            <button id="btn-toggle-3d" class="toggle-pill ${a==="3D"?"active":""}" title="Switch to 3D Dome Colony">
              <span>🔮 3D DOME</span>
            </button>
            <button id="btn-toggle-2d" class="toggle-pill ${a==="2D"?"active":""}" title="Switch to 2D Top-Down Navigation Map">
              <span>🗺️ 2D MAP</span>
            </button>
          </div>

          <!-- Dome Protective Shell Mode Selector (Visible in 3D Mode) -->
          <div id="dome-controls" class="dome-mode-group" style="${a==="3D"?"display: flex;":"display: none;"}">
            <span class="group-label">SHIELD:</span>
            <button id="btn-dome-glass" class="dome-btn ${r==="TRANSPARENT"?"active":""}" data-mode="TRANSPARENT">GLASS</button>
            <button id="btn-dome-holo" class="dome-btn ${r==="HOLOGRAPHIC"?"active":""}" data-mode="HOLOGRAPHIC">HOLO</button>
            <button id="btn-dome-open" class="dome-btn ${r==="OPEN"?"active":""}" data-mode="OPEN">OPEN</button>
          </div>

          <button id="btn-play-flythrough" class="btn-flythrough-pill" title="Play Cinematic 3D Colony Flythrough">
            🎬 FLYTHROUGH
          </button>
        </div>

        <!-- 2. FLOATING GOOGLE MAPS CONTROLS (Right side) -->
        <div class="floating-map-controls ${i?"live-mode-offset":""}">
          <div class="gmaps-ctrl-group">
            <button id="btn-map-zoom-in" class="ctrl-btn" title="Zoom In (+)">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            </button>
            <button id="btn-map-zoom-out" class="ctrl-btn" title="Zoom Out (−)">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="5" y1="12" x2="19" y2="12"/></svg>
            </button>
          </div>

          <div class="gmaps-ctrl-group">
            <button id="btn-map-recenter-user" class="ctrl-btn" title="Recenter on Rover Beacon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="3" fill="currentColor"/><line x1="12" y1="1" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="23"/><line x1="1" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="23" y2="12"/></svg>
            </button>
            <button id="btn-map-overview" class="ctrl-btn" title="Colony Overview">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="12 8 8 16 12 14 16 16 12 8" fill="currentColor"/></svg>
            </button>
            <button id="btn-map-traffic" class="ctrl-btn active" title="Toggle Skyways & Ground Traffic Lanes">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 18H3c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v3"/><circle cx="7" cy="18" r="2"/><path d="M15 18H9"/><circle cx="17" cy="18" r="2"/><path d="M19 18h2c.6 0 1-.4 1-1v-4l-3-4H9"/></svg>
            </button>
          </div>
        </div>

        <!-- 3. ROUTE PLANNING PANEL (Left Floating Side Panel, Hidden during Live Navigation) -->
        ${i?"":`
          <aside class="route-planning-card glass-panel" id="route-planning-panel">
            <div class="planner-header">
              <div class="planner-title">
                <span class="icon-pulse">🧭</span>
                <span>Smart Mars Navigation</span>
              </div>
              ${n?`
                <button id="btn-clear-active-route" class="btn-clear-subtle" title="Clear Route">✕ Clear</button>
              `:""}
            </div>

            <!-- Origin Input -->
            <div class="location-input-group">
              <label class="input-label">STARTING LOCATION</label>
              <div class="input-wrapper">
                <span class="input-pin-icon green">●</span>
                <select id="select-origin" class="select-location">
                  ${t.map(h=>`
                    <option value="${h.id}" ${h.id===this.selectedOriginId?"selected":""}>
                      ${h.name} ${h.id===this.colonyState.userLocation.facilityId?"(My Location)":""}
                    </option>
                  `).join("")}
                </select>
              </div>
            </div>

            <!-- Destination Input -->
            <div class="location-input-group">
              <label class="input-label">DESTINATION</label>
              <div class="input-wrapper">
                <span class="input-pin-icon red">▲</span>
                <input 
                  type="text" 
                  id="input-destination-search" 
                  class="search-input-field" 
                  placeholder="${c?c.name:"Search hospital, oxygen, greenhouse..."}"
                  value="${c?c.name:""}"
                  autocomplete="off"
                />
                ${c?`
                  <button id="btn-clear-dest" class="btn-clear-input" title="Change destination">✕</button>
                `:""}
              </div>

              <!-- Destination Autocomplete Suggestions Dropdown -->
              <div id="dest-suggestions" class="suggestions-dropdown" style="display: none;">
                ${l.slice(0,8).map(h=>`
                  <div class="suggestion-item" data-id="${h.id}">
                    <div class="sugg-name">${h.name}</div>
                    <div class="sugg-meta">${h.categoryLabel} • ~${Math.round(Math.hypot(h.coords.x+40,h.coords.z+40)*3.5)}m</div>
                  </div>
                `).join("")}
              </div>
            </div>

            <!-- Quick Category Suggestions -->
            <div class="quick-chips-row">
              <span class="chips-label">QUICK:</span>
              <button class="quick-chip" data-query="hospital">🏥 Hospital</button>
              <button class="quick-chip" data-query="oxygen">💨 Oxygen</button>
              <button class="quick-chip" data-query="water">💧 Water</button>
              <button class="quick-chip" data-query="food">🌱 Food</button>
              <button class="quick-chip" data-query="power">⚡ Power</button>
              <button class="quick-chip" data-query="shelter">🛡 Shelter</button>
            </div>

            <!-- ROUTE PROFILE SELECTOR TABS (Shortest vs Safer vs Alternative) -->
            <div class="route-profiles-container">
              <div class="profiles-header-label">ROUTE PROFILE</div>
              <div class="profile-tabs-row">
                <button class="profile-tab-btn ${this.selectedProfile==="SHORTEST"?"active":""}" data-profile="SHORTEST" title="Distance-optimized trajectory">
                  <span class="prof-icon">🚀</span>
                  <span class="prof-name">Shortest</span>
                </button>
                <button class="profile-tab-btn ${this.selectedProfile==="SAFER"?"active":""}" data-profile="SAFER" title="Hazard-avoidance trajectory">
                  <span class="prof-icon">🛡️</span>
                  <span class="prof-name">Safer</span>
                </button>
                <button class="profile-tab-btn ${this.selectedProfile==="ALTERNATIVE"?"active":""}" data-profile="ALTERNATIVE" title="Perimeter ringway bypass">
                  <span class="prof-icon">🔄</span>
                  <span class="prof-name">Alternative</span>
                </button>
              </div>
            </div>

            <!-- Action: Show Route Button -->
            ${n?"":`
              <button id="btn-show-route" class="btn-primary-glow full-width" ${this.selectedDestinationId?"":"disabled"}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
                <span>Calculate & Show Route</span>
              </button>
            `}

            <!-- Calculated Route Summary & Multi-Profile Comparison -->
            ${n?`
              <div class="calculated-route-box">
                <!-- Blocked Path Alert Notification (if simulated) -->
                ${this.blockedEdgeNotice?`
                  <div class="route-blockage-alert">
                    <span class="block-icon">⚠️</span>
                    <div class="block-text">
                      <strong>ROADWAY OBSTRUCTION:</strong> ${this.blockedEdgeNotice}
                    </div>
                  </div>
                `:""}

                <div class="route-metrics-bar">
                  <div class="metric">
                    <span class="metric-label">DISTANCE</span>
                    <span class="metric-value cyan">${e.activeRoute.distance} m</span>
                  </div>
                  <div class="metric">
                    <span class="metric-label">EST. TIME</span>
                    <span class="metric-value green">${e.activeRoute.travelTimeMinutes} min</span>
                  </div>
                  <div class="metric">
                    <span class="metric-label">HAZARD SCORE</span>
                    <span class="metric-value ${e.activeRoute.hazardScore>30?"red":"gold"}">
                      ${e.activeRoute.hazardScore||0}%
                    </span>
                  </div>
                </div>

                <div class="route-endpoints">
                  <div class="endpoint">
                    <span class="point-dot origin">●</span>
                    <span class="point-text">${o?o.name:"Origin"}</span>
                  </div>
                  <div class="endpoint-divider">↓</div>
                  <div class="endpoint">
                    <span class="point-dot dest">▲</span>
                    <span class="point-text">${c?c.name:"Destination"}</span>
                  </div>
                </div>

                <!-- Simulation Tools: Road Blockage & Dynamic Rerouting -->
                <div class="route-simulation-actions">
                  ${this.isRoadBlockedSimulated?`
                    <button id="btn-clear-blockage" class="btn-clear-blockage-pill" title="Clear obstruction and restore original arterial route">
                      ✓ Clear Blockage & Restore Route
                    </button>
                  `:`
                    <button id="btn-simulate-blockage" class="btn-simulate-hazard-pill" title="Demonstrate blocked path detection and immediate dynamic rerouting">
                      ⚠️ Simulate Road Blockage & Reroute
                    </button>
                  `}
                </div>

                <!-- START VOICE NAVIGATION CTA (Google Maps Inspired) -->
                <button id="btn-start-voice-nav" class="btn-start-nav-google full-width" title="Start live turn-by-turn spoken guidance">
                  <span class="start-nav-icon">🧭</span>
                  <div class="start-nav-text">
                    <span class="start-main">START VOICE NAVIGATION</span>
                    <span class="start-sub">Live spoken turn-by-turn guidance</span>
                  </div>
                </button>
                <div class="voice-audio-disclaimer">
                  <span>🔊 Audio uses browser SpeechSynthesis. Press Start to initiate. (Simulated Mars positioning)</span>
                </div>
              </div>
            `:""}
          </aside>
        `}

        <!-- 4. DEDICATED LIVE NAVIGATION HUD SLOT -->
        <div id="live-nav-slot"></div>
      </div>
    `,this.setupEvents(),i){const h=document.getElementById("live-nav-slot");h&&(this.liveNavHud||(this.liveNavHud=new Kv(h,this.colonyState,{onStepChanged:d=>{this.callbacks.onFocusFacility&&d&&this.callbacks.onFocusFacility({coords:d})},onEndNavigation:()=>{this.colonyState.setFocusedNavigation(!1),this.render()}})),this.liveNavHud.render())}else this.liveNavHud&&(this.liveNavHud.destroy(),this.liveNavHud=null)}setupEvents(){const t=document.getElementById("btn-toggle-3d"),e=document.getElementById("btn-toggle-2d");t&&t.addEventListener("click",()=>{this.colonyState.setViewMode("3D"),this.render()}),e&&e.addEventListener("click",()=>{this.colonyState.setViewMode("2D"),this.render()}),["glass","holo","open"].forEach(M=>{const v=document.getElementById(`btn-dome-${M}`);v&&v.addEventListener("click",()=>{this.colonyState.setDomeMode(v.dataset.mode),this.render()})});const n=document.getElementById("btn-play-flythrough");n&&n.addEventListener("click",()=>{this.callbacks.onPlayFlythrough&&this.callbacks.onPlayFlythrough()});const i=document.getElementById("btn-map-zoom-in"),a=document.getElementById("btn-map-zoom-out"),r=document.getElementById("btn-map-recenter-user"),o=document.getElementById("btn-map-overview"),c=document.getElementById("btn-map-traffic");i&&i.addEventListener("click",()=>this.callbacks.onZoomIn&&this.callbacks.onZoomIn()),a&&a.addEventListener("click",()=>this.callbacks.onZoomOut&&this.callbacks.onZoomOut()),r&&r.addEventListener("click",()=>this.callbacks.onRecenterResident&&this.callbacks.onRecenterResident()),o&&o.addEventListener("click",()=>this.callbacks.onRecenterAll&&this.callbacks.onRecenterAll()),c&&c.addEventListener("click",()=>{if(this.callbacks.onToggleTraffic){const M=this.callbacks.onToggleTraffic();c.classList.toggle("active",M)}});const l=document.getElementById("select-origin");l&&l.addEventListener("change",M=>{this.selectedOriginId=M.target.value,this.selectedDestinationId&&this.calculateAndShowRoute()});const h=document.getElementById("input-destination-search"),d=document.getElementById("dest-suggestions"),u=document.getElementById("btn-clear-dest");h&&d&&(h.addEventListener("focus",()=>{d.style.display="block"}),h.addEventListener("input",M=>{this.searchQuery=M.target.value.toLowerCase().trim(),this.render();const v=document.getElementById("input-destination-search");if(v){v.focus();const y=v.value.length;v.setSelectionRange(y,y);const D=document.getElementById("dest-suggestions");D&&(D.style.display="block")}})),document.querySelectorAll(".suggestion-item").forEach(M=>{M.addEventListener("click",()=>{const v=M.dataset.id;this.selectDestination(v)})}),u&&u.addEventListener("click",()=>{this.selectedDestinationId=null,this.searchQuery="",re.stop(),this.colonyState.clearNavigation(),this.callbacks.onClearRoute&&this.callbacks.onClearRoute(),this.render()}),document.querySelectorAll(".quick-chip").forEach(M=>{M.addEventListener("click",()=>{const v=M.dataset.query,D=this.colonyState.getAllFacilities().find(R=>R.category===v||R.id.includes(v)||R.synonyms&&R.synonyms.includes(v));D&&this.selectDestination(D.id)})}),document.querySelectorAll(".profile-tab-btn").forEach(M=>{M.addEventListener("click",()=>{this.selectedProfile=M.dataset.profile,this.selectedDestinationId?this.calculateAndShowRoute():this.render()})});const p=document.getElementById("btn-show-route");p&&p.addEventListener("click",()=>{this.calculateAndShowRoute()});const g=document.getElementById("btn-clear-active-route");g&&g.addEventListener("click",()=>{this.selectedDestinationId=null,re.stop(),this.colonyState.clearNavigation(),this.callbacks.onClearRoute&&this.callbacks.onClearRoute(),this.render()});const _=document.getElementById("btn-simulate-blockage");_&&_.addEventListener("click",()=>{if(this.isRoadBlockedSimulated=!0,this.blockedEdgeNotice="Regolith collapse on primary arterial road. Pathfinding engine recalculated safe alternate detour.",this.callbacks.onSimulateRoadBlockage){const M=this.callbacks.onSimulateRoadBlockage(this.selectedOriginId,this.selectedDestinationId);re.isActive&&M&&re.updateReroute(M,"Regolith rockfall detected on primary arterial road")}this.render()});const m=document.getElementById("btn-clear-blockage");m&&m.addEventListener("click",()=>{if(this.isRoadBlockedSimulated=!1,this.blockedEdgeNotice=null,this.callbacks.onClearRoadBlockage){const M=this.callbacks.onClearRoadBlockage(this.selectedOriginId,this.selectedDestinationId);re.isActive&&M&&re.updateReroute(M,"Obstruction cleared, route restored")}this.calculateAndShowRoute()});const f=document.getElementById("btn-start-voice-nav");f&&f.addEventListener("click",()=>{const M=this.colonyState.navigation;if(!M.activeRoute)return;const v=this.colonyState.getFacility(this.selectedOriginId)||this.colonyState.getFacility("residential-habitat-alpha"),y=this.selectedDestinationId?this.colonyState.getFacility(this.selectedDestinationId):null;re.start(M.activeRoute,v,y,!0),this.colonyState.setFocusedNavigation(!0),this.render(),this.callbacks.onFocusFacility&&v&&this.callbacks.onFocusFacility(v)})}selectDestination(t){this.selectedDestinationId=t,this.searchQuery="",this.colonyState.getFacility(t)&&(this.colonyState.selectFacility(t),this.calculateAndShowRoute())}calculateAndShowRoute(){if(!this.selectedDestinationId)return;const t=this.selectedOriginId,e=this.selectedDestinationId,n=this.selectedProfile;if(this.callbacks.onCalculateRoute){const i=this.callbacks.onCalculateRoute(t,e,n);i&&!i.error&&(re.isActive&&re.updateReroute(i,`Profile changed to ${n}`),this.render())}}handleRouteParams(t){if(t.to)this.selectDestination(t.to);else if(t.focus){const e=this.colonyState.getFacility(t.focus);e&&(this.colonyState.selectFacility(e.id),this.callbacks.onFocusFacility&&this.callbacks.onFocusFacility(e))}}}class Qv{constructor(t,e,n,i={}){this.container=t,this.colonyState=e,this.router=n,this.callbacks=i,this.layers={landingSites:!0,geology:!0,scienceStations:!0,hazards:!0,elevation:!0},this.selectedItemType="landingSite",this.selectedItemId="perseverance-jezero"}render(){const t=this.colonyState.viewMode,e=this.getSelectedItemData();this.container.innerHTML=`
      <div class="science-page-layout">
        <!-- 1. Top Science Controls & Layer Toggles Bar -->
        <div class="science-top-bar glass-panel">
          <div class="science-brand-title">
            <span class="icon-pulse">🔬</span>
            <div class="title-group">
              <span class="main-title">PLANETARY SCIENCE OBSERVATORY</span>
              <span class="sub-title">USGS ASTROGEOLOGY • NASA PDS ARCHIVES • MOLA TOPOGRAPHY</span>
            </div>
          </div>

          <!-- 2D / 3D Mode Toggle -->
          <div class="mode-toggles">
            <button id="btn-science-toggle-3d" class="toggle-pill ${t==="3D"?"active":""}" title="View in 3D Mars Colony">
              <span>🔮 3D DOME</span>
            </button>
            <button id="btn-science-toggle-2d" class="toggle-pill ${t==="2D"?"active":""}" title="View in 2D Planetary Topographic Map">
              <span>🗺️ 2D MAP</span>
            </button>
          </div>
        </div>

        <!-- 2. Science Content Grid -->
        <div class="science-grid-container">
          <!-- Left Column: Layer Filters & Catalog Lists -->
          <aside class="science-sidebar glass-panel">
            <!-- Authentic Data Citation Notice -->
            <div class="nasa-citation-banner">
              <span class="banner-badge">AUTHENTIC SCIENCE DATA</span>
              <p>Planetary coordinates and instruments derived from NASA PDS Geosciences Node & USGS Astrogeology records.</p>
            </div>

            <!-- Layer Toggle Checkboxes -->
            <div class="layer-toggles-section">
              <div class="section-label">ACTIVE MAP LAYERS</div>
              <div class="toggles-list">
                <label class="layer-toggle-row">
                  <input type="checkbox" id="layer-chk-landing" ${this.layers.landingSites?"checked":""} />
                  <span class="toggle-icon">🚀</span>
                  <span class="toggle-name">NASA Landing Sites</span>
                  <span class="toggle-count">(${jn.length})</span>
                </label>

                <label class="layer-toggle-row">
                  <input type="checkbox" id="layer-chk-geology" ${this.layers.geology?"checked":""} />
                  <span class="toggle-icon">🌋</span>
                  <span class="toggle-name">USGS Geological Units</span>
                  <span class="toggle-count">(${cs.length})</span>
                </label>

                <label class="layer-toggle-row">
                  <input type="checkbox" id="layer-chk-stations" ${this.layers.scienceStations?"checked":""} />
                  <span class="toggle-icon">📡</span>
                  <span class="toggle-name">Colony Science Nodes</span>
                  <span class="toggle-count">(${ls.length})</span>
                </label>

                <label class="layer-toggle-row">
                  <input type="checkbox" id="layer-chk-hazards" ${this.layers.hazards?"checked":""} />
                  <span class="toggle-icon">⚠️</span>
                  <span class="toggle-name">Planetary Hazard Corridors</span>
                  <span class="toggle-count">(${Oi.length})</span>
                </label>

                <label class="layer-toggle-row">
                  <input type="checkbox" id="layer-chk-elevation" ${this.layers.elevation?"checked":""} />
                  <span class="toggle-icon">🏔️</span>
                  <span class="toggle-name">MOLA Elevation Contours</span>
                  <span class="toggle-count">(Datum: -2.6km)</span>
                </label>
              </div>
            </div>

            <!-- Interactive Item Selector -->
            <div class="science-items-list-section">
              <div class="section-label">SELECT EXPLORATION TARGET</div>

              <!-- Landing Sites Accordion / List -->
              ${this.layers.landingSites?`
                <div class="sub-group-title">NASA & INTERNATIONAL LANDING SITES</div>
                <div class="item-cards-group">
                  ${jn.map(n=>`
                    <button class="science-item-btn ${this.selectedItemId===n.id?"active":""}" data-type="landingSite" data-id="${n.id}">
                      <div class="item-name">${n.name}</div>
                      <div class="item-sub">${n.target} • ${n.coordinates}</div>
                    </button>
                  `).join("")}
                </div>
              `:""}

              <!-- Geological Units -->
              ${this.layers.geology?`
                <div class="sub-group-title">USGS GEOLOGICAL UNITS (CHRYSE BASIN)</div>
                <div class="item-cards-group">
                  ${cs.map(n=>`
                    <button class="science-item-btn ${this.selectedItemId===n.id?"active":""}" data-type="geology" data-id="${n.id}">
                      <div class="item-name">${n.name}</div>
                      <div class="item-sub">${n.type} • ${n.molaElevationDatum}</div>
                    </button>
                  `).join("")}
                </div>
              `:""}

              <!-- Colony Science Stations -->
              ${this.layers.scienceStations?`
                <div class="sub-group-title">COLONY IN-SITU RESEARCH STATIONS</div>
                <div class="item-cards-group">
                  ${ls.map(n=>`
                    <button class="science-item-btn ${this.selectedItemId===n.id?"active":""}" data-type="station" data-id="${n.id}">
                      <div class="item-name">${n.name}</div>
                      <div class="item-sub">${n.instrument}</div>
                    </button>
                  `).join("")}
                </div>
              `:""}

              <!-- Hazard Zones -->
              ${this.layers.hazards?`
                <div class="sub-group-title">PLANETARY HAZARDS & RISK CORRIDORS</div>
                <div class="item-cards-group">
                  ${Oi.map(n=>`
                    <button class="science-item-btn ${this.selectedItemId===n.id?"active":""}" data-type="hazard" data-id="${n.id}">
                      <div class="item-name">${n.name}</div>
                      <div class="item-sub">Severity: ${n.severity}/5 • ${n.typeLabel}</div>
                    </button>
                  `).join("")}
                </div>
              `:""}
            </div>
          </aside>

          <!-- Right Column: Detailed Scientific Inspector Card -->
          <main class="science-inspector-card glass-panel">
            ${this.renderInspectorContent(e)}
          </main>
        </div>
      </div>
    `,this.setupEvents()}getSelectedItemData(){return this.selectedItemType==="landingSite"?{type:"landingSite",data:jn.find(t=>t.id===this.selectedItemId)||jn[0]}:this.selectedItemType==="geology"?{type:"geology",data:cs.find(t=>t.id===this.selectedItemId)||cs[0]}:this.selectedItemType==="station"?{type:"station",data:ls.find(t=>t.id===this.selectedItemId)||ls[0]}:this.selectedItemType==="hazard"?{type:"hazard",data:Oi.find(t=>t.id===this.selectedItemId)||Oi[0]}:{type:"landingSite",data:jn[0]}}renderInspectorContent(t){if(!t||!t.data)return'<div class="inspector-empty">Select a scientific site or geological formation from the left panel.</div>';const{type:e,data:n}=t;if(e==="landingSite")return`
        <div class="inspector-header">
          <div class="inspector-badge cyan">NASA PLANETARY ARCHIVE</div>
          <h2 class="inspector-title">${n.name}</h2>
          <div class="inspector-subtitle">${n.agency} • ${n.target}</div>
        </div>

        <div class="inspector-metrics-grid">
          <div class="ins-metric-card">
            <span class="ins-label">COORDINATES</span>
            <span class="ins-val cyan">${n.coordinates}</span>
          </div>
          <div class="ins-metric-card">
            <span class="ins-label">MOLA ELEVATION</span>
            <span class="ins-val green">${n.elevationMeters} m</span>
          </div>
          <div class="ins-metric-card">
            <span class="ins-label">LANDING DATE</span>
            <span class="ins-val">${n.landingDate}</span>
          </div>
          <div class="ins-metric-card">
            <span class="ins-label">MISSION STATUS</span>
            <span class="ins-val gold">${n.activeStatus}</span>
          </div>
        </div>

        <div class="inspector-section">
          <h3>PRIMARY OBJECTIVE</h3>
          <p class="ins-desc">${n.primaryObjective}</p>
        </div>

        <div class="inspector-section">
          <h3>SCIENTIFIC INSTRUMENT SUITE</h3>
          <div class="instruments-tags-wrap">
            ${n.instruments.map(i=>`<span class="instrument-tag">${i}</span>`).join("")}
          </div>
        </div>

        <div class="inspector-section dataset-box">
          <h3>DATASET PROVENANCE & ARCHIVE CITATION</h3>
          <p class="citation-text"><strong>Citation:</strong> ${n.datasetCitation}</p>
          <a href="${n.pdsArchiveUrl}" target="_blank" rel="noopener noreferrer" class="pds-link-btn">
            <span>Explore PDS Planetary Data System Node</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>
      `;if(e==="geology")return`
        <div class="inspector-header">
          <div class="inspector-badge purple">USGS ASTROGEOLOGY UNIT</div>
          <h2 class="inspector-title">${n.name}</h2>
          <div class="inspector-subtitle">${n.type} • ${n.ageGa}</div>
        </div>

        <div class="inspector-metrics-grid">
          <div class="ins-metric-card">
            <span class="ins-label">MOLA DATUM</span>
            <span class="ins-val cyan">${n.molaElevationDatum}</span>
          </div>
          <div class="ins-metric-card">
            <span class="ins-label">ROUGHNESS INDEX</span>
            <span class="ins-val">${n.roughnessIndex}</span>
          </div>
          <div class="ins-metric-card">
            <span class="ins-label">BEARING CAPACITY</span>
            <span class="ins-val green">${n.loadBearingCapacity}</span>
          </div>
        </div>

        <div class="inspector-section">
          <h3>MINERALOGICAL COMPOSITION</h3>
          <p class="ins-desc">${n.mineralogy}</p>
        </div>

        <div class="inspector-section dataset-box">
          <h3>GEOLOGICAL CITATION</h3>
          <p class="citation-text">Derived from USGS Geologic Map of Mars (SIM-3292) & Mars Express OMEGA / MRO CRISM multispectral reflectance libraries.</p>
        </div>
      `;if(e==="station")return`
        <div class="inspector-header">
          <div class="inspector-badge gold">COLONY IN-SITU RESEARCH NODE</div>
          <h2 class="inspector-title">${n.name}</h2>
          <div class="inspector-subtitle">Local Grid: (${n.coordinates.x}, ${n.coordinates.z})</div>
        </div>

        <div class="inspector-section">
          <h3>PRIMARY RESEARCH PURPOSE</h3>
          <p class="ins-desc">${n.purpose}</p>
        </div>

        <div class="inspector-section">
          <h3>INSTRUMENTATION & TELEMETRY</h3>
          <div class="ins-metric-card">
            <span class="ins-label">INSTRUMENT</span>
            <span class="ins-val cyan">${n.instrument}</span>
          </div>
          <div class="ins-metric-card" style="margin-top: 10px;">
            <span class="ins-label">RECENT TELEMETRY / OUTPUT</span>
            <span class="ins-val green">${n.sampleOutput}</span>
          </div>
        </div>
      `;if(e==="hazard")return`
        <div class="inspector-header">
          <div class="inspector-badge red">PLANETARY HAZARD CORRIDOR</div>
          <h2 class="inspector-title">${n.name}</h2>
          <div class="inspector-subtitle">${n.typeLabel} • Severity Level ${n.severity}/5</div>
        </div>

        <div class="inspector-metrics-grid">
          <div class="ins-metric-card">
            <span class="ins-label">SEVERITY</span>
            <span class="ins-val red">${n.severity} / 5</span>
          </div>
          <div class="ins-metric-card">
            <span class="ins-label">HAZARD RADIUS</span>
            <span class="ins-val gold">${n.radius} meters</span>
          </div>
          <div class="ins-metric-card">
            <span class="ins-label">AFFECTED EDGES</span>
            <span class="ins-val cyan">${n.affectedEdges?n.affectedEdges.length:0} road segments</span>
          </div>
        </div>

        <div class="inspector-section">
          <h3>OPERATIONAL ADVISORY</h3>
          <p class="ins-desc">${n.description}</p>
        </div>

        <div class="inspector-section dataset-box">
          <h3>ROUTER MITIGATION</h3>
          <p class="citation-text">When navigating in <strong>Safer Profile</strong>, Dijkstra pathfinder penalizes edges passing through this sector by ${n.severity*85}% to guarantee autonomous vehicle safety.</p>
        </div>
      `}setupEvents(){const t=document.getElementById("btn-science-toggle-3d"),e=document.getElementById("btn-science-toggle-2d");t&&t.addEventListener("click",()=>{this.colonyState.setViewMode("3D"),this.render()}),e&&e.addEventListener("click",()=>{this.colonyState.setViewMode("2D"),this.render()});const n=document.getElementById("layer-chk-landing"),i=document.getElementById("layer-chk-geology"),a=document.getElementById("layer-chk-stations"),r=document.getElementById("layer-chk-hazards"),o=document.getElementById("layer-chk-elevation");n&&n.addEventListener("change",c=>{this.layers.landingSites=c.target.checked,this.render()}),i&&i.addEventListener("change",c=>{this.layers.geology=c.target.checked,this.render()}),a&&a.addEventListener("change",c=>{this.layers.scienceStations=c.target.checked,this.render()}),r&&r.addEventListener("change",c=>{this.layers.hazards=c.target.checked,this.render()}),o&&o.addEventListener("change",c=>{this.layers.elevation=c.target.checked,this.render()}),document.querySelectorAll(".science-item-btn").forEach(c=>{c.addEventListener("click",()=>{this.selectedItemType=c.dataset.type,this.selectedItemId=c.dataset.id,this.render()})})}}class To{constructor(){this.nodes=Le,this.edges=Nn,this.blockedEdges=new Set,this.hazardMultipliers=new Map}getEdgeKey(t,e){return t<e?`${t}--${e}`:`${e}--${t}`}blockEdge(t,e){this.blockedEdges.add(this.getEdgeKey(t,e))}unblockEdge(t,e){this.blockedEdges.delete(this.getEdgeKey(t,e))}isEdgeBlocked(t,e){return this.blockedEdges.has(this.getEdgeKey(t,e))}resetNetwork(){this.blockedEdges.clear(),this.hazardMultipliers.clear()}getAdjacencyList(t="SHORTEST"){const e={};for(const n in this.nodes)e[n]=[];for(const n of this.edges){const i=this.getEdgeKey(n.from,n.to);if(this.blockedEdges.has(i))continue;const a=this.nodes[n.from],r=this.nodes[n.to];if(!a||!r)continue;let o=Ii(a,r);if(t==="SAFER"){const c=il(n.from,n.to);o*=c.weightMultiplier}else t==="ALTERNATIVE"&&(n.from.includes("central")||n.to.includes("central"))&&(o*=2.4);this.hazardMultipliers.has(i)&&(o*=this.hazardMultipliers.get(i)),e[n.from].push({node:n.to,weight:o,rawDistance:Ii(a,r),edgeName:n.name}),e[n.to].push({node:n.from,weight:o,rawDistance:Ii(a,r),edgeName:n.name})}return e}findPath(t,e,n="SHORTEST"){if(!this.nodes[t]||!this.nodes[e])return{path:[],distance:0,waypoints:[],turnDirections:[],error:`Invalid start (${t}) or destination (${e}) node.`};if(t===e){const D=this.nodes[t];return{profile:n,path:[t],distance:0,travelTimeMinutes:"0.0",hazardScore:0,safetyRating:"OPTIMAL",waypoints:[{x:D.x,y:D.y,z:D.z}],turnDirections:[{instruction:`You are already at ${D.name}.`,distance:"0 m"}],error:null}}const i=this.getAdjacencyList(n),a={},r={},o={},c=new Set(Object.keys(this.nodes));for(const D in this.nodes)a[D]=1/0,r[D]=null,o[D]=null;for(a[t]=0;c.size>0;){let D=null,R=1/0;for(const F of c)a[F]<R&&(R=a[F],D=F);if(D===null||a[D]===1/0||D===e)break;c.delete(D);const P=i[D]||[];for(const{node:F,weight:E,edgeName:S}of P){if(!c.has(F))continue;const I=a[D]+E;I<a[F]&&(a[F]=I,r[F]=D,o[F]=S)}}const l=[];let h=e;for(;h!==null;)l.unshift(h),h=r[h];if(l.length===0||l[0]!==t)return{profile:n,path:[],distance:0,waypoints:[],turnDirections:[],error:`No route found between ${t} and ${e} (Possible road blockages).`};let d=0,u=0,p=0;for(let D=1;D<l.length;D++){const R=this.nodes[l[D-1]],P=this.nodes[l[D]];d+=Ii(R,P);const F=il(l[D-1],l[D]);F.hasHazard&&(p++,u+=F.severity*20)}const g=Math.round(d*3.5),_=(g/60).toFixed(1),m=Math.min(100,Math.round(u/Math.max(1,l.length-1)));let f="OPTIMAL";m>=50?f="HIGH RISK":m>=18&&(f="MODERATE HAZARD");const M=l.map(D=>{const R=this.nodes[D];return{x:R.x,y:R.y,z:R.z,name:R.name,id:R.id}}),v=[],y=this.nodes[t];v.push({instruction:`Depart from ${y.name}`,distance:"0 m"});for(let D=1;D<l.length;D++){const R=this.nodes[l[D-1]],P=this.nodes[l[D]],F=Math.round(Ii(R,P)*3.5),E=o[l[D]]||"Colony Arterial";D===l.length-1?v.push({instruction:`Continue along ${E} and arrive at ${P.name}`,distance:`${F} m`}):v.push({instruction:`Follow ${E} towards ${P.name}`,distance:`${F} m`})}return{profile:n,path:l,distance:g,travelTimeMinutes:_,hazardScore:m,safetyRating:f,hazardEdgeCount:p,waypoints:M,turnDirections:v,error:null}}findMultiProfileRoutes(t,e){const n=rs[t],i=rs[e];if(!n||!i)return{error:"One or both facilities do not have designated road connections."};const a=this.findPath(n,i,"SHORTEST"),r=this.findPath(n,i,"SAFER"),o=this.findPath(n,i,"ALTERNATIVE");return{shortest:a,safer:r.error?a:r,alternative:o.error?a:o}}findRouteBetweenFacilities(t,e,n="SHORTEST"){const i=rs[t],a=rs[e];return!i||!a?{path:[],distance:0,waypoints:[],turnDirections:[],error:"One or both facilities do not have designated road connections."}:this.findPath(i,a,n)}findMultiStopRoute(t=[]){if(!t||t.length<2)return{error:"Please select at least 2 facilities for the mission route."};let e=0;const n=[],i=[],a=[];let r=0;for(let c=0;c<t.length-1;c++){const l=t[c],h=t[c+1],d=this.findRouteBetweenFacilities(l,h,"SAFER");if(d.error)return{error:`Mission path blocked between stop ${c+1} and ${c+2}: ${d.error}`};e+=d.distance,r=Math.max(r,d.hazardScore||0),a.push({from:l,to:h,distance:d.distance,time:d.travelTimeMinutes,turnDirections:d.turnDirections});const u=c===0?d.waypoints:d.waypoints.slice(1);n.push(...u),i.push(...d.turnDirections)}const o=(e/60).toFixed(1);return{totalDistance:e,totalTimeMinutes:o,hazardScore:r,safetyRating:r>40?"MODERATE RISK":"OPTIMAL",stopsCount:t.length,legs:a,waypoints:n,turnDirections:i,error:null}}findNearestOperationalFacility(t,e,n){const i=n.filter(c=>c.category===e&&c.status==="OPERATIONAL");if(i.length===0)return null;let a=null,r=1/0,o=null;for(const c of i){const l=rs[c.id];if(!l)continue;const h=this.findPath(t,l);!h.error&&h.distance<r&&(r=h.distance,a=c,o=h)}return{facility:a,route:o}}}const rl="mars_pulse_saved_missions_v1",xr=[{id:"mission-life-support",name:"Colony Life-Support Integrity Audit",category:"CRITICAL_INFRASTRUCTURE",badgeColor:"#00FFCC",description:"Inspect all atmospheric cracking, water filtration, and backup power stations across Chryse Colony.",stops:["command-tower","oxygen-hub-alpha","oxygen-hub-beta","aquacycle-water","safehaven-shelter"]},{id:"mission-geology-survey",name:"Ares Basin Geological Survey Run",category:"EXPEDITION_RESEARCH",badgeColor:"#A855F7",description:"Collect permafrost core samples and deploy seismic array node along Chryse perimeter.",stops:["research-laboratory","eden-greenhouse","safehaven-shelter","nova-university","command-tower"]},{id:"mission-med-distribution",name:"Medical & Cryo-Ration Distribution",category:"HABITAT_LOGISTICS",badgeColor:"#FF725E",description:"Deliver emergency trauma kits, fresh greenhouse crops, and education tablets to residential sectors.",stops:["marscare-hospital","residential-habitat-alpha","eden-greenhouse","horizon-school","residential-habitat-beta"]}];class t0{constructor(t,e,n,i={}){this.container=t,this.colonyState=e,this.router=n,this.callbacks=i,this.pathfinder=new To,this.currentStops=["command-tower","oxygen-hub-alpha","oxygen-hub-beta","safehaven-shelter"],this.savedMissions=this.loadSavedMissions(),this.routeCalculation=null,this.calculateRoute()}loadSavedMissions(){try{const t=localStorage.getItem(rl);if(t)return JSON.parse(t)}catch(t){console.warn("Error reading saved missions:",t)}return[...xr]}persistSavedMissions(){try{localStorage.setItem(rl,JSON.stringify(this.savedMissions))}catch{}}calculateRoute(){this.currentStops.length>=2?this.routeCalculation=this.pathfinder.findMultiStopRoute(this.currentStops):this.routeCalculation=null}render(){const t=this.colonyState.getAllFacilities(),e=this.routeCalculation;this.container.innerHTML=`
      <div class="planner-page-layout">
        <!-- 1. Top Header -->
        <div class="planner-top-bar glass-panel">
          <div class="planner-title-group">
            <span class="icon-pulse">🚀</span>
            <div class="titles">
              <h1 class="main-title">EXPEDITION MISSION PLANNER</h1>
              <p class="sub-title">MULTI-WAYPOINT TRAJECTORIES • RISK-AWARE MULTI-SEGMENT ROUTING</p>
            </div>
          </div>

          <div class="top-actions">
            <button id="btn-save-current-mission" class="btn-action-outline">
              💾 Save Mission Itinerary
            </button>
            <button id="btn-launch-mission-route" class="btn-primary-glow" ${!e||e.error?"disabled":""}>
              ▶ Execute Route on Colony Map
            </button>
          </div>
        </div>

        <!-- 2. Main Planner Columns -->
        <div class="planner-grid-container">
          <!-- Left Column: Waypoint Stop Builder -->
          <div class="stops-builder-column glass-panel">
            <div class="column-header">
              <div class="col-title">
                <span>STOPS & WAYPOINTS SEQUENCE</span>
                <span class="stops-counter">(${this.currentStops.length} STOPS)</span>
              </div>
              <button id="btn-add-stop-row" class="btn-add-stop">+ Add Stop</button>
            </div>

            <!-- Preloaded Templates Row -->
            <div class="mission-templates-row">
              <span class="template-label">TEMPLATES:</span>
              ${xr.map(n=>`
                <button class="btn-template-pill" data-id="${n.id}" title="${n.description}">
                  ${n.name.split(" ")[0]} ${n.name.split(" ")[1]||""}
                </button>
              `).join("")}
            </div>

            <!-- Ordered Stops List -->
            <div class="stops-sequence-list" id="stops-list-container">
              ${this.currentStops.map((n,i)=>(this.colonyState.getFacility(n),`
                  <div class="stop-item-card" data-index="${i}">
                    <div class="stop-number ${i===0?"origin":i===this.currentStops.length-1?"dest":""}">
                      ${i+1}
                    </div>

                    <div class="stop-select-wrap">
                      <select class="stop-facility-select" data-index="${i}">
                        ${t.map(a=>`
                          <option value="${a.id}" ${a.id===n?"selected":""}>
                            ${a.name} (${a.categoryLabel})
                          </option>
                        `).join("")}
                      </select>
                    </div>

                    <div class="stop-controls">
                      <button class="btn-move-stop btn-move-up" data-index="${i}" ${i===0?"disabled":""} title="Move Up">▲</button>
                      <button class="btn-move-stop btn-move-down" data-index="${i}" ${i===this.currentStops.length-1?"disabled":""} title="Move Down">▼</button>
                      <button class="btn-remove-stop" data-index="${i}" ${this.currentStops.length<=2?"disabled":""} title="Remove Stop">✕</button>
                    </div>
                  </div>
                `)).join("")}
            </div>

            <!-- Saved Missions Management -->
            <div class="saved-missions-section">
              <div class="sub-label">SAVED MISSIONS IN LOCAL STORAGE</div>
              <div class="saved-missions-list">
                ${this.savedMissions.map((n,i)=>`
                  <div class="saved-mission-item">
                    <div class="sm-info">
                      <span class="sm-name">${n.name}</span>
                      <span class="sm-stops">${n.stops.length} Waypoints</span>
                    </div>
                    <div class="sm-btns">
                      <button class="btn-load-sm" data-index="${i}">Load</button>
                      <button class="btn-delete-sm" data-index="${i}">✕</button>
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>

          <!-- Right Column: Itinerary Details & Leg-by-Leg Metrics -->
          <div class="mission-summary-column glass-panel">
            <div class="column-header">
              <div class="col-title">MISSION ITINERARY & RISK ANALYSIS</div>
              ${e&&!e.error?`
                <span class="safety-badge ${e.safetyRating.includes("RISK")?"warning":"optimal"}">
                  ${e.safetyRating} (${e.hazardScore}% Risk)
                </span>
              `:""}
            </div>

            ${e?e.error?`
              <div class="error-notice">⚠️ ${e.error}</div>
            `:`
              <!-- Mission KPI Metrics Grid -->
              <div class="mission-metrics-row">
                <div class="mission-metric">
                  <span class="mm-label">TOTAL DISTANCE</span>
                  <span class="mm-val cyan">${e.totalDistance} m</span>
                </div>
                <div class="mission-metric">
                  <span class="mm-label">TOTAL TRAVEL TIME</span>
                  <span class="mm-val green">${e.totalTimeMinutes} min</span>
                </div>
                <div class="mission-metric">
                  <span class="mm-label">EXPEDITION LEGS</span>
                  <span class="mm-val">${e.legs.length} Legs</span>
                </div>
                <div class="mission-metric">
                  <span class="mm-label">TOTAL WAYPOINTS</span>
                  <span class="mm-val gold">${e.waypoints.length}</span>
                </div>
              </div>

              <!-- Leg-by-Leg Breakdown -->
              <div class="legs-breakdown-list">
                <div class="sub-label">STEP-BY-STEP MISSION LEGS</div>
                ${e.legs.map((n,i)=>{const a=this.colonyState.getFacility(n.from),r=this.colonyState.getFacility(n.to);return`
                    <div class="mission-leg-card">
                      <div class="leg-header">
                        <span class="leg-tag">LEG ${i+1}</span>
                        <span class="leg-names">${a?a.name:n.from} ➔ ${r?r.name:n.to}</span>
                        <span class="leg-distance">${n.distance} m (${n.time} min)</span>
                      </div>
                      <div class="leg-instructions">
                        ${n.turnDirections.map(o=>`
                          <div class="leg-instruction-row">
                            <span class="dir-bullet">▪</span>
                            <span class="dir-text">${o.instruction}</span>
                            <span class="dir-dist">${o.distance}</span>
                          </div>
                        `).join("")}
                      </div>
                    </div>
                  `}).join("")}
              </div>
            `:`
              <div class="empty-notice">Add at least 2 stops to calculate multi-waypoint itinerary.</div>
            `}
          </div>
        </div>
      </div>
    `,this.setupEvents()}setupEvents(){document.querySelectorAll(".stop-facility-select").forEach(i=>{i.addEventListener("change",a=>{const r=parseInt(a.target.dataset.index,10);this.currentStops[r]=a.target.value,this.calculateRoute(),this.render()})}),document.querySelectorAll(".btn-move-up").forEach(i=>{i.addEventListener("click",()=>{const a=parseInt(i.dataset.index,10);if(a>0){const r=this.currentStops[a-1];this.currentStops[a-1]=this.currentStops[a],this.currentStops[a]=r,this.calculateRoute(),this.render()}})}),document.querySelectorAll(".btn-move-down").forEach(i=>{i.addEventListener("click",()=>{const a=parseInt(i.dataset.index,10);if(a<this.currentStops.length-1){const r=this.currentStops[a+1];this.currentStops[a+1]=this.currentStops[a],this.currentStops[a]=r,this.calculateRoute(),this.render()}})}),document.querySelectorAll(".btn-remove-stop").forEach(i=>{i.addEventListener("click",()=>{const a=parseInt(i.dataset.index,10);this.currentStops.length>2&&(this.currentStops.splice(a,1),this.calculateRoute(),this.render())})});const t=document.getElementById("btn-add-stop-row");t&&t.addEventListener("click",()=>{const i=this.colonyState.getAllFacilities(),a=i.find(r=>!this.currentStops.includes(r.id));this.currentStops.push(a?a.id:i[0].id),this.calculateRoute(),this.render()}),document.querySelectorAll(".btn-template-pill").forEach(i=>{i.addEventListener("click",()=>{const a=xr.find(r=>r.id===i.dataset.id);a&&(this.currentStops=[...a.stops],this.calculateRoute(),this.render())})});const e=document.getElementById("btn-save-current-mission");e&&e.addEventListener("click",()=>{const i=prompt("Enter a name for this Expedition Mission:",`Expedition ${new Date().toLocaleDateString()}`);i&&i.trim()&&(this.savedMissions.push({id:`mission-${Date.now()}`,name:i.trim(),category:"CUSTOM_EXPEDITION",stops:[...this.currentStops]}),this.persistSavedMissions(),this.render())}),document.querySelectorAll(".btn-load-sm").forEach(i=>{i.addEventListener("click",()=>{const a=parseInt(i.dataset.index,10);this.savedMissions[a]&&(this.currentStops=[...this.savedMissions[a].stops],this.calculateRoute(),this.render())})}),document.querySelectorAll(".btn-delete-sm").forEach(i=>{i.addEventListener("click",()=>{const a=parseInt(i.dataset.index,10);this.savedMissions.splice(a,1),this.persistSavedMissions(),this.render()})});const n=document.getElementById("btn-launch-mission-route");n&&n.addEventListener("click",()=>{if(!this.routeCalculation||this.routeCalculation.error)return;const i=this.currentStops[0],a=this.currentStops[this.currentStops.length-1],r={distance:this.routeCalculation.totalDistance,travelTimeMinutes:this.routeCalculation.totalTimeMinutes,waypoints:this.routeCalculation.waypoints,turnDirections:this.routeCalculation.turnDirections,hazardScore:this.routeCalculation.hazardScore,safetyRating:this.routeCalculation.safetyRating,isMultiStop:!0,stopsCount:this.currentStops.length};this.colonyState.setNavigation({startFacilityId:i,destinationFacilityId:a,activeRoute:r,isNavigating:!0,navigationReason:"MULTI_STOP_EXPEDITION"}),this.router.navigate("navigate")})}}class e0{constructor(t,e,n){this.container=t,this.colonyState=e,this.router=n,this.activeCategory="all",this.searchQuery=""}render(){const t=this.colonyState.getAllFacilities(),e=this.colonyState.userLocation.coords,n=t.filter(i=>{if(!(this.activeCategory==="all"||i.category===this.activeCategory))return!1;if(!this.searchQuery)return!0;const r=this.searchQuery.toLowerCase();return i.name.toLowerCase().includes(r)||i.categoryLabel.toLowerCase().includes(r)||i.description.toLowerCase().includes(r)||i.synonyms&&i.synonyms.some(o=>o.toLowerCase().includes(r))||i.services&&i.services.some(o=>o.toLowerCase().includes(r))});this.container.innerHTML=`
      <section class="facilities-page-layout">
        <div class="facilities-container">
          <!-- Page Header -->
          <div class="facilities-header-card glass-panel">
            <div class="header-pre-badge">MARTIAN INFRASTRUCTURE DIRECTORY</div>
            <h1 class="page-title">Colony Facilities & Habitats</h1>
            <p class="page-sub">
              Explore 15 vital colony sectors supporting 4,150 residents. Check real-time life-support grid status, 
              view locations on the colony map, and calculate instant walking or rover routes.
            </p>

            <!-- Search Bar -->
            <div class="directory-search-bar">
              <svg class="search-svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              <input 
                type="text" 
                id="dir-search-input" 
                class="dir-search-input" 
                placeholder="Search by facility name, sector, or service (e.g. oxygen, trauma, greenhouse, water)..."
                value="${this.searchQuery}"
                autocomplete="off"
              />
              ${this.searchQuery?'<button id="btn-clear-dir-search" class="btn-clear-search">✕</button>':""}
            </div>

            <!-- Category Filter Tabs -->
            <div class="category-tabs-scroll">
              ${xv.map(i=>`
                <button class="cat-tab-btn ${this.activeCategory===i.id?"active":""}" data-cat="${i.id}">
                  <span>${i.label}</span>
                </button>
              `).join("")}
            </div>
          </div>

          <!-- Results Summary -->
          <div class="results-meta-row">
            <span>SHOWING ${n.length} OF ${t.length} FACILITIES</span>
            ${this.activeCategory!=="all"?`<span class="active-filter-badge">Category: ${this.activeCategory}</span>`:""}
          </div>

          <!-- Facilities Cards Grid -->
          <div class="facilities-grid">
            ${n.length>0?n.map(i=>{const a=i.status.toLowerCase(),r=Math.round(Math.hypot(i.coords.x-e.x,i.coords.z-e.z)*3.5);return`
                <article class="facility-grid-card glass-panel status-${a}" data-id="${i.id}">
                  <div class="card-top-row">
                    <span class="category-pill">${i.categoryLabel}</span>
                    <span class="status-badge ${a}">${i.status}</span>
                  </div>

                  <h3 class="card-facility-title">${i.name}</h3>
                  <div class="card-dist-meta">
                    <span class="pin-icon">📍</span>
                    <span>~${r} m from Ares Hab</span>
                    <span class="dot-separator">•</span>
                    <span>Zone: ${i.id.split("-")[0].toUpperCase()}</span>
                  </div>

                  <p class="card-facility-desc">${i.description}</p>

                  ${i.emergencyAlert?`
                    <div class="card-alert-strip">
                      <span>⚠ ${i.emergencyAlert}</span>
                    </div>
                  `:""}

                  <!-- Key Telemetry Row -->
                  <div class="card-stats-row">
                    <div class="mini-stat">
                      <span class="ms-lbl">POWER</span>
                      <span class="ms-val">${i.powerConsumption||"350 kW"}</span>
                    </div>
                    <div class="mini-stat">
                      <span class="ms-lbl">CREW</span>
                      <span class="ms-val">${i.occupancy?i.occupancy.split("/")[0]:"Nominal"}</span>
                    </div>
                    <div class="mini-stat">
                      <span class="ms-lbl">ROLE</span>
                      <span class="ms-val">${i.emergencyRole?i.emergencyRole.split(" ")[0]:"Civilian"}</span>
                    </div>
                  </div>

                  <!-- Actions -->
                  <div class="card-actions-row">
                    <button class="btn-card-nav btn-primary-card" data-action="navigate" data-id="${i.id}" title="Calculate route to this facility">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
                      <span>Navigate Here</span>
                    </button>

                    <button class="btn-card-view btn-secondary-card" data-action="view-map" data-id="${i.id}" title="Center this facility on the colony map">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="12 8 8 16 12 14 16 16 12 8" fill="currentColor"/></svg>
                      <span>View on Map</span>
                    </button>

                    <button class="btn-card-details" data-action="details" data-id="${i.id}" title="View full technical specs">
                      <span>Specs</span>
                    </button>
                  </div>
                </article>
              `}).join(""):`
              <div class="empty-results-card glass-panel">
                <div class="empty-icon">🔍</div>
                <h3>No colony facilities found</h3>
                <p>No facilities match your search query "${this.searchQuery}". Try searching for "hospital", "oxygen", "school", or clear filters.</p>
                <button id="btn-reset-dir-filter" class="btn-secondary-hero">Reset Filters</button>
              </div>
            `}
          </div>
        </div>
      </section>
    `,this.setupEvents()}setupEvents(){const t=document.getElementById("dir-search-input"),e=document.getElementById("btn-clear-dir-search");t&&t.addEventListener("input",i=>{this.searchQuery=i.target.value.trim(),this.render();const a=document.getElementById("dir-search-input");if(a){a.focus();const r=a.value.length;a.setSelectionRange(r,r)}}),e&&e.addEventListener("click",()=>{this.searchQuery="",this.render()}),document.querySelectorAll(".cat-tab-btn").forEach(i=>{i.addEventListener("click",()=>{this.activeCategory=i.dataset.cat,this.render()})});const n=document.getElementById("btn-reset-dir-filter");n&&n.addEventListener("click",()=>{this.activeCategory="all",this.searchQuery="",this.render()}),this.container.querySelectorAll("[data-action]").forEach(i=>{i.addEventListener("click",a=>{a.stopPropagation();const r=i.dataset.action,o=i.dataset.id;r==="navigate"?this.router.navigate("navigate",{to:o}):r==="view-map"?this.router.navigate("navigate",{focus:o}):r==="details"&&this.colonyState.openFacilityModal(o)})}),this.container.querySelectorAll(".facility-grid-card").forEach(i=>{i.addEventListener("click",()=>{const a=i.dataset.id;this.colonyState.openFacilityModal(a)})})}}const Pi={BLOCKED_PATH:{id:"BLOCKED_PATH",title:"[DEMO SIMULATION] Regolith Rockfall: Arterial Road Blocked",shortTitle:"Blocked Path / Rockfall",icon:"mountain-alert",severity:"WARNING",badgeColor:"#FF725E",description:"A seismic tremor on the Northwest Crater Rim triggered a talus rockfall, completely obstructing the Central-West Arterial Concourse. Autonomous navigation must detect the blockage and compute an alternate detour.",triggerFacilityId:"command-tower",targetFacilityId:"marscare-hospital",originFacilityId:"command-tower",blockedEdge:{u:"node_central",v:"node_central_west",name:"Central-West Concourse"},effects:{roadStatus:"BLOCKED_BY_DEBRIS",affectedSection:"Central-West Concourse (Sector 2)",debrisVolume:"45 m³ Basalt Boulders",clearingTeam:"Heavy Loader Rover dispatched from Maintenance Depot"},navigation:{routePrompt:"Central-West Road severed! Autonomous rerouting engaged via North Orbital Ringway to MarsCare Hospital.",startNode:"node_central",endNode:"node_west_1",mode:"DYNAMIC_REROUTE"},actionGuide:[{step:1,title:"Hazard Detection",text:"Inertial sensors on Transit Rover-03 flagged road obstruction on Central-West Concourse."},{step:2,title:"Network Graph Update",text:"Central Navigation graph dynamically severed edge node_central <-> node_central_west."},{step:3,title:"Alternate Route Calculation",text:"Dijkstra recalculator discovered alternate route via North Concourse (+210m, safe clearance)."},{step:4,title:"Rover Fleet Advisory",text:"Autonomous beacons broadcasted road closure to all active hovercraft & pressurized rovers."}]},COMM_FAILURE:{id:"COMM_FAILURE",title:"[DEMO SIMULATION] Solar Particle Storm: Orbital Relay Blackout",shortTitle:"Communications Failure",icon:"radio-off",severity:"EMERGENCY",badgeColor:"#FFAA00",description:"An X-class solar flare has ionized Mars upper ionosphere, blinding Mars Relay Orbiters (MRO / Odyssey) and severing high-bandwidth surface uplinks. Colony switches to hardened subterranean fiber & autonomous inertial navigation.",triggerFacilityId:"command-tower",targetFacilityId:"research-laboratory",originFacilityId:"residential-habitat-alpha",effects:{orbitalRelay:"OFFLINE (High Ion Flux)",localMesh:"DEGRADED (Subterranean Fiber Only)",gnssPositioning:"UNAVAILABLE - Switched to Dead-Reckoning IMU",emergencyAction:"All long-range surface EVAs ordered to hold position or return to nearest shelter."},navigation:{routePrompt:"Uplink severed: Switched to Local Inertial Offline Navigation. Escorting citizens to Kepler Research Hub.",startNode:"node_central_west",endNode:"node_north_1",mode:"AUTONOMOUS_DEAD_RECKONING"},actionGuide:[{step:1,title:"Ion Flux Spike Detected",text:"Planetary Weather Mast logged extreme solar proton event exceeding 100 MeV."},{step:2,title:"Autonomous Fallback",text:"Local Colony Mesh switched from orbital relay to underground shielded fiber optics."},{step:3,title:"Inertial Guidance Mode",text:"Rover navigation algorithms calibrated with optical odometry and landmark matching."},{step:4,title:"Expedition Recall",text:"Automated audible klaxons triggered in peripheral science stations."}]},ROVER_BREAKDOWN:{id:"ROVER_BREAKDOWN",title:"[DEMO SIMULATION] Rover Stranded: Traction Motor Burnout",shortTitle:"Rover Breakdown",icon:"truck-alert",severity:"CRITICAL",badgeColor:"#FF3366",description:"Pressurized Expedition Rover PR-04 suffered a catastrophic high-torque electric motor burnout along South-East Ringway. Life support batteries have 45 minutes remaining. Immediate medevac recovery team required.",triggerFacilityId:"residential-habitat-beta",targetFacilityId:"safehaven-shelter",originFacilityId:"residential-habitat-beta",effects:{strandedUnit:"Rover PR-04 (Occupants: 3 researchers)",subsystemStatus:"Drive Inverter: DEAD | Life Support: 42 mins reserve | Cabin: 101 kPa",rescueRover:"Heavy Hauler RR-01 mobilized from SafeHaven Emergency Shelter"},navigation:{routePrompt:"Emergency Medevac Corridor: Dispatching rescue hauler to stranded rover location near Sector South-East.",startNode:"node_south_1",endNode:"node_southeast_junction",mode:"RESCUE_MEDEVAC"},actionGuide:[{step:1,title:"Distress Beacon Received",text:"Rover PR-04 transmitted mechanical lockup code via short-range UHF transponder."},{step:2,title:"Rescue Hauler Mobilization",text:"SafeHaven Emergency Shelter rescue crew boarded twin-tracked recovery crawler."},{step:3,title:"Fastest Safe Corridor Plotted",text:"High-speed rescue trajectory illuminated avoiding loose regolith hazards."},{step:4,title:"Auxiliary Oxygen Coupling",text:"Recovery crew equipped with cryo-oxygen transfer umbilical and tow winch."}]},OXYGEN_FAILURE:{id:"OXYGEN_FAILURE",title:"[DEMO SIMULATION] Oxygen Hub Alpha Cryo-Manifold Rupture",shortTitle:"Oxygen Hub Failure",icon:"wind-alert",severity:"CRITICAL",badgeColor:"#FF3366",description:"Primary MOXIE-IV cracking manifold at Oxygen Hub Alpha has suffered a catastrophic pressure loss. Sector atmosphere buffering is dropping rapidly. Failover to Oxygen Hub Beta engaged.",triggerFacilityId:"oxygen-hub-alpha",targetFacilityId:"oxygen-hub-beta",originFacilityId:"command-tower",effects:{failedFacility:{id:"oxygen-hub-alpha",status:"OFFLINE",health:12,alertMessage:"Primary manifold ruptured! Atmospheric pressure collapsed. Venting cryo-buffer.",visualEffect:"FIRE_AND_ALARM",resourceDeltas:{oxygenProduction:"0 L/min (FAILED)",reserveCapacity:"8% (Evacuating)",pressurePurity:"UNSAFE"}},alternativeFacility:{id:"oxygen-hub-beta",status:"OPERATIONAL",health:100,boostMessage:"Automated Cryo-Reservoir failover valve ENGAGED. Sub-glacial production surged to 16,500 L/min to stabilize grid.",visualEffect:"FAILOVER_ACTIVE"}},navigation:{routePrompt:"Rerouting life support maintenance & refuel convoys to Oxygen Hub Beta via West Concourse.",startNode:"node_central",endNode:"node_west_2",mode:"EMERGENCY_SUPPLY_CONVOY"},actionGuide:[{step:1,title:"Manifold Breach Flagged",text:"Pressure sensor OM-42 registered rapid depressurization in Sector Alpha."},{step:2,title:"Isolation Valves Sealed",text:"Automatic pyro-valves isolated breached storage tank within 1.2 seconds."},{step:3,title:"Secondary Hub Boost",text:"Oxygen Hub Beta cryo-cracking compressor ramped to 125% rated output."},{step:4,title:"Emergency Route Dispatched",text:"Illuminated safe transit corridor between Command Centre and Hub Beta."}]},POWER_FAILURE:{id:"POWER_FAILURE",title:"[DEMO SIMULATION] Helios Tokamak Core Magnetic Decoupling",shortTitle:"Helios Grid Failure",icon:"zap-off",severity:"DISASTER",badgeColor:"#FFAA00",description:"Magnetic confinement field fluctuation at Helios Fusion Complex. Tokamak reactor scrams into emergency dampening. Total grid loss imminent.",triggerFacilityId:"helios-power",targetFacilityId:"safehaven-shelter",originFacilityId:"command-tower",effects:{failedFacility:{id:"helios-power",status:"CRITICAL",health:24,alertMessage:"Magnetic containment compromised! Fusion plasma dumped to cryo-heatsinks. Grid output: 0 MW.",visualEffect:"BLACKOUT_FLICKER"},affectedFacilities:[{id:"nova-university",status:"WARNING",health:65,reason:"Grid power severed. Running on 30-minute auxiliary battery pack. High-compute arrays suspended."},{id:"research-laboratory",status:"WARNING",health:60,reason:"Auxiliary generators engaged. Cryogenic sample vaults at risk if unpowered > 4 hours."},{id:"mars-gateway-spaceport",status:"WARNING",health:70,reason:"Flight landing radar offline. Ground operations restricted to emergency beacon guidance."},{id:"aquacycle-water",status:"WARNING",health:75,reason:"Nanofiltration pumps operating at 40% capacity on emergency solar buffer."}],backupSource:{name:"SafeHaven Geothermal RTG & Solar Reserves",status:"ENGAGED",capacity:"Supplying 4.8 MW emergency baseline to life-support systems."}},navigation:{routePrompt:"Critical Power Grid Response: Dispatching Engineering Rapid Reaction Team to Helios Power.",startNode:"node_central",endNode:"node_east_1",mode:"RAPID_RESPONSE"},actionGuide:[{step:1,title:"Fusion Safety Scram",text:"Helios Fusion Reactor tripped into safety scram. Colony grid drops 52 MW."},{step:2,title:"Cascading Dependency Shedding",text:"Dependency Engine isolated 4 non-critical facilities to safeguard life support."},{step:3,title:"Geothermal Baseload Online",text:"SafeHaven Geothermal RTG kicked in within 80ms, powering hospital & water filtration."},{step:4,title:"Engineering Team Dispatched",text:"Emergency engineering rapid intervention squad routed along East Concourse."}]},MEDICAL_EMERGENCY:{id:"MEDICAL_EMERGENCY",title:"[DEMO SIMULATION] Code Red Trauma: Airlock Decompression Injury",shortTitle:"Medical Trauma",icon:"cross-alert",severity:"EMERGENCY",badgeColor:"#FF725E",description:"Emergency Beacon activated in Ares Habitat Sector Alpha. A colonist suffered severe decompression trauma and fractures during external airlock maintenance.",triggerFacilityId:"residential-habitat-alpha",targetFacilityId:"marscare-hospital",originFacilityId:"residential-habitat-alpha",effects:{patientLocation:{id:"residential-habitat-alpha",status:"WARNING",health:82,alertMessage:"Decompression injury in Airlock 3! Medevac hover-ambulance dispatched.",visualEffect:"PULSE_WARNING"},receivingHospital:{id:"marscare-hospital",status:"OPERATIONAL",health:98,alertMessage:"Trauma Bay 1 & Hyperbaric Decompression Pod prepped. Surgical team standing by.",visualEffect:"HOSPITAL_ACTIVE"}},navigation:{routePrompt:"Priority Medevac Route: Ares Habitat Alpha -> MarsCare Medical Center Trauma Ramp.",startNode:"node_central_west",endNode:"node_west_1",mode:"MEDEVAC_PRIORITY"},actionGuide:[{step:1,title:"Citizen Distress Beacon",text:"Bio-telemetry monitor in Habitation Airlock 3 alerted MarsCare emergency triage."},{step:2,title:"Nearest Trauma Centre Selected",text:"Navigation engine verified MarsCare Hospital has an active hyperbaric decompression pod."},{step:3,title:"Green Corridor Clearance",text:"All civilian traffic holds at perimeter intersections for inbound Medevac hovercraft."},{step:4,title:"Direct Patient Transfer",text:"Estimated transit time 2.1 minutes via West Arterial Concourse."}]}};class n0{constructor(){this.pathfinder=new To}returnToSafeLocation(){const t=pt.navigation.startFacilityId||pt.userLocation.facilityId||"residential-habitat-alpha",e="safehaven-shelter",n=this.pathfinder.findRouteBetweenFacilities(t,e,"SAFER"),i={id:"RETURN_TO_SAFETY",title:"[DEMO SIMULATION] Emergency Evacuation: Return to Safe Location",shortTitle:"Evacuation to Shelter",severity:"EMERGENCY",badgeColor:"#00FFCC",description:"One-Click Emergency Return activated. Navigation engine calculated the lowest-risk safe corridor to SafeHaven Emergency Bunker.",triggerFacilityId:t,targetFacilityId:e,originFacilityId:t,navigation:{routePrompt:`Emergency Safe Path: Navigating to SafeHaven Shelter (${n.distance}m, Est. ${n.travelTimeMinutes} min).`,mode:"EMERGENCY_SAFE_RETURN"},actionGuide:[{step:1,title:"Safe Haven Target Locked",text:"SafeHaven Emergency Shelter blast doors and life-support reception prepared."},{step:2,title:"Lowest Hazard Trajectory Plotted",text:`Route generated with ${n.hazardScore}% hazard exposure score via reinforced corridors.`},{step:3,title:"Priority Clearance Signal",text:"Citizen transponder pulsed beacon for right-of-way transit."},{step:4,title:"Autonomous Air Quality Check",text:"Shelter atmospheric scrubber levels verified nominal (100% capacity)."}],route:n};return pt.setNavigation({startFacilityId:t,destinationFacilityId:e,activeRoute:n,isNavigating:!0,navigationReason:"EMERGENCY_SAFE_RETURN"}),pt.setScenario({...i,activeTimestamp:new Date().toLocaleTimeString()}),pt.selectFacility(e),{scenario:i,route:n}}triggerBlockedPath(){const t=Pi.BLOCKED_PATH,e=t.blockedEdge;this.pathfinder.blockEdge(e.u,e.v);const n=this.pathfinder.findPath(t.navigation.startNode,t.navigation.endNode,"SHORTEST");return pt.setNavigation({startFacilityId:t.originFacilityId,destinationFacilityId:t.targetFacilityId,activeRoute:n,isNavigating:!0,navigationReason:"DYNAMIC_REROUTE_BLOCKED_PATH"}),pt.setScenario({...t,route:n,activeTimestamp:new Date().toLocaleTimeString()}),pt.selectFacility(t.targetFacilityId),{scenario:t,route:n}}triggerCommFailure(){const t=Pi.COMM_FAILURE;pt.updateFacility("command-tower",{emergencyAlert:"Orbital uplink severed by solar proton flux. Switched to subterranean fiber.",visualEffect:"PULSE_WARNING"});const e=this.pathfinder.findPath(t.navigation.startNode,t.navigation.endNode,"SAFER");return pt.setNavigation({startFacilityId:t.originFacilityId,destinationFacilityId:t.targetFacilityId,activeRoute:e,isNavigating:!0,navigationReason:"OFFLINE_INERTIAL_GUIDANCE"}),pt.setScenario({...t,route:e,activeTimestamp:new Date().toLocaleTimeString()}),pt.selectFacility(t.targetFacilityId),{scenario:t,route:e}}triggerRoverBreakdown(){const t=Pi.ROVER_BREAKDOWN,e=this.pathfinder.findPath(t.navigation.startNode,t.navigation.endNode,"SHORTEST");return pt.updateFacility("safehaven-shelter",{emergencyAlert:"Heavy Hauler RR-01 dispatched with auxiliary oxygen transfer umbilical.",visualEffect:"MEDEVAC_ACTIVE"}),pt.setNavigation({startFacilityId:"safehaven-shelter",destinationFacilityId:"residential-habitat-beta",activeRoute:e,isNavigating:!0,navigationReason:"ROVER_RESCUE_DISPATCH"}),pt.setScenario({...t,route:e,activeTimestamp:new Date().toLocaleTimeString()}),pt.selectFacility("safehaven-shelter"),{scenario:t,route:e}}triggerOxygenFailure(){const t=Pi.OXYGEN_FAILURE;pt.updateFacility("oxygen-hub-alpha",{status:"OFFLINE",health:12,emergencyAlert:t.effects.failedFacility.alertMessage,visualEffect:"FIRE_AND_ALARM"}),pt.updateFacility("oxygen-hub-beta",{status:"OPERATIONAL",emergencyAlert:t.effects.alternativeFacility.boostMessage,visualEffect:"FAILOVER_ACTIVE"});const e=this.pathfinder.findPath(t.navigation.startNode,t.navigation.endNode);return pt.setNavigation({startFacilityId:"command-tower",destinationFacilityId:"oxygen-hub-beta",activeRoute:e,isNavigating:!0,navigationReason:"EMERGENCY_O2_REROUTE"}),pt.setScenario({...t,route:e,activeTimestamp:new Date().toLocaleTimeString()}),pt.selectFacility("oxygen-hub-alpha"),{scenario:t,route:e}}triggerMedicalEmergency(){const t=Pi.MEDICAL_EMERGENCY;pt.updateFacility("residential-habitat-alpha",{status:"WARNING",health:80,emergencyAlert:t.effects.patientLocation.alertMessage,visualEffect:"PULSE_WARNING"});const e=this.pathfinder.findNearestOperationalFacility(t.navigation.startNode,"hospital",pt.getAllFacilities()),n=e?e.facility:pt.getFacility("marscare-hospital"),i=e?e.route:this.pathfinder.findPath(t.navigation.startNode,t.navigation.endNode);return n&&pt.updateFacility(n.id,{emergencyAlert:"Trauma Bay 1 & Hyperbaric Pod reserved for incoming critical casualty from Ares Hab Alpha.",visualEffect:"HOSPITAL_ACTIVE"}),pt.setNavigation({startFacilityId:"residential-habitat-alpha",destinationFacilityId:n?n.id:"marscare-hospital",activeRoute:i,isNavigating:!0,navigationReason:"MEDEVAC_PRIORITY"}),pt.setScenario({...t,targetFacilityId:n?n.id:"marscare-hospital",route:i,activeTimestamp:new Date().toLocaleTimeString()}),pt.selectFacility("residential-habitat-alpha"),{scenario:t,route:i}}triggerPowerFailure(){const t=Pi.POWER_FAILURE;pt.updateFacility("helios-power",{status:"CRITICAL",health:22,emergencyAlert:t.effects.failedFacility.alertMessage,visualEffect:"BLACKOUT_FLICKER"});for(const n of t.effects.affectedFacilities)pt.updateFacility(n.id,{status:"WARNING",health:n.health,emergencyAlert:n.reason,visualEffect:"POWER_WARNING"});pt.updateFacility("safehaven-shelter",{emergencyAlert:"SafeHaven Geothermal Backup grid supplying 4.8 MW baseline to medical & life support.",visualEffect:"BACKUP_ACTIVE"});const e=this.pathfinder.findPath(t.navigation.startNode,t.navigation.endNode);return pt.setNavigation({startFacilityId:"command-tower",destinationFacilityId:"helios-power",activeRoute:e,isNavigating:!0,navigationReason:"POWER_ENGINEERING_DISPATCH"}),pt.setScenario({...t,route:e,activeTimestamp:new Date().toLocaleTimeString()}),pt.selectFacility("helios-power"),{scenario:t,route:e}}resetScenario(){return this.pathfinder.resetNetwork(),pt.resetAll(),!0}}const Cn=new n0;class i0{constructor(t,e,n){this.container=t,this.colonyState=e,this.router=n}render(){const t=this.colonyState.activeScenario,e=!!t,n=this.colonyState.navigation;this.colonyState.getAllFacilities().filter(a=>a.status==="OFFLINE"||a.status==="CRITICAL"||a.status==="WARNING"),this.container.innerHTML=`
      <section class="emergency-page-layout">
        <div class="emergency-container">
          <!-- Page Header & One-Click Return to Safety Hero Action -->
          <div class="emergency-header-card glass-panel">
            <div class="emergency-badge-row">
              <span class="badge-danger">🚨 EMERGENCY INTELLIGENCE</span>
              <span class="badge-demo">[DEMO SIMULATION]</span>
            </div>

            <div class="header-main-flex">
              <div class="header-text-block">
                <h1 class="page-title">Colony Emergency Response & Survival Centre</h1>
                <p class="page-sub">
                  Test automated lifeline protocols and emergency survival navigation. In the event of primary life-support disruptions, 
                  roadway blockages, rover breakdowns, or power grid scrams, MARS PULSE computes instant bypass routes 
                  to operational backups and shelters across Chryse Colony.
                </p>
              </div>

              <!-- ONE-CLICK RETURN TO SAFE LOCATION CTA -->
              <div class="evacuation-cta-card">
                <button id="btn-return-to-safety" class="btn-return-safety-pulse" title="Calculate immediate lowest-risk evacuation path to SafeHaven Shelter">
                  <span class="shield-pulse-icon">🛡️</span>
                  <div class="btn-text-wrap">
                    <span class="btn-main-title">RETURN TO SAFE LOCATION</span>
                    <span class="btn-sub-title">1-Click Evacuation to SafeHaven Shelter</span>
                  </div>
                </button>
              </div>
            </div>

            <div class="header-action-bar">
              ${e?`
                <button id="btn-emergency-reset" class="btn-reset-scenario">
                  <span>🔄 Reset Scenario (Return to Nominal Operations)</span>
                </button>
              `:`
                <div class="nominal-tag">
                  <span class="green-dot">●</span>
                  <span>Grid Status: 100% Operational • Zero Active Contingencies</span>
                </div>
              `}
            </div>
          </div>

          <!-- ACTIVE INCIDENT BANNER & STEP-BY-STEP GUIDANCE -->
          ${e?`
            <div class="active-incident-card glass-panel alert-pulse">
              <div class="incident-top">
                <div class="incident-badge">
                  <span class="blink-dot">●</span>
                  <span>ACTIVE INCIDENT: ${t.title||t.shortTitle||t.name}</span>
                </div>
                <div class="incident-time">Simulated MTC: ${t.activeTimestamp||"14:26 MTC"}</div>
              </div>

              <h2 class="incident-title">${t.description}</h2>
              <p class="incident-cascade"><strong>Severity Level:</strong> ${t.severity||"CRITICAL"}</p>

              <!-- Quick Route Preview & Map Link -->
              <div class="incident-action-box">
                <div class="route-preview-meta">
                  <span class="p-label">AUTOMATED ACTION:</span>
                  <span class="p-val">${t.navigation?t.navigation.routePrompt||t.navigation.mode:"Autonomous Lifeline Reroute"}</span>
                  ${n.activeRoute?`
                    <span class="p-dist">• Distance: <strong>${n.activeRoute.distance} m</strong> (${n.activeRoute.travelTimeMinutes} min)</span>
                  `:""}
                </div>
                <button id="btn-view-emergency-route" class="btn-primary-emergency">
                  <span>View Emergency Route on Colony Map</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
                </button>
              </div>

              <!-- STEP-BY-STEP SURVIVAL GUIDANCE CHECKLIST -->
              ${t.actionGuide&&t.actionGuide.length>0?`
                <div class="survival-guidance-section">
                  <h3 class="guidance-title">📋 STEP-BY-STEP EMERGENCY SURVIVAL PROTOCOL</h3>
                  <div class="guidance-steps-list">
                    ${t.actionGuide.map((a,r)=>{const o=typeof a=="string"?`Step ${r+1}`:a.title,c=typeof a=="string"?a:a.text;return`
                        <div class="guidance-step-card">
                          <div class="step-num">${r+1}</div>
                          <div class="step-content">
                            <strong class="step-name">${o}</strong>
                            <p class="step-desc">${c}</p>
                          </div>
                          <span class="step-status-check">✓ Active</span>
                        </div>
                      `}).join("")}
                  </div>
                </div>
              `:""}
            </div>
          `:`
            <div class="nominal-status-banner glass-panel">
              <div class="nominal-icon">🛡️</div>
              <div class="nominal-content">
                <h3>Colony Lifeline Grid is Operating Nominally</h3>
                <p>All colony infrastructure is online. Atmospheric pressure is 7.8 mbar, oxygen lines are pressurized, and grid power is nominal at 52.4 MW.</p>
              </div>
            </div>
          `}

          <!-- SIMULATION CONTROLS GRID (ALL 4 REQUIRED CRISIS SCENARIOS) -->
          <div class="simulations-section">
            <div class="section-title-row">
              <h2 class="section-title">Emergency Survival Scenarios [Demo Simulations]</h2>
              <span class="section-sub">Select any crisis below to simulate failures and demonstrate automated rerouting:</span>
            </div>

            <div class="scenarios-grid">
              <!-- Scenario 1: Blocked Path / Regolith Rockfall -->
              <div class="scenario-card glass-panel ${t&&t.id==="BLOCKED_PATH"?"active-sim":""}">
                <div class="scenario-card-header">
                  <span class="scenario-type-badge rockfall">ROAD OBSTRUCTION</span>
                  <span class="demo-pill">DEMO SIMULATION</span>
                </div>
                <h3>⚠️ Regolith Rockfall: Blocked Path</h3>
                <p class="scenario-desc">
                  Talus rockfall collapses over Central-West Concourse. Navigation graph dynamically severs the blocked edge and routes traffic via outer ringway.
                </p>
                <div class="scenario-specs">
                  <div><strong>Affected:</strong> Central Arterial Roadway (45 m³ boulders)</div>
                  <div><strong>Automated Fallback:</strong> Dynamic recalculation via North Ringway</div>
                </div>
                <button id="btn-trigger-blocked-sim" class="btn-scenario-action rockfall">
                  <span>${t&&t.id==="BLOCKED_PATH"?"Scenario Active":"Simulate Blocked Path"}</span>
                </button>
              </div>

              <!-- Scenario 2: Communications Failure -->
              <div class="scenario-card glass-panel ${t&&t.id==="COMM_FAILURE"?"active-sim":""}">
                <div class="scenario-card-header">
                  <span class="scenario-type-badge comm">BLACKOUT</span>
                  <span class="demo-pill">DEMO SIMULATION</span>
                </div>
                <h3>📡 Solar Flare: Comm Failure</h3>
                <p class="scenario-desc">
                  X-class coronal mass ejection ionizes Mars atmosphere, blinding orbital satellites. Navigation switches to local subterranean fiber & dead-reckoning.
                </p>
                <div class="scenario-specs">
                  <div><strong>Affected:</strong> Orbital Relays & Colony Satellite Mesh</div>
                  <div><strong>Automated Fallback:</strong> Autonomous IMU Dead-Reckoning & Fiber</div>
                </div>
                <button id="btn-trigger-comm-sim" class="btn-scenario-action comm">
                  <span>${t&&t.id==="COMM_FAILURE"?"Scenario Active":"Simulate Comm Failure"}</span>
                </button>
              </div>

              <!-- Scenario 3: Rover Breakdown -->
              <div class="scenario-card glass-panel ${t&&t.id==="ROVER_BREAKDOWN"?"active-sim":""}">
                <div class="scenario-card-header">
                  <span class="scenario-type-badge rover">MECHANICAL FAILURE</span>
                  <span class="demo-pill">DEMO SIMULATION</span>
                </div>
                <h3>🚜 Rover Breakdown: Traction Failure</h3>
                <p class="scenario-desc">
                  Pressurized Rover PR-04 suffers drive inverter seizure in Southeast sector with 45 minutes of life support. Dispatches emergency recovery crawler.
                </p>
                <div class="scenario-specs">
                  <div><strong>Affected:</strong> Pressurized Expedition Rover PR-04</div>
                  <div><strong>Automated Fallback:</strong> SafeHaven Medevac Hauler dispatched</div>
                </div>
                <button id="btn-trigger-rover-sim" class="btn-scenario-action rover">
                  <span>${t&&t.id==="ROVER_BREAKDOWN"?"Scenario Active":"Simulate Rover Breakdown"}</span>
                </button>
              </div>

              <!-- Scenario 4: Oxygen Contingency -->
              <div class="scenario-card glass-panel ${t&&t.id==="OXYGEN_FAILURE"?"active-sim":""}">
                <div class="scenario-card-header">
                  <span class="scenario-type-badge o2">LIFE SUPPORT</span>
                  <span class="demo-pill">DEMO SIMULATION</span>
                </div>
                <h3>💨 Oxygen Hub Alpha Rupture</h3>
                <p class="scenario-desc">
                  Cryogenic manifold failure at Oxygen Hub Alpha cuts central line. Automated failover switches supply load to Oxygen Hub Beta.
                </p>
                <div class="scenario-specs">
                  <div><strong>Affected:</strong> Oxygen Hub Alpha (drops to 12% health)</div>
                  <div><strong>Automated Fallback:</strong> Oxygen Hub Beta surged to 125% output</div>
                </div>
                <button id="btn-trigger-o2-sim" class="btn-scenario-action o2">
                  <span>${t&&t.id==="OXYGEN_FAILURE"?"Scenario Active":"Simulate O2 Failure"}</span>
                </button>
              </div>

              <!-- Scenario 5: Power Grid Decoupling -->
              <div class="scenario-card glass-panel ${t&&t.id==="POWER_FAILURE"?"active-sim":""}">
                <div class="scenario-card-header">
                  <span class="scenario-type-badge power">GRID SCRAM</span>
                  <span class="demo-pill">DEMO SIMULATION</span>
                </div>
                <h3>⚡ Helios Fusion Core Decoupling</h3>
                <p class="scenario-desc">
                  Magnetic field oscillation scrams Helios Tokamak. 4 dependent facilities shed load while SafeHaven Geothermal RTG activates baseline power.
                </p>
                <div class="scenario-specs">
                  <div><strong>Affected:</strong> Helios Power (0 MW output) & 4 facilities</div>
                  <div><strong>Automated Fallback:</strong> SafeHaven Geothermal Grid online</div>
                </div>
                <button id="btn-trigger-power-sim" class="btn-scenario-action power">
                  <span>${t&&t.id==="POWER_FAILURE"?"Scenario Active":"Simulate Power Scram"}</span>
                </button>
              </div>

              <!-- Scenario 6: Medical Emergency -->
              <div class="scenario-card glass-panel ${t&&t.id==="MEDICAL_EMERGENCY"?"active-sim":""}">
                <div class="scenario-card-header">
                  <span class="scenario-type-badge medical">TRAUMA CODE RED</span>
                  <span class="demo-pill">DEMO SIMULATION</span>
                </div>
                <h3>🚑 Ares Habitat Medical Trauma</h3>
                <p class="scenario-desc">
                  Decompression injury casualty in Ares Habitat Alpha airlock requiring urgent hyperbaric surgery at MarsCare Medical Center.
                </p>
                <div class="scenario-specs">
                  <div><strong>Affected:</strong> Ares Habitat Sector Alpha</div>
                  <div><strong>Automated Fallback:</strong> MarsCare Hospital Trauma Bay 1 reserved</div>
                </div>
                <button id="btn-trigger-med-sim" class="btn-scenario-action medical">
                  <span>${t&&t.id==="MEDICAL_EMERGENCY"?"Scenario Active":"Simulate Code Red Trauma"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    `,this.setupEvents()}setupEvents(){const t=document.getElementById("btn-return-to-safety");t&&t.addEventListener("click",()=>{Cn.returnToSafeLocation(),this.router.navigate("navigate")});const e=document.getElementById("btn-trigger-blocked-sim"),n=document.getElementById("btn-trigger-comm-sim"),i=document.getElementById("btn-trigger-rover-sim"),a=document.getElementById("btn-trigger-o2-sim"),r=document.getElementById("btn-trigger-power-sim"),o=document.getElementById("btn-trigger-med-sim");e&&e.addEventListener("click",()=>{Cn.triggerBlockedPath(),this.render()}),n&&n.addEventListener("click",()=>{Cn.triggerCommFailure(),this.render()}),i&&i.addEventListener("click",()=>{Cn.triggerRoverBreakdown(),this.render()}),a&&a.addEventListener("click",()=>{Cn.triggerOxygenFailure(),this.render()}),r&&r.addEventListener("click",()=>{Cn.triggerPowerFailure(),this.render()}),o&&o.addEventListener("click",()=>{Cn.triggerMedicalEmergency(),this.render()});const c=document.getElementById("btn-emergency-reset");c&&c.addEventListener("click",()=>{Cn.resetScenario(),this.render()});const l=document.getElementById("btn-view-emergency-route");l&&l.addEventListener("click",()=>{this.router.navigate("navigate")})}}class s0{constructor(t,e,n={}){this.uiContainer=t,this.router=e,this.callbacks=n,this.initDOM(),this.initComponents(),this.subscribeToState(),this.renderCurrentPage()}initDOM(){this.uiContainer.innerHTML=`
      <!-- 1. Top Navigation Bar Slot -->
      <div id="top-nav-slot"></div>

      <!-- 2. Active Page Content Slot -->
      <main id="page-content-slot" class="page-viewport"></main>

      <!-- 3. Facility Detail Modal Slot -->
      <div id="facility-modal-slot"></div>

      <!-- 4. Onboarding Guidance Modal Slot -->
      <div id="onboarding-modal-slot"></div>
    `,this.topNavSlot=document.getElementById("top-nav-slot"),this.pageContentSlot=document.getElementById("page-content-slot"),this.facilityModalSlot=document.getElementById("facility-modal-slot"),this.onboardingModalSlot=document.getElementById("onboarding-modal-slot"),this.map2DContainer=document.getElementById("map-2d-container"),this.canvas3DContainer=document.getElementById("canvas-container")}initComponents(){this.topNav=new Vv(this.topNavSlot,pt,this.router),this.onboardingModal=new Wv(this.onboardingModalSlot,pt,this.router),this.facilityModal=new Xv(this.facilityModalSlot,pt,this.router),this.homePage=new $v(this.pageContentSlot,pt,this.router),this.navigatePage=new Jv(this.pageContentSlot,pt,this.router,{onCalculateRoute:(t,e,n)=>{if(this.callbacks.onCalculateRoute)return this.callbacks.onCalculateRoute(t,e,n)},onSimulateRoadBlockage:(t,e)=>{if(this.callbacks.onSimulateRoadBlockage)return this.callbacks.onSimulateRoadBlockage(t,e)},onClearRoadBlockage:(t,e)=>{if(this.callbacks.onClearRoadBlockage)return this.callbacks.onClearRoadBlockage(t,e)},onClearRoute:()=>{this.callbacks.onClearRoute&&this.callbacks.onClearRoute()},onZoomIn:()=>{this.callbacks.onZoomIn&&this.callbacks.onZoomIn()},onZoomOut:()=>{this.callbacks.onZoomOut&&this.callbacks.onZoomOut()},onRecenterResident:()=>{this.callbacks.onRecenterResident&&this.callbacks.onRecenterResident()},onRecenterAll:()=>{this.callbacks.onRecenterAll&&this.callbacks.onRecenterAll()},onToggleTraffic:()=>{if(this.callbacks.onToggleTraffic)return this.callbacks.onToggleTraffic()},onPlayFlythrough:()=>{this.callbacks.onPlayFlythrough&&this.callbacks.onPlayFlythrough()},onFocusFacility:t=>{this.callbacks.onFocusFacility&&this.callbacks.onFocusFacility(t)}}),this.sciencePage=new Qv(this.pageContentSlot,pt,this.router,{onFocusLocation:t=>{this.callbacks.onFocusFacility&&this.callbacks.onFocusFacility({coords:t})}}),this.missionPlannerPage=new t0(this.pageContentSlot,pt,this.router),this.facilitiesPage=new e0(this.pageContentSlot,pt,this.router),this.emergencyPage=new i0(this.pageContentSlot,pt,this.router),pt.onboardingDismissed||this.onboardingModal.render()}renderCurrentPage(){const t=pt.currentPage,e=pt.currentRouteParams;this.topNav.update(),this.updateViewportVisibility(t),this.pageContentSlot.className=`page-viewport page-${t}`,t==="home"?(this.callbacks.onSetCameraHomeOrbit&&this.callbacks.onSetCameraHomeOrbit(!0),this.homePage.render()):t==="navigate"?(this.callbacks.onSetCameraHomeOrbit&&this.callbacks.onSetCameraHomeOrbit(!1),this.navigatePage.render(),e&&(e.to||e.focus)&&this.navigatePage.handleRouteParams(e)):t==="science"?(this.callbacks.onSetCameraHomeOrbit&&this.callbacks.onSetCameraHomeOrbit(!0),this.sciencePage.render()):t==="planner"?(this.callbacks.onSetCameraHomeOrbit&&this.callbacks.onSetCameraHomeOrbit(!0),this.missionPlannerPage.render()):t==="facilities"?(this.callbacks.onSetCameraHomeOrbit&&this.callbacks.onSetCameraHomeOrbit(!0),this.facilitiesPage.render()):t==="emergency"&&(this.callbacks.onSetCameraHomeOrbit&&this.callbacks.onSetCameraHomeOrbit(!0),this.emergencyPage.render()),this.pageContentSlot.scrollTop=0}updateViewportVisibility(t){if(!this.map2DContainer||!this.canvas3DContainer)return;const e=pt.viewMode;t==="home"?(this.canvas3DContainer.style.display="block",this.canvas3DContainer.style.opacity="1",this.canvas3DContainer.style.pointerEvents="none",this.canvas3DContainer.style.zIndex="1",this.map2DContainer.style.display="none",this.map2DContainer.style.opacity="0",this.map2DContainer.style.pointerEvents="none",this.map2DContainer.style.zIndex="0"):t==="navigate"?e==="3D"?(this.canvas3DContainer.style.display="block",this.canvas3DContainer.style.opacity="1",this.canvas3DContainer.style.pointerEvents="auto",this.canvas3DContainer.style.zIndex="2",this.map2DContainer.style.display="none",this.map2DContainer.style.opacity="0",this.map2DContainer.style.pointerEvents="none",this.map2DContainer.style.zIndex="0"):(this.map2DContainer.style.display="block",this.map2DContainer.style.opacity="1",this.map2DContainer.style.pointerEvents="auto",this.map2DContainer.style.zIndex="2",this.canvas3DContainer.style.display="none",this.canvas3DContainer.style.opacity="0",this.canvas3DContainer.style.pointerEvents="none",this.canvas3DContainer.style.zIndex="0",this.callbacks.onResize2DMap&&this.callbacks.onResize2DMap()):(this.canvas3DContainer.style.display="block",this.canvas3DContainer.style.opacity="0.35",this.canvas3DContainer.style.pointerEvents="none",this.canvas3DContainer.style.zIndex="1",this.map2DContainer.style.display="none",this.map2DContainer.style.opacity="0",this.map2DContainer.style.pointerEvents="none",this.map2DContainer.style.zIndex="0")}subscribeToState(){pt.subscribe((t,e)=>{t==="PAGE_CHANGED"?this.renderCurrentPage():t==="VIEW_MODE_CHANGED"?this.updateViewportVisibility(pt.currentPage):t==="FACILITY_MODAL_OPENED"?this.facilityModal.render():t==="FACILITY_MODAL_CLOSED"?this.facilityModal.render():t==="ONBOARDING_CHANGED"?this.onboardingModal.render():t==="SCENARIO_CHANGED"?(this.topNav.update(),pt.currentPage==="home"?this.homePage.render():pt.currentPage==="emergency"&&this.emergencyPage.render()):t==="COLONY_RESET"&&(this.topNav.update(),this.renderCurrentPage())})}}class a0{constructor(t){this.colonyState=t,this.routes=["home","navigate","science","planner","facilities","emergency"],this.defaultRoute="home",window.addEventListener("hashchange",()=>this.handleRoute())}init(){window.location.hash?this.handleRoute():window.location.hash="#/home"}parseHash(){const t=window.location.hash.replace(/^#\/?/,""),[e,n]=t.split("?"),i=e?e.toLowerCase():this.defaultRoute,a=this.routes.includes(i)?i:this.defaultRoute,r={};if(n){const o=new URLSearchParams(n);for(const[c,l]of o.entries())r[c]=l}return{page:a,params:r}}handleRoute(){const{page:t,params:e}=this.parseHash();this.colonyState.setPage(t,e)}navigate(t,e={}){let n=`#/${t}`;if(Object.keys(e).length>0){const a=new URLSearchParams(e).toString();n+=`?${a}`}window.location.hash=n}}window.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("canvas-container"),t=document.getElementById("colony-map-2d"),e=document.getElementById("ui-container"),n=new To;let i=null,a=null;a=new Hv(t,{onSelect:o=>{pt.selectFacility(o.id),i&&i.cameraController.focusOnFacility(o.coords,.8)}});const r=new a0(pt);new s0(e,r,{onCalculateRoute:(o,c,l="SHORTEST")=>{const h=n.findRouteBetweenFacilities(o,c,l);if(h.error)return alert(`Navigation Error: ${h.error}`),h;if(pt.setNavigation({startFacilityId:o,destinationFacilityId:c,activeRoute:h,isNavigating:!0,turnDirections:h.turnDirections}),a.fitBounds(h.waypoints),i){const d=pt.getFacility(c),u=d&&(d.status==="OFFLINE"||d.status==="WARNING");let p=4385013;l==="SAFER"&&(p=65484),l==="ALTERNATIVE"&&(p=11032055),u&&(p=16724838),i.routeRenderer.renderRoute(h.waypoints,p,u),d&&i.cameraController.focusOnFacility(d.coords,1.2)}return h},onSimulateRoadBlockage:(o,c)=>{n.blockEdge("node_central","node_central_west"),n.blockEdge("node_central_west","node_west_1");const l=n.findRouteBetweenFacilities(o,c,"SHORTEST");return l.error||(pt.setNavigation({startFacilityId:o,destinationFacilityId:c,activeRoute:l,isNavigating:!0,navigationReason:"DYNAMIC_REROUTE_BLOCKED_ROAD"}),a.fitBounds(l.waypoints),i&&i.routeRenderer.renderRoute(l.waypoints,16755200,!0)),l},onClearRoadBlockage:(o,c)=>{n.resetNetwork();const l=n.findRouteBetweenFacilities(o,c,"SHORTEST");return l.error||(pt.setNavigation({startFacilityId:o,destinationFacilityId:c,activeRoute:l,isNavigating:!0}),a.fitBounds(l.waypoints),i&&i.routeRenderer.renderRoute(l.waypoints,4385013,!1)),l},onClearRoute:()=>{pt.clearNavigation(),i&&i.routeRenderer.clearRoute()},onPlayFlythrough:()=>{pt.setViewMode("3D"),i&&i.cameraController.playCinematicFlythrough()},onSetCameraHomeOrbit:o=>{i&&i.cameraController&&i.cameraController.setHomePreview(o)},onResize2DMap:()=>{a&&a.resize()},onZoomIn:()=>{pt.viewMode==="2D"?a.zoomIn():i&&i.camera.position.multiplyScalar(.85)},onZoomOut:()=>{pt.viewMode==="2D"?a.zoomOut():i&&i.camera.position.multiplyScalar(1.15)},onRecenterResident:()=>{a.recenterOnResident(),i&&i.cameraController.focusOnFacility(pt.userLocation.coords,1)},onRecenterAll:()=>{a.recenterOverview(),i&&i.cameraController.resetToOverview(1)},onToggleTraffic:()=>a.toggleTraffic(),onFocusFacility:o=>{a.panTo(o.coords.x,o.coords.z,4.5),i&&i.cameraController.focusOnFacility(o.coords,1)}}),i=kv(s,{onFacilitySelect:o=>{pt.viewMode==="3D"&&pt.currentPage==="navigate"&&(pt.selectFacility(o.id),a.panTo(o.coords.x,o.coords.z))}}),pt.subscribe((o,c)=>{if(o==="NAVIGATION_UPDATED"){const l=pt.navigation;if(l.isNavigating&&l.activeRoute&&(a.fitBounds(l.activeRoute.waypoints),i)){const h=l.navigationReason&&l.navigationReason.includes("EMERGENCY"),d=h?16724838:l.navigationReason==="MEDEVAC_PRIORITY"?16740958:4385013;i.routeRenderer.renderRoute(l.activeRoute.waypoints,d,h);const u=pt.getFacility(l.destinationFacilityId);u&&i.cameraController.focusOnFacility(u.coords,1.2)}}else o==="NAVIGATION_CLEARED"||o==="COLONY_RESET"?i&&i.routeRenderer.clearRoute():o==="DOME_MODE_CHANGED"&&i&&i.dome&&i.dome.setMode(c)}),r.init(),"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/service-worker.js").catch(o=>{console.log("SW registration note:",o)})})});
