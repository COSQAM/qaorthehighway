(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"3/ze":function(t,e,s){t.exports=s.p+"assets/img/david leslie.56f4f543.webp"},"5xhF":function(t,e,s){t.exports=s.p+"assets/img/tariq king.2bbf2d3e.webp"},BBiw:function(t,e,s){"use strict";var a={components:{Break:s("nFZp").a},props:["title"]},n=(s("y6W4"),s("KHd+")),i=Object(n.a)(a,(function(){var t=this._self._c;return t("div",{staticClass:"background"},[t("div",{class:this.$vuetify.breakpoint.smAndDown?"text-h4 font-weight-black white--text text-center padding-small":"text-h4 font-weight-black white--text text-center padding-large"},[this._v("\n    "+this._s(this.title)+"\n  ")]),t("div",{staticStyle:{"min-height":"30px"}}),t("Break",{staticClass:"color"})],1)}),[],!1,null,"2feb8617",null);e.a=i.exports},Bx4Y:function(t,e,s){t.exports=s.p+"assets/img/damian synadinos.ff8a8215.webp"},FJ27:function(t,e,s){},FtDU:function(t,e,s){t.exports=s.p+"assets/img/james gould.68db33ab.webp"},JFBC:function(t,e,s){t.exports=s.p+"assets/img/rex black.c790c171.webp"},"KI/7":function(t,e,s){},P0DP:function(t,e,s){var a={"./aaron evans.webp":"W9+4","./caleb crandall.webp":"tJwg","./chris harbert.webp":"o+Mi","./damian synadinos.webp":"Bx4Y","./damián pereira.webp":"a3Da","./david leslie.webp":"3/ze","./david vano.webp":"lmot","./james gould.webp":"FtDU","./jess lancaster.webp":"Pk7k","./matt eland.webp":"bmI1","./rex black.webp":"JFBC","./tariq king.webp":"5xhF","./vineela nalla.webp":"oO/P","./vitaly skadorva.webp":"afA6"};function n(t){var e=i(t);return s(e)}function i(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=i,t.exports=n,n.id="P0DP"},Pk7k:function(t,e,s){t.exports=s.p+"assets/img/jess lancaster.777c2f57.webp"},SKgx:function(t,e,s){},"W9+4":function(t,e,s){t.exports=s.p+"assets/img/aaron evans.d48f528d.webp"},Zwie:function(t,e,s){"use strict";s("KI/7")},a3Da:function(t,e,s){t.exports=s.p+"assets/img/damián pereira.41da293f.webp"},afA6:function(t,e,s){t.exports=s.p+"assets/img/vitaly skadorva.f910b1fb.webp"},bmI1:function(t,e,s){t.exports=s.p+"assets/img/matt eland.78a6521f.webp"},lmot:function(t,e,s){t.exports=s.p+"assets/img/david vano.f032e13b.webp"},mhVj:function(t,e,s){"use strict";s.r(e);s("FNk8");var a=s("BBiw"),n=s("LvDl"),i=s.n(n),r={components:{Header:a.a},methods:{findImage:t=>{try{return s("P0DP")(`./${t.toLowerCase()}.webp`)}catch(t){return s("yAlY")}},combineSpeakers:t=>{let e=[];return t.map(t=>{e.push({name:t.node.speaker,url:t.node.speaker,shortbio:t.node.shortbio,title:t.node.title,path:t.node.path}),t.node.speaker2&&e.push({name:t.node.speaker2,url:t.node.speaker,title:t.node.title,shortbio:t.node.shortbio2,path:t.node.path})}),Object.entries(i.a.groupBy(e,"name"))}},metaInfo:()=>({title:"Speakers"})},o=(s("y+04"),s("KHd+")),p=null,c=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("v-app",[e("Layout",[e("v-main",[e("Header",{attrs:{title:"Speakers"}}),e("v-row",{staticClass:"text-center max-center mt-5"},t._l(t.combineSpeakers(t.$page.speakers.edges),(function(s,a){return e("v-col",{key:a,staticClass:"my-5",attrs:{cols:"12",md:"4"}},[s[1].length>1?e("div",[e("v-menu",{scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:n}){return[e("a",t._g(t._b({},"a",n,!1),a),[e("v-avatar",{attrs:{size:"250"}},[e("v-img",{attrs:{"aspect-ratio":"1:1",src:t.findImage(s[1][0].name)}})],1),e("div",{staticClass:"speaker headline font-weight-bold pt-3"},[t._v("\n                    "+t._s(s[1][0].name)+"\n                  ")]),e("div",{staticClass:"bio text-subtitle-1"},[t._v("\n                    "+t._s(s[1][0].shortbio)+"\n                  ")])],1)]}}],null,!0)},[e("v-list",[e("v-list-subheader",{staticClass:"text-subtitle-2 grey--text pl-4"},[t._v("SELECT A SESSION")]),t._l(s[1],(function(s,a){return e("v-list-item",{key:a,attrs:{href:s.path}},[e("v-list-item-title",[t._v(t._s(s.title))])],1)}))],2)],1)],1):e("div",[e("a",{attrs:{href:s[1][0].path}},[e("v-avatar",{attrs:{size:"250"}},[e("v-img",{attrs:{"aspect-ratio":"1:1",src:t.findImage(s[1][0].name)}})],1),e("div",{staticClass:"speaker headline font-weight-bold pt-3"},[t._v("\n                "+t._s(s[1][0].name)+"\n              ")]),e("div",{staticClass:"bio text-subtitle-1"},[t._v("\n                "+t._s(s[1][0].shortbio)+"\n              ")])],1)])])})),1),e("div",{staticClass:"text-caption grey--text text-center pa-3"},[t._v("\n        This speaker list is not complete and will continue to grow as the\n        committee recieves confirmation from the selected speakers. We are\n        planning 30 session talks and 2 keynotes.\n      ")])],1)],1)],1)}),[],!1,null,"020fe0a0",null);"function"==typeof p&&p(c);e.default=c.exports},nFZp:function(t,e,s){"use strict";s("Zwie");var a=s("KHd+"),n=Object(a.a)({},(function(){var t=this._self._c;return t("svg",{staticClass:"custom-svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1000 100",preserveAspectRatio:"none"}},[t("path",{attrs:{d:"M1000,0l-1000,100l1000,0l0,-100Z"}})])}),[],!1,null,"0a6880cc",null);e.a=n.exports},"o+Mi":function(t,e,s){t.exports=s.p+"assets/img/chris harbert.8b374b8c.webp"},"oO/P":function(t,e,s){t.exports=s.p+"assets/img/vineela nalla.c0d0237a.webp"},tJwg:function(t,e,s){t.exports=s.p+"assets/img/caleb crandall.fb2973b2.webp"},"y+04":function(t,e,s){"use strict";s("FJ27")},y6W4:function(t,e,s){"use strict";s("SKgx")},yAlY:function(t,e,s){t.exports=s.p+"assets/img/generic-profile.000447fe.png"}}]);