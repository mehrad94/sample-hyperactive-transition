import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import TransitionProvider from "./components/providers/TransitionProvider";

export const metadata: Metadata = {
  title: "Sample Project",
  description: "Hyperactivity transition page with NextJs and Gsap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TransitionProvider>
          <Navbar />
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
