webpackHotUpdate(9,{

/***/ 369:
/* exports provided: default */
/* all exports used */
/*!*****************************************************************************************************************************************************!*\
  !*** ./~/_babel-loader@6.4.1@babel-loader/lib!./~/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=script&index=0!./src/views/banner/Piclist.vue ***!
  \*****************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(/*! vuex */ 10);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'shopsave',\n  data: function data() {\n    return {\n      tableData: []\n    };\n  },\n  mounted: function mounted() {\n    this.init();\n  },\n\n  methods: {\n    init: function init() {\n      this.getImgList();\n    },\n    getImgList: function getImgList() {\n      var _this = this;\n\n      this.$http.get('bannerlist?p=1').then(function (res) {\n        if (res.status) {\n          _this.tableData = res.data.data;\n        }\n      });\n    }\n  }\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzY5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL1BpY2xpc3QudnVlP2I0MzciXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZWwtdGFibGVcbiAgICA6ZGF0YT1cInRhYmxlRGF0YVwiXG4gICAgc3R5bGU9XCJ3aWR0aDogMTAwJVwiPlxuICAgIDxlbC10YWJsZS1jb2x1bW5cbiAgICAgIHByb3A9XCJpZFwiXG4gICAgICBsYWJlbD1cImlkXCJcbiAgICAgIHdpZHRoPVwiMTgwXCI+XG4gICAgPC9lbC10YWJsZS1jb2x1bW4+XG4gICAgPGVsLXRhYmxlLWNvbHVtblxuICAgICAgcHJvcD1cImZyb21cIlxuICAgICAgbGFiZWw9XCLlp5PlkI1cIlxuICAgICAgd2lkdGg9XCIxODBcIj5cbiAgICA8L2VsLXRhYmxlLWNvbHVtbj5cbiAgICA8ZWwtdGFibGUtY29sdW1uXG4gICAgICBwcm9wPVwidGltZVwiXG4gICAgICBsYWJlbD1cIuaXtumXtFwiPlxuICAgIDwvZWwtdGFibGUtY29sdW1uPlxuICAgIDxlbC10YWJsZS1jb2x1bW5cbiAgICAgIHByb3A9XCJ1cmxcIlxuICAgICAgbGFiZWw9XCLlnLDlnYBcIj5cbiAgICA8L2VsLXRhYmxlLWNvbHVtbj5cbiAgPC9lbC10YWJsZT5cbjwvdGVtcGxhdGU+XG48c3R5bGUgc2NvcGVkPlxuPC9zdHlsZT5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7bWFwU3RhdGV9IGZyb20gJ3Z1ZXgnXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnc2hvcHNhdmUnLFxuICAgIGRhdGEoKXtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRhYmxlRGF0YTogW11cbiAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQoKXtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBpbml0KCl7XG4gICAgICAgICAgICB0aGlzLmdldEltZ0xpc3QoKVxuICAgICAgICB9LFxuICAgICAgICBnZXRJbWdMaXN0KCl7XG4gICAgICAgICAgICAgdGhpcy4kaHR0cC5nZXQoJ2Jhbm5lcmxpc3Q/cD0xJykudGhlbihyZXM9PntcbiAgICAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMpe1xuICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZURhdGE9cmVzLmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBQaWNsaXN0LnZ1ZT83ZjU5NTIzZSJdLCJtYXBwaW5ncyI6Ijs7OztBQTJCQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBVkEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})