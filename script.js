const portfolioData = {
  name: "Cielle Mae Peñamora",
  location: "Metro Manila, Philippines",
  roles: ["Software Engineer", "Frontend Developer", "Content Creator"],
  achievements: ["CS50x Alumni"],
  about: [
    "I'm a full-stack software engineer specializing in developing solutions with JavaScript, Python, and PHP. I work on projects including building modern web applications, mobile apps, search engine optimization, digital marketing, and making code tutorials.",
    "I've helped startups and MSMEs grow and streamline their processes through software solutions. I've also built a community of over 200,000 developers sharing knowledge and mentorship.",
    "Lately, I've been diving deeper into artificial intelligence, focusing on integrating AI tools and techniques into modern applications. My work now includes developing AI-powered solutions, creating intelligent applications, and leveraging generative AI to optimize development workflows and deliver cutting-edge technology.",
  ],
  experience: [
    { title: "BS Computer Engineering specialization in Software Development", company: "Polytechnic University of the Philippines - Manila", year: "2024" },
    { title: "BS Information Technology", company: "National University of the Philippines - Manila", year: "2023" },
    { title: "Hello World! 👋", company: "Wrote my first line of code", year: "2023" },
  ],
  techStack: {
    frontend: ["JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Tailwind CSS"],
    backend: ["Node.js", "Python", "PHP", "Laravel", "PostgreSQL", "MongoDB"],
    devops: ["AWS", "Docker", "Kubernetes", "GitHub Actions"],
  },
  projects: [
    { title: "CodeCred", description: "Online certifications for programmers", link: "https://codecred.dev" },
    { title: "BASE404", description: "Online coding bootcamp", link: "https://base-404.com" },
    { title: "DIIN.PH", description: "AI-powered wardrobe assistant", link: "https://diin.ph" },
    { title: "DYNAMIS Workout Tracker", description: "AI-powered workout tracker", link: "https://dynamis-app.online" },
  ],
  certifications: [
    { name: "Huawei Developer Expert", issuer: "Huawei" },
    { name: "Generative AI Leader", issuer: "Google" },
    { name: "Software Engineering", issuer: "TestDome" },
    { name: "Generative AI Professional", issuer: "Oracle" },
  ],
  recommendations: [
    {
      text: "Cielle was the most talented software engineer I've mentored in a long time. He's a fast learner, and he always makes sure to deliver quality output while learning new technologies quickly.",
      author: "Cris Lawrence Adrian Militante",
      position: "ICT Director at GCM",
    },
    {
      text: "Intelligent software engineer. Cielle takes lead during software development and can handle and manage teams well.",
      author: "Ken Gorro",
      position: "Senior Developer at Fullscale",
    },
    {
      text: "With his guidance, I was equipped with current trends and insights in the tech industry, which helped me grow quickly as an engineer.",
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
    { label: "LinkedIn", url: "https://linkedin.com", meta: "@ciellemae" },
    { label: "GitHub", url: "https://github.com", meta: "github.com/cielle" },
    { label: "Instagram", url: "https://instagram.com", meta: "@cm_penamora" },
  ],
  contactLinks: [
    { label: "Email", meta: "cmpenamora@gmail.com", url: "mailto:cmpenamora@gmail.com" },
    { label: "Let's Talk", meta: "Schedule a Call", url: "#contact" },
    { label: "Blog", meta: "Read my blog", url: "#projects" },
  ],
  gallery: [
    { src: "1 x 1 pic.jpg", alt: "Portrait photo", caption: "Conference" },
    { src: "1 x 1 pic.jpg", alt: "Portrait photo", caption: "Stage talk" },
    { src: "NU.jpg", alt: "Portrait photo", caption: "Workshop" },
    { src: "1 x 1 pic.jpg", alt: "Portrait photo", caption: "Awarding" },
    { src: "1 x 1 pic.jpg", alt: "Portrait photo", caption: "Community" },
  ],
};

function createElement(tagName, className, textContent) {
  const element = document.createElement(tagName);

  if (className) {
    element.className = className;
  }

  if (typeof textContent === "string") {
    element.textContent = textContent;
  }

  return element;
}

function renderParagraphs(items, containerId) {
  const container = document.getElementById(containerId);

  if (!container) {
    return;
  }

  items.forEach((paragraph) => {
    container.appendChild(createElement("p", "", paragraph));
  });
}

function renderPills(items) {
  const container = document.getElementById("achievements");

  if (!container) {
    return;
  }

  items.forEach((item) => {
    container.appendChild(createElement("span", "pill", item));
  });
}

function renderExperience(items) {
  const container = document.getElementById("experience");

  if (!container) {
    return;
  }

  items.forEach((item) => {
    const entry = createElement("article", "timeline-item");
    const marker = createElement("span", "timeline-marker");
    const copy = createElement("div", "timeline-copy");
    const title = createElement("h3", "stack-title", item.title);
    const company = createElement("p", "stack-meta", item.company);
    const year = createElement("p", "stack-year", item.year);

    copy.appendChild(title);
    copy.appendChild(company);
    entry.appendChild(marker);
    entry.appendChild(copy);
    entry.appendChild(year);
    container.appendChild(entry);
  });
}

function renderTechStack(groups) {
  const container = document.getElementById("tech-stack");
  const labels = {
    frontend: "Frontend",
    backend: "Backend",
    devops: "DevOps & Cloud",
  };

  if (!container) {
    return;
  }

  Object.entries(groups).forEach(([group, items]) => {
    const card = createElement("article", "tech-group");
    const title = createElement("h3", "", labels[group] || group);
    const tagList = createElement("div", "tag-list");

    items.forEach((item) => {
      tagList.appendChild(createElement("span", "tag", item));
    });

    card.appendChild(title);
    card.appendChild(tagList);
    container.appendChild(card);
  });
}

function renderProjects(items) {
  const container = document.getElementById("projects-list");

  if (!container) {
    return;
  }

  items.forEach((project) => {
    const card = createElement("a", "project-card");
    const title = createElement("h3", "", project.title);
    const description = createElement("p", "project-description", project.description);
    const domain = createElement("p", "project-domain", project.link.replace(/^https?:\/\//, ""));

    card.href = project.link;
    card.target = "_blank";
    card.rel = "noreferrer";
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(domain);
    container.appendChild(card);
  });
}

function renderCertifications(items) {
  const container = document.getElementById("certifications-list");

  if (!container) {
    return;
  }

  items.forEach((item) => {
    const entry = createElement("article", "certification-item");
    const title = createElement("strong", "", item.name);
    const issuer = createElement("span", "", item.issuer);

    entry.appendChild(title);
    entry.appendChild(issuer);
    container.appendChild(entry);
  });
}

function renderRecommendations(items) {
  const container = document.getElementById("recommendations");

  if (!container) {
    return;
  }

  const cardsWrap = createElement("div", "recommendation-cards");
  const dotsWrap = createElement("div", "recommendation-dots");

  items.forEach((item, index) => {
    const card = createElement(
      "article",
      index === 0 ? "recommendation-card is-active" : "recommendation-card"
    );
    const quote = createElement("blockquote", "", `"${item.text}"`);
    const meta = createElement("div", "recommendation-meta");
    const author = createElement("p", "recommendation-author", item.author);
    const role = createElement("p", "recommendation-role", item.position);
    const dot = createElement(
      "button",
      index === 0 ? "recommendation-dot is-active" : "recommendation-dot"
    );

    dot.type = "button";
    dot.setAttribute("aria-label", `Show recommendation ${index + 1}`);
    dot.dataset.index = String(index);

    meta.appendChild(author);
    meta.appendChild(role);
    card.appendChild(quote);
    card.appendChild(meta);
    cardsWrap.appendChild(card);
    dotsWrap.appendChild(dot);
  });

  container.appendChild(cardsWrap);
  container.appendChild(dotsWrap);

  const cards = cardsWrap.querySelectorAll(".recommendation-card");
  const dots = dotsWrap.querySelectorAll(".recommendation-dot");

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const index = parseInt(dot.dataset.index, 10);

      cards.forEach((card, i) => {
        card.classList.toggle("is-active", i === index);
      });

      dots.forEach((d, i) => {
        d.classList.toggle("is-active", i === index);
      });
    });
  });
}

