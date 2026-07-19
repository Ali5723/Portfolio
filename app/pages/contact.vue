<script setup lang="ts">
import {
  Clock,
  FileText,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  SquarePen,
  User,
} from "@lucide/vue";
import { toast } from "vue-sonner";
import GitHub from "~/components/icons/GitHub.vue";
import Whatsapp from "~/components/icons/Whatsapp.vue";
import type { dataItem, validationMsg } from "~/utils/types";

const { t } = useI18n();
const { isEn } = useLocale();

const messageData: dataItem[] = [
  {
    icon: User,
    title: t("contact.message.forms.name.label"),
    description: t("contact.message.forms.name.placeholder"),
    name: "name",
  },
  {
    icon: Mail,
    title: t("contact.message.forms.email.label"),
    description: t("contact.message.forms.email.placeholder"),
    name: "email",
  },
  {
    icon: FileText,
    title: t("contact.message.forms.subject.label"),
    description: t("contact.message.forms.subject.placeholder"),
    name: "subject",
  },
  {
    icon: SquarePen,
    title: t("contact.message.forms.message.label"),
    description: t("contact.message.forms.message.placeholder"),
    name: "message",
  },
];

const contactData: dataItem[] = [
  {
    icon: Mail,
    title: t("contact.touch.items.email.title"),
    description: t("contact.touch.items.email.description"),
  },
  {
    icon: GitHub,
    title: t("contact.touch.items.github.title"),
    description: t("contact.touch.items.github.description"),
  },
  {
    icon: MapPin,
    title: t("contact.touch.items.location.title"),
    description: t("contact.touch.items.location.description"),
  },
  {
    icon: Clock,
    title: t("contact.touch.items.availability.title"),
    description: t("contact.touch.items.availability.description"),
  },
  {
    icon: Whatsapp,
    title: t("contact.touch.items.whatsapp.title"),
    description: t("contact.touch.items.whatsapp.description"),
  },
];

