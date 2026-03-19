import useTyping    from '@/hooks/useTyping'
import { profile }  from '@/data/portfolio'
import HeroPhoto    from './HeroPhoto'
import HeroCode     from './HeroCode'

export default function Hero() {
  const typedRole = useTyping(profile.roles, 2200)

  const smoothScroll = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-4 sm:px-8 lg:px-16 pt-24 sm:pt-28 pb-16 relative z-10"
    >
      <div className="max-w-[1300px] mx-auto w-full">
        {/* Main grid - stacks on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 xl:gap-20 items-center">

          {/* Left — text content */}
          <div className="max-w-[640px]">
            <HeroCode />

            <h1
              className="font-display font-extrabold leading-none tracking-[-0.03em] mb-3"
              style={{
                fontSize: 'clamp(2.4rem, 8vw, 5.5rem)',
                opacity: 0,
                animation: 'fadeUp 0.7s ease 0.55s forwards',
              }}
            >
              Charith
              <br />
              <span style={{ color: 'transparent', WebkitTextStroke: '1.5px #00D9FF', textShadow: '0 0 40px rgba(0,217,255,0.2)' }}>
                Anupama.
              </span>
            </h1>

            <p
              className="font-mono text-cyan text-[0.85rem] sm:text-[1rem] flex items-center gap-2 mb-5"
              style={{ opacity: 0, animation: 'fadeUp 0.7s ease 0.7s forwards' }}
            >
              <span className="text-green">{'>'}</span>
              {typedRole}
              <span className="inline-block w-[2px] h-[1em] bg-cyan align-text-bottom" style={{ animation: 'blink 1s step-end infinite' }} />
            </p>

            <p
              className="text-[0.88rem] sm:text-[0.92rem] text-white2 leading-[1.9] mb-7"
              style={{ opacity: 0, animation: 'fadeUp 0.7s ease 0.85s forwards' }}
            >
              {profile.summary}
            </p>

            {/* Tags */}
            <div
              className="flex flex-wrap gap-2 mb-7"
              style={{ opacity: 0, animation: 'fadeUp 0.7s ease 1s forwards' }}
            >
              {profile.tags.map(tag => (
                <span key={tag} className="font-mono text-[0.62rem] sm:text-[0.65rem] text-cyan2 bg-[rgba(0,255,204,0.06)] border border-[rgba(0,255,204,0.18)] px-[0.6rem] py-[0.25rem]">
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-5"
              style={{ opacity: 0, animation: 'fadeUp 0.7s ease 1.1s forwards' }}
            >
              <button onClick={() => smoothScroll('#projects')} className="btn-primary w-full sm:w-auto text-center">
                View Projects
              </button>
              <button onClick={() => smoothScroll('#contact')} className="btn-secondary w-full sm:w-auto text-center">
                Get In Touch
              </button>
            </div>
          </div>

          {/* Right — photo (hidden on mobile, shown on lg+) */}
          <HeroPhoto />
        </div>

        {/* Stats row - shown on mobile below content, side on desktop */}
        <div
          className="flex flex-row justify-center gap-8 sm:gap-16 mt-12 lg:hidden"
          style={{ opacity: 0, animation: 'fadeUp 0.7s ease 1.3s forwards' }}
        >
          {[['6+', 'Projects'], ['2', 'Certs'], ['95%', 'ML Accuracy']].map(([num, label]) => (
            <div key={label} className="text-center">
              <span className="font-display text-[2rem] sm:text-[2.4rem] font-extrabold block" style={{ color: 'transparent', WebkitTextStroke: '1px #00D9FF' }}>
                {num}
              </span>
              <span className="font-mono text-[0.55rem] sm:text-[0.62rem] text-muted uppercase tracking-[0.12em]">{label}</span>
            </div>
          ))}
        </div>

        {/* Desktop stats - right side */}
        <div
          className="absolute right-4 sm:right-8 lg:right-16 top-1/2 -translate-y-1/2 flex-col gap-9 text-right hidden xl:flex"
          style={{ opacity: 0, animation: 'fadeLeft 0.7s ease 1.3s forwards' }}
        >
          {[['6+', 'Projects'], ['2', 'Certs'], ['95%', 'ML Accuracy']].map(([num, label]) => (
            <div key={label}>
              <span className="font-display text-[2.8rem] font-extrabold block" style={{ color: 'transparent', WebkitTextStroke: '1px #00D9FF' }}>
                {num}
              </span>
              <span className="font-mono text-[0.62rem] text-muted uppercase tracking-[0.12em]">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        style={{ opacity: 0, animation: 'fadeUp 0.6s ease 1.6s forwards' }}
        onClick={() => smoothScroll('#about')}
      >
        <span className="font-mono text-[0.58rem] sm:text-[0.6rem] text-muted tracking-[0.15em]">scroll</span>
        <div className="w-px h-[40px] sm:h-[50px] bg-gradient-to-b from-cyan to-transparent" style={{ animation: 'scrollAnim 2s ease-in-out infinite' }} />
      </div>
    </section>
  )
}