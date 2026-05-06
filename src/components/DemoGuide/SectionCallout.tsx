import { X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useDemoGuide } from '../../contexts/DemoGuideContext'

type SectionCalloutProps = {
  id: string
  text: string
}

export function SectionCallout({ id, text }: SectionCalloutProps) {
  const { demoGuideActive, dismissedCallouts, dismissCallout } = useDemoGuide()
  const [isVisible, setIsVisible] = useState(false)
  const [shiftX, setShiftX] = useState(0)
  const cardRef = useRef<HTMLDivElement | null>(null)

  const shouldRender = !demoGuideActive || dismissedCallouts.has(id) ? false : true

  useEffect(() => {
    if (!shouldRender) {
      setIsVisible(false)
      return
    }

    const frame = window.requestAnimationFrame(() => setIsVisible(true))
    return () => window.cancelAnimationFrame(frame)
  }, [shouldRender])

  useEffect(() => {
    if (!shouldRender) {
      setShiftX(0)
      return
    }

    const adjustPosition = () => {
      if (!cardRef.current) return
      const parent = cardRef.current.offsetParent as HTMLElement | null
      if (!parent) return

      const cardRect = cardRef.current.getBoundingClientRect()
      const parentRect = parent.getBoundingClientRect()
      const rightOverflow = Math.max(0, cardRect.right - (parentRect.right - 16))
      const leftOverflow = Math.max(0, (parentRect.left + 16) - cardRect.left)
      setShiftX(leftOverflow - rightOverflow)
    }

    const frame = window.requestAnimationFrame(adjustPosition)
    window.addEventListener('resize', adjustPosition)
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('resize', adjustPosition)
    }
  }, [shouldRender, text])

  if (!shouldRender) return null

  return (
    <div
      ref={cardRef}
      style={{ transform: `translateX(${shiftX}px)` }}
      className={`absolute z-40 w-[300px] rounded-lg border border-[#CE93D8] bg-[#F3E5F5] p-4 shadow-lg transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <button
        type="button"
        aria-label="Dismiss callout"
        onClick={() => dismissCallout(id)}
        className="absolute right-2 top-2 cursor-pointer text-[#7B1FA2] hover:text-purple-900"
      >
        <X size={14} />
      </button>
      <p className="pr-6 text-[13px] leading-relaxed text-gray-700">{text}</p>
    </div>
  )
}
