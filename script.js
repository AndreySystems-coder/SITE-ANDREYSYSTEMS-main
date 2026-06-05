const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const currentYear = document.querySelector("#currentYear");
const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const langButtons = document.querySelectorAll("[data-lang-option]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const storageKeys = {
  lang: "andreySystemsLang",
  theme: "andreySystemsTheme",
};

document.body.classList.remove("is-loading");
document.body.classList.add("is-ready");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

if (navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

const translations = {
  pt: {
    themeLight: "Claro",
    themeDark: "Escuro",
    navServices: "Serviços",
    navProjects: "Projetos",
    navAbout: "Sobre",
    navContact: "Contato",
    navBudget: "Orçamento",
    navInstagram: "Chamar no Instagram",
    heroBadge: "Software sob medida",
    heroTitle: "Sites, ERPs\ne automações\npara empresas que\nquerem crescer",
    heroText: "Transformo processos manuais em sistemas digitais simples, bonitos e funcionais.",
    heroPrimary: "Quero organizar minha empresa",
    heroSecondary: "Ver Projetos",
    servicesTitle: "Estratégia, visual e operação em um só lugar.",
    servicesText: "Sites, sistemas e automações para empresas que querem sair de planilhas, WhatsApp bagunçado e processos manuais.",
    portfolioTitle: "Work",
    portfolioText: "Projetos e modelos pensados para mostrar clareza, organização e resultado comercial.",
    imppelTitle: "ERP IMPPEL",
    imppelText: "Um ERP criado para centralizar informações, organizar módulos internos e dar mais controle para uma operação que dependia de processos manuais.",
    imppelCta: "Quero um sistema para meu negócio",
    processTitle: "Um processo simples para sair da ideia e chegar na entrega.",
    processText: "Você chama no Instagram, eu entendo o problema, organizo o caminho e desenvolvo a solução por etapas.",
    faqTitle: "Perguntas frequentes",
    quoteTitle: "Conte rapidamente o que você precisa.",
    quoteText: "Preencha as informações principais e continue a conversa no Instagram.",
    quoteButton: "Continuar no Instagram",
    finalTitle: "Vamos construir algo que organize sua empresa?",
    finalPrimary: "Quero tirar minha empresa das planilhas",
    finalSecondary: "Chamar no Instagram",
    feedbackTitle: "Confiança começa com processos mais claros.",
    feedbackText: "Depoimentos temporários para representar o tipo de resultado buscado. Substituir por feedbacks reais quando os clientes autorizarem.",
    erpPageTitle: "ERP IMPPEL\noperação conectada",
    erpPageText: "Sistema criado para centralizar processos internos, reduzir dependência de planilhas e conectar setores em um fluxo operacional mais claro.",
    erpPageCta: "Quero um ERP parecido",
  },
  en: {
    themeLight: "Light",
    themeDark: "Dark",
    navServices: "Services",
    navProjects: "Projects",
    navAbout: "About",
    navContact: "Contact",
    navBudget: "Budget",
    navInstagram: "Instagram",
    heroBadge: "Custom software",
    heroTitle: "Websites, ERPs\nand automation\nfor companies\nready to grow",
    heroText: "I turn manual processes into simple, beautiful and functional digital systems.",
    heroPrimary: "Organize my company",
    heroSecondary: "View Projects",
    servicesTitle: "Strategy, design and operations in one place.",
    servicesText: "Websites, systems and automations for companies ready to leave spreadsheets, messy WhatsApp flows and manual work behind.",
    portfolioTitle: "Work",
    portfolioText: "Projects and templates built to show clarity, organization and business results.",
    imppelTitle: "ERP IMPPEL",
    imppelText: "An ERP built to centralize information, organize internal modules and give more control to an operation that relied on manual processes.",
    imppelCta: "I want a system for my business",
    processTitle: "A simple process from idea to delivery.",
    processText: "You message me on Instagram, I understand the problem, organize the path and build the solution in stages.",
    faqTitle: "Frequently asked questions",
    quoteTitle: "Tell me what you need.",
    quoteText: "Fill in the main details and continue the conversation on Instagram.",
    quoteButton: "Continue on Instagram",
    finalTitle: "Let’s build something that organizes your company.",
    finalPrimary: "Move my company out of spreadsheets",
    finalSecondary: "Message on Instagram",
    feedbackTitle: "Trust starts with clearer processes.",
    feedbackText: "Temporary testimonials representing the type of outcome expected. Replace with real authorized feedback later.",
    erpPageTitle: "ERP IMPPEL\nconnected operation",
    erpPageText: "A system created to centralize internal processes, reduce spreadsheet dependency and connect departments in a clearer operational flow.",
    erpPageCta: "I want a similar ERP",
  },
};

const setText = (selector, text) => {
  const element = document.querySelector(selector);
  if (element && text) {
    element.textContent = text;
  }
};

const applyLanguage = (lang) => {
  const copy = translations[lang] || translations.pt;
  document.documentElement.lang = lang === "en" ? "en" : "pt-BR";

  setText('.site-nav a[href="#servicos"], .site-nav a[href="../../#servicos"]', copy.navServices);
  setText('.site-nav a[href="#portfolio"], .site-nav a[href="../../#portfolio"]', copy.navProjects);
  setText('.site-nav a[href="#sobre"]', copy.navAbout);
  setText('.site-nav a[href="#orcamento"], .site-nav a[href="../../#orcamento"]', copy.navBudget);
  setText('.site-nav a[href*="instagram.com"]:not(.nav-cta)', copy.navContact);
  setText(".site-nav .nav-cta", copy.navInstagram);
  setText(".hero-content .eyebrow", copy.heroBadge);
  setText(".tech-hero h1", copy.heroTitle);
  setText(".hero-content > p:not(.eyebrow)", copy.heroText);
  setText(".hero-actions .button.primary", copy.heroPrimary);
  setText(".hero-actions .button.secondary", copy.heroSecondary);
  setText("#servicos .section-heading h2", copy.servicesTitle);
  setText("#servicos .section-heading p", copy.servicesText);
  setText("#portfolio .work-heading h2", copy.portfolioTitle);
  setText("#portfolio .work-heading p", copy.portfolioText);
  setText("#case .case-heading h2", copy.imppelTitle);
  setText("#case .case-heading > p:not(.eyebrow)", copy.imppelText);
  setText("#case .case-cta .button", copy.imppelCta);
  setText("#processo .section-heading h2", copy.processTitle);
  setText("#processo .section-heading p", copy.processText);
  setText("#feedbacks .section-heading h2", copy.feedbackTitle);
  setText("#feedbacks .section-heading p", copy.feedbackText);
  setText("#faq .section-kicker p", copy.faqTitle);
  setText("#orcamento .section-heading h2", copy.quoteTitle);
  setText("#orcamento .section-heading p", copy.quoteText);
  setText("#quoteForm button", copy.quoteButton);
  setText("#contato h2", copy.finalTitle);
  setText("#contato .button.primary", copy.finalPrimary);
  setText("#contato .button.secondary", copy.finalSecondary);
  setText(".case-page-copy h1", copy.erpPageTitle);
  setText(".case-page-copy > p:not(.eyebrow)", copy.erpPageText);
  setText(".case-page-copy .button.primary", copy.erpPageCta);

  langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.langOption === lang);
  });
  localStorage.setItem(storageKeys.lang, lang);
};

