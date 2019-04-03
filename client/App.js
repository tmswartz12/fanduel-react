import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Gamecast from './components/gamecast/Gamecast'

const App = () => {
  return (
    <div>
      <Navbar />
      <Gamecast />
      <Footer />
    </div>
  )
}

export default App
