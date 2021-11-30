

import React , {useState,useEffect} from "react"
import {
    MenuItem,
    FormControl,
    Select,
    card,
    CardContent,
  } from "@material-ui/core";

import "./App.css"
import InfoBox from "./InfoBox";
import Map from "./Map";
import "leaflet/dist/leaflet.css"
import infected from "./Assets/infected.webp"
import recovered from "./Assets/restored.webp"
import death from "./Assets/death.webp"

function App(){
  const [countries, setCountries] = useState([])
  const [country, setCountry]=useState("worldwide")
  const [countryInfo, setCountryInfo] = useState({});
  const [mapCenter,setMapCenter]=useState({
    lat:34.80746,lng:-40.4796})
  const [mapZoom,setMapZoom]=useState(3)

  useEffect(() =>{
    fetch("https://disease.sh/v3/covid-19/all")
    .then((response) => response.json())
        .then((data) =>{
          setCountryInfo(data);
        });
  },[]);

  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries(countries);
        });
    };

    getCountriesData();
  }, []);

  const countryChange= async (event)=>{
    const countryCode=event.target.value;


    const url=
      countryCode ==="worldwide"
      ? "https://disease.sh/v3/covid-19/all"
      : `https://disease.sh/v3/covid-19/countries/${countryCode}`

      await fetch(url)
        .then((response) => response.json())
        .then((data) =>  {
          setCountry(countryCode);
          setCountryInfo(data);
          setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
          setMapZoom(4);
        })
  };

    return(
         <div className="app">
           <div className="app__left">
            <div className="app__header">
            <h1>COVID-19 Tracker</h1>
            <FormControl className="app__dropdown">
            <Select
              variant="outlined"
              onChange={countryChange}
              value={country}>
                <MenuItem value="worldwide"><b>WorldWide</b></MenuItem>
               { countries.map((country) => (
                  <MenuItem value={country.value}>{country.name}</MenuItem>
                ))}
             
            </Select>
            </FormControl>
          </div>
          
          <div className="app__info">
            <InfoBox isRed title="Cases" cases={countryInfo.todayCases} total={countryInfo.cases} image={infected}/>
            <InfoBox title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered} image={recovered}/>
            <InfoBox isRed title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths} image={death}/>
          </div>

          <Map
          center={mapCenter}
          zoom={mapZoom}
          />
          </div>
          

          {/* <div className="app__right">
            <card>
              <CardContent>
                table
              </CardContent>
            </card>
          </div> */}
        </div>
    )
}

export default App