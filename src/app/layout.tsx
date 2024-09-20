import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "My Quiz App",
  description: "Created my Ujjawal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
