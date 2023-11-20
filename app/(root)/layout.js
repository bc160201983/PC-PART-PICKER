import { Inter } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PC Builder and Management System",
  description: "PC Builder and Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
