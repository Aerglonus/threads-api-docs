"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1424],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>g});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),l=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},p=function(e){var r=l(e.components);return t.createElement(c.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,g=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return n?t.createElement(g,a(a({ref:r},p),{},{components:n})):t.createElement(g,a({ref:r},p))}));function g(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1097:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var t=n(7462),o=(n(7294),n(3905));const i={title:"login",id:"login",sidebar_position:2,description:"Loging to Threads and returns `token` and `userID`"},a=void 0,s={unversionedId:"api_references/login",id:"api_references/login",title:"login",description:"Loging to Threads and returns `token` and `userID`",source:"@site/docs/api_references/login.mdx",sourceDirName:"api_references",slug:"/api_references/login",permalink:"/docs/0.1.1/api_references/login",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"login",id:"login",sidebar_position:2,description:"Loging to Threads and returns `token` and `userID`"},sidebar:"tutorialSidebar",previous:{title:"ThreadsAPI Client",permalink:"/docs/0.1.1/api_references/ThreadsAPI"},next:{title:"getToken",permalink:"/docs/0.1.1/api_references/getToken"}},c={},l=[],p={toc:l},u="wrapper";function d(e){let{components:r,...n}=e;return(0,o.kt)(u,(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Login to Threads and returns ",(0,o.kt)("inlineCode",{parentName:"p"},"token")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"userID")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const credentials = await threadsAPI.login();\n// Reponse\n// {\n//   token: bearer-token\n//   userID: user-id\n// }\n")))}d.isMDXComponent=!0}}]);