// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,d=/e-(\d)$/,v=/^(\d+)$/,g=/^(\d+)e/,b=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,h,"e"),n=p.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,v,"$1."),n=p.call(n,g,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):s.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function A(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var E=String.fromCharCode,O=isNaN,_=Array.isArray;function F(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,t,n,o,a,f,s,l,p;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",s=1,l=0;l<r.length;l++)if(c(n=r[l]))f+=n;else{if(e=void 0!==n.precision,!(n=F(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,O(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),f+=n.arg||"",s+=1}return f}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function I(r){var e,t,n,i;for(t=[],i=0,n=T.exec(r);n;)(e=r.slice(i,T.lastIndex-n[0].length)).length&&t.push(e),t.push(U(n)),i=T.lastIndex,n=T.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function N(r){return"string"==typeof r}function x(r){var e,t,n;if(!N(r))throw new TypeError(x("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=I(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return S.apply(null,t)}var k,P=Object.prototype,V=P.toString,G=P.__defineGetter__,C=P.__defineSetter__,L=P.__lookupGetter__,$=P.__lookupSetter__;k=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(L.call(r,e)||$.call(r,e)?(n=r.__proto__,r.__proto__=P,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&G&&G.call(r,e,t.get),a&&C&&C.call(r,e,t.set),r};var W=k;function H(r,e,t){W(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var M=Object.prototype.hasOwnProperty;function R(r,e){return null!=r&&M.call(r,e)}var B="function"==typeof Symbol?Symbol:void 0,Z="function"==typeof B&&"symbol"==typeof B("foo")&&R(B,"iterator")&&"symbol"==typeof B.iterator?Symbol.iterator:null;function X(r){return r!=r}var J=Number.POSITIVE_INFINITY,Y=Number,z=Y.NEGATIVE_INFINITY;function D(r){return r===J||r===z}function q(r){return Math.abs(r)}var K="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Q(){return K&&"symbol"==typeof Symbol.toStringTag}var rr,er=Object.prototype.toString,tr="function"==typeof B?B.toStringTag:"",nr=Q()?function(r){var e,t,n;if(null==r)return er.call(r);t=r[tr],e=R(r,tr);try{r[tr]=void 0}catch(e){return er.call(r)}return n=er.call(r),e?r[tr]=t:delete r[tr],n}:function(r){return er.call(r)},ir="function"==typeof Uint32Array,or="function"==typeof Uint32Array?Uint32Array:null,ar="function"==typeof Uint32Array?Uint32Array:void 0;rr=function(){var r,e,t;if("function"!=typeof or)return!1;try{e=new or(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(ir&&t instanceof Uint32Array||"[object Uint32Array]"===nr(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var ur,cr=rr,fr="function"==typeof Float64Array,sr="function"==typeof Float64Array?Float64Array:null,lr="function"==typeof Float64Array?Float64Array:void 0;ur=function(){var r,e,t;if("function"!=typeof sr)return!1;try{e=new sr([1,3.14,-3.14,NaN]),t=e,r=(fr&&t instanceof Float64Array||"[object Float64Array]"===nr(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var pr,yr=ur,dr="function"==typeof Uint8Array,vr="function"==typeof Uint8Array?Uint8Array:null,gr="function"==typeof Uint8Array?Uint8Array:void 0;pr=function(){var r,e,t;if("function"!=typeof vr)return!1;try{e=new vr(e=[1,3.14,-3.14,256,257]),t=e,r=(dr&&t instanceof Uint8Array||"[object Uint8Array]"===nr(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var br,hr=pr,wr="function"==typeof Uint16Array,mr="function"==typeof Uint16Array?Uint16Array:null,jr="function"==typeof Uint16Array?Uint16Array:void 0;br=function(){var r,e,t;if("function"!=typeof mr)return!1;try{e=new mr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(wr&&t instanceof Uint16Array||"[object Uint16Array]"===nr(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?jr:function(){throw new Error("not implemented")};var Ar,Er={uint16:br,uint8:hr};(Ar=new Er.uint16(1))[0]=4660;var Or=52===new Er.uint8(Ar.buffer)[0],_r=!0===Or?1:0,Fr=new yr(1),Sr=new cr(Fr.buffer);function Tr(r){return Fr[0]=r,Sr[_r]}function Ur(r,e){var t,n,i,o;return i=(o=r*r)*o,n=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),n+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(i=1-(t=.5*o))+(1-i-t+(o*n-r*e))}var Ir=-.16666666666666632;function Nr(r,e){var t,n,i;return t=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),n=i*r,0===e?r+n*(Ir+i*t):r-(i*(.5*e-n*t)-e-n*Ir)}var xr,kr,Pr=2147483647,Vr=2146435072,Gr=!0===Or?0:1,Cr=new yr(1),Lr=new cr(Cr.buffer);!0===Or?(xr=1,kr=0):(xr=0,kr=1);var $r={HIGH:xr,LOW:kr},Wr=new yr(1),Hr=new cr(Wr.buffer),Mr=$r.HIGH,Rr=$r.LOW;function Br(r,e){return Hr[Mr]=r,Hr[Rr]=e,Wr[0]}var Zr,Xr,Jr=Math.floor;!0===Or?(Zr=1,Xr=0):(Zr=0,Xr=1);var Yr={HIGH:Zr,LOW:Xr},zr=new yr(1),Dr=new cr(zr.buffer),qr=Yr.HIGH,Kr=Yr.LOW;function Qr(r,e,t,n){return zr[0]=r,e[n]=Dr[qr],e[n+t]=Dr[Kr],e}function re(r){return Qr(r,[0,0],1,0)}H(re,"assign",Qr);var ee=[0,0];function te(r,e,t,n){return X(r)||D(r)?(e[n]=r,e[n+t]=0,e):0!==r&&q(r)<22250738585072014e-324?(e[n]=4503599627370496*r,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}H((function(r){return te(r,[0,0],1,0)}),"assign",te);var ne=[0,0],ie=[0,0];function oe(r,e){var t,n,i,o,a,u;return 0===e||0===r||X(r)||D(r)?r:(te(r,ne,1,0),e+=ne[1],e+=function(r){var e=Tr(r);return(e=(e&Vr)>>>20)-1023|0}(r=ne[0]),e<-1074?(i=0,o=r,re.assign(i,ee,1,0),a=ee[0],a&=Pr,u=Tr(o),Br(a|=u&=2147483648,ee[1])):e>1023?r<0?z:J:(e<=-1023?(e+=52,n=2220446049250313e-31):n=1,re.assign(r,ie,1,0),t=ie[0],t&=2148532223,n*Br(t|=e+1023<<20,ie[1])))}function ae(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}var ue=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ce=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],fe=16777216,se=5.960464477539063e-8,le=ae(20),pe=ae(20),ye=ae(20),de=ae(20);function ve(r,e,t,n,i,o,a,u,c){var f,s,l,p,y,d,v,g,b;for(p=o,b=n[t],g=t,y=0;g>0;y++)s=se*b|0,de[y]=b-fe*s|0,b=n[g-1]+s,g-=1;if(b=oe(b,i),b-=8*Jr(.125*b),b-=v=0|b,l=0,i>0?(v+=y=de[t-1]>>24-i,de[t-1]-=y<<24-i,l=de[t-1]>>23-i):0===i?l=de[t-1]>>23:b>=.5&&(l=2),l>0){for(v+=1,f=0,y=0;y<t;y++)g=de[y],0===f?0!==g&&(f=1,de[y]=16777216-g):de[y]=16777215-g;if(i>0)switch(i){case 1:de[t-1]&=8388607;break;case 2:de[t-1]&=4194303}2===l&&(b=1-b,0!==f&&(b-=oe(1,i)))}if(0===b){for(g=0,y=t-1;y>=o;y--)g|=de[y];if(0===g){for(d=1;0===de[o-d];d++);for(y=t+1;y<=t+d;y++){for(c[u+y]=ue[a+y],s=0,g=0;g<=u;g++)s+=r[g]*c[u+(y-g)];n[y]=s}return ve(r,e,t+=d,n,i,o,a,u,c)}}if(0===b)for(t-=1,i-=24;0===de[t];)t-=1,i-=24;else(b=oe(b,-i))>=fe?(s=se*b|0,de[t]=b-fe*s|0,i+=24,de[t+=1]=s):de[t]=0|b;for(s=oe(1,i),y=t;y>=0;y--)n[y]=s*de[y],s*=se;for(y=t;y>=0;y--){for(s=0,d=0;d<=p&&d<=t-y;d++)s+=ce[d]*n[y+d];ye[t-y]=s}for(s=0,y=t;y>=0;y--)s+=ye[y];for(e[0]=0===l?s:-s,s=ye[0]-s,y=1;y<=t;y++)s+=ye[y];return e[1]=0===l?s:-s,7&v}function ge(r,e,t,n){var i,o,a,u,c,f,s;for((o=(t-3)/24|0)<0&&(o=0),u=t-24*(o+1),f=o-(a=n-1),s=a+4,c=0;c<=s;c++)le[c]=f<0?0:ue[f],f+=1;for(c=0;c<=4;c++){for(i=0,f=0;f<=a;f++)i+=r[f]*le[a+(c-f)];pe[c]=i}return ve(r,e,4,pe,u,4,o,a,le)}var be=Math.round;function he(r,e,t){var n,i,o,a,u;return o=r-1.5707963267341256*(n=be(.6366197723675814*r)),a=6077100506506192e-26*n,u=e>>20|0,t[0]=o-a,u-(Tr(t[0])>>20&2047)>16&&(a=20222662487959506e-37*n-((i=o)-(o=i-(a=6077100506303966e-26*n))-a),t[0]=o-a,u-(Tr(t[0])>>20&2047)>49&&(a=84784276603689e-45*n-((i=o)-(o=i-(a=20222662487111665e-37*n))-a),t[0]=o-a)),t[1]=o-t[0]-a,n}var we=1.5707963267341256,me=6077100506506192e-26,je=2*me,Ae=3*me,Ee=4*me,Oe=[0,0,0],_e=[0,0];function Fe(r,e){var t,n,i,o,a,u,c;if((i=Tr(r)&Pr|0)<=1072243195)return e[0]=r,e[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?he(r,i,e):i<=1073928572?r>0?(c=r-we,e[0]=c-me,e[1]=c-e[0]-me,1):(c=r+we,e[0]=c+me,e[1]=c-e[0]+me,-1):r>0?(c=r-2*we,e[0]=c-je,e[1]=c-e[0]-je,2):(c=r+2*we,e[0]=c+je,e[1]=c-e[0]+je,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?he(r,i,e):r>0?(c=r-3*we,e[0]=c-Ae,e[1]=c-e[0]-Ae,3):(c=r+3*we,e[0]=c+Ae,e[1]=c-e[0]+Ae,-3):1075388923===i?he(r,i,e):r>0?(c=r-4*we,e[0]=c-Ee,e[1]=c-e[0]-Ee,4):(c=r+4*we,e[0]=c+Ee,e[1]=c-e[0]+Ee,-4);if(i<1094263291)return he(r,i,e);if(i>=Vr)return e[0]=NaN,e[1]=NaN,0;for(t=function(r){return Cr[0]=r,Lr[Gr]}(r),c=Br(i-((n=(i>>20)-1046)<<20|0),t),a=0;a<2;a++)Oe[a]=0|c,c=16777216*(c-Oe[a]);for(Oe[2]=c,o=3;0===Oe[o-1];)o-=1;return u=ge(Oe,_e,n,o),r<0?(e[0]=-_e[0],e[1]=-_e[1],-u):(e[0]=_e[0],e[1]=_e[1],u)}var Se=[0,0];function Te(r){var e;if(e=Tr(r),(e&=2147483647)<=1072243195)return e<1044381696?1:Ur(r,0);if(e>=2146435072)return NaN;switch(3&Fe(r,Se)){case 0:return Ur(Se[0],Se[1]);case 1:return-Nr(Se[0],Se[1]);case 2:return-Ur(Se[0],Se[1]);default:return Nr(Se[0],Se[1])}}var Ue=[0,0],Ie=3.141592653589793;function Ne(r){var e,t,n,i;return X(r)||D(r)?NaN:(e=q(r))>9007199254740992?1:.5==(n=e-(t=Jr(e)))?0:(i=n<.25?Te(Ie*n):n<.75?function(r){var e;if(e=Tr(r),(e&=Pr)<=1072243195)return e<1045430272?r:Nr(r,0);if(e>=Vr)return NaN;switch(3&Fe(r,Ue)){case 0:return Nr(Ue[0],Ue[1]);case 1:return Ur(Ue[0],Ue[1]);case 2:return-Nr(Ue[0],Ue[1]);default:return-Ur(Ue[0],Ue[1])}}(Ie*(n=.5-n)):-Te(Ie*(n=1-n)),t%2==1?-i:i)}var xe=Array.isArray?Array.isArray:function(r){return"[object Array]"===nr(r)},ke=/./;function Pe(r){return"boolean"==typeof r}var Ve=Boolean,Ge=Boolean.prototype.toString,Ce=Q();function Le(r){return"object"==typeof r&&(r instanceof Ve||(Ce?function(r){try{return Ge.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===nr(r)))}function $e(r){return Pe(r)||Le(r)}function We(){return new Function("return this;")()}H($e,"isPrimitive",Pe),H($e,"isObject",Le);var He="object"==typeof self?self:null,Me="object"==typeof window?window:null,Re="object"==typeof globalThis?globalThis:null,Be=function(r){if(arguments.length){if(!Pe(r))throw new TypeError(x("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return We()}if(Re)return Re;if(He)return He;if(Me)return Me;throw new Error("unexpected error. Unable to resolve global object.")}(),Ze=Be.document&&Be.document.childNodes,Xe=Int8Array;function Je(){return/^\s*function\s*([^(]*)/i}var Ye=/^\s*function\s*([^(]*)/i;function ze(r){return null!==r&&"object"==typeof r}function De(r){var e,t,n,i;if(("Object"===(t=nr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Ye.exec(n.toString()))return e[1]}return ze(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}H(Je,"REGEXP",Ye),H(ze,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(x("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!xe(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(ze));var qe="function"==typeof ke||"object"==typeof Xe||"function"==typeof Ze?function(r){return De(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?De(r).toLowerCase():e};function Ke(r){return"function"===qe(r)}var Qe,rt=Object,et=Object.getPrototypeOf;Qe=Ke(Object.getPrototypeOf)?et:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===nr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var tt=Qe,nt=Object.prototype;function it(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!xe(r)}(r)&&(e=function(r){return null==r?null:(r=rt(r),tt(r))}(r),!e||!R(r,"constructor")&&R(e,"constructor")&&Ke(e.constructor)&&"[object Function]"===nr(e.constructor)&&R(e,"isPrototypeOf")&&Ke(e.isPrototypeOf)&&(e===nt||function(r){var e;for(e in r)if(!R(r,e))return!1;return!0}(r)))}function ot(r){return"number"==typeof r}var at=Y.prototype.toString,ut=Q();function ct(r){return"object"==typeof r&&(r instanceof Y||(ut?function(r){try{return at.call(r),!0}catch(r){return!1}}(r):"[object Number]"===nr(r)))}function ft(r){return ot(r)||ct(r)}function st(r){return r<J&&r>z&&Jr(e=r)===e;var e}function lt(r){return ot(r)&&st(r)}function pt(r){return ct(r)&&st(r.valueOf())}function yt(r){return lt(r)||pt(r)}function dt(r){return lt(r)&&r>0}function vt(r){return pt(r)&&r.valueOf()>0}function gt(r){return dt(r)||vt(r)}function bt(r){return lt(r)&&r>=0}function ht(r){return pt(r)&&r.valueOf()>=0}function wt(r){return bt(r)||ht(r)}function mt(r){return ot(r)&&r>=0}function jt(r){return ct(r)&&r.valueOf()>=0}function At(r){return mt(r)||jt(r)}function Et(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}function Ot(r,e){return it(e)?R(e,"period")&&(r.period=e.period,!dt(e.period))?new TypeError(Et("0tF8N,JM","period",e.period)):R(e,"amplitude")&&(r.amplitude=e.amplitude,!mt(e.amplitude))?new TypeError(Et("0tF4k,I9","amplitude",e.amplitude)):R(e,"offset")&&(r.offset=e.offset,!lt(e.offset))?new TypeError(Et("0tF8M,JG","offset",e.offset)):R(e,"iter")&&(r.iter=e.iter,!bt(e.iter))?new TypeError(Et("0tF2t,G9","iter",e.iter)):null:new TypeError(Et("0tF2V,FD",e))}return H(ft,"isPrimitive",ot),H(ft,"isObject",ct),H(yt,"isPrimitive",lt),H(yt,"isObject",pt),H(gt,"isPrimitive",dt),H(gt,"isObject",vt),H(wt,"isPrimitive",bt),H(wt,"isObject",ht),H(At,"isPrimitive",mt),H(At,"isObject",jt),function r(e){var t,n,i,o,a,u,c;if(t={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(o=Ot(t,e)))throw o;return(a=(t.period-t.offset)%t.period)<0&&(a+=t.period),a-=1,u=2/t.period,c=0,H(n={},"next",f),H(n,"return",s),Z&&H(n,Z,l),n;function f(){return c+=1,i||c>t.iter?{done:!0}:(a+=1,a%=t.period,{value:t.amplitude*Ne(u*a),done:!1})}function s(r){return i=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){return r(t)}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).iterCosineWave=e();
//# sourceMappingURL=browser.js.map
