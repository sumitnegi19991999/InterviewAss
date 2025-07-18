# ConnectGermany Pathways

A modern web application to guide Indian students in their journey to study in Germany. Built with **React**, **Vite**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui** components.

## Features

- University selection and application guidance
- Visa and documentation support
- Pre-departure and post-arrival services
- Career counseling and German language courses
- Responsive, modern UI with custom design system

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)

## Local Development

1. **Install dependencies:**
   ```bash
   npm install
   # or
   bun install
   ```
2. **Start the dev server:**
   ```bash
   npm run dev
   # or
   bun run dev
   ```
   The app will be available at [http://localhost:8080](http://localhost:8080).

## Build for Production

```bash
npm run build
# or
bun run build
```

The static files will be generated in the `dist/` directory.

## Deploying to Vercel

This project is ready for static deployment on [Vercel](https://vercel.com/):

1. **Push your code to GitHub/GitLab/Bitbucket.**
2. **Import the repository into Vercel.**
3. **Set the following settings:**
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** `dist` (default)
4. **No custom `vercel.json` is required** unless you need redirects or rewrites.
5. **Environment Variables:**
   - If you use any, add them in the Vercel dashboard under Project Settings > Environment Variables.

## Notes

- All static assets (images, favicon, etc.) are in the `public/` directory and are copied to `dist/` on build.
- The app uses client-side routing via `react-router-dom`. Vercel automatically handles SPA fallback for Vite projects.
- Contact form uses [Formspree](https://formspree.io/) for submissions. Update the endpoint in `src/pages/Contact.tsx` if needed.

## License

MIT
