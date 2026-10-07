import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ShortlistProvider } from '@/context/ShortlistContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShortlistProvider>
      <Component {...pageProps} />
    </ShortlistProvider>
  );
}
