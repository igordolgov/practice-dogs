exports.ids = [1];
exports.modules = Array(32).concat([
/* 32 */
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
/* 33 */
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
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1ea9bf16_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1ea9bf16_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1ea9bf16_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1ea9bf16_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1ea9bf16_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".back-top[data-v-1ea9bf16]{position:fixed;bottom:80px;right:40px;z-index:2;display:none;cursor:pointer}.back-top.active[data-v-1ea9bf16]{display:block}.back-top svg[data-v-1ea9bf16]{width:60px;height:60px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("7fd9ca50", content, true, context)
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("6a147ef4", content, true, context)
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(46);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("4af7400e", content, true, context)
};

/***/ }),
/* 39 */
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
/* 40 */
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
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_29f48ba2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_29f48ba2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_29f48ba2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_29f48ba2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_29f48ba2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".breed[data-v-29f48ba2]{display:flex;padding-bottom:30px;position:relative;width:280px;height:60px;cursor:pointer;align-items:flex-start;justify-content:space-between}.breed[data-v-29f48ba2]:before{content:\"\";position:absolute;bottom:36px;left:10px;display:block;width:77px;height:1px;border-bottom:.5px dashed #fff;transition:all .4s ease-in-out}.breed[data-v-29f48ba2]:hover:not(.focus-visible):before,.breed[data-v-29f48ba2]:hover:not(:focus-visible):before{border-bottom:.5px dashed red}.breed:hover:not(.focus-visible) .breed__btn[data-v-29f48ba2],.breed:hover:not(:focus-visible) .breed__btn[data-v-29f48ba2]{color:red}.breed:hover:not(.focus-visible) .breed__btn[data-v-29f48ba2]:after,.breed:hover:not(.focus-visible) .breed__btn[data-v-29f48ba2]:before,.breed:hover:not(:focus-visible) .breed__btn[data-v-29f48ba2]:after,.breed:hover:not(:focus-visible) .breed__btn[data-v-29f48ba2]:before{background-color:red}.breed__btn[data-v-29f48ba2]{position:relative;font-family:\"IBM Plex Sans\";display:block;width:80px;font-size:16px;line-height:20px;letter-spacing:.01em;background-color:transparent;color:#fff;transition:all .4s ease-in-out}.breed__btn[data-v-29f48ba2]:after,.breed__btn[data-v-29f48ba2]:before{content:\"\";position:absolute;top:60%;right:-5px;display:block;width:10px;height:1px;background-color:#fff;transform:translate(-3px,-50%) rotate(45deg);transition:all .4s ease-in-out}.breed__btn[data-v-29f48ba2]:after{transform:translate(4px,-50%) rotate(-45deg)}.breed__btn.active[data-v-29f48ba2]:before{transform:translate(-3px,-50%) rotate(-45deg)}.breed__btn.active[data-v-29f48ba2]:after{transform:translate(4px,-50%) rotate(45deg)}.breed__selected[data-v-29f48ba2]{position:relative;display:inline-block;padding:4px 19px 4px 11px;border-radius:20px;background-color:transparent;font-size:12px;line-height:16px;border:1px solid #3c59f0;color:#3c59f0;display:none}.breed__selected[data-v-29f48ba2]:first-letter{text-transform:uppercase}.breed__selected[data-v-29f48ba2]:after,.breed__selected[data-v-29f48ba2]:before{position:absolute;content:\"\";height:.8px;width:8px;right:8px;top:12px;background:#3c59f0}.breed__selected[data-v-29f48ba2]:after{transform:rotate(-45deg)}.breed__selected[data-v-29f48ba2]:before{transform:rotate(45deg)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7ae6b6a5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7ae6b6a5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7ae6b6a5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7ae6b6a5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7ae6b6a5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".breed-section[data-v-7ae6b6a5]{padding-bottom:35px}.breed-section__button[data-v-7ae6b6a5]{display:inline-block;padding:4px 12px;background-color:transparent;border:1px solid #3c59f0;color:#3c59f0;border-radius:20px}.breeds[data-v-7ae6b6a5]{margin-top:10px;display:flex;align-items:center;flex-wrap:wrap;grid-gap:10px;gap:10px;color:#626262}.breeds__letter[data-v-7ae6b6a5]{font-size:20px;line-height:28px;text-transform:uppercase}.breeds__letter[data-v-7ae6b6a5]:not(:first-child){margin-left:10px}.breeds__item[data-v-7ae6b6a5]{display:inline-block;padding:4px 12px;margin:3px 5px;border:1px solid #626262;border-radius:20px;background-color:transparent;font-size:12px;line-height:16px;color:#626262}.breeds__item[data-v-7ae6b6a5]:first-letter{text-transform:uppercase}.breeds__item[data-v-7ae6b6a5]:hover:not(.focus-visible),.breeds__item[data-v-7ae6b6a5]:hover:not(:focus-visible){border:1px solid #3c59f0;color:#3c59f0}.breeds__item[data-v-7ae6b6a5]:first-child{margin-left:5px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5387ab91_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5387ab91_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5387ab91_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5387ab91_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5387ab91_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".loader[data-v-5387ab91]{width:100%}.lds-ellipsis[data-v-5387ab91]{margin:0 auto;position:relative;width:80px;height:80px}.lds-ellipsis div[data-v-5387ab91]{position:absolute;top:33px;width:13px;height:13px;border-radius:50%;background:transparent;border:1px solid #fff;-webkit-animation-timing-function:cubic-bezier(0,1,1,0);animation-timing-function:cubic-bezier(0,1,1,0)}.lds-ellipsis div[data-v-5387ab91]:first-child{left:8px;-webkit-animation:lds-ellipsis1-data-v-5387ab91 .6s infinite;animation:lds-ellipsis1-data-v-5387ab91 .6s infinite}.lds-ellipsis div[data-v-5387ab91]:nth-child(2){left:8px}.lds-ellipsis div[data-v-5387ab91]:nth-child(2),.lds-ellipsis div[data-v-5387ab91]:nth-child(3){-webkit-animation:lds-ellipsis2-data-v-5387ab91 .6s infinite;animation:lds-ellipsis2-data-v-5387ab91 .6s infinite}.lds-ellipsis div[data-v-5387ab91]:nth-child(3){left:32px}.lds-ellipsis div[data-v-5387ab91]:nth-child(4){left:56px;-webkit-animation:lds-ellipsis3-data-v-5387ab91 .6s infinite;animation:lds-ellipsis3-data-v-5387ab91 .6s infinite}@-webkit-keyframes lds-ellipsis1-data-v-5387ab91{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes lds-ellipsis1-data-v-5387ab91{0%{transform:scale(0)}to{transform:scale(1)}}@-webkit-keyframes lds-ellipsis3-data-v-5387ab91{0%{transform:scale(1)}to{transform:scale(0)}}@keyframes lds-ellipsis3-data-v-5387ab91{0%{transform:scale(1)}to{transform:scale(0)}}@-webkit-keyframes lds-ellipsis2-data-v-5387ab91{0%{transform:translate(0)}to{transform:translate(24px)}}@keyframes lds-ellipsis2-data-v-5387ab91{0%{transform:translate(0)}to{transform:translate(24px)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/breed-btn/index.vue?vue&type=template&id=29f48ba2&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div class=\"breed\" data-v-29f48ba2>","</div>",[_vm._ssrNode("<button"+(_vm._ssrClass("breed__btn",{ active: _vm.isActive }))+" data-v-29f48ba2>Породы</button>"),_c('nuxt-link',{staticClass:"breed__selected",attrs:{"to":"/"}},[_vm._v(_vm._s(_vm.title))])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/breed-btn/index.vue?vue&type=template&id=29f48ba2&scoped=true&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/breed-btn/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var breed_btnvue_type_script_lang_js_ = ({
  name: 'breed-btn',

  data() {
    return {
      isActive: false
    };
  },

  methods: {
    toggle() {
      this.isActive = !this.isActive;
    }

  },
  props: {
    title: {
      type: String
    }
  }
});
// CONCATENATED MODULE: ./components/breed-btn/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_breed_btnvue_type_script_lang_js_ = (breed_btnvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/breed-btn/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(41)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_breed_btnvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "29f48ba2",
  "9a838086"
  
)

