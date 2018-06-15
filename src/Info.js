import React from 'react';
import Images from './Images'

const Info = (props)=> {
    return(
    <div>
    <h3>Location : <span> {props.info.name}</span></h3>
    <h3>Humidity : {props.info.main.humidity}</h3>
    <h3>Temperature: <span>{Math.floor(props.info.main.temp -273.15) }°C</span></h3>
    <h3>Conditions : {props.info.weather[0].main}</h3>
    <Images conditions = {props.info.weather[0].main} />
    </div>
    )
}


export default Info;