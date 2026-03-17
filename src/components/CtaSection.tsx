import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight } from "lucide-react";

const checks = [
"Diagnóstico estratégico gratuito",
"Análise personalizada",
"Retorno em até 48 horas"];


const CtaSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToForm = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return;






















































};

export default CtaSection;