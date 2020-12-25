import Home from "../pages/Home"
import Products from "../pages/Products"
import Product from "../pages/Product"
import Login from "../pages/Login"
import Cart from "../pages/Cart"

export default [
    {
        path: '/login',
        component: Login,
        name: "login"
    },
    {
        path: '/',
        component: Home,
        name: "home"
    },
    {
        path: '/product',
        component: Product,
        name: "product"
    }, {
        path: '/products',
        component: Products,
        name: "products"
    }, {
        path: '/cart',
        component: Cart,
        name: "cart"
    }];
