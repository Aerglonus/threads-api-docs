"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9536],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=n.createContext({}),l=function(e){var r=n.useContext(m),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(m.Provider,{value:r},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,m=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=l(t),f=a,d=c["".concat(m,".").concat(f)]||c[f]||u[f]||s;return t?n.createElement(d,o(o({ref:r},p),{},{components:t})):n.createElement(d,o({ref:r},p))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=f;var i={};for(var m in r)hasOwnProperty.call(r,m)&&(i[m]=r[m]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9976:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=t(7462),a=(t(7294),t(3905));const s={sidebar_label:"getIDfromInstagramUsername",description:"Retrieves userID from Instagram username."},o=void 0,i={unversionedId:"api_references/getUserIDfromUserNameWithInstagram",id:"version-0.1.1/api_references/getUserIDfromUserNameWithInstagram",title:"getUserIDfromUserNameWithInstagram",description:"Retrieves userID from Instagram username.",source:"@site/versioned_docs/version-0.1.1/api_references/getUserIDfromUserNameWithInstagram.mdx",sourceDirName:"api_references",slug:"/api_references/getUserIDfromUserNameWithInstagram",permalink:"/threads-api-docs/docs/api_references/getUserIDfromUserNameWithInstagram",draft:!1,tags:[],version:"0.1.1",frontMatter:{sidebar_label:"getIDfromInstagramUsername",description:"Retrieves userID from Instagram username."},sidebar:"tutorialSidebar",previous:{title:"getUserIDfromUsername",permalink:"/threads-api-docs/docs/api_references/getUserIDfromUsername"},next:{title:"publish",permalink:"/threads-api-docs/docs/api_references/publish"}},m={},l=[],p={toc:l},c="wrapper";function u(e){let{components:r,...t}=e;return(0,a.kt)(c,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Retrieves userID from Instagram username. ",(0,a.kt)("inlineCode",{parentName:"p"},"getUserIDfromUsername")," fallsback to this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'const userID = await threadsAPI.getUserIDfromInstagramUsername("username");\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"requires")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Type")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Default")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"username")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined")),(0,a.kt)("td",{parentName:"tr",align:null},"Instagram username")))))}u.isMDXComponent=!0}}]);