import { Eye, Heart, User, Lock } from "lucide-react";
import logoTarot from "@/assets/logo-tarot.png";

const features = [
  { icon: Eye, title: "Visão Profunda", desc: "Interpretações detalhadas baseadas na tradição do Tarot de Waite" },
  { icon: Heart, title: "Conexão Espiritual", desc: "Cada leitura é realizada em ambiente energizado e consagrado" },
  { icon: User, title: "Orientação Pessoal", desc: "Respostas específicas para suas perguntas e situações" },
  { icon: Lock, title: "Sigilo Absoluto", desc: "Suas consultas são confidenciais e protegidas" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-mystic-gradient px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* Logo side */}
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <div className="w-48 h-48 rounded-full border-2 border-gold flex items-center justify-center glow-gold">
                <img src={logoTarot} alt="Tarot Místico" width={120} height={120} loading="lazy" className="animate-float" />
              </div>
            </div>
            <div className="mt-6">
              <span className="font-display text-2xl text-primary">10+ Anos</span>
              <p className="font-body text-foreground/50 mt-1">de dedicação ao Tarot</p>
            </div>
          </div>

          {/* Text side */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl tracking-wider uppercase text-gold-gradient mb-6">
              Sobre o Tarot Místico
            </h2>
            <p className="font-body text-lg text-foreground/70 leading-relaxed mb-4">
              Há mais de uma década, dedico minha vida ao estudo profundo das cartas do Tarot de Waite. Cada consulta é uma jornada sagrada onde as energias do universo se manifestam através das cartas, revelando caminhos e possibilidades que aguardam por você.
            </p>
            <p className="font-body text-lg text-foreground/70 leading-relaxed">
              Minha missão é guiar você através das mensagens ocultas nas cartas, oferecendo clareza em momentos de dúvida e esperança quando o caminho parece nebuloso.
            </p>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-card border border-border rounded-lg p-6 hover:border-gold transition-colors group"
            >
              <f.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-base tracking-wider uppercase text-foreground mb-2">
                {f.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
