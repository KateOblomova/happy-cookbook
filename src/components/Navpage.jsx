import { useState, useEffect } from "react";
import { createClient } from "contentful";

export default function Navpage() {
    // Process to pull API data (you know the drill)
  const [recipes, setRecipes] = useState([]);
  const [container, setContainer] = useState(false);
  const client = createClient({
    space: "5khedyskutxx",
    accessToken:`${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`,
  });
  async function fetchRecipes() {
    const entryItems = await client.getEntries();
    setRecipes(entryItems.items);
    setContainer(true);
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

  // It was easier for me to have a seperate category array. 
  // I needed to recreate the array so that only original values showed.
  // Otherwise, we'd have an array of multiple 'Main' or 'Starter'
const orgCategories = recipes.map((text) => (text.fields.category));
const categories = [...new Set(orgCategories)];

  // It was also easier for me to define three seperate arrays by courses: starter, main, dessert. 
  //Otherwise, when you click on either starters, main or desserts, all items will show.
const starterArray = recipes.filter((course) => course.fields.category.includes("Starter" || "Starters" || "starter" || "starters"));
const mainArray = recipes.filter((course) => course.fields.category.includes("Main" || "Mains" || "Main Dishes" || "main" || "mains" || "main dishes"));
const dessertArray = recipes.filter((course) => course.fields.category.includes("Dessert" || "Desserts" || "dessert" || "desserts"));
const drinksArray = recipes.filter((course) => course.fields.category.includes("Drink" || "Drinks" || "drink" || "drinks"));

// ready to use API data
console.log(recipes)
console.log(categories);
return (
        <>
        <h1 style={{textAlign: "center"}}>{path.replace("/","")} Page</h1>
      <div className="navPage-Container" style={{display: "flex", justifyContent: "space-evenly", flexWrap:"wrap"}}>
      {/* Below I've created a ternary statement per category. I'm saying if the path (e.g. /main) matches the corresponding value in the category array (e.g. category[0]) then map that specific array (e.g. mainArray). 
      Through this method, only the main course dishes will show for the /main, only the starter course dishes will show for /starter ect..*/}
      {path === categories[3] ? starterArray.map((text, index) =>
      <div key={index}>  
      <a href=""><img style={{borderStyle: "solid", borderRadius: "30px"}} src={text.fields.picture.fields.file.url} width="350px" height="350px"/></a>
      <h2>{text.fields.recipeName}</h2> 
      </div>) : null}
      {path === categories[0] ? dessertArray.map((text, index) =>
      <div key={index}>  
      <a href=""><img style={{borderStyle: "solid", borderRadius: "30px"}} src={text.fields.picture.fields.file.url} width="350px" height="350px"/></a>
      <h2>{text.fields.recipeName}</h2> 
      </div>) : null}
      {path === categories[2] ? mainArray.map((text, index) =>
      <div key={index}>  
      <a href=""><img style={{borderStyle: "solid", borderRadius: "30px"}} src={text.fields.picture.fields.file.url} width="350px" height="350px"/></a>
      <h2>{text.fields.recipeName}</h2> 
      </div>) : null}
      {path === categories[1] ? drinksArray.map((text, index) =>
      <div key={index}>  
      <a href=""><img style={{borderStyle: "solid", borderRadius: "30px"}} src={text.fields.picture.fields.file.url} width="350px" height="350px"/></a>
      <h2>{text.fields.recipeName}</h2> 
      </div>) : null}
      {path === "Allrecipes" ? recipes.map((text, index) =>
      <div key={index}>  
      <a href=""><img style={{borderStyle: "solid", borderRadius: "30px"}} src={text.fields.picture.fields.file.url} width="350px" height="350px"/></a>
      <h2>{text.fields.recipeName}</h2> 
      </div>) : null}
      </div>
      </>
    )
}