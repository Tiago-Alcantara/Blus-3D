import "./globals.css";

export const metadata = {
  title: "Orcamento de Impressao 3D",
  description: "Formulario de orcamento para impressao 3D"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