const formId = import.meta.env.VITE_FORMID;
const formData = ref<{
  name: string;
  email: string;
  subject: string;
  message: string;
}>({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const { validateEmail, validateMessage, validateName, validateSubject } =
  useValidate();

const formItems = useTemplateRef("items");

interface ErrorMessages {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const errorMsgs = ref<ErrorMessages>({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const isSending = ref<boolean>(false);

async function handleSubmit() {
  // Start Spinner
  isSending.value = true;

  // Get Data
  formItems.value
    ?.querySelectorAll("input, textarea")
    .forEach((item, index) => {
      switch (index) {
        case 0:
          formData.value.name = (item as HTMLInputElement).value;
          break;
        case 1:
          formData.value.email = (item as HTMLInputElement).value;
          break;
        case 2:
          formData.value.subject = (item as HTMLInputElement).value;
          break;
        case 3:
          formData.value.message = (item as HTMLTextAreaElement).value;
          break;
      }
    });

  // Validate Data
  const isValidate = ref<{
    name: validationMsg;
    email: validationMsg;
    subject: validationMsg;
    message: validationMsg;
  }>({
    name: validateName(formData.value.name),
    email: validateEmail(formData.value.email),
    subject: validateSubject(formData.value.subject),
    message: validateMessage(formData.value.message),
  });

  // Show Errors (if exists)
  errorMsgs.value = {
    name: isValidate.value.name.issueMsg || "",
    email: isValidate.value.email.issueMsg || "",
    subject: isValidate.value.subject.issueMsg || "",
    message: isValidate.value.message.issueMsg || "",
  };

  // Send message (if no errors)!

  if (
    isValidate.value.name.isValidate &&
    isValidate.value.email.isValidate &&
    isValidate.value.subject.isValidate &&
    isValidate.value.message.isValidate
  ) {
    await $fetch(`https://formspree.io/f/${formId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData.value),
    }).then((res) => {
      if ((res as { ok: boolean }).ok) {
        // if success
        // Empty inputs
        formItems.value
          ?.querySelectorAll("input, textarea")
          .forEach((item) => ((item as HTMLInputElement).value = ""));
        // Run Sooner Success
        toast.success(t("contact.message.success"));
      } else {
        // if error
        // Run Sooner Danger
        toast.error(t("contact.message.error"));
      }
    });
  }

  // Stop Spinner
  isSending.value = false;
}

useSeo($t("seo.contact.title"), $t("seo.contact.description"));
</script>

<template>
  <main class="px-4 pt-6 pb-10 sm:px-8 md:px-10">
    <div class="grid gap-y-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-3">
      <UiCard class="lg:col-span-2">
        <UiCardHeader class="grid-cols-[auto_1fr] gap-x-6">
          <div
            class="row-span-2 size-10 flex items-center justify-center text-primary bg-primary/10 rounded-lg"
          >
            <Mail />
          </div>
          <UiCardTitle>{{ t("contact.message.title") }}</UiCardTitle>
          <UiCardDescription>
            {{ t("contact.message.description") }}
          </UiCardDescription>
        </UiCardHeader>
        <UiCardContent class="flex flex-col gap-y-2.5">
          <form
            @submit.prevent="handleSubmit"
            class="flex flex-col gap-3"
            ref="items"
          >
            <!-- :key="theKey(item.title, index)" -->
            <div
              v-for="(item, index) in messageData"
              class="flex flex-col gap-1"
            >
              <Label class="text-sm font-bold" :for="`${index}`">{{
                item.title
              }}</Label>
              <UiInputGroup>
                <UiInputGroupInput
                  :placeholder="item.description"
                  :id="`${index}`"
                  class="text-sm"
                  v-if="index + 1 != messageData.length"
                />
                <UiInputGroupTextarea
                  :placeholder="item.description"
                  :id="`${index}`"
                  class="text-sm"
                  v-else
                ></UiInputGroupTextarea>
                <UiInputGroupAddon
                  align="inline-start"
                  :class="[
                    index + 1 != messageData.length ? '' : 'mb-auto pt-3',
                    isEn ? '' : 'pr-3 pl-1',
                  ]"
                >
                  <component :is="item.icon" />
                </UiInputGroupAddon>
              </UiInputGroup>
              <LogicValidateErr
                :text="errorMsgs[item.name as keyof ErrorMessages]"
              />
            </div>
            <UiButton class="flex gap-2 font-bold items-center">
              <UiSpinner v-if="isSending" />
              <Send v-else />
              <span>{{
                isSending
                  ? t("contact.message.pending")
                  : t("contact.message.forms.button")
              }}</span>
            </UiButton>
          </form>
        </UiCardContent>
      </UiCard>

      <UiCard>
        <UiCardHeader class="grid-cols-[auto_1fr] gap-x-6">
          <div
            class="row-span-2 size-10 flex items-center justify-center text-primary bg-primary/10 rounded-lg"
          >
            <MessageSquare />
          </div>
          <UiCardTitle>{{ t("contact.touch.title") }}</UiCardTitle>
          <UiCardDescription>
            {{ t("contact.touch.description") }}
          </UiCardDescription>
        </UiCardHeader>
        <UiCardContent class="flex flex-col gap-y-2.5">
          <!-- :key="theKey(item.title, index)" -->
          <div
            class="grid grid-cols-[auto_1fr] gap-x-5 p-2 bg-Uicard rounded-lg border border-accent"
            v-for="(item, index) in contactData"
          >
            <div
              class="row-span-2 my-auto text-primary size-10 flex items-center justify-center bg-primary/5 rounded-xl"
            >
              <component :is="item.icon" class="size-5" />
            </div>
            <h3 class="font-bold leading-tight">{{ item.title }}</h3>
            <p
              :class="[
                'text-accent-foreground/70 text-sm',
                index === 4 && !isEn ? '[direction:ltr] text-right' : '',
              ]"
            >
              {{ item.description }}
            </p>
          </div>
        </UiCardContent>
      </UiCard>
    </div>
  </main>
</template>
