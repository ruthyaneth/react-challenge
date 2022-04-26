import Search from './sections/search/search';
import ProductList from  './sections/product-list/product-list';
import ProductDetail from './sections/detail-products/detail-products';

const pathRoutes = () => ({
	[`/`]: {component: Search},
    [`items/search=:q`]: {component: ProductList},
    [`items/:id`]: {component: ProductDetail}
});

export {
	pathRoutes as routes,
};