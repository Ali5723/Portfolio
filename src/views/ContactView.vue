<script setup>
import IconEmail from "@/components/icons/IconEmail.vue";
import IconGitHub from "@/components/icons/IconGitHub.vue";
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
    if (newVal?.contact) {
      langData.value = newVal.contact;
    }
  },
  { immediate: true },
);

const formId = "mnjrblnl";
let formData = ref({
  name: "",
  email: "",
  message: "",
});
let isSubmitting = ref(false);
let isSuccess = ref(false);
let stateMessage = ref("");

async function handleSubmit() {
  isSubmitting.value = true;
  stateMessage.value = "";

  try {
    const response = await fetch(`https://formspree.io/f/${formId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData.value),
    });

    if (response.ok) {
      isSuccess.value = true;
      stateMessage.value = "تم إرسال رسالتك بنجاح! سأتواصل معك في أقرب وقت.";
      formData.value.name = "";
      formData.value.email = "";
      formData.value.message = "";
    } else {
      const data = await response.json();
      throw new Error(data.error || "حدث خطأ أثناء الإرسال.");
    }
  } catch (error) {
    isSuccess.value = false;
    stateMessage.value =
      error.message || "عذراً، حدثت مشكلة غير متوقعة. يرجى المحاولة لاحقاً.";
    console.log(error.message);
  } finally {
    isSubmitting.value = false;
  }
}
</script>

<template>
  <main>
    <!-- {{ langData }} -->
    <h1>{{ langData[0] }}</h1>
    <div class="split">
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">{{ langData[1] }}</label>
          <input type="text" id="name" v-model="formData.name" required />
        </div>

        <div class="form-group">
          <label for="email">{{ langData[2] }}</label>
          <input type="email" id="email" v-model="formData.email" required />
        </div>

        <div class="form-group">
          <label for="message">{{ langData[3] }}</label>
          <textarea
            id="message"
            v-model="formData.message"
            rows="5"
            required
          ></textarea>
        </div>

        <button type="submit" :disabled="isSubmitting">
          {{ isSubmitting ? langData[4] : langData[5] }}
        </button>

        <!-- <p
        v-if="stateMessage"
        :class="['status-msg', isSuccess ? 'success' : 'error']"
      >
        {{ stateMessage }}
      </p> -->
      </form>

      <div class="contact-cards-container">
        <div class="card">
          <IconEmail />
          <p>alidev.portfolios@gmail.com</p>
        </div>
        <div class="card">
          <IconGitHub />
          <p>Ali5723</p>
          <a
            href="https://github.com/Ali5723/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
h1 {
  margin: 1rem auto;
  text-align: center;
  color: var(--primary);
  text-shadow: 0 0 0.25rem;
}
.split {
  margin-block: 1rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 850px;
  margin-inline: auto;
}
form {
  display: grid;
  gap: 1.25rem;
}
form .form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
form .form-group label {
  font-size: 1.1rem;
}
form button,
form .form-group textarea,
form .form-group input {
  outline: 0;
  border-radius: 0.5rem;
  padding-inline-start: 1rem;
  padding-block: 0.75rem;
  border: 2px solid var(--preview-text);
  background-color: var(--cards);
  color: var(--text);
  transition: var(--transition);
  resize: none;
}
form .form-group textarea:focus,
form .form-group input:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0.25rem var(--secondary);
}
form button {
  cursor: pointer;
  box-shadow: 0 0 0.25rem var(--secondary);
  border-color: var(--secondary);
}

.contact-cards-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 1rem;
  direction: ltr;
}
.contact-cards-container .card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  align-items: center;
}
.contact-cards-container .card svg {
  fill: var(--text);
  width: 5rem;
  border: 3px solid var(--preview-text);
  padding: 1rem 1rem;
  border-radius: 50%;
  background-color: var(--cards);
}
.contact-cards-container .card p {
  margin: 0;
  word-break: break-word;
}
.contact-cards-container .card a {
  text-decoration: none;
  color: var(--preview-text);
  font-weight: 700;
}
@media (min-width: 700px) {
  .split {
    flex-direction: row-reverse;
    justify-content: space-between;
    gap: 1rem;
  }
  :root[lang="ar"] .split {
    flex-direction: row;
  }
  .contact-cards-container {
    grid-template-columns: 1fr;
  }
  form {
    width: 60%;
  }
}
</style>
