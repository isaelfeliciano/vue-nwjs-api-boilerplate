import Vue from 'vue'
import App from './App.vue'
import router from './router'

import BootstrapVue from 'bootstrap-vue'
import VueStickyKit from 'vue-stickykit'

Vue.use(BootstrapVue)
Vue.use(VueStickyKit)

import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
Vue.use(VueSidebarMenu)

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import 'bootstrap-vue/dist/bootstrap-vue.css'

import Notifications from 'vue-notification'
Vue.use(Notifications)

import Default from './Layout/Wrappers/baseLayout.vue';
Vue.component('default-layout', Default);

Vue.config.productionTip = false

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
