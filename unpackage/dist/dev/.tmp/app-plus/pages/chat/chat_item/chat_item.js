(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/chat/chat_item/chat_item"],{

/***/ "../../../网约车/pages/chat/chat_item/chat_item.vue":
/*!*************************************************!*\
  !*** D:/网约车/pages/chat/chat_item/chat_item.vue ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chat_item_vue_vue_type_template_id_5e6e9436___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat_item.vue?vue&type=template&id=5e6e9436& */ "../../../网约车/pages/chat/chat_item/chat_item.vue?vue&type=template&id=5e6e9436&");
/* harmony import */ var _chat_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat_item.vue?vue&type=script&lang=js& */ "../../../网约车/pages/chat/chat_item/chat_item.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chat_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chat_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _chat_item_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat_item.vue?vue&type=style&index=0&lang=scss& */ "../../../网约车/pages/chat/chat_item/chat_item.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _chat_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _chat_item_vue_vue_type_template_id_5e6e9436___WEBPACK_IMPORTED_MODULE_0__["render"],
  _chat_item_vue_vue_type_template_id_5e6e9436___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "网约车/pages/chat/chat_item/chat_item.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../网约车/pages/chat/chat_item/chat_item.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** D:/网约车/pages/chat/chat_item/chat_item.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./chat_item.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../网约车/pages/chat/chat_item/chat_item.vue?vue&type=script&lang=js&");
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../网约车/pages/chat/chat_item/chat_item.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************!*\
  !*** D:/网约车/pages/chat/chat_item/chat_item.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_item_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--8-oneOf-1-2!../../../../HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!../../../../HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./chat_item.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!../../../网约车/pages/chat/chat_item/chat_item.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_item_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_item_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_item_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_item_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_item_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../网约车/pages/chat/chat_item/chat_item.vue?vue&type=template&id=5e6e9436&":
