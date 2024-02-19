import Link from "next/link";

//icones
import {
  RiMailLine,
  RiLinkedinBoxLine,
  RiInstagramLine,
  RiFacebookBoxLine,
  RiGithubLine
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="items-center flex gap-x-5 text-xl xl:text-3xl">
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiFacebookBoxLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiLinkedinBoxLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiMailLine />
      </Link>
    </div>
  );
};

export default Socials;
