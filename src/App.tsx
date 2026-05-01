import { Routes, Route, Outlet, NavLink, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SoloPage from './pages/SoloPage'
import MultiplayerPage from './pages/MultiplayerPage'

const Layout = () => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-1 flex">
      <Outlet />
    </main>
  </div>
)

const navlinkStyle = ({ isActive }: { isActive: boolean }) =>
  `text-blue-500 ${isActive ? 'font-bold' : ''}`

const Navbar = () => (
  <nav className="flex gap-4 mb-4">
    <NavLink to="/" className={navlinkStyle}>
      Home
    </NavLink>
    <NavLink to="/solo" className={navlinkStyle}>
      Solo
    </NavLink>
    <NavLink to="/multiplayer" className={navlinkStyle}>
      Multiplayer
    </NavLink>
  </nav>
)

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route element={<Layout />}>
      <Route path="solo" element={<SoloPage />} />
      <Route path="multiplayer" element={<MultiplayerPage />} />
    </Route>
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
)

export default App
