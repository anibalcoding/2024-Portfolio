# Anibal Cuevas - Portfolio Website

A modern, responsive portfolio website built with the latest web technologies and best practices.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Open Sans, Lato)
- **Deployment**: Static Export Ready

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Mobile-first approach with responsive design
- **Performance**: Optimized for speed and SEO
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Interactive**: Smooth animations and micro-interactions
- **Portfolio Showcase**: Project gallery with detailed modals
- **AI Chatbot**: Interactive chatbot for portfolio information
- **Work Experience**: Timeline-based work history
- **Skills Display**: Comprehensive skills and technologies showcase

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd 2024-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
# or
yarn build
```

### Static Export

```bash
npm run build
# The static files will be generated in the 'out' directory
```

## 📁 Project Structure

```
2024-Portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Homepage component
│   └── globals.css        # Global styles
├── components/             # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── TechStack.tsx      # Technologies showcase
│   ├── Skills.tsx         # Skills and expertise
│   ├── Projects.tsx       # Portfolio projects
│   ├── ProjectModal.tsx   # Project detail modal
│   ├── WorkExperience.tsx # Work history timeline
│   ├── Chatbot.tsx        # AI chatbot interface
│   └── Loading.tsx        # Loading component
├── imgs/                  # Image assets
├── public/                # Static assets
├── tailwind.config.js     # Tailwind CSS configuration
├── next.config.js         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#e2f8ff',
    400: '#61dafb',
    600: '#0a61ae',
    900: '#00112c',
  },
  secondary: {
    400: '#ffda4b',
    600: '#ffc800',
  },
  // ... more colors
}
```

### Content
Update the content in the respective component files:
- Personal information in `components/Hero.tsx`
- Skills in `components/Skills.tsx`
- Projects in `components/Projects.tsx`
- Work experience in `components/WorkExperience.tsx`

### Images
Replace images in the `imgs/` directory and update the paths in the components.

## 📱 Responsive Design

The website is built with a mobile-first approach and includes:
- Responsive grid layouts
- Mobile navigation menu
- Touch-friendly interactions
- Optimized typography scaling
- Flexible image handling

## ♿ Accessibility

- Semantic HTML structure
- Proper ARIA labels
- Keyboard navigation support
- High contrast color scheme
- Screen reader compatibility
- Focus management

## 🚀 Performance

- Image optimization with Next.js Image component
- Lazy loading for components
- Optimized animations
- Efficient CSS with Tailwind
- Static export capability

## 📧 Contact

- **Email**: anibalcoding@gmail.com
- **GitHub**: [anibalcoding](https://github.com/anibalcoding)
- **LinkedIn**: [Anibal Cuevas](https://www.linkedin.com/in/anibal-cuevas-393870132/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Built with ❤️ by Anibal Cuevas**
