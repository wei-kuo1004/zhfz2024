(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[624],{7612:function(e,t,n){Promise.resolve().then(n.bind(n,5636))},5636:function(e,t,n){"use strict";n.r(t);var r=n(7437),s=n(6694),u=n(7138),i=n(6648),a=n(2265),c=n(9903),o=n(7449),l=n.n(o);let f={character1:"https://wei-kuo1004.github.io/zhfz2024/images/PRD/C1/C1-F-bg.webp",character2:"https://wei-kuo1004.github.io/zhfz2024/images/PRD/C2/C2-F-bg.webp",character3:"https://wei-kuo1004.github.io/zhfz2024/images/PRD/C3/C3-F-bg.webp"};t.default=()=>{let{selectedCharacter:e}=(0,s.A)(),[t,n]=(0,a.useState)("character1"),[o,d]=(0,a.useState)(!0);(0,a.useEffect)(()=>{e&&n(e)},[e]);let h=f[t];return((0,a.useEffect)(()=>{let e=new window.Image;e.src=h,e.onload=()=>d(!1)},[h]),o)?(0,r.jsx)(c.Z,{}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l(),{children:[(0,r.jsx)("link",{rel:"preload",href:"https://wei-kuo1004.github.io/zhfz2024/images/PRD/C1/C1-F-bg.webp",as:"image"}),(0,r.jsx)("link",{rel:"preload",href:"https://wei-kuo1004.github.io/zhfz2024/images/PRD/C2/C2-F-bg.webp",as:"image"}),(0,r.jsx)("link",{rel:"preload",href:"https://wei-kuo1004.github.io/zhfz2024/images/PRD/C3/C3-F-bg.webp",as:"image"})]}),(0,r.jsxs)("div",{className:"container mx-auto flex aspect-[1/1.8] min-h-screen flex-col items-center justify-center bg-p1-bg bg-cover p-6",style:{backgroundImage:"url(".concat(h,")"),backgroundSize:"cover"},children:[(0,r.jsx)("div",{className:"grow"})," ",(0,r.jsx)("div",{className:"flex justify-center gap-4 items-end pb-4",children:(0,r.jsx)(u.default,{href:"/",children:(0,r.jsx)(i.default,{src:"https://wei-kuo1004.github.io/zhfz2024/images/PRD/back.png",alt:"描述文字",width:800,height:600,style:{objectFit:"cover",width:"100%",height:"auto"}})})})]})]})}},9903:function(e,t,n){"use strict";var r=n(7437);n(2265),t.Z=()=>(0,r.jsx)("div",{className:"flex min-h-screen items-center justify-center bg-yellow-400",children:(0,r.jsxs)("div",{className:"flex space-x-2",children:[(0,r.jsx)("div",{className:"h-3 w-3 animate-bounce rounded-full bg-gray-800 delay-0"}),(0,r.jsx)("div",{className:"h-3 w-3 animate-bounce rounded-full bg-gray-800 delay-200"}),(0,r.jsx)("div",{className:"delay-400 h-3 w-3 animate-bounce rounded-full bg-gray-800"})]})})},7449:function(e,t){"use strict";function n(){return null}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4492:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),s="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},u=r.useState,i=r.useEffect,a=r.useLayoutEffect,c=r.useDebugValue;function o(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!s(e,n)}catch(e){return!0}}var l="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=u({inst:{value:n,getSnapshot:t}}),s=r[0].inst,l=r[1];return a(function(){s.value=n,s.getSnapshot=t,o(s)&&l({inst:s})},[e,n,t]),i(function(){return o(s)&&l({inst:s}),e(function(){o(s)&&l({inst:s})})},[e]),c(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:l},5107:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),s=n(554),u="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=s.useSyncExternalStore,a=r.useRef,c=r.useEffect,o=r.useMemo,l=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,s){var f=a(null);if(null===f.current){var d={hasValue:!1,value:null};f.current=d}else d=f.current;var h=i(e,(f=o(function(){function e(e){if(!c){if(c=!0,i=e,e=r(e),void 0!==s&&d.hasValue){var t=d.value;if(s(t,e))return a=t}return a=e}if(t=a,u(i,e))return t;var n=r(e);return void 0!==s&&s(t,n)?t:(i=e,a=n)}var i,a,c=!1,o=void 0===n?null:n;return[function(){return e(t())},null===o?void 0:function(){return e(o())}]},[t,n,r,s]))[0],f[1]);return c(function(){d.hasValue=!0,d.value=h},[h]),l(h),h}},554:function(e,t,n){"use strict";e.exports=n(4492)},5006:function(e,t,n){"use strict";e.exports=n(5107)},6694:function(e,t,n){"use strict";n.d(t,{A:function(){return s}});let r=(0,n(9099).Ue)(e=>({selectedCharacter:"",setSelectedCharacter:t=>{console.log("使用者選擇了: ".concat(t)),e({selectedCharacter:t})},currentLevel:1,setCurrentLevel:t=>{console.log("進入第 ".concat(t," 關")),e({currentLevel:t})},answers:{},setAnswer:(t,n)=>{console.log("第 ".concat(t," 關選擇了: ").concat(n)),e(e=>({answers:{...e.answers,[t]:n}}))}})),s=()=>{let e=r(e=>e.selectedCharacter),t=r(e=>e.setSelectedCharacter),n=r(e=>e.currentLevel);return{selectedCharacter:e,setSelectedCharacter:t,currentLevel:n,setCurrentLevel:r(e=>e.setCurrentLevel),answers:r(e=>e.answers),setAnswer:r(e=>e.setAnswer)}}},9099:function(e,t,n){"use strict";n.d(t,{Ue:function(){return d}});let r=e=>{let t;let n=new Set,r=(e,r)=>{let s="function"==typeof e?e(t):e;if(!Object.is(s,t)){let e=t;t=(null!=r?r:"object"!=typeof s||null===s)?s:Object.assign({},t,s),n.forEach(n=>n(t,e))}},s=()=>t,u={setState:r,getState:s,getInitialState:()=>i,subscribe:e=>(n.add(e),()=>n.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},i=t=e(r,s,u);return u},s=e=>e?r(e):r;var u=n(2265),i=n(5006);let{useDebugValue:a}=u,{useSyncExternalStoreWithSelector:c}=i,o=!1,l=e=>e,f=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?s(e):e,n=(e,n)=>(function(e,t=l,n){n&&!o&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),o=!0);let r=c(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return a(r),r})(t,e,n);return Object.assign(n,t),n},d=e=>e?f(e):f}},function(e){e.O(0,[648,138,971,23,744],function(){return e(e.s=7612)}),_N_E=e.O()}]);