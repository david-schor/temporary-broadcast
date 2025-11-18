// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from '@astrojs/react';

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://peaksix.ch',
  integrations: [
    react(), 
    sitemap({
      filter: (page) => 
        page !== 'https://peaksix.ch/georgia/index' &&
        page !== 'https://peaksix.ch/norway/index' &&
        page !== 'https://peaksix.ch/switzerland/index' &&
        page !== 'https://peaksix.ch/japan/index',
    }),
  ],
    devToolbar: {
    enabled: false
  },
});
