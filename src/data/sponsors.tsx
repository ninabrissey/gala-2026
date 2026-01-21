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
      'Liz Bailey',
      'Dr. Pierre Berastain',
      'Bonterra',
      'Lila and David Broslma',
      'Cartmell Ventures',
      'Maggie Cheu',
      'City of Austin',
      'Covert Cadillac of Austin',
      'Einstein Moving Company',
      'Rob Hellams',
      'Robin Hendrix',
      'Karly Houchin',
      'John Jones',
      'McGinnis Lochridge',
      'Moody Bank',
      'Liane and Mark Noble',
      'Nelia Robbi',
      'Bill Skeen',
      'Dewi Smith'
    ],
  },
]
