import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, CheckCircle2 } from "lucide-react";
import { z } from "zod";

const formSchema = z.object({
  nome: z.string().trim().min(1, "Nome é obrigatório").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  whatsapp: z.string().trim().min(10, "WhatsApp inválido").max(20),
  segmento: z.string().trim().min(1, "Segmento é obrigatório").max(100),
  empresa: z.string().trim().min(1, "Empresa é obrigatória").max(100),
  faturamento: z.string().min(1, "Selecione o faturamento"),
});

type FormData = z.infer<typeof formSchema>;

const WEBHOOK_URL = "https://jumpingotter-n8n.cloudfy.cloud/webhook/formulario-site";

const faturamentoOptions = [
  "Até R$10 mil",
  "R$10 mil a R$50 mil",
  "R$50 mil a R$100 mil",
  "Acima de R$100 mil",
];

const DiagnosticForm = () => {
  const [form, setForm] = useState<FormData>({
    nome: "",
    email: "",
    whatsapp: "",
    segmento: "",
    empresa: "",
    faturamento: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.errors.forEach((err) => {
        const key = err.path[0] as keyof FormData;
        if (!fieldErrors[key]) fieldErrors[key] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Erro de comunincação com o servidor:", error);
      alert("Erro ao enviar dados. Tente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-border bg-muted/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200 text-sm";
  const errorClass = "text-xs text-destructive mt-1";

  if (submitted) {
    return (
      <section id="diagnostico" className="py-24 lg:py-32">
        <div className="container flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-2xl rounded-2xl border border-border bg-card p-10 sm:p-14 text-center"
            style={{ boxShadow: "0 20px 60px hsl(0 0% 0% / 0.5)" }}
          >
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={32} className="text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">
              Obrigado! 🚀
            </h3>
            <p className="text-muted-foreground mb-8">
              Recebemos seu diagnóstico.
            </p>
            <a
              href="https://wa.me/556192886606"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-foreground border border-border bg-card hover:bg-muted transition-colors"
            >
              <MessageCircle size={18} />
              Falar com especialista no WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="diagnostico" className="py-24 lg:py-32">
      <div className="container flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-2xl rounded-2xl border border-border bg-card p-8 sm:p-12 lg:p-14"
          style={{ boxShadow: "0 20px 60px hsl(0 0% 0% / 0.5)" }}
        >
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Diagnóstico <span className="text-gradient">Gratuito</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Preencha e receba uma análise personalizada de como escalar sua empresa com automação e inteligência artificial.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={form.nome}
                  onChange={(e) => handleChange("nome", e.target.value)}
                  className={inputClass}
                  maxLength={100}
                />
                {errors.nome && <p className={errorClass}>{errors.nome}</p>}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={inputClass}
                  maxLength={255}
                />
                {errors.email && <p className={errorClass}>{errors.email}</p>}
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <input
                  type="tel"
                  placeholder="(00) 00000-0000"
                  value={form.whatsapp}
                  onChange={(e) => handleChange("whatsapp", e.target.value)}
                  className={inputClass}
                  maxLength={20}
                />
                {errors.whatsapp && <p className={errorClass}>{errors.whatsapp}</p>}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Ex: Tecnologia, Varejo, Educação"
                  value={form.segmento}
                  onChange={(e) => handleChange("segmento", e.target.value)}
                  className={inputClass}
                  maxLength={100}
                />
                {errors.segmento && <p className={errorClass}>{errors.segmento}</p>}
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <input
                  type="text"
                  placeholder="Ex: Absolut Technology"
                  value={form.empresa}
                  onChange={(e) => handleChange("empresa", e.target.value)}
                  className={inputClass}
                  maxLength={100}
                />
                {errors.empresa && <p className={errorClass}>{errors.empresa}</p>}
              </div>
              <div>
                <select
                  value={form.faturamento}
                  onChange={(e) => handleChange("faturamento", e.target.value)}
                  className={`${inputClass} appearance-none ${!form.faturamento ? "text-muted-foreground" : ""}`}
                >
                  <option value="" disabled>
                    Faturamento mensal
                  </option>
                  {faturamentoOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                {errors.faturamento && <p className={errorClass}>{errors.faturamento}</p>}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-4 py-4 rounded-lg font-semibold text-primary-foreground text-sm uppercase tracking-wider inline-flex items-center justify-center gap-2 relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:opacity-60"
              style={{
                background: "linear-gradient(135deg, hsl(262 83% 58%), hsl(280 80% 55%))",
              }}
            >
              {loading ? (
                <span className="animate-pulse">Enviando...</span>
              ) : (
                <>
                  QUERO ESCALAR MINHA EMPRESA
                  <Send size={16} />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default DiagnosticForm;
