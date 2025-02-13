import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Revolutionize your learning experience with Stellar-Learn. Join our waiting list today!"
        />
        <link rel="icon" href="/stellar-learn-favicon.png" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
