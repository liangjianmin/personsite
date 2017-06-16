webpackHotUpdate(20,{

/***/ 682:
/* exports provided: default */
/* all exports used */
/*!****************************************************************************************************************************************************!*\
  !*** ./~/_babel-loader@6.4.1@babel-loader/lib!./~/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=script&index=0!./src/views/banner/addimg.vue ***!
  \****************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(/*! vuex */ 10);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'banneradd',\n  data: function data() {\n    return {\n      uploadFlag: false,\n      dialogImageUrl: '',\n      dialogVisible: false,\n      ruleForm: {\n        imgid: 0\n      }\n    };\n  },\n\n  computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__[\"b\" /* mapState */])({\n    user: function user(state) {\n      return state.user.sessiondata;\n    }\n  }),\n  mounted: function mounted() {},\n\n  methods: {\n    submitForm: function submitForm(formName) {\n      var _this = this;\n\n      var self = this;\n      this.$refs.upload.submit();\n      this.$refs[formName].validate(function (valid) {\n        if (valid) {\n          if (_this.$store.state.user.sessiondata != '') {\n            if (_this.ruleForm.imgid == 0) {\n              _this.$message({\n                type: 'error',\n                message: '请至少上传一张图片',\n                duration: 1000\n              });\n            } else {\n              _this.$http.post('shopsave', {\n                imgid: _this.ruleForm.imgid\n              }).then(function (res) {\n                if (res.data.status) {\n                  _this.$message({\n                    type: 'success',\n                    message: '商品添加成功',\n                    duration: 1000,\n                    onClose: function onClose() {\n                      self.$router.push({ path: '/shoplist' });\n                    }\n                  });\n                } else {\n                  _this.$message({\n                    type: 'error',\n                    message: '发布失败',\n                    duration: 1000,\n                    onClose: function onClose() {}\n                  });\n                }\n              }, function (error) {\n                console.log('请启动node server');\n              });\n            }\n          } else {\n            _this.$message({\n              type: 'error',\n              message: '未登录',\n              duration: 1000\n            });\n          }\n        } else {\n          console.log('error submit!!');\n          return false;\n        }\n      });\n    },\n    resetForm: function resetForm(formName) {\n      this.$refs[formName].resetFields();\n    },\n    handleRemove: function handleRemove(file, fileList) {\n      this.uploadFlag = false;\n    },\n    handlePreview: function handlePreview(file) {\n      console.log(file);\n    },\n    handlePictureCardPreview: function handlePictureCardPreview(file) {\n      this.dialogImageUrl = file.url;\n      this.dialogVisible = true;\n    },\n    handleAvatarSuccess: function handleAvatarSuccess(res, file, fileList) {\n      console.log(res);\n      if (res.status) {\n        this.ruleForm.imgid = res.id;\n      }\n    },\n    handlePictureBefore: function handlePictureBefore(file) {\n      if (this.uploadFlag) {\n        return false;\n      }\n    },\n    handlePictureChange: function handlePictureChange(file, fileList) {\n      if (fileList.length > 1) {\n        this.uploadFlag = true;\n        this.$message({\n          type: 'error',\n          message: '亲，只能上传一张图片',\n          duration: 1000\n        });\n      }\n    }\n  }\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjgyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FkZGltZy52dWU/MGYzNiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxlbC1jb2wgOnNwYW49XCIxMFwiPlxuICAgIDxlbC1mb3JtIDptb2RlbD1cInJ1bGVGb3JtXCIgIHJlZj1cInJ1bGVGb3JtXCIgbGFiZWwtd2lkdGg9XCIxMDBweFwiIGVuY3R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI+XG4gICAgICA8ZWwtZm9ybS1pdGVtIGxhYmVsPVwi5LiK5Lyg5Zu+54mH77yaXCI+XG4gICAgICAgIDxlbC11cGxvYWQgIG5hbWU9XCJpbnB1dEZpbGVcIlxuICAgICAgICAgICAgICAgICAgICByZWY9XCJ1cGxvYWRcIlxuICAgICAgICAgICAgICAgICAgICBhY3Rpb249XCJzaG9wdXBsb2FkXCJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC10eXBlPVwicGljdHVyZS1jYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgOmJlZm9yZS11cGxvYWQ9XCJoYW5kbGVQaWN0dXJlQmVmb3JlXCJcbiAgICAgICAgICAgICAgICAgICAgOm9uLWNoYW5nZT1cImhhbmRsZVBpY3R1cmVDaGFuZ2VcIlxuICAgICAgICAgICAgICAgICAgICA6b24tcHJldmlldz1cImhhbmRsZVBpY3R1cmVDYXJkUHJldmlld1wiXG4gICAgICAgICAgICAgICAgICAgIDpvbi1wcm9ncmVzcz1cImhhbmRsZVByZXZpZXdcIlxuICAgICAgICAgICAgICAgICAgICA6b24tcmVtb3ZlPVwiaGFuZGxlUmVtb3ZlXCJcbiAgICAgICAgICAgICAgICAgICAgOmF1dG8tdXBsb2FkPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICA6b24tc3VjY2Vzcz1cImhhbmRsZUF2YXRhclN1Y2Nlc3NcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImVsLWljb24tcGx1c1wiPjwvaT5cbiAgICAgICAgPC9lbC11cGxvYWQ+XG4gICAgICAgIDxlbC1kaWFsb2cgdi1tb2RlbD1cImRpYWxvZ1Zpc2libGVcIiBzaXplPVwidGlueVwiPlxuICAgICAgICAgIDxpbWcgd2lkdGg9XCIxMDAlXCIgOnNyYz1cImRpYWxvZ0ltYWdlVXJsXCIgYWx0PVwiXCI+XG4gICAgICAgIDwvZWwtZGlhbG9nPlxuICAgICAgPC9lbC1mb3JtLWl0ZW0+XG4gICAgICA8ZWwtZm9ybS1pdGVtPlxuICAgICAgICA8ZWwtYnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgQGNsaWNrPVwic3VibWl0Rm9ybSgncnVsZUZvcm0nKVwiPuaPkOS6pDwvZWwtYnV0dG9uPlxuICAgICAgICA8ZWwtYnV0dG9uIEBjbGljaz1cInJlc2V0Rm9ybSgncnVsZUZvcm0nKVwiPumHjee9rjwvZWwtYnV0dG9uPlxuICAgICAgPC9lbC1mb3JtLWl0ZW0+XG4gICAgPC9lbC1mb3JtPlxuICA8L2VsLWNvbD5cbjwvdGVtcGxhdGU+XG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPlxuPHNjcmlwdD5cbiAgaW1wb3J0IHttYXBTdGF0ZX0gZnJvbSAndnVleCdcbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdiYW5uZXJhZGQnLFxuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB1cGxvYWRGbGFnOiBmYWxzZSxcbiAgICAgICAgZGlhbG9nSW1hZ2VVcmw6ICcnLFxuICAgICAgICBkaWFsb2dWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgcnVsZUZvcm06IHtcbiAgICAgICAgICBpbWdpZDogMFxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0sXG4gICAgY29tcHV0ZWQ6IG1hcFN0YXRlKHtcbiAgICAgIHVzZXI6IHN0YXRlID0+IHN0YXRlLnVzZXIuc2Vzc2lvbmRhdGFcbiAgICB9KSxcbiAgICBtb3VudGVkKCl7XG5cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIHN1Ym1pdEZvcm0oZm9ybU5hbWUpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLiRyZWZzLnVwbG9hZC5zdWJtaXQoKTtcbiAgICAgICAgdGhpcy4kcmVmc1tmb3JtTmFtZV0udmFsaWRhdGUoKHZhbGlkKSA9PiB7XG4gICAgICAgICAgaWYgKHZhbGlkKSB7XG4gICAgICAgICAgICBpZih0aGlzLiRzdG9yZS5zdGF0ZS51c2VyLnNlc3Npb25kYXRhICE9Jycpe1xuICAgICAgICAgICAgICBpZih0aGlzLnJ1bGVGb3JtLmltZ2lkID09IDApe1xuICAgICAgICAgICAgICAgIHRoaXMuJG1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfor7foh7PlsJHkuIrkvKDkuIDlvKDlm77niYcnLFxuICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy4kaHR0cC5wb3N0KCdzaG9wc2F2ZScsIHtcbiAgICAgICAgICAgICAgICAgIGltZ2lkOiB0aGlzLnJ1bGVGb3JtLmltZ2lkLFxuICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kbWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfllYblk4Hmt7vliqDmiJDlip8nLFxuICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHJvdXRlci5wdXNoKHtwYXRoOiAnL3Nob3BsaXN0J30pO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRtZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICflj5HluIPlpLHotKUnLFxuICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+ivt+WQr+WKqG5vZGUgc2VydmVyJylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIHRoaXMuJG1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ+acqueZu+W9lScsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBzdWJtaXQhIScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgcmVzZXRGb3JtKGZvcm1OYW1lKSB7XG4gICAgICAgIHRoaXMuJHJlZnNbZm9ybU5hbWVdLnJlc2V0RmllbGRzKCk7XG4gICAgICB9LFxuICAgICAgaGFuZGxlUmVtb3ZlKGZpbGUsIGZpbGVMaXN0KSB7XG4gICAgICAgIHRoaXMudXBsb2FkRmxhZyA9IGZhbHNlO1xuICAgICAgfSxcbiAgICAgIGhhbmRsZVByZXZpZXcoZmlsZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGZpbGUpO1xuICAgICAgfSxcbiAgICAgIGhhbmRsZVBpY3R1cmVDYXJkUHJldmlldyhmaWxlKSB7XG4gICAgICAgIHRoaXMuZGlhbG9nSW1hZ2VVcmwgPSBmaWxlLnVybDtcbiAgICAgICAgdGhpcy5kaWFsb2dWaXNpYmxlID0gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICBoYW5kbGVBdmF0YXJTdWNjZXNzKHJlcywgZmlsZSwgZmlsZUxpc3QpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgIGlmIChyZXMuc3RhdHVzKSB7XG4gICAgICAgICAgdGhpcy5ydWxlRm9ybS5pbWdpZCA9IHJlcy5pZDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGhhbmRsZVBpY3R1cmVCZWZvcmUoZmlsZSl7XG4gICAgICAgIGlmICh0aGlzLnVwbG9hZEZsYWcpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBoYW5kbGVQaWN0dXJlQ2hhbmdlKGZpbGUsIGZpbGVMaXN0KXtcbiAgICAgICAgaWYgKGZpbGVMaXN0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICB0aGlzLnVwbG9hZEZsYWcgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuJG1lc3NhZ2Uoe1xuICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICfkurLvvIzlj6rog73kuIrkvKDkuIDlvKDlm77niYcnLFxuICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYWRkaW1nLnZ1ZT83YWM5YTMxMiJdLCJtYXBwaW5ncyI6Ijs7OztBQWdDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFEQTtBQUpBO0FBUUE7QUFDQTs7O0FBQ0E7O0FBREE7QUFJQTtBQUNBOzs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7O0FBRUE7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQXRGQTtBQWxCQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})