import { motion } from "motion/react";
import { Wine, Sparkles, Star, Leaf, Briefcase } from "lucide-react";

const packs = [
  {
    icon: Wine,
    name: "Classic Bar",
    ideal: "Eventos privados y celebraciones simples",
    description:
      "Una propuesta de barra funcional, tragos clásicos, bebidas base y atención profesional.",
    tag: "Esencial",
  },
  {
    icon: Star,
    name: "Premium Bar",
    ideal: "Casamientos y eventos elegantes",
    description:
      "Mayor variedad de cocktails, bebidas premium, presentación cuidada y barra libre durante el evento.",
    tag: "Más popular",
    highlight: true,
  },
  {
    icon: Sparkles,
    name: "Signature Bar",
    ideal: "Celebraciones boutique y eventos especiales",
    description:
      "Carta personalizada, cocktails seleccionados, estética cuidada y experiencia adaptada al estilo del evento.",
    tag: "Boutique",
  },
  {
    icon: Leaf,
    name: "Fresh & Mocktails",
    ideal: "Cumpleaños de 15, eventos diurnos y opciones sin alcohol",
    description:
      "Licuados, mocktails, limonadas, bebidas frescas y propuestas frutales.",
    tag: "Sin alcohol",
  },
  {
    icon: Briefcase,
    name: "Corporate Bar",
    ideal: "Eventos empresariales, lanzamientos y encuentros institucionales",
    description:
      "Atención profesional, imagen cuidada y propuesta adaptable al tono del evento.",
    tag: "Corporativo",
  },
];

export function Services() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="servicios" style={{ background: "#0A0A0A", padding: "6rem 0" }}>
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
            Nuestros servicios
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
            Packs a tu medida
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#D8D4CB",
              fontSize: "0.95rem",
              fontWeight: 300,
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Cada evento es único. Elegí el pack que mejor se adapta a tu celebración.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packs.map((pack, i) => (
            <motion.div
              key={pack.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col"
              style={{
                background: pack.highlight ? "#1A1508" : "#151515",
                border: pack.highlight ? "1px solid rgba(200,164,93,0.5)" : "1px solid #3A3A37",
                borderRadius: "4px",
                padding: "2rem",
                transition: "transform 0.25s, border-color 0.25s",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-4px)";
                if (!pack.highlight) el.style.borderColor = "rgba(200,164,93,0.35)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                if (!pack.highlight) el.style.borderColor = "#3A3A37";
              }}
            >
              {/* Highlight glow */}
              {pack.highlight && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: "linear-gradient(to right, transparent, #C8A45D, transparent)",
                  }}
                />
              )}

              {/* Tag */}
              <div className="flex items-center justify-between mb-4">
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: pack.highlight ? "#050505" : "#C8A45D",
                    background: pack.highlight ? "#C8A45D" : "rgba(200,164,93,0.1)",
                    padding: "0.2rem 0.6rem",
                    borderRadius: "2px",
                    fontWeight: 600,
                    border: pack.highlight ? "none" : "1px solid rgba(200,164,93,0.25)",
                  }}
                >
                  {pack.tag}
                </span>
                <pack.icon size={18} color={pack.highlight ? "#C8A45D" : "#6B6B68"} strokeWidth={1.5} />
              </div>

              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#F4F1EA",
                  fontSize: "1.4rem",
                  fontWeight: 600,
                  marginBottom: "0.5rem",
                }}
              >
                {pack.name}
              </h3>

              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#C8A45D",
                  fontSize: "0.75rem",
                  fontWeight: 400,
                  letterSpacing: "0.04em",
                  marginBottom: "1rem",
                  opacity: 0.85,
                }}
              >
                Ideal para: {pack.ideal}
              </p>

              <div
                style={{
                  width: "24px",
                  height: "1px",
                  background: "#C8A45D",
                  marginBottom: "1rem",
                  opacity: 0.4,
                }}
              />

              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#D8D4CB",
                  fontSize: "0.875rem",
                  fontWeight: 300,
                  lineHeight: 1.7,
                  flexGrow: 1,
                  marginBottom: "1.8rem",
                }}
              >
                {pack.description}
              </p>

              <button
                onClick={() => handleNav("#contacto")}
                style={{
                  background: "transparent",
                  color: "#C8A45D",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "0.65rem 1.2rem",
                  borderRadius: "2px",
                  border: "1px solid rgba(200,164,93,0.4)",
                  cursor: "pointer",
                  transition: "background 0.2s, color 0.2s",
                  width: "100%",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#C8A45D";
                  e.currentTarget.style.color = "#050505";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#C8A45D";
                }}
              >
                Consultar este pack
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
