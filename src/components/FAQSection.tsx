import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Como funciona a consulta de tarot online?",
    a: "A consulta de tarot místico online é realizada via WhatsApp. Você envia sua pergunta, as cartas são tiradas em ambiente energizado e você recebe a interpretação completa com orientação personalizada em até 24 horas.",
  },
  {
    q: "O tarot místico realmente funciona?",
    a: "O tarot é uma ferramenta milenar de autoconhecimento e orientação. Com mais de 10 anos de experiência e 500 consultas realizadas, o Tarot Místico tem 98% de satisfação entre os consulentes.",
  },
  {
    q: "Qual o valor da consulta de tarot?",
    a: "Cada consulta de tarot místico online custa R$ 20,00. Aceitamos pagamento via PIX e cartão de débito, de forma rápida e segura.",
  },
  {
    q: "Quais formas de pagamento são aceitas?",
    a: "Trabalhamos com PIX e cartão de débito. Ambos são processados de forma segura, e você recebe a confirmação do pagamento antes do início da consulta.",
  },
  {
    q: "Posso fazer consulta de tarot por WhatsApp?",
    a: "Sim! Todas as consultas de tarot místico podem ser realizadas online via WhatsApp, de qualquer lugar do Brasil.",
  },
  {
    q: "Minha consulta é realmente sigilosa?",
    a: "Sim, 100% sigilosa. Suas perguntas e respostas ficam apenas entre você e a tarô-leitora. Não compartilhamos nenhuma informação.",
  },
  {
    q: "Como devo formular minha pergunta?",
    a: "Seja clara e específica sobre o que deseja saber. Perguntas abertas (como, por que, qual caminho) trazem leituras mais ricas.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-mystic-gradient px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl tracking-wider uppercase text-gold-gradient mb-4">
            Perguntas Frequentes
          </h2>
          <p className="font-body text-lg text-foreground/60">
            Tire suas dúvidas antes da consulta.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card border border-border rounded-lg px-6 hover:border-gold transition-colors"
            >
              <AccordionTrigger className="font-display text-base tracking-wider text-foreground hover:text-primary hover:no-underline text-left">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-foreground/70 leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
