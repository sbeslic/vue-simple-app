// Import Vue
import Vue from 'vue';
import VueRouter from 'vue-router';

// Import Vue App, routes, store
import App from './App';
import routes from './routes';

import BootstrapVue from 'bootstrap-vue';
import Vuelidate from 'vuelidate';

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(Vuelidate)

const router = new VueRouter({
    routes,
    linkActiveClass: 'active',
    mode: 'history'
});

new Vue({
    el: '#app',
    render: h => h(App),
    router
});
