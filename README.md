# Dan Lenard Hacutina

My personal portfolio. Built with Next.js (App Router), TypeScript, Tailwind CSS v4, Framer Motion, and lucide-react.

Live site: [danlenard.github.io](https://danlenard.github.io)

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

I keep the text in `src/data/` so most updates don't require touching a component:

- `profile.ts` - name, role, bio, socials, resume path
- `skills.ts` - skill groups
- `experience.ts` - work history
- `projects.ts` - project cards
- `certifications.ts` - certifications

## Theme

Light mode is the default. On a first visit the site follows the OS setting. Once someone uses the sun/moon toggle, their choice is saved in `localStorage` under `theme` and wins over system changes. Both palettes are defined in `src/app/globals.css` under `[data-theme="light"]` and `[data-theme="dark"]`.

## Resume

The download buttons point to `/Dan_Lenard_Hacutina_Resume.pdf`. The PDF lives at the project root and is served by the static route handler in `src/app/Dan_Lenard_Hacutina_Resume.pdf/route.ts`, which `next build` writes to `out/Dan_Lenard_Hacutina_Resume.pdf`.

The file isn't in `public/` on purpose: Next.js refuses to build when a public file and a route share a path, and keeping it at the root also makes the same URL work when GitHub Pages serves the repository itself. Replace that PDF when the resume changes. If the file name changes, rename the route folder and update `resumeUrl` in `src/data/profile.ts` as well.

## Contact form

The form sends messages through Formspree.

1. Sign in at [formspree.io](https://formspree.io) and create a form for the email address where I want to receive messages.
2. Open the form and copy its endpoint URL. It looks like `https://formspree.io/f/mzbwabcd`.
3. The form ID is the last part of that URL, `mzbwabcd` in this example. Pasting the whole endpoint URL instead also works; it's normalized before use.
4. Create `.env.local` in the project root and add it:

```bash
NEXT_PUBLIC_FORMSPREE_ID=mzbwabcd
```

For the deployed site, add the same value as a repository variable named `NEXT_PUBLIC_FORMSPREE_ID` in Settings > Secrets and variables > Actions > Variables. The workflow passes it into the build. It isn't a secret, since the browser needs it to submit the form.

If the variable is missing, the form shows a "not configured" message instead of sending anything.

## Deployment

The portfolio is a static export served by GitHub Pages. `next build` writes the site to `out/`, and `.github/workflows/deploy.yml` deploys it on every push to `main`.

First-time setup in the repository:

1. Go to Settings > Pages and set Source to GitHub Actions.
2. Add the `NEXT_PUBLIC_FORMSPREE_ID` variable mentioned above.
3. Push to `main` and wait for the workflow to finish.

The workflow gets the base path from `actions/configure-pages`, so the setup works for both a `<user>.github.io` repo and a regular project repo.

## Checks

```bash
npm run lint
npm run build
```
