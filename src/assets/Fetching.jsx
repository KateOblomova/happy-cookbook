import { createClient } from "contentful";

const RecipesList = () => {
  const client = createClient({
    space: "5khedyskutxx",
    accessToken: `${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`,
    // accessToken: "drP2KFtXqZwASAlenERw-DaI8QFD9cSD8IMmQYQkuMM",
  });

  const getRecipes = async () => {
    try {
      const ent = await client.getEntries({ select: "fields" });
      return ent;
    } catch (err) {
      console.log("You are dumb, you cant fetch because", err);
    }
  };

  return { getRecipes };
};

export default RecipesList;
