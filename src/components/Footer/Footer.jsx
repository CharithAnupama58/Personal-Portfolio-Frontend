export default function Footer() {
  const year = new Date().getFullYear()

  const smoothScroll = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative z-10 px-16 py-10 border-t border-[var(--border)]
      flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="font-mono text-[0.85rem] text-cyan">// charith_anupama</div>

      <div className="font-mono text-[0.62rem] text-muted text-center">
        © {year} · MERN + PostgreSQL · Sri Lanka 🇱🇰
      </div>

      <div className="flex gap-6">
        {[['top', '#hero'], ['projects', '#projects'], ['contact', '#contact']].map(([label, href]) => (
          <button
            key={href}
            onClick={() => smoothScroll(href)}
            className="font-mono text-[0.65rem] text-muted bg-transparent border-none cursor-pointer
              transition-colors duration-200 hover:text-cyan"
          >
            {label}
          </button>
        ))}
      </div>
    </footer>
  )
}