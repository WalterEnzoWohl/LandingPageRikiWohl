import { motion } from "motion/react";
import {
  ShoppingBag,
  User,
  Wine,
  Coffee,
  GlassWater,
  Wand2,
  Snowflake,
  Circle,
  Layers,
  Palette,
  Package,
  Clock,
  MapPin,
} from "lucide-react";

const items = [
  { icon: ShoppingBag, label: "Barra móvil" },
  { icon: User, label: "Bartender profesional" },
  { icon: Wine, label: "Bebidas alcohólicas" },
  { icon: Coffee, label: "Bebidas sin alcohol" },
  { icon: GlassWater, label: "Cocktails clásicos" },
  { icon: Wand2, label: "Cocktails personalizados" },
  { icon: Snowflake, label: "Hielo" },
  { icon: Circle, label: "Cristalería o vasos" },
  { icon: Layers, label: "Insumos para tragos" },
  { icon: Palette, label: "Decoración de barra" },
  { icon: Package, label: "Armado y desarme" },
  { icon: Clock, label: "Atención durante el evento" },
  { icon: MapPin, label: "Adaptación al lugar" },
];

export function WhatIncludes() {
  return (
    <section style={{ background: "#050505", padding: "6rem 0" }}>
      <div className="max-w-5xl mx-auto px-6">
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
            Qué incluye
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#F4F1EA",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 600,
              lineHeight: 1.2,
            }}
          >
            Todo lo necesario para que
            <br />
            <em style={{ color: "#C8A45D", fontStyle: "italic" }}>la barra funcione perfecto</em>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              style={{
                background: "#151515",
                border: "1px solid #3A3A37",
                borderRadius: "4px",
                padding: "1.5rem 1.2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.85rem",
                transition: "border-color 0.25s, transform 0.25s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(200,164,93,0.4)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "#3A3A37";
                el.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "1px solid rgba(200,164,93,0.3)",
                  background: "rgba(200,164,93,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <item.icon size={17} color="#C8A45D" strokeWidth={1.5} />
              </div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#D8D4CB",
                  fontSize: "0.8rem",
                  fontWeight: 400,
                  textAlign: "center",
                  lineHeight: 1.4,
                }}
              >
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "#6B6B68",
            fontSize: "0.8rem",
            fontWeight: 300,
            letterSpacing: "0.04em",
          }}
        >
          * La inclusión de cada ítem varía según el pack contratado.
        </motion.p>
      </div>
    </section>
  );
}
