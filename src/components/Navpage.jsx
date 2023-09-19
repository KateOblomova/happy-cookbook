import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SpinnerDotted } from "spinners-react";

export default function Navpage({ recipes, searchValue }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  // Search array
  const filteredRecipes = recipes.filter((item) =>
    item.fields.recipeName.toLowerCase().includes(searchValue.toLowerCase())
  );

  // Getting path name and "cleaning" it so that it matches the category
  const capitaliseFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  let path = window.location.pathname;
  path = path.replace("/", "");
  path = capitaliseFirstLetter(path);

  // this comment doesn't say anything
  // Function to sort arrays from A-Z
  const alphabeticiseArray = (arr) => {
    return arr.sort((a, b) => {
      const nameA = a.fields.recipeName.toUpperCase();
      const nameB = b.fields.recipeName.toUpperCase();
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


  return (
  );
}
