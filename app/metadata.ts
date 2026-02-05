import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Irulappan T — Python Developer & Data Analyst',
  description: 'Portfolio of Irulappan T, a passionate Python Developer and Data Analyst specializing in machine learning, deep learning, data science, and full-stack web development. Explore projects, experience, and get in touch.',
  keywords: [
    'Python Developer',
    'Data Analyst',
    'Full-Stack Developer',
    'Machine Learning Engineer',
    'Deep Learning',
    'Data Science',
    'Flask',
    'Next.js',
    'Power BI',
    'AWS',
    'India',
    'Madurai',
    'Portfolio',
    'ERP Systems'
  ],
  authors: [{ name: 'Irulappan T', url: 'https://github.com/irulappan151204' }],
  creator: 'Irulappan T',
  publisher: 'Irulappan T',
  metadataBase: new URL('https://github.com/irulappan151204'),
  alternates: {
    canonical: 'https://github.com/irulappan151204',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://github.com/irulappan151204',
    siteName: 'Irulappan T Portfolio',
    title: 'Irulappan T — Python Developer & Data Analyst',
    description: 'Portfolio of Irulappan T, a passionate Python Developer and Data Analyst specializing in machine learning, deep learning, data science, and full-stack web development. Explore projects, experience, and get in touch.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Irulappan T - Python Developer & Data Analyst',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@irulappan',
    creator: '@irulappan',
    title: 'Irulappan T — Python Developer & Data Analyst',
    description: 'Portfolio of Irulappan T, a passionate Python Developer and Data Analyst specializing in machine learning, deep learning, data science, and full-stack web development. Explore projects, experience, and get in touch.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add verification IDs when available
    // google: 'google-verification-code',
    // yandex: 'yandex-verification-code',
    // yahoo: 'yahoo-verification-code',
  },
  category: 'technology',
  classification: 'Portfolio Website',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'theme-color': '#100C08',
    'color-scheme': 'dark',
  },
}

export default metadata
