import localFont from "next/font/local"
import "./globals.css"

const montserrat = localFont({
  src: "./fonts/Montserrat-Regular.woff",
  variable: "--font-montserrat",
  weight: "400", // Ajuste o peso se necessário
})

export const metadata = {
  title: "Naturalis",
  description: "Store Naturalis",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased bg-slate-50`}>{children}</body>
    </html>
  )
}
