import Vue from 'vue'
import Vuex from 'vuex'

// import mutations from './mutations.js'
// import actions from './actions.js'
import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo,fetchItem} from '../api/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        news:[],
        jobs:[],
        ask:[],
        user:[],
        item:[]    
    },
    getters:{
        //함수명만 바로 들고 오기 좋게
        fetchedNews(state){
            return state.news;
        },
        fetchedJob(state) {
            return state.jobs 
        },
        fetchedAsk(state){
            return state.ask;
        },
        fetchedUser(state){
            return state.user;
        },
        fetchedItem(state){
            return state.item;
        }
    },
    mutations:{
        SET_NEWS(state, news){
            state.news = news;
        },
        SET_JOBS(state, jobs){
            state.jobs = jobs;
        },
        SET_ASK(state,ask){
            state.ask = ask;
        },
        SET_USER(state, user){
            state.user = user
        },
        SET_ITEM(state,item){
            state.item = item
        }
    },
    actions:{
        FETCH_NEWS(context){
            fetchNewsList()
            .then(response =>{
                context.commit('SET_NEWS', response.data);
            })
            .catch(error=>{
                console.log(error);
            })
        },
        FETCH_JOBS({commit}){
            fetchJobsList()
            .then(({data}) =>{
                commit('SET_JOBS', data);
                console.log(data)
            })
            .catch(error=>{
                console.log(error);
            })
        },
        FETCH_ASK({commit}){
            fetchAskList()
            .then(({data})=>{
                commit('SET_ASK', data)
                console.log(data)
            })
            .catch(error=>{
                console.log(error);
            })
        },
        FETCH_USER({commit}, name){
            fetchUserInfo(name)
            .then(({data})=>{
              commit('SET_USER',data)  
            })
        },
        FETCH_ITEM({commit}, id){
            fetchItem(id)
            .then(({data})=>{
                commit('SET_ITEM',data)
            })
        }
    }
})