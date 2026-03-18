import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const pos     = useRef({ mx: 0, my: 0, rx: 0, ry: 0 })

  useEffect(() => {
    const onMove = (e) => {
      pos.current.mx = e.clientX
      pos.current.my = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px'
        dotRef.current.style.top  = e.clientY + 'px'
      }
    }

    let animId
    const animRing = () => {
      const { mx, my } = pos.current
      pos.current.rx += (mx - pos.current.rx) * 0.12
      pos.current.ry += (my - pos.current.ry) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = pos.current.rx + 'px'
        ringRef.current.style.top  = pos.current.ry + 'px'
      }
      animId = requestAnimationFrame(animRing)
    }
    animRing()

    const onEnter = () => {
      if (!dotRef.current || !ringRef.current) return
      dotRef.current.style.width  = '5px'
      dotRef.current.style.height = '5px'
      ringRef.current.style.width  = '50px'
      ringRef.current.style.height = '50px'
      ringRef.current.style.borderColor = 'rgba(0,217,255,0.8)'
    }
    const onLeave = () => {
      if (!dotRef.current || !ringRef.current) return
      dotRef.current.style.width  = '10px'
      dotRef.current.style.height = '10px'
      ringRef.current.style.width  = '34px'
      ringRef.current.style.height = '34px'
      ringRef.current.style.borderColor = 'rgba(0,217,255,0.45)'
    }

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a,button,[data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      cancelAnimationFrame(animId)
      document.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="cursor fixed w-[10px] h-[10px] bg-cyan rounded-full pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2 mix-blend-screen transition-[width,height] duration-200"
      />
      <div
        ref={ringRef}
        className="cursor-ring fixed w-[34px] h-[34px] border border-cyan/50 rounded-full pointer-events-none z-[99998] -translate-x-1/2 -translate-y-1/2 transition-[width,height,border-color] duration-200"
      />
    </>
  )
}