import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 border-t border-border">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              A nova forma de operar{" "}
              <span className="text-gradient">empresas modernas</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              Na Absolut AI criamos sistemas inteligentes que conectam processos, pessoas e dados.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Identificamos gargalos operacionais e implementamos automações que transformam
              operações manuais em fluxos inteligentes e escaláveis.
            </p>
            <p className="text-foreground font-medium leading-relaxed">
              O resultado é uma empresa mais eficiente, mais lucrativa e preparada para crescer.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
