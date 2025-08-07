import './WeatherForecast.css' 

const WeatherForecast = (props) =>{
return(
<>
<div className="weather">
  <h2>{props.WeatherForecast.day}</h2>
  <img src={props.WeatherForecast.img} alt={props.WeatherForecast.imgAlt} />
  <p><span>conditions: </span>{props.WeatherForecast.conditions}</p>
  <p><span>time: </span>{props.WeatherForecast.time}</p>
</div>

</>)
}

export default WeatherForecast