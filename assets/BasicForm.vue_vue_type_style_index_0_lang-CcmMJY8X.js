var D=Object.defineProperty;var C=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var w=(e,n,o)=>n in e?D(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,m=(e,n)=>{for(var o in n||(n={}))M.call(n,o)&&w(e,o,n[o]);if(C)for(var o of C(n))P.call(n,o)&&w(e,o,n[o]);return e};import{x as T,L as V,p as t,M as b,N as $,h as G}from"./entry/index-DShbtsWl.js";import{a2 as L,V as Y}from"./antd-BmrhB3rb.js";import{d as H,c as p,Z as c,a8 as r,a9 as l,aj as I,ac as f,u as a,ab as i,$ as q,k as j,ae as d,G as y,a0 as O,ag as E}from"./vue-BjERyvPm.js";const S=Symbol();function X(e){return T(e,S)}function J(){return V(S)}const _=H({name:"BasicFormAction",__name:"FormAction",props:{showActionButtonGroup:t.bool.def(!0),showResetButton:t.bool.def(!0),showSubmitButton:t.bool.def(!0),showAdvancedButton:t.bool.def(!0),resetButtonOptions:{type:Object,default:()=>({})},submitButtonOptions:{type:Object,default:()=>({})},actionColOptions:{type:Object,default:()=>({})},actionSpan:t.number.def(6),isAdvanced:t.bool,hideAdvanceBtn:t.bool},emits:["toggle-advanced"],setup(e,{emit:n}){const o=e,x=n,{t:u}=G(),{resetAction:k,submitAction:F}=J(),B=p(()=>{const{showAdvancedButton:s,actionSpan:g,actionColOptions:R}=o,v=24-g,z=s?{span:v<6?24:v}:{};return m(m({style:{textAlign:"right"},span:s?6:4},z),R)}),A=p(()=>Object.assign({text:u("common.resetText")},o.resetButtonOptions)),h=p(()=>Object.assign({text:u("common.queryText")},o.submitButtonOptions));function N(){x("toggle-advanced")}return(s,g)=>e.showActionButtonGroup?(c(),r(a(Y),I(f({key:0},B.value)),{default:l(()=>[q("div",{style:E([{width:"100%"},{textAlign:B.value.style.textAlign}])},[j(a(L).Item,null,{default:l(()=>[d(s.$slots,"resetBefore"),e.showResetButton?(c(),r(a(b),f({key:0,type:"default",class:"mr-2"},A.value,{onClick:a(k)}),{default:l(()=>[y(O(A.value.text),1)]),_:1},16,["onClick"])):i("",!0),d(s.$slots,"submitBefore"),e.showSubmitButton?(c(),r(a(b),f({key:1,type:"primary",class:"mr-2"},h.value,{onClick:a(F)}),{default:l(()=>[y(O(h.value.text),1)]),_:1},16,["onClick"])):i("",!0),d(s.$slots,"advanceBefore"),e.showAdvancedButton&&!e.hideAdvanceBtn?(c(),r(a(b),{key:2,type:"link",size:"small",onClick:N},{default:l(()=>[y(O(e.isAdvanced?a(u)("component.form.putAway"):a(u)("component.form.unfold"))+" ",1),j(a($),{class:"ml-1",expand:!e.isAdvanced,up:""},null,8,["expand"])]),_:1})):i("",!0),d(s.$slots,"advanceAfter")]),_:3})],4)]),_:3},16)):i("",!0)}}),tt={model:{type:Object,default:()=>({})},labelWidth:{type:[Number,String],default:0},fieldMapToTime:{type:Array,default:()=>[]},compact:t.bool,schemas:{type:Array,default:()=>[]},mergeDynamicData:{type:Object,default:null},baseRowStyle:{type:Object},baseColProps:{type:Object},autoSetPlaceHolder:t.bool.def(!0),autoSubmitOnEnter:t.bool.def(!1),submitOnReset:t.bool,submitOnChange:t.bool,size:t.oneOf(["default","small","large"]).def("default"),disabled:t.bool,emptySpan:{type:[Number,Object],default:0},showAdvancedButton:t.bool,transformDateFunc:{type:Function,default:e=>{var n,o;return(o=(n=e==null?void 0:e.format)==null?void 0:n.call(e,"YYYY-MM-DD HH:mm:ss"))!=null?o:e}},rulesMessageJoinLabel:t.bool.def(!0),autoAdvancedLine:t.number.def(3),alwaysShowLines:t.number.def(1),showActionButtonGroup:t.bool.def(!0),actionColOptions:Object,showResetButton:t.bool.def(!0),autoFocusFirstItem:t.bool,resetButtonOptions:Object,showSubmitButton:t.bool.def(!0),submitButtonOptions:Object,resetFunc:Function,submitFunc:Function,hideRequiredMark:t.bool,labelCol:Object,layout:t.oneOf(["horizontal","vertical","inline"]).def("horizontal"),tableAction:{type:Object},wrapperCol:Object,colon:t.bool,labelAlign:t.string,rowProps:Object};export{_,tt as b,X as c};
