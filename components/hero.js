import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex h-[80vh] justify-between mt-16 w-full">
      <div className="hidden lg:block">
        <Image src="/aset/bghero.webp" alt="bghero" width={470} height={600} />
      </div>

      <div className="flex flex-col justify-center max-w-[42rem]">
        <h1 className="font-['Mali'] text-[2rem] font-bold text-[#E11181] sm:text-[3rem]">
          TAMBAH USIA TERLIHAT SEMAKIN MUDA
        </h1>
        <p className="mt-1 text-[#434343] font-['Lato'] text-[1rem] w-[35ch] sm:text-[1.75rem] sm:mt-4 sm:leading-[3rem]">
          Halaman ini akan membuat Anda seperti influencer dengan jutaan
          follower
        </p>
        <button className="py-2 px-3 sm:py-4 sm:px-4 rounded-lg bg-[#EFBCC2] w-[20ch] mt-4 hover:bg-[#FF1C96] hover:text-white sm:mt-6">
          <a href="#produk">Jangan Ketinggalan</a>
        </button>
      </div>
    </section>
  );
};

export default Hero;
