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
      <h4 class="greeting">{{ langData[0] }}</h4>
      <h2 class="name">
        {{ langData[1] }}<span>{{ langData[2] }}</span>
      </h2>
      <h3 class="job">Front-End Developer</h3>
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
  gap: 1rem;
  font-family: Sora, sans-serif;
}
main section:last-of-type h2,
main section:last-of-type h3,
main section:last-of-type h4 {
  margin: 0;
}
:root[lang="ar"] main section:last-of-type .greeting,
:root[lang="ar"] main section:last-of-type .name {
  font-family: Mada, sans-serif;
}
main section:last-of-type .greeting {
  font-weight: 600;
}
main section:last-of-type .name {
  font-size: 2rem;
}
main section:last-of-type .name span {
  color: var(--primary);
  font-size: 2.25rem;
  text-transform: uppercase;
}
main section:last-of-type .job {
  font-weight: 600;
  color: var(--secondary);
}
@media (min-width: 700px) {
  main {
    flex-direction: row-reverse;
  }
}
</style>
