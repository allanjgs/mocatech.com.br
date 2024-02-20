// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "Quem Somos", path: "/about", icon: <HiUser /> },
  { name: "Nossos Serviços", path: "/services", icon: <HiRectangleGroup /> },
  { name: "Nosso Portifolio", path: "/work", icon: <HiViewColumns /> },
  // {
  // habilitar quando colocar tiver área de testemunhas
  //   name: "testimonials",
  //   path: "/testimonials",
  //   icon: <HiChatBubbleBottomCenterText />,
  // },
  {
    name: "Contato",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

//next link
import Link from "next/link";

//import router
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav
      className="flex flex-col  items-center lg:justify-center gap-y-4 fixed
  h-max bottom-0 mt-auto lg:right-[2%] z-50 top-0 w-full lg:w-16 lg:max-w-md lg:h-screen "
    >
      {/* inner */}
      <div className="flex w-full lg:flex-col items-center justify-between lg:justify-center gap-y-10 px-4 md:px-40 lg:px-0 h-[80px] bg-white/10 lg:h-max py-8 backdrop-blur-sm text-3xl lg:rounded-full ">
        {navData.map((link, index) => {
          return (
            <Link
              className={`${link.path === pathname && "text-accent"
                } relative flex items-center group hover:text-accent transition-all duration-300`}
              href={link.path}
              key={index}
            >
              {/* tolltip */}
              <div className="absolute pr-14 right-0 hidden lg:group-hover:flex">
                <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>
                  {/* triangle */}
                  <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                </div>
              </div>

              {/* icones */}
              <div>{link.icon}</div>
            </Link>);
        })}
      </div>
    </nav>
  );
};

export default Nav;
