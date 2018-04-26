import Vue from 'vue';
import VueRouter from 'vue-router';
import ga from 'vue-ga';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Contact from '@/views/Contact.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/contact', name: 'contact', component: Contact },
  ],
});

ga(router, 'UA-50810083-1');

export default router;
