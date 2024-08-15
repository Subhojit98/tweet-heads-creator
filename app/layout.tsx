import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { GlobalConextProvider } from '@/app/context/AppContext';
const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trend",
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
        <GlobalConextProvider>
          {children}
        </GlobalConextProvider>
      </body>
    </html>
  );
}
