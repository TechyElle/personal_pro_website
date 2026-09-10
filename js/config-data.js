// js/config-data.js

export class PortfolioDataHolder {
  // holds structural properties and static state for the portfolio
  constructor(initialData = {}) {
    this.name = initialData.name || "";
    this.handle = initialData.handle || "";
    this.location = initialData.location || "";
    this.roles = initialData.roles || [];
    this.typingPhrases = initialData.typingPhrases || [];
    this.achievements = initialData.achievements || [];
    this.funBadges = initialData.funBadges || [];
    this.about = initialData.about || [];
    this.experience = initialData.experience || [];
    this.techStack = initialData.techStack || {};
    this.projects = initialData.projects || [];
    this.certifications = initialData.certifications || [];
    this.recommendations = initialData.recommendations || [];
    this.organizations = initialData.organizations || [];
    this.socials = initialData.socials || [];
    this.contactLinks = initialData.contactLinks || [];
    this.gallery = initialData.gallery || [];
  }
}

// static configuration dataset decoupled from view logic
export const portfolioConfig = new PortfolioDataHolder({
  name: "Cielle Mae Peñamora",
  handle: "@TechyElle",
  location: "Philippines 🇵🇭",
  roles: [
    "Computer Engineering Student",
    "Filipina Frontend Dev",
    "Problem Solver & Lifetime Learner",
  ],
  typingPhrases: [
    "I'm Elle",
    "She/her",
    "Computer Engineering Student",
    "Filipina Frontend Dev",
    "Cat Lover :3",
  ],
  achievements: [
    "BS Computer Engineering",
    "PUP Manila",
    "CS50x Alumni",
    "Huawei Developer Expert",
  ],
  funBadges: [
    { label: "gluten-free", theme: "badge-purple" },
    { label: "contains-cat-gifs", theme: "badge-pink" },
    { label: "powered-by-electricity", theme: "badge-cyan" },
  ],
  about: [
    "I'm a Computer Engineering student and software engineer " +
      "based in the Philippines, focused on frontend engineering, " +
      "intuitive UI architecture, and artificial intelligence.",
    "Driven by curiosity and continuous learning, I build " +
      "accessible web applications, explore agentic AI workflows, " +
      "and develop computer vision systems that tackle real-world " +
      "challenges.",
    "Active on GitHub as @TechyElle, I share open-source code " +
      "suites, modern frontend experiments, and tutorials to help " +
      "fellow developers level up their skills.",
  ],
  experience: [
    {
      title:
        "BS Computer Engineering (Software Development)",
      company:
        "Polytechnic University of the Philippines - Manila",
      year: "2024 - Present",
    },
    {
      title: "BS Information Technology",
      company:
        "National University of the Philippines - Manila",
      year: "2023 - 2024",
    },
    {
      title: "Hello World! 👋",
      company: "Wrote first line of code & built first web app",
      year: "2023",
    },
  ],
  techStack: {
    frontend: [
      "JavaScript",
      "TypeScript",
      "ReactJS",
      "HTML5",
      "CSS3",
      "Next.js",
      "Vue.js",
      "Tailwind CSS",
    ],
    backend: [
      "Python",
      "Node.js",
      "C",
      "PHP",
      "Laravel",
      "PostgreSQL",
    ],
    devops: [
      "GitHub Actions",
      "Docker",
      "Git",
      "Linux",
      "AWS",
    ],
  },
  projects: [
    {
      title: "aipowered_e-commerce_webapp",
      description:
        "Modern intelligent e-commerce platform with automated " +
        "recommendations and dynamic UI flows.",
      language: "TypeScript",
      languageColor: "#3178c6",
      link: "https://github.com/TechyElle/aipowered_e-commerce_webapp",
      branch: "main",
      stars: "0",
      forks: "1",
    },
    {
      title: "ai_agent_workflow_builder",
      description:
        "Interactive workflow canvas and visual orchestrator " +
        "for autonomous AI agents.",
      language: "CSS / JS",
      languageColor: "#563d7c",
      link: "https://github.com/TechyElle/ai_agent_workflow_builder",
      branch: "main",
      stars: "0",
      forks: "0",
    },
    {
      title: "food_safety_bacteria_scanner",
      description:
        "Computer vision image detection pipeline scanning and " +
        "identifying bacterial growth for food safety.",
      language: "Python",
      languageColor: "#3572A5",
      link: "https://github.com/TechyElle/food_safety_bacteria_scanner",
      branch: "main",
      stars: "0",
      forks: "0",
    },
    {
      title: "mood_cafe_website",
      description:
        "Aesthetic interactive coffee lounge website with cozy " +
        "soundtracks, ambient UI, and responsive menus.",
      language: "HTML",
      languageColor: "#e34c26",
      link: "https://github.com/TechyElle/mood_cafe_website",
      branch: "main",
      stars: "0",
      forks: "0",
    },
    {
      title: "botwizer",
      description:
        "Social media AI bot using computer vision to emulate " +
        "human interactions. Gold Student Choice Award winner.",
      language: "Python",
      languageColor: "#3572A5",
      link: "https://github.com/TechyElle/botwizer",
      branch: "master",
      stars: "0",
      forks: "0",
    },
    {
      title: "CodeCred",
      description:
        "Online developer certification registry and skills " +
        "verification platform.",
      language: "TypeScript",
      languageColor: "#3178c6",
      link: "https://codecred.dev",
      branch: "main",
      stars: "0",
      forks: "0",
    },
  ],
  certifications: [
    {
      name: "Huawei Developer Expert",
      issuer: "Huawei",
    },
    {
      name: "Generative AI Leader",
      issuer: "Google",
    },
    {
      name: "Software Engineering",
      issuer: "TestDome",
    },
    {
      name: "Generative AI Professional",
      issuer: "Oracle",
    },
  ],
  recommendations: [
    {
      text:
        "Cielle is an exceptionally driven software engineer with " +
        "a sharp eye for detail. She tackles complex problems with " +
        "clarity and brings infectious energy to technical projects.",
      author: "Cris Lawrence Adrian Militante",
      position: "ICT Director at GCM",
    },
    {
      text:
        "Intelligent software engineer and proactive collaborator. " +
        "Cielle delivers polished interfaces and leads teams with " +
        "empathy and confidence.",
      author: "Ken Gorro",
      position: "Senior Developer at Fullscale",
    },
    {
      text:
        "Equipped with modern engineering standards and deep " +
        "curiosity, Elle consistently turns technical concepts into " +
        "delightful user experiences.",
      author: "Patrick Vince Velasco",
      position: "Software Engineer, YNS",
    },
  ],
  organizations: [
    {
      name: "Junior Philippine Computer Society",
      url: "https://jpcs.org",
    },
    {
      name: "Data Engineering Pilipinas",
      url: "https://www.facebook.com/groups/dataengineeringph",
    },
  ],
  socials: [
    {
      label: "GitHub",
      url: "https://github.com/TechyElle",
      meta: "@TechyElle",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/ms-ciellepe%C3%B1amora",
      meta: "in/Cielle Mae Peñamora",
    },
    {
      label: "Email",
      url: "mailto:pciellemae@gmail.com",
      meta: "pciellemae@gmail.com",
    },
  ],
  contactLinks: [
    {
      label: "Email Me",
      meta: "pciellemae@gmail.com",
      url: "mailto:pciellemae@gmail.com",
    },
    {
      label: "GitHub Profile",
      meta: "github.com/TechyElle",
      url: "https://github.com/TechyElle",
    },
    {
      label: "LinkedIn Profile",
      meta: "in/Cielle Mae Peñamora",
      url: "https://www.linkedin.com/in/ms-ciellepe%C3%B1amora",
    },
  ],
  gallery: [
    {
      src: "assets/formal-portrait.png",
      alt: "Formal portrait of Cielle Mae Peñamora with laptop",
      caption: "Formal Portrait",
    },
    {
      src: "assets/profile-photo.png",
      alt: "Headshot portrait of Cielle Mae Peñamora",
      caption: "Profile Photo",
    },
    {
      src: "assets/nu-workshop.jpg",
      alt: "Cielle Mae Peñamora at computer lab workshop",
      caption: "Tech Workshop & Lab Session",
    },
  ],
});
