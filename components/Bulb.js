import Image from "next/image";

const Bulb = () => {
  return <div className="absolute -left-36 -bottom-12 rotate-12 mix-blend-difference animate-pulse duration-75 z-10 w-52 xl:w-72">
    <Image
      src={'/bulb.png'}
      width={260}
      height={200}
      alt=""
      className="w-full h-full"
    />
  </div>;
};

export default Bulb;
