import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createClient } from "contentful";
import { SpinnerDotted } from "spinners-react";

export default function Navpage() {
    // Process to pull API data (you know the drill)
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const client = createClient({
    space: "5khedyskutxx",
    accessToken:`${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`,
  });
  async function fetchRecipes() {
    const entryItems = await client.getEntries();
    setRecipes(entryItems.items);
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  },[])

  useEffect(() => {
    fetchRecipes();
  }, []); 

  console.log(recipes);

  // Getting path name and "cleaning" it so that it matches the category 
  const capitaliseFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  let path = window.location.pathname;
  path = path.replace("/","");
  path = capitaliseFirstLetter(path);

// Function to sort arrays from A-Z
const alphabeticiseArray = (arr) => {
  return arr.sort((a,b) => {
    const nameA = a.fields.recipeName.toUpperCase();
    const nameB = b.fields.recipeName.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1
    }
    return 0;
  });
}
const sortedArray = alphabeticiseArray(recipes);

  // It was easier for me to have a seperate category array. 
  // I needed to recreate the array so that only original values showed.
  // Otherwise, we'd have an array of multiple 'Main' or 'Starter'
const orgCategories = recipes.map((text) => (text.fields.category));
const categories = [...new Set(orgCategories)];

// It was also easier for me to define three seperate arrays by courses: starter, main, dessert. 
  //Otherwise, when you click on either starters, main or desserts, all items will show.
let starterArray = sortedArray.filter((course) => course.fields.category.includes("Starter" || "Starters" || "starter" || "starters"));
let mainArray = sortedArray.filter((course) => course.fields.category.includes("Main" || "Mains" || "Main Dishes" || "main" || "mains" || "main dishes"));
let dessertArray = sortedArray.filter((course) => course.fields.category.includes("Dessert" || "Desserts" || "dessert" || "desserts"));
let drinksArray = sortedArray.filter((course) => course.fields.category.includes("Drink" || "Drinks" || "drink" || "drinks"));

// ready to use API data
console.log(recipes);
console.log(categories);
const loadingArray = ["One moment please", "Turn that oven on", "Sharpen that knife", "Wash your hands", "Hope you are hungry", "Prepare for greatness"];
return (
        <>
        <h1 style={{textAlign: "center"}}>{path.replace("/","")} Page</h1>
        {isLoading ? (<div style={{display: "flex", justifyContent: "center", alignItems:"center", flexDirection: "column"}}><SpinnerDotted
        loading ={isLoading}
        data-testid="loader"
        color={"orange"}
        size={300}
        />
        <h2 style={{color: "grey"}}>{loadingArray[Math.floor(Math.random() * 6)]}</h2>
        </div>
        ) : (
      <div className="navPage-Container" style={{display: "flex", justifyContent: "space-evenly", flexWrap:"wrap"}}>
      {/* Below I've created a ternary statement per category. I'm saying if the path (e.g. /main) matches the corresponding value in the category array (e.g. category[0]) then map that specific array (e.g. mainArray). 
      Through this method, only the main course dishes will show for the /main, only the starter course dishes will show for /starter ect...*/}
      {path === categories[1] ? starterArray.map((text, index) =>
      <div key={index}>  
      <Link to={`/starter/${text.sys.id}`}>
      <img style={{borderStyle: "solid", borderRadius: "30px"}} src={text.fields.picture.fields.file.url} width="350px" height="350px"/>
      </Link>
      <h2>{text.fields.recipeName}</h2> 
      </div>) : null}
      {path === categories[3] ? dessertArray.map((text, index) =>
      <div key={index}>  
      <Link to={`/dessert/${text.sys.id}`}><img style={{borderStyle: "solid", borderRadius: "30px"}} src={text.fields.picture.fields.file.url} width="350px" height="350px"/></Link>
      <h2>{text.fields.recipeName}</h2> 
      </div>) : null}
      {path === categories[0] ? mainArray.map((text, index) =>
      <div key={index}>  
      <Link to={`/main/${text.sys.id}`}><img style={{borderStyle: "solid", borderRadius: "30px"}} src={text.fields.picture.fields.file.url} width="350px" height="350px"/></Link>
      <h2>{text.fields.recipeName}</h2> 
      </div>) : null}
      {path === categories[2] ? drinksArray.map((text, index) =>
      <div key={index}>  
      <Link to={`/drink/${text.sys.id}`}><img style={{borderStyle: "solid", borderRadius: "30px"}} src={text.fields.picture.fields.file.url} width="350px" height="350px"/></Link>
      <h2>{text.fields.recipeName}</h2> 
      </div>) : null}
      {path === "Allrecipes" ? sortedArray.map((text, index) =>
      <div key={index}>  
      <Link to={`/drink/${text.sys.id}`}><img style={{borderStyle: "solid", borderRadius: "30px"}} src={text.fields.picture.fields.file.url} width="350px" height="350px"/></Link>
      <h2>{text.fields.recipeName}</h2> 
      </div>) : null}
      </div>
      )}
      </>
    )
}