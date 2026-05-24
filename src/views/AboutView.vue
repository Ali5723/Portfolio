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
    if (newVal?.about) {
      langData.value = newVal.about;
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
      <ul>
        <li v-for="(data, index) in langData" :key="index">
          <span
            v-for="(item, index) in data"
            :key="index"
            :class="item[1] ? 'highlight' : ''"
            >{{ item[0] }}</span
          >
        </li>
      </ul>
    </section>
  </main>
</template>

<style scoped>
main {
  margin-block-start: 2rem;
  display: flex;
  gap: 4rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  margin-inline: auto;
  padding-inline: 0.5rem;
}
main img {
  opacity: 0.8;
  display: none;
}
main ul {
  margin: 0;
  display: grid;
  gap: 1rem;
  line-height: 1.5;
}
@media (min-width: 700px) {
  main {
    flex-direction: row-reverse;
  }
  main img {
    display: block;
  }
}
@media (min-width: 900px) {
  main {
    gap: 5rem;
  }
}
</style>
