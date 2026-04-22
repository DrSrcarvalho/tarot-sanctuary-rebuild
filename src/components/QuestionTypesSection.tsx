import { Heart, Briefcase, Sparkles, Compass } from "lucide-react";

const types = [
  {
    icon: Heart,
    title: "Amor & Relacionamentos",
    desc: "Descubra os caminhos do coração, conexões e intenções.",
  },
  {
    icon: Briefcase,
    title: "Trabalho & Finanças",
    desc: "Orientação sobre carreira, decisões profissionais e prosperidade.",
  },
  {
    icon: Sparkles,
    title: "Espiritualidade",
    desc: "Conexão com sua essência, propósito e jornada interior.",
  },
  {
    icon: Compass,
    title: "Decisões & Caminhos",
    desc: "Clareza para escolhas importantes e novos começos.",
  },
];

const QuestionTypesSection = () => {
  return (
    <section id="tipos" className="py-24 bg-background px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl tracking-wider uppercase text-gold-gradient mb-4">
            Tipos de Pergunta
          </h2>
          <p className="font-body text-lg text-foreground/60 max-w-2xl mx-auto">
            As cartas iluminam diversas áreas da sua vida. Escolha o tema da sua consulta.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {types.map((t) => (
            <div
              key={t.title}
              className="bg-card border border-border rounded-xl p-6 hover:border-gold transition-all duration-300 group text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <t.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-base tracking-wider uppercase text-foreground mb-2">
                {t.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuestionTypesSection;
