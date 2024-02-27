//componentes
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import Botao from "../components/Botao";

//type animation
import { TypeAnimation } from 'react-type-animation'

//framer motion
import { motion } from "framer-motion";

//variantes
import { fadeIn } from "../variants";
import Whatsapp from "../components/Whatsapp";

const Home = () => {
  return (
    <div className="bg-primary h-full">
      <div className="bg-none lg:bg-explosion lg:bg-cover lg:bg-right lg:bg-no-repeat w-full h-full absolute mix-blend-lighten  translate-z-0 ">
        {/* texto */}
        <div className="w-full h-full ">
          <div className="text-center flex flex-col justify-center -mt-28 xl:pt-40 lg:text-left h-full container mx-auto">
            {/* title */}
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="lg:text-5xl xl:text-7xl text-2xl"
            >
              <h1 className="text-5xl lg:text-6xl xl:text-8xl font-semibold uppercase leading-[1] ">
                MOCATECH
              </h1>
              <span className='text-white mr-4'> seu</span>
              <br className="hidden " />
              <TypeAnimation sequence={[
                'Desenvolvedor',
                2000,
                'Desing',
                2000,
                'Consultor',
                2000
              ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            {/* subtitilo */}

            <motion.p
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-sm lg:max-w-xl mx-auto lg:mx-0 mb-10 xl:mb-16 mt-4 text-xl"
            >
              Transformamos ideias em realidade digital.
            </motion.p>

            {/* btn */}
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden lg:flex relative"
            >
              <ProjectsBtn className='absolute z-10 p-2' />
            </motion.div>

          </div>
        </div>
        {/* imagem */}
        <div className="w-[1200px] h-full absolute right-0 bottom-0">
          {/* bg image */}

          {/* particulas */}
          <ParticlesContainer />
          {/* avatar img*/}

        </div>

      </div>

      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
      >
        <Avatar />
      </motion.div>

      <Whatsapp className='delay-1000' />
      <div className="fixed z-50  bottom-[25%] lg:hidden flex gap-x-3 group w-full">
        <ProjectsBtn className='fixed ' />
      </div>

    </div>

  );
};

export default Home;
