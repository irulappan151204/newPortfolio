"use client";

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Microscope, Calendar, Clock, Code, Brain, Cpu, X,
  ExternalLink, Github, ChevronRight, Sparkles, Eye,
  CheckCircle, Layers
} from 'lucide-react'
import { AnimatedBackground } from '@/components/3d/animated-background'
import { motion, AnimatePresence } from 'framer-motion'

// Projects based on Irulappan T's portfolio
const projects = [
  {
    id: 'school-management-system',
    title: 'School Management System',
    shortTitle: 'School ERP',
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
    highlights: [
      'Role-based Authentication System',
      'Real-time Attendance Tracking',
      'Grade Management Module',
      'Fee Monitoring Dashboard'
    ],
    links: [],
  },
  {
    id: 'daily-staff-report',
    title: 'Daily Staff Report System',
    shortTitle: 'Staff Reports',
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
    highlights: [
      'Multi-role Dashboard System',
      'AWS RDS Integration',
      'Automated Summary Reports',
      'Performance Analytics'
    ],
    links: [],
  },
  {
    id: 'retail-sales-forecasting',
    title: 'AI-Based Retail Sales Forecasting',
    shortTitle: 'Sales Forecasting',
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
    highlights: [
      'LSTM Neural Networks',
      'Time-Series Analysis',
      'Flask API Deployment',
      'Interactive Dashboard'
    ],
    links: [],
  },
  {
    id: 'rag-llm-pdf-query',
    title: 'RAG-Based LLM PDF Query System',
    shortTitle: 'RAG PDF Query',
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
    highlights: [
      'LangChain Integration',
      'Vector Database (Chroma)',
      'Natural Language Queries',
      'Real-time Chat Interface'
    ],
    links: [],
  },
  {
    id: 'paddy-disease-identification',
    title: 'Paddy Disease Identification',
    shortTitle: 'Crop Disease AI',
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
    highlights: [
      'CNN Architecture',
      'Transfer Learning (EfficientNetB0)',
      'Image Preprocessing Pipeline',
      'High Accuracy Disease Detection'
    ],
    links: [],
  },
  {
    id: 'portfolio-website',
    title: 'Professional Portfolio Website',
    shortTitle: 'Portfolio Site',
    description: 'Designed and developed a modern, responsive portfolio website showcasing professional projects, skills, and experience. Built with Next.js 15, TypeScript, and Tailwind CSS for optimal performance and SEO. Features include interactive 3D animated backgrounds, dynamic project showcases, contact form with email integration, responsive design across all devices, and optimized image loading.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop&q=80',
    imageGradient: 'from-indigo-500 to-purple-600',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Three.js', 'Framer Motion'],
    category: 'Full-Stack',
    status: 'Completed',
    timeline: '2024',
    year: '2024',
    client: 'Business Project',
    featured: true,
    highlights: [
      '3D Animated Backgrounds',
      'SEO Optimized',
      'Responsive Design',
      'Contact Form Integration'
    ],
    links: [],
  },
  {
    id: 'data-analytics-dashboard',
    title: 'Data Analytics Dashboard',
    shortTitle: 'Analytics Dashboard',
    description: 'Developed comprehensive data analytics solutions using SQL, Power BI, and Python for educational institutions and business clients. Created interactive dashboards that transform raw data into actionable insights through advanced data modeling, ETL workflows, and automated reporting.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80',
    imageGradient: 'from-orange-500 to-amber-600',
    tags: ['Power BI', 'SQL', 'Python', 'Data Analytics', 'ETL', 'DAX'],
    category: 'AI/ML',
    status: 'Completed',
    timeline: '2024',
    year: '2024',
    client: 'Business Project',
    featured: true,
    highlights: [
      'Power BI Dashboards',
      'Complex SQL Queries',
      'ETL Pipelines',
      'Business Intelligence'
    ],
    links: [],
  },
  {
    id: 'customer-churn-prediction',
    title: 'Customer Churn Prediction Engine',
    shortTitle: 'Churn Prediction',
    description: 'Built a predictive machine learning model to identify at-risk customers with 95% accuracy. Utilized XGBoost and Scikit-Learn for classification, with a Streamlit dashboard for real-time inference and visualization of customer risk factors.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80',
    imageGradient: 'from-rose-500 to-pink-600',
    tags: ['Python', 'Scikit-Learn', 'XGBoost', 'Streamlit', 'Pandas'],
    category: 'AI/ML',
    status: 'Completed',
    timeline: '2023',
    year: '2023',
    client: 'Personal Project',
    featured: false,
    highlights: [
      '95% Prediction Accuracy',
      'XGBoost Classification',
      'Real-time Inference API',
      'Interactive Streamlit App'
    ],
    links: [],
  },
  {
    id: 'sentiment-analysis-dashboard',
    title: 'Real-time Sentiment Analysis',
    shortTitle: 'Sentiment Analysis',
    description: 'Developed a real-time sentiment analysis system using BERT and PyTorch to track brand sentiment on social media. Implemented a FastAPI backend to process text streams and a React frontend to visualize sentiment trends and key topics.',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop&q=80',
    imageGradient: 'from-indigo-500 to-blue-600',
    tags: ['BERT', 'PyTorch', 'FastAPI', 'React', 'NLP'],
    category: 'AI/ML',
    status: 'Completed',
    timeline: '2023',
    year: '2023',
    client: 'Personal Project',
    featured: false,
    highlights: [
      'BERT Transformer Model',
      'Real-time Stream Processing',
      'FastAPI Backend',
      'Sentiment Visualization'
    ],
    links: [],
  },
]

