import Home from './Home'
import Explore from './Explore'
import Following from './Following'
import Friends from './Friends'
import Live from './Live'
import Messages from './Messages'

// Public routes
const publicRoutes = [
    {path: '/', component: Home},
    {path: '/explore', component:Explore},
    {path: '/live', component:Live},
    
]

// Private routes
const privateRoutes = [
    {path: '/following', component:Following},
    {path: '/friends', component:Friends},
    {path: '/messages', component:Messages},
]

export {publicRoutes, privateRoutes}