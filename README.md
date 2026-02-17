# Currency Converter

A real-time currency conversion application built with Next.js and modern web technologies.

## Quick Start

### Prerequisites

- Node.js 18+ installed

### Installation

```bash
npm install
```

### Environment Setup

Create a `.env.local` file in the project root:

```
NEXT_PUBLIC_API_KEY=your_currencyapi_com_api_key
```

Get your API key at [currencyapi.com](https://currencyapi.com)

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Features

- Real-time currency conversion
- Support for 7 major currencies (USD, EUR, JPY, CAD, INR, BRL, AUD)
- Dark/light theme toggle
- Responsive design
- Live exchange rates via Currency API

## Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Components**: Flowbite React
- **Icons**: React Icons
- **Language**: TypeScript

## Project Structure

- `src/App.tsx` - Main converter component
- `src/pages/index.tsx` - Home page with feature showcase
- `src/pages/_app.tsx` - App configuration
- `src/assets/` - Static assets
- `public/` - Public files

## Usage

The app converts currencies using real-time rates from the Currency API. Enter an amount, select source and target currencies, and click "Convert".
