import { useParams } from "react-router-dom";

export default function Recipe({ recipes }) {
  const { id } = useParams();
  const singleRecipe = recipes?.find((element) => element?.sys.id === id);

  return (
    <>
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
    </>
  );
}
