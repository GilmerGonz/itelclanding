import { Globe, BookOpen, Languages, FlaskConical } from "lucide-react";

const courses = [
  {
    icon: Globe,
    title: "Inglés Británico",
    description: "Domina el inglés con acento británico. Preparación para TOEFL, IELTS y TKT con tutorías personalizadas.",
    tags: ["TOEFL", "IELTS", "TKT"],
  },
  {
    icon: Languages,
    title: "Francés Moderno",
    description: "Aprende francés desde cero hasta nivel avanzado con metodología comunicativa y cultural.",
    tags: ["DELF", "Conversacional"],
  },
  {
    icon: BookOpen,
    title: "Chino Mandarín",
    description: "Introducción al mandarín con enfoque en comunicación práctica y escritura de caracteres.",
    tags: ["HSK", "Negocios"],
  },
  {
    icon: FlaskConical,
    title: "Bioquímica Aplicada",
    description: "Tutorías especializadas en bioquímica con seguimiento de rendimiento académico en tiempo real.",
    tags: ["Universitario", "Investigación"],
  },
];

const CoursesSection = () => {
  return (
    <section id="cursos" className="py-20 bg-muted/50">
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Programas Académicos</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Nuestros Cursos
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div key={course.title} className="platform-card flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <course.icon size={24} className="text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{course.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">{course.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {course.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors w-full"
              >
                Inscribirme
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
