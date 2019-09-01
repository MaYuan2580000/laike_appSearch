import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/homePage'
import Shouye from '../page/shouye'
import classIfy from '../page/classify'
import shoppingCar from '../page/shoppingcar'
import persoNal from '../page/personal'
import goodsDetailed from '../page/goodsDetailed'
Vue.use(Router)
const router = new Router({
    routes:[
        {
            path:'/',
            name:'Home',
            component:Home,
            redirect:'/Shouye',
            children:[
                {
                    path:'/Shouye',
                    name:'Shouye',
                    component:Shouye,
                    meta: {
                        // 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
                        index: 0,
                        showFooter: true
                    }
                },
                {
                    path:'/classIfy',
                    name:'classIfy',
                    component:classIfy,
                    meta: {
                        // 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
                        index: 0,
                        showFooter: true
                    }
                },
                {
                    path:'/shoppingCar',
                    name:'shoppingCar',
                    component:shoppingCar
                },
                {
                    path:'/persoNal',
                    name:'persoNal',
                    component:persoNal
                },
                {
                    path:'/Home/goodsDetailed',
                    name:'goodsDetailed',
                    component:goodsDetailed,
                    meta: {
                        // 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
                        index: 0,
                        showFooter: false
                    }
                }
            ]
        }
    ]
})
export default router