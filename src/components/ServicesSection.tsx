import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Automação de Processos",
    desc: "Automatizamos tarefas repetitivas e fluxos operacionais para que sua equipe foque em estratégia e crescimento.",
    tag: "Até 80% menos trabalho manual",
  },
  {
    num: "02",
    title: "CRM Inteligente",
    desc: "Estruturamos um sistema completo de gestão de leads, vendas e relacionamento com clientes.",
    tag: "Gestão comercial inteligente",
  },
  {
    num: "03",
    title: "Sites de Alta Conversão",
    desc: "Criamos sites modernos, rápidos e focados em transformar visitantes em clientes.",
    tag: "Mais leads qualificados",
  },
  {
    num: "04",
    title: "Tráfego Estratégico",
    desc: "Campanhas orientadas por dados para atrair o público certo e gerar demanda previsível.",
    tag: "Aquisição escalável",
  },
  {
    num: "05",
    title: "Sistema de Crescimento",
    desc: "Integramos marketing, vendas e operação em um único sistema inteligente.",
    tag: "Escala sustentável",
  },
];

const ServicesSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solucoes" ref={ref} className="py-24 lg:py-32 border-t border-border">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl sm:text-4xl font-bold text-foreground max-w-2xl mb-16"
        >
          Soluções que criam{" "}
          <span className="text-gradient">vantagem competitiva</span>
        </motion.h2>

        <div className="max-w-3xl">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="border-b border-border"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <div className="flex items-center gap-6">
                  <span className="font-display text-sm text-primary font-medium">{s.num}</span>
                  <span className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {s.title}
                  </span>
                </div>
                <ChevronDown
                  size={18}
                  className={`text-muted-foreground transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pl-[3.25rem] pb-6 space-y-3">
                      <p className="text-muted-foreground leading-relaxed max-w-xl">{s.desc}</p>
                      <span className="inline-block text-xs text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {s.tag}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
