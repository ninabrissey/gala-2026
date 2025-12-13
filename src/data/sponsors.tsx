// Define sponsor levels
export type SponsorLevel = 'MASTERPIECE' | 'CURATOR' | 'GALLERY' | 'CANVAS' | 'EXHIBIT';

// Define sponsor levels and their sponsors
export const sponsorsByLevel: Record<SponsorLevel, string[]> = {
  'MASTERPIECE': ['Weerasooriya Family Foundation'],
  'CURATOR': [
    'Mercedes-Benz, Rebecca & Bryan Hardeman',
    'MFI Foundation'
  ],
  'GALLERY': ['H-E-B'],
  'CANVAS': ['Alicia and Michael Cole'],
  'EXHIBIT': [
    'Einstein Moving Company',
    'Liane and Mark Noble',
    'Barneson Catering',
    'Lila and David Broslma',
    'Liz Bailey',
    'Emma Cartmel',
    'Rob Hellams',
    'Bill Skeen',
    'Ascension',
    'Allensworth'
  ]
};

// Get all sponsor levels
export const getSponsorLevels = (): SponsorLevel[] => 
  Object.keys(sponsorsByLevel) as SponsorLevel[];
