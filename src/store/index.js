import Vue from 'vue'
import Vuex from 'vuex'

// import mutations from './mutations.js'
// import actions from './actions.js'
import { fetchUserInfo,fetchItem, fetchList} from '../api/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        user:{},
        item:{},
        list:[]    
    },
    getters:{
        //함수명만 바로 들고 오기 좋게
       
        fetchedUser(state){
            return state.user;
        },
        fetchedItem(state){
            return state.item;
        }
    },
    mutations:{
        
        SET_USER(state, user){
            state.user = user
        },
        SET_ITEM(state,item){
            state.item = item
        },
        SET_LIST(state, list){
            state.list = list
        }
    },
    actions:{
        
        FETCH_USER({commit}, name){
            return fetchUserInfo(name)
                .then(({data})=>{
                commit('SET_USER',data)  
                })
        },
        FETCH_ITEM({commit}, id){
            return fetchItem(id)
                .then(({data})=>{
                    console.log(data);
                    commit('SET_ITEM',data)
                })
        },
        FETCH_LIST({commit}, pageName){
            //2번째
            console.log(2);
            return fetchList(pageName)
                .then(response=>{
                    //4번째
                    console.log(4);
                    commit('SET_LIST',response.data)
                    return response;
                })
            .catch((error)=>{console.log(error)})
        }
    }
})