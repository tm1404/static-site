import Image from "next/image";
import Link from "next/link";

const Products = () => {
  return (
    <section className="font-['Lato'] md:mt-24">
      <h2 className="text-lg font-bold text-[#FF59CA]" id="produk">
        Produk
      </h2>
      <div className="flex flex-col mt-8 xl:mt-32 sm:flex-row sm:justify-between sm:gap-16 xl:justify-around">
        <Image
          src="/aset/fitur1.webp"
          width={430}
          height={450}
          className="lg:w-[30rem] w-[15rem]"
          alt="produk ke satu"
          priority
        />
        <ul className="list-none mt-4 flex flex-col gap-4 md:text-2xl md:gap-8">
          <li>Tidak ada rasa kusam lagi</li>
          <li>Membersihkan jerawat pada muka</li>
          <li>Bukan hanya good looking. juga menambah percaya diri</li>
          <li>Harga tidak sampai 10% UMR</li>
          <li>
            <button className="py-2 px-4 rounded-lg bg-white border-solid border-2 border-[#EFBCC2] mt-2 hover:bg-[#FF1C96] hover:text-white md:py-4 md:px-8">
              <Link href="https://shope.ee/UQNh0djk">
                <a>Miliki Sekarang</a>
              </Link>
            </button>
          </li>
        </ul>
      </div>
      <div className="flex flex-col mt-8 xl:mt-16 pt-4 sm:flex-row-reverse sm:justify-between xl:justify-around">
        <Image
          width={430}
          height={450}
          src="/aset/fitur2.webp"
          className="lg:w-[30rem] w-[15rem]"
          alt="produk ke dua"
          priority
        />
        <ul className="list-none mt-4 flex flex-col gap-4 md:text-2xl md:gap-8">
          <li>Kulit wajah akan terasa elastis</li>
          <li>Solusi untuk garis halus wajah Anda</li>
          <li>Dipakai saat malam hari</li>
          <li>Harga tidak sampai 10% UMR</li>
          <li>
            <button className="py-2 px-4 rounded-lg bg-white border-solid border-2 border-[#EFBCC2] mt-2 hover:bg-[#FF1C96] hover:text-white md:py-4 md:px-8">
              <Link href="https://shope.ee/AJucgnBT6W">
                <a>Miliki Sekarang</a>
              </Link>
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Products;
