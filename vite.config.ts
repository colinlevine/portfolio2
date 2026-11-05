import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// Each essay gets its own static HTML entry so it works on GitHub Pages
// without a client-side router. Keep in sync with src/essays/posts.tsx.
const essaySlugs = ['45cdf6d8-e46e-46b6-840f-070c8f3cf144']

// GitHub Pages redirects /essays -> /essays/; mirror that in the dev server.
const essaysTrailingSlash: Plugin = {
  name: 'essays-trailing-slash',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      const [path, query] = ((req as { url?: string }).url ?? '').split('?')
      if (/^\/essays(\/[^/.]+)?$/.test(path)) {
        res.writeHead(301, { Location: `${path}/${query ? `?${query}` : ''}` })
        res.end()
        return
      }
      next()
    })
  },
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), essaysTrailingSlash],
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        essays: 'essays/index.html',
        ...Object.fromEntries(essaySlugs.map((slug) => [`essay-${slug}`, `essays/${slug}/index.html`])),
      },
    },
  },
})
