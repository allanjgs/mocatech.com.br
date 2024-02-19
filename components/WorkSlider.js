// data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
      ],
    },
    //para adicionar mais paginas é só colocar aqui 
    // {
    //   images: [
    //     {
    //       title: 'title',
    //       path: '/thumb4.jpg',
    //     },
    //     {
    //       title: 'title',
    //       path: '/thumb1.jpg',
    //     },
    //     {
    //       title: 'title',
    //       path: '/thumb2.jpg',
    //     },
    //     {
    //       title: 'title',
    //       path: '/thumb3.jpg',
    //     },
    //   ],
    // },
  ],
};

//import 
import { Swiper, SwiperSlide } from 'swiper/react'

//import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

//import required modules
import { Pagination } from 'swiper'

//icons
import { BsArrowRight } from 'react-icons/bs'

//image
import Image from 'next/image';

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className='relative rounded-lg overflow-hidden flex items-center justify-center group'>
                    <div className='flex items-center justify-center relative overflow-hidden group'>
                      {/* image */}
                      <Image src={image.path} width={500} height={300} alt='' className='group-hover:scale-125 transition-all duration-500' />
                      {/* overlay gradient */}
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#17222d] to-[#101820] 
                      opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                      {/* title */}
                      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 
                      group-hover:xl:-translate-y-20 transition-all duration-300'>
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em] '>
                          {/* title part 1 */}
                          <div className='delay-100'>Conheça o Projeto</div>
                          {/* icon */}
                          <div className='text-2xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-200 delay-200 animate-pulse text-accent '>
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper >
  );
};

export default WorkSlider;
