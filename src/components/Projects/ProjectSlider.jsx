import { useState, useRef, useEffect, useCallback } from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '@/data/portfolio'

export default function ProjectSlider({ activeFilter }) {
  const [index, setIndex]   = useState(0)
  const trackRef            = useRef(null)
  const wrapRef             = useRef(null)
  const touchStartX         = useRef(0)

  const getSpv = useCallback(() => {
    if (typeof window === 'undefined') return 3
    if (window.innerWidth < 640) return 1
    if (window.innerWidth < 1024) return 2
    return 3
  }, [])

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  const spv    = getSpv()
  const maxIdx = Math.max(0, filtered.length - spv)
  const clampedIndex = Math.min(index, maxIdx)

  useEffect(() => { setIndex(0) }, [activeFilter])

  useEffect(() => {
    if (!trackRef.current || !wrapRef.current) return
    const wrapWidth = wrapRef.current.offsetWidth
    const gap = 24
    const perCard = (wrapWidth - gap * (spv - 1)) / spv
    trackRef.current.style.transform = `translateX(-${clampedIndex * (perCard + gap)}px)`
  }, [clampedIndex, activeFilter, spv])

  const slide = useCallback((dir) => {
    setIndex(i => Math.max(0, Math.min(i + dir, maxIdx)))
  }, [maxIdx])

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd   = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) slide(diff > 0 ? 1 : -1)
  }

  // Update on resize
  useEffect(() => {
    const onResize = () => {
      if (!trackRef.current || !wrapRef.current) return
      const spvNow = getSpv()
      const wrapWidth = wrapRef.current.offsetWidth
      const gap = 24
      const perCard = (wrapWidth - gap * (spvNow - 1)) / spvNow
      const newMax = Math.max(0, filtered.length - spvNow)
      const newIdx = Math.min(index, newMax)
      trackRef.current.style.transform = `translateX(-${newIdx * (perCard + gap)}px)`
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [filtered.length, getSpv, index])

  return (
    <div>
      {/* Slider */}
      <div ref={wrapRef} className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-6"
          style={{ transition: 'transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94)', willChange: 'transform' }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {filtered.map(project => (
            <div
              key={project.id}
              className="flex-shrink-0"
              style={{
                width: spv === 1
                  ? '100%'
                  : spv === 2
                  ? 'calc(50% - 12px)'
                  : 'calc(33.333% - 16px)'
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8">
        <button
          onClick={() => slide(-1)}
          disabled={clampedIndex === 0}
          className="w-[38px] h-[38px] sm:w-[42px] sm:h-[42px] flex items-center justify-center bg-transparent border border-cyan/20 text-cyan
            transition-all duration-200 hover:bg-cyan/10 hover:border-cyan
            disabled:opacity-20 disabled:cursor-not-allowed"
        >
          ←
        </button>

        <div className="flex items-center gap-2">
          {Array.from({ length: maxIdx + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-[6px] rounded-full transition-all duration-200 border-none p-0
                ${i === clampedIndex
                  ? 'w-[20px] bg-cyan shadow-[0_0_6px_#00D9FF]'
                  : 'w-[6px] bg-cyan/20'
                }`}
            />
          ))}
        </div>

        <span className="font-mono text-[0.62rem] sm:text-[0.65rem] text-muted min-w-[42px] text-center">
          {clampedIndex + 1} / {maxIdx + 1}
        </span>

        <button
          onClick={() => slide(1)}
          disabled={clampedIndex >= maxIdx}
          className="w-[38px] h-[38px] sm:w-[42px] sm:h-[42px] flex items-center justify-center bg-transparent border border-cyan/20 text-cyan
            transition-all duration-200 hover:bg-cyan/10 hover:border-cyan
            disabled:opacity-20 disabled:cursor-not-allowed"
        >
          →
        </button>
      </div>
    </div>
  )
}