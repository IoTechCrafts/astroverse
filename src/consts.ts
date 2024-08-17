// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Base Page Metadata, src/layouts/BaseLayout.astro
export const BRAND_NAME = "AstroVerse";
export const SITE_TITLE = "Visual Blog | AstroVerse";
export const SITE_DESCRIPTION = "An Astro Theme for Visual Storytelling";

// Tags Page Metadata, src/pages/tags/index.astro
export const Tags_TITLE = "AstroVerse - All Tags";
export const Tags_DESCRIPTION =
  "AstroVerse - All tags and the count of articles related to each tag";

const basePath = '/astroverse'; // Adjust this as necessary for your deployment

function baseUrl(path: string): string {
  return `${basePath}${path}`;
}

// Tags Page Metadata, src/pages/tags/[tag]/[page].astro
export function getTagMetadata(tag: string) {
  return {
    title: `All articles on '${tag}' tag in AstroVerse`,
    description: `Explore articles about ${tag} for different perspectives and in-depth analysis.`,
  };
}

// Category Page Metadata, src/pages/category/[category]/[page].astro
export function getCategoryMetadata(category: string) {
  return {
    title: `All articles in '${category}' category in AstroVerse`,
    description: `Browse all articles under the ${category} category in AstroVerse`,
  };
}

// Header Links, src/components/Header.astro
export const HeaderLinks = [
  { href: baseUrl("/category/One/1/"), title: "One" },
  { href: baseUrl("/category/Two/1/"), title: "Two" },
  { href: baseUrl("/category/Three/1/"), title: "Three" },
];

// Footer Links, src/components/Footer.astro
export const FooterLinks = [
  { href: baseUrl("/posts/why-astro/"), title: "Astro" },
  { href: baseUrl("/posts/tailwind-typography/"), title: "Tailwind" },
  { href: baseUrl("/tags/"), title: "Tags" },
];

// Social Links, src/components/Footer.astro
export const SocialLinks = [
  { href: "/rss.xml", icon: "tabler:rss", label: "RSS" },
  {
    href: "https://twitter.com/astrodotbuild",
    icon: "tabler:brand-twitter",
    label: "Twitter",
  },
  {
    href: "https://github.com/IoTechCrafts",
    icon: "tabler:brand-github",
    label: "GitHub",
  },
];

// Search Page Metadata, src/pages/search.astro
export const SEARCH_PAGE_TITLE = `${SITE_TITLE} - Site Search`;
export const SEARCH_PAGE_DESCRIPTION = `Search all content on ${SITE_TITLE}`;
