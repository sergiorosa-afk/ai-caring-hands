import { motion } from "framer-motion";
import { UserPlus, BookOpen, Users, CreditCard } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Faça seu cadastro",
    description: "Crie sua conta em segundos. Sem burocracia, sem julgamento. Seus dados são protegidos.",
  },
  {
    icon: BookOpen,
    step: "02",
    title: "Escolha sua abordagem",
    description: "TCC, Junguiana, Humanista, Psicanálise... Escolha a linha terapêutica que mais faz sentido pra você.",
  },
  {
    icon: Users,
    step: "03",
    title: "Escolha seu terapeuta IA",
    description: "Cada terapeuta tem uma personalidade e estilo únicos. Encontre quem mais combina com você.",
  },
  {
    icon: CreditCard,
    step: "04",
    title: "Compre seus créditos",
    description: "1 sessão = 40 minutos = R$ 19,90. Sem mensalidade. Sem compromisso. Você no controle.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-muted/30" id="como-funciona">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Como funciona
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mt-3 text-foreground">
            4 passos para começar a se cuidar
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Simples, rápido e sem complicação. Em minutos você já está em sessão.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-elevated transition-shadow duration-300 h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="font-display text-4xl text-primary/10 group-hover:text-primary/20 transition-colors">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-display text-xl mb-2 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
