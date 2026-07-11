# World Map Angular Project

Interactive World Map — Angular

An Angular application that presents an interactive SVG world map, where selecting a country displays live data pulled from the World Bank API — including country name, capital, region, income level, and coordinates.

Overview

Built for WGU's JavaScript Programming course (D280), this project converts a static SVG map into a fully interactive Angular component. Hovering over a country highlights it, and clicking it triggers a World Bank API call that populates a data panel alongside the map.

Features


Interactive SVG world map built as an Angular component, with each country wired to mouse event handlers
Hover to highlight a country; click to fetch and display its data
Live country data fetched from the World Bank API, showing six properties per country:

Country name
Capital city
Region
Income level
Latitude
Longitude



Angular routing configured to redirect from the default URL into the map view
Two-column layout: map on one side, country information panel on the other


Tech Stack


Angular (CLI v16.1.6)
TypeScript
SVG
World Bank API


Running Locally

Requires Node.js and the Angular CLI installed.

bashgit clone https://github.com/SamoyaTech/D280-Interactive-World-Map.git
cd D280-Interactive-World-Map/d280-app
npm install
ng serve

Then navigate to http://localhost:4200/ in your browser. The app will automatically reload on source file changes.

Building

bashng build

Build artifacts are output to the dist/ directory.

Course Context

Built for WGU's D280: JavaScript Programming course, focused on using existing frameworks (Angular), SVG assets, and REST APIs to add interactivity and data capabilities to a web application.
