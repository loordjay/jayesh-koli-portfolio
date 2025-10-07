


document.addEventListener('DOMContentLoaded', () => {
  const skillProgressBars = document.querySelectorAll('.skill-progress');
  skillProgressBars.forEach(bar => {
    const width = bar.getAttribute('data-width');
    if (width) {
      setTimeout(() => {
        bar.style.width = width + '%';
      }, 500);
    }
  });

  // Variables for navigation elements
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const navbar = document.getElementById('navbar');
  const backToTop = document.getElementById('back-to-top');
  const themeToggle = document.getElementById('theme-toggle');


  // Initialize
  initializeAnimations();
  initializeSkillBars();
  initializeTypingEffect();
  initializeProjectFilters();
  initializeScrollEffects();
  initializeTheme();
  initializeContactForm();

// Initialize theme on page load
function initializeTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  let theme = 'light';

  if (savedTheme === 'dark' || savedTheme === 'light') {
    theme = savedTheme;
  } else if (prefersDark) {
    theme = 'dark';
  }

  document.documentElement.setAttribute('data-theme', theme);
  updateThemeIcon(theme);
}

  // Navigation
  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // Navbar scroll effect
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
      backToTop.classList.add('visible');
    } else {
      navbar.classList.remove('scrolled');
      backToTop.classList.remove('visible');
    }
    
    updateActiveNavLink();
  });

  // Back to top button
  backToTop.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Theme toggle
  themeToggle.addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });
});

// Update active navigation link based on scroll position
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPos = window.scrollY + 100;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
      });
      if (navLink) {
        navLink.classList.add('active');
      }
    }
  });
}

// Smooth scrolling for navigation links
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

// Typing effect for hero title
function initializeTypingEffect() {
  const typingText = document.querySelector('.typing-text');
  if (!typingText) return;

  const text = "Hi, I'm Jayesh Koli";
  const speed = 100;
  let i = 0;

  typingText.textContent = '';

  function typeWriter() {
    if (i < text.length) {
      typingText.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  // Start typing effect after a short delay
  setTimeout(typeWriter, 1000);
}

// Skill bars animation
function initializeSkillBars() {
  const skillBars = document.querySelectorAll('.skill-progress');
  
  const animateSkillBars = () => {
    skillBars.forEach(bar => {
      const rect = bar.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      if (isVisible) {
        const width = bar.getAttribute('data-width');
        if (width) {
          bar.style.width = width + '%';
        }
      }
    });
  };

  animateSkillBars();
  window.addEventListener('scroll', animateSkillBars);
}

// Other initialization functions (placeholders)
function initializeAnimations() {}
function initializeProjectFilters() {}
function initializeScrollEffects() {}
function initializeContactForm() {}

// Theme icon update function
function updateThemeIcon(theme) {
  const themeToggle = document.getElementById('theme-toggle');
  const icon = themeToggle.querySelector('i');
  icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}



window.addEventListener('DOMContentLoaded', () => {
  const codeBlocks = document.querySelectorAll('.code-animation');

  codeBlocks.forEach(codeBlock => {
    const fullText = codeBlock.textContent.trim();

    let index = 0;

    function typeWriter() {
      if (index <= fullText.length) {
        codeBlock.textContent = fullText.substring(0, index);
        index++;
        setTimeout(typeWriter, 40);
      } else {
        setTimeout(() => {
          index = 0;
          typeWriter();
        }, 2500); // pause 2 sec before looping
      }
    }

    typeWriter();
  });
});





document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const form = this;
  const formData = new FormData(form);
  const alertBox = document.getElementById('form-alert');

  fetch(form.action, {
    method: form.method,
    body: formData,
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alertBox.className = 'form-alert success';
      alertBox.textContent = 'Message sent successfully!';
      alertBox.style.display = 'block';
      form.reset();
    } else {
      alertBox.className = 'form-alert error';
      alertBox.textContent = 'There was an error sending your message. Please try again.';
      alertBox.style.display = 'block';
    }
  })
  .catch(error => {
    alertBox.className = 'form-alert error';
    alertBox.textContent = 'There was an error sending your message. Please try again.';
    alertBox.style.display = 'block';
  });
});


  document.getElementById('current-year').textContent = new Date().getFullYear();
