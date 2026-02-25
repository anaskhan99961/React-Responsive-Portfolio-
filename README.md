# Portfolio – React

Converted from the original single-page HTML portfolio to a React app (Vite + React).

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Profile image

Replace `src/profile.jpeg` with your own photo. The hero section uses this image; a small placeholder is included so the app builds out of the box.

## Structure

- `src/App.jsx` – Main app (cursor glow, scroll state, modal, fade-in observer)
- `src/components/Nav.jsx` – Navigation with smooth scroll
- `src/components/Hero.jsx` – Hero section with profile image and particles
- `src/components/Skills.jsx` – Skills grid
- `src/components/Projects.jsx` – Projects grid
- `src/components/ClientReviews.jsx` – Client reviews / testimonials
- `src/components/BlogPosts.jsx` – My blog posts
- `src/components/Contact.jsx` – Contact section and social links
- `src/components/Footer.jsx` – Footer
- `src/components/ContactModal.jsx` – Contact form modal
- `src/index.css` – Global styles
