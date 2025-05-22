import Script from 'next/script'

export const GoogleAdSense = () => {
  if (process.env.NODE_ENV === 'development') return null

  return (
    <Script
      async={true}
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  )
}
