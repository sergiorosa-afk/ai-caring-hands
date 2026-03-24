import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "1 Sessão",
    price: "19,90",
    sessions: 1,
    features: [
      "40 minutos de sessão",
      "Escolha de abordagem",
      "Escolha de terapeuta",
      "Relatório da sessão",
    ],
    popular: false,
  },
  {
    name: "5 Sessões",
    price: "89,90",
    pricePerSession: "17,98",
    sessions: 5,
    features: [
      "Tudo do plano individual",
      "Acompanhamento semanal",
      "Evolução mensurável",
      "Exercícios entre sessões",
      "Economia de 10%",
    ],
    popular: true,
  },
  {
    name: "10 Sessões",
    price: "159,90",
    pricePerSession: "15,99",
    sessions: 10,
    features: [
      "Tudo do pacote de 5",
      "Acompanhamento mensal completo",
      "Plano personalizado",
      "Relatórios de evolução",
      "Economia de 20%",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section className="py-24" id="precos">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Preços
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mt-3 text-foreground">
            Cuidar da mente não precisa ser caro
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Sessões a partir de R$ 15,99. Sem mensalidade, sem fidelidade. Você paga só quando precisar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 border transition-all duration-300 ${
                plan.popular
                  ? "bg-gradient-hero text-primary-foreground border-transparent shadow-elevated scale-105"
                  : "bg-card text-foreground border-border hover:shadow-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-warm text-secondary-foreground text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1">
                    <Zap className="w-3 h-3" /> Mais popular
                  </span>
                </div>
              )}

              <h3 className="font-display text-xl mb-2">{plan.name}</h3>
              <div className="mb-1">
                <span className="text-4xl font-display">R$ {plan.price}</span>
              </div>
              {plan.pricePerSession && (
                <p className={`text-sm mb-6 ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  R$ {plan.pricePerSession} por sessão
                </p>
              )}
              {!plan.pricePerSession && <p className="text-sm mb-6 opacity-80">por sessão</p>}

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.popular ? "text-primary-foreground" : "text-primary"}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full rounded-xl py-6 font-medium ${
                  plan.popular
                    ? "bg-card text-foreground hover:bg-card/90"
                    : "bg-gradient-hero text-primary-foreground hover:opacity-90"
                }`}
              >
                Começar agora
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
