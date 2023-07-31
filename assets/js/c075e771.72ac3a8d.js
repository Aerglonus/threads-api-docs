"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8955],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),u=o,m=d["".concat(c,".").concat(u)]||d[u]||f[u]||a;return t?n.createElement(m,i(i({ref:r},l),{},{components:t})):n.createElement(m,i({ref:r},l))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8739:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const a={description:"Generate postID from a ThreadID"},i=void 0,s={unversionedId:"api_references/getPostIDFromThreadID",id:"version-0.1.1/api_references/getPostIDFromThreadID",title:"getPostIDFromThreadID",description:"Generate postID from a ThreadID",source:"@site/versioned_docs/version-0.1.1/api_references/getPostIDFromThreadID.mdx",sourceDirName:"api_references",slug:"/api_references/getPostIDFromThreadID",permalink:"/threads-api-docs/docs/api_references/getPostIDFromThreadID",draft:!1,tags:[],version:"0.1.1",frontMatter:{description:"Generate postID from a ThreadID"},sidebar:"tutorialSidebar",previous:{title:"getThreadLikers",permalink:"/threads-api-docs/docs/api_references/getThreadLikers"},next:{title:"getPostIDfromURL",permalink:"/threads-api-docs/docs/api_references/getPostIDfromURL"}},c={},p=[],l={toc:p},d="wrapper";function f(e){let{components:r,...t}=e;return(0,o.kt)(d,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"INFO",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Does not requires authentication")),(0,o.kt)("p",null,"Generates the ",(0,o.kt)("inlineCode",{parentName:"p"},"postID")," from a given ",(0,o.kt)("inlineCode",{parentName:"p"},"ThreadID"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const threadID = "CugK35fh6u2";\nconst postID = await threadsAPI.getPostIDfromThreadID(threadID);\n')))}f.isMDXComponent=!0}}]);