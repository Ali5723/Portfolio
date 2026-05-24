<script setup>
import { onBeforeMount, onMounted, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { getLangData, parseLS, stringifyLS } from "./modules/modules";

let gLangData = ref({});
let langData = ref([]);

function handleMenuClick() {
  document.getElementById("menu").classList.toggle("selected");
  document.getElementById("links").classList.toggle("selected");
}

function handleSwitchClick($event) {
  const switchElement = document.getElementById("switch");
  const toggleText = switchElement.querySelector(":not(.selected)").innerText;

  if (toggleText === $event.target.innerText) {
    [...switchElement.children].forEach(async (element) => {
      element.classList.toggle("selected");
      stringifyLS("lang", toggleText);
      document.body.parentElement.setAttribute("lang", toggleText);
      await getLangData(toggleText).then((data) => {
        langData.value = data.nav;
        gLangData.value = data;
      });
    });
  }
}

window.addEventListener("click", (event) => {
  const conditionsElement = event.target;
  const conditionsElementParent = conditionsElement.parentElement
    ? conditionsElement.parentElement
    : conditionsElement;
  const conditionsList = [
    conditionsElementParent.localName,
    conditionsElement.localName,
    conditionsElementParent.className,
    conditionsElement.className,
  ];
  const conditions =
    !conditionsList.includes("ul") &&
    [...document.getElementById("menu").classList].includes("selected") &&
    !conditionsList.includes("menu") &&
    !conditionsList.includes("menu selected");

  if (!!conditions) {
    handleMenuClick();
  }
});

onBeforeMount(async () => {
  await getLangData(parseLS("lang")).then((data) => {
    langData.value = data.nav;
    gLangData.value = data;
  });
});
onMounted(() => {
  document
    .getElementById("switch")
    .querySelector(`.${parseLS("lang")}`)
    .classList.add("selected");
});
</script>

<template>
  <header>
    <nav>
      <h1 class="logo">Ali</h1>
      <div class="center">
        <button class="menu" @click="handleMenuClick" id="menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul class="links" id="links">
          <RouterLink to="/">{{ langData[0] }}</RouterLink>
          <RouterLink to="/about">{{ langData[1] }}</RouterLink>
          <RouterLink to="/skills">{{ langData[2] }}</RouterLink>
          <RouterLink to="/projects">{{ langData[3] }}</RouterLink>
          <RouterLink to="/contact">{{ langData[4] }}</RouterLink>
        </ul>
      </div>
      <div class="switch" @click="handleSwitchClick" id="switch">
        <div class="en">en</div>
        <div class="ar">ar</div>
      </div>
    </nav>
  </header>

  <RouterView :g-lang-data="gLangData" />
</template>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-block: 1rem;
  direction: ltr;
}
nav .logo {
  margin: 0;
  font-family: "Space Grotesk", sans-serif;
  text-decoration: underline;
  font-style: italic;
}
nav .logo::first-letter {
  color: var(--primary);
  font-style: normal;
  font-size: 2.25rem;
}
/* :root[lang="ar"] nav {
  flex-direction: row-reverse;
} */
:root[lang="ar"] nav .center {
  direction: rtl;
}
nav .center {
  position: relative;
}
nav .center .menu {
  color: var(--text);
  padding: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
}
nav .center .menu span {
  display: block;
  border-bottom: 0.25rem solid;
  width: 1.5rem;
  border-radius: 0.25rem;
}
nav .center .menu span:not(:last-of-type) {
  margin-bottom: 0.25rem;
}
nav .center .menu span:not(:nth-of-type(2)) {
  width: 1rem;
  transition: var(--transition);
}
nav .center .menu.selected span:not(:nth-of-type(2)) {
  width: 1.5rem;
}
nav .center .links {
  margin: 0;
  list-style: none;
  display: grid;
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--cards);
  border: 1px solid var(--text);
  border-radius: 1rem;
  padding: 2rem;
  transition: var(--transition);
  pointer-events: none;
  opacity: 0;
  top: 1rem;
  z-index: 10;
}
nav .center .links.selected {
  pointer-events: all;
  opacity: 1;
  top: 3rem;
}
nav .center .links a {
  text-decoration: none;
  color: var(--text);
  font-size: 1rem;
  transition: var(--transition);
  padding-block: 1rem;
  width: 7rem;
}
nav .center .links a:not(:last-of-type) {
  border-bottom: 1px solid var(--text);
}
nav .center .links a:first-of-type {
  padding-block-start: 0;
}
nav .center .links a:last-of-type {
  padding-block-end: 0;
}
nav .center .links a.router-link-active {
  color: var(--primary) !important;
  text-decoration: underline var(--text);
}
nav .switch {
  width: 5.5rem;
  height: 2rem;
  border: 1px solid var(--text);
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 1rem;
  text-align: center;
  overflow: hidden;
  background-color: var(--cards);
  font-family: Sora, sans-serif;
}
nav .switch .en,
nav .switch .ar {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);
}
nav .switch .en {
  border-right: 1px solid;
}
nav .switch .ar {
  border-left: 1px solid;
}
nav .switch .selected {
  background-color: var(--text);
  color: var(--cards);
  cursor: default;
}
@media (min-width: 500px) {
  nav {
    justify-content: space-between;
  }
  nav .center .menu {
    display: none;
  }
  nav .center .links {
    opacity: 1;
    position: relative;
    background-color: transparent;
    border: 0;
    display: flex;
    padding: 0;
    gap: 0.5rem;
    top: 0 !important;
    pointer-events: all;
  }
  nav .center .links a {
    border: 0 !important;
    padding: 0;
    width: max-content;
  }
  nav .center .links a:hover {
    color: var(--secondary);
  }
}
@media (min-width: 600px) {
  nav {
    padding-block: 2rem;
  }
  nav .center .links {
    gap: 1rem;
  }
}
@media (min-width: 700px) {
  nav .center .links {
    gap: 1.5rem;
  }
  nav .center .links a {
    font-size: 1.1rem;
  }
}
@media (min-width: 900px) {
  nav .center .links {
    gap: 2rem;
  }
  nav .center .links a {
    font-size: 1.2rem;
  }
}
</style>
