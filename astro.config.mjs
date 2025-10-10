import node from "@astrojs/node";
import { defineConfig, envField } from "astro/config";
import prefixer from "postcss-prefix-selector";

// https://astro.build/config
export default defineConfig({
  build: {
    assetsPrefix: "https://cdn.nav.no/teampam/pam-min-side-microfrontend",
    inlineStylesheets: "always",
  },
  vite: {
    css: {
      postcss: {
        plugins: [
          prefixer({
            prefix: ".pam-min-side-microfrontend",
            ignoreFiles: [/module.css/],
          }),
        ],
      },
    },
  },
  i18n: {
    defaultLocale: "nb",
    locales: ["nb", "nn", "en"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  env: {
    schema: {
      MIN_CV_URL: envField.string({
        context: "server",
        access: "secret",
        default: "https://www.nav.no/min-cv",
      }),
    },
  },
});
