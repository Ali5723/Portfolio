<script setup lang="ts">
const projectsImages = Object.entries(
  import.meta.glob("~/assets/images/projects/*.png", {
    eager: true,
    import: "default",
  }),
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, image]) => image);

const projectsData: {
  title: string;
  description: string;
  repo: string;
  demo: string;
}[] = $tm("projects");

useSeo($t("seo.projects.title"), $t("seo.projects.description"));
</script>

<template>
  <main
    class="custom-main text-center grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
  >
    <UiCard
      v-for="(item, index1) in projectsImages"
      class="max-w-sm custom-drop-shadow mx-auto"
      :data-aos="index1 <= 2 ? '' : 'fade-up'"
    >
      <UiCardHeader>
        <BrowserImg :img="item as string" />
        <h2 class="font-bold text-2xl mt-4 font-poppins!">
          {{ projectsData[index1]?.title }}
        </h2>
      </UiCardHeader>
      <UiCardContent>
        <p>
          {{ projectsData[index1]?.description }}
        </p>
        <div class="flex justify-evenly mt-5">
          <NuxtLink
            v-for="(item, index2) in ['Repo', 'Live Demo']"
            :to="
              index2 === 0
                ? projectsData[index1]?.repo
                : projectsData[index1]?.demo
            "
            target="_blank"
            :class="[
              'text-primary font-bold duration-500 transition-all',
              (
                index2 === 0
                  ? projectsData[index1]?.repo
                  : projectsData[index1]?.demo
              )
                ? 'hover:text-primary/80'
                : 'text-primary/60',
            ]"
          >
            {{ item }}
          </NuxtLink>
        </div>
      </UiCardContent>
    </UiCard>
  </main>
</template>
