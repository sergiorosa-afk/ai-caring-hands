import { motion } from "framer-motion";
import { ArrowRight, Shield, Heart, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-therapy.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/50 via-background to-background" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-accent-foreground">
                Apoio emocional seguro e acessível
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6 text-foreground">
              Seu espaço seguro para{" "}
              <span className="text-gradient-hero">cuidar da mente</span>,{" "}
              sem julgamentos.
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed font-body">
              Apoio emocional estruturado e acessível, baseado em ciência psicológica.
              Para quem precisa de ajuda, mas não consegue — ou não pode — buscar
              terapia tradicional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-gradient-hero text-primary-foreground hover:opacity-90 transition-opacity text-base px-8 py-6 rounded-xl shadow-elevated"
              >
                Começar agora — R$ 19,90/sessão
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base px-8 py-6 rounded-xl border-primary/20 text-foreground hover:bg-accent"
              >
                Saiba mais
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-secondary" />
                <span>+5.000 vidas impactadas</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="w-4 h-4 text-primary" />
                <span>Base científica</span>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={heroImage}
                alt="Pessoa recebendo apoio emocional pelo celular"
                width={1280}
                height={720}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-card border border-border"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center">
                  <span className="text-primary-foreground text-lg">✨</span>
                </div>
                <div>
                  <p className="font-display text-sm text-foreground">40 min de sessão</p>
                  <p className="text-xs text-muted-foreground">Apenas R$ 19,90</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
