# Portfolio

A personal portfolio built with React + Vite, deployed to GitHub Pages.

## Customise

All content lives in **`src/data.js`** — name, bio, skills, experience, projects and social links.
Drop a photo (`avatar.jpg`) or resume (`resume.pdf`) into `public/` and reference it as `./avatar.jpg`.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Deploy to GitHub Pages

1. Create a repo on GitHub. Name it `<your-username>.github.io` for a root URL, or anything (e.g. `portfolio`) for `https://<your-username>.github.io/portfolio/`.
2. Push this project:
   ```bash
   git remote add origin https://github.com/<your-username>/<repo>.git
   git push -u origin main
   ```
3. In the repo go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
4. Every push to `main` now builds and deploys automatically (see `.github/workflows/deploy.yml`).
