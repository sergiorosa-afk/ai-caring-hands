import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Eu nunca tive coragem de falar com um psicólogo. Com a IA, consegui me abrir pela primeira vez. Chorei, mas foi libertador.",
    name: "Ana Paula",
    age: 28,
    city: "São Paulo",
  },
  {
    text: "R$ 19,90 é o que eu gasto num lanche. Aqui eu invisto em mim. Já são 3 meses de acompanhamento e minha ansiedade diminuiu muito.",
    name: "Carlos",
    age: 34,
    city: "Belo Horizonte",
  },
  {
    text: "Minha filha me indicou. Eu tinha vergonha de pedir ajuda. Agora faço minhas sessões de casa, no meu tempo. Mudou minha vida.",
    name: "Dona Maria",
    age: 55,
    city: "Recife",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mt-3 text-foreground">
            Histórias reais de transformação
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border shadow-card"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
              <div>
                <p className="font-display text-foreground">{t.name}, {t.age}</p>
                <p className="text-sm text-muted-foreground">{t.city}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
