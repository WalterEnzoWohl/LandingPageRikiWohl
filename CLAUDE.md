# Riki Wohl — Barra Móvil

Landing page profesional para la barra móvil de Riki Wohl, generada desde una maqueta de Figma.

## Stack

- **React 18** + **TypeScript 5**
- **Vite 6.4** (dev server y bundler)
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **shadcn/ui** (68 componentes en `src/app/components/ui/`)
- **Radix UI** (primitivos accesibles subyacentes a shadcn)
- **Motion** (Framer Motion) para animaciones
- **react-hook-form** para el formulario de contacto

## Comandos

```bash
npm run dev      # Servidor local en http://localhost:5173
npm run build    # Build de producción (tsc + vite build)
npm run preview  # Previsualizar el build
```

## Estructura

```
src/
├── app/
│   ├── App.tsx                  # Componente raíz, ensambla todas las secciones
│   └── components/
│       ├── Header.tsx           # Navbar fijo con efecto blur al hacer scroll
│       ├── Hero.tsx             # Sección principal con CTA
│       ├── Differentials.tsx    # Valores y badge del fundador
│       ├── WeddingsSection.tsx  # Sección bodas
│       ├── Services.tsx         # 5 paquetes de servicio
│       ├── WhatIncludes.tsx     # Grid de 13 ítems incluidos
│       ├── CocktailMenu.tsx     # Menú de cócteles con tabs
│       ├── Experience.tsx       # Grilla de fotos
│       ├── Gallery.tsx          # Galería filtrable con lightbox
│       ├── Testimonials.tsx     # Testimonios y métricas
│       ├── FAQ.tsx              # Acordeón de preguntas frecuentes
│       ├── ContactForm.tsx      # Formulario + botón WhatsApp
│       ├── Footer.tsx           # Pie de página
│       ├── figma/               # Utilidades generadas por Figma
│       └── ui/                  # Componentes shadcn/ui (no editar manualmente)
├── styles/
│   ├── index.css                # Entry point de estilos
│   ├── fonts.css                # Google Fonts: Playfair Display + Inter
│   ├── tailwind.css             # Config Tailwind v4 + tw-animate-css
│   └── theme.css                # Design tokens en variables CSS
└── main.tsx                     # Entry point de React
```

## Sistema de diseño

Los tokens están en [src/styles/theme.css](src/styles/theme.css):

- **Color primario**: `#C8A45D` (dorado)
- **Fondo**: `#050505` (negro profundo)
- **Tipografía display**: Playfair Display (títulos)
- **Tipografía body**: Inter (texto general)

## Imágenes

Las imágenes actuales son URLs de Unsplash (placeholders). Para producción, reemplazarlas por fotos reales del evento en los componentes correspondientes.

## Contacto (datos de ejemplo a reemplazar)

- **WhatsApp**: `5491100000000` → cambiar en `ContactForm.tsx`
- **Email**: `info@rikiwohl.com` → cambiar en `Footer.tsx` y `ContactForm.tsx`
- **Instagram**: `@rikiwohl` → cambiar en `Footer.tsx`
- **Ubicación**: Zona Norte, CABA → cambiar en `Footer.tsx`

## Notas

- Tailwind v4 no usa `tailwind.config.js`; la configuración va en `src/styles/tailwind.css`.
- El alias `@/` apunta a `./src/` (configurado en `vite.config.ts` y `tsconfig.app.json`).
- Los componentes `ui/` son de shadcn/ui; para agregar nuevos usar el CLI de shadcn.
- El formulario de contacto no tiene backend — el botón de WhatsApp abre un mensaje pre-armado.
