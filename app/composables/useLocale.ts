export const useLocale = () => {
  const { locale } = useI18n();
  const isEn = computed(() => locale.value === "en");
  return { locale, isEn };
};
