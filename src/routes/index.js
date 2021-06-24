import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '../views/NewsView.vue'
import JobsView from '../views/JobsView.vue'
import AskView from '../views/AskView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'

//npm i vue-router --save 
Vue.use(VueRouter);

export const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            redirect:'/news'
        },
        {
            //url 주소
            path:'/news',
            //url에 해당하는 컴포넌트
            component:NewsView,

        },
        {
            //url 주소
            path:'/ask',
            //url에 해당하는 컴포넌트
            component:AskView,

        },
        {
            //url 주소
            path:'/job',
            //url에 해당하는 컴포넌트
            component:JobsView,

        },
        {
            //url 주소
            path:'/user',
            //url에 해당하는 컴포넌트
            component:UserView,

        },
        {
            //url 주소
            path:'/item',
            //url에 해당하는 컴포넌트
            component:ItemView,

        },

    ]
});

