export default function HeroCode() {
  return (
    <div style={{ opacity: 0, animation: 'fadeUp 0.6s ease 0.2s forwards' }}>
      {/* Terminal title bar */}
      <div className="inline-flex items-center gap-2 bg-panel border border-[var(--border)] px-3 py-[0.4rem] mb-0 rounded-t-[4px]">
        <span className="w-[10px] h-[10px] rounded-full bg-[#FF5F57]" />
        <span className="w-[10px] h-[10px] rounded-full bg-[#FFBD2E]" />
        <span className="w-[10px] h-[10px] rounded-full bg-[#28C840]" />
        <span className="font-mono text-[0.62rem] text-muted ml-1">~/charith/portfolio.sh — bash</span>
      </div>

      {/* Code block */}
      <div
        className="bg-panel border border-[var(--border)] border-t-0 px-7 py-5 mb-8 relative"
        style={{ opacity: 0, animation: 'fadeUp 0.6s ease 0.35s forwards' }}
      >
        {/* Left accent bar */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-cyan to-green" />

        {[
          { ln: '1', content: <><span className="text-muted italic">// Charith Anupama | Software Engineer</span></> },
          { ln: '2', content: <><span className="text-[#CC99CD]">const</span> <span className="text-cyan">engineer</span> <span className="text-white2">= {'{'}</span></> },
          { ln: '3', content: <>&nbsp;&nbsp;<span className="text-[#F8C555]">name</span><span className="text-white2">:</span> <span className="text-green">"Charith Anupama"</span><span className="text-white2">,</span></> },
          { ln: '4', content: <>&nbsp;&nbsp;<span className="text-[#F8C555]">stack</span><span className="text-white2">: [</span><span className="text-green">"React"</span><span className="text-white2">,</span><span className="text-green">"Node"</span><span className="text-white2">,</span><span className="text-green">"PostgreSQL"</span><span className="text-white2">,</span><span className="text-green">"Python"</span><span className="text-white2">],</span></> },
          { ln: '5', content: <>&nbsp;&nbsp;<span className="text-[#F8C555]">certified</span><span className="text-white2">:</span> <span className="text-green">"HackerRank SWE"</span><span className="text-white2">,</span></> },
          { ln: '6', content: <>&nbsp;&nbsp;<span className="text-[#F8C555]">status</span><span className="text-white2">:</span> <span className="text-green">"open_to_work"</span> <span className="text-muted italic">// 🟢 available</span></> },
          { ln: '7', content: <><span className="text-white2">{'};'}</span></> },
        ].map(({ ln, content }) => (
          <div key={ln} className="font-mono text-[0.82rem] leading-[2.1] flex items-baseline gap-2">
            <span className="text-muted/50 text-[0.65rem] min-w-[18px] select-none">{ln}</span>
            <span>{content}</span>
          </div>
        ))}
      </div>
    </div>
  )
}