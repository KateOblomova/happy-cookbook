import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Recipe() {
  const { id } = useParams();

  //kate
  const [recipes, setRecipes] = useState([]);

  const fetching = async () => {
    const data = await fetch("https://recipes-practise.onrender.com/");
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

  return (
    <>
      {console.log("Recipe page", { recipes })}
      <div className="mainContainer">
        {/* <div className="recipeName">{singleRecipe?.fields.recipeName}</div> */}
        <div className="recipeName">{singleRecipe?.name}</div>

        <div className="pictureIngredientsContainer">
          <div className="recipeIngredients">
            INGREDIENTS
            <ul>
              {/* {singleRecipe?.fields.ingredients?.map((ingredient) => ( */}
              {singleRecipe?.ingredients?.map((ingredient) => (
                <li>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="recipePicture">
            {/* <img src={singleRecipe?.fields.picture.fields.file.url}></img> */}
            <img src={singleRecipe?.image}></img>
          </div>
        </div>
        <div className="recipeInstructions">
          INSTRUCTIONS
          <ol>
            {/* {singleRecipe?.fields.instructions?.map((instruction) => ( */}
            {singleRecipe?.instructions?.map((instruction) => (
              <li>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
      <div id="buttons">
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
