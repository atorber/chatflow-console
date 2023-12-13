import{T as g,u as k,B as w}from"./useForm-ee8571b5.js";import{a as y}from"./whitelist-93a61257.js";import{c as v}from"./columns-385e652b.js";import{d as P,b6 as C,r as l,m as r,V as N,b as x,c as S,i as T,g as a,w as t,a as n,A as V,b8 as D,F as I,_ as R}from"./index-8e0b9476.js";import{P as U}from"./PageTitle-51d0b4d1.js";import"./vuedraggable.umd-8e0bfff1.js";import"./SettingOutlined-c5ca1532.js";const B=P({__name:"white",setup(F){const c=[{field:"name",labelMessage:"这是一个提示",component:"NInput",label:"序号",componentProps:{placeholder:"请输入记录ID",onInput:e=>{console.log(e)}},rules:[{required:!0,message:"请输入姓名",trigger:["blur"]}]},{field:"mobile",component:"NInputNumber",label:"手机",componentProps:{placeholder:"请输入手机号码",showButton:!1,onInput:e=>{console.log(e)}}},{field:"type",component:"NSelect",label:"类型",componentProps:{placeholder:"请选择类型",options:[{label:"好友",value:1},{label:"群",value:2}],onUpdateValue:e=>{console.log(e)}}},{field:"makeDate",component:"NDatePicker",label:"预约时间",defaultValue:118313526e4,componentProps:{type:"date",clearable:!0,onUpdateValue:e=>{console.log(e)}}},{field:"makeTime",component:"NTimePicker",label:"停留时间",componentProps:{clearable:!0,onUpdateValue:e=>{console.log(e)}}},{field:"status",label:"状态",slot:"statusSlot"},{field:"makeProject",component:"NCheckbox",label:"预约项目",componentProps:{placeholder:"请选择预约项目",options:[{label:"种牙",value:1},{label:"补牙",value:2},{label:"根管",value:3}],onUpdateChecked:e=>{console.log(e)}}},{field:"makeSource",component:"NRadioGroup",label:"来源",componentProps:{options:[{label:"网上",value:1},{label:"门店",value:2}],onUpdateChecked:e=>{console.log(e)}}}],i=C();l(null);const s=l();l(!1),l(!1),r({name:"",address:"",date:null}),r({width:220,title:"操作",key:"action",fixed:"right",render(e){return N(g,{style:"button",actions:[{label:"删除",onClick:f.bind(null,e),ifShow:()=>!0,auth:["basic_list"]},{label:"编辑",onClick:b.bind(null,e),ifShow:()=>!0,auth:["basic_list"]}],dropDownActions:[{label:"启用",key:"enabled",ifShow:()=>!0},{label:"禁用",key:"disabled",ifShow:()=>!0}],select:o=>{window.$message.info(`您点击了，${o} 按钮`)}})}});const[A,{getFieldsValue:u}]=k({gridProps:{cols:"1 s:1 m:2 l:3 xl:4 2xl:4"},labelWidth:80,schemas:c}),d=async e=>{const{data:o}=await y({...u(),...e});return console.log("data",JSON.stringify(o)),o};function p(e){console.log(e)}function m(){s.value.reload()}function b(e){console.log("点击了编辑",e),i.push({name:"basic-info",params:{id:e.id}})}function f(e){console.log("点击了删除",e),window.$message.info("点击了删除")}return(e,o)=>{const h=x("n-button");return S(),T(I,null,[a(U,{title:"白名单"}),a(n(D),{bordered:!1,class:"proCard"},{default:t(()=>[a(n(w),{columns:n(v),request:d,"row-key":_=>_.id,ref_key:"actionRef",ref:s,"onUpdate:checkedRowKeys":p,"scroll-x":1090},{toolbar:t(()=>[a(h,{type:"primary",onClick:m},{default:t(()=>[V("刷新数据")]),_:1})]),_:1},8,["columns","row-key"])]),_:1})],64)}}});const K=R(B,[["__scopeId","data-v-c2a09142"]]);export{K as default};
