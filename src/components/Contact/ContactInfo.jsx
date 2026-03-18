import { profile } from '@/data/portfolio'

const GithubIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
)
const LinkedInIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const contactDetails = [
  { icon: '✉️', label: 'Email',    value: profile.email,    href: `mailto:${profile.email}` },
  { icon: '📞', label: 'Phone',    value: profile.phone,    href: `tel:${profile.phone.replace(/\s/g,'')}` },
  { icon: '📍', label: 'Location', value: profile.location, href: null },
]

export default function ContactInfo() {
  return (
    <div className="reveal">
      <h3 className="font-display text-[1.6rem] font-extrabold text-white mb-3 leading-[1.3]">
        Let's Build Something<br />Great Together
      </h3>
      <p className="text-white2 text-[0.88rem] leading-[1.85] mb-7">
        Actively seeking full-time software engineering roles. Whether you have a project,
        an opportunity, or just want to connect — my inbox is always open.
      </p>

      <div className="flex flex-col gap-3 mb-8">
        {contactDetails.map(({ icon, label, value, href }) => (
          <div key={label} className="flex items-center gap-3">
            <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center text-[0.88rem]
              bg-cyan/10 border border-cyan/22">
              {icon}
            </div>
            <div>
              <p className="font-mono text-[0.58rem] text-muted uppercase tracking-[0.1em] mb-[2px]">{label}</p>
              {href
                ? <a href={href} className="block text-[0.82rem] text-white2 no-underline transition-colors duration-200 hover:text-cyan">{value}</a>
                : <span className="block text-[0.82rem] text-white2">{value}</span>
              }
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <a href={profile.github} target="_blank" rel="noreferrer"
          className="w-10 h-10 border border-[var(--border)] flex items-center justify-center text-muted no-underline
            transition-all duration-200 hover:border-cyan hover:text-cyan hover:bg-cyan/10 hover:shadow-[0_0_10px_rgba(0,217,255,0.12)]">
          <GithubIcon />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer"
          className="w-10 h-10 border border-[var(--border)] flex items-center justify-center text-muted no-underline
            transition-all duration-200 hover:border-cyan hover:text-cyan hover:bg-cyan/10 hover:shadow-[0_0_10px_rgba(0,217,255,0.12)]">
          <LinkedInIcon />
        </a>
      </div>
    </div>
  )
}