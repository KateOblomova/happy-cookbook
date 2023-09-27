import Ramsay from "../assets/Gordon-Ramsay.avif"
import { useContext }  from "react";
import { ThemeContext } from "../context/ThemeContext.jsx"

export default function Error() {
const {light, dark, isLightTheme} = useContext(ThemeContext);
const themeStyles = isLightTheme ? light : dark;
    return (
        <>
        <h1 style={{textAlign: "center", backgroundColor: themeStyles.background, color: themeStyles.text, margin: "0px", padding:"1% 0"}}>Page not Found <br/> Error 404</h1>
        <div style={{display: "flex", justifyContent:"center", backgroundColor: themeStyles.background}}>
        <img style={{filter: themeStyles.filter}} width="800px" src={Ramsay} alt="gorden-ramsay" />
        </div>
        <h1 style={{textAlign: "center", backgroundColor: themeStyles.background, color: themeStyles.text, margin: "0px", padding: "3% 0"}}>You Donkey!</h1>
        </>
    )
}