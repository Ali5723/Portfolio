<script setup lang="ts">
useSeo($t("seo.about.title"), $t("seo.about.description"));
</script>

<template>
  <main
    class="px-5 h-[calc(80vh)] flex flex-col justify-center sm:flex-row-reverse sm:gap-6 md:px-12 max-w-215 mx-auto sm:h-auto sm:items-center pt-8 md:gap-14"
  >
    <PersonImg class="hidden sm:block" />
    <ul class="list-disc pl-6 flex flex-col gap-4">
      <li v-for="item in 3">
        <LogicArraySpan
          :name="`about.section${item}`"
          -astyle="text-secondary"
        />
      </li>
    </ul>
  </main>
</template>
