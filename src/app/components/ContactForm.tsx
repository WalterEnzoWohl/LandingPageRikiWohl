import { useState } from "react";
import { motion } from "motion/react";
import { MessageCircle, Send, CheckCircle } from "lucide-react";

const eventTypes = [
  "Casamiento",
  "Cumpleaños de 15",
  "Evento empresarial",
  "Celebración privada",
  "Otro",
];

const packOptions = [
  "Classic Bar",
  "Premium Bar",
  "Signature Bar",
  "Fresh & Mocktails",
  "Corporate Bar",
  "No lo sé todavía",
];

const inputStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid #3A3A37",
  borderRadius: "2px",
  color: "#F4F1EA",
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.875rem",
  fontWeight: 300,
  padding: "0.8rem 1rem",
  width: "100%",
  outline: "none",
  transition: "border-color 0.2s",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  color: "#D8D4CB",
  fontSize: "0.72rem",
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  fontWeight: 500,
  marginBottom: "0.5rem",
  display: "block",
};

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    eventDate: "",
    location: "",
    guests: "",
    pack: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/5491100000000?text=${encodeURIComponent(
    "Hola Riki! Me interesa consultar disponibilidad para una barra en mi evento."
  )}`;

  return (
    <section id="contacto" style={{ background: "#0A0A0A", padding: "6rem 0" }}>
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#C8A45D",
              fontSize: "0.65rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              fontWeight: 500,
              marginBottom: "1rem",
            }}
          >
            Contacto
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#F4F1EA",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 600,
              marginBottom: "1rem",
            }}
          >
            Cotizá tu barra
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#D8D4CB",
              fontSize: "0.95rem",
              fontWeight: 300,
              lineHeight: 1.7,
            }}
          >
            Contanos algunos datos de tu evento y armamos una propuesta a medida.
          </p>
        </div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            background: "#151515",
            border: "1px solid #3A3A37",
            borderRadius: "4px",
            padding: "2.5rem",
          }}
        >
          {submitted ? (
            <div className="text-center py-12">
              <CheckCircle size={48} color="#C8A45D" strokeWidth={1} className="mx-auto mb-4" />
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#F4F1EA",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  marginBottom: "0.75rem",
                }}
              >
                ¡Consulta enviada!
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#D8D4CB",
                  fontSize: "0.9rem",
                  fontWeight: 300,
                  lineHeight: 1.7,
                  maxWidth: "380px",
                  margin: "0 auto",
                }}
              >
                Gracias por escribirnos. Nos pondremos en contacto a la brevedad para armar la propuesta ideal para tu evento.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                {/* Name */}
                <div>
                  <label style={labelStyle}>Nombre</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(200,164,93,0.6)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "#3A3A37")}
                  />
                </div>
                {/* Phone */}
                <div>
                  <label style={labelStyle}>WhatsApp</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+54 11..."
                    required
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(200,164,93,0.6)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "#3A3A37")}
                  />
                </div>
                {/* Email */}
                <div>
                  <label style={labelStyle}>Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(200,164,93,0.6)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "#3A3A37")}
                  />
                </div>
                {/* Event type */}
                <div>
                  <label style={labelStyle}>Tipo de evento</label>
                  <select
                    name="eventType"
                    value={form.eventType}
                    onChange={handleChange}
                    required
                    style={{ ...inputStyle, appearance: "none" as const }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(200,164,93,0.6)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "#3A3A37")}
                  >
                    <option value="" disabled style={{ background: "#151515" }}>
                      Seleccioná...
                    </option>
                    {eventTypes.map((t) => (
                      <option key={t} value={t} style={{ background: "#151515" }}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Date */}
                <div>
                  <label style={labelStyle}>Fecha del evento</label>
                  <input
                    name="eventDate"
                    type="date"
                    value={form.eventDate}
                    onChange={handleChange}
                    style={{
                      ...inputStyle,
                      colorScheme: "dark",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(200,164,93,0.6)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "#3A3A37")}
                  />
                </div>
                {/* Location */}
                <div>
                  <label style={labelStyle}>Lugar o localidad</label>
                  <input
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    placeholder="Quinta, salón, dirección..."
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(200,164,93,0.6)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "#3A3A37")}
                  />
                </div>
                {/* Guests */}
                <div>
                  <label style={labelStyle}>Cantidad aprox. de invitados</label>
                  <input
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                    placeholder="Ej: 80, 150, 200..."
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(200,164,93,0.6)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "#3A3A37")}
                  />
                </div>
                {/* Pack */}
                <div>
                  <label style={labelStyle}>Pack de interés</label>
                  <select
                    name="pack"
                    value={form.pack}
                    onChange={handleChange}
                    style={{ ...inputStyle, appearance: "none" as const }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(200,164,93,0.6)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "#3A3A37")}
                  >
                    <option value="" disabled style={{ background: "#151515" }}>
                      Seleccioná...
                    </option>
                    {packOptions.map((p) => (
                      <option key={p} value={p} style={{ background: "#151515" }}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="mb-7">
                <label style={labelStyle}>Mensaje adicional</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Contanos más sobre tu evento, estilo, preferencias..."
                  rows={4}
                  style={{
                    ...inputStyle,
                    resize: "vertical",
                    minHeight: "100px",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(200,164,93,0.6)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#3A3A37")}
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  style={{
                    background: "#C8A45D",
                    color: "#050505",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "0.85rem 1.8rem",
                    borderRadius: "2px",
                    border: "none",
                    cursor: "pointer",
                    transition: "background 0.2s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    flex: 1,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#B76E2B")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#C8A45D")}
                >
                  <Send size={15} />
                  Solicitar cotización
                </button>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "transparent",
                    color: "#F4F1EA",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "0.85rem 1.8rem",
                    borderRadius: "2px",
                    border: "1px solid rgba(200,164,93,0.4)",
                    cursor: "pointer",
                    transition: "background 0.2s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    flex: 1,
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(200,164,93,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }}
                >
                  <MessageCircle size={15} />
                  Hablar por WhatsApp
                </a>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
