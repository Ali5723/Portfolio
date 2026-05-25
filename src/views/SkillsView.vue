<script setup>
import IconConsole from "@/components/icons/IconConsole.vue";
import IconCSS from "@/components/icons/IconCSS.vue";
import IconGit from "@/components/icons/IconGit.vue";
import IconHTML from "@/components/icons/IconHTML.vue";
import IconJS from "@/components/icons/IconJS.vue";
import IconVite from "@/components/icons/IconVite.vue";
import IconVue from "@/components/icons/IconVue.vue";
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
    if (newVal?.skills) {
      langData.value = newVal.skills;
    }
  },
  { immediate: true },
);
</script>

<template>
  <main>
    <section class="center">
      <h1>
        {{ langData[0] }}<span class="highlight">{{ langData[1] }}</span
        >{{ langData[2] }}
      </h1>
      <p>{{ langData[3] }}</p>
    </section>
    <section class="center">
      <hr />
      <h2>{{ langData[4] }}</h2>
      <p>{{ langData[5] }}</p>
    </section>
    <section>
      <h3>{{ langData[6] }}</h3>
      <div class="cards-container">
        <div class="card">
          <IconHTML />
          <h4>HTML5</h4>
          <p>{{ langData[7] }}</p>
        </div>
        <div class="card">
          <IconCSS />
          <h4>CSS3</h4>
          <p>{{ langData[8] }}</p>
        </div>
        <div class="card">
          <IconJS />
          <h4>JavaScript</h4>
          <p>{{ langData[9] }}</p>
        </div>
      </div>
    </section>
    <section>
      <h3>{{ langData[10] }}</h3>
      <div class="cards-container">
        <div class="card">
          <IconVite />
          <h4>Vite</h4>
          <p>{{ langData[11] }}</p>
        </div>
        <div class="card">
          <IconVue />
          <h4>VueJS</h4>
          <p>{{ langData[12] }}</p>
        </div>
      </div>
    </section>
    <section>
      <h3>{{ langData[13] }}</h3>
      <div class="cards-container">
        <div class="card">
          <IconGit />
          <h4>Version Control</h4>
          <p>{{ langData[14] }}</p>
        </div>
        <div class="card">
          <IconConsole />
          <h4>DevTools</h4>
          <p>{{ langData[15] }}</p>
        </div>
      </div>
    </section>
    <section>
      <h3>{{ langData[16] }}</h3>
      <div class="split">
        <div>
          <h4>100%</h4>
          <p>Pixel Perfect</p>
        </div>
        <div>
          <hr />
          <h4>{{ langData[17] }}</h4>
          <p>{{ langData[18] }}</p>
        </div>
      </div>
    </section>
    <!-- <section>
      <h3>مسار النمو المستمر</h3>
      <ul>
        <li>
          <h4>المرحلة 1</h4>
          <p>اتقان الأساسيات (HTML/CSS/JS)</p>
        </li>
        <li>
          <h4>المرحلة 2</h4>
          <p>بناء الواجهات بواسطة VueJS</p>
        </li>
        <li>
          <h4>المرحلة 3</h4>
          <p>التعلم الحالي: Typescript</p>
        </li>
        <li>
          <h4>المرحلة 4</h4>
          <p>المستقبل: PHP & Laravel</p>
        </li>
      </ul>
    </section> -->
  </main>
</template>

<style scoped>
svg {
  fill: var(--primary);
  color: var(--primary);
}
main {
  margin-block-end: 3rem;
}
section {
  padding-block: 1rem;
}
section h1 {
  line-height: 1.5;
  font-size: 2rem;
}
section h1 span {
  text-shadow: 0 0 0.25rem var(--secondary);
  color: var(--primary);
}
section h2 {
  font-size: 1.75rem;
}
section h3 {
  font-size: 1.5rem;
  padding-inline-start: 1rem;
  border-inline-start: 0.25rem solid var(--secondary);
  padding-block: 1rem;
  margin: 0;
}
section p {
  color: var(--preview-text);
  font-size: 1.1rem;
  line-height: 1.5;
}
section hr {
  width: 5rem;
  border-color: var(--primary);
  border-width: 2px;
  border-radius: 1rem;
}
section.center {
  text-align: center;
}
section .split {
  display: grid;
  text-align: center;
  margin-block-start: 2rem;
  gap: 3rem;
}
section .split div h4,
section .split div p {
  margin: 0;
}
section .split div:first-of-type h4 {
  font-size: 5rem;
  color: var(--primary);
}
section .split div:first-of-type p {
  color: var(--text);
  font-size: 1.25rem;
}
section .split div:last-of-type h4 {
  font-size: 2rem;
  margin-block-end: 1rem;
}
</style>