const applyTheme = (theme) => {
  const nextTheme = theme === "light" ? "light" : "dark";
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem(storageKeys.theme, nextTheme);

  if (themeToggle) {
    const lang = localStorage.getItem(storageKeys.lang) || "pt";
    const copy = translations[lang] || translations.pt;
    themeToggle.textContent = nextTheme === "light" ? copy.themeDark : copy.themeLight;
  }
};

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.langOption || "pt");
    applyTheme(localStorage.getItem(storageKeys.theme) || "dark");
  });
});

themeToggle?.addEventListener("click", () => {
  const currentTheme = document.documentElement.dataset.theme || "dark";
  applyTheme(currentTheme === "light" ? "dark" : "light");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      } else if (entry.boundingClientRect.top > 0) {
        entry.target.classList.remove("is-visible");
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  const rect = element.getBoundingClientRect();

  if (rect.top < window.innerHeight * 0.92) {
    element.classList.add("is-visible");
    return;
  }

  observer.observe(element);
});

const parallaxElements = Array.from(document.querySelectorAll(".parallax-slow"));
let ticking = false;

const updateParallax = () => {
  ticking = false;

  if (motionQuery.matches) {
    return;
  }

  const viewportCenter = window.innerHeight / 2;

  parallaxElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const elementCenter = rect.top + rect.height / 2;
    const distance = elementCenter - viewportCenter;
    const offset = Math.max(-18, Math.min(18, distance * -0.035));
    element.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`);
  });
};

const requestParallax = () => {
  if (!ticking) {
    window.requestAnimationFrame(updateParallax);
    ticking = true;
  }
};

if (parallaxElements.length) {
  updateParallax();
  window.addEventListener("scroll", requestParallax, { passive: true });
  window.addEventListener("resize", requestParallax);
}

const quoteForm = document.querySelector("#quoteForm");
const instagramDirect = "https://www.instagram.com/direct/t/andrey.pradilosilva";

if (quoteForm) {
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    window.open(instagramDirect, "_blank", "noopener,noreferrer");
  });
}

applyTheme(localStorage.getItem(storageKeys.theme) || "dark");
applyLanguage(localStorage.getItem(storageKeys.lang) || "pt");
