exports.ids = [2];
exports.modules = {

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(35);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("13bf1a2a", content, true, context)
};

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /* eslint-disable no-useless-escape */
  methods: {
    nameBreedHtml(str) {
      if (str) {
        const res = str.split('breeds/');
        const title = res[1].split(/[\\\/]/);
        let nameBreed = title[0].replace('-', ' ').split(/\s+/);

        if (nameBreed.length > 1) {
          const assistant = nameBreed[0];
          nameBreed[0] = nameBreed[1];
          nameBreed[1] = assistant;
          nameBreed = nameBreed.join(' ');
        } else {
          nameBreed = nameBreed.join(' ');
        }

        return nameBreed;
      }
    },

    nameBreed(str) {
      if (str) {
        const res = str.split('breeds/');
        const title = res[1].split(/[\\\/]/);
        return title[0];
      }
    }

  }
});

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1ea9bf16_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1ea9bf16_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1ea9bf16_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1ea9bf16_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1ea9bf16_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".back-top[data-v-1ea9bf16]{position:fixed;bottom:80px;right:40px;z-index:2;display:none;cursor:pointer}.back-top.active[data-v-1ea9bf16]{display:block}.back-top svg[data-v-1ea9bf16]{width:60px;height:60px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/back-top/index.vue?vue&type=template&id=1ea9bf16&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"back-top",on:{"click":_vm.backTop}},[_vm._ssrNode("<svg viewBox=\"0 0 55 55\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" data-v-1ea9bf16><circle cx=\"27.5\" cy=\"27.5\" r=\"27\" fill=\"none\" stroke=\"white\" data-v-1ea9bf16></circle><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M33.9667 25.8088C33.5891 26.1865 32.9767 26.1865 32.599 25.8088L29.0921 22.3019V38.0197C29.0921 38.5538 28.6591 38.9868 28.125 38.9868C27.5909 38.9868 27.1579 38.5538 27.1579 38.0197V22.3019L23.651 25.8088C23.2733 26.1865 22.6609 26.1865 22.2833 25.8088C21.9056 25.4311 21.9056 24.8188 22.2833 24.4411L27.4412 19.2832C27.8188 18.9056 28.4312 18.9056 28.8088 19.2832L33.9667 24.4411C34.3444 24.8188 34.3444 25.4311 33.9667 25.8088Z\" fill=\"white\" data-v-1ea9bf16></path></svg>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/back-top/index.vue?vue&type=template&id=1ea9bf16&scoped=true&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/back-top/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var back_topvue_type_script_lang_js_ = ({
  name: 'back-top',

  data() {
    return {
      isActive: false
    };
  },

  methods: {
    backTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },

    handleScroll() {
      const backTop = document.querySelector('.back-top');

      if (window.pageYOffset > 1000) {
        backTop.classList.add('active');
      } else {
        backTop.classList.remove('active');
      }
    }

  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  }

});
// CONCATENATED MODULE: ./components/back-top/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_back_topvue_type_script_lang_js_ = (back_topvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/back-top/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(34)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_back_topvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1ea9bf16",
  "3783d151"
  
)

