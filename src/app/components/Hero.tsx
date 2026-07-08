import { motion } from "motion/react";

const heroImage =
  "/imagenes/FOTO-1.jpg";

export function Hero() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#050505" }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      {/* Overlays */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(5,5,5,0.7) 0%, rgba(5,5,5,0.55) 40%, rgba(5,5,5,0.85) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(200,164,93,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Microcopy top */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "#C8A45D",
            fontSize: "0.7rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            fontWeight: 500,
            marginBottom: "1.5rem",
          }}
        >
          Casamientos · Eventos empresariales · Cumpleaños de 15 · Celebraciones privadas
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#F4F1EA",
            fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
            fontWeight: 600,
            lineHeight: 1.12,
            marginBottom: "1.5rem",
          }}
        >
          Barra móvil premium
          <br />
          <em style={{ color: "#C8A45D", fontStyle: "italic" }}>para eventos inolvidables</em>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mx-auto my-6"
          style={{
            width: "60px",
            height: "1px",
            background: "#C8A45D",
            transformOrigin: "center",
          }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "#D8D4CB",
            fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
            fontWeight: 300,
            lineHeight: 1.7,
            maxWidth: "560px",
            margin: "0 auto 2.5rem",
          }}
        >
          Coctelería, estética y atención personalizada para que cada invitado
          viva una experiencia distinta.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => handleNav("#contacto")}
            style={{
              background: "#C8A45D",
              color: "#050505",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "0.85rem 2rem",
              borderRadius: "2px",
              border: "none",
              cursor: "pointer",
              transition: "background 0.2s, transform 0.15s",
              minWidth: "220px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#B76E2B";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#C8A45D";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Consultar disponibilidad
          </button>
          <button
            onClick={() => handleNav("#servicios")}
            style={{
              background: "transparent",
              color: "#F4F1EA",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8rem",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "0.85rem 2rem",
              borderRadius: "2px",
              border: "1px solid #C8A45D",
              cursor: "pointer",
              transition: "background 0.2s, transform 0.15s",
              minWidth: "180px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(200,164,93,0.12)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Ver servicios
          </button>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #050505)",
        }}
      />
    </section>
  );
}
