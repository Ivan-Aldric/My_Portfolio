'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border-0 bg-transparent p-0 text-gray-600 transition-colors hover:text-[#8fac3e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8fac3e] focus-visible:ring-offset-2 dark:text-gray-300 dark:hover:text-[#c8f169] dark:focus-visible:ring-[#c8f169] dark:focus-visible:ring-offset-gray-900"
    >
      {isDark ? (
        <Moon aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
      ) : (
        <Sun aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
      )}
    </button>
  )
}
