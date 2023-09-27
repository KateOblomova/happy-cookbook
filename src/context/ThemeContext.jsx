import { useState, createContext } from "react"

export const ThemeContext = createContext();

export default function ThemeContextProvider(props) {
const [isLightTheme, setIsLightTheme] = useState(true);
const [light, setLight] = useState({
    text: "black",
    cardText: "rgb(11, 50, 11)",
    cardBackground: "rgba(174, 176, 134, 0.5)",
    ui: "#d2b48c",
    background: "white",
    filter: "invert(0)",
})
const [dark, setDark] = useState({
    text: "white",
    cardText: "rgb(24 184 24)",
    cardBackground: "rgba(42, 42, 32, 0.5)",
    ui: "#826239",
    background: "black",
    filter: "invert(1)",
})
const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
}
return (
    <ThemeContext.Provider
    value= {{
        isLightTheme,
        light,
        dark,
        toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
)
}