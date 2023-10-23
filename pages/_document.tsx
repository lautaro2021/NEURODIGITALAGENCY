import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="preload" href="/assets/PPMonumentExtended-Black.woff" as="font" type="font/woff" crossOrigin="anonymous"/>
      </Head>
      <Main />
      <NextScript />
    </Html>
  )
}
