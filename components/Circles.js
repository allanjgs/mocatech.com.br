import Image from "next/image";

const Circles = () => {
  return <div
    className="w-52 xl:w-80 absolute -right-16 -bottom-2 duration-75 z-10 mix-blend-lighten">
    <Image
      src={'/circles.png'}
      width={260}
      height={200}
      className="w-full h-full"
      alt="Elemento de fundo" />
  </div>;
};

export default Circles;
