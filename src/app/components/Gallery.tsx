import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

const heroImg = "/imagenes/FOTO-1.jpg";
const bartenderImg = "/imagenes/FOTO-4.jpg";
const weddingImg = "/imagenes/FOTO-2.jpg";
const cocktailImg = "/imagenes/FOTO-5.jpg";
const mojitImg = "/imagenes/FOTO-7.jpg";
const barSetupImg = "/imagenes/FOTO-3.jpg";
const corporateImg = "/imagenes/FOTO-8.jpg";
const detailImg = "/imagenes/FOTO-6.jpg";
const quinceImg = "/imagenes/FOTO-9.jpg";

const tabs = ["Todos", "Barra en acción", "Cocktails", "Detalles premium", "Fundador de la barra"];

const allImages = [
  { src: heroImg, category: "Barra en acción", label: "Barra premium" },
  { src: weddingImg, category: "Barra en acción", label: "Casamiento elegante" },
  { src: cocktailImg, category: "Cocktails", label: "Cocktail gold" },
  { src: bartenderImg, category: "Barra en acción", label: "Bartender en acción" },
  { src: mojitImg, category: "Cocktails", label: "Mojito fresco" },
  { src: barSetupImg, category: "Fundador de la barra", label: "Fundador de la barra" },
  { src: corporateImg, category: "Barra en acción", label: "Evento corporativo" },
  { src: detailImg, category: "Detalles premium", label: "Cristalería de lujo" },
  { src: quinceImg, category: "Barra en acción", label: "Celebración privada" },
];

export function Gallery() {
  const [activeTab, setActiveTab] = useState("Todos");
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const filtered =
    activeTab === "Todos"
      ? allImages
      : allImages.filter((img) => img.category === activeTab);

  return (
    <section id="galeria" style={{ background: "#0A0A0A", padding: "6rem 0" }}>
      <div className="max-w-6xl mx-auto px-6">
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
            Galería
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#F4F1EA",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 600,
            }}
          >
            Momentos que hablan
          </h2>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: 500,
                padding: "0.45rem 1rem",
                borderRadius: "2px",
                border: activeTab === tab ? "1px solid #C8A45D" : "1px solid #3A3A37",
                background: activeTab === tab ? "rgba(200,164,93,0.1)" : "transparent",
                color: activeTab === tab ? "#C8A45D" : "#6B6B68",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 gap-3"
        >
          <AnimatePresence>
            {filtered.map((img, i) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                onClick={() => setLightboxImg(img.src)}
                style={{
                  position: "relative",
                  borderRadius: "4px",
                  overflow: "hidden",
                  cursor: "pointer",
                  aspectRatio: i % 5 === 0 ? "4/5" : "1/1",
                  border: "1px solid #3A3A37",
                }}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform = "scale(1.06)";
                    const overlay = (e.currentTarget as HTMLImageElement).nextElementSibling as HTMLElement;
                    if (overlay) overlay.style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
                    const overlay = (e.currentTarget as HTMLImageElement).nextElementSibling as HTMLElement;
                    if (overlay) overlay.style.opacity = "0";
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(5,5,5,0.55)",
                    opacity: 0,
                    transition: "opacity 0.3s",
                    display: "flex",
                    alignItems: "flex-end",
                    padding: "1rem",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "#F4F1EA",
                      fontSize: "0.75rem",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {img.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImg(null)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(5,5,5,0.92)",
              zIndex: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
            }}
          >
            <button
              onClick={() => setLightboxImg(null)}
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                background: "rgba(200,164,93,0.1)",
                border: "1px solid rgba(200,164,93,0.3)",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#C8A45D",
              }}
            >
              <X size={18} />
            </button>
            <motion.img
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              src={lightboxImg}
              alt="Galería"
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "90%",
                maxHeight: "85vh",
                objectFit: "contain",
                borderRadius: "4px",
                border: "1px solid rgba(200,164,93,0.2)",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
