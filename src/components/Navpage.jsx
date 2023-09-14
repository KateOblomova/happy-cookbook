import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SpinnerDotted } from "spinners-react";

export default function Navpage({ recipes }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  },[])

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

// ready to use API data
console.log(recipes);
console.log(path);
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
      {recipes.map((text, index) => {
        if (text.fields.category === path || path === "Allrecipes") {
          return (
            <div key={index}>  
            <Link to={`/${text.fields.category.toLowerCase()}/${text.sys.id}`}>
            <img style={{borderStyle: "solid", borderRadius: "30px"}} src={text.fields.picture.fields.file.url} width="350px" height="350px"/>
            </Link>
            <h2>{text.fields.recipeName}</h2> 
            </div>
          );
        }
        return null;
      })}
      </div>
      )}
      </>
    )
}