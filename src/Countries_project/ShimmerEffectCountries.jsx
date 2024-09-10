import React from 'react'
import "./shimmerEffectCountries.css"
function ShimmerEffectCountries() {
  let arr= new Array(250).fill(1)
  let arr2= arr.map((e,i)=><div key={i} className="country-card shimmer-card"></div>)
  return (
    <>
      <div className="countries-container">
       {arr2}
      </div>
    </>
  )
}

export default ShimmerEffectCountries