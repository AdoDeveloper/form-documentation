import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Formulario Supabase",
  description: "Formulario dinámico con Supabase y Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen`}
      >
        <div className="flex flex-col min-h-screen">
          {/* Puedes añadir un header fijo aquí si lo deseas */}
          <main className="flex-grow w-full">{children}</main>
          {/* Puedes añadir un footer aquí si lo deseas */}
        </div>
      </body>
    </html>
  );
}