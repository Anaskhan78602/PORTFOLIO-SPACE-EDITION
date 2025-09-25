// Create Animated Stars
function createStars() {
    const starsContainer = document.getElementById('starsContainer');
    if (!starsContainer) return;
    const starCount = 200;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const sizes = ['small', 'medium', 'large'];
        const size = sizes[Math.floor(Math.random() * sizes.length)];
        star.classList.add(size);
        if (Math.random() < 0.3) {
            const colors = ['blue', 'purple', 'cyan', 'pink'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            star.classList.add('colored', color);
        }
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

//project show more/hide interface
document.addEventListener("DOMContentLoaded", () => {
  const showMoreBtn = document.getElementById("showMoreBtn");
  const showLessBtn = document.getElementById("showLessBtn");
  const moreProjects = document.querySelectorAll(".more-projects");

  showMoreBtn.addEventListener("click", () => {
    moreProjects.forEach(p => p.classList.remove("hidden"));
    showMoreBtn.classList.add("hidden");
    showLessBtn.classList.remove("hidden");
  });

  showLessBtn.addEventListener("click", () => {
    moreProjects.forEach(p => p.classList.add("hidden"));
    showLessBtn.classList.add("hidden");
    showMoreBtn.classList.remove("hidden");
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  });
});

  

// Create Shooting Stars
function createShootingStar() {
    const starsContainer = document.getElementById('starsContainer');
    if (!starsContainer) return;
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';
    shootingStar.style.top = Math.random() * 50 + '%';
    shootingStar.style.left = '-100px';
    starsContainer.appendChild(shootingStar);
    setTimeout(() => {
        shootingStar.remove();
    }, 3000);
}

// Create Live Moving Space Particles
function createSpaceParticle() {
    const body = document.body;
    const particle = document.createElement('div');
    const sizes = ['small', 'medium', 'large'];
    const colors = ['', 'blue', 'purple', 'cyan', 'pink'];
    const size = sizes[Math.floor(Math.random() * sizes.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    particle.className = `space-particle particle-${size}`;
    if (color) {
        particle.classList.add('particle-colored', `particle-${color}`);
    }
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = window.innerHeight + 20 + 'px';
    particle.style.animationDelay = Math.random() * 3 + 's';
    body.appendChild(particle);
    const duration = size === 'small' ? 12000 : size === 'medium' ? 15000 : 18000;
    setTimeout(() => {
        if (particle.parentNode) {
            particle.remove();
        }
    }, duration);
}

// Create Interactive Mouse Particles
function createMouseParticle(x, y) {
    const body = document.body;
    for (let i = 0; i < 3; i++) {
        const particle = document.createElement('div');
        particle.className = 'space-particle particle-small particle-colored particle-cyan';
        const offsetX = (Math.random() - 0.5) * 30;
        const offsetY = (Math.random() - 0.5) * 30;
        particle.style.left = (x + offsetX) + 'px';
        particle.style.top = (y + offsetY) + 'px';
        particle.style.animation = 'float-small 3s linear forwards';
        body.appendChild(particle);
        setTimeout(() => {
            if (particle.parentNode) {
                particle.remove();
            }
        }, 3000);
    }
}

// Typing Animation
const typingTexts = [
    "FULL-STACK DEVELOPER",
    "MERN STACK SPECIALIST", 
    "COSMIC CODE EXPLORER",
    "DIGITAL UNIVERSE NAVIGATOR"
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
function typeText() {
    const currentText = typingTexts[textIndex];
    const typingElement = document.getElementById('typingText');
    if (!typingElement) return;
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => isDeleting = true, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typingTexts.length;
    }
    const speed = isDeleting ? 50 : 100;
    setTimeout(typeText, speed);
}

// Scroll Reveal Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, observerOptions);
document.querySelectorAll('.reveal-cosmic').forEach(el => {
    observer.observe(el);
});

// Mobile Menu
const mobileMenuBtn = document.getElementById('mobileMenu');
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        const panel = document.getElementById('mobileMenuPanel');
        const content = document.getElementById('mobileMenuContent');
        if (panel && content) {
            panel.classList.remove('hidden');
            setTimeout(() => {
                content.style.transform = 'translateX(0)';
            }, 10);
        }
    });
}
const closeMobileMenuBtn = document.getElementById('closeMobileMenu');
if (closeMobileMenuBtn) {
    closeMobileMenuBtn.addEventListener('click', closeMobileMenu);
}
const mobileMenuPanel = document.getElementById('mobileMenuPanel');
if (mobileMenuPanel) {
    mobileMenuPanel.addEventListener('click', (e) => {
        if (e.target.id === 'mobileMenuPanel') {
            closeMobileMenu();
        }
    });
}
function closeMobileMenu() {
    const content = document.getElementById('mobileMenuContent');
    const panel = document.getElementById('mobileMenuPanel');
    if (content && panel) {
        content.style.transform = 'translateX(100%)';
        setTimeout(() => {
            panel.classList.add('hidden');
        }, 300);
    }
}

// Contact Form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        if (!name || !email || !message) {
            alert('Please fill in all transmission fields!');
            return;
        }
        emailjs.send("service_k29jc59", "template_g0fw7e8", {
            from_name: name,
            from_email: email,
            message: message
        })
        .then(function() {
            alert('🚀 Transmission sent! I\'ll respond from the cosmic void soon.');
            contactForm.reset();
        }, function(error) {
            alert('❌ Transmission failed. Please try again later.');
        });
    });
}

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTop');
if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// 3D Skill Spheres Initialization
function init3DSkillSpheres() {
    const container = document.getElementById('skills3DContainer');
    if (!container) return;

    const skills = [
        { name: 'React', icon: 'https://techstack-generator.vercel.app/react-icon.svg' },
        { name: 'JavaScript', icon: 'https://techstack-generator.vercel.app/js-icon.svg' },
        { name: 'TypeScript', icon: 'https://techstack-generator.vercel.app/ts-icon.svg' },
        { name: 'Redux', icon: 'https://techstack-generator.vercel.app/redux-icon.svg' },
        { name: 'Node.js', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
        { name: 'MongoDB', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg' },
        { name: 'Tailwind', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
        { name: 'AWS', icon: 'https://techstack-generator.vercel.app/aws-icon.svg' },
        { name: 'GitHub', icon: 'https://techstack-generator.vercel.app/github-icon.svg' },
        { name: 'Docker', icon: 'https://techstack-generator.vercel.app/docker-icon.svg' },
        { name: 'Next.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg' },
        { name: 'Three.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/threejs/threejs-original.svg' },
        { name: 'HTML5', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg' },
        { name: 'CSS3', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg' },
        { name: 'Express.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg' },
        { name: 'Figma', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
        { name: 'Linux', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg' },
        { name: 'Python', icon: 'https://techstack-generator.vercel.app/python-icon.svg' }
    ];

    const containerRect = container.getBoundingClientRect();
    const cols = 6;
    const rows = 3;

    // proper padding from edges
    const paddingX = 60; // left/right gap
    const paddingY = 60; // top/bottom gap

    const spacingX = (containerRect.width - 2 * paddingX) / (cols - 1);
    const spacingY = (containerRect.height - 2 * paddingY) / (rows - 1);

    skills.forEach((skill, index) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'skill-wrapper';

        const sphere = document.createElement('div');
        sphere.className = 'skill-sphere skill-sphere-white';
        sphere.innerHTML = `<img src="${skill.icon}" alt="${skill.name}" class="w-12 h-12"/>`;

        const label = document.createElement('div');
        label.className = 'skill-label';
        label.innerText = skill.name;

        wrapper.appendChild(sphere);
        wrapper.appendChild(label);

        const size = 100;
        sphere.style.width = size + 'px';
        sphere.style.height = size + 'px';

        const col = index % cols;
        const row = Math.floor(index / cols);

        const x = paddingX + spacingX * col - size / 2;
        const y = paddingY + spacingY * row - size / 2;

        wrapper.style.left = x + 'px';
        wrapper.style.top = y + 'px';

        const floatDelay = Math.random() * 2;
        wrapper.style.animation = `sphere-float 4s ease-in-out ${floatDelay}s infinite alternate`;

        container.appendChild(wrapper);
    });
}

// Call the function after page load

// Enhanced Mouse Particle Creation
let mouseParticleTimer = 0;
document.addEventListener('mousemove', (e) => {
    mouseParticleTimer++;
    if (mouseParticleTimer % 20 === 0) {
        createMouseParticle(e.clientX, e.clientY);
    }
    if (Math.random() < 0.15) {
        const trail = document.createElement('div');
        trail.style.position = 'fixed';
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
        trail.style.width = '3px';
        trail.style.height = '3px';
        trail.style.background = '#00ffff';
        trail.style.borderRadius = '50%';
        trail.style.pointerEvents = 'none';
        trail.style.zIndex = '9999';
        trail.style.boxShadow = '0 0 10px #00ffff';
        document.body.appendChild(trail);
        trail.animate([
            { opacity: 0.8, transform: 'scale(1)' },
            { opacity: 0, transform: 'scale(0)' }
        ], {
            duration: 1000,
            easing: 'ease-out'
        }).onfinish = () => trail.remove();
    }
});

// Initialize Lenis Smooth Scrolling
function initLenis() {
    if (typeof Lenis === 'undefined') return null;
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    });
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    lenis.on('scroll', ({ scroll, limit }) => {
        const progress = (scroll / limit) * 100;
        const scrollProgress = document.getElementById('scrollProgress');
        if (scrollProgress) scrollProgress.style.width = progress + '%';
        updateParallax(scroll);
    });
    return lenis;
}

// Advanced Scroll Reveal with Intersection Observer
function initAdvancedScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                if (entry.target.classList.contains('counter')) {
                    animateCounter(entry.target);
                }
                if (entry.target.classList.contains('text-reveal')) {
                    animateTextReveal(entry.target);
                }
            }
        });
    }, observerOptions);
    document.querySelectorAll('[class*="reveal-"]').forEach(el => {
        observer.observe(el);
    });
}

