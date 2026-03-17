import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const results = [
  { label: "Clínica estética", result: "+120% em agendamentos" },
  { label: "Empresa de serviços", result: "50% menos trabalho manual" },
  { label: "Consultoria", result: "3x mais leads qualificados" },
];

const ResultsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resultados" ref={ref} className="py-24 lg:py-32 border-t border-border">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-16"
        >
          Resultados reais <span className="text-gradient">de clientes</span>
        </motion.h2>

        <div className="grid sm:grid-cols-3 gap-6">
          {results.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="card-surface-hover p-8 group"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-xs text-muted-foreground uppercase tracking-wide">{r.label}</span>
                <ArrowUpRight size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="font-display text-2xl font-bold text-foreground">{r.result}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
