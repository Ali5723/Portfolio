<script setup>
const props = defineProps({
  gLangData: {
    type: Object,
  },
});
</script>

<template>
  <main>{{ gLangData }}</main>
</template>
