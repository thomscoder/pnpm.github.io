"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5130],{9613:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||p;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<p;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3781:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>c,assets:()=>l,toc:()=>u,default:()=>d});var r=n(7813),a=n(7044),p=(n(9496),n(9613)),o=["components"],i={id:"pnpx-cli",title:"pnpx CLI"},s=void 0,c={unversionedId:"pnpx-cli",id:"version-5.x/pnpx-cli",title:"pnpx CLI",description:"Para nuevos usuarios",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-5.x/pnpx-cli.md",sourceDirName:".",slug:"/pnpx-cli",permalink:"/es/5.x/pnpx-cli",editUrl:"https://crowdin.com/project/pnpm/es-ES",tags:[],version:"5.x",frontMatter:{id:"pnpx-cli",title:"pnpx CLI"},sidebar:"version-5.x/docs",previous:{title:"pnpm CLI",permalink:"/es/5.x/pnpm-cli"},next:{title:"Configuraci\xf3n",permalink:"/es/5.x/configuring"}},l={},u=[{value:"Para nuevos usuarios",id:"para-nuevos-usuarios",level:2},{value:"Para usuarios de npm",id:"para-usuarios-de-npm",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"para-nuevos-usuarios"},"Para nuevos usuarios"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"pnpx")," (PNPm eXecute) is a command line tool that fetches a package from the registry without installing it as a dependency, hotloads it, and runs whatever default command binary it exposes."),(0,p.kt)("p",null,"For example, to use ",(0,p.kt)("inlineCode",{parentName:"p"},"create-react-app")," anywhere to bootstrap a react app without needing to install it under another project, you can run:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"pnpx create-react-app my-project\n")),(0,p.kt)("p",null,"This will fetch ",(0,p.kt)("inlineCode",{parentName:"p"},"create-react-app")," from the registry and run it with the given arguments. For more information, you may want to look at ",(0,p.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"npx")," from npm, as it offers the same interface, except it uses ",(0,p.kt)("inlineCode",{parentName:"p"},"npm")," instead of ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm")," under the hood."),(0,p.kt)("h2",{id:"para-usuarios-de-npm"},"Para usuarios de npm"),(0,p.kt)("p",null,"npm has a great package runner called ",(0,p.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"npx"),". pnpm offers the same tool via the ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpx")," command. The only difference is that ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpx")," uses ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm")," for installing packages."))}d.isMDXComponent=!0}}]);