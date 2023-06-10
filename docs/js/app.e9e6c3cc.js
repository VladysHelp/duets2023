(function(){"use strict";var t={8056:function(t,e){e["Z"]=[]},4273:function(t,e,n){var r,o,s=n(6369),i=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{attrs:{id:"app"}},[e("Audio"),e("Header"),e("router-view")],1)},a=[],l=function(){var t=this,e=t._self._c;return e("header",{staticClass:"header"},[e("router-link",{staticClass:"header__logo",attrs:{to:"/"}},[e("img",{attrs:{src:t.logo,alt:"logo"}})])],1)},u=[],c=n(2482),d=n(1013),p=n.p+"img/RedNote.4d0d1e96.png";let f=(r=(0,d.ZP)({name:"Header"}),r(o=class extends s.ZP{constructor(...t){super(...t),(0,c.Z)(this,"logo",p)}})||o);var h=f,m=n(1001),g=(0,m.Z)(h,l,u,!1,null,null,null),v=g.exports,_=function(){var t=this;t._self._c,t._self._setupProxy;return t._m(0)},y=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"loading"},[e("div",{staticClass:"loader-block"},[e("div",{staticClass:"loader__sonic"},[e("img",{attrs:{src:n(5146)}})]),e("div",{staticClass:"loading__loader loader"},[e("p",{staticClass:"loader__text"},[t._v("Loading.")]),e("div",{staticClass:"loader__progress"},[e("div",{staticClass:"loader__progress-bar"})])])])])}],b=n(4815),C=function(t,e,n,r){var o,s=arguments.length,i=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,n,i):o(e,n))||i);return s>3&&i&&Object.defineProperty(e,n,i),i};let P=class extends s.ZP{constructor(...t){super(...t),(0,c.Z)(this,"model",void 0)}};C([(0,b.fI)(Boolean)],P.prototype,"model",void 0),P=C([(0,d.ZP)({name:"Button"})],P);var j=P,Z=j,x=(0,m.Z)(Z,_,y,!1,null,null,null),k=x.exports,O=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"loading__audio"},[e("audio",{ref:"audioRef"},[e("source",{attrs:{src:t.audio,type:"audio/mp3"}})])])},w=[],D=n.p+"media/SYNTHWAVE_bude_pomig_nas.7f226a41.mp3",A=n(3365),T=n(3822);s.ZP.use(T.ZP);var R=new T.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),I=n.p+"media/Volt_Age_Volt_s_Theme.fe0d027c.mp3",S=function(t,e,n,r){var o,s=arguments.length,i=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,n,i):o(e,n))||i);return s>3&&i&&Object.defineProperty(e,n,i),i};let L=class extends A.g4{constructor(...t){super(...t),(0,c.Z)(this,"player",null),(0,c.Z)(this,"tracks",[D,I])}loadTrack(t){this.player.src=this.tracks[t]}playSong(){console.log(this.player),this.player.play()}setPlayerAction(t){const{context:e}=this;e.commit("setPlayer",t)}setPlayer(t){this.player=t}};S([A.aU],L.prototype,"loadTrack",null),S([A.aU],L.prototype,"playSong",null),S([A.aU],L.prototype,"setPlayerAction",null),S([A.mm],L.prototype,"setPlayer",null),L=S([(0,A.Yl)({namespaced:!0,name:"playerModule",dynamic:!0,store:R})],L);var N=(0,A.rT)(L),E=function(t,e,n,r){var o,s=arguments.length,i=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,n,i):o(e,n))||i);return s>3&&i&&Object.defineProperty(e,n,i),i};let M=class extends s.ZP{constructor(...t){super(...t),(0,c.Z)(this,"audio",D)}mounted(){N.setPlayerAction(this.$refs.audioRef)}};M=E([(0,d.ZP)({name:"Audio"})],M);var B=M,$=B,U=(0,m.Z)($,O,w,!1,null,null,null),H=U.exports,V=function(t,e,n,r){var o,s=arguments.length,i=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,n,i):o(e,n))||i);return s>3&&i&&Object.defineProperty(e,n,i),i};let F=class extends s.ZP{};F=V([(0,d.ZP)({name:"App",components:{Audio:H,Loading:k,Header:v}})],F);var G=F,q=G,Y=(0,m.Z)(q,i,a,!1,null,null,null),J=Y.exports,K=n(2631),W=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"game"},[t.isLoading?e("Loading"):t._e(),t.isMain?e("div",{staticClass:"main",class:{active:t.isMain}},[e("div",{staticClass:"users-list"},t._l(t.users,(function(n,r){return e("div",{staticClass:"users-list__user",class:{active:r===t.currentAnimIndex,chosen:r===t.chosenUserIndex}},[e("img",{attrs:{src:n.photo,alt:""}})])})),0),e("div",{staticClass:"cloud1"}),e("div",{staticClass:"cloud2"}),e("div",{staticClass:"container"},[e("div",{staticClass:"central-grid"},[e("div",{staticClass:"main-lottery"},[e("button",{staticClass:"main-lottery__btn",on:{click:t.getDuet}},[t._v("Get Players")]),t.currentDuet.length<1?e("div",{staticClass:"main-lottery__user empty"},[e("div",{staticClass:"main-lottery__user-photo"}),e("p",{staticClass:"main-lottery__user-name"})]):t._e(),t._l(t.currentDuet,(function(n,r){return e("div",{staticClass:"main-lottery__user"},[e("img",{staticClass:"main-lottery__user-photo",attrs:{src:n.photo,alt:""}}),e("p",{staticClass:"main-lottery__user-name"},[t._v(t._s(n.name))])])})),t.currentDuet.length<2?e("div",{staticClass:"main-lottery__user empty"},[e("div",{staticClass:"main-lottery__user-photo"}),e("p",{staticClass:"main-lottery__user-name"})]):t._e()],2)])]),e("div",{staticClass:"selected-duets"},t._l(t.chosenDuets,(function(n){return e("div",{staticClass:"selected-duets__duet"},t._l(n,(function(n){return e("div",{staticClass:"selected-duets__duet-item"},[e("img",{staticClass:"selected-duets__duet-photo",attrs:{src:n.photo,alt:""}}),e("p",{staticClass:"selected-duets__duet-name"},[t._v(" "+t._s(n.name))])])})),0)})),0)]):t._e(),t.isLoading?t._e():e("div",{staticClass:"rednote-block",class:{active:!t.isMain}},[e("div",{staticClass:"rednote-block__container"},[e("div",{staticClass:"rednote-block__red"},[e("img",{attrs:{src:t.redImg,alt:""}})]),e("div",{staticClass:"rednote-block__note"},[e("img",{attrs:{src:t.noteImg,alt:""}})]),e("div",{staticClass:"rednote-block__reborne"},[e("img",{attrs:{src:t.reborne,alt:""}})]),e("div",{staticClass:"rednote-block__two"},[e("img",{attrs:{src:t.two,alt:""}})])])])],1)},z=[],Q=(n(7658),n.p+"img/red.232b51fe.png"),X=n.p+"img/note.d711c0d2.png",tt=n.p+"img/reborne.f9b36a4a.png",et=n.p+"img/2.8d43ec9d.png",nt=n.p+"img/Ангеліна Сиротенко.d7445f2e.jpg",rt=n.p+"img/Антон Ашколуненко.f3c7995e.jpg",ot=n.p+"img/Владислав Кухлій.2d7af9fd.jpg",st=n.p+"img/Володимир Деревенча.5beb2580.jpg",it=n.p+"img/В’ячеслав Осадчій.a5a432a2.jpg",at=n.p+"img/Діана Останіна.b187a7fd.jpg",lt=n.p+"img/Катерина Дюк-Золотарьова.4a8c6fcc.jpg",ut=n.p+"img/Катерина Петровська.2df37894.jpeg",ct=n.p+"img/Костя Лаврушко.7be08888.jpg",dt=n.p+"img/Любомира Гуськова.b55f9974.jpg",pt=n.p+"img/Маргарита Мороз.91cc8722.jpg",ft=n.p+"img/Марія Новікова.0413d4d8.jpg",ht=n.p+"img/Мілена Чайковська.34e18bb0.jpg",mt=n.p+"img/Олекса Кунаков.862fd936.jpg",gt=n.p+"img/Олександр Мустяца.2553ff66.jpg",vt=n.p+"img/Олександр Протасєня.f797beb5.jpg",_t=n.p+"img/Олена Когутенко.57a1532a.jpg",yt=n.p+"img/Сашко Овчинніков.bb90733a.jpg",bt=n.p+"img/Світлана Федорук.a3dc5dc9.jpg",Ct=n.p+"img/Сергій Христорізенко.9ed806db.jpg",Pt=n.p+"img/Тетяна Шанахіна.db34f918.jpg",jt=n.p+"img/Юлія Чернишева.e02e6ece.jpg",Zt=[{name:"Ангеліна Сиротенко",photo:nt},{name:"Антон Ашколуненко",photo:rt},{name:"Владислав Кухлій",photo:ot},{name:"Володимир Деревенча",photo:st},{name:"В’ячеслав Осадчій",photo:it},{name:"Діана Останіна",photo:at},{name:"Катерина Дюк-Золотарьова",photo:lt},{name:"Катерина Петровська",photo:ut},{name:"Костя Лаврушко",photo:ct},{name:"Любомира Гуськова",photo:dt},{name:"Маргарита Мороз",photo:pt},{name:"Марія Новікова",photo:ft},{name:"Мілена Чайковська",photo:ht},{name:"Олекса Кунаков",photo:mt},{name:"Олександр Мустяца",photo:gt},{name:"Олександр Протасєня",photo:vt},{name:"Олена Когутенко",photo:_t},{name:"Сашко Овчинніков",photo:yt},{name:"Світлана Федорук",photo:bt},{name:"Сергій Христорізенко",photo:Ct},{name:"Тетяна Шанахіна",photo:Pt},{name:"Юлія Чернишева",photo:jt}],xt=n(8056),kt=function(t,e,n,r){var o,s=arguments.length,i=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,n,i):o(e,n))||i);return s>3&&i&&Object.defineProperty(e,n,i),i};let Ot=class extends s.ZP{constructor(...t){super(...t),(0,c.Z)(this,"isLoading",!0),(0,c.Z)(this,"currentAnimIndex",null),(0,c.Z)(this,"chosenUserIndex",null),(0,c.Z)(this,"isMain",!1),(0,c.Z)(this,"isAllowNextDuet",!0),(0,c.Z)(this,"users",Zt),(0,c.Z)(this,"currentDuet",[]),(0,c.Z)(this,"chosenDuets",[]),(0,c.Z)(this,"redImg",Q),(0,c.Z)(this,"noteImg",X),(0,c.Z)(this,"reborne",tt),(0,c.Z)(this,"two",et)}runAnimation(){if(2===this.users.length)return this.currentDuet=[...this.users],this.users=[],void setTimeout((()=>{this.chosenDuets.push(this.currentDuet),this.currentDuet=[],localStorage.setItem("duets",JSON.stringify(this.chosenDuets)),this.$router.push("/")}),1e4);const t=setInterval((()=>{this.currentAnimIndex=Math.floor(Math.random()*this.users.length)}),200);setTimeout((()=>{clearInterval(t),this.chosenUserIndex=this.currentAnimIndex,setTimeout((()=>{this.currentDuet.push(this.users[this.currentAnimIndex]),this.users.splice(this.currentAnimIndex,1),this.chosenUserIndex=null,this.currentAnimIndex=null,this.currentDuet.length<2&&this.runAnimation(),2===this.currentDuet.length&&(this.isAllowNextDuet=!0)}),1e3)}),2500)}getDuet(){this.isAllowNextDuet&&(this.isAllowNextDuet=!1,this.currentDuet.length&&(this.chosenDuets.push(this.currentDuet),this.currentDuet=[]),this.runAnimation())}mounted(){xt.Z.length?this.$router.push("/"):setTimeout((()=>{this.isLoading=!1,setTimeout((()=>{this.isMain=!0}),6e3)}),12e3)}};Ot=kt([(0,d.ZP)({name:"HomeView",components:{Loading:k}})],Ot);var wt=Ot,Dt=wt,At=(0,m.Z)(Dt,W,z,!1,null,null,null),Tt=At.exports,Rt=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"home"},[e("div",{staticClass:"home__menu"},[e("Button",{staticClass:"home__btn",attrs:{"ui-type":"green"},on:{click:t.startGame}},[t._v(" New game ")]),e("Button",{staticClass:"home__btn",attrs:{"ui-type":"green",type:"router-link",disabled:!t.duets.length,to:"/duets"}},[t._v(" Saved games ")]),e("Button",{staticClass:"home__btn",attrs:{"ui-type":"green",type:"router-link",to:"/about"}},[t._v(" Rules ")])],1)])},It=[],St=function(){var t=this,e=t._self._c;t._self._setupProxy;return"button"===t.type?e("button",{class:["button",t.uiType?`button--${t.uiType}`:"",t.disabled?"disabled":""],on:{click:function(e){return t.$emit("click")}}},[e("span",{staticClass:"button__content"},[t._t("default")],2)]):"router-link"===t.type?e("router-link",{class:["button",t.uiType?`button--${t.uiType}`:"",t.disabled?"disabled":""],attrs:{to:t.to,event:""},nativeOn:{click:function(e){return e.preventDefault(),t.hadleLink(t.to)}}},[e("span",{staticClass:"button__content"},[t._t("default")],2)]):t._e()},Lt=[],Nt=function(t,e,n,r){var o,s=arguments.length,i=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,n,i):o(e,n))||i);return s>3&&i&&Object.defineProperty(e,n,i),i};let Et=class extends s.ZP{constructor(...t){super(...t),(0,c.Z)(this,"type",void 0),(0,c.Z)(this,"to",void 0),(0,c.Z)(this,"uiType",void 0),(0,c.Z)(this,"disabled",void 0)}click(){this.disabled||this.$emit("click")}hadleLink(t){this.disabled||this.$router.push(t)}};Nt([(0,b.fI)({type:String,default:"button"})],Et.prototype,"type",void 0),Nt([(0,b.fI)({type:String,default:"/"})],Et.prototype,"to",void 0),Nt([(0,b.fI)({type:String,default:null})],Et.prototype,"uiType",void 0),Nt([(0,b.fI)({type:String,default:()=>!1})],Et.prototype,"disabled",void 0),Et=Nt([(0,d.ZP)({name:"Button"})],Et);var Mt=Et,Bt=Mt,$t=(0,m.Z)(Bt,St,Lt,!1,null,null,null),Ut=$t.exports,Ht=function(t,e,n,r){var o,s=arguments.length,i=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,n,i):o(e,n))||i);return s>3&&i&&Object.defineProperty(e,n,i),i};let Vt=class extends s.ZP{constructor(...t){super(...t),(0,c.Z)(this,"duets",xt.Z)}startGame(){N.playSong(),this.$router.push("/game")}};Vt=Ht([(0,d.ZP)({name:"HomeView",components:{Button:Ut}})],Vt);var Ft=Vt,Gt=Ft,qt=(0,m.Z)(Gt,Rt,It,!1,null,null,null),Yt=qt.exports;s.ZP.use(K.ZP);const Jt=[{path:"/",name:"home",component:Yt},{path:"/duets",name:"duets",component:()=>n.e(443).then(n.bind(n,8988))},{path:"/game",name:"game",component:Tt},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,6239))}],Kt=new K.ZP({mode:"hash",base:"/",routes:Jt});var Wt=Kt;s.ZP.config.productionTip=!1,new s.ZP({router:Wt,store:R,render:t=>t(J)}).$mount("#app")},5146:function(t,e,n){t.exports=n.p+"img/sonic-sonic-waiting.125b090d.gif"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var s=e[r]={exports:{}};return t[r](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,s){if(!r){var i=1/0;for(c=0;c<t.length;c++){r=t[c][0],o=t[c][1],s=t[c][2];for(var a=!0,l=0;l<r.length;l++)(!1&s||i>=s)&&Object.keys(n.O).every((function(t){return n.O[t](r[l])}))?r.splice(l--,1):(a=!1,s<i&&(i=s));if(a){t.splice(c--,1);var u=o();void 0!==u&&(e=u)}}return e}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[r,o,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/about.6d5b6225.js"}}(),function(){n.miniCssF=function(t){return"css/about.748848d7.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="duets_front:";n.l=function(r,o,s,i){if(t[r])t[r].push(o);else{var a,l;if(void 0!==s)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+s){a=d;break}}a||(l=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",e+s),a.src=r),t[r]=[o];var p=function(e,n){a.onerror=a.onload=null,clearTimeout(f);var o=t[r];if(delete t[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(t){return t(n)})),e)return e(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),l&&document.head.appendChild(a)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var t=function(t,e,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var s=function(s){if(o.onerror=o.onload=null,"load"===s.type)n();else{var i=s&&("load"===s.type?"missing":s.type),a=s&&s.target&&s.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=a,o.parentNode.removeChild(o),r(l)}};return o.onerror=o.onload=s,o.href=e,document.head.appendChild(o),o},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],s=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(s===t||s===e))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],s=o.getAttribute("data-href");if(s===t||s===e)return o}},r=function(r){return new Promise((function(o,s){var i=n.miniCssF(r),a=n.p+i;if(e(i,a))return o();t(r,a,o,s)}))},o={143:0};n.f.miniCss=function(t,e){var n={443:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=r(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var s=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=s);var i=n.p+n.u(e),a=new Error,l=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var s=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;a.message="Loading chunk "+e+" failed.\n("+s+": "+i+")",a.name="ChunkLoadError",a.type=s,a.request=i,o[1](a)}};n.l(i,l,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,s,i=r[0],a=r[1],l=r[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(l)var c=l(n)}for(e&&e(r);u<i.length;u++)s=i[u],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(c)},r=self["webpackChunkduets_front"]=self["webpackChunkduets_front"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(4273)}));r=n.O(r)})();
//# sourceMappingURL=app.e9e6c3cc.js.map