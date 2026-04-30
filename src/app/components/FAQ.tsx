import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "¿Trabajan solo en Quinta Benavidez?",
    a: "No. También podemos trabajar en quintas, casas particulares, salones, espacios corporativos y lugares elegidos por el cliente.",
  },
  {
    q: "¿Qué tipo de eventos realizan?",
    a: "Casamientos, eventos empresariales, cumpleaños de 15, celebraciones privadas y eventos especiales.",
  },
  {
    q: "¿El servicio incluye bebidas sin alcohol?",
    a: "Sí. Podemos incluir gaseosas, agua, jugos, licuados, mocktails, limonadas y opciones frescas según el tipo de evento.",
  },
  {
    q: "¿Cuánto dura el servicio de barra?",
    a: "La duración se define según el evento y el pack contratado. Podemos adaptar la propuesta a la dinámica de la celebración.",
  },
  {
    q: "¿Qué incluye el servicio?",
    a: "Según el pack, puede incluir barra móvil, bartender, bebidas, hielo, vasos o cristalería, insumos, armado, desarme y atención durante el evento.",
  },
  {
    q: "¿Se puede personalizar la carta?",
    a: "Sí. La carta puede adaptarse según el tipo de evento, preferencias del cliente y estilo de la celebración.",
  },
  {
    q: "¿Hacen cocktails sin alcohol?",
    a: "Sí. Podemos ofrecer mocktails, licuados y opciones frescas para cumpleaños de 15, eventos diurnos o invitados que no consumen alcohol.",
  },
  {
    q: "¿Cómo solicito una cotización?",
    a: "Podés completar el formulario o escribir directamente por WhatsApp indicando fecha, lugar, tipo de evento y cantidad aproximada de invitados.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" style={{ background: "#050505", padding: "6rem 0" }}>
      <div className="max-w-3xl mx-auto px-6">
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
            Preguntas frecuentes
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#F4F1EA",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 600,
            }}
          >
            Todo lo que necesitás saber
          </h2>
        </div>

        {/* Accordions */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              style={{
                background: "#151515",
                border: open === i ? "1px solid rgba(200,164,93,0.4)" : "1px solid #3A3A37",
                borderRadius: "4px",
                overflow: "hidden",
                transition: "border-color 0.25s",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  padding: "1.3rem 1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1rem",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: open === i ? "#C8A45D" : "#F4F1EA",
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    transition: "color 0.2s",
                    lineHeight: 1.4,
                  }}
                >
                  {faq.q}
                </span>
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    border: "1px solid rgba(200,164,93,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    background: open === i ? "rgba(200,164,93,0.1)" : "transparent",
                    transition: "background 0.2s",
                  }}
                >
                  {open === i ? (
                    <Minus size={13} color="#C8A45D" />
                  ) : (
                    <Plus size={13} color="#C8A45D" />
                  )}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: "hidden" }}
                  >
                    <div
                      style={{
                        padding: "0 1.5rem 1.3rem",
                        borderTop: "1px solid rgba(58,58,55,0.5)",
                        paddingTop: "1rem",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          color: "#D8D4CB",
                          fontSize: "0.875rem",
                          fontWeight: 300,
                          lineHeight: 1.75,
                        }}
                      >
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
