import React, { createContext, useContext, useState } from 'react'

const theme=createContext()

function CountryContext({children}) {
    const[isDark,setIsDark]=useState(JSON.parse(localStorage.getItem("Darkmode")))
  return (
    <>
    <theme.Provider value={[isDark,setIsDark]}>
      {children}
    </theme.Provider>
    </>
  )
}
export default CountryContext
export const dark=()=>{
  return useContext(theme)
}