const modalComponent = require('./modal.vue')
const modal = {
    install: function(Vue,options) {
        var dialogNode = document.createElement("div");
        dialogNode.id = "modal";
        try{
            document.querySelector("body").appendChild(dialogNode);
        }catch(e){
            console && console.warn('Add it in the bottom of the page！');
        }
        var dialogComponent = Vue.extend(modalComponent);
        var dialog = new dialogComponent();
        dialog.$mount('#modal');

        Vue.prototype.alert = function(options) {
            dialog.$data.show = true;
            dialog.$data.mode = 'alert';
            if (options) {
                options.title && (dialog.$data.title = options.title);
                options.message && (dialog.$data.message = options.message);
                options.ok && (dialog.$data.okCB = options.ok);
            } else {
                console && console.warn && console.warn('自定义对话框的参数错误！');
            }
        };
        Vue.prototype.confirm = function(options) {
            dialog.$data.show = true;
            dialog.$data.mode = 'confirm';
            if (options) {
                options.title && (dialog.$data.title = options.title);
                options.message && (dialog.$data.message = options.message);
                options.cancel && (dialog.$data.cancelCB = options.cancel);
                options.ok && (dialog.$data.okCB = options.ok);
            } else {
                console && console.warn && console.warn('自定义对话框的参数错误！');
            }
        };
        Vue.prototype.loadmsg=function (options) {
            dialog.$data.defaultClass='loadBox';
            dialog.$data.show = true;
            dialog.$data.mode = 'load';
            dialog.$data.load = false;
            if (options) {
                options.message && (dialog.$data.message = options.message);
            } else {
                console && console.warn && console.warn('自定义对话框的参数错误！');
            }
        };
    }
}
module.exports = modal

