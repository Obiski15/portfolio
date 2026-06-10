'use client'

import SocialLinks from '@/components/ui/SocialLinks'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'

// Subtle floating animation keyframes
const floatVariants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  },
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Mouse-reactive tilt for the portrait card
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), {
    stiffness: 120,
    damping: 20,
  })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), {
    stiffness: 120,
    damping: 20,
  })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  function handleMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 md:pt-40"
    >
      {/* Ambient glow effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-emerald-500/[0.07] blur-[120px]" />
        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-emerald-600/[0.04] blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-zinc-500/[0.03] blur-[80px]" />
      </div>

      {/* Grid background */}
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />

      {/* Gradient fade at bottom */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-zinc-950 to-transparent" />

      <div className="relative z-10 container mx-auto max-w-6xl px-6">
        <div className="flex flex-col-reverse items-center gap-16 lg:flex-row lg:items-center lg:justify-between">

          {/* Left — Text Content */}
          <div className="flex-1 lg:max-w-[55%]">
            {/* Overline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 font-mono text-sm tracking-wider text-emerald-400"
            >
              Product Engineer &amp; Full-Stack Developer
            </motion.p>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-semibold leading-[1.1] tracking-tight text-zinc-100 sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Building scalable systems{' '}
              <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent">
                &amp; exceptional products.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-500 sm:text-xl"
            >
             I bridge the gap between complex backend architecture and seamless frontend experiences to build scalable software products
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 text-sm font-medium text-zinc-950 transition-all duration-300 hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] active:scale-95"
              >
                View Projects
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-7 py-3.5 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-white/[0.2] hover:bg-white/[0.08] hover:text-zinc-100 active:scale-95"
              >
                <Mail size={16} className="text-zinc-500 transition-colors group-hover:text-zinc-300" />
                Let&apos;s Talk
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 flex items-center gap-4 sm:mt-10"
            >
              <SocialLinks iconSize={22} className="pl-1 sm:pl-2" />
            </motion.div>
          </div>

          {/* Right — Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex-shrink-0"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 800 }}
          >
            <motion.div
              variants={floatVariants}
              animate="animate"
              style={{ rotateX, rotateY }}
              className="relative"
            >
              {/* Glow behind portrait */}
              <div className="absolute -inset-4 rounded-3xl bg-emerald-500/10 blur-2xl" />
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-transparent blur-xl" />

              {/* Portrait card */}
              <div className="relative h-72 w-60 overflow-hidden rounded-3xl border border-white/[0.08] bg-zinc-900/60 shadow-2xl shadow-black/40 backdrop-blur-sm sm:h-80 sm:w-64 lg:h-96 lg:w-72">
                {/* Inner gradient overlay — subtle depth */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />
                <div className="absolute inset-0 z-10 bg-gradient-to-br from-emerald-500/[0.04] to-transparent" />

                {/* Portrait image */}
                <Image
                  src="/images/me.png"
                  alt="Obiski — Full-Stack Product Engineer"
                  fill
                  priority
                  sizes="(max-width: 640px) 240px, (max-width: 1024px) 256px, 288px"
                  className="object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                />

                {/* Bottom label */}
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <div className="rounded-xl border border-white/[0.08] bg-zinc-950/70 px-4 py-2.5 backdrop-blur-md">
                    <p className="text-xs font-semibold text-zinc-100">Obi Emmanuel</p>
                    <p className="font-mono text-[10px] text-emerald-400">Full-Stack Product Engineer</p>
                  </div>
                </div>
              </div>

              {/* Floating badge — top right */}
              <motion.div
                initial={{ opacity: 0, x: 10, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute -right-5 -top-4 z-20 flex items-center gap-2 rounded-full border border-white/[0.08] bg-zinc-900/80 px-3 py-2 shadow-lg backdrop-blur-md"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="font-mono text-[10px] text-zinc-300">Open to Select Opportunities</span>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
