import React, { Component } from 'react';
import './App.css';
import DisplayMeteo from './components/DisplayMeteo';
import SearchBar from './components/SearchBar';

class App extends Component {
  state = {
    show:false,
    value:"",
    data:[],

    pays:undefined,
    ville:undefined,
    temperature:undefined,
    tempMax:undefined,
    tempMin:undefined,
    humidity:undefined,
    description:undefined
  }


//Récupere data
  fetchData = async () => {
    let city = this.state.value
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=06b50d32565202dcd5d76bc954529d6b`)
    const json = await  data.json();
    console.log(json)
   this.setState({data:json})
   //Maj du state
   this.setState({pays:this.state.data.sys.country})
   this.setState({ville:this.state.data.name})
   this.setState({temperature:this.state.data.main.temp})
   this.setState({tempMax:this.state.data.main.temp_max})
   this.setState({tempMin:this.state.data.main.temp_min})
   this.setState({humidity:this.state.data.main.humidity})
   this.setState({description:this.state.data.weather[0].description})

  }
  //Functions
 show(){
      this.setState({show:!this.state.show})
  }
  handleChange(e) {
      this.setState({value:e.target.value})

  }
  startFunction(){
    this.fetchData()
    this.setState({value:""})
  }


  render() {

    return (

      <div className="App">
              <SearchBar
               handleChange={(e)=>this.handleChange(e)}
               value={this.state.value}
               start={()=>this.startFunction()}
              />
              <DisplayMeteo
              pays={this.state.pays}
              ville={this.state.ville}
              temperature={this.state.temperature}
              temperatureMax={this.state.tempMax}
              temperatureMin={this.state.tempMin}
              humidity={this.state.humidity}
              description={this.state.description}
                />
      </div>
    );
  }
}

export default App;
