import emailjs from 'emailjs-com';
import Circles from '/components/Circles';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import Whatsapp from '../../components/Whatsapp';

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('seu_service_id', 'seu_template_id', e.target, 'seu_user_id')
      .then((result) => {
        console.log(result.text);
        // Adicione lógica para lidar com o sucesso do envio (por exemplo, exibindo uma mensagem)
      }, (error) => {
        console.log(error.text);
        // Adicione lógica para lidar com erros de envio (por exemplo, exibindo uma mensagem de erro)
      });
  };

  return (
    <div className='h-full bg-primary/90'>
      <div className='container mx-auto py-32 text-center xl-text-left flex
      items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px]'>
          <motion.h2
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12'>
            Entre em <span className='text-accent'>Contato.</span>
          </motion.h2>
          <motion.form
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate='show'
            exit='hidden'
            onSubmit={sendEmail}
            className='flex-1 flex flex-col gap-6 w-full mx-auto'>
            <div className='flex gap-x-6 w-full'>
              <input type="text" name='nome' placeholder='Nome' className='input' />
              <input type="text" name='email' placeholder='E-mail' className='input' />
            </div>
            <input type="text" name='telefone' placeholder='Telefone' className='input' />
            <textarea name='mensagem' placeholder='Mensagem' className='textarea'></textarea>
            <button type='submit' className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center
            overflow-hidden hover:border-accent group'>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 text-accent'>Enviar</span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
            </button>
          </motion.form>
          <Whatsapp />
        </div>
      </div>
    </div>
  );
};

export default Contact;
