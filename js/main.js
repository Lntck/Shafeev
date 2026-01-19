// Init AOS (Animations)
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        once: false,
        mirror: false
    });
    
    typeWriter();
});

// Mobile Menu Toggle
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Tab Switching Logic
function switchTab(tabName) {
    const projectsPanel = document.getElementById('panel-projects');
    const skillsPanel = document.getElementById('panel-skills');
    const btnProjects = document.getElementById('tab-projects');
    const btnSkills = document.getElementById('tab-skills');

    if (tabName === 'projects') {
        projectsPanel.classList.remove('hidden');
        projectsPanel.classList.add('grid');
        skillsPanel.classList.add('hidden');
        skillsPanel.classList.remove('grid');

        // Styles
        btnProjects.classList.add('bg-indigo-600', 'text-white', 'shadow-lg');
        btnProjects.classList.remove('text-gray-400', 'hover:text-white');
        btnSkills.classList.remove('bg-indigo-600', 'text-white', 'shadow-lg');
        btnSkills.classList.add('text-gray-400', 'hover:text-white');
    } else {
        projectsPanel.classList.add('hidden');
        projectsPanel.classList.remove('grid');
        skillsPanel.classList.remove('hidden');
        skillsPanel.classList.add('grid');

        // Styles
        btnSkills.classList.add('bg-indigo-600', 'text-white', 'shadow-lg');
        btnSkills.classList.remove('text-gray-400', 'hover:text-white');
        btnProjects.classList.remove('bg-indigo-600', 'text-white', 'shadow-lg');
        btnProjects.classList.add('text-gray-400', 'hover:text-white');
    }
}

// Typewriter Effect
let words = ["Backend Developer", "Python Enthusiast", "Innopolis Student"];
let i = 0;
let timer;

function typeWriter() {
    const heading = document.getElementById("typewriter");
    if (!heading) return;
    
    const word = words[i];
    let j = 0;
    let isDeleting = false;

    function loop() {
        heading.innerHTML = word.substring(0, j);
        
        if (!isDeleting && j < word.length) {
            j++;
            setTimeout(loop, 100);
        } else if (isDeleting && j > 0) {
            j--;
            setTimeout(loop, 50);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                i = (i + 1) % words.length;
                setTimeout(typeWriter, 500);
                return;
            }
            setTimeout(loop, 2000);
        }
    }
    loop();
}


const translations = {
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_portfolio: "Portfolio",
        nav_contact: "Contact",
        hero_badge: "Backend Developer",
        hero_prefix: "I Build",
        hero_suffix: "Scalable APIs",
        hero_iam: "I am a",
        hero_desc: "Student at Innopolis University. Passionate about Python, Django, FastAPI and System Design.",
        btn_projects: "View Projects",
        btn_contact: "Contact Me",
        about_title: "About",
        about_desc: "I specialize in building backend systems that are secure, scalable, and efficient...",
    },
    ru: {
        nav_home: "Главная",
        nav_about: "Обо мне",
        nav_portfolio: "Портфолио",
        nav_contact: "Контакты",
        hero_badge: "Бэкенд Разработчик",
        hero_prefix: "Я Создаю",
        hero_suffix: "Масштабируемые API",
        hero_iam: "Я",
        hero_desc: "Студент Университета Иннополис. Увлечен Python, Django, FastAPI и проектированием систем.",
        btn_projects: "Мои Проекты",
        btn_contact: "Связаться",
        about_title: "Обо мне",
        about_desc: "Я специализируюсь на создании надежных и эффективных бэкенд-систем...",
    }
};

const typeWords = {
    en: ["Backend Developer", "Python Enthusiast", "Innopolis Student"],
    ru: ["Бэкенд Разработчик", "Фанат Python", "Студент Иннополиса"]
};

let currentLang = 'en';

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ru' : 'en';
    
    const desktopToggle = document.getElementById('lang-toggle');
    const mobileToggle = document.getElementById('lang-toggle-mobile');

    if (currentLang === 'ru') {
        if(desktopToggle) desktopToggle.checked = true;
        if(mobileToggle) mobileToggle.checked = true;
    } else {
        if(desktopToggle) desktopToggle.checked = false;
        if(mobileToggle) mobileToggle.checked = false;
    }
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            if (element.placeholder) {
                element.placeholder = translations[currentLang][key];
            } else {
                element.innerText = translations[currentLang][key];
            }
        }
    });

    words = typeWords[currentLang];
}
