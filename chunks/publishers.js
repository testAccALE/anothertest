(self.webpackChunk=self.webpackChunk||[]).push([[13],{5070:(e,t,r)=>{var n=r(930),s=r(8759),i=r(7530);e.exports=function(e,t,r){var o,a;return i&&n(o=t.constructor)&&o!==r&&s(a=o.prototype)&&a!==r.prototype&&i(e,a),e}},1632:(e,t,r)=>{var n=r(7826).f;e.exports=function(e,t,r){r in e||n(e,r,{configurable:!0,get:function(){return t[r]},set:function(e){t[r]=e}})}},2031:e=>{e.exports=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}},5773:(e,t,r)=>{var n=r(8240);e.exports=n(1..valueOf)},7471:(e,t,r)=>{"use strict";var n=r(1695),s=r(8240),i=r(6198).indexOf,o=r(2802),a=s([].indexOf),l=!!a&&1/a([1],1,-0)<0,c=o("indexOf");n({target:"Array",proto:!0,forced:l||!c},{indexOf:function(e){var t=arguments.length>1?arguments[1]:void 0;return l?a(this,e,t)||0:i(this,e,t)}})},5163:(e,t,r)=>{"use strict";var n=r(5283),s=r(2086),i=r(8240),o=r(7189),a=r(1007),l=r(9606),c=r(5070),u=r(5516),p=r(2071),h=r(1288),f=r(3677),d=r(62).f,g=r(4399).f,b=r(7826).f,v=r(5773),y=r(4080).trim,m="Number",k=s.Number,x=k.prototype,_=s.TypeError,S=i("".slice),I=i("".charCodeAt),N=function(e){var t=h(e,"number");return"bigint"==typeof t?t:E(t)},E=function(e){var t,r,n,s,i,o,a,l,c=h(e,"number");if(p(c))throw _("Cannot convert a Symbol value to a number");if("string"==typeof c&&c.length>2)if(c=y(c),43===(t=I(c,0))||45===t){if(88===(r=I(c,2))||120===r)return NaN}else if(48===t){switch(I(c,1)){case 66:case 98:n=2,s=49;break;case 79:case 111:n=8,s=55;break;default:return+c}for(o=(i=S(c,2)).length,a=0;a<o;a++)if((l=I(i,a))<48||l>s)return NaN;return parseInt(i,n)}return+c};if(o(m,!k(" 0o1")||!k("0b1")||k("+0x1"))){for(var O,T=function(e){var t=arguments.length<1?0:k(N(e)),r=this;return u(x,r)&&f((function(){v(r)}))?c(Object(t),r,T):t},w=n?d(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),R=0;w.length>R;R++)l(k,O=w[R])&&!l(T,O)&&b(T,O,g(k,O));T.prototype=x,x.constructor=T,a(s,m,T)}},2759:(e,t,r)=>{var n=r(5283),s=r(2086),i=r(8240),o=r(7189),a=r(5070),l=r(2585),c=r(62).f,u=r(5516),p=r(7994),h=r(4059),f=r(9028),d=r(4930),g=r(1632),b=r(1007),v=r(3677),y=r(9606),m=r(3278).enforce,k=r(7420),x=r(211),_=r(2582),S=r(2910),I=x("match"),N=s.RegExp,E=N.prototype,O=s.SyntaxError,T=i(E.exec),w=i("".charAt),R=i("".replace),A=i("".indexOf),$=i("".slice),C=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,M=/a/g,P=/a/g,Z=new N(M)!==M,z=d.MISSED_STICKY,F=d.UNSUPPORTED_Y;if(o("RegExp",n&&(!Z||z||_||S||v((function(){return P[I]=!1,N(M)!=M||N(P)==P||"/a/i"!=N(M,"i")}))))){for(var L=function(e,t){var r,n,s,i,o,c,d=u(E,this),g=p(e),b=void 0===t,v=[],k=e;if(!d&&g&&b&&e.constructor===L)return e;if((g||u(E,e))&&(e=e.source,b&&(t=f(k))),e=void 0===e?"":h(e),t=void 0===t?"":h(t),k=e,_&&"dotAll"in M&&(n=!!t&&A(t,"s")>-1)&&(t=R(t,/s/g,"")),r=t,z&&"sticky"in M&&(s=!!t&&A(t,"y")>-1)&&F&&(t=R(t,/y/g,"")),S&&(i=function(e){for(var t,r=e.length,n=0,s="",i=[],o={},a=!1,l=!1,c=0,u="";n<=r;n++){if("\\"===(t=w(e,n)))t+=w(e,++n);else if("]"===t)a=!1;else if(!a)switch(!0){case"["===t:a=!0;break;case"("===t:T(C,$(e,n+1))&&(n+=2,l=!0),s+=t,c++;continue;case">"===t&&l:if(""===u||y(o,u))throw new O("Invalid capture group name");o[u]=!0,i[i.length]=[u,c],l=!1,u="";continue}l?u+=t:s+=t}return[s,i]}(e),e=i[0],v=i[1]),o=a(N(e,t),d?this:E,L),(n||s||v.length)&&(c=m(o),n&&(c.dotAll=!0,c.raw=L(function(e){for(var t,r=e.length,n=0,s="",i=!1;n<=r;n++)"\\"!==(t=w(e,n))?i||"."!==t?("["===t?i=!0:"]"===t&&(i=!1),s+=t):s+="[\\s\\S]":s+=t+w(e,++n);return s}(e),r)),s&&(c.sticky=!0),v.length&&(c.groups=v)),e!==k)try{l(o,"source",""===k?"(?:)":k)}catch(e){}return o},U=c(N),V=0;U.length>V;)g(L,N,U[V++]);E.constructor=L,L.prototype=E,b(s,"RegExp",L)}k("RegExp")},9254:(e,t,r)=>{"use strict";var n=r(9413),s=r(2331),i=r(6112),o=r(9586),a=r(2031),l=r(4059),c=r(2964),u=r(1189);s("search",(function(e,t,r){return[function(t){var r=o(this),s=null==t?void 0:c(t,e);return s?n(s,t,r):new RegExp(t)[e](l(r))},function(e){var n=i(this),s=l(e),o=r(t,n,s);if(o.done)return o.value;var c=n.lastIndex;a(c,0)||(n.lastIndex=0);var p=u(n,s);return a(n.lastIndex,c)||(n.lastIndex=c),null===p?-1:p.index}]}))},3364:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l}),r(2327),r(3238);var n=r(7758),s=r(1081),i=r(730),o=r(3486);const a={name:"alePublishers",components:{aleSearch:s.Z,lazy:n.Z},mixins:[i.Z,o.Z],data:function(){return{collectionSource:"pageCollection",listReady:!1,pageTitle:"Publishers",pageSubTitle:null}},computed:{optionsOpenMargin:function(){return!!this.$store.state.searchOptOpenHeight&&{marginBottom:0}},galleryStyle:function(){return!!this.$store.state.searchOptOpenHeight&&{overflow:"hidden",height:this.$store.state.searchOptOpenHeight-2*this.$refs.wrapper.offsetTop+"px"}}},methods:{makeCollection:function(){var e=this,t=[],r=1;_.eachRight(e.subPageSource.collection,(function(n){n.publishers&&_.each(n.publishers,(function(s){var i=_.find(t,{name:s.name});if(i)return i.books.push(n.title||n.shortTitle),!1;var o={name:s.name,url:e.slugify(s.name),added:r,books:[n.title||n.shortTitle],authors:n.authors,narrators:n.narrators,series:n.series};t.push(o),++r}))})),_.reverse(t),this.$store.commit("prop",{key:"pageCollection",value:t}),this.updateListRenderingOptions(),this.listReady=!0},updateListRenderingOptions:function(){var e,t,r=this,n={scope:[{active:!0,key:"name",tippy:"Search publishers by name"},{active:!0,key:"books",tippy:"Search publishers by book titles"},{active:!0,key:"authors.name",tippy:"Search publishers by authors"},{active:!0,key:"narrators.name",tippy:"Search publishers by narrators"},{active:!0,key:"series.name",tippy:"Search publishers by series"}],filter:[{active:!1,type:"filterExtras",label:"Number of books",key:"books",range:[1,(e=_.get(r.$store.state,r.collectionSource),t=_.maxBy(e,(function(e){if(e.books)return e.books.length})),t?t.books.length:1)],rangeMinDist:0,rangeSuffix:"",rangeMin:function(){return 1},rangeMax:function(){var e=_.get(r.$store.state,r.collectionSource),t=_.maxBy(e,(function(e){if(e.books)return e.books.length}));return t?t.books.length:1},condition:function(e){if(e.books){var t=this.range[0],r=this.range[1];return e.books.length>=t&&e.books.length<=r}}}],sort:[{active:!1,key:"randomize",label:"Randomize",type:"sortExtras",tippy:"Ignores sorting and randomizes instead unless there's an active search."},{type:"divider",key:"divider1"},{active:!0,current:!0,key:"added",label:"Added",type:"sort",tippy:'<div style="text-align: left;"><small>&#9650;</small> Old at the top <br><small style="display: inline-block; transform: rotate(180deg);">&#9650;</small> New at the top</div>'},{active:!0,current:!1,key:"name",label:"Name",type:"sort",tippy:"Sort by publisher's name"},{active:!1,current:!1,key:"amount",label:"Number of books",type:"sort"}]};this.$setListRenderingOpts(n)}}},l=(0,r(810).Z)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.listReady?r("div",{ref:"wrapper",staticClass:"box-layout-wrapper",style:e.optionsOpenMargin,attrs:{id:"ale-publishers"}},[r("ale-search",{attrs:{collectionSource:e.collectionSource,pageTitle:e.pageTitle,pageSubTitle:e.pageSubTitle}}),e._v(" "),r("div",{staticClass:"page-content",style:e.galleryStyle},e._l(e.$store.getters.collection,(function(t,n){return t.name?r("lazy",{key:"publishers:"+t.name,staticClass:"single-box",attrs:{"data-name":t.name}},[r("router-link",{attrs:{to:{name:"publisher",params:{publisher:t.url},query:{subPageSource:e.subPageSource.name}}}},[r("h2",[e._v(e._s(t.name))]),e._v(" "),t.books&&t.books.length?r("div",{directives:[{name:"tippy",rawName:"v-tippy",value:{placement:"right"},expression:"{ placement: 'right' }"}],staticClass:"books-total",attrs:{content:"Total number of books from this publisher."}},[e._v("\n          "+e._s(t.books.length)+"\n        ")]):e._e()])],1):e._e()})),1)],1):e._e()}),[],!1,null,"3679eebc",null).exports},7758:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});const n={name:"lazy",props:["row","tag"],data:function(){return{observer:null,intersected:!1}},mounted:function(){this.$nextTick((function(){var e=this;this.observer=new IntersectionObserver((function(t){t[0].isIntersecting&&(e.intersected=!0,e.observer.disconnect())}),{threshold:0,rootMargin:"100px"}),this.observer.observe(this.$el)}))},destroyed:function(){this.observer&&this.observer.disconnect()}},s=(0,r(810).Z)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.tag?"td"===e.tag?r("td",{class:{mounted:e.intersected}},[e.intersected?e._t("default"):e._e()],2):e._e():r("div",{class:{mounted:e.intersected}},[e.intersected?e._t("default"):e._e()],2)}),[],!1,null,null,null).exports}}]);