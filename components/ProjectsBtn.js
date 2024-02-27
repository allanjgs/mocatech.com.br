//next imagem
import Image from "next/image";

//next links
import Link from "next/link";

//icones
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto lg:mx-0 ">
      <Link href={'/work'} className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group ">
        <Image src={'/rounded-text.png'} width={152} height={152} alt="" className="animate-spin-slow w-full h-full max-w-[152px] max-h-[152px]"/> 
        <HiArrowRight className="absolute text-4xl group-hover:scale-125 transition-all duration-300"/>
      </Link>
    </div>
  );
};

export default ProjectsBtn;
