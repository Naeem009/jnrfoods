// Global root layout: sets fonts, header/footer and SEO defaults
import type { Metadata } from "next";
import { Inter, Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | JNR Foods (Pvt) Limited",
    default: "JNR Foods | Quality Cake Toppings",
  },
  description: "Shop premium baking essentials. Fresh, quality products delivered.",
  icons: {
    icon: "/jnrfavicon.png",
    shortcut: "/jnrfavicon.png",
    apple: "/jnrfavicon.png",
  },
  metadataBase: new URL("https://jnrfoods.com"),
  openGraph: {
    title: "JNR Foods (Pvt) Limited",
    description: "Shop premium cake toppings.",
    url: "https://jnrfoods.com",
    siteName: "JNR Foods (Pvt) Limited",
    images: [
      { url: "/jnrfavicon.png", width: 512, height: 512, alt: "JNR Foods (Pvt) Limited" },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JNR Foods (Pvt) Limited",
    description: "Shop premium cake toppings.",
    images: ["/1.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} ${montserrat.variable} antialiased bg-bg text-primary`}>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white text-primary px-3 py-2 rounded-md shadow">
          Skip to content
        </a>
        <Header />
        <main id="main" className="min-h-[70vh]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
