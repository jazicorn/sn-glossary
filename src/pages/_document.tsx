import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='icon' sizes='any' href='/book-open-solid.svg' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css'
          rel='stylesheet'
        />
      </Head>
      <body>
        <script
          src='https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js'
          async
        />

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
