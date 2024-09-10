import React, { useEffect, useState } from 'react'
// import { Header } from './Header'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { dark } from '../CountryContext'
export const Sub_page = () => {
  const [isDark]=dark()
  const [country, setcountry] = useState(null)
  // const countryname= new URLSearchParams(location.search).get("name")
  // const nevigate = useNavigate()
  const { id } = useParams()
  // console.log(id);
  
  useEffect(() => {
    try {
      fetch(`https://restcountries.com/v3.1/name/${id}?fullText=true`)
        .then(res => res.json())
        .then(([data]) => {
          setcountry({
            img: data.flags.svg,
            name: data.name.common || data.name,
            nativename: Object.values(data.name.nativeName||{})[0]?.official,
            papulation: data.population.toLocaleString("en-IN"),
            region: data.region,
            sub_region: data.subregion,
            capital: data.capital?.join(", "),
            TopLevelDomain: data.tld[0],
            currencies: Object.values(data.currencies||{}).map(currency => currency.name).join(", "),
            languages: Object.values(data.languages||{}).join(", "),
            borderCountries: []
          })
          if(data.borders){
            Promise.all(data.borders.map((border) => {
              return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
              .then(res => res.json())
              .then(([data]) =>{data.name.common
                setcountry((prevState)=>({ ...prevState, borderCountries: [...prevState.borderCountries, data.name.common]}))
              })
              .catch(err => { console.log(err) })
            }))
          }
        })
      }
    catch (err) {
      console.log(err);
    }
  },[id])
  return (
    <>
    <div className={isDark? "dark":"grandparent"}>
      <div className="parent">
      <button className='back-arrow' onClick={() => { history.back() }}><i className="fa-solid fa-arrow-left"></i>Back</button>
      {country?
      <div className="country-details">
        <img src={country.img} alt={country.name} />
        <div className="country-details-container">
          <h2>{country.name}</h2>
          <p>Native name :- {country.nativename}</p>
          <p>Population :- {country.papulation}</p>
          <p>Region :- {country.region}</p>
          <p>Sub Region :- {country.sub_region ? country.sub_region : "No"}</p>
          <p>Capital :- {country.capital}</p>
        </div>
        <div className="country-details-container2">
          <p>Top Level Domain :- {country.TopLevelDomain} </p>
          <p>Currencies :- {country.currencies}</p>
          <p>Languages :- {country.languages}</p>
          <div className="border-countries">
            <p>Border Countries :- &nbsp;{
              country.borderCountries.length && country.borderCountries !=0 ? country.borderCountries.map((border, i) =>
                <Link key={i} to={`/sub/${border}`}>{border}</Link>
            ) : "No borders"}</p>
          </div>
        </div>
      </div>:<h1>LOADING....</h1>}
      </div>
    </div>
    </>
  )
}
