import React from 'react'
import ReactDOM from 'react-dom'

import 'bulma'
import './style.scss'
import Header from './components/header'
import Weather from './components/weather'
import Gallery from './components/gallery'
import Rover from './components/rover'

class App extends React.Component {

  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    this.startInterval()
    this.loadData()
  }

  startInterval() {
    setInterval(() => this.loadData(), (1000 * 60 * 5))
  }

  loadData() {
    fetch('https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0')
      .then(res => res.json())
      .then(data => {
        this.setState({ marsData: data })
        console.log(this.state.marsData)
        const mostRecentSol = this.state.marsData.sol_keys[6]
        console.log(mostRecentSol)
      })
    
  }




  render() {
    if (!this.state.marsData) {
      return <h2>Loading...</h2>
    } return (<div>
      <Header />
      <main>
        <section className="section" id="hero">
          <h1 className="title">Life on Mars</h1>
        </section>
      </main>
      <Weather
        solkeys={this.state.marsData.sol_keys[(this.state.marsData.sol_keys.length - 1)]}
        avTemp={this.state.marsData[this.state.marsData.sol_keys[6]].AT.av}
        lowestTemp={this.state.marsData[this.state.marsData.sol_keys[6]].AT.mn}
        highestTemp={this.state.marsData[this.state.marsData.sol_keys[6]].AT.mx}
        season={this.state.marsData[this.state.marsData.sol_keys[6]].Season}
        avWind={this.state.marsData[this.state.marsData.sol_keys[6]].HWS.av}
        lowestWind={this.state.marsData[this.state.marsData.sol_keys[6]].HWS.mn}
        highestWind={this.state.marsData[this.state.marsData.sol_keys[6]].HWS.mx}
      />
      <Rover />
      <Gallery />
      <footer>
        <p>Sources: NASA API</p>
      </footer>
    </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)