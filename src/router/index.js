import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/index/index.vue'
import Resource from '@/views/resource/resource.vue'
import Art from '@/views/art/art.vue'
import History from '@/views/history/history.vue'
import AboutUs from '@/views/aboutUs/aboutUs.vue'
import Document from '@/views/document/document.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/art',
        name: 'Art',
        component: Art
    },
    {
        path: '/history',
        name: 'History',
        component: History
    },
    {
        path: '/resource',
        name: 'Resource',
        component: Resource
    },
    {
        path: '/about',
        name: 'AboutUs',
        component: AboutUs
    },
    {
        path: '/document',
        name: 'document',
        component: Document
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
