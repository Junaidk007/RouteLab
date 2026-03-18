import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import AuthPage from './pages/AuthPage'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <>
      <Navbar theme={theme} onToggleTheme={() => setTheme((value) => (value === 'light' ? 'dark' : 'light'))} />
      <div className="app-shell">
        <Routes>
            <Route path='/auth' element={<AuthPage/>}/>
            <Route path='/' element={<Landing/>} />
            <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
