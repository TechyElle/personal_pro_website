// js/ui-engine.js
import { portfolioConfig } from "./config-data.js";
import { inject } from '@vercel/analytics';

export class UiEngine {
  // manages runtime event handlers, dom hydration, and dynamic state
  constructor(dataModel) {
    this.model = dataModel;
    this.themeStorageKey = "portfolio-theme-v3";
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
      if (
        Array.isArray(this.model.recommendations) &&
        this.model.recommendations.length > 0
      ) {
        this.renderRecommendations();
      }
      this.renderAffiliations();
      this.renderContactChannels();
      this.setupClipboardHandlers();
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
        const mailLink = this.model.contactLinks.find((item) =>
          item.url.startsWith("mailto:")
        );
        if (mailLink) {
          emailElement.href = mailLink.url;
        }
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

        if (Array.isArray(historyItem.details)) {
          const detailsList = this.createUiNode(
            "ul",
            "stack-details"
          );
          historyItem.details.forEach((detailText) => {
            const detailItem = this.createUiNode(
              "li",
              "stack-detail-item",
              detailText
            );
            detailsList.appendChild(detailItem);
          });
          copyWrapper.appendChild(detailsList);
        }

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
        itSupport: "IT Support & Troubleshooting",
        systemsMaintenance: "Systems & Software Maintenance",
        networkingSecurity: "Networking Fundamentals & IT Security",
        toolsPlatforms: "Tools & Platforms",
        clientTeam: "Client & Team Support",
        frontend: "Frontend Architecture",
        backend: "Backend & Systems",
        devops: "DevOps, Cloud & Tooling",
      };

