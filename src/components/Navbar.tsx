import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Método", href: "#metodo" },
  { label: "Resultados", href: "#resultados" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <a href="#inicio" className="font-display text-xl font-bold tracking-tight text-foreground">
          ABSOLUT <span className="text-gradient">TECH</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#diagnostico"
            className="btn-primary-glow px-5 py-2 rounded-lg text-sm font-medium text-primary-foreground relative z-10"
          >
            <span className="relative z-10">Diagnóstico Gratuito</span>
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-border bg-background overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#diagnostico"
                onClick={() => setOpen(false)}
                className="btn-primary-glow px-5 py-2.5 rounded-lg text-sm font-medium text-primary-foreground text-center relative"
              >
                <span className="relative z-10">Diagnóstico Gratuito</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
