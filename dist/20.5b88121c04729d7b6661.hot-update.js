webpackHotUpdate(20,{

/***/ 682:
/* exports provided: default */
/* all exports used */
/*!****************************************************************************************************************************************************!*\
  !*** ./~/_babel-loader@6.4.1@babel-loader/lib!./~/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=script&index=0!./src/views/banner/addimg.vue ***!
  \****************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(/*! vuex */ 10);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'banneradd',\n  data: function data() {\n    return {\n      uploadFlag: false,\n      dialogImageUrl: '',\n      dialogVisible: false,\n      ruleForm: {\n        imgid: 0\n      }\n    };\n  },\n\n  computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__[\"b\" /* mapState */])({\n    user: function user(state) {\n      return state.user.sessiondata;\n    }\n  }),\n  mounted: function mounted() {},\n\n  methods: {\n    submitForm: function submitForm(formName) {\n      var _this = this;\n\n      var self = this;\n      this.$refs[formName].validate(function (valid) {\n        if (valid) {\n          if (_this.$store.state.user.sessiondata != '') {\n            if (_this.ruleForm.imgid == 0) {\n              _this.$message({\n                type: 'error',\n                message: '请至少上传一张图片',\n                duration: 1000\n              });\n            } else {\n              _this.$http.post('shopsave', {\n                imgid: _this.ruleForm.imgid\n              }).then(function (res) {\n                if (res.data.status) {\n                  _this.$message({\n                    type: 'success',\n                    message: '商品添加成功',\n                    duration: 1000,\n                    onClose: function onClose() {\n                      self.$router.push({ path: '/shoplist' });\n                    }\n                  });\n                } else {\n                  _this.$message({\n                    type: 'error',\n                    message: '发布失败',\n                    duration: 1000,\n                    onClose: function onClose() {}\n                  });\n                }\n              }, function (error) {\n                console.log('请启动node server');\n              });\n            }\n          } else {\n            _this.$message({\n              type: 'error',\n              message: '未登录',\n              duration: 1000\n            });\n          }\n        } else {\n          console.log('error submit!!');\n          return false;\n        }\n      });\n    },\n    resetForm: function resetForm(formName) {\n      this.$refs[formName].resetFields();\n    },\n    handleRemove: function handleRemove(file, fileList) {\n      this.uploadFlag = false;\n    },\n    handlePictureCardPreview: function handlePictureCardPreview(file) {\n      this.dialogImageUrl = file.url;\n      this.dialogVisible = true;\n    },\n    handleAvatarSuccess: function handleAvatarSuccess(res, file, fileList) {\n      console.log(res);\n      if (res.status) {\n        this.ruleForm.imgid = res.id;\n      }\n    },\n    handlePictureBefore: function handlePictureBefore(file) {\n      if (this.uploadFlag) {\n        return false;\n      }\n    },\n    handlePictureChange: function handlePictureChange(file, fileList) {\n      if (fileList.length > 1) {\n        this.uploadFlag = true;\n        this.$message({\n          type: 'error',\n          message: '亲，只能上传一张图片',\n          duration: 1000\n        });\n      }\n    }\n  }\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjgyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FkZGltZy52dWU/M2YzNiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxlbC1jb2wgOnNwYW49XCIxMFwiPlxuICAgIDxlbC1mb3JtIDptb2RlbD1cInJ1bGVGb3JtXCIgOnJ1bGVzPVwicnVsZXNcIiByZWY9XCJydWxlRm9ybVwiIGxhYmVsLXdpZHRoPVwiMTAwcHhcIiBlbmN0eXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiPlxuICAgICAgPGVsLWZvcm0taXRlbSBsYWJlbD1cIuS4iuS8oOWbvueJh++8mlwiPlxuICAgICAgICA8ZWwtdXBsb2FkICBuYW1lPVwiaW5wdXRGaWxlXCJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uPVwic2hvcHVwbG9hZFwiXG4gICAgICAgICAgICAgICAgICAgIGxpc3QtdHlwZT1cInBpY3R1cmUtY2FyZFwiXG4gICAgICAgICAgICAgICAgICAgIDpiZWZvcmUtdXBsb2FkPVwiaGFuZGxlUGljdHVyZUJlZm9yZVwiXG4gICAgICAgICAgICAgICAgICAgIDpvbi1jaGFuZ2U9XCJoYW5kbGVQaWN0dXJlQ2hhbmdlXCJcbiAgICAgICAgICAgICAgICAgICAgOm9uLXByZXZpZXc9XCJoYW5kbGVQaWN0dXJlQ2FyZFByZXZpZXdcIlxuICAgICAgICAgICAgICAgICAgICA6b24tcmVtb3ZlPVwiaGFuZGxlUmVtb3ZlXCJcbiAgICAgICAgICAgICAgICAgICAgOm9uLXN1Y2Nlc3M9XCJoYW5kbGVBdmF0YXJTdWNjZXNzXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJlbC1pY29uLXBsdXNcIj48L2k+XG4gICAgICAgIDwvZWwtdXBsb2FkPlxuICAgICAgICA8ZWwtZGlhbG9nIHYtbW9kZWw9XCJkaWFsb2dWaXNpYmxlXCIgc2l6ZT1cInRpbnlcIj5cbiAgICAgICAgICA8aW1nIHdpZHRoPVwiMTAwJVwiIDpzcmM9XCJkaWFsb2dJbWFnZVVybFwiIGFsdD1cIlwiPlxuICAgICAgICA8L2VsLWRpYWxvZz5cbiAgICAgIDwvZWwtZm9ybS1pdGVtPlxuICAgICAgPGVsLWZvcm0taXRlbT5cbiAgICAgICAgPGVsLWJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIEBjbGljaz1cInN1Ym1pdEZvcm0oJ3J1bGVGb3JtJylcIj7mj5DkuqQ8L2VsLWJ1dHRvbj5cbiAgICAgICAgPGVsLWJ1dHRvbiBAY2xpY2s9XCJyZXNldEZvcm0oJ3J1bGVGb3JtJylcIj7ph43nva48L2VsLWJ1dHRvbj5cbiAgICAgIDwvZWwtZm9ybS1pdGVtPlxuICAgIDwvZWwtZm9ybT5cbiAgPC9lbC1jb2w+XG48L3RlbXBsYXRlPlxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7bWFwU3RhdGV9IGZyb20gJ3Z1ZXgnXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnYmFubmVyYWRkJyxcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdXBsb2FkRmxhZzogZmFsc2UsXG4gICAgICAgIGRpYWxvZ0ltYWdlVXJsOiAnJyxcbiAgICAgICAgZGlhbG9nVmlzaWJsZTogZmFsc2UsXG4gICAgICAgIHJ1bGVGb3JtOiB7XG4gICAgICAgICAgaW1naWQ6IDAsXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSxcbiAgICBjb21wdXRlZDogbWFwU3RhdGUoe1xuICAgICAgdXNlcjogc3RhdGUgPT4gc3RhdGUudXNlci5zZXNzaW9uZGF0YVxuICAgIH0pLFxuICAgIG1vdW50ZWQoKXtcblxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgc3VibWl0Rm9ybShmb3JtTmFtZSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuJHJlZnNbZm9ybU5hbWVdLnZhbGlkYXRlKCh2YWxpZCkgPT4ge1xuICAgICAgICAgIGlmICh2YWxpZCkge1xuICAgICAgICAgICAgaWYodGhpcy4kc3RvcmUuc3RhdGUudXNlci5zZXNzaW9uZGF0YSAhPScnKXtcbiAgICAgICAgICAgICAgaWYodGhpcy5ydWxlRm9ybS5pbWdpZCA9PSAwKXtcbiAgICAgICAgICAgICAgICB0aGlzLiRtZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn6K+36Iez5bCR5LiK5Lyg5LiA5byg5Zu+54mHJyxcbiAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRoaXMuJGh0dHAucG9zdCgnc2hvcHNhdmUnLCB7XG4gICAgICAgICAgICAgICAgICBpbWdpZDogdGhpcy5ydWxlRm9ybS5pbWdpZCxcbiAgICAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJG1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn5ZWG5ZOB5re75Yqg5oiQ5YqfJyxcbiAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRyb3V0ZXIucHVzaCh7cGF0aDogJy9zaG9wbGlzdCd9KTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kbWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn5Y+R5biD5aSx6LSlJyxcbiAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfor7flkK/liqhub2RlIHNlcnZlcicpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICB0aGlzLiRtZXNzYWdlKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfmnKrnmbvlvZUnLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3Igc3VibWl0ISEnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIHJlc2V0Rm9ybShmb3JtTmFtZSkge1xuICAgICAgICB0aGlzLiRyZWZzW2Zvcm1OYW1lXS5yZXNldEZpZWxkcygpO1xuICAgICAgfSxcbiAgICAgIGhhbmRsZVJlbW92ZShmaWxlLCBmaWxlTGlzdCkge1xuICAgICAgICB0aGlzLnVwbG9hZEZsYWcgPSBmYWxzZTtcbiAgICAgIH0sXG4gICAgICBoYW5kbGVQaWN0dXJlQ2FyZFByZXZpZXcoZmlsZSkge1xuICAgICAgICB0aGlzLmRpYWxvZ0ltYWdlVXJsID0gZmlsZS51cmw7XG4gICAgICAgIHRoaXMuZGlhbG9nVmlzaWJsZSA9IHRydWU7XG4gICAgICB9LFxuICAgICAgaGFuZGxlQXZhdGFyU3VjY2VzcyhyZXMsIGZpbGUsIGZpbGVMaXN0KSB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICBpZiAocmVzLnN0YXR1cykge1xuICAgICAgICAgIHRoaXMucnVsZUZvcm0uaW1naWQgPSByZXMuaWQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBoYW5kbGVQaWN0dXJlQmVmb3JlKGZpbGUpe1xuICAgICAgICBpZiAodGhpcy51cGxvYWRGbGFnKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgaGFuZGxlUGljdHVyZUNoYW5nZShmaWxlLCBmaWxlTGlzdCl7XG4gICAgICAgIGlmIChmaWxlTGlzdC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgdGhpcy51cGxvYWRGbGFnID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLiRtZXNzYWdlKHtcbiAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICBtZXNzYWdlOiAn5Lqy77yM5Y+q6IO95LiK5Lyg5LiA5byg5Zu+54mHJyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFkZGltZy52dWU/MjczOGE0MWUiXSwibWFwcGluZ3MiOiI7Ozs7QUE2QkE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBREE7QUFKQTtBQVFBO0FBQ0E7OztBQUNBOztBQURBO0FBSUE7QUFDQTs7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFLQTs7QUFFQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBbEZBO0FBbEJBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})