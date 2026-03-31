import SearchBar from "./SearchBar"
import WeatherData from "./WeatherData"
import { useState } from "react"


const Layout = () => {

    const [searchCity, setSearchCity] = useState("")


    return (
        <div className="main-frame">
            <div className="search-bar">
                <SearchBar setCity={setSearchCity}/>
                <h1>{searchCity}</h1>
            </div>
            <div className="layout-cities">
                <WeatherData searchCity={searchCity} />
            </div>
        </div>

    )
}


export default Layout