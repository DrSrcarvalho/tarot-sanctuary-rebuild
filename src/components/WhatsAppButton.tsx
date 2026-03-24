import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511977203374"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform duration-300 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite] hover:animate-none"
    >
      <MessageCircle className="w-7 h-7" fill="white" stroke="none" />
    </a>
  );
};

export default WhatsAppButton;
