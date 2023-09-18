import { NavLink } from "react-router-dom";

export default function Navbar() {

    return (
      <>
      <div className="header-container">
        <ul>
          <li>
          <NavLink to="/"> <img src="https://media.istockphoto.com/id/1307257578/vector/cook-book-line-icon.jpg?s=612x612&w=0&k=20&c=tqwS3hHnUsRc_vJPDV-PLMoAZ_WmQj0c-6bzfK9Xpyw=" alt="logo" width="75px" /> </NavLink>
          </li>
          <li>
         <NavLink to="starter">Starters </NavLink>
         </li>
       <li>
       <NavLink to="main">Main Dishes </NavLink>
        </li>  
        <li>
          <NavLink to="dessert">Desserts </NavLink>
          </li>
          <li>
          <NavLink to="drink">Drinks</NavLink>
          </li>
          <li>
          <NavLink to="allrecipes">All Recipes</NavLink>
          </li>
        </ul>
        </div>
        


        

        
      
     
      
      
      </>  
    )
}