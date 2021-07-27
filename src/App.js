

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
                <MenuItem value="worldwide">WorldWide</MenuItem>
               { countries.map((country) => (
                  <MenuItem value={country.value}>{country.name}</MenuItem>
                ))}
             
            </Select>
            </FormControl>
          </div>
          
          <div className="app__info">
            <InfoBox title="Cases" cases={countryInfo.todayCases} total={countryInfo.cases}/>
            <InfoBox title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered}/>
            <InfoBox title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths}/>
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