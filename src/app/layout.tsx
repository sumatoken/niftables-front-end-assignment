import type { Metadata } from "next";
import "./globals.css";
import Header from "@ui/header";
import Footer from "@ui/footer";

export const metadata: Metadata = {
  title: "Niftables front end assignment",
  description: "The front end assignment to join Niftables",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
