import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/interactive-groups/:groupId', name: 'Interactive Group', component: () => import('../views/InteractiveGroup.vue') },
    { path: '/admin', name: 'Admin Center', component: () => import('../views/AdminCenter.vue') },
    { path: '/admin/:entityId', name: 'MainTable', component: () => import('../views/manage/MainTable.vue') },
    { path: '/admin/add/:entityIndex', name: 'MainForm', component: () => import('../views/manage/MainForm.vue') }
  ];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router