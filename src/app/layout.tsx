
import Footer from "@/components/footer";
import "./globals.css";
import Header from "@/components/header";

import { Metadata } from "next"


export const metadata: Metadata = {
  title: 'Aula Next Js do zero!',
  description: 'Aprendendo Next Js do zero com Sujeito Programador!',
  openGraph: {
    title: 'Aula Next Js do zero!',
    description: 'Aprendendo Next Js do zero com Sujeito Programador!',
    images:['https://sujeitoprogramador.com/steve.png']
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow:true
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className="antialiased"
      >
        <Header/>
         {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}
