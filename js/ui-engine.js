// js/ui-engine.js
import { portfolioConfig } from "./config-data.js";

export class UiEngine {
  // manages runtime event handlers, dom hydration, and dynamic state
  constructor(dataModel) {
    this.model = dataModel;
    this.themeStorageKey = "portfolio-theme";
    this.recommendationTimer = null;
    this.activeRecommendationIndex = 0;
    this.typingTimer = null;
    this.currentPhraseIndex = 0;
    this.currentCharIndex = 0;
    this.isDeleting = false;
  }

  // initialize whole application lifecycle and render views
  initialize() {
    try {
      this.initializeTheme();
      this.hydrateProfileHeader();
      this.startTypingAnimation();
      this.renderAboutSection();
      this.renderAchievementPills();
      this.renderFunBadges();
      this.renderTimelineExperience();
      this.renderTechStackGroups();
      this.renderFeaturedProjects();
      this.renderCertifications();
      this.renderRecommendations();
      this.renderLinkCollection(
        this.model.organizations,
        "organizations"
      );
      this.renderLinkCollection(this.model.socials, "socials");
      this.renderContactActions();
      this.renderGalleryGrid();
    } catch (initializationError) {
      console.error(
        `Failed to initialize UI engine: ${initializationError.message}`
      );
    }
  }

  // helper method to safely produce styled dom nodes
  createUiNode(tagName, className, textContent) {
    try {
      const elementNode = document.createElement(tagName);

      if (className) {
        elementNode.className = className;
      }

      if (typeof textContent === "string") {
        elementNode.textContent = textContent;
      }

      return elementNode;
    } catch (creationError) {
      console.error(
        `Element creation failed for ${tagName}: ${creationError.message}`
      );
      return document.createElement("div");
    }
  }

  // populate headline elements, handle, and contact links
  hydrateProfileHeader() {
    try {
      const nameElement = document.getElementById("name");
      const handleElement = document.getElementById("handle");
      const locationElement = document.getElementById("location");
      const rolesElement = document.getElementById("roles");
      const emailElement = document.getElementById("email-link");

      if (nameElement) {
        nameElement.textContent = this.model.name;
      }

      if (handleElement && this.model.handle) {
        handleElement.textContent = this.model.handle;
      }

      if (locationElement) {
        locationElement.textContent = this.model.location;
      }

      if (rolesElement && Array.isArray(this.model.roles)) {
        rolesElement.textContent = this.model.roles.join(" • ");
      }

      if (
        emailElement &&
        Array.isArray(this.model.contactLinks) &&
        this.model.contactLinks.length > 0
      ) {
        emailElement.href = this.model.contactLinks[0].url;
      }
    } catch (headerHydrationError) {
      console.error(
        `Profile header hydration failure: ` +
          `${headerHydrationError.message}`
      );
    }
  }

  // start dynamic typewriter effect for role taglines
  startTypingAnimation() {
    try {
      const targetElement = document.getElementById("typing-text");
      if (!targetElement) {
        return;
      }

      const phrases = this.model.typingPhrases;
      if (!Array.isArray(phrases) || phrases.length === 0) {
        return;
      }

      const processTypingCycle = () => {
        const activePhrase = phrases[this.currentPhraseIndex];

        if (!this.isDeleting) {
          this.currentCharIndex += 1;
          targetElement.textContent = activePhrase.slice(
            0,
            this.currentCharIndex
          );

          if (this.currentCharIndex === activePhrase.length) {
            this.isDeleting = true;
            this.typingTimer = window.setTimeout(
              processTypingCycle,
              1800
            );
            return;
          }

          this.typingTimer = window.setTimeout(
            processTypingCycle,
            85
          );
        } else {
          this.currentCharIndex -= 1;
          targetElement.textContent = activePhrase.slice(
            0,
            this.currentCharIndex
          );

          if (this.currentCharIndex === 0) {
            this.isDeleting = false;
            this.currentPhraseIndex =
              (this.currentPhraseIndex + 1) % phrases.length;
            this.typingTimer = window.setTimeout(
              processTypingCycle,
              450
            );
            return;
          }

          this.typingTimer = window.setTimeout(
            processTypingCycle,
            40
          );
        }
      };

      processTypingCycle();
    } catch (typingAnimationError) {
      console.error(
        `Typing animation initialization failed: ` +
          `${typingAnimationError.message}`
      );
    }
  }