// Counter Animation
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const start = performance.now();
    function updateCounter(currentTime) {
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(easeOutQuart * target);
        element.textContent = current + (target > 10 ? '+' : '');
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }
    requestAnimationFrame(updateCounter);
}

// Text Reveal Animation
function animateTextReveal(element) {
    const spans = element.querySelectorAll('span');
    spans.forEach((span, index) => {
        setTimeout(() => {
            span.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Parallax Effects
function updateParallax(scrollY) {
    const parallaxElements = {
        slow: document.querySelectorAll('.parallax-slow'),
        medium: document.querySelectorAll('.parallax-medium'),
        fast: document.querySelectorAll('.parallax-fast')
    };
    parallaxElements.slow.forEach(el => {
        el.style.transform = `translateY(${scrollY * 0.1}px)`;
    });
    parallaxElements.medium.forEach(el => {
        el.style.transform = `translateY(${scrollY * 0.2}px)`;
    });
    parallaxElements.fast.forEach(el => {
        el.style.transform = `translateY(${scrollY * 0.3}px)`;
    });
}

// Magnetic Effect for Buttons
function initMagneticEffect() {
    document.querySelectorAll('.magnetic').forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            element.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'translate(0, 0)';
        });
    });
}

// Enhanced Smooth Scrolling for Navigation Links
function initSmoothNavigation() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target && typeof lenis !== 'undefined' && lenis) {
                lenis.scrollTo(target, {
                    offset: -80,
                    duration: 1.5
                });
            }
        });
    });
}

