<template>
  <img src="/images/person.png" alt="image" decoding="async" />
</template>

<style scoped>
img {
  width: 16rem;
  border-radius: 3rem;
  box-shadow: 0 0 1.5rem 0rem var(--secondary);
  transition:
    filter var(--transition),
    box-shadow var(--transition);
}
img:hover {
  filter: saturate(0.5);
  box-shadow: 0 0 1rem 0rem var(--secondary);
}
:root[lang="ar"] img {
  transform: rotateY(180deg);
}
</style>
