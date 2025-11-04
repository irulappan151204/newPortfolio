import { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AnimatedBackground } from '@/components/3d/animated-background'
import { 
  Calendar, 
  MapPin, 
  Building, 
  Code, 
  Brain, 
  Users, 
  Award,
  ExternalLink,
  Download,
  Lightbulb,
  MessageSquare,
  RefreshCw,
  BookOpen,
  Search
} from 'lucide-react'
// import { Description } from '@radix-ui/react-dialog'

export const metadata: Metadata = {
  title: 'Experience | Irulappan T - Python Developer & Data Analyst',
  description: 'Explore my professional experience, education, and achievements in Python development, machine learning, and full-stack development.',
}

const workExperience = [
  {
    title: 'Python & Full-Stack Developer',
    company: 'Clap Cut Universe',
    location: 'Madurai, India',
    period: 'Mar 2024 – Present',
    type: 'Full-time',
    description: "Developing and maintaining full-stack web applications using Flask, React.js, and SQL. Integrating data pipelines and managing model lifecycle from experimentation to deployment on AWS (EC2, RDS).",
    achievements: [
      "Developing and maintaining full-stack web applications using Flask, React.js, and SQL",
      "Integrated data pipelines and managed model lifecycle from experimentation to deployment on AWS (EC2, RDS)",
      "Built RESTful APIs and automation tools for seamless backend–frontend interaction",
      "Collaborated with AI and web teams to deploy ML models into production environments"
    ],
    technologies: ['Python', 'Flask', 'React.js', 'SQL', 'AWS EC2', 'AWS RDS', 'RESTful APIs']
  },
  {
    title: 'Python Developer (Machine Learning)',
    company: 'S3 Technologies',
    location: 'Madurai, India',
    period: 'Sep 2023 – Feb 2024',
    type: 'Full-time',
    description: "Built and trained machine learning and deep learning models for real-world business use cases. Architected end-to-end machine learning pipelines integrating TensorFlow and PyTorch frameworks for production deployment.",
    achievements: [
      "Built and trained machine learning and deep learning models for real-world business use cases",
      "Architected end-to-end machine learning pipelines integrating TensorFlow and PyTorch frameworks for production deployment",
      "Developed Flask-based web applications and APIs for model serving and performance monitoring",
      "Enhanced system scalability and reliability through modular code design and AWS integration"
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Flask', 'Machine Learning', 'Deep Learning', 'AWS']
  },
  {
    title: 'Data Analyst',
    company: 'Queen Mira International School',
    location: 'Madurai, India',
    period: 'Freelance',
    type: 'Freelance',
    description: "Conducted in-depth data analysis to identify academic and operational trends and insights. Designed interactive Power BI dashboards to visualize performance and key indicators.",
    achievements: [
      "Conducted in-depth data analysis to identify academic and operational trends and insights",
      "Designed interactive Power BI dashboards to visualize performance and key indicators",
      "Automated reporting workflows and improved decision-making using Python and SQL"
    ],
    technologies: ['Python', 'SQL', 'Power BI', 'Data Analysis', 'Data Visualization']
  },
]

const education = [
  {
    degree: 'Master\'s Degree in Data Science',
    school: 'The American College',
    location: 'Madurai, India',
    period: '2021 – 2023',
    status: 'Completed',
    description: 'Master\'s degree focusing on Data Science with strong foundation in Machine Learning, Deep Learning, Statistical Analysis, and Data Engineering.',
    achievements: [
      'Specialized in Data Science, Machine Learning, and Statistical Analysis',
      'Hands-on experience with real-world data projects and case studies',
    ],
    coursework: ['Machine Learning', 'Deep Learning', 'Data Science', 'Statistical Analysis', 'Data Engineering', 'Data Visualization', 'Python Programming', 'SQL'],
  },
  {
    degree: 'Bachelor\'s Degree in Computer Applications',
    school: 'Mannar Thirumalai Naicker College',
    location: 'Madurai, India',
    period: '2018 – 2021',
    status: 'Completed',
    description: 'Bachelor\'s degree in Computer Applications with comprehensive understanding of programming, databases, web development, and software engineering principles.',
    achievements: [
      'Strong foundation in programming languages, database management, and web technologies',
      'Practical experience in software development and application design',
    ],
    coursework: ['Programming Languages', 'Database Management', 'Web Development', 'Software Engineering', 'Data Structures', 'Algorithms', 'Computer Networks', 'Operating Systems'],
  },
]

const certifications = [
  {
    title: 'Relevant Certifications in Python Development and Data Science',
    issuer: 'Various Institutions',
    date: 'Ongoing',
    credentialId: '#',
    description: 'Continuous learning and certification in Python development, machine learning, and data science technologies.'
  },
];


const technicalSkills = [
  'python', 'javascript', 'typescript', 'react', 'nextjs',
  'flask', 'django', 'nodejs',
  'tensorflow', 'pytorch', 'aws', 'docker', 'git',
  'mysql', 'mongodb', 'postgresql', 'sqlite',
  'jupyter', 'pandas', 'numpy',
  'nginx', 'linux', 'ubuntu', 'bash',
  'redis', 'vscode', 'kubernetes'
]

const softSkills = [
  { name: 'Problem Solving', icon: 'Lightbulb' },
  { name: 'Communication', icon: 'MessageSquare' },
  { name: 'Team Collaboration', icon: 'Users' },
  { name: 'Adaptability', icon: 'RefreshCw' },
  { name: 'Continuous Learning', icon: 'BookOpen' },
  { name: 'Attention to Detail', icon: 'Search' },
]

export default function ExperiencePage() {
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
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Professional Experience
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A comprehensive overview of my journey in AI, software engineering, and continuous learning. 
              From academic excellence to real-world impact, each experience has shaped my expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/resume">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="experience" className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="grid w-full max-w-md grid-cols-4">
                  <TabsTrigger value="experience">Work</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                  <TabsTrigger value="certifications">Certs</TabsTrigger>
                  <TabsTrigger value="skills">Skills</TabsTrigger>
                </TabsList>
              </div>

              {/* Work Experience Tab */}
              <TabsContent value="experience">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-center mb-8">Work Experience</h2>
                  {workExperience.map((job, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardHeader className="pb-4">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                          <div>
                            <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <Building className="w-4 h-4 mr-1" />
                                {job.company}
                              </div>
                              <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                {job.location}
                              </div>
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                {job.period}
                              </div>
                            </div>
                          </div>
                          <Badge variant={job.type === 'Internship' ? 'secondary' : 'default'}>
                            {job.type}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <p className="text-muted-foreground">{job.description}</p>
                        
                        <div>
                          <h4 className="font-semibold mb-3">Key Achievements</h4>
                          <ul className="space-y-2">
                            {job.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                                <span className="text-muted-foreground">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {job.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Education Tab */}
              <TabsContent value="education">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
                  {education.map((edu, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardHeader className="pb-4">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                          <div>
                            <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <Building className="w-4 h-4 mr-1" />
                                {edu.school}
                              </div>
                              <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                {edu.location}
                              </div>
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                {edu.period}
                              </div>
                            </div>
                          </div>
                          <Badge variant={edu.status === 'Final Year' ? 'default' : 'secondary'}>
                            {edu.status}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <p className="text-muted-foreground">{edu.description}</p>
                        
                        <div>
                          <h4 className="font-semibold mb-3">Achievements</h4>
                          <ul className="space-y-2">
                            {edu.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                                <span className="text-muted-foreground">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3">Relevant Coursework</h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.coursework.map((course) => (
                              <Badge key={course} variant="outline" className="text-xs">
                                {course}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Certifications Tab */}
              <TabsContent value="certifications">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-center mb-8">Certifications & Credentials</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certifications.map((cert, index) => (
                      <Card key={index} className="hover:shadow-md transition-shadow">
                        <CardHeader className="pb-4">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <CardTitle className="text-lg mb-2">{cert.title}</CardTitle>
                              <div className="flex items-center text-sm text-muted-foreground mb-2">
                                <Award className="w-4 h-4 mr-1" />
                                {cert.issuer}
                              </div>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Calendar className="w-4 h-4 mr-1" />
                                {cert.date}
                              </div>
                            </div>
                            <Button variant="outline" size="sm">
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-3">
                            {cert.description}
                          </p>
                          <div className="text-xs text-muted-foreground">
                            Credential ID: {cert.credentialId}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Skills Tab */}
              <TabsContent value="skills">
                <div className="space-y-12">
                  <h2 className="text-3xl font-bold text-center mb-8">Skills & Competencies</h2>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Technical Skills */}
                    <div>
                      <div className="flex items-center mb-6">
                        <Code className="w-6 h-6 text-primary mr-3" />
                        <h3 className="text-2xl font-bold">Technical Skills</h3>
                      </div>
                      <Card className="p-8">
                        <div className="flex justify-center items-center overflow-hidden">
                          <a href="https://skillicons.dev" target="_blank" rel="noopener noreferrer" className="inline-block">
                            <img 
                              src={`https://skillicons.dev/icons?i=${technicalSkills.join(',')}&perline=5&theme=dark`}
                              alt="My Technical Skills"
                              className="w-full h-auto max-w-4xl opacity-90 hover:opacity-100 transition-opacity"
                              style={{ transform: 'scale(1.5)', transformOrigin: 'center' }}
                              loading="lazy"
                            />
                          </a>
                        </div>
                      </Card>
                    </div>

                    {/* Soft Skills */}
                    <div>
                      <div className="flex items-center mb-6">
                        <Users className="w-6 h-6 text-primary mr-3" />
                        <h3 className="text-2xl font-bold">Soft Skills</h3>
                      </div>
                      <Card className="p-8">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                          {softSkills.map((skill) => {
                            const IconComponent = {
                              Lightbulb,
                              MessageSquare,
                              Users,
                              RefreshCw,
                              BookOpen,
                              Search
                            }[skill.icon] || Users
                            
                            return (
                              <div 
                                key={skill.name}
                                className="flex flex-col items-center justify-center p-6 rounded-lg border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all group"
                              >
                                <IconComponent className="w-12 h-12 text-primary mb-3 group-hover:scale-110 transition-transform" />
                                <span className="text-base font-medium text-center">{skill.name}</span>
                              </div>
                            )
                          })}
                        </div>
                      </Card>
                    </div>
                  </div>

                  {/* Additional Skills */}
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-4">Additional Competencies</h3>
                    <div className="flex flex-wrap justify-center gap-2">
                      {[
                        'Agile/Scrum', 'Technical Writing', 'Code Review', 'Mentoring',
                        'Public Speaking', 'Research', 'System Architecture', 'API Design',
                        'Database Design', 'Security Best Practices', 'Performance Optimization',
                        'Cross-functional Collaboration'
                      ].map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Brain className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Leverage This Experience?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              With a strong foundation in AI, data privacy, and advanced research methodologies, and proven results across multiple projects, I am ready to contribute cutting-edge solutions to your next research challenge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Let&apos;s Discuss Your Project
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/projects">
                  View My Work
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}
