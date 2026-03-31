import './WeatherDataTile.css'
import { useState } from 'react'
import axios from "axios";
import { useEffect } from 'react';



const WeatherDataTile = (props) => {
    
    return (
        <div className="weather-tile ">
            <h2>{props.stacja}</h2>
            <p>Temperatura: {props.temperatura}°C</p>
            <p>Humidity: {props.wilgotnoscWzgledna}%</p>
            <p>Pressure: {props.cisnienie} hPa</p>
        </div>
    );
}

export default WeatherDataTile