import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import InteractiveGroup from '../views/InteractiveGroup.vue';
import Teachers from "../views/Teachers.vue";
import InteractiveClasses from "../views/InteractiveClasses.vue";
import Student from "../views/Student.vue";
import AdminCenter from "../views/AdminCenter.vue";
import MainForm from "../views/manage/MainForm.vue";
import MainTable from "../views/manage/MainTable.vue";

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/Teachers', name: 'Teachers', component: Teachers},
    {path: '/Interactive-Classes', name: 'Interactive Classes', component: InteractiveClasses},
    {path: '/Interactive-Groups/:groupId', name: 'Interactive Group', component: InteractiveGroup},
    {path: '/Students/:studentId', name: 'Student', component: Student},
    {path: '/Admin-Center', name: 'Admin Center', component: AdminCenter},
    {path: '/MainForm/:entityIndex', name: 'MainForm', component: MainForm},
    {path: '/MainTable/:entityId', name: 'MainTable', component: MainTable},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router