# Spacing - Design Tokens

## 1. Overview

This document defines the official spacing guidelines for the FlowUI Design System, built on a **base-8 grid**. All spacing values are multiples of 8 pixels, ensuring visual consistency and a balanced layout across all UI elements. This approach simplifies design decisions and accelerates development.

## 2. Spacing Scale

The following values are the core tokens for spacing. They are intended for use with CSS properties like `margin`, `gap`, `row-gap`, and `column-gap` to define the distance between different components or elements.

| Token     | Pixel Value | Tailwind CSS Equivalent | Usage                                         |
| :-------- | :---------- | :---------------------- | :-------------------------------------------- |
| `spacing-xs`  | 8px         | `m-2`, `gap-2`          | Smallest spacing for elements like icons, text. |
| `spacing-sm`  | 12px        | `m-3`, `gap-3`          | For small gaps between related elements.      |
| `spacing-md`  | 16px        | `m-4`, `gap-4`          | Standard spacing between components.          |
| `spacing-lg`  | 24px        | `m-6`, `gap-6`          | For larger gaps, separating sections.         |
| `spacing-xl`  | 32px        | `m-8`, `gap-8`          | For significant separation.                   |
| `spacing-2xl` | 40px        | `m-10`, `gap-10`        | Larger spacing for visual emphasis.           |
| `spacing-3xl` | 48px        | `m-12`, `gap-12`        | For large section breaks.                     |
| `spacing-4xl` | 56px        | `m-14`, `gap-14`        |                                               |
| `spacing-5xl` | 64px        | `m-16`, `gap-16`        |                                               |
| `spacing-6xl` | 80px        | `m-20`, `gap-20`        |                                               |
| `spacing-7xl` | 120px       | `m-30`, `gap-30`        |                                               |
| `spacing-8xl` | 160px       | `m-40`, `gap-40`        |                                               |

## 3. Padding Guidelines

Padding values should also strictly follow the spacing scale. Padding creates internal space within a component, separating its content from its edges.

**Standard Padding Tokens:**

| Token     | Pixel Value | Tailwind CSS Equivalent | Usage                                         |
| :-------- | :---------- | :---------------------- | :-------------------------------------------- |
| `padding-xs`  | 8px         | `p-2`                   | Internal space for small elements (e.g., buttons). |
| `padding-sm`  | 16px        | `p-4`                   | Standard padding inside cards and forms.      |
| `padding-md`  | 24px        | `p-6`                   | For larger containers and sections.           |
| `padding-lg`  | 32px        | `p-8`                   | For padding around hero sections or large blocks. |

## 4. Technical Implementation

The spacing scale is designed for seamless integration with modern frameworks and tools, especially **Tailwind CSS**.

### Tailwind CSS Integration

To integrate this scale, extend the `spacing` object in your `tailwind.config.ts` file. This ensures that Tailwind’s built-in utility classes for spacing (`p-`, `m-`, `gap-`) map directly to the defined pixel values.

**Example `tailwind.config.ts` integration:**

```typescript
// tailwind.config.ts (excerpt)
export default {
  // ...
  theme: {
    extend: {
      spacing: {
        '0': '0',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '14': '56px',
        '16': '64px',
        '20': '80px',
        '30': '120px',
        '40': '160px',
      },
    },
  },
  // ...
}