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
    //url 해시값 제거
    mode:'history',
    //라우터 모듈화 해보기
    routes:[
        {
            path:'/',
            redirect:'/news'
        },
        {
            //url 주소
            path:'/news',
            //url에 해당하는 컴포넌트
            name:'news',
            component:NewsView,

        },
        {
            path:'/ask',
            name:'ask',
            component:AskView,

        },
        {
            path:'/jobs',
            name:'jobs',
            component:JobsView,

        },
        {
            path:'/user/:id',
            name:'user',
            component:UserView,

        },
        {
            path:'/item/:id',
            name:'item',
            component:ItemView,

        },

    ]
});

