<script setup lang="ts">
const props = defineProps<{ img: string }>();
</script>

<template>
  <div class="border-4 w-fit border-gray-400 rounded-xl overflow-hidden">
    <div class="flex gap-2 py-2 pe-4 justify-end bg-zinc-800">
      <span
        v-for="item in ['bg-green-500', 'bg-yellow-500', 'bg-red-500']"
        :class="['size-4 rounded-full', item]"
      ></span>
    </div>
    <NuxtImg
      :src="img"
      alt="projectImg"
      placeholder
      class="w-80"
      loading="lazy"
    />
  </div>
</template>
