import { lazy, Suspense, useState } from 'react'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const VirtualList = lazy(() => import('./pages/VirtualList'))
import "./App.css"

export default function App() {
  const [page, setPage] = useState('home')

  return (
    <>
      <nav>
        <button onClick={() => setPage('home')}>Home</button>
        <button onClick={() => setPage('about')}>About</button>
        <button onClick={() => setPage('virtuallist')}>Virtual List</button>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        {page === 'home' && <Home />}
        {page === 'about' && <About />}
        {page === 'virtuallist' && <VirtualList />}
      </Suspense>
    </>
  )
}