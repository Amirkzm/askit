import { ClerkProvider } from "@clerk/nextjs";
import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "AskIt",
  description:
    "A place to ask and answer to questions in some fields like, computer, health, engineering, and others",

  icons: {
    icon: "/images/site-logo.svg",
  },
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <ThemeProvider>
        <html lang="en">
          <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
            {children}
          </body>
        </html>
      </ThemeProvider>
    </ClerkProvider>
  );
}
