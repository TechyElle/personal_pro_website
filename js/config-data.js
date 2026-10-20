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

const RESUME_PDF_URI =
  "docs/CielleMae_Penamora_Globe_OJT_Network_Infrastructure_Resume.pdf";

// static configuration dataset decoupled from view logic
export const portfolioConfig = new PortfolioDataHolder({
  name: "Cielle Mae C. Peñamora",
  handle: "@TechyElle",
  location: "📍 Sampaloc, Manila, Philippines",
  roles: [
    "Network Infrastructure",
    "Electronics & Communications",
    "Equipment & Site Support",
    "Enterprise Networking Cadet",
    "BS Computer Engineering (PUP)",
  ],
  typingPhrases: [
    "I'm Elle",
    "Engineering & Network Infrastructure OJT",
    "Enterprise Networking Cadet @ Cisco NetConnect",
    "Cisco CCNA 200-301 Candidate",
    "LAN/Wi-Fi, Routing & Switching",
    "Electronics & Communications Hardware",
    "Equipment & Site Troubleshooting",
    "BS Computer Engineering @ PUP Manila",
  ],
  achievements: [
    "BS Computer Engineering",
    "PUP Manila (08/2024 – Present)",
    "Enterprise Networking Cadet (Cisco NetConnect)",
    "CCNA 200-301 In Progress",
    "Cisco NetAcad Certified (Oct 2026)",
    "Harvard CS50P Alum",
    "DataCamp Certified",
    "School of Leaders 1 Awardee",
  ],
  funBadges: [
    { label: "network-infrastructure", theme: "badge-purple" },
    { label: "cisco-netconnect-cadet", theme: "badge-blue" },
    { label: "ccna-in-progress", theme: "badge-cyan" },
    { label: "electronics-comms", theme: "badge-pink" },
    { label: "equipment-site-support", theme: "badge-purple" },
  ],
  about: [
    "Third-year BS Computer Engineering student at the Polytechnic " +
      "University of the Philippines and Enterprise Networking Cadet at " +
      "Cisco NetConnect PUP Manila, seeking an OJT in Engineering & " +
      "Network Infrastructure.",
    "Hands-on foundation in network engineering and operations, " +
      "electronics and communications hardware, and equipment setup and " +
      "troubleshooting, backed by technical documentation and project " +
      "coordination experience.",
    "Currently preparing for the Cisco CCNA 200-301 (OSPF, RSTP, WLC, " +
      "DHCP snooping & DAI, routing table analysis) and eager to learn " +
      "industry best practices from experienced engineers.",
  ],
  experience: [
    {
      title: "Enterprise Networking Cadet",
      company:
        "Cisco NetConnect PUP Manila | " +
        "Polytechnic University of the Philippines, Manila",
      year: "10/2026 – Present",
      details: [
        "Member of the Enterprise Networking department, building " +
          "hands-on skills in routing, switching, and wireless toward the " +
          "Cisco CCNA 200-301 (OSPF, RSTP, WLC, DHCP snooping & DAI).",
      ],
    },
    {
      title:
        "Document Services & Equipment Production Assistant",
      company:
        "KNJ Printing — School/Office Publishing Services | Infanta, Quezon",
      year: "07/2026 – 09/2026",
      details: [
        "Set up, operated, and troubleshot printing, binding, and " +
          "large-format equipment, diagnosing faults and resolving them " +
          "on the spot to keep same-day turnaround.",
        "Maintained accurate customer order records and job " +
          "documentation using Microsoft Word, Excel, and Outlook.",
      ],
    },
    {
      title: "Team Leader, Full Stack",
      company:
        "Xontrix — AI-Powered Electronics E-Commerce Platform " +
        "(microcontrollers, IoT, robotics, breadboards) | Manila",
      year: "01/2026 – 05/2026",
      details: [
        "Led a team building an electronics components platform " +
          "covering microcontrollers, IoT parts, robotics, and " +
          "breadboard kits, coordinating tasks and timelines.",
        "Set up and maintained development environments and devices, " +
          "resolving hardware and software issues.",
        "Documented technical issues, configurations, and resolutions; " +
          "maintained backups and version control (Git/GitHub).",
      ],
    },
    {
      title: "President",
      company:
        "PUP Seeds of the Nations (PUP SONS) | Manila, Philippines",
      year: "08/2025 – 08/2026",
      details: [
        "Coordinated with an external IT Consultant from Deloitte to " +
          "plan and run a Python Mentorship Workshop, managing " +
          "logistics and stakeholder communication.",
        "Led timelines and progress tracking across officer committees; " +
          "prepared reports, letters, and member records.",
      ],
    },
    {
      title: "BS Computer Engineering (Web & Mobile Systems)",
      company: "Polytechnic University of the Philippines | Manila",
      year: "08/2024 – Present",
      details: [
        "Third-year student specializing in Web & Mobile Systems, " +
          "Enterprise Networking Cadet at Cisco NetConnect PUP Manila.",
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
    networkOps: [
      "LAN / Wi-Fi Troubleshooting",
      "IP Configuration",
      "Basic Cabling",
      "Routers, Switches & APs",
      "CCNA 200-301 (In Progress)",
      "OSPF & RSTP",
      "WLC & Wireless",
      "DHCP Snooping & DAI",
      "Routing Table Analysis",
    ],
    electronicsComms: [
      "Breadboards & Prototyping",
      "Microcontrollers",
      "IoT Components",
      "Robotics Kits",
      "Circuit Prototyping",
      "Hardware Fault Diagnosis",
      "Component Assembly & Testing",
    ],
    facilitiesSite: [
      "Equipment Installation",
      "Device & Workstation Setup",
      "Preventive Maintenance",
      "On-site Troubleshooting",
      "Printing & Binding Hardware",
      "Large-Format Equipment",
    ],
    documentationReporting: [
      "Technical Issue Logs",
      "Configuration Records",
      "Resolution Reports",
      "Microsoft Word & Excel",
      "PowerPoint & Outlook",
      "Project Quality Planning",
    ],
    toolsLanguages: [
      "Python",
      "Git / GitHub",
      "MySQL",
      "Windows OS Setup",
      "English (Fluent)",
      "Filipino (Native)",
    ],
  },
  projects: [
    {
      title: "ocr_multimodal_braille_terminal",
      description:
        "Computer Engineering Thesis: Developing an OCR-integrated, " +
        "multimodal Braille terminal that combines electronics hardware " +
        "with software to make printed text accessible to visually " +
        "impaired users. Prepared quality planning, team structure, " +
        "testing, and documentation compilation.",
      language: "C++ / Python",
      languageColor: "#f34b7d",
      tags: ["Hardware", "Embedded", "OCR", "Accessibility", "Thesis"],
      link: "https://github.com/TechyElle",
      branch: "main",
      stars: "0",
      forks: "0",
    },
    {
      title: "safebite_bacteria_scanner",
      description:
        "Harvard CS50P Final Project. Built and tested a food safety " +
        "bacteria scanner using Python, PyQt6, and OpenCV, including " +
        "complete installation, configuration, and troubleshooting across " +
        "development environments.",
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
        "AI-Powered Electronics E-Commerce Platform covering " +
        "microcontrollers, IoT parts, robotics, and breadboard kits. " +
        "Led dev environment setup, hardware/software troubleshooting, " +
        "and Git version control.",
      language: "TypeScript",
      languageColor: "#3178c6",
      tags: ["TypeScript", "React", "Node.js", "Electronics"],
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
  ],
  certifications: [
    {
      name: "Cisco CCNA 200-301 (In Progress)",
      issuer: "Cisco",
      date: "In Progress",
      category: "Networking & Infrastructure",
    },
    {
      name: "Network Technician & IT Customer Support Basics",
      issuer: "Cisco Networking Academy",
      date: "Oct 2026",
      category: "Networking & Support",
    },
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
      name: "CS50P: Programming with Python",
      issuer: "Harvard University",
      date: "CS50x Alum",
      category: "Computer Science",
    },
    {
      name: "School of Leaders 1",
      issuer: "Most Outstanding Awardee",
      date: "Honors",
      category: "Leadership & Honors",
    },
  ],
  recommendations: [],
  organizations: [
    {
      name: "Cisco NetConnect PUP Manila",
      role: "Enterprise Networking Cadet",
      category: "Enterprise Networking Department • PUP Manila",
      badgeType: "purple",
      url: "https://github.com/TechyElle",
    },
    {
      name: "PUP Seeds of the Nations (PUP SONS)",
      role: "President",
      category: "Student Organization • PUP Manila",
      badgeType: "accent",
      url: "https://github.com/TechyElle",
    },
    {
      name: "Deloitte Python Mentorship Workshop",
      role: "Technical Partner & Lead",
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
      id: "phone",
      label: "Mobile / Phone",
      value: "0907 582 5520",
      url: "tel:09075825520",
      badge: "Direct",
      icon: "phone",
      canCopy: true,
    },
    {
      id: "website",
      label: "Website",
      value: "ciellemae.is-a.dev",
      url: "https://ciellemae.is-a.dev",
      badge: "Portfolio",
      icon: "website",
      canCopy: false,
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
      id: "resume",
      label: "Official Resume",
      value: "CielleMae_Penamora_Globe_OJT_Network_Infrastructure_Resume.pdf",
      url: RESUME_PDF_URI,
      badge: "PDF / CV",
      icon: "resume",
      canCopy: false,
    },
  ],
  socials: [
    {
      label: "Resume (PDF)",
      url: RESUME_PDF_URI,
      meta: "Globe OJT Network Infrastructure Resume",
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
    {
      label: "Phone",
      url: "tel:09075825520",
      meta: "0907 582 5520",
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
      meta: "CielleMae_Penamora_Globe_OJT_Network_Infrastructure_Resume.pdf",
      url: RESUME_PDF_URI,
    },
    {
      label: "Mobile / Phone",
      meta: "0907 582 5520",
      url: "tel:09075825520",
    },
    {
      label: "Portfolio Website",
      meta: "ciellemae.is-a.dev",
      url: "https://ciellemae.is-a.dev",
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
    title: "Engineering & Network Infrastructure Cover Letter",
    senderName: "Cielle Mae C. Peñamora",
    senderCity: "Sampaloc, Manila, Philippines",
    senderEmail: "penamoraciellemae@gmail.com",
    senderPhone: "0907 582 5520",
    dateText: "Academic Year 2025 – 2026",
    recipientTitle: "Engineering & Network Infrastructure Hiring Team",
    roleTarget: "OJT in Engineering & Network Infrastructure",
    salutation: "Dear Hiring Team,",
    paragraphs: [
      "I am writing to express my strong interest in the Engineering & " +
        "Network Infrastructure On-the-Job Training (OJT) position. " +
        "I am a third-year BS Computer Engineering student at the " +
        "Polytechnic University of the Philippines (PUP Manila) and an " +
        "Enterprise Networking Cadet at Cisco NetConnect PUP Manila, " +
        "eager to contribute hands-on technical skills and learn industry " +
        "best practices within your infrastructure and operations teams.",
      "Through my cadetship in Cisco NetConnect PUP Manila's Enterprise " +
        "Networking department, I have developed a strong practical " +
        "foundation in routing, switching, and wireless architectures while " +
        "actively preparing for the Cisco CCNA 200-301 certification. My " +
        "coursework and lab training cover core concepts including OSPF " +
        "routing, RSTP, Wireless LAN Controllers (WLC), DHCP snooping, " +
        "Dynamic ARP Inspection (DAI), and routing table analysis, " +
        "supported by Cisco Networking Academy certifications in Network " +
        "Technician and IT Customer Support Basics.",
      "In addition to network operations, I bring substantial hands-on " +
        "experience with hardware diagnostics, site equipment, and " +
        "electronics. At KNJ Printing (July – September 2026), I set up, " +
        "operated, and troubleshot large-format printing and production " +
        "hardware on-site, diagnosing hardware faults to maintain " +
        "same-day delivery SLAs while logging job documentation. As Full " +
        "Stack Team Leader for Xontrix (January – May 2026), I led " +
        "development of an electronics platform spanning microcontrollers, " +
        "IoT components, and breadboards, while configuring team " +
        "workstation environments and enforcing version control " +
        "(Git/GitHub). Furthermore, my Computer Engineering thesis " +
        "centers on an OCR-integrated multimodal Braille terminal, " +
        "bridging embedded hardware and accessibility software under " +
        "structured quality planning.",
      "As President of PUP Seeds of the Nations (August 2025 – August " +
        "2026), I partnered with an external IT Consultant from Deloitte " +
        "to coordinate a Python Mentorship Workshop, proving my ability " +
        "to manage technical timelines, communicate cross-functionally, " +
        "and uphold rigorous documentation standards.",
      "With a solid blend of network engineering, hardware " +
        "troubleshooting, and collaborative problem-solving, I am ready to " +
        "add immediate value to your network infrastructure operations. " +
        "Thank you for your time and consideration, and I welcome the " +
        "opportunity to discuss my qualifications in an interview.",
    ],
    signOff: "Sincerely,",
    signeeName: "Cielle Mae C. Peñamora",
    signeeRole:
      "BS Computer Engineering • Enterprise Cadet, Cisco NetConnect PUP",
  },
});
