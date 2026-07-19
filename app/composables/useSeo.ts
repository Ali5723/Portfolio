export function useSeo(title: string, description: string) {
  const config = useRuntimeConfig();

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogImage: `${config.public.siteUrl}/images/og-image.png`,
    twitterCard: "summary_large_image",
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: `${config.public.siteUrl}/images/og-image.png`,
    robots: "index,follow",
  });
}
