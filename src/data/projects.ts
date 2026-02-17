import frontTools from "../assets/front-tools.png?url";
import wiku from "../assets/wiku.webp?url";
import portfolio from "../assets/portfolio.webp?url";

export const PROJECTS = [
  {
    title: "Front Tools",
    description: "Essential toolkit for modern frontend development.",
    year: "2026",
    metaLeft: "Free to use",
    metaRight: "UI Design",
    metaRightClass: "text-blue-500 dark:text-blue-400",
    titleHoverClass:
      "group-hover:text-blue-600 dark:group-hover:text-blue-400",
    buttonHoverClass:
      "group-hover:bg-blue-600 dark:group-hover:bg-blue-500",
    image: frontTools,
    alt: "Frontend Tools",
    url: "https://frontdev-tools.pages.dev/",
  },
  {
    title: "Wiku",
    description: "AI study assistant, using free AI models.",
    year: "2025",
    metaLeft: "AI Utility",
    metaRight: "AI Assistant",
    metaRightClass: "text-amber-500 dark:text-amber-400",
    titleHoverClass:
      "group-hover:text-amber-600 dark:group-hover:text-amber-400",
    buttonHoverClass:
      "group-hover:bg-amber-600 dark:group-hover:bg-amber-500",
    image: wiku,
    alt: "Wiku",
    url: "https://github.com/MoriitoDev/Wiku",
  },
  // Ejemplo 3 (usa tu proyecto real o bórralo)
  {
    title: "My Portfolio",
    description: "A clean Astro portfolio template customized for my work.",
    year: "2026",
    metaLeft: "Astro",
    metaRight: "Portfolio",
    metaRightClass: "text-emerald-500 dark:text-emerald-400",
    titleHoverClass:
      "group-hover:text-emerald-600 dark:group-hover:text-emerald-400",
    buttonHoverClass:
      "group-hover:bg-emerald-600 dark:group-hover:bg-emerald-500",
    image: portfolio,
    alt: "Portfolio",
    url: "#",
  },
] as const;
