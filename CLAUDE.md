# Gala 2026 Project Documentation

## Project Overview

**Gala 2026** is a sophisticated event sponsorship website built for SAFE (Stop Abuse For Everyone), an Austin-based organization. This modern, visually stunning Next.js application serves as a comprehensive fundraising and event promotion platform.

### Key Features

- **Interactive Sponsorship Tier Cards**: Expandable cards showcasing 7 sponsorship levels from $1,000 to $75,000 with detailed features and benefits
- **Sponsor Showcase**: Organized display of current sponsors by sponsorship level
- **Event Photo Carousel**: Dynamic image gallery powered by Swiper
- **Chair's Letter Modal**: Toggle-able message from the event chair
- **Team Member Recognition**: Styled display of gala committee members
- **External Integration**: Direct links to HelloFund platform for ticketing, sponsorships, and donations

### Architecture

- **Framework**: Next.js 15.5 with App Router
- **Rendering Strategy**: Mix of client and server components
- **Data Management**: Static data in TypeScript files (no database or API routes)
- **Styling**: Material-UI with dark theme, custom gradients, and animations
- **Frontend-only**: No backend, environment variables, or API routes

---

## Tech Stack

### Core Framework
- **Next.js**: v15.5.9 (App Router, Turbopack for faster builds)
- **React**: v19.1.4
- **TypeScript**: v5 (strict mode enabled)

### UI & Styling
- **Material-UI (MUI)**: v7.3.1 - Primary component library
  - `@mui/material`: Core components
  - `@mui/icons-material`: Icon library
  - `@mui/material-nextjs`: Next.js integration
