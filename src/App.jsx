import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Navpage from './components/Navpage';
import Error from "./components/ErrorPage";
import { useState, useEffect } from "react";
import RecipesList from "./assets/Fetching";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]); //fetched recipes are in this state, pass them down to your component as props
  const { getRecipes } = RecipesList();

  useEffect(() => {
    getRecipes().then((data) => setRecipes(data.items));
  }, []);

  console.log(recipes);

  return (
    <>
      <div>
      <Navbar />
        <Routes>
        {/* // First Page */}
          <Route path="/" element={<Homepage/>} />
          <Route path="*" element={<Error/>}/>

        {/* // Second Page */}
          <Route path="starter" element={<Navpage recipes={recipes}/>} />
          <Route path="main" element={<Navpage recipes={recipes}/>} />
          <Route path="dessert" element={<Navpage recipes={recipes}/>}/>
          <Route path="drink" element={<Navpage recipes={recipes}/>}/>
          <Route path="allrecipes" element={<Navpage recipes={recipes}/>}/>

        {/* Third Page */}
          {/* <Route path="/desert/:hello" element={} /> //Here to pass component of recipe with props to navigate thru each recipe with help of useParams()
          <Route path="/starter/:hello" element={} />
          <Route path="/main/:hello" element={} />
          <Route path="/drink/:hello" element={} /> */}
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
