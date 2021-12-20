import IndexPage, { getStaticProps } from '..';
import { getProducts } from '../../utils/productsUtils';

export default IndexPage;
export { getStaticProps };

export async function getStaticPaths() {
  const products = getProducts();
  const pageCount = Math.ceil(products.length / 4);
  const paths = Array.from({ length: pageCount }, (_, index) => {
    return {
      params: {
        currentPage: (index + 1).toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
