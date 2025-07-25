# Typography - Design Tokens

## 1. Overview

This document defines the typography guidelines for the FlowUI Design System. A clear and consistent typography system is essential for establishing visual hierarchy, improving readability, and ensuring a seamless user experience. This guide covers font families, font sizes, weights, and line heights for various text elements.

## 2. Font Families

The primary font for the system is a sans-serif font optimized for readability on digital screens. A fallback system is also defined for broad compatibility.

- **Primary Font:** [Font Name, e.g., 'Estedad']
  - **Usage:** All main headings, body text, and UI components.
- **Fallback Fonts:** `sans-serif`
  - **Usage:** Used when the primary font fails to load.

## 3. Typography Scale

The following scale categorizes text styles based on their purpose within the user interface. Each style is defined with specific properties to ensure consistency.

### 3.1. Display

Used for large, prominent text to create visual impact.

| Style     | Font Size (px) | Line Height (%) | Font Weight | Tailwind CSS Equivalent |
| :-------- | :------------- | :-------------- | :---------- | :---------------------- |
| **Display-1** | 54px           | Varies          | Bold        | `text-5xl`              |
| **Display-2** | 54px           | Varies          | Regular     | `text-5xl`              |

### 3.2. Header

Used for main headings and titles to establish content hierarchy.

| Style     | Font Size (px) | Line Height (%) | Font Weight | Tailwind CSS Equivalent |
| :-------- | :------------- | :-------------- | :---------- | :---------------------- |
| **H1** | 24px           | Varies          | Bold        | `text-2xl`              |
| **H2** | 20px           | Varies          | Bold        | `text-xl`               |
| **H3** | 18px           | 140%            | Semibold    | `text-lg`               |

### 3.3. Body

Standard text used for paragraphs, lists, and general content.

| Style     | Font Size (px) | Line Height (%) | Font Weight | Tailwind CSS Equivalent |
| :-------- | :------------- | :-------------- | :---------- | :---------------------- |
| **Body-L** | 18px           | 140%            | Regular     | `text-lg`               |
| **Body-M** | 16px           | 140%            | Regular     | `text-base`             |
| **Body-S** | 14px           | 140%            | Regular     | `text-sm`               |

### 3.4. Button

Text for interactive elements like buttons and links.

| Style     | Font Size (px) | Line Height (%) | Font Weight | Tailwind CSS Equivalent |
| :-------- | :------------- | :-------------- | :---------- | :---------------------- |
| **Button-L**| 20px           | Varies          | Semibold    | `text-xl`               |
| **Button-M**| 14px           | Varies          | Semibold    | `text-sm`               |

### 3.5. Caption

Used for smaller, subsidiary text such as labels, captions, and fine print.

| Style     | Font Size (px) | Line Height (%) | Font Weight | Tailwind CSS Equivalent |
| :-------- | :------------- | :-------------- | :---------- | :---------------------- |
| **Caption-L** | 20px           | 140%            | Regular     | `text-xl`               |
| **Caption-M** | 14px           | 140%            | Regular     | `text-sm`               |
| **Caption-S** | 13px           | 140%            | Regular     | `text-xs`               |

## 4. Technical Implementation

The typography scale should be implemented by extending the theme in `tailwind.config.ts`. This allows developers to use descriptive utility classes that automatically apply the correct font sizes, line heights, and weights.

### Tailwind CSS Integration

To integrate this scale, you would extend the `fontSize`, `lineHeight`, and `fontFamily` properties. **Note: Do not redefine font sizes that already exist in Tailwind's default theme.**

**Example `tailwind.config.ts` integration:**

```typescript
// tailwind.config.ts (excerpt)
export default {
  // ...
  theme: {
    extend: {
      fontFamily: {
        Estedad: ["var(--font-estedad)", 'sans-serif'],
      },
      fontSize: {
        // Define custom sizes. Avoid redefining Tailwind's default values (e.g., 'sm', 'base', 'lg').
        'xs': ['13px', { lineHeight: '140%' }], // Custom size
        '5xl': ['54px', { lineHeight: '1.2' }], // Custom size
      },
      lineHeight: {
        '140': '1.4', // Custom line-height
      },
      fontWeight: {
        'regular': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
    },
  },
  // ...
}