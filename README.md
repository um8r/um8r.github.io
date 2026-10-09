# Umar Habib — Portfolio

AI Engineer & Full Stack Developer portfolio. Static site (HTML + Bootstrap 5 + vanilla JS), no build step.

## Structure
```
index.html          page markup
css/style.css       all styles (base theme + upgrade layer)
js/data.js          PROJECTS and LinkedIn POSTS data (edit this to update content)
js/script.js        interactions (filters, modal, animations, form)
images/             profile photo, favicon, social preview
cv.pdf              downloadable CV
```

## Updating content
- **Add a project:** copy one object in `window.PROJECTS` in `js/data.js`.
- **Add LinkedIn posts:** fill `window.POSTS` in `js/data.js` (date, title, text, tags, url).
- **Contact form:** posts to Formspree (`https://formspree.io/f/xvkpznkk`).

## Deploy
Upload the folder as-is to GitHub Pages, Netlify or Vercel.
