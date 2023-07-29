import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Cheatsheet Lab!",
  description: "Developers cheatsheet",
}

export default function RootLayout({ children }) {  
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
