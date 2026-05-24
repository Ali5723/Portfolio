<script setup>
import MainImg from "@/components/mainImg.vue";
import { ref, watch } from "vue";

const props = defineProps({
  gLangData: {
    type: Object,
  },
});
const langData = ref([]);
watch(
  () => props.gLangData,
  (newVal) => {
    if (newVal?.home) {
      langData.value = newVal.home;
    }
  },
  { immediate: true },
);
</script>

<template>
  <main>
    <!-- {{ langData }} -->
    <section>
      <MainImg />
    </section>
    <section>
      <h2>{{ langData[0] }}</h2>
      <h3>
        {{ langData[1] }}<span>{{ langData[2] }}</span>
      </h3>
      <h4>Front-End Developer</h4>
    </section>
  </main>
</template>

<style scoped>
main {
  margin-block-start: 2rem;
  display: flex;
  gap: 5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
main section:first-of-type {
  text-align: center;
}
main section:last-of-type {
  display: grid;
  gap: 0.75rem;
  font-family: Sora, sans-serif;
}
main section:last-of-type h2,
main section:last-of-type h3,
main section:last-of-type h4 {
  margin: 0;
}
:root[lang="ar"] main section:last-of-type h2,
:root[lang="ar"] main section:last-of-type h3 {
  font-family: Mada, sans-serif;
}
main section:last-of-type h2 {
  font-weight: 600;
  font-size: 2rem;
}
main section:last-of-type h3 {
  font-size: 1.5rem;
}
main section:last-of-type h3 span {
  color: var(--primary);
  font-size: 1.75rem;
  text-transform: uppercase;
}
main section:last-of-type h4 {
  font-size: 1.25rem;
  font-weight: 600;
  text-shadow: 0 0 0.5rem var(--secondary);
}
@media (min-width: 700px) {
  main {
    flex-direction: row-reverse;
  }
}
</style>
