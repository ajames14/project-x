import React from 'react'

const Rover = () => {
  return <section className="section" id="rover">
    <div className="container">
      <h2 className="title">Mars Exploration Rovers</h2>
      <p>Over the past 10 years, NASA has successfully launched three exploration rovers on the surface of Mars: Curiosity, Opportunity and Spirit.</p>
      <p>Unfortunately, all rovers are now immobile after being caught in a planet wide dust storm in Feb 2019. </p>
      <p>The map below shows the latest positioning broadcast from the Opportunity rover, before it went silent on 12th Feb 2019. </p>
      <p>All three missions are now concluded, with rover recovery operations underway.</p>
      <div id="gallery-images">
        <img src='https://mars.nasa.gov/mer/mission/tm-opportunity/images/MERB_Sol4997_1.jpg'></img>
      </div>
    </div>
  </section>
}

export default Rover

{/* <div className="container">
<div className="columns is-centered">
  <div className="column is-10 content">
    <h2 className="title">Mars Weather</h2> */}