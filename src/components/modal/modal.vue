<template>
    <transition name="fade" mode="out-in">
        <div v-if="show" :class="[defaultClass,moldStyle,dialogStyle]">
            <div class="dialog-body">
                <div v-if="mode == 'confirm' " class="dialog-title">{{title}}</div>
                <div class="dialog-message">{{message}}</div>
                <div class="dialog-btn-bar" v-if="load">
                    <button v-if="mode == 'confirm' " class="dialog-default-btn" type="button" @click="cancel">取消</button>
                    <button class="dialog-primary-btn" type="button" @click="ok">确定</button>
                </div>
            </div>
        </div>
    </transition>
</template>
<style scoped>
    .dialog {
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.4);
    }

    .dialog .dialog-body {
        position: relative;
        top: 50%;
        width: 80%;
        max-width: 300px;
        margin: 0 auto;
        transform: translate3d(0, -50%, 0);
        background-color: #fff;
        text-align: center;
        border-radius: 0.2em;
        overflow: hidden;
    }

    .dialog.android .dialog-body {
        text-align: left;
    }

    .dialog .dialog-title {
        font-size: 1.05em;
        padding: 1.3em 1.6em 0 1.6em;
    }

    .dialog .dialog-btn-bar button {
        -webkit-appearance: none;
        background-color: rgba(255, 255, 255, 0);
        border: 0;
        outline: none;
    }

    .dialog.alert .dialog-message {
        padding: 1.8em 1.6em 1.2em 1.6em;
    }

    .dialog .dialog-message {
        font-size: 85%;
        line-height: 1.4em;
        padding: 1em 1.6em;
        color: #999;
    }

    .dialog.ios .dialog-btn-bar {
        position: relative;
        display: flex;
        justify-content: center;
    }

    .dialog.android .dialog-btn-bar {
        display: flex;
        justify-content: flex-end;
        padding: 0.5em 1em;
    }

    .dialog.ios .dialog-btn-bar::before {
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        height: 1px;
        border-top: 1px solid #d5d5d6;
        color: #d5d5d6;
        transform-origin: 0 0;
        transform: scaleY(0.5);
        z-index: 1;
    }

    .dialog.ios .dialog-btn-bar button {
        position: relative;
        width: 50%;
        height: 2.8em;
        background-color: #fff;
        border: 0;
        outline: none;
        font-size: 90%;
    }

    .dialog.ios .dialog-btn-bar .dialog-default-btn:after {
        content: " ";
        position: absolute;
        left: 100%;
        top: 0;
        width: 1px;
        bottom: 0;
        border-left: 1px solid #d5d5d6;
        color: #d5d5d6;
        transform-origin: 0 0;
        transform: scaleX(0.5);
        z-index: 1;
    }

    .dialog .dialog-btn-bar .dialog-primary-btn {
        color: #F75F00;
    }

    .dialog.android .dialog-btn-bar button {
        height: 2.6em;
        margin: 0 0.5em;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.1s ease;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0;
    }

    @media screen and (min-width: 359px) {
        .dialog {
            font-size: 1.1em;
        }
    }
</style>
<script>
    export default{
        data: function () {
            return {
                defaultClass: 'dialog',
                show: false,
                mode: 'alert',
                title: 'title',
                message: 'message',
                load:true,
                cancelCB: null,
                okCB: null
            }
        },
        computed: {
            dialogStyle: function () {
                return (/Android/gi.test(navigator.userAgent)) ? 'android' : 'ios';
            },
            moldStyle: function () {
               /* return this.mode ? 'confirm' : 'alert';*/
               if(this.mode == 'confirm'){
                   return 'confirm'
               }else if(this.mode == 'alert'){
                   return 'alert'
               }else if(this.mode == 'load'){
                   return 'load'
               }
            }
        },
        methods: {
            cancel: function () {
                this.show = false;
                this.cancelCB && this.cancelCB();
            },
            ok: function () {
                this.show = false;
                this.okCB && this.okCB();
            }
        }
    }
</script>