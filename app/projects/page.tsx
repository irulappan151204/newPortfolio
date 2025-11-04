import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Microscope, Calendar, Clock, Code, Brain, Cpu } from 'lucide-react'
import { AnimatedBackground } from '@/components/3d/animated-background'

export const metadata: Metadata = {
  title: 'Projects | Irulappan T - Python Developer & Data Analyst',
  description: 'Explore my portfolio of Python development, machine learning, and full-stack projects, showcasing innovative solutions and technical excellence.',
}

// Projects based on Irulappan T's portfolio
const projects = [
  {
    id: 'school-management-system',
    title: 'School Management System (Next.js + Prisma + MySQL)',
    description: 'Developing a full-stack school management platform using Next.js, Prisma ORM, and MySQL for seamless data management. Implementing authentication, attendance tracking, grade management, and fee monitoring modules with responsive UI and API-driven backend.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&q=80',
    imageGradient: 'from-purple-500 to-violet-600',
    tags: ['Next.js', 'Prisma', 'MySQL', 'TypeScript', 'Full-Stack'],
    category: 'Full-Stack',
    status: 'Ongoing',
    timeline: '2025',
    year: '2025',
    client: 'Business Project',
    featured: true,
    links: [],
  },
  {
    id: 'daily-staff-report',
    title: 'Daily Staff Report System (Flask Web App)',
    description: 'Built a multi-role Flask web application for daily staff reporting, task tracking, and performance analysis. Integrated AWS RDS for secure and scalable cloud-based data storage with role-based dashboards (Admin, Academic, and MD) with analytics and automated summary reports.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1630',
    imageGradient: 'from-blue-500 to-blue-600',
    tags: ['Flask', 'AWS RDS', 'Python', 'MySQL', 'Role-based Auth'],
    category: 'Full-Stack',
    status: 'Completed',
    timeline: '2025',
    year: '2025',
    client: 'Business Project',
    featured: true,
    links: [],
  },
  {
    id: 'retail-sales-forecasting',
    title: 'AI-Based Retail Sales Forecasting System',
    description: 'Designed an intelligent forecasting model using time-series analysis and LSTM networks to predict future retail sales. Integrated external factors such as seasonality and promotions for improved forecasting accuracy. Deployed with a Flask API and interactive dashboard for visualization and decision support.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&q=80',
    imageGradient: 'from-red-500 to-rose-600',
    tags: ['Python', 'LSTM', 'Time-Series', 'Flask', 'Machine Learning', 'TensorFlow'],
    category: 'AI/ML',
    status: 'Completed',
    timeline: '2024',
    year: '2024',
    client: 'Business Project',
    featured: true,
    links: [],
  },
  {
    id: 'rag-llm-pdf-query',
    title: 'RAG-Based LLM PDF Query System',
    description: 'Created a RAG-based LLM system enabling users to upload PDF files, process their content, and retrieve context-aware answers via natural language queries. Built using LangChain, Chroma, and Ollama for embedding generation and conversational retrieval. Designed an interactive chat interface for real-time, document-driven AI assistance.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&q=80',
    imageGradient: 'from-cyan-500 to-blue-600',
    tags: ['LangChain', 'Chroma', 'Ollama', 'RAG', 'LLM', 'Python', 'AI'],
    category: 'AI/ML',
    status: 'Completed',
    timeline: '2024',
    year: '2024',
    client: 'Business Project',
    featured: true,
    links: [],
  },
  {
    id: 'paddy-disease-identification',
    title: 'Paddy Disease Identification using Deep Learning',
    description: 'Developed a convolutional neural network (CNN)-based deep learning model for paddy leaf disease classification. Performed image preprocessing using augmentation, normalization, and segmentation to enhance model accuracy. Utilized transfer learning with EfficientNetB0 to achieve high precision in disease detection and classification. Implemented a visualization dashboard for model predictions and performance tracking.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop&q=80',
    imageGradient: 'from-green-500 to-emerald-600',
    tags: ['Python', 'CNN', 'Deep Learning', 'TensorFlow', 'EfficientNetB0', 'Image Processing'],
    category: 'AI/ML',
    status: 'Completed',
    timeline: '2023',
    year: '2023',
    client: 'Business Project',
    featured: true,
    links: [],
  },
  {
    id: 'portfolio-website',
    title: 'Professional Portfolio Website (Next.js + TypeScript)',
    description: 'Designed and developed a modern, responsive portfolio website showcasing professional projects, skills, and experience. Built with Next.js 15, TypeScript, and Tailwind CSS for optimal performance and SEO. Features include interactive 3D animated backgrounds, dynamic project showcases, contact form with email integration, responsive design across all devices, and optimized image loading. Implemented lazy loading, code splitting, and modern web performance best practices. The site includes sections for projects, resume, about, contact, and experience with smooth animations and transitions. Integrated with Resend API for contact form submissions and deployed on Vercel for seamless CI/CD.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop&q=80',
    imageGradient: 'from-indigo-500 to-purple-600',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Three.js', 'Framer Motion', 'Resend API', 'Vercel'],
    category: 'Full-Stack',
    status: 'Completed',
    timeline: '2024',
    year: '2024',
    client: 'Business Project',
    featured: true,
    links: [],
  },
  {
    id: 'data-analytics-dashboard',
    title: 'Data Analytics & Visualization Dashboard (Power BI + SQL)',
    description: 'Developed comprehensive data analytics solutions using SQL, Power BI, and Python for educational institutions and business clients. Created interactive dashboards that transform raw data into actionable insights through advanced data modeling, ETL workflows, and automated reporting. Implemented complex SQL queries for data extraction, transformation, and aggregation across multiple databases. Designed visually appealing Power BI dashboards with drill-down capabilities, real-time data refresh, and custom DAX measures. Automated data pipeline processes using Python scripts for data cleaning, validation, and scheduled updates. Delivered insights on academic performance trends, operational efficiency metrics, and business intelligence reports that enabled data-driven decision-making for stakeholders.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80',
    imageGradient: 'from-orange-500 to-amber-600',
    tags: ['Power BI', 'SQL', 'Python', 'Data Analytics', 'ETL', 'DAX', 'Data Visualization', 'Business Intelligence'],
    category: 'AI/ML',
    status: 'Completed',
    timeline: '2024',
    year: '2024',
    client: 'Business Project',
    featured: true,
    links: [],
  },
]

