<script setup>
const props = defineProps({
  langData: {
    type: Object,
  },
});
</script>

<template>
  <main>{{ langData }}</main>
</template>
