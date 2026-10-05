import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

type Lang = 'en' | 'tr'

interface LangContextType {
  lang: Lang
  toggle: () => void
  t: <T>(en: T, tr: T) => T
}

const LangContext = createContext<LangContextType>({
  lang: 'en',
  toggle: () => {},
  t: (en) => en,
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  const toggle = () => setLang(l => l === 'en' ? 'tr' : 'en')
  const t = <T,>(en: T, tr: T): T => lang === 'en' ? en : tr
  return <LangContext.Provider value={{ lang, toggle, t }}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)

