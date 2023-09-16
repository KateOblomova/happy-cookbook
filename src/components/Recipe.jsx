import { useParams, useNavigate } from "react-router-dom";

export default function Recipe({ recipes }) {
  const { id } = useParams();
  const singleRecipe = recipes?.find((element) => element?.sys.id === id);
  const navigate = useNavigate();

  /* EXTRACT ID */
  const extractedID = recipes.filter(
    (recipe) => recipe.fields.category === singleRecipe?.fields.category
  );
  const idArray = extractedID.map((recipe) => recipe.sys.id);
  console.log("Extracted ID after function", idArray);

  return (
    <>
      {console.log("Recipe page", { recipes })}
      <div className="mainContainer">
        <div className="recipeName">{singleRecipe?.fields.recipeName}</div>
        <div className="pictureIngredientsContainer">
          <div className="recipeIngredients">
            INGREDIENTS
            <ul>
              {singleRecipe?.fields.ingredients?.map((ingredient) => (
                <li>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="recipePicture">
            <img src={singleRecipe?.fields.picture.fields.file.url}></img>
          </div>
        </div>
        <div className="recipeInstructions">
          INSTRUCTIONS
          <ol>
            {singleRecipe?.fields.instructions?.map((instruction) => (
              <li>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
      <div id="buttons">
        <button
          onClick={() =>
            navigate(
              `/${singleRecipe?.fields.category}/${
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
              `/${singleRecipe?.fields.category}/${
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
