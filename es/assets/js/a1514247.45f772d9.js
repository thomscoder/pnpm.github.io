"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4501],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,k=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return t?a.createElement(k,s(s({ref:n},d),{},{components:t})):a.createElement(k,s({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=u;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var p=2;p<i;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1289:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>r,contentTitle:()=>l,metadata:()=>p,assets:()=>d,toc:()=>c,default:()=>m});var a=t(7813),o=t(7044),i=(t(9496),t(9613)),s=["components"],r={id:"faq",title:"Preguntas Frecuentes"},l=void 0,p={unversionedId:"faq",id:"faq",title:"Preguntas Frecuentes",description:"\xbfPor qu\xe9 mi node_modules usa espacio en disco si los paquetes se almacenan en una tienda global?",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/faq.md",sourceDirName:".",slug:"/faq",permalink:"/es/next/faq",editUrl:"https://crowdin.com/project/pnpm/es-ES",tags:[],version:"current",frontMatter:{id:"faq",title:"Preguntas Frecuentes"}},d={},c=[{value:"\xbfPor qu\xe9 mi <code>node_modules</code> usa espacio en disco si los paquetes se almacenan en una tienda global?",id:"por-qu\xe9-mi-node_modules-usa-espacio-en-disco-si-los-paquetes-se-almacenan-en-una-tienda-global",level:2},{value:"\xbfFunciona en Windows?",id:"funciona-en-windows",level:2},{value:"\xbfPero el anidado de <code>node_modules</code> es incompatible con Windows?",id:"pero-el-anidado-de-node_modules-es-incompatible-con-windows",level:2},{value:"\xbfQu\xe9 pasa con los enlaces simb\xf3licos circulares?",id:"qu\xe9-pasa-con-los-enlaces-simb\xf3licos-circulares",level:2},{value:"\xbfPor qu\xe9 tener enlaces duros en absoluto? \xbfPor qu\xe9 no enlazar directamente con el almac\xe9n global?",id:"por-qu\xe9-tener-enlaces-duros-en-absoluto-por-qu\xe9-no-enlazar-directamente-con-el-almac\xe9n-global",level:2},{value:"Does pnpm work across multiple drives or filesystems?",id:"does-pnpm-work-across-multiple-drives-or-filesystems",level:2},{value:"Store path is specified",id:"store-path-is-specified",level:3},{value:"Store path is NOT specified",id:"store-path-is-not-specified",level:3},{value:"What does <code>pnpm</code> stand for?",id:"what-does-pnpm-stand-for",level:2},{value:"<code>pnpm</code> does not work with &lt;YOUR-PROJECT-HERE&gt;?",id:"pnpm-does-not-work-with-your-project-here",level:2},{value:"Solution 1",id:"solution-1",level:3},{value:"Solution 2",id:"solution-2",level:3},{value:"Solution 3",id:"solution-3",level:3}],u={toc:c};function m(e){var n=e.components,t=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"por-qu\xe9-mi-node_modules-usa-espacio-en-disco-si-los-paquetes-se-almacenan-en-una-tienda-global"},"\xbfPor qu\xe9 mi ",(0,i.kt)("inlineCode",{parentName:"h2"},"node_modules")," usa espacio en disco si los paquetes se almacenan en una tienda global?"),(0,i.kt)("p",null,"pnpm crea ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hard_link"},"enlaces duros")," desde el almac\xe9n global a las carpetas ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),". Los enlaces duros apuntan al mismo lugar en el disco donde se encuentran los archivos originales. Entonces, por ejemplo, si tiene ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," en su proyecto como una dependencia y ocupa 1 Mb de espacio, entonces parecer\xe1 que ocupa 1 Mb de espacio en ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," del proyecto y la misma cantidad de espacio en el almac\xe9n global. Sin embargo, ese 1 Mb es ",(0,i.kt)("em",{parentName:"p"},"el mismo espacio")," en el disco direccionado desde dos ubicaciones diferentes. Entonces, en total, ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," ocupa 1 Mb, no 2 Mb."),(0,i.kt)("p",null,"Para m\xe1s sobre este tema:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://unix.stackexchange.com/questions/88423/why-do-hard-links-seem-to-take-the-same-space-as-the-originals"},"\xbfPor qu\xe9 los enlaces duros parecen ocupar el mismo espacio que los originales?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gist.github.com/zkochan/106cfef49f8476b753a9cbbf9c65aff1"},"Un hilo de la sala de chat de pnpm")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/pnpm/pnpm/issues/794"},"Un issue en el repositorio de pnpm"))),(0,i.kt)("h2",{id:"funciona-en-windows"},"\xbfFunciona en Windows?"),(0,i.kt)("p",null,"Respuesta corta: S\xed. Respuesta larga: el uso de enlaces simb\xf3licos en Windows es problem\xe1tico, por decir lo menos, sin embargo, pnpm tiene una soluci\xf3n. Para Windows, usamos ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/win32/fileio/hard-links-and-junctions"},"junctions")," en su lugar."),(0,i.kt)("h2",{id:"pero-el-anidado-de-node_modules-es-incompatible-con-windows"},"\xbfPero el anidado de ",(0,i.kt)("inlineCode",{parentName:"h2"},"node_modules")," es incompatible con Windows?"),(0,i.kt)("p",null,"Las primeras versiones de npm ten\xedan problemas debido al anidamiento de todos los ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," (consulte ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nodejs/node-v0.x-archive/issues/6960"},"este issue"),". Sin embargo, pnpm no crea carpetas profundas, almacena todos los paquetes de forma plana y usa enlaces simb\xf3licos para crear la estructura de \xe1rbol de dependencia."),(0,i.kt)("h2",{id:"qu\xe9-pasa-con-los-enlaces-simb\xf3licos-circulares"},"\xbfQu\xe9 pasa con los enlaces simb\xf3licos circulares?"),(0,i.kt)("p",null,"Aunque pnpm utiliza enlaces para poner dependencias en carpetas ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),", se evita el uso enlaces simb\xf3licos circulares porque los paquetes principales se colocan en el mismo ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," en el que est\xe1n sus dependencias. As\xed que las dependencias de ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," no est\xe1n en ",(0,i.kt)("inlineCode",{parentName:"p"},"foo/node_modules"),", sino que ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," est\xe1 en ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," junto con sus propias dependencias."),(0,i.kt)("h2",{id:"por-qu\xe9-tener-enlaces-duros-en-absoluto-por-qu\xe9-no-enlazar-directamente-con-el-almac\xe9n-global"},"\xbfPor qu\xe9 tener enlaces duros en absoluto? \xbfPor qu\xe9 no enlazar directamente con el almac\xe9n global?"),(0,i.kt)("p",null,"Un paquete puede tener diferentes conjuntos de dependencias en una m\xe1quina."),(0,i.kt)("p",null,"In project ",(0,i.kt)("strong",{parentName:"p"},"A")," ",(0,i.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," can have a dependency resolved to ",(0,i.kt)("inlineCode",{parentName:"p"},"bar@1.0.0"),", but in project ",(0,i.kt)("strong",{parentName:"p"},"B")," the same dependency of ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," might resolve to ",(0,i.kt)("inlineCode",{parentName:"p"},"bar@1.1.0"),"; so, pnpm hard links ",(0,i.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," to every project where it is used, in order to create different sets of dependencies for it."),(0,i.kt)("p",null,"Direct symlinking to the global store would work with Node's ",(0,i.kt)("inlineCode",{parentName:"p"},"--preserve-symlinks")," flag, however, that approach comes with a plethora of its own issues, so we decided to stick with hard links. For more details about why this decision was made, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nodejs/node-eps/issues/46"},"this issue"),"."),(0,i.kt)("h2",{id:"does-pnpm-work-across-multiple-drives-or-filesystems"},"Does pnpm work across multiple drives or filesystems?"),(0,i.kt)("p",null,"The package store should be on the same drive and filesystem as installations, otherwise packages will be copied, not linked. This is due to a limitation in how hard linking works, in that a file on one filesystem cannot address a location in another. See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/712"},"Issue #712")," for more details."),(0,i.kt)("p",null,"pnpm functions differently in the 2 cases below:"),(0,i.kt)("h3",{id:"store-path-is-specified"},"Store path is specified"),(0,i.kt)("p",null,"If the store path is specified via ",(0,i.kt)("a",{parentName:"p",href:"/es/next/configuring"},"the store config"),", then copying occurs between the store and any projects that are on a different disk."),(0,i.kt)("p",null,"If you run ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install")," on disk ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),", then the pnpm store must be on disk ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),". If the pnpm store is located on disk ",(0,i.kt)("inlineCode",{parentName:"p"},"B"),", then all required packages will be directly copied to the project location instead of being linked. This severely inhibits the storage and performance benefits of pnpm."),(0,i.kt)("h3",{id:"store-path-is-not-specified"},"Store path is NOT specified"),(0,i.kt)("p",null,"If the store path is not set, then multiple stores are created (one per drive or filesystem)."),(0,i.kt)("p",null,"If installation is run on disk ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),", the store will be created on ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," ",(0,i.kt)("inlineCode",{parentName:"p"},".pnpm-store")," under the filesystem root.  If later the installation is run on disk ",(0,i.kt)("inlineCode",{parentName:"p"},"B"),", an independent store will be created on ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," at ",(0,i.kt)("inlineCode",{parentName:"p"},".pnpm-store"),". The projects would still maintain the benefits of pnpm, but each drive may have redundant packages."),(0,i.kt)("h2",{id:"what-does-pnpm-stand-for"},"What does ",(0,i.kt)("inlineCode",{parentName:"h2"},"pnpm")," stand for?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pnpm")," stands for ",(0,i.kt)("inlineCode",{parentName:"p"},"performant npm"),". ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rstacruz/"},"@rstacruz")," came up with the name."),(0,i.kt)("h2",{id:"pnpm-does-not-work-with-your-project-here"},(0,i.kt)("inlineCode",{parentName:"h2"},"pnpm")," does not work with ","<","YOUR-PROJECT-HERE>?"),(0,i.kt)("p",null,"In most cases it means that one of the dependencies require packages not declared in ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". It is a common mistake caused by flat ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),". If this happens, this is an error in the dependency and the dependency should be fixed. That might take time though, so pnpm supports workarounds to make the buggy packages work."),(0,i.kt)("h3",{id:"solution-1"},"Solution 1"),(0,i.kt)("p",null,"In the following example, a dependency does ",(0,i.kt)("strong",{parentName:"p"},"not")," have the ",(0,i.kt)("inlineCode",{parentName:"p"},"iterall")," module in its own list of deps."),(0,i.kt)("p",null,"The easiest solution to resolve missing dependencies of the buggy packages is to ",(0,i.kt)("strong",{parentName:"p"},"add ",(0,i.kt)("inlineCode",{parentName:"strong"},"iterall")," as a dependency to our project's ",(0,i.kt)("inlineCode",{parentName:"strong"},"package.json")),"."),(0,i.kt)("p",null,"You can do so, by installing it via ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm add iterall"),", and will be automatically added to your project's ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'  "dependencies": {\n    ...\n    "iterall": "^1.2.2",\n    ...\n  }\n')),(0,i.kt)("h3",{id:"solution-2"},"Solution 2"),(0,i.kt)("p",null,"One of the solutions is to use ",(0,i.kt)("a",{parentName:"p",href:"/es/next/pnpmfile#hooks"},"hooks")," for adding the missing dependencies to the package's ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,i.kt)("p",null,"An example was ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/1043"},"Webpack Dashboard")," which wasn't working with ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm"),". It has since been resolved such that it works with ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm")," now."),(0,i.kt)("p",null,"It used to throw an error:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"Error: Cannot find module 'babel-traverse'\n  at /node_modules/inspectpack@2.2.3/node_modules/inspectpack/lib/actions/parse\n")),(0,i.kt)("p",null,"The problem was that ",(0,i.kt)("inlineCode",{parentName:"p"},"babel-traverse")," was used in ",(0,i.kt)("inlineCode",{parentName:"p"},"inspectpack")," which was used by ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack-dashboard"),", but ",(0,i.kt)("inlineCode",{parentName:"p"},"babel-traverse")," wasn't specified in ",(0,i.kt)("inlineCode",{parentName:"p"},"inspectpack"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". It still worked with ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn")," because they create flat ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),"."),(0,i.kt)("p",null,"The solution was to create a ",(0,i.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," with the following contents:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  hooks: {\n    readPackage: (pkg) => {\n      if (pkg.name === \"inspectpack\") {\n        pkg.dependencies['babel-traverse'] = '^6.26.0';\n      }\n      return pkg;\n    }\n  }\n};\n")),(0,i.kt)("p",null,"After creating a ",(0,i.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs"),", delete ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," only - there is no need to delete ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),", as pnpm hooks only affect module resolution. Then, rebuild the dependencies & it should be working."),(0,i.kt)("h3",{id:"solution-3"},"Solution 3"),(0,i.kt)("p",null,"In case there are too many issues, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"shamefully-hoist")," option. This creates a flat ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," structure similar to the one created by ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn"),", which is not recommended as avoiding this structure is the primary purpose of pnpm's ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," approach."),(0,i.kt)("p",null,"To use it, try ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install --shamefully-hoist"),"."))}m.isMDXComponent=!0}}]);