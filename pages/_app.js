import '../styles/globals.css';
import { createTheme, NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';

import '../styles/transition.css';
import Transition from '../components/Transition';

function MyApp({ Component, pageProps }) {
  const darkTheme = createTheme({
    type: 'dark',
  })

  return (
    // 2. Use at the root of your app
    <NextThemesProvider
    defaultTheme="system"
    attribute="class"
    value={{
      dark: darkTheme.className
    }}
      >
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  </NextThemesProvider>
  );
}

export default MyApp
