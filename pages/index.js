import Products from '../components/Products';
import { getProducts } from '../utils/productsUtils';

export default function IndexPage({ products }) {
  return <Products data={products} />;
}

export async function getStaticProps() {
  const products = getProducts();
  return {
    props: {
      products,
    },
  };
}
