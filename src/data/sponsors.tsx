// Define sponsor levels
export type SponsorLevel =
  | 'MASTERPIECE'
  | 'CURATOR'
  | 'VALET'
  | 'GALLERY'
  | 'CANVAS'
  | 'EXHIBIT'

// Define sponsor levels and their sponsors
export interface SponsorLevelData {
  level: SponsorLevel
  sponsors: string[]
}

export const sponsors: SponsorLevelData[] = [
  {
    level: 'MASTERPIECE',
    sponsors: ['Weerasooriya Family Foundation'],
  },
  {
    level: 'CURATOR',
    sponsors: ['MFI Foundation'],
  },
  {
    level: 'VALET',
    sponsors: ['Mercedes-Benz, Rebecca & Bryan Hardeman'],
  },
  {
    level: 'GALLERY',
    sponsors: ['H-E-B'],
  },
  {
    level: 'CANVAS',
    sponsors: ['Alicia and Michael Cole'],
  },
  {
    level: 'EXHIBIT',
    sponsors: [
      'Einstein Moving Company',
      'Liane and Mark Noble',
      'Barneson Catering',
      'Lila and David Broslma',
      'Liz Bailey',
      'Emma Cartmel',
      'Rob Hellams',
      'Bill Skeen',
      'Ascension',
      'Allensworth',
    ],
  },
]