- **Emotion**: v11.14.0 - CSS-in-JS (MUI's styling engine)
  - `@emotion/react`
  - `@emotion/styled`
- **Framer Motion**: v12.23.12 - Animation library

### Forms & Validation
- **react-hook-form**: v7.62.0 - Form state management
- **Zod**: v4.0.17 - Schema validation
- **@hookform/resolvers**: v5.2.1 - Integration between react-hook-form and Zod

### Data Fetching
- **TanStack Query (React Query)**: v5.85.5 - Server state management (configured but not actively used)

### Other Libraries
- **Swiper**: v12.0.2 - Touch-enabled carousel/slider

### Development Tools
- **ESLint**: v9 with Next.js config
- **@eslint/eslintrc**: v3
- **TypeScript Types**: `@types/node`, `@types/react`, `@types/react-dom`

### Fonts
- **Playfair Display**: Google Font loaded via `next/font/google`

---

## Project Structure

```
gala-2026/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── page.tsx              # Homepage (client component with state)
│   │   ├── layout.tsx            # Root layout with theme provider & font
│   │   ├── globals.css           # Global styles
│   │   ├── page.module.css       # Homepage-specific CSS modules
│   │   └── rules/
│   │       └── page.tsx          # Rules page (server component)
│   │
│   ├── components/               # Reusable React components
│   │   ├── Navbar.tsx            # Main navigation (default export)
│   │   ├── NavButton.tsx         # Individual nav links
│   │   ├── SponsorshipCard.tsx   # Tier card with expand/collapse
│   │   ├── SponsorsList.tsx      # Displays sponsors by level
│   │   ├── ChairLetter.tsx       # Modal content for chair's message
│   │   ├── Carousel.tsx          # Image carousel component
│   │   ├── SoldOutOverlay.tsx    # "Sold Out" badge for cards
│   │   └── ThemeRegistry.tsx     # MUI theme configuration
│   │
│   └── data/                     # Static data files
│       ├── sponsorship-levels.tsx # 7 tier definitions with features
│       ├── sponsors.tsx          # Current sponsors by level
│       └── team-members.tsx      # Gala committee member names
│
├── public/                       # Static assets
│   ├── Gala-2026-logo-type-only-full-color.png
│   ├── Gala-wave-of-colors.png
│   ├── details.png
│   └── [carousel images...]
│
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
├── next.config.ts                # Next.js configuration (minimal)
├── eslint.config.mjs             # ESLint rules
├── rules.md                      # Coding standards document
└── README.md                     # Project readme
```

---

## How to Run & Build

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Runs the development server with Turbopack on `http://localhost:3000`

### Production Build
```bash
npm run build
```
Creates optimized production build using Turbopack

### Start Production Server
```bash
npm start
```
Runs the production server (requires `npm run build` first)

### Linting
```bash
npm run lint
```
Runs ESLint with Next.js and TypeScript rules

### Configuration Notes
- **Path Alias**: `@/*` maps to `./src/*` (configured in tsconfig.json:22)
- **TypeScript**: Strict mode enabled (tsconfig.json:7)
- **Module Resolution**: Bundler mode for Next.js compatibility (tsconfig.json:11)
- **Target**: ES2017 for broad browser support (tsconfig.json:3)

---

## Key Conventions & Patterns

### Code Style

**Component Structure**:
```typescript
'use client' // If using state, effects, or browser APIs

import { useState } from 'react'
import { Box, Typography } from '@mui/material'

interface ComponentProps {
  title: string
  isActive: boolean
}

export const ComponentName = ({ title, isActive }: ComponentProps) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <Box sx={{ /* styles */ }}>
      {/* JSX */}
    </Box>
  )
}
```

**Key Principles** (from rules.md):
- Functional components with arrow functions
- Named exports preferred (exception: Navbar.tsx uses default export)
- PascalCase for component files (e.g., `SponsorshipCard.tsx`)
- kebab-case for other files (e.g., `sponsorship-levels.tsx`)
- camelCase for variables/functions (e.g., `const isLoading = true`)
- TypeScript with explicit types (never use `any`)
- Functions under 20 lines when possible
- Early returns to avoid deep nesting

### Import/Export Pattern

```typescript
// Named exports (standard pattern)
export const NavButton = ({ name, href }: NavButtonProps) => {
  // component code
}

// Exception: Navbar.tsx uses default export
export default Navbar
```

### TypeScript Conventions

**Type vs Interface**:
```typescript
// Use 'type' for unions and intersections
export type SponsorLevel =
  | 'MASTERPIECE'
  | 'VISIONARY'
  | 'CURATOR'
  // ... (src/data/sponsors.tsx:2-10)

// Use 'interface' for extensible object shapes
interface SponsorshipCardProps {
  title: string
  price: string
  features: string[]
  soldOut?: boolean
}
```

**No Enums**: Use string literal unions or `as const` objects instead (rules.md:33)

**Boolean Naming**: Use auxiliary verbs
```typescript
// Good
const isLoading = true
const hasError = false
const isEditing = true

// Bad
const loading = true
const error = false
```

### Data Management

**Static Data Pattern**:
- All data stored in `.tsx` files under `/src/data/`
- Exported as typed constants
- No database, API routes, or CMS

Example from src/data/sponsorship-levels.tsx:1:
```typescript
export const sponsorshipLevels = [
  {
    title: 'THE MASTERPIECE SPONSOR',
    price: '$75,000',
    description: '...',
    features: [...],
    soldOut: true
  },
  // ...
]
```

**Updating Content**:
- To update sponsors: Edit `/src/data/sponsors.tsx` directly
- Recent commits show sponsor updates follow this pattern
- Sponsors ordered by last name/business name (recent practice)

### Styling Approach

**MUI Theme** (src/app/layout.tsx:1-29):
- Dark mode with black background
- Custom font: Playfair Display (loaded via `next/font/google`)
- Theme configured in `ThemeRegistry.tsx`

**CSS-in-JS with `sx` Prop**:
```typescript
<Box
  sx={{
    display: 'flex',
    flexDirection: 'column',
    p: { xs: 3, md: 5 }, // Responsive padding
    color: 'white',
    background: 'linear-gradient(225deg, #1A1A1A 0%, #444444 50%, #1A1A1A 100%)',
  }}
>
```

**Responsive Design**:
```typescript
// MUI breakpoints: xs (mobile), sm, md, lg, xl
fontSize: { xs: '1rem', md: '1.25rem' }

// Custom media queries (src/app/page.tsx:168-173)
'@media (min-width: 900px) and (max-width: 1439px)': {
  gridTemplateColumns: 'repeat(2, 1fr)',
}
```

**Custom Colors**:
- Primary teal: `#19B8CD` (used for chair letter button)
- Purple gradient: `linear-gradient(45deg, #A427F9 0%, #743EB5 100%)` (sponsorship buttons)
- Gold/orange gradients for text accents
- White text with subtle shadows for emphasis

**Framer Motion Animations** (src/components/SponsorshipCard.tsx:34-37):
```typescript
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
>
```

### Component Patterns

**Server vs Client Components**:
- Homepage (`src/app/page.tsx:1`): Client component (`'use client'`) - uses `useState` for chair letter toggle
- Rules page (`src/app/rules/page.tsx:1-31`): Server component - reads files directly with Node.js `fs` module
- Most components: Client components marked with `'use client'` directive

**State Management**:
```typescript
// Local state with useState
const [expanded, setExpanded] = useState(false)
const [chairLetterOpen, setChairLetterOpen] = useState(false)

// No global state management needed (static content)
```

**Conditional Rendering**:
```typescript
{chairLetterOpen && <ChairLetter />}
{soldOut && <SoldOutOverlay />}
{expanded ? features.map(...) : features.slice(0, 2).map(...)}
```

---

## Environment & Configuration

### Environment Variables
**None required** - This is a frontend-only project with all data hardcoded.

### Configuration Files

**tsconfig.json** (lines 1-27):
- Strict mode enabled for type safety
- Path alias: `@/*` → `./src/*`
- Target: ES2017
- Module resolution: bundler (Next.js compatible)
- JSX: preserve (handled by Next.js)

**next.config.ts** (lines 1-7):
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
```
Minimal configuration - relies on Next.js defaults.

**eslint.config.mjs**:
- Next.js + TypeScript rules
- Airbnb Style Guide conventions (rules.md:3)

**.gitignore**:
- Standard Next.js patterns
- `node_modules/`, `.next/`, `.env*` files

### External URLs

Hardcoded in Navbar.tsx:27-42:
```typescript
// Sponsorship
https://hellofund.io/app/public/bidapp/safegala2026/tickets/sponsor?p=sponsor

// Tickets
https://hellofund.io/app/public/bidapp/safegala2026/tickets/tix?p=individual

// Donations
https://hellofund.io/app/public/bidapp/safegala2026/tickets/donate?p=donation

// SAFE Website
https://www.safeaustin.org/
```

Also used in SponsorshipCard.tsx:199-200 for "Secure Your Sponsorship" buttons.

---

## Important Notes for Contributors

### Key Gotchas

1. **Export Inconsistency**
   - Most components use **named exports**: `export const NavButton = () => {}`
   - **Exception**: `Navbar.tsx:49` uses **default export**: `export default Navbar`
   - Impacts import statements: `import Navbar from '@/components/Navbar'` vs `import { NavButton } from '@/components/NavButton'`

2. **dangerouslySetInnerHTML Usage**
   - Used in `src/app/page.tsx:229-236` for team member display
   - **Safe in this context** because data comes from hardcoded `team-members.tsx`
   - **NEVER use with user input** - XSS vulnerability risk
   ```typescript
   dangerouslySetInnerHTML={{
     __html: `• ${teamMembers.join(' • ')} •`
       .replace(/•/g, '<span style="color: white">•</span>')
   }}
   ```

3. **CSS Modules vs MUI `sx`**
   - CSS Modules only used for page-level styling (`page.module.css`)
   - All component styling uses MUI `sx` prop
   - Don't mix approaches within components

4. **Updating Sponsors**
   - Edit `/src/data/sponsors.tsx` directly
   - No CMS, database, or admin panel
   - Recent commits show: order by last name/business name
   - Example structure:
   ```typescript
   {
     level: 'EXHIBIT',
     sponsors: [
       'Allensworth',
       'Arledge Family',
       'Ascension',
       // ... alphabetically sorted
     ]
   }
   ```

5. **Responsive Breakpoints**
   - Inconsistent breakpoint usage between custom media queries and MUI breakpoints
   - Page layout uses custom: `@media (min-width: 900px) and (max-width: 1439px)`
   - Components use MUI: `{ xs: '1rem', md: '1.25rem' }`
   - Be mindful when adding responsive styles

6. **Sold Out Functionality**
   - Controlled by `soldOut: boolean` in `sponsorship-levels.tsx`
   - Currently only Masterpiece tier is sold out (line 20)
   - Displays overlay via `<SoldOutOverlay />` component

### Coding Standards (from rules.md)

**General Principles**:
- Follow Airbnb Style Guide
- Functional and declarative programming (no classes)
- Keep functions under 20 lines
- Use early returns to avoid deep nesting
- All code, comments, and documentation in English

**TypeScript**:
- Strict mode enabled (never disable)
- Explicit types for function parameters and return values
- Never use `any` type - use `unknown` if type is uncertain
- Use `type` for unions/intersections, `interface` for extensible objects
- No enums - use string literal unions or `as const` objects

**Next.js Patterns**:
- Follow App Router conventions
- Correctly distinguish Server vs Client Components
- Server Components are default - add `'use client'` when needed:
  - Using state (`useState`, `useReducer`)
  - Using effects (`useEffect`, `useLayoutEffect`)
  - Using browser APIs
  - Using event handlers (`onClick`, etc.)

**Data Fetching** (configured but not actively used):
- TanStack Query available for server state
- React Hook Form + Zod available for forms
- React Context available for simple global state

**UI & Accessibility**:
- MUI as primary component library
- Mobile-first responsive design
- Dark mode support via MUI theming
- Semantic HTML and ARIA guidelines

### Recent Development Patterns

Recent commits (from git log):
```
beabd3c Add 2 artisan sponsors
59aaf87 Update Cartmell sponsor and order by last name/business name
15337af Update sponsors, change HEB level
8a6cdc4 Update sponsors
```

**Pattern**: Sponsor updates are frequent and done via direct edits to `/src/data/sponsors.tsx`

**Naming Convention**: Sponsors ordered by last name or business name (commit 59aaf87)

---

## Critical Files Reference

### Configuration
- `/package.json` - Dependencies and npm scripts
- `/tsconfig.json` - TypeScript configuration with path aliases
- `/next.config.ts` - Next.js configuration (minimal)
- `/rules.md` - Coding standards and conventions

### Application Core
- `/src/app/layout.tsx` - Root layout with theme provider and Playfair Display font
- `/src/app/page.tsx` - Homepage with all main content sections
- `/src/app/globals.css` - Global styles
- `/src/app/page.module.css` - Homepage-specific CSS modules

### Components
- `/src/components/Navbar.tsx` - Main navigation (default export)
- `/src/components/NavButton.tsx` - Individual nav button
- `/src/components/SponsorshipCard.tsx` - Expandable tier card with animations
- `/src/components/SponsorsList.tsx` - Displays current sponsors by level
- `/src/components/ChairLetter.tsx` - Chair's message modal content
- `/src/components/Carousel.tsx` - Photo carousel using Swiper
- `/src/components/SoldOutOverlay.tsx` - "Sold Out" badge overlay
- `/src/components/ThemeRegistry.tsx` - MUI theme configuration and provider

### Data
- `/src/data/sponsorship-levels.tsx` - 7 sponsorship tiers with features and pricing
- `/src/data/sponsors.tsx` - Current sponsors organized by level (string literal union type)
- `/src/data/team-members.tsx` - Gala committee member names array

### Static Assets
- `/public/` - All images including logo, wave graphic, and carousel photos

---

## Development Workflow

### Adding a New Sponsorship Level
1. Add level to `SponsorLevel` union type in `/src/data/sponsors.tsx:2-10`
2. Add tier details to `sponsorshipLevels` array in `/src/data/sponsorship-levels.tsx`
3. Add empty sponsors array to `sponsors` array in `/src/data/sponsors.tsx`
4. Component will automatically render new card on homepage

### Updating Existing Sponsors
1. Edit `/src/data/sponsors.tsx` directly
2. Find the appropriate level in the `sponsors` array
3. Add/remove/update sponsor names in the `sponsors` string array
4. Follow naming convention: order by last name or business name
5. Commit with descriptive message (see recent commits for examples)

### Marking a Level as Sold Out
1. Edit `/src/data/sponsorship-levels.tsx`
2. Find the tier object
3. Add or set `soldOut: true`
4. Example: `sponsorshipLevels.tsx:20` - Masterpiece tier is sold out

### Adding New Team Members
1. Edit `/src/data/team-members.tsx`
2. Add names to the exported array
3. Names will automatically appear in the styled list on homepage (using `dangerouslySetInnerHTML`)

### Styling Changes
- **Theme changes**: Edit `/src/components/ThemeRegistry.tsx`
- **Global styles**: Edit `/src/app/globals.css`
- **Component styles**: Use MUI `sx` prop (CSS-in-JS)
- **Page-level styles**: Use CSS modules (`*.module.css`)

### Adding New Components
1. Create `ComponentName.tsx` in `/src/components/`
2. Use PascalCase for filename
3. Add `'use client'` directive if component needs state/effects/browser APIs
4. Use **named export** for consistency: `export const ComponentName = () => {}`
5. Define TypeScript interface for props
6. Style with MUI `sx` prop

---

## Additional Context

### Project Background
- Built for SAFE (Stop Abuse For Everyone), an Austin-based nonprofit
- Gala theme: "Gallery of Transformation" - art and healing metaphors throughout
- Event date: March 8, 2026 (from details.png)
- Sponsor levels use artistic metaphors (Masterpiece, Visionary, Curator, etc.)

### Design Aesthetic
- **Dark Mode Only**: Black background throughout
- **Color Palette**: Teal (#19B8CD), purple gradients (#A427F9 to #743EB5), gold/orange accents
- **Typography**: Playfair Display serif font for elegant, formal tone
- **Animations**: Subtle Framer Motion animations for cards and sections
- **Visual Elements**: Wave graphics, gradient overlays, glow effects

### Performance Considerations
- Next.js 15.5 with Turbopack for faster builds/dev server
- Image optimization via `next/image` with proper sizing
- Static generation (no SSR or client-side data fetching)
- Minimal JavaScript - primarily static content
- Animation performance optimized with Framer Motion

### Browser Support
- Target: ES2017 (tsconfig.json:3)
- Modern browsers (React 19 requirements)
- Responsive design supports mobile and desktop

---

## Questions or Issues?

For questions about:
- **SAFE Organization**: Visit https://www.safeaustin.org/
- **Event Ticketing**: Visit HelloFund links in navigation
- **Code Conventions**: See `/rules.md`
- **Recent Changes**: Check git commit history

This documentation was generated based on the codebase state as of commit `beabd3c` (January 2026).