      const categoryIcons = {
        itSupport: "🛠️",
        systemsMaintenance: "💻",
        networkingSecurity: "🌐",
        toolsPlatforms: "⚡",
        clientTeam: "🤝",
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
          const iconPrefix = categoryIcons[groupKey]
            ? `${categoryIcons[groupKey]} `
            : "";
          const groupTitle = this.createUiNode(
            "h3",
            "tech-group-title",
            `${iconPrefix}${categoryLabels[groupKey] || groupKey}`
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

        projectCard.appendChild(cardHeader);
        projectCard.appendChild(projectDescription);

        if (
          Array.isArray(projectEntry.tags) &&
          projectEntry.tags.length > 0
        ) {
          const tagsWrapper = this.createUiNode(
            "div",
            "repo-tags-row"
          );
          projectEntry.tags.forEach((tagText) => {
            const tagChip = this.createUiNode(
              "span",
              "repo-tech-tag",
              tagText
            );
            tagsWrapper.appendChild(tagChip);
          });
          projectCard.appendChild(tagsWrapper);
        }

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

        const forkCount = parseInt(projectEntry.forks, 10);
        if (!isNaN(forkCount) && forkCount > 0) {
          const forksBadge = this.createUiNode(
            "span",
            "repo-stat",
            `⌥ ${forkCount}`
          );
          metaRow.appendChild(forksBadge);
        }

        const starCount = parseInt(projectEntry.stars, 10);
        if (!isNaN(starCount) && starCount > 0) {
          const starsBadge = this.createUiNode(
            "span",
            "repo-stat",
            `★ ${starCount}`
          );
          metaRow.appendChild(starsBadge);
        }

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
        const cardHeader = this.createUiNode("div", "cert-header");
        const nameNode = this.createUiNode(
          "strong",
          "cert-name",
          certificate.name
        );
        cardHeader.appendChild(nameNode);

        if (certificate.category) {
          const categoryBadge = this.createUiNode(
            "span",
            "cert-category-badge",
            certificate.category
          );
          cardHeader.appendChild(categoryBadge);
        }

        const metaRow = this.createUiNode("div", "cert-meta-row");
        const issuerNode = this.createUiNode(
          "span",
          "cert-issuer",
          certificate.issuer
        );
        metaRow.appendChild(issuerNode);

        if (certificate.date) {
          const dateNode = this.createUiNode(
            "span",
            "cert-date",
            certificate.date
          );
          metaRow.appendChild(dateNode);
        }

        itemArticle.appendChild(cardHeader);
        itemArticle.appendChild(metaRow);
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
      if (
        !container ||
        !Array.isArray(this.model.recommendations) ||
        this.model.recommendations.length === 0
      ) {
        return;
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

  // return icon svg markup matching channel type
  getChannelIconSvg(iconType) {
    switch (iconType) {
      case "mail":
        return (
          '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" ' +
          'stroke="currentColor" stroke-width="2" stroke-linecap="round" ' +
          'stroke-linejoin="round">' +
          '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2' +
          '-.9-2-2V6c0-1.1.9-2 2-2z"></path>' +
          '<polyline points="22,6 12,13 2,6"></polyline></svg>'
        );
      case "linkedin":
        return (
          '<svg viewBox="0 0 24 24" width="18" height="18" ' +
          'fill="currentColor">' +
          '<path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2' +
          '-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26' +
          '-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93' +
          'c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 ' +
          '8.76a1.45 1.45 0 1 0-.01-2.9 1.45 1.45 0 0 0 .01 2.9m1.37 ' +
          '9.74v-8.37H5.1v8.37h2.73z"></path></svg>'
        );
      case "github":
        return (
          '<svg viewBox="0 0 16 16" width="18" height="18" ' +
          'fill="currentColor">' +
          '<path d="M8 0C3.58 0 0 3.58 0 8a8.01 8.01 0 0 0 5.47 7.59c' +
          '.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53' +
          '-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01' +
          '-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52' +
          '.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59' +
          '.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 ' +
          '1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82' +
          '.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 ' +
          '3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 ' +
          '0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z">' +
          '</path></svg>'
        );
      case "phone":
        return (
          '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" ' +
          'stroke="currentColor" stroke-width="2" stroke-linecap="round" ' +
          'stroke-linejoin="round">' +
          '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1' +
          '-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07' +
          '-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 ' +
          '0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27' +
          '-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 ' +
          '22 16.92z"></path></svg>'
        );
      case "resume":
      default:
        return (
          '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" ' +
          'stroke="currentColor" stroke-width="2" stroke-linecap="round" ' +
          'stroke-linejoin="round">' +
          '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 ' +
          '0 2-2V8z"></path>' +
          '<polyline points="14 2 14 8 20 8"></polyline>' +
          '<line x1="16" y1="13" x2="8" y2="13"></line>' +
          '<line x1="16" y1="17" x2="8" y2="17"></line>' +
          '</svg>'
        );
    }
  }

  // return action arrow or copy icon svg string
  getActionIconSvg(iconType) {
    if (iconType === "copy") {
      return (
        '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" ' +
        'stroke="currentColor" stroke-width="2" stroke-linecap="round" ' +
        'stroke-linejoin="round">' +
        '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>' +
        '<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 ' +
        '2 2v1"></path></svg>'
      );
    }
    return (
      '<svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">' +
      '<path fill-rule="evenodd" d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 ' +
      '4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06l2.97' +
      '-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0' +
      '-1.06z"></path></svg>'
    );
  }

  // render direct contact channels with icons and quick actions
  renderContactChannels() {
    try {
      const container = document.getElementById("contact-channels");
      if (!container) {
        return;
      }

      const channels =
        Array.isArray(this.model.contactChannels) &&
        this.model.contactChannels.length > 0
          ? this.model.contactChannels
          : [];

      channels.forEach((channel) => {
        const cardNode = this.createUiNode("div", "channel-card");

        const iconWrap = this.createUiNode("div", "channel-icon-box");
        iconWrap.innerHTML = this.getChannelIconSvg(channel.icon);

        const bodyWrap = this.createUiNode("a", "channel-body");
        bodyWrap.href = channel.url;
        if (
          channel.url.startsWith("http") ||
          channel.url.endsWith(".pdf")
        ) {
          bodyWrap.target = "_blank";
          bodyWrap.rel = "noopener noreferrer";
        }

        const topRow = this.createUiNode("div", "channel-top-row");
        const labelNode = this.createUiNode(
          "strong",
          "channel-label",
          channel.label
        );
        const badgeNode = this.createUiNode(
          "span",
          "channel-badge",
          channel.badge
        );
        topRow.appendChild(labelNode);
        topRow.appendChild(badgeNode);

        const valueNode = this.createUiNode(
          "span",
          "channel-value",
          channel.value
        );

        bodyWrap.appendChild(topRow);
        bodyWrap.appendChild(valueNode);

        const actionsWrap = this.createUiNode(
          "div",
          "channel-actions"
        );

        if (channel.canCopy) {
          const copyButton = this.createUiNode(
            "button",
            "channel-copy-btn"
          );
          copyButton.type = "button";
          copyButton.title = `Copy ${channel.label}`;
          copyButton.setAttribute(
            "aria-label",
            `Copy ${channel.label} to clipboard`
          );
          copyButton.dataset.copyText = channel.value;
          copyButton.innerHTML = this.getActionIconSvg("copy");
          actionsWrap.appendChild(copyButton);
        }

        const arrowLink = this.createUiNode(
          "a",
          "channel-arrow-btn"
        );
        arrowLink.href = channel.url;
        arrowLink.setAttribute(
          "aria-label",
          `Open ${channel.label}`
        );
        if (
          channel.url.startsWith("http") ||
          channel.url.endsWith(".pdf")
        ) {
          arrowLink.target = "_blank";
          arrowLink.rel = "noopener noreferrer";
        }
        arrowLink.innerHTML = this.getActionIconSvg("arrow");
        actionsWrap.appendChild(arrowLink);

        cardNode.appendChild(iconWrap);
        cardNode.appendChild(bodyWrap);
        cardNode.appendChild(actionsWrap);
        container.appendChild(cardNode);
      });
    } catch (contactChannelsError) {
      console.error(
        `Contact channels render failure: ${contactChannelsError.message}`
      );
    }
  }

  // render leadership affiliations with custom role badges
  renderAffiliations() {
    try {
      const container = document.getElementById("organizations");
      if (!container) {
        return;
      }

      this.model.organizations.forEach((orgItem) => {
        const cardLink = this.createUiNode(
          "a",
          "affiliation-card"
        );
        cardLink.href = orgItem.url;
        cardLink.target = "_blank";
        cardLink.rel = "noopener noreferrer";

        const iconWrap = this.createUiNode(
          "div",
          "affiliation-icon-box"
        );
        iconWrap.innerHTML =
          '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" ' +
          'stroke="currentColor" stroke-width="2" stroke-linecap="round" ' +
          'stroke-linejoin="round">' +
          '<path d="M3 21h18"></path><path d="M5 21V7l8-4v18"></path>' +
          '<path d="M19 21V11l-6-3"></path><path d="M9 9h1"></path>' +
          '<path d="M9 13h1"></path><path d="M9 17h1"></path></svg>';

        const bodyWrap = this.createUiNode(
          "div",
          "affiliation-body"
        );
        const titleRow = this.createUiNode(
          "div",
          "affiliation-title-row"
        );
        const nameNode = this.createUiNode(
          "strong",
          "affiliation-name",
          orgItem.name
        );
        titleRow.appendChild(nameNode);

        if (orgItem.role) {
          const badgeClass = orgItem.badgeType
            ? `affiliation-role-badge badge-${orgItem.badgeType}`
            : "affiliation-role-badge";
          const roleBadge = this.createUiNode(
            "span",
            badgeClass,
            orgItem.role
          );
          titleRow.appendChild(roleBadge);
        }

        const categoryNode = this.createUiNode(
          "span",
          "affiliation-category",
          orgItem.category || "Professional Affiliation"
        );

        bodyWrap.appendChild(titleRow);
        bodyWrap.appendChild(categoryNode);

        const arrowWrap = this.createUiNode(
          "span",
          "affiliation-arrow"
        );
        arrowWrap.innerHTML = this.getActionIconSvg("arrow");

        cardLink.appendChild(iconWrap);
        cardLink.appendChild(bodyWrap);
        cardLink.appendChild(arrowWrap);
        container.appendChild(cardLink);
      });
    } catch (affiliationsError) {
      console.error(
        `Affiliations render failure: ${affiliationsError.message}`
      );
    }
  }

  // attach click listeners for copy-to-clipboard interactions
  setupClipboardHandlers() {
    try {
      const copyElements = document.querySelectorAll("[data-copy-text]");
      copyElements.forEach((element) => {
        element.addEventListener("click", async (clickEvent) => {
          clickEvent.preventDefault();
          clickEvent.stopPropagation();
          const copyValue = element.dataset.copyText;
          if (!copyValue) {
            return;
          }

          try {
            await navigator.clipboard.writeText(copyValue);
            this.showCopyFeedback(element, copyValue);
          } catch (clipboardError) {
            console.warn(
              `Clipboard write failed: ${clipboardError.message}`
            );
          }
        });
      });
    } catch (handlerBindingError) {
      console.error(
        `Clipboard setup failure: ${handlerBindingError.message}`
      );
    }
  }

  // display animated confirmation when text is copied
  showCopyFeedback(triggerElement, copiedValue) {
    try {
      const textSpan = triggerElement.querySelector(".copy-btn-text");
      const originalText = textSpan ? textSpan.textContent : "";

      if (textSpan) {
        textSpan.textContent = "Copied!";
      }
      triggerElement.classList.add("is-copied");

      let toast = document.getElementById("copy-toast-feedback");
      if (!toast) {
        toast = this.createUiNode("div", "copy-toast");
        toast.id = "copy-toast-feedback";
        document.body.appendChild(toast);
      }

      toast.textContent = `✓ Copied "${copiedValue}" to clipboard`;
      toast.classList.add("is-visible");

      setTimeout(() => {
        if (textSpan) {
          textSpan.textContent = originalText;
        }
        triggerElement.classList.remove("is-copied");
      }, 2000);

      setTimeout(() => {
        if (toast) {
          toast.classList.remove("is-visible");
        }
      }, 2500);
    } catch (feedbackError) {
      console.error(
        `Feedback display failure: ${feedbackError.message}`
      );
    }
  }

  // backwards-compatible fallback for generic link collections
  renderLinkCollection(itemCollection, containerId) {
    try {
      const container = document.getElementById(containerId);
      if (!container) {
        return;
      }

      itemCollection.forEach((linkItem) => {
        const anchorNode = this.createUiNode("a", "");
        const labelWrapper = this.createUiNode("span", "");
        const titleText = linkItem.label || linkItem.name;
        const titleNode = this.createUiNode("strong", "", titleText);

        anchorNode.href = linkItem.url;
        labelWrapper.appendChild(titleNode);

        if (linkItem.meta) {
          const metaNode = this.createUiNode("small", "", linkItem.meta);
          labelWrapper.appendChild(metaNode);
        }

        if (
          linkItem.url.startsWith("http") ||
          linkItem.url.endsWith(".pdf")
        ) {
          anchorNode.target = "_blank";
          anchorNode.rel = "noopener noreferrer";
        }

        anchorNode.appendChild(labelWrapper);
        container.appendChild(anchorNode);
      });
    } catch (linkCollectionError) {
      console.error(
        `Link collection render failure: ${linkCollectionError.message}`
      );
    }
  }

  // backwards-compatible fallback for contact action buttons
  renderContactActions() {
    try {
      const container = document.getElementById("contact-actions");
      if (!container) {
        return;
      }

      this.model.contactLinks.forEach((contactItem) => {
        const linkNode = this.createUiNode("a", "contact-link");
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
        if (
          contactItem.url.startsWith("http") ||
          contactItem.url.endsWith(".pdf")
        ) {
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
        `Contact actions render failure: ${contactActionsError.message}`
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

      return "light";
    } catch (themeRetrievalError) {
      console.warn(
        `Could not retrieve stored theme: ` +
          `${themeRetrievalError.message}. Using default light theme.`
      );
      return "light";
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
      toggleIcon.textContent = isDarkTheme ? "☀" : "☾";
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
    // Initialize Vercel Web Analytics
    inject();
    
    const engine = new UiEngine(portfolioConfig);
    engine.initialize();
  } catch (criticalError) {
    console.error(
      `Fatal core engine execution failure: ${criticalError.message}`
    );
  }
})();
