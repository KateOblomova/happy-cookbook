import { Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Navpage from './components/Navpage';
import Error from "./components/ErrorPage";

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      {/* // First Page */}
      <Route path="/" element={<Homepage/>} />
      <Route path="*" element={<Error/>}/>

      {/* // Second Page */}
      <Route path="starter" element={<Navpage/>} />
      <Route path="main" element={<Navpage/>} />
      <Route path="dessert" element={<Navpage/>}/>
      <Route path="drink" element={<Navpage/>}/>
      <Route path="allrecipes" element={<Navpage/>}/>

    </Routes>
    <Footer />
    </>
  )
}

export default App
