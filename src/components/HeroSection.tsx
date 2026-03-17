import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Glow orbs */}
      <div className="glow-orb w-[600px] h-[600px] -top-40 -left-40 animate-glow-drift" />
      <div className="glow-orb w-[400px] h-[400px] bottom-20 right-0 animate-glow-drift" style={{ animationDelay: "4s" }} />

      <div className="container relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/50 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-dot" />
            <span className="text-xs text-muted-foreground font-medium tracking-wide uppercase">
              Automação Inteligente para Empresas
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-foreground mb-6"
          >
            Tecnologia que Trabalha{" "}
            <span className="text-gradient">Enquanto Sua Empresa Cresce</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-10"
          >
            Implementamos agentes de IA, automações e sistemas inteligentes que eliminam
            tarefas operacionais e transformam processos em motores de crescimento.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contato"
              className="btn-primary-glow px-7 py-3.5 rounded-lg font-medium text-primary-foreground inline-flex items-center justify-center gap-2 relative"
            >
              <span className="relative z-10 flex items-center gap-2">
                Solicitar Diagnóstico
                <ArrowRight size={16} />
              </span>
            </a>
            <a
              href="#solucoes"
              className="px-7 py-3.5 rounded-lg font-medium border border-border text-foreground hover:bg-card transition-colors duration-300 text-center"
            >
              Ver Soluções
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
