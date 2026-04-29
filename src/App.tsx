import { Routes, Route, Outlet, NavLink } from 'react-router-dom'
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
    <Route index element={<HomePage />} />
    <Route element={<Layout />}>
      <Route path="solo" element={<SoloPage />} />
      <Route path="multiplayer" element={<MultiplayerPage />} />
    </Route>
  </Routes>
)

export default App
