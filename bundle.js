// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).iterCosineWave=e()}(this,(function(){"use strict";function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,i=Object.prototype,o=i.toString,a=i.__defineGetter__,u=i.__defineSetter__,f=i.__lookupGetter__,c=i.__lookupSetter__;var s=function(r,e,t){var n,s,l,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((s="value"in t)&&(f.call(r,e)||c.call(r,e)?(n=r.__proto__,r.__proto__=i,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),l="get"in t,v="set"in t,s&&(l||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&a&&a.call(r,e,t.get),v&&u&&u.call(r,e,t.set),r},l=n,v=s,p=t()?l:v;var d=function(r,e,t){p(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},g=d,y=Object.prototype.hasOwnProperty;var m=function(r,e){return null!=r&&y.call(r,e)},b=m;var h=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&b(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null;var w=function(r){return r!=r},j=Number.POSITIVE_INFINITY,E=Number,O=E.NEGATIVE_INFINITY,P=j,A=O;var _=function(r){return r===P||r===A};var T=function(r){return Math.abs(r)};var x=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var S=function(){return x&&"symbol"==typeof Symbol.toStringTag},V=Object.prototype.toString,U=V;var k=function(r){return U.call(r)},F="function"==typeof Symbol?Symbol.toStringTag:"",I=m,N=F,R=V;var $=k,M=function(r){var e,t,n;if(null==r)return R.call(r);t=r[N],e=I(r,N);try{r[N]=void 0}catch(e){return R.call(r)}return n=R.call(r),e?r[N]=t:delete r[N],n},G=S()?M:$,C=G,L="function"==typeof Uint32Array;var W="function"==typeof Uint32Array?Uint32Array:null,H=function(r){return L&&r instanceof Uint32Array||"[object Uint32Array]"===C(r)},B=W;var Z=function(){var r,e;if("function"!=typeof B)return!1;try{e=new B(e=[1,3.14,-3.14,4294967296,4294967297]),r=H(e)&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r};var X="function"==typeof Uint32Array?Uint32Array:void 0,z=function(){throw new Error("not implemented")},Y=Z()?X:z,D=G,q="function"==typeof Float64Array;var J="function"==typeof Float64Array?Float64Array:null,K=function(r){return q&&r instanceof Float64Array||"[object Float64Array]"===D(r)},Q=J;var rr=function(){var r,e;if("function"!=typeof Q)return!1;try{e=new Q([1,3.14,-3.14,NaN]),r=K(e)&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r};var er="function"==typeof Float64Array?Float64Array:void 0,tr=function(){throw new Error("not implemented")},nr=rr()?er:tr,ir=G,or="function"==typeof Uint8Array;var ar="function"==typeof Uint8Array?Uint8Array:null,ur=function(r){return or&&r instanceof Uint8Array||"[object Uint8Array]"===ir(r)},fr=ar;var cr=function(){var r,e;if("function"!=typeof fr)return!1;try{e=new fr(e=[1,3.14,-3.14,256,257]),r=ur(e)&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r};var sr="function"==typeof Uint8Array?Uint8Array:void 0,lr=function(){throw new Error("not implemented")},vr=cr()?sr:lr,pr=G,dr="function"==typeof Uint16Array;var gr="function"==typeof Uint16Array?Uint16Array:null,yr=function(r){return dr&&r instanceof Uint16Array||"[object Uint16Array]"===pr(r)},mr=gr;var br=function(){var r,e;if("function"!=typeof mr)return!1;try{e=new mr(e=[1,3.14,-3.14,65536,65537]),r=yr(e)&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r};var hr,wr="function"==typeof Uint16Array?Uint16Array:void 0,jr=function(){throw new Error("not implemented")},Er={uint16:br()?wr:jr,uint8:vr};(hr=new Er.uint16(1))[0]=4660;var Or=52===new Er.uint8(hr.buffer)[0],Pr=Y,Ar=!0===Or?1:0,_r=new nr(1),Tr=new Pr(_r.buffer);var xr=function(r){return _r[0]=r,Tr[Ar]};var Sr=function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)},Vr=function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7};var Ur=function(r,e){var t,n,i,o;return i=(o=r*r)*o,n=o*Sr(o),n+=i*i*Vr(o),(i=1-(t=.5*o))+(1-i-t+(o*n-r*e))},kr=-.16666666666666632;var Fr=function(r,e){var t,n,i;return t=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),n=i*r,0===e?r+n*(kr+i*t):r-(i*(.5*e-n*t)-e-n*kr)},Ir=Y,Nr=!0===Or?0:1,Rr=new nr(1),$r=new Ir(Rr.buffer);var Mr,Gr,Cr=function(r){return Rr[0]=r,$r[Nr]};!0===Or?(Mr=1,Gr=0):(Mr=0,Gr=1);var Lr=Y,Wr={HIGH:Mr,LOW:Gr},Hr=new nr(1),Br=new Lr(Hr.buffer),Zr=Wr.HIGH,Xr=Wr.LOW;var zr,Yr,Dr=function(r,e){return Br[Zr]=r,Br[Xr]=e,Hr[0]},qr=Dr,Jr=Math.floor;!0===Or?(zr=1,Yr=0):(zr=0,Yr=1);var Kr=Y,Qr={HIGH:zr,LOW:Yr},re=new nr(1),ee=new Kr(re.buffer),te=Qr.HIGH,ne=Qr.LOW;var ie=function(r,e){return re[0]=e,r[0]=ee[te],r[1]=ee[ne],r};var oe=function(r,e){return 1===arguments.length?ie([0,0],r):ie(r,e)},ae=oe,ue=xr,fe=qr,ce=[0,0];var se=_,le=w,ve=T;var pe=function(r,e){return le(e)||se(e)?(r[0]=e,r[1]=0,r):0!==e&&ve(e)<22250738585072014e-324?(r[0]=4503599627370496*e,r[1]=-52,r):(r[0]=e,r[1]=0,r)};var de=function(r,e){return 1===arguments.length?pe([0,0],r):pe(r,e)},ge=xr;var ye=function(r){var e=ge(r);return(e=(2146435072&e)>>>20)-1023|0},me=j,be=O,he=w,we=_,je=function(r,e){var t,n;return ae(ce,r),t=ce[0],t&=2147483647,n=ue(e),fe(t|=n&=2147483648,ce[1])},Ee=de,Oe=ye,Pe=oe,Ae=qr,_e=[0,0],Te=[0,0];var xe=function(r,e){var t,n;return 0===e||0===r||he(r)||we(r)?r:(Ee(_e,r),e+=_e[1],(e+=Oe(r=_e[0]))<-1074?je(0,r):e>1023?r<0?be:me:(e<=-1023?(e+=52,n=2220446049250313e-31):n=1,Pe(Te,r),t=Te[0],t&=2148532223,n*Ae(t|=e+1023<<20,Te[1])))};var Se=function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t};var Ve=Jr,Ue=xe,ke=function(r){return Se(0,r)},Fe=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Ie=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Ne=16777216,Re=5.960464477539063e-8,$e=ke(20),Me=ke(20),Ge=ke(20),Ce=ke(20);function Le(r,e,t,n,i,o,a,u,f){var c,s,l,v,p,d,g,y,m;for(v=o,m=n[t],y=t,p=0;y>0;p++)s=Re*m|0,Ce[p]=m-Ne*s|0,m=n[y-1]+s,y-=1;if(m=Ue(m,i),m-=8*Ve(.125*m),m-=g=0|m,l=0,i>0?(g+=p=Ce[t-1]>>24-i,Ce[t-1]-=p<<24-i,l=Ce[t-1]>>23-i):0===i?l=Ce[t-1]>>23:m>=.5&&(l=2),l>0){for(g+=1,c=0,p=0;p<t;p++)y=Ce[p],0===c?0!==y&&(c=1,Ce[p]=16777216-y):Ce[p]=16777215-y;if(i>0)switch(i){case 1:Ce[t-1]&=8388607;break;case 2:Ce[t-1]&=4194303}2===l&&(m=1-m,0!==c&&(m-=Ue(1,i)))}if(0===m){for(y=0,p=t-1;p>=o;p--)y|=Ce[p];if(0===y){for(d=1;0===Ce[o-d];d++);for(p=t+1;p<=t+d;p++){for(f[u+p]=Fe[a+p],s=0,y=0;y<=u;y++)s+=r[y]*f[u+(p-y)];n[p]=s}return Le(r,e,t+=d,n,i,o,a,u,f)}}if(0===m)for(t-=1,i-=24;0===Ce[t];)t-=1,i-=24;else(m=Ue(m,-i))>=Ne?(s=Re*m|0,Ce[t]=m-Ne*s|0,i+=24,Ce[t+=1]=s):Ce[t]=0|m;for(s=Ue(1,i),p=t;p>=0;p--)n[p]=s*Ce[p],s*=Re;for(p=t;p>=0;p--){for(s=0,d=0;d<=v&&d<=t-p;d++)s+=Ie[d]*n[p+d];Ge[t-p]=s}for(s=0,p=t;p>=0;p--)s+=Ge[p];for(e[0]=0===l?s:-s,s=Ge[0]-s,p=1;p<=t;p++)s+=Ge[p];return e[1]=0===l?s:-s,7&g}var We=function(r,e,t,n){var i,o,a,u,f,c,s;for(4,(o=(t-3)/24|0)<0&&(o=0),u=t-24*(o+1),c=o-(a=n-1),s=a+4,f=0;f<=s;f++)$e[f]=c<0?0:Fe[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=a;c++)i+=r[c]*$e[a+(f-c)];Me[f]=i}return 4,Le(r,e,4,Me,u,4,o,a,$e)},He=Math.round,Be=xr;var Ze=xr,Xe=Cr,ze=qr,Ye=We,De=function(r,e,t){var n,i,o,a,u;return o=r-1.5707963267341256*(n=He(.6366197723675814*r)),a=6077100506506192e-26*n,u=e>>20|0,t[0]=o-a,u-(Be(t[0])>>20&2047)>16&&(a=20222662487959506e-37*n-((i=o)-(o=i-(a=6077100506303966e-26*n))-a),t[0]=o-a,u-(Be(t[0])>>20&2047)>49&&(a=84784276603689e-45*n-((i=o)-(o=i-(a=20222662487111665e-37*n))-a),t[0]=o-a)),t[1]=o-t[0]-a,n},qe=1.5707963267341256,Je=6077100506506192e-26,Ke=2*Je,Qe=3*Je,rt=4*Je,et=[0,0,0],tt=[0,0];var nt=function(r,e){var t,n,i,o,a,u,f;if((i=2147483647&Ze(r)|0)<=1072243195)return e[0]=r,e[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?De(r,i,e):i<=1073928572?r>0?(f=r-qe,e[0]=f-Je,e[1]=f-e[0]-Je,1):(f=r+qe,e[0]=f+Je,e[1]=f-e[0]+Je,-1):r>0?(f=r-2*qe,e[0]=f-Ke,e[1]=f-e[0]-Ke,2):(f=r+2*qe,e[0]=f+Ke,e[1]=f-e[0]+Ke,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?De(r,i,e):r>0?(f=r-3*qe,e[0]=f-Qe,e[1]=f-e[0]-Qe,3):(f=r+3*qe,e[0]=f+Qe,e[1]=f-e[0]+Qe,-3):1075388923===i?De(r,i,e):r>0?(f=r-4*qe,e[0]=f-rt,e[1]=f-e[0]-rt,4):(f=r+4*qe,e[0]=f+rt,e[1]=f-e[0]+rt,-4);if(i<1094263291)return De(r,i,e);if(i>=2146435072)return e[0]=NaN,e[1]=NaN,0;for(t=Xe(r),f=ze(i-((n=(i>>20)-1046)<<20|0),t),a=0;a<2;a++)et[a]=0|f,f=16777216*(f-et[a]);for(et[2]=f,o=3;0===et[o-1];)o-=1;return u=Ye(et,tt,n,o),r<0?(e[0]=-tt[0],e[1]=-tt[1],-u):(e[0]=tt[0],e[1]=tt[1],u)},it=xr,ot=Ur,at=Fr,ut=nt,ft=[0,0];var ct=xr,st=Ur,lt=Fr,vt=nt,pt=[0,0];var dt=w,gt=_,yt=T,mt=function(r){var e;if(e=it(r),(e&=2147483647)<=1072243195)return e<1044381696?1:ot(r,0);if(e>=2146435072)return NaN;switch(3&ut(r,ft)){case 0:return ot(ft[0],ft[1]);case 1:return-at(ft[0],ft[1]);case 2:return-ot(ft[0],ft[1]);default:return at(ft[0],ft[1])}},bt=function(r){var e;if(e=ct(r),(e&=2147483647)<=1072243195)return e<1045430272?r:lt(r,0);if(e>=2146435072)return NaN;switch(3&vt(r,pt)){case 0:return lt(pt[0],pt[1]);case 1:return st(pt[0],pt[1]);case 2:return-lt(pt[0],pt[1]);default:return-st(pt[0],pt[1])}},ht=Jr,wt=3.141592653589793;var jt=function(r){var e,t,n,i;return dt(r)||gt(r)?NaN:(e=yt(r))>9007199254740992?1:.5===(n=e-(t=ht(e)))?0:(i=n<.25?mt(wt*n):n<.75?bt(wt*(n=.5-n)):-mt(wt*(n=1-n)),t%2==1?-i:i)},Et=G;var Ot=Array.isArray?Array.isArray:function(r){return"[object Array]"===Et(r)},Pt=Ot;var At=function(r){return"object"==typeof r&&null!==r&&!Pt(r)},_t=/./;var Tt=function(r){return"boolean"==typeof r},xt=Boolean.prototype.toString;var St=G,Vt=function(r){try{return xt.call(r),!0}catch(r){return!1}},Ut=S();var kt=function(r){return"object"==typeof r&&(r instanceof Boolean||(Ut?Vt(r):"[object Boolean]"===St(r)))},Ft=Tt,It=kt;var Nt=g,Rt=function(r){return Ft(r)||It(r)},$t=kt;Nt(Rt,"isPrimitive",Tt),Nt(Rt,"isObject",$t);var Mt=Rt;var Gt=function(){return new Function("return this;")()},Ct="object"==typeof self?self:null,Lt="object"==typeof window?window:null,Wt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Ht="object"==typeof Wt?Wt:null;module.exports=Ht;var Bt=Mt.isPrimitive,Zt=Gt,Xt=Ct,zt=Lt,Yt=r(Object.freeze({__proto__:null}));var Dt=function(r){if(arguments.length){if(!Bt(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Zt()}if(Xt)return Xt;if(zt)return zt;if(Yt)return Yt;throw new Error("unexpected error. Unable to resolve global object.")},qt=Dt(),Jt=qt.document&&qt.document.childNodes,Kt=Int8Array,Qt=_t,rn=Jt,en=Kt;var tn=function(){return"function"==typeof Qt||"object"==typeof en||"function"==typeof rn};var nn=function(){return/^\s*function\s*([^(]*)/i},on=nn;g(on,"REGEXP",nn());var an=on,un=Ot;var fn=function(r){return null!==r&&"object"==typeof r};g(fn,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!un(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(fn));var cn=fn;var sn=G,ln=an.REGEXP,vn=function(r){return cn(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var pn=function(r){var e,t,n;if(("Object"===(t=sn(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=ln.exec(n.toString()))return e[1]}return vn(r)?"Buffer":t},dn=pn;var gn=pn;var yn=function(r){var e;return null===r?"null":"object"===(e=typeof r)?dn(r).toLowerCase():e},mn=function(r){return gn(r).toLowerCase()},bn=tn()?mn:yn;var hn=function(r){return"function"===bn(r)},wn=Object.getPrototypeOf;var jn=function(r){return r.__proto__},En=G,On=jn;var Pn=function(r){var e=On(r);return e||null===e?e:"[object Function]"===En(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},An=wn,_n=Pn,Tn=hn(Object.getPrototypeOf)?An:_n;var xn=At,Sn=hn,Vn=function(r){return null==r?null:(r=Object(r),Tn(r))},Un=m,kn=G,Fn=Object.prototype;var In=function(r){var e;return!!xn(r)&&(!(e=Vn(r))||!Un(r,"constructor")&&Un(e,"constructor")&&Sn(e.constructor)&&"[object Function]"===kn(e.constructor)&&Un(e,"isPrototypeOf")&&Sn(e.isPrototypeOf)&&(e===Fn||function(r){var e;for(e in r)if(!Un(r,e))return!1;return!0}(r)))},Nn=In;var Rn=function(r){return"number"==typeof r},$n=E.prototype.toString;var Mn=G,Gn=E,Cn=function(r){try{return $n.call(r),!0}catch(r){return!1}},Ln=S();var Wn=function(r){return"object"==typeof r&&(r instanceof Gn||(Ln?Cn(r):"[object Number]"===Mn(r)))},Hn=Rn,Bn=Wn;var Zn=g,Xn=function(r){return Hn(r)||Bn(r)},zn=Wn;Zn(Xn,"isPrimitive",Rn),Zn(Xn,"isObject",zn);var Yn=Xn,Dn=Jr;var qn=function(r){return Dn(r)===r},Jn=j,Kn=O,Qn=qn;var ri=function(r){return r<Jn&&r>Kn&&Qn(r)},ei=Yn.isPrimitive,ti=ri;var ni=function(r){return ei(r)&&ti(r)},ii=Yn.isObject,oi=ri;var ai=function(r){return ii(r)&&oi(r.valueOf())},ui=ni,fi=ai;var ci=g,si=function(r){return ui(r)||fi(r)},li=ai;ci(si,"isPrimitive",ni),ci(si,"isObject",li);var vi=si,pi=vi.isPrimitive;var di=function(r){return pi(r)&&r>0},gi=vi.isObject;var yi=function(r){return gi(r)&&r.valueOf()>0},mi=di,bi=yi;var hi=g,wi=function(r){return mi(r)||bi(r)},ji=yi;hi(wi,"isPrimitive",di),hi(wi,"isObject",ji);var Ei=wi,Oi=vi.isPrimitive;var Pi=function(r){return Oi(r)&&r>=0},Ai=vi.isObject;var _i=function(r){return Ai(r)&&r.valueOf()>=0},Ti=Pi,xi=_i;var Si=g,Vi=function(r){return Ti(r)||xi(r)},Ui=_i;Si(Vi,"isPrimitive",Pi),Si(Vi,"isObject",Ui);var ki=Vi,Fi=Yn.isPrimitive;var Ii=function(r){return Fi(r)&&r>=0},Ni=Yn.isObject;var Ri=function(r){return Ni(r)&&r.valueOf()>=0},$i=Ii,Mi=Ri;var Gi=g,Ci=function(r){return $i(r)||Mi(r)},Li=Ri;Gi(Ci,"isPrimitive",Ii),Gi(Ci,"isObject",Li);var Wi=Ci;var Hi=function(r){return"string"==typeof r},Bi=String.prototype.valueOf;var Zi=G,Xi=function(r){try{return Bi.call(r),!0}catch(r){return!1}},zi=S();var Yi=function(r){return"object"==typeof r&&(r instanceof String||(zi?Xi(r):"[object String]"===Zi(r)))},Di=Hi,qi=Yi;var Ji=g,Ki=function(r){return Di(r)||qi(r)},Qi=Yi;Ji(Ki,"isPrimitive",Hi),Ji(Ki,"isObject",Qi);var ro=Ki,eo=qn;var to=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&eo(r.length)&&r.length>=0&&r.length<=9007199254740991},no=Yn.isPrimitive,io=w;var oo=function(r){return no(r)&&io(r)},ao=Yn.isObject,uo=w;var fo=function(r){return ao(r)&&uo(r.valueOf())},co=oo,so=fo;var lo=g,vo=function(r){return co(r)||so(r)},po=fo;lo(vo,"isPrimitive",oo),lo(vo,"isObject",po);var go=to,yo=vi.isPrimitive,mo=ro.isPrimitive,bo=vo.isPrimitive;var ho=function(r,e,t){var n,i,o;if(!go(r)&&!mo(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!yo(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(mo(r)){if(!mo(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,bo(e)){for(o=i;o<n;o++)if(bo(r[o]))return!0;return!1}for(o=i;o<n;o++)if(r[o]===e)return!0;return!1},wo=ho,jo=ro.isPrimitive;var Eo=function(r){if(!jo(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},Oo=ro.isPrimitive;var Po=function(r){if(!Oo(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},Ao=Eo,_o=Po,To=ro.isPrimitive;var xo=function(r){return To(r)&&r===_o(r)&&r!==Ao(r)},So=j,Vo=O;var Uo=function(r){return r==r&&r>Vo&&r<So},ko=ki.isPrimitive,Fo=ro.isPrimitive;var Io=function(r,e){var t,n;if(!Fo(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!ko(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},No=vi.isPrimitive,Ro=ro.isPrimitive;var $o=function(r,e,t){var n,i;if(!Ro(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!Ro(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!No(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0},Mo=Io,Go=$o;var Co=function(r,e,t){var n=!1,i=e-r.length;return i<0||(Go(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+Mo("0",i):Mo("0",i)+r,n&&(r="-"+r)),r},Lo=xo,Wo=Po,Ho=Eo,Bo=Uo,Zo=Yn.isPrimitive,Xo=Co;var zo=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!Bo(n)){if(!Zo(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Xo(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Xo(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=Lo(r.specifier)?Wo(t):Ho(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},Yo=ro.isPrimitive,Do=/[-\/\\^$*+?.()|[\]{}]/g;var qo=function(r){var e,t;if(!Yo(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(Do,"\\$&"):(e=(e=r.substring(1,t)).replace(Do,"\\$&"),r=r[0]+e+r.substring(t))},Jo=RegExp.prototype.exec;var Ko=G,Qo=function(r){try{return Jo.call(r),!0}catch(r){return!1}},ra=S();var ea=qo,ta=hn,na=ro.isPrimitive,ia=function(r){return"object"==typeof r&&(r instanceof RegExp||(ra?Qo(r):"[object RegExp]"===Ko(r)))};var oa=xo,aa=Po,ua=Eo,fa=function(r,e,t){if(!na(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(na(e))e=ea(e),e=new RegExp(e,"g");else if(!ia(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!na(t)&&!ta(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},ca=Uo,sa=Yn.isPrimitive,la=T,va=/e\+(\d)$/,pa=/e-(\d)$/,da=/^(\d+)$/,ga=/^(\d+)e/,ya=/\.0$/,ma=/\.0*e/,ba=/(\..*[^0])0*e/;var ha=function(r){var e,t,n=parseFloat(r.arg);if(!ca(n)){if(!sa(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":la(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=fa(t,ba,"$1e"),t=fa(t,ma,"e"),t=fa(t,ya,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=fa(t,va,"e+0$1"),t=fa(t,pa,"e-0$1"),r.alternate&&(t=fa(t,da,"$1."),t=fa(t,ga,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=oa(r.specifier)?aa(t):ua(t)},wa=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var ja=Io;var Ea=ro.isPrimitive,Oa=wo,Pa=w,Aa=zo,_a=ha,Ta=function(r){var e,t,n,i,o;for(e=0,n=[],o=wa.exec(r);o;)(t=r.slice(e,wa.lastIndex-o[0].length)).length&&n.push(t),(i=a(o,n.length))&&n.push(i),e=wa.lastIndex,o=wa.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function a(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},xa=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+ja(" ",n):ja(" ",n)+r},Sa=Co,Va=String.fromCharCode;var Ua=function(r){var e,t,n,i,o,a,u,f,c;if(!Ea(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=Ta(r),a="",u=1,f=0;f<e.length;f++)if(n=e[f],Ea(n))a+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,c=0;c<t.length;c++)switch(i=t.charAt(c)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!Oa(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Pa(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,Pa(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=Aa(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!Pa(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Pa(o)?String(n.arg):Va(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=_a(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Sa(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=xa(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a},ka=Nn,Fa=m,Ia=vi.isPrimitive,Na=Ei.isPrimitive,Ra=ki.isPrimitive,$a=Wi.isPrimitive,Ma=Ua;var Ga=g,Ca=h,La=jt,Wa=function(r,e){return ka(e)?Fa(e,"period")&&(r.period=e.period,!Na(e.period))?new TypeError(Ma("invalid option. `%s` option must be an positive integer. Option: `%s`.","period",e.period)):Fa(e,"amplitude")&&(r.amplitude=e.amplitude,!$a(e.amplitude))?new TypeError(Ma("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","amplitude",e.amplitude)):Fa(e,"offset")&&(r.offset=e.offset,!Ia(e.offset))?new TypeError(Ma("invalid option. `%s` option must be an integer. Option: `%s`.","offset",e.offset)):Fa(e,"iter")&&(r.iter=e.iter,!Ra(e.iter))?new TypeError(Ma("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",e.iter)):null:new TypeError(Ma("invalid argument. Options argument must be an object. Value: `%s`.",e))};var Ha=function r(e){var t,n,i,o,a,u,f;if(t={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(o=Wa(t,e)))throw o;return(a=(t.period-t.offset)%t.period)<0&&(a+=t.period),a-=1,u=2/t.period,f=0,Ga(n={},"next",c),Ga(n,"return",s),Ca&&Ga(n,Ca,l),n;function c(){return f+=1,i||f>t.iter?{done:!0}:(a+=1,a%=t.period,{value:t.amplitude*La(u*a),done:!1})}function s(r){return i=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){return r(t)}};return Ha}));
//# sourceMappingURL=bundle.js.map
