// import { Metadata } from "next"


// export const metadata: Metadata = {
//   title: 'Home - Aula Next Js do zero!',
//   description: 'Aprendendo Next Js do zero com Sujeito Programador!',
//   openGraph: {
//     title: 'Home - Aula Next Js do zero!',
//     description: 'Aprendendo Next Js do zero com Sujeito Programador!',
//     images:['https://sujeitoprogramador.com/steve.png']
//   },
//   robots: {
//     index: true,
//     follow: true,
//     nocache: true,
//     googleBot: {
//       index: true,
//       follow:true
//     }
//   }
// }

export const revalidate = 60;

export default function Home() {

  const randomNumber = Math.random() * 10;

  return (
    <div>
      <h1>Pagina Home</h1>
      <h2>Número gerado: { randomNumber }</h2>
    </div>
  )
}