export default function ProjectCard({ project }) {
  return (
    <div className="relative bg-panel border border-[var(--border)] p-7 overflow-hidden cursor-pointer
      transition-all duration-300 group h-full
      hover:border-cyan/30 hover:-translate-y-[5px] hover:shadow-[0_15px_40px_rgba(0,0,0,0.5),0_0_0_1px_rgba(0,217,255,0.08)]">

      {/* Top glow line on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan via-green to-transparent
        scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />

      {/* Radial glow on hover */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,217,255,0.04),transparent_60%)]
        opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-0 right-0 font-mono text-[0.56rem] text-bg bg-cyan px-2 py-[3px] tracking-[0.08em]">
          FEATURED
        </div>
      )}

      {/* Category */}
      <p className="font-mono text-[0.6rem] text-green uppercase tracking-[0.1em] mb-2">
        {project.category.toLowerCase().replace(' ', '_')}
        {project.accuracy && <span className="ml-2 text-cyan">· {project.accuracy} acc</span>}
      </p>

      {/* Title */}
      <h3 className="font-display text-[1.05rem] font-bold text-white mb-3 leading-[1.3]">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-[0.82rem] text-white2 leading-[1.75] mb-5">{project.description}</p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-[5px]">
        {project.tech.map(t => (
          <span key={t} className="tech-tag">{t}</span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 mt-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[0.68rem] text-muted no-underline transition-colors duration-200 hover:text-cyan"
          >
            ↗ github
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[0.68rem] text-muted no-underline transition-colors duration-200 hover:text-cyan"
          >
            ↗ live demo
          </a>
        )}
      </div>

      {/* Year */}
      <span className="absolute bottom-4 right-4 font-mono text-[0.62rem] text-muted/50">
        {project.year}
      </span>
    </div>
  )
}