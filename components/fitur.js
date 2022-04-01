import Image from "next/image";

const Fitur = () => {
  return (
    <section className="py-8 md:mt-16">
      <Image
        src="/aset/bgproduk.jpg"
        alt="Produk"
        className="rounded-lg xl:w-full"
        width={1500}
        height={390}
      />
      <ul className="list-none font-['Lato'] mt-4 flex flex-col gap-2 md:flex-row">
        <li className="bg-[#FCD9D9] py-6 px-2 border-l-8 border-solid border-[#FFA8B1] rounded-lg sm:py-12 sm:px-4 sm:text-[1.25rem] sm:border-l-[.75rem]">
          <span className="text-[#E11181]">Scarlett Whitening.</span> Produk
          Asli dan 100% Sertifikasi BPOM
        </li>
        <li className="bg-[#FCD9D9] py-6 px-2 border-l-8 border-solid border-[#FFA8B1] rounded-lg sm:py-12 sm:px-4 sm:text-[1.25rem] sm:border-l-[.75rem]">
          <span className="text-[#E11181]">Mudah dicari. </span>
          Tersedia di marketplace terkenal
        </li>
        <li className="bg-[#FCD9D9] py-6 px-2 border-l-8 border-solid border-[#FFA8B1] rounded-lg sm:py-12 sm:px-4 sm:text-[1.25rem] sm:border-l-[.75rem]">
          <span className="text-[#E11181]">
            Kualitas tentu tidak diragukan lagi.
          </span>{" "}
          Biar produk yang bicara
        </li>
      </ul>
    </section>
  );
};

export default Fitur;
