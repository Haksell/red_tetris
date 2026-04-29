import { Link } from 'react-router-dom'

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

export default HomePage
