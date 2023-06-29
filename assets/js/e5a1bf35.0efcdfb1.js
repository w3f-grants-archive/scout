"use strict";(self.webpackChunkscout=self.webpackChunkscout||[]).push([[5784],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9753:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(2564),a=(n(9496),n(9613));const i={},o="Panic Error",l={unversionedId:"vulnerabilities/panic-error",id:"vulnerabilities/panic-error",title:"Panic Error",description:"Description",source:"@site/docs/vulnerabilities/4-panic-error.md",sourceDirName:"vulnerabilities",slug:"/vulnerabilities/panic-error",permalink:"/scout/docs/vulnerabilities/panic-error",draft:!1,editUrl:"https://github.com/CoinFabrik/scout/docs/vulnerabilities/4-panic-error.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"docsSidebar",previous:{title:"Reentrancy",permalink:"/scout/docs/vulnerabilities/reentrancy"},next:{title:"Unused return enum",permalink:"/scout/docs/vulnerabilities/unused-return-enum"}},c={},s=[{value:"Description",id:"description",level:2},{value:"Exploit Scenario",id:"exploit-scenario",level:2},{value:"Remediation",id:"remediation",level:2},{value:"References",id:"references",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"panic-error"},"Panic Error"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Detector ID: ",(0,a.kt)("inlineCode",{parentName:"li"},"panic-error")),(0,a.kt)("li",{parentName:"ul"},"Vulnerability Category: ",(0,a.kt)("inlineCode",{parentName:"li"},"Validations and error handling")),(0,a.kt)("li",{parentName:"ul"},"Severity: ",(0,a.kt)("inlineCode",{parentName:"li"},"Enhancement")),(0,a.kt)("li",{parentName:"ul"},"Detectors: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/CoinFabrik/scout/tree/main/detectors/panic-error"},(0,a.kt)("inlineCode",{parentName:"a"},"panic-error"))),(0,a.kt)("li",{parentName:"ul"},"Test Cases: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/CoinFabrik/scout/tree/main/test-cases/panic-error/panic-error-1"},(0,a.kt)("inlineCode",{parentName:"a"},"panic-error-1")))),(0,a.kt)("p",null,"This detector checks for the use of the ",(0,a.kt)("inlineCode",{parentName:"p"},"panic!")," macro in the code. The\n",(0,a.kt)("inlineCode",{parentName:"p"},"panic!")," macro is used to stop execution when a condition is not met.\nThis is useful for testing and prototyping, but should be avoided in\nproduction code."),(0,a.kt)("p",null,"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," as return type for functions that can fail is the idiomatic\nway to handle errors in Rust. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," type is an enum that can be either\n",(0,a.kt)("inlineCode",{parentName:"p"},"Ok")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Err"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"Err")," variant can contain an error message. The ",(0,a.kt)("inlineCode",{parentName:"p"},"?"),"\noperator can be used to propagate the error message to the caller."),(0,a.kt)("p",null,"This way, the caller can decide how to handle the error, although the state of\nthe contract is always reverted on the callee."),(0,a.kt)("h2",{id:"exploit-scenario"},"Exploit Scenario"),(0,a.kt)("p",null,"In the following example, the ",(0,a.kt)("inlineCode",{parentName:"p"},"panic!")," command is being used to handle errors,\ndisallowing the caller to handle the error in a different way, and completely\nstopping execution of the caller contract."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#[ink(message)]\npub fn add(&mut self, value: u32)   {\n    match self.value.checked_add(value) {\n        Some(v) => self.value = v,\n        None => panic!("Overflow error"),\n    };\n}\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"add")," function takes a value as an argument and adds it to the value stored\nin the contract's storage. The function first checks if the addition will cause\nan overflow. If the addition will cause an overflow, the function will panic.\nIf the addition will not cause an overflow, the function will add the value to\nthe contract's storage."),(0,a.kt)("p",null,"The usage of ",(0,a.kt)("inlineCode",{parentName:"p"},"panic!")," in this example, is not recommended because it will stop\nthe execution of the caller contract. If the method was called by the user,\nthen he will receive ",(0,a.kt)("inlineCode",{parentName:"p"},"ContractTrapped")," as the only error message."),(0,a.kt)("p",null,"The vulnerable code example can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CoinFabrik/scout/blob/main/test-cases/panic-error/panic-error-1/vulnerable-example/lib.rs"},"here"),"."),(0,a.kt)("h2",{id:"remediation"},"Remediation"),(0,a.kt)("p",null,"A possible remediation goes as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(message)]\npub fn add(&mut self, value: u32) -> Result<(), Error>  {\n    match self.value.checked_add(value) {\n        Some(v) => self.value = v,\n        None => return Err(Error::OverflowError),\n    };\n    Ok(())\n}\n")),(0,a.kt)("p",null,"And adding the following ",(0,a.kt)("inlineCode",{parentName:"p"},"Error")," enum:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Debug, PartialEq, Eq, scale::Encode, scale::Decode)]\n#[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]\npub enum Error {\n    /// An overflow was produced while adding\n    OverflowError,\n}\n')),(0,a.kt)("p",null,"By first defining the ",(0,a.kt)("inlineCode",{parentName:"p"},"Error")," enum and then returning a ",(0,a.kt)("inlineCode",{parentName:"p"},"Result<(), Error>"),",\nmore information is added to the caller and, e.g. the caller contract could\ndecide to revert the transaction or to continue execution."),(0,a.kt)("p",null,"The remediated code example can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CoinFabrik/scout/blob/main/test-cases/panic-error/panic-error-1/remediated-example/lib.rs"},"here"),"."),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://substrate.stackexchange.com/questions/2391/panic-in-ink-smart-contracts"},"https://substrate.stackexchange.com/questions/2391/panic-in-ink-smart-contracts")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/paritytech/ink/issues/641"},"https://github.com/paritytech/ink/issues/641"))))}d.isMDXComponent=!0}}]);