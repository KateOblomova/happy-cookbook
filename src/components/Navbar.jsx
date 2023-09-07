import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
      <>
      <header style={{display: "flex", justifyContent: "space-evenly", alignItems: "center", fontSize:"25px", textDecoration: "none"}}>
      <NavLink to="/"> <img src="https://media.istockphoto.com/id/1307257578/vector/cook-book-line-icon.jpg?s=612x612&w=0&k=20&c=tqwS3hHnUsRc_vJPDV-PLMoAZ_WmQj0c-6bzfK9Xpyw=" alt="logo" width="75px" /> </NavLink>
      <NavLink to="starter">Starters </NavLink>
      <NavLink to="main">Main Dishes </NavLink>
      <NavLink to="dessert">Desserts </NavLink>
      </header>
      <hr/>
      </>  
    )
}