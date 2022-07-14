"use strict";(self.webpackChunkicepkg_site=self.webpackChunkicepkg_site||[]).push([[239],{4852:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(9231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,k=m["".concat(i,".").concat(d)]||m[d]||u[d]||p;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,l=new Array(p);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<p;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4122:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>p,metadata:()=>o,toc:()=>c});var r=n(6215),a=(n(9231),n(4852));const p={},l="\u5feb\u901f\u5f00\u59cb",o={unversionedId:"quick-start",id:"quick-start",title:"\u5feb\u901f\u5f00\u59cb",description:"\u73af\u5883\u51c6\u5907",source:"@site/docs/quick-start.md",sourceDirName:".",slug:"/quick-start",permalink:"/en/quick-start",draft:!1,editUrl:"https://github.com/ice-lab/icepkg/tree/main/website/docs/docs/quick-start.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ICE PKG",permalink:"/en/"},next:{title:"\u914d\u7f6e",permalink:"/en/guide/config"}},i={},c=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:2},{value:"1. Node.js",id:"1-nodejs",level:3},{value:"2. \u5305\u7ba1\u7406\u5de5\u5177",id:"2-\u5305\u7ba1\u7406\u5de5\u5177",level:3},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:2},{value:"\u542f\u52a8\u9879\u76ee",id:"\u542f\u52a8\u9879\u76ee",level:2},{value:"\u751f\u6210\u6784\u5efa\u4ea7\u7269",id:"\u751f\u6210\u6784\u5efa\u4ea7\u7269",level:2},{value:"\u53d1\u5e03\u4ea7\u7269",id:"\u53d1\u5e03\u4ea7\u7269",level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,a.kt)("h2",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,a.kt)("h3",{id:"1-nodejs"},"1. Node.js"),(0,a.kt)("p",null,"\u4f7f\u7528 ICE PKG \u5f00\u53d1\u524d\u9700\u8981\u5b89\u88c5 ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org"},"Node.js"),"\uff0c\u5e76\u786e\u4fdd node \u7248\u672c\u662f 14.x \u6216\u4ee5\u4e0a\u3002"),(0,a.kt)("h3",{id:"2-\u5305\u7ba1\u7406\u5de5\u5177"},"2. \u5305\u7ba1\u7406\u5de5\u5177"),(0,a.kt)("p",null,"\u5b89\u88c5 Node.js \u540e\uff0c\u9ed8\u8ba4\u4f1a\u5305\u542b npm\u3002\u5728\u56fd\u5185\u4f7f\u7528 npm \u5b89\u88c5\u4f9d\u8d56\u53ef\u80fd\u4f1a\u6bd4\u8f83\u6162\u3002\u5efa\u8bae\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/cnpm"},"cnpm")," \u7684\u56fd\u5185\u955c\u50cf\u6e90\u8fdb\u884c\u52a0\u901f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install -g cnpm --registry=https://registry.npm.taobao.org\n# \u9a8c\u8bc1 cnpm \u5b89\u88c5\u662f\u5426\u6210\u529f\n$ cnpm -v\n")),(0,a.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0c\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://pnpm.io/"},"pnpm"),"\u3001",(0,a.kt)("a",{parentName:"p",href:"https://yarnpkg.com/"},"yarn")," \u7b49\u5176\u4ed6\u5305\u7ba1\u7406\u5de5\u5177\u3002\u672c\u6587\u6863\u4ecd\u4ee5 npm \u4f5c\u4e3a\u793a\u4f8b\u3002"),(0,a.kt)("h2",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,a.kt)("p",null,"\u4ee5 React \u7ec4\u4ef6\u7c7b\u578b\u4e3a\u4f8b\uff0c\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\uff0c\u53ef\u4ee5\u5feb\u901f\u521d\u59cb\u5316\u4e00\u4e2a\u9879\u76ee\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm init @ice/pkg react-component\n")),(0,a.kt)("p",null,"\u9009\u62e9 React \u7ec4\u4ef6\u9879\u76ee\u7c7b\u578b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"? \u8bf7\u9009\u62e9\u9879\u76ee\u7c7b\u578b (Use arrow keys)\n  \u524d\u7aef\u7c7b\u5e93\n  Node \u6a21\u5757\n\u276f React \u7ec4\u4ef6\n  Rax \u7ec4\u4ef6\n")),(0,a.kt)("h2",{id:"\u542f\u52a8\u9879\u76ee"},"\u542f\u52a8\u9879\u76ee"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd react-component\n$ npm start\n")),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u8bbf\u95ee ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:4000"),"\uff0c\u5373\u53ef\u67e5\u770b\u7ec4\u4ef6 README \u6587\u6863\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN01OctOw81JXuHCC6FhP_!!6000000001039-2-tps-1110-720.png",alt:"demo-readme"})),(0,a.kt)("p",null,"\u8bbf\u95ee ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:4000/usage"),"\uff0c\u5373\u53ef\u9884\u89c8\u7ec4\u4ef6\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN01uEHuWp1DtXHv6uwax_!!6000000000274-2-tps-1160-540.png",alt:"component-preview"})),(0,a.kt)("h2",{id:"\u751f\u6210\u6784\u5efa\u4ea7\u7269"},"\u751f\u6210\u6784\u5efa\u4ea7\u7269"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm run build\n")),(0,a.kt)("h2",{id:"\u53d1\u5e03\u4ea7\u7269"},"\u53d1\u5e03\u4ea7\u7269"),(0,a.kt)("p",null,"\u4fee\u6539\u5305\u540d"),(0,a.kt)("p",null,"\u6267\u884c\u53d1\u5e03\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm publish\n")))}u.isMDXComponent=!0}}]);