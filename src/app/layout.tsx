import React from "react";
import { Poppins } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Sellucas | Frontend Developer",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "700", "800"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={poppins.className} lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
