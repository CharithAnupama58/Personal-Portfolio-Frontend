import useReveal      from '@/hooks/useReveal'
import SectionHeader  from '@/components/UI/SectionHeader'
import AboutText      from './AboutText'
import SkillsList     from './SkillsList'

export default function About() {
  const ref = useReveal()

  return (
    <section
      id="about"
      ref={ref}
      className="py-16 sm:py-20 lg:py-28 px-4 sm:px-8 lg:px-16 relative z-10"
      style={{ background: 'linear-gradient(180deg,transparent,rgba(12,22,40,0.4),transparent)' }}
    >
      <div className="max-w-[1300px] mx-auto">
        <SectionHeader num="// 01" title="About" highlight="Me" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-24 items-start">
          <AboutText />
          <SkillsList />
        </div>
      </div>
    </section>
  )
}