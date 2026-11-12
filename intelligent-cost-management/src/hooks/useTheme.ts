import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'
const storageKey = 'gestao-de-custos:theme'
const mediaQuery = '(prefers-color-scheme: dark)'

function parseTheme(value: string | null): Theme | null {
  return value === 'light' || value === 'dark' ? value : null
}

function storedTheme(): Theme | null {
  try {
    return parseTheme(window.localStorage.getItem(storageKey))
  } catch {
    return null
  }
}

function systemTheme(): Theme {
  return window.matchMedia(mediaQuery).matches ? 'dark' : 'light'
}

export function useTheme() {
  const [preference, setPreference] = useState(storedTheme)
  const [theme, setTheme] = useState<Theme>(
    () =>
      parseTheme(document.documentElement.dataset.theme ?? null) ??
      storedTheme() ??
      systemTheme(),
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#0b1422' : '#f4f6f9')
  }, [theme])

  useEffect(() => {
    const media = window.matchMedia(mediaQuery)
    const followSystem = (event: MediaQueryListEvent) => {
      if (preference === null) setTheme(event.matches ? 'dark' : 'light')
    }
    const syncPreference = (event: StorageEvent) => {
      if (event.key !== storageKey && event.key !== null) return
      const next = parseTheme(event.newValue)
      setPreference(next)
      setTheme(next ?? systemTheme())
    }
    media.addEventListener('change', followSystem)
    window.addEventListener('storage', syncPreference)
    return () => {
      media.removeEventListener('change', followSystem)
      window.removeEventListener('storage', syncPreference)
    }
  }, [preference])

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    setPreference(next)
    try {
      window.localStorage.setItem(storageKey, next)
    } catch {
      // A seleção continua funcionando quando o navegador bloqueia o armazenamento.
    }
  }

  return { theme, toggleTheme }
}