  // display biography paragraphs inside about panel
  renderAboutSection() {
    try {
      const container = document.getElementById("about");
      if (!container) {
        throw new Error("About container node missing from DOM.");
      }

      this.model.about.forEach((paragraphText) => {
        const paragraphNode = this.createUiNode(
          "p",
          "",
          paragraphText
        );
        container.appendChild(paragraphNode);
      });
    } catch (aboutRenderError) {
      console.error(
        `About rendering failure: ${aboutRenderError.message}`
      );
    }
  }

  // render achievement badges in hero metadata row
  renderAchievementPills() {
    try {
      const container = document.getElementById("achievements");
      if (!container) {
        throw new Error("Achievements container node missing from DOM.");
      }

      this.model.achievements.forEach((pillTitle) => {
        const pillNode = this.createUiNode("span", "pill", pillTitle);
        container.appendChild(pillNode);
      });
    } catch (pillsRenderError) {
      console.error(
        `Achievements rendering failure: ${pillsRenderError.message}`
      );
    }
  }

  // render playful github-style badges
  renderFunBadges() {
    try {
      const container = document.getElementById("fun-badges");
      if (!container) {
        return;
      }

      if (!Array.isArray(this.model.funBadges)) {
        return;
      }

      this.model.funBadges.forEach((badgeItem) => {
        const badgeNode = this.createUiNode(
          "span",
          `badge-pill ${badgeItem.theme}`,
          badgeItem.label
        );
        container.appendChild(badgeNode);
      });
    } catch (badgesRenderError) {
      console.error(
        `Fun badges rendering failure: ${badgesRenderError.message}`
      );
    }
  }

  // build chronological career and education timeline
  renderTimelineExperience() {
    try {
      const container = document.getElementById("experience");
      if (!container) {
        throw new Error("Experience container node missing from DOM.");
      }

      this.model.experience.forEach((historyItem) => {
        const itemArticle = this.createUiNode(
          "article",
          "timeline-item"
        );
        const markerNode = this.createUiNode(
          "span",
          "timeline-marker"
        );
        const copyWrapper = this.createUiNode(
          "div",
          "timeline-copy"
        );
        const titleNode = this.createUiNode(
          "h3",
          "stack-title",
          historyItem.title
        );
        const companyNode = this.createUiNode(
          "p",
          "stack-meta",
          historyItem.company
        );
        const yearNode = this.createUiNode(
          "p",
          "stack-year",
          historyItem.year
        );

        copyWrapper.appendChild(titleNode);
        copyWrapper.appendChild(companyNode);
        itemArticle.appendChild(markerNode);
        itemArticle.appendChild(copyWrapper);
        itemArticle.appendChild(yearNode);
        container.appendChild(itemArticle);
      });
    } catch (timelineRenderError) {
      console.error(
        `Timeline rendering failure: ${timelineRenderError.message}`
      );
    }
  }

  // organize skills into categorical cards with tags
  renderTechStackGroups() {
    try {
      const container = document.getElementById("tech-stack");
      const categoryLabels = {
        frontend: "Frontend Architecture",
        backend: "Backend & Systems",
        devops: "DevOps, Cloud & Tooling",
      };

      if (!container) {
        throw new Error("Tech stack container node missing from DOM.");
      }

      Object.entries(this.model.techStack).forEach(
        ([groupKey, skillItems]) => {
          const groupCard = this.createUiNode(
            "article",
            "tech-group"
          );
          const groupTitle = this.createUiNode(
            "h3",
            "",
            categoryLabels[groupKey] || groupKey
          );
          const tagContainer = this.createUiNode(
            "div",
            "tag-list"
          );

          skillItems.forEach((skillName) => {
            const tagNode = this.createUiNode(
              "span",
              "tag",
              skillName
            );
            tagContainer.appendChild(tagNode);
          });

          groupCard.appendChild(groupTitle);
          groupCard.appendChild(tagContainer);
          container.appendChild(groupCard);
        }
      );
    } catch (techStackRenderError) {
      console.error(
        `Tech stack rendering failure: ${techStackRenderError.message}`
      );
    }
  }

