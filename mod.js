// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,d=/^(\d+)$/,g=/^(\d+)e/,b=/\.0$/,w=/\.0*e/,h=/(\..*[^0])0*e/;function m(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,h,"$1e"),n=p.call(n,w,"e"),n=p.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,v,"e-0$1"),r.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,g,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function A(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var E=String.fromCharCode,O=isNaN,_=Array.isArray;function F(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,t,n,i,a,f,l,s,p;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(n=r[s]))f+=n;else{if(e=void 0!==n.precision,!(n=F(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,O(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function N(r){var e,t,n,o;for(t=[],o=0,n=U.exec(r);n;)(e=r.slice(o,U.lastIndex-n[0].length)).length&&t.push(e),t.push(I(n)),o=U.lastIndex,n=U.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function T(r){return"string"==typeof r}function k(r){var e,t,n;if(!T(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=N(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return S.apply(null,t)}var x,P=Object.prototype,V=P.toString,G=P.__defineGetter__,C=P.__defineSetter__,L=P.__lookupGetter__,$=P.__lookupSetter__;x=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(L.call(r,e)||$.call(r,e)?(n=r.__proto__,r.__proto__=P,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&G&&G.call(r,e,t.get),a&&C&&C.call(r,e,t.set),r};var H=x;function M(r,e,t){H(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var R=Object.prototype.hasOwnProperty;function W(r,e){return null!=r&&R.call(r,e)}var B="function"==typeof Symbol?Symbol:void 0;var Z="function"==typeof B&&"symbol"==typeof B("foo")&&W(B,"iterator")&&"symbol"==typeof B.iterator?Symbol.iterator:null;function X(r){return r!=r}var J=Number.POSITIVE_INFINITY,Y=Number,z=Y.NEGATIVE_INFINITY;function D(r){return r===J||r===z}function q(r){return Math.abs(r)}var K="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Q(){return K&&"symbol"==typeof Symbol.toStringTag}var rr=Object.prototype.toString;var er="function"==typeof B?B.toStringTag:"";var tr=Q()?function(r){var e,t,n;if(null==r)return rr.call(r);t=r[er],e=W(r,er);try{r[er]=void 0}catch(e){return rr.call(r)}return n=rr.call(r),e?r[er]=t:delete r[er],n}:function(r){return rr.call(r)},nr="function"==typeof Uint32Array;var or="function"==typeof Uint32Array?Uint32Array:null;var ir,ar="function"==typeof Uint32Array?Uint32Array:void 0;ir=function(){var r,e,t;if("function"!=typeof or)return!1;try{e=new or(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(nr&&t instanceof Uint32Array||"[object Uint32Array]"===tr(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var ur=ir,cr="function"==typeof Float64Array;var fr="function"==typeof Float64Array?Float64Array:null;var lr,sr="function"==typeof Float64Array?Float64Array:void 0;lr=function(){var r,e,t;if("function"!=typeof fr)return!1;try{e=new fr([1,3.14,-3.14,NaN]),t=e,r=(cr&&t instanceof Float64Array||"[object Float64Array]"===tr(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?sr:function(){throw new Error("not implemented")};var pr=lr,yr="function"==typeof Uint8Array;var vr="function"==typeof Uint8Array?Uint8Array:null;var dr,gr="function"==typeof Uint8Array?Uint8Array:void 0;dr=function(){var r,e,t;if("function"!=typeof vr)return!1;try{e=new vr(e=[1,3.14,-3.14,256,257]),t=e,r=(yr&&t instanceof Uint8Array||"[object Uint8Array]"===tr(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var br=dr,wr="function"==typeof Uint16Array;var hr="function"==typeof Uint16Array?Uint16Array:null;var mr,jr="function"==typeof Uint16Array?Uint16Array:void 0;mr=function(){var r,e,t;if("function"!=typeof hr)return!1;try{e=new hr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(wr&&t instanceof Uint16Array||"[object Uint16Array]"===tr(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?jr:function(){throw new Error("not implemented")};var Ar,Er={uint16:mr,uint8:br};(Ar=new Er.uint16(1))[0]=4660;var Or=52===new Er.uint8(Ar.buffer)[0],_r=!0===Or?1:0,Fr=new pr(1),Sr=new ur(Fr.buffer);function Ur(r){return Fr[0]=r,Sr[_r]}function Ir(r,e){var t,n,o,i;return o=(i=r*r)*i,n=i*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(i),n+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(i),(o=1-(t=.5*i))+(1-o-t+(i*n-r*e))}var Nr=-.16666666666666632;function Tr(r,e){var t,n,o;return t=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),n=o*r,0===e?r+n*(Nr+o*t):r-(o*(.5*e-n*t)-e-n*Nr)}var kr,xr,Pr=!0===Or?0:1,Vr=new pr(1),Gr=new ur(Vr.buffer);!0===Or?(kr=1,xr=0):(kr=0,xr=1);var Cr={HIGH:kr,LOW:xr},Lr=new pr(1),$r=new ur(Lr.buffer),Hr=Cr.HIGH,Mr=Cr.LOW;function Rr(r,e){return $r[Hr]=r,$r[Mr]=e,Lr[0]}var Wr,Br,Zr=Math.floor;!0===Or?(Wr=1,Br=0):(Wr=0,Br=1);var Xr={HIGH:Wr,LOW:Br},Jr=new pr(1),Yr=new ur(Jr.buffer),zr=Xr.HIGH,Dr=Xr.LOW;function qr(r,e,t,n){return Jr[0]=r,e[n]=Yr[zr],e[n+t]=Yr[Dr],e}function Kr(r){return qr(r,[0,0],1,0)}M(Kr,"assign",qr);var Qr=[0,0];function re(r,e,t,n){return X(r)||D(r)?(e[n]=r,e[n+t]=0,e):0!==r&&q(r)<22250738585072014e-324?(e[n]=4503599627370496*r,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}M((function(r){return re(r,[0,0],1,0)}),"assign",re);var ee=[0,0],te=[0,0];function ne(r,e){var t,n,o,i,a,u;return 0===e||0===r||X(r)||D(r)?r:(re(r,ee,1,0),e+=ee[1],e+=function(r){var e=Ur(r);return(e=(2146435072&e)>>>20)-1023|0}(r=ee[0]),e<-1074?(o=0,i=r,Kr.assign(o,Qr,1,0),a=Qr[0],a&=2147483647,u=Ur(i),Rr(a|=u&=2147483648,Qr[1])):e>1023?r<0?z:J:(e<=-1023?(e+=52,n=2220446049250313e-31):n=1,Kr.assign(r,te,1,0),t=te[0],t&=2148532223,n*Rr(t|=e+1023<<20,te[1])))}function oe(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}var ie=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ae=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],ue=5.960464477539063e-8,ce=oe(20),fe=oe(20),le=oe(20),se=oe(20);function pe(r,e,t,n,o,i,a,u,c){var f,l,s,p,y,v,d,g,b;for(p=i,b=n[t],g=t,y=0;g>0;y++)l=ue*b|0,se[y]=b-16777216*l|0,b=n[g-1]+l,g-=1;if(b=ne(b,o),b-=8*Zr(.125*b),b-=d=0|b,s=0,o>0?(d+=y=se[t-1]>>24-o,se[t-1]-=y<<24-o,s=se[t-1]>>23-o):0===o?s=se[t-1]>>23:b>=.5&&(s=2),s>0){for(d+=1,f=0,y=0;y<t;y++)g=se[y],0===f?0!==g&&(f=1,se[y]=16777216-g):se[y]=16777215-g;if(o>0)switch(o){case 1:se[t-1]&=8388607;break;case 2:se[t-1]&=4194303}2===s&&(b=1-b,0!==f&&(b-=ne(1,o)))}if(0===b){for(g=0,y=t-1;y>=i;y--)g|=se[y];if(0===g){for(v=1;0===se[i-v];v++);for(y=t+1;y<=t+v;y++){for(c[u+y]=ie[a+y],l=0,g=0;g<=u;g++)l+=r[g]*c[u+(y-g)];n[y]=l}return pe(r,e,t+=v,n,o,i,a,u,c)}}if(0===b)for(t-=1,o-=24;0===se[t];)t-=1,o-=24;else(b=ne(b,-o))>=16777216?(l=ue*b|0,se[t]=b-16777216*l|0,o+=24,se[t+=1]=l):se[t]=0|b;for(l=ne(1,o),y=t;y>=0;y--)n[y]=l*se[y],l*=ue;for(y=t;y>=0;y--){for(l=0,v=0;v<=p&&v<=t-y;v++)l+=ae[v]*n[y+v];le[t-y]=l}for(l=0,y=t;y>=0;y--)l+=le[y];for(e[0]=0===s?l:-l,l=le[0]-l,y=1;y<=t;y++)l+=le[y];return e[1]=0===s?l:-l,7&d}function ye(r,e,t,n){var o,i,a,u,c,f,l;for(4,(i=(t-3)/24|0)<0&&(i=0),u=t-24*(i+1),f=i-(a=n-1),l=a+4,c=0;c<=l;c++)ce[c]=f<0?0:ie[f],f+=1;for(c=0;c<=4;c++){for(o=0,f=0;f<=a;f++)o+=r[f]*ce[a+(c-f)];fe[c]=o}return 4,pe(r,e,4,fe,u,4,i,a,ce)}var ve=Math.round;function de(r,e,t){var n,o,i,a,u;return i=r-1.5707963267341256*(n=ve(.6366197723675814*r)),a=6077100506506192e-26*n,u=e>>20|0,t[0]=i-a,u-(Ur(t[0])>>20&2047)>16&&(a=20222662487959506e-37*n-((o=i)-(i=o-(a=6077100506303966e-26*n))-a),t[0]=i-a,u-(Ur(t[0])>>20&2047)>49&&(a=84784276603689e-45*n-((o=i)-(i=o-(a=20222662487111665e-37*n))-a),t[0]=i-a)),t[1]=i-t[0]-a,n}var ge=1.5707963267341256,be=6077100506506192e-26,we=2*be,he=4*be,me=[0,0,0],je=[0,0];function Ae(r,e){var t,n,o,i,a,u,c;if((o=2147483647&Ur(r)|0)<=1072243195)return e[0]=r,e[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?de(r,o,e):o<=1073928572?r>0?(c=r-ge,e[0]=c-be,e[1]=c-e[0]-be,1):(c=r+ge,e[0]=c+be,e[1]=c-e[0]+be,-1):r>0?(c=r-2*ge,e[0]=c-we,e[1]=c-e[0]-we,2):(c=r+2*ge,e[0]=c+we,e[1]=c-e[0]+we,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?de(r,o,e):r>0?(c=r-3*ge,e[0]=c-1.8231301519518578e-10,e[1]=c-e[0]-1.8231301519518578e-10,3):(c=r+3*ge,e[0]=c+1.8231301519518578e-10,e[1]=c-e[0]+1.8231301519518578e-10,-3):1075388923===o?de(r,o,e):r>0?(c=r-4*ge,e[0]=c-he,e[1]=c-e[0]-he,4):(c=r+4*ge,e[0]=c+he,e[1]=c-e[0]+he,-4);if(o<1094263291)return de(r,o,e);if(o>=2146435072)return e[0]=NaN,e[1]=NaN,0;for(t=function(r){return Vr[0]=r,Gr[Pr]}(r),c=Rr(o-((n=(o>>20)-1046)<<20|0),t),a=0;a<2;a++)me[a]=0|c,c=16777216*(c-me[a]);for(me[2]=c,i=3;0===me[i-1];)i-=1;return u=ye(me,je,n,i),r<0?(e[0]=-je[0],e[1]=-je[1],-u):(e[0]=je[0],e[1]=je[1],u)}var Ee=[0,0];function Oe(r){var e;if(e=Ur(r),(e&=2147483647)<=1072243195)return e<1044381696?1:Ir(r,0);if(e>=2146435072)return NaN;switch(3&Ae(r,Ee)){case 0:return Ir(Ee[0],Ee[1]);case 1:return-Tr(Ee[0],Ee[1]);case 2:return-Ir(Ee[0],Ee[1]);default:return Tr(Ee[0],Ee[1])}}var _e=[0,0];var Fe=3.141592653589793;function Se(r){var e,t,n,o;return X(r)||D(r)?NaN:(e=q(r))>9007199254740992?1:.5===(n=e-(t=Zr(e)))?0:(o=n<.25?Oe(Fe*n):n<.75?function(r){var e;if(e=Ur(r),(e&=2147483647)<=1072243195)return e<1045430272?r:Tr(r,0);if(e>=2146435072)return NaN;switch(3&Ae(r,_e)){case 0:return Tr(_e[0],_e[1]);case 1:return Ir(_e[0],_e[1]);case 2:return-Tr(_e[0],_e[1]);default:return-Ir(_e[0],_e[1])}}(Fe*(n=.5-n)):-Oe(Fe*(n=1-n)),t%2==1?-o:o)}var Ue=Array.isArray?Array.isArray:function(r){return"[object Array]"===tr(r)};var Ie=/./;function Ne(r){return"boolean"==typeof r}var Te=Boolean,ke=Boolean.prototype.toString;var xe=Q();function Pe(r){return"object"==typeof r&&(r instanceof Te||(xe?function(r){try{return ke.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===tr(r)))}function Ve(r){return Ne(r)||Pe(r)}function Ge(){return new Function("return this;")()}M(Ve,"isPrimitive",Ne),M(Ve,"isObject",Pe);var Ce="object"==typeof self?self:null,Le="object"==typeof window?window:null,$e="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},He="object"==typeof $e?$e:null,Me="object"==typeof globalThis?globalThis:null;var Re=function(r){if(arguments.length){if(!Ne(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Ge()}if(Me)return Me;if(Ce)return Ce;if(Le)return Le;if(He)return He;throw new Error("unexpected error. Unable to resolve global object.")}(),We=Re.document&&Re.document.childNodes,Be=Int8Array;function Ze(){return/^\s*function\s*([^(]*)/i}var Xe=/^\s*function\s*([^(]*)/i;function Je(r){return null!==r&&"object"==typeof r}function Ye(r){var e,t,n,o;if(("Object"===(t=tr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Xe.exec(n.toString()))return e[1]}return Je(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}M(Ze,"REGEXP",Xe),M(Je,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Ue(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Je));var ze="function"==typeof Ie||"object"==typeof Be||"function"==typeof We?function(r){return Ye(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Ye(r).toLowerCase():e};function De(r){return"function"===ze(r)}var qe,Ke=Object,Qe=Object.getPrototypeOf;qe=De(Object.getPrototypeOf)?Qe:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===tr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var rt=qe;var et=Object.prototype;function tt(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!Ue(r)}(r)&&(e=function(r){return null==r?null:(r=Ke(r),rt(r))}(r),!e||!W(r,"constructor")&&W(e,"constructor")&&De(e.constructor)&&"[object Function]"===tr(e.constructor)&&W(e,"isPrototypeOf")&&De(e.isPrototypeOf)&&(e===et||function(r){var e;for(e in r)if(!W(r,e))return!1;return!0}(r)))}function nt(r){return"number"==typeof r}var ot=Y.prototype.toString;var it=Q();function at(r){return"object"==typeof r&&(r instanceof Y||(it?function(r){try{return ot.call(r),!0}catch(r){return!1}}(r):"[object Number]"===tr(r)))}function ut(r){return nt(r)||at(r)}function ct(r){return r<J&&r>z&&Zr(e=r)===e;var e}function ft(r){return nt(r)&&ct(r)}function lt(r){return at(r)&&ct(r.valueOf())}function st(r){return ft(r)||lt(r)}function pt(r){return ft(r)&&r>0}function yt(r){return lt(r)&&r.valueOf()>0}function vt(r){return pt(r)||yt(r)}function dt(r){return ft(r)&&r>=0}function gt(r){return lt(r)&&r.valueOf()>=0}function bt(r){return dt(r)||gt(r)}function wt(r){return nt(r)&&r>=0}function ht(r){return at(r)&&r.valueOf()>=0}function mt(r){return wt(r)||ht(r)}function jt(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}function At(r,e){return tt(e)?W(e,"period")&&(r.period=e.period,!pt(e.period))?new TypeError(jt("0tF8N,JM","period",e.period)):W(e,"amplitude")&&(r.amplitude=e.amplitude,!wt(e.amplitude))?new TypeError(jt("0tF4k,I9","amplitude",e.amplitude)):W(e,"offset")&&(r.offset=e.offset,!ft(e.offset))?new TypeError(jt("0tF8M,JG","offset",e.offset)):W(e,"iter")&&(r.iter=e.iter,!dt(e.iter))?new TypeError(jt("0tF2t,G9","iter",e.iter)):null:new TypeError(jt("0tF2V,FD",e))}function Et(r){var e,t,n,o,i,a,u;if(e={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(o=At(e,r)))throw o;return(i=(e.period-e.offset)%e.period)<0&&(i+=e.period),i-=1,a=2/e.period,u=0,M(t={},"next",c),M(t,"return",f),Z&&M(t,Z,l),t;function c(){return u+=1,n||u>e.iter?{done:!0}:(i+=1,i%=e.period,{value:e.amplitude*Se(a*i),done:!1})}function f(r){return n=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){return Et(e)}}M(ut,"isPrimitive",nt),M(ut,"isObject",at),M(st,"isPrimitive",ft),M(st,"isObject",lt),M(vt,"isPrimitive",pt),M(vt,"isObject",yt),M(bt,"isPrimitive",dt),M(bt,"isObject",gt),M(mt,"isPrimitive",wt),M(mt,"isObject",ht);export{Et as default};
//# sourceMappingURL=mod.js.map