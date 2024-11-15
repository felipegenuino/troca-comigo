import localFont from "next/font/local";
import Link from "next/link";

import "./globals.css"; // ou './index.css', dependendo do seu projeto

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Troca Comigo",
  description: "Gerencie seus álbuns e trocas de figurinhas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="border-orange-400">
          <nav>
            <Link href="/">Home</Link>
            <Link href="/login">Login</Link>
            <Link href="/register">Cadastro</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2024 Troca Comigo</p>
        </footer>
      </body>
    </html>
  );
}
