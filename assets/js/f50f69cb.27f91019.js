"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5808],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,k=m["".concat(u,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6746:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return u},default:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l={},o={unversionedId:"guide/use-layout/vue",id:"guide/use-layout/vue",isDocsHomePage:!1,title:"Vue \u4e3b\u5e94\u7528\u63a5\u5165",description:"\u4f7f\u7528 API registerMicroApps \u7684\u65b9\u5f0f\u6ce8\u518c\u5fae\u5e94\u7528\uff0c\u8be5\u65b9\u5f0f \u4e0d\u9650\u5236\u4e3b\u5e94\u7528\u6240\u4f7f\u7528\u7684\u6846\u67b6\uff0c\u56e0\u6b64\u4e3b\u5e94\u7528\u53ef\u4ee5\u4f7f\u7528 React\u3001Vue\u3001Angular \u7b49\u4e0d\u540c\u6846\u67b6\u7f16\u5199\u3002",source:"@site/docs/guide/use-layout/vue.md",sourceDirName:"guide/use-layout",slug:"/guide/use-layout/vue",permalink:"/docs/guide/use-layout/vue",editUrl:"https://github.com/ice-lab/icestark/tree/gh-pages/docs/guide/use-layout/vue.md",version:"current",frontMatter:{},sidebar:"guide",previous:{title:"React \u4e3b\u5e94\u7528\u63a5\u5165",permalink:"/docs/guide/use-layout/react"},next:{title:"React \u5fae\u5e94\u7528\u63a5\u5165",permalink:"/docs/guide/use-child/react"}},u=[{value:"\u901a\u8fc7\u5b98\u65b9\u811a\u624b\u67b6\u521b\u5efa",id:"\u901a\u8fc7\u5b98\u65b9\u811a\u624b\u67b6\u521b\u5efa",children:[]},{value:"\u5df2\u6709\u5e94\u7528\u6539\u9020",id:"\u5df2\u6709\u5e94\u7528\u6539\u9020",children:[{value:"\u5fae\u5e94\u7528\u914d\u7f6e\u9879",id:"\u5fae\u5e94\u7528\u914d\u7f6e\u9879",children:[]}]}],c={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u4f7f\u7528 API ",(0,i.kt)("inlineCode",{parentName:"p"},"registerMicroApps")," \u7684\u65b9\u5f0f\u6ce8\u518c\u5fae\u5e94\u7528\uff0c\u8be5\u65b9\u5f0f ",(0,i.kt)("strong",{parentName:"p"},"\u4e0d\u9650\u5236\u4e3b\u5e94\u7528\u6240\u4f7f\u7528\u7684\u6846\u67b6"),"\uff0c\u56e0\u6b64\u4e3b\u5e94\u7528\u53ef\u4ee5\u4f7f\u7528 React\u3001Vue\u3001Angular \u7b49\u4e0d\u540c\u6846\u67b6\u7f16\u5199\u3002"),(0,i.kt)("h2",{id:"\u901a\u8fc7\u5b98\u65b9\u811a\u624b\u67b6\u521b\u5efa"},"\u901a\u8fc7\u5b98\u65b9\u811a\u624b\u67b6\u521b\u5efa"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u8be5\u5b98\u65b9\u811a\u624b\u67b6\u57fa\u4e8e Vue 2.0 + Vue CLI\uff0c\u5982\u9700\u4f7f\u7528\u5176\u4ed6\u6846\u67b6/\u5de5\u7a0b\u53ef\u6309 ",(0,i.kt)("a",{parentName:"p",href:"./vue#%E5%B7%B2%E6%9C%89%E5%BA%94%E7%94%A8%E6%94%B9%E9%80%A0"},"\u5df2\u6709\u5e94\u7528\u6539\u9020")," \u7684\u65b9\u5f0f\u63a5\u5165\u3002\n\u9700\u6ce8\u610f\uff0c\u76ee\u524d @vue-materials/icestark-layout-app 1.x \u91c7\u7528 Vite + icestark + vue3 \u6846\u67b6\u5e94\u7528\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm init ice icestark-layout @vue-materials/icestark-layout-app\n\n$ cd icestark-layout\n$ npm install\n$ npm start\n")),(0,i.kt)("h2",{id:"\u5df2\u6709\u5e94\u7528\u6539\u9020"},"\u5df2\u6709\u5e94\u7528\u6539\u9020"),(0,i.kt)("p",null,"\u5b89\u88c5\u4f9d\u8d56\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i --save @ice/stark\n")),(0,i.kt)("p",null,"\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"registerMicroApps")," \u6765\u6ce8\u518c\u5fae\u5e94\u7528\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// \u65b0\u7248\u672c\u5f15\u7528\u65b9\u5f0f\nimport start from '@ice/stark/lib/start'\nimport { registerMicroApps } from '@ice/stark/lib/apps'\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { registerMicroApps, start } from '@ice/stark';\n\nconst appContainer = document.getElementById('icestarkNode');\n\nregisterMicroApps([\n  {\n    name: 'app1',\n    activePath: ['/', '/message', '/about'],\n    exact: true,\n    title: '\u901a\u7528\u9875\u9762',\n    container: appContainer,\n    url: ['//unpkg.com/icestark-child-common/build/js/index.js'],\n  },\n  {\n    name: 'app2',\n    activePath: '/seller',\n    title: '\u5546\u5bb6\u5e73\u53f0',\n    container: appContainer,\n    url: [\n      '//unpkg.com/icestark-child-seller/build/js/index.js',\n      '//unpkg.com/icestark-child-seller/build/css/index.css',\n    ],\n  },\n]);\n\nstart();\n")),(0,i.kt)("h3",{id:"\u5fae\u5e94\u7528\u914d\u7f6e\u9879"},"\u5fae\u5e94\u7528\u914d\u7f6e\u9879"),(0,i.kt)("h4",{id:"name"},"name"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"name")," \u5b57\u6bb5\u4f5c\u4e3a\u5fae\u5e94\u7528\u552f\u4e00\u6807\u8bc6\uff0c\u4e0d\u53ef\u91cd\u590d\u6ce8\u518c\u3002\u6ce8\u518c\u540e\u7684\u5fae\u5e94\u7528\u5747\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," \u6807\u8bc6\u5bf9\u5fae\u5e94\u7528\u8fdb\u884c\u52a0\u8f7d\u6216\u8005\u5378\u8f7d\u3002"),(0,i.kt)("h4",{id:"activepath"},"activePath"),(0,i.kt)("p",null,"\u5fae\u5e94\u7528\u6fc0\u6d3b\u7684\u8def\u7531\u89c4\u5219\uff0c\u53ef\u4ee5\u6709\u56db\u79cd\u65b9\u5f0f\u914d\u7f6e\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"string"),"\uff1a\u914d\u7f6e\u4e3a\u5b57\u7b26\u4e32\u7c7b\u578b\u65f6\uff0c\u5c06\u81ea\u52a8\u6839\u636e\u8bbe\u7f6e\u7684\u8def\u5f84\u8fdb\u884c\u5339\u914d\uff0c\u5982\u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"/seller")," \u7684\u60c5\u51b5\u4e0b\uff0c\u8def\u7531\u53ea\u8981\u5339\u914d\u5230 /seller \u5747\u4f1a\u52a0\u8f7d\u6539\u9879\u914d\u7f6e\u7684\u5fae\u5e94\u7528"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"string[]"),"\uff1a\u6570\u7ec4\u5f62\u5f0f\u5728\u4e0a\u8ff0\u5b57\u7b26\u4e32\u5f62\u5f0f\u7684\u57fa\u7840\u4e0a\u589e\u52a0\u4e86\u591a\u4e2a\u8def\u7531\u5339\u914d\u914d\u7f6e\uff0c\u53ea\u8981\u8def\u7531\u5339\u914d\u5230\u6570\u7ec4\u4e2d\u7684\u4efb\u610f\u4e00\u9879\u5747\u4f1a\u52a0\u8f7d\u5fae\u5e94\u7528"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PathData[]"),"\uff1a\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u8bbe\u7f6e\u7684\u8def\u7531\u89c4\u5219\u5747\u4e3a\u901a\u914d\u89c4\u5219\uff0c\u5982\u679c\u60f3\u5bf9\u8def\u7531\u8fdb\u884c\u7cbe\u51c6\u5339\u914d\u6216\u8005\u533a\u5206\u5927\u5c0f\u5199\uff0c\u53ef\u4ee5\u4ee5\u5bf9\u8c61\u65b9\u5f0f\u914d\u7f6e\u6bcf\u4e00\u9879\u8def\u7531\u89c4\u5219\uff0c\u5176\u4e2d\u53ef\u9009\u914d\u7f6e\u9879\u5305\u62ec\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"exact"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"strict"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"sensitive")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Function"),"\uff1a\u901a\u8fc7\u51fd\u6570\u65b9\u5f0f\u6267\u884c\u7684\u5f62\u5f0f\u5c06\u6839\u636e\u51fd\u6570\u6267\u884c\u7ed3\u679c\u51b3\u5b9a\u5fae\u5e94\u7528\u662f\u5426\u52a0\u8f7d\uff0c\u51fd\u6570\u63a5\u53d7\u53c2\u6570\u4e3a\u5f53\u524d url \u5730\u5740")),(0,i.kt)("h4",{id:"container"},"container"),(0,i.kt)("p",null,"\u5fae\u5e94\u7528\u6302\u8f7d\u7684 DOM \u8282\u70b9\uff0c\u901a\u5e38\u60c5\u51b5\u4e0b\u6240\u6709\u5fae\u5e94\u7528\u7684 container \u90fd\u662f\u540c\u4e00\u4e2a\u3002"),(0,i.kt)("h4",{id:"\u5fae\u5e94\u7528\u5165\u53e3-urlentryentrycontent"},"\u5fae\u5e94\u7528\u5165\u53e3 url/entry/entryContent"),(0,i.kt)("p",null,"\u8be6\u89c1 ",(0,i.kt)("a",{parentName:"p",href:"../concept/child#%E5%85%A5%E5%8F%A3%E8%A7%84%E8%8C%83"},"\u5fae\u5e94\u7528 - \u5165\u53e3\u89c4\u8303")," \u3002"))}p.isMDXComponent=!0}}]);