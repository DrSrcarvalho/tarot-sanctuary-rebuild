import { BookOpen, Sparkles } from "lucide-react";

const SimpatiasSection = () => {
  return (
    <section id="simpatias" className="py-24 bg-mystic-gradient px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="bg-card border border-border rounded-xl p-8 md:p-12 text-center hover:border-gold transition-colors glow-gold">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-gold" />
            <span className="font-display text-xs tracking-widest uppercase text-gold">Novo E-book</span>
            <Sparkles className="w-5 h-5 text-gold" />
          </div>

          <h2 className="font-display text-3xl md:text-4xl tracking-wider uppercase text-gold-gradient mb-4">
            Simpatias & Rituais
          </h2>

          <p className="font-body text-lg text-foreground/60 max-w-xl mx-auto mb-2">
            35 simpatias tradicionais para amor, dinheiro, proteção, saúde e prosperidade, organizadas por fase da lua e dia da semana — em um e-book digital ilustrado.
          </p>
          <p className="font-body text-sm text-foreground/40 max-w-xl mx-auto mb-8">
            Conteúdo cultural e de entretenimento, sem promessa de resultado.
          </p>

          <div className="font-display text-3xl text-gold mb-8">R$ 49,90</div>

          
            href="/checkout-simpatias.html"
            className="inline-flex items-center justify-center gap-2 font-display text-sm tracking-widest uppercase bg-primary text-primary-foreground py-4 px-10 rounded hover:bg-gold-dark transition-colors glow-gold"
          >
            <BookOpen className="w-4 h-4" />
            Comprar agora com Pix
          </a>

          <p className="font-body text-xs text-muted-foreground mt-4">
            Pagamento via Pix · Liberação automática para download
          </p>
        </div>
      </div>
    </section>
  );
};

export default SimpatiasSection;