/*!********************************************************************************!*\
  !*** D:/网约车/pages/chat/chat_item/chat_item.vue?vue&type=template&id=5e6e9436& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_item_vue_vue_type_template_id_5e6e9436___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./chat_item.vue?vue&type=template&id=5e6e9436& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../网约车/pages/chat/chat_item/chat_item.vue?vue&type=template&id=5e6e9436&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_item_vue_vue_type_template_id_5e6e9436___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_item_vue_vue_type_template_id_5e6e9436___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../网约车/pages/chat/chat_item/chat_item.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!D:/网约车/pages/chat/chat_item/chat_item.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
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
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      socketTask: {},

      orderId: 1,
      msgId: 10,
      //用户信息
      userInfo: {},
      //文字消息
      textMsg: '',
      //消息列表
      isHistoryLoading: false,
      scrollAnimation: false,
      scrollTop: 0,
      scrollToView: '',
      msgList: [],
      msgImgList: [],
      myuid: 0,

      //录音相关参数

      //H5不能录音
      RECORDER: uni.getRecorderManager(),

      isVoice: false,
      voiceTis: '按住 说话',
      recordTis: "手指上滑 取消发送",
      recording: false,
      willStop: false,
      initPoint: { identifier: 0, Y: 0 },
      recordTimer: null,
      recordLength: 0,

      //播放语音相关参数
      AUDIO: uni.createInnerAudioContext(),
      playMsgid: null,
      VoiceTimer: null,
      // 抽屉参数
      popupLayerClass: '',
      // more参数
      hideMore: true,
      //表情定义
      hideEmoji: true,
      emojiList: [
      [{ "url": "100.gif", alt: "[微笑]" }, { "url": "101.gif", alt: "[伤心]" }, { "url": "102.gif", alt: "[美女]" }, { "url": "103.gif", alt: "[发呆]" }, { "url": "104.gif", alt: "[墨镜]" }, { "url": "105.gif", alt: "[哭]" }, { "url": "106.gif", alt: "[羞]" }, { "url": "107.gif", alt: "[哑]" }, { "url": "108.gif", alt: "[睡]" }, { "url": "109.gif", alt: "[哭]" }, { "url": "110.gif", alt: "[囧]" }, { "url": "111.gif", alt: "[怒]" }, { "url": "112.gif", alt: "[调皮]" }, { "url": "113.gif", alt: "[笑]" }, { "url": "114.gif", alt: "[惊讶]" }, { "url": "115.gif", alt: "[难过]" }, { "url": "116.gif", alt: "[酷]" }, { "url": "117.gif", alt: "[汗]" }, { "url": "118.gif", alt: "[抓狂]" }, { "url": "119.gif", alt: "[吐]" }, { "url": "120.gif", alt: "[笑]" }, { "url": "121.gif", alt: "[快乐]" }, { "url": "122.gif", alt: "[奇]" }, { "url": "123.gif", alt: "[傲]" }],
      [{ "url": "124.gif", alt: "[饿]" }, { "url": "125.gif", alt: "[累]" }, { "url": "126.gif", alt: "[吓]" }, { "url": "127.gif", alt: "[汗]" }, { "url": "128.gif", alt: "[高兴]" }, { "url": "129.gif", alt: "[闲]" }, { "url": "130.gif", alt: "[努力]" }, { "url": "131.gif", alt: "[骂]" }, { "url": "132.gif", alt: "[疑问]" }, { "url": "133.gif", alt: "[秘密]" }, { "url": "134.gif", alt: "[乱]" }, { "url": "135.gif", alt: "[疯]" }, { "url": "136.gif", alt: "[哀]" }, { "url": "137.gif", alt: "[鬼]" }, { "url": "138.gif", alt: "[打击]" }, { "url": "139.gif", alt: "[bye]" }, { "url": "140.gif", alt: "[汗]" }, { "url": "141.gif", alt: "[抠]" }, { "url": "142.gif", alt: "[鼓掌]" }, { "url": "143.gif", alt: "[糟糕]" }, { "url": "144.gif", alt: "[恶搞]" }, { "url": "145.gif", alt: "[什么]" }, { "url": "146.gif", alt: "[什么]" }, { "url": "147.gif", alt: "[累]" }],
      [{ "url": "148.gif", alt: "[看]" }, { "url": "149.gif", alt: "[难过]" }, { "url": "150.gif", alt: "[难过]" }, { "url": "151.gif", alt: "[坏]" }, { "url": "152.gif", alt: "[亲]" }, { "url": "153.gif", alt: "[吓]" }, { "url": "154.gif", alt: "[可怜]" }, { "url": "155.gif", alt: "[刀]" }, { "url": "156.gif", alt: "[水果]" }, { "url": "157.gif", alt: "[酒]" }, { "url": "158.gif", alt: "[篮球]" }, { "url": "159.gif", alt: "[乒乓]" }, { "url": "160.gif", alt: "[咖啡]" }, { "url": "161.gif", alt: "[美食]" }, { "url": "162.gif", alt: "[动物]" }, { "url": "163.gif", alt: "[鲜花]" }, { "url": "164.gif", alt: "[枯]" }, { "url": "165.gif", alt: "[唇]" }, { "url": "166.gif", alt: "[爱]" }, { "url": "167.gif", alt: "[分手]" }, { "url": "168.gif", alt: "[生日]" }, { "url": "169.gif", alt: "[电]" }, { "url": "170.gif", alt: "[炸弹]" }, { "url": "171.gif", alt: "[刀子]" }],
      [{ "url": "172.gif", alt: "[足球]" }, { "url": "173.gif", alt: "[瓢虫]" }, { "url": "174.gif", alt: "[翔]" }, { "url": "175.gif", alt: "[月亮]" }, { "url": "176.gif", alt: "[太阳]" }, { "url": "177.gif", alt: "[礼物]" }, { "url": "178.gif", alt: "[抱抱]" }, { "url": "179.gif", alt: "[拇指]" }, { "url": "180.gif", alt: "[贬低]" }, { "url": "181.gif", alt: "[握手]" }, { "url": "182.gif", alt: "[剪刀手]" }, { "url": "183.gif", alt: "[抱拳]" }, { "url": "184.gif", alt: "[勾引]" }, { "url": "185.gif", alt: "[拳头]" }, { "url": "186.gif", alt: "[小拇指]" }, { "url": "187.gif", alt: "[拇指八]" }, { "url": "188.gif", alt: "[食指]" }, { "url": "189.gif", alt: "[ok]" }, { "url": "190.gif", alt: "[情侣]" }, { "url": "191.gif", alt: "[爱心]" }, { "url": "192.gif", alt: "[蹦哒]" }, { "url": "193.gif", alt: "[颤抖]" }, { "url": "194.gif", alt: "[怄气]" }, { "url": "195.gif", alt: "[跳舞]" }],
      [{ "url": "196.gif", alt: "[发呆]" }, { "url": "197.gif", alt: "[背着]" }, { "url": "198.gif", alt: "[伸手]" }, { "url": "199.gif", alt: "[耍帅]" }]],


      onlineEmoji: { "100.gif": "AbNQgA.gif", "101.gif": "AbN3ut.gif", "102.gif": "AbNM3d.gif", "103.gif": "AbN8DP.gif", "104.gif": "AbNljI.gif", "105.gif": "AbNtUS.gif", "106.gif": "AbNGHf.gif", "107.gif": "AbNYE8.gif", "108.gif": "AbNaCQ.gif", "109.gif": "AbNN4g.gif", "110.gif": "AbN0vn.gif", "111.gif": "AbNd3j.gif", "112.gif": "AbNsbV.gif", "113.gif": "AbNwgs.gif", "114.gif": "AbNrD0.gif", "115.gif": "AbNDuq.gif", "116.gif": "AbNg5F.gif", "117.gif": "AbN6ET.gif", "118.gif": "AbNcUU.gif", "119.gif": "AbNRC4.gif", "120.gif": "AbNhvR.gif", "121.gif": "AbNf29.gif", "122.gif": "AbNW8J.gif", "123.gif": "AbNob6.gif", "124.gif": "AbN5K1.gif", "125.gif": "AbNHUO.gif", "126.gif": "AbNIDx.gif", "127.gif": "AbN7VK.gif", "128.gif": "AbNb5D.gif", "129.gif": "AbNX2d.gif", "130.gif": "AbNLPe.gif", "131.gif": "AbNjxA.gif", "132.gif": "AbNO8H.gif", "133.gif": "AbNxKI.gif", "134.gif": "AbNzrt.gif", "135.gif": "AbU9Vf.gif", "136.gif": "AbUSqP.gif", "137.gif": "AbUCa8.gif", "138.gif": "AbUkGQ.gif", "139.gif": "AbUFPg.gif", "140.gif": "AbUPIS.gif", "141.gif": "AbUZMn.gif", "142.gif": "AbUExs.gif", "143.gif": "AbUA2j.gif", "144.gif": "AbUMIU.gif", "145.gif": "AbUerq.gif", "146.gif": "AbUKaT.gif", "147.gif": "AbUmq0.gif", "148.gif": "AbUuZV.gif", "149.gif": "AbUliF.gif", "150.gif": "AbU1G4.gif", "151.gif": "AbU8z9.gif", "152.gif": "AbU3RJ.gif", "153.gif": "AbUYs1.gif", "154.gif": "AbUJMR.gif", "155.gif": "AbUadK.gif", "156.gif": "AbUtqx.gif", "157.gif": "AbUUZ6.gif", "158.gif": "AbUBJe.gif", "159.gif": "AbUdIO.gif", "160.gif": "AbU0iD.gif", "161.gif": "AbUrzd.gif", "162.gif": "AbUDRH.gif", "163.gif": "AbUyQA.gif", "164.gif": "AbUWo8.gif", "165.gif": "AbU6sI.gif", "166.gif": "AbU2eP.gif", "167.gif": "AbUcLt.gif", "168.gif": "AbU4Jg.gif", "169.gif": "AbURdf.gif", "170.gif": "AbUhFS.gif", "171.gif": "AbU5WQ.gif", "172.gif": "AbULwV.gif", "173.gif": "AbUIzj.gif", "174.gif": "AbUTQs.gif", "175.gif": "AbU7yn.gif", "176.gif": "AbUqe0.gif", "177.gif": "AbUHLq.gif", "178.gif": "AbUOoT.gif", "179.gif": "AbUvYF.gif", "180.gif": "AbUjFU.gif", "181.gif": "AbaSSJ.gif", "182.gif": "AbUxW4.gif", "183.gif": "AbaCO1.gif", "184.gif": "Abapl9.gif", "185.gif": "Aba9yR.gif", "186.gif": "AbaFw6.gif", "187.gif": "Abaiex.gif", "188.gif": "AbakTK.gif", "189.gif": "AbaZfe.png", "190.gif": "AbaEFO.gif", "191.gif": "AbaVYD.gif", "192.gif": "AbamSH.gif", "193.gif": "AbaKOI.gif", "194.gif": "Abanld.gif", "195.gif": "Abau6A.gif", "196.gif": "AbaQmt.gif", "197.gif": "Abal0P.gif", "198.gif": "AbatpQ.gif", "199.gif": "Aba1Tf.gif" } };

  },
  onReady: function onReady() {
    var me = this;
    me.socketTask.onMessage(function (event) {
      console.log("********************", " at pages\\chat\\chat_item\\chat_item.vue:198");
      me.screenMsg(JSON.parse(event.data));
    });
  },
  onLoad: function onLoad(option) {var _this = this;
    var me = this;
    var userinfo = me.getGlobalUser("userInfos");

    this.getMsgList();
    //语音自然播放结束
    this.AUDIO.onEnded(function (res) {
      _this.playMsgid = null;
    });

    //录音开始事件
    this.RECORDER.onStart(function (e) {
      _this.recordBegin(e);
    });
    //录音结束事件
    this.RECORDER.onStop(function (e) {
      _this.recordEnd(e);
    });
    me.socketTask = uni.connectSocket({
      url: 'ws://10.111.210.229:8081/chat/' + me.orderId + '/' + userinfo.userId,
      data: function data() {
        return {};


      },
      method: "POST",
      success: function success(res) {
        console.log(res, " at pages\\chat\\chat_item\\chat_item.vue:229");
        console.log('连接已创建', " at pages\\chat\\chat_item\\chat_item.vue:230");
      },
      fail: function fail(err) {
        uni.showToast({
          title: '网络异常' });

        console.log(err, " at pages\\chat\\chat_item\\chat_item.vue:236");
      } });


    me.socketTask.onOpen(function (e) {
      console.log('连接已打开', " at pages\\chat\\chat_item\\chat_item.vue:241");
    });


  },
  onShow: function onShow() {
    //获取登录用户信息
    var me = this;
    var userinfo = me.getGlobalUser("userInfos");
    me.myuid = userinfo.userId;
    if (userinfo != null) {
      me.userLogined = true;
      me.userInfo = userinfo;
      console.log(me.userInfo, " at pages\\chat\\chat_item\\chat_item.vue:254");
    } else {
      me.userLogined = false;
      me.userInfo = {};
    }



    // socketTask.send({
    // 	data:msg,
    // 	success: (res) => {
    // 		socketTask.send({
    // 			data:me.userInfo.userId
    // 		})
    // 	}
    // });


  },
  methods: {
    //接受消息(筛选处理)
    screenMsg: function screenMsg(msg) {
      // 用户消息
      console.log(msg, " at pages\\chat\\chat_item\\chat_item.vue:277");
      switch (msg.type) {
        case 'text':
          this.addTextMsg(msg);
          break;
        case 'voice':
          this.addVoiceMsg(msg);
          break;
        case 'img':
          this.addImgMsg(msg);
          break;
          console.log('用户消息', " at pages\\chat\\chat_item\\chat_item.vue:288");}

      this.$nextTick(function () {
        // 滚动到底
        console.log("msg" + msg.msgId, " at pages\\chat\\chat_item\\chat_item.vue:292");
        this.scrollToView = 'msg' + msg.msgId;
      });

    },




    //转换图片格式
    // if(type == 'img'){
    // 	uni.connectSocket({
    // 		url:'',
    // 		method:"POST"
    // 	});
    // 	
    // 	uni.onSocketMessage(function (res) {
    // 	  console.log('收到服务器内容：' + res.data);
    // 	});
    // }
    // 

    // function sendSocketMessage(msg_) {
    // 	if (socketOpen) {
    // 		uni.sendSocketMessage({
    // 			data: msg_
    // 		});
    // 	}else{
    // 		socketMsgQueue.push(msg);
    // 	}
    // }


    //触发滑动到顶部(加载历史信息记录)
    loadHistory: function loadHistory(e) {var _this2 = this;
      console.log("localHistory", " at pages\\chat\\chat_item\\chat_item.vue:327");
      var me = this;
      var userinfos = me.getGlobalUser("userInfos");

      if (this.isHistoryLoading) {
        return;
      }
      this.isHistoryLoading = true; //参数作为进入请求标识，防止重复请求
      this.scrollAnimation = false; //关闭滑动动画
      var Viewid = this.msgList[0].msgId; //记住第一个信息ID
      //本地模拟请求历史记录效果

      // var list;
      // var socketTask = uni.connectSocket({
      // 	url:'',
      // 	data:'',
      // 	method:"GET",
      // 	success: (res) => {
      // 		console.log(res);
      // 		list = res.data.data;
      // 	}
      // });

      setTimeout(function () {
        // 消息列表
        var list = []
        // 						{type:"user",msg:{id:1,type:"text",time:"12:56",userinfo:{uid:0,username:userinfos.username,face:userinfos.faceImg},content:{text:"天王盖地虎"}}},
        // 						{type:"user",msg:{id:2,type:"text",time:"12:57",userinfo:{uid:1,username:"会话对象",face:"/static/face/face_2.jpg"},content:{text:"宝塔镇河妖"}}},
        // 						{type:"user",msg:{id:3,type:"voice",time:"12:59",userinfo:{uid:1,username:"会话对象",face:"/static/face/face_2.jpg"},content:{url:"/static/voice/1.mp3",length:"00:06"}}},
        // 						{type:"user",msg:{id:4,type:"voice",time:"13:05",userinfo:{uid:0,username:userinfos.username,face:userinfos.faceImg},content:{url:"/static/voice/2.mp3",length:"00:06"}}},

        // 获取消息中的图片,并处理显示尺寸
        ;for (var i = 0; i < list.length; i++) {
          if (list[i].type == 'user' && list[i].msg.type == "img") {
            list[i].msg.content = _this2.setPicSize(list[i].msg.content);
            _this2.msgImgList.unshift(list[i].msg.content.url);
          }
          list[i].msg.id = Math.floor(Math.random() * 1000 + 1);
          _this2.msgList.unshift(list[i]);
        }

        //这段代码很重要，不然每次加载历史数据都会跳到顶部
        _this2.$nextTick(function () {
          this.scrollToView = 'msg' + Viewid; //跳转上次的第一行信息位置
          this.$nextTick(function () {
            this.scrollAnimation = true; //恢复滚动动画
          });
        });
        _this2.isHistoryLoading = false;

      }, 1000);
    },
    // 加载初始页面消息
    getMsgList: function getMsgList() {
      var me = this;
      console.log("getMsgList", " at pages\\chat\\chat_item\\chat_item.vue:382");
      var userinfos = me.getGlobalUser("userInfos");

      // 消息列表
      var list = [
      { type: "user", msg: { id: 1, type: "text", time: "12:56", userinfo: { uid: 0, username: userinfos.username, face: userinfos.faceImg }, content: { text: "天王盖地虎" } } }];


      // 获取消息中的图片,并处理显示尺寸
      for (var i = 0; i < list.length; i++) {
        if (list[i].type == 'user' && list[i].msg.type == "img") {
          list[i].msg.content = this.setPicSize(list[i].msg.content);
          this.msgImgList.push(list[i].msg.content.url);
        }
      }
      this.msgList = list;
      // 滚动到底部
      this.$nextTick(function () {
        //进入页面滚动到底部
        this.scrollTop = 9999;
        this.$nextTick(function () {
          this.scrollAnimation = true;
        });

      });
    },
    //处理图片尺寸，如果不处理宽高，新进入页面加载图片时候会闪
    setPicSize: function setPicSize(content) {
      console.log("setPicSize", " at pages\\chat\\chat_item\\chat_item.vue:410");
      // 让图片最长边等于设置的最大长度，短边等比例缩小，图片控件真实改变，区别于aspectFit方式。
      var maxW = uni.upx2px(350); //350是定义消息图片最大宽度
      var maxH = uni.upx2px(350); //350是定义消息图片最大高度
      if (content.w > maxW || content.h > maxH) {
        var scale = content.w / content.h;
        content.w = scale > 1 ? maxW : maxH * scale;
        content.h = scale > 1 ? maxW / scale : maxH;
      }
      return content;
    },

    //更多功能(点击+弹出) 
    showMore: function showMore() {
      console.log("showMore", " at pages\\chat\\chat_item\\chat_item.vue:424");
      this.isVoice = false;
      this.hideEmoji = true;
      if (this.hideMore) {
        this.hideMore = false;
        this.openDrawer();
      } else {
        this.hideDrawer();
      }
    },
    // 打开抽屉
    openDrawer: function openDrawer() {
      console.log("openDrawer", " at pages\\chat\\chat_item\\chat_item.vue:436");
      this.popupLayerClass = 'showLayer';
    },
    // 隐藏抽屉
    hideDrawer: function hideDrawer() {var _this3 = this;
      console.log("hideDrawer", " at pages\\chat\\chat_item\\chat_item.vue:441");
      this.popupLayerClass = '';
      setTimeout(function () {
        _this3.hideMore = true;
        _this3.hideEmoji = true;
      }, 150);
    },
    // 选择图片发送
    chooseImage: function chooseImage() {
      console.log("chooseImage", " at pages\\chat\\chat_item\\chat_item.vue:450");
      this.getImage('album');
    },
    //拍照发送
    camera: function camera() {
      console.log("camera", " at pages\\chat\\chat_item\\chat_item.vue:455");
      this.getImage('camera');
    },

    //选照片 or 拍照
    getImage: function getImage(type) {var _this4 = this;
      console.log("getImage", " at pages\\chat\\chat_item\\chat_item.vue:461");
      this.hideDrawer();
      uni.chooseImage({
        sourceType: [type],
        sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
        success: function success(res) {var _loop = function _loop(
          i) {
            uni.getImageInfo({
              src: res.tempFilePaths[i],
              success: function success(image) {
                console.log(image.width, " at pages\\chat\\chat_item\\chat_item.vue:471");
                console.log(image.height, " at pages\\chat\\chat_item\\chat_item.vue:472");
                var msg = { url: res.tempFilePaths[i], w: image.width, h: image.height };
                _this4.sendMsg(msg, 'img');
              } });};for (var i = 0; i < res.tempFilePaths.length; i++) {_loop(i);

          }
        } });

    },
    // 选择表情
    chooseEmoji: function chooseEmoji() {
      console.log("chooseEmoji", " at pages\\chat\\chat_item\\chat_item.vue:483");
      this.hideMore = true;
      if (this.hideEmoji) {
        this.hideEmoji = false;
        this.openDrawer();
      } else {
        this.hideDrawer();
      }
    },
    //添加表情
    addEmoji: function addEmoji(em) {
      console.log("addEmoji", " at pages\\chat\\chat_item\\chat_item.vue:494");
      this.textMsg += em.alt;
    },

    //获取焦点，如果不是选表情ing,则关闭抽屉
    textareaFocus: function textareaFocus() {
      console.log("textareaFocus", " at pages\\chat\\chat_item\\chat_item.vue:500");
      if (this.popupLayerClass == 'showLayer' && this.hideMore == false) {
        this.hideDrawer();
      }
    },
    // 发送文字消息
    sendText: function sendText() {
      console.log("sendText", " at pages\\chat\\chat_item\\chat_item.vue:507");
      this.hideDrawer(); //隐藏抽屉
      if (!this.textMsg) {
        return;
      }

      var msg = { text: this.textMsg };
      console.log(msg, " at pages\\chat\\chat_item\\chat_item.vue:514");
      var content = this.replaceEmoji(msg.text);
      this.sendMsg(content, 'text');
      this.textMsg = ''; //清空输入框
    },
    //替换表情符号为图片
    replaceEmoji: function replaceEmoji(str) {var _this5 = this;
      console.log("replaceEmoji", " at pages\\chat\\chat_item\\chat_item.vue:521");
      var replacedStr = str.replace(/\[([^(\]|\[)]*)\]/g, function (item, index) {
        console.log("item: " + item, " at pages\\chat\\chat_item\\chat_item.vue:523");
        for (var i = 0; i < _this5.emojiList.length; i++) {
          var row = _this5.emojiList[i];
          for (var j = 0; j < row.length; j++) {
            var EM = row[j];
            if (EM.alt == item) {
              //在线表情路径，图文混排必须使用网络路径，请上传一份表情到你的服务器后再替换此路径 
              //比如你上传服务器后，你的100.gif路径为https://www.xxx.com/emoji/100.gif 则替换onlinePath填写为https://www.xxx.com/emoji/
              var onlinePath = 'https://s2.ax1x.com/2019/04/12/';
              var imgstr = '<img src="' + onlinePath + _this5.onlineEmoji[EM.url] + '">';
              console.log("imgstr: " + imgstr, " at pages\\chat\\chat_item\\chat_item.vue:533");
              return imgstr;
            }
          }
        }
      });
      return replacedStr;
      // return '<div style="display: flex;align-items: center;word-wrap:break-word;">'+replacedStr+'</div>';
    },

    // 发送消息
    sendMsg: function sendMsg(content, type) {
      console.log("sendMsg", " at pages\\chat\\chat_item\\chat_item.vue:545");
      var me = this;
      var userinfos = me.getGlobalUser("userInfos");
      console.log(userinfos, " at pages\\chat\\chat_item\\chat_item.vue:548");
      //实际应用中，此处应该提交长连接，模板仅做本地处理。
      var nowDate = new Date();
      var lastid = this.msgList[this.msgList.length - 1].msgId;
      lastid++;

      var message = { msgId: Math.floor(Math.random() * 10000 + 1), userId: userinfos.userId, username: userinfos.nickName, face: userinfos.avatarUrl, time: nowDate.getHours() + ":" + nowDate.getMinutes(), type: type, msg: content };
      // 发送消息
      var msg = JSON.stringify(message);
      me.socketTask.send({
        data: msg,
        type: "text",
        success: function success(res) {
          console.log(res, " at pages\\chat\\chat_item\\chat_item.vue:561");
          console.log('消息已发送', " at pages\\chat\\chat_item\\chat_item.vue:562");

        } });

      // this.screenMsg(message);

      // 定时器模拟对方回复,两秒
      // 				setTimeout(()=>{
      // 					lastid = this.msgList[this.msgList.length-1].msg.id;
      // 					lastid++;
      // 					msg = {type:'user',msg:{id:lastid,time:nowDate.getHours()+":"+nowDate.getMinutes(),type:type,userinfo:{uid:1,username:"会话对象",face:"/static/face/face_2.jpg"},content:content}}
      // 					// 本地模拟发送消息
      // 					this.screenMsg(msg);
      // 				},2000)
    },

    // 添加文字消息到列表
    addTextMsg: function addTextMsg(msg) {
      msg.msg = '<div style="display: flex;align-items: center;word-wrap:break-word;">' + msg.msg + '</div>';
      this.msgList.push(msg);
    },
    // 添加语音消息到列表
    addVoiceMsg: function addVoiceMsg(msg) {
      this.msgList.push(msg);
    },
    // 添加图片消息到列表
    addImgMsg: function addImgMsg(msg) {
      msg.msg.content = this.setPicSize(msg.msg.content);
      this.msgImgList.push(msg.msg.content.url);
      this.msgList.push(msg);
    },
    // 添加系统文字消息到列表
    addSystemTextMsg: function addSystemTextMsg(msg) {
      this.msgList.push(msg);
    },
    // 预览图片
    showPic: function showPic(msg) {
      uni.previewImage({
        indicator: "none",
        current: msg.content.url,
        urls: this.msgImgList });

    },
    // 播放语音
    playVoice: function playVoice(msg) {
      this.playMsgid = msg.id;
      this.AUDIO.src = msg.content.url;
      this.$nextTick(function () {
        this.AUDIO.play();
      });
    },
    // 录音开始
    voiceBegin: function voiceBegin(e) {
      if (e.touches.length > 1) {
        return;
      }
      this.initPoint.Y = e.touches[0].clientY;
      this.initPoint.identifier = e.touches[0].identifier;
      this.RECORDER.start({ format: "mp3" }); //录音开始,
    },
    //录音开始UI效果
    recordBegin: function recordBegin(e) {var _this6 = this;
      this.recording = true;
      this.voiceTis = '松开 结束';
      this.recordLength = 0;
      this.recordTimer = setInterval(function () {
        _this6.recordLength++;
      }, 1000);
    },
    // 录音被打断
    voiceCancel: function voiceCancel() {
      this.recording = false;
      this.voiceTis = '按住 说话';
      this.recordTis = '手指上滑 取消发送';
      this.willStop = true; //不发送录音
      this.RECORDER.stop(); //录音结束
    },
    // 录音中(判断是否触发上滑取消发送)
    voiceIng: function voiceIng(e) {
      if (!this.recording) {
        return;
      }
      var touche = e.touches[0];
      //上滑一个导航栏的高度触发上滑取消发送
      if (this.initPoint.Y - touche.clientY >= uni.upx2px(100)) {
        this.willStop = true;
        this.recordTis = '松开手指 取消发送';
      } else {
        this.willStop = false;
        this.recordTis = '手指上滑 取消发送';
      }
    },
    // 结束录音
    voiceEnd: function voiceEnd(e) {
      if (!this.recording) {
        return;
      }
      this.recording = false;
      this.voiceTis = '按住 说话';
      this.recordTis = '手指上滑 取消发送';
      this.RECORDER.stop(); //录音结束
    },
    //录音结束(回调文件)
    recordEnd: function recordEnd(e) {
      clearInterval(this.recordTimer);
      if (!this.willStop) {
        console.log("e: " + JSON.stringify(e), " at pages\\chat\\chat_item\\chat_item.vue:668");
        var msg = {
          length: 0,
          url: e.tempFilePath };

        var min = parseInt(this.recordLength / 60);
        var sec = this.recordLength % 60;
        min = min < 10 ? '0' + min : min;
        sec = sec < 10 ? '0' + sec : sec;
        msg.length = min + ':' + sec;
        this.sendMsg(msg, 'voice');
      } else {
        console.log('取消发送录音', " at pages\\chat\\chat_item\\chat_item.vue:680");
      }
      this.willStop = false;
    },
    // 切换语音/文字输入
    switchVoice: function switchVoice() {
      this.hideDrawer();
      this.isVoice = this.isVoice ? false : true;
    },
    discard: function discard() {
      return;
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-app-plus/dist/index.js */ "./node_modules/@dcloudio/uni-app-plus/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!../../../网约车/pages/chat/chat_item/chat_item.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/vue-loader/lib??vue-loader-options!D:/网约车/pages/chat/chat_item/chat_item.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../网约车/pages/chat/chat_item/chat_item.vue?vue&type=template&id=5e6e9436&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!D:/网约车/pages/chat/chat_item/chat_item.vue?vue&type=template&id=5e6e9436& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ })

},[["../../../网约车/main.js?{\"page\":\"pages%2Fchat%2Fchat_item%2Fchat_item\"}","common/runtime","common/vendor"]]]);