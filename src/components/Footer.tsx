const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container text-center">
        <p className="font-display text-lg font-bold text-primary mb-2">
          ITELC<span className="text-accent">.</span>
        </p>
        <p className="text-sm text-muted-foreground">
          Instituto Tecnológico de Enseñanza de Lenguas y Ciencias
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          © {new Date().getFullYear()} ITELC Institute. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
