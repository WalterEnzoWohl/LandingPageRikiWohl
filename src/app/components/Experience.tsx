import { motion } from "motion/react";

const bartenderImg =
  "https://images.unsplash.com/photo-1770024560841-0b7c36932f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJ0ZW5kZXIlMjBtaXhpbmclMjBjb2NrdGFpbCUyMGVsZWdhbnQlMjBldmVudHxlbnwxfHx8fDE3Nzc0ODgyMTV8MA&ixlib=rb-4.1.0&q=80&w=1080";
const cocktailImg =
  "https://images.unsplash.com/photo-1597241693839-07d7fb803af1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NrdGFpbCUyMGdsYXNzJTIwZ29sZCUyMGRhcmslMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3NzQ4ODIxOHww&ixlib=rb-4.1.0&q=80&w=1080";
const detailImg =
  "https://images.unsplash.com/photo-1695335751660-95bf176c2493?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NrdGFpbCUyMGRldGFpbCUyMGljZSUyMGNyeXN0YWwlMjBnbGFzc3dhcmV8ZW58MXx8fHwxNzc3NDg4MjI1fDA&ixlib=rb-4.1.0&q=80&w=1080";
const mojitImg =
  "https://images.unsplash.com/photo-1649435217989-6b08c42b1ad8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwY29ja3RhaWwlMjBtb2ppdG8lMjBsaW1lJTIwbWludHxlbnwxfHx8fDE3Nzc0ODgyMTl8MA&ixlib=rb-4.1.0&q=80&w=1080";

export function Experience() {
  return (
    <section id="experiencia" style={{ background: "#050505", padding: "6rem 0", overflow: "hidden" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-xl mb-14">
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
            La experiencia
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
            Más que una barra,{" "}
            <em style={{ color: "#C8A45D", fontStyle: "italic" }}>
              un momento dentro del evento
            </em>
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#D8D4CB",
              fontSize: "1rem",
              fontWeight: 300,
              lineHeight: 1.8,
            }}
          >
            Cada evento tiene su propio ritmo. La barra acompaña la recepción,
            la fiesta y los momentos de encuentro con una propuesta pensada para
            que los invitados disfruten, conversen y recuerden.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-12 gap-4" style={{ height: "500px" }}>
          {/* Large left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-12 md:col-span-7 overflow-hidden"
            style={{ borderRadius: "4px", position: "relative" }}
          >
            <img
              src={bartenderImg}
              alt="Bartender en acción"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.5s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")}
            />
            <div
              style={{
                position: "absolute",
                bottom: "1.2rem",
                left: "1.2rem",
                background: "rgba(5,5,5,0.75)",
                backdropFilter: "blur(6px)",
                border: "1px solid rgba(200,164,93,0.25)",
                borderRadius: "2px",
                padding: "0.5rem 1rem",
              }}
            >
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#C8A45D",
                  fontSize: "0.65rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                Bartender en acción
              </p>
            </div>
          </motion.div>

          {/* Right column */}
          <div className="col-span-12 md:col-span-5 flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="overflow-hidden flex-1"
              style={{ borderRadius: "4px", position: "relative" }}
            >
              <img
                src={cocktailImg}
                alt="Cocktail terminado"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.5s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")}
              />
            </motion.div>
            <div className="grid grid-cols-2 gap-4 flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="overflow-hidden"
                style={{ borderRadius: "4px" }}
              >
                <img
                  src={detailImg}
                  alt="Detalle cristalería"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.06)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="overflow-hidden"
                style={{ borderRadius: "4px" }}
              >
                <img
                  src={mojitImg}
                  alt="Mojito fresco"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.06)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
