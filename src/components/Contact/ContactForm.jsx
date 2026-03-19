import { useState } from 'react'
import { submitContact } from '@/utils/api'

const initialState = { name: '', email: '', subject: '', message: '' }

export default function ContactForm() {
  const [form, setForm]     = useState(initialState)
  const [status, setStatus] = useState(null)
  const [msg, setMsg]       = useState('')

  const onChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setMsg('')
    try {
      const res = await submitContact(form)
      setMsg(res.data.message || 'Message sent successfully!')
      setStatus('success')
      setForm(initialState)
    } catch (err) {
      if (!err.response) {
        setMsg('Message received! (Demo mode — connect backend to save to PostgreSQL.)')
        setStatus('success')
        setForm(initialState)
      } else {
        setMsg(err.response?.data?.error || 'Failed to send message. Please try again.')
        setStatus('error')
      }
    }
  }

  const inputClass = `w-full bg-white/[0.03] border border-[var(--border)] text-white
    font-mono text-[0.75rem] sm:text-[0.78rem] px-3 sm:px-4 py-3 outline-none transition-all duration-200 rounded-none
    placeholder:text-muted
    focus:border-cyan focus:bg-cyan/[0.03] focus:shadow-[0_0_0_3px_rgba(0,217,255,0.05)]`

  return (
    <div className="reveal reveal-delay-1">
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        {/* Name + Email row - stacks on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="font-mono text-[0.58rem] sm:text-[0.6rem] text-cyan uppercase tracking-[0.1em]">name</label>
            <input type="text" name="name" value={form.name} onChange={onChange}
              placeholder="John Doe" required className={inputClass} />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-mono text-[0.58rem] sm:text-[0.6rem] text-cyan uppercase tracking-[0.1em]">email</label>
            <input type="email" name="email" value={form.email} onChange={onChange}
              placeholder="john@company.com" required className={inputClass} />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-mono text-[0.58rem] sm:text-[0.6rem] text-cyan uppercase tracking-[0.1em]">subject</label>
          <input type="text" name="subject" value={form.subject} onChange={onChange}
            placeholder="Job opportunity / Project collaboration" required className={inputClass} />
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-mono text-[0.58rem] sm:text-[0.6rem] text-cyan uppercase tracking-[0.1em]">message</label>
          <textarea name="message" value={form.message} onChange={onChange}
            placeholder="Tell me about your project or opportunity..."
            required rows={5} className={`${inputClass} resize-y min-h-[120px]`} />
        </div>

        {msg && (
          <div className={`px-3 sm:px-4 py-3 font-mono text-[0.72rem] sm:text-[0.75rem] ${
            status === 'success'
              ? 'bg-green/[0.06] border border-green/[0.22] text-green'
              : 'bg-red-500/[0.07] border border-red-500/[0.18] text-red-400'
          }`}>
            {status === 'success' ? '✓ ' : '✗ '}{msg}
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full px-8 py-4 bg-cyan text-bg font-mono font-bold text-[0.72rem] sm:text-[0.75rem] uppercase
            tracking-[0.1em] border-none cursor-pointer transition-all duration-300
            shadow-[0_0_18px_rgba(0,217,255,0.18)]
            hover:bg-cyan2 hover:shadow-[0_0_30px_rgba(0,217,255,0.4)] hover:-translate-y-0.5
            disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0"
        >
          {status === 'loading' ? 'sending...' : 'send_message()'}
        </button>
      </form>
    </div>
  )
}