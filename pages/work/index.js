// components
import WorkSlider from './../../components/WorkSlider';
import Bulb from './../../components/Bulb';
import Circles from './../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants'
import Botao from '../../components/Botao';


const Work = () => {
  return (
    <div className='h-full bg-primary/90 py-36 flex items-center'>
      <Circles />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          {/* texto */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              animate='show'
              exit='hidden'
              className='h2 xl:mt-12'
            >
              Nossos <span className='text-accent'>Trabalhos.</span>
            </motion.h2>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate='show'
              exit='hidden'
              className='mb-4 max-w-[400px] mx-auto lg:mx-0 lg:text-xl '>
              <p>
                Você quer ter um site que seja bonito, funcional e que atraia clientes?
              </p>
              <Botao />
            </motion.div>
          </div>
          {/* slider */}
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial="hidden"
            animate='show'
            exit='hidden'
            className='w-full xl:max-w-[65%]'
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;