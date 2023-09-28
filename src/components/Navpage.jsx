import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SpinnerDotted } from "spinners-react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx"

export default function Navpage({ searchValue }) {
  //kate
  const [recipes, setRecipes] = useState([]);
  const {light, dark, isLightTheme} = useContext(ThemeContext);
  const themeStyles = isLightTheme ? light : dark

  const fetching = async () => {
    const data = await fetch("https://powerfulcookbook-api.onrender.com/");
    const res = await data.json();
    setRecipes(res);
  };

  useEffect(() => {
    fetching();
  }, []);
  //kate

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  // Search array
  // const filteredRecipes = recipes.filter((item) =>
  //   item.fields.recipeName.toLowerCase().includes(searchValue.toLowerCase())
  // );

  const filteredRecipes = recipes.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  // Getting path name and "cleaning" it so that it matches the category
  const capitaliseFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  let path = window.location.pathname;
  path = path.replace("/", "");
  path = capitaliseFirstLetter(path);

  const alphabeticiseArray = (arr) => {
    return arr.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  };
  alphabeticiseArray(recipes);

  // ready to use API data
  console.log(recipes);
  console.log(path);
  const loadingArray = [
    "One moment please",
    "Turn that oven on",
    "Sharpen that knife",
    "Wash your hands",
    "Hope you are hungry",
    "Prepare for greatness",
  ];
  return (
    <>
      {path !== "Allrecipes" ? (
        <h1 style={{ textAlign: "center", color: themeStyles.text, backgroundColor: themeStyles.background, margin: "0px", padding: "1% 0"}}>{path}s </h1>
      ) : (
        <h1 style={{ textAlign: "center", color: themeStyles.text, backgroundColor: themeStyles.background, margin: "0px", padding: "1% 0"}}> All Recipes</h1>
      )}

      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: themeStyles.background,
          }}
        >
          <SpinnerDotted
            loading={isLoading}
            data-testid="loader"
            color="orange"
            size={300}
          />
          <h2 style={{ color: "grey" }}>
            {loadingArray[Math.floor(Math.random() * 6)]}
          </h2>
        </div>
      ) : (
        <div
          className="navPage-Container"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            backgroundColor: themeStyles.background
          }}
        >
          {filteredRecipes.map((text, index) => {
            // if (text.fields.category === path || path === "Allrecipes") {
            if (text.category === path || path === "Allrecipes") {
              return (
                <div style={{backgroundColor: themeStyles.background}} className="categoryMealsCards" key={index}>
                  <Link
                    // to={`/${text.fields.category.toLowerCase()}/${text.sys.id}`}
                    to={`/${text.category.toLowerCase()}/${text.id}`}
                  >
                    <img
                      className="categoryMealsPicture"
                      style={{ borderRadius: "30px" }}
                      // src={text.fields.picture.fields.file.url}
                      src={text.image}
                    />
                  </Link>
                  {/* <h2>{text.fields.recipeName}</h2> */}
                  <h2 style={{color: themeStyles.text}}>{text.name}</h2>
                </div>
              );
            }
            return null;
          })}
        </div>
      )}
    </>
  );
}
