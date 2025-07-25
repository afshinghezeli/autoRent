# Grids - Design Guidelines

## 1. Overview

This document defines the responsive grid system for the FlowUI Design System. The grid is built on a **12-column structure** and is optimized for desktop viewports to ensure consistent alignment and a structured layout.

## 2. Grid Specifications & Tailwind CSS Configuration

The grid's behavior is primarily managed through the `tailwind.config.ts` file, where key properties are extended to match our design specifications.

- **Columns**: 12
- **Gutter Width**: 24px
- **Container**: Centered, with a maximum width of `1440px`.

### Tailwind CSS Integration

To implement these specifications, extend the `theme` in `tailwind.config.ts` as follows. This approach allows you to use standard Tailwind utility classes to build your grid layout.

```typescript
// tailwind.config.ts (excerpt)
import type { Config } from "tailwindcss";

export default {
  // ...
  theme: {
    extend: {
      container: {
        center: true, // Centers the container
        screens: {
          // You already have screens defined, so you only need to add '2xl' if it's new
          xs: "480px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          '2xl': '1440px', // Defines the max-width for the container
        },
      },
      gap: {
        // Defines the gutter width for grid and flex layouts
        '6': '24px',
      },
    },
  },
  // ...
} satisfies Config;