// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var f=Math.abs,c=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,v=/^(\d+)$/,d=/^(\d+)e/,g=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function h(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=s.call(n,w,"$1e"),n=s.call(n,b,"e"),n=s.call(n,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,y,"e-0$1"),r.alternate&&(n=s.call(n,v,"$1."),n=s.call(n,d,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):c.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,A=Array.isArray;function E(r){return r!=r}function O(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function _(r){var e,t,n,o,a,f,c,l,s,p,y,v,d;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)f+=n;else{if(e=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(o=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,E(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=h(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,v=n.padRight,d=void 0,(d=y-p.length)<0?p:p=v?p+m(d):m(d)+p)),f+=n.arg||"",c+=1}return f}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function U(r){var e,t,n,i;for(t=[],i=0,n=F.exec(r);n;)(e=r.slice(i,F.lastIndex-n[0].length)).length&&t.push(e),t.push(S(n)),i=F.lastIndex,n=F.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function I(r){var e,t;if("string"!=typeof r)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[U(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return _.apply(null,e)}var T,N=Object.prototype,k=N.toString,x=N.__defineGetter__,P=N.__defineSetter__,V=N.__lookupGetter__,C=N.__lookupSetter__;T=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===k.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===k.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(V.call(r,e)||C.call(r,e)?(n=r.__proto__,r.__proto__=N,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&x&&x.call(r,e,t.get),a&&P&&P.call(r,e,t.set),r};var G=T;function L(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var $=Object.prototype.hasOwnProperty;function H(r,e){return null!=r&&$.call(r,e)}var R="function"==typeof Symbol?Symbol:void 0;var W="function"==typeof R&&"symbol"==typeof R("foo")&&H(R,"iterator")&&"symbol"==typeof R.iterator?Symbol.iterator:null;function B(r){return r!=r}var M=Number.POSITIVE_INFINITY,Z=Number,X=Z.NEGATIVE_INFINITY;function Y(r){return r===M||r===X}function z(r){return Math.abs(r)}var q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function D(){return q&&"symbol"==typeof Symbol.toStringTag}var J=Object.prototype.toString;var K="function"==typeof R?R.toStringTag:"";var Q=D()?function(r){var e,t,n;if(null==r)return J.call(r);t=r[K],e=H(r,K);try{r[K]=void 0}catch(e){return J.call(r)}return n=J.call(r),e?r[K]=t:delete r[K],n}:function(r){return J.call(r)},rr="function"==typeof Uint32Array;var er="function"==typeof Uint32Array?Uint32Array:null;var tr,nr="function"==typeof Uint32Array?Uint32Array:void 0;tr=function(){var r,e,t;if("function"!=typeof er)return!1;try{e=new er(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(rr&&t instanceof Uint32Array||"[object Uint32Array]"===Q(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?nr:function(){throw new Error("not implemented")};var ir=tr,or="function"==typeof Float64Array;var ar="function"==typeof Float64Array?Float64Array:null;var ur,fr="function"==typeof Float64Array?Float64Array:void 0;ur=function(){var r,e,t;if("function"!=typeof ar)return!1;try{e=new ar([1,3.14,-3.14,NaN]),t=e,r=(or&&t instanceof Float64Array||"[object Float64Array]"===Q(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var cr=ur,lr="function"==typeof Uint8Array;var sr="function"==typeof Uint8Array?Uint8Array:null;var pr,yr="function"==typeof Uint8Array?Uint8Array:void 0;pr=function(){var r,e,t;if("function"!=typeof sr)return!1;try{e=new sr(e=[1,3.14,-3.14,256,257]),t=e,r=(lr&&t instanceof Uint8Array||"[object Uint8Array]"===Q(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var vr=pr,dr="function"==typeof Uint16Array;var gr="function"==typeof Uint16Array?Uint16Array:null;var br,wr="function"==typeof Uint16Array?Uint16Array:void 0;br=function(){var r,e,t;if("function"!=typeof gr)return!1;try{e=new gr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(dr&&t instanceof Uint16Array||"[object Uint16Array]"===Q(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?wr:function(){throw new Error("not implemented")};var hr,mr={uint16:br,uint8:vr};(hr=new mr.uint16(1))[0]=4660;var jr=52===new mr.uint8(hr.buffer)[0],Ar=!0===jr?1:0,Er=new cr(1),Or=new ir(Er.buffer);function _r(r){return Er[0]=r,Or[Ar]}function Fr(r,e){var t,n,i,o;return i=(o=r*r)*o,n=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),n+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(i=1-(t=.5*o))+(1-i-t+(o*n-r*e))}var Sr=-.16666666666666632,Ur=.00833333333332249,Ir=-.0001984126982985795,Tr=27557313707070068e-22,Nr=-2.5050760253406863e-8,kr=1.58969099521155e-10;function xr(r,e){var t,n,i;return t=Ur+(i=r*r)*(Ir+i*Tr)+i*(i*i)*(Nr+i*kr),n=i*r,0===e?r+n*(Sr+i*t):r-(i*(.5*e-n*t)-e-n*Sr)}var Pr,Vr,Cr=2147483647,Gr=2146435072,Lr=1048575,$r=!0===jr?0:1,Hr=new cr(1),Rr=new ir(Hr.buffer);!0===jr?(Pr=1,Vr=0):(Pr=0,Vr=1);var Wr={HIGH:Pr,LOW:Vr},Br=new cr(1),Mr=new ir(Br.buffer),Zr=Wr.HIGH,Xr=Wr.LOW;function Yr(r,e){return Mr[Zr]=r,Mr[Xr]=e,Br[0]}var zr,qr,Dr=Math.floor,Jr=1023,Kr=1023,Qr=-1023,re=-1074,ee=2147483648;!0===jr?(zr=1,qr=0):(zr=0,qr=1);var te={HIGH:zr,LOW:qr},ne=new cr(1),ie=new ir(ne.buffer),oe=te.HIGH,ae=te.LOW;function ue(r,e,t,n){return ne[0]=r,e[n]=ie[oe],e[n+t]=ie[ae],e}function fe(r){return ue(r,[0,0],1,0)}L(fe,"assign",ue);var ce=[0,0];var le=22250738585072014e-324,se=4503599627370496;function pe(r,e,t,n){return B(r)||Y(r)?(e[n]=r,e[n+t]=0,e):0!==r&&z(r)<le?(e[n]=r*se,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}L((function(r){return pe(r,[0,0],1,0)}),"assign",pe);var ye=2220446049250313e-31,ve=2148532223,de=[0,0],ge=[0,0];function be(r,e){var t,n,i,o,a,u;return 0===e||0===r||B(r)||Y(r)?r:(pe(r,de,1,0),r=de[0],e+=de[1],e+=function(r){var e=_r(r);return(e=(e&Gr)>>>20)-Jr|0}(r),e<re?(i=0,o=r,fe.assign(i,ce,1,0),a=ce[0],a&=Cr,u=_r(o),Yr(a|=u&=ee,ce[1])):e>Kr?r<0?X:M:(e<=Qr?(e+=52,n=ye):n=1,fe.assign(r,ge,1,0),t=ge[0],t&=ve,n*Yr(t|=e+Jr<<20,ge[1])))}function we(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}var he=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],me=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],je=16777216,Ae=5.960464477539063e-8,Ee=we(20),Oe=we(20),_e=we(20),Fe=we(20);function Se(r,e,t,n,i,o,a,u,f){var c,l,s,p,y,v,d,g,b;for(p=o,b=n[t],g=t,y=0;g>0;y++)l=Ae*b|0,Fe[y]=b-je*l|0,b=n[g-1]+l,g-=1;if(b=be(b,i),b-=8*Dr(.125*b),b-=d=0|b,s=0,i>0?(d+=y=Fe[t-1]>>24-i,Fe[t-1]-=y<<24-i,s=Fe[t-1]>>23-i):0===i?s=Fe[t-1]>>23:b>=.5&&(s=2),s>0){for(d+=1,c=0,y=0;y<t;y++)g=Fe[y],0===c?0!==g&&(c=1,Fe[y]=16777216-g):Fe[y]=16777215-g;if(i>0)switch(i){case 1:Fe[t-1]&=8388607;break;case 2:Fe[t-1]&=4194303}2===s&&(b=1-b,0!==c&&(b-=be(1,i)))}if(0===b){for(g=0,y=t-1;y>=o;y--)g|=Fe[y];if(0===g){for(v=1;0===Fe[o-v];v++);for(y=t+1;y<=t+v;y++){for(f[u+y]=he[a+y],l=0,g=0;g<=u;g++)l+=r[g]*f[u+(y-g)];n[y]=l}return Se(r,e,t+=v,n,i,o,a,u,f)}}if(0===b)for(t-=1,i-=24;0===Fe[t];)t-=1,i-=24;else(b=be(b,-i))>=je?(l=Ae*b|0,Fe[t]=b-je*l|0,i+=24,Fe[t+=1]=l):Fe[t]=0|b;for(l=be(1,i),y=t;y>=0;y--)n[y]=l*Fe[y],l*=Ae;for(y=t;y>=0;y--){for(l=0,v=0;v<=p&&v<=t-y;v++)l+=me[v]*n[y+v];_e[t-y]=l}for(l=0,y=t;y>=0;y--)l+=_e[y];for(e[0]=0===s?l:-l,l=_e[0]-l,y=1;y<=t;y++)l+=_e[y];return e[1]=0===s?l:-l,7&d}function Ue(r,e,t,n){var i,o,a,u,f,c,l;for(4,(o=(t-3)/24|0)<0&&(o=0),u=t-24*(o+1),c=o-(a=n-1),l=a+4,f=0;f<=l;f++)Ee[f]=c<0?0:he[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=a;c++)i+=r[c]*Ee[a+(f-c)];Oe[f]=i}return 4,Se(r,e,4,Oe,u,4,o,a,Ee)}var Ie=Math.round,Te=.6366197723675814,Ne=1.5707963267341256,ke=6077100506506192e-26,xe=6077100506303966e-26,Pe=20222662487959506e-37,Ve=20222662487111665e-37,Ce=84784276603689e-45,Ge=2047;function Le(r,e,t){var n,i,o,a,u;return o=r-(n=Ie(r*Te))*Ne,a=n*ke,u=e>>20|0,t[0]=o-a,u-(_r(t[0])>>20&Ge)>16&&(a=n*Pe-((i=o)-(o=i-(a=n*xe))-a),t[0]=o-a,u-(_r(t[0])>>20&Ge)>49&&(a=n*Ce-((i=o)-(o=i-(a=n*Ve))-a),t[0]=o-a)),t[1]=o-t[0]-a,n}var $e=0,He=16777216,Re=1.5707963267341256,We=6077100506506192e-26,Be=2*We,Me=3*We,Ze=4*We,Xe=598523,Ye=1072243195,ze=1073928572,qe=1074752122,De=1074977148,Je=1075183036,Ke=1075388923,Qe=1075594811,rt=1094263291,et=[0,0,0],tt=[0,0];function nt(r,e){var t,n,i,o,a,u,f;if((i=_r(r)&Cr|0)<=Ye)return e[0]=r,e[1]=0,0;if(i<=qe)return(i&Lr)===Xe?Le(r,i,e):i<=ze?r>0?(f=r-Re,e[0]=f-We,e[1]=f-e[0]-We,1):(f=r+Re,e[0]=f+We,e[1]=f-e[0]+We,-1):r>0?(f=r-2*Re,e[0]=f-Be,e[1]=f-e[0]-Be,2):(f=r+2*Re,e[0]=f+Be,e[1]=f-e[0]+Be,-2);if(i<=Qe)return i<=Je?i===De?Le(r,i,e):r>0?(f=r-3*Re,e[0]=f-Me,e[1]=f-e[0]-Me,3):(f=r+3*Re,e[0]=f+Me,e[1]=f-e[0]+Me,-3):i===Ke?Le(r,i,e):r>0?(f=r-4*Re,e[0]=f-Ze,e[1]=f-e[0]-Ze,4):(f=r+4*Re,e[0]=f+Ze,e[1]=f-e[0]+Ze,-4);if(i<rt)return Le(r,i,e);if(i>=Gr)return e[0]=NaN,e[1]=NaN,0;for(t=function(r){return Hr[0]=r,Rr[$r]}(r),f=Yr(i-((n=(i>>20)-1046)<<20|0),t),a=0;a<2;a++)et[a]=0|f,f=(f-et[a])*He;for(et[2]=f,o=3;et[o-1]===$e;)o-=1;return u=Ue(et,tt,n,o),r<0?(e[0]=-tt[0],e[1]=-tt[1],-u):(e[0]=tt[0],e[1]=tt[1],u)}var it=[0,0],ot=1072243195,at=1044381696;function ut(r){var e;if(e=_r(r),(e&=Cr)<=ot)return e<at?1:Fr(r,0);if(e>=Gr)return NaN;switch(3&nt(r,it)){case 0:return Fr(it[0],it[1]);case 1:return-xr(it[0],it[1]);case 2:return-Fr(it[0],it[1]);default:return xr(it[0],it[1])}}var ft=1072243195,ct=1045430272,lt=[0,0];var st=3.141592653589793,pt=9007199254740992;function yt(r){var e,t,n,i;return B(r)||Y(r)?NaN:(e=z(r))>pt?1:.5===(n=e-(t=Dr(e)))?0:(i=n<.25?ut(st*n):n<.75?function(r){var e;if(e=_r(r),(e&=Cr)<=ft)return e<ct?r:xr(r,0);if(e>=Gr)return NaN;switch(3&nt(r,lt)){case 0:return xr(lt[0],lt[1]);case 1:return Fr(lt[0],lt[1]);case 2:return-xr(lt[0],lt[1]);default:return-Fr(lt[0],lt[1])}}(st*(n=.5-n)):-ut(st*(n=1-n)),t%2==1?-i:i)}var vt=Array.isArray?Array.isArray:function(r){return"[object Array]"===Q(r)};var dt=/./;function gt(r){return"boolean"==typeof r}var bt=Boolean,wt=Boolean.prototype.toString;var ht=D();function mt(r){return"object"==typeof r&&(r instanceof bt||(ht?function(r){try{return wt.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Q(r)))}function jt(r){return gt(r)||mt(r)}L(jt,"isPrimitive",gt),L(jt,"isObject",mt);var At="object"==typeof self?self:null,Et="object"==typeof window?window:null,Ot="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},_t="object"==typeof Ot?Ot:null,Ft="object"==typeof globalThis?globalThis:null;var St=function(r){if(arguments.length){if(!gt(r))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(Ft)return Ft;if(At)return At;if(Et)return Et;if(_t)return _t;throw new Error("unexpected error. Unable to resolve global object.")}(),Ut=St.document&&St.document.childNodes,It=Int8Array;function Tt(){return/^\s*function\s*([^(]*)/i}var Nt=/^\s*function\s*([^(]*)/i;function kt(r){return null!==r&&"object"==typeof r}function xt(r){var e,t,n,i;if(("Object"===(t=Q(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Nt.exec(n.toString()))return e[1]}return kt(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}L(Tt,"REGEXP",Nt),L(kt,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!vt(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(kt));var Pt="function"==typeof dt||"object"==typeof It||"function"==typeof Ut?function(r){return xt(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?xt(r).toLowerCase():e};function Vt(r){return"function"===Pt(r)}var Ct,Gt=Object,Lt=Object.getPrototypeOf;Ct=Vt(Object.getPrototypeOf)?Lt:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===Q(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var $t=Ct;var Ht=Object.prototype;function Rt(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!vt(r)}(r)&&(e=function(r){return null==r?null:(r=Gt(r),$t(r))}(r),!e||!H(r,"constructor")&&H(e,"constructor")&&Vt(e.constructor)&&"[object Function]"===Q(e.constructor)&&H(e,"isPrototypeOf")&&Vt(e.isPrototypeOf)&&(e===Ht||function(r){var e;for(e in r)if(!H(r,e))return!1;return!0}(r)))}function Wt(r){return"number"==typeof r}var Bt=Z.prototype.toString;var Mt=D();function Zt(r){return"object"==typeof r&&(r instanceof Z||(Mt?function(r){try{return Bt.call(r),!0}catch(r){return!1}}(r):"[object Number]"===Q(r)))}function Xt(r){return Wt(r)||Zt(r)}function Yt(r){return r<M&&r>X&&Dr(e=r)===e;var e}function zt(r){return Wt(r)&&Yt(r)}function qt(r){return Zt(r)&&Yt(r.valueOf())}function Dt(r){return zt(r)||qt(r)}function Jt(r){return zt(r)&&r>0}function Kt(r){return qt(r)&&r.valueOf()>0}function Qt(r){return Jt(r)||Kt(r)}function rn(r){return zt(r)&&r>=0}function en(r){return qt(r)&&r.valueOf()>=0}function tn(r){return rn(r)||en(r)}function nn(r){return Wt(r)&&r>=0}function on(r){return Zt(r)&&r.valueOf()>=0}function an(r){return nn(r)||on(r)}function un(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}function fn(r){var e,t,n,i,o,a,u;if(e={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(i=function(r,e){return Rt(e)?H(e,"period")&&(r.period=e.period,!Jt(e.period))?new TypeError(un("0tF8N","period",e.period)):H(e,"amplitude")&&(r.amplitude=e.amplitude,!nn(e.amplitude))?new TypeError(un("0tF4k","amplitude",e.amplitude)):H(e,"offset")&&(r.offset=e.offset,!zt(e.offset))?new TypeError(un("0tF8M","offset",e.offset)):H(e,"iter")&&(r.iter=e.iter,!rn(e.iter))?new TypeError(un("0tF2t","iter",e.iter)):null:new TypeError(un("0tF2V",e))}(e,r),i))throw i;return(o=(e.period-e.offset)%e.period)<0&&(o+=e.period),o-=1,a=2/e.period,u=0,L(t={},"next",(function(){if(u+=1,n||u>e.iter)return{done:!0};return o+=1,{value:e.amplitude*yt(a*(o%=e.period)),done:!1}})),L(t,"return",(function(r){if(n=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),W&&L(t,W,(function(){return fn(e)})),t}L(Xt,"isPrimitive",Wt),L(Xt,"isObject",Zt),L(Dt,"isPrimitive",zt),L(Dt,"isObject",qt),L(Qt,"isPrimitive",Jt),L(Qt,"isObject",Kt),L(tn,"isPrimitive",rn),L(tn,"isObject",en),L(an,"isPrimitive",nn),L(an,"isObject",on);export{fn as default};
//# sourceMappingURL=mod.js.map
