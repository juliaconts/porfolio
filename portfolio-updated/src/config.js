// ─────────────────────────────────────────────
//  PORTFOLIO CONFIG — update everything here!
// ─────────────────────────────────────────────

import profilePhoto from "./assets/profile-placeholder.jpg";
import profilePhoto2 from "./assets/profile-placeholder2.jpg";

export const CONFIG = {
  // ── Personal ──────────────────────────────
  name: "Julia Louise",
  title: "Aspiring Software Developer",
  location: "Western Visayas, Iloilo City",
  photo: profilePhoto,          // ← driven by the import above
  photo2: profilePhoto2,        // ← an optional second photo for more variety
  bio1: `I’m Julia Louise M. Contreras, a computer science student passionate about building practical web and mobile applications. 
    I enjoy creating systems that solve real problems and continuously improving my skills 
    through hands-on projects.`,

  // ── Links ─────────────────────────────────
  email: "contrerasjulialouise@gmail.com",
  github: "https://github.com/juliaconts",       // ← your GitHub URL
  linkedin: "https://linkedin.com/in/julia-louise-contreras",
  githubHandle: "juliaconts",

  // ── Projects ──────────────────────────────
  // Set href to a live URL, a GitHub repo link, or "#" to hide the link.
  // Add "githubHref" to show a separate GitHub button.
  projects: [
    {
      badge: "Web App",
      badgeClass: "",
      title: "FishLERS",
      desc: "Fisheries Laboratory Equipment Reservation System (FishLERS) is a laboratory management system for UPV College of Fisheries and Ocean Sciences Institute of Aquaculture's Multi-species Hatchery design to streamline the tracking, management, and utilization of laboratory equipment and resources.",
      stack: ["Firebase","Mongodb", "Express", "React", "Node.js"],
      href: "https://github.com/juliaconts/CMSC129",   // live demo or repo
    },
    {
      badge: "Mobile App",
      badgeClass: "mobile",
      title: "MatchyMatchy",
      desc: "MatchyMatchy is a mobile game that matches pairs of cards. It features a clean design, smooth animations, and a variety of difficulty levels to keep players engaged.",
      stack: ["Flutter", "Dart"],
      href: "https://github.com/juliaconts/156midterms_matchymatchy",
    },
    {
      badge: "Web App",
      badgeClass: "",
      title: "UPV Org Hub",
      desc: "UPV Org Hub is a web application designed for UPV constituents to explore, discover, and learn more about the various student organizations within the University of the Philippines Visayas. Users can add, edit, delete, or view existing orgs.",
      stack: ["Laravel-MVC Framework", "PostgreSQL", "Vite", "PHP"],
      href: "https://github.com/CMSC129-LABS/CMSC129-Lab2-ContrerasJL_LansoySLD",
    },
    
    {
      badge: "Website",
      badgeClass: "website",
      title: "Komsai Uncensored Batch Website",
      desc: "A web-based platform designed with secure authentication, enabling user registration and login. It features Ganaps, a collection of batch event photos, a Yearbook listing all members, and a Facebook-style Freedom Wall that supports anonymous posting alongside a side polling system for user engagement.",
      stack: ["HTML/CSS/JS", "MySQL", "PHP"],
      href: "https://github.com/senqui-UP/126-final-project",
    },
  ],

  // // ── Testimonials ──────────────────────────
  // testimonials: [
  //   {
  //     quote: "One of the most reliable developers I've worked with. Communicates clearly and always delivers on time. Genuinely cares about the product.",
  //     name: "Maria Reyes",
  //     role: "Founder, LocalBrand PH",
  //     initials: "MR",
  //     avatarStyle: { background: "#FAEEE7", color: "var(--terr)" },
  //   },
  //   {
  //     quote: "Took our rough idea and turned it into a polished app. The attention to detail was impressive — and it was actually fun working together.",
  //     name: "James Cruz",
  //     role: "Product Lead, Startup",
  //     initials: "JC",
  //     avatarStyle: { background: "#EDF4EF", color: "#4A7A5A" },
  //   },
  // ],
};
