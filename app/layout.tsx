import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "React Tic-Tac-Toe",
  description: "A simple React Tic-Tac-Toe game.",
  icons: [
    {
      rel: "icon",
      url: "/game-logo.png",
      type: "image/png",
    },
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// function CustomHead() {
//   return (
//     <Head>
//       <meta charSet="UTF-8" />
//       <link rel="icon" href="/game-logo.png" />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       <title>React Tic-Tac-Toe</title>
//     </Head>
//   );
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional custom metadata or other elements can be added here */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
