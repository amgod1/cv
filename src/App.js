import './App.css'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <div className="App">
        <Header />
        <About />
        <Projects />
        <Footer />
      </div>
    </div>

  );
}

export default App