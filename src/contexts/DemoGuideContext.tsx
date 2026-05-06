import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'

type DemoGuideContextValue = {
  demoGuideActive: boolean
  toggleDemoGuide: () => void
  dismissedCallouts: Set<string>
  dismissCallout: (id: string) => void
  visitedPages: Set<string>
  markPageVisited: (page: string) => void
}

const DemoGuideContext = createContext<DemoGuideContextValue | null>(null)

export function DemoGuideProvider({ children }: { children: ReactNode }) {
  const [demoGuideActive, setDemoGuideActive] = useState(false)
  const [dismissedCallouts, setDismissedCallouts] = useState<Set<string>>(new Set())
  const [visitedPages, setVisitedPages] = useState<Set<string>>(new Set())

  const toggleDemoGuide = useCallback(() => {
    setDemoGuideActive((current) => {
      const next = !current
      if (!current && next) {
        setDismissedCallouts(new Set())
        setVisitedPages(new Set())
      }
      return next
    })
  }, [])

  const dismissCallout = useCallback((id: string) => {
    setDismissedCallouts((current) => new Set(current).add(id))
  }, [])

  const markPageVisited = useCallback((page: string) => {
    setVisitedPages((current) => new Set(current).add(page))
  }, [])

  const value = useMemo(
    () => ({
      demoGuideActive,
      toggleDemoGuide,
      dismissedCallouts,
      dismissCallout,
      visitedPages,
      markPageVisited,
    }),
    [demoGuideActive, toggleDemoGuide, dismissedCallouts, dismissCallout, visitedPages, markPageVisited],
  )

  return <DemoGuideContext.Provider value={value}>{children}</DemoGuideContext.Provider>
}

export function useDemoGuide() {
  const context = useContext(DemoGuideContext)
  if (!context) {
    throw new Error('useDemoGuide must be used within a DemoGuideProvider')
  }
  return context
}

export { DemoGuideContext }
