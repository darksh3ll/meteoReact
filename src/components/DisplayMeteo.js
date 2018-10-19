import React, { Component } from 'react'
import "./DisplayMeteo.css"
class DisplayMeteo extends Component {

    render () {

            return (
              <div className="BOXMETEO">
                  <h1 className="pays">{this.props.pays}</h1>
                  <h1 className="ville">{this.props.ville}</h1>
                  <h1 className="temperature">{this.props.temperature} °</h1>
                    <div className="BOXTEMPMINMAX">
                      <div className="tempMax">
                        <h4 className="title">Max</h4>
                        <h1 className="temperatureMax">{this.props.temperatureMax}°</h1>
                      </div>
                      <div className="temperatureMini">
                         <h4 className="title">Mini</h4>
                        <h1 className="temperatureMini">{this.props.temperatureMin}°</h1>
                      </div>
                      <div className="humidity">
                         <h4 className="title">Humidity</h4>
                        <h1 className="temperatureMini">{this.props.humidity} %</h1>
                      </div>


                    </div>
                    <div className="BOXDESCRIPTION">
                      <h1>{this.props.description}</h1>
                    </div>
              </div>
            )

    }



}

export default DisplayMeteo