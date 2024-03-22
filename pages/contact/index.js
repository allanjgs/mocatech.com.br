import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import Circles from '/components/Circles';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import Whatsapp from '../../components/Whatsapp';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [formError, setFormError] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'O nome é obrigatório';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'O telefone é obrigatório';
    }
    if (!formData.email.trim()) {
      errors.email = 'O e-mail é obrigatório';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Insira um e-mail válido';
    }
    if (!formData.message.trim()) {
      errors.message = 'A mensagem é obrigatória';
    }

    setFormError(errors);

    return Object.keys(errors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Configuração do emailjs - Substitua com suas próprias credenciais
    const serviceId = 'service_gbdwpqd';
    const templateId = 'template_vm8el5z';
    const userId = '93t9NOuiVFKcqAXJE';

    emailjs
      .send(serviceId, templateId, formData, userId)
      .then((response) => {
        alert('E-mail enviado com sucesso, agradeçemos seu contato.', response);
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: '',
        });
        setFormError({});
      })
      .catch((error) => {
        alert('Erro ao enviar e-mail, tente nos contatar pelo WhatsApp.', error);
      });
  };

  return (
    <div className='h-full bg-primary/90'>
      <div className='container mx-auto py-32 text-center xl-text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px]'>
          <motion.h2
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12'
          >
            Entre em <span className='text-accent'>Contato.</span>
          </motion.h2>


          {/* Formulário */}
          <motion.form
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
            onSubmit={handleSubmit}
          >
            <div className='flex gap-x-6 w-full'>
              <input
                className={`input ${formError.name && 'border-red-500'
                  }`}
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Seu nome'
              />
              {formError.name && (
                <p className='text-red-500 text-sm mt-1'>{formError.name}</p>
              )}

              <input
                className={`input ${formError.phone && 'border-red-500'
                  }`}
                type='text'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                placeholder='Seu Telefone'
              />
              {formError.phone && (
                <p className='text-red-500 text-sm mt-1'>{formError.phone}</p>
              )}
            </div>
            <input
              className={`input ${formError.email && 'border-red-500'
                }`}
              type='text'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Seu Email'
            />
            {formError.email && (
              <p className='text-red-500 text-sm mt-1'>{formError.email}</p>
            )}
            <textarea
              className={`textarea ${formError.message && 'border-red-500'
                }`}
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='Deixe sua mensagem'
            ></textarea>
            {formError.message && (
              <p className='text-red-500 text-sm mt-1'>{formError.message}</p>
            )}
            <button
              type='submit'
              className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'
            >
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
