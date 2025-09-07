import React, { use } from 'react'
import { themeContext } from '../context/ThemeContext'

const UsesUseInsteadOfUseContext = () => {
  
    const { theme, setTheme } = use(themeContext)
    
    return (
    <div className=' h-screen flex justify-center items-center' >
       <div className={`w-[400px] px-2  ${theme === 'light' ? "bg-amber-100" : 'bg-amber-900'}`} >
        <h1 className={`text-3xl ${theme === 'light' ? "text-black" : 'text-white'}  `}>Theme Uses Use</h1>
        <p className={`${theme === 'light' ? "text-black" : 'text-white'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus excepturi esse nam autem, beatae similique sint eveniet illo sequi ab atque ex obcaecati cumque minima dignissimos, vitae labore. Architecto, voluptatem.</p>
        <button onClick={()=> setTheme( theme === 'light' ? 'dark' : 'light' )} className='my-4 py-2 px-2 rounded bg-green-400'>Change Theme { theme === 'light' ? 'dark' : 'light' }</button>
       </div>
    </div>
  )
}

export default UsesUseInsteadOfUseContext