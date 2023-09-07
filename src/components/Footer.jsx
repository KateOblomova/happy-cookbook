import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
      <>
      <footer style={{display: "grid", borderTopStyle: "solid", borderTopColor: "lightgrey", fontSize:"25px"}}>
        <hr/>
      <NavLink to="">Footer #1 </NavLink>
      <NavLink to="">Footer #2 </NavLink>
      <NavLink to="">Footer #3 </NavLink>
      </footer>
      </>  
    )
}