import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)
/*Page Imports*/
import Home from "@/pages/Home";
import Buttons from "@/pages/Buttons";
import Sections from "@/pages/Sections";
import StaticWidgets from "@/pages/StatisticWidgets";
import Charts from "@/pages/Charts";
import Table from "@/pages/Table";
import Avatar from "@/pages/Avatar";
import Login from "@/pages/Login";

/*Error Pages*/
// import error404 from '@/pages/error/error404'
import UnderConstruction from "@/pages/error/UnderConstruction";

const router = new VueRouter({
    routes : [
        {path:'/',component:Home},
        {path:'/buttons',component:Buttons},
        {path:'/sections',component:Sections},
        {path:'/statistic-widgets',component:StaticWidgets},
        {path:'/charts',component:Charts},
        {path:'/table',component:Table},
        {path:'/avatar',component:Avatar},
        {path:'/login',component:Login},
        {path:'*',component:UnderConstruction},
    ],
    mode:'history'
})

export default router