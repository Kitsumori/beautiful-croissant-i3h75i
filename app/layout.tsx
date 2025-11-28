import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import localFont from "next/font/local";
import { createClient } from "@/prismicio";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap"
});

const abcArizonaMix = localFont({
  src: [
    {
      path: "../public/fonts/ABCArizonaMix.woff2",
      weight: '400',
      style: 'normal',
    }
  ],  
  variable: "--font-abc-arizona-mix"
})

export async function generateMetadata(
): Promise<Metadata> {
  const client = createClient();

  const settings = await client.getSingle("settings");
  return {
    title: settings.data.site_title || "Title Missing",
    description: settings.data.meta_description || "Description Missing",
    openGraph: {
      images: [settings.data.og_image.url || ""]
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(nunito.variable, abcArizonaMix.variable)}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