/* harmony default export */ var breed_btn = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/breed-section/index.vue?vue&type=template&id=7ae6b6a5&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"breed-section"},[_vm._ssrNode("<button class=\"breed-section__button\" data-v-7ae6b6a5>Все пёсели</button><div class=\"breeds\" data-v-7ae6b6a5></div>"),_vm._l((Object.keys(_vm.breeds)),function(letter){return _vm._ssrNode("<span class=\"breeds__letter\" data-v-7ae6b6a5>","</span>",[_vm._ssrNode(_vm._ssrEscape(_vm._s(letter))),_vm._l((_vm.breeds[letter]),function(breed){return _c('nuxt-link',{key:breed.id,staticClass:"breeds__item",attrs:{"to":("/" + (_vm.getBreeds(breed)))}},[_vm._v(_vm._s(breed))])})],2)})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/breed-section/index.vue?vue&type=template&id=7ae6b6a5&scoped=true&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/breed-section/index.vue?vue&type=script&lang=js&
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
//
//
//
//
/* harmony default export */ var breed_sectionvue_type_script_lang_js_ = ({
  name: 'breed-section',

  data() {
    return {
      // Создаём массив (пустой) для хранения данных, полученных из API
      items: []
    };
  },

  methods: {
    getData() {
      // Получаем из API список пород собак
      fetch('https://dog.ceo/api/breeds/list/all') // Декодируем ответ в формате JSON
      .then(response => response.json()).then(data => {
        this.items = data.message;
      });
    },

    getBreeds(item) {
      item = item.replace(' ', '/');
      return item;
    }

  },

  mounted() {
    this.getData();
  },

  computed: {
    breeds() {
      const arr = [];
      Object.keys(this.items).forEach(item => {
        if (this.items[item].length === 0) {
          arr.push(item);
        } else {
          this.items[item].forEach(el => arr.push(item + ' ' + el));
        }
      });
      const obj = {};
      arr.forEach(item => {
        const key = item.charAt(0);

        if (!Object.prototype.hasOwnProperty.call(obj, key)) {
          obj[key] = [];
        }

        obj[key].push(item);
      });
      return obj;
    }

  }
});
// CONCATENATED MODULE: ./components/breed-section/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_breed_sectionvue_type_script_lang_js_ = (breed_sectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/breed-section/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(43)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_breed_sectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7ae6b6a5",
  "5bff70f4"
  
)

