import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)
/*Page Imports*/
import Home from "@/pages/Home";
import Buttons from "@/pages/Buttons";
import Sections from "@/pages/Sections";
import StaticWidgets from "@/pages/StatisticWidgets";

const router = new VueRouter({
    routes : [
        {path:'/',component:Home},
        {path:'/buttons',component:Buttons},
        {path:'/sections',component:Sections},
        {path:'/statistic-widgets',component:StaticWidgets},
    ],
    mode:'history'
})

export default router