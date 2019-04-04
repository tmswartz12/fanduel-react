import React from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
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