// Achievement Timeline Interactive Functionality
function initAchievementTimeline() {
    const achievementItems = document.querySelectorAll('.achievement-item');
    achievementItems.forEach((item, index) => {
        const card = item.querySelector('.achievement-card');
        const node = item.querySelector('.achievement-node');
        if (!card || !node) return;
        card.addEventListener('click', () => {
            const rect = card.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            for (let i = 0; i < 15; i++) {
                setTimeout(() => {
                    createCelebrationParticle(centerX, centerY);
                }, i * 50);
            }
            card.style.transform = 'scale(1.1) rotateY(10deg)';
            node.style.transform = 'scale(1.5)';
            node.style.boxShadow = '0 0 30px rgba(255, 215, 0, 0.8)';
            setTimeout(() => {
                card.style.transform = '';
                node.style.transform = '';
                node.style.boxShadow = '';
            }, 800);
            showAchievementNotification(index);
        });
        card.addEventListener('mouseenter', () => {
            node.style.transform = 'scale(1.2)';
            node.style.transition = 'all 0.3s ease';
        });
        card.addEventListener('mouseleave', () => {
            node.style.transform = '';
        });
    });
}

// Create Celebration Particles
function createCelebrationParticle(x, y) {
    const particle = document.createElement('div');
    const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    particle.style.position = 'fixed';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.width = '8px';
    particle.style.height = '8px';
    particle.style.background = color;
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '9999';
    particle.style.boxShadow = `0 0 10px ${color}`;
    const angle = Math.random() * Math.PI * 2;
    const velocity = 100 + Math.random() * 100;
    const gravity = 0.5;
    document.body.appendChild(particle);
    let vx = Math.cos(angle) * velocity;
    let vy = Math.sin(angle) * velocity;
    let currentX = x;
    let currentY = y;
    function animateParticle() {
        currentX += vx * 0.016;
        currentY += vy * 0.016;
        vy += gravity;
        particle.style.left = currentX + 'px';
        particle.style.top = currentY + 'px';
        if (currentY < window.innerHeight + 100) {
            requestAnimationFrame(animateParticle);
        } else {
            particle.remove();
        }
    }
    requestAnimationFrame(animateParticle);
}

// Achievement Notification System
function showAchievementNotification(index) {
    const achievements = [
        { title: "Code Master", desc: "Programming Excellence Unlocked!" },
        { title: "Full-Stack Hero", desc: "MERN Stack Mastery Achieved!" },
        { title: "Project Architect", desc: "Building Digital Dreams!" },
        { title: "Innovation Pioneer", desc: "Leading the Future of Tech!" }
    ];
    const notification = document.createElement('div');
    notification.className = 'achievement-notification';
    notification.innerHTML = `
        <div class="flex items-center space-x-4 p-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg shadow-lg">
            <div class="text-2xl">🏆</div>
            <div>
                <div class="font-bold text-white">${achievements[index].title}</div>
                <div class="text-yellow-100 text-sm">${achievements[index].desc}</div>
            </div>
        </div>
    `;
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.zIndex = '10000';
    notification.style.transform = 'translateX(400px)';
    notification.style.transition = 'transform 0.5s ease';
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// Education Card Interactive Features
function initEducationInteractivity() {
    const educationCards = document.querySelectorAll('.education-card');
    educationCards.forEach(card => {
        const container = card.querySelector('.education-container');
        if (!container) return;
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            container.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        card.addEventListener('mouseleave', () => {
            container.style.transform = '';
        });
        card.addEventListener('click', () => {
            card.classList.toggle('expanded');
            if (card.classList.contains('expanded')) {
                card.style.transform = 'scale(1.05)';
                card.style.zIndex = '100';
            } else {
                card.style.transform = '';
                card.style.zIndex = '';
            }
        });
    });
}

// Knowledge Constellation Interactive Features
function initKnowledgeConstellation() {
    const planets = document.querySelectorAll('.knowledge-planet');
    const center = document.querySelector('.knowledge-center');
    planets.forEach(planet => {
        planet.addEventListener('click', () => {
            const rect = planet.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            for (let i = 0; i < 8; i++) {
                setTimeout(() => {
                    createKnowledgeSpark(centerX, centerY);
                }, i * 100);
            }
            planet.style.transform = 'scale(1.3)';
            planet.style.boxShadow = '0 0 30px currentColor';
            setTimeout(() => {
                planet.style.transform = '';
                planet.style.boxShadow = '';
            }, 1000);
        });
        planet.addEventListener('mouseenter', () => {
            planet.style.animationPlayState = 'paused';
            planet.style.transform = 'scale(1.2)';
        });
        planet.addEventListener('mouseleave', () => {
            planet.style.animationPlayState = 'running';
            planet.style.transform = '';
        });
    });
    if (center) {
        center.addEventListener('click', () => {
            planets.forEach((planet, index) => {
                setTimeout(() => {
                    planet.style.transform = 'scale(1.4)';
                    setTimeout(() => {
                        planet.style.transform = '';
                    }, 300);
                }, index * 200);
            });
            const rect = center.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    createKnowledgeSpark(centerX, centerY);
                }, i * 50);
            }
        });
    }
}

