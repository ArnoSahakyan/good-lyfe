import './App.scss'
import Header from './Components/Header/Header'
import Navigation from './Components/Navigation/Navigation'
import Info1 from './Components/Info1/info1'
import Slider2 from './Components/Slider2/Slider2'
import Info2 from './Components/Info2/info2'
import Reviews from './Components/Reviews/Reviews'
import Info3 from './Components/Info3/Info3'
import Socials from './Components/Socials/Socials'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Info1 />
      <Slider2 />
      <Info2 />
      <Reviews />
      <Info3 />
      <Socials />
    </div>
  )
}

export default App