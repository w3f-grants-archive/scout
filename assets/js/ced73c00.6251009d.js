"use strict";(self.webpackChunkscout=self.webpackChunkscout||[]).push([[6623],{9613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),f=a,m=c["".concat(l,".").concat(f)]||c[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2106:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(2564),a=(r(9496),r(9613));const o={},i="Unsafe unwrap",s={unversionedId:"detectors/unsafe-unwrap",id:"detectors/unsafe-unwrap",title:"Unsafe unwrap",description:"What it does",source:"@site/docs/detectors/9-unsafe-unwrap.md",sourceDirName:"detectors",slug:"/detectors/unsafe-unwrap",permalink:"/scout/docs/detectors/unsafe-unwrap",draft:!1,editUrl:"https://github.com/CoinFabrik/scout/docs/detectors/9-unsafe-unwrap.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"docsSidebar",previous:{title:"Unsafe expect",permalink:"/scout/docs/detectors/unsafe-expect"},next:{title:"Divide before multiply",permalink:"/scout/docs/detectors/divide-before-multiply"}},l={},u=[{value:"What it does",id:"what-it-does",level:3},{value:"Why is this bad?",id:"why-is-this-bad",level:3},{value:"Example",id:"example",level:3},{value:"Implementation",id:"implementation",level:3}],p={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"unsafe-unwrap"},"Unsafe unwrap"),(0,a.kt)("h3",{id:"what-it-does"},"What it does"),(0,a.kt)("p",null,"Checks for usage of ",(0,a.kt)("inlineCode",{parentName:"p"},".unwrap()")),(0,a.kt)("h3",{id:"why-is-this-bad"},"Why is this bad?"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".unwrap()")," might panic if the result value is an error or ",(0,a.kt)("inlineCode",{parentName:"p"},"None"),"."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'// example code where a warning is issued\nfn main() {\n    let result = result_fn().unwrap("error");\n}\nfn result_fn() -> Result<u8, Error> {\n    Err(Error::new(ErrorKind::Other, "error"))\n}\n')),(0,a.kt)("p",null,"Use instead:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'// example code that does not raise a warning\nfn main() {\n   let result = if let Ok(result) = result_fn() {\n      result\n  }\n}\nfn result_fn() -> Result<u8, Error> {\n    Err(Error::new(ErrorKind::Other, "error"))\n}\n')),(0,a.kt)("h3",{id:"implementation"},"Implementation"),(0,a.kt)("p",null,"The detector's implementation can be found at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CoinFabrik/scout/tree/main/detectors/unsafe-unwrap"},"this link"),"."))}d.isMDXComponent=!0}}]);