export type Project = {
id: number;
title: string;
description: string;
tags: string[];
link?: string;
image?: string;
};
import project1 from "../assets/projects/p1.png";
import project2 from "../assets/projects/p2.png";
import project3 from "../assets/projects/p3.png";
import project4 from "../assets/projects/p4.png";
import project5 from "../assets/projects/p5.png";
import project6 from "../assets/projects/p6.png";



export const projects: Project[] = [
  {
    id: 1,
    title: "Pikxl- Ai image Generation ",
    description: "A clean and modern marketplace where creators transform imagination into income. Upload, sell, and grow your AI-powered art, music, videos, and more.",
    tags: ["React", "TypeScript", "Tailwind", "Recharts", "Api"],
    link: "https://pixel-neon-pi.vercel.app/",
    image: project1,
  },
  {
    id: 2,
    title: "Konnect",
    description: "A Video call app for meeting and call",
    tags: ["Next.js", "Clerk", "Tailwind", "Auth"],
    link: "https://konnect-snowy.vercel.app/",
    image: project2,
  },
  {
    id: 3,
    title: "Pass Club",
    description: "Ticket Booking website",
    tags: ["Storybook", "React", "Accessibility"],
    link: "https://passclub.in/",
    image: project4,
  },
  {
    id: 3,
    title: "StartUp connect",
    description: "Your one-stop platform to connect with investors, mentors, and co-founders to turn your startup vision into reality.",
    tags: ["Storybook", "React", "Accessibility"],
    link: "https://startupconnect-4gqp.vercel.app/",
    image: project3,
  },
  
  {
    id: 3,
    title: "MRD Holidays",
    description: "Travel Booking Website",
    tags: ["Storybook", "React", "Accessibility"],
    link: "https://mrdholidays.com/",
    image: project5,
  },
  {
    id: 3,
    title: "Chutii.com",
    description: "One place for travell related query and booking",
    tags: ["Storybook", "React", "Accessibility"],
    link: "https://www.chutii.com/",
    image: project6,
  },
];
