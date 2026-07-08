# Shidoka Vanilla JS Sample

A minimal sample app showing how to use the [Shidoka Design System](https://github.com/kyndryl-design-system/shidoka-applications) with plain HTML and JavaScript.

This project mirrors [shidoka-sample-react](../shidoka-sample-react) using Shidoka web components directly — no framework required.

## Getting started

```bash
npm install
npm run dev
```

## What's included

- **UI Shell** — `kyn-ui-shell` with header, local nav, main content, and footer
- **Charts** — `kd-chart` bar and doughnut examples with data set via JavaScript properties
- **Foundation styles** — typography, grid utilities, and design tokens from `@kyndryl-design-system/shidoka-foundation`
- **Icons** — SVG icons from `@kyndryl-design-system/shidoka-icons` imported as raw strings

## Project structure

```
index.html          # Declarative markup for Shidoka web components
src/main.js         # Component registration, icon injection, chart data
src/styles.css      # App-specific styles
```

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`     | Start dev server         |
| `npm run build`   | Production build         |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |
