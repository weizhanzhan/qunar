import Home from '../pages/home/Home'
import City from '../pages/city/city'
import Detail from '../pages/detail/detail'

export default[
    { path:'/',component:Home,name:"首页"},
    { path:'/city', component:City,name:"城市"},
    { path:'/detail/:id', component:Detail,name:"详情"} 
]
 