// Create Knowledge Sparks
function createKnowledgeSpark(x, y) {
    const spark = document.createElement('div');
    spark.style.position = 'fixed';
    spark.style.left = x + 'px';
    spark.style.top = y + 'px';
    spark.style.width = '4px';
    spark.style.height = '4px';
    spark.style.background = '#00ffff';
    spark.style.borderRadius = '50%';
    spark.style.pointerEvents = 'none';
    spark.style.zIndex = '9999';
    spark.style.boxShadow = '0 0 10px #00ffff';
    document.body.appendChild(spark);
    const angle = Math.random() * Math.PI * 2;
    const distance = 50 + Math.random() * 100;
    const endX = x + Math.cos(angle) * distance;
    const endY = y + Math.sin(angle) * distance;
    spark.animate([
        { 
            transform: 'translate(0, 0) scale(1)', 
            opacity: 1 
        },
        { 
            transform: `translate(${endX - x}px, ${endY - y}px) scale(0)`, 
            opacity: 0 
        }
    ], {
        duration: 1000,
        easing: 'ease-out'
    }).onfinish = () => spark.remove();
}

// Section-Specific Particle Systems
function initSectionParticles() {
    const galaxySections = document.querySelectorAll('.galaxy-section');
    galaxySections.forEach(section => {
        createSectionParticles(section, 'galaxy');
    });
    const deepSpaceSections = document.querySelectorAll('.deep-space-bg');
    deepSpaceSections.forEach(section => {
        createSectionParticles(section, 'deep-space');
    });
}
function createSectionParticles(section, type) {
    const particleCount = type === 'galaxy' ? 15 : 12;
    for (let i = 0; i < particleCount; i++) {
        setTimeout(() => {
            createSectionParticle(section, type);
        }, i * 300);
    }
    setInterval(() => {
        createSectionParticle(section, type);
    }, type === 'galaxy' ? 2000 : 2500);
}
function createSectionParticle(section, type) {
    const particle = document.createElement('div');
    const rect = section.getBoundingClientRect();
    if (type === 'galaxy') {
        const colors = ['cyan', 'purple', 'pink', 'blue'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.className = `space-particle particle-medium particle-colored particle-${color}`;
        particle.style.animation = 'galaxy-particle-float 25s linear infinite';
    } else {
        const colors = ['blue', 'purple', 'cyan'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.className = `space-particle particle-small particle-colored particle-${color}`;
        particle.style.animation = 'deep-space-particle-float 20s linear infinite';
    }
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = (rect.top + window.scrollY + Math.random() * rect.height) + 'px';
    particle.style.position = 'absolute';
    particle.style.zIndex = '1';
    document.body.appendChild(particle);
    const duration = type === 'galaxy' ? 25000 : 20000;
    setTimeout(() => {
        if (particle.parentNode) {
            particle.remove();
        }
    }, duration);
}

// Initialize Everything
let lenis;
document.addEventListener('DOMContentLoaded', () => {
    lenis = initLenis();
    initAdvancedScrollReveal();
    initMagneticEffect();
    initSmoothNavigation();
    createStars();
    typeText();
    setTimeout(() => {
        init3DSkillSpheres();
    }, 500);
    initAchievementTimeline();
    initEducationInteractivity();
    initKnowledgeConstellation();
    setInterval(createShootingStar, 3000);
    setInterval(createSpaceParticle, 800);
    initSectionParticles();
    for (let i = 0; i < 20; i++) {
        setTimeout(createSpaceParticle, i * 200);
    }
});