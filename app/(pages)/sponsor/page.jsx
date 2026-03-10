import Hero from "../_components/Hero/Hero";
import styles from "./page.module.scss";
import ContactForm from "../_components/ContactForm/Contact";

export default function Sponsor() {
  return (
    <main>
      <Hero
        textContent={<h1>Sponsor Us</h1>}
        imageSrc="/sponsor_hero_graphic.svg"
        imageAlt="Hero graphic"
      />
      <ContactForm />
    </main>
  );
}