/* harmony default export */ var back_top = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dogs-list/index.vue?vue&type=template&id=743eefee&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dogs-list"},[_vm._ssrNode("<div class=\"container\" data-v-743eefee>","</div>",[_vm._ssrNode("<div class=\"dogs-cart\" data-v-743eefee>","</div>",_vm._l((_vm.dogsCart),function(photo){return _vm._ssrNode("<div"+(_vm._ssrAttr("id",photo))+" class=\"dogs-cart__item\" data-v-743eefee>","</div>",[_c('nuxt-link',{staticClass:"dogs-cart__img dogs-cart__hover",attrs:{"to":("/" + (_vm.nameBreed(photo)))}},[_c('img',{attrs:{"src":photo}}),_c('div',{staticClass:"dogs-cart__text"},[_vm._v(_vm._s(_vm.nameBreedHtml(photo)))])]),_vm._ssrNode("<button data-v-743eefee>","</button>",[_c('Heart',{staticClass:"dogs-cart__svg"})],1)],1)}),0)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/dogs-list/index.vue?vue&type=template&id=743eefee&scoped=true&lang=pug&

// EXTERNAL MODULE: ./components/heart/index.vue + 4 modules
var heart = __webpack_require__(9);

// EXTERNAL MODULE: ./assets/mixin.js/mixin.js
var mixin = __webpack_require__(33);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dogs-list/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//

/* eslint-disable no-useless-escape */


/* harmony default export */ var dogs_listvue_type_script_lang_js_ = ({
  name: 'dogs-list',
  mixins: [mixin["a" /* default */]],
  components: {
    Heart: heart["a" /* default */]
  },

  data() {
    return {
      isActive: false
    };
  },

  props: {
    dogsCart: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    },

    getDogs() {
      let dates = JSON.parse(localStorage.getItem('Избранное'));

      if (dates === undefined) {
        dates = [];
      }

      return dates;
    },

    setDogs(images) {
      const dates = this.getDogs() || [];
      const found = dates.some(el => {
        return el.image === images;
      });

      if (!found) {
        dates.push({
          image: images
        });
        localStorage.setItem('Избранное', JSON.stringify(dates));
      }
    }

  }
});
// CONCATENATED MODULE: ./components/dogs-list/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_dogs_listvue_type_script_lang_js_ = (dogs_listvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/dogs-list/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_dogs_listvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "743eefee",
  "3a5bbdee"
  
)

/* harmony default export */ var dogs_list = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(54);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("07bbd47f", content, true, context)
};

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_favorite_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_favorite_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_favorite_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_favorite_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_favorite_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".svg-empty{display:none}.svg-filled{display:block}.favorite__info{margin-top:100px;text-align:center;color:#3c59f0;font-weight:600;font-size:30px;line-height:34px}@media only screen and (max-width:800px){.favorite__info{margin-top:50px;font-size:22px;line-height:26px}}@media only screen and (max-width:500px){.favorite__info{margin-top:50px;font-size:18px;line-height:22px}}.hidden{display:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/favorite.vue?vue&type=template&id=40eec4b4&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"favorite"},[_vm._ssrNode("<div class=\"favorite__info\""+(_vm._ssrStyle(null,null, { display: (this.favoriteDogs.length === 0) ? '' : 'none' }))+">Вы пока ничего не добавили в Избранное</div>"),_c('DogsList',{staticClass:"active",attrs:{"dogsCart":_vm.favoriteDogs},nativeOn:{"click":function($event){return _vm.greet.apply(null, arguments)}}}),_c('BackTop')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/favorite.vue?vue&type=template&id=40eec4b4&lang=pug&

// EXTERNAL MODULE: ./components/back-top/index.vue + 4 modules
var back_top = __webpack_require__(39);

// EXTERNAL MODULE: ./components/dogs-list/index.vue + 4 modules
var dogs_list = __webpack_require__(40);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/favorite.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//


/* harmony default export */ var favoritevue_type_script_lang_js_ = ({
  name: 'favorite',
  components: {
    DogsList: dogs_list["a" /* default */],
    BackTop: back_top["a" /* default */]
  },

  data() {
    return {
      favoriteDogs: []
    };
  },

  methods: {
    greet(event) {
      const items = this.nameBreedFetch();

      if (event) {
        if (event.target.classList.contains('svg-filled')) {
          const elem = event.target.closest('.dogs-cart__item');
          elem.remove();
          const dates = items.filter(el => el.image !== elem.id);
          localStorage.setItem('Избранное', JSON.stringify(dates));
          elem.classList.add('hidden');
        }
      }
    },

    nameBreedFetch() {
      if (typeof window !== 'undefined') {
        let dates = JSON.parse(localStorage.getItem('Избранное'));

        if (dates === undefined) {
          dates = [];
        }

        return dates;
      }
    },

    filterDogs() {
      const photo = this.nameBreedFetch();

      if (photo) {
        for (const key of photo) {
          this.favoriteDogs.push(key.image);
        }
      }
    }

  },

  mounted() {
    this.filterDogs();
  }

});
// CONCATENATED MODULE: ./pages/favorite.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_favoritevue_type_script_lang_js_ = (favoritevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/favorite.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(53)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_favoritevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4fae137e"
  
)

/* harmony default export */ var favorite = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=favorite.js.map