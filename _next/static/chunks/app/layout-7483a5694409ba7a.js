(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{4890:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,4231,23)),Promise.resolve().then(r.t.bind(r,9377,23)),Promise.resolve().then(r.t.bind(r,3403,23)),Promise.resolve().then(r.t.bind(r,6994,23)),Promise.resolve().then(r.bind(r,251)),Promise.resolve().then(r.bind(r,9784))},4720:(e,t,r)=>{"use strict";r.d(t,{D:()=>c,N:()=>d});var n=r(2633);let o=["light","dark"],l="(prefers-color-scheme: dark)",a="undefined"==typeof window,s=(0,n.createContext)(void 0),i={setTheme:e=>{},themes:[]},c=()=>{var e;return null!==(e=(0,n.useContext)(s))&&void 0!==e?e:i},d=e=>(0,n.useContext)(s)?n.createElement(n.Fragment,null,e.children):n.createElement(m,e),u=["light","dark"],m=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:r=!0,enableColorScheme:a=!0,storageKey:i="theme",themes:c=u,defaultTheme:d=r?"system":"light",attribute:m="data-theme",value:p,children:y,nonce:g})=>{let[x,j]=(0,n.useState)(()=>h(i,d)),[w,O]=(0,n.useState)(()=>h(i)),S=p?Object.values(p):c,k=(0,n.useCallback)(e=>{let n=e;if(!n)return;"system"===e&&r&&(n=v());let l=p?p[n]:n,s=t?b():null,i=document.documentElement;if("class"===m?(i.classList.remove(...S),l&&i.classList.add(l)):l?i.setAttribute(m,l):i.removeAttribute(m),a){let e=o.includes(d)?d:null,t=o.includes(n)?n:e;i.style.colorScheme=t}null==s||s()},[]),N=(0,n.useCallback)(e=>{j(e);try{localStorage.setItem(i,e)}catch(e){}},[e]),_=(0,n.useCallback)(t=>{O(v(t)),"system"===x&&r&&!e&&k("system")},[x,e]);(0,n.useEffect)(()=>{let e=window.matchMedia(l);return e.addListener(_),_(e),()=>e.removeListener(_)},[_]),(0,n.useEffect)(()=>{let e=e=>{e.key===i&&N(e.newValue||d)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[N]),(0,n.useEffect)(()=>{k(null!=e?e:x)},[e,x]);let $=(0,n.useMemo)(()=>({theme:x,setTheme:N,forcedTheme:e,resolvedTheme:"system"===x?w:x,themes:r?[...c,"system"]:c,systemTheme:r?w:void 0}),[x,N,e,w,r,c]);return n.createElement(s.Provider,{value:$},n.createElement(f,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:r,enableColorScheme:a,storageKey:i,themes:c,defaultTheme:d,attribute:m,value:p,children:y,attrs:S,nonce:g}),y)},f=(0,n.memo)(({forcedTheme:e,storageKey:t,attribute:r,enableSystem:a,enableColorScheme:s,defaultTheme:i,value:c,attrs:d,nonce:u})=>{let m="system"===i,f="class"===r?`var d=document.documentElement,c=d.classList;c.remove(${d.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${r}',s='setAttribute';`,h=s?o.includes(i)&&i?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",b=(e,t=!1,n=!0)=>{let l=c?c[e]:e,a=t?e+"|| ''":`'${l}'`,i="";return s&&n&&!t&&o.includes(e)&&(i+=`d.style.colorScheme = '${e}';`),"class"===r?i+=t||l?`c.add(${a})`:"null":l&&(i+=`d[s](n,${a})`),i},v=e?`!function(){${f}${b(e)}}()`:a?`!function(){try{${f}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${m})){var t='${l}',m=window.matchMedia(t);if(m.media!==t||m.matches){${b("dark")}}else{${b("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${b(c?"x[e]":"e",!0)}}${m?"":"else{"+b(i,!1,!1)+"}"}${h}}catch(e){}}()`:`!function(){try{${f}var e=localStorage.getItem('${t}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${b(c?"x[e]":"e",!0)}}else{${b(i,!1,!1)};}${h}}catch(t){}}();`;return n.createElement("script",{nonce:u,dangerouslySetInnerHTML:{__html:v}})},()=>!0),h=(e,t)=>{let r;if(!a){try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t}},b=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},v=e=>(e||(e=window.matchMedia(l)),e.matches?"dark":"light")},251:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var n=r(6349);r(2633);var o=r(4720);let l=e=>{let{children:t}=e;return(0,n.jsx)(o.N,{attribute:"class",defaultTheme:"system",enableSystem:!0,children:t})}},9784:(e,t,r)=>{"use strict";r.d(t,{default:()=>v});var n=r(6349),o=r(2633),l=r(5215),a=r.n(l);let s=e=>{let{children:t,className:r}=e;return(0,n.jsx)("div",{className:a()("container m-auto p-4 lg:max-w-3xl xl:max-w-6xl",r),children:t})};var i=r(958);let c=e=>{let{isOpen:t,onChange:r}=e;return(0,n.jsx)("div",{children:(0,n.jsx)("div",{className:a()("transition-all duration-450 text-foreground cursor-pointer","p-2 border border-foreground sm:border-none rounded-lg sm:hidden",{"opacity-0":t,"opacity-100":!t}),onClick:r,children:(0,n.jsx)(i.Jtp,{})})})};var d=r(4720);let u=()=>{let[e,t]=(0,o.useState)(!1),{theme:r,setTheme:l}=(0,d.D)();return((0,o.useEffect)(()=>{t(!0)},[]),e)?(0,n.jsxs)("label",{className:"relative block w-[3.5em] h-[2em]",children:[(0,n.jsx)("input",{type:"checkbox",className:"opacity-0 w-0 h-0",onChange:()=>{l("dark"===r?"light":"dark")},checked:"dark"===r}),(0,n.jsx)("span",{className:a()("absolute cursor-pointer inset-0 rounded-[30px] transition-all duration-400","before:content-[''] before:absolute before:w-[1.4em] before:h-[1.4em]","before:rounded-[20px] before:left-[0.3em] before:top-1/2 before:-translate-y-1/2","before:transition-all before:duration-400","dark"!==r?["bg-[#303136]","before:left-[calc(100%-1.7em)]","before:bg-[#303136]","before:shadow-[inset_-3px_-2px_5px_-2px_#8983f7,inset_-10px_-4px_0_0_#a3dafb]"]:["bg-[#f4f4f5]","before:bg-gradient-to-r before:from-[#ff0080] before:to-[#ff8c00]"])})]}):null};var m=r(4231),f=r.n(m);let h=e=>{let{direction:t="horizontal"}=e;return(0,n.jsxs)("div",{className:a()("flex items-center gap-4",{"flex-col":"vertical"===t,"flex-row":"horizontal"===t}),children:[[{href:"/",label:"Home"},{href:"/blog",label:"Blog"},{href:"/about",label:"About"}].map(e=>(0,n.jsx)(f(),{href:e.href,className:"text-foreground hover:text-foreground/80",children:e.label},e.href)),(0,n.jsx)(u,{})]})},b=e=>{let{isOpen:t,onClose:r,children:o}=e;return t?(0,n.jsx)("div",{className:"fixed inset-0 bg-content2 backdrop-blur-sm z-50 sm:hidden",children:(0,n.jsxs)("div",{className:"fixed inset-y-0 left-0 w-full p-6 overflow-y-scroll",children:[(0,n.jsx)("button",{onClick:r,className:"mb-4",children:(0,n.jsx)(i.r8o,{size:30})}),(0,n.jsx)(h,{direction:"vertical"}),o]})}):null},v=e=>{let{children:t}=e,[r,l]=(0,o.useState)(!1);return(0,n.jsxs)("nav",{children:[(0,n.jsx)(s,{children:(0,n.jsxs)("div",{className:"flex justify-between items-center py-2",children:[(0,n.jsx)(f(),{href:"/",className:"p-2 border border-foreground rounded-lg",children:"Logo"}),(0,n.jsx)("div",{className:"hidden sm:flex items-center gap-4",children:(0,n.jsx)(h,{})}),(0,n.jsx)("div",{className:"sm:hidden",children:(0,n.jsx)(c,{isOpen:r,onChange:()=>l(e=>!e)})})]})}),(0,n.jsx)(b,{isOpen:r,onClose:()=>l(!1),children:t})]})}},6994:()=>{},9377:e=>{e.exports={style:{fontFamily:"'Geist', 'Geist Fallback'",fontStyle:"normal"},className:"__className_4d318d",variable:"__variable_4d318d"}},3403:e=>{e.exports={style:{fontFamily:"'Geist Mono', 'Geist Mono Fallback'",fontStyle:"normal"},className:"__className_ea5f4b",variable:"__variable_ea5f4b"}},5215:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=l(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=l(t,r));return t}(r)))}return e}function l(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0!==(r=(function(){return o}).apply(t,[]))&&(e.exports=r)}()},9634:(e,t,r)=>{"use strict";r.d(t,{k5:()=>d});var n=r(2633),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(o),a=["attr","size","title"];function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function d(e){return t=>n.createElement(u,s({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function u(e){var t=t=>{var r,{attr:o,size:l,title:i}=e,d=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,a),u=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,d,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),e.children)};return void 0!==l?n.createElement(l.Consumer,null,e=>t(e)):t(o)}}},e=>{var t=t=>e(e.s=t);e.O(0,[339,142,231,688,297,358],()=>t(4890)),_N_E=e.O()}]);