import{r as b,ae as K,af as q,ag as G,ah as X,ai as Y,aj as V,ak as Z,al as _,am as ee,t as w,j as h,I as ne,A as te,B as P,D as A,H as ae,E as re,L as oe,a as C,b as B,c as H,an as se,f as ie}from"./index-8aad3025.js";function ce(){if(console&&console.warn){for(var n,e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];typeof t[0]=="string"&&(t[0]="react-i18next:: ".concat(t[0])),(n=console).warn.apply(n,t)}}var R={};function E(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];typeof e[0]=="string"&&R[e[0]]||(typeof e[0]=="string"&&(R[e[0]]=new Date),ce.apply(void 0,e))}var J=function(e,t){return function(){if(e.isInitialized)t();else{var a=function s(){setTimeout(function(){e.off("initialized",s)},0),t()};e.on("initialized",a)}}};function D(n,e,t){n.loadNamespaces(e,J(n,t))}function U(n,e,t,a){typeof t=="string"&&(t=[t]),t.forEach(function(s){n.options.ns.indexOf(s)<0&&n.options.ns.push(s)}),n.loadLanguages(e,J(n,a))}function ue(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.languages[0],s=e.options?e.options.fallbackLng:!1,u=e.languages[e.languages.length-1];if(a.toLowerCase()==="cimode")return!0;var r=function(o,c){var f=e.services.backendConnector.state["".concat(o,"|").concat(c)];return f===-1||f===2};return t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!r(e.isLanguageChangingTo,n)?!1:!!(e.hasResourceBundle(a,n)||!e.services.backendConnector.backend||e.options.resources&&!e.options.partialBundledLanguages||r(a,n)&&(!s||r(u,n)))}function le(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!e.languages||!e.languages.length)return E("i18n.languages were undefined or empty",e.languages),!0;var a=e.options.ignoreJSONStructure!==void 0;return a?e.hasLoadedNamespace(n,{lng:t.lng,precheck:function(u,r){if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&u.services.backendConnector.backend&&u.isLanguageChangingTo&&!r(u.isLanguageChangingTo,n))return!1}}):ue(n,e,t)}var fe=b.createContext(),de=function(){function n(){q(this,n),this.usedNamespaces={}}return K(n,[{key:"addUsedNamespaces",value:function(t){var a=this;t.forEach(function(s){a.usedNamespaces[s]||(a.usedNamespaces[s]=!0)})}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),n}();function ge(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var a,s,u,r,l=[],o=!0,c=!1;try{if(u=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;o=!1}else for(;!(o=(a=u.call(t)).done)&&(l.push(a.value),l.length!==e);o=!0);}catch(f){c=!0,s=f}finally{try{if(!o&&t.return!=null&&(r=t.return(),Object(r)!==r))return}finally{if(c)throw s}}return l}}function pe(n,e){return G(n)||ge(n,e)||X(n,e)||Y()}function Q(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),t.push.apply(t,a)}return t}function k(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Q(Object(t),!0).forEach(function(a){Z(n,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Q(Object(t)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(t,a))})}return n}var me=function(e,t){var a=b.useRef();return b.useEffect(function(){a.current=t?a.current:e},[e,t]),a.current};function he(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.i18n,a=b.useContext(fe)||{},s=a.i18n,u=a.defaultNS,r=t||s||_();if(r&&!r.reportNamespaces&&(r.reportNamespaces=new de),!r){E("You will need to pass in an i18next instance by using initReactI18next");var l=function(v,p){return typeof p=="string"?p:p&&ee(p)==="object"&&typeof p.defaultValue=="string"?p.defaultValue:Array.isArray(v)?v[v.length-1]:v},o=[l,{},!1];return o.t=l,o.i18n={},o.ready=!1,o}r.options.react&&r.options.react.wait!==void 0&&E("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var c=k(k(k({},V()),r.options.react),e),f=c.useSuspense,x=c.keyPrefix,i=n||u||r.options&&r.options.defaultNS;i=typeof i=="string"?[i]:i||["translation"],r.reportNamespaces.addUsedNamespaces&&r.reportNamespaces.addUsedNamespaces(i);var d=(r.isInitialized||r.initializedStoreOnce)&&i.every(function(m){return le(m,r,c)});function g(){return r.getFixedT(e.lng||null,c.nsMode==="fallback"?i:i[0],x)}var L=b.useState(g),S=pe(L,2),F=S[0],O=S[1],j=i.join();e.lng&&(j="".concat(e.lng).concat(j));var M=me(j),N=b.useRef(!0);b.useEffect(function(){var m=c.bindI18n,v=c.bindI18nStore;N.current=!0,!d&&!f&&(e.lng?U(r,e.lng,i,function(){N.current&&O(g)}):D(r,i,function(){N.current&&O(g)})),d&&M&&M!==j&&N.current&&O(g);function p(){N.current&&O(g)}return m&&r&&r.on(m,p),v&&r&&r.store.on(v,p),function(){N.current=!1,m&&r&&m.split(" ").forEach(function(z){return r.off(z,p)}),v&&r&&v.split(" ").forEach(function(z){return r.store.off(z,p)})}},[r,j]);var $=b.useRef(!0);b.useEffect(function(){N.current&&!$.current&&O(g),$.current=!1},[r,x]);var I=[F,r,d];if(I.t=F,I.i18n=r,I.ready=d,d||!d&&!f)return I;throw new Promise(function(m){e.lng?U(r,e.lng,i,function(){return m()}):D(r,i,function(){return m()})})}const ve=(n,e,t)=>{if(e&&t)return{width:t,height:e};switch(n){case"XS":return{width:12,height:12};default:case"S":return{width:16,height:16};case"M":return{width:32,height:32};case"L":return{width:96,height:96}}},ye=({color:n,iconSize:e="S",viewbox:t="0 0 16 16",height:a,width:s,semantic:u,inverted:r=!1,svgProps:l,...o})=>{var c,f;const x=g=>{var L,S;return((S=(L=w)==null?void 0:L.colors)==null?void 0:S[g])||g},i=typeof n=="string"&&[x(n)]||Array.isArray(n)&&((c=n.map)==null?void 0:c.call(n,x))||[w.colors.secondary];u&&(i[0]=((f=w.colors)==null?void 0:f[u])||i[0]),r&&i[1]&&(i[1]=i[0],i[0]="none");const d=ve(e,a,s);return h(ne,{iconSize:e??"S",name:"Info",...o,children:h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:t,height:d.height,width:d.width,focusable:!1,...l,children:h("path",{fill:i[0],className:"color0",d:"M8 16a8 8 0 1 1 8-8 8 8 0 0 1-8 8zM8 1a6.957 6.957 0 0 0-7 6.91373Q.99973 7.95687 1 8a6.957 6.957 0 0 0 6.91373 7q.04314.00027.08627 0a6.957 6.957 0 0 0 7-6.91373Q15.00027 8.04313 15 8a6.957 6.957 0 0 0-6.91373-7Q8.04313.99973 8 1zm-.5 11h1V6h-1zm0-7h1V4h-1z"})})})},be=ye,we=["root","container","containerMessageOnly","iconContainer","titleContainer","textContainer","messageContainer","actionContainer"],Ce=te(we,"HvEmptyState"),y=Ce;function T(){return T=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n},T.apply(this,arguments)}const xe=P("div",{target:"e1r2ohw13"})({name:"zcbaso",styles:"width:100%;height:100%;display:flex;justify-content:center"}),Ne=P("div",T({},{target:"e1r2ohw12"},A))(({$messageOnly:n,$breakpoints:e})=>({display:"flex",flexDirection:"row",[e.only("xs")]:{flexDirection:"column",alignItems:"center",textAlign:"center"},...n&&{alignItems:"center",[e.only("xs")]:{flexDirection:"row"},[`& .${y.textContainer}`]:{marginLeft:0}}}),""),Se=P("div",T({},{target:"e1r2ohw11"},A))(({$breakpoints:n})=>({background:"transparent",maxWidth:"510px",overflow:"hidden",[n.up("sm")]:{marginLeft:w.space.xs},"& a":{color:w.colors.primary,textDecoration:"none"}}),""),Oe=P(ae,T({},{target:"e1r2ohw10"},A))(({$type:n})=>({...n==="title"&&{marginTop:w.emptyState.titleMarginTop,marginBottom:w.space.sm},...n==="action"&&{marginTop:w.space.sm}}),""),je=n=>{const{activeTheme:e}=re(),t=oe(),a=(x,i,d,g)=>d&&h(Oe,{$type:x,variant:i,className:g,children:d}),{action:s,icon:u,title:r,message:l,classes:o,className:c,...f}=n;return h(xe,{className:C(c,y.root,o==null?void 0:o.root),...f,children:B(Ne,{className:C(y.container,o==null?void 0:o.container,!!(l&&!(r||s))&&C(y.containerMessageOnly,o==null?void 0:o.containerMessageOnly)),$breakpoints:t.breakpoints,$messageOnly:!!(l&&!(r||s)),children:[h("div",{className:C(y.iconContainer,o==null?void 0:o.iconContainer),children:u}),B(Se,{$breakpoints:t.breakpoints,className:C(y.textContainer,o==null?void 0:o.textContainer),children:[a("title",e==null?void 0:e.emptyState.titleVariant,r,C(y.titleContainer,o==null?void 0:o.titleContainer)),a("message","body",l,C(y.messageContainer,o==null?void 0:o.messageContainer)),a("action","body",s,C(y.actionContainer,o==null?void 0:o.actionContainer))]})]})})},W={root:H({height:`calc(100vh - ${w.header.height})`},"",""),empty:H({name:"1h3rtzg",styles:"align-items:center"})},Ie=()=>{const{t:n}=he("common"),e=se();return h("div",{className:W.root,children:h(je,{className:W.empty,title:n("notFound.title"),message:n("notFound.message"),icon:h(be,{}),action:h(ie,{variant:"primaryGhost",onClick:()=>e(-1),children:n("notFound.action")})})})},Le=Ie;export{Le as default};