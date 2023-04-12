import Head from 'next/head';
import { Inter } from 'next/font/google';
import { HomePage } from '@/components/HomePage';
import "../styles/Home.module.css"


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>SoberanaTV</title>
        <meta name="description" content="Soberana TV - Coletivo marxisista-lennista de criadores de conteúdo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />

    </>
  )
}
