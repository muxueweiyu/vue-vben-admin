import{_ as d}from"./BasicTable.vue_vue_type_script_setup_true_lang-jwRietvD.js";import"./TableImg.vue_vue_type_style_index_0_lang-CLOyFFuc.js";import"./index-Dkr6VmKA.js";import{u as _}from"./useTable-DZYBWrF0.js";import{getBasicColumns as f,getTreeTableData as b}from"./tableData-Btimr9NR.js";import{d as k,a7 as C,Z as y,_ as x,k as e,a9 as o,u as t,G as p}from"./vue-BjERyvPm.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-pWatLDmD.js";import"./FormItem.vue_vue_type_script_lang-BlYZUeGm.js";import"./componentMap-D7_wXCrD.js";import"./useFormItem-B4KjxddK.js";import"./antd-BmrhB3rb.js";import"./entry/index-DShbtsWl.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DHk6Ws1t.js";import"./index-M4UvXH9o.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-D6Hk7opE.js";import"./copyTextToClipboard-DUmgQPO1.js";import"./index-BO8b0fR2.js";import"./index-Dy3692QU.js";import"./index-wJ08BCMi.js";import"./useWindowSizeFn-Cuml40XT.js";import"./base64Conver-bBv-IO2K.js";import"./helper-3Z_qR1GZ.js";import"./BasicForm.vue_vue_type_style_index_0_lang-CcmMJY8X.js";import"./useForm-DDSjB-3j.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./onMountedOrActivated-DcvTUt7V.js";import"./useSortable-JDCtAH92.js";import"./download-D1UiuoyS.js";import"./select-BR0ceRuw.js";const T={class:"p-4"},Y=k({__name:"TreeTable",setup(g){const[m,{expandAll:s,collapseAll:l,expandRows:n,collapseRows:c}]=_({title:"树形表格",isTreeTable:!0,accordion:!0,rowSelection:{type:"checkbox",getCheckboxProps(a){return a.id==="0"?{disabled:!0}:{disabled:!1}}},titleHelpMessage:"树形组件不能和序列号列同时存在",columns:f(),dataSource:b(),rowKey:"id",showSelectionBar:!0});return(a,r)=>{const i=C("a-button");return y(),x("div",T,[e(t(d),{onRegister:t(m)},{toolbar:o(()=>[e(i,{type:"primary",onClick:t(s)},{default:o(()=>[p("展开全部")]),_:1},8,["onClick"]),e(i,{type:"primary",onClick:t(l)},{default:o(()=>[p("折叠全部")]),_:1},8,["onClick"]),e(i,{type:"primary",onClick:r[0]||(r[0]=u=>t(c)(["4"]))},{default:o(()=>[p("折叠第五行")]),_:1}),e(i,{type:"primary",onClick:r[1]||(r[1]=u=>t(n)(["4"]))},{default:o(()=>[p("展开第五行")]),_:1})]),_:1},8,["onRegister"])])}}});export{Y as default};
