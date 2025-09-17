# ProSoccer Training Website

A modern, responsive NextJS website for professional soccer training services offering personalized 1-on-1 coaching sessions. Built with TypeScript, Tailwind CSS, and integrated with Google Forms for seamless booking management.

![ProSoccer Training](https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)

## 🚀 Features

### Core Features
- **Modern Responsive Design** - Mobile-first approach that works perfectly on all devices
- **Professional Landing Page** - Hero section, about, services, testimonials, and contact
- **Booking System** - Comprehensive form with validation and Google Forms integration
- **Google Calendar Integration** - Optional advanced calendar management
- **SEO Optimized** - Proper meta tags, sitemap, robots.txt, and structured data
- **Accessibility First** - ARIA labels, keyboard navigation, and screen reader support

### Technical Features
- **NextJS 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **React Hook Form** with Zod validation
- **Framer Motion** for smooth animations
- **Lucide React** for beautiful icons

### Form Features
- Smart age-based parent information requirements
- Real-time form validation with helpful error messages
- Multiple training focus options
- Time slot selection with availability
- Loading states and success confirmations
- CORS-compatible Google Forms submission

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Form Handling:** React Hook Form + Zod
- **Icons:** Lucide React
- **Animations:** CSS Transitions + Custom Keyframes
- **Deployment:** Ready for Vercel, Netlify, or any hosting platform

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Quick Start

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd 1on1
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp env.example .env.local
   ```
   
   Edit `.env.local` with your actual values (see [Google Integration Setup](./docs/GOOGLE_INTEGRATION_SETUP.md))

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Google Forms Integration

The booking form is designed to integrate seamlessly with Google Forms. Follow these steps:

1. **Create a Google Form** with the required fields
2. **Get the Form ID** from the URL
3. **Extract entry IDs** from the form HTML
4. **Update the code** with your specific IDs

Detailed instructions: [Google Integration Setup Guide](./docs/GOOGLE_INTEGRATION_SETUP.md)

### Customization

#### Brand Colors
Update the color palette in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Your primary color palette
  },
  accent: {
    // Your accent color palette
  }
}
```

#### Content Updates
- **Company Info:** Update in `components/Header.tsx` and `components/Footer.tsx`
- **Services:** Modify the services array in `app/page.tsx`
- **Testimonials:** Update the testimonials array in `app/page.tsx`
- **Contact Info:** Update in multiple components and environment variables

#### Images
Replace the Unsplash placeholder images with your own:
- Hero section image
- About section image
- Add your logo and favicon

## 📱 Responsive Design

The website is built mobile-first and includes:
- **Mobile (320px+):** Single column layout, hamburger menu
- **Tablet (768px+):** Two-column layouts, expanded navigation
- **Desktop (1024px+):** Multi-column layouts, full navigation
- **Large screens (1280px+):** Optimized spacing and typography

## 🎨 Design System

### Typography
- **Primary Font:** Inter (Google Fonts)
- **Headings:** Bold weights (600-800)
- **Body:** Regular and medium weights (400-500)

### Color Scheme
- **Primary:** Slate colors for professional appearance
- **Accent:** Customizable accent colors for CTAs and highlights
- **Neutral:** Gray scale for text and backgrounds

### Components
- **Buttons:** Multiple variants (primary, secondary, outline, ghost)
- **Cards:** Consistent shadow and hover effects
- **Forms:** Styled inputs with focus states and validation
- **Navigation:** Responsive with mobile hamburger menu

## 🔍 SEO Features

- **Meta Tags:** Comprehensive meta tags for all pages
- **Open Graph:** Social media sharing optimization
- **Twitter Cards:** Twitter-specific meta tags
- **Sitemap:** Auto-generated XML sitemap
- **Robots.txt:** Search engine crawling instructions
- **Structured Data:** JSON-LD for rich snippets (ready for implementation)

## ♿ Accessibility

- **ARIA Labels:** Proper labeling for screen readers
- **Keyboard Navigation:** Full keyboard support
- **Focus Management:** Visible focus indicators
- **Color Contrast:** WCAG AA compliant color combinations
- **Semantic HTML:** Proper heading hierarchy and landmarks

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify
3. Set up environment variables
4. Configure form handling if needed

### Other Platforms
The project works with any hosting platform that supports Node.js:
- Heroku
- DigitalOcean
- AWS Amplify
- Railway

## 📁 Project Structure

```
1on1/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Landing page
│   ├── robots.ts         # Robots.txt generation
│   ├── sitemap.ts        # Sitemap generation
│   └── schedule/         # Scheduling page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Site footer
│   └── BookingForm.tsx   # Booking form
├── lib/                  # Utility functions
│   ├── types.ts         # TypeScript types
│   ├── utils.ts         # Helper functions
│   └── validations.ts   # Form validation schemas
├── docs/                # Documentation
├── public/              # Static assets
└── config files         # Next.js, Tailwind, TypeScript configs
```

## 🧪 Testing

### Manual Testing Checklist
- [ ] Form validation works correctly
- [ ] Mobile responsiveness on all screen sizes
- [ ] Google Forms integration (if set up)
- [ ] All links work correctly
- [ ] Images load properly
- [ ] Accessibility with screen reader
- [ ] Performance on slow connections

### Automated Testing (Future Enhancement)
Consider adding:
- Jest for unit testing
- Cypress for e2e testing
- Lighthouse CI for performance monitoring

## 🔧 Development Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint

# Type checking
npx tsc --noEmit
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

### Common Issues

1. **Form not submitting:**
   - Check Google Form ID and entry IDs
   - Verify CORS settings
   - Check browser console for errors

2. **Styling issues:**
   - Ensure Tailwind CSS is properly configured
   - Check for conflicting CSS rules
   - Verify responsive breakpoints

3. **TypeScript errors:**
   - Run `npm install` to ensure all types are installed
   - Check for missing imports
   - Verify type definitions

### Getting Help

- Check the [Google Integration Setup Guide](./docs/GOOGLE_INTEGRATION_SETUP.md)
- Review the code comments for implementation details
- Open an issue for bugs or feature requests

## 🎯 Future Enhancements

Potential features to add:
- **User Authentication** - Client portal for booking history
- **Payment Integration** - Stripe or PayPal for online payments
- **Real-time Chat** - Customer support integration
- **Blog/Resources** - Training tips and soccer content
- **Multi-language** - Support for Spanish and other languages
- **Advanced Calendar** - Real-time availability checking
- **Email Automation** - Confirmation and reminder emails
- **Analytics** - Google Analytics and conversion tracking

---

Built with ❤️ for aspiring soccer players and their families. 