import{a,b as c}from"./chunk-E4P4CAIP.js";import{_ as i,ea as n,eb as p,p as o}from"./chunk-VU6Q4IP4.js";var u=`${window.location.origin}`,l={baseUrl:`${u}/kct/productivity/api/v1/`,uploadUrl:"http://10.21.14.55:9090/productivity/api/v1/",imgURL:"https://igateapp.stc.com.sa/"};var v={permission:"permission",permissionsGroups:"permission-groups",roles:"roles",userManagement:"users",statistics:"users/statistics",processAdmin:"process/admin",InitiateRequest:"process",processActivity:"process/activities/admin",processEmployeeActivity:"process/activities/employee",approveProcess:"process/approve",rejectProcess:"process/reject",processSupport:"process/support",objective:"process/objective"},y=`${l.baseUrl}`,d=r=>`${y}${r}`;var m=class r{constructor(t){this.endpoint=t;this.constructedUrl=d(this.endpoint)}http=n(c);constructedUrl;get(){return this.http.get(`${this.constructedUrl}`)}getAll(t,e){let s=e??`${this.constructedUrl}/filter`;return this.http.post(s,t)}getById(t){let e=`${this.constructedUrl}/${t}`;return this.http.get(e)}getSearchValues(t){let e=t?new a().set("q",t):void 0;return this.http.get(`${this.constructedUrl}/search-employees`,{params:e}).pipe(o(s=>s.payload))}create(t,e){let s=e??`${this.constructedUrl}`;return this.http.post(s,t)}update(t,e){return this.http.put(this.constructedUrl,t)}delete(t){return this.http.delete(`${this.constructedUrl}/${t}`)}static \u0275fac=function(e){p()};static \u0275prov=i({token:r,factory:r.\u0275fac,providedIn:"root"})};export{l as a,v as b,m as c};
