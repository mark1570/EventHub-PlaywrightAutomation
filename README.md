# EventHub Playwright Automation

A Playwright-based automation project focused on validating the EventHub booking platform across both UI and API workflows.

## Purpose
Build real-world QA automation on an event-booking application by testing real user journeys and backend services.

## Project Overview
This repository demonstrates practical QA automation for an event-booking web application. It covers end-to-end validation of event discovery, booking flows, and API response checks using the live Swagger documentation. The project follows a Page Object Model (POM) structure to keep tests maintainable, readable, and scalable.

## Testing Scope
- UI testing: Explore event discovery and booking workflows.
- API testing: Use live APIs and Swagger documentation to identify endpoints and validate responses.

## Tech Stack
- JavaScript + TypeScript
- Playwright
- Page Object Model (POM)

## Project Structure
```text
.
├── fixtures/
├── pages/
├── tests/
├── .gitignore
├── package.json
��── playwright.config.js
├── README.md
└── screenshot.png
```

## Prerequisites
- Node.js installed
- npm or yarn
- Playwright dependencies installed

## Installation
```bash
npm install
```

## Running Tests
```bash
npx playwright test
```

## View HTML Report
```bash
npx playwright show-report
```

## Notes
This project is designed to simulate real-world test automation practices for modern web applications using Playwright and maintainable page abstractions.