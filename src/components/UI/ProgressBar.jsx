import { useEffect, useState } from 'react'

export default function ProgressBar() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const dh = document.documentElement.scrollHeight - window.innerHeight
      setWidth(dh > 0 ? (window.scrollY / dh) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 h-[2px] z-[9999] transition-[width] duration-100 pointer-events-none"
      style={{
        width: `${width}%`,
        background: 'linear-gradient(90deg, #00D9FF, #00FF88)',
        boxShadow: '0 0 8px #00D9FF',
      }}
    />
  )
}