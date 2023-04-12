import { Layout } from '@/components/Layout'
import '@/styles/globals.css'
import { themeDefault } from '@/themes/themeDefault'
import { ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (

    <ThemeProvider theme={themeDefault} >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