  // generate github-inspired repository cards
  renderFeaturedProjects() {
    try {
      const container = document.getElementById("projects-list");
      if (!container) {
        throw new Error("Projects container node missing from DOM.");
      }

      this.model.projects.forEach((projectEntry) => {
        const projectCard = this.createUiNode(
          "article",
          "repo-card"
        );

        const cardHeader = this.createUiNode(
          "div",
          "repo-header"
        );
        const titleAnchor = this.createUiNode(
          "a",
          "repo-title-link",
          projectEntry.title
        );
        titleAnchor.href = projectEntry.link;
        titleAnchor.target = "_blank";
        titleAnchor.rel = "noopener noreferrer";

        const visibilityPill = this.createUiNode(
          "span",
          "repo-visibility-pill",
          "Public"
        );

        cardHeader.appendChild(titleAnchor);
        cardHeader.appendChild(visibilityPill);

        const projectDescription = this.createUiNode(
          "p",
          "repo-description",
          projectEntry.description
        );

        const metaRow = this.createUiNode("div", "repo-meta-row");

        if (projectEntry.language) {
          const languageWrapper = this.createUiNode(
            "span",
            "repo-language"
          );
          const colorDot = this.createUiNode(
            "span",
            "repo-lang-dot"
          );
          colorDot.style.backgroundColor =
            projectEntry.languageColor || "#8a2be2";

          const languageLabel = this.createUiNode(
            "span",
            "repo-lang-name",
            projectEntry.language
          );

          languageWrapper.appendChild(colorDot);
          languageWrapper.appendChild(languageLabel);
          metaRow.appendChild(languageWrapper);
        }

        if (projectEntry.branch) {
          const branchBadge = this.createUiNode(
            "span",
            "repo-stat",
            `⎇ ${projectEntry.branch}`
          );
          metaRow.appendChild(branchBadge);
        }

        if (projectEntry.forks) {
          const forksBadge = this.createUiNode(
            "span",
            "repo-stat",
            `⌥ ${projectEntry.forks}`
          );
          metaRow.appendChild(forksBadge);
        }

        projectCard.appendChild(cardHeader);
        projectCard.appendChild(projectDescription);
        projectCard.appendChild(metaRow);
        container.appendChild(projectCard);
      });
    } catch (projectsRenderError) {
      console.error(
        `Projects rendering failure: ${projectsRenderError.message}`
      );
    }
  }

  // display accredited industry certifications
  renderCertifications() {
    try {
      const container = document.getElementById(
        "certifications-list"
      );
      if (!container) {
        throw new Error(
          "Certifications container node missing from DOM."
        );
      }

      this.model.certifications.forEach((certificate) => {
        const itemArticle = this.createUiNode(
          "article",
          "certification-item"
        );
        const nameNode = this.createUiNode(
          "strong",
          "",
          certificate.name
        );
        const issuerNode = this.createUiNode(
          "span",
          "",
          certificate.issuer
        );

        itemArticle.appendChild(nameNode);
        itemArticle.appendChild(issuerNode);
        container.appendChild(itemArticle);
      });
    } catch (certificationsRenderError) {
      console.error(
        `Certifications rendering failure: ` +
          `${certificationsRenderError.message}`
      );
    }
  }

  // construct testimonial carousel with pagination dots
  renderRecommendations() {
    try {
      const container = document.getElementById("recommendations");
      if (!container) {
        throw new Error(
          "Recommendations container node missing from DOM."
        );
      }

      const cardsWrap = this.createUiNode(
        "div",
        "recommendation-cards"
      );
      const dotsWrap = this.createUiNode(
        "div",
        "recommendation-dots"
      );

      this.model.recommendations.forEach(
        (recommendation, itemIndex) => {
          const isActive = itemIndex === 0;
          const cardClass = isActive
            ? "recommendation-card is-active"
            : "recommendation-card";
          const cardNode = this.createUiNode(
            "article",
            cardClass
          );

          const quoteNode = this.createUiNode(
            "blockquote",
            "",
            `"${recommendation.text}"`
          );
          const metaContainer = this.createUiNode(
            "div",
            "recommendation-meta"
          );
          const authorNode = this.createUiNode(
            "p",
            "recommendation-author",
            recommendation.author
          );
          const roleNode = this.createUiNode(
            "p",
            "recommendation-role",
            recommendation.position
          );

          const dotClass = isActive
            ? "recommendation-dot is-active"
            : "recommendation-dot";
          const dotButton = this.createUiNode(
            "button",
            dotClass
          );
          dotButton.type = "button";
          dotButton.setAttribute(
            "aria-label",
            `Show recommendation ${itemIndex + 1}`
          );
          dotButton.setAttribute(
            "aria-pressed",
            String(isActive)
          );
          dotButton.dataset.index = String(itemIndex);

          metaContainer.appendChild(authorNode);
          metaContainer.appendChild(roleNode);
          cardNode.appendChild(quoteNode);
          cardNode.appendChild(metaContainer);
          cardsWrap.appendChild(cardNode);
          dotsWrap.appendChild(dotButton);
        }
      );

      container.appendChild(cardsWrap);
      container.appendChild(dotsWrap);

      const cardCollection = Array.from(
        cardsWrap.querySelectorAll(".recommendation-card")
      );
      const dotCollection = Array.from(
        dotsWrap.querySelectorAll(".recommendation-dot")
      );

      this.bindRecommendationEvents(
        cardCollection,
        dotCollection
      );

      if (cardCollection.length > 1) {
        this.startRecommendationRotation(
          cardCollection,
          dotCollection
        );
      }
    } catch (recommendationsRenderError) {
      console.error(
        `Recommendations rendering failure: ` +
          `${recommendationsRenderError.message}`
      );
    }
  }

