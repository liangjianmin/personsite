webpackHotUpdate(20,{

/***/ 682:
/* exports provided: default */
/* all exports used */
/*!****************************************************************************************************************************************************!*\
  !*** ./~/_babel-loader@6.4.1@babel-loader/lib!./~/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=script&index=0!./src/views/banner/addimg.vue ***!
  \****************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(/*! vuex */ 10);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'banneradd',\n  data: function data() {\n    return {\n      uploadFlag: false,\n      dialogImageUrl: '',\n      dialogVisible: false,\n      fileList: 0,\n      ruleForm: {\n        imgid: 0\n      }\n    };\n  },\n\n  computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__[\"b\" /* mapState */])({\n    user: function user(state) {\n      return state.user.sessiondata;\n    }\n  }),\n  mounted: function mounted() {},\n\n  methods: {\n    submitForm: function submitForm(formName) {\n      var _this = this;\n\n      var self = this;\n      this.$refs.upload.submit();\n      this.$refs[formName].validate(function (valid) {\n        if (valid) {\n          if (_this.$store.state.user.sessiondata != '') {\n            if (_this.ruleForm.imgid == 0) {\n              _this.$message({\n                type: 'error',\n                message: '请至少上传一张图片',\n                duration: 1000\n              });\n            } else {\n              _this.$http.post('shopsave', {\n                imgid: _this.ruleForm.imgid\n              }).then(function (res) {\n                if (res.data.status) {\n                  _this.$message({\n                    type: 'success',\n                    message: '商品添加成功',\n                    duration: 1000,\n                    onClose: function onClose() {\n                      self.$router.push({ path: '/shoplist' });\n                    }\n                  });\n                } else {\n                  _this.$message({\n                    type: 'error',\n                    message: '发布失败',\n                    duration: 1000,\n                    onClose: function onClose() {}\n                  });\n                }\n              }, function (error) {\n                console.log('请启动node server');\n              });\n            }\n          } else {\n            _this.$message({\n              type: 'error',\n              message: '未登录',\n              duration: 1000\n            });\n          }\n        } else {\n          console.log('error submit!!');\n          return false;\n        }\n      });\n    },\n    resetForm: function resetForm(formName) {\n      this.$refs[formName].resetFields();\n    },\n    handlePreview: function handlePreview(file) {\n      console.log(file);\n    },\n    handlePictureCardPreview: function handlePictureCardPreview(file) {\n      console.log(file);\n      this.dialogImageUrl = file.url;\n      this.dialogVisible = true;\n    },\n    handleAvatarSuccess: function handleAvatarSuccess(res, file, fileList) {\n      if (res.status) {\n        this.ruleForm.imgid = res.id;\n      }\n    },\n    handlePictureChange: function handlePictureChange(file, fileList) {\n      this.fileList = fileList.length;\n      console.log(this.fileList);\n      this.uploadFlag = true;\n    }\n  }\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjgyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FkZGltZy52dWU/NWJiNiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxlbC1jb2wgOnNwYW49XCIxMFwiPlxuICAgIDxlbC1mb3JtIDptb2RlbD1cInJ1bGVGb3JtXCIgIHJlZj1cInJ1bGVGb3JtXCIgbGFiZWwtd2lkdGg9XCIxMDBweFwiIGVuY3R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI+XG4gICAgICA8ZWwtZm9ybS1pdGVtIGxhYmVsPVwi5LiK5Lyg5Zu+54mH77yaXCI+XG4gICAgICAgIDxlbC11cGxvYWQgIG5hbWU9XCJpbnB1dEZpbGVcIlxuICAgICAgICAgICAgICAgICAgICByZWY9XCJ1cGxvYWRcIlxuICAgICAgICAgICAgICAgICAgICBhY3Rpb249XCJzaG9wdXBsb2FkXCJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC10eXBlPVwicGljdHVyZS1jYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgOmJlZm9yZS11cGxvYWQ9XCJoYW5kbGVQaWN0dXJlQmVmb3JlXCJcbiAgICAgICAgICAgICAgICAgICAgOm9uLWNoYW5nZT1cImhhbmRsZVBpY3R1cmVDaGFuZ2VcIlxuICAgICAgICAgICAgICAgICAgICA6b24tcHJldmlldz1cImhhbmRsZVBpY3R1cmVDYXJkUHJldmlld1wiXG4gICAgICAgICAgICAgICAgICAgIDpvbi1wcm9ncmVzcz1cImhhbmRsZVByZXZpZXdcIlxuICAgICAgICAgICAgICAgICAgICA6b24tcmVtb3ZlPVwiaGFuZGxlUmVtb3ZlXCJcbiAgICAgICAgICAgICAgICAgICAgOmF1dG8tdXBsb2FkPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICA6b24tc3VjY2Vzcz1cImhhbmRsZUF2YXRhclN1Y2Nlc3NcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImVsLWljb24tcGx1c1wiPjwvaT5cbiAgICAgICAgPC9lbC11cGxvYWQ+XG4gICAgICAgIDxlbC1kaWFsb2cgdi1tb2RlbD1cImRpYWxvZ1Zpc2libGVcIiBzaXplPVwidGlueVwiPlxuICAgICAgICAgIDxpbWcgd2lkdGg9XCIxMDAlXCIgOnNyYz1cImRpYWxvZ0ltYWdlVXJsXCIgYWx0PVwiXCI+XG4gICAgICAgIDwvZWwtZGlhbG9nPlxuICAgICAgPC9lbC1mb3JtLWl0ZW0+XG4gICAgICA8ZWwtZm9ybS1pdGVtPlxuICAgICAgICA8ZWwtYnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgQGNsaWNrPVwic3VibWl0Rm9ybSgncnVsZUZvcm0nKVwiPuaPkOS6pDwvZWwtYnV0dG9uPlxuICAgICAgICA8ZWwtYnV0dG9uIEBjbGljaz1cInJlc2V0Rm9ybSgncnVsZUZvcm0nKVwiPumHjee9rjwvZWwtYnV0dG9uPlxuICAgICAgPC9lbC1mb3JtLWl0ZW0+XG4gICAgPC9lbC1mb3JtPlxuICA8L2VsLWNvbD5cbjwvdGVtcGxhdGU+XG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPlxuPHNjcmlwdD5cbiAgaW1wb3J0IHttYXBTdGF0ZX0gZnJvbSAndnVleCdcbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdiYW5uZXJhZGQnLFxuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB1cGxvYWRGbGFnOiBmYWxzZSxcbiAgICAgICAgZGlhbG9nSW1hZ2VVcmw6ICcnLFxuICAgICAgICBkaWFsb2dWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgZmlsZUxpc3Q6MCxcbiAgICAgICAgcnVsZUZvcm06IHtcbiAgICAgICAgICBpbWdpZDogMFxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0sXG4gICAgY29tcHV0ZWQ6IG1hcFN0YXRlKHtcbiAgICAgIHVzZXI6IHN0YXRlID0+IHN0YXRlLnVzZXIuc2Vzc2lvbmRhdGFcbiAgICB9KSxcbiAgICBtb3VudGVkKCl7XG5cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIHN1Ym1pdEZvcm0oZm9ybU5hbWUpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLiRyZWZzLnVwbG9hZC5zdWJtaXQoKTtcbiAgICAgICAgdGhpcy4kcmVmc1tmb3JtTmFtZV0udmFsaWRhdGUoKHZhbGlkKSA9PiB7XG4gICAgICAgICAgaWYgKHZhbGlkKSB7XG4gICAgICAgICAgICBpZih0aGlzLiRzdG9yZS5zdGF0ZS51c2VyLnNlc3Npb25kYXRhICE9Jycpe1xuICAgICAgICAgICAgICBpZih0aGlzLnJ1bGVGb3JtLmltZ2lkID09IDApe1xuICAgICAgICAgICAgICAgIHRoaXMuJG1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfor7foh7PlsJHkuIrkvKDkuIDlvKDlm77niYcnLFxuICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy4kaHR0cC5wb3N0KCdzaG9wc2F2ZScsIHtcbiAgICAgICAgICAgICAgICAgIGltZ2lkOiB0aGlzLnJ1bGVGb3JtLmltZ2lkXG4gICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRtZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+WVhuWTgea3u+WKoOaIkOWKnycsXG4gICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgb25DbG9zZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kcm91dGVyLnB1c2goe3BhdGg6ICcvc2hvcGxpc3QnfSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJG1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+WPkeW4g+Wksei0pScsXG4gICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgb25DbG9zZTogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn6K+35ZCv5Yqobm9kZSBzZXJ2ZXInKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgdGhpcy4kbWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAn5pyq55m75b2VJyxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwMFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIHN1Ym1pdCEhJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICByZXNldEZvcm0oZm9ybU5hbWUpIHtcbiAgICAgICAgdGhpcy4kcmVmc1tmb3JtTmFtZV0ucmVzZXRGaWVsZHMoKTtcbiAgICAgIH0sXG4gICAgICBoYW5kbGVQcmV2aWV3KGZpbGUpe1xuICAgICAgICBjb25zb2xlLmxvZyhmaWxlKTtcbiAgICAgIH0sXG4gICAgICBoYW5kbGVQaWN0dXJlQ2FyZFByZXZpZXcoZmlsZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGZpbGUpXG4gICAgICAgIHRoaXMuZGlhbG9nSW1hZ2VVcmwgPSBmaWxlLnVybDtcbiAgICAgICAgdGhpcy5kaWFsb2dWaXNpYmxlID0gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICBoYW5kbGVBdmF0YXJTdWNjZXNzKHJlcywgZmlsZSwgZmlsZUxpc3QpIHtcbiAgICAgICAgICBpZiAocmVzLnN0YXR1cykge1xuICAgICAgICAgIHRoaXMucnVsZUZvcm0uaW1naWQgPSByZXMuaWQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBoYW5kbGVQaWN0dXJlQ2hhbmdlKGZpbGUsIGZpbGVMaXN0KXtcbiAgICAgICAgICB0aGlzLmZpbGVMaXN0PWZpbGVMaXN0Lmxlbmd0aDtcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVMaXN0KVxuICAgICAgICB0aGlzLnVwbG9hZEZsYWcgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYWRkaW1nLnZ1ZT9iMTQ3NGYyYyJdLCJtYXBwaW5ncyI6Ijs7OztBQWdDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQURBO0FBTEE7QUFTQTtBQUNBOzs7QUFDQTs7QUFEQTtBQUlBO0FBQ0E7OztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFLQTs7QUFFQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF6RUE7QUFuQkEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})