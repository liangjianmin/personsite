webpackHotUpdate(16,{

/***/ 379:
/* exports provided: default */
/* all exports used */
/*!*************************************************************************************************************************************************!*\
  !*** ./~/_babel-loader@6.4.1@babel-loader/lib!./~/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=script&index=0!./src/views/user/Login.vue ***!
  \*************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(/*! vuex */ 9);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    name: 'login',\n    data: function data() {\n        return {\n            ruleForm: {\n                name: '',\n                pass: ''\n            },\n            rules: {\n                name: [{ required: true, message: '请输入用户名', trigger: 'change' }, { min: 2, max: 9, message: '用户长度在 3 到 9 个字符', trigger: 'change' }],\n                pass: [{ required: true, message: '请输入密码', trigger: 'change' }]\n            }\n        };\n    },\n\n    mounted: function mounted() {\n        this.init();\n    },\n    methods: {\n        init: function init() {\n            console.log(this.$store.state);\n        },\n        submitForm: function submitForm(formName) {\n            var _this = this;\n\n            var self = this;\n            this.$http.post('login', {\n                username: this.ruleForm.name,\n                password: this.ruleForm.pass\n            }).then(function (res) {\n                if (res.data.status) {\n                    self.$store.dispatch({\n                        type: 'getsession'\n                    });\n                    _this.$message({\n                        type: 'success',\n                        message: '登录成功',\n                        duration: 1000,\n                        showClose: true,\n                        onClose: function onClose() {\n                            self.$router.push({ path: '/home' });\n                        }\n                    });\n                } else {\n                    _this.$message({\n                        type: 'error',\n                        message: '用户名或者密码错误',\n                        duration: 1000,\n                        showClose: true\n                    });\n                }\n            }, function (error) {\n                console.log('请启动node server');\n            });\n        },\n\n        savepass: function savepass(name, pass) {},\n        readpass: function readpass() {},\n        resetForm: function resetForm(formName) {\n            this.$refs[formName].resetFields();\n        }\n    }\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzc5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL0xvZ2luLnZ1ZT9lYjJlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZWwtY29sIDpzcGFuPVwiMjRcIiB0eXBlPVwiZmxleFwiIGNsYXNzPVwicm93LWJnXCIganVzdGlmeT1cImJldHdlZW5cIj5cbiAgICAgICAgPGVsLWZvcm0gOm1vZGVsPVwicnVsZUZvcm1cIiA6cnVsZXM9XCJydWxlc1wiIHJlZj1cInJ1bGVGb3JtXCIgbGFiZWwtd2lkdGg9XCIxMDBweFwiIGNsYXNzPVwiZGVtby1ydWxlRm9ybVwiPlxuICAgICAgICAgICAgPGVsLWZvcm0taXRlbSBsYWJlbD1cIueUqOaIt+WQjVwiIHByb3A9XCJuYW1lXCI+XG4gICAgICAgICAgICAgICAgPGVsLWlucHV0IHYtbW9kZWw9XCJydWxlRm9ybS5uYW1lXCIgcGxhY2Vob2xkZXI9XCLor7floavlhpnnlKjmiLflkI1cIiB0eXBlPVwidGV4dFwiPjwvZWwtaW5wdXQ+XG4gICAgICAgICAgICA8L2VsLWZvcm0taXRlbT5cbiAgICAgICAgICAgIDxlbC1mb3JtLWl0ZW0gbGFiZWw9XCLlr4bnoIFcIiBwcm9wPVwicGFzc1wiPlxuICAgICAgICAgICAgICAgIDxlbC1pbnB1dCB2LW1vZGVsPVwicnVsZUZvcm0ucGFzc1wiIHBsYWNlaG9sZGVyPVwi6K+35aGr5YaZ5a+G56CBXCIgdHlwZT1cInBhc3N3b3JkXCI+PC9lbC1pbnB1dD5cbiAgICAgICAgICAgIDwvZWwtZm9ybS1pdGVtPlxuICAgICAgICAgICAgPGVsLWZvcm0taXRlbT5cbiAgICAgICAgICAgICAgICA8ZWwtYnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgQGNsaWNrPVwic3VibWl0Rm9ybSgncnVsZUZvcm0nKVwiPuehruWumjwvZWwtYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxlbC1idXR0b24gQGNsaWNrPVwicmVzZXRGb3JtKCdydWxlRm9ybScpXCI+6YeN572uPC9lbC1idXR0b24+XG4gICAgICAgICAgICA8L2VsLWZvcm0taXRlbT5cbiAgICAgICAgPC9lbC1mb3JtPlxuICAgIDwvZWwtY29sPlxuPC90ZW1wbGF0ZT5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+XG48c2NyaXB0PlxuICAgIGltcG9ydCB7bWFwU3RhdGV9IGZyb20gJ3Z1ZXgnXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiAnbG9naW4nLFxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBydWxlRm9ybToge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgcGFzczogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJ1bGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ+ivt+i+k+WFpeeUqOaIt+WQjScsIHRyaWdnZXI6ICdjaGFuZ2UnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHttaW46IDIsIG1heDogOSwgbWVzc2FnZTogJ+eUqOaIt+mVv+W6puWcqCAzIOWIsCA5IOS4quWtl+espicsIHRyaWdnZXI6ICdjaGFuZ2UnfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBwYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7cmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICfor7fovpPlhaXlr4bnoIEnLCB0cmlnZ2VyOiAnY2hhbmdlJ31cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZDpmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhpcy5pbml0KClcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgaW5pdDpmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy4kc3RvcmUuc3RhdGUpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VibWl0Rm9ybShmb3JtTmFtZSkge1xuICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLiRodHRwLnBvc3QoJ2xvZ2luJywge1xuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogdGhpcy5ydWxlRm9ybS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogdGhpcy5ydWxlRm9ybS5wYXNzLFxuICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdnZXRzZXNzaW9uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRtZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+eZu+W9leaIkOWKnycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0Nsb3NlOnRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRyb3V0ZXIucHVzaCh7cGF0aDogJy9ob21lJ30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kbWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn55So5oi35ZCN5oiW6ICF5a+G56CB6ZSZ6K+vJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2xvc2U6dHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfor7flkK/liqhub2RlIHNlcnZlcicpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2F2ZXBhc3M6ZnVuY3Rpb24gKG5hbWUscGFzcykge1xuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVhZHBhc3M6ZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzZXRGb3JtKGZvcm1OYW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmc1tmb3JtTmFtZV0ucmVzZXRGaWVsZHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIExvZ2luLnZ1ZT8yZjVmZDZkZiJdLCJtYXBwaW5ncyI6Ijs7OztBQW9CQTtBQUNBO0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUZBOztBQUtBO0FBSUE7QUFMQTtBQUxBO0FBZUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUFBOztBQUVBO0FBQ0E7QUFGQTtBQUlBOztBQUVBO0FBREE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBM0NBO0FBdEJBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})