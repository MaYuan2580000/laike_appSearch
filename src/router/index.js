import Vue from 'vue'
import Router from 'vue-router'
import { Toast } from 'vant';
import {getCookie} from '../utlis/auth'
Vue.use(Router)
Vue.use(Toast);

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'Shouye',
            component: () => import('../page/shouye.vue')

        },
        {
            path: '/classIfy',
            name: 'classIfy',
            component: () => import('../page/classify.vue')
        },
        {
            path: '/shoppingCar',
            name: 'shoppingCar',
            component: () => import('../page/shoppingcar.vue')
        },
        {
            path: '/persoNal',
            name: 'persoNal',
            component: () => import('../page/personal.vue')
        },
        {
            path: '/goodsDetailed',
            name: 'goodsDetailed',
            component: () => import('../page/goodsDetailed.vue')
        },
        {
            path: '/serachpage',
            name: 'serachpage',
            component: () => import('../page/serachpage.vue')
        },
        {
            path: '/searchResult',
            name: 'searchResult',
            component: () => import('../page/searchResult.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../page/login.vue')
        },
        {
            path: '/register',
            name: 'login',
            component: () => import('../page/register.vue')
        },
        {
            path: '/jiazai',
            name: 'jiazai',
            component: () => import('../page/jiazai.vue')
        },
        {
            path: '/evaluate',
            name: 'evaluate',
            component: () => import('../page/evaluate.vue')
        },
        {
            path: '/Assemble',
            name: 'Assemble',
            component: () => import('../page/Assemble.vue')
        }
    ]
})
router.beforeEach(function (to, from, next) {
    const nexRouter = ['shoppingCar'];
    // console.log(getCookie('key'))
    if (nexRouter.indexOf(to.name) >= 0) {
        if (!getCookie('key')) {
            Toast('您还未登录，请登录！');
            router.push({ name: 'login' })
        }
    }
    if (to.name === 'login') {
        if (getCookie('key')) {
            router.push({ name: 'Shouye' })
        }
    }
    next()
})
export default router



  // path:'/',
            // name:'Home',
            // component:Home,
            // redirect:'/Shouye',
            // children:[
            //     {
            //         path:'/Shouye',
            //         name:'Shouye',
            //         component:Shouye,
            //         meta: {
            //             // 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
            //             index: 0,
            //             showFooter: true
            //         }
            //     },
            //     {
            //         path:'/classIfy',
            //         name:'classIfy',
            //         component:classIfy,
            //         meta: {
            //             // 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
            //             index: 0,
            //             showFooter: true
            //         }
            //     },
            //     {
            //         path:'/shoppingCar',
            //         name:'shoppingCar',
            //         component:shoppingCar
            //     },
            //     {
            //         path:'/persoNal',
            //         name:'persoNal',
            //         component:persoNal
            //     },
            //     {
            //         path:'/Home/goodsDetailed',
            //         name:'goodsDetailed',
            //         component:goodsDetailed,
            //         meta: {
            //             // 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
            //             index: 0,
            //             showFooter: false
            //         }
            //     }
            // ]