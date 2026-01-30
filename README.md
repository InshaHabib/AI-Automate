
# AI-Automate

A modern, responsive React website showcasing AI-powered business automation solutions built with React, Vite, Tailwind CSS, and Framer Motion.

## Live Demo
https://ai-based-business-automation.netlify.app/

## 🚀 Features

- ✅ **Modern React 18** with Vite for blazing-fast development
- ✅ **Tailwind CSS** for beautiful, responsive design
- ✅ **Framer Motion** for smooth animations
- ✅ **React Router** for seamless navigation
- ✅ **Dark Mode** support with toggle
- ✅ **Form Validation** using React Hook Form + Zod
- ✅ **Fully Responsive** - Mobile-first design
- ✅ **SEO Optimized** with meta tags

## 📋 Pages Included

1. **Home** - Hero section, stats, automation solutions overview
2. **Solutions** - Detailed automation solutions (Chatbots, Workflows, CRM, Marketing, Analytics)
3. **How It Works** - 4-step process with timeline
4. **Industries** - Industry-specific use cases (E-commerce, Healthcare, Education, Real Estate, SMBs)
5. **Case Studies** - 3 detailed success stories with metrics
6. **Pricing** - 3 pricing tiers with feature comparison table
7. **Contact** - Contact form + Demo booking with validation

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Routing:** React Router DOM v6
- **Form Management:** React Hook Form
- **Validation:** Zod
- **Icons:** Lucide React

## 📁 Project Structure

```
AI-Automate/
├── public/                  # Static assets
├── src/
│   ├── components/
│   │   ├── layout/         # Header, Footer
│   │   ├── home/           # Hero, Stats, Overview    
│   ├── pages/              # Page components
│   │   ├── Home.jsx
│   │   ├── Solutions.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Industries.jsx
│   │   ├── CaseStudies.jsx
│   │   ├── Pricing.jsx
│   │   └── Contact.jsx
│   ├── App.jsx             # Main app component with routing
│   ├── App.css   
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  primary: { ... },  // Main brand color
  accent: { ... },   // Accent color
}
```

### Content
- Update text content directly in page components (`src/pages/`)
- Modify case studies, pricing plans, and industry examples in their respective pages

### Contact Information
Update contact details in:
- `src/components/layout/Footer.jsx`
- `src/pages/Contact.jsx`

## ✨ Features Implementation

### Dark Mode
- Toggle button in header
- Uses `dark:` Tailwind classes
- Persists using localStorage (can be added)

### Form Validation
- Real-time validation with error messages
- Schema-based validation using Zod
- Submit handlers log data to console (integrate with backend API)

### Animations
- Scroll-triggered animations using Framer Motion
- `whileInView` for performance optimization
- Smooth page transitions

## 🔧 Development Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
```

## 📝 TODO / Future Enhancements

- [ ] Connect contact/demo forms to backend API
- [ ] Add blog section
- [ ] Implement actual authentication
- [ ] Add testimonials carousel
- [ ] Integrate with CMS for dynamic content
- [ ] Add loading states and error boundaries
- [ ] Implement analytics (Google Analytics, etc.)
- [ ] Add automated tests

## 🤝 Support

For questions or support, contact: inshahabib939@gmail.com

## 📄 License

© 2026 Insha Habib. All rights reserved.
This software and its source code are the intellectual property of the author.

<hr />
<p align="center">
  Crafted with passion by <strong>Insha Habib</strong>
</p>

