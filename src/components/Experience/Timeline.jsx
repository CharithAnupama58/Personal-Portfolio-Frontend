import { experience } from '@/data/portfolio'

export default function Timeline() {
  return (
    <div className="relative pl-7 reveal">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-cyan to-transparent" />
      {experience.map((item, i) => (
        <div key={i} className="relative pl-8 pb-12 last:pb-0">
          {/* Diamond dot */}
          <div
            className="absolute left-[-0.35rem] top-[0.3rem] w-[0.7rem] h-[0.7rem] bg-cyan"
            style={{ clipPath: 'polygon(50% 0,100% 50%,50% 100%,0 50%)' }}
          />
          <p className="font-mono text-[0.63rem] text-cyan tracking-[0.1em] mb-1">{item.period}</p>
          <p className="font-display text-[1.15rem] font-bold text-white mb-[2px]">{item.role}</p>
          <p className="text-purple2 text-[0.82rem] mb-3">{item.company} — {item.location}</p>
          <ul className="space-y-[0.45rem]">
            {item.points.map((point, j) => (
              <li key={j} className="text-white2 text-[0.85rem] pl-[1.1rem] relative">
                <span className="absolute left-0 top-[0.22rem] text-green text-[0.62rem]">▸</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}