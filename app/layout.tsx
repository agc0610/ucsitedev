import type { Metadata } from "next";
import "@/app/globals.css";
import { inter } from "@/app/fonts";
import { lusitana } from "@/app/fonts"; 


export const metadata: Metadata = {
  title: {
    template: "%s | Unlikely Connections", 
    default: "Unlikely Connections",
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={'${inter.className} antialiased'}>{children}
      </body>
    </html>
  );
}
