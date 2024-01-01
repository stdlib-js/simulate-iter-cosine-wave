// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cospi@v0.2.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.1-esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.1.0-esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import{isPrimitive as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import{isPrimitive as p}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-number@v0.1.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function a(e,t){return s(t)?n(t,"period")&&(e.period=t.period,!o(t.period))?new TypeError(m("invalid option. `%s` option must be an positive integer. Option: `%s`.","period",t.period)):n(t,"amplitude")&&(e.amplitude=t.amplitude,!p(t.amplitude))?new TypeError(m("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","amplitude",t.amplitude)):n(t,"offset")&&(e.offset=t.offset,!r(t.offset))?new TypeError(m("invalid option. `%s` option must be an integer. Option: `%s`.","offset",t.offset)):n(t,"iter")&&(e.iter=t.iter,!d(t.iter))?new TypeError(m("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",t.iter)):null:new TypeError(m("invalid argument. Options argument must be an object. Value: `%s`.",t))}function l(s){var n,r,o,d,p,m,v;if(n={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(d=a(n,s)))throw d;return(p=(n.period-n.offset)%n.period)<0&&(p+=n.period),p-=1,m=2/n.period,v=0,e(r={},"next",f),e(r,"return",u),t&&e(r,t,j),r;function f(){return v+=1,o||v>n.iter?{done:!0}:(p+=1,p%=n.period,{value:n.amplitude*i(m*p),done:!1})}function u(e){return o=!0,arguments.length?{value:e,done:!0}:{done:!0}}function j(){return l(n)}}export{l as default};
//# sourceMappingURL=index.mjs.map
