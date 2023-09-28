import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Recipe() {
  const { id } = useParams();
  const {light, dark, isLightTheme} = useContext(ThemeContext);
  const themeStyles = isLightTheme ? light : dark

  //kate
  const [recipes, setRecipes] = useState([]);

  const fetching = async () => {
    const data = await fetch("https://powerfulcookbook-api.onrender.com/");
    const res = await data.json();
    setRecipes(res);
  };

  useEffect(() => {
    fetching();
  }, []);

  //*kate
  // const singleRecipe = recipes?.find((element) => element?.sys.id === id); //
  const singleRecipe = recipes?.find((element) => element?.id == id);
  console.log("LOOOOOOOK HERE", singleRecipe);

  const navigate = useNavigate();

  /* EXTRACT ID */
  // const extractedID = recipes.filter(
  //   (recipe) => recipe.fields.category === singleRecipe?.fields.category
  // );

  const extractedID = recipes.filter(
    (recipe) => recipe.category === singleRecipe?.category
  );
  // const idArray = extractedID.map((recipe) => recipe.sys.id);
  const idArray = extractedID.map((recipe) => recipe.id);

  console.log("Extracted ID after function", idArray);

  {console.log("hello ID#1:" + idArray[(idArray.indexOf(id) + 1) % idArray.length])}
  {console.log("hello ID#2:" + idArray[(idArray.indexOf(id) + 1) % idArray.length])}

  return (
    <>
      {console.log("Recipe page", { recipes })}
      <div style={{backgroundColor: themeStyles.background}} className="mainContainer">
        {/* <div className="recipeName">{singleRecipe?.fields.recipeName}</div> */}
        <div style={{color: themeStyles.text}} className="recipeName">{singleRecipe?.name}</div>

        <div style={{backgroundColor: themeStyles.background}} className="pictureIngredientsContainer">
          <div style={{color: themeStyles.text, backgroundColor: themeStyles.background}} className="recipeIngredients">
            INGREDIENTS
            <ul style={{color: themeStyles.text, backgroundColor: themeStyles.background}}>
              {/* {singleRecipe?.fields.ingredients?.map((ingredient) => ( */}
              {singleRecipe?.ingredients?.map((ingredient) => (
                <li style={{color: themeStyles.text, backgroundColor: themeStyles.background}}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="recipePicture">
            {/* <img src={singleRecipe?.fields.picture.fields.file.url}></img> */}
            <img src={singleRecipe?.image}></img>
          </div>
        </div>
        <div style={{color: themeStyles.text, backgroundColor: themeStyles.background}} className="recipeInstructions">
          INSTRUCTIONS
          <ol style={{color: themeStyles.text, backgroundColor: themeStyles.background}}>
            {/* {singleRecipe?.fields.instructions?.map((instruction) => ( */}
            {singleRecipe?.instructions?.map((instruction) => (
              <li style={{color: themeStyles.text, backgroundColor: themeStyles.background}}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
      <div style={{backgroundColor: themeStyles.background}} id="buttons">
        <button
          onClick={() =>
            navigate(
              // `/${singleRecipe?.fields.category}/${
              `/${singleRecipe?.category}/${
                idArray[
                  (idArray.indexOf(id) - 1 + idArray.length) % idArray.length
                ]
              }`
            )
          }
        >
          ⟵
        </button>
        <button
          onClick={() =>
            navigate(
              // `/${singleRecipe?.fields.category}/${
              `/${singleRecipe?.category}/${
                idArray[(idArray.indexOf(id) + 1) % idArray.length]
              }`
            )
          }
        >
          ⟶
        </button>
      </div>
    </>
  );
}
