(function(t){function e(e){for(var i,a,l=e[0],s=e[1],c=e[2],d=0,p=[];d<l.length;d++)a=l[d],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&p.push(n[a][0]),n[a]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],i=!0,l=1;l<o.length;l++){var s=o[l];0!==n[s]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=o[0]))}return t}var i={},n={app:0},r=[];function a(e){if(i[e])return i[e].exports;var o=i[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=i,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(o,i,function(e){return t[e]}.bind(null,i));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/reset-fields-to-first-open-dialog/dist/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=s;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"13ec":function(t,e,o){"use strict";o("3c62")},"3c62":function(t,e,o){},"52de":function(t,e,o){"use strict";o("85e9")},"56d7":function(t,e,o){"use strict";o.r(e);var i=o("2b0e"),n=o("5c96"),r=o.n(n),a=(o("0fae"),function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"center"},[e("div",{staticClass:"margin"},[t._v("将要传入弹框组件的数据: "+t._s(t.injectData))]),e("Dialog",{attrs:{"prop-data":t.injectData}}),e("el-button",{staticClass:"margin",on:{click:t.change}},[t._v(" injectData.id++")])],1),t._m(0)])}),l=[function(){var t=this,e=t._self._c;return e("div",[t._v(" 复现步骤： "),e("ol",[e("li",[t._v("先打开一次弹框（此时传进去的是 1，正常），随便填写内容，然后关闭弹框")]),e("li",[t._v("点击修改 id 的按钮")]),e("li",[t._v(" 再次打开弹框（此时传进去的是 2，且content字段是空的，正常）随便填写内容，然后关闭弹框 ")]),e("li",[t._v("不要修改 id，直接再次打开弹框（此时 id 为 1，不正常）")])])])}],s=function(){var t=this,e=t._self._c;return e("div",[e("el-button",{attrs:{type:"primary"},on:{click:t.openDialog}},[t._v("点击打开弹框")]),e("el-dialog",{staticClass:"dialog",attrs:{title:"提示",visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e},closed:t.hideDialog}},[e("span",[t._v("prop传进来的内容："+t._s(t.propData))]),e("el-form",{ref:"formRef",attrs:{model:t.form,"label-width":"100px"}},[e("el-form-item",{attrs:{prop:"id",label:"form.id"}},[e("el-input",{attrs:{disabled:""},model:{value:t.form.id,callback:function(e){t.$set(t.form,"id",e)},expression:"form.id"}})],1),e("el-form-item",{attrs:{prop:"content",label:"form.content"}},[e("el-input",{model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1)],1),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:t.hideDialog}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:t.confirm}},[t._v("确 定")])],1)],1)],1)},c=[],u={props:{propData:{type:Object,default:()=>({})}},data(){return{form:{id:this.propData.id||"",content:""},dialogVisible:!1}},watch:{propData:{deep:!0,immediate:!0,handler(t){console.log("watch"),this.form.id=t.id}}},methods:{openDialog(){this.dialogVisible=!0},hideDialog(){this.$refs.formRef.resetFields(),this.dialogVisible=!1},async confirm(){this.$message({message:"提交成功",type:"success"}),this.hideDialog()}}},d=u,p=(o("52de"),o("2877")),f=Object(p["a"])(d,s,c,!1,null,"f704faa8",null),m=f.exports,v={name:"App",computed:{},data(){return{injectData:{id:1}}},components:{Dialog:m},methods:{change(){this.injectData.id++}}},b=v,h=(o("13ec"),Object(p["a"])(b,a,l,!1,null,"cd69917e",null)),g=h.exports;i["default"].config.productionTip=!1,i["default"].use(r.a),new i["default"]({render:t=>t(g)}).$mount("#app")},"85e9":function(t,e,o){}});
//# sourceMappingURL=app.88593a5e.js.map