/**
 * Created by mengjintao on 2019/4/1.
 */
import getData from './util';
import Vue from 'vue';
import App from './App.vue';
import './style/common.scss';

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
})