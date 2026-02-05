"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, School, ExternalLink, Github, CheckCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Featured project data
const featuredProject = {
    id: "school-management-system",
    title: "School Management System",
    subtitle: "Full-Stack Enterprise Application",
    description: "A comprehensive school management platform built with modern technologies. Features include authentication, attendance tracking, grade management, fee monitoring, and a responsive dashboard for administrators, teachers, and parents.",
    status: "Ongoing",
    tags: ["Next.js", "Prisma", "MySQL", "TypeScript", "Full-Stack", "REST API"],
    icon: School,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    borderColor: "border-purple-400/20",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=800&fit=crop&auto=format&q=80",
    liveHref: "#",
    githubHref: "#",
    features: [
        "Role-based Authentication",
        "Real-time Dashboard",
        "Attendance Management",
        "Fee Tracking System"
    ]
};

export function FeaturedProjects() {
    return (
        <section className="py-24 bg-background/50 backdrop-blur-sm">
            <div className="container mx-auto max-w-7xl px-4">
                {/* Section Header */}
                <motion.div
                    className="text-center space-y-6 mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">Currently Working On</span>
                    </motion.div>
                    <motion.h2
                        className="text-4xl lg:text-5xl font-bold tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Featured{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient">
                            Project
                        </span>
                    </motion.h2>
                </motion.div>

                {/* Featured Project Hero Card */}
                <motion.div
                    className="relative group"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-card/80 to-card/40 border-2 border-purple-500/30 hover:border-purple-400/50 transition-all duration-500 shadow-2xl hover:shadow-purple-500/20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                            {/* Image Side */}
                            <div className="relative h-80 lg:h-[500px] overflow-hidden">
                                <Image
                                    src={featuredProject.image}
                                    alt={featuredProject.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/90 lg:block hidden" />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent lg:hidden" />

                                {/* Floating Status Badge */}
                                <motion.div
                                    className="absolute top-6 left-6"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    <Badge className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-purple-500 to-pink-500 border-0 shadow-lg">
                                        🚀 {featuredProject.status}
                                    </Badge>
                                </motion.div>

                                {/* Floating Icon */}
                                <motion.div
                                    className="absolute bottom-6 left-6 p-4 rounded-2xl bg-purple-500/20 border border-purple-400/30 backdrop-blur-xl"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                    <School className="w-10 h-10 text-purple-400" />
                                </motion.div>
                            </div>

                            {/* Content Side */}
                            <div className="p-8 lg:p-12 flex flex-col justify-center">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    viewport={{ once: true }}
                                >
                                    <p className="text-sm font-mono text-purple-400 mb-2">{featuredProject.subtitle}</p>
                                    <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 group-hover:text-purple-300 transition-colors">
                                        {featuredProject.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed mb-6">
                                        {featuredProject.description}
                                    </p>
                                </motion.div>

                                {/* Features List */}
                                <motion.div
                                    className="grid grid-cols-2 gap-3 mb-8"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    {featuredProject.features.map((feature, idx) => (
                                        <div key={feature} className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                            <span className="text-sm text-foreground/80">{feature}</span>
                                        </div>
                                    ))}
                                </motion.div>

                                {/* Tags */}
                                <motion.div
                                    className="flex flex-wrap gap-2 mb-8"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    {featuredProject.tags.map((tag) => (
                                        <Badge
                                            key={tag}
                                            variant="outline"
                                            className="text-xs font-mono bg-background/60 border-purple-400/30 hover:bg-purple-500/10 hover:border-purple-400/50 transition-all"
                                        >
                                            {tag}
                                        </Badge>
                                    ))}
                                </motion.div>

                                {/* Action Buttons */}
                                <motion.div
                                    className="flex flex-wrap gap-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.7 }}
                                    viewport={{ once: true }}
                                >
                                    <Button
                                        size="lg"
                                        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 border-0 shadow-lg shadow-purple-500/25"
                                        disabled
                                    >
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        Coming Soon
                                    </Button>
                                    <Button size="lg" variant="outline" className="border-purple-400/30 hover:bg-purple-500/10" disabled>
                                        <Github className="w-4 h-4 mr-2" />
                                        Private Repo
                                    </Button>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* View All Button */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Button asChild size="lg" className="font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40">
                        <Link href="/projects">
                            View All Projects <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}