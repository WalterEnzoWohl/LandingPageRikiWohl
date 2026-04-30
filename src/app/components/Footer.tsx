import { Instagram, MessageCircle, Mail, MapPin } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Carta", href: "#carta" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Galería", href: "#galeria" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "#050505",
        borderTop: "1px solid rgba(200,164,93,0.12)",
        paddingTop: "4rem",
        paddingBottom: "2rem",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#C8A45D",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  marginBottom: "0.2rem",
                }}
              >
                Riki Wohl
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#6B6B68",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                Drinks &amp; Events
              </p>
            </div>
            <div
              style={{
                width: "32px",
                height: "1px",
                background: "#C8A45D",
                marginBottom: "1.2rem",
                opacity: 0.5,
              }}
            />
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#6B6B68",
                fontSize: "0.8rem",
                fontWeight: 300,
                lineHeight: 1.7,
                maxWidth: "240px",
              }}
            >
              Barra móvil premium para eventos que merecen ser recordados.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#C8A45D",
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontWeight: 500,
                marginBottom: "1.2rem",
              }}
            >
              Navegación
            </p>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#6B6B68",
                    fontSize: "0.82rem",
                    fontWeight: 300,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    padding: "0.1rem 0",
                    transition: "color 0.2s",
                    width: "fit-content",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#D8D4CB")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#6B6B68")}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#C8A45D",
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontWeight: 500,
                marginBottom: "1.2rem",
              }}
            >
              Contacto
            </p>
            <div className="flex flex-col gap-3 mb-6">
              <a
                href="https://instagram.com/rikiwohl"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  color: "#6B6B68",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.82rem",
                  fontWeight: 300,
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#D8D4CB")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#6B6B68")}
              >
                <Instagram size={15} color="#C8A45D" strokeWidth={1.5} />
                @rikiwohl
              </a>
              <a
                href="https://wa.me/5491100000000"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  color: "#6B6B68",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.82rem",
                  fontWeight: 300,
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#D8D4CB")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#6B6B68")}
              >
                <MessageCircle size={15} color="#C8A45D" strokeWidth={1.5} />
                WhatsApp
              </a>
              <a
                href="mailto:info@rikiwohl.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  color: "#6B6B68",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.82rem",
                  fontWeight: 300,
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#D8D4CB")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#6B6B68")}
              >
                <Mail size={15} color="#C8A45D" strokeWidth={1.5} />
                info@rikiwohl.com
              </a>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.6rem",
              }}
            >
              <MapPin size={14} color="#C8A45D" strokeWidth={1.5} style={{ marginTop: "2px", flexShrink: 0 }} />
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#6B6B68",
                  fontSize: "0.78rem",
                  fontWeight: 300,
                  lineHeight: 1.6,
                }}
              >
                Quinta Benavidez · Zona Norte · CABA y alrededores
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "rgba(58,58,55,0.5)",
            marginBottom: "1.5rem",
          }}
        />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#3A3A37",
              fontSize: "0.72rem",
              fontWeight: 300,
            }}
          >
            © {new Date().getFullYear()} Riki Wohl — Drinks &amp; Events. Todos los derechos reservados.
          </p>
          <div className="flex gap-3">
            <a
              href="https://instagram.com/rikiwohl"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                border: "1px solid rgba(200,164,93,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "border-color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,164,93,0.5)";
                (e.currentTarget as HTMLElement).style.background = "rgba(200,164,93,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,164,93,0.2)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              <Instagram size={14} color="#C8A45D" strokeWidth={1.5} />
            </a>
            <a
              href="https://wa.me/5491100000000"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                border: "1px solid rgba(200,164,93,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "border-color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,164,93,0.5)";
                (e.currentTarget as HTMLElement).style.background = "rgba(200,164,93,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,164,93,0.2)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              <MessageCircle size={14} color="#C8A45D" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
