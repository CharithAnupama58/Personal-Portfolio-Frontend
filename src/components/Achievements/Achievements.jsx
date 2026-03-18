import useReveal         from '@/hooks/useReveal'
import SectionHeader     from '@/components/UI/SectionHeader'
import AchievementCard   from './AchievementCard'
import { achievements }  from '@/data/portfolio'

export default function Achievements() {
  const ref = useReveal()

  return (
    <section
      id="achievements"
      ref={ref}
      className="py-28 px-16 relative z-10"
      style={{ background: 'linear-gradient(180deg,transparent,rgba(12,22,40,0.4),transparent)' }}
    >
      <div className="max-w-[1300px] mx-auto">
        <SectionHeader num="// 05" title="Awards &" highlight="Recognition" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((item, i) => (
            <AchievementCard key={i} item={item} delay={i % 3} />
          ))}
        </div>
      </div>
    </section>
  )
}