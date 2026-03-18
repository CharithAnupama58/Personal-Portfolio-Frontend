export default function SectionHeader({ num, title, highlight }) {
  return (
    <div className="flex items-center gap-6 mb-16 reveal">
      <span className="font-mono text-[0.68rem] text-cyan tracking-[0.12em]">
        {num}
      </span>
      <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold text-white whitespace-nowrap">
        {title} <span className="text-cyan">{highlight}</span>
      </h2>
      <div className="flex-1 h-px bg-gradient-to-r from-cyan/20 to-transparent" />
    </div>
  )
}