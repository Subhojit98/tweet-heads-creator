import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import StoreProvider from "./providers/StoreProvider";
const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trends",
  description: "The trend creator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
