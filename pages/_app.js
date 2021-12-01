import { ChakraProvider } from "@chakra-ui/react"
import '../styles/globals.css'
import theme from '../lib/theme';
import { AuthProvider } from '../context/auth-context'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthProvider>
  )
}

export default MyApp