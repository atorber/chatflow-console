import{a2 as b,aY as f,s as n,a5 as w,a6 as S,a7 as s,aa as d,a1 as c,a8 as i,ab as g,ac as y,c9 as N,at as z,au as T}from"./index-4fb8a37c.js";import{N as v}from"./Switch-85526ef4.js";const l=_=>(z("data-v-ba51ab61"),_=_(),T(),_),k=l(()=>s("h3",{class:"title"},"个性设置",-1)),x={class:"view-box"},U={class:"view-list"},I={class:"content"},P=l(()=>s("div",{class:"name"},"新消息提示音",-1)),W={class:"desc"},B={class:"tools"},D={class:"view-list"},F={class:"content"},K=l(()=>s("div",{class:"name"},"推送键盘输入消息",-1)),E={class:"desc"},V={class:"tools"},q={class:"view-list"},M={class:"content"},Y=l(()=>s("div",{class:"name"},"消息通知",-1)),j={class:"desc"},A={class:"tools"},C={class:"view-list"},G={class:"content"},H=l(()=>s("div",{class:"name"},"主题颜色",-1)),J={class:"desc"},L={class:"tools"},O={class:"view-list"},Q={class:"content"},R=l(()=>s("div",{class:"name"},"主题模式",-1)),X={class:"desc"},Z={class:"tools"},$={__name:"personalize",setup(_){const t=f(),u=n({get:()=>t.isPromptTone,set:o=>{t.setPromptTone(o)}}),r=n({get:()=>t.isKeyboard,set:o=>{t.setKeyboard(o)}}),m=n({get:()=>t.isWebNotify,set:o=>{o===!1?t.isWebNotify=!1:window.Notification.requestPermission(e=>{console.log(e),t.isWebNotify=e==="granted"})}}),p=n({get:()=>t.isFullScreen,set:o=>{t.setFullScreen(o)}}),h=n({get:()=>!t.darkTheme,set:o=>{t.setDarkTheme(!o)}});return(o,e)=>(w(),S("section",null,[k,s("div",x,[s("div",U,[s("div",I,[P,s("div",W,"新消息提示音 ："+d(u.value?"已开启":"已关闭"),1)]),s("div",B,[c(i(v),{size:"medium",value:u.value,"onUpdate:value":e[0]||(e[0]=a=>u.value=a)},null,8,["value"])])]),s("div",D,[s("div",F,[K,s("div",E,"推送键盘输入消息："+d(r.value?"已开启":"已关闭"),1)]),s("div",V,[c(i(v),{size:"medium",value:r.value,"onUpdate:value":e[1]||(e[1]=a=>r.value=a)},null,8,["value"])])]),s("div",q,[s("div",M,[Y,s("div",j,"消息通知："+d(m.value?"已开启":"已关闭"),1)]),s("div",A,[c(i(v),{size:"medium",value:m.value,"onUpdate:value":e[2]||(e[2]=a=>m.value=a)},null,8,["value"])])]),s("div",C,[s("div",G,[H,s("div",J,"当前主题颜色 ："+d(h.value?"浅色":"深色"),1)]),s("div",L,[c(i(v),{value:h.value,"onUpdate:value":e[3]||(e[3]=a=>h.value=a),size:"medium"},null,8,["value"])])]),g(s("div",O,[s("div",Q,[R,s("div",X,"当前主题模式 ："+d(p.value?"全屏模式":"居中模式"),1)]),s("div",Z,[c(i(v),{size:"medium",value:p.value,"onUpdate:value":e[4]||(e[4]=a=>p.value=a)},null,8,["value"])])],512),[[y,!i(N)()]])])]))}},ts=b($,[["__scopeId","data-v-ba51ab61"]]);export{ts as default};
