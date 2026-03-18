export default function AchievementCard({ item, delay = 0 }) {
  return (
    <div className={`reveal reveal-delay-${delay} relative p-6 bg-panel border border-[var(--border)] overflow-hidden
      transition-all duration-300 group hover:border-cyan/28 hover:-translate-y-[3px]`}>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan to-green
        scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

      {/* Year */}
      <span className="absolute top-4 right-4 font-mono text-[0.62rem] text-muted/45">{item.year}</span>

      <div className="text-[1.7rem] mb-3">{item.icon}</div>
      <p className="font-mono text-[0.6rem] text-cyan uppercase tracking-[0.12em] mb-1">{item.type}</p>
      <h3 className="text-[0.92rem] font-medium text-white leading-[1.4] mb-1">{item.title}</h3>
      <p className="text-[0.76rem] text-muted">{item.detail}</p>
    </div>
  )
}