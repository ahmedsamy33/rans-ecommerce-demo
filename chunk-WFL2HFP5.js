import{a as p,c}from"./chunk-76MIRPDM.js";import{a as D}from"./chunk-UZW6OXPX.js";import{d as x,g as P,h as d,k as R,r as A}from"./chunk-MTOQREGE.js";import{a as s}from"./chunk-3LCGF45W.js";import{b as _,c as k}from"./chunk-SNTC6ISU.js";import{g as F,h as C,i as m}from"./chunk-6ZSGU6WM.js";import{Ba as h,Gb as N,Rb as g,Sb as u,_ as S,_b as E,cb as v,lb as r,oc as y,p as f,qb as T}from"./chunk-VU6Q4IP4.js";import{a as n,b as t,d as I}from"./chunk-TSRGIXR5.js";var B=class e extends k{constructor(){super(_.userManagement)}getUsersManagement(a){return this.getAll(a).pipe(f(o=>this.mappingUsersResponse(o)))}mappingUsersResponse(a){let b=a.payload,{content:o}=b,i=I(b,["content"]);return o=o.map(l=>t(n({},l),{roles:l?.roles?.map(U=>U.roleName),lineManager:l?.lineManager?.name??"N/A",pmoCustodian:l?.pmoCustodian?.name??"N/A",pmoCustodianImage:l?.pmoCustodian?.profileImage,lineManagerImage:l?.lineManager?.profileImage})),{payload:t(n({},i),{content:o})}}getUserById(a){return this.getById(a).pipe(f(o=>o.payload),f(o=>t(n({},o),{roleIds:o.roles.map(i=>i.id),pmoCustodianId:o.pmoCustodian?.id,lineManagerId:o.lineManager?.id})))}static \u0275fac=function(o){return new(o||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})};var O=new d(t(n({},p({label:"Assign Task To",placeholder:"Select user",key:"assignTo"})),{class:"input-gray",fieldConfig:t(n({},c()),{options:r([]),onRemove:e=>console.log("remove",e),onButtonClick:e=>console.log(e),onScroll:e=>console.log("onScroll",e),onSearch:e=>console.log("onSearch",e)}),onChange:e=>console.log("onChange",e)})),M=t(n({},s({text:"Save",type:C.Submit})),{className:"btn btn--dark-gray w-40"}),w=t(n({},s({text:"Cancel",color:m.Warn,matType:F.Flat})),{className:"btn btn--light-gray w-40"});var L=class e{onTakeAction=h.required();isDisabled=r(!1);isLoading=r(!1);formFields=[O];buttons=[M,w];buttonClass="justify-content-start";onTakeEvent(a){let{buttonConfig:o,value:i}=a;o.type===C.Submit?this.onSubmit(o,i):this.onTakeAction()({buttonConfig:o,value:i},()=>{})}onSubmit(a,o){this.onTakeAction()({buttonConfig:a,value:o??{}},()=>{})}static \u0275fac=function(o){return new(o||e)};static \u0275cmp=T({type:e,selectors:[["app-deactivate-popup"]],inputs:{onTakeAction:[1,"onTakeAction"]},decls:10,vars:3,consts:[[1,""],[1,"mt-4","px-6"],[1,"mb-2"],[1,"text-extended-dark-slate","text-sm"],[1,"text-extended-violet","text-sm","font-semibold"],[1,"text-grey-200","text-xs"],[3,"event","formFields","buttons","isStickyForm"]],template:function(o,i){o&1&&(g(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),y(4,"Are you sure you want to deactivate"),u(),g(5,"span",4),y(6," Nasir Ali Aldusari"),u()(),g(7,"div",5),y(8," You need to assign the user\u2019s tas to another delegate before deactivation "),u()(),g(9,"lib-muk-dynamic-form",6),E("event",function(l){return i.onTakeEvent(l)}),u()()),o&2&&(v(9),N("formFields",i.formFields)("buttons",i.buttons)("isStickyForm",!0))},dependencies:[A],encapsulation:2})};var de=t(n({},s({text:"User Permissions",icon:"add"})),{className:"btn btn--light btn--user-permission",onClick:e=>{}}),ge=t(n({},s({text:"Add new user",icon:"remove",color:m.Accent})),{className:"btn btn--primary btn--add-user",onClick:e=>{}}),ue=t(n({},s({text:"Submit",color:m.Basic})),{onClick:e=>{}}),fe=t(n({},s({text:"Cancel",color:m.Accent})),{onClick:e=>{},className:"mx-2"});var Te=new d(t(n({},p({placeholder:"Roles",key:"roleIds",parentClass:"grid grid-cols-12 gap-4x",class:"left-side dropdown-no-border col-span-12 md:col-span-1  "})),{fieldConfig:t(n({},c()),{isSearchable:!0,isMultiple:!0,options:r([]),optionsConfig:{labelPath:"roleName",valuePath:"id"},onRemove:e=>console.log("remove",e),onButtonClick:e=>console.log(e),onScroll:e=>console.log("onScroll",e),onSearch:e=>console.log("onSearch",e)}),onChange:e=>console.log("onChange",e)})),Ne=new R({key:"date",class:"left-side date-no-border data-ranger ",isDisabled:r(!1),fieldConfig:{placeholderStartDate:"From",placeholderEndDate:"To",dateValueChanged:e=>console.log(e),onStartDateChanged:e=>console.log(e),onEndDateChanged:e=>console.log(e)}}),Ee=new d(t(n({},p({placeholder:"PMO Custodian",key:"pmoCustodianId",class:"left-side dropdown-no-border col-span-12 md:col-span-2"})),{fieldConfig:t(n({},c()),{isSearchable:!0,isMultiple:!0,options:r([]),optionsConfig:{labelPath:"name",valuePath:"id"},onRemove:e=>console.log("remove",e),onButtonClick:e=>console.log(e),onScroll:e=>console.log("onScroll",e),onSearch:e=>console.log("onSearch",e)}),onChange:e=>console.log("onChange",e)})),Fe=new d(t(n({},p({placeholder:"Line Manager",key:"lineManagerId",class:"left-side dropdown-no-border col-span-12 md:col-span-2"})),{fieldConfig:t(n({},c()),{isSearchable:!0,isMultiple:!0,options:r([]),optionsConfig:{labelPath:"name",valuePath:"id"},onRemove:e=>console.log("remove",e),onButtonClick:e=>console.log(e),onScroll:e=>console.log("onScroll",e),onSearch:e=>console.log("onSearch",e)}),onChange:e=>console.log("onChange",e)})),_e=new P(n({},D({placeholder:"Search....",key:"query",class:"right-side input-white",icon:"search",fieldConfig:{type:x.Search}})));export{B as a,L as b,Te as c,Ne as d,Ee as e,Fe as f,_e as g,de as h,ge as i,ue as j,fe as k};
