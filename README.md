# ClearCircuit™ - Professional Panel Label Kits

A modern e-commerce website for electrical panel labeling solutions built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern React Architecture**: Built with Next.js 14 App Router and TypeScript
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **E-commerce Functionality**: Complete shopping cart with persistent state
- **Professional UI**: Clean, conversion-focused design with Framer Motion animations
- **SEO Optimized**: Proper metadata, structured data, and semantic HTML
- **Testing**: Jest unit tests and Cypress e2e tests
- **Accessibility**: WCAG AA compliant design

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **State Management**: Zustand for cart state
- **Animations**: Framer Motion
- **Testing**: Jest, React Testing Library, Cypress
- **Build Tools**: Next.js, ESLint, TypeScript compiler

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run Jest tests
- `npm run test:watch` - Run Jest in watch mode

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── products/          # Products pages
│   ├── cart/              # Shopping cart
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── layout/           # Layout components
│   └── ui/               # UI components
├── data/                 # Sample data
├── hooks/                # Custom React hooks
├── types/                # TypeScript type definitions
└── lib/                  # Utility functions
```

## Key Pages

- **Homepage** (`/`): Hero section, features, testimonials, and product showcase
- **Products** (`/products`): Complete product catalog with filtering
- **Cart** (`/cart`): Shopping cart with quantity management
- **Product Details** (`/products/[slug]`): Individual product pages (to be implemented)

## Design System

The project uses a custom design system based on electrical industry colors:
- **Primary**: Electric Blue (#1F6FEB)
- **Secondary**: Safety Orange (#FF7600)
- **Accent**: Safety Yellow (#FFD700)

## Testing

Run tests with:
```bash
npm run test
```

The project includes:
- Unit tests for key components
- Integration tests for user flows
- E2e tests with Cypress (configuration included)

## Deployment

This project is optimized for Vercel deployment:

1. Connect your repository to Vercel
2. Configure environment variables if needed
3. Deploy with automatic builds on push

## Product Data

The application uses sample product data for demonstration. In production, this would be replaced with a proper CMS or database.

## License

This project is created for demonstration purposes.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## Support

For questions or issues, please open an issue on the GitHub repository.
