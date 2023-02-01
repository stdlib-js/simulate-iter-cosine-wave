// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,n){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||a.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,t,n.get),p&&i&&i.call(r,t,n.set),r};var c=t;function l(r,t,n){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var y=Object.prototype.hasOwnProperty;function p(r,t){return null!=r&&y.call(r,t)}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&p(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function s(r){return r!=r}var b=Number.POSITIVE_INFINITY,d=Number,w=d.NEGATIVE_INFINITY;function m(r){return r===b||r===w}function j(r){return Math.abs(r)}var A="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function h(){return A&&"symbol"==typeof Symbol.toStringTag}var _=Object.prototype.toString;var g="function"==typeof Symbol?Symbol.toStringTag:"";var O=h()?function(r){var t,n,e;if(null==r)return _.call(r);n=r[g],t=p(r,g);try{r[g]=void 0}catch(t){return _.call(r)}return e=_.call(r),t?r[g]=n:delete r[g],e}:function(r){return _.call(r)},U="function"==typeof Uint32Array;var E="function"==typeof Uint32Array?Uint32Array:null;var N,S="function"==typeof Uint32Array?Uint32Array:void 0;N=function(){var r,t,n;if("function"!=typeof E)return!1;try{t=new E(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(U&&n instanceof Uint32Array||"[object Uint32Array]"===O(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?S:function(){throw new Error("not implemented")};var P=N,I="function"==typeof Float64Array;var T="function"==typeof Float64Array?Float64Array:null;var F,W="function"==typeof Float64Array?Float64Array:void 0;F=function(){var r,t,n;if("function"!=typeof T)return!1;try{t=new T([1,3.14,-3.14,NaN]),n=t,r=(I&&n instanceof Float64Array||"[object Float64Array]"===O(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?W:function(){throw new Error("not implemented")};var G=F,H="function"==typeof Uint8Array;var B="function"==typeof Uint8Array?Uint8Array:null;var L,R="function"==typeof Uint8Array?Uint8Array:void 0;L=function(){var r,t,n;if("function"!=typeof B)return!1;try{t=new B(t=[1,3.14,-3.14,256,257]),n=t,r=(H&&n instanceof Uint8Array||"[object Uint8Array]"===O(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?R:function(){throw new Error("not implemented")};var x=L,V="function"==typeof Uint16Array;var M="function"==typeof Uint16Array?Uint16Array:null;var k,C="function"==typeof Uint16Array?Uint16Array:void 0;k=function(){var r,t,n;if("function"!=typeof M)return!1;try{t=new M(t=[1,3.14,-3.14,65536,65537]),n=t,r=(V&&n instanceof Uint16Array||"[object Uint16Array]"===O(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?C:function(){throw new Error("not implemented")};var Y,X={uint16:k,uint8:x};(Y=new X.uint16(1))[0]=4660;var q=52===new X.uint8(Y.buffer)[0],z=!0===q?1:0,D=new G(1),J=new P(D.buffer);function K(r){return D[0]=r,J[z]}function Q(r,t){var n,e,o,u;return o=(u=r*r)*u,e=u*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(u),e+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(u),(o=1-(n=.5*u))+(1-o-n+(u*e-r*t))}var Z=-.16666666666666632;function $(r,t){var n,e,o;return n=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===t?r+e*(Z+o*n):r-(o*(.5*t-e*n)-t-e*Z)}var rr,tr,nr=!0===q?0:1,er=new G(1),or=new P(er.buffer);!0===q?(rr=1,tr=0):(rr=0,tr=1);var ur={HIGH:rr,LOW:tr},ir=new G(1),fr=new P(ir.buffer),ar=ur.HIGH,cr=ur.LOW;function lr(r,t){return fr[ar]=r,fr[cr]=t,ir[0]}var yr,pr,vr=Math.floor;!0===q?(yr=1,pr=0):(yr=0,pr=1);var sr={HIGH:yr,LOW:pr},br=new G(1),dr=new P(br.buffer),wr=sr.HIGH,mr=sr.LOW;function jr(r,t,n,e){return br[0]=r,t[e]=dr[wr],t[e+n]=dr[mr],t}function Ar(r){return jr(r,[0,0],1,0)}l(Ar,"assign",jr);var hr=[0,0];function _r(r,t,n,e){return s(r)||m(r)?(t[e]=r,t[e+n]=0,t):0!==r&&j(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}l((function(r){return _r(r,[0,0],1,0)}),"assign",_r);var gr=[0,0],Or=[0,0];function Ur(r,t){var n,e,o,u,i,f;return 0===t||0===r||s(r)||m(r)?r:(_r(r,gr,1,0),t+=gr[1],t+=function(r){var t=K(r);return(t=(2146435072&t)>>>20)-1023|0}(r=gr[0]),t<-1074?(o=0,u=r,Ar.assign(o,hr,1,0),i=hr[0],i&=2147483647,f=K(u),lr(i|=f&=2147483648,hr[1])):t>1023?r<0?w:b:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Ar.assign(r,Or,1,0),n=Or[0],n&=2148532223,e*lr(n|=t+1023<<20,Or[1])))}function Er(r){return function(r,t){var n,e;for(n=[],e=0;e<t;e++)n.push(r);return n}(0,r)}var Nr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Sr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Pr=5.960464477539063e-8,Ir=Er(20),Tr=Er(20),Fr=Er(20),Wr=Er(20);function Gr(r,t,n,e,o,u,i,f,a){var c,l,y,p,v,s,b,d,w;for(p=u,w=e[n],d=n,v=0;d>0;v++)l=Pr*w|0,Wr[v]=w-16777216*l|0,w=e[d-1]+l,d-=1;if(w=Ur(w,o),w-=8*vr(.125*w),w-=b=0|w,y=0,o>0?(b+=v=Wr[n-1]>>24-o,Wr[n-1]-=v<<24-o,y=Wr[n-1]>>23-o):0===o?y=Wr[n-1]>>23:w>=.5&&(y=2),y>0){for(b+=1,c=0,v=0;v<n;v++)d=Wr[v],0===c?0!==d&&(c=1,Wr[v]=16777216-d):Wr[v]=16777215-d;if(o>0)switch(o){case 1:Wr[n-1]&=8388607;break;case 2:Wr[n-1]&=4194303}2===y&&(w=1-w,0!==c&&(w-=Ur(1,o)))}if(0===w){for(d=0,v=n-1;v>=u;v--)d|=Wr[v];if(0===d){for(s=1;0===Wr[u-s];s++);for(v=n+1;v<=n+s;v++){for(a[f+v]=Nr[i+v],l=0,d=0;d<=f;d++)l+=r[d]*a[f+(v-d)];e[v]=l}return Gr(r,t,n+=s,e,o,u,i,f,a)}}if(0===w)for(n-=1,o-=24;0===Wr[n];)n-=1,o-=24;else(w=Ur(w,-o))>=16777216?(l=Pr*w|0,Wr[n]=w-16777216*l|0,o+=24,Wr[n+=1]=l):Wr[n]=0|w;for(l=Ur(1,o),v=n;v>=0;v--)e[v]=l*Wr[v],l*=Pr;for(v=n;v>=0;v--){for(l=0,s=0;s<=p&&s<=n-v;s++)l+=Sr[s]*e[v+s];Fr[n-v]=l}for(l=0,v=n;v>=0;v--)l+=Fr[v];for(t[0]=0===y?l:-l,l=Fr[0]-l,v=1;v<=n;v++)l+=Fr[v];return t[1]=0===y?l:-l,7&b}function Hr(r,t,n,e){var o,u,i,f,a,c,l;for(4,(u=(n-3)/24|0)<0&&(u=0),f=n-24*(u+1),c=u-(i=e-1),l=i+4,a=0;a<=l;a++)Ir[a]=c<0?0:Nr[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=i;c++)o+=r[c]*Ir[i+(a-c)];Tr[a]=o}return 4,Gr(r,t,4,Tr,f,4,u,i,Ir)}var Br=Math.round;function Lr(r,t,n){var e,o,u,i,f;return u=r-1.5707963267341256*(e=Br(.6366197723675814*r)),i=6077100506506192e-26*e,f=t>>20|0,n[0]=u-i,f-(K(n[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((o=u)-(u=o-(i=6077100506303966e-26*e))-i),n[0]=u-i,f-(K(n[0])>>20&2047)>49&&(i=84784276603689e-45*e-((o=u)-(u=o-(i=20222662487111665e-37*e))-i),n[0]=u-i)),n[1]=u-n[0]-i,e}var Rr=1.5707963267341256,xr=6077100506506192e-26,Vr=2*xr,Mr=4*xr,kr=[0,0,0],Cr=[0,0];function Yr(r,t){var n,e,o,u,i,f,a;if((o=2147483647&K(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Lr(r,o,t):o<=1073928572?r>0?(a=r-Rr,t[0]=a-xr,t[1]=a-t[0]-xr,1):(a=r+Rr,t[0]=a+xr,t[1]=a-t[0]+xr,-1):r>0?(a=r-2*Rr,t[0]=a-Vr,t[1]=a-t[0]-Vr,2):(a=r+2*Rr,t[0]=a+Vr,t[1]=a-t[0]+Vr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Lr(r,o,t):r>0?(a=r-3*Rr,t[0]=a-1.8231301519518578e-10,t[1]=a-t[0]-1.8231301519518578e-10,3):(a=r+3*Rr,t[0]=a+1.8231301519518578e-10,t[1]=a-t[0]+1.8231301519518578e-10,-3):1075388923===o?Lr(r,o,t):r>0?(a=r-4*Rr,t[0]=a-Mr,t[1]=a-t[0]-Mr,4):(a=r+4*Rr,t[0]=a+Mr,t[1]=a-t[0]+Mr,-4);if(o<1094263291)return Lr(r,o,t);if(o>=2146435072)return t[0]=NaN,t[1]=NaN,0;for(n=function(r){return er[0]=r,or[nr]}(r),a=lr(o-((e=(o>>20)-1046)<<20|0),n),i=0;i<2;i++)kr[i]=0|a,a=16777216*(a-kr[i]);for(kr[2]=a,u=3;0===kr[u-1];)u-=1;return f=Hr(kr,Cr,e,u),r<0?(t[0]=-Cr[0],t[1]=-Cr[1],-f):(t[0]=Cr[0],t[1]=Cr[1],f)}var Xr=[0,0];function qr(r){var t;if(t=K(r),(t&=2147483647)<=1072243195)return t<1044381696?1:Q(r,0);if(t>=2146435072)return NaN;switch(3&Yr(r,Xr)){case 0:return Q(Xr[0],Xr[1]);case 1:return-$(Xr[0],Xr[1]);case 2:return-Q(Xr[0],Xr[1]);default:return $(Xr[0],Xr[1])}}var zr=[0,0];var Dr=3.141592653589793;function Jr(r){var t,n,e,o;return s(r)||m(r)?NaN:(t=j(r))>9007199254740992?1:.5===(e=t-(n=vr(t)))?0:(o=e<.25?qr(Dr*e):e<.75?function(r){var t;if(t=K(r),(t&=2147483647)<=1072243195)return t<1045430272?r:$(r,0);if(t>=2146435072)return NaN;switch(3&Yr(r,zr)){case 0:return $(zr[0],zr[1]);case 1:return Q(zr[0],zr[1]);case 2:return-$(zr[0],zr[1]);default:return-Q(zr[0],zr[1])}}(Dr*(e=.5-e)):-qr(Dr*(e=1-e)),n%2==1?-o:o)}var Kr=Array.isArray?Array.isArray:function(r){return"[object Array]"===O(r)};var Qr=/./;function Zr(r){return"boolean"==typeof r}var $r=Boolean.prototype.toString;var rt=h();function tt(r){return"object"==typeof r&&(r instanceof Boolean||(rt?function(r){try{return $r.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===O(r)))}function nt(r){return Zr(r)||tt(r)}function et(){return new Function("return this;")()}l(nt,"isPrimitive",Zr),l(nt,"isObject",tt);var ot="object"==typeof self?self:null,ut="object"==typeof window?window:null,it="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ft="object"==typeof it?it:null;var at=function(r){if(arguments.length){if(!Zr(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return et()}if(ot)return ot;if(ut)return ut;if(ft)return ft;throw new Error("unexpected error. Unable to resolve global object.")}(),ct=at.document&&at.document.childNodes,lt=Int8Array;function yt(){return/^\s*function\s*([^(]*)/i}var pt=/^\s*function\s*([^(]*)/i;function vt(r){return null!==r&&"object"==typeof r}function st(r){var t,n,e,o;if(("Object"===(n=O(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=pt.exec(e.toString()))return t[1]}return vt(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(yt,"REGEXP",pt),l(vt,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!Kr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(vt));var bt="function"==typeof Qr||"object"==typeof lt||"function"==typeof ct?function(r){return st(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?st(r).toLowerCase():t};function dt(r){return"function"===bt(r)}var wt,mt=Object.getPrototypeOf;wt=dt(Object.getPrototypeOf)?mt:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===O(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var jt=wt;var At=Object.prototype;function ht(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!Kr(r)}(r)&&(t=function(r){return null==r?null:(r=Object(r),jt(r))}(r),!t||!p(r,"constructor")&&p(t,"constructor")&&dt(t.constructor)&&"[object Function]"===O(t.constructor)&&p(t,"isPrototypeOf")&&dt(t.isPrototypeOf)&&(t===At||function(r){var t;for(t in r)if(!p(r,t))return!1;return!0}(r)))}function _t(r){return"number"==typeof r}var gt=d.prototype.toString;var Ot=h();function Ut(r){return"object"==typeof r&&(r instanceof d||(Ot?function(r){try{return gt.call(r),!0}catch(r){return!1}}(r):"[object Number]"===O(r)))}function Et(r){return _t(r)||Ut(r)}function Nt(r){return r<b&&r>w&&vr(t=r)===t;var t}function St(r){return _t(r)&&Nt(r)}function Pt(r){return Ut(r)&&Nt(r.valueOf())}function It(r){return St(r)||Pt(r)}function Tt(r){return St(r)&&r>0}function Ft(r){return Pt(r)&&r.valueOf()>0}function Wt(r){return Tt(r)||Ft(r)}function Gt(r){return St(r)&&r>=0}function Ht(r){return Pt(r)&&r.valueOf()>=0}function Bt(r){return Gt(r)||Ht(r)}function Lt(r){return _t(r)&&r>=0}function Rt(r){return Ut(r)&&r.valueOf()>=0}function xt(r){return Lt(r)||Rt(r)}function Vt(){var r,t=arguments,n=t[0],e="https://stdlib.io/e/"+n+"?";for(r=1;r<t.length;r++)e+="&arg[]="+encodeURIComponent(t[r]);return e}function Mt(r,t){return ht(t)?p(t,"period")&&(r.period=t.period,!Tt(t.period))?new TypeError(Vt("0RW8f","period",t.period)):p(t,"amplitude")&&(r.amplitude=t.amplitude,!Lt(t.amplitude))?new TypeError(Vt("0RW4x","amplitude",t.amplitude)):p(t,"offset")&&(r.offset=t.offset,!St(t.offset))?new TypeError(Vt("0RW8e","offset",t.offset)):p(t,"iter")&&(r.iter=t.iter,!Gt(t.iter))?new TypeError(Vt("0RW35","iter",t.iter)):null:new TypeError(Vt("0RW2h",t))}function kt(r){var t,n,e,o,u,i,f;if(t={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(o=Mt(t,r)))throw o;return(u=(t.period-t.offset)%t.period)<0&&(u+=t.period),u-=1,i=2/t.period,f=0,l(n={},"next",a),l(n,"return",c),v&&l(n,v,y),n;function a(){return f+=1,e||f>t.iter?{done:!0}:(u+=1,u%=t.period,{value:t.amplitude*Jr(i*u),done:!1})}function c(r){return e=!0,arguments.length?{value:r,done:!0}:{done:!0}}function y(){return kt(t)}}l(Et,"isPrimitive",_t),l(Et,"isObject",Ut),l(It,"isPrimitive",St),l(It,"isObject",Pt),l(Wt,"isPrimitive",Tt),l(Wt,"isObject",Ft),l(Bt,"isPrimitive",Gt),l(Bt,"isObject",Ht),l(xt,"isPrimitive",Lt),l(xt,"isObject",Rt);export{kt as default};
//# sourceMappingURL=mod.js.map
