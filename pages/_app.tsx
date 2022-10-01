import type { AppProps } from 'next/app';
import Head from 'next/head';
import { IntlProvider } from 'react-intl';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Footer, Header } from '../src/components';
import { messages } from '../src/messages';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IntlProvider messages={messages} locale="en">
      <Head>
        <title>Advanced TypeScript for React developers</title>
        <meta
          name="description"
          content="Best practices and advanced TypeScript tips for React developers"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="d-flex flex-column vh-100 justify-content-between container">
        <Header />
        <main className="flex-grow-1">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </IntlProvider>
  );
}

export default MyApp;
