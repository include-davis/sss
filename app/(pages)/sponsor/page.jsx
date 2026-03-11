import Hero from "../_components/Hero/Hero";
import styles from "./page.module.scss";
import ContactForm from "../_components/ContactForm/Contact";
import WhyJoinSSS from "../_components/WhyJoinSSS/why-join-sss";
import WhySponsorUs from "../_components/WhySponsorUs/whysponsorus";

export default function Sponsor() {
  return (
    <main>
      <Hero
        textContent={<h1>Sponsor Us</h1>}
        imageSrc="/hero/sponsorus-graphic.svg"
        imageAlt="Hero graphic"
      />
      <WhySponsorUs/>
      <ContactForm />
    </main>
  );
}
