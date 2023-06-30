"use strict";(self.webpackChunkscout=self.webpackChunkscout||[]).push([[4417],{9613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(r),m=a,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9675:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=r(2564),a=(r(9496),r(9613));const i={},o="Zero or test address",s={unversionedId:"vulnerabilities/zero-or-test-address",id:"vulnerabilities/zero-or-test-address",title:"Zero or test address",description:"Description",source:"@site/docs/vulnerabilities/12-zero-or-test-address.md",sourceDirName:"vulnerabilities",slug:"/vulnerabilities/zero-or-test-address",permalink:"/scout/docs/vulnerabilities/zero-or-test-address",draft:!1,editUrl:"https://github.com/CoinFabrik/scout/docs/vulnerabilities/12-zero-or-test-address.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{},sidebar:"docsSidebar",previous:{title:"Delegate call",permalink:"/scout/docs/vulnerabilities/delegate-call"},next:{title:"Insufficiently random values",permalink:"/scout/docs/vulnerabilities/insufficiently-random-values"}},l={},d=[{value:"Description",id:"description",level:2},{value:"Exploit Scenario",id:"exploit-scenario",level:2},{value:"Remediation",id:"remediation",level:2},{value:"References",id:"references",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"zero-or-test-address"},"Zero or test address"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Vulnerability Category: ",(0,a.kt)("inlineCode",{parentName:"li"},"Validations and error handling")),(0,a.kt)("li",{parentName:"ul"},"Vulnerability Severity: ",(0,a.kt)("inlineCode",{parentName:"li"},"Medium")),(0,a.kt)("li",{parentName:"ul"},"Detectors: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/CoinFabrik/scout/tree/main/detectors/zero-or-test-address"},(0,a.kt)("inlineCode",{parentName:"a"},"zero-test-address"))),(0,a.kt)("li",{parentName:"ul"},"Test Cases: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/CoinFabrik/scout/tree/main/test-cases/zero-or-test-address/zero-or-test-address-1"},(0,a.kt)("inlineCode",{parentName:"a"},"zero-test-address-1")))),(0,a.kt)("p",null,"Verifying that the zero address is not assigned in a smart contract, including those built with ink! on the Substrate platform, is essential to avoid losing control of the contract. The zero address is a default placeholder; if ownership is accidentally transferred to it, the contract becomes unmanageable as there's no private key for this address. This would render any funds or functionality within the contract unreachable. Hence, always ensure the zero address is not set as the owner while coding or operating your ink! smart contracts."),(0,a.kt)("p",null,"Assigning a test address can also have similar implications, including the loss of access or granting access to a malicious actor if its private keys are not handled with care."),(0,a.kt)("h2",{id:"exploit-scenario"},"Exploit Scenario"),(0,a.kt)("p",null,"Consider the following ",(0,a.kt)("inlineCode",{parentName:"p"},"ink!")," contract:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(message)]\npub fn modify_admin(&mut self, admin: AccountId) -> Result<AccountId, Error> {\n    if self.admin != self.env().caller() {\n        return Err(Error::NotAuthorized);\n    }\n\n    self.admin = admin;\n    Ok(self.admin)\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"modify_admin")," function in this specific smart contract could be vulnerable due to an absence of validation for the incoming admin address. The function is intended to allow the existing admin to change the admin of the contract, but if the zero address is provided, it gets assigned as the admin. The zero address doesn't have a corresponding private key, which means no one can claim ownership, causing an irreversible lock on the admin status. This could make any assets or functions within the contract permanently unreachable. Therefore, a validation check that rejects the zero address during the admin reassignment is crucial for the contract's security."),(0,a.kt)("p",null,"The vulnerable code example can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CoinFabrik/scout/tree/main/test-cases/zero-or-test-address/zero-or-test-address-1/vulnerable-example"},(0,a.kt)("inlineCode",{parentName:"a"},"here")),"."),(0,a.kt)("h2",{id:"remediation"},"Remediation"),(0,a.kt)("p",null,"To remediate this problem, verify in your code whether the ",(0,a.kt)("inlineCode",{parentName:"p"},"admin")," provided is the zero address and return an Error if this is the case."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(message)]\npub fn modify_admin(&mut self, admin: AccountId) -> Result<AccountId, Error> {\n    if self.admin != self.env().caller() {\n        return Err(Error::NotAuthorized);\n    }\n\n    if admin == AccountId::from([0x0; 32]) {\n        return Err(Error::InvalidAddress);\n    }\n\n    self.admin = admin;\n    Ok(self.admin)\n}\n")),(0,a.kt)("p",null,"The remediated code example can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CoinFabrik/scout/tree/main/test-cases/zero-or-test-address/zero-or-test-address-1/remediated-example"},(0,a.kt)("inlineCode",{parentName:"a"},"here")),"."),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/crytic/slither/wiki/Detector-Documentation#missing-zero-address-validation"},"Slither: Missing zero address validation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://blackadam.hashnode.dev/zero-address-check-the-danger"},"https://blackadam.hashnode.dev/zero-address-check-the-danger"))))}p.isMDXComponent=!0}}]);