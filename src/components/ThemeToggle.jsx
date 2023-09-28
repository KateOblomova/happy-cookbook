import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx"

export default function ThemeToggle() {
    const {isLightTheme, toggleTheme} = useContext(ThemeContext);
return (
    <>
    {isLightTheme ? (
        <div
          className="lightbulb"
          onClick={toggleTheme}
          style={{ 
            cursor: "pointer", fontSize: "40px",borderRadius: "30px"}}
            >
          💡
        </div>
      ) : 
      (
        <div
          className="lightbulb"
          onClick={toggleTheme}
          style={{
            "-webkitBoxShadow": "0px 2px 38px 13px gold",
            boxShadow: "0px 2px 38px 13px gold",
             cursor: "pointer", fontSize: "40px",borderRadius: "30px"}}
            >
          💡
        </div>)
      }
</>
)
}