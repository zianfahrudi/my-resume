export const profile = {
  name: "Zian Fahrudi",
  firstName: "Zian",
  role: "Mobile Engineer (Flutter)",
  company: "Goldstep Indonesia",
  companyUrl: "https://goldstep.co.id",
  tagline:
    "I work at Goldstep Indonesia as a Mobile Engineer (Flutter), building Android and iOS applications.",
  githubUsername: "zianfahrudi",
  githubUrl: "https://github.com/zianfahrudi",
  twitterUrl: "https://x.com/zianfahrudy",
  linkedinUrl: "https://www.linkedin.com/in/zian-fahrudi/",
  youtubeUrl: "https://www.youtube.com/@zianfahrudi",
  email: "ziandev.id@gmail.com",
  avatar: "https://avatars.githubusercontent.com/u/45583824?v=4",
};

export const aboutMe = [
  "I live in Lombok, Indonesia. Outside of my full-time role, I always make time to build my own apps and ship them to the Play Store and App Store.",
  "Lately I've also been enjoying sharing on LinkedIn, mostly around Flutter, mobile development tips, and interesting things I stumble into day to day.",
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  stack: string[];
};

export const experiences: Experience[] = [
  {
    company: "ZIANDEV",
    role: "Indie Hacker",
    period: "Present",
    location: "Side Project",
    description:
      "Actively build and develop self-initiated micro-niche productivity applications using Flutter. Ship to the Play Store under my own Google Play Developer profile.",
    stack: ["Flutter", "Dart", "Firebase", "Product Strategy"],
  },
  {
    company: "Goldstep Indonesia",
    role: "Full-time Flutter Developer",
    period: "Present",
    location: "Lombok, ID · Remote",
    description:
      "Built an HR application for HRD RS Tiara Sella using Flutter. Maintained Gohalalgo, Patuna Travel, Sahabat Tawaf Travel, and GKI Anugerah applications.",
    stack: ["Flutter", "Dart", "Bloc", "REST API"],
  },
  {
    company: "Nusatek (PT. Nusantara Sukses Teknologi)",
    role: "Freelance Flutter Developer",
    period: "Apr 2024 — Aug 2025",
    location: "Remote",
    description:
      "Built and published Siksorogo for Google Play and Apple App Store, handling delivery from UI implementation through release management. Developed Insan Adhi for Google Play and maintained HPJI across both stores, keeping Android and iOS parity.",
    stack: ["Flutter", "Clean Architecture", "Fastlane", "App Store"],
  },
  {
    company: "Digital Line (PT. Digital Line Indonesia)",
    role: "Full-time Flutter Developer",
    period: "Sep 2023 — Sep 2025",
    location: "Remote",
    description:
      "Built Fasdana Paylater for import and trade financing from China, implementing onboarding, loan application flows, status tracking, notifications, REST APIs, and secure form validation. Developed PEIPOS (Point of Sale) and prepared its Google Play release.",
    stack: ["Flutter", "Bloc", "Payment Gateway", "FCM"],
  },
  {
    company: "DuniaCoding.id",
    role: "Flutter Instructor and Mentor",
    period: "Jan 2023 — Aug 2023",
    location: "Remote",
    description:
      "Created and taught Completed Flutter Development - Build Event Apps, an online Flutter course focused on building an event application end-to-end.",
    stack: ["Flutter", "Dart", "Teaching"],
  },
  {
    company: "GMEDIA (PT. Media Sarana Data)",
    role: "Full-time Flutter Developer",
    period: "Jun 2021 — Aug 2023",
    location: "Yogyakarta, ID",
    description:
      "Developed mobile applications for internal operations as well as client and business partner needs.",
    stack: ["Flutter", "Dart", "GetX", "REST API"],
  },
];
