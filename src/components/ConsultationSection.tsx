import { Check, Star, CreditCard, Landmark } from "lucide-react";

const benefits = [
  "Resposta detalhada para sua pergunta",
  "Interpretação profunda das cartas",
  "Orientação personalizada",
  "Atendimento sigiloso e respeitoso",
  "Registro da sua consulta",
];

const ConsultationSection = () => {
  return (
    <section id="consulta" className="py-24 bg-mystic-gradient px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl tracking-wider uppercase text-gold-gradient mb-4">
            Consulta de Tarot
          </h2>
          <p className="font-body text-lg text-foreground/60">
            Faça sua pergunta e receba a orientação das cartas para iluminar seu caminho.
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl p-8 md:p-10 max-w-md mx-auto hover:border-gold transition-colors glow-gold">
          <ul className="space-y-3 mb-8">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-body text-foreground/70">{b}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contato"
            className="flex items-center justify-center gap-2 w-full font-display text-sm tracking-widest uppercase bg-primary text-primary-foreground py-4 rounded hover:bg-gold-dark transition-colors glow-gold"
          >
            <Star className="w-4 h-4" />
            Agendar Consulta
          </a>

          <div className="flex items-center justify-center gap-6 mt-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Landmark className="w-4 h-4" />
              <span className="font-body text-sm">PIX</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4" />
              <span className="font-body text-sm">Cartão de Débito</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
