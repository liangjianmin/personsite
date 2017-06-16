webpackHotUpdate(16,{

/***/ 379:
/* exports provided: default */
/* all exports used */
/*!*************************************************************************************************************************************************!*\
  !*** ./~/_babel-loader@6.4.1@babel-loader/lib!./~/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=script&index=0!./src/views/user/Login.vue ***!
  \*************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(/*! vuex */ 9);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    name: 'login',\n    data: function data() {\n        return {\n            ruleForm: {\n                name: '',\n                pass: ''\n            },\n            rules: {\n                name: [{ required: true, message: '请输入用户名', trigger: 'change' }, { min: 2, max: 9, message: '用户长度在 3 到 9 个字符', trigger: 'change' }],\n                pass: [{ required: true, message: '请输入密码', trigger: 'change' }]\n            }\n        };\n    },\n\n    mounted: function mounted() {\n        this.init();\n    },\n    methods: {\n        init: function init() {\n            this.readpass;\n        },\n        submitForm: function submitForm(formName) {\n            var _this = this;\n\n            var self = this;\n            this.$http.post('login', {\n                username: this.ruleForm.name,\n                password: this.ruleForm.pass\n            }).then(function (res) {\n                if (res.data.status) {\n                    self.$store.dispatch({\n                        type: 'getsession'\n                    });\n                    document.cookie = \"name=\" + _this.ruleForm.name;\n                    document.cookie = \"pass=\" + _this.ruleForm.pass;\n                    _this.$message({\n                        type: 'success',\n                        message: '登录成功',\n                        duration: 1000,\n                        showClose: true,\n                        onClose: function onClose() {\n                            self.$router.push({ path: '/home' });\n                        }\n                    });\n                } else {\n                    _this.$message({\n                        type: 'error',\n                        message: '用户名或者密码错误',\n                        duration: 1000,\n                        showClose: true\n                    });\n                }\n            }, function (error) {\n                console.log('请启动node server');\n            });\n        },\n\n        savepass: function savepass(name, pass) {},\n        readpass: function readpass() {\n            var username = name.getCookies();\n\n            console.log(username);\n        },\n        resetForm: function resetForm(formName) {\n            this.$refs[formName].resetFields();\n        }\n    }\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzc5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL0xvZ2luLnZ1ZT9jYjU2Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZWwtY29sIDpzcGFuPVwiMjRcIiB0eXBlPVwiZmxleFwiIGNsYXNzPVwicm93LWJnXCIganVzdGlmeT1cImJldHdlZW5cIj5cbiAgICAgICAgPGVsLWZvcm0gOm1vZGVsPVwicnVsZUZvcm1cIiA6cnVsZXM9XCJydWxlc1wiIHJlZj1cInJ1bGVGb3JtXCIgbGFiZWwtd2lkdGg9XCIxMDBweFwiIGNsYXNzPVwiZGVtby1ydWxlRm9ybVwiPlxuICAgICAgICAgICAgPGVsLWZvcm0taXRlbSBsYWJlbD1cIueUqOaIt+WQjVwiIHByb3A9XCJuYW1lXCI+XG4gICAgICAgICAgICAgICAgPGVsLWlucHV0IHYtbW9kZWw9XCJydWxlRm9ybS5uYW1lXCIgcGxhY2Vob2xkZXI9XCLor7floavlhpnnlKjmiLflkI1cIiB0eXBlPVwidGV4dFwiPjwvZWwtaW5wdXQ+XG4gICAgICAgICAgICA8L2VsLWZvcm0taXRlbT5cbiAgICAgICAgICAgIDxlbC1mb3JtLWl0ZW0gbGFiZWw9XCLlr4bnoIFcIiBwcm9wPVwicGFzc1wiPlxuICAgICAgICAgICAgICAgIDxlbC1pbnB1dCB2LW1vZGVsPVwicnVsZUZvcm0ucGFzc1wiIHBsYWNlaG9sZGVyPVwi6K+35aGr5YaZ5a+G56CBXCIgdHlwZT1cInBhc3N3b3JkXCI+PC9lbC1pbnB1dD5cbiAgICAgICAgICAgIDwvZWwtZm9ybS1pdGVtPlxuICAgICAgICAgICAgPGVsLWZvcm0taXRlbT5cbiAgICAgICAgICAgICAgICA8ZWwtYnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgQGNsaWNrPVwic3VibWl0Rm9ybSgncnVsZUZvcm0nKVwiPuehruWumjwvZWwtYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxlbC1idXR0b24gQGNsaWNrPVwicmVzZXRGb3JtKCdydWxlRm9ybScpXCI+6YeN572uPC9lbC1idXR0b24+XG4gICAgICAgICAgICA8L2VsLWZvcm0taXRlbT5cbiAgICAgICAgPC9lbC1mb3JtPlxuICAgIDwvZWwtY29sPlxuPC90ZW1wbGF0ZT5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+XG48c2NyaXB0PlxuICAgIGltcG9ydCB7bWFwU3RhdGV9IGZyb20gJ3Z1ZXgnXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiAnbG9naW4nLFxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBydWxlRm9ybToge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgcGFzczogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJ1bGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ+ivt+i+k+WFpeeUqOaIt+WQjScsIHRyaWdnZXI6ICdjaGFuZ2UnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHttaW46IDIsIG1heDogOSwgbWVzc2FnZTogJ+eUqOaIt+mVv+W6puWcqCAzIOWIsCA5IOS4quWtl+espicsIHRyaWdnZXI6ICdjaGFuZ2UnfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBwYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7cmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICfor7fovpPlhaXlr4bnoIEnLCB0cmlnZ2VyOiAnY2hhbmdlJ31cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZDpmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhpcy5pbml0KClcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgaW5pdDpmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkcGFzc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Ym1pdEZvcm0oZm9ybU5hbWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy4kaHR0cC5wb3N0KCdsb2dpbicsIHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMucnVsZUZvcm0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucnVsZUZvcm0ucGFzcyxcbiAgICAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZ2V0c2Vzc2lvbidcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZT1cIm5hbWU9XCIrdGhpcy5ydWxlRm9ybS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZT1cInBhc3M9XCIrdGhpcy5ydWxlRm9ybS5wYXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kbWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfnmbvlvZXmiJDlip8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDbG9zZTp0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kcm91dGVyLnB1c2goe3BhdGg6ICcvaG9tZSd9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJG1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+eUqOaIt+WQjeaIluiAheWvhueggemUmeivrycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0Nsb3NlOnRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn6K+35ZCv5Yqobm9kZSBzZXJ2ZXInKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNhdmVwYXNzOmZ1bmN0aW9uIChuYW1lLHBhc3MpIHtcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlYWRwYXNzOmZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgdmFyIHVzZXJuYW1lPW5hbWUuZ2V0Q29va2llcygpO1xuICAgICAgICAgICAgIC8vIHZhciB1c2VybmFtZT1kb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpWzBdLnNwbGl0KFwiPVwiKVsxXTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2codXNlcm5hbWUpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzZXRGb3JtKGZvcm1OYW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmc1tmb3JtTmFtZV0ucmVzZXRGaWVsZHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIExvZ2luLnZ1ZT8yYmI5MjU3MiJdLCJtYXBwaW5ncyI6Ijs7OztBQW9CQTtBQUNBO0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUZBOztBQUtBO0FBSUE7QUFMQTtBQUxBO0FBZUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUFBOztBQUVBO0FBQ0E7QUFGQTtBQUlBOztBQUVBO0FBREE7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBL0NBO0FBdEJBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})