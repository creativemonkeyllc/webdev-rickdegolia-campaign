import { Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/SiteLayout.jsx'
import Home from './pages/Home.jsx'
import Letters from './pages/Letters.jsx'
import Issues from './pages/Issues.jsx'
import IssueArticle from './pages/IssueArticle.jsx'
import About from './pages/About.jsx'
import Endorsers from './pages/Endorsers.jsx'
import './App.css'

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />} path="/">
        <Route element={<Home />} index />
        <Route element={<Letters />} path="letters" />
        <Route element={<Issues />} path="issues" />
        <Route element={<IssueArticle />} path="issues/:slug" />
        <Route element={<About />} path="about" />
        <Route element={<Endorsers />} path="endorsers" />
      </Route>
      <Route element={<Navigate replace to="/" />} path="*" />
    </Routes>
  )
}

export default App
