import "./_globals/globals.scss";
import { Oxanium } from "next/font/google";

export const metadata = {
  title: "Space and Satellite Systems",
  description: "Space and Satellite Systems club at UC Davis",
  icons: "./favicon.png",
};

const oxanium = Oxanium();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={oxanium.className}>{children}</body>
    </html>
  );
}
