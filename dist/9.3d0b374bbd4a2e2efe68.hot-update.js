webpackHotUpdate(9,{

/***/ 369:
/* exports provided: default */
/* all exports used */
/*!*****************************************************************************************************************************************************!*\
  !*** ./~/_babel-loader@6.4.1@babel-loader/lib!./~/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=script&index=0!./src/views/banner/imglist.vue ***!
  \*****************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(/*! vuex */ 10);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'shopsave',\n  data: function data() {\n    return {\n      tableData: []\n    };\n  },\n  mounted: function mounted() {\n    this.init();\n  },\n\n  methods: {\n    init: function init() {\n      this.getImgList();\n    },\n    getImgList: function getImgList() {\n      var _this = this;\n\n      this.$http.get('getimglist?p=1').then(function (res) {\n        if (res.status) {\n          console.log(res.data);\n          _this.tableData = res.data;\n          console.log(_this.tableData);\n        }\n      });\n    }\n  }\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzY5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2ltZ2xpc3QudnVlP2E1ZTkiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZWwtdGFibGVcbiAgICA6ZGF0YT1cInRhYmxlRGF0YVwiXG4gICAgc3R5bGU9XCJ3aWR0aDogMTAwJVwiPlxuICAgIDxlbC10YWJsZS1jb2x1bW5cbiAgICAgIHByb3A9XCJpZFwiXG4gICAgICBsYWJlbD1cImlkXCJcbiAgICAgIHdpZHRoPVwiMTgwXCI+XG4gICAgPC9lbC10YWJsZS1jb2x1bW4+XG4gICAgPGVsLXRhYmxlLWNvbHVtblxuICAgICAgcHJvcD1cImZyb21cIlxuICAgICAgbGFiZWw9XCLlp5PlkI1cIlxuICAgICAgd2lkdGg9XCIxODBcIj5cbiAgICA8L2VsLXRhYmxlLWNvbHVtbj5cbiAgICA8ZWwtdGFibGUtY29sdW1uXG4gICAgICBwcm9wPVwidGltZVwiXG4gICAgICBsYWJlbD1cIuaXtumXtFwiPlxuICAgIDwvZWwtdGFibGUtY29sdW1uPlxuICAgIDxlbC10YWJsZS1jb2x1bW5cbiAgICAgIHByb3A9XCJ1cmxcIlxuICAgICAgbGFiZWw9XCLlnLDlnYBcIj5cbiAgICA8L2VsLXRhYmxlLWNvbHVtbj5cbiAgPC9lbC10YWJsZT5cbjwvdGVtcGxhdGU+XG48c3R5bGUgc2NvcGVkPlxuICAuZWwtcmF0ZXtcbiAgICBsaW5lLWhlaWdodDogMjtcbiAgfVxuICAuZWwtZm9ybS1pdGVte1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAudGV4dHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTI5cHg7XG4gICAgdG9wOiAxcHg7XG4gICAgY29sb3I6ICM5OTk7XG4gIH1cbjwvc3R5bGU+XG48c2NyaXB0PlxuICBpbXBvcnQge21hcFN0YXRlfSBmcm9tICd2dWV4J1xuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ3Nob3BzYXZlJyxcbiAgICBkYXRhKCl7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0YWJsZURhdGE6IFtdXG4gICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkKCl7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgaW5pdCgpe1xuICAgICAgICAgICAgdGhpcy5nZXRJbWdMaXN0KClcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0SW1nTGlzdCgpe1xuICAgICAgICAgICAgIHRoaXMuJGh0dHAuZ2V0KCdnZXRpbWdsaXN0P3A9MScpLnRoZW4ocmVzPT57XG4gICAgICAgICAgICAgICBpZihyZXMuc3RhdHVzKXtcbiAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXG4gICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlRGF0YT1yZXMuZGF0YTtcbiAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy50YWJsZURhdGEpXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gaW1nbGlzdC52dWU/NTNjYmQ3MWMiXSwibWFwcGluZ3MiOiI7Ozs7QUF1Q0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFWQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})