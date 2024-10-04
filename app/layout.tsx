import Footer from "@/components/layout/Footer";
import { Inter, Poppins, Josefin_Sans, Open_Sans } from "next/font/google";
import "./globals.css";
import HeaderWithSellButton from "@/components/HeaderWithSellButton";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "500"],
  variable: "--font-poppins",
});
const josefinSans = Josefin_Sans({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-josefinSans",
});
const openSans = Open_Sans({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-openSans",
});

export const metadata = {
  title: "Salvage Yard",
  description: "Choosing salvage parts is not only a budget-friendly option but also a sustainable choice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} ${josefinSans.variable} ${openSans.variable}`}
      >
        <HeaderWithSellButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}
