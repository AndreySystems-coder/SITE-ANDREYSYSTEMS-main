const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const currentYear = document.querySelector("#currentYear");
const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const langButtons = document.querySelectorAll("[data-lang-option]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const quoteForm = document.querySelector("#quoteForm");
const instagramDirect = "https://www.instagram.com/direct/t/andreyfabricio_";
const quoteEmail = "orcamento@andrey.systems"; // Trocar se o e-mail oficial de orçamento mudar.
const quoteEmailLink = document.querySelector("#quoteEmailLink");
const quoteMessage = document.querySelector("#quoteMessage");
const quoteMessageText = document.querySelector("#quoteMessageText");
const quoteCopyButton = document.querySelector("#quoteCopyButton");
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
    heroPrimary: "Chamar no Instagram",
    heroSecondary: "Solicitar orçamento",
    heroProofTitle: "Projeto real desenvolvido para a IMPPEL",
    heroProofText: "ERP com CRM, orçamentos, ordens de serviço, materiais, estoque, financeiro, garantias, permissões por cargo e backup.",
    heroChips: ["Websites", "Sistemas sob medida", "ERP Empresarial", "Automação de Processos", "Consultoria Operacional"],
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
    caseText: "O ERP IMPPEL foi desenvolvido para centralizar processos internos de uma empresa real: clientes, orçamentos, ordens de serviço, materiais, estoque, financeiro e pós-venda.",
    caseCta: "Solicitar orçamento",
    resultsKicker: "Resultados",
    resultsTitle: "O resultado esperado é uma operação mais clara.",
    resultsText: "Sem promessas mágicas: o foco é reduzir bagunça, organizar dados e dar mais rastreabilidade para decisões.",
    aboutKicker: "Sobre",
    aboutTitle: "Andrey Fabrício",
    aboutText: "Criador da Andrey Systems. Desenvolvo sites, sistemas e automações para transformar processos manuais em soluções digitais simples, bonitas e funcionais.",
    founderKicker: "Sobre Andrey",
    founderBadge: "Fundador da Andrey Systems",
    founderText1: "Sou Andrey, fundador da Andrey Systems. Crio sites, sistemas, ERPs e automações para transformar operações manuais em soluções digitais claras, bonitas e funcionais.",
    founderText2: "A Andrey Systems nasceu para ajudar pequenas empresas a ganhar presença, controle e confiança com tecnologia sob medida, sem depender de improviso, planilhas soltas ou processos difíceis de acompanhar.",
    founderHighlights: ["ERP IMPPEL", "Entreosalvos", "Sites profissionais", "Automações"],
    developmentKicker: "Projetos em desenvolvimento",
    developmentTitle: "Entreosalvos",
    developmentText: "Aplicativo focado em crescimento pessoal, hábitos, desafios e evolução diária.",
    feedbackKicker: "Evidências",
    feedbackTitle: "Evidências do trabalho.",
    feedbackText: "Provas honestas do que já foi construído, sem depoimentos genéricos ou promessas inventadas.",
    faqKicker: "Perguntas frequentes",
    quoteKicker: "Orçamento",
    quoteTitle: "Conte rapidamente o que você precisa.",
    quoteText: "Preencha as informações principais. O site monta uma mensagem pronta para você chamar no Instagram ou enviar por e-mail.",
    quoteButton: "Chamar no Instagram",
    quoteEmailButton: "Enviar por e-mail",
    quoteMessageTitle: "Mensagem pronta para copiar",
    quoteCopyButton: "Copiar mensagem",
    quoteCopied: "Mensagem pronta copiada. Se o Direct não abrir com texto preenchido, cole a mensagem na conversa.",
    quoteTemplate: ({ nome, empresa, contato, tipo, problema, prazo }) => `Olá, Andrey! Quero conversar sobre um projeto.

Nome: ${nome}
Empresa: ${empresa}
Contato: ${contato}
Tipo de projeto: ${tipo}
Problema atual: ${problema}
Prazo desejado: ${prazo}

Vi seu site da Andrey Systems e gostaria de um direcionamento.`,
    finalBadge: "Contato",
    finalTitle: "Vamos organizar sua empresa com tecnologia?",
    finalPrimary: "Chamar no Instagram",
    finalSecondary: "Solicitar orçamento",
    footerContact: "Andrey Systems · @andreyfabricio_ · orcamento@andrey.systems",
    footerRight: "Sites, sistemas e automações",
    footerLegal: "Todos os direitos reservados.",
    servicesCards: [
      ["01", "Sites profissionais", "Para empresas que precisam parecer confiáveis e transformar visitantes em contatos.", "Resultado: presença digital clara, bonita e pronta para vender."],
      ["02", "Landing pages", "Para campanhas, bio do Instagram, lançamentos e serviços com chamada direta.", "Resultado: página objetiva para gerar conversas e pedidos de orçamento."],
      ["03", "ERPs personalizados", "Para negócios que precisam controlar estoque, pedidos, produção e relatórios.", "Resultado: operação mais organizada e menos dependente de improviso."],
      ["04", "Automações", "Para empresas que repetem tarefas, copiam dados e perdem tempo em processos manuais.", "Resultado: menos retrabalho e mais velocidade na rotina."],
      ["05", "Manutenção mensal", "Para quem já tem site ou sistema e precisa de ajustes, melhorias e acompanhamento.", "Resultado: evolução contínua sem deixar o projeto parado."],
      ["06", "Consultoria empresarial", "Para quem sabe que a operação está confusa, mas ainda não sabe o que construir.", "Resultado: clareza sobre processos, prioridades e solução ideal."],
    ],
    trustCards: [
      ["Soluções personalizadas", "Cada projeto nasce do problema real da empresa, sem encaixar o negócio em um modelo pronto."],
      ["Problemas reais", "O desenvolvimento prioriza organização, clareza operacional e melhorias que fazem diferença na rotina."],
      ["ERP em ambiente real", "O ERP IMPPEL demonstra experiência prática com módulos, fluxos e necessidades de uma operação em uso."],
      ["Setores integrados", "CRM, orçamento, estoque, financeiro e pós-venda podem conversar dentro do mesmo fluxo."],
      ["Pós-entrega", "O projeto continua acompanhado para ajustes, evolução e correções conforme o uso real aparece."],
      ["Evolução contínua", "Sites e sistemas são pensados para receber novas páginas, módulos e automações com menos atrito."],
    ],
    processCards: [
      ["01", "Você chama no Instagram", "A conversa começa com o contexto do negócio, o problema atual e o objetivo da solução."],
      ["02", "Mapeamos o caminho", "Organizamos prioridades, páginas, módulos, fluxos e o que precisa ser entregue primeiro."],
      ["03", "Construção e ajustes", "A solução é criada com visual profissional, estrutura clara e foco em uso real."],
      ["04", "Entrega e evolução", "Depois da entrega, o projeto pode evoluir com novas telas, conteúdos ou automações."],
    ],
    audienceCards: ["Pequenas empresas", "Prestadores de serviço", "Construção civil", "Academias e Muay Thai", "Igrejas e comunidades", "Negócios presos em planilhas e WhatsApp"],
    projectTags: [
      "ERP personalizado · operação interna",
      "SaaS · em desenvolvimento",
      "Template de segmento · orçamento e obras",
      "Template demonstrativo · captação fitness",
      "Template demonstrativo · agenda e comunidade",
    ],
    projectTitles: ["ERP IMPPEL", "Entreosalvos", "Template Construção Civil", "Template Academia", "Template Igreja"],
    projectBadges: ["ERP IMPPEL", "SaaS em desenvolvimento", "Construção", "Fitness", "Comunidade"],
    projectDescriptions: [
      "Sistema para centralizar processos, módulos e acompanhamento operacional.",
      "Plataforma focada em hábitos, rotina, disciplina e desenvolvimento pessoal.",
      "Site profissional para construtoras, empreiteiras e empresas de impermeabilização.",
      "Site para academias, personal trainers e negócios fitness.",
      "Site institucional para igrejas, eventos, ministérios e comunicação.",
    ],
    projectProblems: [
      "Resolve: controles manuais, dados espalhados e falta de visão da operação.",
      "Resolve: dificuldade de manter constância, acompanhar evolução e estruturar rotina.",
      "Resolve: apresentação de serviços, obras, diferenciais e chamadas para orçamento.",
      "Resolve: comunicação de planos, aulas, horários e captação de novos alunos.",
      "Resolve: centralização de eventos, ministérios, mensagens e canais de contato.",
    ],
    projectDetails: [
      "Status: em uso interno · Tecnologias: React, TypeScript, Node.js",
      "Status: em desenvolvimento · Categoria: SaaS · Tecnologias: React, Node.js",
      "Status: template demonstrativo · Público: construção civil",
      "Status: template demonstrativo · Público: academias e fitness",
      "Status: template demonstrativo · Público: igrejas e comunidades",
    ],
    projectDirectCtas: ["Chamar no Instagram", "Chamar no Instagram", "Chamar no Instagram", "Chamar no Instagram"],
    templatePreviews: [
      ["Obras & Impermeabilização", "Orçamento técnico em até 24h", "Solicitar orçamento"],
      ["Treino forte, rotina clara", "Planos, horários e matrícula online", "Começar agora"],
      ["Comunidade, cultos e eventos", "Agenda, ministérios e pedidos de oração", "Ver programação"],
    ],
    templateChips: [
      ["Laudos", "Reformas", "Obras"],
      ["Mensal", "Personal"],
      ["Cultos", "Eventos", "Oração"],
    ],
    caseFlowBadge: "Fluxo operacional",
    caseFlowTitle: "Da entrada do pedido ao acompanhamento.",
    caseFlowText: "O ERP foi pensado para conectar etapas que antes ficavam separadas. A empresa passa a ter um caminho mais claro para registrar, acompanhar e consultar informações.",
    caseCaption: "Sistema completo para gestão de obras, materiais, estoque, clientes, financeiro e pós-venda.",
    caseGrid: [
      ["01", "Problema", "Informações espalhadas, controles manuais e baixa visibilidade sobre etapas internas."],
      ["02", "Solução", "ERP sob medida com fluxos conectados, módulos objetivos e navegação simples."],
      ["03", "Módulos", "Mais de 7 módulos conectando CRM, orçamentos, OS, materiais, estoque, garantia e financeiro."],
      ["04", "Resultado", "Mais controle, menos retrabalho e uma operação preparada para crescer com organização."],
    ],
    timelineItems: ["CRM", "Orçamento", "OS", "Materiais", "Estoque", "Garantia", "Financeiro", "Permissões", "Backup"],
    caseProof: [
      ["Tecnologias", "React, TypeScript, Node.js, rotas internas, componentes reutilizáveis e estrutura modular."],
      ["Integrações", "CRM, orçamento, OS, materiais, estoque, garantia e financeiro trabalhando em fluxo conectado."],
      ["Maturidade", "Projeto pensado para operação real, evolução contínua e inclusão de novos módulos."],
    ],
    resultItems: ["Centralização de processos", "Redução de planilhas", "Controle de estoque integrado", "Fluxo operacional conectado", "Histórico rastreável"],
    developmentStatus: "Status: Em desenvolvimento",
    developmentPreviewLabel: "Prévias reais do Entreosalvos",
    evidenceCards: [
      ["01", "ERP IMPPEL", "Sistema real criado para organizar operação, estoque, materiais, orçamentos e financeiro."],
      ["02", "Site Andrey Systems", "Portfólio próprio criado para apresentar serviços, projetos e formas de contato."],
      ["03", "Entreosalvos", "Produto próprio em desenvolvimento, usado como laboratório de SaaS, rotina e experiência digital."],
    ],
    faqItems: [
      ["Quanto custa um sistema?", "Depende dos módulos, integrações e nível de personalização. O orçamento começa depois de entender o problema."],
      ["Quanto tempo leva?", "Sites e landing pages tendem a ser mais rápidos. Sistemas e ERPs exigem planejamento por etapas."],
      ["Você faz manutenção?", "Sim. É possível combinar ajustes, melhorias e acompanhamento mensal após a entrega."],
      ["Posso pedir novas funções?", "Sim. A ideia é que o sistema possa evoluir com novos módulos, regras e fluxos conforme a empresa cresce."],
      ["O sistema é personalizado?", "Sim. O desenvolvimento é pensado para a rotina do negócio, evitando soluções genéricas que não encaixam na operação."],
    ],
    quoteLabels: ["Nome", "Empresa", "E-mail ou telefone", "Tipo de projeto", "Principal problema atual", "Prazo desejado"],
    quotePlaceholders: ["Ex.: e-mail, WhatsApp ou telefone", "Ex.: processos em planilhas, estoque sem controle, site antigo...", "Ex.: este mês, próximo trimestre, sem prazo definido"],
    quoteOptions: ["Site profissional", "Landing page", "ERP personalizado", "Sistema sob medida", "Automação", "Consultoria"],
    contactSecondary: "Solicitar orçamento",
    contactTertiary: "",
    erpPageBadge: "Case ERP personalizado",
    erpPageTitle: "ERP IMPPEL operação conectada",
    erpPageText: "Sistema criado para centralizar processos internos, reduzir dependência de planilhas e conectar setores em um fluxo operacional mais claro.",
    erpPageCta: "Solicitar orçamento",
    erpSecondary: "Chamar no Instagram",
    erpOtherProjects: "Ver outros projetos",
    erpFooterRight: "Case ERP IMPPEL",
    erpGalleryLabel: "Galeria de telas reais do ERP IMPPEL",
    erpGalleryCaptions: ["Login seguro", "Estoque integrado", "Orçamentos e clientes"],
    erpDetailCards: [
      ["Antes", "Problema", "Processos distribuídos, controles manuais e dificuldade de acompanhar histórico e etapas."],
      ["Depois", "Solução", "ERP personalizado com módulos conectados, navegação objetiva e fluxo operacional rastreável."],
      ["Módulos", "Principais áreas", "CRM, orçamento, OS, materiais, estoque, garantia, financeiro, relatórios e acompanhamento."],
      ["Resultado", "Operação", "Centralização de processos, redução de planilhas e mais clareza para decisões internas."],
    ],
    erpPageFinalBadge: "Próximo passo",
    erpPageFinalTitle: "Quer um sistema para organizar sua empresa?",
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
    heroPrimary: "Message on Instagram",
    heroSecondary: "Request a quote",
    heroProofTitle: "Real project developed for IMPPEL",
    heroProofText: "ERP with CRM, quotes, work orders, materials, inventory, finance, warranties, role permissions and backup.",
    heroChips: ["Websites", "Custom Software", "Business ERP", "Process Automation", "Operational Consulting"],
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
    caseText: "ERP IMPPEL was developed to centralize internal processes for a real company: clients, quotes, work orders, materials, inventory, finance and after-sales.",
    caseCta: "Request a quote",
    resultsKicker: "Results",
    resultsTitle: "The expected result is a clearer operation.",
    resultsText: "No magic promises: the focus is reducing mess, organizing data and creating more traceability for decisions.",
    aboutKicker: "About",
    aboutTitle: "Andrey Fabrício",
    aboutText: "Creator of Andrey Systems. I develop websites, systems and automations to turn manual processes into simple, beautiful and functional digital solutions.",
    founderKicker: "About Andrey",
    founderBadge: "Founder of Andrey Systems",
    founderText1: "I am Andrey, founder of Andrey Systems. I build websites, systems, ERPs and automations to turn manual operations into clear, polished and functional digital solutions.",
    founderText2: "Andrey Systems was created to help small businesses gain presence, control and confidence with custom technology, without depending on improvisation, scattered spreadsheets or hard-to-track processes.",
    founderHighlights: ["ERP IMPPEL", "Entreosalvos", "Professional websites", "Automations"],
    developmentKicker: "Projects in development",
    developmentTitle: "Entreosalvos",
    developmentText: "App focused on personal growth, habits, challenges and daily evolution.",
    feedbackKicker: "Evidence",
    feedbackTitle: "Evidence of the work.",
    feedbackText: "Honest proof of what has already been built, without generic testimonials or invented promises.",
    faqKicker: "Frequently asked questions",
    quoteKicker: "Budget",
    quoteTitle: "Tell us what you need.",
    quoteText: "Fill in the main details. The site creates a ready-to-send message for Instagram or email.",
    quoteButton: "Message on Instagram",
    quoteEmailButton: "Send by email",
    quoteMessageTitle: "Ready message to copy",
    quoteCopyButton: "Copy message",
    quoteCopied: "Ready message copied. If Direct does not open with pre-filled text, paste the message into the conversation.",
    quoteTemplate: ({ nome, empresa, contato, tipo, problema, prazo }) => `Hi, Andrey! I want to talk about a project.

Name: ${nome}
Company: ${empresa}
Contact: ${contato}
Project type: ${tipo}
Current problem: ${problema}
Desired timeline: ${prazo}

I saw the Andrey Systems website and would like some direction.`,
    finalBadge: "Contact",
    finalTitle: "Let’s organize your company with technology.",
    finalPrimary: "Message on Instagram",
    finalSecondary: "Request a quote",
    footerContact: "Andrey Systems · @andreyfabricio_ · orcamento@andrey.systems",
    footerRight: "Websites, systems and automation",
    footerLegal: "All rights reserved.",
    servicesCards: [
      ["01", "Professional websites", "For companies that need to look trustworthy and turn visitors into qualified contacts.", "Outcome: a clear, polished digital presence ready to sell."],
      ["02", "Landing pages", "For campaigns, Instagram bios, launches and services with a direct call to action.", "Outcome: a focused page built to generate conversations and quote requests."],
      ["03", "Custom ERPs", "For businesses that need to control inventory, orders, production and reports.", "Outcome: a more organized operation with less improvisation."],
      ["04", "Automations", "For companies repeating tasks, copying data and losing time in manual processes.", "Outcome: less rework and more speed in daily operations."],
      ["05", "Monthly maintenance", "For teams that already have a website or system and need adjustments, improvements and support.", "Outcome: continuous evolution without leaving the project idle."],
      ["06", "Business consulting", "For companies that know the operation is messy but do not yet know what to build.", "Outcome: clarity around processes, priorities and the ideal solution."],
    ],
    trustCards: [
      ["Custom solutions", "Each project starts from the company’s real problem instead of forcing the business into a ready-made model."],
      ["Real problem focus", "Development prioritizes organization, operational clarity and improvements that matter in daily work."],
      ["ERP used in a real environment", "ERP IMPPEL shows practical experience with modules, flows and the needs of an active operation."],
      ["Connected departments", "CRM, quotes, inventory, finance and after-sales can work together inside the same flow."],
      ["Post-delivery support", "The project stays supported for adjustments, evolution and fixes as real usage reveals new needs."],
      ["Continuous evolution", "Websites and systems are planned to receive new pages, modules and automations with less friction."],
    ],
    processCards: [
      ["01", "You message us on Instagram", "The conversation starts with business context, the current problem and the goal of the solution."],
      ["02", "We map the path", "We organize priorities, pages, modules, flows and what needs to be delivered first."],
      ["03", "Build and refine", "The solution is created with a professional visual system, clear structure and real-use focus."],
      ["04", "Delivery and evolution", "After delivery, the project can evolve with new screens, content or automations."],
    ],
    audienceCards: ["Small businesses", "Service providers", "Construction companies", "Gyms and Muay Thai", "Churches and communities", "Businesses stuck in spreadsheets and WhatsApp"],
    projectTags: [
      "Custom ERP · internal operation",
      "SaaS · in development",
      "Industry template · quotes and construction",
      "Demo template · fitness acquisition",
      "Demo template · events and community",
    ],
    projectTitles: ["ERP IMPPEL", "Entreosalvos", "Construction Template", "Gym Template", "Church Template"],
    projectBadges: ["ERP IMPPEL", "SaaS in development", "Construction", "Fitness", "Community"],
    projectDescriptions: [
      "System to centralize processes, modules and operational tracking.",
      "Platform focused on habits, routine, discipline and personal development.",
      "Professional website for builders, contractors and waterproofing companies.",
      "Website for gyms, personal trainers and fitness businesses.",
      "Institutional website for churches, events, ministries and communication.",
    ],
    projectProblems: [
      "Solves: manual controls, scattered data and lack of operational visibility.",
      "Solves: difficulty staying consistent, tracking progress and structuring a routine.",
      "Solves: presenting services, projects, differentiators and quote calls.",
      "Solves: communicating plans, classes, schedules and attracting new students.",
      "Solves: centralizing events, ministries, messages and contact channels.",
    ],
    projectDetails: [
      "Status: in internal use · Technologies: React, TypeScript, Node.js",
      "Status: in development · Category: SaaS · Technologies: React, Node.js",
      "Status: demo template · Audience: construction",
      "Status: demo template · Audience: gyms and fitness",
      "Status: demo template · Audience: churches and communities",
    ],
    projectDirectCtas: ["Message on Instagram", "Message on Instagram", "Message on Instagram", "Message on Instagram"],
    templatePreviews: [
      ["Construction & waterproofing", "Technical quote within 24h", "Request a quote"],
      ["Strong training, clear routine", "Plans, schedules and online enrollment", "Start now"],
      ["Community, services and events", "Schedule, ministries and prayer requests", "View schedule"],
    ],
    templateChips: [
      ["Reports", "Renovation", "Projects"],
      ["Monthly", "Personal"],
      ["Services", "Events", "Prayer"],
    ],
    caseFlowBadge: "Operational flow",
    caseFlowTitle: "From incoming request to tracking.",
    caseFlowText: "The ERP was designed to connect steps that used to live apart. The company gains a clearer path to register, monitor and retrieve information.",
    caseCaption: "Complete system for managing projects, materials, inventory, clients, finance and after-sales.",
    caseGrid: [
      ["01", "Problem", "Scattered information, manual controls and low visibility across internal stages."],
      ["02", "Solution", "Custom ERP with connected flows, focused modules and simple navigation."],
      ["03", "Modules", "More than 7 modules connecting CRM, quotes, work orders, materials, inventory, warranty and finance."],
      ["04", "Result", "More control, less rework and an operation prepared to grow with organization."],
    ],
    timelineItems: ["CRM", "Quotes", "Work orders", "Materials", "Inventory", "Warranty", "Finance", "Permissions", "Backup"],
    caseProof: [
      ["Technologies", "React, TypeScript, Node.js, internal routes, reusable components and modular structure."],
      ["Integrations", "CRM, quotes, work orders, materials, inventory, warranty and finance working in one connected flow."],
      ["Maturity", "Project designed for a real operation, continuous evolution and new modules."],
    ],
    resultItems: ["Process centralization", "Spreadsheet reduction", "Integrated inventory control", "Connected operational flow", "Traceable history"],
    developmentStatus: "Status: In development",
    developmentPreviewLabel: "Real Entreosalvos previews",
    evidenceCards: [
      ["01", "ERP IMPPEL", "Real system created to organize operations, inventory, materials, quotes and finance."],
      ["02", "Andrey Systems Website", "Own portfolio created to present services, projects and contact paths."],
      ["03", "Entreosalvos", "Own product in development, used as a SaaS, routine and digital experience lab."],
    ],
    faqItems: [
      ["How much does a system cost?", "It depends on modules, integrations and the level of customization. The quote starts after understanding the problem."],
      ["How long does it take?", "Websites and landing pages are usually faster. Systems and ERPs require staged planning."],
      ["Do you provide maintenance?", "Yes. Adjustments, improvements and monthly support can be arranged after delivery."],
      ["Can I request new features?", "Yes. The idea is that the system can evolve with new modules, rules and flows as the company grows."],
      ["Is the system customized?", "Yes. Development is designed around the business routine, avoiding generic solutions that do not fit the operation."],
    ],
    quoteLabels: ["Name", "Company", "Email or phone", "Project type", "Main current problem", "Desired timeline"],
    quotePlaceholders: ["Ex.: email, WhatsApp or phone", "Ex.: spreadsheet processes, uncontrolled inventory, old website...", "Ex.: this month, next quarter, no defined deadline"],
    quoteOptions: ["Professional website", "Landing page", "Custom ERP", "Custom system", "Automation", "Consulting"],
    contactSecondary: "Request a quote",
    contactTertiary: "",
    erpPageBadge: "Custom ERP case",
    erpPageTitle: "ERP IMPPEL connected operation",
    erpPageText: "A system created to centralize internal processes, reduce spreadsheet dependency and connect departments in a clearer operational flow.",
    erpPageCta: "Request a quote",
    erpSecondary: "Message on Instagram",
    erpOtherProjects: "View other projects",
    erpFooterRight: "ERP IMPPEL case",
    erpGalleryLabel: "Real ERP IMPPEL screen gallery",
    erpGalleryCaptions: ["Secure login", "Integrated inventory", "Quotes and clients"],
    erpDetailCards: [
      ["Before", "Problem", "Distributed processes, manual controls and difficulty tracking history and stages."],
      ["After", "Solution", "Custom ERP with connected modules, objective navigation and traceable operational flow."],
      ["Modules", "Main areas", "CRM, quotes, work orders, materials, inventory, warranty, finance, reports and tracking."],
      ["Result", "Operation", "Process centralization, spreadsheet reduction and more clarity for internal decisions."],
    ],
    erpPageFinalBadge: "Next step",
    erpPageFinalTitle: "Want a system to organize your company?",
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

const setAttribute = (selector, attribute, value, root = document) => {
  const element = root.querySelector(selector);
  if (element && value) element.setAttribute(attribute, value);
};

const setAllAttribute = (selector, attribute, values, root = document) => {
  const elements = [...root.querySelectorAll(selector)];
  elements.forEach((element, index) => {
    if (values[index]) element.setAttribute(attribute, values[index]);
  });
};

const setCards = (selector, rows, parts) => {
  const cards = [...document.querySelectorAll(selector)];
  cards.forEach((card, index) => {
    const row = rows[index];
    if (!row) return;
    parts.forEach((part, partIndex) => {
      const element = card.querySelector(part);
      if (element && row[partIndex]) element.textContent = row[partIndex];
    });
  });
};

const setLabelTexts = (selector, values) => {
  const labels = [...document.querySelectorAll(selector)];
  labels.forEach((label, index) => {
    const value = values[index];
    if (!value) return;
    const textNode = [...label.childNodes].find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
    if (textNode) textNode.textContent = `\n              ${value}\n              `;
  });
};

const setOptions = (selector, values) => {
  const options = [...document.querySelectorAll(selector)];
  options.forEach((option, index) => {
    const value = values[index];
    if (!value) return;
    option.textContent = value;
    option.value = value;
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
  setText(".hero-proof strong", copy.heroProofTitle);
  setText(".hero-proof p", copy.heroProofText);
  setAllText(".hero-footer span", copy.heroChips);
  setText("#servicos .section-kicker p", copy.servicesKicker);
  setText("#servicos .section-heading h2", copy.servicesTitle);
  setText("#servicos .section-heading p", copy.servicesText);
  setCards("#servicos .service-card", copy.servicesCards, ["span", "h3", "p", "small"]);
  setText("#diferenciais .section-kicker p", copy.trustKicker);
  setText("#diferenciais .section-heading h2", copy.trustTitle);
  setText("#diferenciais .section-heading p", copy.trustText);
  setCards("#diferenciais .trust-card", copy.trustCards, ["h3", "p"]);
  setText("#processo .section-kicker p", copy.processKicker);
  setText("#processo .section-heading h2", copy.processTitle);
  setText("#processo .section-heading p", copy.processText);
  setCards("#processo .process-card", copy.processCards, ["span", "h3", "p"]);
  setText("#para-quem .section-kicker p", copy.audienceKicker);
  setText("#para-quem .section-heading h2", copy.audienceTitle);
  setText("#para-quem .section-heading p", copy.audienceText);
  setAllText("#para-quem .audience-card", copy.audienceCards);
  setText("#portfolio .section-kicker p", copy.portfolioKicker);
  setText("#portfolio .work-heading h2", copy.portfolioTitle);
  setText("#portfolio .work-heading p", copy.portfolioText);
  setAllText("#portfolio .project-media > span", copy.projectBadges);
  setAllText("#portfolio .project-meta > p:first-child", copy.projectTags);
  setAllText("#portfolio .project-meta h3", copy.projectTitles);
  setAllText("#portfolio .project-desc", copy.projectDescriptions);
  setAllText("#portfolio .project-problem", copy.projectProblems);
  setAllText("#portfolio .project-details", copy.projectDetails);
  setText(".media-imppel + .project-meta a", copy.erpCardCta);
  setAllText("#portfolio .project-meta a[target]", copy.projectDirectCtas);
  setCards("#portfolio .template-preview", copy.templatePreviews, [".template-hero strong", ".template-hero small", ".template-cta"]);
  setAllText("#portfolio .template-civil .template-service-row i", copy.templateChips[0]);
  setAllText("#portfolio .template-fitness .template-plan-grid i", copy.templateChips[1]);
  setAllText("#portfolio .template-church .template-service-row i", copy.templateChips[2]);
  setText("#case .eyebrow", copy.caseBadge);
  setText("#case .case-heading h2", copy.caseTitle);
  setText("#case .case-heading > p:not(.eyebrow)", copy.caseText);
  setText("#case .case-gallery-main figcaption", copy.caseCaption);
  setCards("#case .case-grid article", copy.caseGrid, ["span", "h3", "p"]);
  setText("#case .case-flow-copy .eyebrow", copy.caseFlowBadge);
  setText("#case .case-flow-copy h3", copy.caseFlowTitle);
  setText("#case .case-flow-copy p:not(.eyebrow)", copy.caseFlowText);
  setAllText("#case .timeline-list li", copy.timelineItems);
  setCards("#case .case-proof article", copy.caseProof, ["span", "p"]);
  setText("#case .case-cta .button", copy.caseCta);
  setText("#resultados .section-kicker p", copy.resultsKicker);
  setText("#resultados .section-heading h2", copy.resultsTitle);
  setText("#resultados .section-heading p", copy.resultsText);
  setAllText("#resultados .result-card", copy.resultItems);
  setText("#sobre .section-kicker p", copy.aboutKicker);
  setText("#sobre .about-copy h2", copy.aboutTitle);
  setText("#sobre .about-copy p", copy.aboutText);
  setText("#sobre .section-kicker p", copy.founderKicker);
  setText("#sobre .founder-copy .eyebrow", copy.founderBadge);
  setAllText("#sobre .founder-copy > p:not(.eyebrow)", [copy.founderText1, copy.founderText2]);
  setAllText("#sobre .founder-highlights span", copy.founderHighlights);
  setText("#em-desenvolvimento .section-kicker p", copy.developmentKicker);
  setText("#em-desenvolvimento .development-card > span", copy.developmentStatus);
  setText("#em-desenvolvimento h2", copy.developmentTitle);
  setText("#em-desenvolvimento .development-card p", copy.developmentText);
  setAttribute("#em-desenvolvimento .development-preview", "aria-label", copy.developmentPreviewLabel);
  setText("#feedbacks .section-kicker p", copy.feedbackKicker);
  setText("#feedbacks .section-heading h2", copy.feedbackTitle);
  setText("#feedbacks .section-heading p", copy.feedbackText);
  setCards("#feedbacks .testimonial-card", copy.evidenceCards, ["span", "h3", "p"]);
  setText("#faq .section-kicker p", copy.faqKicker);
  setCards("#faq .faq-item", copy.faqItems, ["h3", "p"]);
  setText("#orcamento .section-kicker p", copy.quoteKicker);
  setText("#orcamento .section-heading h2", copy.quoteTitle);
  setText("#orcamento .section-heading p", copy.quoteText);
  setLabelTexts("#quoteForm label", copy.quoteLabels);
  setAttribute('#quoteForm input[name="contato"]', "placeholder", copy.quotePlaceholders[0]);
  setAttribute('#quoteForm textarea[name="problema"]', "placeholder", copy.quotePlaceholders[1]);
  setAttribute('#quoteForm input[name="prazo"]', "placeholder", copy.quotePlaceholders[2]);
  setOptions("#quoteForm option", copy.quoteOptions);
  setText('#quoteForm button[type="submit"]', copy.quoteButton);
  setText("#quoteForm .quote-email-link", copy.quoteEmailButton);
  setText("#quoteMessage > span", copy.quoteMessageTitle);
  setText("#quoteCopyButton", copy.quoteCopyButton);
  setText("#contato .eyebrow", copy.finalBadge);
  setText("#contato h2", copy.finalTitle);
  setText("#contato .button.primary", copy.finalPrimary);
  setAllText("#contato .button.secondary", [copy.contactSecondary]);
  const footerContact = document.querySelector(".site-footer span:last-child");
  if (footerContact) {
    footerContact.innerHTML = `<a href="https://www.instagram.com/andreyfabricio_/" target="_blank" rel="noreferrer">@andreyfabricio_</a> · <a href="mailto:${quoteEmail}">${quoteEmail}</a> · ${new Date().getFullYear()} — ${copy.footerLegal}`;
    footerContact.setAttribute("aria-label", copy.footerContact);
  }
  setText(".case-page-copy .eyebrow", copy.erpPageBadge);
  setText(".case-page-copy h1", copy.erpPageTitle);
  setText(".case-page-copy > p:not(.eyebrow)", copy.erpPageText);
  setText(".case-page-copy .button.primary", copy.erpPageCta);
  setAttribute(".case-real-gallery", "aria-label", copy.erpGalleryLabel);
  setAllText(".case-real-gallery figcaption", copy.erpGalleryCaptions);
  setCards("main > .case-detail-section .case-grid article", copy.erpDetailCards, ["span", "h3", "p"]);
  setText(".final-cta:not(#contato) .eyebrow", copy.erpPageFinalBadge);
  setText(".final-cta:not(#contato) h2", copy.erpPageFinalTitle);
  setText(".final-cta:not(#contato) .button.primary", copy.erpSecondary);
  setText(".final-cta:not(#contato) .button.secondary", copy.erpOtherProjects);
  setText(".case-detail-section .section-heading h2", copy.overviewTitle);
  setText(".case-detail-section .section-heading p", copy.overviewText);
  setText(".case-detail-section .case-flow-copy .eyebrow", copy.flowBadge);
  setText(".case-detail-section .case-flow-copy h3", copy.flowTitle);
  setText(".case-detail-section .case-flow-copy p:not(.eyebrow)", copy.flowText);
  setAllText(".case-detail-section .timeline-list li", copy.timelineItems);
  setCards(".case-detail-section .case-proof article", copy.caseProof, ["span", "p"]);

  langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.langOption === lang);
  });
  localStorage.setItem(storageKeys.lang, lang);
  applyTheme(localStorage.getItem(storageKeys.theme) || "dark");
  updateQuoteMessage(false);
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

const getQuoteCopy = () => translations[localStorage.getItem(storageKeys.lang) || "pt"] || translations.pt;

const getQuoteData = () => {
  if (!quoteForm) return null;
  const data = new FormData(quoteForm);
  const fallback = localStorage.getItem(storageKeys.lang) === "en" ? "Not defined" : "Não informado";
  return {
    nome: String(data.get("nome") || fallback).trim() || fallback,
    empresa: String(data.get("empresa") || fallback).trim() || fallback,
    contato: String(data.get("contato") || fallback).trim() || fallback,
    tipo: String(data.get("tipo") || fallback).trim() || fallback,
    problema: String(data.get("problema") || fallback).trim() || fallback,
    prazo: String(data.get("prazo") || fallback).trim() || fallback,
  };
};

const buildQuoteMessage = () => {
  const copy = getQuoteCopy();
  const data = getQuoteData();
  return data ? copy.quoteTemplate(data) : "";
};

const updateQuoteMessage = (showMessage = false) => {
  const message = buildQuoteMessage();
  const copy = getQuoteCopy();
  if (quoteMessageText) quoteMessageText.textContent = message;
  if (quoteMessage) quoteMessage.hidden = !showMessage;
  if (quoteMessage?.querySelector("span")) quoteMessage.querySelector("span").textContent = copy.quoteMessageTitle;
  if (quoteEmailLink) {
    const subject = encodeURIComponent("Orçamento Andrey Systems");
    const body = encodeURIComponent(message);
    quoteEmailLink.href = `mailto:${quoteEmail}?subject=${subject}&body=${body}`;
  }
  return message;
};

quoteForm?.addEventListener("input", () => updateQuoteMessage(true));

quoteEmailLink?.addEventListener("click", () => updateQuoteMessage(true));

quoteCopyButton?.addEventListener("click", async () => {
  const message = updateQuoteMessage(true);
  const copy = getQuoteCopy();

  try {
    await navigator.clipboard?.writeText(message);
    if (quoteMessage?.querySelector("span")) quoteMessage.querySelector("span").textContent = copy.quoteCopied;
  } catch {
    if (quoteMessage?.querySelector("span")) quoteMessage.querySelector("span").textContent = copy.quoteMessageTitle;
  }
});

quoteForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const message = updateQuoteMessage(true);
  const copy = getQuoteCopy();

  try {
    await navigator.clipboard?.writeText(message);
    if (quoteMessage?.querySelector("span")) quoteMessage.querySelector("span").textContent = copy.quoteCopied;
  } catch {
    if (quoteMessage?.querySelector("span")) quoteMessage.querySelector("span").textContent = copy.quoteMessageTitle;
  }

  window.open(instagramDirect, "_blank", "noopener,noreferrer");
});

const urlPreferences = new URLSearchParams(window.location.search);
const requestedTheme = urlPreferences.get("theme");
const requestedLang = urlPreferences.get("lang");
const initialTheme = requestedTheme === "light" || requestedTheme === "dark"
  ? requestedTheme
  : localStorage.getItem(storageKeys.theme) || "dark";
const initialLang = requestedLang === "en" || requestedLang === "pt"
  ? requestedLang
  : localStorage.getItem(storageKeys.lang) || "pt";

applyTheme(initialTheme);
applyLanguage(initialLang);

const requestedSection = urlPreferences.get("section");
if (requestedSection) {
  window.requestAnimationFrame(() => {
    document.querySelector(`#${CSS.escape(requestedSection)}`)?.scrollIntoView({ block: "start" });
  });
}