function renderLinkList(items, containerId) {
  const container = document.getElementById(containerId);

  if (!container) {
    return;
  }

  items.forEach((item) => {
    const link = createElement("a", "");
    const content = createElement("span", "");
    const title = createElement("strong", "", item.label || item.name);
    const meta = item.meta ? createElement("small", "", item.meta) : null;

    link.href = item.url;

    if (item.url.startsWith("http")) {
      link.target = "_blank";
      link.rel = "noreferrer";
    }

    content.appendChild(title);

    if (meta) {
      content.appendChild(meta);
    }

    link.appendChild(content);
    container.appendChild(link);
  });
}

function renderContactLinks(items) {
  const container = document.getElementById("contact-actions");

  if (!container) {
    return;
  }

  items.forEach((item) => {
    const link = createElement("a", "contact-link");
    const content = createElement("div", "");
    const title = createElement("strong", "", item.label);
    const meta = createElement("small", "", item.meta);

    link.href = item.url;
    content.appendChild(title);
    content.appendChild(meta);
    link.appendChild(content);
    container.appendChild(link);
  });
}

function renderGallery(items) {
  const container = document.getElementById("gallery-grid");

  if (!container) {
    return;
  }

  items.forEach((item) => {
    const card = createElement("figure", "gallery-item");
    const image = document.createElement("img");
    const caption = createElement("figcaption", "gallery-caption", item.caption);

    image.src = item.src;
    image.alt = item.alt;
    card.appendChild(image);
    card.appendChild(caption);
    container.appendChild(card);
  });
}

