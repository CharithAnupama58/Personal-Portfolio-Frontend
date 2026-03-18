import { useState } from 'react'
import useReveal       from '@/hooks/useReveal'
import SectionHeader   from '@/components/UI/SectionHeader'
import ProjectSlider   from './ProjectSlider'
import { projectCategories } from '@/data/portfolio'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const ref = useReveal()

  return (
    <section
      id="projects"
      ref={ref}
      className="py-28 px-16 relative z-10"
      style={{ background: 'linear-gradient(180deg,transparent,rgba(8,15,28,0.6),transparent)' }}
    >
      <div className="max-w-[1300px] mx-auto">
        <SectionHeader num="// 03" title="Featured" highlight="Projects" />

        {/* Filter bar */}
        <div className="reveal flex flex-wrap gap-2 mb-10">
          {projectCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-[0.38rem] font-mono text-[0.65rem] tracking-[0.05em] border transition-all duration-200
                ${activeFilter === cat
                  ? 'border-cyan text-cyan bg-cyan/10'
                  : 'border-[var(--border)] text-muted hover:border-cyan hover:text-cyan hover:bg-cyan/10'
                }`}
            >
              {cat === 'all' ? 'all' : cat.toLowerCase().replace(' ', '_')}
            </button>
          ))}
        </div>

        <ProjectSlider activeFilter={activeFilter} />
      </div>
    </section>
  )
}