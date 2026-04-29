import { Routes, Route, Link, Outlet } from 'react-router-dom'

const GameButton: React.FC<{
  text: string
}> = ({ text }) => (
  <Link
    className={`flex justify-center items-center bg-white border-4 border-black text-black font-mono tracking-widest hover:bg-black hover:text-white transition duration-300 w-2/3 max-w-sm  py-4 px-4 text-2xl`}
    to="/solo"
  >
    {text}
  </Link>
)

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-rose-600 space-y-4 py-4 min-h-screen">
      <GameButton text="SOLO" />
      <GameButton text="MULTIPLAYER" />
    </div>
  )
}

function SoloPage() {
  return <h1 className="text-2xl">Solo</h1>
}

function MultiplayerPage() {
  return <h1 className="text-2xl">Multiplayer</h1>
}

function Layout() {
  return (
    <>
      <Navbar />
      <div className="p-4">
        <Outlet />
      </div>
    </>
  )
}

function Navbar() {
  return (
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
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route element={<Layout />}>
        <Route path="/solo" element={<SoloPage />} />
        <Route path="/multiplayer" element={<MultiplayerPage />} />
      </Route>
    </Routes>
  )
}
