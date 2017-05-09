import Vue from 'vue'

const fouces=Vue.directive('fouces',(el)=>{
   el.focus();
});

/*const hoverbtn=Vue.directive('touchstart',(el)=>{
    el.addEventListener('touchstart', () => {
        el.style.opacity = 0.8;
    }, false);
    el.addEventListener('touchend', () => {
        el.style.opacity = 1;
    }, false);
});*/

export default {
    fouces
}
