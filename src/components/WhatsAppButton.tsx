import { useState } from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="https://wa.me/556192886606"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="whatsapp-pill"
    >
      <div className="relative">
        <MessageCircle size={20} className="text-foreground" />
        <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-primary animate-pulse-dot" />
      </div>
      <span
        className={`text-sm text-foreground whitespace-nowrap overflow-hidden transition-all duration-300 ${
          hovered ? "max-w-[200px] opacity-100 ml-1" : "max-w-0 opacity-0"
        }`}
      >
        Falar com especialista
      </span>
    </a>
  );
};

export default WhatsAppButton;
