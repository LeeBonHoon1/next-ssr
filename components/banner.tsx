import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative w-full h-[300px]">
      <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
      <Image
        src={"/images/team.jpeg"}
        fill
        alt="banner"
        objectFit="cover"
        className="opacity-60"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-white text-3xl font-bold">Hanteo global</h2>
      </div>
    </div>
  );
};

export default Banner;