import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria S.",
    location: "São Paulo - SP",
    text: "A leitura foi impressionante. As cartas trouxeram clareza para uma decisão que eu adiava há meses. Atendimento sigiloso e acolhedor.",
  },
  {
    name: "Juliana R.",
    location: "Rio de Janeiro - RJ",
    text: "Fiquei surpresa com a precisão da resposta. Senti que cada palavra foi escrita pra mim. Recomendo de coração.",
  },
  {
    name: "Carla M.",
    location: "Belo Horizonte - MG",
    text: "Profissionalismo e sensibilidade. A interpretação me ajudou a enxergar caminhos que eu não conseguia ver sozinha.",
  },
];

const stats = [
  { value: "+500", label: "Consultas realizadas" },
  { value: "+10", label: "Anos de experiência" },
  { value: "100%", label: "Sigilo garantido" },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-24 bg-mystic-gradient px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl tracking-wider uppercase text-gold-gradient mb-4">
            Quem Já Consultou
          </h2>
          <p className="font-body text-lg text-foreground/60 max-w-2xl mx-auto">
            Histórias reais de pessoas que encontraram clareza nas cartas.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mb-16 max-w-3xl mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl md:text-4xl text-gold-gradient mb-2">
                {s.value}
              </div>
              <div className="font-body text-xs md:text-sm text-foreground/60 uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card border border-border rounded-xl p-6 hover:border-gold transition-colors relative"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-3" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-body text-foreground/80 italic leading-relaxed mb-4">
                "{t.text}"
              </p>
              <div className="border-t border-border pt-4">
                <div className="font-display text-sm tracking-wider uppercase text-primary">
                  {t.name}
                </div>
                <div className="font-body text-xs text-muted-foreground">
                  {t.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
