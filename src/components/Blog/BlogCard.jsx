export default function BlogCard({ post, delay = 0 }) {
  return (
    <div className={`reveal reveal-delay-${delay} bg-panel border border-[var(--border)] p-7 cursor-pointer
      transition-all duration-300 group
      hover:border-cyan/28 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.4)]`}>

      {/* Meta */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex gap-[5px] flex-wrap">
          {post.tags.map(tag => (
            <span key={tag} className="font-mono text-[0.58rem] text-cyan2 bg-cyan2/[0.06] border border-cyan2/[0.18] px-[6px] py-[2px]">
              {tag}
            </span>
          ))}
        </div>
        <span className="font-mono text-[0.62rem] text-muted ml-auto whitespace-nowrap">{post.readTime} min</span>
      </div>

      {/* Title */}
      <h3 className="font-display text-[1rem] font-bold text-white mb-3 leading-[1.35]">{post.title}</h3>

      {/* Excerpt */}
      <p className="text-[0.82rem] text-white2 leading-[1.75] mb-5">{post.excerpt}</p>

      {/* Footer */}
      <div className="flex justify-between items-center">
        <span className="font-mono text-[0.62rem] text-muted">{post.date}</span>
        <span className="text-cyan text-[0.82rem] transition-transform duration-200 group-hover:translate-x-[5px]">→</span>
      </div>
    </div>
  )
}