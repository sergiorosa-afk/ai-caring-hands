import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Lock, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-hero rounded-3xl p-10 sm:p-16 text-center text-primary-foreground relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent)]" />
          
          <div className="relative z-10">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mb-4">
              Você merece se sentir melhor.
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Não espere mais. Sua primeira sessão pode ser o início de uma transformação
              que você merece. Comece agora, no seu ritmo.
            </p>

            <Button
              size="lg"
              className="bg-card text-foreground hover:bg-card/90 text-base px-10 py-6 rounded-xl shadow-elevated font-medium"
            >
              Começar minha jornada
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>100% sigiloso</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4" />
                <span>Dados protegidos</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Disponível 24h</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
