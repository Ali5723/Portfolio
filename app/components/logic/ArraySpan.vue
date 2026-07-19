<script setup lang="ts">
const props = defineProps<{ name: string; Astyle: string }>();
</script>

<template>
  <span v-for="value in $tm(name)" :class="[value[1] ? Astyle : '']">
    {{ value[0] }}
  </span>
</template>
