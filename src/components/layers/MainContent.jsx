import React, { useCallback, useState } from 'react'
import { Layout } from 'antd'
import { getStatistic, getRandomNumbers } from '../../utils/math'
import { translations } from '../../locales/translations'
import AppHeader from '../organisms/AppHeader'
import GeneratorSection from '../organisms/GeneratorSection'
import HistorySection from '../organisms/HistorySection'

const HISTORY_LIMIT = 5
const ANIMATION_DELAY_MS = 800
const GAME_OPTIONS = { count: 5, min: 1, max: 36 }

const MainContent = ({ isDarkMode, toggleTheme }) => {
  const [currentResult, setCurrentResult] = useState(null)
  const [history, setHistory] = useState([])
  const [lang, setLang] = useState('en')
  const [isAnimating, setIsAnimating] = useState(false)

  const curLang = translations[lang]
  const isRtl = lang === 'he'

  const handleGenerate = useCallback(() => {
    setIsAnimating(true)

    setTimeout(() => {

      const numbers = getRandomNumbers(...Object.values(GAME_OPTIONS))
      const stats = getStatistic(numbers)
      const entry = { id: Date.now(), numbers, stats }

      setCurrentResult(entry)
      setHistory(prev => [entry, ...prev].slice(0, HISTORY_LIMIT))
      setIsAnimating(false)
    }, ANIMATION_DELAY_MS)
  }, [])

  return (
    <Layout style={{ minHeight: '100vh' }} dir={isRtl ? 'rtl' : 'ltr'}>
      <div style={{ maxWidth: 720, margin: '0 auto', width: '100%', padding: '24px 16px' }}>
        <AppHeader
          title={curLang.title}
          lang={lang}
          onLangChange={setLang}
          isDarkMode={isDarkMode}
          onToggleTheme={toggleTheme}
        />
        <GeneratorSection
          curLang={curLang}
          currentResult={currentResult}
          isAnimating={isAnimating}
          onGenerate={handleGenerate}
        />
        <HistorySection history={history} curLang={curLang} />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-short {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-15px); }
        }
      `}} />
    </Layout>
  )
}

export default MainContent
