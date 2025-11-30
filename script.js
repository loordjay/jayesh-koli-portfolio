

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

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

// Theme icon update function
function updateThemeIcon(theme) {
  const themeToggle = document.getElementById('theme-toggle');
  const icon = themeToggle.querySelector('i');
  icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// ==========================================
// INITIALIZATION FUNCTIONS
// ==========================================

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

// Code animation for code blocks
function initializeCodeAnimation() {
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
}

// Initialize projects grid with filtering and see more functionality
function initializeProjectsGrid() {
  const grid = document.getElementById('projectsGrid');
  const cards = Array.from(document.querySelectorAll('.project-card'));
  const seeMoreBtn = document.getElementById('seeMoreBtn');
  const btnText = document.getElementById('btnText');
  const filterBtns = document.querySelectorAll('.filter-btn');

  const INITIAL_LIMIT = 3;
  let isExpanded = false;
  let currentCategory = 'all';

  // Initial Setup: Hide items beyond the limit
  function updateVisibility() {
    // Get items that match the current filter
    const visibleByFilter = cards.filter(card => {
      const category = card.getAttribute('data-category');
      return currentCategory === 'all' || category === currentCategory;
    });

    // Loop through all cards to manage display
    visibleByFilter.forEach((card, index) => {
      // If expanded, show all matching filter.
      // If not expanded, only show up to INITIAL_LIMIT
      if (isExpanded || index < INITIAL_LIMIT) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });

    // Hide cards that don't match filter entirely
    cards.forEach(card => {
      const category = card.getAttribute('data-category');
      if (currentCategory !== 'all' && category !== currentCategory) {
        card.classList.add('hidden');
      }
    });

    // Hide the button if total items in this category <= limit
    if (visibleByFilter.length <= INITIAL_LIMIT) {
      seeMoreBtn.style.display = 'none';
    } else {
      seeMoreBtn.style.display = 'inline-flex';
    }
  }

  // Button Click Event
  seeMoreBtn.addEventListener('click', () => {
    isExpanded = !isExpanded;

    if (isExpanded) {
      btnText.textContent = "See Less";
      seeMoreBtn.classList.add('expanded');
    } else {
      btnText.textContent = "See All Projects";
      seeMoreBtn.classList.remove('expanded');

      // Optional: Scroll back to top of projects if user is far down
      document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    }

    updateVisibility();
  });

  // Filter Button Logic
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active class
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update category and reset expansion state
      currentCategory = btn.getAttribute('data-filter');
      isExpanded = false; // Reset to collapsed view when changing filters

      // Reset button text
      btnText.textContent = "See All Projects";
      seeMoreBtn.classList.remove('expanded');

      updateVisibility();
    });
  });

  // Initialize
  updateVisibility();
}

// Placeholder functions
function initializeAnimations() {}
function initializeProjectFilters() {}
function initializeScrollEffects() {}
function initializeContactForm() {}

// ==========================================
// EVENT LISTENERS
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  // Variables for navigation elements
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const navbar = document.getElementById('navbar');
  const backToTop = document.getElementById('back-to-top');
  const themeToggle = document.getElementById('theme-toggle');

  // Initialize all components
  initializeTheme();
  initializeTypingEffect();
  initializeSkillBars();
  initializeCodeAnimation();
  initializeProjectsGrid();
  initializeAnimations();
  initializeProjectFilters();
  initializeScrollEffects();
  initializeContactForm();

  // Navigation hamburger menu
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


  // Certification Modal Logic
  const openBtn = document.getElementById('openBtn');
  const certModal = document.getElementById('certModal');
  const closeBtn = document.getElementById('closeBtn');

  openBtn.addEventListener('click', () => {
    certModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  });

  closeBtn.addEventListener('click', () => {
    certModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  });

  // Close Modal when clicking outside
  certModal.addEventListener('click', (e) => {
    if (e.target === certModal) {
      certModal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });


  // Image Viewer (Lightbox) Logic
  const imageViewer = document.getElementById('imageViewer');
  const viewerImage = document.getElementById('viewerImage');
  const closeViewerBtn = document.getElementById('closeViewerBtn');
  const certItems = document.querySelectorAll('.cert-item');

  certItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      viewerImage.src = img.src;
      viewerImage.alt = img.alt;
      imageViewer.classList.add('active');
    });
  });

  closeViewerBtn.addEventListener('click', () => {
    imageViewer.classList.remove('active');
  });

  imageViewer.addEventListener('click', (e) => {
    if (e.target === imageViewer) {
      imageViewer.classList.remove('active');
    }
  });
});

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


// Loader on window load
window.addEventListener('load', () => {
  // Simulating a network request or heavy processing with setTimeout
  // In a real app, this would be an `await fetch()` or document ready check
  setTimeout(() => {
    const loader = document.getElementById('loader-wrapper');
    const content = document.getElementById('main-content');

    // Add class to hide loader (triggers CSS opacity transition)
    loader.classList.add('loaded');

    // Add class to show content (triggers CSS transform/opacity transition)
    content.classList.add('visible');

    // Enable scrolling on the body again
    document.body.style.overflow = 'auto';

    // Optional: Remove loader from DOM entirely after transition to clean up
    setTimeout(() => {
      loader.style.display = 'none';
    }, 600); // Matches the CSS transition duration (0.6s)

  }, 2000); // 3000ms = 3 seconds delay for demo purposes
});


// website contact form submission 

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


