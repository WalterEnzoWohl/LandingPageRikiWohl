import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Differentials } from "./components/Differentials";
import { WeddingsSection } from "./components/WeddingsSection";
import { Services } from "./components/Services";
import { WhatIncludes } from "./components/WhatIncludes";
import { CocktailMenu } from "./components/CocktailMenu";
import { Experience } from "./components/Experience";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div
      style={{
        background: "#050505",
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <Header />
      <Hero />
      <Differentials />
      <WeddingsSection />
      <Services />
      <WhatIncludes />
      <CocktailMenu />
      <Experience />
      <Gallery />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}
