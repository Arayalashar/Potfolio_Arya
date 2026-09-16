import "./globals.css";

export const metadata = {
  title: "Arya Alifia Al Ashar — UI/UX Designer & Junior Web Developer",
  description:
    "Portfolio of Arya Alifia Al Ashar — a passionate UI/UX Designer and Junior Web Developer crafting intuitive, beautiful digital experiences.",
  keywords: [
    "UI/UX Designer",
    "Web Developer",
    "Portofolio",
    "Arya Alifia",
    "Figma",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Arya Alifia Al Ashar" }],
  openGraph: {
    title: "Arya Alifia Al Ashar — UI/UX Designer & Junior Web Developer",
    description:
      "Explore Arya's portfolio featuring UI/UX design projects, web development work, and professional experience.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
