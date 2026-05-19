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
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  stack: string[];
  url?: string;
  /** URL to the company logo image */
  logo?: string;
  /** Tailwind background classes for the logo tile fallback (e.g. "bg-emerald-500"). */
  logoColor?: string;
  /** "cover" (default) or "contain" for logos that need padding/centering */
  logoFit?: "cover" | "contain";
};

export const experiences: Experience[] = [
  {
    company: "Goldstep Indonesia",
    role: "Full-time Flutter Developer",
    period: "Present",
    location: "Remote",
    description:
      "Built an HR application for HRD RS Tiara Sella using Flutter. Maintained Gohalalgo, Patuna Travel, Sahabat Tawaf Travel, and GKI Anugerah applications.",
    stack: ["Flutter", "Dart", "Bloc", "REST API", "Clean Architecture", "Fastlane", "FCM"],
    logo: "https://images.glints.com/unsafe/glints-dashboard.oss-ap-southeast-1.aliyuncs.com/company-logo/56faf8f40730c0b59e5157d8ccded160.png",
    logoColor: "bg-emerald-500",
    logoFit: "contain",
  },
  {
    company: "Nusatek",
    role: "Freelance Flutter Developer",
    period: "Apr 2024 — Aug 2025",
    location: "Remote",
    description:
      "Built and published Siksorogo for Google Play and Apple App Store, handling delivery from UI implementation through release management. Developed Insan Adhi for Google Play and maintained HPJI across both stores, keeping Android and iOS parity.",
    stack: ["Flutter", "Clean Architecture", "Fastlane", "Bloc", "FCM", "Payment Gateway", "REST API"],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlx53w1dEK0odq9mhaPkKxEawHyusoKg2BEQ&s",
    logoColor: "bg-sky-500",
  },
  {
    company: "Digital Line",
    role: "Full-time Flutter Developer",
    period: "Sep 2023 — Sep 2025",
    location: "Remote",
    description:
      "Built Fasdana Paylater for import and trade financing from China, implementing onboarding, loan application flows, status tracking, notifications, REST APIs, and secure form validation. Developed PEIPOS (Point of Sale) and prepared its Google Play release.",
    stack: ["Flutter", "Bloc", "Payment Gateway", "FCM", "Clean Architecture", "Codemagic", "REST API"],
    logo: "https://staging.digitalline.id/assets/images/setting/5d76d0a0-fafe-11ec-a83c-cdef511b2872.webp",
    logoColor: "bg-violet-500",
    logoFit: "contain",
  },
  {
    company: "DuniaCoding.id",
    role: "Flutter Instructor and Mentor",
    period: "Jan 2023 — Aug 2023",
    location: "Remote",
    description:
      "Created and taught Completed Flutter Development - Build Event Apps, an online Flutter course focused on building an event application end-to-end.",
    stack: ["Flutter", "Dart", "Teaching"],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7DrfAlhslFezfYcbOuJaz7czzsQZ8Lq26iQ&s",
    logoColor: "bg-amber-500",
  },
  {
    company: "GMEDIA",
    role: "Full-time Flutter Developer",
    period: "Jun 2021 — Aug 2023",
    location: "Yogyakarta, ID",
    description:
      "Developed mobile applications for internal operations as well as client and business partner needs.",
    stack: ["Flutter", "Dart", "GetX", "REST API", "Clean Architecture", "Bloc", "Fastlane", "FCM", "Shorebird", "Gitlab CI/CD", "Melos", "Payment Gateway"],
    logo: "https://pbs.twimg.com/profile_images/1427572589161902080/eDxv4-Kh_400x400.jpg",
    logoColor: "bg-rose-500",
  },
];
