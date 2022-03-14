"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6752],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=i,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return t?r.createElement(f,a(a({ref:n},c),{},{components:t})):r.createElement(f,a({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8597:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>p,assets:()=>c,toc:()=>m,default:()=>d});var r=t(7813),i=t(7044),o=(t(9496),t(9613)),a=["components"],s={id:"limitations",title:"Limitaciones"},l=void 0,p={unversionedId:"limitations",id:"version-5.x/limitations",title:"Limitaciones",description:"1. npm-shrinkwrap.json y package-lock.json se ignoran. A diferencia de pnpm, npm puede instalar el mismo nombre@versi\xf3n varias veces y con diferentes conjuntos de dependencias. npm's lockfile is designed to reflect the flat node_modules layout, however, as pnpm cannot create a similar layout, it cannot respect npm's lockfile format. Vea pnpm import si a pesar de todo desea convertir un archivo de bloqueo al formato de pnpm.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-5.x/limitations.md",sourceDirName:".",slug:"/limitations",permalink:"/es/5.x/limitations",editUrl:"https://crowdin.com/project/pnpm/es-ES",tags:[],version:"5.x",frontMatter:{id:"limitations",title:"Limitaciones"},sidebar:"version-5.x/docs",previous:{title:"Prueba de rendimiento",permalink:"/es/5.x/benchmark"},next:{title:"Symlinked `node_modules` structure",permalink:"/es/5.x/symlinked-node-modules-structure"}},c={},m=[],u={toc:m};function d(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"npm-shrinkwrap.json")," y ",(0,o.kt)("inlineCode",{parentName:"li"},"package-lock.json")," se ignoran. A diferencia de pnpm, npm puede instalar el mismo ",(0,o.kt)("inlineCode",{parentName:"li"},"nombre@versi\xf3n")," varias veces y con diferentes conjuntos de dependencias. npm's lockfile is designed to reflect the flat ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules")," layout, however, as pnpm cannot create a similar layout, it cannot respect npm's lockfile format. Vea ",(0,o.kt)("a",{parentName:"li",href:"/es/5.x/cli/import"},"pnpm import")," si a pesar de todo desea convertir un archivo de bloqueo al formato de pnpm."),(0,o.kt)("li",{parentName:"ol"},"pnpm can't publish npm packages with ",(0,o.kt)("inlineCode",{parentName:"li"},"bundledDependencies"),". Currently, there are no plans to add support for ",(0,o.kt)("inlineCode",{parentName:"li"},"bundledDependencies")," either, as they do not work very consistently in publishing, even on npm. Instead, we recommend you use an actual package bundler, like webpack, rollup, or ESBuild."),(0,o.kt)("li",{parentName:"ol"},"Binstubs (files in ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules/.bin"),") are always shell files, not symlinks to JS files. The shell files are created to help pluggable CLI apps in finding their plugins in the unusual ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules")," structure. This is very rarely an issue and if you expect the file to be a JS file, reference the original file directly instead, as described in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pnpm/pnpm/issues/736"},"#736"),"."),(0,o.kt)("li",{parentName:"ol"},"Node's ",(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/api/cli.html#cli_preserve_symlinks"},"--preserve-symlinks")," flag does not work when executed in a project that uses pnpm.")),(0,o.kt)("p",null,"\xbfTienes una idea para solucionar estos problemas? ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/new"},"Comp\xe1rtelos.")))}d.isMDXComponent=!0}}]);