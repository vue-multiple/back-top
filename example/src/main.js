import Vue from 'vue'
import App from './App.vue'

import VueHighlightJS from 'vue-highlightjs'
Vue.use(VueHighlightJS)

import BackTop from '../../src/index.js'
Vue.component(BackTop.name, BackTop)

new Vue({
    el: '#app',
    render: h => h(App)
})
