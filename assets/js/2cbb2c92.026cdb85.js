"use strict";(self.webpackChunkscout=self.webpackChunkscout||[]).push([[4209],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var a=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),f=r,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return t?a.createElement(m,o(o({ref:n},s),{},{components:t})):a.createElement(m,o({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[u]="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7566:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=t(2564),r=(t(9496),t(9613));const i={},o="Unsafe expect",c={unversionedId:"vulnerabilities/unsafe-expect",id:"vulnerabilities/unsafe-expect",title:"Unsafe expect",description:"Description",source:"@site/docs/vulnerabilities/8-unsafe-expect.md",sourceDirName:"vulnerabilities",slug:"/vulnerabilities/unsafe-expect",permalink:"/scout/docs/vulnerabilities/unsafe-expect",draft:!1,editUrl:"https://github.com/CoinFabrik/scout/docs/vulnerabilities/8-unsafe-expect.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"docsSidebar",previous:{title:"DoS unexpected revert With vector",permalink:"/scout/docs/vulnerabilities/dos-unexpected-revert-with-vector"},next:{title:"Unsafe unwrap",permalink:"/scout/docs/vulnerabilities/unsafe-unwrap"}},l={},p=[{value:"Description",id:"description",level:2},{value:"Exploit Scenario",id:"exploit-scenario",level:2},{value:"Remediation",id:"remediation",level:2},{value:"References",id:"references",level:2}],s={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"unsafe-expect"},"Unsafe expect"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Vulnerability Category: ",(0,r.kt)("inlineCode",{parentName:"li"},"Validations and error handling")),(0,r.kt)("li",{parentName:"ul"},"Vulnerability Severity: ",(0,r.kt)("inlineCode",{parentName:"li"},"Minor")),(0,r.kt)("li",{parentName:"ul"},"Detectors: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/CoinFabrik/scout/tree/main/detectors/unsafe-expect"},(0,r.kt)("inlineCode",{parentName:"a"},"unsafe-expect"))),(0,r.kt)("li",{parentName:"ul"},"Test Cases: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/CoinFabrik/scout/tree/main/test-cases/unsafe-expect/unsafe-expect-1"},(0,r.kt)("inlineCode",{parentName:"a"},"unsafe-expect-1")))),(0,r.kt)("p",null,"In Rust, the ",(0,r.kt)("inlineCode",{parentName:"p"},"expect")," method is often used for error handling. It returns the contained ",(0,r.kt)("inlineCode",{parentName:"p"},"Ok")," value for a ",(0,r.kt)("inlineCode",{parentName:"p"},"Result")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Some")," value for an ",(0,r.kt)("inlineCode",{parentName:"p"},"Option"),". If an error occurs, it calls ",(0,r.kt)("inlineCode",{parentName:"p"},"panic!")," with a provided error message."),(0,r.kt)("p",null,"The usage of ",(0,r.kt)("inlineCode",{parentName:"p"},"expect")," can lead to a panic and crash the program, which is not desired behavior in most cases, especially for a smart contract."),(0,r.kt)("h2",{id:"exploit-scenario"},"Exploit Scenario"),(0,r.kt)("p",null,"Consider the following ",(0,r.kt)("inlineCode",{parentName:"p"},"ink!")," contract:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[ink::contract]\nmod unsafe_expect {\n    use ink::storage::Mapping;\n\n    #[ink(storage)]\n    pub struct UnsafeExpect {\n        total_supply: Balance,\n        balances: Mapping<AccountId, Balance>,\n    }\n\n    impl UnsafeExpect {\n\n        // ...\n\n        /// Returns the balance of a given account.\n        #[ink(message)]\n        pub fn balance_of(&self, owner: AccountId) -> Balance {\n            self.balances.get(owner).expect("could not get balance")\n        }\n    }\n}\n')),(0,r.kt)("p",null,"In this contract, the ",(0,r.kt)("inlineCode",{parentName:"p"},"balance_of")," function uses the expect method to retrieve the balance of an account. If there is no entry for this account in the balances mapping, the contract will panic and halt execution, which could be exploited maliciously to disrupt the contract's operation."),(0,r.kt)("p",null,"The vulnerable code example can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CoinFabrik/scout/tree/main/test-cases/unsafe-expect/unsafe-expect-1/vulnerable-example"},(0,r.kt)("inlineCode",{parentName:"a"},"here")),"."),(0,r.kt)("h2",{id:"remediation"},"Remediation"),(0,r.kt)("p",null,"Instead of using ",(0,r.kt)("inlineCode",{parentName:"p"},"expect"),", use a safer method for error handling. In this case, if there is no entry for an account in the ",(0,r.kt)("inlineCode",{parentName:"p"},"balances")," mapping, return a default value (like ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink::contract]\nmod unsafe_expect {\n    use ink::storage::Mapping;\n\n    #[ink(storage)]\n    pub struct UnsafeExpect {\n        total_supply: Balance,\n        balances: Mapping<AccountId, Balance>,\n    }\n\n    impl UnsafeExpect {\n\n        // ...\n\n        /// Returns the balance of a given account.\n        #[ink(message)]\n        pub fn balance_of(&self, owner: AccountId) -> Balance {\n            if let Some(balance) = self.balances.get(owner) {\n                balance\n            } else {\n                0\n            }\n        }\n    }\n}\n")),(0,r.kt)("p",null,"The remediated code example can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CoinFabrik/scout/tree/main/test-cases/unsafe-expect/unsafe-expect-1/remediated-example"},(0,r.kt)("inlineCode",{parentName:"a"},"here")),"."),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/option/enum.Option.html#method.expect"},"Rust documentation: ",(0,r.kt)("inlineCode",{parentName:"a"},"expect"))))}d.isMDXComponent=!0}}]);