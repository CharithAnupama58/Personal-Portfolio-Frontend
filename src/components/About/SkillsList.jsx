import { skills } from '@/data/portfolio'

export default function SkillsList() {
  return (
    <div className="reveal space-y-7">
      {skills.map(({ category, items }) => (
        <div key={category}>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-[0.62rem] text-green uppercase tracking-[0.15em] flex items-center gap-2">
              <span className="text-muted">//</span>
              {category}
            </span>
            <div className="flex-1 h-px bg-[var(--border)]" />
          </div>
          <div className="flex flex-wrap gap-[0.4rem]">
            {items.map(skill => (
              <span
                key={skill}
                className="font-mono text-[0.7rem] text-white2 bg-cyan/5 border border-cyan/[0.12]
                  px-3 py-[0.3rem] cursor-default transition-all duration-200
                  hover:bg-cyan/10 hover:text-cyan hover:border-cyan/30 hover:-translate-y-0.5
                  hover:shadow-[0_4px_12px_rgba(0,217,255,0.12)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}