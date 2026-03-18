import useReveal       from '@/hooks/useReveal'
import SectionHeader   from '@/components/UI/SectionHeader'
import Timeline        from './Timeline'
import CertCard        from './CertCard'
import { education, certifications } from '@/data/portfolio'

export default function Experience() {
  const ref = useReveal()

  return (
    <section id="experience" ref={ref} className="py-28 px-16 relative z-10">
      <div className="max-w-[1300px] mx-auto">
        <SectionHeader num="// 02" title="Work" highlight="Experience" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <Timeline />
          <div className="reveal">
            {/* Education timeline */}
            <div className="relative pl-7 mb-10">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-cyan to-transparent" />
              {education.map((edu, i) => (
                <div key={i} className="relative pl-8 pb-8 last:pb-0">
                  <div className="absolute left-[-0.35rem] top-[0.3rem] w-[0.7rem] h-[0.7rem] bg-cyan"
                    style={{ clipPath: 'polygon(50% 0,100% 50%,50% 100%,0 50%)' }} />
                  <p className="font-mono text-[0.63rem] text-cyan tracking-[0.1em] mb-1">{edu.period}</p>
                  <p className="font-display text-[1rem] font-bold text-white mb-[2px]">{edu.degree}</p>
                  <p className="text-purple2 text-[0.82rem] mb-1">{edu.institution}</p>
                  {edu.detail && <p className="text-muted text-[0.78rem]">{edu.detail}</p>}
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {certifications.map((cert, i) => (
                <CertCard key={i} cert={cert} delay={i + 1} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}