<script setup lang="ts">
import IconsHtml5 from "~/components/icons/Html5.vue";
import IconsCss3 from "~/components/icons/Css3.vue";
import IconsJs from "~/components/icons/Js.vue";
import IconsTs from "~/components/icons/Ts.vue";
import IconsVue from "~/components/icons/Vue.vue";
import IconsNuxt from "~/components/icons/Nuxt.vue";
import IconsTailwind from "~/components/icons/Tailwind.vue";
import IconsShadcn from "~/components/icons/Shadcn.vue";
import IconsGit from "~/components/icons/Git.vue";
import IconsVite from "~/components/icons/Vite.vue";
import IconsNode from "~/components/icons/Node.vue";
import IconsExpress from "~/components/icons/Express.vue";
import IconsNitro from "~/components/icons/Nitro.vue";

type IconName =
  | "html"
  | "css"
  | "js"
  | "ts"
  | "vue"
  | "nuxt"
  | "tailwind"
  | "shadcn"
  | "git"
  | "vite"
  | "node"
  | "express"
  | "nitro";

const icons: Record<IconName, Component> = {
  html: IconsHtml5,
  css: IconsCss3,
  js: IconsJs,
  ts: IconsTs,
  vue: IconsVue,
  nuxt: IconsNuxt,
  tailwind: IconsTailwind,
  shadcn: IconsShadcn,
  git: IconsGit,
  vite: IconsVite,
  node: IconsNode,
  express: IconsExpress,
  nitro: IconsNitro,
};

useSeo($t("seo.skills.title"), $t("seo.skills.description"));
</script>

<template>
  <main class="custom-main">
    <div class="main-center space-y-8">
      <h2 class="font-semibold text-3xl">
        <LogicArraySpan
          name="skills.main1.title"
          -astyle="text-primary custom-shadow-secondary-2"
        />
      </h2>
      <p>
        {{ $t("skills.main1.description") }}
      </p>
      <hr />
    </div>

    <div class="text-center space-y-2.5">
      <h3 class="font-semibold text-2xl">{{ $t("skills.main2.title") }}</h3>
      <p>{{ $t("skills.main2.description") }}</p>
    </div>

    <div>
      <div v-for="(item, index1) in $tm('skills.skills')">
        <h4>{{ item.title }}</h4>
        <div class="grid sm:grid-cols-2 gap-5">
          <UiCard
            v-for="(card, index2) in item.cards"
            class="text-center custom-drop-shadow"
            :data-aos="
              (index1 as number) === 0 && (index2 as number) <= 1
                ? ''
                : 'fade-up'
            "
          >
            <UiCardHeader>
              <component
                :is="icons[card.icon as keyof typeof icons]"
                class="fill-primary text-primary w-full h-36"
              />
              <h5 class="text-2xl font-bold mt-5">{{ card.title }}</h5>
            </UiCardHeader>
            <UiCardContent>
              <p>{{ card.description }}</p>
            </UiCardContent>
          </UiCard>
        </div>
      </div>
    </div>

    <div>
      <h4>{{ $t("skills.footer.title1") }}</h4>
      <div class="main-center space-y-5">
        <div class="space-y-2.5 mb-12">
          <h5 class="text-7xl font-bold text-primary">100%</h5>
          <p class="text-white! text-lg!">Pixel Perfect</p>
        </div>
        <hr />
        <h5 class="text-3xl font-bold">{{ $t("skills.footer.title2") }}</h5>
        <p>{{ $t("skills.footer.description") }}</p>
      </div>
    </div>
  </main>
</template>

<style lang="css" scoped>
@reference "@/assets/css/tailwind.css";

.main-center {
  @apply flex flex-col items-center text-center;
}
p {
  @apply text-gray-400 text-base;
}
hr {
  @apply border-primary w-20 border-2 rounded-full;
}
h4 {
  @apply border-s-4 border-secondary py-4 flex items-center ps-4 font-semibold text-2xl my-10;
}
</style>
