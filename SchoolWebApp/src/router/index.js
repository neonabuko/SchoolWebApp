import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    { path: '/',                       name: 'Home',         component: () => import('../views/Home.vue') },
    { path: '/groups/:groupId',        name: 'Group',        component: () => import('../views/Group.vue') },
    { path: '/admin',                  name: 'Admin Center', component: () => import('../views/AdminCenter.vue') },
    { path: '/admin/:entityId',        name: 'MainTable',    component: () => import('../views/MainTable.vue') },
    { path: '/admin/add/:entityIndex', name: 'MainForm',     component: () => import('../views/MainForm.vue') }
  ];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router