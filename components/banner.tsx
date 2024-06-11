import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative w-full h-[180px] md:h-[320px]">
      <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
      <Image
        src={"/images/team.jpeg"}
        fill
        alt="banner"
        style={{ objectFit: "cover" }}
        className="opacity-60"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-white text-3xl font-bold antialiased">
          Hanteo global
        </h2>
      </div>
    </div>
  );
};

export default Banner;
