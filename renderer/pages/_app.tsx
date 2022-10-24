import React from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : children}
    </div>
  )
}

function MyApp({ Component, pageProps }) {
  return <SafeHydrate><Component {...pageProps} /></SafeHydrate>;
}

export default MyApp
