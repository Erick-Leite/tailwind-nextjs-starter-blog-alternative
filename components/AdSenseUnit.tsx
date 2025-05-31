'use client'
import { useEffect } from 'react'
import type { AdSense } from 'adsense/types'
import type { AdSenseBlockCategory } from 'adsense/types'
import { adSenseBlocks } from 'adsense/blocks'

declare global {
  interface Window {
    adsbygoogle: unknown[]
  }
}

interface AdSenseUnitProps {
  className?: string
  category: AdSenseBlockCategory
  name: string
}

export function AdSenseUnit({ className, category, name }: AdSenseUnitProps) {
  useEffect(() => {
    try {
      window.adsbygoogle = window.adsbygoogle || []
      window.adsbygoogle.push({})
    } catch (e) {
      console.error('Error loading Google AdSense ad:', e)
    }
  }, [])

  const {
    client = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID,
    slot,
    layout,
    layoutKey,
    format,
    fullWidthResponsive,
  } = adSenseBlocks[category]?.[name] as AdSense

  const style: React.CSSProperties = layout
    ? { display: 'block', textAlign: 'center' }
    : { display: 'block' }

  return (
    <ins
      className={`adsbygoogle ${className}`}
      style={style}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-layout={layout}
      data-ad-layout-key={layoutKey}
      data-ad-format={format}
      data-full-width-responsive={fullWidthResponsive}
    />
  )
}
