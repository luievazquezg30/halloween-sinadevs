import AtmosphericBackground from './components/AtmosphericBackground.jsx'
import NavBar from './components/NavBar.jsx'
import Hero from './components/Hero.jsx'
import EventFooter from './components/EventFooter.jsx'

export default function App() {
  return (
    <div className="relative h-screen supports-[height:100svh]:h-[100svh] w-full flex flex-col justify-between overflow-hidden bg-gothic-950 text-gray-200 font-sans antialiased selection:bg-blood-600 selection:text-white">
      <AtmosphericBackground />
      <NavBar />
      <Hero />
      <EventFooter />
    </div>
  )
}