const categories = ['All', 'AI/ML', 'Full-Stack', 'Research']

const getProjectIcon = (category: string) => {
  switch (category) {
    case 'AI/ML':
      return <Brain className="w-8 h-8" />
    case 'Full-Stack':
      return <Code className="w-8 h-8" />
    case 'Research':
      return <Microscope className="w-8 h-8" />
    default:
      return <Cpu className="w-8 h-8" />
  }
}

// Small icon variant for category tabs
const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'AI/ML':
      return <Brain className="w-4 h-4" />
    case 'Full-Stack':
      return <Code className="w-4 h-4" />
    case 'Research':
      return <Microscope className="w-4 h-4" />
    default:
      return <Cpu className="w-4 h-4" />
  }
}

export default function ProjectsPage() {
  // Counts per category for tab badges
  const categoryCounts: Record<string, number> = Object.fromEntries(
    categories.map((c) => [
      c,
      c === 'All' ? projects.length : projects.filter((p) => p.category === c).length,
    ])
  )

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* 3D Animated Background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <AnimatedBackground />
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                My Projects
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                A showcase of innovative solutions, from AI-powered applications to full-stack platforms. Each project represents a unique challenge solved with cutting-edge technology and best practices.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary" className="text-sm">
                  Full-Stack Development
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  Multiple Industries
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  AI/ML Specialist
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="pb-16 lg:pb-24">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="All" className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="h-auto rounded-full bg-background/50 supports-[backdrop-filter]:bg-background/60 backdrop-blur border border-primary/10 shadow-sm p-1 gap-1">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category}
                      value={category}
                      className="group relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-all
                               hover:text-foreground hover:bg-background/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30
                               data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm data-[state=active]:ring-1 data-[state=active]:ring-primary/20"
                    >
                      <span className="flex items-center gap-2">
                        <span className="opacity-80">{getCategoryIcon(category)}</span>
                        <span>{category}</span>
                        <span
                          className="ml-1 inline-flex items-center justify-center text-[10px] font-semibold px-2 py-0.5 rounded-full
                                     bg-primary/10 text-primary group-data-[state=active]:bg-primary group-data-[state=active]:text-primary-foreground"
                        >
                          {categoryCounts[category]}
                        </span>
                      </span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {categories.map((category) => (
                <TabsContent key={category} value={category}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {projects
                      .filter((project) => category === 'All' || project.category === category)
                      .map((project, index) => (
                        <Card 
                          key={project.id} 
                          className={`flex flex-col overflow-hidden group hover:shadow-2xl transition-all duration-500 border-2 ${
                            index % 2 === 0 
                              ? 'hover:border-primary/50' 
                              : 'hover:border-accent/50'
                          } bg-card/80 backdrop-blur-sm`}
                        >
                          {/* Image Section with Overlay */}
                          <div className="relative h-72 overflow-hidden">
                            {project.image ? (
                              <Image
                                src={project.image}
                                alt={project.title}
                                width={600}
                                height={400}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              />
                            ) : (
                              <div className={`w-full h-full bg-gradient-to-br ${project.imageGradient} flex flex-col items-center justify-center group-hover:scale-110 transition-transform duration-700 relative`}>
                                <div className="text-white text-center p-4 z-10">
                                  <div className="mb-3 opacity-80">
                                    {getProjectIcon(project.category)}
                                  </div>
                                  <h3 className="font-bold text-lg mb-1 line-clamp-2">{project.title}</h3>
                                  <p className="text-sm opacity-80">{project.category}</p>
                                </div>
                                <div className="absolute inset-0 bg-black/20"></div>
                              </div>
                            )}
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300" />
                            
                            {/* Status and Category Badges */}
                            <div className="absolute top-4 left-4 flex gap-2">
                              <Badge
                                variant={project.status === 'Completed' ? 'default' : 'secondary'}
                                className="text-xs backdrop-blur-sm bg-background/80"
                              >
                                {project.status}
                              </Badge>
                              <Badge variant="outline" className="text-xs backdrop-blur-sm bg-background/80">
                                {project.category}
                              </Badge>
                            </div>
                            
                            {/* Featured Badge */}
                            {project.featured && (
                              <div className="absolute top-4 right-4">
                                <Badge variant="outline" className="text-xs bg-primary/20 backdrop-blur-sm border-primary/50">
                                  ⭐ Featured
                                </Badge>
                              </div>
                            )}
                          </div>

                          {/* Content Section */}
                          <div className="flex flex-col flex-grow p-6">
                            <div className="mb-4">
                              <h3 className="text-2xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                                {project.title}
                              </h3>
                              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                {project.description}
                              </p>
                            </div>

                            {/* Metadata */}
                            <div className="flex items-center justify-between mb-4 pb-4 border-b border-border/50">
                              <div className="flex items-center text-xs text-muted-foreground">
                                <Calendar className="w-4 h-4 mr-1.5" />
                                <span>{project.year}</span>
                              </div>
                              <div className="flex items-center text-xs text-muted-foreground">
                                <Clock className="w-4 h-4 mr-1.5" />
                                <span>{project.timeline}</span>
                              </div>
                              <Badge variant="secondary" className="text-xs">
                                {project.client}
                              </Badge>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-auto">
                              {project.tags.map((tag) => (
                                <Badge 
                                  key={tag} 
                                  variant="secondary" 
                                  className="text-xs bg-muted/50 hover:bg-muted transition-colors"
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how I can help bring your vision to life with innovative AI solutions and robust full-stack development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Start a Conversation</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/resume">Download Resume</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}