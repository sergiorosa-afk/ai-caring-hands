import { motion } from "framer-motion";
import { Brain, Eye, Heart, Lightbulb, Sparkles, TreeDeciduous } from "lucide-react";

const approaches = [
  {
    icon: Brain,
    name: "Terapia Cognitivo-Comportamental",
    short: "TCC",
    description: "Identifique e transforme padrões de pensamento que causam sofrimento. Prática e orientada a resultados.",
    color: "bg-primary",
  },
  {
    icon: Eye,
    name: "Psicologia Analítica",
    short: "Jung",
    description: "Explore o inconsciente, símbolos e sonhos para encontrar significado e autoconhecimento profundo.",
    color: "bg-secondary",
  },
  {
    icon: Lightbulb,
    name: "Psicanálise",
    short: "Freud",
    description: "Investigue as raízes inconscientes do seu comportamento e emoções para compreensão profunda.",
    color: "bg-primary",
  },
  {
    icon: Heart,
    name: "Humanista",
    short: "Rogers",
    description: "Acolhimento incondicional e empatia. Foco no seu potencial de crescimento e autorrealização.",
    color: "bg-secondary",
  },
  {
    icon: Sparkles,
    name: "Gestalt-terapia",
    short: "Gestalt",
    description: "Viva o momento presente com consciência plena. Integre pensamentos, emoções e ações.",
    color: "bg-primary",
  },
  {
    icon: TreeDeciduous,
    name: "Terapia Sistêmica",
    short: "Sistêmica",
    description: "Compreenda seus relacionamentos e padrões familiares para transformar suas conexões.",
    color: "bg-secondary",
  },
];

const ApproachesSection = () => {
  return (
    <section className="py-24" id="abordagens">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Abordagens
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mt-3 text-foreground">
            Escolha a abordagem que faz sentido pra você
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Cada linha terapêutica tem uma forma única de entender e acolher seu sofrimento.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {approaches.map((approach, index) => (
            <motion.div
              key={approach.short}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-card rounded-2xl p-6 border border-border hover:shadow-elevated hover:border-primary/20 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl ${approach.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <approach.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-display text-lg text-foreground">{approach.name}</h3>
                  </div>
                  <span className="inline-block text-xs font-medium text-primary bg-accent px-2 py-0.5 rounded-full mb-2">
                    {approach.short}
                  </span>
                  <p className="text-muted-foreground text-sm leading-relaxed">{approach.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachesSection;
