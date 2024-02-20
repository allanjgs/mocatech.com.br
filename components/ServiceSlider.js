//import 
import { Swiper, SwiperSlide } from 'swiper/react'

//import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight
} from "react-icons/rx";

//import required modules
import { FreeMode, Pagination } from 'swiper'

// data
const serviceData = [
  {
    icon: <RxDesktop />,
    title: 'Criação de Sites',
    description: 'Criamos sites incríveis que cativam e destacam sua marca.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Seja encontrado, coloque sua marca no topo das buscas.',
  },
  {
    icon: <RxPencil2 />,
    title: 'UX/UI Design',
    description: 'Design intuitivo, excepcional, lindamente funcional.',
  },
  {
    icon: <RxCrop />,
    title: 'Soluções de TI',
    description: 'Soluções completas de TI para sua empresa, do suporte à consultoria.',
  },
  // {
  //   icon: <RxReader />,
  //   title: 'Marketing Digital',
  //   description: 'Estratégias inovadoras e personalizadas, resultados surpreendentes.  ',
  // },

];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },

        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },

      }}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[FreeMode, Pagination]}
      className='h-64 sm:h-[420px]'
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='bg-[#2a3f54]/25 h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group 
            cursor-pointer houver:bg-[#446689] transition-all duration-300'>
              {/* icones */}
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
              {/* titulo e descrição */}
              <div className='mb-8'>
                <div className='mb-2 text-lg'>{item.title}</div>
                <p className='max-w-[350px] lg:h-40 leading-normal'>{item.description}</p>
              </div>
              {/* arrow */}
              <div className='text-3xl'>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300'/>
              </div>
            </div>
          </SwiperSlide>
          );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
