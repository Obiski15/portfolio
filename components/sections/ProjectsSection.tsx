'use client'

import GlowCard from '@/components/ui/GlowCard'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionHeader from '@/components/ui/SectionHeader'
import { ArrowUpRight, Circle, Code2, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'W-Commerce',
    description:
      'A headless commerce engine built for social sellers, designed to power sales through messaging platforms like WhatsApp using AI.',
    tags: ['NestJS', 'RabbitMQ', 'PostgreSQL', 'Redis', 'Docker'],
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    icon: '🛒',
    status: 'In Progress',
    github: 'https://github.com/Obiski15/Headless-Commerce-Engine',
    live: '',
  },
  {
    title: 'Distributed Notification System',
    description:
      'A scalable microservice system that can handle high volumes of notifications across multiple channels (Email, push).',
    tags: ['NestJS', 'RabbitMQ', 'Docker', 'MySQL', 'Redis'],
    gradient: 'from-blue-500/20 via-indigo-500/10 to-transparent',
    icon: '🔔',
    status: 'Live',
    github: 'https://github.com/Obiski15/Distributed-Notification-System',
    live: '',
  },
  {
    title: 'Log Analyser Agent',
    description:
      'An intelligent AI-powered log analysis system that analyzes server logs, detects issues, and provides actionable recommendations.',
    tags: ['TypeScript', 'Gemini', 'Mastra', 'Node.js'],
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    icon: '🔍',
    status: 'Live',
    github: 'https://github.com/Obiski15/log-analyzer-agent',
    live: '',
  },
  {
    title: 'Paystack Wallet Service',
    description:
      'A RESTful API for managing Paystack wallet transactions and user accounts with ACID-compliant operations.',
    tags: ['NestJS', 'TypeORM', 'PostgreSQL'],
    gradient: 'from-violet-500/20 via-purple-500/10 to-transparent',
    icon: '💳',
    status: 'Live',
    github: 'https://github.com/Obiski15/Paystack-Wallet-Service',
    live: '',
  },
  {
    title: 'DevLinks',
    description:
      'Link management system for developers to organize and share their resources across the web.',
    tags: ['Next.js', 'NestJS', 'MongoDB', 'Tailwind CSS'],
    gradient: 'from-cyan-500/20 via-sky-500/10 to-transparent',
    icon: '🔗',
    status: 'Live',
    github: 'https://github.com/Obiski15/link-sharing-app/',
    live: 'https://tinyurl.com/cah2yhdh',
  },
  {
    title: 'Notes',
    description:
      'A cross-platform notes app to capture, manage, and sync your ideas across all devices.',
    tags: ['Next.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    gradient: 'from-rose-500/20 via-pink-500/10 to-transparent',
    icon: '📝',
    status: 'Live',
    github: 'https://github.com/Obiski15/notes',
    live: 'https://tinyurl.com/e65r9cdd',
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-28">
      {/* Top gradient divider */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="container mx-auto max-w-6xl px-6">
        <SectionHeader
          overline="Projects"
          title="Selected work"
          description="Real-world solutions I've built to tackle complex challenges."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={0.1 + i * 0.05}>
              <GlowCard className="flex h-full flex-col">
                {/* Visual header area with gradient */}
                <div
                  className={`relative flex h-40 items-center justify-center bg-gradient-to-br ${project.gradient} rounded-t-2xl border-b border-white/[0.04]`}
                >
                  <span className="text-5xl">{project.icon}</span>
                  {/* Grid dots overlay */}
                  <div className="bg-grid absolute inset-0 opacity-40 rounded-t-2xl" />

                  {/* Status badge */}
                  <div className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/[0.06] bg-zinc-950/60 px-2.5 py-1 backdrop-blur-sm">
                    <Circle
                      size={6}
                      className={
                        project.status === 'Live'
                          ? 'fill-emerald-400 text-emerald-400'
                          : 'fill-amber-400 text-amber-400'
                      }
                    />
                    <span className="font-mono text-[10px] text-zinc-400">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-auto">
                    <h3 className="mb-2 text-lg font-semibold text-zinc-100 group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-zinc-500">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/[0.04] px-3 py-1 font-mono text-xs text-zinc-400 border border-white/[0.04]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action links */}
                  <div className="mt-5 flex items-center gap-4 border-t border-white/[0.04] pt-5">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-1.5 text-sm text-zinc-500 transition-all duration-300 hover:text-emerald-400 active:scale-95"
                      >
                        <Code2 size={14} />
                        Source
                        <ArrowUpRight
                          size={12}
                          className="opacity-0 transition-all group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                        />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-1.5 text-sm text-zinc-500 transition-all duration-300 hover:text-emerald-400 active:scale-95"
                      >
                        <ExternalLink size={14} />
                        Live
                        <ArrowUpRight
                          size={12}
                          className="opacity-0 transition-all group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
