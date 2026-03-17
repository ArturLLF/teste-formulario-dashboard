import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

const ContactForm = () => {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setOpen(false);
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      






























      

      {/* Slide-in panel */}
      <AnimatePresence>
        {open &&
        <>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/90 backdrop-blur-sm"
            onClick={() => setOpen(false)} />
          
            <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 z-[70] w-full max-w-lg bg-card/95 backdrop-blur-xl border-l border-border overflow-y-auto">
            
              <div className="p-8 sm:p-12">
                <div className="flex items-center justify-between mb-10">
                  <h3 className="font-display text-xl font-bold text-foreground">Diagnóstico Gratuito</h3>
                  <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
                    <X size={20} />
                  </button>
                </div>

                {submitted ?
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16">
                
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                      <ArrowRight size={20} className="text-primary" />
                    </div>
                    <h4 className="font-display text-lg font-semibold text-foreground mb-2">Recebemos seu contato!</h4>
                    <p className="text-muted-foreground text-sm">Retornaremos em até 48 horas.</p>
                  </motion.div> :

              <form onSubmit={handleSubmit} className="space-y-6">
                    <input type="text" required placeholder="Nome completo" className="input-underline w-full" />
                    <input type="email" required placeholder="Email" className="input-underline w-full" />
                    <input type="tel" required placeholder="WhatsApp" className="input-underline w-full" />
                    <input type="text" required placeholder="Segmento da empresa" className="input-underline w-full" />
                    <textarea required placeholder="Principal desafio do negócio" rows={3} className="input-underline w-full resize-none" />
                    <select required className="input-underline w-full appearance-none" defaultValue="">
                      <option value="" disabled>Faturamento mensal</option>
                      <option>Até R$ 50 mil</option>
                      <option>R$ 50 mil - R$ 200 mil</option>
                      <option>R$ 200 mil - R$ 1 milhão</option>
                      <option>Acima de R$ 1 milhão</option>
                    </select>

                    <button
                  type="submit"
                  className="btn-primary-glow w-full py-4 rounded-lg font-medium text-primary-foreground relative mt-8">
                  
                      <span className="relative z-10">Quero automatizar minha empresa</span>
                    </button>
                  </form>
              }
              </div>
            </motion.div>
          </>
        }
      </AnimatePresence>
    </>);

};

export default ContactForm;