"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7679],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>g});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=c(t),d=i,g=f["".concat(p,".").concat(d)]||f[d]||u[d]||o;return t?n.createElement(g,s(s({ref:r},l),{},{components:t})):n.createElement(g,s({ref:r},l))}));function g(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=d;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a[f]="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},307:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=t(7462),i=(t(7294),t(3905));const o={description:"Retrives given user replies."},s=void 0,a={unversionedId:"api_references/getUserProfileRepliesLoggedIn",id:"version-0.1.1/api_references/getUserProfileRepliesLoggedIn",title:"getUserProfileRepliesLoggedIn",description:"Retrives given user replies.",source:"@site/versioned_docs/version-0.1.1/api_references/getUserProfileRepliesLoggedIn.mdx",sourceDirName:"api_references",slug:"/api_references/getUserProfileRepliesLoggedIn",permalink:"/threads-api-docs/docs/api_references/getUserProfileRepliesLoggedIn",draft:!1,tags:[],version:"0.1.1",frontMatter:{description:"Retrives given user replies."},sidebar:"tutorialSidebar",previous:{title:"getUserProfileReplies",permalink:"/threads-api-docs/docs/api_references/getUserProfileReplies"},next:{title:"getUserFollowers",permalink:"/threads-api-docs/docs/api_references/getUserFollowers"}},p={},c=[],l={toc:c},f="wrapper";function u(e){let{components:r,...t}=e;return(0,i.kt)(f,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Requires Authentication")),(0,i.kt)("p",null,"Retrieves given user replies posts with pagination."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const { threads, next_max_id: cursor } =\n    await threadsAPI.getUserProfileRepliesLoggedIn(userID);\nconsole.log(JSON.stringify(threads));\n")))}u.isMDXComponent=!0}}]);