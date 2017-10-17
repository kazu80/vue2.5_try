// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false;

Vue.component('child', {
    props: ['myMessage', 'initialCounter'],
    template: '<span>{{ normalizedCounter }}</span>',
    mounted: function () {
    },
    data: function () {
        return {counter: this.initialCounter}
    },
    computed: {
        normalizedCounter: function () {
            return this.myMessage.trim().toLowerCase()
        }
    }
});

/* eslint-disable no-new */
new Vue ({
             el        : '#app',
             // template  : '<App/>',
             components: {
                 App
             }
         });

