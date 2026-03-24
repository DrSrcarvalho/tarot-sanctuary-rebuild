import tarotFool from "@/assets/tarot-fool.png";
import tarotPriestess from "@/assets/tarot-priestess.png";
import tarotStar from "@/assets/tarot-star.png";
import tarotMoon from "@/assets/tarot-moon.png";
import tarotSun from "@/assets/tarot-sun.png";

const cards = [
  { name: "O Louco", desc: "Novos começos, espontaneidade e aventura", img: tarotFool },
  { name: "A Sacerdotisa", desc: "Intuição, mistério e sabedoria interior", img: tarotPriestess },
  { name: "A Estrela", desc: "Esperança, inspiração e renovação espiritual", img: tarotStar },
  { name: "A Lua", desc: "Intuição, sonhos e o inconsciente", img: tarotMoon },
  { name: "O Sol", desc: "Alegria, sucesso e vitalidade", img: tarotSun },
];

const CardsSection = () => {
  return (
    <section id="cartas" className="py-24 bg-background px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl tracking-wider uppercase text-gold-gradient mb-4">
            As Cartas Sagradas
          </h2>
          <p className="font-body text-lg text-foreground/60 max-w-2xl mx-auto">
            Cada carta do Tarot de Waite carrega séculos de sabedoria esotérica, revelando verdades ocultas e caminhos a seguir.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {cards.map((card) => (
            <div
              key={card.name}
              className="group text-center"
            >
              <div className="relative overflow-hidden rounded-lg border border-border hover:border-gold transition-all duration-300 glow-gold mb-4">
                <img
                  src={card.img}
                  alt={card.name}
                  loading="lazy"
                  width={512}
                  height={768}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-display text-sm tracking-wider uppercase text-foreground mb-1">
                {card.name}
              </h3>
              <p className="font-body text-xs text-muted-foreground">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
