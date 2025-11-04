'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image' // Import Next.js Image component
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { AnimatedBackground } from '@/components/3d/animated-background'
import {
  Mail,
  MapPin,
  Calendar,
  Clock,
  Send,
  CheckCircle,
  Github,
  Linkedin,
  Cloud,
  ShieldCheck,
  BrainCircuit,
} from 'lucide-react'

// Updated with your real information
const contactMethods = [
  {
    title: 'Email',
    description: 'Best way to reach me',
    value: 'irulappan8720@gmail.com',
    icon: Mail,
    action: 'mailto:irulappan8720@gmail.com',
    primary: true,
  },
  {
    title: 'Location',
    description: 'Based in Madurai, India',
    value: 'Available for remote work globally',
    icon: MapPin,
    action: null,
    primary: false,
  },
]

// Updated with your expertise from your resume
const expertiseAreas = [
  {
    title: 'AI & Machine Learning',
    description: 'Building end-to-end AI-driven applications, integrating RAG pipelines, and developing machine learning models using TensorFlow, PyTorch, and LangChain.',
    icon: BrainCircuit,
  },
  {
    title: 'Full-Stack Development',
    description: 'Developing scalable full-stack solutions using Flask, Next.js, React.js, and deploying on cloud platforms like AWS with focus on automation and performance.',
    icon: ShieldCheck,
  },
  {
    title: 'Data Analytics & Visualization',
    description: 'Conducting in-depth data analysis, building interactive Power BI dashboards, and automating reporting workflows for data-driven decision-making.',
    icon: Cloud,
  },
];


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: 'general',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          projectType: 'general',
        })
      } else {
        alert('Failed to send message. Please try again or email me directly at irulappan8720@gmail.com')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      alert('Failed to send message. Please try again or email me directly at irulappan8720@gmail.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background relative overflow-x-hidden flex items-center justify-center">
        <div className="fixed top-0 left-0 w-full h-full -z-10"><AnimatedBackground /></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-md mx-auto text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold mb-4">Message Sent!</h1>
            <p className="text-muted-foreground mb-8">
              Thank you for reaching out, Irulappan. I&apos;ll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
              <Button variant="outline" asChild><Link href="/">Back to Home</Link></Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-full -z-10"><AnimatedBackground /></div>
      <div className="relative z-10">
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">Python Developer & Data Analyst</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Creative Python Developer
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Creative Python Developer with a deep interest in artificial intelligence and modern web technologies. Skilled in building end-to-end AI-driven applications, integrating RAG pipelines, and developing scalable full-stack solutions. I am <strong>open for collaborative projects</strong> and <strong>freelance opportunities</strong>.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary"><Clock className="w-3 h-3 mr-1" /> 24h Response Time</Badge>
                <Badge variant="secondary"><Calendar className="w-3 h-3 mr-1" /> Open to Opportunities</Badge>
                <Badge variant="secondary"><MapPin className="w-3 h-3 mr-1" /> Remote Available</Badge>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl">Send Me a Message</CardTitle>
                      <CardDescription>
                        Have a research idea, project, or question? Fill out the form below.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name *</label>
                            <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Your full name" />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address *</label>
                            <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required placeholder="your.email@example.com" />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="projectType" className="block text-sm font-medium mb-2">Inquiry Type</label>
                          <select 
                            id="projectType" 
                            name="projectType" 
                            value={formData.projectType} 
                            onChange={handleInputChange} 
                            className="w-full px-3 py-2 border border-input bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent appearance-none cursor-pointer"
                            style={{
                              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                              backgroundPosition: 'right 0.5rem center',
                              backgroundRepeat: 'no-repeat',
                              backgroundSize: '1.5em 1.5em',
                              paddingRight: '2.5rem'
                            }}
                          >
                            <option value="freelance" className="bg-background text-foreground">Freelance Project Inquiry</option>
                            <option value="Research" className="bg-background text-foreground">Research Idea</option>
                            <option value="collaboration" className="bg-background text-foreground">Collaboration Proposal</option>
                            <option value="general" className="bg-background text-foreground">General Question</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject *</label>
                          <Input id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required placeholder="Brief description of your inquiry" />
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                          <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={6} placeholder="Tell me more about the opportunity, project, timeline, etc..." />
                        </div>
                        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" /> Sending...</>
                          ) : (
                            <><Send className="w-4 h-4 mr-2" /> Send Message</>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-8">
                  {/* --- REDESIGNED HIRE ME CARD --- */}
                  <Card className="overflow-hidden">
                    <CardHeader className="p-0">
                      <div className="bg-muted p-4 border-b">
                        <CardTitle>Professional Profiles</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 space-y-4">
                      {/* Freelancer Profile */}
                      <div className="flex items-center gap-4 p-3 rounded-lg border bg-card">
                        <Image
                          src="/avatars/avatar.jpg"
                          alt="Irulappan T"
                          width={60}
                          height={60}
                          className="rounded-full border-2 border-primary"
                          unoptimized
                        />
                        <div>
                          <h4 className="font-bold">IRULAPPAN T</h4>
                          <p className="text-xs text-muted-foreground">Python Developer & Data Analyst</p>
                          <Link href="https://github.com/irulappan151204" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary hover:underline">
                            View My GitHub
                          </Link>
                        </div>
                      </div>
                      {/* Other Links */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Button variant="outline" className="w-full justify-start" asChild>
                          <Link href="https://www.linkedin.com/in/irulappan-t-b69413279" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                          </Link>
                        </Button>
                        <Button variant="outline" className="w-full justify-start" asChild>
                          <Link href="https://github.com/irulappan151204" target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" /> GitHub
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {contactMethods.map((method) => (
                        <div key={method.title} className="flex items-start">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 ${method.primary ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                            <method.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-semibold">{method.title}</h4>
                            {method.action ? (
                              <Link href={method.action} className="text-sm text-primary hover:underline">{method.value}</Link>
                            ) : (
                              <p className="text-sm">{method.value}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Key Expertise</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {expertiseAreas.map((service) => (
                        <div key={service.title} className="flex items-start">
                          <service.icon className="w-5 h-5 text-primary mr-3 mt-1" />
                          <div>
                            <h4 className="font-semibold text-sm">{service.title}</h4>
                            <p className="text-xs text-muted-foreground">{service.description}</p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Current Status</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center justify-between">
                          <span>Freelance Work</span>
                          <Badge variant="default" className="text-xs bg-green-600">Available</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Collaborative Projects</span>
                           <Badge variant="default" className="text-xs">Open to Opportunities</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Time Zone</span>
                          <span className="text-muted-foreground">IST (India)</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-2">What is your current availability?</h3>
                  <p className="text-sm text-muted-foreground">
                    I&apos;m currently available for new freelance projects and open to collaborative opportunities. I typically respond within 24 hours and can start immediately.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">What technologies are you most passionate about?</h3>
                  <p className="text-sm text-muted-foreground">
                    I&apos;m passionate about AI and machine learning, building RAG pipelines, full-stack development with Flask and Next.js, and deploying scalable solutions on AWS.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">What kind of projects do you work on?</h3>
                  <p className="text-sm text-muted-foreground">
                    I work on AI-driven applications, RAG-based LLM systems, full-stack web applications, machine learning models, and data analytics solutions. My projects range from educational management systems to retail sales forecasting and disease identification using deep learning.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Do you work with teams or solo?</h3>
                  <p className="text-sm text-muted-foreground">
                    I have experience working both independently and collaboratively with AI and web teams. I&apos;m comfortable collaborating with cross-functional teams to deploy ML models into production environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}