export default function SectionHeader({ num, title, highlight }) {
  return (
    <div className="flex items-center gap-3 sm:gap-6 mb-10 sm:mb-14 lg:mb-16 reveal">
      <span className="font-mono text-[0.62rem] sm:text-[0.68rem] text-cyan tracking-[0.12em] whitespace-nowrap">
        {num}
      </span>
      <h2 className="font-display font-extrabold text-white whitespace-nowrap"
        style={{ fontSize: 'clamp(1.5rem, 4vw, 2.6rem)' }}>
        {title} <span className="text-cyan">{highlight}</span>
      </h2>
      <div className="flex-1 h-px bg-gradient-to-r from-cyan/20 to-transparent min-w-[20px]" />
    </div>
  )
}