'use client'

import GlowCard from '@/components/ui/GlowCard'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionHeader from '@/components/ui/SectionHeader'
import { GraduationCap, Rocket, Trophy } from 'lucide-react'

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28">
      {/* Top gradient divider */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="container mx-auto max-w-6xl px-6">
        <SectionHeader overline="About" title="A bit about me" />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Main bio card — spans 2 cols */}
          <ScrollReveal delay={0.1} className="md:col-span-2">
            <GlowCard className="h-full">
              <div className="p-8 sm:p-10">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10">
                  <GraduationCap size={20} className="text-emerald-400" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-zinc-100">
                  SaaS Builder
                </h3>
                <p className="leading-relaxed text-zinc-500">
                  I am passionate about product development and business-focused
                  software. My focus is on creating systems that are not only
                  technically sound but also deliver real value to users.
                  I believe the best software is invisible, it solves the
                  problem so well that users never think about the engineering
                  behind it.
                </p>
              </div>
            </GlowCard>
          </ScrollReveal>

          {/* Accolades card */}
          <ScrollReveal delay={0.2}>
            <GlowCard className="h-full">
              <div className="p-8 sm:p-10">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10">
                  <Trophy size={20} className="text-emerald-400" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-zinc-100">
                  Accolades
                </h3>
                <ul className="space-y-3 text-zinc-500">
                  <li className="flex items-center gap-3">
                    <span className="h-1 w-1 rounded-full bg-emerald-500" />
                    HNG Finalist
                  </li>
                  {/* <li className="flex items-center gap-3">
                    <span className="h-1 w-1 rounded-full bg-emerald-500" />
                    SquadCo Hackathon
                  </li> */}
                </ul>
              </div>
            </GlowCard>
          </ScrollReveal>

          {/* Current Focus card — full width */}
          <ScrollReveal delay={0.3} className="md:col-span-3">
            <GlowCard>
              <div className="p-8 sm:p-10">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10">
                    <Rocket size={20} className="text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold text-zinc-100">
                      Current Focus
                    </h3>
                    <p className="leading-relaxed text-zinc-500">
                      Helping businesses transform ideas into reliable, scalable software.
                      I focus on building production-ready web applications, designing maintainable systems, and delivering products that create measurable business value.
                    </p>
                  </div>
                </div>
              </div>
            </GlowCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
