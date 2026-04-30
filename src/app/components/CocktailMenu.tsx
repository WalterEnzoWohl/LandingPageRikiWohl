import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const categories = [
  {
    id: "clasicos",
    label: "Clásicos de barra",
    color: "#C8A45D",
    cocktails: [
      {
        name: "Fernet",
        ingredients: "Fernet Branca, Coca-Cola y hielo.",
      },
      {
        name: "Cuba Libre",
        ingredients: "Ron Bacardi, Coca-Cola, gajo de limón y hielo.",
      },
      {
        name: "Gin Tonic",
        ingredients: "Gin Aconcagua, tónica, gajo de limón y hielo.",
      },
      {
        name: "Destornillador",
        ingredients: "Vodka Smirnoff con jugo de naranja.",
      },
      {
        name: "Gancia Batido",
        ingredients: "Gancia, limón, azúcar y hielo.",
      },
    ],
  },
  {
    id: "frescos",
    label: "Frescos y frutales",
    color: "#6FAF8A",
    cocktails: [
      {
        name: "Caipirinha",
        ingredients: "Cachaza Velho Barreiro, limas, azúcar y hielo.",
      },
      {
        name: "Caipiroska",
        ingredients: "Vodka Smirnoff, limas, azúcar y hielo.",
      },
      {
        name: "Mojito",
        ingredients: "Ron Bacardi, menta, limas, azúcar y hielo.",
      },
      {
        name: "Daiquiri Frozen",
        ingredients: "Ron, pulpa de frutas, azúcar y hielo. Opciones: frutilla o durazno.",
      },
    ],
    note: "Caipirinhas, caipiroskas y mojitos pueden prepararse con maracuyá, frutilla o durazno.",
  },
  {
    id: "aperitivos",
    label: "Aperitivos premium",
    color: "#B76E2B",
    cocktails: [
      {
        name: "Garibaldi",
        ingredients: "Campari, jugo de naranja y hielo.",
      },
      {
        name: "Negroni",
        ingredients: "Gin, Campari y Cinzano.",
      },
      {
        name: "Vermut",
        ingredients: "Cinzano, rodaja de naranja o pomelo, soda y hielo.",
      },
      {
        name: "Aperol Spritz",
        ingredients: "Aperol, champagne, soda, rodaja de naranja y hielo.",
      },
      {
        name: "Cynar Julep",
        ingredients: "Cynar, limón, menta, azúcar y jugo de pomelo.",
      },
    ],
  },
  {
    id: "cerveza",
    label: "Cerveza",
    color: "#D8D4CB",
    cocktails: [
      {
        name: "Heineken",
        ingredients: "Lager premium importada.",
      },
    ],
  },
];

export function CocktailMenu() {
  const [activeTab, setActiveTab] = useState("clasicos");

  const active = categories.find((c) => c.id === activeTab)!;

  return (
    <section id="carta" style={{ background: "#0D0D0D", padding: "6rem 0" }}>
      <div className="max-w-5xl mx-auto px-6">
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
            Menú
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
            Nuestra carta de cocktails
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#D8D4CB",
              fontSize: "0.9rem",
              fontWeight: 300,
              lineHeight: 1.7,
              maxWidth: "520px",
              margin: "0 auto",
            }}
          >
            Clásicos de barra, propuestas frescas y opciones personalizadas para
            acompañar cada momento del evento.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.72rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: 500,
                padding: "0.55rem 1.2rem",
                borderRadius: "2px",
                border:
                  activeTab === cat.id
                    ? `1px solid ${cat.color}`
                    : "1px solid #3A3A37",
                background: activeTab === cat.id ? "rgba(200,164,93,0.08)" : "transparent",
                color: activeTab === cat.id ? cat.color : "#6B6B68",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cocktail List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
          >
            <div
              style={{
                background: "#151515",
                border: "1px solid #3A3A37",
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
              {/* Category header */}
              <div
                style={{
                  background: "rgba(200,164,93,0.06)",
                  borderBottom: "1px solid #3A3A37",
                  padding: "1.2rem 2rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <div
                  style={{
                    width: "4px",
                    height: "20px",
                    background: active.color,
                    borderRadius: "2px",
                    flexShrink: 0,
                  }}
                />
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#F4F1EA",
                    fontSize: "1.2rem",
                    fontWeight: 600,
                  }}
                >
                  {active.label}
                </h3>
              </div>

              {/* Cocktails */}
              <div>
                {active.cocktails.map((cocktail, i) => (
                  <div
                    key={cocktail.name}
                    style={{
                      padding: "1.2rem 2rem",
                      borderBottom:
                        i < active.cocktails.length - 1
                          ? "1px solid rgba(58,58,55,0.5)"
                          : "none",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: "1rem",
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "rgba(200,164,93,0.04)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                    }}
                  >
                    <div style={{ flexGrow: 1 }}>
                      <p
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          color: "#F4F1EA",
                          fontSize: "1rem",
                          fontWeight: 500,
                          marginBottom: "0.3rem",
                        }}
                      >
                        {cocktail.name}
                      </p>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          color: "#6B6B68",
                          fontSize: "0.8rem",
                          fontWeight: 300,
                          lineHeight: 1.5,
                        }}
                      >
                        {cocktail.ingredients}
                      </p>
                    </div>
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: active.color,
                        flexShrink: 0,
                        marginTop: "8px",
                        opacity: 0.7,
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Note */}
              {active.note && (
                <div
                  style={{
                    background: "rgba(111,175,138,0.06)",
                    borderTop: "1px solid rgba(111,175,138,0.2)",
                    padding: "1rem 2rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <div
                    style={{
                      width: "3px",
                      height: "100%",
                      background: "#6FAF8A",
                      flexShrink: 0,
                      alignSelf: "stretch",
                      minHeight: "16px",
                      borderRadius: "2px",
                    }}
                  />
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "#6FAF8A",
                      fontSize: "0.78rem",
                      fontWeight: 400,
                      fontStyle: "italic",
                    }}
                  >
                    {active.note}
                  </p>
                </div>
              )}
            </div>

            {/* Footer note */}
            <p
              className="text-center mt-8"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#6B6B68",
                fontSize: "0.8rem",
                fontWeight: 300,
                lineHeight: 1.7,
                fontStyle: "italic",
              }}
            >
              La carta puede adaptarse según el tipo de evento, cantidad de invitados y propuesta contratada.
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
