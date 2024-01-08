import React, { useEffect, useState} from "react"
import ButtonOfDarkMode from "./ButtonOfDarkMode";

export function Header(){
    const [open, setOpen] = useState(false)

    useEffect(()=>{
        const mql = window.matchMedia("(max-width: 768px)");
        mql.onchange = (e) => {
            if(!(e.matches)) setOpen(false)
        }
    }, [])

    function toggleOpen(){
        setOpen((prevState)=> !prevState)
    }

    return (
        <header className={`
            flex justify-center items-center
            mx-auto
            py-5
            sticky top-0
            w-full xl:w-[1120px]
            z-10
        `}>
            <nav className={`
                w-full
                h-full
                relativee
                `}>
                <div className="absolute inset-0 flex justify-start items-center md:hidden">
                    <button onClick={toggleOpen}>h</button>
                </div>
                <div className={`${open? "translate-x-full": ""} fixed inset-y-0 -left-full right-full transition-transform duration-1000 md:z-auto md:bg-transparent md:transition-none md:absolute md:inset-0`}>
                    <div className="absolute inset-0 flex justify-start items-center border border-black rounded-full px-3 py-1 bg-neutral-200 dark:bg-black/50 backdrop-blur-2xl dark:text-white md:hidden">
                        <div className="container p-3 flex items-center">
                            <button onClick={toggleOpen} className="z-10">x</button>
                        </div>
                    </div>
                    <div className="absolute inset-0 flex justify-center items-center">
                            <div className={`
                                border border-black rounded-full
                                px-3 py-1
                                bg-neutral-200 dark:bg-black/50
                                backdrop-blur-2xl
                                dark:text-white
                                `}>
                                <ul className="flex justify-center items-center gap-3"> 
                                    <li>
                                        <a className="hover:bg-white/10 rounded-full px-3 transition" href="#">Sobre mí</a>
                                    </li>
                                    <li>
                                        <a className="hover:bg-white/10 rounded-full px-3 transition" href="#experiencia">Experiencia</a>
                                    </li>
                                    <li>
                                        <a className="hover:bg-white/10 rounded-full px-3 transition" href="#proyectos">Proyectos</a>
                                    </li>
                                    <li className="flex items-center">
                                    <ButtonOfDarkMode/>
                                    </li>
                                </ul>
                            </div>
                    </div>
                </div>  
            </nav>
        </header>
    )
}