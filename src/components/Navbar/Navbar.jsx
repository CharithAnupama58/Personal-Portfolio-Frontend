import { useState } from 'react'

const navLinks = [
  { num: '01', label: 'about',      href: '#about'       },
  { num: '02', label: 'experience', href: '#experience'  },
  { num: '03', label: 'projects',   href: '#projects'    },
  { num: '04', label: 'blog',       href: '#blog'        },
  { num: '05', label: 'awards',     href: '#achievements'},
  { num: '06', label: 'contact',    href: '#contact'     },
]

export default function Navbar({ scrolled }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const smoothScroll = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between transition-all duration-300
        ${scrolled
          ? 'bg-bg/95 backdrop-blur-2xl border-b border-[var(--border)] py-3 px-4 sm:px-8 lg:px-16'
          : 'bg-transparent py-4 sm:py-5 px-4 sm:px-8 lg:px-16'
        }`}
    >
      {/* Logo */}
      <a href="#hero" onClick={e => smoothScroll(e, '#hero')} className="font-mono text-[0.9rem] sm:text-[0.95rem] text-cyan no-underline flex items-center gap-1">
        <span className="text-cyan/30">[</span>
        <span className="text-white">charith</span>
        <span className="text-cyan/30">]</span>
        <span className="inline-block w-[2px] h-[1em] bg-cyan ml-[1px] align-text-bottom" style={{ animation: 'blink 1s step-end infinite' }} />
      </a>

      {/* Desktop links */}
      <ul className="hidden lg:flex gap-6 xl:gap-8 list-none">
        {navLinks.map(({ num, label, href }) => (
          <li key={href}>
            <a
              href={href}
              onClick={e => smoothScroll(e, href)}
              className="text-muted no-underline font-mono text-[0.68rem] xl:text-[0.72rem] tracking-[0.04em] transition-colors duration-200 hover:text-cyan flex items-center gap-1"
            >
              <span className="text-cyan/30 text-[0.58rem]">{num}.</span>
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Hire me CTA - hidden on small screens */}
      <a
        href="mailto:charith20anupama@gmail.com"
        className="hidden lg:inline-block relative overflow-hidden px-4 xl:px-5 py-2 border border-cyan text-cyan font-mono text-[0.65rem] xl:text-[0.68rem] tracking-widest no-underline transition-all duration-300 group hover:text-bg"
      >
        <span className="absolute inset-0 bg-cyan -translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-0" />
        <span className="relative z-10">$ hire_me</span>
      </a>

      {/* Hamburger - visible on mobile/tablet */}
      <button
        className="lg:hidden flex flex-col gap-[5px] cursor-pointer p-2 bg-transparent border-none"
        onClick={() => setMobileOpen(v => !v)}
        aria-label="Toggle menu"
      >
        <span className={`block w-[22px] h-[1.5px] bg-cyan transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
        <span className={`block w-[22px] h-[1.5px] bg-cyan transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-[22px] h-[1.5px] bg-cyan transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed top-[56px] sm:top-[62px] left-0 right-0 bg-bg/98 backdrop-blur-xl border-b border-[var(--border)] px-6 py-6 flex flex-col gap-5 z-[999]">
          {navLinks.map(({ num, label, href }) => (
            <a
              key={href}
              href={href}
              onClick={e => smoothScroll(e, href)}
              className="text-muted font-mono text-sm no-underline hover:text-cyan transition-colors flex items-center gap-2 py-1"
            >
              <span className="text-cyan/30 text-xs">{num}.</span>{label}
            </a>
          ))}
          <a
            href="mailto:charith20anupama@gmail.com"
            className="mt-2 text-center px-5 py-2 border border-cyan text-cyan font-mono text-[0.68rem] tracking-widest no-underline"
          >
            $ hire_me
          </a>
        </div>
      )}
    </nav>
  )
}