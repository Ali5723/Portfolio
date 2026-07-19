<script setup lang="ts">
const pagesList: object = {
  home: "/",
  about: "/about",
  skills: "/skills",
  projects: "/projects",
  contact: "/contact",
};

const { t } = useI18n()

const localePath = useLocalePath()
</script>

<template>
  <UiNavigationMenuItem class="capitalize" v-for="(value, key) in pagesList">
    <NuxtLink :to="localePath(value)" v-slot="isActive">
      <UiNavigationMenuLink
        :class="[
          isActive.isActive
            ? 'text-primary! underline decoration-foreground'
            : '',
          'text-base sm:text-lg lg:text-xl',
        ]"
      >
        {{ t(`navbar.items.${key}`) }}
      </UiNavigationMenuLink>
    </NuxtLink>
  </UiNavigationMenuItem>
</template>
