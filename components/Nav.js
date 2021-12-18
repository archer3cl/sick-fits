import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/sell">
            <a>Sell</a>
          </Link>
        </li>
        <li>
          <Link href="/orders">
            <a>Orders</a>
          </Link>
        </li>
        <li>
          <Link href="/account">
            <a>Account</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
