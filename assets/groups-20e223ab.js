import{_ as A}from"./no-data-bde0995b.js";import{d as F,b6 as M,aA as O,aq as q,r as m,m as z,p as G,o as E,b as _,c as l,i as v,f as i,g as t,w as s,a as n,ad as k,A as w,t as S,ac as K,Z as R,F as N,y as Z,e as B,l as H,aB as J,ag as Q,K as W,L as X,_ as Y}from"./index-8b2ad4e7.js";import{a as ee,G as oe}from"./GroupPanel-a26eeb59.js";import{G as ae}from"./GroupCard-51c86343.js";import{S as te}from"./Search-1cbdeb4a.js";import{P as ne}from"./Plus-dca5bbe2.js";import"./Delete-3fce925e.js";import"./AvatarCropper-cdc3b0a9.js";import"./AvatarCropper.vue_vue_type_style_index_0_scoped_9728916b_lang-df7f384b.js";import"./Close-0d931b97.js";import"./UploadOne-bf5f50ac.js";import"./CheckSmall-16288a2e.js";const se=d=>(W("data-v-28488e65"),d=d(),X(),d),re={id:"drawer-target",class:"el-container is-vertical height100"},le={class:"el-header me-view-header bdr-b"},ue={key:0,class:"el-main flex-center"},ie=se(()=>i("img",{src:A,alt:""},null,-1)),de={key:1,class:"el-main me-scrollbar me-scrollbar-thumb pd-10"},ce={class:"cards"},pe=F({__name:"groups",setup(d){const b=M(),L=O(),f=q(),c=m(!1),g=m(""),u=m([]),r=z({isShow:!1,id:0}),p=m("all"),h=L.uid,C=G(()=>u.value.filter(a=>a.creator_id==h)),x=G(()=>u.value.filter(a=>p.value=="create"&&a.creator_id!=h||p.value=="join"&&a.creator_id==h?!1:a.group_name.toLowerCase().indexOf(g.value.toLowerCase())!=-1)),T=()=>{Q().then(a=>{a.code==200&&(u.value=a.data.items||[])})},$=a=>{r.isShow=!0,r.id=a.id},I=a=>{f.toTalk(2,a.id,b)},U=()=>{c.value=!1,T(),f.loadTalkList()};return E(()=>{T()}),(a,o)=>{const y=_("n-icon"),V=_("n-input"),D=_("n-button"),P=_("n-empty");return l(),v(N,null,[i("section",re,[i("header",le,[i("div",null,[t(n(K),{value:p.value,"onUpdate:value":o[0]||(o[0]=e=>p.value=e)},{default:s(()=>[t(n(k),{name:"all"},{default:s(()=>[w(" 全部群聊("+S(u.value.length)+") ",1)]),_:1}),t(n(k),{name:"create"},{default:s(()=>[w(" 我创建的("+S(C.value.length)+") ",1)]),_:1}),t(n(k),{name:"join"},{default:s(()=>[w(" 我加入的("+S(u.value.length-C.value.length)+") ",1)]),_:1})]),_:1},8,["value"])]),t(n(R),null,{default:s(()=>[t(V,{value:g.value,"onUpdate:value":o[1]||(o[1]=e=>g.value=e),valueModifiers:{trim:!0},placeholder:"搜索",clearable:"",style:{"max-width":"200px"},round:""},{prefix:s(()=>[t(y,{component:n(te)},null,8,["component"])]),_:1},8,["value"]),t(D,{circle:"",onClick:o[2]||(o[2]=e=>c.value=!0)},{icon:s(()=>[t(y,{component:n(ne)},null,8,["component"])]),_:1})]),_:1})]),x.value.length==0?(l(),v("main",ue,[t(P,{size:"200",description:"暂无相关数据"},{icon:s(()=>[ie]),_:1})])):(l(),v("main",de,[i("div",ce,[(l(!0),v(N,null,Z(x.value,e=>(l(),B(ae,{key:e.id,avatar:e.avatar,username:e.group_name,gender:e.gender,motto:e.profile,flag:"查看","is-member":!0,onClick:j=>$(e),onTalk:j=>I(e)},null,8,["avatar","username","gender","motto","onClick","onTalk"]))),128))])]))]),c.value?(l(),B(ee,{key:0,onClose:o[3]||(o[3]=e=>c.value=!1),onOnSubmit:U})):H("",!0),t(n(J),{show:r.isShow,"onUpdate:show":o[6]||(o[6]=e=>r.isShow=e),width:400,placement:"right","trap-focus":!1,"block-scroll":!1,to:"#drawer-target","show-mask":"transparent"},{default:s(()=>[t(oe,{gid:r.id,onClose:o[4]||(o[4]=e=>r.isShow=!1),onToTalk:o[5]||(o[5]=e=>n(f).toTalk(2,r.id,n(b)))},null,8,["gid"])]),_:1},8,["show"])],64)}}});const Te=Y(pe,[["__scopeId","data-v-28488e65"]]);export{Te as default};
