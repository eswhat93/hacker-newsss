const storage = {
    fetch(){
        const arr=[];
        if(localStorage.length>0){
            for(let i=0;i<localStorage.length;i++){
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
        return arr;
    },
};


const state = {
    commentItems:storage.fetch()
},
getters = {
    storedCommentItems(state){
      return state.commentItems;
    }
},
mutations={
    addComment(state, commentItem){
        const time = Date();
        const obj = {item:commentItem, date:time}
        localStorage.setItem(commentItem, JSON.stringify(obj));
        state.commentItems.push(obj);
    }
}

export default{
    state,
    getters,
    mutations
}

