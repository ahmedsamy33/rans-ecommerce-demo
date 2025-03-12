import{a as le}from"./chunk-UPIH32KN.js";import{a as P}from"./chunk-6NSU4D3N.js";import{c as ee}from"./chunk-DFF2A2V2.js";import{a as b,b as te}from"./chunk-XE4SEQK7.js";import{a as Y,b as Z}from"./chunk-Q75O5SUG.js";import{a as re}from"./chunk-V24KNJUK.js";import{b as E,e as O,j as ie,l as se,r as ae}from"./chunk-MTOQREGE.js";import"./chunk-IZOBXTRQ.js";import{b as oe,c as ne}from"./chunk-JEHFEJHR.js";import{a as V}from"./chunk-3LCGF45W.js";import"./chunk-SNTC6ISU.js";import"./chunk-5UOHSEQ7.js";import"./chunk-LGSLEHKQ.js";import{g as K,h as T,i as X}from"./chunk-6ZSGU6WM.js";import"./chunk-WJCMRRD3.js";import"./chunk-SYIRRWMM.js";import"./chunk-T3Q3DASN.js";import"./chunk-LLJ4QRQX.js";import"./chunk-EKTMPHIH.js";import"./chunk-E4P4CAIP.js";import{Ba as v,Db as U,Eb as B,Gb as g,Gc as J,J as F,Mb as q,Nb as k,Pb as M,Qb as A,Rb as s,Sb as a,Tb as y,Tc as $,Xb as _,_b as C,ac as p,cb as l,ea as f,kc as z,lb as D,lc as W,mb as G,na as m,oa as c,oc as d,qb as I,qc as j,vc as Q,xb as h,xc as H}from"./chunk-VU6Q4IP4.js";import{a as r,b as u}from"./chunk-TSRGIXR5.js";var pe=new O({label:"Template ",key:"template",validators:[E.required],class:"right-side input-white  col-span-12 md:col-span-3",fieldConfig:{styleHeight:"",styleWidth:12,fileOptions:{disableDelete:!1,maxFilesLimit:2,maxFileSize:50,maxFilesSize:100,allowedExtensions:[".xls",".xlsm",".xlsx",".xlt"]},isSelected:!0,isRequired:!0,onSelectedFiles:o=>console.log(o),removeSelectedFile:o=>console.log(o),removeUploadedFile:o=>console.log(o)}}),R=new ie({label:"This template has been approved by the VP",key:"isVP",value:!1,validators:[E.required],class:"right-side input-white  col-span-12 md:col-span-3"}),L=new O({label:"VP Approval ",key:"vpTemplate",class:"right-side input-white  col-span-12 md:col-span-3 hidden",fieldConfig:{styleHeight:"",styleWidth:12,fileOptions:{disableDelete:!1,maxFilesLimit:2,maxFileSize:50,maxFilesSize:100,allowedExtensions:[".xls",".xlsm",".xlsx",".xlt"]},isSelected:!0,isRequired:!0,onSelectedFiles:o=>console.log(o),removeSelectedFile:o=>console.log(o),removeUploadedFile:o=>console.log(o)}}),me=u(r({},V({text:"Submit",type:T.Submit})),{className:"btn btn--primary w-30"}),ce=u(r({},V({text:"Cancel",color:X.Warn,matType:K.Flat})),{className:"btn btn--light-gray w-30"}),N=new se({key:"download-template-ref",class:"my-4x",fieldConfig:{}});var ge=["downloadTemplateRef"];function _e(o,e){if(o&1){let t=_();s(0,"a",2),C("click",function(){m(t);let i=p();return c(i.downloadTemplate())}),y(1,"img",3),s(2,"span",4),d(3,"Download template"),a()()}}var S=class o{onTakeAction=v.required();processId=v(0);#e=f(ne);#o=f(P);#t;formFields=[pe,R,N,L];buttons=[ce,me];buttonClass="justify-content-start";downLoadTemplateRef=G("downloadTemplateRef");ngOnInit(){R.onChange=e=>this.togglePressed(e),N.fieldConfig.template=this.downLoadTemplateRef}onTakeEvent(e){let{buttonConfig:t,value:n}=e,i=b(n);t.type===T.Submit?(e.buttonConfig.isLoading=!0,i.processId=this.processId(),i.template=n.template&&n.template[0],i.vpTemplate=n.vpTemplate&&n.vpTemplate[0],this.uploadedTemplate(t,te(i,["template","vpTemplate"]))):this.onTakeAction()({buttonConfig:t,value:n},()=>{})}togglePressed(e){e?this.addValidatorsAndClasses():this.removeValidatorsAndClasses()}uploadedTemplate(e,t){return this.#o.uploadedTemplate(t).pipe(F(()=>e.isLoading=!1)).subscribe({next:n=>{this.#e.addAlert(r({message:"Template Uploaded successfully"},oe)),this.onTakeAction()({buttonConfig:e,value:t??{}},()=>{})}})}onFormGroupChange(e){e&&(this.#t=e)}addValidatorsAndClasses(){let e=this.#t?.get("vpTemplate");e?.addValidators(E.required),L.class="input-gray mb-2",e?.updateValueAndValidity()}removeValidatorsAndClasses(){let e=this.#t?.get("vpTemplate");e?.setValue(""),e?.setErrors(null),e?.clearValidators(),L.class="hidden",e?.updateValueAndValidity()}downloadTemplate(){let e="assets/templates/sample-template.xlsx",t=document.createElement("a");t.href=e,t.download="Sample upload templated with IDs.xlsx",t.click()}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=I({type:o,selectors:[["app-upload-template"]],viewQuery:function(t,n){t&1&&z(n.downLoadTemplateRef,ge,5),t&2&&W()},inputs:{onTakeAction:[1,"onTakeAction"],processId:[1,"processId"]},features:[Q([P])],decls:3,vars:4,consts:[["downloadTemplateRef",""],[3,"formGroupChange","event","formFields","buttons","isStickyForm","buttonClass"],[1,"flex","items-center","cursor-pointer","my-4x",3,"click"],["src","./assets/icons/btns/download.svg","alt","Download"],[1,"ms-2"]],template:function(t,n){if(t&1){let i=_();s(0,"lib-muk-dynamic-form",1),C("formGroupChange",function(w){return m(i),c(n.onFormGroupChange(w))})("event",function(w){return m(i),c(n.onTakeEvent(w))}),a(),h(1,_e,4,0,"ng-template",null,0,J)}t&2&&g("formFields",n.formFields)("buttons",n.buttons)("isStickyForm",!0)("buttonClass",n.buttonClass)},dependencies:[ae],styles:["a[_ngcontent-%COMP%]{font-size:13px;color:#7711c6;bottom:0;margin:15px 0}"]})};var Ce=()=>[import("./chunk-UDGLKYEV.js").then(o=>o.ProcessCardComponent),re,import("./chunk-DADFSTBX.js").then(o=>o.NgClass)],Te=o=>({"disable-btn":o});function xe(o,e){if(o&1){let t=_();s(0,"div",2)(1,"app-process-card",5)(2,"span",6),d(3,"Request Date 01 Dec 2023"),a(),s(4,"div",7)(5,"div",3)(6,"button",8),C("click",function(){let i=m(t).$implicit,x=p(2);return c(x.uploadTemplate(i))}),y(7,"img",9),d(8," Upload Template "),a()()()()()}if(o&2){let t=e.$implicit;l(),g("processRequest",t)("isShowMenu",!1),l(5),g("ngClass",H(4,Te,t.status!="PENDING"&&t.status!="REJECTED"))("disabled",t.status!="PENDING"&&t.status!="REJECTED")}}function ve(o,e){o&1&&(s(0,"div",3)(1,"p",10),d(2,"No Process Found"),a()())}function he(o,e){if(o&1){let t=_();s(0,"lib-muk-pagination",11),C("pageIndexChange",function(i){m(t);let x=p(2);return c(x.onPaginatorChange(i))}),a()}if(o&2){let t=p(2);g("config",t.paginationConfig)}}function ye(o,e){if(o&1&&(s(0,"div",1),M(1,xe,9,6,"div",2,k,!1,ve,3,0,"div",3),a(),h(4,he,1,1,"lib-muk-pagination",4)),o&2){let t=p();l(),A(t.processList()),l(3),q(t.processList().length?4:-1)}}function be(o,e){o&1&&(s(0,"div",13),y(1,"app-skeleton-process"),a())}function Ee(o,e){if(o&1&&(s(0,"div",12),M(1,be,2,0,"div",13,k),a()),o&2){let t=p();l(),A(t.skeletonCount)}}var de=class o{#e=b(Y);#o=f(ee);#t=f(P);isLoading=D(!1);paginationConfig=b(Z);processList=D([]);skeletonCount=new Array(12);status=v.required();constructor(){$(()=>{this.getProcessList(this.status())})}ngOnInit(){}getProcessList(e){e&&(this.#e.statuses=e==="ALL"?[]:[e]),this.isLoading.set(!0),this.#t.getAll(this.#e).pipe(F(()=>this.isLoading.set(!1))).subscribe({next:t=>{let{content:n,totalElements:i}=t.payload;this.processList.set(n),this.paginationConfig.totalItems=i}})}onPaginatorChange(e){this.#e.pageable.pageIndex=e,this.getProcessList()}uploadTemplate(e){this.openDialog({title:"Upload Template",message:"",content:null,component:S,inputs:{processId:e.id}},{width:"700px",height:"535px",panelClass:"custom-panel-class"})}openDialog(e,t){let n=this.#o.openDialog(u(r({},e),{inputs:u(r({},e.inputs),{onTakeAction:i=>this.onSendModalTakeEvent(i,n)})}),t)}onSendModalTakeEvent=(e,t)=>{let{buttonConfig:n}=e;n.type===T.Submit&&this.getProcessList(this.status()),t.close()};static \u0275fac=function(t){return new(t||o)};static \u0275cmp=I({type:o,selectors:[["app-process-list"]],inputs:{status:[1,"status"]},decls:7,vars:2,consts:[[1,"text-grey-200","text-sm","mb-3"],[1,"grid","grid-cols-12","gap-4"],[1,"lg:col-span-3","col-span-12"],[1,"col-span-12"],[3,"config"],[3,"processRequest","isShowMenu"],["requestedDate","",1,"truncated-tooltip","sub-title"],["viewTemplate","",1,"separator","col-span-12","mt-4"],[1,"btn","btn-coral","w-full",3,"click","ngClass","disabled"],["src","assets/icons/Upload-btn.svg","alt","Upload-btn.svg"],[1,"text-grey-200","text-center"],[3,"pageIndexChange","config"],[1,"grid","grid-cols-12","gap-4","mt-4"],[1,"col-span-12","lg:col-span-3"]],template:function(t,n){t&1&&(s(0,"section")(1,"h3",0),d(2),a(),h(3,ye,5,2)(4,Ee,3,0),U(5,3,Ce,null,4),a()),t&2&&(l(2),j(" Productivity Process Requests: ",n.processList().length," "),l(3),B(!n.isLoading()))},dependencies:[le],styles:[".btn[_ngcontent-%COMP%]{border-radius:8px;display:flex;padding:12px;flex-direction:row;justify-content:center;align-items:center;gap:10px;margin-top:14px;font-size:11px;font-weight:400;line-height:16px}.btn.btn-coral[_ngcontent-%COMP%]{background:#ff375e;color:#fff}.btn.btn-success[_ngcontent-%COMP%]{background:#00c48c;color:#fff}.btn.btn-secondary[_ngcontent-%COMP%]{background:#f7f7f7;color:#1d252d}.sub-title-report[_ngcontent-%COMP%]{color:#1d252d;font-size:12px;font-weight:400;line-height:16px}.separator[_ngcontent-%COMP%]{border-top:1px solid #f7f7f7}.disable-btn[_ngcontent-%COMP%]{opacity:.5}"]})};export{de as ProcessListComponent};
