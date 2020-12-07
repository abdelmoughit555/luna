import Home from "../pages/Home"
import Products from "../pages/Products"

export default [
    {
        path: '/',
        component: Home,
        name: "home"
    }, {
        path: '/products',
        component: Products,
        name: "products"
    }];
