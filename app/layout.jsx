import "./globals.css";

export const metadata = {
  title: "Orçamento de Impressão 3D",
  description: "Formulário de orçamento para impressão 3D",
  icons: {
    icon: "/images/logo.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
