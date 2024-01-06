import { useEffect, useState } from 'react'

export default function ButtonOfDarkMode(){
    const [theme, setTheme] = useState("light")
   
    useEffect(()=>{
        if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
            document.body.classList.add("dark")
            localStorage.theme = "dark"
            setTheme("dark")
        }else{
            document.body.classList.remove("dark")
            localStorage.theme = "light"
            setTheme("light")
        }

    }, [])

    function changeThemeMode(){
        if(theme == "dark"){
            document.body.classList.remove("dark")
            localStorage.theme = "light"
            setTheme("light")
        }else{
            document.body.classList.add("dark")
            localStorage.theme = "dark"
            setTheme("dark")
        }
    }

    return(
        <button onClick={changeThemeMode} className="primary-button">
            <span className="material-symbols-outlined align-middle">
                {theme == "dark"? "light_mode" : "dark_mode"}
            </span>
        </button>
    )
}