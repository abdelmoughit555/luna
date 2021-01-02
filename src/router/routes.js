import Home from "../pages/Home"
import Products from "../pages/Products"
import Product from "../pages/Product"
import Login from "../pages/Login"
import Cart from "../pages/Cart"
import Blogs from "../pages/Blogs"
import Blog from "../pages/Blog"
import Contact from "../pages/Contact"

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
    }, {
        path: '/blogs',
        component: Blogs,
        name: "blogs"
    }, {
        path: "/blog",
        component: Blog,
        name: "blog"
    }, {
        path: "/contact",
        component: Contact,
        name: "contact"
    }];
