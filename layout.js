export const metadata = {
  title: "Aurora Panel",
  description: "Painel de consultas inteligente",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="bg-[#0d0d11] text-white">
        {children}
      </body>
    </html>
  );
}