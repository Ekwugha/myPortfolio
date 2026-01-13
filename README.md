# Developer Portfolio

A futuristic, ultra-modern developer portfolio built with Next.js, React, Tailwind CSS, and Three.js.

## Features

- 🎨 **Futuristic Design** - Clean, minimalist, and visually stunning UI
- 🌓 **Dark/Light Mode** - Smooth theme transitions with system preference detection
- 🎭 **3D Animations** - Interactive 3D floating shapes using React Three Fiber
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ⚡ **Performance Optimized** - Fast loading times and smooth animations
- 🎯 **Interactive Sections** - Hero, About, Projects, Experience, and Contact sections
- 🔄 **Smooth Animations** - Scroll-triggered animations using Framer Motion
- 📧 **Contact Form** - Animated form with validation

## Tech Stack

- **Framework:** Next.js 14 (React 18)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **3D Graphics:** React Three Fiber, Three.js
- **Icons:** React Icons
- **TypeScript:** Full type safety

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## Project Structure

```
myPortfolio/
├── components/          # React components
│   ├── Nav.tsx         # Navigation with theme toggle
│   ├── Hero.tsx        # Hero section with 3D animations
│   ├── About.tsx       # About section with skills
│   ├── Projects.tsx    # Projects grid with modal
│   ├── Timeline.tsx    # Experience timeline
│   └── Contact.tsx     # Contact form
├── contexts/           # React contexts
│   └── ThemeContext.tsx # Theme management
├── pages/              # Next.js pages
│   ├── _app.tsx        # App wrapper with theme provider
│   └── index.tsx       # Main page
├── styles/             # Global styles
│   └── globals.css     # Tailwind CSS and custom styles
└── public/             # Static assets
```

## Customization

### Update Personal Information

1. **About Section** (`components/About.tsx`): Update the bio and skills
2. **Projects** (`components/Projects.tsx`): Replace project data with your own
3. **Experience** (`components/Timeline.tsx`): Update timeline items
4. **Contact** (`components/Contact.tsx`): Update social links and email

### Theme Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
colors: {
  primary: {
    // Your custom colors
  }
}
```

### 3D Background

The 3D floating shapes in the Hero section can be customized in `components/Hero.tsx`:

- Adjust colors in the `FloatingShape` component
- Change animation speed in `OrbitControls`
- Modify sphere parameters

## Features in Detail

### Dark/Light Mode

- Automatic system preference detection
- Smooth transitions between themes
- Persistent theme selection (localStorage)
- Toggle button in navigation

### Animations

- Scroll-triggered entry animations
- Hover effects on interactive elements
- Smooth page transitions
- Micro-interactions throughout

### Projects Section

- Responsive grid layout
- Hover effects with tech stack preview
- Modal with detailed project information
- Links to live demos and GitHub repositories

### Contact Form

- Field validation
- Email format validation
- Smooth animations
- Success/error feedback
- Social media links

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- 3D graphics with [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
