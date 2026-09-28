import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CartDrawer from "@/components/CartDrawer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import VisitTracker from "@/components/VisitTracker";
import PromoPopup from "@/components/PromoPopup";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "AFC Japan Store ID - Premium Health Solutions",
  description: "Produk Kesehatan Standar Jepang. Investasi terbaik untuk tubuh Anda melalui nutrisi fungsional premium untuk kesehatan otak, organ, dan sistem imun.",
  icons: {
    icon: '/icon-afc.jpeg',
    shortcut: '/icon-afc.jpeg',
    apple: '/icon-afc.jpeg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-18478439163"
        />
        <Script
          id="google-ads-tag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18478439163');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PromoPopup />
        <Navbar />
        <CartDrawer />
        <FloatingWhatsApp />
        <VisitTracker />
        <main className="pt-20 min-h-screen bg-gray-50 doodle-bg">
          {children}
        </main>
      </body>
    </html>
  );
}
