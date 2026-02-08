// Define sponsor levels
export type SponsorLevel =
  | 'MASTERPIECE'
  | 'VISIONARY'
  | 'CURATOR'
  | 'VALET'
  | 'GALLERY'
  | 'CANVAS'
  | 'EXHIBIT'
  | 'ARTISAN'

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
    sponsors: ['360 MD Integrative Primary Care', 'Anonymous'],
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
    sponsors: ['Bank of Texas', 'Barnison Catering', 'Alicia and Michael Cole', "St. David's Foundation", "XOLO Foundation"],
  },
  {
    level: 'EXHIBIT',
    sponsors: [
      'Allensworth',
      'Arledge Family',
      'Ascension',
      'James Avery',
      'Liz Bailey',
      'Dr. Pierre Berastain',
      'Bonterra',
      'Lila and David Broslma',
      'Cartmell Ventures',
      'Maggie Cheu',
      'City of Austin',
      'Covert Buick GMC Bee Cave',
      'Einstein Moving Company',
      'Megan Fanale',
      'Rob Hellams',
      'Robin Hendrix',
      'Karly Houchin',
      'John Jones',
      'McGinnis Lochridge',
      'Moody Bank',
      'Manju Mude',
      'Liane and Mark Noble',
      'Venus Pineyro De Hoyos',
      'Nelia Robbi',
      'Iris Saenz',
      'Bill Skeen',
      'Dewi Smith',
      'Vinson & Elkins',
    ],
  },
  {
    level: 'ARTISAN',
    sponsors: ['Cerris Builders', 'DuBois, Bryant & Campbell', 'Watkins Insurance Group-Greg Meserole'],
  },
]
