import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      title="Back to top"
      className={`fixed bottom-8 right-8 w-10 h-10 z-[999] flex items-center justify-center
        bg-panel border border-[var(--border)] text-cyan text-base
        transition-all duration-300 cursor-pointer
        hover:bg-cyan/10 hover:border-cyan hover:shadow-[0_0_12px_rgba(0,217,255,0.18)]
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'}`}
    >
      ↑
    </button>
  )
}