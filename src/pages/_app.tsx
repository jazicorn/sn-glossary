import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { GlossaryProvider } from '@/context/contextGlossary';
import { DashboardProvider } from "@/context/contextDashboard";

export default function App({ Component, pageProps: { ...pageProps }, }: AppProps) {
  useEffect(() => {
    const use = async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (await import('tw-elements' as any)).default;
    };
    use();
  }, []);
    return (
      <GlossaryProvider>
        <DashboardProvider>
          <Component {...pageProps} />
        </DashboardProvider>
    </GlossaryProvider>
  );
}
