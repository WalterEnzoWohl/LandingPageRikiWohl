import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";

const barSetupImg =
  "https://images.unsplash.com/photo-1650201920651-f8aa554f0df1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJ0ZW5kZXIlMjBwcm9mZXNzaW9uYWwlMjBtb2JpbGUlMjBiYXIlMjBzZXR1cHxlbnwxfHx8fDE3Nzc0ODgyMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080";

const values = [
  "Atención personalizada desde la primera consulta",
  "Propuesta adaptada al estilo y ritmo de cada evento",
  "Ingredientes y bebidas de calidad seleccionada",
  "Puntualidad, prolijidad y compromiso garantizado",
];

export function AboutSection() {
  return (
    <section style={{ background: "#0D0D0D", padding: "6rem 0", overflow: "hidden" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
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
              Sobre nosotros
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#F4F1EA",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 600,
                lineHeight: 1.2,
                marginBottom: "1.5rem",
              }}
            >
              Una barra con{" "}
              <em style={{ color: "#C8A45D", fontStyle: "italic" }}>
                nombre propio
              </em>
            </h2>

            <div
              style={{
                width: "40px",
                height: "1px",
                background: "#C8A45D",
                marginBottom: "1.8rem",
                opacity: 0.6,
              }}
            />

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#D8D4CB",
                fontSize: "1rem",
                fontWeight: 300,
                lineHeight: 1.8,
                marginBottom: "2.5rem",
              }}
            >
              Riki Wohl nace desde la pasión por los eventos, la coctelería y el buen servicio.
              Detrás de cada barra hay una atención cercana, pensada para acompañar a cada cliente
              desde la consulta inicial hasta el último brindis del evento.
            </p>

            {/* Values */}
            <div className="flex flex-col gap-3">
              {values.map((v, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle
                    size={16}
                    color="#C8A45D"
                    strokeWidth={1.5}
                    style={{ marginTop: "2px", flexShrink: 0 }}
                  />
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "#D8D4CB",
                      fontSize: "0.875rem",
                      fontWeight: 300,
                      lineHeight: 1.6,
                    }}
                  >
                    {v}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ position: "relative" }}
          >
            {/* Background frame */}
            <div
              style={{
                position: "absolute",
                bottom: "-16px",
                right: "-16px",
                left: "16px",
                top: "16px",
                border: "1px solid rgba(200,164,93,0.2)",
                borderRadius: "4px",
              }}
            />
            <img
              src={barSetupImg}
              alt="Riki Wohl - Bartender"
              style={{
                width: "100%",
                height: "480px",
                objectFit: "cover",
                borderRadius: "4px",
                position: "relative",
                zIndex: 1,
              }}
            />
            {/* Overlay card */}
            <div
              style={{
                position: "absolute",
                top: "1.5rem",
                left: "-1.5rem",
                background: "rgba(5,5,5,0.9)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(200,164,93,0.3)",
                borderRadius: "4px",
                padding: "1rem 1.4rem",
                zIndex: 2,
                boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
              }}
            >
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#C8A45D",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  marginBottom: "0.15rem",
                }}
              >
                Ricardo Wohl
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#6B6B68",
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Bartender &amp; Fundador
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
