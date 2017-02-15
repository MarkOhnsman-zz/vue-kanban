import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Board from '../components/Board'

Vue.use(Router)


let router = new Router({
    routes:[
        {name: 'Home', path:'', component: Home },
        {name: 'Board', path:'/boards/:boardTitle', component: Board}
    ]
})




export default router








