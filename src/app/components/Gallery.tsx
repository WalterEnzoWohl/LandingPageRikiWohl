import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

const heroImg = "https://images.unsplash.com/photo-1765766600172-11694c2cebd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwY29ja3RhaWwlMjBiYXIlMjBkYXJrJTIwcHJlbWl1bXxlbnwxfHx8fDE3Nzc0ODgyMTV8MA&ixlib=rb-4.1.0&q=80&w=1080";
const bartenderImg = "https://images.unsplash.com/photo-1770024560841-0b7c36932f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJ0ZW5kZXIlMjBtaXhpbmclMjBjb2NrdGFpbCUyMGVsZWdhbnQlMjBldmVudHxlbnwxfHx8fDE3Nzc0ODgyMTV8MA&ixlib=rb-4.1.0&q=80&w=1080";
const weddingImg = "https://images.unsplash.com/photo-1768508948990-f5866f800fad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwZWxlZ2FudCUyMGRyaW5rcyUyMGJhcnxlbnwxfHx8fDE3Nzc0ODgyMTh8MA&ixlib=rb-4.1.0&q=80&w=1080";
const cocktailImg = "https://images.unsplash.com/photo-1597241693839-07d7fb803af1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NrdGFpbCUyMGdsYXNzJTIwZ29sZCUyMGRhcmslMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3NzQ4ODIxOHww&ixlib=rb-4.1.0&q=80&w=1080";
const mojitImg = "https://images.unsplash.com/photo-1649435217989-6b08c42b1ad8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwY29ja3RhaWwlMjBtb2ppdG8lMjBsaW1lJTIwbWludHxlbnwxfHx8fDE3Nzc0ODgyMTl8MA&ixlib=rb-4.1.0&q=80&w=1080";
const barSetupImg = "https://images.unsplash.com/photo-1650201920651-f8aa554f0df1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJ0ZW5kZXIlMjBwcm9mZXNzaW9uYWwlMjBtb2JpbGUlMjBiYXIlMjBzZXR1cHxlbnwxfHx8fDE3Nzc0ODgyMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080";
const corporateImg = "https://images.unsplash.com/photo-1768508660861-16b3b4272e6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMGRyaW5rcyUyMHBhcnR5JTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzc3NDg4MjIyfDA&ixlib=rb-4.1.0&q=80&w=1080";
const detailImg = "https://images.unsplash.com/photo-1695335751660-95bf176c2493?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NrdGFpbCUyMGRldGFpbCUyMGljZSUyMGNyeXN0YWwlMjBnbGFzc3dhcmV8ZW58MXx8fHwxNzc3NDg4MjI1fDA&ixlib=rb-4.1.0&q=80&w=1080";
const quinceImg = "https://images.unsplash.com/photo-1767591311431-5bfb8cc48bdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWluY2VhJUMzJUIxZXJhJTIwY2VsZWJyYXRpb24lMjBldmVudCUyMGRlY29yYXRpb258ZW58MXx8fHwxNzc3NDg4MjI2fDA&ixlib=rb-4.1.0&q=80&w=1080";

const tabs = ["Todos", "Casamientos", "Cocktails", "Barra en acción", "Detalles premium", "Eventos privados", "Eventos empresariales"];

const allImages = [
  { src: heroImg, category: "Barra en acción", label: "Barra premium" },
  { src: weddingImg, category: "Casamientos", label: "Casamiento elegante" },
  { src: cocktailImg, category: "Cocktails", label: "Cocktail gold" },
  { src: bartenderImg, category: "Barra en acción", label: "Bartender en acción" },
  { src: mojitImg, category: "Cocktails", label: "Mojito fresco" },
  { src: barSetupImg, category: "Barra en acción", label: "Barra montada" },
  { src: corporateImg, category: "Eventos empresariales", label: "Evento corporativo" },
  { src: detailImg, category: "Detalles premium", label: "Cristalería de lujo" },
  { src: quinceImg, category: "Eventos privados", label: "Celebración privada" },
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
