// src/data/projects.ts
import mimasPwa from "../assets/projects/mimas-pwa.webp?url";
import creativeWebsite from "../assets/projects/creative-website.webp?url";
import salirdelBucle from "../assets/projects/app-salirdelbucle.webp?url";

export const PROJECTS = [
  {
    title: "Mimas Iconic",
    description:
      "Website with booking flow, offline-ready experience, and performance-focused UX.",
    year: "2026",
    metaLeft: "Client project",
    metaRight: "Professional website + Booking",
    metaRightClass: "text-rose-500 dark:text-rose-400",
    titleHoverClass:
      "group-hover:text-rose-600 dark:group-hover:text-rose-400",
    buttonHoverClass: "group-hover:bg-rose-600 dark:group-hover:bg-rose-500",
    image: mimasPwa,
    alt: "Mimas Iconic PWA preview",
    url: "https://mimas-iconic-n6hi.vercel.app",
  },
  {
    title: "Creative Website",
    description:
      "My personal website redesign concept, focused on typography, motion and visual storytelling.",
    year: "2026",
    metaLeft: "Personal project",
    metaRight: "Web Design",
    metaRightClass: "text-blue-500 dark:text-blue-400",
    titleHoverClass:
      "group-hover:text-blue-600 dark:group-hover:text-blue-400",
    buttonHoverClass: "group-hover:bg-blue-600 dark:group-hover:bg-blue-500",
    image: creativeWebsite,
    alt: "Creative website preview",
    // Pon aquí la URL real cuando la publiques (Vercel/Netlify/etc.)
    url: "https://andreafusion.github.io/web-andrea/",
  },
  {
    title: "App to stop overthinking",
    description:
      "An app for helping people when they're overthinking and need to calm down, let it out or detect patrons",
    year: "2026",
    metaLeft: "Personal project",
    metaRight: "PWA app design",
    metaRightClass: "text-blue-500 dark:text-blue-400",
    titleHoverClass:
      "group-hover:text-blue-600 dark:group-hover:text-blue-400",
    buttonHoverClass: "group-hover:bg-blue-600 dark:group-hover:bg-blue-500",
    image: salirdelBucle,
    alt: "App to stop overthinking preview",
    // Pon aquí la URL real cuando la publiques (Vercel/Netlify/etc.)
    url: "https://andreafusion.github.io/app-salirdelbucle/",
  },
] as const;
