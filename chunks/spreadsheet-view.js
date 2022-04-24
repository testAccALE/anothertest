"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[19],{1405:(e,t,s)=>{s.d(t,{Z:()=>r}),s(3238),s(895);const r={methods:{makeFullUrl:function(e){var t=new Url(this.$store.state.urlOrigin+e);return t.query.ipRedirectOverride=!0,t.query.overrideBaseCountry=!0,t.toString()},makeUrl:function(e,t){var s=this.$store.state.urlOrigin,r="";switch(e){case"store":case"book":r=s+"/pd/"+encodeURIComponent(t);break;case"author":r=t.url?s+"/author/"+t.url:s+"/search?searchAuthor="+encodeURIComponent(t.name);break;case"narrator":t.name&&(r=s+"/search?searchNarrator="+encodeURIComponent(t.name));break;case"series":t.asin&&(r=s+"/series/"+t.asin);break;case"publisher":t.name&&(r=s+"/search?searchProvider="+encodeURIComponent(t.name));break;case"categories":case"tags":t.url&&(r=s+"/cat/"+t.url)}if(r){var o=new Url(r);return o.query.ipRedirectOverride=!0,o.query.overrideBaseCountry=!0,o.toString()}return""}}}},5655:(e,t,s)=>{s.d(t,{Z:()=>r}),s(1013),s(5769),s(3238),s(4078),s(3938),s(5623),s(1514);const r={methods:{prepareKeys:function(e){var t=(e=e||{}).collection||_.get(this.$store.state,this.$store.state.collectionSource),s=_.union(_.flatten(_.map(t,(function(e){return _.keys(e)}))));s=s.concat(["isbn10","isbn13"]);var r=["added","title","series","bookNumbers","authors","narrators","tags","categories","length","progress","releaseDate","publishers","myRating","rating","ratings","favorite","format","language","whispersync","fromPlusCatalog","unavailable","archived","downloaded","storePageChanged","storePageMissing"];e.priorityKeys&&(r=e.priorityKeys);var o=_.remove(s,(function(e){return!_.includes(r,e)}));s=r.concat(o),r=null,o=null;var i=["titleShort","sample","blurb","url","summary","moreLikeThis","peopleAlsoBought","asin","cover","sample","cover","isbns"];return _.remove(s,(function(t){return!_.includes(e.removeKeys||i,t)}))}}}},8300:(e,t,s)=>{s.d(t,{Z:()=>r}),s(1013);const r={methods:{stringifyArray:function(e,t,s){return t?_.map(e,t).join(s||", "):e.join(", ")}}}},1344:(e,t,s)=>{s.r(t),s.d(t,{default:()=>b}),s(5769),s(3238),s(1418),s(7460),s(4078),s(1013),s(5699),s(2759),s(2077),s(895),s(2327),s(1203),s(2482);const r={name:"colResizer",props:["identifier"],data:function(){return{colClass:"",startPosition:null,endPosition:null,dragging:!1,minWidth:30,width:null,mouseX:0,threshold:10}},created:function(){this.colClass=this.identifier.split(" ")[0]},methods:{resizeMouseDown:function(e){this.endPosition=null,this.startPosition=e.clientX},resizeMouseMove:_.throttle((function(e){this.startPosition&&Math.abs(this.startPosition-e.clientX)>=this.threshold&&(this.dragging=!0,this.mouseX=e.clientX)}),65),resizeMouseUp:function(e){if(this.dragging){this.endPosition=e.clientX;var t=this.width?this.width:e.currentTarget.parentElement.offsetWidth,s=Math.abs(this.startPosition-this.endPosition),r=t+(this.endPosition>this.startPosition?+s:-s);this.width=r<this.minWidth?this.minWidth:r}this.dragging=null,this.endPosition=null,this.startPosition=null,this.mouseX=0}}};var o=s(810);const i={name:"aleHeader",props:["keys"],components:{colResizer:(0,o.Z)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-resizer",class:{dragging:e.startPosition},on:{mousedown:e.resizeMouseDown,mouseup:e.resizeMouseUp,mousemove:e.resizeMouseMove}},[e.mouseX?s("div",{staticClass:"floater-boy",style:{left:e.mouseX+"px"}}):e._e(),e._v(" "),e.width?s("style",{tag:"component",attrs:{type:"text/css"}},[e._v("\n    ."+e._s(e.colClass)+" { width: "+e._s(e.width)+"px !important; }\n  ")]):e._e()],1)}),[],!1,null,"c3c9566a",null).exports,sorter:function(){return Promise.resolve().then(s.bind(s,9649))}},data:function(){return{listName:"sort",optionsList:null,headers:null}},created:function(){this.optionsList=this.$store.state.listRenderingOpts[this.listName],this.headers=this.prepareHeaders(this.keys)},methods:{prepareHeaders:function(e){return _.map(e,(function(e){var t={key:e,label:_.startCase(e),align:"left",class:"col-"+_.kebabCase(e)};switch(e){case"titleShort":case"title":t.class=t.class+" sticky-col";break;case"authors":case"narrators":case"publishers":case"tags":t.key+=".name"}return t}))},sorterIndex:function(e){return _.findIndex(this.optionsList,{key:e.key})},sorterItem:function(e){var t=new RegExp("^"+e);return _.find(this.optionsList,(function(e){return e.key.match(t)}))}}},n=(0,o.Z)(i,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"list-view-header ale-row"},[s("tr",{staticClass:"ale-row-inner"},e._l(e.headers,(function(t,r){return s("th",{key:t.label,staticClass:"header-item ale-col",class:t.class},[s("col-resizer",{attrs:{identifier:t.class}}),e._v(" "),s("div",{staticClass:"ale-col-inner"},[e.sorterIndex(t)>-1?s("sorter",{attrs:{label:!1,item:e.sorterItem(t.key),index:e.sorterIndex(t),currentList:e.optionsList,listName:e.listName,tippyTop:!0}},[e._v("\n          "+e._s(t.label)+"\n        ")]):s("span",{staticClass:"text-container"},[e._v(e._s(t.label))])],1)],1)})),0)])}),[],!1,null,"36975578",null).exports;s(911),s(8010);var a=s(3657),l=s(8300),c=s(1405),u=s(7758),d=s(2271);const h={name:"aleListItem",props:["book","rowIndex","keys"],mixins:[l.Z,a.Z,c.Z],components:{lazy:u.Z,sampleButton:d.Z},data:function(){return{coverUrl:"",coverUrl27:"",bookTitle:"",goodreadsUrl:"",columns:null,imageLoading:!0}},created:function(){this.coverUrl=this.makeCoverUrl(this.book.cover),this.coverUrl&&(this.coverUrl27=this.coverUrl.replace("_SL500_","_SL27_")),this.bookTitle=this.book.title||this.book.titleShort,this.columns=this.prepareColumns()},mounted:function(){this.$nextTick((function(){this.imageLoading=!1}))},methods:{prepareColumns:function(){var e=this;return _.map(this.keys,(function(t){var s={};switch(s.key=t,s.class="col-"+_.kebabCase(t),t){case"authors":case"narrators":case"categories":case"publishers":case"tags":s.text=e.stringifyArray(e.book[t],"name","categories"===t?" > ":null);break;case"series":var r=e.book.series;r&&(r=_.map(r,(function(e){var t=e.bookNumbers?" (book "+e.bookNumbers.join(", ")+")":"";return e.name+t})).join(", ")),s.text=r||"";break;case"title":s.text=e.book[t]||e.book.titleShort,s.class+=" sticky-col";break;case"bookNumbers":var o=_.filter(e.book.series,"bookNumbers");o=_.map(o,"bookNumbers"),o=_.flatten(o),_.isEmpty(o)?o=null:_.isArray(o)&&(o=o.join(", ")),s.text=e.book.series?o||"∞":"";break;case"isbn10":var i=_.find(e.book.isbns,{type:"ISBN_10"});i&&(s.text=i.identifier);break;case"isbn13":var n=_.find(e.book.isbns,{type:"ISBN_13"});n&&(s.text=n.identifier);break;default:s.text=e.book[t],s.name=""}return s.text||(s.text=null),s}))}}},p=(0,o.Z)(h,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("tr",{staticClass:"ale-row-inner",on:{click:function(t){return e.$root.$emit("book-clicked",{book:e.book})}}},e._l(e.columns,(function(t){return s("td",{key:t.key,staticClass:"ale-col",class:t.class,attrs:{name:t.name}},[s("div",{staticClass:"ale-col-inner"},["title"===t.key?s("span",{staticClass:"icons-n-stuff"},[s("span",{staticClass:"info-icon"},[s("font-awesome",{staticClass:"pointer",attrs:{fas:"",icon:"chevron-down"}})],1),e._v(" "),s("sampleButton",{attrs:{book:e.book,index:e.rowIndex,size:16}}),e._v(" "),s("div",{staticClass:"thumbnail-wrapper"},[e.imageLoading?e._e():s("img",{attrs:{crossorigin:"anonymous",src:e.coverUrl27,alt:""}})])],1):e._e(),e._v(" "),s("span",{staticClass:"text-container"},[e._v(" "+e._s(t.text||" "))])])])})),0)}),[],!1,null,null,null).exports;var m=s(5655);const f={name:"aleBooks",components:{lazy:u.Z,aleHeader:n,aleListRow:p,bookDetails:function(){return s.e(4).then(s.bind(s,2353))}},mixins:[l.Z,m.Z],data:function(){return{spreadsheetTop:170,keys:"",prevScrollTop:0}},created:function(){this.keys=this.prepareKeys()},mounted:function(){this.setSpreadsheetOffset()},methods:{setSpreadsheetOffset:function(){var e=document.querySelector("#ale-search-wrap"),t=window.pageYOffset+e.getBoundingClientRect().top,s=e.offsetHeight;this.spreadsheetTop=t+s}}},b=(0,o.Z)(f,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{ref:"listView",staticClass:"ale-books list-view",style:{top:e.spreadsheetTop+"px"}},[e.$store.state.bookDetails.book&&e.$store.state.bookDetails.index>-1?s("book-details",{attrs:{booksWrapper:e.$refs.booksWrapper}}):e._e(),e._v(" "),s("div",{staticClass:"list-view-inner-wrap"},[s("table",[s("thead",[s("ale-header",{attrs:{keys:e.keys}})],1),e._v(" "),s("tbody",e._l(e.$store.state.chunkCollection,(function(t,r){return t.asin?s("lazy",{key:"book:"+t.asin,ref:"domBooks",refInFor:!0,staticClass:"ale-row",attrs:{"data-asin":t.asin}},[s("ale-list-row",{attrs:{book:t,rowIndex:r,keys:e.keys}})],1):e._e()})),1)])])],1)}),[],!1,null,null,null).exports},7758:(e,t,s)=>{s.d(t,{Z:()=>o});const r={name:"lazy",props:["row","tag"],data:function(){return{observer:null,intersected:!1}},mounted:function(){this.$nextTick((function(){var e=this;this.observer=new IntersectionObserver((function(t){t[0].isIntersecting&&(e.intersected=!0,e.observer.disconnect())}),{threshold:0,rootMargin:"100px"}),this.observer.observe(this.$el)}))},destroyed:function(){this.observer&&this.observer.disconnect()}},o=(0,s(810).Z)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.tag?"td"===e.tag?s("td",{class:{mounted:e.intersected}},[e.intersected?e._t("default"):e._e()],2):e._e():s("div",{class:{mounted:e.intersected}},[e.intersected?e._t("default"):e._e()],2)}),[],!1,null,null,null).exports},2271:(e,t,s)=>{s.d(t,{Z:()=>r});const r=(0,s(810).Z)({name:"sampleButton",props:["book","index","topRight","size"],methods:{playSample:function(e,t){this.$root.$emit("play-audio",{from:"sampleButton",route:this.$route,book:e,index:t})}}},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("font-awesome",{directives:[{name:"tippy",rawName:"v-tippy"}],staticClass:"pointer",class:{"top-right":e.topRight},style:{width:(e.size||30)+"px",height:"auto"},attrs:{fas:"",icon:"play-circle",content:"Play sample audio"},on:{click:function(t){return e.playSample(e.book,e.rowIndex)}}})}),[],!1,null,"05b60316",null).exports}}]);