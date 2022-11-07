"use strict";(self.webpackChunkbeta_apier=self.webpackChunkbeta_apier||[]).push([[572],{3905:(n,e,t)=>{t.d(e,{Zo:()=>g,kt:()=>m});var r=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var l=r.createContext({}),p=function(n){var e=r.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},g=function(n){var e=p(n.components);return r.createElement(l.Provider,{value:e},n.children)},k={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,l=n.parentName,g=o(n,["components","mdxType","originalType","parentName"]),u=p(t),m=a,d=u["".concat(l,".").concat(m)]||u[m]||k[m]||i;return t?r.createElement(d,s(s({ref:e},g),{},{components:t})):r.createElement(d,s({ref:e},g))}));function m(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,s=new Array(i);s[0]=u;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=n,o.mdxType="string"==typeof n?n:a,s[1]=o;for(var p=2;p<i;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2074:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const i={},s="Endepunkter",o={unversionedId:"kravogbetalinger/endepunkter",id:"kravogbetalinger/endepunkter",title:"Endepunkter",description:"Oversikt",source:"@site/docs/kravogbetalinger/endepunkter.md",sourceDirName:"kravogbetalinger",slug:"/kravogbetalinger/endepunkter",permalink:"/beta-apier/kravogbetalinger/endepunkter",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Krav og Betalinger",permalink:"/beta-apier/kravogbetalinger/"},next:{title:"Skisser",permalink:"/beta-apier/kravogbetalinger/skisser"}},l={},p=[{value:"Oversikt",id:"oversikt",level:2},{value:"Format p\xe5 request",id:"format-p\xe5-request",level:3},{value:"Format p\xe5 respons",id:"format-p\xe5-respons",level:3},{value:"Krav",id:"krav",level:2},{value:"Format p\xe5 request",id:"format-p\xe5-request-1",level:3},{value:"Format p\xe5 respons",id:"format-p\xe5-respons-1",level:3},{value:"Innbetalinger",id:"innbetalinger",level:2},{value:"Format p\xe5 request",id:"format-p\xe5-request-2",level:3},{value:"Format p\xe5 respons",id:"format-p\xe5-respons-2",level:3},{value:"Utbetalinger",id:"utbetalinger",level:2},{value:"Format p\xe5 request",id:"format-p\xe5-request-3",level:3},{value:"Forel\xf8pig format p\xe5 respons",id:"forel\xf8pig-format-p\xe5-respons",level:3}],g={toc:p};function k(n){let{components:e,...t}=n;return(0,a.kt)("wrapper",(0,r.Z)({},g,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"endepunkter"},"Endepunkter"),(0,a.kt)("h2",{id:"oversikt"},"Oversikt"),(0,a.kt)("p",null,"Hent oversikt over \xe5pne krav og uplasserte innbetalinger."),(0,a.kt)("p",null,"Gj\xf8r oppslag mot reskontrosystemene p\xe5 \xe5pne krav og uplasserte innbetalinger og oppgir de samlet med en summert oversikt."),(0,a.kt)("h3",{id:"format-p\xe5-request"},"Format p\xe5 request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "partIdentifikator": "string"\n}\n')),(0,a.kt)("h3",{id:"format-p\xe5-respons"},"Format p\xe5 respons"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "partIdentifikator": "string",\n  "aapentKravMedGjenstaaendeBeloep": [\n    {\n      "partIdentifikator": "string",\n      "kravidentifikator": "string",\n      "kravbeskrivelse": "string",\n      "opprettelsesdatoForKrav": "2022-11-02T09:44:14.307Z",\n      "kravperiode": "string",\n      "opprinneligBeloep": 0,\n      "kravforfall": [\n        {\n          "forfallsdato": "2022-11-02T09:44:14.307Z",\n          "opprinneligBeloep": 0,\n          "gjenstaaendeBeloep": 0,\n          "plassertInnbetaling": [\n            {\n              "innbetalingsdato": "2022-11-02T09:44:14.307Z",\n              "innbetaltBeloep": 0,\n              "betaltFra": {\n                "kidnummer": "string",\n                "konto": {\n                  "bankinformasjon": "string",\n                  "kontoeiersNavn": "string",\n                  "kontonummer": "string",\n                  "iban": "string",\n                  "swiftBIC": "string"\n                }\n              },\n              "plassertBeloep": 0,\n              "plasseringsdato": "2022-11-02T09:44:14.307Z",\n              "innbetalingsIdentifikator": "string",\n              "innbetalingstype": "string"\n            }\n          ],\n          "plassertMotkrav": [\n            {\n              "motkravBeskrivelse": "string",\n              "motkravForfallsIdentifikator": "string",\n              "motkravForfallsdato": "2022-11-02T09:44:14.307Z",\n              "plassertBeloep": 0,\n              "plasseringsdato": "2022-11-02T09:44:14.307Z"\n            }\n          ],\n          "kravforfallsIdentifikator": "string",\n          "betalingsinformasjon": {\n            "kidnummer": "string",\n            "konto": {\n              "bankinformasjon": "string",\n              "kontoeiersNavn": "string",\n              "kontonummer": "string",\n              "iban": "string",\n              "swiftBIC": "string"\n            }\n          },\n          "utsattIverksettelse": true\n        }\n      ],\n      "gjenstaaendeBeloep": 0,\n      "stipulerteRenter": 0,\n      "kravtype": "string",\n      "kravgruppe": "string"\n    }\n  ],\n  "innbetalingMedUplassertBeloep": [\n    {\n      "partIdentifikator": "string",\n      "innbetalingsidentifikator": "string",\n      "innbetalingsdato": "2022-11-02T09:44:14.307Z",\n      "innbetaltBeloep": 0,\n      "plassertInnbetalingMotKrav": [\n        {\n          "dekketKrav": "string",\n          "kravforfallIdentifikator": "string",\n          "kravforfallsdato": "2022-11-02T09:44:14.307Z",\n          "plasseringsdato": "2022-11-02T09:44:14.307Z",\n          "plassertBeloep": 0,\n          "opprinneligKravforfallsbeloep": 0,\n          "gjenstaaendeKravforfallsbeloep": 0\n        }\n      ],\n      "uplassertBeloep": 0,\n      "betaltTilKonto": {\n        "bankinformasjon": "string",\n        "kontoeiersNavn": "string",\n        "kontonummer": "string",\n        "iban": "string",\n        "swiftBIC": "string"\n      },\n      "betaltFra": {\n        "kidnummer": "string",\n        "konto": {\n          "bankinformasjon": "string",\n          "kontoeiersNavn": "string",\n          "kontonummer": "string",\n          "iban": "string",\n          "swiftBIC": "string"\n        }\n      },\n      "innbetalingstype": "string"\n    }\n  ],\n  "totalOversikt": {\n    "sumStipulerteRenter": 0,\n    "sumForfalteKrav": 0,\n    "sumIkkeForfalteKrav": 0,\n    "sumUplasserteInnbetalinger": 0,\n    "saldo": 0\n  },\n  "oversiktPerKravgruppe": [\n    {\n      "kravgruppe": "string",\n      "sumStipulerteRenter": 0,\n      "sumForfalteKrav": 0,\n      "sumIkkeForfalteKrav": 0,\n      "saldo": 0\n    }\n  ]\n}\n')),(0,a.kt)("h2",{id:"krav"},"Krav"),(0,a.kt)("p",null,"Hent alle krav innen et gitt tidsrom."),(0,a.kt)("p",null,"Gj\xf8r oppslag mot reskontrosystemene p\xe5 alle krav innen et gitt tidsrom p\xe5 maks ett \xe5r."),(0,a.kt)("h3",{id:"format-p\xe5-request-1"},"Format p\xe5 request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "partIdentifikator": "string",\n  "periode": {\n    "start": "2022-11-02T09:49:08.429Z",\n    "slutt": "2022-11-02T09:49:08.429Z"\n  }\n}\n')),(0,a.kt)("h3",{id:"format-p\xe5-respons-1"},"Format p\xe5 respons"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "partIdentifikator": "string",\n  "periode": {\n    "start": "2022-11-02T09:49:08.430Z",\n    "slutt": "2022-11-02T09:49:08.430Z"\n  },\n  "krav": [\n    {\n      "partIdentifikator": "string",\n      "kravidentifikator": "string",\n      "kravbeskrivelse": "string",\n      "opprettelsesdatoForKrav": "2022-11-02T09:49:08.430Z",\n      "kravperiode": "string",\n      "opprinneligBeloep": 0,\n      "kravforfall": [\n        {\n          "forfallsdato": "2022-11-02T09:49:08.430Z",\n          "opprinneligBeloep": 0,\n          "gjenstaaendeBeloep": 0,\n          "plassertInnbetaling": [\n            {\n              "innbetalingsdato": "2022-11-02T09:49:08.430Z",\n              "innbetaltBeloep": 0,\n              "betaltFra": {\n                "kidnummer": "string",\n                "konto": {\n                  "bankinformasjon": "string",\n                  "kontoeiersNavn": "string",\n                  "kontonummer": "string",\n                  "iban": "string",\n                  "swiftBIC": "string"\n                }\n              },\n              "plassertBeloep": 0,\n              "plasseringsdato": "2022-11-02T09:49:08.430Z",\n              "innbetalingsIdentifikator": "string",\n              "innbetalingstype": "string"\n            }\n          ],\n          "plassertMotkrav": [\n            {\n              "motkravBeskrivelse": "string",\n              "motkravForfallsIdentifikator": "string",\n              "motkravForfallsdato": "2022-11-02T09:49:08.430Z",\n              "plassertBeloep": 0,\n              "plasseringsdato": "2022-11-02T09:49:08.430Z"\n            }\n          ],\n          "kravforfallsIdentifikator": "string",\n          "betalingsinformasjon": {\n            "kidnummer": "string",\n            "konto": {\n              "bankinformasjon": "string",\n              "kontoeiersNavn": "string",\n              "kontonummer": "string",\n              "iban": "string",\n              "swiftBIC": "string"\n            }\n          },\n          "utsattIverksettelse": true\n        }\n      ],\n      "gjenstaaendeBeloep": 0,\n      "stipulerteRenter": 0,\n      "kravtype": "string",\n      "kravgruppe": "string"\n    }\n  ]\n}\n')),(0,a.kt)("h2",{id:"innbetalinger"},"Innbetalinger"),(0,a.kt)("p",null,"Hent alle innbetalinger innen et gitt tidsrom."),(0,a.kt)("p",null,"Gj\xf8r oppslag mot reskontrosystemene p\xe5 alle innbetalinger innen et gitt tidsrom p\xe5 maks ett \xe5r."),(0,a.kt)("h3",{id:"format-p\xe5-request-2"},"Format p\xe5 request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "partIdentifikator": "string",\n  "periode": {\n    "start": "2022-11-02T09:50:00.387Z",\n    "slutt": "2022-11-02T09:50:00.387Z"\n  }\n}\n')),(0,a.kt)("h3",{id:"format-p\xe5-respons-2"},"Format p\xe5 respons"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "partIdentifikator": "string",\n  "periode": {\n    "start": "2022-11-02T09:50:00.388Z",\n    "slutt": "2022-11-02T09:50:00.388Z"\n  },\n  "innbetaling": [\n    {\n      "partIdentifikator": "string",\n      "innbetalingsidentifikator": "string",\n      "innbetalingsdato": "2022-11-02T09:50:00.388Z",\n      "innbetaltBeloep": 0,\n      "plassertInnbetalingMotKrav": [\n        {\n          "dekketKrav": "string",\n          "kravforfallIdentifikator": "string",\n          "kravforfallsdato": "2022-11-02T09:50:00.388Z",\n          "plasseringsdato": "2022-11-02T09:50:00.388Z",\n          "plassertBeloep": 0,\n          "opprinneligKravforfallsbeloep": 0,\n          "gjenstaaendeKravforfallsbeloep": 0\n        }\n      ],\n      "uplassertBeloep": 0,\n      "betaltTilKonto": {\n        "bankinformasjon": "string",\n        "kontoeiersNavn": "string",\n        "kontonummer": "string",\n        "iban": "string",\n        "swiftBIC": "string"\n      },\n      "betaltFra": {\n        "kidnummer": "string",\n        "konto": {\n          "bankinformasjon": "string",\n          "kontoeiersNavn": "string",\n          "kontonummer": "string",\n          "iban": "string",\n          "swiftBIC": "string"\n        }\n      },\n      "innbetalingstype": "string"\n    }\n  ]\n}\n')),(0,a.kt)("h2",{id:"utbetalinger"},"Utbetalinger"),(0,a.kt)("p",null,"Denne tjenesten er enn\xe5 ikke tilgjengelig for bruk."),(0,a.kt)("p",null,"Gj\xf8r oppslag mot reskontrosystemene p\xe5 alle utbetalinger innen et gitt tidsrom p\xe5 maks ett \xe5r."),(0,a.kt)("h3",{id:"format-p\xe5-request-3"},"Format p\xe5 request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "partIdentifikator": "string",\n  "periode": {\n    "start": "2022-11-02T09:50:38.412Z",\n    "slutt": "2022-11-02T09:50:38.412Z"\n  }\n}\n')),(0,a.kt)("h3",{id:"forel\xf8pig-format-p\xe5-respons"},"Forel\xf8pig format p\xe5 respons"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "partIdentifikator": "string",\n  "periode": {\n    "start": "2022-11-02T09:50:38.414Z",\n    "slutt": "2022-11-02T09:50:38.414Z"\n  },\n  "utbetaling": [\n    {\n      "partIdentifikator": "string",\n      "utbetalingsbeskrivelse": "string",\n      "utbetaltdato": "2022-11-02T09:50:38.414Z",\n      "utbetaltBeloep": 0,\n      "betaltTil": {\n        "kidnummer": "string",\n        "konto": {\n          "bankinformasjon": "string",\n          "kontoeiersNavn": "string",\n          "kontonummer": "string",\n          "iban": "string",\n          "swiftBIC": "string"\n        }\n      },\n      "utbetalingIdentifikator": "string",\n      "grunnlagForUtbetaling": [\n        {\n          "dekketKrav": "string",\n          "kravIdentifikator": "string",\n          "kravtype": "string",\n          "kravperiode": {\n            "start": "2022-11-02T09:50:38.414Z",\n            "slutt": "2022-11-02T09:50:38.414Z"\n          },\n          "opprinneligBeloep": 0,\n          "gjenstaaendeBeloep": 0\n        }\n      ]\n    }\n  ]\n}\n')))}k.isMDXComponent=!0}}]);