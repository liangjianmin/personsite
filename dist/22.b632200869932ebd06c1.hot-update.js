webpackHotUpdate(22,{

/***/ 371:
/* exports provided: default */
/* all exports used */
/*!*****************************************************************************************************************************************************!*\
  !*** ./~/_babel-loader@6.4.1@babel-loader/lib!./~/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=script&index=0!./src/views/banner/Piclist.vue ***!
  \*****************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(/*! vuex */ 9);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'shopsave',\n  data: function data() {\n    return {\n      tableData: []\n    };\n  },\n  mounted: function mounted() {\n    this.init();\n  },\n\n  methods: {\n    init: function init() {\n      this.getImgList();\n    },\n    getImgList: function getImgList() {\n      var _this = this;\n\n      this.$http.get('bannerlist').then(function (res) {\n        if (res.status) {\n          _this.tableData = res.data.data;\n        }\n      });\n    },\n    handleDelete: function handleDelete(index, row) {\n      console.log(row.id);\n      this.$http.post({});\n      this.$http.post('removebanner?id=' + row.id + '', function (data) {\n        if (res.status) {\n          this.$message({\n            type: 'success',\n            message: '删除成功',\n            duration: 1000,\n            showClose: true,\n            onClose: function onClose() {\n              self.$router.push({ path: '/bannerlist' });\n            }\n          });\n        }\n      });\n    }\n  }\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzcxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL1BpY2xpc3QudnVlP2Y5NTMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZWwtdGFibGVcbiAgICA6ZGF0YT1cInRhYmxlRGF0YVwiXG4gICAgc3R5bGU9XCJ3aWR0aDogMTAwJVwiPlxuICAgIDxlbC10YWJsZS1jb2x1bW5cbiAgICAgIHByb3A9XCJpZFwiXG4gICAgICBsYWJlbD1cImlkXCJcbiAgICAgIHdpZHRoPVwiMTgwXCI+XG4gICAgPC9lbC10YWJsZS1jb2x1bW4+XG4gICAgPGVsLXRhYmxlLWNvbHVtblxuICAgICAgcHJvcD1cImZyb21cIlxuICAgICAgbGFiZWw9XCLlp5PlkI1cIlxuICAgICAgd2lkdGg9XCIxODBcIj5cbiAgICA8L2VsLXRhYmxlLWNvbHVtbj5cbiAgICA8ZWwtdGFibGUtY29sdW1uXG4gICAgICBwcm9wPVwidGltZVwiXG4gICAgICBsYWJlbD1cIuaXtumXtFwiPlxuICAgIDwvZWwtdGFibGUtY29sdW1uPlxuICAgIDxlbC10YWJsZS1jb2x1bW5cbiAgICAgIHByb3A9XCJ1cmxcIlxuICAgICAgbGFiZWw9XCLlnLDlnYBcIj5cbiAgICA8L2VsLXRhYmxlLWNvbHVtbj5cbiAgICA8ZWwtdGFibGUtY29sdW1uXG4gICAgICBsYWJlbD1cIuWIoOmZpFwiIGFsaWduPVwiY2VudGVyXCIgPlxuICAgICAgPHRlbXBsYXRlIHNjb3BlPVwic2NvcGVcIj5cbiAgICAgICAgPGVsLWJ1dHRvblxuICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgdHlwZT1cImRhbmdlclwiXG4gICAgICAgICAgQGNsaWNrPVwiaGFuZGxlRGVsZXRlKHNjb3BlLiRpbmRleCwgc2NvcGUucm93KVwiPuWIoOmZpDwvZWwtYnV0dG9uPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L2VsLXRhYmxlLWNvbHVtbj5cbiAgPC9lbC10YWJsZT5cbjwvdGVtcGxhdGU+XG48c3R5bGUgc2NvcGVkPlxuLmNlbnRlcnt0ZXh0LWFsaWduOmNlbnRlcjt9XG48L3N0eWxlPlxuPHNjcmlwdD5cbiAgaW1wb3J0IHttYXBTdGF0ZX0gZnJvbSAndnVleCdcbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdzaG9wc2F2ZScsXG4gICAgZGF0YSgpe1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGFibGVEYXRhOiBbXVxuICAgICAgfVxuICAgIH0sXG4gICAgbW91bnRlZCgpe1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGluaXQoKXtcbiAgICAgICAgICAgIHRoaXMuZ2V0SW1nTGlzdCgpXG4gICAgICAgIH0sXG4gICAgICAgIGdldEltZ0xpc3QoKXtcbiAgICAgICAgICAgICB0aGlzLiRodHRwLmdldCgnYmFubmVybGlzdCcpLnRoZW4ocmVzPT57XG4gICAgICAgICAgICAgICBpZihyZXMuc3RhdHVzKXtcbiAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVEYXRhPXJlcy5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgaGFuZGxlRGVsZXRlKGluZGV4LHJvdyl7XG4gICAgICAgICAgY29uc29sZS5sb2cocm93LmlkKTtcbiAgICAgICAgICB0aGlzLiRodHRwLnBvc3Qoe1xuICAgICAgICAgICAgXG4gICAgICAgICAgfSlcbiAgICAgICAgICB0aGlzLiRodHRwLnBvc3QoJ3JlbW92ZWJhbm5lcj9pZD0nK3Jvdy5pZCsnJyxmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgaWYocmVzLnN0YXR1cyl7XG4gICAgICAgICAgICAgIHRoaXMuJG1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAn5Yig6Zmk5oiQ5YqfJyxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgICAgICAgICAgICBzaG93Q2xvc2U6dHJ1ZSxcbiAgICAgICAgICAgICAgICBvbkNsb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICBzZWxmLiRyb3V0ZXIucHVzaCh7cGF0aDogJy9iYW5uZXJsaXN0J30pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBQaWNsaXN0LnZ1ZT80MmEyN2E2YiJdLCJtYXBwaW5ncyI6Ijs7OztBQXFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBRUE7QUFDQTtBQTlCQTtBQVZBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})