import { useState } from 'react'

function App() {
  const [isDark, setIsDark] = useState(false)

  return (
    <main className={`app ${isDark ? 'dark' : 'light'}`}>
      <h1>Awesome Copilot Agent</h1>
      <button
        type="button"
        aria-pressed={isDark}
        onClick={() => setIsDark(!isDark)}
      >
        Switch to {isDark ? 'light' : 'dark'} theme
      </button>
    </main>
  )
}

export default App
