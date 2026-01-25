import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CartDrawer from "@/components/CartDrawer";

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
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <CartDrawer />
        <main className="pt-20 min-h-screen bg-gray-50">
          {children}
        </main>
      </body>
    </html>
  );
}
