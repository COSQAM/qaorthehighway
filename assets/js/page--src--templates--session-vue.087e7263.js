(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"1CVE":function(e,s,t){"use strict";t("jFmK")},"4MbS":function(e,s,t){e.exports=t.p+"assets/img/greathall12.20afd1a9.png"},"4WSj":function(e,s,t){e.exports=t.p+"assets/img/greathall3.20afd1a9.png"},"6JMX":function(e,s,t){e.exports=t.p+"assets/img/interfaithroom.2da60d21.png"},BBiw:function(e,s,t){"use strict";var a={components:{Break:t("nFZp").a},props:["title"]},r=(t("y6W4"),t("KHd+")),n=Object(r.a)(a,(function(){var e=this._self._c;return e("div",{staticClass:"background"},[e("div",{class:this.$vuetify.breakpoint.smAndDown?"text-h4 font-weight-black white--text text-center padding-small":"text-h4 font-weight-black white--text text-center padding-large"},[this._v("\n    "+this._s(this.title)+"\n  ")]),e("div",{staticStyle:{"min-height":"30px"}}),e("Break",{staticClass:"color"})],1)}),[],!1,null,"2feb8617",null);s.a=n.exports},OBYm:function(e,s,t){var a={"./cartoonroom.png":"gwlx","./eastballroom.png":"vsta","./greathall12.png":"4MbS","./greathall3.png":"4WSj","./interfaithroom.png":"6JMX","./studentalumniroom.png":"ZIFp","./westballroom.png":"vcse"};function r(e){var s=n(e);return t(s)}function n(e){if(!t.o(a,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=n,e.exports=r,r.id="OBYm"},OtWt:function(e){e.exports=JSON.parse('{"filterall":false,"sessions":[{"speaker":"Angie Jones","saved":false},{"speaker":"Melissa Tondi","saved":false},{"speaker":"Alexa Beach","saved":false},{"speaker":"Aly Brine","saved":false},{"speaker":"Amanda Perkins","saved":false},{"speaker":"Andrew Knight","saved":false},{"speaker":"Andy Warns","saved":false},{"speaker":"Ben Oconis","saved":false},{"speaker":"Carlos Kidman","saved":false},{"speaker":"Damian Synadinos","saved":false},{"speaker":"Darrel Farris","saved":false},{"speaker":"Eran Kinsbruner","saved":false},{"speaker":"Jacob Haning","saved":false},{"speaker":"Jamie Kelley","saved":false},{"speaker":"Jeff Sing","saved":false},{"speaker":"Jenna Charlton","saved":false},{"speaker":"Jerren Every","saved":false},{"speaker":"Joel Montvelisky","saved":false},{"speaker":"Justin Hunter","saved":false},{"speaker":"Leandro Melendez","saved":false},{"speaker":"Lee Barnes","saved":false},{"speaker":"Mohita Prasad","saved":false},{"speaker":"Matthew Eakin","saved":false},{"speaker":"Petros Plakogiannis","saved":false},{"speaker":"Robert Fornal","saved":false},{"speaker":"Shyam Sunder","saved":false},{"speaker":"Stacy Wyatt","saved":false},{"speaker":"Thomas Haver","saved":false},{"speaker":"Titus Fortner","saved":false},{"speaker":"Magesh Chandran","saved":false},{"speaker":"Hitesh Patel","saved":false},{"speaker":"Sarala Pandey","saved":false}]}')},Q2lO:function(e,s,t){},SKgx:function(e,s,t){},Yeru:function(e,s,t){"use strict";t.r(s);var a=t("6ipC"),r=t("OtWt"),n={props:["speaker"],data:()=>({favorites2022:r}),methods:{indexOf:function(e){return this.favorites2022.sessions.map((function(e){return e.speaker})).indexOf(e)},goback:function(){window.history.go(-1)}},mounted(){localStorage.favorites2022&&(console.log("mounted"),this.favorites2022={...this.favorites2022,...JSON.parse(localStorage.favorites2022)})},watch:{favorites2022:{handler(){console.log("favorites changed"),localStorage.setItem("favorites2022",JSON.stringify(this.favorites2022))},deep:!0}}},o=t("KHd+"),i=Object(o.a)(n,(function(){var e=this,s=e._self._c;return s("v-app-bar",{attrs:{app:"",dense:"",dark:"",flat:"",color:"primary"}},[s("v-btn",{staticClass:"text-capitalize",attrs:{outlined:""},on:{click:function(s){return e.goback()}}},[s("v-icon",{attrs:{left:"",small:""}},[e._v("$chevronleft")]),e._v("Back\n  ")],1),s("v-spacer"),s("v-btn",{attrs:{outlined:""},on:{click:function(s){e.favorites2022.sessions[e.indexOf(e.speaker)].saved=!e.favorites2022.sessions[e.indexOf(e.speaker)].saved}}},[e.favorites2022.sessions[e.indexOf(e.speaker)].saved?s("div",{staticClass:"text-capitalize"},[s("v-icon",{attrs:{left:"",small:"",color:"amber"}},[e._v("$starsolid")]),e._v("Saved\n    ")],1):s("div",{staticClass:"text-capitalize"},[s("v-icon",{attrs:{left:"",small:""}},[e._v("$staroutline")]),e._v("Save\n    ")],1)])],1)}),[],!1,null,null,null).exports,l={props:["speaker","bio","linkUrl","twitUrl","webUrl","youtubeUrl"],methods:{findImage:function(){try{return t("yVUd")(`./${this.speaker.toLowerCase()}.webp`)}catch(e){return t("yAlY")}}}},c=(t("1CVE"),Object(o.a)(l,(function(){var e=this,s=e._self._c;return s("v-row",{staticClass:"ma-2"},[s("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"4"}},[s("v-avatar",{attrs:{size:"250"}},[s("img",{attrs:{src:e.findImage(),alt:e.speaker}})])],1),s("v-col",{attrs:{cols:"12",md:"8"}},[s("v-row",{attrs:{align:"center"}},[s("v-col",{attrs:{cols:"auto"}},[s("div",{staticClass:"headline font-weight-bold"},[e._v(e._s(e.speaker))])]),s("v-spacer"),s("v-col",{attrs:{cols:"auto"}},[e.linkUrl?s("v-btn",{staticClass:"mx-1",attrs:{text:"",icon:"",color:"#0077B5",target:"_blank",href:e.linkUrl,title:e.speaker+" LinkedIn"}},[s("v-icon",[e._v("$vuetify.icons.linkedin")])],1):e._e(),e.twitUrl?s("v-btn",{staticClass:"mx-1",attrs:{text:"",icon:"",color:"#38A1F3",target:"_blank",href:e.twitUrl,title:e.speaker+" Twitter"}},[s("v-icon",[e._v("$vuetify.icons.twitter")])],1):e._e(),e.youtubeUrl?s("v-btn",{staticClass:"mx-1",attrs:{text:"",icon:"",color:"#FF0000",target:"_blank",href:e.youtubeUrl,title:e.speaker+" Youtube"}},[s("v-icon",[e._v("$vuetify.icons.youtube")])],1):e._e(),e.webUrl?s("v-btn",{staticClass:"mx-1",attrs:{text:"",icon:"",color:"#1b51aa",target:"_blank",href:e.webUrl,title:e.speaker+" Website"}},[s("v-icon",[e._v("$vuetify.icons.website")])],1):e._e()],1)],1),s("v-divider",{staticClass:"my-2"}),s("div",{staticClass:"subheading text-color pre-format"},[e._v(e._s(e.bio))])],1)],1)}),[],!1,null,"6e1a3a89",null).exports),p=t("BBiw"),v={components:{Layout:a.a,SessionNavbar:i,SpeakerBio:c,Header:p.a},metaInfo(){return{title:this.$page.session.speaker}},methods:{roomFiltered:function(e){return e.replace(/:|-| |&/g,"").toLowerCase()},findFloor:function(e){var s=this.roomFiltered(e);return"greathall12"==s||"greathall3"==s?"1st Floor":"eastballroom"==s||"studentalumniroom"==s||"westballroom"==s?"2nd Floor":"interfaithroom"==s||"cartoonroom"==s?"3rd Floor":"Error"},findImage:function(e){var s=this.roomFiltered(e);try{return t("OBYm")(`./${s}.png`)}catch(e){return t("yAlY")}},roomFiltered:function(e){return e.replace(/:|-| |&/g,"").toLowerCase()}}},d=(t("q+hW"),null),f=Object(o.a)(v,(function(){var e=this,s=e._self._c;return s("v-app",[s("Layout",[s("v-main",[s("Header",{attrs:{title:e.$page.session.title}}),s("div",{staticClass:"max-center pt-5"},[s("v-row",{staticClass:"pb-5 ma-1"},[s("v-col",{staticClass:"text-color",attrs:{cols:"12"}},[s("div",{staticClass:"pb-3"},[s("span",{staticClass:"pr-2"},[s("v-icon",{attrs:{small:""}},[e._v("$clock")])],1),s("span",{staticClass:"pr-5"},[e._v(e._s(e.$page.session.time)+" ")]),s("span",{staticClass:"pr-2"},[s("v-icon",{class:e.roomFiltered(e.$page.session.room),attrs:{small:""}},[e._v("$circlesolid")])],1),s("span",[e._v(e._s(e.$page.session.room))]),s("span",{staticClass:"pl-2"},[s("v-dialog",{attrs:{transition:"dialog-bottom-transition"},scopedSlots:e._u([{key:"activator",fn:function({on:t,attrs:a}){return[s("v-btn",e._g(e._b({staticClass:"text-none",attrs:{small:"",outlined:"",color:"primary"}},"v-btn",a,!1),t),[e._v("Map")])]}},{key:"default",fn:function(t){return[s("v-card",[s("v-card-actions",{staticClass:"justify-end"},[s("v-btn",{staticClass:"text-none",attrs:{outlined:""},on:{click:function(e){t.value=!1}}},[e._v("Close")])],1),s("img",{attrs:{src:e.findImage(e.$page.session.room),alt:""}})],1)]}}]),model:{value:e.dialog,callback:function(s){e.dialog=s},expression:"dialog"}})],1)]),s("v-divider",{staticClass:"pt-3"}),s("div",[e._v(e._s(e.$page.session.abstract))])],1)],1),s("SpeakerBio",{staticClass:"py-5",attrs:{speaker:e.$page.session.speaker,bio:e.$page.session.bio,linkUrl:e.$page.session.linkedin,twitUrl:e.$page.session.twitter,webUrl:e.$page.session.website,youtubeUrl:e.$page.session.youtube}}),e.$page.session.speaker2?s("SpeakerBio",{staticClass:"pb-5",attrs:{speaker:e.$page.session.speaker2,bio:e.$page.session.bio2,linkUrl:e.$page.session.linkedin2,twitUrl:e.$page.session.twitter2,webUrl:e.$page.session.website2,youtubeUrl:e.$page.session.youtube2}}):e._e()],1)],1)],1)],1)}),[],!1,null,"75a0fb88",null);"function"==typeof d&&d(f);s.default=f.exports},ZIFp:function(e,s,t){e.exports=t.p+"assets/img/studentalumniroom.f68b18de.png"},gwlx:function(e,s,t){e.exports=t.p+"assets/img/cartoonroom.36570074.png"},jFmK:function(e,s,t){},"q+hW":function(e,s,t){"use strict";t("Q2lO")},vcse:function(e,s,t){e.exports=t.p+"assets/img/westballroom.6f11ca8a.png"},vsta:function(e,s,t){e.exports=t.p+"assets/img/eastballroom.ad26e48a.png"},y6W4:function(e,s,t){"use strict";t("SKgx")}}]);