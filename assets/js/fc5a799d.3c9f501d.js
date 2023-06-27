"use strict";(self.webpackChunkscout=self.webpackChunkscout||[]).push([[4944],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(t),f=r,m=c["".concat(p,".").concat(f)]||c[f]||d[f]||i;return t?a.createElement(m,o(o({ref:n},u),{},{components:t})):a.createElement(m,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1295:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=t(2564),r=(t(9496),t(9613));const i={},o="Unsafe unwrap",l={unversionedId:"vulnerabilities/unsafe-unwrap",id:"vulnerabilities/unsafe-unwrap",title:"Unsafe unwrap",description:"Description",source:"@site/docs/vulnerabilities/9-unsafe-unwrap.md",sourceDirName:"vulnerabilities",slug:"/vulnerabilities/unsafe-unwrap",permalink:"/scout/docs/vulnerabilities/unsafe-unwrap",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/vulnerabilities/9-unsafe-unwrap.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"docsSidebar",previous:{title:"Unsafe expect",permalink:"/scout/docs/vulnerabilities/unsafe-expect"},next:{title:"Divide Before Multiply",permalink:"/scout/docs/vulnerabilities/divide-before-multiply"}},p={},s=[{value:"Description",id:"description",level:2},{value:"Exploit Scenario",id:"exploit-scenario",level:2},{value:"Remediation",id:"remediation",level:2},{value:"References",id:"references",level:2}],u={toc:s},c="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"unsafe-unwrap"},"Unsafe unwrap"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Vulnerability Category: ",(0,r.kt)("inlineCode",{parentName:"li"},"Validations and error handling")),(0,r.kt)("li",{parentName:"ul"},"Vulnerability Severity: ",(0,r.kt)("inlineCode",{parentName:"li"},"Minor")),(0,r.kt)("li",{parentName:"ul"},"Detectors: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/CoinFabrik/scout/tree/main/detectors/unsafe-unwrap"},(0,r.kt)("inlineCode",{parentName:"a"},"unsafe-unwrap"))),(0,r.kt)("li",{parentName:"ul"},"Test Cases: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/CoinFabrik/scout/tree/main/test-cases/unsafe-unwrap/unsafe-unwrap-1"},(0,r.kt)("inlineCode",{parentName:"a"},"unsafe-unwrap-1")))),(0,r.kt)("p",null,"In Rust, the ",(0,r.kt)("inlineCode",{parentName:"p"},"unwrap")," method is commonly used for error handling. It retrieves the inner value of an ",(0,r.kt)("inlineCode",{parentName:"p"},"Option")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Result"),". If an error or ",(0,r.kt)("inlineCode",{parentName:"p"},"None")," occurs, it calls ",(0,r.kt)("inlineCode",{parentName:"p"},"panic!")," without a custom error message."),(0,r.kt)("p",null,"The usage of ",(0,r.kt)("inlineCode",{parentName:"p"},"unwrap")," can lead to a panic and crash the program, which is not desired behavior in most cases, particularly in smart contracts."),(0,r.kt)("h2",{id:"exploit-scenario"},"Exploit Scenario"),(0,r.kt)("p",null,"Consider the following ",(0,r.kt)("inlineCode",{parentName:"p"},"ink!")," contract:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink::contract]\nmod unsafe_unwrap {\n    use ink::storage::Mapping;\n\n    #[ink(storage)]\n    pub struct UnsafeUnwrap {\n        total_supply: Balance,\n        balances: Mapping<AccountId, Balance>,\n    }\n\n    // ...\n\n    impl UnsafeUnwrap {\n        /// Returns the balance of a given account.\n        #[ink(message)]\n        pub fn balance_of(&self, owner: AccountId) -> Balance {\n            self.balances.get(owner).unwrap()\n        }\n\n        // ...\n    }\n}\n")),(0,r.kt)("p",null,"In this contract, the ",(0,r.kt)("inlineCode",{parentName:"p"},"balance_of")," function uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"unwrap")," method to retrieve the balance of an account. If there is no entry for this account in the balances mapping, the contract will panic and halt execution, potentially leading to malicious exploitation to disrupt the contract's operation."),(0,r.kt)("p",null,"The vulnerable code example can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CoinFabrik/scout/tree/main/test-cases/unsafe-unwrap/unsafe-unwrap-1/vulnerable-example"},(0,r.kt)("inlineCode",{parentName:"a"},"here")),"."),(0,r.kt)("h2",{id:"remediation"},"Remediation"),(0,r.kt)("p",null,"Instead of using ",(0,r.kt)("inlineCode",{parentName:"p"},"unwrap"),", use a safer method for error handling. In this case, if there is no entry for an account in the ",(0,r.kt)("inlineCode",{parentName:"p"},"balances")," mapping, return a default value (like ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink::contract]\nmod unsafe_unwrap {\n    use ink::storage::Mapping;\n\n    #[ink(storage)]\n    pub struct UnsafeUnwrap {\n        total_supply: Balance,\n        balances: Mapping<AccountId, Balance>,\n    }\n\n    // ...\n\n    impl UnsafeUnwrap {\n        /// Returns the balance of a given account.\n        #[ink(message)]\n        pub fn balance_of(&self, owner: AccountId) -> Balance {\n            self.balances.get(owner).unwrap_or(0)\n        }\n\n        // ...\n    }\n}\n")),(0,r.kt)("p",null,"The remediated code example can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CoinFabrik/scout/tree/main/test-cases/unsafe-unwrap/unsafe-unwrap-1/remediated-example"},(0,r.kt)("inlineCode",{parentName:"a"},"here")),"."),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/option/enum.Option.html#method.unwrap"},"Rust documentation: ",(0,r.kt)("inlineCode",{parentName:"a"},"unwrap"))))}d.isMDXComponent=!0}}]);