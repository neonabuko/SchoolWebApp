import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/Teachers', name: 'Teachers', component: () => import('../views/Teachers.vue') },
    { path: '/Interactive-Classes', name: 'Interactive Classes', component: () => import('../views/InteractiveClasses.vue') },
    { path: '/Interactive-Groups/:groupId', name: 'Interactive Group', component: () => import('../views/InteractiveGroup.vue') },
    { path: '/Students/:studentId', name: 'Student', component: () => import('../views/Student.vue') },
    { path: '/Admin-Center', name: 'Admin Center', component: () => import('../views/AdminCenter.vue') },
    { path: '/MainForm/:entityIndex', name: 'MainForm', component: () => import('../views/manage/MainForm.vue') },
    { path: '/MainTable/:entityId', name: 'MainTable', component: () => import('../views/manage/MainTable.vue') },
  ];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router