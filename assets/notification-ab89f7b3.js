import{a2 as m,aY as f,s as _,a5 as h,a6 as y,a7 as s,aa as v,a1 as u,a8 as r,at as g,au as N}from"./index-4fb8a37c.js";import{N as p}from"./Switch-85526ef4.js";const n=i=>(g("data-v-9da4cdec"),i=i(),N(),i),b=n(()=>s("h3",{class:"title"},"通知设置",-1)),w={class:"view-box"},S={class:"view-list"},x={class:"content"},I=n(()=>s("div",{class:"name"},"新消息提示音",-1)),P={class:"desc"},W={class:"tools"},z={class:"view-list"},B={class:"content"},K=n(()=>s("div",{class:"name"},"推送键盘输入消息",-1)),T={class:"desc"},U={class:"tools"},k={class:"view-list"},V={class:"content"},q=n(()=>s("div",{class:"name"},"消息通知",-1)),D={class:"desc"},E={class:"tools"},Y={__name:"notification",setup(i){const t=f(),c=_({get:()=>t.isPromptTone,set:o=>{t.setPromptTone(o)}}),d=_({get:()=>t.isKeyboard,set:o=>{t.setKeyboard(o)}}),l=_({get:()=>t.isWebNotify,set:o=>{o===!1?t.isWebNotify=!1:window.Notification.requestPermission(e=>{console.log(e),t.isWebNotify=e==="granted"})}});return(o,e)=>(h(),y("section",null,[b,s("div",w,[s("div",S,[s("div",x,[I,s("div",P,"新消息提示音 ："+v(c.value?"已开启":"已关闭"),1)]),s("div",W,[u(r(p),{size:"medium",value:c.value,"onUpdate:value":e[0]||(e[0]=a=>c.value=a)},null,8,["value"])])]),s("div",z,[s("div",B,[K,s("div",T,"推送键盘输入消息："+v(d.value?"已开启":"已关闭"),1)]),s("div",U,[u(r(p),{size:"medium",value:d.value,"onUpdate:value":e[1]||(e[1]=a=>d.value=a)},null,8,["value"])])]),s("div",k,[s("div",V,[q,s("div",D,"消息通知："+v(l.value?"已开启":"已关闭"),1)]),s("div",E,[u(r(p),{size:"medium",value:l.value,"onUpdate:value":e[2]||(e[2]=a=>l.value=a)},null,8,["value"])])])])]))}},C=m(Y,[["__scopeId","data-v-9da4cdec"]]);export{C as default};
