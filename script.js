/* ==========================================
   PORTFÓLIO — João Carlos Vidal
   Script Principal
   
   =============================================
   COMO EDITAR:
   
   1. HABILIDADES: Edite o array "skillCategories" abaixo
      para adicionar, remover ou alterar categorias e tecnologias.
   
   2. SOFT SKILLS: Edite o array "softSkills" abaixo
      para ajustar as competências interpessoais.
   
   3. PROJETOS: Edite o array "projects" abaixo
      para adicionar, remover ou alterar projetos.
      - Coloque a imagem do projeto em assets/images/
      - Atualize o campo "image" com o caminho correto
   ============================================= */

/* ==========================================
   DADOS CONFIGURÁVEIS — HABILIDADES
   Edite os objetos abaixo para personalizar
   ========================================== */
const skillCategories = [
    {
        icon: "💎",
        title: "Back-end & Frameworks",
        description: "Desenvolvimento de APIs e aplicações web server-side com foco em boas práticas e padrão MVC.",
        tags: ["Ruby", "Ruby on Rails", "Node.js (básico)", "APIs REST", "CRUD", "MVC", "POO"]
    },
    {
        icon: "🗄️",
        title: "Banco de Dados",
        description: "Modelagem e manipulação de bancos de dados relacionais com consultas SQL.",
        tags: ["PostgreSQL", "MySQL", "SQL", "Bancos Relacionais"]
    },
    {
        icon: "🌐",
        title: "Front-end & Web",
        description: "Fundamentos de desenvolvimento web para construção de interfaces funcionais.",
        tags: ["HTML5", "CSS3", "JavaScript", "TypeScript (aprendendo)"]
    },
    {
        icon: "⚙️",
        title: "Ferramentas & Versionamento",
        description: "Controle de versão e ferramentas essenciais para o fluxo de trabalho de desenvolvimento.",
        tags: ["Git", "GitHub", "Terminal", "Lógica de Programação"]
    }
];

/* ==========================================
   DADOS CONFIGURÁVEIS — SOFT SKILLS
   ========================================== */
const softSkills = [
    { icon: "🧩", text: "Resolução de problemas" },
    { icon: "🧠", text: "Raciocínio analítico e lógico" },
    { icon: "🔍", text: "Atenção aos detalhes" },
    { icon: "📋", text: "Organização" },
    { icon: "💬", text: "Comunicação" },
    { icon: "🤝", text: "Trabalho em equipe" },
    { icon: "🤲", text: "Colaboração" },
    { icon: "📚", text: "Aprendizado contínuo" }
];

/* ==========================================
   DADOS CONFIGURÁVEIS — PROJETOS
   
   Para adicionar um novo projeto:
   1. Copie um objeto existente
   2. Altere os campos (title, description, etc.)
   3. Coloque a imagem em assets/images/
   4. Atualize o campo "image"
   ========================================== */
const projects = [
    {
        title: "SempreON",
        description: "Projeto desenvolvido para divulgar os serviços da SempreON, empresa especializada em automação residencial.Foram implementadas páginas responsivas, design moderno, animações, navegação fluida e integração com WhatsApp.",
        image: "assets/images/project-1.1.png",
        techs: ["JavaScript", "HTML", "CSS", "Responsividade", "Animações", "Integração com WhatsApp"],
        github: "https://sempreon.vercel.app/",
        demo: ""
    },
    {
        title: "Controle de Gastos",
        description: "Aplicação web para gerenciamento de despesas com sistema de categorias e status, seguindo o padrão MVC.",
        image: "assets/images/login-bg.png",
        techs: ["Ruby on Rails", "PostgreSQL", "MVC", "Supabase", "Render"],
        github: "https://controle-gastos-8q0i.onrender.com/login",
        demo: ""
    },
    {
        title: "Dashboard Backend",
        description: "Painel administrativo com APIs para controle de dados, relatórios e operações CRUD.",
        image: "assets/images/project-3.png",
        techs: ["Ruby", "SQL", "API REST"],
        github: "https://github.com/seu-usuario/projeto-3",
        demo: ""
    }
];


/* ==========================================
   RENDERIZAÇÃO — HABILIDADES
   ========================================== */
