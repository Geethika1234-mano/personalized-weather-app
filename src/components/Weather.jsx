import React, { useState ,useEffect}  from "react";
import { Await } from "react-router-dom";
import './weather.css'
import Loginform from '../components/Loginform.jsx'
import { Link } from "react-router-dom";
const api ={
  key : "a73f9608c405193894bc22ce6aa74363",
  base : "https://api.openweathermap.org/data/2.5/"
}

function App() {
    const returnValue = undefined
    const items = returnValue || []
    console.log(items[0]);

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    const [count,setCount] = useState(true);
    const [query,setQuery] = useState('Colombo');
    const [weather,setWeather] =  useState({});
    const [forecast,setForecast] =  useState({});
    const [showDaily,setShowDaily] = useState(false);

    
    useEffect(()=>{
        initializeWeather();
        initializeForecast();
        },[])
async function initializeWeather(e){
        fetch(`${api.base}weather?q=${query}&units=metric&exclude=hourly&APPID=${api.key}`)
            .then(res =>res.json())
            .then(result =>{
              setWeather(result);
              console.log(result);
            });
         
           fetch(`${api.base}forecast?q=${query}&units=metric&exclude=hourly,minutely&APPID=${api.key}`)
                .then(res => res.json())
                .then(result =>{
                  setForecast(result);
                  console.log(result);
                });
            }
async function initializeForecast(e){
                   fetch(`${api.base}forecast?q=${query}&units=metric&exclude=hourly,minutely&APPID=${api.key}`)
                        .then(res => res.json())
                        .then(result =>{
                          setForecast(result);
                          console.log(result);
                        });
    }

const search = async evt =>{
    if(evt.key === "Enter" && evt.target.value !== ""){
        setCount(false);
        fetch(`${api.base}weather?q=${query}&units=metric&exclude=hourly,minutely&APPID=${api.key}`)
        .then(res => res.json())
        .then(result =>{
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  const seemore = async evt =>{   
    fetch(`${api.base}forecast?q=${query}&units=metric&exclude=hourly,minutely&APPID=${api.key}`)
    .then(res => res.json())
    .then(result =>{
      setForecast(result);
      console.log(result);
    });
  }

//   const defineImg = async evt =>{
    
     
//     var temp1 = forecast.list[8].weather[0].icon;
//     var urlpath1 = "http://openweathermap.org/img/w/"+temp1+".png";
  
//     var temp2 = forecast.list[16].weather[0].icon;
//     var urlpath2 = "http://openweathermap.org/img/w/"+temp1+".png";
  
//     var temp3 = forecast.list[24].weather[0].icon;
//     var urlpath3 = "http://openweathermap.org/img/w/"+temp1+".png";
//   }

  
  const dateBuilder = (d) =>{

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  }
    
    // var temp1 = forecast.list[8].weather[0].icon;
    // var urlpath1 = "http://openweathermap.org/img/w/"+temp1+".png";
  
    // var temp2 = forecast.list[16].weather[0].icon;
    // var urlpath2 = "http://openweathermap.org/img/w/"+temp2+".png";
  
    // var temp3 = forecast.list[24].weather[0].icon;
    // var urlpath3 = "http://openweathermap.org/img/w/"+temp3+".png";
  return (
    <>
     <div className="page">
    <div className="cover2">
    
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
    <div className="leftcard">

            <h1>weather</h1>
            
            {(typeof weather.main != "undefined") ? (console.log("undefined1")):('')}
          {/* <div id="hide" style="dispaly:none">
            <div className="smallcards">
            <div className="card">
                    <h5>{forecast.list[8].dt_txt}</h5><br/>
                    <img src={urlpath1} />
                    <h5>{Math.round(forecast.list[8].main.temp)} °C </h5><br/>
                    <h5>{forecast.list[8].weather[0].description}</h5>
                </div>
                <div className="card">
                    <h5>{forecast.list[16].dt_txt}</h5><br/>
                    <img src={urlpath2} />
                    <h5>{Math.round(forecast.list[16].main.temp)} °C </h5><br/>
                    <h5>{forecast.list[16].weather[0].description}</h5>
                    
                </div>
                <div className="card">
                    <h5>{forecast.list[24].dt_txt}</h5><br/>
                    <img src={urlpath3} />
                    <h5>{Math.round(forecast.list[24].main.temp)} °C </h5><br/>
                    <h5>{forecast.list[24].weather[0].description}</h5>
                </div>
            </div>
          </div> */}
          
        <button className="seemore-btn" >See more</button>
    </div>
      <main>
        <div className="search-box">
            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
              onChange={e=>setQuery(e.target.value)}
              value={query}
              onKeyPress = {search}
            />
        </div>
        {(typeof weather.main != "undefined") ? (
          <div>
        <div className="location-box">
        <div className="location">{weather.name}, {weather.sys.country}</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        
        <div className="weather-box">
          <div className="temp">
            {Math.round(weather.main.temp)}°C
          </div>
          <div className="weather">{weather.weather[0].description}</div>
        </div>
        </div>
        ): ('')}
            {<Link to="/" style={{ textDecoration: 'none' }}><button className="lgt-btn" >Logout</button></Link>}
    
      </main>
    </div>
    </div>
    </div>
</>
    
  );
}

export default App;