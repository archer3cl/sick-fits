import Head from 'next/head';
import { getProduct, productFilePaths } from '../../utils/productsUtils';

export default function SingleProductPage({ product }) {
  return (
    <div className="grid auto-cols-fr grid-flow-col justify-center items-start gap-8">
      <Head>
        <title>Sick Fits | {product.name}</title>
      </Head>
      <img
        src={product.photo._meta.url}
        alt={product.name}
        className="w-full object-contain"
      />
      <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export async function getStaticProps(ctx) {
  const product = getProduct(ctx.params.id);
  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const productsId = productFilePaths.map((filename) =>
    filename.replace('.json', '')
  );
  const paths = productsId.map((id) => `/product/${id}`);
  return {
    paths,
    fallback: false,
  };
}
