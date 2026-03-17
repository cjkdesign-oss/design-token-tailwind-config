# Design Token Handoff — Developer Guide

Generated from Figma Design Token Manager exports. Two output files are provided:

| File | Use with | Purpose |
|---|---|---|
| `tokens.theme.css` | **Tailwind v4** | Primary. Import in your CSS entry point. |
| `tailwind.config.ts` | **Tailwind v3** | Legacy. Drop into any v3 project. |

---

## Getting Started

### Tailwind v4

```css
/* app.css */
@import "tailwindcss";
@import "./tokens.theme.css";
```

Tailwind v4 reads `@theme` variables directly — no config file needed.

### Tailwind v3

```ts
// tailwind.config.ts
import config from './tailwind.config'
export default config
```

**Important:** Set the `content` array in `tailwind.config.ts` to match your project's source file globs — it ships empty.

### Font Loading

Both files declare `Roboto` (sans) and `Roboto Mono` (mono) as font families. You must load these fonts yourself:

```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&family=Roboto+Mono:wght@500&display=swap" rel="stylesheet">
```

Or install via npm (`@fontsource/roboto`, `@fontsource/roboto-mono`).

---

## Spacing Scale

The spacing scale inserts a 4px half-step at position 1. This differs from stock Tailwind (where `spacing-1` = 4px / 0.25rem by default). Our full scale:

| Token | Class | Value |
|---|---|---|
| `--spacing-1` | `p-1`, `gap-1`, etc. | 4px / 0.25rem |
| `--spacing-2` | `p-2` | 8px / 0.5rem |
| `--spacing-3` | `p-3` | 16px / 1rem |
| `--spacing-4` | `p-4` | 24px / 1.5rem |
| `--spacing-5` | `p-5` | 32px / 2rem |
| `--spacing-6` | `p-6` | 40px / 2.5rem |
| `--spacing-7` | `p-7` | 48px / 3rem |
| `--spacing-8` | `p-8` | 56px / 3.5rem |
| `--spacing-9` | `p-9` | 64px / 4rem |
| `--spacing-10` | `p-10` | 72px / 4.5rem |
| `--spacing-11` | `p-11` | 80px / 5rem |
| `--spacing-12` | `p-12` | 88px / 5.5rem |
| `--spacing-13` | `p-13` | 96px / 6rem |

**Note:** This is an 8px base grid with a 4px half-step, not Tailwind's default 4px base. `p-3` = 16px here vs Tailwind's 12px. Make sure your team is aware.

---

## Breakpoints

Custom breakpoints replace Tailwind defaults:

| Token | v4 (rem) | v3 (px) | Replaces |
|---|---|---|---|
| `xs` | 27.75rem | 444px | *(new)* |
| `sm` | 37.5rem | 600px | 640px |
| `md` | 56.25rem | 900px | 768px |
| `lg` | 75rem | 1200px | 1024px |
| `xl` | 96rem | 1536px | 1280px |
| `xxl` | 119rem | 1904px | *(new)* |

---

## Border Radius

Custom radii replace Tailwind defaults:

| Token | Value | Tailwind default it replaces |
|---|---|---|
| `rounded-none` | 0px | 0px (same) |
| `rounded-sm` | 4px | 2px |
| `rounded-md` | 8px | 6px |
| `rounded-lg` | 12px | 8px |
| `rounded-xl` | 16px | 12px |
| `rounded-xxl` | 20px | *(new)* |
| `rounded-3xl` | 24px | 24px (same) |
| `rounded-full` | 100px | 9999px |

---

## Typography

### Text size classes

Use `text-{token}` classes. Examples: `text-display-1`, `text-body-lg`, `text-button-md`.

The `--text-*: initial` reset in the v4 theme **removes Tailwind's default text scale** (`text-sm`, `text-base`, `text-lg`, `text-xl`, etc.). Only design system tokens are available. If you need Tailwind defaults alongside ours, remove the `--text-*: initial;` line from `tokens.theme.css`.

### Text transform

These tokens require `uppercase` text-transform. In Tailwind v4, use the `--text-transform-*` custom property or add the `uppercase` utility class. In v3, add the `uppercase` class manually.

| Token | Class combo |
|---|---|
| `label-overline` | `text-label-overline uppercase` |
| `button-lg` | `text-button-lg uppercase` |
| `button-md` | `text-button-md uppercase` |
| `button-sm` | `text-button-sm uppercase` |
| `data-grid-aggregation-header` | `text-data-grid-aggregation-header uppercase` |

### Typography sub-properties (v4)

Each text token generates companion variables:

```css
--text-body-lg: 1rem;                /* font-size */
--text-body-lg--line-height: 1.5;    /* line-height */
--tracking-body-lg: 0.15px;          /* letter-spacing */
--font-weight-body-lg: 400;          /* font-weight */
--text-transform-body-lg: ...;       /* only if uppercase */
```

### Library heading

`text-library-heading` is an internal Figma library token using Roboto Mono. It is included with a TODO comment — remove it if not needed in your project.

---

## Dark Mode

### Tailwind v4

Dark mode activates via the `.dark` class on `:root` or `:host`:

```html
<html class="dark">
```

All semantic color tokens (text, primary, secondary, error, warning, info, success, action, common, bg, border, component, elevation, native) are overridden automatically.

### Tailwind v3

The config uses `darkMode: 'class'`. Dark theme colors are exported separately:

```ts
import { darkTheme } from './tailwind.config'
```

Apply `darkTheme` via your JS theme switching logic — it mirrors the same nested color structure as the light theme in `theme.extend.colors`.

---

## Shadows

24 elevation levels (`shadow-1` through `shadow-24`) based on Material Design elevation. Use as `shadow-1`, `shadow-12`, `shadow-24`, etc.

---

## Grid Metadata

Grid layout info from Figma (column count, gutter, offset per breakpoint) is included as CSS comments in `tokens.theme.css` for reference. These are not mapped to CSS properties — implement container/gap rules in your layout components as needed.

---

## Color Naming Convention

### Base palette
`color-{family}-{shade}` — e.g., `bg-blue-700`, `text-amber-500`

CamelCase families from Figma are kebab-cased: `blueGrey` → `blue-grey`, `deepOrange` → `deep-orange`, etc.

A-shades use lowercase: `a100`, `a200`, `a400`, `a700`.

### Semantic colors
`color-{group}-{key}` — e.g., `text-primary-main`, `bg-error-light`

Groups: `text`, `primary`, `secondary`, `error`, `warning`, `info`, `success`, `action`, `common`, `bg`, `border`, `component`, `elevation`, `native`.

### Component colors
Deeply nested under `color-component-{component}-{variant}-{state}`:

```
color-component-input-standard-enabled-border
color-component-chip-default-hover-fill
color-component-alert-error-bg
```
