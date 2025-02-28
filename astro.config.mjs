import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import icon from "astro-icon";
import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [tailwind(), icon(), compress()],
  site: 'https://kumarthevishrut.github.io',
  base: 'Portfolio-Website',
  output: "static",
  build: {
    assets: 'astro'
  }
});
