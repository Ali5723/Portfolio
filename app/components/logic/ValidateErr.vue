<script setup lang="ts">
import { CircleAlert } from "@lucide/vue";

const props = defineProps<{ text: string }>();
</script>

<template>
  <div
    class="*:text-primary flex items-center gap-2"
    v-if="text?.trim().length"
  >
    <CircleAlert class="size-4" />
    <UiInputGroupText>{{ text }}</UiInputGroupText>
  </div>
</template>
