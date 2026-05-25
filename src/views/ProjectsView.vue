<script setup>
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
    if (newVal?.projects) {
      langData.value = newVal.projects;
    }
  },
  { immediate: true },
);

const myProjectsNames = [
  "Portfolio",
  "Todo app",
  "Weather app",
  "Rock Paper Scissors",
  "Stats preview card component",
  "Huddle landing page with single introductory section",
  "Single Price Grid Component",
  "3 column preview card component",
  "Testimonials grid section main",
  "Clipboard landing page",
  "Bento grid",
  "Chat app Illustration",
  "Social links profile",
  "Results summary component",
  "Recipe page",
];
// https://github.com/Ali5723/  Portfolio
// https://ali5723.github.io/   Portfolio
const myProjectsLinks = [
  "Portfolio",
  "Frontend-Mentor-Todo-app",
  "Frontend-Mentor-Weather-app",
  "Frontend-Mentor-Rock-Paper-Scissors",
  "Frontend-Mentor-Stats-preview-card-component",
  "Frontend-Mentor-Huddle-landing-page-with-single-introductory-section",
  "Frontend-Mentor-Single-Price-Grid-Component",
  "Frontend-Mentor-3-column-preview-card-component",
  "Frontend-Mentor-Testimonials-grid-section-main",
  "Frontend-Mentor-Clipboard-landing-page",
  "Frontend-Mentor-Bento-grid",
  "Frontend-Mentor-Chat-app-Illustration",
  "Frontend-Mentor-Social-links-profile",
  "Frontend-Mentor-Results-summary-component",
  "Frontend-Mentor-Recipe-page",
];
function twoDigitNumber(number) {
  return number < 10 ? `0${number}` : `${number}`;
}
let modalImage = ref("");
function showModal(index) {
  modalImage.value = `/images/projects/${twoDigitNumber(index)}.png`;
  document.querySelector(".modal").classList.remove("hidden");
}
function removeModal() {
  document.querySelector(".modal").classList.add("hidden");
}
</script>

<template>
  <main>
    <!-- {{ langData }} -->
    <div class="cards-container">
      <div
        class="card"
        v-for="(project, index) in myProjectsNames"
        :key="index"
      >
        <div class="img-container" @click="showModal(index + 1)">
          <div class="container-header">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <img
            :src="`/images/projects/${twoDigitNumber(index + 1)}.png`"
            :alt="project"
          />
        </div>
        <h2>{{ project }}</h2>
        <p>{{ langData[index] }}</p>
        <div class="split">
          <a
            :href="`https://github.com/Ali5723/${myProjectsLinks[index]}`"
            target="_blank"
            rel="noopener noreferrer"
            >Repo</a
          >
          <a
            :href="
              index !== 0
                ? `https://ali5723.github.io/${myProjectsLinks[index]}`
                : 'https://alimoh-dev-portfolio.vercel.app/'
            "
            target="_blank"
            rel="noopener noreferrer"
            >Live Demo</a
          >
        </div>
        <!-- <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
        </ul> -->
      </div>
    </div>
    <div class="modal hidden" @click="removeModal">
      <img :src="modalImage" alt="image" />
    </div>
  </main>
</template>

<style scoped>
main {
  margin-block-end: 5rem;
}
.img-container {
  border-radius: 0.75rem;
  border: 0.25rem solid var(--preview-text);
  margin: 20px;
  overflow: hidden;
  cursor: pointer;
}
.img-container .container-header {
  height: 1.75rem;
  background-color: #1e1e24;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  padding-inline-end: 1rem;
  transition: var(--transition);
}
.img-container .container-header span {
  width: 1rem;
  height: 1rem;
  display: block;
  border-radius: 50%;
}
.img-container .container-header span:nth-of-type(1) {
  background-color: #27c93f;
}
.img-container .container-header span:nth-of-type(2) {
  background-color: #ffbd2e;
}
.img-container .container-header span:nth-of-type(3) {
  background-color: #ff5f56;
}
.img-container img {
  width: stretch;
  margin-block-end: -5px;
}
.cards-container {
  row-gap: 3rem;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
}
.cards-container .card {
  /* padding-block-end: 0.5rem; */
  padding-block-end: 2rem;
}
.cards-container .card h2 {
  text-transform: capitalize;
  font-family: Sora, sans-serif;
  padding-inline: 1rem;
}
.cards-container .card .split {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-block-start: 2rem;
  direction: ltr;
}
.cards-container .card .split a {
  text-decoration: none;
  color: var(--primary);
  font-family: Sora, sans-serif;
}
/* .cards-container .card ul {
  list-style: none;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  font-weight: 700;
}
.cards-container .card ul li {
} */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(6px);
  background-color: rgba(0, 0, 0, 0.6);
  transition: var(--transition);
  /* z-index: 5; */
}
.modal.hidden {
  opacity: 0;
  pointer-events: none;
}
.modal img {
  width: 90%;
  position: absolute;
  top: calc(40% + 75px);
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid var(--primary);
  box-shadow: 0 0 1.25rem var(--primary);
  border-radius: 1rem;
  max-width: 800px;
}
</style>
