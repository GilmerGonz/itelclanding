import { useState } from "react";
import { Mail, Send, Loader2, CheckCircle2 } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ nombre: "", correo: "", curso: "", mensaje: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/mwvrqvve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Nombre: form.nombre,
          Email: form.correo,
          Curso: form.curso,
          Mensaje: form.mensaje
        }),
      });

      if (response.ok) {
        setStatus("success");
        setForm({ nombre: "", correo: "", curso: "", mensaje: "" });
        // Mantenemos el mensaje por 6 segundos para que el usuario logre leerlo bien
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="py-20">
      <div className="section-container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Contáctanos</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Comienza tu Camino</h2>
          </div>

          <div className="platform-card">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Nombre</label>
                  <input
                    required
                    type="text"
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Correo</label>
                  <input
                    required
                    type="email"
                    value={form.correo}
                    onChange={(e) => setForm({ ...form, correo: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Curso de Interés</label>
                <select
                  required
                  value={form.curso}
                  onChange={(e) => setForm({ ...form, curso: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                >
                  <option value="">Selecciona un curso</option>
                  <option value="ingles">Inglés Conversacional</option>
                  <option value="frances">Francés Moderno</option>
                  <option value="mandarin">Chino Mandarín</option>
                  <option value="bioquimica">Bioquímica Aplicada</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Mensaje</label>
                <textarea
                  required
                  rows={4}
                  value={form.mensaje}
                  onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors resize-none"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all ${
                  status === "success" 
                    ? "bg-green-600 text-white" 
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                {status === "sending" && <Loader2 className="animate-spin" size={18} />}
                {status === "success" && "¡Mensaje enviado!"}
                {status === "error" && "Error. Reintenta."}
                {status === "idle" && (
                  <>
                    Enviar Mensaje
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>

            {/* Mensaje de éxito extra debajo del botón */}
            {status === "success" && (
              <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-3 text-green-600 animate-in fade-in slide-in-from-top-2">
                <CheckCircle2 size={18} />
                <p className="text-sm font-medium">
                  Solicitud enviada satisfactoriamente, te responderemos en breve.
                </p>
              </div>
            )}

            <div className="mt-6 pt-6 border-t border-border flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Mail size={16} />
              gilmerjesusgonz@gmail.com
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;