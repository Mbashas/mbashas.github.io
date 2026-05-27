# Seth Mbasha — Portfolio Website

Personal portfolio website showcasing work at the intersection of AI engineering, data science, machine learning, and technology for African contexts.

## 🚀 Technologies Used

- **Framework:** [Astro](https://astro.build/) (Static Site Output)
- **Styling:** Vanilla CSS
- **Interactivity:** Lightweight Vanilla JavaScript (Custom Cursor, scroll progress, scroll animations)

## 🛠️ Local Development

To run the project locally, ensure you have [Node.js](https://nodejs.org/) installed:

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start Development Server:**
   ```bash
   npm run dev
   ```
   Open your browser to [http://localhost:4321](http://localhost:4321) to preview the site.

3. **Build Production Assets:**
   ```bash
   npm run build
   ```
   Static output files are built into the `dist/` directory.

4. **Preview Production Build Locally:**
   ```bash
   npm run preview
   ```

## 📦 Directory Structure

- `src/components/` - Astro UI components (e.g. Navigation, Footer, Landing Layout)
- `src/data/` - Static JSON data files for projects and blog posts
- `src/layouts/` - Base page layout containing metadata, scripts, and global styles
- `src/pages/` - Site routing and page entrypoints (Index, Projects, Blog, Case Studies)
- `src/styles/` - Curated stylesheets (Global styling, page-specific layout styling)
- `public/` - Public assets (e.g. favicons, scripts, images)
