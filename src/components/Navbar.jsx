import { NavLink } from "react-router-dom";
import { Input, Space } from "antd";
import { useState } from "react";
import Refresh from "../assets/refresh.png"
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";
import ThemeToggle from "./ThemeToggle";

export default function Navbar({ setSearchValue, searchValue }) {
  const { Search } = Input;
  const [value, setValue] = useState("");

  const {light, dark, isLightTheme} = useContext(ThemeContext);

  const themeStyles = isLightTheme ? light : dark;
  const onSearch = (value, _e, info) => {
    console.log(info?.source,value);
    setSearchValue(value);
  }
  const refresh = () => (window.location.reload(true));
  console.log(searchValue);
    return (
      <>
      <header className="header-container" style={{display: "flex", justifyContent: "space-evenly", alignItems: "center", fontSize:"25px", textDecoration: "none", backgroundColor: themeStyles.ui}}>
      <ThemeToggle />
      <NavLink to="/"> <img style={{borderStyle: "solid", margin: "5%", filter: themeStyles.filter, borderColor: ""}} src="https://media.istockphoto.com/id/1307257578/vector/cook-book-line-icon.jpg?s=612x612&w=0&k=20&c=tqwS3hHnUsRc_vJPDV-PLMoAZ_WmQj0c-6bzfK9Xpyw=" alt="logo" width="75px" /> </NavLink>
      <NavLink style={{color: themeStyles.text}} to="starter">Starters </NavLink>
      <NavLink style={{color: themeStyles.text}} to="main">Main Dishes </NavLink>
      <NavLink style={{color: themeStyles.text}} to="dessert">Desserts </NavLink>
      <NavLink style={{color: themeStyles.text}} to="drink">Drinks</NavLink>
      <NavLink style={{color: themeStyles.text}} to="allrecipes">All Recipes</NavLink>
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
          <button className="refreshButton" onClick={refresh}><img src={Refresh} alt="refresh symbol" width="25px" /></button>
        </Space>
      </div>
      </header>
      </>  
    )
}