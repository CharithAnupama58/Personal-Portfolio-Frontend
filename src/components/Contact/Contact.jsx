import useReveal      from '@/hooks/useReveal'
import SectionHeader  from '@/components/UI/SectionHeader'
import ContactInfo    from './ContactInfo'
import ContactForm    from './ContactForm'

export default function Contact() {
  const ref = useReveal()

  return (
    <section
      id="contact"
      ref={ref}
      className="py-16 sm:py-20 lg:py-28 px-4 sm:px-8 lg:px-16 relative z-10"
      style={{ background: 'linear-gradient(180deg,transparent,rgba(8,15,28,0.6),transparent)' }}
    >
      <div className="max-w-[1300px] mx-auto">
        <SectionHeader num="// 06" title="Get In" highlight="Touch" />
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 sm:gap-14 lg:gap-20 items-start">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  )
}