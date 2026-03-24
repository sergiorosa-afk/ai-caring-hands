import { motion } from "framer-motion";
import { Star } from "lucide-react";

const therapists = [
  {
    name: "Dra. Clara",
    approach: "TCC",
    style: "Acolhedora e prática",
    description: "Foco em resultados. Te ajuda a criar ferramentas mentais para o dia a dia.",
    avatar: "🧑‍⚕️",
    rating: 4.9,
  },
  {
    name: "Dr. Rafael",
    approach: "Jung",
    style: "Profundo e intuitivo",
    description: "Explora seus sonhos e símbolos para revelar caminhos de transformação interior.",
    avatar: "👨‍💼",
    rating: 4.8,
  },
  {
    name: "Dra. Marina",
    approach: "Humanista",
    style: "Empática e calorosa",
    description: "Escuta sem julgamento. Acredita no seu potencial de crescimento e mudança.",
    avatar: "👩‍🏫",
    rating: 4.9,
  },
  {
    name: "Dr. André",
    approach: "Psicanálise",
    style: "Analítico e perspicaz",
    description: "Investiga as raízes profundas do sofrimento para uma compreensão real de si.",
    avatar: "🧔",
    rating: 4.7,
  },
];

const TherapistsSection = () => {
  return (
    <section className="py-24 bg-muted/30" id="terapeutas">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Terapeutas IA
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mt-3 text-foreground">
            Conheça quem vai te acompanhar
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Cada terapeuta IA tem personalidade e estilo próprios. Escolha quem mais combina com você.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {therapists.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border hover:shadow-elevated hover:border-primary/20 transition-all duration-300 text-center group cursor-pointer"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {t.avatar}
              </div>
              <h3 className="font-display text-xl text-foreground mb-1">{t.name}</h3>
              <span className="inline-block text-xs font-medium text-primary bg-accent px-3 py-1 rounded-full mb-3">
                {t.approach}
              </span>
              <p className="text-sm font-medium text-foreground mb-2">{t.style}</p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{t.description}</p>
              <div className="flex items-center justify-center gap-1">
                <Star className="w-4 h-4 text-secondary fill-secondary" />
                <span className="text-sm font-medium text-foreground">{t.rating}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TherapistsSection;
