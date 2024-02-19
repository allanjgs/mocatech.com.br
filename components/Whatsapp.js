import { SiWhatsapp } from "react-icons/si";
import { FaCommentAlt } from "react-icons/fa";
import Link from "next/link";
import { useState, useEffect } from "react";

const Whatsapp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showConsultantBox, setShowConsultantBox] = useState(false);
  const [isPulsating, setIsPulsating] = useState(true);

  useEffect(() => {
    // Definir o tempo de delay para o botão de WhatsApp
    const whatsappDelayTime = 2000;
    const consultantBoxDelayTime = 15000; 
    const pulsatingStopTime = 15000; 

    const whatsappTimeoutId = setTimeout(() => {
      setIsVisible(true);
    }, whatsappDelayTime);

    const consultantBoxTimeoutId = setTimeout(() => {
      setShowConsultantBox(true);
    }, consultantBoxDelayTime);

    const pulsatingStopTimeoutId = setTimeout(() => {
      setIsPulsating(false);
    }, pulsatingStopTime);

    return () => {
      clearTimeout(whatsappTimeoutId);
      clearTimeout(consultantBoxTimeoutId);
      clearTimeout(pulsatingStopTimeoutId);
    };
  }, []);

  return (
    <section className="fixed z-50 right-8 bottom-24 lg:right-8 lg:bottom-8  flex items-center gap-x-3 group">
      <div className="pb-4">
        {showConsultantBox && (
          <Link
            className="flex items-center justify-center text-center p-2 opacity-100  bg-accent rounded-lg transition-opacity duration-1000 ease-in-out filter drop-shadow-lg gap-x-3 animate-bounce shadow-2xl text-xs lg:text-lg"
            href="https://api.whatsapp.com/send?phone=5519996231572&text=Ol%C3%A1%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Mocatech."
            aria-label="Chat on WhatsApp"
            target="_blank"
            rel="noopener noreferrer">
            <FaCommentAlt className="text-lg lg:text-2xl  mr-2 flex-1 animate-pulse" />
            <span>Gostaria de falar com nosso consultor?</span>
          </Link>
        )}
      </div>
      <div className="transition-all duration-500">
        {isVisible && (
          <div className={`flex items-center justify-center text-center rounded-full opacity-100 transition-opacity duration-500 ease-in-out filter drop-shadow-lg mb-5 ${isPulsating ? 'animate-pulse' : ''}`}>
            <Link
              className="flex-1 text-accent transition-all duration-300 "
              href="https://api.whatsapp.com/send?phone=5519996231572&text=Ol%C3%A1%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Mocatech."
              aria-label="Chat on WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiWhatsapp className="text-3xl lg:text-5xl" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Whatsapp;
