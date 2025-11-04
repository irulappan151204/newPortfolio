'use client'

import { lazy, Suspense } from "react"
import { Analytics } from "@vercel/analytics/next"
import { HeroSection } from "@/components/sections/hero" // Keep hero section for immediate loading
import { AnimatedBackground } from "@/components/3d/animated-background"

// Lazy load non-critical sections
const TrustStrip = lazy(() => import("@/components/sections/trust-strip").then(mod => ({ default: mod.TrustStrip })))
const FeaturedProjects = lazy(() => import("@/components/sections/featured-projects").then(mod => ({ default: mod.FeaturedProjects })))
const WhatIDo = lazy(() => import("@/components/sections/what-i-do").then(mod => ({ default: mod.WhatIDo })))
const CTABand = lazy(() => import("@/components/sections/cta-band").then(mod => ({ default: mod.CTABand })))
const FloatingActionButton = lazy(() => import("@/components/ui/floating-action-button").then(mod => ({ default: mod.FloatingActionButton })))

export default function HomePage() {
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Irulappan T",
            "jobTitle": "Python Developer & Data Analyst",
            "url": "https://github.com/irulappan151204",
            "logo": "https://github.com/irulappan151204/logo.png",
            "image": "https://github.com/irulappan151204/og-image.jpg",
            "description": "Creative Python Developer with a deep interest in artificial intelligence and modern web technologies. Skilled in building end-to-end AI-driven applications, integrating RAG pipelines, and developing scalable full-stack solutions.",
            "email": "mailto:irulappan8720@gmail.com",
            "sameAs": [
              "https://github.com/irulappan151204",
              "https://www.linkedin.com/in/irulappan-t-b69413279"
            ],
            "knowsAbout": [
              "Python Development",
              "Machine Learning",
              "Deep Learning",
              "RAG Pipelines",
              "Full-Stack Web Development",
              "Flask",
              "Next.js",
              "TensorFlow",
              "PyTorch",
              "LangChain",
              "AWS",
              "Data Analysis",
              "SQL",
              "Power BI"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Madurai",
              "addressCountry": "India"
            }
          })
        }}
      />

      <main className="min-h-screen relative overflow-x-hidden">
        <Analytics />
        {/* 3D Animated Background */}
        <div className="fixed top-0 left-0 w-full h-full -z-10">
          <AnimatedBackground />
        </div>
        
        <div className="relative z-10">
          {/* Hero Section - Load immediately */}
          <HeroSection />
          
          {/* Trust Strip - Lazy loaded */}
          <Suspense fallback={<div className="h-20 bg-black/20 animate-pulse" />}>
            <TrustStrip />
          </Suspense>
          
          {/* Featured Projects - Lazy loaded */}
          <Suspense fallback={<div className="h-96 bg-black/20 animate-pulse" />}>
            <FeaturedProjects />
          </Suspense>
          
          {/* Services - Lazy loaded */}
          <Suspense fallback={<div className="h-96 bg-black/20 animate-pulse" />}>
            <WhatIDo />
          </Suspense>
          
          {/* CTA - Lazy loaded */}
          <Suspense fallback={<div className="h-32 bg-black/20 animate-pulse" />}>
            <CTABand />
          </Suspense>
        </div>

        {/* Floating Action Button - Lazy loaded */}
        <Suspense fallback={null}>
          <FloatingActionButton />
        </Suspense>
      </main>
    </>
  )
}
