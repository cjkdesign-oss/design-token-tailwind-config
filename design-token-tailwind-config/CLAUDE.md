# Design Token → Tailwind Config

## Project Structure
/tokens/          ← Figma Design Token Manager exports (do not edit)
/output/          ← Generated files (always overwrite, never edit manually)

## Token Files
| File | Purpose |
|---|---|
| breakpoints.Mode-1.tokens.json | Screen breakpoints |
| colors.Mode-1.tokens.json | Base color palette |
| effect.styles.tokens.json | Elevation shadows 1–24 |
| grid.styles.tokens.json | Grid layout per breakpoint |
| palette.Light.tokens.json | Light mode semantic colors |
| palette.Dark.tokens.json | Dark mode semantic colors |
| shape.Mode-1.tokens.json | Border radius scale |
| sizing.Mode-1.tokens.json | Spacing scale |
| text.styles.tokens.json | Typography styles |
| manifest.json | Collection manifest |

## Token Naming Conventions
Figma does not support '.' in variable names, so all token hierarchy
levels are separated with '-'. The JSON keys reflect this.

Token names follow the pattern: `<group>-<subgroup>-<key>`

## JSON Structure Notes
Some files wrap tokens in a parent group in the JSON. Use the key
inside that group, not the wrapper, as the token name:
- effect.styles.tokens.json → tokens are under `"elevation"` wrapper.
  Key format inside: `shadow-1` through `shadow-24`
- grid.styles.tokens.json → tokens are under `"breakpoints"` wrapper.
  Key format inside: `breakpoint-xs` through `breakpoint-xxl`
- palette.Light/Dark.tokens.json → tokens are grouped by semantic role
  (text, primary, secondary, etc.) but the token key already contains
  the full name (e.g. `color-primary-main`)

## Naming Map by Group

**Breakpoints** — `breakpoint-<key>`
Keys: xs (444px), sm (600px), md (900px), lg (1200px), xl (1536px), xxl (1904px)

**Spacing** — `space-<n>`
Keys: 1–12, values 8px–96px in 8px steps

**Border Radius** — `radius-<key>`
Keys: none (0px), sm (4px), md (8px), lg (12px), xl (16px), xxl (20px),
3xl (24px), full (100px)

**Shadows** — `shadow-<n>` (inside `elevation` wrapper)
Keys: 1–24, multi-layer box shadow arrays

**Colors — base palette** — `color-<family>-<shade>`
Families (camelCase in JSON, convert to kebab-case for CSS vars):
amber, blue, blueGrey→blue-grey, cyan, deepOrange→deep-orange,
deepPurple→deep-purple, green, grey, indigo, lightBlue→light-blue,
lightGreen→light-green, lime, orange, pink, purple, red, teal, yellow
Shades: 50–900 and A100/A200/A400/A700 (uppercase A in JSON key,
convert to lowercase a100/a200/a400/a700 for CSS var names)

**Colors — semantic** — `color-<group>-<key>`
Groups: text, primary, secondary, error, warning, info, success,
action, bg, border, component, elevation, native
Note: some subkeys in the JSON retain camelCase (e.g. focusVisible,
outlinedBorder, disabledBackground, knobFillEnabled). Always convert
these to kebab-case when generating CSS variable names:
  focusVisible       → focus-visible
  outlinedBorder     → outlined-border
  disabledBackground → disabled-bg
  knobFillEnabled    → knob-fill-enabled
  knowFillDisabled   → knob-fill-disabled (also fixes the typo)
  slideTrack-fill    → slide-track-fill
  activeFill         → active-fill
  enabledBorder      → enabled-border
  defaultFill        → default-fill
  collapseFill       → collapse-fill

**Colors — common** (inside `common` wrapper in palette files)
The black and white subgroups were not renamed in Figma. Read them
from `common.black.*` and `common.white.*` and map to:
  common.black.main        → color-common-black
  common.black.hover       → color-common-black-hover
  common.black.selected    → color-common-black-selected
  common.black.focus       → color-common-black-focus
  common.black.focusVisible→ color-common-black-focus-visible
  common.black.outlinedBorder → color-common-black-outlined-border
  (same pattern for white)

**Typography** — `text-<role>-<size>` and `text-<component>-<part>`

Core typography scale (inside `typography` wrapper in JSON):
  text-display-1 (96px), text-display-2 (60px),
  text-display-3 (48px), text-display-4 (34px)
  text-header-1 (24px), text-header-2 (20px), text-header-3 (18px)
  text-body-lg (16px), text-body-md (14px)
  text-subtitle-lg (16px), text-subtitle-md (14px)
  text-label-overline (12px), text-label-caption (12px)

Component typography (each inside its own named wrapper group in JSON):
  text-alert-title, text-alert-body
  text-avatar-initials
  text-badge-label
  text-bottomNav-active
  text-button-lg, text-button-md, text-button-sm
  text-chip-label
  text-datePicker-month
  text-input-label, text-input-value, text-input-helper
  text-list-subheader
  text-menu-item-default, text-menu-item-dense
  text-table-header
  text-tooltip-label
  text-dataGrid-aggregation-header
  text-library-heading (internal library token, include with TODO comment)

