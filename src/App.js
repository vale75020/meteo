import React, { Component } from 'react';
import Search from "./Search";
import './style/App.css';
import axios from "axios"; 
import Info from './Info';

const key = "8a14b164356dd96869cba4f3d17fab6f";

class App extends Component {

  state = {
    input: "",
    json : {},
    error : ""
  }

  componentWillMount()  {
    this.getDataFromApi()
  }

  getDataFromApi = () => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.input === "" ? "London" : this.state.input}&appid=${key}`)
    .then((response) => {
      console.log(response);
      this.setState({ json : response}, ()=> {
       // console.log(this.state.json)
      })
    })
    .catch((error) => {
      console.log(error);
      this.setState({error: "ville inexistante", json:"" })
      console.log(this.state.error);
    });
  }

  inputStock = (event)=> {
    this.setState({input: event.target.value})
    console.log(this.state.input)

}

  clickbtn = () => {
    this.getDataFromApi();
  }



  render() {

    const renderInfo = () => {
      if(this.state.json.data) {
        return (
<Info info = {this.state.json.data} />
        )
      }
    }
    return (
      <div className="App">
      
        <Search search = {this.inputStock} btn = {this.clickbtn}/>
        <p>{this.state.error}</p>
        {renderInfo()}
      </div>
    );
  }
}

export default App;
