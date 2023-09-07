import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
      <>
      <header>
      <NavLink to="/">Homepage </NavLink>
      <NavLink to="starter">Starters </NavLink>
      <NavLink to="main">Main Dishes </NavLink>
      <NavLink to="dessert">Desserts </NavLink>
      </header>
      <hr/>
      </>  
    )
}