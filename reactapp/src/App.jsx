import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CardsProfile from './components/CardsProfile'
import FirstComp from './components/firstComp'



function App() {
  return (
    <>

      <Navbar />

    <div className="container my-5 border border-4 border-success py-2">
      <FirstComp/>
    </div>

      <div className="container border border-warning border-3">
        <h1>Namaste Bharat</h1>
        <p className='text-success'>We are Learning React in 2026 with Chetan Sharma Sir</p>

      </div>
      <div className="container my-3">
        <div className="row justify-content-between">

        <CardsProfile />
        </div>
      </div>
      <Footer />

    </>

  )
}

export default App