import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Excelente atención, tragos increíbles y una barra que fue protagonista de la noche.",
    author: "Valentina M.",
    event: "Casamiento · Zona Norte",
  },
  {
    text: "La propuesta acompañó perfecto el estilo del casamiento. Muy recomendable.",
    author: "Lucía & Martín",
    event: "Boda · Quinta Benavidez",
  },
  {
    text: "La barra fue uno de los puntos más comentados del evento. Todo impecable.",
    author: "Carolina R.",
    event: "Evento corporativo · CABA",
  },
];

const metrics = [
  { value: "+120", label: "Eventos realizados" },
  { value: "+4.000", label: "Invitados atendidos" },
  { value: "100%", label: "Especialistas en eventos privados" },
  { value: "Servicio", label: "Personalizado" },
];

export function Testimonials() {
  return (
    <section style={{ background: "#050505", padding: "6rem 0" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
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
            Testimonios
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#F4F1EA",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 600,
            }}
          >
            Lo que dicen nuestros clientes
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              style={{
                background: "#151515",
                border: "1px solid #3A3A37",
                borderRadius: "4px",
                padding: "2rem",
                position: "relative",
              }}
            >
              {/* Quote icon */}
              <div
                style={{
                  position: "absolute",
                  top: "1.5rem",
                  right: "1.5rem",
                  opacity: 0.15,
                }}
              >
                <Quote size={28} color="#C8A45D" />
              </div>

              {/* Top gold accent */}
              <div
                style={{
                  width: "28px",
                  height: "2px",
                  background: "#C8A45D",
                  marginBottom: "1.2rem",
                }}
              />

              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#F4F1EA",
                  fontSize: "1rem",
                  fontWeight: 400,
                  fontStyle: "italic",
                  lineHeight: 1.7,
                  marginBottom: "1.5rem",
                }}
              >
                "{t.text}"
              </p>

              <div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#C8A45D",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                  }}
                >
                  {t.author}
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#6B6B68",
                    fontSize: "0.73rem",
                    fontWeight: 300,
                    marginTop: "0.2rem",
                  }}
                >
                  {t.event}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Metrics */}
        <div
          style={{
            background: "#151515",
            border: "1px solid #3A3A37",
            borderRadius: "4px",
            padding: "2.5rem",
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#C8A45D",
                    fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                    fontWeight: 700,
                    marginBottom: "0.4rem",
                  }}
                >
                  {m.value}
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#D8D4CB",
                    fontSize: "0.78rem",
                    fontWeight: 300,
                    letterSpacing: "0.04em",
                  }}
                >
                  {m.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
