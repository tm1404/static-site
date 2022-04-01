import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-[#FFD6F2]">
      <nav className="container mx-auto p-4 sm:px-0 flex justify-between font-['Mali']">
        <h1 className="pointer-events-none">SelamatDatang</h1>
        <Link href="#produk">
          <a className="underline">Produk</a>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
