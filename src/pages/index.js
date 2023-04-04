import { Inter } from 'next/font/google'
import Header from '../../components/header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <section className="font-sans">

      <Header></Header>
      </section>
    </>
  );
}
