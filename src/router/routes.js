import Home from "../pages/Home"
import Products from "../pages/Products"
import Cart from "../pages/Cart"

export default [
    {
        path: '/',
        component: Home,
        name: "home"
    }, {
        path: '/products',
        component: Products,
        name: "products"
    }, {
        path: '/cart',
        component: Cart,
        name: "cart"
    }];
