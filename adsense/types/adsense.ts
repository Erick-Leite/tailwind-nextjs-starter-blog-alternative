type Layout = 'in-article'
type Format = 'auto' | 'fluid' | 'autorelaxed'
type FullWidthResponsive = 'true' | 'false'

export interface AdSense {
  client?: string
  slot: string
  layout?: Layout
  layoutKey?: string
  format?: Format
  fullWidthResponsive?: FullWidthResponsive
}