function renderSkills() {
    const grid = document.getElementById('skillsGrid');
    if (!grid) return;

    grid.innerHTML = skillCategories.map((skill, index) => `
        <div class="skill-card animate-on-scroll" style="transition-delay: ${index * 0.1}s">
            <div class="skill-card__icon">${skill.icon}</div>
            <h3 class="skill-card__title">${skill.title}</h3>
            <p class="skill-card__description">${skill.description}</p>
            <div class="skill-card__tags">
                ${skill.tags.map(tag => `<span class="skill-tag">${tag}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

/* ==========================================
   RENDERIZAÇÃO — SOFT SKILLS
   ========================================== */
function renderSoftSkills() {
    const grid = document.getElementById('softSkillsGrid');
    if (!grid) return;

    grid.innerHTML = softSkills.map((skill, index) => `
        <div class="soft-skill-card animate-on-scroll" style="transition-delay: ${index * 0.05}s">
            <div class="soft-skill-card__icon">${skill.icon}</div>
            <span class="soft-skill-card__text">${skill.text}</span>
        </div>
    `).join('');
}

/* ==========================================
   RENDERIZAÇÃO — PROJETOS
   ========================================== */
function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;

    grid.innerHTML = projects.map((project, index) => `
        <div class="project-card animate-on-scroll" style="transition-delay: ${index * 0.15}s">
            <div class="project-card__image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
                <div class="project-card__overlay">
                    <div class="project-card__overlay-links">
                        ${project.github ? `
                            <a href="${project.github}" target="_blank" rel="noopener" class="project-card__overlay-link">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                Código
                            </a>
                        ` : ''}
                        ${project.demo ? `
                            <a href="${project.demo}" target="_blank" rel="noopener" class="project-card__overlay-link">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                                Demo
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
            <div class="project-card__body">
                <h3 class="project-card__title">${project.title}</h3>
                <p class="project-card__description">${project.description}</p>
                <div class="project-card__techs">
                    ${project.techs.map(tech => `<span class="project-tech">${tech}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}


/* ==========================================
   NAVBAR — Scroll e menu mobile
   ========================================== */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.navbar__link');

    // Efeito de scroll na navbar
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar--scrolled');
        } else {
            navbar.classList.remove('navbar--scrolled');
        }
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Checar estado inicial

    // Criar overlay para mobile
    const overlay = document.createElement('div');
    overlay.classList.add('navbar__overlay');
    document.body.appendChild(overlay);

    // Toggle do menu mobile
    function toggleMenu() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('open');
        overlay.classList.toggle('show');
        document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
    }

    navToggle.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('open')) {
                toggleMenu();
            }
        });
    });

    // Highlight do link ativo ao rolar
    function updateActiveLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 120;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            const link = document.querySelector(`.navbar__link[href="#${id}"]`);

            if (link) {
                if (scrollPos >= top && scrollPos < top + height) {
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    }
    window.addEventListener('scroll', updateActiveLink);
}


/* ==========================================
   ANIMAÇÕES DE SCROLL — Intersection Observer
   ========================================== */
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Para de observar após a animação
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observa todos os elementos com classe de animação
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}


/* ==========================================
   FORMULÁRIO DE CONTATO — Validação
   ========================================== */
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const nameInput = document.getElementById('formName');
    const emailInput = document.getElementById('formEmail');
    const messageInput = document.getElementById('formMessage');
    const nameError = document.getElementById('formNameError');
    const emailError = document.getElementById('formEmailError');
    const messageError = document.getElementById('formMessageError');
    const successMsg = document.getElementById('formSuccess');
    const submitBtn = document.getElementById('formSubmit');

    // Limpar erro ao digitar
    function clearError(input, errorEl) {
        input.addEventListener('input', () => {
            input.classList.remove('error');
            errorEl.textContent = '';
        });
    }
    clearError(nameInput, nameError);
    clearError(emailInput, emailError);
    clearError(messageInput, messageError);

    // Validar e-mail
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Envio do formulário
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let hasError = false;

        // Validar nome
        if (nameInput.value.trim().length < 2) {
            nameInput.classList.add('error');
            nameError.textContent = 'Por favor, insira seu nome (mínimo 2 caracteres).';
            hasError = true;
        }

        // Validar e-mail
        if (!isValidEmail(emailInput.value.trim())) {
            emailInput.classList.add('error');
            emailError.textContent = 'Por favor, insira um e-mail válido.';
            hasError = true;
        }

        // Validar mensagem
        if (messageInput.value.trim().length < 10) {
            messageInput.classList.add('error');
            messageError.textContent = 'A mensagem deve ter pelo menos 10 caracteres.';
            hasError = true;
        }

        if (hasError) return;

        // Simulação de envio
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            Enviando...
        `;

        setTimeout(() => {
            successMsg.classList.add('show');
            form.reset();
            submitBtn.disabled = false;
            submitBtn.innerHTML = `
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                Enviar mensagem
            `;

            // Esconde mensagem de sucesso após 5 segundos
            setTimeout(() => {
                successMsg.classList.remove('show');
            }, 5000);
        }, 1500);
    });
}


/* ==========================================
   SMOOTH SCROLL — para links internos
   ========================================== */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}


/* ==========================================
   EFEITO DE DIGITAÇÃO NO HERO (opcional)
   ========================================== */
function initTypingEffect() {
    const subtitle = document.querySelector('.hero__subtitle');
    if (!subtitle) return;

    const text = subtitle.textContent;
    subtitle.textContent = '';
    subtitle.style.borderRight = '2px solid var(--accent)';
    subtitle.style.display = 'inline-block';

    let i = 0;
    function type() {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(type, 60);
        } else {
            // Remove cursor após finalizar
            setTimeout(() => {
                subtitle.style.borderRight = 'none';
            }, 1500);
        }
    }

    // Começa após um pequeno atraso
    setTimeout(type, 800);
}


/* ==========================================
   INICIALIZAÇÃO
   ========================================== */
document.addEventListener('DOMContentLoaded', () => {
    // Renderizar conteúdo dinâmico
    renderSkills();
    renderSoftSkills();
    renderProjects();

    // Inicializar funcionalidades
    initNavbar();
    initScrollAnimations();
    initContactForm();
    initSmoothScroll();
    initTypingEffect();
});
