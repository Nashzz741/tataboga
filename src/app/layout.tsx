// src/app/layout.tsx
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="m-0 p-0 w-full overflow-x-hidden">
      <body className="m-0 p-0 w-full overflow-x-hidden bg-[#F5EFEB]">
        {/* Pastikan main benar-benar bersih */}
        <main className="w-full m-0 p-0">{children}</main>
      </body>
    </html>
  );
}