  // wire click triggers for recommendation navigation dots
  bindRecommendationEvents(cardCollection, dotCollection) {
    try {
      dotCollection.forEach((dotButton) => {
        dotButton.addEventListener("click", () => {
          const selectedIndex = parseInt(
            dotButton.dataset.index,
            10
          );
          this.switchRecommendationSlide(
            cardCollection,
            dotCollection,
            selectedIndex
          );
          this.startRecommendationRotation(
            cardCollection,
            dotCollection
          );
        });
      });
    } catch (eventBindingError) {
      console.error(
        `Recommendation event binding failure: ` +
          `${eventBindingError.message}`
      );
    }
  }

  // update visual active states across cards and indicators
  switchRecommendationSlide(
    cardCollection,
    dotCollection,
    targetIndex
  ) {
    try {
      this.activeRecommendationIndex = targetIndex;

      cardCollection.forEach((cardNode, cardIndex) => {
        const matchesTarget = cardIndex === targetIndex;
        cardNode.classList.toggle("is-active", matchesTarget);
      });

      dotCollection.forEach((dotButton, dotIndex) => {
        const matchesTarget = dotIndex === targetIndex;
        dotButton.classList.toggle("is-active", matchesTarget);
        dotButton.setAttribute(
          "aria-pressed",
          String(matchesTarget)
        );
      });
    } catch (slideSwitchError) {
      console.error(
        `Recommendation slide switch failure: ` +
          `${slideSwitchError.message}`
      );
    }
  }

  // run automatic carousel interval timer
  startRecommendationRotation(cardCollection, dotCollection) {
    try {
      if (this.recommendationTimer) {
        window.clearInterval(this.recommendationTimer);
      }

      this.recommendationTimer = window.setInterval(() => {
        const totalItems = cardCollection.length;
        const nextIndex =
          (this.activeRecommendationIndex + 1) % totalItems;
        this.switchRecommendationSlide(
          cardCollection,
          dotCollection,
          nextIndex
        );
      }, 5000);
    } catch (timerStartError) {
      console.error(
        `Carousel rotation initiation failure: ` +
          `${timerStartError.message}`
      );
    }
  }

  // render generic navigational list of link elements
  renderLinkCollection(itemCollection, containerId) {
    try {
      const container = document.getElementById(containerId);
      if (!container) {
        throw new Error(`Target container #${containerId} missing.`);
      }

      itemCollection.forEach((linkItem) => {
        const anchorNode = this.createUiNode("a", "");
        const labelWrapper = this.createUiNode("span", "");
        const titleText = linkItem.label || linkItem.name;
        const titleNode = this.createUiNode(
          "strong",
          "",
          titleText
        );

        anchorNode.href = linkItem.url;
        labelWrapper.appendChild(titleNode);

        if (linkItem.meta) {
          const metaNode = this.createUiNode(
            "small",
            "",
            linkItem.meta
          );
          labelWrapper.appendChild(metaNode);
        }

        if (linkItem.url.startsWith("http")) {
          anchorNode.target = "_blank";
          anchorNode.rel = "noopener noreferrer";
        }

        anchorNode.appendChild(labelWrapper);
        container.appendChild(anchorNode);
      });
    } catch (linkCollectionError) {
      console.error(
        `Link collection rendering failure: ` +
          `${linkCollectionError.message}`
      );
    }
  }

