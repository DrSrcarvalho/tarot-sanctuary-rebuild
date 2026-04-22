import { MessageCircle, CreditCard, Sparkles } from "lucide-react";

const steps = [
  {
    icon: CreditCard,
    title: "1. Realize o Pagamento",
    desc: "Faça o pagamento via PIX ou Cartão de forma rápida e segura.",
  },
  {
    icon: MessageCircle,
    title: "2. Envie sua Pergunta",
    desc: "Pelo WhatsApp, envie a pergunta que mais aflige seu coração.",
  },
  {
    icon: Sparkles,
    title: "3. Receba sua Leitura",
    desc: "Resposta detalhada em até 2 horas, com sigilo absoluto.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-24 bg-background px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl tracking-wider uppercase text-gold-gradient mb-4">
            Como Funciona
          </h2>
          <p className="font-body text-lg text-foreground/60 max-w-2xl mx-auto">
            Em 3 passos simples você recebe a orientação das cartas no conforto do seu lar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div
              key={s.title}
              className="bg-card border border-border rounded-xl p-8 text-center hover:border-gold transition-all duration-300 glow-gold group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg tracking-wider uppercase text-foreground mb-3">
                {s.title}
              </h3>
              <p className="font-body text-foreground/70 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
