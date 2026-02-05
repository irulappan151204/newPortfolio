import { Metadata } from 'next'
import ProjectsClient from './projects-client'

export const metadata: Metadata = {
    title: 'Projects | Irulappan T - Python Developer & Data Analyst',
    description: 'Explore my projects in Python, Machine Learning, and Full-Stack Development. Featuring AI sales forecasting, school management systems, and deep learning applications.',
}

export default function ProjectsPage() {
    return <ProjectsClient />
}
