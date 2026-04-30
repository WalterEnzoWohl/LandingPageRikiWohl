import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Carta", href: "#carta" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Galería", href: "#galeria" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(5,5,5,0.97)"
          : "linear-gradient(to bottom, rgba(5,5,5,0.85), transparent)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(200,164,93,0.15)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav("#inicio")}
          className="flex flex-col items-start group"
        >
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#C8A45D",
              letterSpacing: "0.04em",
              fontSize: "1.25rem",
              fontWeight: 600,
            }}
          >
            Riki Wohl
          </span>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#D8D4CB",
              letterSpacing: "0.18em",
              fontSize: "0.6rem",
              fontWeight: 400,
              textTransform: "uppercase",
            }}
          >
            Drinks &amp; Events
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#D8D4CB",
                fontSize: "0.8rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontWeight: 400,
                transition: "color 0.2s",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C8A45D")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#D8D4CB")}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <button
            onClick={() => handleNav("#contacto")}
            style={{
              background: "#C8A45D",
              color: "#050505",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "0.6rem 1.4rem",
              borderRadius: "2px",
              border: "none",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#B76E2B")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#C8A45D")}
          >
            Consultar disponibilidad
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={() => handleNav("#contacto")}
            style={{
              background: "#C8A45D",
              color: "#050505",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "0.45rem 0.9rem",
              borderRadius: "2px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Consultar
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: "#C8A45D", background: "none", border: "none", cursor: "pointer" }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(5,5,5,0.98)",
            borderTop: "1px solid rgba(200,164,93,0.15)",
          }}
          className="lg:hidden"
        >
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#D8D4CB",
                  fontSize: "0.85rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: 400,
                  padding: "0.75rem 0",
                  borderBottom: "1px solid rgba(58,58,55,0.4)",
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  borderBottom: "1px solid rgba(58,58,55,0.4)",
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
