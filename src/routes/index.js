import Vue from 'vue'
import VueRouter from 'vue-router'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'
import NewsView from '../views/NewsView.vue'
import JobsView from '../views/JobsView.vue'
import AskView from '../views/AskView.vue'

// import createListView from '../views/CreateListView.js'
import bus from '../utils/bus'
import { store } from '../store'

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
            //component:createListView('NewsView'),
            beforeEnter:(to, from, next)=>{
                //to, from , next
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                .then(()=>{
                    // bus.$emit('end:spinner');
                    next();
                })
                .catch(error =>{
                    console.log(error);
                })
            }
        },
        {
            path:'/ask',
            name:'ask',
            component:AskView,
            //component:createListView('AskView'),
            beforeEnter:(to, from, next)=>{
                //to, from , next
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                .then(()=>{
                    // bus.$emit('end:spinner');
                    next();
                })
                .catch(error =>{
                    console.log(error);
                })
            }
            
            
        },
        {
            path:'/jobs',
            name:'jobs',
            component:JobsView,
            //component:createListView('JobsView')
            
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

