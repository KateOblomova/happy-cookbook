import { useState, useEffect } from "react";
import { createClient } from "contentful";

export default function Navpage() {
    // Process to pull API data (you know the drill)
  const [recipes, setRecipes] = useState([]);
  const client = createClient({
    space: "5khedyskutxx",
    accessToken: "drP2KFtXqZwASAlenERw-DaI8QFD9cSD8IMmQYQkuMM",
  });
  async function fetchRecipes() {
    const entryItems = await client.getEntries();
    setRecipes(entryItems.items);
  }
  useEffect(() => {
    fetchRecipes();
  }, []); 

  // Getting path name and "cleaning" it so that it matches the category 
  const capitaliseFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  let path = window.location.pathname;
  path = path.replace("/","");
  path = capitaliseFirstLetter(path);

  // It was easier for me to have a seperate category array
const categories = recipes.map((text) => (text.fields.category));

  // It was also easier for me to define three seperate arrays by courses: starter, main, dessert. 
  //Otherwise, when you click on either starters, main or desserts, all items will show.
const starterArray = recipes.filter((course) => course.fields.category.includes("Starter"));
const mainArray = recipes.filter((course) => course.fields.category.includes("Main"));
const dessertArray = recipes.filter((course) => course.fields.category.includes("Dessert"));

// ready to use API data
console.log(recipes)

return (
      <>
      <h1>This is the {path.replace("/","")} Page</h1>

      {/* Below I've created a ternary statement per category. I'm saying if the path (e.g. /main) matches the corresponding value in the category array (e.g. category[0]) then map that specific array (e.g. mainArray). 
      Through this method, only the main course dishes will show for the /main, only the starter course dishes will show for /starter ect..*/}

      {path === categories[0] ? mainArray.map((text, index) =>
      <div key={index}>  
      <img style={{borderStyle: "solid", padding: "20px"}} src={text.fields.picture.fields.file.url} width="350px" height="350px"/>
      <h2>{text.fields.recipeName}</h2> 
      </div>) : null}
      {path === categories[1] ? starterArray.map((text, index) =>
      <div key={index}>  
      <img style={{borderStyle: "solid", padding: "20px"}} src={text.fields.picture.fields.file.url} width="350px" height="350px"/>
      <h2>{text.fields.recipeName}</h2> 
      </div>) : null}
      {path === categories[2] ? dessertArray.map((text, index) =>
      <div key={index}>  
      <img style={{borderStyle: "solid", padding: "20px"}} src={text.fields.picture.fields.file.url} width="350px" height="350px"/>
      <h2>{text.fields.recipeName}</h2> 
      </div>) : null}
      </>
    )
}