(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/xinwenxinxi/add-or-update"],{"2d47":function(e,n,i){"use strict";var t={"w-picker":function(){return Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(i.bind(null,"7310"))}},r=function(){var e=this,n=e.$createElement;e._self._c},u=[];i.d(n,"b",(function(){return r})),i.d(n,"c",(function(){return u})),i.d(n,"a",(function(){return t}))},"34d6":function(e,n,i){},4009:function(e,n,i){"use strict";var t=i("34d6"),r=i.n(t);r.a},"48aa":function(e,n,i){"use strict";i.r(n);var t=i("90bc"),r=i.n(t);for(var u in t)"default"!==u&&function(e){i.d(n,e,(function(){return t[e]}))}(u);n["default"]=r.a},"90bc":function(e,n,i){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=r(i("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function u(e,n,i,t,r,u,a){try{var s=e[u](a),o=s.value}catch(c){return void i(c)}s.done?n(o):Promise.resolve(o).then(t,r)}function a(e){return function(){var n=this,i=arguments;return new Promise((function(t,r){var a=e.apply(n,i);function s(e){u(a,t,r,s,o,"next",e)}function o(e){u(a,t,r,s,o,"throw",e)}s(void 0)}))}}var s=function(){Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(function(){return resolve(i("7310"))}.bind(null,i)).catch(i.oe)},o={data:function(){return{ruleForm:{xinwenbiaoti:"",xinwenleibie:"",xinwentupian:"",xinwenshipin:"",xinwenxiangqing:"",faburiqi:"",thumbsupnum:"",crazilynum:"",clicktime:"",clicknum:""},xinwenleibieOptions:[],xinwenleibieIndex:0,user:{},ro:{xinwenbiaoti:!1,xinwenleibie:!1,xinwentupian:!1,xinwenshipin:!1,xinwenxiangqing:!1,faburiqi:!1,thumbsupnum:!1,crazilynum:!1,clicktime:!1,clicknum:!1}}},components:{wPicker:s},computed:{},onLoad:function(){var n=a(t.default.mark((function n(i){var r,u,a,s;return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.getStorageSync("nowTable"),n.next=3,this.$api.session(r);case 3:return u=n.sent,this.user=u.data,n.next=7,this.$api.option("xinwenleibie","xinwenleibie",{});case 7:if(u=n.sent,this.xinwenleibieOptions=u.data,this.ruleForm.userid=e.getStorageSync("userid"),i.refid&&(this.ruleForm.refid=i.refid),!i.id){n.next=17;break}return this.ruleForm.id=i.id,n.next=15,this.$api.info("xinwenxinxi",this.ruleForm.id);case 15:u=n.sent,this.ruleForm=u.data;case 17:if(!i.cross){n.next=64;break}a=e.getStorageSync("crossObj"),n.t0=t.default.keys(a);case 20:if((n.t1=n.t0()).done){n.next=64;break}if(s=n.t1.value,"xinwenbiaoti"!=s){n.next=26;break}return this.ruleForm.xinwenbiaoti=a[s],this.ro.xinwenbiaoti=!0,n.abrupt("continue",20);case 26:if("xinwenleibie"!=s){n.next=30;break}return this.ruleForm.xinwenleibie=a[s],this.ro.xinwenleibie=!0,n.abrupt("continue",20);case 30:if("xinwentupian"!=s){n.next=34;break}return this.ruleForm.xinwentupian=a[s],this.ro.xinwentupian=!0,n.abrupt("continue",20);case 34:if("xinwenshipin"!=s){n.next=38;break}return this.ruleForm.xinwenshipin=a[s],this.ro.xinwenshipin=!0,n.abrupt("continue",20);case 38:if("xinwenxiangqing"!=s){n.next=42;break}return this.ruleForm.xinwenxiangqing=a[s],this.ro.xinwenxiangqing=!0,n.abrupt("continue",20);case 42:if("faburiqi"!=s){n.next=46;break}return this.ruleForm.faburiqi=a[s],this.ro.faburiqi=!0,n.abrupt("continue",20);case 46:if("thumbsupnum"!=s){n.next=50;break}return this.ruleForm.thumbsupnum=a[s],this.ro.thumbsupnum=!0,n.abrupt("continue",20);case 50:if("crazilynum"!=s){n.next=54;break}return this.ruleForm.crazilynum=a[s],this.ro.crazilynum=!0,n.abrupt("continue",20);case 54:if("clicktime"!=s){n.next=58;break}return this.ruleForm.clicktime=a[s],this.ro.clicktime=!0,n.abrupt("continue",20);case 58:if("clicknum"!=s){n.next=62;break}return this.ruleForm.clicknum=a[s],this.ro.clicknum=!0,n.abrupt("continue",20);case 62:n.next=20;break;case 64:this.styleChange();case 65:case"end":return n.stop()}}),n,this)})));function i(e){return n.apply(this,arguments)}return i}(),methods:{styleChange:function(){this.$nextTick((function(){}))},faburiqiChange:function(e){this.ruleForm.faburiqi=e.target.value,this.$forceUpdate()},clicktimeConfirm:function(e){console.log(e),this.ruleForm.clicktime=e.result,this.$forceUpdate()},xinwenleibieChange:function(e){this.xinwenleibieIndex=e.target.value,this.ruleForm.xinwenleibie=this.xinwenleibieOptions[this.xinwenleibieIndex]},xinwentupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.xinwentupian=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},xinwenshipinTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.xinwenshipin=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=a(t.default.mark((function e(){return t.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.xinwenbiaoti){e.next=3;break}return this.$utils.msg("新闻标题不能为空"),e.abrupt("return");case 3:if(this.ruleForm.xinwenleibie){e.next=6;break}return this.$utils.msg("新闻类别不能为空"),e.abrupt("return");case 6:if(!this.ruleForm.thumbsupnum||this.$validate.isIntNumer(this.ruleForm.thumbsupnum)){e.next=9;break}return this.$utils.msg("赞应输入整数"),e.abrupt("return");case 9:if(!this.ruleForm.crazilynum||this.$validate.isIntNumer(this.ruleForm.crazilynum)){e.next=12;break}return this.$utils.msg("踩应输入整数"),e.abrupt("return");case 12:if(!this.ruleForm.clicknum||this.$validate.isIntNumer(this.ruleForm.clicknum)){e.next=15;break}return this.$utils.msg("点击次数应输入整数"),e.abrupt("return");case 15:if(!this.ruleForm.id){e.next=20;break}return e.next=18,this.$api.update("xinwenxinxi",this.ruleForm);case 18:e.next=22;break;case 20:return e.next=22,this.$api.add("xinwenxinxi",this.ruleForm);case 22:this.$utils.msgBack("提交成功");case 23:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,i=n.getFullYear(),t=n.getMonth()+1,r=n.getDate();return"start"===e?i-=60:"end"===e&&(i+=2),t=t>9?t:"0"+t,r=r>9?r:"0"+r,"".concat(i,"-").concat(t,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=o}).call(this,i("543d")["default"])},"95df":function(e,n,i){"use strict";(function(e){i("0d3c"),i("921b");t(i("66fd"));var n=t(i("d41b"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,i("543d")["createPage"])},d41b:function(e,n,i){"use strict";i.r(n);var t=i("2d47"),r=i("48aa");for(var u in r)"default"!==u&&function(e){i.d(n,e,(function(){return r[e]}))}(u);i("4009");var a,s=i("f0c5"),o=Object(s["a"])(r["default"],t["b"],t["c"],!1,null,"1f55d51e",null,!1,t["a"],a);n["default"]=o.exports}},[["95df","common/runtime","common/vendor"]]]);