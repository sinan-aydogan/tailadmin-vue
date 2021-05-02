import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)
/*Page Imports*/
import Home from "@/pages/Home";
import Buttons from "@/pages/Buttons";
import Sections from "@/pages/Sections";

const router = new VueRouter({
    routes : [
        {path:'/',component:Home},
        {path:'/buttons',component:Buttons},
        {path:'/sections',component:Sections},
    ],
    mode:'history'
})

export default router