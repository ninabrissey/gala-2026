# General Code Style & Formatting

* Follow the Airbnb Style Guide as the primary guide for code style.
* Use Prettier for all automated code formatting, configured to align with the style guide.
* Use functional and declarative programming patterns; avoid classes.
* Use arrow functions for declaring components and functions (e.g., const MyComponent = () => {}).
* Write all code, comments, and documentation in English.
* Keep functions short and focused on a single responsibility (ideally < 20 lines).
* Avoid deeply nested logic by using early returns and extracting logic into utility functions.

# Naming & File Structure

* Use PascalCase for React component files (e.g., UserCard.tsx).
* Use kebab-case for all other files and directories (e.g., hooks/use-auth.ts).
* Use camelCase for variables and functions (e.g., const isActive = true;).
* Use descriptive boolean names with auxiliary verbs (e.g., isLoading, hasError, isEditing).
* Use UPPER_SNAKE_CASE for global constants and environment variables.
* Prefer named exports over default exports for consistency and discoverability.
* Structure component files logically: Main component, types, sub-components, helpers, and constants.

# Framework & Architecture (Next.js)

* Follow Next.js patterns and use the App Router.
* Correctly distinguish between Server Components (default) and Client Components ('use client').
* Use Prisma as the ORM for all database access.

# TypeScript Best Practices

* Enable strict mode in tsconfig.json for maximum type safety.
* Always declare explicit types for function parameters and return values.
* Do not use the any type. Use unknown for values that require type checking.
* Use type for unions/intersections and interface for extensible object shapes.
* Avoid enums; prefer string literal unions or as const objects instead.

# Data Fetching, Forms & State

* Use TanStack Query (React Query) for managing all server state (caching, revalidation, etc.).
* Use React Hook Form for all form handling.
* Use Zod for all schema validation (with React Hook Form and on the backend).
* Use React Context with hooks for simple, low-frequency global client state.

# UI & Styling

* Use MUI (Material-UI) as the primary component library and styling solution.
* Implement a mobile-first responsive design using modern CSS like Flexbox and Grid.
* Support dark mode using MUI's built-in theming capabilities.
* Ensure high accessibility (a11y) standards by using semantic HTML and following ARIA guidelines.
