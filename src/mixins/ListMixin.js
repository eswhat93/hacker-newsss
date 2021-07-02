import bus from '../utils/bus.js'

export default{
    mounted(){
        bus.$emit('end:spinner');
    }
    //재사용할 컴포넌트 옵션
    // created(){
    //     bus.$emit('start:spinner');
    //     //  setTimeout(()=>{
    //         //1번째
    //         console.log(1);
    //         this.$store.dispatch('FETCH_LIST', this.$route.name)
    //         .then(()=>{
    //             //5번째
    //             console.log(5);
    //             bus.$emit('end:spinner')
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    //     //  },3000)
        
    // }
}

