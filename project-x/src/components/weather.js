import React from 'react'

const Weather = ({ solkeys, avTemp, lowestTemp, highestTemp, season, avWind, lowestWind, highestWind }) => {
  return <section className="section" id="weather">
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-10 content">
          <h2 className="title">Mars Weather</h2>
          <div className="box" id="weather-snapshot">
            <div id="most-recent-sol">{`SOL ${solkeys} :`}</div>
            <div className="info">{`${(new Date(Date.now() - 48 * 3600 * 1000)).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}`}</div>
            <div className="info">{`SEASON - ${season.toUpperCase()}`}</div>
            <div id="flex-box">
              <div id="temp-box">
                <div id="air-temp">Air Temperature</div>
                <div>{`Average: ${parseFloat((avTemp - 32) * 5 / 9).toFixed(1)} \xB0 C`}</div>
                <div>{`Low: ${parseFloat((lowestTemp - 32) * 5 / 9).toFixed(1)} \xB0 C`}</div>
                <div>{`High: ${parseFloat((highestTemp - 32) * 5 / 9).toFixed(1)} \xB0 C`}</div>
              </div>
              <div id="temp-box">
                <div id="air-temp">Wind Speed</div>
                <div>{`Average: ${parseFloat(avWind).toFixed(1)} m/s`}</div>
                <div>{`Low: ${parseFloat(lowestWind).toFixed(1)} m/s`}</div>
                <div>{`High: ${parseFloat(highestWind).toFixed(1)} m/s`}</div>
              </div>
            </div>
            <p>These weather measurements are taken by NASA’s InSight Mars lander at Elysium Planitia, a flat, smooth
plain near Mars’ equator.</p>
          </div>
        </div>
      </div>

    </div>
  </section>

}

export default Weather

{/* {solkeys.map((sol, i) => {
            return <div key={i}>{sol}</div>
          })} */}