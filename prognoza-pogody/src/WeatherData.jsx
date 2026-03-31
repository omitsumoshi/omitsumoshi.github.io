import './WeatherData.css'
import { useState } from 'react'
import axios from "axios";
import { useEffect } from 'react';
import WeatherDataTile from './WeatherDataTile';

const WeatherData = (props) => {



        const [formData, setFormData] = useState([]);
        // I am creating a placeholder for data

        useEffect (() => {
            if (formData.length==0){
            console.log("fetching weather")
            axios.get("https://danepubliczne.imgw.pl/api/data/synop")
            .then((response) => {
                setFormData(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
            }
            else {
                console.log(formData)
            };

            if (
                props.searchCity.length > 0) {
                    const filtered = formData.filter( (match) => {
                        return match.stacja.includes(props.searchCity)
                    } )
                    setFormData(filtered)
                }

              
        })


        return (
            <div className='layout-cities'>
                {formData.map(item => (
                    <WeatherDataTile stacja={item.stacja} temperatura={item.temperatura} cisnienie={item.cisnienie} wilgotnoscWzgledna={item.wilgotnosc_wzgledna}/>
                ))}
            </div>
        )
    }



export default WeatherData