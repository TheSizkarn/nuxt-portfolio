// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   devtools: { enabled: true },
   modules: ["@nuxt/ui", "@nuxt/fonts", "nuxt-svgo", "@nuxt/eslint"],
   compatibilityDate: "2025-01-31",
   css: ["~/assets/css/global.css"],
});
