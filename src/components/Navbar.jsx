import { NavLink } from "react-router-dom";
import { Input, Space } from "antd";
import { useState } from "react";
import Refresh from "../assets/refresh.png"

export default function Navbar({ setSearchValue, searchValue }) {
  const { Search } = Input;
  const [value, setValue] = useState("");

  const onSearch = (value, _e, info) => {
    console.log(info?.source,value);
    setSearchValue(value);
  }
  const refresh = () => (window.location.reload(true));
  console.log(searchValue);
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
        


        

        
      
     
      
      
      <header style={{display: "flex", justifyContent: "space-evenly", alignItems: "center", fontSize:"25px", textDecoration: "none"}}>
      <NavLink to="/"> <img src="https://media.istockphoto.com/id/1307257578/vector/cook-book-line-icon.jpg?s=612x612&w=0&k=20&c=tqwS3hHnUsRc_vJPDV-PLMoAZ_WmQj0c-6bzfK9Xpyw=" alt="logo" width="75px" /> </NavLink>
      <NavLink to="starter">Starters </NavLink>
      <NavLink to="main">Main Dishes </NavLink>
      <NavLink to="dessert">Desserts </NavLink>
      <NavLink to="drink">Drinks</NavLink>
      <NavLink to="allrecipes">All Recipes</NavLink>
      <div className="search">
        <Space>
          <Search 
          id="searchField"
          placeholder="Search for recipes"
          enterButton="Search"
          size="large"
          search_bar_fill="orange"
          onSearch={onSearch}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={refresh}><img src={Refresh} alt="refresh symbol" width="25px" style={{filter: "contract(1)"}} /></button>
        </Space>
      </div>
      </header>
      <hr/>
 maindraft
      </>  
    )
}