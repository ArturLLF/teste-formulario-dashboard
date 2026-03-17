import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ImpactPhrase = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 lg:py-40 border-t border-border relative overflow-hidden">
      <div className="glow-orb w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="container relative z-10 text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-snug max-w-3xl mx-auto"
        >
          "A verdadeira inovação não substitui pessoas.
          <br />
          <span className="text-gradient">Ela remove o que impede pessoas de crescer.</span>"
        </motion.blockquote>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-sm text-muted-foreground uppercase tracking-widest"
        >
          Filosofia Absolut AI
        </motion.p>
      </div>
    </section>
  );
};

export default ImpactPhrase;
