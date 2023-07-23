"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1412],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8407:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"Usage",sidebar_position:2,description:"Learn how to use the API"},i="Basic Usage",s={unversionedId:"basics/Usage",id:"version-0.1.1/basics/Usage",title:"Usage",description:"Learn how to use the API",source:"@site/versioned_docs/version-0.1.1/basics/Usage.mdx",sourceDirName:"basics",slug:"/basics/Usage",permalink:"/docs/basics/Usage",draft:!1,tags:[],version:"0.1.1",sidebarPosition:2,frontMatter:{title:"Usage",sidebar_position:2,description:"Learn how to use the API"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/basics/Getting-Started"},next:{title:"API References ",permalink:"/docs/api_references/references"}},c={},p=[{value:"Creating the Client",id:"creating-the-client",level:2},{value:"Making your first Threads post.",id:"making-your-first-threads-post",level:2}],l={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"basic-usage"},"Basic Usage"),(0,a.kt)("h2",{id:"creating-the-client"},"Creating the Client"),(0,a.kt)("p",null,"The first thing to do is you need to create a Client. The most basic client configuration is passing the properties ",(0,a.kt)("inlineCode",{parentName:"p"},"username")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"password")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'const threadsAPI = new ThreadsAPI({\n    username: "", // here goes your Threads/Instagram username\n    password: "",\n});\n')),(0,a.kt)("p",null,"Once you created the client its recommended to run the ",(0,a.kt)("inlineCode",{parentName:"p"},"login()")," method to retrieve the token and userID."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const credentials = await ThreadsAPI.login();\n// Response:\n// {\n//  token: //bearer-token,\n//  userID: //your-username-id\n// }\n")),(0,a.kt)("admonition",{title:"Note:",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Its recommended that once you get the Bearer Token and userID store them and pass them directly in the client options or through and .env file")),(0,a.kt)("h2",{id:"making-your-first-threads-post"},"Making your first Threads post."),(0,a.kt)("p",null,"threads-api allows you to make a post with multiple images, quote a thread or reply to a thread. For now to do a simple post you can do the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'const post = await threadsAPI.publish({\n    text: "Hello World!",\n});\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"client")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"publish")," method contain more options that you can pass to them like ",(0,a.kt)("inlineCode",{parentName:"p"},"deviceID"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"device identifiers")," to prevent the ",(0,a.kt)("inlineCode",{parentName:"p"},"unrecognized login")," notification from Instagram, ",(0,a.kt)("inlineCode",{parentName:"p"},"attachments")," that allows you to pass urls, images, etc. you can learn more in ",(0,a.kt)("a",{parentName:"p",href:"/docs/references/"},"references"),"."))}d.isMDXComponent=!0}}]);