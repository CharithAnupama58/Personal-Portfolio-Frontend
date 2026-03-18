export default function CertCard({ cert, delay = 1 }) {
  return (
    <div className={`reveal reveal-delay-${delay} flex items-start gap-3 p-4 bg-panel border border-[var(--border)]
      transition-all duration-300 hover:border-cyan hover:shadow-[0_0_18px_rgba(0,217,255,0.07)]`}>
      <div className="w-[38px] h-[38px] flex-shrink-0 flex items-center justify-center text-lg
        bg-cyan/10 border border-[var(--border2)]">
        {cert.icon}
      </div>
      <div>
        <h4 className="text-[0.82rem] font-medium text-white mb-[3px]">{cert.title}</h4>
        <p className="font-mono text-[0.65rem] text-muted">{cert.issuer} · {cert.date} · ID: {cert.id}</p>
      </div>
    </div>
  )
}