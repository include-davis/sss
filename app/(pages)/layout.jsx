import "./_globals/globals.scss";
import { Oxanium, Space_Grotesk} from "next/font/google";

export const metadata = {
  title: "Space and Satellite Systems",
  description: "Space and Satellite Systems club at UC Davis",
  icons: "./favicon.png",
};

const spaceGrotesk = Space_Grotesk();
const oxanium = Oxanium();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} ${oxanium.className}`}>{children}</body>
    </html>
  );
}
