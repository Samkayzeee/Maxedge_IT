import Footer from "./components/footer/Footer"
import Home from "./components/home/Home"
import Navbar from "./components/navbar/Navbar"
import Results from "./components/results/Results"
import Safety from "./components/safety/Safety"



function App() {
 

  return (
    <>
      <main className="bg-white p-28 pb-0">
        <Navbar />


          <div id="home">
              <Home />
          </div>
          
          <div id="results" className="my-20">
            <Results />
          </div>

          <div id="safety" className="mb-20">
            <Safety />
          </div>

          <Footer />


      </main>
    </>
  )
}

export default App
