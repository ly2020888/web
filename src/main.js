import Vue from 'vue';
import App from './App.vue';
import loginW from './components/loginW';
import index from './components/index';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueParticles from 'vue-particles';
import VueRouter from 'vue-router';

Vue.use(VueRouter)
Vue.use(VueParticles);
Vue.config.productionTip = false
Vue.use(ElementUI);

const routes = [
  { path: '/login', component: loginW },
  { path: '', component: index },
];
const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
