import { ArrowRight, Users, BookOpen, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="inicio" className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-6 animate-fade-in-up">
            <Users size={16} />
            +153 estudiantes activos
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            TU META ES NUESTRA{" "}
            <span className="gradient-text">PRIORIDAD</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Somos la única institución académica en Venezuela con una plataforma propia de gestión de aprendizaje. En ITELC, combinamos sesiones en vivo con tecnología de vanguardia para que puedas monitorear tu progreso académico en tiempo real.          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="#cursos"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-xl text-base font-semibold hover:bg-primary/90 transition-all hover:shadow-lg"
            >
              Explorar Cursos
              <ArrowRight size={18} />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 border-2 border-border text-foreground px-8 py-3.5 rounded-xl text-base font-semibold hover:border-accent hover:text-accent transition-all"
            >
              Inscríbete Ahora
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 max-w-lg mx-auto animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            {[
              { icon: Users, label: "Estudiantes", value: "153+" },
              { icon: BookOpen, label: "Cursos", value: "20+" },
              { icon: Award, label: "Certificaciones", value: "26+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon size={20} className="mx-auto mb-2 text-accent" />
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
