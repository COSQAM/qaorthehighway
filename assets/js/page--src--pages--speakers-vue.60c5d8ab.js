(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"2qwI":function(t,e,s){},"7hOI":function(t,e,s){"use strict";s("2qwI")},BBiw:function(t,e,s){"use strict";var n={components:{Break:s("nFZp").a},props:["title"]},a=(s("Uuxk"),s("KHd+")),r=Object(a.a)(n,(function(){var t=this._self._c;return t("div",{staticClass:"background"},[t("div",{staticClass:"text-h4 font-weight-black white--text text-center margin-top"},[this._v("\n    "+this._s(this.title)+"\n  ")]),t("div",{staticStyle:{height:"30px"}}),t("Break",{staticClass:"color"})],1)}),[],!1,null,"5847199b",null);e.a=r.exports},"KI/7":function(t,e,s){},Uuxk:function(t,e,s){"use strict";s("z5L1")},Zwie:function(t,e,s){"use strict";s("KI/7")},mhVj:function(t,e,s){"use strict";s.r(e);s("FNk8");var n={components:{Header:s("BBiw").a},methods:{findImage:t=>{try{return s("yVUd")(`./${t.toLowerCase()}.webp`)}catch(t){return s("yAlY")}},removeSpaces:function(t){return t.replace(/\s/g,"")},combineSpeakers:t=>{let e=[];return t.map(t=>{e.push({name:t.node.speaker,url:t.node.speaker}),t.node.speaker2&&e.push({name:t.node.speaker2,url:t.node.speaker})}),e}},metaInfo:()=>({title:"Speakers"})},a=(s("7hOI"),s("KHd+")),r=null,c=Object(a.a)(n,(function(){var t=this,e=t._self._c;return e("v-app",[e("Layout",[e("v-content",[e("Header",{attrs:{title:"Speakers"}}),e("v-row",{staticClass:"text-center max-center mt-5"},t._l(t.combineSpeakers(t.$page.speakers.edges),(function(s,n){return e("v-col",{key:n,staticClass:"my-5",attrs:{cols:"12",md:"4"}},[e("a",{attrs:{href:"./"+t.removeSpaces(s.url)}},[e("v-avatar",{attrs:{size:"300"}},[e("img",{attrs:{src:t.findImage(s.name)}})])],1),e("h5",{staticClass:"text-h5 pt-3"},[t._v("\n            "+t._s(s.name)+"\n          ")])])})),1)],1)],1)],1)}),[],!1,null,"7af4946c",null);"function"==typeof r&&r(c);e.default=c.exports},nFZp:function(t,e,s){"use strict";s("Zwie");var n=s("KHd+"),a=Object(n.a)({},(function(){var t=this._self._c;return t("svg",{staticClass:"custom-svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1000 100",preserveAspectRatio:"none"}},[t("path",{attrs:{d:"M1000,0l-1000,100l1000,0l0,-100Z"}})])}),[],!1,null,"0a6880cc",null);e.a=a.exports},z5L1:function(t,e,s){}}]);