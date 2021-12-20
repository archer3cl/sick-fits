import Pagination from '../components/Pagination';
import Products from '../components/Products';
import { getProducts } from '../utils/productsUtils';

export default function IndexPage({ products, page, count, pageCount }) {
  return (
    <>
      <Pagination page={page} count={count} pageCount={pageCount} />
      <Products data={products} />
      <Pagination page={page} count={count} pageCount={pageCount} />
    </>
  );
}

export async function getStaticProps(ctx) {
  const currentPage = ctx.params?.currentPage;
  const currentPageNumber = +(currentPage || 1);
  const min = (currentPageNumber - 1) * 4;
  const max = currentPageNumber * 4;

  const products = getProducts();
  const count = products.length;
  const pageCount = Math.ceil(count / 4);

  return {
    props: {
      products: products.slice(min, max),
      count,
      pageCount,
      page: currentPageNumber,
    },
  };
}
