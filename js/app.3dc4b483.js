(function(e){function t(t){for(var o,r,i=t[0],s=t[1],c=t[2],u=0,m=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&m.push(n[r][0]),n[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);d&&d(t);while(m.length)m.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],o=!0,i=1;i<a.length;i++){var s=a[i];0!==n[s]&&(o=!1)}o&&(l.splice(t--,1),e=r(r.s=a[0]))}return e}var o={},n={app:0},l=[];function r(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=o,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(a,o,function(t){return e[t]}.bind(null,o));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var d=s;l.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"3d19":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("el-container",[a("el-aside",{staticClass:"el-aside",attrs:{width:"150px"}},[a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{router:"","default-active":"/users","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{open:e.handleOpen,close:e.handleClose}},[a("el-menu-item",{attrs:{index:"/users"}},[a("i",{staticClass:"el-icon-user"}),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("用户管理")])]),a("el-menu-item",{attrs:{index:"/goods"}},[a("i",{staticClass:"el-icon-goods"}),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("商品管理")])]),a("el-menu-item",{attrs:{index:"/analysis"}},[a("i",{staticClass:"el-icon-s-marketing"}),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("数据分析")])])],1)],1),a("el-main",[a("router-view")],1)],1)],1)},l=[],r={methods:{handleOpen:function(e,t){console.log(e,t)},handleClose:function(e,t){console.log(e,t)}}},i=r,s=(a("7faf"),a("2877")),c=Object(s["a"])(i,n,l,!1,null,null,null),d=c.exports,u=a("8c4f"),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"goods"},[e._v(" goods ")])},f=[],p={components:{}},g=p,h=Object(s["a"])(g,m,f,!1,null,null,null),b=h.exports,v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"manage"},[a("el-dialog",{attrs:{title:"add"===e.operateType?"新增用户":"更新用户",visible:e.isShow},on:{"update:visible":function(t){e.isShow=t}}},[a("common-form",{ref:"form",attrs:{formLabel:e.operateFormLabel,form:e.operateForm}}),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.isShow=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.confirm}},[e._v("确 定")])],1)],1),a("div",{staticClass:"manage-header"},[a("el-button",{attrs:{type:"primary"},on:{click:e.addUser}},[e._v("+ 新增")]),a("common-form",{attrs:{inline:"",formLabel:e.formLabel,form:e.searchFrom}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.getList(e.searchFrom.keyword)}}},[e._v("搜索")])],1)],1),a("common-table",{attrs:{tableData:e.tableData,tableLabel:e.tableLabel,config:e.config},on:{changePage:function(t){return e.getList()},edit:e.editUser,del:e.delUser}})],1)},y=[],w=(a("d81d"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"form",attrs:{inline:e.inline,model:e.form,"label-width":"100px"}},[e._l(e.formLabel,(function(t){return a("el-form-item",{key:t.model,attrs:{label:t.label}},[t.type?e._e():a("el-input",{attrs:{placeholder:"请输入"+t.label},model:{value:e.form[t.model],callback:function(a){e.$set(e.form,t.model,a)},expression:"form[item.model]"}}),"select"===t.type?a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form[t.model],callback:function(a){e.$set(e.form,t.model,a)},expression:"form[item.model]"}},e._l(t.opts,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1):e._e(),"switch"===t.type?a("el-switch",{model:{value:e.form[t.model],callback:function(a){e.$set(e.form,t.model,a)},expression:"form[item.model]"}}):e._e(),"date"===t.type?a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.form[t.model],callback:function(a){e.$set(e.form,t.model,a)},expression:"form[item.model]"}}):e._e()],1)})),a("el-form-item",[e._t("default")],2)],2)}),x=[],_={props:{inline:Boolean,form:Object,formLabel:Array}},k=_,O=Object(s["a"])(k,w,x,!1,null,"f1270198",null),R=O.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"common-table"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.config.loading,expression:"config.loading"}],attrs:{data:e.tableData,height:"90%",stripe:""}},[a("el-table-column",{attrs:{label:"序号",width:"85"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(20*(e.config.page-1)+t.$index+1))])]}}])}),e._l(e.tableLabel,(function(t){return a("el-table-column",{key:t.prop,attrs:{"show-overflow-tooltip":"",label:t.label,width:t.width?t.width:125},scopedSlots:e._u([{key:"default",fn:function(o){return[a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(o.row[t.prop]))])]}}],null,!0)})})),a("el-table-column",{attrs:{label:"操作","min-width":"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.handleEdit(t.row)}}},[e._v("编辑")]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],2),a("el-pagination",{staticClass:"pager",attrs:{layout:"prev, pager, next",total:e.config.total,"current-page":e.config.page,"page-size":20},on:{"update:currentPage":function(t){return e.$set(e.config,"page",t)},"update:current-page":function(t){return e.$set(e.config,"page",t)},"current-change":e.changePage}})],1)},$=[],L={props:{tableData:Array,tableLabel:Array,config:Object},methods:{handleEdit:function(e){this.$emit("edit",e)},handleDelete:function(e){this.$emit("del",e)},changePage:function(e){this.$emit("changePage",e)}}},B=L,U=(a("bc84"),Object(s["a"])(B,S,$,!1,null,null,null)),j=U.exports,C={components:{CommonForm:R,CommonTable:j},data:function(){return{operateType:"add",isShow:!1,tableData:[],tableLabel:[{prop:"name",label:"姓名"},{prop:"age",label:"年龄"},{prop:"sexLabel",label:"性别"},{prop:"birth",label:"出生日期",width:200},{prop:"addr",label:"地址",width:320}],config:{page:1,total:30,loading:!1},operateForm:{name:"",addr:"",age:"",birth:"",sex:""},operateFormLabel:[{model:"name",label:"姓名"},{model:"age",label:"年龄"},{model:"sex",label:"性别",type:"select",opts:[{label:"男",value:1},{label:"女",value:0}]},{model:"birth",label:"出生日期",type:"date"},{model:"addr",label:"地址"}],searchFrom:{keyword:""},formLabel:[{model:"keyword",label:""}]}},methods:{getList:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";console.log("列表搜索"+t),this.config.loading=!0,t&&(this.config.page=1),this.$http.get("/api/user/getUser",{params:{page:this.config.page,name:t}}).then((function(t){e.tableData=t.data.list.map((function(e){return e.sexLabel=0===e.sex?"女":"男",e})),e.config.total=t.data.count,e.config.loading=!1}))},addUser:function(){this.operateForm={},this.operateType="add",this.isShow=!0},editUser:function(e){this.operateType="edit",this.isShow=!0,this.operateForm=e},confirm:function(){var e=this;"edit"===this.operateType?(console.log(this.operateForm),this.$http.post("/api/user/edit",this.operateForm).then((function(t){console.log(t.data),e.isShow=!1,e.getList()}))):this.$http.post("/api/user/add",this.operateForm).then((function(t){console.log(t.data),e.isShow=!1,e.getList()}))},delUser:function(e){var t=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var a=e.id;t.$http.get("/api/user/del",{params:{id:a}}).then((function(e){console.log(e.data),t.$message({type:"success",message:"删除成功!"}),t.getList()}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))}},created:function(){this.getList()}},D=C,M=(a("6ed8"),Object(s["a"])(D,v,y,!1,null,null,null)),P=M.exports,F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"analysis"},[e._v("数据分析")])},T=[],E={},J=E,N=Object(s["a"])(J,F,T,!1,null,null,null),H=N.exports;o["default"].use(u["a"]);var V=[{path:"/",redirect:"/goods"},{path:"/goods",name:"goods",component:b},{path:"/users",name:"users",component:P},{path:"/analysis",name:"analysis",component:H}],z=new u["a"]({routes:V}),A=z,I=a("6255"),q=a.n(I),G=a("82ae"),K=a.n(G),Q=K.a.create({timeout:3e3});Q.interceptors.request.use((function(e){return e}),(function(e){console.log(e)})),Q.interceptors.response.use((function(e){var t={};return t.status=e.status,t.data=e.data,t}),(function(e){return console.log(e)}));var W=Q,X=a("03a1"),Y=a.n(X),Z=[],ee={getStatisticalData:function(){for(var e=0;e<7;e++)Z.push(Y.a.mock({"苹果":Y.a.Random.float(100,8e3,0,2),vivo:Y.a.Random.float(100,8e3,0,2),oppo:Y.a.Random.float(100,8e3,0,2),"魅族":Y.a.Random.float(100,8e3,0,2),"三星":Y.a.Random.float(100,8e3,0,2),"小米":Y.a.Random.float(100,8e3,0,2)}));return{code:2e4,data:{mallData:[{name:"小米",value:2999},{name:"苹果",value:5999},{name:"vivo",value:1500},{name:"oppo",value:1999},{name:"魅族",value:2200},{name:"三星",value:4500}],userData:[{date:"周一",new:5,active:200},{date:"周二",new:10,active:500},{date:"周三",new:12,active:550},{date:"周四",new:60,active:800},{date:"周五",new:65,active:550},{date:"周六",new:53,active:770},{date:"周日",new:33,active:170}],orderData:{date:["20191001","20191002","20191003","20191004","20191005","20191006","20191007"],data:Z},tableData:[{name:"oppo",todayBuy:Y.a.Random.float(100,1e3,0,2),monthBuy:Y.a.Random.float(3e3,5e3,0,2),totalBuy:Y.a.Random.float(4e4,1e6,0,2)},{name:"vivo",todayBuy:Y.a.Random.float(100,1e3,0,2),monthBuy:Y.a.Random.float(3e3,5e3,0,2),totalBuy:Y.a.Random.float(4e4,1e6,0,2)},{name:"苹果",todayBuy:Y.a.Random.float(100,1e3,0,2),monthBuy:Y.a.Random.float(3e3,5e3,0,2),totalBuy:Y.a.Random.float(4e4,1e6,0,2)},{name:"小米",todayBuy:Y.a.Random.float(100,1e3,0,2),monthBuy:Y.a.Random.float(3e3,5e3,0,2),totalBuy:Y.a.Random.float(4e4,1e6,0,2)},{name:"三星",todayBuy:Y.a.Random.float(100,1e3,0,2),monthBuy:Y.a.Random.float(3e3,5e3,0,2),totalBuy:Y.a.Random.float(4e4,1e6,0,2)},{name:"魅族",todayBuy:Y.a.Random.float(100,1e3,0,2),monthBuy:Y.a.Random.float(3e3,5e3,0,2),totalBuy:Y.a.Random.float(4e4,1e6,0,2)}]}}}};a("4de4"),a("caad"),a("c975"),a("45fc"),a("b0c0"),a("ac1f"),a("2532"),a("5319"),a("1276");function te(e){var t=e.split("?")[1];return t?JSON.parse('{"'+decodeURIComponent(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}}for(var ae=[],oe=200,ne=0;ne<oe;ne++)ae.push(Y.a.mock({id:Y.a.Random.guid(),name:Y.a.Random.cname(),addr:Y.a.mock("@county(true)"),"age|18-60":1,birth:Y.a.Random.date(),sex:Y.a.Random.integer(0,1)}));var le={getUserList:function(e){var t=te(e.url),a=t.name,o=t.page,n=void 0===o?1:o,l=t.limit,r=void 0===l?20:l;console.log("name:"+a,"page:"+n,"分页大小limit:"+r);var i=ae.filter((function(e){return!a||-1!==e.name.indexOf(a)||-1!==e.addr.indexOf(a)})),s=i.filter((function(e,t){return t<r*n&&t>=r*(n-1)}));return{code:2e4,count:i.length,list:s}},createUser:function(e){var t=JSON.parse(e.body),a=t.name,o=t.addr,n=t.age,l=t.birth,r=t.sex;return console.log(JSON.parse(e.body)),ae.unshift({id:Y.a.Random.guid(),name:a,addr:o,age:n,birth:l,sex:r}),{code:2e4,data:{message:"添加成功"}}},deleteUser:function(e){var t=te(e.url),a=t.id;return a?(ae=ae.filter((function(e){return e.id!==a})),{code:2e4,message:"删除成功"}):{code:-999,message:"参数不正确"}},batchremove:function(e){var t=te(e.url),a=t.ids;return a=a.split(","),ae=ae.filter((function(e){return!a.includes(e.id)})),{code:2e4,data:{message:"批量删除成功"}}},updateUser:function(e){var t=JSON.parse(e.body),a=t.id,o=t.name,n=t.addr,l=t.age,r=t.birth,i=t.sex,s=parseInt(i);return ae.some((function(e){if(e.id===a)return e.name=o,e.addr=n,e.age=l,e.birth=r,e.sex=s,!0})),{code:2e4,data:{message:"编辑成功"}}}},re={getMenu:function(e){var t=JSON.parse(e.body),a=t.username,o=t.password;return console.log(JSON.parse(e.body)),"admin"===a||"xiaoxiao"===a?"admin"===a&&"admin"===o?{code:2e4,data:{menu:[{path:"/",name:"home",label:"首页",icon:"s-home",url:"Home/Home"},{path:"/video",name:"video",label:"商品管理",icon:"video-play",url:"VideoManage/VideoManage"},{path:"/user",name:"user",label:"用户管理",icon:"user",url:"UserManage/UserManage"},{label:"其他",icon:"location",children:[{path:"/page1",name:"page1",label:"页面1",icon:"setting",url:"Other/PageOne"},{path:"/page2",name:"page2",label:"页面2",icon:"setting",url:"Other/PageTwo"}]}],token:Y.a.Random.guid(),message:"获取成功"}}:"xiaoxiao"===a&&"xiaoxiao"===o?{code:2e4,data:{menu:[{path:"/",name:"home",label:"首页",icon:"s-home",url:"Home/Home"},{path:"/video",name:"video",label:"商品管理",icon:"video-play",url:"VideoManage/VideoManage"}],token:Y.a.Random.guid(),message:"获取成功"}}:{code:-999,data:{message:"密码错误"}}:{code:-999,data:{message:"用户不存在"}}}};Y.a.mock(/\/home\/getData/,"get",ee.getStatisticalData),Y.a.mock(/\/user\/getUser/,"get",le.getUserList),Y.a.mock(/\/user\/del/,"get",le.deleteUser),Y.a.mock(/\/user\/batchremove/,"get",le.batchremove),Y.a.mock(/\/user\/add/,"post",le.createUser),Y.a.mock(/\/user\/edit/,"post",le.updateUser),Y.a.mock(/\/home\/getData/,"get",ee.getStatisticalData),Y.a.mock(/\/permission\/getMenu/,"post",re.getMenu),o["default"].config.productionTip=!1,o["default"].prototype.$http=W,o["default"].use(q.a),new o["default"]({router:A,render:function(e){return e(d)}}).$mount("#app")},"6ed8":function(e,t,a){"use strict";a("3d19")},"7faf":function(e,t,a){"use strict";a("b8ff")},aadd:function(e,t,a){},b8ff:function(e,t,a){},bc84:function(e,t,a){"use strict";a("aadd")}});
//# sourceMappingURL=app.3dc4b483.js.map