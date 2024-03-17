import './App.scss'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import Info1 from './components/Info1/info1'
import Slider2 from './components/Slider2/Slider2'

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