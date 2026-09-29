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
    this.contactChannels = initialData.contactChannels || [];
    this.gallery = initialData.gallery || [];
    this.coverLetter = initialData.coverLetter || null;
  }
}

// static configuration dataset decoupled from view logic
export const portfolioConfig = new PortfolioDataHolder({
  name: "Cielle Mae C. Peñamora",
  handle: "@TechyElle",
  location: "📍 Sampaloc, Manila, Philippines",
  roles: [
    "Full Stack Developer",
    "IT Support Specialist",
    "Maritime IT & Systems Specialist",
    "BS Computer Engineering (PUP)",
  ],
  typingPhrases: [
    "I'm Elle",
    "Full Stack Developer",
    "IT Support Specialist",
    "Maritime IT & Systems Specialist",
    "Computer Engineering @ PUP Manila",
    "Hardware & Software Diagnostics",
    "Systems & Network Maintenance",
    "Web & Mobile Systems",
  ],
  achievements: [
    "BS Computer Engineering",
    "PUP Manila (Expected 2028)",
    "Harvard CS50P Alum",
    "DataCamp Certified",
    "School of Leaders 1 Awardee",
  ],
  funBadges: [
    { label: "full-stack-dev", theme: "badge-purple" },
    { label: "it-support-ready", theme: "badge-cyan" },
    { label: "maritime-it-systems", theme: "badge-pink" },
    { label: "systems-troubleshooter", theme: "badge-blue" },
  ],
  about: [
    "Third-year Computer Engineering student at Polytechnic University " +
      "of the Philippines (PUP Manila) specializing in Web & Mobile Systems, " +
      "driven by a strong passion for Full Stack Development and IT Support.",
    "Brings hands-on experience diagnosing and resolving hardware and " +
      "software issues, maintaining Windows systems, configuring networks " +
      "(LAN, Wi-Fi, IP configuration), and providing dependable technical " +
      "support to end users in high-turnaround and collaborative environments.",
    "Actively open to Full Stack Engineering and IT Support roles, pursuing " +
      "a dedicated career pathway toward Cruise Ship IT Officer and maritime " +
      "systems operations where mission-critical systems reliability, 24/7 " +
      "network uptime, and proactive hardware upkeep are essential.",
  ],
  experience: [
    {
      title:
        "Document Services & Large Format Production Assistant",
      company:
        "KNJ Printing — School/Office Publishing Services",
      year: "2026",
      details: [
        "Set up, operated, and troubleshot printing and binding " +
          "equipment for daily walk-in requests, diagnosing hardware " +
          "faults and resolving them on the spot to keep same-day " +
          "turnaround on track.",
        "Maintained and configured large-format printing hardware for " +
          "tarpaulins, vinyl stickers, standees, wall murals, posters, " +
          "backlit displays, and vehicle wraps.",
        "Edited sermon recordings in Adobe Premiere, applying software " +
          "proficiency to a real production workflow.",
      ],
    },
    {
      title: "Team Leader, Full Stack",
      company:
        "Xontrix — Electronics E-Commerce & AI Business Management",
      year: "2025 - 2026",
      details: [
        "Set up, configured, and maintained development environments " +
          "and devices across the team, resolving hardware and software " +
          "issues to keep workflows on schedule.",
        "Maintained version control standards (Git/GitHub) with backups " +
          "and a traceable file structure, documenting technical " +
          "issues and resolutions for team reference.",
      ],
    },
    {
      title: "President",
      company: "PUP Seeds of the Nations (PUP SONS)",
      year: "2025 - 2026",
      details: [
        "Coordinated with an external IT Consultant from Deloitte to " +
          "plan and run a Python Mentorship Workshop, managing logistics " +
          "and stakeholder communication.",
        "Led timelines and communication across officer committees for " +
          "technical and community initiatives.",
        "Scoped requirements and documentation for Harvest, an " +
          "automated member-tracking platform, bridging operational " +
          "and technical needs.",
      ],
    },
    {
      title: "BS Computer Engineering (Web & Mobile Systems)",
      company: "Polytechnic University of the Philippines - Manila",
      year: "Expected 2028",
      details: [
        "Third-year student specializing in Web & Mobile Systems.",
      ],
    },
    {
      title: "ABM Strand • Class & Batch President",
      company: "Northern Quezon College Incorporation",
      year: "With High Honors",
      details: [
        "Graduated With High Honors; served as Class and Batch President.",
      ],
    },
    {
      title: "Special Program in the Arts (Visual Arts)",
      company: "Infanta National High School",
      year: "With High Honors",
      details: [
        "Graduated With High Honors with specialization in Visual Arts.",
      ],
    },
  ],
  techStack: {
    itSupport: [
      "Hardware Diagnostics",
      "Software Troubleshooting",
      "Preventive Maintenance",
      "Desktop & Laptop Care",
      "Printer Maintenance",
      "Walk-in Client Support",
    ],
    systemsMaintenance: [
      "Windows OS Installation",
      "OS Updates & Config",
      "MS Office Suite",
      "Dev Environment Setup",
      "Device Upkeep & Provisioning",
      "IT Activity Logging",
    ],
    networkingSecurity: [
      "LAN / Wi-Fi Troubleshooting",
      "Basic Cabling",
      "IP Configuration",
      "Routers, Switches & APs",
      "Git / GitHub Version Control",
      "Access & Backup Records",
    ],
    toolsPlatforms: [
      "Windows OS",
      "MS Office",
      "Git / GitHub",
      "Adobe Premiere",
      "React",
      "TypeScript",
      "PHP",
      "MySQL",
      "Node.js / Express",
      "Python",
    ],
    clientTeam: [
      "Walk-in Client Service",
      "Cross-Functional Teamwork",
      "Technical Documentation",
      "English (Fluent)",
      "Filipino (Native)",
    ],
  },
  projects: [
    {
      title: "safebite_bacteria_scanner",
      description:
        "Harvard CS50P Final Project. Built and tested a Python, " +
        "PyQt6, and OpenCV application, including complete installation, " +
        "configuration, and troubleshooting across dev environments.",
      language: "Python",
      languageColor: "#3572A5",
      tags: ["Python", "PyQt6", "OpenCV"],
      link: "https://github.com/TechyElle/food_safety_bacteria_scanner",
      branch: "main",
      stars: "0",
      forks: "0",
    },
    {
      title: "xontrix_ecommerce_platform",
      description:
        "Integrated electronics e-commerce and AI business platform. " +
        "Maintained development environments, Git/GitHub standards, and " +
        "documented technical resolutions across the engineering team.",
      language: "TypeScript",
      languageColor: "#3178c6",
      tags: ["TypeScript", "React", "Node.js"],
      link: "https://github.com/TechyElle/aipowered_e-commerce_webapp",
      branch: "main",
      stars: "0",
      forks: "1",
    },
    {
      title: "harvest_member_tracker",
      description:
        "Automated member-tracking platform for PUP SONS. Scoped " +
        "requirements and technical documentation bridging operational " +
        "and technical needs.",
      language: "Python / JS",
      languageColor: "#3572A5",
      tags: ["Python", "JavaScript", "SQL"],
      link: "https://github.com/TechyElle",
      branch: "main",
      stars: "0",
      forks: "0",
    },
    {
      title: "ai_agent_workflow_builder",
      description:
        "Interactive workflow canvas and visual orchestrator " +
        "for autonomous AI agents.",
      language: "CSS / JS",
      languageColor: "#563d7c",
      tags: ["JavaScript", "CSS3", "Workflows"],
      link: "https://github.com/TechyElle/ai_agent_workflow_builder",
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
      tags: ["Python", "OpenCV", "Automation"],
      link: "https://github.com/TechyElle/botwizer",
      branch: "master",
      stars: "0",
      forks: "0",
    },
  ],
  certifications: [
    {
      name: "AI Fundamentals",
      issuer: "DataCamp",
      date: "May 2026",
      category: "AI & Data",
    },
    {
      name: "Data Literacy",
      issuer: "DataCamp",
      date: "May 2026",
      category: "AI & Data",
    },
    {
      name: "AI-Powered Project Manager Masterclass",
      issuer: "Masterclass",
      date: "Dec 2025",
      category: "Project Management",
    },
    {
      name: "School of Leaders 1",
      issuer: "Most Outstanding Awardee",
      date: "Honors",
      category: "Leadership & Honors",
    },
    {
      name: "CS50P: Programming with Python",
      issuer: "Harvard University",
      date: "CS50x Alum",
      category: "Computer Science",
    },
  ],
  recommendations: [],
  organizations: [
    {
      name: "PUP Seeds of the Nations (PUP SONS)",
      role: "President",
      category: "Student Organization • PUP Manila",
      badgeType: "accent",
      url: "https://github.com/TechyElle",
    },
    {
      name: "Deloitte Python Mentorship Workshop",
      role: "Technical Partner",
      category: "Industry Mentorship & Training",
      badgeType: "blue",
      url: "https://github.com/TechyElle",
    },
    {
      name: "Junior Philippine Computer Society",
      role: "Member",
      category: "National Student Computing Society",
      badgeType: "green",
      url: "https://jpcs.org",
    },
    {
      name: "Data Engineering Pilipinas",
      role: "Community Member",
      category: "Philippine Data Community",
      badgeType: "purple",
      url: "https://www.facebook.com/groups/dataengineeringph",
    },
  ],
  contactChannels: [
    {
      id: "email",
      label: "Email",
      value: "penamoraciellemae@gmail.com",
      url: "mailto:penamoraciellemae@gmail.com",
      badge: "Primary",
      icon: "mail",
      canCopy: true,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      value: "in/ms-ciellepeñamora",
      url: "https://www.linkedin.com/in/ms-ciellepe%C3%B1amora",
      badge: "Network",
      icon: "linkedin",
      canCopy: false,
    },
    {
      id: "github",
      label: "GitHub",
      value: "@TechyElle",
      url: "https://github.com/TechyElle",
      badge: "Code & Repos",
      icon: "github",
      canCopy: false,
    },
    {
      id: "phone",
      label: "Mobile / Phone",
      value: "Available on request",
      url:
        "mailto:penamoraciellemae@gmail.com" +
        "?subject=Contact%20Request%20-%20Phone%20Number",
      badge: "On Request",
      icon: "phone",
      canCopy: false,
    },
    {
      id: "resume",
      label: "Official Resume",
      value: "cielle-mae-penamora-resume-general.pdf",
      url: "docs/cielle-mae-penamora-resume-general.pdf",
      badge: "PDF / CV",
      icon: "resume",
      canCopy: false,
    },
  ],
  socials: [
    {
      label: "Resume (PDF)",
      url: "docs/cielle-mae-penamora-resume-general.pdf",
      meta: "Official Resume / CV",
    },
    {
      label: "GitHub",
      url: "https://github.com/TechyElle",
      meta: "@TechyElle",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/ms-ciellepe%C3%B1amora",
      meta: "in/ms-ciellepeñamora",
    },
    {
      label: "Email",
      url: "mailto:penamoraciellemae@gmail.com",
      meta: "penamoraciellemae@gmail.com",
    },
  ],
  contactLinks: [
    {
      label: "Email Me",
      meta: "penamoraciellemae@gmail.com",
      url: "mailto:penamoraciellemae@gmail.com",
    },
    {
      label: "Download / View Resume",
      meta: "cielle-mae-penamora-resume-general.pdf",
      url: "docs/cielle-mae-penamora-resume-general.pdf",
    },
    {
      label: "Mobile / Phone",
      meta: "Available on request",
      url:
        "mailto:penamoraciellemae@gmail.com" +
        "?subject=Contact%20Request%20-%20Phone%20Number",
    },
    {
      label: "LinkedIn Profile",
      meta: "in/ms-ciellepeñamora",
      url: "https://www.linkedin.com/in/ms-ciellepe%C3%B1amora",
    },
    {
      label: "GitHub Profile",
      meta: "github.com/TechyElle",
      url: "https://github.com/TechyElle",
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
  coverLetter: {
    title: "Internship Cover Letter",
    senderName: "Cielle Mae C. Peñamora",
    senderCity: "Sampaloc, Manila, Philippines",
    senderEmail: "penamoraciellemae@gmail.com",
    senderPhone: "Available upon request (via Email / Resume)",
    dateText: "Academic Year 2025 – 2026",
    recipientTitle: "Hiring Team",
    roleTarget: "IT Support / Computer Engineering Internship (OJT)",
    salutation: "Dear Hiring Team,",
    paragraphs: [
      "I am writing to express my strong interest in joining your " +
        "organization as an IT / Engineering Intern. I am a third-year " +
        "Computer Engineering student at the Polytechnic University " +
        "of the Philippines (PUP Manila), looking to complete my " +
        "required OJT hours with a team where I can contribute and " +
        "expand my technical support, hardware diagnostics, and " +
        "systems troubleshooting skills in a professional setting.",
      "Recently, I worked at KNJ Printing, a school and office " +
        "publishing services shop, where I set up, operated, and " +
        "troubleshot printing and binding equipment for daily " +
        "walk-in requests, diagnosing hardware faults and resolving " +
        "them on the spot to keep turnaround on track. I also " +
        "maintained and configured large-format printing hardware " +
        "for tarpaulins, vinyl stickers, standees, wall murals, " +
        "posters, backlit displays, and vehicle wraps, handling " +
        "equipment and output issues directly on the shop floor. " +
        "This gave me practical, hands-on experience with hardware " +
        "diagnostics, preventive maintenance, and working directly " +
        "with clients under time pressure.",
      "Alongside this, I bring experience from Xontrix, an " +
        "integrated electronics e-commerce and business management " +
        "platform I helped lead as Full Stack Team Leader, where I " +
        "set up, configured, and maintained development environments " +
        "and devices across the team, resolving hardware and software " +
        "issues to keep our workflows on schedule. I also kept our " +
        "systems documented and our files organized using Git and " +
        "GitHub — practices that translate directly to IT asset " +
        "tracking and technical documentation. As President of PUP " +
        "Seeds of the Nations, I coordinated directly with an " +
        "external IT Consultant from Deloitte to organize a Python " +
        "Mentorship Workshop, which strengthened my communication and " +
        "stakeholder-coordination skills.",
      "I am comfortable with Windows OS installation and " +
        "configuration, quick to pick up new hardware and systems, " +
        "and eager to build a solid technical foundation while " +
        "contributing to your team. I would welcome the opportunity " +
        "to discuss how I can support your engineering and IT needs " +
        "during my internship. Thank you for considering my application.",
    ],
    signOff: "Sincerely,",
    signeeName: "Cielle Mae C. Peñamora",
    signeeRole:
      "BS Computer Engineering (Web & Mobile Systems) • PUP Manila",
  },
});
