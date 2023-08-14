import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Provider from "@/components/Provider";

export const metadata: Metadata = {
  title: "Blog App",
  description: "Write and Share Articles All Around the World!",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#F5F5F5]">
        <Provider>
          <Navbar />
          <main className="min-h-screen px-48">{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
export default RootLayout;
