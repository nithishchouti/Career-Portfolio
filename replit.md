# Portfolio Website

## Overview

A professional portfolio website built for a Computer Science graduate from IIIT Dharwad. The application showcases projects, skills, work experiences, certifications, and provides a contact form. It's designed as a single-page application with smooth scrolling navigation and animated sections, targeting opportunities in banking technology and analytics.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state and caching
- **Styling**: Tailwind CSS with custom CSS variables for theming (light/dark mode support)
- **UI Components**: shadcn/ui component library (New York style) with Radix UI primitives
- **Animations**: Framer Motion for page transitions and scroll animations
- **Navigation**: react-scroll for smooth scrolling between sections
- **Forms**: React Hook Form with Zod validation via @hookform/resolvers

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ESM modules
- **API Design**: RESTful endpoints defined in `shared/routes.ts` with Zod schemas for type-safe request/response validation
- **Build System**: Vite for frontend, esbuild for backend bundling

### Data Storage
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM with drizzle-zod for schema-to-validation integration
- **Schema Location**: `shared/schema.ts` contains all table definitions
- **Tables**: projects, skills, experiences, certifications, messages, features

### Project Structure
```
client/           # Frontend React application
  src/
    components/   # Reusable UI components
    pages/        # Page components (Home, not-found)
    hooks/        # Custom React hooks (use-portfolio, use-toast)
    lib/          # Utilities (queryClient, utils)
server/           # Backend Express application
  index.ts        # Entry point with middleware setup
  routes.ts       # API route handlers
  storage.ts      # Database access layer
  db.ts           # Database connection
shared/           # Shared code between client and server
  schema.ts       # Drizzle database schema
  routes.ts       # API route definitions with Zod schemas
```

### Key Design Patterns
- **Monorepo Structure**: Client and server share types and validation schemas through the `shared/` directory
- **Type Safety**: End-to-end type safety from database schema to API responses to frontend using Drizzle-Zod integration
- **Path Aliases**: `@/` for client source, `@shared/` for shared code
- **Component Architecture**: Atomic design with shadcn/ui providing base components

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connection via `DATABASE_URL` environment variable
- **connect-pg-simple**: PostgreSQL session store (available but session management not currently implemented)

### Frontend Libraries
- **@tanstack/react-query**: Async state management and caching
- **framer-motion**: Animation library for transitions
- **react-scroll**: Smooth scroll navigation
- **lucide-react**: Icon library
- **date-fns**: Date formatting utilities

### Build & Development
- **Vite**: Frontend build tool with HMR
- **esbuild**: Server-side bundling for production
- **drizzle-kit**: Database migration tooling (`npm run db:push`)

### Replit-Specific Plugins
- **@replit/vite-plugin-runtime-error-modal**: Error overlay in development
- **@replit/vite-plugin-cartographer**: Development tooling
- **@replit/vite-plugin-dev-banner**: Development banner