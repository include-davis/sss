import WhoAreWe from "../_components/who-are-we/who-are-we";

export default function TestPage() {
  return (
    <main>
      <WhoAreWe
        heading="Who are we?"
        paragraphs={[
          "Space and Satellite Systems Society (SSS) is a student-led organization at Arizona State University dedicated to advancing knowledge and hands-on experience in space systems engineering.",
          "We aim to create an inclusive environment where students from all disciplines can collaborate on satellite and space-related projects, bridging the gap between classroom learning and real-world aerospace applications.",
          "At SSS, we strive to inspire the next generation of space engineers and scientists by providing opportunities for research, design, and development of satellite systems and related technologies.",
        ]}
        imageSrc="/assets/images/who-are-we/rectangle-68.jpg"
        imageAlt="SSS group photo"
      />
    </main>
  );
}
