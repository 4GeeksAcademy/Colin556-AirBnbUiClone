# Airbnb UI Clone Context

## Product Goal
This project recreates three key Airbnb frontend views in Next.js to validate component architecture before designing a custom system. The clone focuses on realistic structure, reusable UI building blocks, and page-to-page continuity rather than backend integration.

## Target User
The primary user is a traveler searching for short-term stays. They want to:
- Discover destination ideas and categories.
- Filter and browse available listings.
- Open a listing to evaluate details, amenities, host trust signals, and booking information.

## Core User Flow
1. User lands on Home page and explores destinations/categories.
2. User enters the Catalog/Search Results experience to compare listings.
3. User opens a Room Detail page to review a specific property before deciding to reserve.

## Views To Build

### 1) Home Page
Contains:
- Top navigation with branding, search trigger, and profile/menu actions.
- Hero/search area optimized for mobile.
- Category chips or quick discovery sections.
- Featured listing cards and destination-based recommendation groups.
- Mobile bottom navigation pattern inspired by Airbnb.

Purpose:
- Help users start exploration quickly and transition into search results.

### 2) Catalog (Search Results) Page
Contains:
- Sticky top controls (location/date/guests summary + filter button).
- Horizontal filter/category chips.
- Scrollable grid/list of listing cards with photo, title, metadata, price, rating, and favorite action.
- Optional map placeholder area on desktop layouts.

Purpose:
- Support fast comparison between multiple rentals and easy refinement.

### 3) Room Detail Page
Contains:
- Image gallery (mobile-first stacked presentation, enhanced at desktop).
- Listing header with title, rating, reviews count, and location.
- Host + room summary details.
- Amenities section.
- Date/guest booking card with nightly price and reserve CTA.
- Sticky mobile booking footer.

Purpose:
- Provide enough trust and detail for booking intent.

## Component Architecture Direction
Reusable components expected across pages:
- Header/Nav bars (desktop and mobile variants).
- Search summary bar.
- Filter chips.
- Listing card.
- Section wrapper/title blocks.
- Rating badge/meta row.
- Image gallery blocks.
- Booking card/footer actions.

## Responsive Strategy
- Mobile-first baseline at 375px.
- Desktop adaptations at 768px and above.
- Use Tailwind utility classes with responsive variants for layout shifts:
  - Single-column mobile content.
  - Multi-column grids and side panels on desktop.

## Data Modeling Expectations
Each listing card/detail should be driven by structured data with fields like:
- id, title, location, images
- type (entire home/private room), beds, dates
- price per night, total price, rating, reviews
- host data and amenity tags

This enables the same model to power Home featured cards, Catalog list items, and Room detail content.

## Scope Notes
- UI clone only; no live booking backend required.
- Interactions can be mocked (button states, toggles, and static data).
- Focus is visual parity, component composition, and responsive behavior.
