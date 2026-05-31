import { Sparkles, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-hero-gradient pt-16 px-4 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-primary/30 rounded-full animate-glow-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-primary/20 rounded-full animate-glow-pulse delay-1000" />
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-primary/25 rounded-full animate-glow-pulse delay-500" />
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 border border-primary/30 rounded-full px-5 py-2 mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="font-body text-sm text-foreground/70">
            Tarot Místico • São Paulo • Online
          </span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-wider uppercase leading-tight mb-6">
          <span className="text-gold-gradient">Tarot</span>
          <br />
          <span className="text-gold-gradient">Místico</span>
        </h1>

        <p className="font-body text-lg md:text-xl text-foreground/60 max-w-xl mx-auto mb-10 leading-relaxed">
          Permita que a sabedoria ancestral das cartas ilumine seu caminho. Consultas de tarot místico personalizadas para guiar suas decisões mais importantes — amor, trabalho, espiritualidade e novos caminhos.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#consulta"
            className="inline-flex items-center justify-center gap-2 font-display text-sm tracking-widest uppercase bg-primary text-primary-foreground px-8 py-4 rounded hover:bg-gold-dark transition-colors glow-gold"
          >
            <Star className="w-4 h-4" />
            Agendar Consulta
          </a>
          <a
            href="#sobre"
            className="inline-flex items-center justify-center font-display text-sm tracking-widest uppercase border border-primary/40 text-primary px-8 py-4 rounded hover:bg-primary/10 transition-colors"
          >
            Saiba Mais
          </a>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-0 divide-x divide-primary/30">
          {[
            { value: "500+", label: "Consultas Realizadas" },
            { value: "10+", label: "Anos de Experiência" },
            { value: "98%", label: "Satisfação" },
          ].map((stat) => (
            <div key={stat.label} className="px-6 md:px-10 text-center">
              <div className="font-display text-2xl md:text-3xl text-primary mb-1">
                {stat.value}
              </div>
              <div className="font-body text-sm text-foreground/50">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
