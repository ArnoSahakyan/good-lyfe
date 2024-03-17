import './App.scss'
import Header from './Components/Header/Header'
import Navigation from './Components/Navigation/Navigation'
import Info1 from './Components/Info1/info1'
import Slider2 from './Components/Slider2/Slider2'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Info1 />
      <Slider2 />
    </div>
  )
}

export default App