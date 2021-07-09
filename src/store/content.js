import { fetchUserInfo,fetchItem, fetchList} from '../api/index.js';

export default{
    namespaced: true,
    name: 'content',
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
        async FETCH_USER(context, name){
            const response = await fetchUserInfo(name);
            context.commit('SET_USER', response.data);
            return response;
        },
        async FETCH_ITEM(context, id){
            const response = await fetchItem(id);
            console.log(response.data);
            context.commit('SET_ITEM', response.data);
            return response;
        },
        //promise
        // FETCH_LIST({commit}, pageName){
        //     //2번째
        //     console.log(2);
        //     return fetchList(pageName)
        //         .then(response=>{
        //             //4번째
        //             console.log(4);
        //             commit('SET_LIST',response.data)
        //             return response;
        //         })
        //     .catch((error)=>{console.log(error)})
        // },
        //async
        async FETCH_LIST(context, pageName){
            const response = await fetchList(pageName);
            context.commit('SET_LIST', response.data);
            return response;
        }
    }
}