<script setup lang="ts">
const { isEn } = useLocale();

useHead({
  script: [
    {
      type: "application/ld+json",
      textContent: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Ali Amin",
        jobTitle: "Front-End Developer",
        url: "https://alidevamin.vercel.app",
        image: "https://alidevamin.vercel.app/images/og-image.png",
        sameAs: [
          "https://github.com/Ali5723",
          "https://linkedin.com/in/ali-mohamed-477a83417",
        ],
      }),
    },
  ],
});

useSeo($t("seo.home.title"), $t("seo.home.description"));
</script>

<template>
  <main
    class="flex flex-col gap-14 items-center pt-8 justify-center sm:flex-row-reverse sm:gap-18"
  >
    <PersonImg />
    <div :class="[isEn ? 'font-sora' : '', 'flex flex-col gap-2']">
      <h2 class="text-4xl font-black">{{ $t("home.greeting") }}</h2>
      <h3>
        <span class="text-2xl font-bold">{{ $t("home.who[0]") }}</span>
        <span class="text-3xl font-black text-primary uppercase">{{
          $t("home.who[1]")
        }}</span>
      </h3>
      <h4 class="text-xl font-sora font-bold custom-shadow-secondary-1">
        Front-End Developer
      </h4>
    </div>
  </main>
</template>
