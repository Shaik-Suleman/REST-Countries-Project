import React, { useState } from 'react'
import { dark } from '../CountryContext'
export const Header = () => {
  const[isDark,setIsDark]=dark()
  return (
    <header className={isDark? "dark":""}>
    {/* <link href="https://fonts.googleapis.com/css?family=Nunito:200,300,regular,500,600,700,800,900" rel="stylesheet" /> */}
    <h2>Where in the World?</h2>
    <p onClick={()=>{
      setIsDark(!isDark)
      localStorage.setItem("Darkmode",!isDark)
    }}><i className={`fa-solid fa-${isDark?"sun":"moon"}`}></i>&nbsp;&nbsp;{isDark?"Light":"Dark"} Mode</p>
    </header>
  )
}
