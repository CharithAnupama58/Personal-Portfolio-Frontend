const highlights = [
  { label: 'Education',  value: 'B.Sc. (Hons) IT\nUniversity of Kelaniya' },
  { label: 'Location',   value: 'Galle, Sri Lanka\nOpen to remote' },
  { label: 'Interests',  value: 'ML, Healthcare Tech\nReal-time Systems' },
  { label: 'Status',     value: 'Open to full-time\nopportunities' },
]

export default function AboutText() {
  return (
    <div className="reveal">
      <div className="space-y-4 mb-8">
        <p className="text-white2 text-[0.88rem] sm:text-[0.92rem] leading-[1.9]">
          I'm a <strong className="text-cyan font-medium">HackerRank-certified Associate Software Engineer</strong> with
          deep expertise in end-to-end full stack development. My journey spans from building production bakery
          systems to developing ECG classification models with deep learning architectures.
        </p>
        <p className="text-white2 text-[0.88rem] sm:text-[0.92rem] leading-[1.9]">
          Currently interning at <strong className="text-cyan font-medium">MobiOs (Pvt) Ltd</strong>, I contribute to
          the Medica Project Series — healthcare software including Dental, Hospital, and Online Channeling Systems —
          using microservices and Agile methodologies.
        </p>
        <p className="text-white2 text-[0.88rem] sm:text-[0.92rem] leading-[1.9]">
          My academic research focuses on <strong className="text-cyan font-medium">sequence classification in medical
          diagnostics</strong> using ML, integrating multimodal datasets and optimising accuracy for real-world
          healthcare applications.
        </p>
        <p className="text-white2 text-[0.88rem] sm:text-[0.92rem] leading-[1.9]">
          Beyond code, I've led community initiatives as Event Coordinator at <strong className="text-cyan font-medium">IMSSA</strong> and
          Sub Coordinator of the Learn Steer Project under Sasnaka Sansada.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {highlights.map(({ label, value }, i) => (
          <div
            key={label}
            className={`reveal reveal-delay-${i + 1} p-3 sm:p-4 bg-panel border border-[var(--border)] border-l-2 border-l-cyan
              transition-all duration-300 hover:border-l-green hover:bg-panel2 hover:translate-x-1`}
          >
            <h4 className="font-mono text-[0.58rem] sm:text-[0.62rem] text-cyan uppercase tracking-[0.12em] mb-1">{label}</h4>
            <p className="text-white2 text-[0.75rem] sm:text-[0.8rem] whitespace-pre-line">{value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}