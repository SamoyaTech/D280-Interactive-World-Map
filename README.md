# World Map - Angular Project

An Angular application that presents an interactive SVG world map, where selecting a country displays live data pulled from the World Bank API - including country name, capital, region, income level, and coordinates.

🔗 Live site: https://interactive-w0rld-map.netlify.app/map

## Overview

Built for WGU's JavaScript Programming course (D280), this project converts a static SVG map into a fully interactive Angular component. Hovering over a country highlights it, and clicking it triggers a World Bank API call that populates a data panel alongside the map.

## Features

- Interactive SVG world map built as an Angular component, with each country wired to mouse event handlers
- Hover to highlight a country; click to fetch and display its data
- Live country data fetched from the World Bank API, showing six properties per country:
  - Country name
  - Capital city
  - Region
  - Income level
  - Latitude
  - Longitude

## Tech Stack

- Angular (CLI v16.1.6)
- TypeScript
- SVG
- World Bank API

## Running Locally

Requires Node.js and the Angular CLI installed.

```bash
git clone https://github.com/SamoyaTech/D280-Interactive-World-Map.git
cd d280-app
npm install
ng serve
```

Then navigate to `http://localhost:4200/` in your browser. The app will automatically reload on source file changes.

## Building

```bash
ng build
```

Build artifacts are output to the `dist/` directory.
