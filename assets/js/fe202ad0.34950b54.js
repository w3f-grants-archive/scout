"use strict";(self.webpackChunkscout=self.webpackChunkscout||[]).push([[7289],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=i(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:a,o[1]=c;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3483:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var r=n(2564),a=(n(9496),n(9613));const l={},o="Delegate call",c={unversionedId:"detectors/delegate-call",id:"detectors/delegate-call",title:"Delegate call",description:"What it does",source:"@site/docs/detectors/11-delegate-call.md",sourceDirName:"detectors",slug:"/detectors/delegate-call",permalink:"/scout/docs/detectors/delegate-call",draft:!1,editUrl:"https://github.com/CoinFabrik/scout/docs/detectors/11-delegate-call.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{},sidebar:"docsSidebar",previous:{title:"Divide before multiply",permalink:"/scout/docs/detectors/divide-before-multiply"},next:{title:"Contribute",permalink:"/scout/docs/contribute/"}},s={},i=[{value:"What it does",id:"what-it-does",level:3},{value:"Why is this bad?",id:"why-is-this-bad",level:3},{value:"Example",id:"example",level:3},{value:"Implementation",id:"implementation",level:3}],u={toc:i},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"delegate-call"},"Delegate call"),(0,a.kt)("h3",{id:"what-it-does"},"What it does"),(0,a.kt)("p",null,"Checks for delegated calls to contracts passed as arguments."),(0,a.kt)("h3",{id:"why-is-this-bad"},"Why is this bad?"),(0,a.kt)("p",null,"Delegated calls to contracts passed as arguments can be used to change the expected behavior of the contract. If you need to change the target of a delegated call, you should use a storage variable, and make a function with proper access control to change it."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"    #[ink(message)]\n    pub fn delegate_call(&mut self, target: Hash, argument: Balance) {\n        let selector_bytes = [0x0, 0x0, 0x0, 0x0];\n        let result: T  = build_call::<DefaultEnvironment>()\n            .delegate(target)\n            .exec_input(\n                ExecutionInput::new(Selector::new(selector_bytes))\n                    .push_arg(argument)\n            )\n            .returns::<T>()\n            .invoke();\n    }\n")),(0,a.kt)("p",null,"Use instead:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"    #[ink(message)]\n    pub fn delegate_call(&mut self, argument: Balance) {\n        let selector_bytes = [0x0, 0x0, 0x0, 0x0];\n        let result: T  = build_call::<DefaultEnvironment>()\n            .delegate(self.target)\n            .exec_input(\n                ExecutionInput::new(Selector::new(selector_bytes))\n                    .push_arg(argument)\n            )\n            .returns::<T>()\n            .invoke();\n    }\n\n    #[ink::message]\n    pub fn set_target(&mut self, new_target: Hash) -> Result<(), Error> {\n        if self.admin != self.env().caller() {\n            Err(Error::Unauthorized)\n        } else {\n            self.target = new_target;\n            Ok(())\n        }\n    }\n\n")),(0,a.kt)("h3",{id:"implementation"},"Implementation"),(0,a.kt)("p",null,"The detector's implementation can be found at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CoinFabrik/scout/tree/main/detectors/delegate-call"},"this link"),"."))}p.isMDXComponent=!0}}]);