import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Quanto tempo demora para receber a resposta?",
    a: "A resposta é entregue em até 2 horas após a confirmação do pagamento e o envio da sua pergunta pelo WhatsApp.",
  },
  {
    q: "Como é feito o pagamento?",
    a: "Você pode pagar via PIX (instantâneo) ou Cartão de Débito. Após o pagamento, basta enviar o comprovante junto com sua pergunta.",
  },
  {
    q: "Minha consulta é realmente sigilosa?",
    a: "Sim, 100% sigilosa. Suas perguntas e respostas ficam apenas entre você e a tarô-leitora. Não compartilhamos nenhuma informação.",
  },
  {
    q: "Posso fazer mais de uma pergunta?",
    a: "Sim! Cada pergunta é tratada individualmente, com foco e energia dedicados a ela.",
  },
  {
    q: "Como devo formular minha pergunta?",
    a: "Seja clara e específica sobre o que deseja saber. Perguntas abertas (como, por que, qual caminho) trazem leituras mais ricas.",
  },
  {
    q: "A consulta é feita por WhatsApp?",
    a: "Sim, todo o atendimento acontece pelo WhatsApp, de forma prática e discreta, no horário que for melhor para você.",
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
