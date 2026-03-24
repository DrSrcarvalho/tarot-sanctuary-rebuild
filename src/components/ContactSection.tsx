import { Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-background px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="font-display text-3xl md:text-4xl tracking-wider uppercase text-gold-gradient mb-4">
          Entre em Contato
        </h2>
        <p className="font-body text-lg text-foreground/60 mb-12">
          Tem dúvidas sobre as consultas? Estou à disposição para ajudar.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 max-w-lg mx-auto">
          <a
            href="mailto:tarotsrc@gmail.com"
            className="flex flex-col items-center gap-3 bg-card border border-border rounded-lg p-6 hover:border-gold transition-colors group"
          >
            <Mail className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
            <span className="font-display text-sm tracking-wider uppercase text-foreground">
              E-mail
            </span>
            <span className="font-body text-sm text-muted-foreground">
              tarotsrc@gmail.com
            </span>
          </a>

          <a
            href="tel:+5511977203374"
            className="flex flex-col items-center gap-3 bg-card border border-border rounded-lg p-6 hover:border-gold transition-colors group"
          >
            <Phone className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
            <span className="font-display text-sm tracking-wider uppercase text-foreground">
              Telefone
            </span>
            <span className="font-body text-sm text-muted-foreground">
              (11) 97720-3374
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
