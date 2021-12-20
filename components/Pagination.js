import Link from 'next/link';

export default function Pagination({ page, count, pageCount }) {
  return (
    <div className="text-center inline-grid grid-cols-4 items-stretch justify-center content-center my-8 border border-gray-300 rounded-lg font-bold">
      <Link href={`/products/${page - 1}`}>
        <a className="pagination-item" aria-disabled={page <= 1}>
          ⬅️ Prev
        </a>
      </Link>
      <p className="pagination-item">
        Page {page} of {pageCount}
      </p>
      <p className="pagination-item">{count} Items Total</p>
      <Link href={`/products/${page + 1}`}>
        <a className="pagination-item" aria-disabled={page == pageCount}>
          Next ➡️
        </a>
      </Link>
    </div>
  );
}
