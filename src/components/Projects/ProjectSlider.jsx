import { useState, useRef, useEffect, useCallback } from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '@/data/portfolio'

export default function ProjectSlider({ activeFilter }) {
  const [index, setIndex]   = useState(0)
  const trackRef            = useRef(null)
  const touchStartX         = useRef(0)

  const getSpv = () => {
    if (typeof window === 'undefined') return 3
    if (window.innerWidth <= 480) return 1
    if (window.innerWidth <= 900) return 2
    return 3
  }

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  const spv    = getSpv()
  const maxIdx = Math.max(0, filtered.length - spv)

  useEffect(() => { setIndex(0) }, [activeFilter])

  const clampedIndex = Math.min(index, maxIdx)

  useEffect(() => {
    if (!trackRef.current) return
    const perCard = (trackRef.current.parentElement.offsetWidth + 24) / spv
    trackRef.current.style.transform = `translateX(-${clampedIndex * perCard}px)`
  }, [clampedIndex, activeFilter, spv])

  const slide = useCallback((dir) => {
    setIndex(i => Math.max(0, Math.min(i + dir, maxIdx)))
  }, [maxIdx])

  // Touch support
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd   = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) slide(diff > 0 ? 1 : -1)
  }

  return (
    <div>
      {/* Slider */}
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex"
          style={{ transition: 'transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94)', willChange: 'transform' }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {filtered.map(project => (
            <div
              key={project.id}
              className="flex-shrink-0 mr-6"
              style={{ flexBasis: `calc(${100 / spv}% - ${24 * (spv - 1) / spv}px)` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          onClick={() => slide(-1)}
          disabled={clampedIndex === 0}
          className="w-[42px] h-[42px] flex items-center justify-center bg-transparent border border-cyan/20 text-cyan
            transition-all duration-200 hover:bg-cyan/10 hover:border-cyan hover:shadow-[0_0_12px_rgba(0,217,255,0.18)]
            disabled:opacity-20 disabled:cursor-not-allowed"
        >
          ←
        </button>

        {/* Dots */}
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

        <span className="font-mono text-[0.65rem] text-muted min-w-[42px] text-center">
          {clampedIndex + 1} / {maxIdx + 1}
        </span>

        <button
          onClick={() => slide(1)}
          disabled={clampedIndex >= maxIdx}
          className="w-[42px] h-[42px] flex items-center justify-center bg-transparent border border-cyan/20 text-cyan
            transition-all duration-200 hover:bg-cyan/10 hover:border-cyan hover:shadow-[0_0_12px_rgba(0,217,255,0.18)]
            disabled:opacity-20 disabled:cursor-not-allowed"
        >
          →
        </button>
      </div>
    </div>
  )
}