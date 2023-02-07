import  axios  from "axios";
import './App.css'
import { useState } from "react";



function App() {
  const [data,setdata]=useState()
  const [location,setlocation]=useState("")
  //const URL=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f36585fed1b738460dea00935d21e163`
//process.env.REACT_APP_MY_ONLY_KEY
const URL=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_MY_ONLY_KEY}`

 const searchingdata=(event)=>{

  if(event.key==="Enter"){
    axios.get(URL).then((res)=>{setdata(res.data)
      console.log(res.data)}).catch((err)=>{alert(err.massage)})
    
  }

 }


  return (

    <div className="App">
      <div className="search"> <input type='text' onChange={(event)=>{setlocation(event.target.value)}}
       onKeyDown={searchingdata}
       /></div>
<div className="top">
<div className="temp"> <h1>{data?.main.temp} °F</h1>
<div className="dic"><h2>{data?.weather[0].main}</h2></div>

</div>
</div>
<div className="bottom">
<div className="city"><h2>{data?.name}</h2></div>

<div className="feel">
  <p>feels like</p>
  <p>{data?.main.feels_like} °F</p>
</div>
<div className="feel">
<p>Humidity</p>
   <p>{data?.main.humidity}</p></div>
<div className="feel"> 
<p>Wind</p>

<p>{data?.wind.speed}</p></div>
<div className="feel"><p>Country</p>
  <p>{data?.sys.country}</p></div>

</div>



    </div>
  );
}

export default App;
