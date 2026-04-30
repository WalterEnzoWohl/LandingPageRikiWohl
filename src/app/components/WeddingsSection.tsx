import { motion } from "motion/react";

const weddingImage =
  "https://images.unsplash.com/photo-1768508948990-f5866f800fad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwZWxlZ2FudCUyMGRyaW5rcyUyMGJhcnxlbnwxfHx8fDE3Nzc0ODgyMTh8MA&ixlib=rb-4.1.0&q=80&w=1080";

export function WeddingsSection() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section style={{ background: "#050505", padding: "6rem 0", overflow: "hidden" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div
              style={{
                position: "absolute",
                top: "-16px",
                left: "-16px",
                right: "16px",
                bottom: "16px",
                border: "1px solid rgba(200,164,93,0.25)",
                borderRadius: "4px",
              }}
            />
            <img
              src={weddingImage}
              alt="Casamiento elegante"
              style={{
                width: "100%",
                height: "480px",
                objectFit: "cover",
                borderRadius: "4px",
                position: "relative",
                zIndex: 1,
              }}
            />
            {/* Badge */}
            <div
              style={{
                position: "absolute",
                bottom: "24px",
                right: "-12px",
                background: "#C8A45D",
                color: "#050505",
                fontFamily: "'Playfair Display', serif",
                fontSize: "0.85rem",
                fontWeight: 600,
                padding: "0.6rem 1.2rem",
                borderRadius: "2px",
                zIndex: 2,
                boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
              }}
            >
              Barra premium
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
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
              Bodas &amp; celebraciones
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#F4F1EA",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 600,
                lineHeight: 1.15,
                marginBottom: "1.5rem",
              }}
            >
              Especialistas en{" "}
              <em style={{ color: "#C8A45D", fontStyle: "italic" }}>casamientos</em>
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
              Sabemos que en un casamiento cada detalle importa. Por eso, la barra
              no se piensa solo como un punto de servicio, sino como una experiencia:
              un espacio donde los invitados se encuentran, disfrutan y celebran.
            </p>

            <button
              onClick={() => handleNav("#contacto")}
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
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#B76E2B")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#C8A45D")}
            >
              Cotizar barra para mi casamiento
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
