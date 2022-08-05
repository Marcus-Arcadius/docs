"use strict";(self.webpackChunkhanko_docs_3=self.webpackChunkhanko_docs_3||[]).push([[842],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),r=n(7294),o=n(6010),l=n(2389),i=n(7392),s=n(7094),u=n(2466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,n;const{lazy:l,block:m,defaultValue:d,values:h,groupId:v,className:k}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,i.l)(b,((e,t)=>e.value===t.value));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===d?d:null!=(t=null!=d?d:null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)?t:g[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:N}=(0,s.U)(),[T,O]=(0,r.useState)(y),E=[],{blockElementScrollPositionUntilNextRender:j}=(0,u.o5)();if(null!=v){const e=w[v];null!=e&&e!==T&&b.some((t=>t.value===e))&&O(e)}const C=e=>{const t=e.currentTarget,n=E.indexOf(t),a=b[n].value;a!==T&&(j(t),O(a),null!=v&&N(v,String(a)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=E.indexOf(e.currentTarget)+1;n=null!=(a=E[t])?a:E[0];break}case"ArrowLeft":{var r;const t=E.indexOf(e.currentTarget)-1;n=null!=(r=E[t])?r:E[E.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},k)},b.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>E.push(e),onKeyDown:I,onFocus:C,onClick:C},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(g.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function d(e){const t=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},4399:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),o=n(5488),l=n(5162);const i={title:"Vue + Hanko",sidebar_label:"Vue",description:"",keywords:["vue"],sidebar_custom_props:{cardIconProps:{name:"vue"}}},s="Vue",u={unversionedId:"guides/vue",id:"guides/vue",title:"Vue + Hanko",description:"",source:"@site/docs/guides/vue.mdx",sourceDirName:"guides",slug:"/guides/vue",permalink:"/guides/vue",draft:!1,tags:[],version:"current",frontMatter:{title:"Vue + Hanko",sidebar_label:"Vue",description:"",keywords:["vue"],sidebar_custom_props:{cardIconProps:{name:"vue"}}},sidebar:"docs",previous:{title:"Next.js",permalink:"/guides/next"},next:{title:"Backend guide",permalink:"/guides/backend"}},c={},p=[{value:"Install dependencies",id:"install-dependencies",level:2},{value:"Register custom element with Vue",id:"register-custom-element-with-vue",level:2},{value:"Import &amp; use custom element",id:"import--use-custom-element",level:2},{value:"Defining login callbacks",id:"defining-login-callbacks",level:2},{value:"Backend request authentication",id:"backend-request-authentication",level:2}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"vue"},"Vue"),(0,r.kt)("p",null,"This guide demonstrates how to integrate Hanko into your Vue project."),(0,r.kt)("h2",{id:"install-dependencies"},"Install dependencies"),(0,r.kt)("p",null,"Install the ",(0,r.kt)("inlineCode",{parentName:"p"},"@teamhanko/hanko-elements")," package:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @teamhanko/hanko-elements\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @teamhanko/hanko-elements\n")))),(0,r.kt)("h2",{id:"register-custom-element-with-vue"},"Register custom element with Vue"),(0,r.kt)("p",null,"Vue needs to know which elements to treat as custom elements, otherwise it will issue a warning regarding component\nresolution. To do so, provide a predicate function that determines which elements are to be considered custom elements\nto ",(0,r.kt)("inlineCode",{parentName:"p"},"compilerOptions.isCustomElement")," in your configuration:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"vite",label:"Vite Config",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'{7-9} title="vite.config.js" showLineNumbers',"{7-9}":!0,title:'"vite.config.js"',showLineNumbers:!0},"import vue from '@vitejs/plugin-vue'\n\nexport default {\n  plugins: [\n    vue({\n      template: {\n        compilerOptions: {\n          isCustomElement: (tag) => tag === \"hanko-auth\"\n        }\n      }\n    })\n  ]\n}\n"))),(0,r.kt)(l.Z,{value:"cli",label:"Vue CLI Config",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'{8-10} title="vue.config.js" showLineNumbers',"{8-10}":!0,title:'"vue.config.js"',showLineNumbers:!0},"module.exports = {\n  chainWebpack: config => {\n    config.module\n      .rule('vue')\n      .use('vue-loader')\n      .tap(options => ({\n        ...options,\n        compilerOptions: {\n          isCustomElement: (tag) => tag === \"hanko-auth\"\n        }\n      }))\n  }\n}\n")))),(0,r.kt)("h2",{id:"import--use-custom-element"},"Import & use custom element"),(0,r.kt)("p",null,"Import ",(0,r.kt)("inlineCode",{parentName:"p"},"@teamhanko/hanko-elements/hanko-auth")," in the component where you want to use the Hanko custom element.\nDoing so registers the ",(0,r.kt)("inlineCode",{parentName:"p"},"<hanko-auth>")," element with the browser's\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/de/docs/Web/API/CustomElementRegistry"},(0,r.kt)("inlineCode",{parentName:"a"},"CustomElementRegistry")),". Then use the\nelement in your component template:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="HankoAuth.vue" showLineNumbers',title:'"HankoAuth.vue"',showLineNumbers:!0},'<script setup>\nimport "@teamhanko/hanko-elements/hanko-auth";\n\nconst api = import.meta.env.VITE_HANKO_API;\nconst lang = import.meta.env.VITE_HANKO_LANG;\n<\/script>\n\n<template>\n  <hanko-auth :api="api" :lang="lang" />\n</template>\n')),(0,r.kt)("h2",{id:"defining-login-callbacks"},"Defining login callbacks"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<hanko-auth>")," element dispatches a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"success")," event on successful login. React to this\nevent in order to, for example, redirect your users to protected pages in your application."),(0,r.kt)("p",null,"To do so, you can use Vue's ",(0,r.kt)("a",{parentName:"p",href:"https://vuejs.org/guide/essentials/event-handling.html#listening-to-events"},(0,r.kt)("inlineCode",{parentName:"a"},"v-on")),"\ndirective (shorthand: ",(0,r.kt)("inlineCode",{parentName:"p"},"@"),") and supply a callback directly on the ",(0,r.kt)("inlineCode",{parentName:"p"},"<hanko-auth>")," element:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'{2,8-12,16} title="HankoAuth.vue" showLineNumbers',"{2,8-12,16}":!0,title:'"HankoAuth.vue"',showLineNumbers:!0},'<script setup>\nimport { useRouter } from "vue-router";\nimport "@teamhanko/hanko-elements/hanko-auth";\n\nconst api = import.meta.env.VITE_HANKO_API;\nconst lang = import.meta.env.VITE_HANKO_LANG;\n\nconst router = useRouter();\n\nconst redirectToProfile = () => {\n  router.push({ path: "/profile" });\n};\n<\/script>\n\n<template>\n  <hanko-auth @success="redirectToProfile" :api="api" :lang="lang" />\n</template>\n')),(0,r.kt)("h2",{id:"backend-request-authentication"},"Backend request authentication"),(0,r.kt)("p",null,"If you want to authenticate requests in your own backend, please view our ",(0,r.kt)("a",{parentName:"p",href:"/guides/backend"},"backend guide"),"."))}d.isMDXComponent=!0}}]);