// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false;

Vue.component('child', {
    props: ['myMessage', 'initialCounter'],
    template: '<button v-on:click.native="foo">{{ normalizedCounter }}</button>',
    mounted: function () {
    },
    data: function () {
        return {counter: this.initialCounter}
    },
    computed: {
        normalizedCounter: function () {
            return this.myMessage.trim().toLowerCase()
        }
    },
    methods: {
        foo () {
            console.log('component click event!');
        }
    }
});

Vue.component('bs-date-input', {
    template: '<input type="date" class="form-control">'
});

/* eslint-disable no-new */
new Vue ({
             el        : '#app',
             // template  : '<App/>',
             components: {
                 App
             },
             methods: {
                 foo () {
                     console.log('foo');
                 }
             }
         });


const child = document.getElementById('child');
child.addEventListener('foo', function () {
    console.log('native click event!');
});

function foo () {
    console.log('foo');
}