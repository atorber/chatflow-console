import{T as F,u as B,B as q,P as $}from"./useForm-7ba28d00.js";import{b5 as O,d as A,b6 as G,r as c,m as h,V as L,b as u,c as E,i as M,g as t,w as o,a as n,A as p,W,X as f,b7 as j,b8 as J,F as K,_ as X}from"./index-8b2ad4e7.js";import{P as z}from"./PageTitle-4eaaa3d1.js";import"./vuedraggable.umd-bc4bb5ed.js";import"./SettingOutlined-da9c8e7f.js";const H=i=>O("/api/v1/groupnotice/list",i),Q=[{title:"序号",key:"id",width:100},{title:"内容",key:"text",width:200},{title:"类型",key:"type",width:160},{title:"好友备注",key:"alias",width:150},{title:"昵称/群名称",key:"name",width:160},{title:"好友ID/群ID",key:"id",width:160},{title:"状态",key:"state",width:160},{title:"发送时间",key:"pubTime",width:160,render(i){return new Date(i.pubTime).toLocaleString()}},{title:"备注信息",key:"info",width:100},{title:"状态",key:"state",width:160},{title:"同步状态",key:"syncStatus",width:100},{title:"更新时间",key:"lastOperationTime",width:160,render(i){return new Date(i.lastOperationTime).toLocaleString()}}],Y=A({__name:"index",setup(i){const k={name:{required:!0,trigger:["blur","input"],message:"请输入名称"},address:{required:!0,trigger:["blur","input"],message:"请输入地址"},date:{type:"number",required:!0,trigger:["blur","change"],message:"请选择日期"}},y=[{field:"name",labelMessage:"这是一个提示",component:"NInput",label:"姓名",componentProps:{placeholder:"请输入姓名",onInput:e=>{console.log(e)}},rules:[{required:!0,message:"请输入姓名",trigger:["blur"]}]},{field:"mobile",component:"NInputNumber",label:"手机",componentProps:{placeholder:"请输入手机号码",showButton:!1,onInput:e=>{console.log(e)}}},{field:"type",component:"NSelect",label:"类型",componentProps:{placeholder:"请选择类型",options:[{label:"舒适性",value:1},{label:"经济性",value:2}],onUpdateValue:e=>{console.log(e)}}},{field:"makeDate",component:"NDatePicker",label:"预约时间",defaultValue:118313526e4,componentProps:{type:"date",clearable:!0,onUpdateValue:e=>{console.log(e)}}},{field:"makeTime",component:"NTimePicker",label:"停留时间",componentProps:{clearable:!0,onUpdateValue:e=>{console.log(e)}}},{field:"status",label:"状态",slot:"statusSlot"},{field:"makeProject",component:"NCheckbox",label:"预约项目",componentProps:{placeholder:"请选择预约项目",options:[{label:"种牙",value:1},{label:"补牙",value:2},{label:"根管",value:3}],onUpdateChecked:e=>{console.log(e)}}},{field:"makeSource",component:"NRadioGroup",label:"来源",componentProps:{options:[{label:"网上",value:1},{label:"门店",value:2}],onUpdateChecked:e=>{console.log(e)}}}],v=G(),b=c(null),g=c(),r=c(!1),m=c(!1),s=h({name:"",address:"",date:null}),C=h({width:220,title:"操作",key:"action",fixed:"right",render(e){return L(F,{style:"button",actions:[{label:"删除",onClick:U.bind(null,e),ifShow:()=>!0,auth:["basic_list"]},{label:"编辑",onClick:D.bind(null,e),ifShow:()=>!0,auth:["basic_list"]}],dropDownActions:[{label:"启用",key:"enabled",ifShow:()=>!0},{label:"禁用",key:"disabled",ifShow:()=>!0}],select:l=>{window.$message.info(`您点击了，${l} 按钮`)}})}}),[Z,{getFieldsValue:P}]=B({gridProps:{cols:"1 s:1 m:2 l:3 xl:4 2xl:4"},labelWidth:80,schemas:y});function x(){r.value=!0}const T=async e=>{const{data:l}=await H({...P(),...e});return console.log("data",JSON.stringify(l)),l};function N(e){console.log(e)}function _(){g.value.reload()}function S(e){e.preventDefault(),m.value=!0,b.value.validate(l=>{l?window.$message.error("请填写完整信息"):(window.$message.success("新建成功"),setTimeout(()=>{r.value=!1,_()})),m.value=!1})}function D(e){console.log("点击了编辑",e),v.push({name:"basic-info",params:{id:e.id}})}function U(e){console.log("点击了删除",e),window.$message.info("点击了删除")}return(e,l)=>{const I=u("n-icon"),d=u("n-button"),w=u("n-input"),R=u("n-space"),V=u("n-modal");return E(),M(K,null,[t(z,{title:"消息群发"}),t(n(J),{bordered:!1,class:"proCard"},{default:o(()=>[t(n(q),{columns:n(Q),request:T,"row-key":a=>a.id,ref_key:"actionRef",ref:g,actionColumn:C,"onUpdate:checkedRowKeys":N,"scroll-x":1090},{tableTitle:o(()=>[t(d,{type:"primary",onClick:x},{icon:o(()=>[t(I,null,{default:o(()=>[t(n($))]),_:1})]),default:o(()=>[p(" 新建 ")]),_:1})]),toolbar:o(()=>[t(d,{type:"primary",onClick:_},{default:o(()=>[p("刷新数据")]),_:1})]),_:1},8,["columns","row-key","actionColumn"]),t(V,{show:r.value,"onUpdate:show":l[4]||(l[4]=a=>r.value=a),"show-icon":!1,preset:"dialog",title:"新建"},{action:o(()=>[t(R,null,{default:o(()=>[t(d,{onClick:l[3]||(l[3]=()=>r.value=!1)},{default:o(()=>[p("取消")]),_:1}),t(d,{type:"info",loading:m.value,onClick:S},{default:o(()=>[p("确定")]),_:1},8,["loading"])]),_:1})]),default:o(()=>[t(n(W),{model:s,rules:k,ref_key:"formRef",ref:b,"label-placement":"left","label-width":80,class:"py-4"},{default:o(()=>[t(n(f),{label:"名称",path:"name"},{default:o(()=>[t(w,{placeholder:"请输入名称",value:s.name,"onUpdate:value":l[0]||(l[0]=a=>s.name=a)},null,8,["value"])]),_:1}),t(n(f),{label:"地址",path:"address"},{default:o(()=>[t(w,{type:"textarea",placeholder:"请输入地址",value:s.address,"onUpdate:value":l[1]||(l[1]=a=>s.address=a)},null,8,["value"])]),_:1}),t(n(f),{label:"日期",path:"date"},{default:o(()=>[t(n(j),{type:"datetime",placeholder:"请选择日期",value:s.date,"onUpdate:value":l[2]||(l[2]=a=>s.date=a)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["show"])]),_:1})],64)}}});const ne=X(Y,[["__scopeId","data-v-6a5a530b"]]);export{ne as default};
