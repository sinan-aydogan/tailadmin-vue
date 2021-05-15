import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)
/*Page Imports*/
import Home from "@/pages/Home";
import Button from "@/pages/Button";
import Sections from "@/pages/Sections";
import StaticWidgets from "@/pages/StatisticWidgets";
import Charts from "@/pages/Charts";
import Table from "@/pages/Table";
import Avatar from "@/pages/Avatar";
import Login from "@/pages/Login";
import Alert from "@/pages/Alert";
import Badge from "@/pages/Badge";
import Breadcrumb from "@/pages/Breadcrumb";

/*Error Pages*/
// import error404 from '@/pages/error/error404'
import UnderConstruction from "@/pages/error/UnderConstruction";

const router = new VueRouter({
    routes : [
        {path:'/',component:Home},
        {path:'/button',component:Button},
        {path:'/sections',component:Sections},
        {path:'/statistic-widgets',component:StaticWidgets},
        {path:'/charts',component:Charts},
        {path:'/table',component:Table},
        {path:'/avatar',component:Avatar},
        {path:'/login',component:Login},
        {path:'/alert',component:Alert},
        {path:'/badge',component:Badge},
        {path:'/breadcrumb',component:Breadcrumb},
        {path:'*',component:UnderConstruction},
    ],
    mode:'history'
})

export default router