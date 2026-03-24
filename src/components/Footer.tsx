import logoTarot from "@/assets/logo-tarot.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-4 bg-mystic-deep">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={logoTarot} alt="Tarot Místico" width={28} height={28} loading="lazy" />
          <span className="font-display text-sm tracking-widest text-primary uppercase">
            Tarot Místico
          </span>
        </div>
        <p className="font-body text-sm text-muted-foreground">
          © 2024 Tarot Místico. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
