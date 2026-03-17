import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cog, Users, TrendingUp, Unplug } from "lucide-react";

const problems = [
  {
    icon: Cog,
    title: "Processos manuais",
    desc: "Sua equipe perde horas executando tarefas repetitivas.",
  },
  {
    icon: Users,
    title: "Leads desorganizados",
    desc: "Clientes interessados se perdem sem um sistema estruturado.",
  },
  {
    icon: TrendingUp,
    title: "Falta de escala",
    desc: "Seu crescimento depende demais de trabalho humano.",
  },
  {
    icon: Unplug,
    title: "Ferramentas desconectadas",
    desc: "Sistemas que não se comunicam geram retrabalho.",
  },
];

const ProblemsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl sm:text-4xl font-bold text-foreground max-w-2xl mb-16"
        >
          O crescimento do seu negócio está{" "}
          <span className="text-gradient">travando na operação?</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="card-surface-hover p-6 group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <p.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
