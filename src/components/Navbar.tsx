import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoTarot from "@/assets/logo-tarot.png";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "As Cartas", href: "#cartas" },
  { label: "Consulta", href: "#consulta" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-3">
          <img src={logoTarot} alt="Tarot Místico" width={40} height={40} />
          <span className="font-display text-lg tracking-widest text-primary uppercase">
            Tarot Místico
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-sm tracking-wider text-foreground/70 hover:text-primary transition-colors uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>


        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-4 pb-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block font-display text-sm tracking-wider text-foreground/70 hover:text-primary transition-colors uppercase py-2"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
