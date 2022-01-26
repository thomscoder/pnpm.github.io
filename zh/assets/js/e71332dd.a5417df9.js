"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1066],{9613:(I,i,e)=>{e.d(i,{Zo:()=>d,kt:()=>o});var t=e(9496);function a(I,i,e){return i in I?Object.defineProperty(I,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):I[i]=e,I}function l(I,i){var e=Object.keys(I);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(I);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(I,i).enumerable}))),e.push.apply(e,t)}return e}function n(I){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{};i%2?l(Object(e),!0).forEach((function(i){a(I,i,e[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(I,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(i){Object.defineProperty(I,i,Object.getOwnPropertyDescriptor(e,i))}))}return I}function g(I,i){if(null==I)return{};var e,t,a=function(I,i){if(null==I)return{};var e,t,a={},l=Object.keys(I);for(t=0;t<l.length;t++)e=l[t],i.indexOf(e)>=0||(a[e]=I[e]);return a}(I,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(I);for(t=0;t<l.length;t++)e=l[t],i.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(I,e)&&(a[e]=I[e])}return a}var r=t.createContext({}),m=function(I){var i=t.useContext(r),e=i;return I&&(e="function"==typeof I?I(i):n(n({},i),I)),e},d=function(I){var i=m(I.components);return t.createElement(r.Provider,{value:i},I.children)},p={inlineCode:"code",wrapper:function(I){var i=I.children;return t.createElement(t.Fragment,{},i)}},j=t.forwardRef((function(I,i){var e=I.components,a=I.mdxType,l=I.originalType,r=I.parentName,d=g(I,["components","mdxType","originalType","parentName"]),j=m(e),o=a,N=j["".concat(r,".").concat(o)]||j[o]||p[o]||l;return e?t.createElement(N,n(n({ref:i},d),{},{components:e})):t.createElement(N,n({ref:i},d))}));function o(I,i){var e=arguments,a=i&&i.mdxType;if("string"==typeof I||a){var l=e.length,n=new Array(l);n[0]=j;var g={};for(var r in i)hasOwnProperty.call(i,r)&&(g[r]=i[r]);g.originalType=I,g.mdxType="string"==typeof I?I:a,n[1]=g;for(var m=2;m<l;m++)n[m]=e[m];return t.createElement.apply(null,n)}return t.createElement.apply(null,e)}j.displayName="MDXCreateElement"},6434:(I,i,e)=>{e.r(i),e.d(i,{frontMatter:()=>g,contentTitle:()=>r,metadata:()=>m,toc:()=>d,default:()=>j});var t=e(9518),a=e(7344),l=(e(9496),e(9613)),n=["components"],g={},r="Benchmarks of JavaScript Package Managers",m={type:"mdx",permalink:"/zh/benchmarks",source:"@site/src/pages/benchmarks.md"},d=[{value:"Lots of Files",id:"lots-of-files",children:[],level:2},{value:"The reason pnpm is fast",id:"the-reason-pnpm-is-fast",children:[],level:2}],p={toc:d};function j(I){var i=I.components,g=(0,a.Z)(I,n);return(0,l.kt)("wrapper",(0,t.Z)({},p,g,{components:i,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"benchmarks-of-javascript-package-managers"},"Benchmarks of JavaScript Package Managers"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Last benchmarked at"),": ",(0,l.kt)("em",{parentName:"p"},"Jan 26, 2022, 2:51 AM")," (",(0,l.kt)("em",{parentName:"p"},"daily")," updated)."),(0,l.kt)("p",null,"This benchmark compares the performance of npm, pnpm, Yarn Classic, and Yarn PnP (check ",(0,l.kt)("a",{parentName:"p",href:"https://yarnpkg.com/benchmarks"},"Yarn's benchmarks")," for any other Yarn modes that are not included here)."),(0,l.kt)("p",null,"Here's a quick explanation of how these tests could apply to the real world:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clean install"),": How long it takes to run a totally fresh install: no lockfile present, no packages in the cache, no ",(0,l.kt)("inlineCode",{parentName:"li"},"node_modules")," folder."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"with cache"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"with lockfile"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"with node_modules"),": After the first install is done, the install command is run again."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"with cache"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"with lockfile"),": When a repo is fetched by a developer and installation is first run."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"with cache"),": Same as the one above, but the package manager doesn't have a lockfile to work from."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"with lockfile"),": When an installation runs on a CI server."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"with cache"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"with node_modules"),": The lockfile is deleted and the install command is run again."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"with node_modules"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"with lockfile"),": The package cache is deleted and the install command is run again."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"with node_modules"),": The package cache and the lockfile is deleted and the install command is run again."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"update"),": Updating your dependencies by changing the version in the ",(0,l.kt)("inlineCode",{parentName:"li"},"package.json")," and running the install command again.")),(0,l.kt)("h2",{id:"lots-of-files"},"Lots of Files"),(0,l.kt)("p",null,"The app's ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm.github.io/blob/main/benchmarks/fixtures/alotta-files/package.json"},"here")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"action"),(0,l.kt)("th",{parentName:"tr",align:null},"cache"),(0,l.kt)("th",{parentName:"tr",align:null},"lockfile"),(0,l.kt)("th",{parentName:"tr",align:null},"node_modules"),(0,l.kt)("th",{parentName:"tr",align:null},"npm"),(0,l.kt)("th",{parentName:"tr",align:null},"pnpm"),(0,l.kt)("th",{parentName:"tr",align:null},"Yarn"),(0,l.kt)("th",{parentName:"tr",align:null},"Yarn PnP"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"install"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"43.7s"),(0,l.kt)("td",{parentName:"tr",align:null},"19s"),(0,l.kt)("td",{parentName:"tr",align:null},"16.6s"),(0,l.kt)("td",{parentName:"tr",align:null},"23.6s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"install"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:null},"1.7s"),(0,l.kt)("td",{parentName:"tr",align:null},"1.5s"),(0,l.kt)("td",{parentName:"tr",align:null},"2.1s"),(0,l.kt)("td",{parentName:"tr",align:null},"n/a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"install"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"10.3s"),(0,l.kt)("td",{parentName:"tr",align:null},"4.8s"),(0,l.kt)("td",{parentName:"tr",align:null},"6.8s"),(0,l.kt)("td",{parentName:"tr",align:null},"1.5s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"install"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"15.3s"),(0,l.kt)("td",{parentName:"tr",align:null},"8.3s"),(0,l.kt)("td",{parentName:"tr",align:null},"11.2s"),(0,l.kt)("td",{parentName:"tr",align:null},"6.2s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"install"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"27.8s"),(0,l.kt)("td",{parentName:"tr",align:null},"16.2s"),(0,l.kt)("td",{parentName:"tr",align:null},"12s"),(0,l.kt)("td",{parentName:"tr",align:null},"17.9s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"install"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:null},"2.4s"),(0,l.kt)("td",{parentName:"tr",align:null},"2.9s"),(0,l.kt)("td",{parentName:"tr",align:null},"7s"),(0,l.kt)("td",{parentName:"tr",align:null},"n/a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"install"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:null},"1.8s"),(0,l.kt)("td",{parentName:"tr",align:null},"1.5s"),(0,l.kt)("td",{parentName:"tr",align:null},"7.6s"),(0,l.kt)("td",{parentName:"tr",align:null},"n/a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"install"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:null},"2.3s"),(0,l.kt)("td",{parentName:"tr",align:null},"7.4s"),(0,l.kt)("td",{parentName:"tr",align:null},"11.8s"),(0,l.kt)("td",{parentName:"tr",align:null},"n/a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"update"),(0,l.kt)("td",{parentName:"tr",align:null},"n/a"),(0,l.kt)("td",{parentName:"tr",align:null},"n/a"),(0,l.kt)("td",{parentName:"tr",align:null},"n/a"),(0,l.kt)("td",{parentName:"tr",align:null},"1.6s"),(0,l.kt)("td",{parentName:"tr",align:null},"13s"),(0,l.kt)("td",{parentName:"tr",align:null},"15.5s"),(0,l.kt)("td",{parentName:"tr",align:null},"28.3s")))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Graph of the alotta-files results",src:e(1831).Z})),(0,l.kt)("h2",{id:"the-reason-pnpm-is-fast"},"The reason pnpm is fast"),(0,l.kt)("p",null,'Why is pnpm so crazy fast compared to other "traditional" package managers?'),(0,l.kt)("p",null,"pnpm doesn't have blocking stages of installation. Each dependency has its own stages and the next stage starts as soon as possible."),(0,l.kt)("p",null,(0,l.kt)("img",{src:e(7145).Z})),(0,l.kt)("p",null,(0,l.kt)("img",{src:e(5964).Z})))}j.isMDXComponent=!0},1831:(I,i,e)=>{e.d(i,{Z:()=>t});const t="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMwMCAzMTkiPgogIDxzdHlsZT4KICAgIC5mb250IHsgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7IH0KICAgIC5zMyB7IGZvbnQtc2l6ZTogM3B4OyB9CiAgICAuczQgeyBmb250LXNpemU6IDRweDsgfQogICAgLnM1IHsgZm9udC1zaXplOiA1cHg7IH0KICAgIC5saW5lIHsgc3Ryb2tlOiAjY2FjYWNhOyB9CiAgICAud2lkdGggeyBzdHJva2Utd2lkdGg6IDAuNTsgfQogICAgLnRleHQgeyBmaWxsOiAjODg4OyB9CiAgPC9zdHlsZT4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMxOSIgZmlsbD0iI2ZmZiI+PC9yZWN0PgogIDxjaXJjbGUgY3g9IjQ0IiBjeT0iNiIgcj0iNCIgZmlsbD0iI2NkMzczMSI+PC9jaXJjbGU+CiAgPHRleHQgeD0iNDQiIHk9IjE0IiBjbGFzcz0iZm9udCBzNCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+bnBtPC90ZXh0PgogIDx0ZXh0IHg9IjQ0IiB5PSIxOCIgY2xhc3M9ImZvbnQgczMiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnY4LjMuMjwvdGV4dD4KICA8Y2lyY2xlIGN4PSI2MCIgY3k9IjYiIHI9IjQiIGZpbGw9IiNmYmFlMDAiPjwvY2lyY2xlPgogIDx0ZXh0IHg9IjYwIiB5PSIxNCIgY2xhc3M9ImZvbnQgczQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnBucG08L3RleHQ+CiAgPHRleHQgeD0iNjAiIHk9IjE4IiBjbGFzcz0iZm9udCBzMyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+djYuMjguMDwvdGV4dD4KICA8Y2lyY2xlIGN4PSI3NiIgY3k9IjYiIHI9IjQiIGZpbGw9IiMyNDhlYmQiPjwvY2lyY2xlPgogIDx0ZXh0IHg9Ijc2IiB5PSIxNCIgY2xhc3M9ImZvbnQgczQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPllhcm48L3RleHQ+CiAgPHRleHQgeD0iNzYiIHk9IjE4IiBjbGFzcz0iZm9udCBzMyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+djMuMS4xPC90ZXh0PgogIDxjaXJjbGUgY3g9IjkyIiBjeT0iNiIgcj0iNCIgZmlsbD0iIzQwYTlmZiI+PC9jaXJjbGU+CiAgPHRleHQgeD0iOTIiIHk9IjE0IiBjbGFzcz0iZm9udCBzNCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+WWFybiBQblA8L3RleHQ+CiAgPHRleHQgeD0iOTIiIHk9IjE4IiBjbGFzcz0iZm9udCBzMyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+djMuMS4xPC90ZXh0PgogIDx0ZXh0IHg9IjQwIiB5PSIyOCIgY2xhc3M9ImZvbnQgczUgdGV4dCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MDwvdGV4dD4KICA8dGV4dCB4PSI0MCIgeT0iMzEwIiBjbGFzcz0iZm9udCBzNSB0ZXh0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4wPC90ZXh0PgogIDxsaW5lIHgxPSI5MCIgeTE9IjMxIiB4Mj0iOTAiIHkyPSIzMDUiIGNsYXNzPSJsaW5lIHdpZHRoIj48L2xpbmU+CiAgPHRleHQgeD0iOTAiIHk9IjI4IiBjbGFzcz0iZm9udCBzNSB0ZXh0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj45PC90ZXh0PgogIDx0ZXh0IHg9IjkwIiB5PSIzMTAiIGNsYXNzPSJmb250IHM1IHRleHQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjk8L3RleHQ+CiAgPGxpbmUgeDE9IjE0MCIgeTE9IjMxIiB4Mj0iMTQwIiB5Mj0iMzA1IiBjbGFzcz0ibGluZSB3aWR0aCI+PC9saW5lPgogIDx0ZXh0IHg9IjE0MCIgeT0iMjgiIGNsYXNzPSJmb250IHM1IHRleHQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjE4PC90ZXh0PgogIDx0ZXh0IHg9IjE0MCIgeT0iMzEwIiBjbGFzcz0iZm9udCBzNSB0ZXh0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xODwvdGV4dD4KICA8bGluZSB4MT0iMTkwIiB5MT0iMzEiIHgyPSIxOTAiIHkyPSIzMDUiIGNsYXNzPSJsaW5lIHdpZHRoIj48L2xpbmU+CiAgPHRleHQgeD0iMTkwIiB5PSIyOCIgY2xhc3M9ImZvbnQgczUgdGV4dCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Mjc8L3RleHQ+CiAgPHRleHQgeD0iMTkwIiB5PSIzMTAiIGNsYXNzPSJmb250IHM1IHRleHQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjI3PC90ZXh0PgogIDxsaW5lIHgxPSIyNDAiIHkxPSIzMSIgeDI9IjI0MCIgeTI9IjMwNSIgY2xhc3M9ImxpbmUgd2lkdGgiPjwvbGluZT4KICA8dGV4dCB4PSIyNDAiIHk9IjI4IiBjbGFzcz0iZm9udCBzNSB0ZXh0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4zNjwvdGV4dD4KICA8dGV4dCB4PSIyNDAiIHk9IjMxMCIgY2xhc3M9ImZvbnQgczUgdGV4dCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MzY8L3RleHQ+CiAgPGxpbmUgeDE9IjI5MCIgeTE9IjMxIiB4Mj0iMjkwIiB5Mj0iMzA1IiBjbGFzcz0ibGluZSB3aWR0aCI+PC9saW5lPgogIDx0ZXh0IHg9IjI5MCIgeT0iMjgiIGNsYXNzPSJmb250IHM1IHRleHQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjQ1PC90ZXh0PgogIDx0ZXh0IHg9IjI5MCIgeT0iMzEwIiBjbGFzcz0iZm9udCBzNSB0ZXh0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj40NTwvdGV4dD4KICA8dGV4dCB4PSIyOTAiIHk9IjIwIiBjbGFzcz0iZm9udCBzNCB0ZXh0IiBmb250LXN0eWxlPSJpdGFsaWMiIHRleHQtYW5jaG9yPSJlbmQiPkluc3RhbGxhdGlvbiB0aW1lIGluIHNlY29uZHMgKGxvd2VyIGlzIGJldHRlcik8L3RleHQ+CiAgPHJlY3QgeD0iNDAiIHk9IjM1IiB3aWR0aD0iMjQzIiBoZWlnaHQ9IjYiIGZpbGw9IiNjZDM3MzEiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSI0MS41IiB3aWR0aD0iMTA2IiBoZWlnaHQ9IjYiIGZpbGw9IiNmYmFlMDAiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSI0OCIgd2lkdGg9IjkyIiBoZWlnaHQ9IjYiIGZpbGw9IiMyNDhlYmQiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSI1NC41IiB3aWR0aD0iMTMxIiBoZWlnaHQ9IjYiIGZpbGw9IiM0MGE5ZmYiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSI2NSIgd2lkdGg9IjEwIiBoZWlnaHQ9IjYiIGZpbGw9IiNjZDM3MzEiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSI3MS41IiB3aWR0aD0iOSIgaGVpZ2h0PSI2IiBmaWxsPSIjZmJhZTAwIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iNzgiIHdpZHRoPSIxMiIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iODQuNSIgd2lkdGg9IjAiIGhlaWdodD0iNiIgZmlsbD0iIzQwYTlmZiIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9Ijk1IiB3aWR0aD0iNTciIGhlaWdodD0iNiIgZmlsbD0iI2NkMzczMSIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjEwMS41IiB3aWR0aD0iMjciIGhlaWdodD0iNiIgZmlsbD0iI2ZiYWUwMCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjEwOCIgd2lkdGg9IjM4IiBoZWlnaHQ9IjYiIGZpbGw9IiMyNDhlYmQiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIxMTQuNSIgd2lkdGg9IjgiIGhlaWdodD0iNiIgZmlsbD0iIzQwYTlmZiIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjEyNSIgd2lkdGg9Ijg2IiBoZWlnaHQ9IjYiIGZpbGw9IiNjZDM3MzEiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIxMzEuNSIgd2lkdGg9IjQ3IiBoZWlnaHQ9IjYiIGZpbGw9IiNmYmFlMDAiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIxMzgiIHdpZHRoPSI2MiIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMTQ0LjUiIHdpZHRoPSIzNCIgaGVpZ2h0PSI2IiBmaWxsPSIjNDBhOWZmIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMTU1IiB3aWR0aD0iMTU0IiBoZWlnaHQ9IjYiIGZpbGw9IiNjZDM3MzEiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIxNjEuNSIgd2lkdGg9IjkwIiBoZWlnaHQ9IjYiIGZpbGw9IiNmYmFlMDAiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIxNjgiIHdpZHRoPSI2NyIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMTc0LjUiIHdpZHRoPSIxMDAiIGhlaWdodD0iNiIgZmlsbD0iIzQwYTlmZiIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjE4NSIgd2lkdGg9IjEzIiBoZWlnaHQ9IjYiIGZpbGw9IiNjZDM3MzEiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIxOTEuNSIgd2lkdGg9IjE3IiBoZWlnaHQ9IjYiIGZpbGw9IiNmYmFlMDAiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIxOTgiIHdpZHRoPSIzOSIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMjA0LjUiIHdpZHRoPSIwIiBoZWlnaHQ9IjYiIGZpbGw9IiM0MGE5ZmYiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIyMTUiIHdpZHRoPSIxMCIgaGVpZ2h0PSI2IiBmaWxsPSIjY2QzNzMxIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMjIxLjUiIHdpZHRoPSI4IiBoZWlnaHQ9IjYiIGZpbGw9IiNmYmFlMDAiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIyMjgiIHdpZHRoPSI0MyIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMjM0LjUiIHdpZHRoPSIwIiBoZWlnaHQ9IjYiIGZpbGw9IiM0MGE5ZmYiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIyNDUiIHdpZHRoPSIxMyIgaGVpZ2h0PSI2IiBmaWxsPSIjY2QzNzMxIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMjUxLjUiIHdpZHRoPSI0MSIgaGVpZ2h0PSI2IiBmaWxsPSIjZmJhZTAwIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMjU4IiB3aWR0aD0iNjYiIGhlaWdodD0iNiIgZmlsbD0iIzI0OGViZCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjI2NC41IiB3aWR0aD0iMCIgaGVpZ2h0PSI2IiBmaWxsPSIjNDBhOWZmIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMjc1IiB3aWR0aD0iOSIgaGVpZ2h0PSI2IiBmaWxsPSIjY2QzNzMxIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMjgxLjUiIHdpZHRoPSI3MiIgaGVpZ2h0PSI2IiBmaWxsPSIjZmJhZTAwIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMjg4IiB3aWR0aD0iODYiIGhlaWdodD0iNiIgZmlsbD0iIzI0OGViZCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjI5NC41IiB3aWR0aD0iMTU4IiBoZWlnaHQ9IjYiIGZpbGw9IiM0MGE5ZmYiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxsaW5lIHgxPSI0MCIgeTE9IjMxIiB4Mj0iNDAiIHkyPSIzMDUiIGNsYXNzPSJsaW5lIj48L2xpbmU+CiAgPHRleHQgeD0iMzgiIHk9IjQ0LjUiIGNsYXNzPSJmb250IHM0IiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0iZW5kIj5jbGVhbiBpbnN0YWxsPC90ZXh0PgogIDx0ZXh0IHg9IjM4IiB5PSI3MC41IiBjbGFzcz0iZm9udCBzNCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9ImVuZCI+d2l0aCBjYWNoZTwvdGV4dD4KICA8dGV4dCB4PSIzOCIgeT0iNzQuNSIgY2xhc3M9ImZvbnQgczQiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJlbmQiPndpdGggbG9ja2ZpbGU8L3RleHQ+CiAgPHRleHQgeD0iMzgiIHk9Ijc4LjUiIGNsYXNzPSJmb250IHM0IiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0iZW5kIj53aXRoIG5vZGVfbW9kdWxlczwvdGV4dD4KICA8dGV4dCB4PSIzOCIgeT0iMTAyLjUiIGNsYXNzPSJmb250IHM0IiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0iZW5kIj53aXRoIGNhY2hlPC90ZXh0PgogIDx0ZXh0IHg9IjM4IiB5PSIxMDYuNSIgY2xhc3M9ImZvbnQgczQiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJlbmQiPndpdGggbG9ja2ZpbGU8L3RleHQ+CiAgPHRleHQgeD0iMzgiIHk9IjEzNC41IiBjbGFzcz0iZm9udCBzNCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9ImVuZCI+d2l0aCBjYWNoZTwvdGV4dD4KICA8dGV4dCB4PSIzOCIgeT0iMTY0LjUiIGNsYXNzPSJmb250IHM0IiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0iZW5kIj53aXRoIGxvY2tmaWxlPC90ZXh0PgogIDx0ZXh0IHg9IjM4IiB5PSIxOTIuNSIgY2xhc3M9ImZvbnQgczQiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJlbmQiPndpdGggY2FjaGU8L3RleHQ+CiAgPHRleHQgeD0iMzgiIHk9IjE5Ni41IiBjbGFzcz0iZm9udCBzNCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9ImVuZCI+d2l0aCBub2RlX21vZHVsZXM8L3RleHQ+CiAgPHRleHQgeD0iMzgiIHk9IjIyMi41IiBjbGFzcz0iZm9udCBzNCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9ImVuZCI+d2l0aCBub2RlX21vZHVsZXM8L3RleHQ+CiAgPHRleHQgeD0iMzgiIHk9IjIyNi41IiBjbGFzcz0iZm9udCBzNCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9ImVuZCI+d2l0aCBsb2NrZmlsZTwvdGV4dD4KICA8dGV4dCB4PSIzOCIgeT0iMjU0LjUiIGNsYXNzPSJmb250IHM0IiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0iZW5kIj53aXRoIG5vZGVfbW9kdWxlczwvdGV4dD4KICA8dGV4dCB4PSIzOCIgeT0iMjg0LjUiIGNsYXNzPSJmb250IHM0IiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0iZW5kIj51cGRhdGU8L3RleHQ+CiAgPHRleHQgeD0iMjkwIiB5PSIzMTciIGNsYXNzPSJmb250IHM0IHRleHQiIHRleHQtYW5jaG9yPSJlbmQiPlRlc3RzIHdlcmUgcnVuIHVzaW5nIE5vZGUuanMgdjE2LjEzLjIgYXQ6IEphbiAyNiwgMjAyMiwgMjo1MSBBTTwvdGV4dD4KPC9zdmc+Cg=="},7145:(I,i,e)=>{e.d(i,{Z:()=>t});const t=e.p+"assets/images/installation-stages-of-other-pms-0933800341e399b76e0d33b2a0c7a312.png"},5964:(I,i,e)=>{e.d(i,{Z:()=>t});const t=e.p+"assets/images/installation-stages-of-pnpm-92606757de93a7535153ade5a829dff4.jpg"}}]);