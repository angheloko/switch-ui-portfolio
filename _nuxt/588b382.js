(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{228:function(t,e,r){var content=r(231);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(64).default)("03085605",content,!0,{sourceMap:!1})},230:function(t,e,r){"use strict";r(228)},231:function(t,e,r){var n=r(63)((function(i){return i[1]}));n.push([t.i,".project h2[data-v-21275564]{\n  visibility:hidden;\n  color:#26a69a\n}\n.dark .project h2[data-v-21275564]{\n  color:#00bcd4\n}\n.project:hover h2[data-v-21275564]{\n  visibility:visible\n}\n.project:hover .image-wrapper[data-v-21275564]{\n  --tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  background-color:#26a69a\n}\n.dark .project:hover .image-wrapper[data-v-21275564]{\n  background-color:#00bcd4\n}",""]),t.exports=n},232:function(t,e,r){"use strict";r.r(e);r(51);var n={name:"Gallery",props:{projects:{type:Array,default:function(){return[]}}},data:function(){return{startDrag:!1,isDragging:!1,left:0,x:0}},methods:{mouseDownHandler:function(t){this.startDrag=!0,this.x=t.clientX,this.left=this.$el.scrollLeft},mouseUpHandler:function(){var t=this;setTimeout((function(){t.startDrag=!1,t.isDragging=!1}))},mouseMoveHandler:function(t){if(this.startDrag){this.isDragging=!0;var e=t.clientX-this.x;this.$el.scrollLeft=this.left-e}},selectProject:function(t){this.isDragging||this.$emit("click",t)}}},o=(r(230),r(37)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex items-start overflow-x-hidden",class:{"cursor-pointer":t.isDragging},on:{mousedown:t.mouseDownHandler,mouseup:t.mouseUpHandler,mousemove:function(e){return e.preventDefault(),t.mouseMoveHandler(e)}}},t._l(t.projects,(function(e,n){return r("div",{key:e.slug,staticClass:"project pb-2 pl-4 first:pl-16 last:pr-16",on:{click:function(e){return t.selectProject(n)}}},[r("h2",{staticClass:"w-48 pb-1 text-lg truncate px-2"},[t._v("\n      "+t._s(e.title)+"\n    ")]),t._v(" "),r("div",{staticClass:"image-wrapper bg-transparent p-2 rounded"},[r("div",{staticClass:"h-48 w-48 flex-none shadow-md hover:shadow-none"},[r("img",{staticClass:"h-full w-full object-cover object-center",attrs:{src:e.image,alt:e.title,draggable:"false"}})])])])})),0)}),[],!1,null,"21275564",null);e.default=component.exports}}]);