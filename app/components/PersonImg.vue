<script setup lang="ts">
import personImg from "~/assets/images/person.png";

const { isEn } = useLocale();
</script>

<template>
  <NuxtImg
    :src="personImg"
    alt="personImg"
    placeholder
    loading="eager"
    preload
    :class="[
      'w-64 rounded-4xl shadow-[0_0_1.5rem_0rem] shadow-secondary transition-all duration-500',
      isEn ? '' : 'rotate-y-180',
      'hover:saturate-50 size-64',
    ]"
    width="256px"
    height="256px"
  />
</template>