When generating CSS variable names for all text tokens, convert any
remaining camelCase segments to kebab-case:
  bottomNav      → bottom-nav
  datePicker     → date-picker
  dataGrid       → data-grid
  itemDefault    → item-default
  itemDense      → item-dense

## Parsing Hierarchy Depth Rules
Because '-' is both a hierarchy separator and part of key names,
use these rules to parse each token group:

| Group prefix | Depth | Example key | CSS variable |
|---|---|---|---|
| color-text | 3 | color-text-primary | --color-text-primary |
| color-primary/secondary/error/etc. | 3 | color-primary-main | --color-primary-main |
| color-bg | 4 | color-bg-surface-0 | --color-bg-surface-0 |
| color-component | 4+ | color-component-switch-knob-fill | --color-component-switch-knob-fill |
| color-border | 3 | color-border-divider | --color-border-divider |
| color-elevation | 3 | color-elevation-outlined-border | --color-elevation-outlined-border |
| color-native | 3 | color-native-scrollbar-bg | --color-native-scrollbar-bg |
| color-common | 3 | color-common-black | --color-common-black |
| color-<family> | 3 | color-blue-700 | --color-blue-700 |
| space | 2 | space-4 | --spacing-4 |
| radius | 2 | radius-md | --radius-md |
| breakpoint | 2 | breakpoint-xl | --breakpoint-xl |
| shadow | 2 | shadow-12 | --shadow-12 |
| text | 3 | text-body-lg | --text-body-lg |

If a token is ambiguous, include it as a CSS comment with a TODO note.

## Output 1: output/tokens.theme.css (PRIMARY — Tailwind v4)
- Use `@theme` directive with ALL tokens as CSS custom properties
- Tailwind v4 namespace mapping:
  - `--color-*` for all color tokens
  - `--breakpoint-*` for screens — convert px to rem (÷16)
  - `--spacing-*` for sizing tokens — convert px to rem (÷16)
  - `--radius-*` for shape tokens — keep px
  - `--shadow-*` for effects — flatten JSON array to CSS box-shadow string
  - `--text-*` for font sizes — convert px to rem (÷16)
  - `--text-*--line-height` for line heights (convert % to decimal: 150% → 1.5)
  - `--tracking-*` for letter spacing — keep px
  - `--font-weight-*` for font weights (derived from text token group)
- palette.Light.tokens.json → inside `@theme {}`
- palette.Dark.tokens.json → inside `@layer theme { :root, :host { &.dark { } } }`
- Add a comment above each section labeling its source file
- If overriding an entire Tailwind default namespace, reset it first
  with `--color-*: initial;` etc. inside `@theme`
- Do not skip any token — if mapping is ambiguous, include as CSS
  comment with TODO note

## Output 2: output/tailwind.config.ts (LEGACY — Tailwind v3 compatible)
- Add comment at top: "Legacy v3 config. Prefer tokens.theme.css for Tailwind v4."
- `import type { Config } from 'tailwindcss'`
- `darkMode: 'class'`
- Use `theme.extend` for all token groups
- Token → Tailwind key mapping:
  - `color-*` → `theme.extend.colors` (use depth rules above for nesting)
  - `space-*` → `theme.extend.spacing` (keep px for v3)
  - `radius-*` → `theme.extend.borderRadius` (keep px)
  - `breakpoint-*` → `theme.extend.screens` (keep px for v3)
  - `shadow-*` → `theme.extend.boxShadow`
  - `text-*` → `theme.extend.fontSize` as tuple:
    `['1rem', { lineHeight: '1.5', letterSpacing: '0.15px', fontWeight: '400' }]`
- palette.Light.tokens.json → default `colors` in `theme.extend`
- palette.Dark.tokens.json → export as `export const darkTheme = {...}`
  below the default export (for use with JS-based theme switching)

## Conversion Rules
- Font sizes: px → rem (÷16). Example: 96px → 6rem
- Line heights: % → decimal (÷100). Example: 150% → 1.5. If already
  a px value (e.g. "24px"), keep as-is in config, convert to unitless
  ratio for @theme where possible
- Spacing: px → rem for tokens.theme.css, keep px for tailwind.config.ts
- Breakpoints: px → rem for tokens.theme.css, keep px for tailwind.config.ts
- Shadows: convert `$value` array → CSS string:
  `"offsetX offsetY blur spread color, offsetX offsetY blur spread color"`
- Keep radius and borders in px for both outputs
- All CSS variable names must be fully kebab-case (no camelCase segments)
- Font weights must be strings in tailwind.config.ts ("400" not 400)
- A-shades (A100 etc.) must be lowercase in CSS vars: `a100`, `a200`, etc.
- camelCase family names must be kebab-cased in CSS vars:
  blueGrey → blue-grey, deepOrange → deep-orange, etc.

## Regeneration Instructions
When token JSON files are updated, regenerate both output files using
the same rules. Do not change the rules unless explicitly instructed.
