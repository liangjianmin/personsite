webpackHotUpdate(12,{

/***/ 701:
/* no static exports found */
/* exports used: default */
/*!*************************************!*\
  !*** ./src/store/modules/banner.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(/*! vue */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(/*! axios */ 17);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);\n\n\n\n\nvar state = {\n  bannerlist: {}\n};\n\nvar mutations = {\n  banner: function banner(state, _banner) {\n    state.bannerlist = _banner.res;\n  }\n};\nvar actions = {\n  banner: function banner(_ref, _banner2) {\n    var commit = _ref.commit;\n\n    __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/bannerlist').then(function (res) {\n      commit({});\n    });\n  }\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzAxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9tb2R1bGVzL2Jhbm5lci5qcz9hMDIxIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBnYW4gb24gMjAxNy82LzUuXG4gKi9cbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5jb25zdCBzdGF0ZT17XG4gIGJhbm5lcmxpc3Q6e31cbn1cblxuY29uc3QgbXV0YXRpb25zID17XG4gIC8qXG4gICog6I635Y+WYmFubmVy5Zu+XG4gICogKi9cbiAgYmFubmVyKHN0YXRlLGJhbm5lcil7XG4gICAgc3RhdGUuYmFubmVybGlzdD1iYW5uZXIucmVzXG4gIH1cbn1cbmNvbnN0IGFjdGlvbnMgPXtcbiAgYmFubmVyKHtjb21taXR9LGJhbm5lcil7XG4gICAgYXhpb3MuZ2V0KCcvYmFubmVybGlzdCcpLnRoZW4ocmVzPT57XG4gICAgICBjb21taXQoe1xuICAgICAgICBcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9zdG9yZS9tb2R1bGVzL2Jhbm5lci5qcyJdLCJtYXBwaW5ncyI6Ijs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFJQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFQQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})