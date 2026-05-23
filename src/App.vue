<script setup>
import { RouterLink, RouterView } from "vue-router";

function handleMenuClick() {
  document.getElementById("menu").classList.toggle("selected");
  document.getElementById("links").classList.toggle("selected");
}

function handleSwitchClick($event) {
  const switchElement = document.getElementById("switch");
  const toggleText = switchElement.querySelector(":not(.selected)").innerText;

  if (toggleText === $event.target.innerText) {
    [...switchElement.children].forEach((element) => {
      element.classList.toggle("selected");
    });

    console.log(toggleText);
  }
}
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
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/skills">Skills</RouterLink>
          <RouterLink to="/projects">Projects</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
        </ul>
      </div>
      <div class="switch" @click="handleSwitchClick" id="switch">
        <div class="en selected">en</div>
        <div class="ar">ar</div>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-block: 1rem;
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
  color: var(--primary);
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
  cursor: auto;
}
@media (min-width: 500px) {
  nav {
    justify-content: space-evenly;
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
    top: 0;
    pointer-events: all;
  }
  nav .center .links a {
    border: 0 !important;
    padding: 0;
    /* font-size: 1.1rem; */
  }
  nav .center .links a:hover {
    color: var(--secondary);
  }
}
</style>
