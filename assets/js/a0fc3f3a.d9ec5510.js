"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3752],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4249:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={description:"Deletes a post from Threads",sidebar_label:"delete"},i=void 0,s={unversionedId:"api_references/delete",id:"api_references/delete",title:"delete",description:"Deletes a post from Threads",source:"@site/docs/api_references/delete.mdx",sourceDirName:"api_references",slug:"/api_references/delete",permalink:"/threads-api-docs/docs/0.1.1/api_references/delete",draft:!1,tags:[],version:"current",frontMatter:{description:"Deletes a post from Threads",sidebar_label:"delete"},sidebar:"tutorialSidebar",previous:{title:"unlike",permalink:"/threads-api-docs/docs/0.1.1/api_references/unlike"},next:{title:"repost",permalink:"/threads-api-docs/docs/0.1.1/api_references/repost"}},p={},l=[],c={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"INFO",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Requires Authentication")),(0,a.kt)("p",null,"Deletes a given post from Threads. | Requires: ",(0,a.kt)("inlineCode",{parentName:"p"},"postID")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"await threadsAPI.delete(postID);\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'const postID = await threadsAPI.publish({\n    text: "\ud83e\udd16 This message will self-destruct in 5 seconds.",\n});\n\nawait new Promise((resolve) => setTimeout(resolve, 5_000));\nawait threadsAPI.delete(postID);\n')))}d.isMDXComponent=!0}}]);