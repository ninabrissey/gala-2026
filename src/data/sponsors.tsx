// Define sponsor levels
export type SponsorLevel =
  | 'MASTERPIECE'
  | 'VISIONARY'
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
    level: 'VISIONARY',
    sponsors: ['MFI Foundation'],
  },
  {
    level: 'CURATOR',
    sponsors: ['H-E-B', '360 MD'],
  },
  {
    level: 'VALET',
    sponsors: ['Mercedes-Benz, Rebecca & Bryan Hardeman'],
  },
  {
    level: 'GALLERY',
    sponsors: ['Jill Capella', 'Judy Osborn'],
  },
  {
    level: 'CANVAS',
    sponsors: ['Alicia and Michael Cole'],
  },
  {
    level: 'EXHIBIT',
    sponsors: [
      'Allensworth',
      'Arledge Family',
      'Ascension',
      'Liz Bailey',
      'Barnison Catering',
      'Lila and David Broslma',
      'Emma Cartmel',
      'Maggie Cheu',
      'Covert Cadillac of Austin',
      'Einstein Moving Company',
      'Rob Hellams',
      'John Jones',
      'Liane and Mark Noble',
      'Bill Skeen',
    ],
  },
]
