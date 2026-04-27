'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

function RippleRing({ delay = 0 }) {
  return (
    <motion.span
      className="border-primary pointer-events-none absolute rounded-full border-2 shadow-[0_0_12px_rgba(0,228,117,0.25),inset_0_0_12px_rgba(0,228,117,0.1)]"
      initial={{ width: 12, height: 12, opacity: 0.7, borderWidth: 2 }}
      animate={{
        width: [12, 300],
        height: [12, 300],
        opacity: [0.7, 0],
        borderWidth: [2, 0.5],
      }}
      transition={{
        duration: 4,
        ease: 'easeOut',
        delay,
        repeat: Infinity,
        repeatDelay: 0,
      }}
    />
  )
}

function FlickerText({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.span
      className={className}
      animate={{ opacity: [1, 0.6, 1, 0.85, 1] }}
      transition={{
        duration: 3.5,
        ease: 'easeInOut',
        repeat: Infinity,
        times: [0, 0.2, 0.5, 0.7, 1],
      }}
    >
      {children}
    </motion.span>
  )
}

function Scanlines() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-10 overflow-hidden rounded-2xl"
      style={{
        backgroundImage:
          'repeating-linear-gradient(0deg, transparent, transparent 2px, var(--primary) 2px, var(--primary) 4px)',
        opacity: 0.02,
      }}
    />
  )
}

export default function NetworkPulse() {
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="bg-background flex min-h-screen items-center justify-center font-mono">
      {/* Card container */}
      <div className="via-background relative flex h-screen flex-1 flex-col items-center justify-center overflow-hidden bg-linear-to-br from-[#0d1410] to-[#0a100d] shadow-[0_0_40px_rgba(0,228,117,0.06)] select-none">
        <Scanlines />

        {/* Top-left HUD label */}
        <div className="text-primary/60 absolute top-4 left-5 z-20 flex items-center gap-2">
          <motion.span
            className="bg-primary inline-block h-1.5 w-1.5 rounded-full shadow-[0_0_6px_var(--primary)]"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.4, repeat: Infinity }}
          />
          <span className="text-[10px] tracking-[0.25em] uppercase">
            PORTFOLIO_OS
          </span>
        </div>

        {/* Top-right corner bracket */}
        <div className="text-primary/40 absolute top-4 right-5 z-20">
          <span className="text-[10px] tracking-widest uppercase">
            <span className="max-sm:hidden">◈ Status:</span> Active
          </span>
        </div>

        {/* ── Pulse Arena ── */}
        <div className="relative flex size-80 items-center justify-center">
          {/* Outer dim guide ring */}
          <span className="border-primary/10 absolute size-75 rounded-full border" />
          {/* Mid guide ring */}
          <span className="border-primary/5 absolute size-50 rounded-full border border-dashed" />

          {/* Animated ripple rings */}
          <RippleRing delay={0} />
          <RippleRing delay={2} />

          {/* Core glow dot */}
          <motion.span
            className="bg-primary absolute z-10 h-2.5 w-2.5 rounded-full shadow-[0_0_0_3px_rgba(0,228,117,0.15),0_0_18px_rgba(0,228,117,0.55),0_0_40px_rgba(0,228,117,0.2)]"
            animate={{ scale: [1, 1.25, 1], opacity: [1, 0.85, 1] }}
            transition={{ duration: 2.5, ease: 'easeInOut', repeat: Infinity }}
          />

          {/* Central Label */}
          <div className="absolute bottom-17 z-10 flex flex-col items-center">
            <FlickerText className="text-primary text-sm tracking-[0.45em] uppercase drop-shadow-[0_0_12px_rgba(0,228,117,0.55)]">
              Welcome
            </FlickerText>
          </div>
        </div>

        {/* ── Telemetry readout ── */}
        <motion.div
          className="z-20 mt-1 flex flex-col items-center gap-3 sm:gap-1"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          {/* Row 1 */}
          <div className="text-primary/70 flex flex-col items-center gap-3 sm:flex-row">
            <span className="text-[10px] tracking-widest uppercase">
              <span className="text-primary/40">●</span> Role:{' '}
              <span className="text-primary drop-shadow-[0_0_8px_rgba(0,228,117,0.55)]">
                Developer
              </span>
            </span>
            <span className="text-primary/25 max-sm:hidden">·</span>
            <span className="text-[10px] tracking-widest uppercase">
              <span className="text-primary/40">●</span> Experience:{' '}
              <span className="text-primary drop-shadow-[0_0_8px_rgba(0,228,117,0.55)]">
                Full-Stack
              </span>
            </span>
          </div>

          {/* Row 2 */}
          <div className="text-primary/50 flex flex-col items-center gap-3 sm:flex-row">
            <span className="text-[10px] tracking-widest uppercase">
              Location:{' '}
              <motion.span
                className="text-primary"
                key={tick}
                initial={{ opacity: 0.4 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                Remote
              </motion.span>
            </span>
            <span className="text-primary/25 max-sm:hidden">·</span>
            <span className="text-[10px] tracking-widest uppercase">
              Availability: <span className="text-primary">Open</span>
            </span>
          </div>

          {/* Bottom status bar */}
          <motion.div
            className="border-primary/10 bg-primary/5 mt-4 rounded border px-4 py-1 text-center"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span className="text-primary/60 text-[9px] tracking-[0.3em] uppercase">
              // Initializing Interface to Explore
            </span>
          </motion.div>
        </motion.div>

        {/* Bottom-right corner decoration */}
        <div className="text-primary/25 absolute right-4 bottom-3 z-20 text-[8px] tracking-widest uppercase">
          EST. 2026 // UID:0x4F2A
        </div>
      </div>
    </div>
  )
}
