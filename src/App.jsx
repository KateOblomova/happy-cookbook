import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Recipe from "./components/Recipe";
import Navpage from "./components/Navpage";
import Error from "./components/ErrorPage";
import { useState, useEffect } from "react";
import RecipesList from "./assets/Fetching";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]); //fetched recipes are in this state, pass them down to your component as props
  const [searchValue, setSearchValue] = useState("");
  // const { getRecipes } = RecipesList();

  // useEffect(() => {
  //   getRecipes().then((data) => setRecipes(data.items));
  // }, []);

  // console.log(recipes);
  const fetching = async () => {
    // const data = await fetch("https://recipes-practise.onrender.com/");
    const data = await fetch("https://powerfulcookbook-api.onrender.com//");
    const res = await data.json();
    setRecipes(res);
  };

  useEffect(() => {
    fetching();
  }, []);

  console.log("hello from app ", recipes);

  return (
    <>
      <body>
        <div>
          <Navbar setSearchValue={setSearchValue} searchValue={searchValue}/>
          <Routes>
            {/* // First Page */}
            <Route path="/" element={<Homepage recipes={recipes} />} />
            <Route path="*" element={<Error />} />

            {/* // Second Page */}
            <Route
              path="starter"
              element={<Navpage recipes={recipes} searchValue={searchValue} />}
            />
            <Route
              path="main"
              element={<Navpage recipes={recipes} searchValue={searchValue} />}
            />
            <Route
              path="dessert"
              element={<Navpage recipes={recipes} searchValue={searchValue} />}
            />
            <Route
              path="drink"
              element={<Navpage recipes={recipes} searchValue={searchValue} />}
            />
            <Route
              path="allrecipes"
              element={<Navpage recipes={recipes} searchValue={searchValue} />}
            />
            {/* // Third Page */}
            <Route path="/starter/:id" element={<Recipe recipes={recipes} />} />
            <Route path="/main/:id" element={<Recipe recipes={recipes} />} />
            <Route path="/dessert/:id" element={<Recipe recipes={recipes} />} />
            {/* <Route path="/drink/:id" element={<Recipe recipes={recipes} />} /> */}
            <Route path="/drink/:id" element={<Recipe />} />
          </Routes>
          <Footer />
        </div>
      </body>
    </>
  );
}

export default App;
