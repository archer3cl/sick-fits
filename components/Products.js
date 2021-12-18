import Product from './Product';

export default function Products({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-14 px-2">
      {data.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
