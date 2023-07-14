"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9756],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>s,MDXProvider:()=>d,mdx:()=>f,useMDXComponents:()=>u,withMDXComponents:()=>p});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){return function(t){var n=u(t.components);return o.createElement(e,a({},t,{components:n}))}},u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},x="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,x=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return n?o.createElement(x,c(c({ref:t},s),{},{components:n})):o.createElement(x,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[x]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4970:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const a={id:"bxl_actions"},i="bxl_actions type",c={unversionedId:"api/bxl/bxl_actions",id:"api/bxl/bxl_actions",title:"bxl_actions type",description:"The bxl action context is the context for creating actions. This context is obtained after performing execution platform resolution based on a set of given dependencies and toolchains.",source:"@site/../docs/api/bxl/bxl_actions.generated.md",sourceDirName:"api/bxl",slug:"/api/bxl/bxl_actions",permalink:"/docs/api/bxl/bxl_actions",draft:!1,tags:[],version:"current",frontMatter:{id:"bxl_actions"},sidebar:"manualSidebar",previous:{title:"audit_ctx type",permalink:"/docs/api/bxl/audit_ctx"},next:{title:"bxl_build_result type",permalink:"/docs/api/bxl/bxl_build_result"}},l={},s=[{value:"bxl_actions.actions",id:"bxl_actionsactions",level:2},{value:"bxl_actions.exec_deps",id:"bxl_actionsexec_deps",level:2},{value:"bxl_actions.toolchains",id:"bxl_actionstoolchains",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,r.mdx)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"bxl_actions-type"},(0,r.mdx)("inlineCode",{parentName:"h1"},"bxl_actions")," type"),(0,r.mdx)("p",null,"The bxl action context is the context for creating actions. This context is obtained after performing execution platform resolution based on a set of given dependencies and toolchains."),(0,r.mdx)("p",null,"You can access the analysis actions to create actions, and the resolved dependencies and\ntoolchains from this context"),(0,r.mdx)("h2",{id:"bxl_actionsactions"},"bxl","_","actions.actions"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'bxl_actions.actions: "actions"\n')),(0,r.mdx)("p",null,"Gets the analysis action context to create and register actions on the execution platform corresponding to this bxl action's execution platform resolution."),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"bxl_actionsexec_deps"},"bxl","_","actions.exec","_","deps"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'bxl_actions.exec_deps: {"": ""}\n')),(0,r.mdx)("p",null,"Gets the execution deps requested correctly configured for the current execution platform"),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"bxl_actionstoolchains"},"bxl","_","actions.toolchains"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'bxl_actions.toolchains: {"": ""}\n')),(0,r.mdx)("p",null,"Gets the toolchains requested configured for the current execution platform"))}u.isMDXComponent=!0}}]);