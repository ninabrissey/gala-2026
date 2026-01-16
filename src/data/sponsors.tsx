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
    sponsors: ['360 MD', 'Anonymous'],
  },
  {
    level: 'VALET',
    sponsors: ['Mercedes-Benz, Rebecca & Bryan Hardeman'],
  },
  {
    level: 'GALLERY',
    sponsors: ['H-E-B','Jill Capella', 'Judy Osborn'],
  },
  {
    level: 'CANVAS',
    sponsors: ['Bank of Texas', 'Barnison Catering', 'Alicia and Michael Cole', "St. David's Foundation"],
  },
  {
    level: 'EXHIBIT',
    sponsors: [
      'Allensworth',
      'Arledge Family',
      'Ascension',
      'Bill Skeen',
      'Bonterra',
      'City of Austin',
      'Covert Cadillac of Austin',
      'Dewi Smith',
      'Dr. Pierre Berastain',
      'Einstein Moving Company',
      'Emma Cartmel',
      'John Jones',
      'Karly Houchin',
      'Liane and Mark Noble',
      'Lila and David Broslma',
      'Liz Bailey',
      'Maggie Cheu',
      'McGinnis Lochridge',
      'Moody Bank',
      'Nelia Robbi',
      'Rob Hellams',
      'Robin Hendrix',
    ],
  },
]
