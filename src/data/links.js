import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'
import Search from '../components/Search'
import Products from '../components/product/Products'
import ProductDetail from '../components/product/ProductDetail'
import NotFound from '../components/base/404'

const links = [
    { link: '/', title: 'HOME /', component: Home, isExact: true, isLink: true },
    { link: '/products', title: ' MENU /', component: Products, isExact: true, isLink: true },
    { link: '/products/:productID', title: 'Product Detail', component: ProductDetail, isExact: false, isLink: false },
    { link: '/about', title: ' ABOUT /', component: About, isExact: true, isLink: true },
    { link: '/contact', title: ' CONTACT ', component: Contact, isExact: true, isLink: true },
    { link: ' ', title: '404', component: NotFound, isExact: false, isLink: false },
    { link: "/search", title: "Search", component: Search, isExact: false, isLink: false },
];

export default links