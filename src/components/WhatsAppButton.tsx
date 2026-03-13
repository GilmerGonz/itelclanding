import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/584124163681"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[hsl(142,70%,45%)] text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-float"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;
