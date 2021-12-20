import Header from './Header';

export default function Page({ children }) {
  return (
    <div>
      <Header />
      <div className="container mx-auto p-4 text-center">{children}</div>
    </div>
  );
}
