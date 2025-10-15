# MovieApp

A React + Vite app for exploring movies and TV shows using The Movie Database (TMDb) API. Browse featured content, search by filters, and view details for movies, TV shows, and people.

## Features

- Featured slider with auto-rotate every 5 seconds
- Search by media type (movie/tv), genres, and rating range
- Movie and TV show detail pages
- People detail page with combined credits
- Responsive UI built with Tailwind CSS
- Lazy-loaded routes and a shared layout

## Tech Stack

- React 18, React Router v6 (createBrowserRouter)
- Vite
- Tailwind CSS
- TMDb API
- Context for modals
- Custom hooks (e.g., useFetch)
- Path aliases (e.g., @components, @pages)

## Getting Started

### Prerequisites
- Node.js 18+
- TMDb API Bearer Token

### Installation

```bash
# Install dependencies
npm install

# Create env file
cp .env.example .env
```

In your `.env`, add your TMDb Bearer token:

```bash
VITE_API_TOKEN=YOUR_TMDB_BEARER_TOKEN
```

Note: The app uses a configured base URL internally for API calls (e.g., useFetch). Direct fetches (like People loader) use the full TMDb URL.

### Development

```bash
npm run dev
```

Open http://localhost:5173

### Build

```bash
npm run build
npm run preview
```

## Project Structure (partial)

```
src/
  components/
    FeatureMovies/
      PaginateIndicator.jsx
    MediaDetail/
      RelatedMediaList.jsx
    Loading.jsx
    MovieCard.jsx
    SearchForm.jsx
  context/
    ModalProvider.jsx
  hooks/
    useFetch.js
  pages/
    HomePage.jsx
    MovieDetail.jsx
    TVshowDetail.jsx
    PeoplePage.jsx
    SearchPage.jsx
    RootPlayout.jsx
  main.jsx
  index.css
```

## Key Routes

- / — Home (featured content)
- /movie/:id — Movie details
- /tv/:id — TV show details
- /people/:id — Person details (server loader fetch)
- /search — Search by filters

## Configuration Notes

- SearchPage builds TMDb discover URLs dynamically:
  - /discover/{mediaType}?with_genres=...&vote_average.gte=...&vote_average.lte=...
- RelatedMediaList passes the correct mediaType to MovieCard:
  - mediaType={media.media_type || mediaType}
- PaginateIndicator auto-advances every 5 seconds and cleans up intervals on unmount.

## Scripts

- npm run dev — Start dev server
- npm run build — Production build
- npm run preview — Preview production build
