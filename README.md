# Irulappan T - Portfolio Website

A modern, professional portfolio website for Irulappan T, a Python Developer & Data Analyst specializing in AI/ML, full-stack development, and data analytics. Built with Next.js 15, TypeScript, and Tailwind CSS to showcase expertise in machine learning, full-stack development, and data visualization.

## 🚀 Live Demo

[View Live Portfolio](https://github.com/irulappan151204/Portfolio_) (Update with your live URL)

## ✨ Features

### 🎨 Design & UX
- **Premium Dark Theme** - Custom color scheme with professional aesthetic
- **Responsive Design** - Optimized for all devices and screen sizes
- **Modern UI Components** - Built with shadcn/ui for consistent, accessible design
- **3D Animated Backgrounds** - Interactive Three.js animations for enhanced visual appeal
- **Smooth Animations** - Framer Motion animations for enhanced user experience
- **Print-Friendly Resume** - Optimized resume page with PDF download functionality

### 📱 Pages & Sections
- **Homepage** - Hero section, trust indicators, featured projects, services, and CTA
- **Projects** - Filterable portfolio with detailed project showcases (7+ projects)
  - Portfolio Website
  - Data Analytics Dashboard
  - School Management System
  - Daily Staff Report System
  - AI-Based Retail Sales Forecasting
  - RAG-Based LLM PDF Query System
  - Paddy Disease Identification
- **About** - Personal story, values, technical expertise, and achievements
- **Experience** - Professional timeline, education, certifications, and skills
- **Contact** - Interactive form with Resend API integration for email notifications
- **Resume** - Professional PDF-ready resume with download functionality
- **Gallery** - Image gallery showcase

### 🔧 Technical Features
- **Next.js App Router** - Modern routing with SSG optimization
- **TypeScript** - Type-safe development with better IDE support
- **Tailwind CSS** - Utility-first styling with custom design system
- **Component Library** - Reusable UI components with shadcn/ui
- **SEO Optimized** - Metadata, structured data, and performance optimized
- **Contact Form** - Integrated with Resend API for email sending
- **Image Optimization** - Next.js Image component with Unsplash integration
- **Lazy Loading** - Optimized performance with code splitting

## 🛠 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Components:** shadcn/ui
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **3D Graphics:** Three.js, React Three Fiber
- **Forms:** React Hook Form
- **Email Service:** Resend API
- **Deployment:** Vercel (recommended)

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/irulappan151204/Portfolio_.git
   cd Portfolio_
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## 📁 Project Structure

```
portfolio/
├── app/                          # Next.js App Router
│   ├── about/                    # About page
│   ├── contact/                  # Contact page with email API
│   │   └── api/                  # API routes
│   │       └── contact/          # Resend email integration
│   ├── experience/               # Experience & timeline
│   ├── projects/                 # Projects listing
│   │   └── [slug]/              # Individual project pages
│   ├── resume/                   # Resume/CV page
│   ├── gallery/                  # Image gallery
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Homepage
├── components/                   # React components
│   ├── layout/                   # Header, Footer
│   ├── sections/                 # Homepage sections
│   ├── ui/                       # shadcn/ui components
│   └── 3d/                       # Three.js components
├── public/                       # Static assets
│   ├── avatars/                  # Profile images
│   ├── projects/                 # Project screenshots
│   ├── about/                    # About page images
│   ├── gallery/                  # Gallery images
│   └── resume/                   # Resume PDF
└── lib/                          # Utilities & configurations
```

## 🎨 Customization Guide

### 1. Personal Information
Update your details in the following components:
- `components/layout/header.tsx` - Navigation and branding
- `components/layout/footer.tsx` - Contact info and social links
- `components/sections/hero.tsx` - Main headline and CTA
- `app/about/page.tsx` - Personal story and background
- `app/resume/page.tsx` - Professional resume data

### 2. Projects & Portfolio
Add your projects in:
- `app/projects/page.tsx` - Project listings and filtering
- Update project images, descriptions, and tags
- Add project screenshots to `public/projects/`

### 3. Experience & Skills
Update your professional background:
- `app/experience/page.tsx` - Work history, education, certifications
- `components/sections/what-i-do.tsx` - Services and expertise areas
- `components/sections/trust-strip.tsx` - Trust indicators and achievements

### 4. Contact Form
Configure email service:
- Set up Resend API key in `.env.local`
- Update recipient email in `app/api/contact/route.ts`
- Customize form fields in `app/contact/page.tsx`

### 5. Styling & Theme
Modify the design system:
- `tailwind.config.ts` - Colors, fonts, and design tokens
- `app/globals.css` - Global styles and CSS variables
- Individual component styles throughout the codebase

## 📧 Contact Form Setup

The contact form is integrated with Resend API for email sending.

1. **Get Resend API Key:**
   - Sign up at [Resend.com](https://resend.com)
   - Get your API key from the dashboard

2. **Configure Environment:**
   - Add `RESEND_API_KEY` to `.env.local`
   - Update recipient email in `app/api/contact/route.ts`

3. **Test the Form:**
   - Submit the contact form
   - Check your email for the submission

For detailed setup instructions, see `EMAIL_SETUP.md`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy with automatic builds on every push

### Other Platforms
The project works on any platform supporting Next.js:
- Netlify
- Railway
- AWS Amplify
- Any Node.js hosting platform

## 📈 Performance & SEO

- **Next.js Optimization** - Automatic code splitting and optimization
- **Image Optimization** - Next.js Image component with lazy loading
- **SEO:** Meta tags, structured data, semantic HTML
- **Accessibility:** WCAG compliant with proper ARIA labels
- **Performance:** Optimized bundle size and loading times

## 🎯 Key Projects Featured

1. **Professional Portfolio Website** - Modern Next.js portfolio with 3D animations
2. **Data Analytics & Visualization Dashboard** - Power BI + SQL analytics solutions
3. **School Management System** - Full-stack Next.js + Prisma + MySQL
4. **Daily Staff Report System** - Flask web app with AWS RDS
5. **AI-Based Retail Sales Forecasting** - LSTM networks with TensorFlow
6. **RAG-Based LLM PDF Query System** - LangChain + Chroma + Ollama
7. **Paddy Disease Identification** - CNN deep learning with EfficientNetB0

## 🤝 Contributing

This is a personal portfolio template. Feel free to:
1. Fork the repository
2. Customize for your own use
3. Share improvements via pull requests
4. Report issues or suggestions

## 📄 License

GPL-3.0 License - See [LICENSE](LICENSE) file for details

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Lucide](https://lucide.dev/) - Icon library
- [Resend](https://resend.com/) - Email API service
- [Vercel](https://vercel.com/) - Deployment platform
- [Three.js](https://threejs.org/) - 3D graphics library

## 📞 Contact

- **Email:** irulappan8720@gmail.com
- **GitHub:** [@irulappan151204](https://github.com/irulappan151204)
- **LinkedIn:** [Irulappan T](https://www.linkedin.com/in/irulappan-t-b69413279)
- **Location:** Madurai, India

---

Built with ❤️ by [Irulappan T](https://github.com/irulappan151204)
