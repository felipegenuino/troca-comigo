import localFont from "next/font/local";

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
        <header>
          <nav>
            <a href="/">Home</a>
            <a href="/login">Login</a>
            <a href="/register">Cadastro</a>
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