function hydratePage(data) {
  const name = document.getElementById("name");
  const location = document.getElementById("location");
  const roles = document.getElementById("roles");
  const emailLink = document.getElementById("email-link");

  if (name) {
    name.textContent = data.name;
  }

  if (location) {
    location.textContent = data.location;
  }

  if (roles) {
    roles.textContent = data.roles.join(" | ");
  }

  if (emailLink && data.contactLinks[0]) {
    emailLink.href = data.contactLinks[0].url;
  }

  renderParagraphs(data.about, "about");
  renderPills(data.achievements);
  renderExperience(data.experience);
  renderTechStack(data.techStack);
  renderProjects(data.projects);
  renderCertifications(data.certifications);
  renderRecommendations(data.recommendations);
  renderLinkList(data.organizations, "organizations");
  renderLinkList(data.socials, "socials");
  renderContactLinks(data.contactLinks);
  renderGallery(data.gallery);
}

hydratePage(portfolioData);

const themeToggle = document.querySelector(".theme-toggle");
const themeToggleIcon = document.querySelector(".theme-toggle-icon");
const THEME_STORAGE_KEY = "portfolio-theme";

function getPreferredTheme() {
  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function updateThemeToggle(theme) {
  if (!themeToggle || !themeToggleIcon) {
    return;
  }

  const isDarkTheme = theme === "dark";
  themeToggleIcon.textContent = isDarkTheme ? "☾" : "☀";
  themeToggle.setAttribute("aria-pressed", String(isDarkTheme));
  themeToggle.setAttribute(
    "aria-label",
    isDarkTheme ? "Activate light mode" : "Activate dark mode"
  );
}

function applyTheme(theme) {
  document.body.setAttribute("data-theme", theme);
  updateThemeToggle(theme);
}

if (themeToggle && themeToggleIcon) {
  applyTheme(getPreferredTheme());

  themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.getAttribute("data-theme") === "dark" ? "light" : "dark";
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    applyTheme(nextTheme);
  });
}

const recommendationContainer = document.getElementById("recommendations");

if (recommendationContainer) {
  const cards = Array.from(recommendationContainer.querySelectorAll(".recommendation-card"));
  const dots = Array.from(recommendationContainer.querySelectorAll(".recommendation-dot"));
  let activeIndex = 0;
  let recommendationTimer = null;

  function showRecommendation(index) {
    activeIndex = index;

    cards.forEach((card, cardIndex) => {
      card.classList.toggle("is-active", cardIndex === index);
    });

    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === index);
      dot.setAttribute("aria-pressed", String(dotIndex === index));
    });
  }

  function restartRecommendationTimer() {
    window.clearInterval(recommendationTimer);
    recommendationTimer = window.setInterval(() => {
      showRecommendation((activeIndex + 1) % cards.length);
    }, 5000);
  }

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      showRecommendation(Number(dot.dataset.index));
      restartRecommendationTimer();
    });
  });

  if (cards.length > 1) {
    restartRecommendationTimer();
  }
}
