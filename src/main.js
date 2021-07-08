import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/index.js'
import { store } from './store/index.js'

Vue.config.productionTip = false


new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')

// #1
// render: function(createElement){
//     return createElement(App)
// }
// #2
// render: function(h){
//     return h(App)
// }
// #3
// render:(h)=>{
//     return h(App)
// }
// #4
// render:h=>h(App)