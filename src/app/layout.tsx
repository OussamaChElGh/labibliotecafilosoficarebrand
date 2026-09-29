import type { Metadata } from "next";
import "./globals.css";
import "./markdown.css";

export const metadata: Metadata = {
  title: "La Biblioteca Filosófica | Sabiduría y Reflexión",
  description: "Explora más de 200 artículos de filosofía, guías de lectura y reflexiones profundas para comprender el mundo y a ti mismo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <div className="bg-glow"></div>
        
        <nav className="glass-panel main-nav">
          <div className="container nav-container">
            <a href="/" className="logo">
              La Biblioteca <span>Filosófica</span>
            </a>
            <div className="nav-links">
              <a href="/articulos">Artículos</a>
              <a href="/autores">Autores</a>
              <a href="/premium" className="nav-highlight">Premium</a>
            </div>
          </div>
        </nav>

        <main>{children}</main>

        <footer className="main-footer container">
          <p>© {new Date().getFullYear()} La Biblioteca Filosófica. Todos los derechos reservados.</p>
        </footer>
      </body>
    </html>
  );
}
