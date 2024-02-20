import { BsArrowRight } from "react-icons/bs";

function Botao() {
  return ( 
    <div className='flex flex-col lg:flex-row mt-4 w-full mx-auto items-center justify-center'>
    <a
      href="https://api.whatsapp.com/send?phone=5519996231572&text=Ol%C3%A1%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Mocatech."
      aria-label="Chat on WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
      className='btn rounded-full border border-white/50 max-w-[270px] px-8 transition-all duration-300 flex items-center justify-center
overflow-hidden hover:border-accent group'
    >
      <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 text-accent'>Fale Conosco</span>
      <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
    </a>
  </div>
   );
}

export default Botao;