import { X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useDemoGuide } from '../../contexts/DemoGuideContext'

type FeatureDiscoveryHintProps = {
  id: string
  pageKey: string
  text: string
}

export function FeatureDiscoveryHint({ id, pageKey, text }: FeatureDiscoveryHintProps) {
  const { demoGuideActive, visitedPages, dismissedCallouts, dismissCallout, markPageVisited } =
    useDemoGuide()
  const [isVisible, setIsVisible] = useState(false)

  const shouldRender = !demoGuideActive || dismissedCallouts.has(id) || visitedPages.has(pageKey) ? false : true

  useEffect(() => {
    if (!shouldRender) {
      setIsVisible(false)
      return
    }

    const frame = window.requestAnimationFrame(() => setIsVisible(true))
    return () => window.cancelAnimationFrame(frame)
  }, [shouldRender])

  if (!shouldRender) return null

  return (
    <div
      className={`absolute left-1/2 top-4 z-[45] w-[300px] -translate-x-1/2 rounded-lg border border-[#CE93D8] bg-[#F3E5F5] p-4 shadow-lg transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <p className="pr-6 text-[13px] leading-relaxed text-gray-700">{text}</p>
      <button
        type="button"
        aria-label="Dismiss hint"
        onClick={() => {
          dismissCallout(id)
          markPageVisited(pageKey)
        }}
        className="absolute right-2 top-2 cursor-pointer text-[#7B1FA2] hover:text-purple-900"
      >
        <X size={14} />
      </button>
    </div>
  )
}
