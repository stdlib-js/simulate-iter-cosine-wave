// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cospi@v0.0.7-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import{isPrimitive as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-number@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function l(e,t){return i(t)?s(t,"period")&&(e.period=t.period,!o(t.period))?new TypeError(p("0RW8f","period",t.period)):s(t,"amplitude")&&(e.amplitude=t.amplitude,!m(t.amplitude))?new TypeError(p("0RW4x","amplitude",t.amplitude)):s(t,"offset")&&(e.offset=t.offset,!n(t.offset))?new TypeError(p("0RW8e","offset",t.offset)):s(t,"iter")&&(e.iter=t.iter,!d(t.iter))?new TypeError(p("0RW35","iter",t.iter)):null:new TypeError(p("0RW2h",t))}function f(i){var s,n,o,d,m,p,a;if(s={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(d=l(s,i)))throw d;return(m=(s.period-s.offset)%s.period)<0&&(m+=s.period),m-=1,p=2/s.period,a=0,e(n={},"next",j),e(n,"return",h),t&&e(n,t,u),n;function j(){return a+=1,o||a>s.iter?{done:!0}:(m+=1,m%=s.period,{value:s.amplitude*r(p*m),done:!1})}function h(e){return o=!0,arguments.length?{value:e,done:!0}:{done:!0}}function u(){return f(s)}}export{f as default};
//# sourceMappingURL=index.mjs.map
