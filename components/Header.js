import Link from 'next/link';
import Nav from './Nav';

export default function Header() {
  return (
    <header>
      <div className="border-b-8 border-solid border-black grid justify-between items-stretch grid-cols-[auto_1fr]">
        <h1 className="bg-red-500 ml-5 my-6 relative skew-x-[-7deg] font-bold text-5xl leading-snug tracking-wider">
          <Link href="/">
            <a className="text-white uppercase px-4">Sick Fits</a>
          </Link>
        </h1>
        <Nav />
      </div>
      <div className="grid grid-cols-[1fr_auto] border-b border-solid border-black">
        <p>Search</p>
      </div>
    </header>
  );
}
