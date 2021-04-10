import { createRouter, createWebHistory } from "vue-router";
import store from '../store/index'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
          path: '/', redirect: '/coaches'
        },
        {
            path: '/coaches', component: () => import('../pages/coaches/CoachList')
        },
        {
            path: '/coaches/:id', component: () => import('../pages/coaches/CoachDetails'), props: true, children: [
                { path: 'contact',  component: import('../pages/requests/ContactCoach')}
            ]
        },
        {
            path: '/register', component: () => import('../pages/coaches/CoachRegistation'),
            meta: {requirseAuth: true}
        },
        {
            path: '/requests', component: () => import('../pages/requests/RequestReceived'),
            meta: {requiresAuth: true}
        },
        {
            path: '/auth', component: () => import('../auth/UserAuth'),
            meta: {requiresUnauth: true }
        },
        {
            path: '/:notFound(.*)', component: () => import('../pages/NotFound')
        }
    ],
    linkActiveClass: 'active'
})

router.beforeEach((to, _,next)=>{
    console.log(store)
    console.log(store.getters.isAuthenticated)
    if(to.meta.requiresAuth && !store.getters['auth/isAuthenticated']){
        console.log('a')
        next('/auth')
    }else if(to.meta.requiresUnauth && store.getters['auth/isAuthenticated']){
        console.log('aa')
        next('/coaches')
    }else{
        console.log('aaa')
        next()
    }
})
export default router
