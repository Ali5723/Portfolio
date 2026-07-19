<script setup lang="ts">
const { setLocale } = useI18n();
const { locale, isEn } = useLocale();

watch(
  () => locale.value,
  () => {
    useHead({
      htmlAttrs: {
        lang: locale.value,
      },
    });
  },
  { immediate: true },
);

const languages: ("en" | "ar")[] = ["en", "ar"];

const isSheetOpen = ref<boolean>(false);

const route = useRoute();
const config = useRuntimeConfig();
const switchLocalePath = useSwitchLocalePath();
useHead({
  link: [
    {
      rel: "canonical",
      href: config.public.siteUrl + route.path,
    },
    {
      rel: "alternate",
      hreflang: "en",
      href: switchLocalePath("en"),
    },
    {
      rel: "alternate",
      hreflang: "ar",
      href: switchLocalePath("ar"),
    },
  ],
  titleTemplate: (title) => {
    const myName = locale.value === "ar" ? "علي أمين" : "Ali Amin";
    return title ? `${title} | ${myName}` : myName;
  },
});
</script>

<template>
  <header
    class="px-6 py-4 sm:px-10 md:px-14 lg:px-18 backdrop-blur-xs bg-black/60 sticky top-0 z-10"
  >
    <UiNavigationMenu
      class="flex justify-around min-[500px]:justify-between max-w-full"
    >
      <h1 class="logo">Ali</h1>

      <UiNavigationMenuList>
        <div
          :class="[
            'hidden min-[500px]:flex gap-2 sm:gap-4 md:gap-6 lg:gap-8',
            isEn ? '' : '[direction:rtl]!',
          ]"
        >
          <NavbarItems />
        </div>

        <div class="min-[500px]:hidden">
          <UiSheet v-model:open="isSheetOpen">
            <UiSheetTrigger class="sheet">
              <span :class="[isSheetOpen ? 'w-6!' : '']"></span>
              <span></span>
              <span :class="[isSheetOpen ? 'w-6!' : '']"></span>
            </UiSheetTrigger>
            <UiSheetContent :side="isEn ? 'right' : 'left'">
              <UiSheetHeader class="text-xl font-bold">
                {{ $t("navbar.sheet.pages") }}
              </UiSheetHeader>
              <UiNavigationMenuList class="flex-col gap-4 px-10 *:w-full">
                <NavbarItems />
              </UiNavigationMenuList>
            </UiSheetContent>
          </UiSheet>
        </div>
      </UiNavigationMenuList>

      <div class="switcher">
        <div
          v-for="value in languages"
          :class="[value, locale === value ? 'selected' : '']"
          @click="setLocale(value)"
        >
          {{ value }}
        </div>
      </div>
    </UiNavigationMenu>
  </header>

  <slot />
</template>

<style lang="css" scoped>
@reference "@/assets/css/tailwind.css";

.logo {
  @apply text-3xl italic underline font-space font-black;
}
.logo::first-letter {
  @apply not-italic text-primary text-4xl;
}

.switcher {
  @apply flex font-sora [direction:ltr]! border-2 border-foreground rounded-full overflow-hidden select-none;
}
.switcher * {
  @apply px-2.5 py-0.5;
}
.switcher .selected {
  @apply bg-foreground text-background pointer-events-none border-background;
}
.switcher :not(.selected) {
  @apply cursor-pointer border-foreground;
}
.switcher .en {
  @apply border-r;
}
.switcher .ar {
  @apply border-l;
}

.sheet {
  @apply p-0 m-0 cursor-pointer flex flex-col items-center gap-1;
}
.sheet span {
  @apply block border-b w-6 rounded-sm h-1 bg-foreground;
}
.sheet span:not(:nth-of-type(2)) {
  @apply w-4 transition-all duration-400;
}
</style>
