import { useState, useEffect } from 'react'

/**
 * Cycles through an array of strings with a typewriter effect.
 * @param {string[]} strings - Array of strings to cycle through
 * @param {number}   delay   - Initial delay before starting (ms)
 */
export default function useTyping(strings = [], delay = 2000) {
  const [text, setText] = useState('')
  const [index, setIndex]     = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (!strings.length) return
    const current = strings[index]

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, charIdx + 1))
          if (charIdx + 1 === current.length) {
            setTimeout(() => setDeleting(true), 1800)
          } else {
            setCharIdx((c) => c + 1)
          }
        } else {
          setText(current.slice(0, charIdx - 1))
          if (charIdx - 1 === 0) {
            setDeleting(false)
            setIndex((i) => (i + 1) % strings.length)
            setCharIdx(0)
          } else {
            setCharIdx((c) => c - 1)
          }
        }
      },
      deleting ? 50 : 95
    )

    return () => clearTimeout(timeout)
  }, [strings, index, charIdx, deleting])

  return text
}