(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{148:function(t,e,o){var content=o(151);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(21).default)("13bf1a2a",content,!0,{sourceMap:!1})},149:function(t,e,o){"use strict";o(87),o(28);e.a={methods:{nameBreedHtml(t){if(t){var e=t.split("breeds/")[1].split(/[\\\/]/)[0].replace("-"," ").split(/\s+/);if(e.length>1){var o=e[0];e[0]=e[1],e[1]=o,e=e.join(" ")}else e=e.join(" ");return e}},nameBreed(t){if(t)return t.split("breeds/")[1].split(/[\\\/]/)[0]}}}},150:function(t,e,o){"use strict";o(148)},151:function(t,e,o){var r=o(20)(!1);r.push([t.i,".back-top[data-v-1ea9bf16]{position:fixed;bottom:80px;right:40px;z-index:2;display:none;cursor:pointer}.back-top.active[data-v-1ea9bf16]{display:block}.back-top svg[data-v-1ea9bf16]{width:60px;height:60px}",""]),t.exports=r},155:function(t,e,o){"use strict";var r={name:"back-top",data:()=>({isActive:!1}),methods:{backTop(){window.scrollTo({top:0,behavior:"smooth"})},handleScroll(){var t=document.querySelector(".back-top");window.pageYOffset>1e3?t.classList.add("active"):t.classList.remove("active")}},mounted(){window.addEventListener("scroll",this.handleScroll)}},n=(o(150),o(5)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"back-top",on:{click:t.backTop}},[o("svg",{attrs:{viewBox:"0 0 55 55",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[o("circle",{attrs:{cx:"27.5",cy:"27.5",r:"27",fill:"none",stroke:"white"}}),o("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M33.9667 25.8088C33.5891 26.1865 32.9767 26.1865 32.599 25.8088L29.0921 22.3019V38.0197C29.0921 38.5538 28.6591 38.9868 28.125 38.9868C27.5909 38.9868 27.1579 38.5538 27.1579 38.0197V22.3019L23.651 25.8088C23.2733 26.1865 22.6609 26.1865 22.2833 25.8088C21.9056 25.4311 21.9056 24.8188 22.2833 24.4411L27.4412 19.2832C27.8188 18.9056 28.4312 18.9056 28.8088 19.2832L33.9667 24.4411C34.3444 24.8188 34.3444 25.4311 33.9667 25.8088Z",fill:"white"}})])])}),[],!1,null,"1ea9bf16",null);e.a=component.exports},156:function(t,e,o){"use strict";var r=o(57),n={name:"dogs-list",mixins:[o(149).a],components:{Heart:r.a},data:()=>({isActive:!1}),props:{dogsCart:{type:Array,default:()=>[]}},methods:{toggle(){this.isActive=!this.isActive},getDogs(){var t=JSON.parse(localStorage.getItem("Избранное"));return void 0===t&&(t=[]),t},setDogs(t){var e=this.getDogs()||[];e.some((e=>e.image===t))||(e.push({image:t}),localStorage.setItem("Избранное",JSON.stringify(e)))}}},l=o(5),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"dogs-list"},[o("div",{staticClass:"container"},[o("div",{staticClass:"dogs-cart"},t._l(t.dogsCart,(function(e){return o("div",{key:e.id,staticClass:"dogs-cart__item",attrs:{id:e}},[o("nuxt-link",{staticClass:"dogs-cart__img dogs-cart__hover",attrs:{to:"/"+t.nameBreed(e)}},[o("img",{attrs:{src:e}}),o("div",{staticClass:"dogs-cart__text"},[t._v(t._s(t.nameBreedHtml(e)))])]),o("button",{on:{click:function(o){return t.setDogs(e)}}},[o("Heart",{staticClass:"dogs-cart__svg"})],1)],1)})),0)])])}),[],!1,null,"743eefee",null);e.a=component.exports},166:function(t,e,o){var content=o(170);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(21).default)("07bbd47f",content,!0,{sourceMap:!1})},169:function(t,e,o){"use strict";o(166)},170:function(t,e,o){var r=o(20)(!1);r.push([t.i,".svg-empty{display:none}.svg-filled{display:block}.favorite__info{margin-top:100px;text-align:center;color:#3c59f0;font-weight:600;font-size:30px;line-height:34px}@media only screen and (max-width:800px){.favorite__info{margin-top:50px;font-size:22px;line-height:26px}}@media only screen and (max-width:500px){.favorite__info{margin-top:50px;font-size:18px;line-height:22px}}.hidden{display:none}",""]),t.exports=r},176:function(t,e,o){"use strict";o.r(e);o(13),o(17);var r=o(155),n={name:"favorite",components:{DogsList:o(156).a,BackTop:r.a},data:()=>({favoriteDogs:[]}),methods:{greet(t){var e=this.nameBreedFetch();if(t&&t.target.classList.contains("svg-filled")){var o=t.target.closest(".dogs-cart__item");o.remove();var r=e.filter((t=>t.image!==o.id));localStorage.setItem("Избранное",JSON.stringify(r)),o.classList.add("hidden")}},nameBreedFetch(){if("undefined"!=typeof window){var t=JSON.parse(localStorage.getItem("Избранное"));return void 0===t&&(t=[]),t}},filterDogs(){var t=this.nameBreedFetch();if(t)for(var e of t)this.favoriteDogs.push(e.image)}},mounted(){this.filterDogs()}},l=(o(169),o(5)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"favorite"},[o("div",{directives:[{name:"show",rawName:"v-show",value:0===this.favoriteDogs.length,expression:"this.favoriteDogs.length === 0"}],staticClass:"favorite__info"},[t._v("Вы пока ничего не добавили в Избранное")]),o("DogsList",{staticClass:"active",attrs:{dogsCart:t.favoriteDogs},nativeOn:{click:function(e){return t.greet.apply(null,arguments)}}}),o("BackTop")],1)}),[],!1,null,null,null);e.default=component.exports}}]);