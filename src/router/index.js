import Vue from 'vue';
import Router from 'vue-router';

import defaultLayout from '@/layouts/defaultLayout.vue';

import dashboardRoutes from '@/router/dashboard';
import dataRoutes from '@/router/data';

import Home from '@/views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    component: defaultLayout,
    path: '',
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
      ...dashboardRoutes,
      ...dataRoutes,
    ],
  }],
});
