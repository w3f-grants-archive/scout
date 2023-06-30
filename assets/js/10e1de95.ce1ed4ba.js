"use strict";(self.webpackChunkscout=self.webpackChunkscout||[]).push([[7139],{9613:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(9496);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=n.createContext({}),i=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=i(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(t),d=s,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||a;return t?n.createElement(m,o(o({ref:r},u),{},{components:t})):n.createElement(m,o({ref:r},u))}));function m(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[p]="string"==typeof e?e:s,o[1]=l;for(var i=2;i<a;i++)o[i]=t[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9065:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var n=t(2564),s=(t(9496),t(9613));const a={},o="Unrestricted transfer from",l={unversionedId:"detectors/unrestricted-transfer-from",id:"detectors/unrestricted-transfer-from",title:"Unrestricted transfer from",description:"What it does",source:"@site/docs/detectors/14-unrestricted-transfer-from.md",sourceDirName:"detectors",slug:"/detectors/unrestricted-transfer-from",permalink:"/scout/docs/detectors/unrestricted-transfer-from",draft:!1,editUrl:"https://github.com/CoinFabrik/scout/docs/detectors/14-unrestricted-transfer-from.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{},sidebar:"docsSidebar",previous:{title:"Insuficciently random values",permalink:"/scout/docs/detectors/insufficiently-random-values"},next:{title:"Contribute",permalink:"/scout/docs/contribute"}},c={},i=[{value:"What it does",id:"what-it-does",level:3},{value:"Why is this bad?",id:"why-is-this-bad",level:3},{value:"Example",id:"example",level:3},{value:"Implementation",id:"implementation",level:3}],u={toc:i},p="wrapper";function f(e){let{components:r,...t}=e;return(0,s.kt)(p,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"unrestricted-transfer-from"},"Unrestricted transfer from"),(0,s.kt)("h3",{id:"what-it-does"},"What it does"),(0,s.kt)("p",null,"Checks the call of ",(0,s.kt)("inlineCode",{parentName:"p"},"transfer_from")," from a ",(0,s.kt)("inlineCode",{parentName:"p"},"psp22")," contract where the used arguments are provided by a user."),(0,s.kt)("h3",{id:"why-is-this-bad"},"Why is this bad?"),(0,s.kt)("p",null,"The user could provide as an argument the address of any actor with a token approval on the contract, and this actor could then withdraw funds from the contract."),(0,s.kt)("h3",{id:"example"},"Example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'#[ink(message)]\npub fn deposit(&mut self, from: AccountId) -> Result<(), Error>{\n    if self.env().caller() != self.buyer {\n        return Err(Error::CallerMustBeBuyer)\n    } else if self.status != Status::Created {\n        return Err(Error::StatusMustBeCreated)\n    } else {\n        // 0x54b3c76e selector comes from https://github.com/w3f/PSPs/blob/master/PSPs/psp-22.md\n        let call_params = build_call::<DefaultEnvironment>()\n            .exec_input(\n                ExecutionInput::new(Selector::new(ink::selector_bytes!(\n                    "PSP22::transfer_from"\n                )))\n                .push_arg(from)\n                .push_arg(self.env().account_id())\n                .push_arg(self.amount)\n                .push_arg([0u8])\n            )\n            .returns::<Result<(),PSP22Error>>()\n            .call(self.psp22_address)\n            .params();\n        let res = self.env().invoke_contract(&call_params)\n            .unwrap_or_else(|err| panic!("Err {:?}", err))\n            .unwrap_or_else(|err| panic!("LangErr {:?}", err))\n            .map_err(|err| Error::PSP22Error(err));\n        if res.is_ok() {\n            self.status = Status::Locked;\n        }\n        Ok(())\n    }\n\n}\n')),(0,s.kt)("p",null,"Use instead"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'#[ink(message)]\npub fn deposit(&mut self) -> Result<(), Error>{\n    if self.env().caller() != self.buyer {\n        return Err(Error::CallerMustBeBuyer)\n    } else if self.status != Status::Created {\n        return Err(Error::StatusMustBeCreated)\n    } else {\n        // 0x54b3c76e selector comes from https://github.com/w3f/PSPs/blob/master/PSPs/psp-22.md\n        let call_params = build_call::<DefaultEnvironment>()\n            .exec_input(\n                ExecutionInput::new(Selector::new(ink::selector_bytes!(\n                    "PSP22::transfer_from"\n                )))\n                .push_arg(self.env().caller())\n                .push_arg(self.env().account_id())\n                .push_arg(self.amount)\n                .push_arg([0u8])\n            )\n            .returns::<Result<(),PSP22Error>>()\n            .call(self.psp22_address)\n            .params();\n        let res = self.env().invoke_contract(&call_params)\n            .unwrap_or_else(|err| panic!("Err {:?}", err))\n            .unwrap_or_else(|err| panic!("LangErr {:?}", err))\n            .map_err(|err| Error::PSP22Error(err));\n        if res.is_ok() {\n            self.status = Status::Locked;\n        }\n        Ok(())\n    }\n\n}\n')),(0,s.kt)("h3",{id:"implementation"},"Implementation"),(0,s.kt)("p",null,"The detector's implementation can be found at ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/CoinFabrik/scout/tree/main/detectors/unrestricted-transfer-from"},"this link"),"."))}f.isMDXComponent=!0}}]);