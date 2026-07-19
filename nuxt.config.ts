import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  modules: [
    "shadcn-nuxt",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxtjs/i18n",
    "nuxt-aos",
    "@nuxtjs/sitemap",
  ],
  shadcn: {
    prefix: "Ui",
    componentDir: "./app/components/ui",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/css/tailwind.css"],
  i18n: {
    defaultLocale: "en",
    locales: [
      {
        language: "en-US",
        name: "English",
        file: "en/index.ts",
        code: "en",
      },
      {
        language: "ar-EG",
        name: "العربية",
        file: "ar/index.ts",
        code: "ar",
      },
    ],
    langDir: "locales/",
    strategy: "prefix_except_default",
  },
  fonts: {
    provider: "local",
    families: [
      {
        name: "Mada",
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
      {
        name: "Sora",
        weights: [100, 200, 300, 400, 500, 600, 700, 800],
      },
      {
        name: "Space Grotesk",
        weights: [300, 400, 500, 600, 700],
      },
      {
        name: "Poppins",
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    ],
  },
  image: {
    provider: "none",
    domains: [],
  },
  app: {
    head: {
      meta: [
        {
          charset: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          name: "theme-color",
          content: "#070707",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon/favicon.ico" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon/favicon-16x16.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/favicon/apple-touch-icon.png",
        },
        { rel: "manifest", href: "/favicon/site.webmanifest" },
      ],
    },
  },
  site: {
    url: "https://alidevamin.vercel.app/",
    name: "Ali Amin Portfolio",
  },
  sitemap: {
    autoLastmod: true,
    discoverImages: true,
  },
  ssr: true,
});
