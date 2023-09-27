import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx"

export default function ThemeToggle() {
    const {isLightTheme, toggleTheme} = useContext(ThemeContext);
return (
    <button onClick={toggleTheme} style={{cursor: "pointer"}} > Click Me</button>
)
}