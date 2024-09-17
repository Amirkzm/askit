import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <SignedOut>
            <SignInButton />
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
