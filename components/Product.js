import Link from 'next/link';
import formatMoney from '../utils/formatMoney';

export default function Product({ product }) {
  return (
    <div className="bg-white flex flex-col relative">
      <Link href={`/product/${product.id}`}>
        <a>
          <img
            src={product.photo._meta.url}
            alt={product.name}
            className="w-full h-96 object-cover"
          />
        </a>
      </Link>
      <h3 className="mb-8 text-center -skew-x-6 -rotate-1 -mt-12">
        <Link href={`/product/${product.id}`}>
          <a className="bg-red-500 inline text-5xl md:text-6xl font-bold text-white px-2 py-4 leading-relaxed md:leading-normal">
            {product.name}
          </a>
        </Link>
      </h3>
      <span className="bg-red-500 rotate-3 font-semibold p-1 text-white text-3xl  inline-block absolute -right-1">
        {formatMoney(product.price)}
      </span>
      <p className="grow px-6 text-lg text-center font-bold">
        {product.description}
      </p>
    </div>
  );
}
