import { Routes, Route, Link, Outlet } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SoloPage from './pages/SoloPage'
import MultiplayerPage from './pages/MultiplayerPage'

const Layout = () => (
  <>
    <Navbar />
    <div className="p-4">
      <Outlet />
    </div>
  </>
)

const Navbar = () => (
  <nav className="flex gap-4 mb-4">
    <Link to="/" className="text-blue-500">
      Home
    </Link>
    <Link to="/solo" className="text-blue-500">
      Solo
    </Link>
    <Link to="/multiplayer" className="text-blue-500">
      Multiplayer
    </Link>
  </nav>
)

const App = () => (
  <Routes>
    <Route index element={<HomePage />} />
    <Route element={<Layout />}>
      <Route path="solo" element={<SoloPage />} />
      <Route path="multiplayer" element={<MultiplayerPage />} />
    </Route>
  </Routes>
)

export default App
