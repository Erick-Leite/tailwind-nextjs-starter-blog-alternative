import type { AdSense } from './adsense'

export type AdSenseBlockCollection = Record<string, AdSense>

export type AdSenseBlockCategory = 'display' | 'inFeed' | 'inArticle' | 'multiplex'

export type AdSenseBlocks = Partial<Record<AdSenseBlockCategory, AdSenseBlockCollection>>