const categories = ['All', 'AI/ML', 'Full-Stack']

const getProjectIcon = (category: string) => {
  switch (category) {
    case 'AI/ML':
      return <Brain className="w-6 h-6" />
    case 'Full-Stack':
      return <Code className="w-6 h-6" />
    case 'Research':
      return <Microscope className="w-6 h-6" />
    default:
      return <Cpu className="w-6 h-6" />
  }
}

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

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'AI/ML':
      return 'from-cyan-500 to-blue-600'
    case 'Full-Stack':
      return 'from-purple-500 to-pink-600'
    default:
      return 'from-gray-500 to-gray-600'
  }
}

// Project Detail Modal Component
function ProjectModal({ project, isOpen, onClose }: {
  project: typeof projects[0] | null,
  isOpen: boolean,
  onClose: () => void
}) {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - High Z-index */}
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Container - Higher Z-index than backdrop */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              className="relative w-full max-w-5xl h-[85vh] bg-card rounded-3xl border border-primary/20 shadow-2xl overflow-hidden flex flex-col pointer-events-auto"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white border border-white/20 transition-all hover:scale-110"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Content Wrapper */}
              <div className="flex flex-col lg:flex-row h-full overflow-hidden">
                {/* Image Section */}
                <div className="relative w-full lg:w-5/12 h-64 lg:h-full flex-shrink-0 bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-background/90 via-transparent to-transparent opacity-80" />

                  {/* Floating badges */}
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 lg:hidden">
                    <Badge className={`bg-gradient-to-r ${getCategoryColor(project.category)} border-0 text-white`}>
                      {project.category}
                    </Badge>
                  </div>
                </div>

                {/* Details Section */}
                <div className="flex-1 overflow-y-auto custom-scrollbar bg-background">
                  <div className="p-6 lg:p-10 space-y-8">

                    {/* Header */}
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <Badge
                          className={`px-3 py-1 text-sm bg-gradient-to-r ${getCategoryColor(project.category)} text-white border-0`}
                        >
                          {project.category}
                        </Badge>
                        <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'} className="px-3 py-1 text-sm">
                          {project.status === 'Ongoing' ? '🚀' : '✅'} {project.status}
                        </Badge>
                      </div>

                      <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                        {project.title}
                      </h2>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" /> {project.year}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-current opacity-30" />
                        <span>{project.client}</span>
                        <span className="w-1 h-1 rounded-full bg-current opacity-30" />
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" /> {project.timeline}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <Brain className="w-5 h-5 text-primary" />
                        Project Overview
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {project.description}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="p-6 rounded-2xl bg-secondary/30 border border-primary/10">
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-primary" />
                        Key Features
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {project.highlights.map((highlight, idx) => (
                          <motion.div
                            key={highlight}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + idx * 0.05 }}
                          >
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-foreground/90">{highlight}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Layers className="w-5 h-5 text-primary" />
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-sm px-4 py-1.5 bg-secondary hover:bg-secondary/80 transition-colors"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
                      <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-primary/20 bg-primary hover:bg-primary/90 text-primary-foreground min-w-[160px]" disabled>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live Demo
                      </Button>
                      <Button size="lg" variant="outline" className="w-full sm:w-auto min-w-[160px]" disabled>
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </Button>
                    </div>

                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

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
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">{projects.length} Projects Completed</span>
              </motion.div>

              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                My{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient">
                  Projects
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                A showcase of innovative solutions, from AI-powered applications to full-stack platforms.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  <Brain className="w-3 h-3 mr-1" /> AI/ML
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  <Code className="w-3 h-3 mr-1" /> Full-Stack
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  <Layers className="w-3 h-3 mr-1" /> Data Analytics
                </Badge>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="pb-16 lg:pb-24">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="All" className="w-full">
              <motion.div
                className="flex justify-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <TabsList className="h-auto rounded-full bg-background/50 supports-[backdrop-filter]:bg-background/60 backdrop-blur-xl border border-primary/20 shadow-lg p-1.5 gap-1">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category}
                      value={category}
                      className="group relative rounded-full px-5 py-2.5 text-sm font-medium text-muted-foreground transition-all
                               hover:text-foreground hover:bg-background/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30
                               data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/20 data-[state=active]:to-accent/20 data-[state=active]:text-foreground data-[state=active]:shadow-md data-[state=active]:border data-[state=active]:border-primary/30"
                    >
                      <span className="flex items-center gap-2">
                        <span className="opacity-80">{getCategoryIcon(category)}</span>
                        <span>{category}</span>
                        <span
                          className="ml-1 inline-flex items-center justify-center text-[10px] font-bold px-2 py-0.5 rounded-full
                                     bg-primary/10 text-primary group-data-[state=active]:bg-primary group-data-[state=active]:text-primary-foreground"
                        >
                          {categoryCounts[category]}
                        </span>
                      </span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </motion.div>

              {categories.map((category) => (
                <TabsContent key={category} value={category}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects
                      .filter((project) => category === 'All' || project.category === category)
                      .map((project, index) => (
                        <motion.div
                          key={project.id}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ y: -8 }}
                          className="group cursor-pointer"
                          onClick={() => openModal(project)}
                        >
                          <Card className="h-full overflow-hidden bg-card/60 backdrop-blur-sm border-2 border-transparent hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-primary/10">
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                              <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent opacity-80" />

                              {/* Status Badge */}
                              <div className="absolute top-3 left-3">
                                <Badge
                                  className={`${project.status === 'Ongoing'
                                    ? 'bg-gradient-to-r from-orange-500 to-amber-500'
                                    : 'bg-gradient-to-r from-green-500 to-emerald-500'} border-0 text-white shadow-md`}
                                >
                                  {project.status === 'Ongoing' ? '🚀' : '✅'} {project.status}
                                </Badge>
                              </div>

                              {/* Category Icon */}
                              <div className={`absolute bottom-3 right-3 p-2 rounded-xl bg-gradient-to-br ${getCategoryColor(project.category)} shadow-lg`}>
                                {getProjectIcon(project.category)}
                              </div>

                              {/* View Details Overlay */}
                              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                                  <Eye className="w-4 h-4 text-white" />
                                  <span className="text-white font-medium">View Details</span>
                                </div>
                              </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                              <div className="flex items-center justify-between mb-2">
                                <Badge variant="outline" className="text-xs">
                                  {project.category}
                                </Badge>
                                <span className="text-xs text-muted-foreground flex items-center gap-1">
                                  <Calendar className="w-3 h-3" /> {project.year}
                                </span>
                              </div>

                              <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                                {project.shortTitle}
                              </h3>

                              <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                                {project.description}
                              </p>

                              {/* Tags Preview */}
                              <div className="flex flex-wrap gap-1.5">
                                {project.tags.slice(0, 3).map((tag) => (
                                  <Badge
                                    key={tag}
                                    variant="secondary"
                                    className="text-[10px] px-2 py-0.5"
                                  >
                                    {tag}
                                  </Badge>
                                ))}
                                {project.tags.length > 3 && (
                                  <Badge variant="secondary" className="text-[10px] px-2 py-0.5">
                                    +{project.tags.length - 3}
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </Card>
                        </motion.div>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  )
}