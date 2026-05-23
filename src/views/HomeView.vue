<script setup>
const props = defineProps({
  gLangData: {
    type: Object,
  },
});
const langData = props.gLangData.home;
</script>

<template>
  <main>
    <!-- {{ langData }} -->
    <section>
      <img src="/images/person.png" alt="image" />
    </section>
    <section>
      <h2>Hey!</h2>
      <h2>I'm Ali</h2>
      <h2>Front-End Developer</h2>
    </section>
  </main>
</template>

<style scoped>
main {
  margin-block-start: 1rem;
}
main section:first-of-type {
  text-align: center;
}
main section:first-of-type img {
  width: 16rem;
  border-radius: 3rem;
  box-shadow: 0 0 1rem 0rem var(--secondary);
}
main section:last-of-type h2 {
  margin: 0;
}
</style>
