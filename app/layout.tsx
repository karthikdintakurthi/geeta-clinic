import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Geeta Diabetes And Endocrine Centre | Dr. Geeta Annamaneni | Ongole",
  description:
    "Dr. Geeta Annamaneni - MBBS, MD, DM Endocrinology. Specialist in Diabetes, Thyroid, PCOS, and Endocrine disorders in Ongole, Andhra Pradesh.",
  keywords: [
    "Endocrinologist Ongole",
    "Diabetes doctor Ongole",
    "Thyroid specialist Andhra Pradesh",
    "Dr Geeta Annamaneni",
  ],
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Fraunces:wght@500;600;700&family=Noto+Sans+Telugu:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