/* harmony default export */ var breed_section = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/loader/index.vue?vue&type=template&id=5387ab91&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"loader"},[_vm._ssrNode("<div class=\"lds-ellipsis\" data-v-5387ab91><div data-v-5387ab91></div><div data-v-5387ab91></div><div data-v-5387ab91></div><div data-v-5387ab91></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/loader/index.vue?vue&type=template&id=5387ab91&scoped=true&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/loader/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var loadervue_type_script_lang_js_ = ({
  name: 'loader'
});
// CONCATENATED MODULE: ./components/loader/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_loadervue_type_script_lang_js_ = (loadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/loader/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(45)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_loadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5387ab91",
  "7084c9f5"
  
)

/* harmony default export */ var loader = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 50 */,
/* 51 */,
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(58);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("18adf0fa", content, true, context)
};

/***/ }),
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_vue_type_style_index_0_id_7039d9c9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_vue_type_style_index_0_id_7039d9c9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_vue_type_style_index_0_id_7039d9c9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_vue_type_style_index_0_id_7039d9c9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_vue_type_style_index_0_id_7039d9c9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".breed-dog[data-v-7039d9c9]{margin-top:30px}[data-v-7039d9c9] .breed__selected{display:inline-block}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 59 */,
/* 60 */,
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_.vue?vue&type=template&id=7039d9c9&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"breed-dog"},[_c('BreedBtn',{attrs:{"title":_vm.breed},on:{"list-breeds":_vm.addListBreeds}}),(_vm.isHidden)?_c('BreedSection',{staticClass:"breedsection",class:{ active: _vm.isHidden }}):_vm._e(),_c('DogsList',{attrs:{"dogsCart":_vm.breedImg}}),(_vm.loading)?_c('Loader'):_vm._e(),_c('BackTop')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_.vue?vue&type=template&id=7039d9c9&scoped=true&lang=pug&

// EXTERNAL MODULE: ./components/loader/index.vue + 4 modules
var loader = __webpack_require__(49);

// EXTERNAL MODULE: ./components/back-top/index.vue + 4 modules
var back_top = __webpack_require__(39);

// EXTERNAL MODULE: ./components/breed-btn/index.vue + 4 modules
var breed_btn = __webpack_require__(47);

// EXTERNAL MODULE: ./components/breed-section/index.vue + 4 modules
var breed_section = __webpack_require__(48);

// EXTERNAL MODULE: ./components/dogs-list/index.vue + 4 modules
var dogs_list = __webpack_require__(40);

// EXTERNAL MODULE: ./assets/mixin.js/mixin.js
var mixin = __webpack_require__(33);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_.vue?vue&type=script&lang=js&
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






/* harmony default export */ var _vue_type_script_lang_js_ = ({
  name: 'page-index',
  mixins: [mixin["a" /* default */]],
  components: {
    Loader: loader["a" /* default */],
    BackTop: back_top["a" /* default */],
    BreedBtn: breed_btn["a" /* default */],
    BreedSection: breed_section["a" /* default */],
    DogsList: dogs_list["a" /* default */]
  },

  data() {
    return {
      breedImg: [],
      loading: true,
      isHidden: false,
      title: ''
    };
  },

  methods: {
    getData() {
      fetch(`https://dog.ceo/api/breed/${this.nameBreedFetch}/images`).then(response => response.json()).then(json => {
        this.breedImg = json.message;
        this.loading = false;
      });
    },

    addListBreeds() {
      this.isHidden = !this.isHidden;
    }

  },

  mounted() {
    this.getData();
  },

  computed: {
    nameBreedFetch() {
      let dates = this.$route.path;

      if (dates) {
        dates = dates.replace('-', '/');
      }

      return dates.substring(1);
    },

    breed() {
      let name = this.nameBreedFetch;

      if (name) {
        name = name.replace('/', ' ');
        const title = name.split(' ');

        if (title.length < 2) {
          return name;
        }

        return [title[1], title[0]].concat(title.splice(2, title.length)).join(' ');
      }

      return this.title;
    }

  }
});
// CONCATENATED MODULE: ./pages/_.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_vue_type_script_lang_js_ = (_vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/_.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(57)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7039d9c9",
  "6ee4a56d"
  
)

/* harmony default export */ var _ = __webpack_exports__["default"] = (component.exports);

/***/ })
]);;
//# sourceMappingURL=_.js.map