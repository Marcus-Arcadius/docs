"use strict";(self.webpackChunkhanko_docs_3=self.webpackChunkhanko_docs_3||[]).push([[559],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),m=i,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8372:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>E,contentTitle:()=>O,default:()=>P,frontMatter:()=>w,metadata:()=>k,toc:()=>x});var n=r(7462),i=r(7294),o=r(3905),a=r(6010),c=r(3438),l=r(9960),s=r(3919),u=r(5999);const d="cardContainer_fWXF",p="cardTitle_rnsV",m="cardDescription_PWke";function f(e){let{href:t,children:r}=e;return i.createElement(l.Z,{href:t,className:(0,a.Z)("card padding--lg",d)},r)}function g(e){let{href:t,icon:r,title:n,description:o}=e;return i.createElement(f,{href:t},i.createElement("h2",{className:(0,a.Z)("text--truncate",p),title:n},r," ",n),o&&i.createElement("p",{className:(0,a.Z)("text--truncate",m),title:o},o))}function y(e){let{item:t}=e;const r=(0,c.Wl)(t);return r?i.createElement(g,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,u.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function b(e){var t;let{item:r}=e;const n=(0,s.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,c.xz)(null!=(t=r.docId)?t:void 0);return i.createElement(g,{href:r.href,icon:n,title:r.label,description:null==o?void 0:o.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return i.createElement(b,{item:t});case"category":return i.createElement(y,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function v(e){let{items:t,className:r}=e;return i.createElement("section",{className:(0,a.Z)("row",r)},function(e){return e.filter((e=>"category"!==e.type||!!(0,c.Wl)(e)))}(t).map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(h,{item:e})))))}const w={title:"Frontend guides",sidebar_label:"Frontend guides",sidebar_position:2},O=void 0,k={unversionedId:"guides/index",id:"guides/index",title:"Frontend guides",description:"Learn how to integrate Hanko with your preferred frontend framework:",source:"@site/docs/guides/index.mdx",sourceDirName:"guides",slug:"/guides/",permalink:"/guides/",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Frontend guides",sidebar_label:"Frontend guides",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/"},next:{title:"Angular",permalink:"/guides/angular"}},E={},x=[],j={toc:x};function P(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},j,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Learn how to integrate Hanko with your preferred frontend framework:"),(0,o.kt)(v,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}P.isMDXComponent=!0}}]);