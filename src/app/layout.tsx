import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Noted",
  description: "AI powered note taking App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
