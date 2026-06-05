const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const currentYear = document.querySelector("#currentYear");
const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const langButtons = document.querySelectorAll("[data-lang-option]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const quoteForm = document.querySelector("#quoteForm");
const instagramDirect = "https://www.instagram.com/direct/t/andrey.pradilosilva";
const storageKeys = {
  lang: "andreySystemsLang",
  theme: "andreySystemsTheme",
};

const translations = {
  pt: {
    themeToLight: "Alternar para modo claro",
    themeToDark: "Alternar para modo escuro",
    navServices: "Serviços",
    navProjects: "Projetos",
    navAbout: "Sobre",
    navContact: "Contato",
    navBudget: "Orçamento",
    navInstagram: "Chamar no Instagram",
    heroBadge: "Software sob medida",
    heroTitle: "Sites, ERPs e automações para empresas que querem crescer",
    heroText: "Criamos sites, sistemas e automações para empresas que querem sair das planilhas, organizar processos e vender com mais clareza.",
    heroPrimary: "Quero organizar minha empresa",
    heroSecondary: "Ver projetos",
    servicesKicker: "Serviços",
    servicesTitle: "Sites, sistemas e automações para organizar seu negócio.",
    servicesText: "Soluções práticas para empresas que ainda dependem de planilhas, WhatsApp solto e controles manuais.",
    trustKicker: "Por que escolher",
    trustTitle: "Desenvolvimento focado no problema real.",
    trustText: "Antes de criar telas, entendemos a rotina da empresa, os gargalos e o que precisa ficar mais simples.",
    processKicker: "Como funciona",
    processTitle: "Um caminho simples do problema à entrega.",
    processText: "Você chama no Instagram, explicamos o melhor caminho e desenvolvemos por etapas claras.",
    audienceKicker: "Para quem é",
    audienceTitle: "Para negócios que precisam parar de improvisar.",
    audienceText: "Pequenas empresas, prestadores de serviço, construção civil, academias, igrejas e operações presas em planilhas.",
    portfolioKicker: "Projetos",
    portfolioTitle: "Projetos com foco em organização e presença digital.",
    portfolioText: "Cases, templates e produtos digitais pensados para resolver problemas comerciais e operacionais.",
    erpCardCta: "Ver case ERP IMPPEL",
    directCta: "Chamar no Instagram",
    caseBadge: "Case principal",
    caseTitle: "ERP IMPPEL",
    caseText: "Sistema criado para centralizar informações, organizar módulos internos e dar mais controle a uma operação que dependia de processos manuais.",
    caseCta: "Quero um sistema parecido",
    resultsKicker: "Resultados",
    resultsTitle: "O resultado esperado é uma operação mais clara.",
    resultsText: "Sem promessas mágicas: o foco é reduzir bagunça, organizar dados e dar mais rastreabilidade para decisões.",
    aboutKicker: "Sobre",
    aboutTitle: "Andrey Fabrício",
    aboutText: "Criador da Andrey Systems. Desenvolvo sites, sistemas e automações para transformar processos manuais em soluções digitais simples, bonitas e funcionais.",
    founderKicker: "Quem é Andrey",
    founderBadge: "Fundador da Andrey Systems",
    founderText1: "Sou Andrey, fundador da Andrey Systems. Desenvolvo sistemas, ERPs, sites e automações focados em resolver problemas reais de empresas.",
    founderText2: "Meu objetivo é transformar processos manuais em operações organizadas e escaláveis, com soluções digitais simples, bonitas e funcionais.",
    developmentKicker: "Projetos em desenvolvimento",
    developmentTitle: "EntreosSalvos",
    developmentText: "Aplicativo focado em crescimento pessoal, hábitos, desafios e evolução diária.",
    feedbackKicker: "Feedbacks",
    feedbackTitle: "Avaliações com linguagem simples e direta.",
    feedbackText: "Relatos objetivos sobre organização, agilidade e entendimento do problema antes da entrega.",
    faqKicker: "Perguntas frequentes",
    quoteKicker: "Orçamento",
    quoteTitle: "Conte rapidamente o que você precisa.",
    quoteText: "Preencha as informações principais e continue a conversa no Instagram.",
    quoteButton: "Continuar no Instagram",
    finalBadge: "Contato",
    finalTitle: "Vamos organizar sua empresa com tecnologia?",
    finalPrimary: "Quero sair das planilhas",
    finalSecondary: "Chamar no Instagram",
    footerRight: "Sites, sistemas e automações",
    erpPageBadge: "Case ERP personalizado",
    erpPageTitle: "ERP IMPPEL operação conectada",
    erpPageText: "Sistema criado para centralizar processos internos, reduzir dependência de planilhas e conectar setores em um fluxo operacional mais claro.",
    erpPageCta: "Quero um ERP parecido",
    erpSecondary: "Chamar no Instagram",
    overviewTitle: "Visão geral",
    overviewText: "O ERP IMPPEL organiza uma operação com várias etapas internas, conectando atendimento, orçamento, execução, materiais, estoque, garantia e financeiro.",
    flowBadge: "Fluxo completo",
    flowTitle: "Do primeiro contato ao financeiro.",
    flowText: "Cada etapa conversa com a próxima, diminuindo perda de informação e dando mais rastreabilidade para a operação.",
  },
  en: {
    themeToLight: "Switch to light mode",
    themeToDark: "Switch to dark mode",
    navServices: "Services",
    navProjects: "Projects",
    navAbout: "About",
    navContact: "Contact",
    navBudget: "Budget",
    navInstagram: "Instagram",
    heroBadge: "Custom software",
    heroTitle: "Websites, ERPs and automation for companies ready to grow",
    heroText: "We build websites, systems and automations for companies ready to leave spreadsheets behind, organize processes and sell with more clarity.",
    heroPrimary: "Organize my company",
    heroSecondary: "View projects",
    servicesKicker: "Services",
    servicesTitle: "Websites, systems and automation to organize your business.",
    servicesText: "Practical solutions for companies still relying on spreadsheets, scattered WhatsApp messages and manual controls.",
    trustKicker: "Why choose us",
    trustTitle: "Development focused on the real problem.",
    trustText: "Before building screens, we understand the company routine, bottlenecks and what needs to become simpler.",
    processKicker: "How it works",
    processTitle: "A simple path from problem to delivery.",
    processText: "You message us on Instagram, we define the best path and build in clear stages.",
    audienceKicker: "Who it is for",
    audienceTitle: "For businesses that need to stop improvising.",
    audienceText: "Small companies, service providers, construction, gyms, churches and operations stuck in spreadsheets.",
    portfolioKicker: "Projects",
    portfolioTitle: "Projects focused on organization and digital presence.",
    portfolioText: "Cases, templates and digital products designed to solve commercial and operational problems.",
    erpCardCta: "View ERP IMPPEL case",
    directCta: "Message on Instagram",
    caseBadge: "Main case",
    caseTitle: "ERP IMPPEL",
    caseText: "A system created to centralize information, organize internal modules and give more control to an operation that relied on manual processes.",
    caseCta: "I want a similar system",
    resultsKicker: "Results",
    resultsTitle: "The expected result is a clearer operation.",
    resultsText: "No magic promises: the focus is reducing mess, organizing data and creating more traceability for decisions.",
    aboutKicker: "About",
    aboutTitle: "Andrey Fabrício",
    aboutText: "Creator of Andrey Systems. I develop websites, systems and automations to turn manual processes into simple, beautiful and functional digital solutions.",
    founderKicker: "Who is Andrey",
    founderBadge: "Founder of Andrey Systems",
    founderText1: "I am Andrey, founder of Andrey Systems. I develop systems, ERPs, websites and automations focused on solving real business problems.",
    founderText2: "My goal is to transform manual processes into organized and scalable operations with simple, beautiful and functional digital solutions.",
    developmentKicker: "Projects in development",
    developmentTitle: "EntreosSalvos",
    developmentText: "App focused on personal growth, habits, challenges and daily evolution.",
    feedbackKicker: "Feedback",
    feedbackTitle: "Simple and direct client-style feedback.",
    feedbackText: "Objective notes about organization, agility and understanding the problem before delivery.",
    faqKicker: "Frequently asked questions",
    quoteKicker: "Budget",
    quoteTitle: "Tell us what you need.",
    quoteText: "Fill in the main details and continue the conversation on Instagram.",
    quoteButton: "Continue on Instagram",
    finalBadge: "Contact",
    finalTitle: "Let’s organize your company with technology.",
    finalPrimary: "Move out of spreadsheets",
    finalSecondary: "Message on Instagram",
    footerRight: "Websites, systems and automation",
    erpPageBadge: "Custom ERP case",
    erpPageTitle: "ERP IMPPEL connected operation",
    erpPageText: "A system created to centralize internal processes, reduce spreadsheet dependency and connect departments in a clearer operational flow.",
    erpPageCta: "I want a similar ERP",
    erpSecondary: "Message on Instagram",
    overviewTitle: "Overview",
    overviewText: "ERP IMPPEL organizes an operation with multiple internal stages, connecting service, budget, execution, materials, inventory, warranty and finance.",
    flowBadge: "Complete flow",
    flowTitle: "From first contact to finance.",
    flowText: "Each stage connects to the next, reducing information loss and creating more traceability for the operation.",
  },
};

const setText = (selector, text, root = document) => {
  const element = root.querySelector(selector);
  if (element && text) element.textContent = text;
};

const setAllText = (selector, values, root = document) => {
  const elements = [...root.querySelectorAll(selector)];
  elements.forEach((element, index) => {
    if (values[index]) element.textContent = values[index];
  });
};

const applyTheme = (theme) => {
  const nextTheme = theme === "light" ? "light" : "dark";
  const lang = localStorage.getItem(storageKeys.lang) || "pt";
  const copy = translations[lang] || translations.pt;

  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem(storageKeys.theme, nextTheme);

  if (themeToggle) {
    const icon = nextTheme === "light" ? "☾" : "☀";
    themeToggle.innerHTML = `<span aria-hidden="true">${icon}</span>`;
    themeToggle.setAttribute("aria-label", nextTheme === "light" ? copy.themeToDark : copy.themeToLight);
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
  setText("#servicos .section-kicker p", copy.servicesKicker);
  setText("#servicos .section-heading h2", copy.servicesTitle);
  setText("#servicos .section-heading p", copy.servicesText);
  setText("#diferenciais .section-kicker p", copy.trustKicker);
  setText("#diferenciais .section-heading h2", copy.trustTitle);
  setText("#diferenciais .section-heading p", copy.trustText);
  setText("#processo .section-kicker p", copy.processKicker);
  setText("#processo .section-heading h2", copy.processTitle);
  setText("#processo .section-heading p", copy.processText);
  setText("#para-quem .section-kicker p", copy.audienceKicker);
  setText("#para-quem .section-heading h2", copy.audienceTitle);
  setText("#para-quem .section-heading p", copy.audienceText);
  setText("#portfolio .section-kicker p", copy.portfolioKicker);
  setText("#portfolio .work-heading h2", copy.portfolioTitle);
  setText("#portfolio .work-heading p", copy.portfolioText);
  setText(".media-imppel + .project-meta a", copy.erpCardCta);
  setAllText("#portfolio .project-meta a[target]", [copy.directCta, copy.directCta, copy.directCta, copy.directCta]);
  setText("#case .eyebrow", copy.caseBadge);
  setText("#case .case-heading h2", copy.caseTitle);
  setText("#case .case-heading > p:not(.eyebrow)", copy.caseText);
  setText("#case .case-cta .button", copy.caseCta);
  setText("#resultados .section-kicker p", copy.resultsKicker);
  setText("#resultados .section-heading h2", copy.resultsTitle);
  setText("#resultados .section-heading p", copy.resultsText);
  setText("#sobre .section-kicker p", copy.aboutKicker);
  setText("#sobre .about-copy h2", copy.aboutTitle);
  setText("#sobre .about-copy p", copy.aboutText);
  setText("#quem-e-andrey .section-kicker p", copy.founderKicker);
  setText(".founder-copy .eyebrow", copy.founderBadge);
  setAllText(".founder-copy > p:not(.eyebrow)", [copy.founderText1, copy.founderText2]);
  setText("#em-desenvolvimento .section-kicker p", copy.developmentKicker);
  setText("#em-desenvolvimento h2", copy.developmentTitle);
  setText("#em-desenvolvimento .development-card p", copy.developmentText);
  setText("#feedbacks .section-kicker p", copy.feedbackKicker);
  setText("#feedbacks .section-heading h2", copy.feedbackTitle);
  setText("#feedbacks .section-heading p", copy.feedbackText);
  setText("#faq .section-kicker p", copy.faqKicker);
  setText("#orcamento .section-kicker p", copy.quoteKicker);
  setText("#orcamento .section-heading h2", copy.quoteTitle);
  setText("#orcamento .section-heading p", copy.quoteText);
  setText("#quoteForm button", copy.quoteButton);
  setText("#contato .eyebrow", copy.finalBadge);
  setText("#contato h2", copy.finalTitle);
  setText("#contato .button.primary", copy.finalPrimary);
  setText("#contato .button.secondary", copy.finalSecondary);
  setText(".site-footer span:last-child", copy.footerRight);
  setText(".case-page-copy .eyebrow", copy.erpPageBadge);
  setText(".case-page-copy h1", copy.erpPageTitle);
  setText(".case-page-copy > p:not(.eyebrow)", copy.erpPageText);
  setText(".case-page-copy .button.primary", copy.erpPageCta);
  setText(".final-cta .button.secondary", copy.erpSecondary);
  setText(".case-detail-section .section-heading h2", copy.overviewTitle);
  setText(".case-detail-section .section-heading p", copy.overviewText);
  setText(".case-flow-copy .eyebrow", copy.flowBadge);
  setText(".case-flow-copy h3", copy.flowTitle);
  setText(".case-flow-copy p:not(.eyebrow)", copy.flowText);

  langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.langOption === lang);
  });
  localStorage.setItem(storageKeys.lang, lang);
  applyTheme(localStorage.getItem(storageKeys.theme) || "dark");
};

document.body.classList.remove("is-loading");
document.body.classList.add("is-ready");

if (currentYear) currentYear.textContent = new Date().getFullYear();

navToggle?.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

langButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.langOption || "pt"));
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
  { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
);

document.querySelectorAll(".reveal").forEach((element) => {
  const rect = element.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.92) element.classList.add("is-visible");
  observer.observe(element);
});

const parallaxElements = Array.from(document.querySelectorAll(".parallax-slow"));
let ticking = false;

const updateParallax = () => {
  ticking = false;
  if (motionQuery.matches) return;

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

quoteForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  window.open(instagramDirect, "_blank", "noopener,noreferrer");
});

applyTheme(localStorage.getItem(storageKeys.theme) || "dark");
applyLanguage(localStorage.getItem(storageKeys.lang) || "pt");
