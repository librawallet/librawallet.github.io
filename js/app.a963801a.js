(function(e){function t(t){for(var a,i,c=t[0],o=t[1],u=t[2],d=0,A=[];d<c.length;d++)i=c[d],r[i]&&A.push(r[i][0]),r[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);l&&l(t);while(A.length)A.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,c=1;c<n.length;c++){var o=n[c];0!==r[o]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},s=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=o;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"07b9":function(e,t,n){},2431:function(e,t){e.exports="data:image/png;base64,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"},"29d5":function(e,t,n){e.exports=n.p+"img/qr-scaner-border.6219f24d.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("14c6"),n("08c1"),n("4842"),n("d9fc");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),n("Footer")],1)},s=[],i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[n("p",[n("a",{attrs:{target:"_blank",href:"https://github.com/librawallet"}},[e._v("https://github.com/librawallet")])])])}],o={name:"Footer"},u=o,l=(n("b2d7"),n("2877")),d=Object(l["a"])(u,i,c,!1,null,"77095d08",null),A=d.exports,h={name:"App",components:{Footer:A}},p=h,f=(n("034f"),n("633f"),Object(l["a"])(p,r,s,!1,null,"8da1a00c",null)),m=f.exports,b=n("8c4f"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Wallet")],1)},g=[],k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"wallet-container"},[n("div",{staticClass:"wallet-body"},[this.userAddress?n("div",[e.balance?n("div",{staticClass:"balance"},[n("nut-price",{staticClass:"price",attrs:{price:e.balance,needSymbol:!1,thousands:!0}}),n("span",{staticStyle:{color:"#fff"}},[e._v(" Libra")])],1):n("div",{staticClass:"balance"},[n("span",[e._v("加载中 ...")])]),n("div",{staticClass:"refresh"},[n("a",{on:{click:e.refreshBalance}},[n("b-icon",{attrs:{icon:"refresh",size:"is-small"}}),e._v("\n          "+e._s(e.isQueryBalance?"获取中。。。":"刷新余额")+"\n        ")],1)]),n("div",{staticClass:"button-box"},[n("b-button",{attrs:{"icon-left":"send"},on:{click:e.openSend}},[e._v("付款")]),n("b-button",{attrs:{"icon-left":"qrcode"},on:{click:e.openReceive}},[e._v("收款")])],1)]):n("div",{staticClass:"creating-wallet"},[n("span",[e._v("正在创建钱包 ...")]),n("vue-loading",{attrs:{type:"bars",color:"#7957d5",size:{width:"50px",height:"50px"}}})],1)])])},C=[],S=n("cebc"),O=(n("96cf"),n("3b8d")),y=(n("a481"),n("6b54"),n("7dc5")),w=n("bc3a"),B=n.n(w),Q=n("d225"),x=n("b0b4"),j=n("8ded"),E=n.n(j),D=function(){function e(){Object(Q["a"])(this,e),void 0!==E.a.get("userAddress")?(this.userAddress=E.a.get("userAddress"),this.balance=E.a.get("balance"),this.mnemonic=E.a.get("mnemonic")):(this.userAddress="",this.balance="",this.mnemonic="")}return Object(x["a"])(e,[{key:"update",value:function(e,t,n){this.userAddress=e,this.balance=t,this.mnemonic=n}},{key:"save",value:function(){E.a.set("userAddress",this.userAddress),E.a.set("balance",this.balance),E.a.set("mnemonic",this.mnemonic)}},{key:"updateUserBalance",value:function(e){this.balance=e,E.a.set("balance",this.balance)}}]),e}(),U=D,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"avatar"})},I=[],R=(n("c5f6"),n("c35d")),W={name:"Avatar",props:{seed:{type:String,required:!0},size:{type:Number,default:10}},created:function(){var e=this,t=Object(R["a"])({seed:this.seed,size:this.size});t.style.borderRadius="50%",this.$nextTick(function(){e.$refs.avatar.appendChild(t)})}},N=W,J=Object(l["a"])(N,T,I,!1,null,null,null),M=J.exports,F=n("2f62"),q={name:"Wallet",components:{Avatar:M},filters:{numberWithComma:function(e){e=e.toString();var t=/(-?\d+)(\d{3})/;while(t.test(e))e=e.replace(t,"$1,$2");return e}},data:function(){return{network:null,message:"",byteLength:"",transactionHash:"",userData:null,updateingBalance:!1,isQueryBalance:!1}},created:function(){var e=Object(O["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.userData=new U,!this.userData.userAddress){e.next=7;break}return this.updateUserData({userAddress:this.userData.userAddress,userAddressShort:this.userData.userAddress.substring(0,5),balance:this.userData.balance,mnemonic:this.userData.mnemonic}),e.next=5,this.queryBalance();case 5:e.next=12;break;case 7:return e.next=9,this.createNewWallet();case 9:return t=e.sent,e.next=12,this.updatePersistance(t.address,t.balance,t.mnemonic);case 12:this;case 13:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),computed:Object(S["a"])({},Object(F["c"])({userAddress:function(e){return e.userAddress},balance:function(e){return e.balance},mnemonic:function(e){return e.mnemonic}}),{shortUserAddr:function(){if(!this.userAddress)return"Loading...";var e=this.userAddress.substr(0,7),t=this.userAddress.substr(this.userAddress.length-7,this.userAddress.length);return"".concat(e,"...").concat(t)}}),methods:Object(S["a"])({},Object(F["b"])({updateUserData:"updateUserData",updateBalance:"updateBalance"}),{createNewWallet:function(){var e=Object(O["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B.a.post(y.api+"/createWallet");case 3:return t=e.sent,n=t.data,this.updateUserData({userAddress:n.address,userAddressShort:n.address.substring(0,5),balance:n.balance,mnemonic:n.mnemonic}),e.abrupt("return",n);case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0);case 12:case"end":return e.stop()}},e,this,[[0,9]])}));function t(){return e.apply(this,arguments)}return t}(),refreshBalance:function(){var e=Object(O["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.isQueryBalance=!0,e.next=3,this.queryBalance();case 3:this.isQueryBalance=!1;case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),queryBalance:function(){var e=Object(O["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,B.a.post(y.api+"/getBalance",{address:this.userAddress});case 2:return t=e.sent,n=t.data,this.updateBalance(n.balance),this.userData.updateUserBalance(n.balance),e.abrupt("return",n);case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),updatePersistance:function(){var e=Object(O["a"])(regeneratorRuntime.mark(function e(t,n,a){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.userData.update(t,n,a),this.userData.save();case 2:case"end":return e.stop()}},e,this)}));function t(t,n,a){return e.apply(this,arguments)}return t}(),openSend:function(){this.$router.push({name:"Send"})},openReceive:function(){this.$router.push({name:"Receive",query:{address:this.userAddress}})},doUpdateBalance:function(){var e=Object(O["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.updateingBalance=!0,this.$toast.open("Updating balance...."),e.next=4,this.queryBalance();case 4:t=e.sent,t&&(this.updateingBalance=!1);case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()})},P=q,G=(n("f6dc"),Object(l["a"])(P,k,C,!1,null,"66821294",null)),H=G.exports,K={name:"home",components:{Wallet:H}},L=K,Z=Object(l["a"])(L,v,g,!1,null,null,null),z=Z.exports,_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("nut-navbar",{attrs:{leftShow:!0,rightShow:!0},on:{"on-click-back":e.back,"on-click-more":e.scan}},[e._v("付款\n    "),a("a",{attrs:{slot:"more-icon"},slot:"more-icon"},[a("img",{staticStyle:{"margin-top":"5px"},attrs:{src:n("2431"),width:"30",alt:""}})])]),a("Transfer")],1)},V=[],X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Wallet"},[n("VueElementLoading",{attrs:{active:e.isTransfering,spinner:"bar-fade-scale",color:"#9b67df",text:"支付中，请稍后 ...","is-full-screen":""}}),n("section",{staticClass:"wallet-container"},[n("div",{staticClass:"wallet-body"},[n("div",{staticClass:"input-box"},[n("b-field",{attrs:{label:"对方账户"}},[n("b-input",{attrs:{placeholder:"请输入对方账户"},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}})],1)],1),n("div",{staticClass:"input-box"},[n("b-field",{attrs:{label:"金额"}},[n("b-input",{attrs:{placeholder:"请输入金额",type:"number"},model:{value:e.amount,callback:function(t){e.amount=t},expression:"amount"}})],1)],1),n("div",{staticClass:"button-box"},[n("b-button",{attrs:{type:"is-success"},on:{click:e.transfer}},[e._v("确认支付")]),n("b-button",{on:{click:e.back}},[e._v("取消支付")])],1)])])],1)},$=[],Y=n("6ad0"),ee=n.n(Y),te={name:"Wallet",data:function(){return{address:"",amount:"",isTransfering:!1}},components:{VueElementLoading:ee.a},created:function(){this.mnemonic||this.$router.push({name:"Wallet"}),this.$route.query&&this.$route.query.to&&(this.address=this.$route.query.to,this.updateUserAddress(this.$route.query.to))},computed:Object(S["a"])({},Object(F["c"])({userAddress:function(e){return e.userAddress},mnemonic:function(e){return e.mnemonic}})),methods:Object(S["a"])({},Object(F["b"])({updateUserAddress:"updateUserAddress"}),{back:function(){this.$router.push({name:"Wallet"})},transfer:function(){var e=Object(O["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!(64==this.address.length&&this.amount>0)){e.next=8;break}return this.isTransfering=!0,e.next=4,B.a.post(y.api+"/transfer",{fromAddress:this.userAddress,mnemonic:this.mnemonic,toAddress:this.address,amount:this.amount});case 4:this.isTransfering=!1,this.$router.push({name:"Wallet"}),e.next=9;break;case 8:this.$dialog({title:"提示",content:"请输入地址 / 金额",noCancelBtn:!0,onOkBtn:function(e){this.close()}});case 9:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()})},ne=te,ae=(n("804f"),n("a5d3"),Object(l["a"])(ne,X,$,!1,null,"4dbd65aa",null)),re=ae.exports,se={name:"home",components:{Transfer:re},methods:{back:function(){this.$router.push({name:"Wallet"})},scan:function(){this.$router.push({name:"ScanQR"})}}},ie=se,ce=Object(l["a"])(ie,_,V,!1,null,null,null),oe=ce.exports,ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("nut-navbar",{attrs:{leftShow:!0,rightShow:!1},on:{"on-click-back":e.back}},[e._v("收款")]),n("WalletInfo")],1)},le=[],de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wallet-container"},[n("div",{staticClass:"card"},[n("qrcode-vue",{staticClass:"qrcode",attrs:{value:e.userAddress,size:e.size,background:"#FFFFFF",level:"H"}}),n("div",{staticClass:"address content"},[e._v(e._s(e.userAddress))]),n("div",{staticClass:"button-box"},[n("b-button",{attrs:{"icon-left":"content-copy"},on:{click:e.copyAddress}},[e._v("复制地址")])],1)],1)])},Ae=[],he=n("d7b0"),pe={name:"Wallet",components:{QrcodeVue:he["a"]},data:function(){return{size:200}},computed:Object(S["a"])({},Object(F["c"])({userAddress:function(e){return e.userAddress}})),created:function(){this.$route.query&&this.$route.query.address?this.updateUserAddress(this.$route.query.address):this.userAddress?this.updateUserAddress(this.userAddress):this.$router.push({name:"Wallet"})},methods:Object(S["a"])({},Object(F["b"])({updateUserAddress:"updateUserAddress"}),{back:function(){this.$router.push({name:"Wallet"})},copyAddress:function(){this.copyText(this.userAddress)},copyText:function(e){var t=this;this.$copyText(e).then(function(e){t.$toast.text("已复制")})},copyPublicLink:function(){this.copyText(this.shareUrl)}})},fe=pe,me=(n("7c1b"),n("ea36"),Object(l["a"])(fe,de,Ae,!1,null,"76429eb2",null)),be=me.exports,ve={name:"home",components:{WalletInfo:be,Footer:A},methods:{back:function(){this.$router.push({path:"/",name:"Wallet"})}}},ge=ve,ke=Object(l["a"])(ge,ue,le,!1,null,null,null),Ce=ke.exports,Se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("nut-navbar",{attrs:{leftShow:!0,rightShow:!1},on:{"on-click-back":e.back,"on-click-more":e.scan}},[e._v("扫码")]),n("QRScanner")],1)},Oe=[],ye=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Wallet"},[a("section",{staticClass:"wallet-container hero is-medium is-primary is-bold"},[a("div",{staticClass:"wallet-body"},[a("div",{staticClass:"qr-scanner"},[a("qrcode-stream",{on:{init:e.onInit,decode:e.onDecode}}),e.loading?e._e():a("img",{attrs:{src:n("29d5")}})],1)])])])},we=[],Be=n("9a3e"),Qe={name:"Wallet",components:{QrcodeStream:Be["QrcodeStream"]},data:function(){return{qrString:"",loading:!1}},methods:{sendWithManualAddress:function(){this.$router.push({name:"Send"})},back:function(){this.$router.push({name:"Wallet"})},onInit:function(){var e=Object(O["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.prev=1,e.next=4,t;case 4:e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](1),this.$toast.open({message:"QR scanner error.",type:"is-danger"});case 9:return e.prev=9,this.loading=!1,e.finish(9);case 12:case"end":return e.stop()}},e,this,[[1,6,9,12]])}));function t(t){return e.apply(this,arguments)}return t}(),onDecode:function(e){64===e.length&&this.$router.push({name:"Send",query:{to:e}})}}},xe=Qe,je=(n("a5c1"),Object(l["a"])(xe,ye,we,!1,null,"6d4bd15e",null)),Ee=je.exports,De={name:"home",components:{QRScanner:Ee},methods:{back:function(){this.$router.push({name:"Send"})}}},Ue=De,Te=Object(l["a"])(Ue,Se,Oe,!1,null,null,null),Ie=Te.exports,Re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Stats")],1)},We=[],Ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("section",{staticClass:"hero is-primary"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[e._v("\n          "+e._s(Number(e.wallets).toLocaleString())+"\n        ")]),n("h2",{staticClass:"subtitle"},[e._v("\n          Wallets\n        ")])])])]),n("section",{staticClass:"hero is-info"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[e._v("\n          "+e._s(Number(e.transactions).toLocaleString())+"\n        ")]),n("h2",{staticClass:"subtitle"},[e._v("\n          Transactions\n        ")])])])])])},Je=[],Me={name:"Wallet",data:function(){return{wallets:"",transactions:""}},created:function(){var e=Object(O["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.getStats();case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),computed:{},methods:{getStats:function(){var e=Object(O["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B.a.post(y.api+"/stats");case 3:return t=e.sent,n=t.data,console.log(n),this.wallets=n.wallets,this.transactions=n.transactions,e.abrupt("return",n);case 11:e.prev=11,e.t0=e["catch"](0),console.log(e.t0);case 14:case"end":return e.stop()}},e,this,[[0,11]])}));function t(){return e.apply(this,arguments)}return t}()}},Fe=Me,qe=Object(l["a"])(Fe,Ne,Je,!1,null,"71d29da3",null),Pe=qe.exports,Ge={name:"home",components:{Stats:Pe}},He=Ge,Ke=Object(l["a"])(He,Re,We,!1,null,null,null),Le=Ke.exports;a["default"].use(b["a"]);var Ze=new b["a"]({routes:[{path:"/",name:"Wallet",component:z},{path:"/send",name:"Send",component:oe},{path:"/receive",name:"Receive",component:Ce},{path:"/scanQR",name:"ScanQR",component:Ie},{path:"/stats",name:"Stats",component:Le},{path:"/blog",name:"Blog",beforeEnter:function(){location.href="https://medium.com/kulapofficial/the-first-libra-wallet-poc-building-your-own-wallet-and-apis-3cb578c0bd52"}}]});a["default"].use(F["a"]);var ze=new F["a"].Store({state:{userAddress:"",userAddressShort:"",balance:"",mnemonic:"",toAddress:""},actions:{updateUserData:function(e,t){var n=e.commit,a=t.userAddress,r=t.userAddressShort,s=t.balance,i=t.mnemonic;n("updateUserData",{userAddress:a,userAddressShort:r,balance:s,mnemonic:i})},updateBalance:function(e,t){var n=e.commit;n("updateBalance",t)},updateUserAddress:function(e,t){var n=e.commit;n("updateUserAddress",t)}},mutations:{updateUserData:function(e,t){var n=t.userAddress,a=t.userAddressShort,r=t.balance,s=t.mnemonic;e.userAddress=n,e.userAddressShort=a,e.balance=r,e.mnemonic=s},updateBalance:function(e,t){e.balance=t},updateUserAddress:function(e,t){e.userAddress=t}}}),_e=n("8a03"),Ve=n.n(_e),Xe=n("d523"),$e=n.n(Xe),Ye=n("4eb5"),et=n.n(Ye),tt=n("5299"),nt=n.n(tt),at=(n("5abe"),n("5aea"),n("3822")),rt=n.n(at);n("8ce9");a["default"].use(Ve.a),a["default"].use($e.a),et.a.config.autoSetContainer=!0,a["default"].use(et.a),a["default"].use(nt.a),rt.a.install(a["default"]),a["default"].config.productionTip=!1,new a["default"]({router:Ze,store:ze,render:function(e){return e(m)}}).$mount("#app")},"5aea":function(e,t,n){},"633f":function(e,t,n){"use strict";var a=n("9c1d"),r=n.n(a);r.a},"64a9":function(e,t,n){},6668:function(e,t,n){},"7c1b":function(e,t,n){"use strict";var a=n("6668"),r=n.n(a);r.a},"7dc5":function(e){e.exports={api:"https://libraservice2.kulap.io"}},"804f":function(e,t,n){"use strict";var a=n("9a9f"),r=n.n(a);r.a},"9a9f":function(e,t,n){},"9c1d":function(e,t,n){},a5c1:function(e,t,n){"use strict";var a=n("e0ea"),r=n.n(a);r.a},a5d3:function(e,t,n){"use strict";var a=n("be52"),r=n.n(a);r.a},b2d7:function(e,t,n){"use strict";var a=n("d096"),r=n.n(a);r.a},be52:function(e,t,n){},c2a4:function(e,t,n){},d096:function(e,t,n){},e0ea:function(e,t,n){},ea36:function(e,t,n){"use strict";var a=n("c2a4"),r=n.n(a);r.a},f6dc:function(e,t,n){"use strict";var a=n("07b9"),r=n.n(a);r.a}});
//# sourceMappingURL=app.a963801a.js.map