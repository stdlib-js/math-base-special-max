// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-positive-zero@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";var r=s,i=t,m=e,a=n;var d=function(s,t){var e,n,d,o;if(2===(e=arguments.length))return i(s)||i(t)?NaN:s===a||t===a?a:s===t&&0===s?r(s)?s:t:s>t?s:t;for(n=m,o=0;o<e;o++){if(i(d=arguments[o])||d===a)return d;(d>n||d===n&&0===d&&r(d))&&(n=d)}return n};export{d as default};
//# sourceMappingURL=index.mjs.map
