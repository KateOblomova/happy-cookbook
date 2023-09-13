import { useState, useEffect } from "react";
import RecipesList from "./assets/Fetching";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [recipes, setRecepies] = useState([]); //fetched recipes are in this state, pass them down to your component as props
  const { getRecipes } = RecipesList();

  useEffect(() => {
    getRecipes().then((data) => setRecepies(data.items));
  }, []);

  console.log(recipes);

  return (
    <>
      <div>
        {/* <Routes>
          <Route path="/desert/:hello" element={} /> //Here to pass component of recipe with props to navigate thru each recipe with help of useParams()
          <Route path="/starter/:hello" element={} />
          <Route path="/main/:hello" element={} />
          <Route path="/drink/:hello" element={} />
        </Routes> */}
      </div>
    </>
  );
}

export default App;
