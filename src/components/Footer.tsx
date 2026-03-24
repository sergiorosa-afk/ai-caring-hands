import { Brain, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-hero flex items-center justify-center">
              <Brain className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-lg text-foreground">Terapia com IA</span>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            Apoio emocional estruturado e acessível. Não substitui acompanhamento psicológico profissional.
          </p>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Feito com <Heart className="w-3 h-3 text-secondary fill-secondary" /> para quem precisa
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
