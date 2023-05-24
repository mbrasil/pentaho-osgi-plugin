import{t as l,j as a,I as We,q as re,s as mt,u as fe,v as y,w as F,r as d,x as Ct,a as i,y as Nt,z as yt,A as Ve,B as L,C as Pe,D as Q,b as R,f as zt,E as Ot,G as _t,F as de,J as lt,K as it,c as ae,H as N}from"./index-8aad3025.js";import{H as _,a as Ke}from"./GlobalActions-f62b8fbf.js";import{i as xt,B as st,j as Pt,H as Ue,u as Ft,h as Wt,f as Vt,a as Kt,b as ct,d as Ut,e as qt,c as Gt,g as Xt}from"./usePagination-2550947f.js";import{g as $t,u as Jt,C as Yt,b as Zt,c as Qt,d as eo,e as to,f as G,h as oo,i as It,l as kt,a as ao,j as ro,s as dt,k as Oe,v as Ie,D as no,m as lo,n as io,o as Z}from"./Input-fa4742f3.js";import{H as _e}from"./SimpleGrid-11cd7f5b.js";import{a as so,H as co}from"./TextArea-e45ce3cd.js";const uo=(e,t,o)=>{if(t&&o)return{width:o,height:t};switch(e){case"XS":return{width:12,height:12};default:case"S":return{width:16,height:16};case"M":return{width:32,height:32};case"L":return{width:96,height:96}}},po=({color:e,iconSize:t="S",viewbox:o="0 0 16 16",height:r,width:n,semantic:s,inverted:b=!1,svgProps:u,...m})=>{var C,S;const x=g=>{var $,I;return((I=($=l)==null?void 0:$.colors)==null?void 0:I[g])||g},p=typeof e=="string"&&[x(e)]||Array.isArray(e)&&((C=e.map)==null?void 0:C.call(e,x))||[l.colors.secondary];s&&(p[0]=((S=l.colors)==null?void 0:S[s])||p[0]),b&&p[1]&&(p[1]=p[0],p[0]="none");const w=uo(t,r,n);return a(We,{iconSize:t??"S",name:"Bottom",...m,children:a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:o,height:w.height,width:w.width,focusable:!1,...u,children:a("path",{fill:p[0],className:"color0",d:"M8 15.85.3 8.25l.7-.8 6.5 6.5V.15h1v13.79989l6.5-6.5.7.80005z"})})})},go=po,vo=(e,t,o)=>{if(t&&o)return{width:o,height:t};switch(e){case"XS":return{width:12,height:12};default:case"S":return{width:16,height:16};case"M":return{width:32,height:32};case"L":return{width:96,height:96}}},ho=({color:e,iconSize:t="S",viewbox:o="0 0 16 16",height:r,width:n,semantic:s,inverted:b=!1,svgProps:u,...m})=>{var C,S;const x=g=>{var $,I;return((I=($=l)==null?void 0:$.colors)==null?void 0:I[g])||g},p=typeof e=="string"&&[x(e)]||Array.isArray(e)&&((C=e.map)==null?void 0:C.call(e,x))||[l.colors.secondary];s&&(p[0]=((S=l.colors)==null?void 0:S[s])||p[0]),b&&p[1]&&(p[1]=p[0],p[0]="none");const w=vo(t,r,n);return a(We,{iconSize:t??"S",name:"Top",...m,children:a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:o,height:w.height,width:w.width,focusable:!1,...u,children:a("path",{fill:p[0],className:"color0",d:"m15 8.54993-6.5-6.5V15.85h-1V2.05005l-6.5 6.5L.3 7.75 8 .15l7.7 7.6z"})})})},fo=ho,bo=(e,t,o)=>{if(t&&o)return{width:o,height:t};switch(e){case"XS":return{width:12,height:12};default:case"S":return{width:16,height:16};case"M":return{width:32,height:32};case"L":return{width:96,height:96}}},mo=({color:e,iconSize:t="S",viewbox:o="0 0 16 16",height:r,width:n,semantic:s,inverted:b=!1,svgProps:u,...m})=>{var C,S;const x=g=>{var $,I;return((I=($=l)==null?void 0:$.colors)==null?void 0:I[g])||g},p=typeof e=="string"&&[x(e)]||Array.isArray(e)&&((C=e.map)==null?void 0:C.call(e,x))||[l.colors.secondary];s&&(p[0]=((S=l.colors)==null?void 0:S[s])||p[0]),b&&p[1]&&(p[1]=p[0],p[0]="none");const w=bo(t,r,n);return a(We,{iconSize:t??"S",name:"User",...m,children:a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:o,height:w.height,width:w.width,focusable:!1,...u,children:a("path",{fill:p[0],className:"color0",d:"M9.6 8.7A4.49656 4.49656 0 0 0 8.03809 0Q8.019-.00007 8 0a4.481 4.481 0 0 0-4.5 4.46194q-.00009.019 0 .03808A4.563 4.563 0 0 0 6.4 8.7 7.687 7.687 0 0 0 .5 16h1a6.487 6.487 0 0 1 6.474-6.5H8a6.487 6.487 0 0 1 6.5 6.474V16h1a7.493 7.493 0 0 0-5.9-7.3zM4.5 4.5A3.543 3.543 0 0 1 8 1a3.543 3.543 0 0 1 3.5 3.5A3.543 3.543 0 0 1 8 8a3.543 3.543 0 0 1-3.5-3.5z"})})})},Co=mo,yo=xt(re("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");function xo(e){return mt("MuiChip",e)}const $o=$t("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),h=$o,Io=e=>{const{classes:t,disabled:o,size:r,color:n,iconColor:s,onDelete:b,clickable:u,variant:m}=e,C={root:["root",m,o&&"disabled",`size${y(r)}`,`color${y(n)}`,u&&"clickable",u&&`clickableColor${y(n)}`,b&&"deletable",b&&`deletableColor${y(n)}`,`${m}${y(n)}`],label:["label",`label${y(r)}`],avatar:["avatar",`avatar${y(r)}`,`avatarColor${y(n)}`],icon:["icon",`icon${y(r)}`,`iconColor${y(s)}`],deleteIcon:["deleteIcon",`deleteIcon${y(r)}`,`deleteIconColor${y(n)}`,`deleteIcon${y(m)}Color${y(n)}`]};return yt(C,xo,t)},ko=fe("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e,{color:r,iconColor:n,clickable:s,onDelete:b,size:u,variant:m}=o;return[{[`& .${h.avatar}`]:t.avatar},{[`& .${h.avatar}`]:t[`avatar${y(u)}`]},{[`& .${h.avatar}`]:t[`avatarColor${y(r)}`]},{[`& .${h.icon}`]:t.icon},{[`& .${h.icon}`]:t[`icon${y(u)}`]},{[`& .${h.icon}`]:t[`iconColor${y(n)}`]},{[`& .${h.deleteIcon}`]:t.deleteIcon},{[`& .${h.deleteIcon}`]:t[`deleteIcon${y(u)}`]},{[`& .${h.deleteIcon}`]:t[`deleteIconColor${y(r)}`]},{[`& .${h.deleteIcon}`]:t[`deleteIcon${y(m)}Color${y(r)}`]},t.root,t[`size${y(u)}`],t[`color${y(r)}`],s&&t.clickable,s&&r!=="default"&&t[`clickableColor${y(r)})`],b&&t.deletable,b&&r!=="default"&&t[`deletableColor${y(r)}`],t[m],t[`${m}${y(r)}`]]}})(({theme:e,ownerState:t})=>{const o=e.palette.mode==="light"?e.palette.grey[700]:e.palette.grey[300];return{maxWidth:"100%",fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(e.vars||e).palette.text.primary,backgroundColor:(e.vars||e).palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${h.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${h.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:e.vars?e.vars.palette.Chip.defaultAvatarColor:o,fontSize:e.typography.pxToRem(12)},[`& .${h.avatarColorPrimary}`]:{color:(e.vars||e).palette.primary.contrastText,backgroundColor:(e.vars||e).palette.primary.dark},[`& .${h.avatarColorSecondary}`]:{color:(e.vars||e).palette.secondary.contrastText,backgroundColor:(e.vars||e).palette.secondary.dark},[`& .${h.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)},[`& .${h.icon}`]:{marginLeft:5,marginRight:-6,...t.size==="small"&&{fontSize:18,marginLeft:4,marginRight:-4},...t.iconColor===t.color&&{color:e.vars?e.vars.palette.Chip.defaultIconColor:o,...t.color!=="default"&&{color:"inherit"}}},[`& .${h.deleteIcon}`]:{WebkitTapHighlightColor:"transparent",color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.26)`:F(e.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.4)`:F(e.palette.text.primary,.4)},...t.size==="small"&&{fontSize:16,marginRight:4,marginLeft:-4},...t.color!=="default"&&{color:e.vars?`rgba(${e.vars.palette[t.color].contrastTextChannel} / 0.7)`:F(e.palette[t.color].contrastText,.7),"&:hover, &:active":{color:(e.vars||e).palette[t.color].contrastText}}},...t.size==="small"&&{height:24},...t.color!=="default"&&{backgroundColor:(e.vars||e).palette[t.color].main,color:(e.vars||e).palette[t.color].contrastText},...t.onDelete&&{[`&.${h.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:F(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},...t.onDelete&&t.color!=="default"&&{[`&.${h.focusVisible}`]:{backgroundColor:(e.vars||e).palette[t.color].dark}}}},({theme:e,ownerState:t})=>({...t.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:F(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)},[`&.${h.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:F(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},"&:active":{boxShadow:(e.vars||e).shadows[1]}},...t.clickable&&t.color!=="default"&&{[`&:hover, &.${h.focusVisible}`]:{backgroundColor:(e.vars||e).palette[t.color].dark}}}),({theme:e,ownerState:t})=>({...t.variant==="outlined"&&{backgroundColor:"transparent",border:e.vars?`1px solid ${e.vars.palette.Chip.defaultBorder}`:`1px solid ${e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[700]}`,[`&.${h.clickable}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${h.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`& .${h.avatar}`]:{marginLeft:4},[`& .${h.avatarSmall}`]:{marginLeft:2},[`& .${h.icon}`]:{marginLeft:4},[`& .${h.iconSmall}`]:{marginLeft:2},[`& .${h.deleteIcon}`]:{marginRight:5},[`& .${h.deleteIconSmall}`]:{marginRight:3}},...t.variant==="outlined"&&t.color!=="default"&&{color:(e.vars||e).palette[t.color].main,border:`1px solid ${e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.7)`:F(e.palette[t.color].main,.7)}`,[`&.${h.clickable}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:F(e.palette[t.color].main,e.palette.action.hoverOpacity)},[`&.${h.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.focusOpacity})`:F(e.palette[t.color].main,e.palette.action.focusOpacity)},[`& .${h.deleteIcon}`]:{color:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.7)`:F(e.palette[t.color].main,.7),"&:hover, &:active":{color:(e.vars||e).palette[t.color].main}}}})),So=fe("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,t)=>{const{ownerState:o}=e,{size:r}=o;return[t.label,t[`label${y(r)}`]]}})(({ownerState:e})=>({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap",...e.size==="small"&&{paddingLeft:8,paddingRight:8}}));function ut(e){return e.key==="Backspace"||e.key==="Delete"}const wo=d.forwardRef(function(t,o){const r=Ct({props:t,name:"MuiChip"}),{avatar:n,className:s,clickable:b,color:u="default",component:m,deleteIcon:C,disabled:S=!1,icon:x,label:p,onClick:w,onDelete:g,onKeyDown:$,onKeyUp:I,size:O="medium",variant:B="filled",tabIndex:z,skipFocusWhenDisabled:P=!1,...X}=r,H=d.useRef(null),V=Jt(H,o),K=E=>{E.stopPropagation(),g&&g(E)},ue=E=>{E.currentTarget===E.target&&ut(E)&&E.preventDefault(),$&&$(E)},Ee=E=>{E.currentTarget===E.target&&(g&&ut(E)?g(E):E.key==="Escape"&&H.current&&H.current.blur()),I&&I(E)},j=b!==!1&&w?!0:b,ee=j||g?st:m||"div",le={...r,component:ee,disabled:S,size:O,color:u,iconColor:d.isValidElement(x)&&x.props.color||u,onDelete:!!g,clickable:j,variant:B},D=Io(le),be=ee===st?{component:m||"div",focusVisibleClassName:D.focusVisible,...g&&{disableRipple:!0}}:{};let me=null;g&&(me=C&&d.isValidElement(C)?d.cloneElement(C,{className:i(C.props.className,D.deleteIcon),onClick:K}):re(yo,{className:i(D.deleteIcon),onClick:K}));let te=null;n&&d.isValidElement(n)&&(te=d.cloneElement(n,{className:i(D.avatar,n.props.className)}));let Ce=null;return x&&d.isValidElement(x)&&(Ce=d.cloneElement(x,{className:i(D.icon,x.props.className)})),Nt(ko,{as:ee,className:i(D.root,s),disabled:j&&S?!0:void 0,onClick:w,onKeyDown:ue,onKeyUp:Ee,ref:V,tabIndex:P&&S?-1:z,ownerState:le,...be,...X,children:[te||Ce,re(So,{className:i(D.label),ownerState:le,children:p}),me]})}),Ro=wo,Ho=xt(re("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function Lo(e){return mt("MuiAvatar",e)}$t("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const To=e=>{const{classes:t,variant:o,colorDefault:r}=e;return yt({root:["root",o,r&&"colorDefault"],img:["img"],fallback:["fallback"]},Lo,t)},Eo=fe("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],o.colorDefault&&t.colorDefault]}})(({theme:e,ownerState:t})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",...t.variant==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius},...t.variant==="square"&&{borderRadius:0},...t.colorDefault&&{color:(e.vars||e).palette.background.default,...e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[600]}}})),Ao=fe("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),Bo=fe(Ho,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"});function Do({crossOrigin:e,referrerPolicy:t,src:o,srcSet:r}){const[n,s]=d.useState(!1);return d.useEffect(()=>{if(!o&&!r)return;s(!1);let b=!0;const u=new Image;return u.onload=()=>{b&&s("loaded")},u.onerror=()=>{b&&s("error")},u.crossOrigin=e,u.referrerPolicy=t,u.src=o,r&&(u.srcset=r),()=>{b=!1}},[e,t,o,r]),n}const jo=d.forwardRef(function(t,o){const r=Ct({props:t,name:"MuiAvatar"}),{alt:n,children:s,className:b,component:u="div",imgProps:m,sizes:C,src:S,srcSet:x,variant:p="circular",...w}=r;let g=null;const $=Do({...m,src:S,srcSet:x}),I=S||x,O=I&&$!=="error",B={...r,colorDefault:!O,component:u,variant:p},z=To(B);return O?g=re(Ao,{alt:n,src:S,srcSet:x,sizes:C,ownerState:B,className:z.img,...m}):s!=null?g=s:I&&n?g=n[0]:g=re(Bo,{ownerState:B,className:z.fallback}),re(Eo,{as:u,ownerState:B,className:i(z.root,b),ref:o,...w,children:g})}),Mo=jo,No=["root","container","img","fallback","badge","avatar","status","xs","sm","md","lg","xl","circular","square"],zo=Ve(No,"HvAvatar"),W=zo;function Fe(){return Fe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},Fe.apply(this,arguments)}const Se={container:"32px",avatar:"24px"},we={container:"40px",avatar:"32px"},Re={container:"48px",avatar:"40px"},He={container:"60px",avatar:"52px"},Le={container:"96px",avatar:"88px"},Oo=L("div",{target:"e1sw81qd4"})({"&:focus-visible":{...Pe,borderRadius:0}},""),_o=L("img",{target:"e1sw81qd3"})({name:"p646uu",styles:"width:100%;height:100%;text-align:center;object-fit:cover;color:transparent;text-indent:10000px"}),Po=L("div",Fe({},{target:"e1sw81qd2"},Q))(({$variant:e,$size:t})=>({display:"flex",alignItems:"center",justifyContent:"center",position:"relative",...e==="circular"&&{borderRadius:"50%"},...t==="xs"&&{width:Se.container,height:Se.container},...t==="sm"&&{width:we.container,height:we.container},...t==="md"&&{width:Re.container,height:Re.container},...t==="lg"&&{width:He.container,height:He.container},...t==="xl"&&{width:Le.container,height:Le.container}}),""),Fo=L(Mo,{target:"e1sw81qd1"})(({component:e,size:t})=>({fontSize:"1rem",...t==="xs"&&{width:Se.avatar,height:Se.avatar,fontSize:"0.5rem"},...t==="sm"&&{width:we.avatar,height:we.avatar,fontSize:"0.625rem"},...t==="md"&&{width:Re.avatar,height:Re.avatar,fontSize:"1rem"},...t==="lg"&&{width:He.avatar,height:He.avatar,fontSize:"1.5rem"},...t==="xl"&&{width:Le.avatar,height:Le.avatar,fontSize:"2rem"}}),""),Wo=L("div",{target:"e1sw81qd0"})({name:"1318xp0",styles:"width:8px;height:8px;position:absolute;top:0;right:0;border-radius:50%;z-index:1"}),Vo=(e,t)=>{const[o,r]=d.useState(!1);return d.useEffect(()=>{if(!e&&!t)return;r(!1);let n=!0;const s=new Image;return s.src=e,s.srcset=t||"",s.onload=()=>{n&&r("loaded")},s.onerror=()=>{n&&r("error")},()=>{n=!1}},[e,t]),o},Ko=e=>{switch(e){case"xl":return"L";case"l":case"lg":return"M";case"m":case"md":return"S";case"s":case"sm":default:return"XS"}},ke=(e,t)=>l.colors[e]||e||t,Uo=({className:e,style:t,classes:o,children:r,component:n="div",size:s="sm",backgroundColor:b="secondary",color:u="atmo1",src:m,srcSet:C,sizes:S,alt:x,imgProps:p,status:w,badge:g,variant:$="circular",avatarProps:I,...O})=>{let B;const z=Vo(m,C),P=m||C,X=P&&z!=="error";X?B=a(_o,{alt:x,src:m,srcSet:C,sizes:S,className:i(o==null?void 0:o.img,W.img),...p}):r!=null?B=r:P&&x?[B]=x:B=a(Co,{color:u,iconSize:Ko(s),className:i(W.fallback,o==null?void 0:o.fallback)});const H={...t};n!=null&&typeof n!="string"&&(H.borderRadius="50%"),X||(H.backgroundColor=ke(b,l.colors.secondary),H.color=ke(u,l.colors.atmo1));const V={};if(w){const ue=ke(w,l.colors.positive);V.boxShadow=`inset 0px 0px 0px 2px ${ue}`}const K=ke(g||"",l.colors.positive);return a(Oo,{className:i(W.container,o==null?void 0:o.container),...O,children:R(Po,{className:i(W.status,o==null?void 0:o.status,W[$],o==null?void 0:o[$],W[s],o==null?void 0:o[s]),style:V,$variant:$,$size:s,children:[g&&a(Wo,{className:i(W.badge,o==null?void 0:o.badge),style:{backgroundColor:K}}),a(Fo,{component:n,className:i(e,W.root,o==null?void 0:o.root,W.avatar,o==null?void 0:o.avatar,W[s],o==null?void 0:o[s]),style:H,variant:$,size:s,...I,children:B})]})})},qo=["root","tagButton","focusVisible","button","label","chipRoot","categorical","disabled","clickable","categoricalFocus","categoricalDisabled","deleteIcon","disabledDeleteIcon"],Go=Ve(qo,"HvTag"),A=Go;function Te(){return Te=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},Te.apply(this,arguments)}const Xo=L(Ro,Te({},{target:"e14hga4y2"},Q))(({$type:e,$disabled:t,$categoricalFocus:o,$categoricalDisabled:r,$baseLightColor:n})=>({"&.MuiChip-root":{height:16,borderRadius:0,maxWidth:180,fontFamily:l.fontFamily.body,[`& .${A.focusVisible}`]:{backgroundColor:Pt(l.colors.base_light,.3)},...e==="categorical"&&{backgroundColor:"red",borderRadius:8,[`&.${A.clickable}`]:{cursor:"pointer"},"&:hover":{borderRadius:8},[`& .${A.label}`]:{color:l.colors.secondary},"&:focus:not(:focus-visible)":{outline:"0 !important",boxShadow:"none !important"}},...t&&{backgroundColor:l.colors.atmo3,cursor:"not-allowed",[`& .${A.label}`]:{color:l.colors.secondary_60}},...o&&{"&:focus":{...Pe}},...r&&{backgroundColor:l.colors.atmo3,cursor:"not-allowed",[`& .${A.label}`]:{color:l.colors.secondary_60},"&:hover":{backgroundColor:l.colors.atmo3},"&:focus":{outline:"none"}}},"& .MuiChip-label":{paddingLeft:l.space.xs,paddingRight:l.space.xs,...l.typography.caption1,color:l.colors.base_dark,"& p":{color:l.colors.base_dark}},"& .MuiChip-deleteIcon":{marginRight:0,width:16,height:16,minWidth:16,minHeight:16,padding:0,"&:hover":{backgroundColor:`${n}30`},"&:focus":{...Pe,borderRadius:0},"&:focus:not(:focus-visible)":{outline:"0 !important",boxShadow:"none !important"},...t&&{"&:hover":{backgroundColor:l.colors.atmo3},"&:focus":{backgroundColor:l.colors.atmo3,outline:"none",boxShadow:"none",outlineOffset:0}}}}),""),Jo=L(d.forwardRef((e,t)=>a(zt,{...e,ref:t})),{target:"e14hga4y1"})({name:"1ak3043",styles:"& .MuiButton-startIcon{width:16px;height:16px;min-width:16px;min-height:16px;padding:0;margin:0;}& .MuiButton-textPrimary{background:transparent;}"}),Yo=L(Yt,Te({},{target:"e14hga4y0"},Q))(({$color:e})=>({"& svg .color0":{fill:l.colors[e]}}),""),Zo=(e,t)=>{const o=()=>{};let r;return e&&t?r=o:e&&!t?r=void 0:r=t,r},pt=e=>!!e,Qo=e=>!!e,gt=(e,t,o)=>{const r=l.colors.neutral_20,n=o.cat1;let s;return t==="semantic"&&(s=l.colors[e]||e||r),t==="categorical"&&(s=o[e]||e||n),s},ea=({classes:e,className:t,style:o,label:r,disabled:n,type:s="semantic",color:b,deleteIcon:u,onDelete:m,onClick:C,role:S,deleteButtonArialLabel:x="Delete tag",deleteButtonProps:p={},...w})=>{var g,$;const{activeTheme:I,selectedMode:O}=Ot(),B=()=>{const V=s==="semantic"?"secondary_60":"base_dark",{tabIndex:K=0}=p;return a(Jo,{classes:{startIcon:i(A.tagButton,e==null?void 0:e.tagButton),focusVisible:i(A.focusVisible,e==null?void 0:e.focusVisible),root:i(A.button,e==null?void 0:e.button)},"aria-label":x,tabIndex:K,variant:"secondaryGhost",...p,children:a(Yo,{iconSize:"XS",style:{...n?{cursor:"not-allowed"}:void 0,height:16},color:n?V:"base_dark",$color:n?V:"base_dark"})})},z={...o};let P;s==="semantic"?z.backgroundColor=gt(b,s,{}):s==="categorical"&&(P=gt(b,s,(g=I==null?void 0:I.colors)==null?void 0:g.modes[O]),z.backgroundColor=`${P}30`);const[X,H]=d.useState(!1);return a(Xo,{label:r,className:i(e==null?void 0:e.root,t,A.root),onMouseEnter:()=>{H(!!C)},onMouseLeave:()=>{H(!1)},style:{...n?null:z,...X&&!n?{boxShadow:`0 0 0 1pt ${P}`}:null},classes:{root:i(A.chipRoot,e==null?void 0:e.chipRoot,s==="categorical"&&i(A.categorical,e==null?void 0:e.categorical),n&&i(A.disabled,e==null?void 0:e.disabled),!!C&&i(A.clickable,e==null?void 0:e.clickable),s==="categorical"&&!n&&i(A.categoricalFocus,e==null?void 0:e.categoricalFocus),s==="categorical"&&n&&i(A.categoricalDisabled,e==null?void 0:e.categoricalDisabled)),label:i(A.label,e==null?void 0:e.label),deleteIcon:i(e==null?void 0:e.deleteIcon,A.deleteIcon,n&&i(A.disabledDeleteIcon,e==null?void 0:e.disabledDeleteIcon))},deleteIcon:pt(m)&&u||B(),onDelete:Zo(n,m),onClick:n?void 0:C,role:S||(Qo(C)?"button":void 0),tabIndex:pt(m)?void 0:0,$type:s,$disabled:n||!1,$categoricalFocus:s==="categorical"&&!n,$categoricalDisabled:s==="categorical"&&n||!1,$baseLightColor:(($=I==null?void 0:I.colors)==null?void 0:$.modes[O].base_light)||l.colors.base_light,...w})},ta=["input","listItemGutters","listItemRoot","root","chipRoot","disabled","resizable","invalid","labelContainer","label","description","characterCounter","tagsList","tagInputContainerRoot","tagInputRoot","tagSelected","tagInputBorderContainer","tagInputRootFocused","tagInputRootEmpty","singleLine","error","inputExtension","suggestionsContainer","suggestionList"],oa=Ve(ta,"HvTagsInput"),f=oa;function ne(){return ne=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},ne.apply(this,arguments)}const aa=L(e=>a(Zt,{...e}),{target:"exsbxjj11"})({name:"18nns55",styles:"display:inline-block;width:100%"}),ra=L("div",{target:"exsbxjj10"})({name:"pah21w",styles:"float:left;display:flex;align-items:flex-start"}),na=L(e=>a(Qt,{...e}),{target:"exsbxjj9"})({name:"ip3328",styles:"display:block;float:left;padding-bottom:6px"}),la=L(e=>a(eo,{...e}),{target:"exsbxjj8"})({name:"1en9548",styles:"display:block;float:left"}),ia=L(e=>a(so,{...e}),{target:"exsbxjj7"})(()=>({display:"block",float:"right",textAlign:"right",marginBottom:"6px"}),""),sa=L(to,ne({},{target:"exsbxjj6"},Q))(({$disabled:e,$singleLine:t,$error:o,$resizable:r,$invalid:n,$readOnly:s})=>({display:"flex",alignContent:"flex-start",float:"left",clear:"both",width:"100%",maxWidth:"100%",height:"32px",padding:5,overflow:"auto",position:"relative",flexDirection:"row",flexWrap:"wrap",backgroundColor:l.colors.atmo1,border:`1px solid ${l.tagsInput.borderColor}`,borderRadius:l.radii.base,"&:hover":{cursor:"text",border:`1px solid ${l.tagsInput.hoverColor}`},[`& .${G.inputRoot}`]:{border:"none"},"&:focus, &:focus-within, &:focus-visible":{outlineColor:"#52A8EC",outlineStyle:"solid",outlineWidth:"0px",outlineOffset:"-1px",boxShadow:"0 0 0 1px #52A8EC, 0 0 0 4px rgba(29,155,209,.3)"},...e&&{backgroundColor:l.tagsInput.disabledBackgroundColor,border:`1px solid ${l.colors.atmo4}`,"&:focus-within, &:hover":{border:`1px solid ${l.colors.atmo4}`}},...s&&{backgroundColor:l.tagsInput.readOnlyBackgroundColor,border:`1px solid ${l.tagsInput.readOnlyBorderColor}`,"&:hover":{border:`1px solid ${l.tagsInput.readOnlyBorderColor}`}},...t&&{overflowX:"hidden",overflowY:"hidden",height:32,display:"table-row",paddingTop:0},...o&&{border:`1px solid ${l.colors.negative}`},...r&&{width:"auto",resize:"both",overflow:"auto"},...n&&{border:`1px solid ${l.colors.negative}!important`}}),""),ca=L(e=>a(oo,{...e}),{target:"exsbxjj5"})({name:"g0dsyy",styles:"float:left"}),da=L(e=>a(It,{...e}),ne({},{target:"exsbxjj4"},Q))(({$singleLine:e})=>({marginBottom:2,height:24,lineHeight:"24px","&:not(:last-child)":{marginBottom:2},[`&.${kt.gutters}`]:{padding:"0 5px"},...e&&{display:"table-cell",paddingTop:"2px!important"}}),""),ua=L(e=>a(ea,{...e}),ne({},{target:"exsbxjj3"},Q))(({$selected:e})=>({[`& .${f.chipRoot}`]:{maxWidth:"none"},...e&&{outlineColor:"#52A8EC",outlineStyle:"solid",outlineWidth:"0px",outlineOffset:"-1px",boxShadow:"0 0 0 1px #52A8EC, 0 0 0 4px rgba(29,155,209,.3)"}}),""),pa=L(e=>a(It,{...e}),ne({},{target:"exsbxjj2"},Q))(({$singleLine:e,$isTagSelected:t})=>({display:"flex",flexGrow:1,height:24,lineHeight:"24px",[`&.${kt.gutters}`]:{padding:"0 5px"},...e&&{display:"table-cell",minWidth:100,width:"100%",paddingTop:"3px!important",verticalAlign:"middle"},...t&&{[`& .${G.inputRoot}`]:{backgroundColor:l.colors.atmo1}}}),""),ga=L(e=>a(ao,{...e}),ne({},{target:"exsbxjj1"},Q))(({$singleLine:e})=>({[`& .${G.root}`]:{width:"100%",border:"none",[`&:hover .${f.tagInputBorderContainer}`]:{background:"none"},[`&:hover .${f.tagInputBorderContainer}`]:{background:"none"}},[`&& .${G.inputRoot}`]:{marginLeft:0,marginRight:0,flex:"1 1 auto",minWidth:48,height:24,lineHeight:"24px",padding:0,border:"none"},[`& .${G.inputBorderContainer}`]:{border:"none",background:"none"},[`& .${G.inputRootFocused}`]:{outline:"none!important",boxShadow:"none!important"},[`& .${G.root} .${G.inputRootReadOnly}`]:{backgroundColor:"transparent ",border:"none","&:hover":{border:"none"}},[`&& .${G.input}`]:{marginLeft:0},...e&&{}}),""),va=L(e=>a(ro,{...e}),{target:"exsbxjj0"})({width:"100%",position:"relative",top:59,[`& .${dt.root} .${dt.list} &`]:{width:"100%"}},""),ha=({classes:e,className:t,id:o,name:r,value:n,defaultValue:s=[],readOnly:b=!1,disabled:u=!1,required:m=!1,label:C,"aria-label":S,"aria-labelledby":x,description:p,"aria-describedby":w,onChange:g,onAdd:$,onDelete:I,onBlur:O,onFocus:B,placeholder:z,hideCounter:P=!1,middleCountLabel:X="/",maxTagsQuantity:H,autoFocus:V=!1,resizable:K=!0,inputProps:ue={},countCharProps:Ee={},multiline:j=!1,status:ee,statusMessage:le,validationMessages:D,commitTagOn:be=["Enter"],commitOnBlur:me=!1,suggestionListCallback:te,...Ce})=>{var E;const J=_t(o,"hvTagsInput"),qe=C!=null,Ge=p!=null,[k,ye]=Oe(n,s),[St,pe]=Oe(ee,Ie.standBy),[wt,Ae]=Oe(le,""),[Y,Be]=d.useState(""),[M,ie]=d.useState(k.length),[Rt,Xe]=d.useState(!0),De=d.useRef(),se=d.useRef(),je=d.useRef(!1),Me=d.useRef(),Je=d.useRef(null),ge=M>=0&&M<k.length,Ne=H!=null&&!P,[Ye,Ze]=d.useState(null),Qe=d.useMemo(()=>Ne&&k.length>H,[Ne,H,k.length]),ve=te!=null,et=!!Ye,tt=d.useMemo(()=>({...no,...D}),[D==null?void 0:D.error,D==null?void 0:D.requiredError,D==null?void 0:D.minCharError,D==null?void 0:D.maxCharError]),xe=d.useCallback(c=>{H!=null&&c.length>H?(pe(Ie.invalid),Ae(tt.maxCharError),Xe(!1)):(pe(Ie.valid),Ae(""),Xe(!0))},[tt.maxCharError,H,Ae,pe]),he=d.useCallback((c,v,T)=>{var U;const oe=[...k.slice(0,c),...k.slice(c+1)];ye(oe),ie(T?oe.length:M>0?M-1:0),(U=De.current)==null||U.focus(),xe(oe),I==null||I(v,k[c],c),g==null||g(v,oe),je.current=!0},[g,I,xe,ye,M,k]),$e=d.useCallback((c,v)=>{if(c.preventDefault(),v!==""){const T={label:v,type:"semantic"},U=[...k,T];ye(U),xe(U),$==null||$(c,T,U.length-1),g==null||g(c,U)}},[$,g,xe,ye,k]),ze=ee!==void 0&&ee==="invalid"&&le!==void 0||!Rt;d.useEffect(()=>{var c;if(!j){const v=(c=se==null?void 0:se.current)==null?void 0:c.children[M];setTimeout(()=>{const T=se.current;lo(T)||(T.scrollLeft=v?v.offsetLeft-T.getBoundingClientRect().width/2+v.getBoundingClientRect().width/2:0)},50),v==null||v.focus()}},[j,M]),d.useEffect(()=>{je.current||(Be(""),ie(k.length)),je.current=!1},[k]);const ot=io(),at=()=>{Je.current.focus()},rt=d.useCallback(c=>{var v;const T=document.getElementById(Z(J,"suggestions-list")||"");return c!=null?(v=T==null?void 0:T.getElementsByTagName("li"))==null?void 0:v[c]:T},[J]),ce=d.useCallback(()=>{ot.current&&Ze(null)},[ot]),nt=d.useCallback(c=>{var v;const T=te==null?void 0:te(c);(v=T==null?void 0:T[0])!=null&&v.label?Ze(T):ce()},[ce,te]),Ht=(c,v)=>{$e(c,v.value||v.label),Be(v.value||v.label),at(),ce()},Lt=c=>{lt(c,it.Esc)?(ce(),at()):lt(c,it.Tab)&&ce()},Tt=d.useCallback((c,v)=>{Be(v),ve&&nt(v)},[ve,nt]),Et=d.useCallback(c=>{!ve&&be.includes(c.code)&&$e(c,Y)},[$e,ve,be,Y]),At=d.useCallback(c=>{var v;if(Y==="")switch(c.code){case"ArrowLeft":ie(M>0?M-1:0);break;case"ArrowRight":ie(M<k.length?M+1:k.length);break;case"Backspace":ge?he(M,c,!1):ie(k.length-1);break;case"Delete":ge&&he(M,c,!1);break}else switch(c.code){case"ArrowDown":(v=rt(0))==null||v.focus();break}},[he,rt,ge,M,Y,k.length]),Bt=d.useCallback((c,v)=>{he(v,c,!0),pe(Ie.standBy)},[he,pe]),Dt=d.useCallback(()=>{var c;(c=De.current)==null||c.focus(),clearTimeout(Me.current),ie(k.length)},[k.length]);return R(aa,{id:o,name:r,disabled:u,readOnly:b,status:St,required:m,onBlur:c=>{Me.current=setTimeout(()=>{me&&$e(c,Y),O==null||O(c,Y)},250)},onFocus:c=>{clearTimeout(Me.current),B==null||B(c,Y)},className:i(f.root,e==null?void 0:e.root,t,u&&i(f.disabled,e==null?void 0:e.disabled)),children:[(qe||Ge)&&R(ra,{className:i(f.labelContainer,e==null?void 0:e.labelContainer),children:[qe&&a(na,{className:i(f.label,e==null?void 0:e.label),id:Z(o,"label"),htmlFor:Z(J,"input"),label:C}),Ge&&a(la,{className:i(f.description,e==null?void 0:e.description),id:Z(J,"description"),children:p})]}),Ne&&a(ia,{id:Z(J,"charCounter"),className:i(f.characterCounter,e==null?void 0:e.characterCounter),separator:X,currentCharQuantity:k.length,maxCharQuantity:H,...Ee}),R(sa,{className:i(f.tagsList,e==null?void 0:e.tagsList,ze&&i(f.error,e==null?void 0:e.error),K&&j&&i(f.resizable,e==null?void 0:e.resizable),Qe&&i(f.invalid,e==null?void 0:e.invalid),!j&&i(f.singleLine,e==null?void 0:e.singleLine)),$disabled:u,$singleLine:!j,$error:ze,$resizable:K&&j,$invalid:Qe,$readOnly:b,onKeyDown:At,onClick:Dt,ref:se,children:[k&&k.map((c,v)=>{const T=typeof c=="string"?{label:c,type:"semantic"}:c,{label:U,type:oe,...jt}=T;return a(da,{tabIndex:-1,className:i(!j&&i(f.singleLine,e==null?void 0:e.singleLine)),classes:{gutters:i(f.listItemGutters,e==null?void 0:e.listItemGutters),root:i(f.listItemRoot,e==null?void 0:e.listItemRoot)},id:`tag-${v}`,$singleLine:!j,children:a(ua,{label:U,className:i(v===M&&i(f.tagSelected,e==null?void 0:e.tagSelected)),classes:{chipRoot:i(f.chipRoot,e==null?void 0:e.chipRoot)},type:oe,...!(b||u||oe==="categorical")&&{onDelete:Mt=>Bt(Mt,v)},deleteButtonProps:{tabIndex:-1},$selected:v===M,...jt})},`${T.label}-${v}`)}),!(u||b)&&a(pa,{className:i(!j&&i(f.singleLine,e==null?void 0:e.singleLine,k.length===0&&i(f.tagInputRootEmpty,e==null?void 0:e.tagInputRootEmpty))),classes:{root:i(f.tagInputContainerRoot,e==null?void 0:e.tagInputContainerRoot),gutters:i(f.listItemGutters,e==null?void 0:e.listItemGutters)},id:`tag-${k.length}`,$singleLine:!j,$isTagSelected:!!ge,children:a(ga,{value:Y,disableClear:!0,onChange:Tt,onKeyDown:Et,placeholder:k.length===0?z:"",autoFocus:V,className:i(!j&&i(f.singleLine,e==null?void 0:e.singleLine)),classes:{root:i(f.tagInputRoot,e==null?void 0:e.tagInputRoot),input:i(f.input,e==null?void 0:e.input),inputBorderContainer:i(f.tagInputBorderContainer,e==null?void 0:e.tagInputBorderContainer),inputRootFocused:i(f.tagInputRootFocused,e==null?void 0:e.tagInputRootFocused)},disabled:u,readOnly:b||ge,inputProps:{ref:Je,"aria-label":S,"aria-labelledby":x,"aria-describedby":w??(p&&Z(J,"description")||void 0),...ue},inputRef:De,$singleLine:!j,...Ce})})]}),ve&&R(de,{children:[et&&a("div",{role:"presentation",className:i(f.inputExtension,e==null?void 0:e.inputExtension)}),a(va,{id:Z(J,"suggestions"),classes:{root:i(f.suggestionsContainer,e==null?void 0:e.suggestionsContainer),list:i(f.suggestionList,e==null?void 0:e.suggestionList)},expanded:et,anchorEl:(E=se==null?void 0:se.current)==null?void 0:E.parentElement,onClose:ce,onKeyDown:Lt,onSuggestionSelected:Ht,suggestionValues:Ye})]}),ze&&a(ca,{id:Z(J,"error"),disableBorder:!0,className:i(f.error,e==null?void 0:e.error),children:wt})]})},vt={indicator:ae({marginLeft:l.space.sm,marginRight:l.space.sm},"","")},fa=({title:e,count:t,diff:o})=>a(Ue,{bgcolor:"transparent",style:{outline:"none"},children:R("div",{style:{padding:l.space.sm},children:[a(N,{variant:"label",children:e}),R("div",{style:{display:"flex",alignItems:"center"},children:[a(N,{variant:"title2",children:t}),o>0&&R(de,{children:[a(fo,{color:l.colors.positive,className:vt.indicator}),a(N,{variant:"caption1",children:`${o.toFixed(2)}
               more`})]}),o<0&&R(de,{children:[a(go,{color:l.colors.warning,className:vt.indicator}),a(N,{variant:"caption1",children:`${Math.abs(o).toFixed(2)}
               less.`})]})]})]})}),ba=({title:e,value:t})=>a(Ue,{bgcolor:"transparent",style:{outline:"none"},children:R("div",{style:{padding:l.space.sm},children:[a(N,{variant:"label",children:e}),a("div",{style:{display:"flex",alignItems:"center"},children:a(N,{variant:"caption1",children:t})})]})}),ma=[{id:1,title:"Review Log",value:"2019/6/4"},{id:2,title:"Update Build",value:"2020/12/1"},{id:3,title:"Clean Data Logs",value:"2018/5/3"},{id:4,title:"Deploy Cloud Run",value:"Blone"},{id:5,title:"Update Build",value:"2020/12/1	"},{id:6,title:"Build",value:"46uYmU"}],Ca=[{id:1,title:"Sucess Requests",count:4,diff:2.02},{id:2,title:"Error Requests",count:2,diff:-1.63},{id:3,title:"Open Requests",count:12,diff:1.84}],ya=()=>R(_,{container:!0,style:{paddingTop:l.space.lg},children:[a(_,{item:!0,xs:12,md:3,lg:2,style:{paddingTop:l.space.xl},children:a(_,{container:!0,justifyContent:"center",children:a(Uo,{id:"status5",size:"xl",status:"atmo4",children:"LS"})})}),a(_,{item:!0,xs:12,md:9,lg:10,children:R(_,{container:!0,direction:"row",children:[Ca.map(e=>a(_,{item:!0,xs:12,sm:4,children:a(fa,{title:e.title,count:e.count,diff:e.diff})},e.id)),ma.map(e=>a(_,{item:!0,xs:12,sm:4,children:a(ba,{title:e.title,value:e.value})},e.id))]})})]}),q=({children:e,title:t})=>a(Ue,{bgcolor:"transparent",style:{outline:"none",marginBottom:l.space.md},children:R("div",{style:{padding:l.space.sm},children:[a(N,{variant:"label",children:t}),a("div",{style:{display:"flex",alignItems:"center",marginTop:l.space.sm},children:e})]})}),ht={section:ae({marginBottom:l.space.md},"",""),headerRoot:ae({name:"20mdis",styles:"padding-left:0;padding-right:0;padding-bottom:5px"}),headerTitle:ae({color:l.colors.secondary,fontSize:"18px",letterSpacing:"0.02em",lineHeight:"28px",fontWeight:600},"",""),cardContent:ae({name:"127vvv2",styles:"padding-left:0;padding-right:0"}),tagRoot:ae({name:"1d3w5wq",styles:"width:100%"})},xa=()=>R(de,{children:[a(Ke,{title:"Model Properties",variant:"section",className:ht.section}),R(_e,{spacing:"sm",breakpoints:[{minWidth:980,cols:3,spacing:"md"},{minWidth:500,cols:2,spacing:"sm"},{minWidth:400,cols:1,spacing:"sm"}],children:[a(q,{title:"Description",children:a(co,{readOnly:!0,rows:5,placeholder:"Enter value",defaultValue:"Model created from the example Jupyter Notebook",maxCharQuantity:256})}),a(q,{title:"Status",children:a(N,{noWrap:!0,children:"Ready"})}),a(q,{title:"Tags",children:a(ha,{id:"properties-tags","aria-label":"Properties Tags",placeholder:"Enter value",readOnly:!0,value:[{label:"test"},{label:"notebook"}],classes:{root:ht.tagRoot}})})]}),R(_e,{spacing:"sm",breakpoints:[{minWidth:980,cols:2,spacing:"md"},{minWidth:500,cols:2,spacing:"sm"},{minWidth:400,cols:1,spacing:"sm"}],children:[a(q,{title:"Project",children:a(N,{noWrap:!0,children:"Wine Quality"})}),a(q,{title:"ASC",children:a(N,{noWrap:!0,children:"Failure Prediction"})})]}),R(_e,{spacing:"sm",breakpoints:[{minWidth:980,cols:4,spacing:"md"},{minWidth:500,cols:2,spacing:"sm"},{minWidth:400,cols:1,spacing:"sm"}],children:[a(q,{title:"Created",children:a(N,{noWrap:!0,children:"2022-05-24 14:32:50"})}),a(q,{title:"Created By",children:a(N,{noWrap:!0,children:"-"})}),a(q,{title:"Modified",children:a(N,{noWrap:!0,children:"2022-05-24 14:32:50"})}),a(q,{title:"Modified By",children:a(N,{noWrap:!0,children:"-"})})]})]}),$a=()=>[{Header:"Title",accessor:"name",style:{minWidth:120}},{Header:"Event Type",accessor:"eventType",style:{minWidth:100}},{Header:"Status",accessor:"status",style:{width:120}},{Header:"Severity",accessor:"severity"},{Header:"Priority",accessor:"priority"},{Header:"Time",accessor:"time"},{Header:"Temperature",accessor:"temperature"}],ft=(e,t)=>e[t%e.length],Ia=(e,t)=>{let o=e==="High"?t+4:t+3;return o=e==="Medium"?o+30:t+20,`${o%12}:${o%60}:${o%60}`},bt=e=>e%2>0&&"High"||e%2<0&&"Medium"||"Low",ka=e=>({id:`${e+1}`,name:`Event ${e+1}`,eventType:`Anomaly detection ${e%4}`,status:ft(["Closed","Open"],e),severity:ft(["Critical","Major","Average","Minor"],e),priority:bt(e),time:Ia(bt(e),e),temperature:`${e+35}`}),Sa=(e=10)=>{const t=[];for(let o=0;o<=e;o+=1)t.push(ka(o));return t},wa={section:ae({marginBottom:l.space.md},"","")},Ra=()=>{const e=d.useMemo(()=>Sa(10),[]),[t]=d.useState(e),o=d.useMemo(()=>$a(),[]),r=Ft({data:t,columns:o,initialState:{pageSize:8}},Wt);return R(de,{children:[a(Ke,{title:"Events",variant:"section",className:wa.section}),a(Xt,{style:{padding:"2px"},children:R(Vt,{...r.getTableProps(),children:[a(Kt,{children:a(ct,{children:o.map(n=>a(Ut,{children:n.Header},n.Header))})}),a(qt,{...r.getTableBodyProps(),children:r.page.map(n=>(r.prepareRow(n),a(ct,{...n.getRowProps(),children:n.cells.map(s=>a(Gt,{...s.getCellProps(),children:s.render("Cell")}))})))})]})})]})},Ha=()=>R(de,{children:[a(Ke,{title:"Deploy"}),R(_,{container:!0,children:[a(_,{item:!0,xs:12,children:a(ya,{})}),a(_,{item:!0,xs:12,children:a(xa,{})}),a(_,{item:!0,xs:12,children:a(Ra,{})})]})]}),Na=Ha;export{Na as default};
