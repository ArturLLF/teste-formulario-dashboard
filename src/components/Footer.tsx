import { Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="container">
        <div className="grid sm:grid-cols-3 gap-10">
          <div>
            <span className="font-display text-lg font-bold text-foreground">
              ABSOLUT <span className="text-gradient">TECHNOLOGY</span>
            </span>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-xs">
              Tecnologia e automação para empresas que querem crescer com inteligência.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Contato</h4>
            <p className="text-sm text-muted-foreground">absolutaimedia@gmail.com</p>
            <p className="text-sm text-muted-foreground mt-1">Brasil</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Redes sociais</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://www.instagram.com/absolutaimedia/?utm_source=ig_web_button_share_sheet" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 Absolut AI — Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
