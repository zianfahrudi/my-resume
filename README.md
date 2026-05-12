# Zian Fahrudi Portfolio

Personal portfolio website for Zian Fahrudi, built with Next.js. It contains a short profile, work experience, GitHub activity, blog pages, and links to personal tools.

The design direction is intentionally simple, clean, and not too busy. This portfolio is inspired by [ahmadrosid.com](https://ahmadrosid.com/). Best regards to Ahmad Rosid for the calm and minimal web style reference.

## Tech Stack

- [Next.js](https://nextjs.org/)
- React
- TypeScript
- Tailwind CSS
- Vercel

## Getting Started

Clone the repository:

```bash
git clone <repository-url>
cd portfolio
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the site in your browser:

```text
http://localhost:3000
```

## Available Scripts

Run local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start production server after build:

```bash
npm run start
```

Run lint:

```bash
npm run lint
```

## Project Structure

```text
src/app/                 Next.js App Router pages
src/app/blog/            Blog list and blog detail pages
src/components/          Reusable UI components
src/data/                Portfolio and blog content
src/lib/                 Helper functions
public/                  Static assets
```

## Content Editing

Update portfolio profile, experience, and social links here:

```text
src/data/portfolio.ts
```

Update blog content here:

```text
src/data/blog.ts
```

Each blog post uses a slug, title, excerpt, publish date, read time, tags, and article sections. URLs inside article paragraphs are automatically rendered as clickable links on the detail page.

## Deployment

This project is deployed with [Vercel](https://vercel.com/).

Production build command:

```bash
npm run build
```

Vercel usually detects Next.js automatically. After connecting the repository, push changes to the production branch or deploy manually with the Vercel CLI.

## AI-Assisted Development

This portfolio was built and iterated with help from AI coding agents, including Claude Opus 4.7 and Codex GPT-5.5. The AI agents were used to clone, structure, refine, and deploy the project while keeping the final design simple and personal.