  // render styled contact action buttons
  renderContactActions() {
    try {
      const container = document.getElementById(
        "contact-actions"
      );
      if (!container) {
        throw new Error("Contact actions container missing from DOM.");
      }

      this.model.contactLinks.forEach((contactItem) => {
        const linkNode = this.createUiNode(
          "a",
          "contact-link"
        );
        const innerContent = this.createUiNode("div", "");
        const labelNode = this.createUiNode(
          "strong",
          "",
          contactItem.label
        );
        const metaNode = this.createUiNode(
          "small",
          "",
          contactItem.meta
        );

        linkNode.href = contactItem.url;
        if (contactItem.url.startsWith("http")) {
          linkNode.target = "_blank";
          linkNode.rel = "noopener noreferrer";
        }

        innerContent.appendChild(labelNode);
        innerContent.appendChild(metaNode);
        linkNode.appendChild(innerContent);
        container.appendChild(linkNode);
      });
    } catch (contactActionsError) {
      console.error(
        `Contact actions rendering failure: ` +
          `${contactActionsError.message}`
      );
    }
  }

  // render photo gallery figures with captions
  renderGalleryGrid() {
    try {
      const container = document.getElementById("gallery-grid");
      if (!container) {
        throw new Error("Gallery grid container missing from DOM.");
      }

      this.model.gallery.forEach((photoItem) => {
        const figureNode = this.createUiNode(
          "figure",
          "gallery-item"
        );
        const imageNode = document.createElement("img");
        const captionNode = this.createUiNode(
          "figcaption",
          "gallery-caption",
          photoItem.caption
        );

        imageNode.src = photoItem.src;
        imageNode.alt = photoItem.alt;
        imageNode.loading = "lazy";

        figureNode.appendChild(imageNode);
        figureNode.appendChild(captionNode);
        container.appendChild(figureNode);
      });
    } catch (galleryRenderError) {
      console.error(
        `Gallery rendering failure: ${galleryRenderError.message}`
      );
    }
  }

  // read initial theme preference from storage or media query
  getPreferredTheme() {
    try {
      const savedTheme = window.localStorage.getItem(
        this.themeStorageKey
      );
      if (savedTheme === "light" || savedTheme === "dark") {
        return savedTheme;
      }

      const prefersLight = window.matchMedia(
        "(prefers-color-scheme: light)"
      ).matches;
      return prefersLight ? "light" : "dark";
    } catch (themeRetrievalError) {
      console.warn(
        `Could not retrieve stored theme: ` +
          `${themeRetrievalError.message}. Using default dark theme.`
      );
      return "dark";
    }
  }

  // synchronize theme attributes across toggle controls
  updateThemeToggleControls(targetTheme) {
    try {
      const toggleButton = document.querySelector(".theme-toggle");
      const toggleIcon = document.querySelector(
        ".theme-toggle-icon"
      );

      if (!toggleButton || !toggleIcon) {
        return;
      }

      const isDarkTheme = targetTheme === "dark";
      toggleIcon.textContent = isDarkTheme ? "☾" : "☀";
      toggleButton.setAttribute(
        "aria-pressed",
        String(isDarkTheme)
      );
      toggleButton.setAttribute(
        "aria-label",
        isDarkTheme ? "Activate light mode" : "Activate dark mode"
      );
    } catch (toggleUpdateError) {
      console.error(
        `Theme toggle UI update failure: ${toggleUpdateError.message}`
      );
    }
  }

  // apply theme token to document root
  applyActiveTheme(targetTheme) {
    try {
      document.body.setAttribute("data-theme", targetTheme);
      this.updateThemeToggleControls(targetTheme);
    } catch (themeApplyError) {
      console.error(
        `Failed applying theme: ${themeApplyError.message}`
      );
    }
  }

  // attach theme toggle event handler and set initial mode
  initializeTheme() {
    try {
      const initialTheme = this.getPreferredTheme();
      this.applyActiveTheme(initialTheme);

      const toggleButton = document.querySelector(".theme-toggle");
      if (toggleButton) {
        toggleButton.addEventListener("click", () => {
          const currentTheme =
            document.body.getAttribute("data-theme");
          const nextTheme =
            currentTheme === "dark" ? "light" : "dark";

          try {
            window.localStorage.setItem(
              this.themeStorageKey,
              nextTheme
            );
          } catch (storageSaveError) {
            console.warn(
              `LocalStorage write failed: ${storageSaveError.message}`
            );
          }

          this.applyActiveTheme(nextTheme);
        });
      }
    } catch (themeInitError) {
      console.error(
        `Theme subsystem initialization failed: ` +
          `${themeInitError.message}`
      );
    }
  }
}

// self-executing lifecycle execution guard
(() => {
  try {
    const engine = new UiEngine(portfolioConfig);
    engine.initialize();
  } catch (criticalError) {
    console.error(
      `Fatal core engine execution failure: ${criticalError.message}`
    );
  }
})();
