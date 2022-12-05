"use strict";(self.webpackChunkbeta_apier=self.webpackChunkbeta_apier||[]).push([[209],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),g=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=g(e.components);return r.createElement(s.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),v=g(n),d=a,m=v["".concat(s,".").concat(d)]||v[d]||k[d]||i;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=v;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var g=2;g<i;g++)l[g]=n[g];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},8309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>g});var r=n(7462),a=(n(7294),n(3905));const i={},l="Krav og Betalinger",o={unversionedId:"kravogbetalinger/index",id:"kravogbetalinger/index",title:"Krav og Betalinger",description:"Om tjenesten",source:"@site/docs/kravogbetalinger/index.md",sourceDirName:"kravogbetalinger",slug:"/kravogbetalinger/",permalink:"/beta-apier/kravogbetalinger/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Skisser",permalink:"/beta-apier/kalendertjenester/skisser"},next:{title:"Tilgang til tjenesten",permalink:"/beta-apier/kravogbetalinger/tilgang"}},s={},g=[{value:"Om tjenesten",id:"om-tjenesten",level:2},{value:"Tidsplan",id:"tidsplan",level:2},{value:"Oppf\xf8lging og st\xf8tte",id:"oppf\xf8lging-og-st\xf8tte",level:2}],p={toc:g};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"krav-og-betalinger"},"Krav og Betalinger"),(0,a.kt)("h2",{id:"om-tjenesten"},"Om tjenesten"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Krav og betalinger")," er en tjeneste vi tilbyr til regnskapssystemer og banker hvor vi via APIer tilgjengeliggj\xf8r alle krav Skatteetaten har til den n\xe6ringsdrivende. Form\xe5let er at regnskapssystemer og banker kan utvikle og tilgjengeliggj\xf8re en oversikt i sine flater som vil gi den n\xe6ringsdrivende en bedre oversikt over sine n\xe5v\xe6rende og fremtidige krav og dermed enklere kan h\xe5ndtere og f\xf8lge opp disse."),(0,a.kt)("p",null,"M\xe5lgruppen er i f\xf8rste omgang enkeltpersonsforetak og sm\xe5 og mellomstore AS med og uten regnskapsf\xf8rer."),(0,a.kt)("p",null,"F\xf8rste versjon av ",(0,a.kt)("strong",{parentName:"p"},"krav og betalinger")," vil inneholde alle krav, alle \xe5pne krav, alle innbetalinger og uplasserte innbetalinger. I tillegg vil det f\xf8lge betalingsinformasjon s\xe5 den n\xe6ringsdrivende kan betale sine krav l\xf8pende."),(0,a.kt)("p",null,"I neste versjon vil vi utvide med informasjon om utbetaling, samt merking av krav som er utsatt og andre mindre endringer."),(0,a.kt)("p",null,"Dersom du \xf8nsker \xe5 ta i bruk ",(0,a.kt)("strong",{parentName:"p"},"krav og betalinger")," i ditt system eller har sp\xf8rsm\xe5l knyttet til dette, ta kontakt med ",(0,a.kt)("a",{parentName:"p",href:"mailto:fremtidensinnkreving@skatteetaten.no"},"fremtidensinnkreving@skatteetaten.no"),"."),(0,a.kt)("h2",{id:"tidsplan"},"Tidsplan"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Desember 2022"),": Tilgjengeliggj\xf8ring av dokumentasjon"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Primo 2023"),": V\xe5re systemer \xe5pner for at eksterne leverand\xf8rer skal kunne starte utvikling og test p\xe5 f\xf8rste versjon av ",(0,a.kt)("strong",{parentName:"p"},"krav og betalinger"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Medio 2023"),": Skatteetaten \xe5pner for pilotering av f\xf8rste versjon av ",(0,a.kt)("strong",{parentName:"p"},"krav og betalinger")," i samarbeid med enkelte leverand\xf8rer. Etter endt pilotperiode vil det bli besluttet videre l\xf8p for utrulling til flere leverand\xf8rer og banker."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Medio 2023"),": Planlagte utvidelser av ",(0,a.kt)("strong",{parentName:"p"},"krav og betalinger"),"."),(0,a.kt)("h2",{id:"oppf\xf8lging-og-st\xf8tte"},"Oppf\xf8lging og st\xf8tte"),(0,a.kt)("p",null,"I testfasen vil vi tilby st\xf8tte til de eksterne leverand\xf8rene gjennom utvikling og test."),(0,a.kt)("p",null,"I pilotfasen vil vi tilby informasjon og eventuell oppl\xe6ring til leverand\xf8renes kundesenter for \xe5 hjelpe dem \xe5 h\xe5ndtere og rute videre henvendelser til riktig kanal inn mot Skatteetaten."),(0,a.kt)("p",null,"Mer informasjon kommer her."),(0,a.kt)("p",null,"I mellomtiden \u2013 ta kontakt med ",(0,a.kt)("a",{parentName:"p",href:"mailto:fremtidensinnkreving@skatteetaten.no"},"fremtidensinnkreving@skatteetaten.no"),"."))}k.isMDXComponent=!0}}]);