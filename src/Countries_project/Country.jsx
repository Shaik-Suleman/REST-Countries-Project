import React, { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom"
import "./country.css"
import { Sub_page } from './Sub_page'
import ShimmerEffectCountries from './ShimmerEffectCountries'
import { dark } from '../CountryContext'
export const Country = () => {
    const[isDark]=dark()
    // const navigate = useNavigate()
    const [query, setquery] = useState(null)
    const [region, setregion] = useState("")
    const [display, setdisplay] = useState(false)
    const [card, setcard] = useState([])
    useEffect(() => {
        let fethchig = async () => {
            try {
                let data = await fetch("https://restcountries.com/v3.1/all")
                let res = await data.json()
                setcard(res)
            }
            catch (err) {
                console.log(err)
                setcard(err)
            }
        }
        fethchig();
    }, [])

    let div = card.filter((e) => e.name.common.toLowerCase().includes(query)).map((e, i) => {
        return <div key={i} className="country-card">
            <Link to={`/sub/${e.name.common}?`}><img className='card-img' src={e.flags.svg} alt={e.name.common + " " + "Flag"} />
                <h3 className='card-title'>{e.name.common}</h3>
                <p className='card-text'>population: {e.population.toLocaleString("en-IN")}</p>
                <p className='card-text'>Region: {e.region}</p>
                <p className='card-text'>Capital: {e.capital?.[0]}</p></Link>
        </div>
    })
    let region1 = card.filter((e) => e.region.toLowerCase().includes(region)).map((e, i) => {
        return <div key={i} className="country-card">
            <Link to={`/sub/${e.name.common}?`}><img className='card-img' src={e.flags.svg} alt={e.name.common + " " + "Flag"} />
                <h3 className='card-title'>{e.name.common}</h3>
                <p className='card-text'>population: {e.population.toLocaleString("en-IN")}</p>
                <p className='card-text'>Region: {e.region}</p>
                <p className='card-text'>Capital: {e.capital?.[0]}</p></Link>
        </div>
    })
    // if(card.length===0){
    //     return <main className="countries-container"><ShimmerEffectCountries/></main>
    // }
    return (
        <>
            <main className={isDark? "dark":""}>
                <div className="input-container">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder='Search For a country.....' onChange={(e) => {
                        setdisplay(true)
                        setquery(e.target.value.toLowerCase())
                    }} />
                    <select name="" id="" onChange={(e) => {
                        setdisplay(false)
                        setregion(e.target.value.toLowerCase())
                    }}>
                        <option hidden>Search by Region</option>
                        <option value="Antarctic">Antarctic</option>
                        <option value="Americas">Americas</option>
                        <option value="Europe">Europe</option>
                        <option value="Africa">Africa</option>
                        <option value="Asia">Asia</option>
                        <option value="Oceania">Oceania</option>
                        {/* {card.map((e, i) => {
                            return <option key={i} value={e.region}>{e.region}</option>
                        })} */}
                    </select>
                </div>
                <div className="countries-container">
                    {!card.length?<ShimmerEffectCountries/>:display ? div : region1}
                    {/* <div className="country-card">
                        <a href=""><img className='card-img' src="https://static.vecteezy.com/system/resources/previews/004/757/123/original/india-flag-free-vector.jpg" alt="india" />
                        <h3 className='card-title'>India</h3>
                        <p className='card-text'>popolation: 81,770,900</p>
                        <p className='card-text'>Region: Indian</p>
                        <p className='card-text'>Capital: Delhi</p></a>
                        </div> */}
                </div>
            </main>
        </>
    )
}
