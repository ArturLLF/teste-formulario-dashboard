import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { title: "Diagnóstico", desc: "Mapeamos processos e identificamos gargalos." },
  { title: "Arquitetura", desc: "Desenhamos a estrutura ideal de automação." },
  { title: "Implementação", desc: "Criamos automações e integramos sistemas." },
  { title: "Escala", desc: "Sua empresa passa a operar com eficiência e previsibilidade." },
];

const MethodSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="metodo" ref={ref} className="py-24 lg:py-32 border-t border-border">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl sm:text-4xl font-bold text-foreground max-w-2xl mb-16"
        >
          Como implementamos{" "}
          <span className="text-gradient">automação na sua empresa</span>
        </motion.h2>

        <div className="max-w-2xl relative">
          {/* Vertical line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className="flex items-start gap-8 relative"
              >
                {/* Dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-6 h-6 rounded-full border-2 border-primary bg-background flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                </div>

                <div>
                  <span className="text-xs text-primary font-display font-medium tracking-wide uppercase mb-1 block">
                    Etapa {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
