import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";

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
      <html lang="en">
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
          <SignedOut>
            <SignInButton>
              <button>Sign in with Clerk</button>
            </SignInButton>
            <h1>Root Layout kos</h1>
          </SignedOut>
          <SignedIn>
            <UserButton />
            <h1>Root Layout kir</h1>
          </SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
