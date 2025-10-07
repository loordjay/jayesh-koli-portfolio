# Jayesh Koli - Full Stack Developer Portfolio

A modern, responsive personal portfolio website showcasing my skills, projects, and experience as a full-stack developer. Built with clean HTML, CSS, and JavaScript, featuring smooth animations and a dark/light theme toggle.

## 🚀 Features

- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Dark/Light Theme Toggle**: Switch between themes with smooth transitions
- **Interactive Elements**:
  - Typing animation in hero section
  - Animated skill progress bars
  - Smooth scrolling navigation
  - Floating icons and hover effects
- **Sections**:
  - Hero with introduction and social links
  - About section with stats and code snippet
  - Skills showcase with progress bars
  - Featured projects grid
  - Experience timeline
  - Contact form with Web3Forms integration
- **Performance Optimized**: Fast loading with minimal dependencies

## 🛠️ Technologies Used

### Frontend
- **HTML5**: Semantic markup and structure
- **CSS3**: Custom properties (CSS variables), Flexbox, Grid, animations
- **JavaScript (ES6+)**: DOM manipulation, event handling, animations

### Libraries & Frameworks
- **Font Awesome**: Icons for social links and UI elements
- **Devicon**: Technology stack icons
- **Web3Forms**: Contact form backend service

### Tools
- **Google Fonts**: Custom typography (Exo 2, Bitcount fonts)
- **CDNs**: External resources for icons and fonts

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/loordjay/jayesh-koli-portfolio.git
   cd jayesh-koli-portfolio
   ```

2. **Open in browser**:
   - Simply open `index.html` in your web browser
   - No build process or server required for basic viewing

3. **Optional: Run with a local server** (recommended for full functionality):
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx serve .

   # Using PHP
   php -S localhost:8000
   ```
   Then visit `http://localhost:8000`

## 🎯 Usage

- **Navigation**: Use the navbar to jump to different sections
- **Theme Toggle**: Click the moon/sun icon in the navbar to switch themes
- **Mobile Menu**: Tap the hamburger menu on mobile devices
- **Contact Form**: Fill out the form to send messages (requires internet connection for Web3Forms)
- **Resume Download**: Click the "Resume Download" button to download the CV

## 📁 Project Structure

```
jayesh-koli-portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
├── Jayesh_Koli_CV.pdf  # Resume file
├── README.md           # This file
│
└── Img/                # Image assets
    ├── Lord-r.png      # Logo
    ├── butyaaa.jpg     # Profile picture
    ├── cloud.png       # Project thumbnail
    ├── corporate.png   # Project thumbnail
    ├── earbuds.png     # Project thumbnail
    ├── eare.png        # Project thumbnail
    ├── ear.png         # Project thumbnail
    ├── fitness.png     # Project thumbnail
    ├── spaceship.png   # Project thumbnail
    └── traval.png      # Project thumbnail
```

## 🎨 Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
  --primary-color: #5c76e6;
  --secondary-color: #9653d9;
  --accent-color: #9b5ea2;
  /* ... other variables */
}
```

### Content
Update personal information in `index.html`:
- Hero section: Name, subtitle, description
- About section: Personal details and stats
- Skills section: Technologies and proficiency levels
- Projects section: Project details and links
- Experience section: Timeline entries
- Contact section: Contact information

### Contact Form
Replace the Web3Forms access key in `index.html`:
```html
<input type="hidden" name="access_key" value="YOUR_NEW_ACCESS_KEY">
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Jayesh Koli**
- Email: jayeshkoli816@gmail.com
- LinkedIn: [Jayesh Koli](https://www.linkedin.com/in/jayesh-koli-0aa2b6217/)
- Twitter: [@Lord_Jayesh_007](https://x.com/Lord_Jayesh_007)
- Instagram: [@lord_jayesh](https://www.instagram.com/lord_jayesh)
- GitHub: [loordjay](https://github.com/loordjay)

---

⭐ **Star this repo** if you found it helpful!

Made with ❤️ by Jayesh Koli

---

## 📸 Screenshots

Here are some screenshots showcasing the portfolio website:

- **Home / Hero Section**  
  ![Hero Section](./Img/hero-screenshot.png)  
  Introduction with typing animation and social links.

- **Skills Section**  
  ![Skills Section](./Img/skills-screenshot.png)  
  Animated skill bars and technology icons.

- **Projects Section**  
  ![Projects Section](./Img/projects-screenshot.png)  
  Featured projects with hover effects and links.

- **Experience Section**  
  ![Experience Section](./Img/experience-screenshot.png)  
  Timeline of professional experience.

- **Contact Section**  
  ![Contact Section](./Img/contact-screenshot.png)  
  Contact form with validation and social links.

*(Note: Replace the placeholder images with actual screenshots in the `Img` folder.)*

---

## 🚀 Deployment

You can deploy this portfolio website easily using popular static site hosting services:

### GitHub Pages

1. Push your code to a GitHub repository.
2. Go to the repository settings.
3. Under "Pages", select the branch (usually `main` or `master`) and root folder.
4. Save and wait for the site to be published at `https://<your-username>.github.io/<repository-name>/`.

### Netlify

1. Create a free account at [Netlify](https://www.netlify.com/).
2. Connect your GitHub repository.
3. Configure build settings (no build command needed for static sites).
4. Deploy the site and get a live URL.

---

## 🌐 Browser Support

This portfolio website is tested and works well on the latest versions of:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

It is also responsive and usable on mobile browsers.

---

## ⚡ Performance

- Minimal external dependencies for fast loading.
- Optimized images and assets.
- CSS and JS are lightweight and efficient.
- Smooth animations without jank.

---

## 🤝 Acknowledgments

- [Font Awesome](https://fontawesome.com/) for icons.
- [Devicon](https://devicon.dev/) for technology icons.
- [Web3Forms](https://web3forms.com/) for contact form backend.
- Google Fonts for beautiful typography.
- Inspiration from various portfolio designs and UI/UX best practices.

---

## 🤝 Contributing (Expanded)

Contributions are welcome! Here’s how you can help:

- Report bugs or issues via GitHub Issues.
- Suggest new features or improvements.
- Submit pull requests with clear descriptions and tests.
- Help improve documentation and add examples.
- Share this project with others.

Please follow the existing code style and conventions.

