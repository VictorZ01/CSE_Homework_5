

async function gettingWeather(){
    const latitude = 32.87433405942239; 
    const longitude = -117.23441665640816;  
    const destination=`https://api.weather.gov/points/${latitude},${longitude}`
    const responseGrid = await fetch(destination, {
        headers: {
          'User-Agent': 'App', 
        },
      });
      const  dest= await responseGrid.json();
      const url=dest.properties.forecastGridData;
    const apiUrl = `${url}/forecast`;
  
    const response = await fetch(apiUrl, {
      headers: {
        'User-Agent': 'Weather_Widget', 
      },
    });
    const  data= await response.json();
    return data.properties.periods[0];
}

function display(data){
   console.log(data)
   const weatherWidget=document.getElementById('weathering');
   const temp=data.temperature;
   const condition=data.shortForecast;
   const windSpeed=data.windSpeed;
   const windDir=data.windDirection;
   const iconUrl = data.icon;
   let icon="";
   if(condition=="Clear"){
    icon="118959_clear_weather_icon.png"
   }
   else if(condition=="Cloudy"){
    icon="1530369_weather_cloud_clouds_cloudy_icon.png"
   }
   else if(condition=="Partly-Cloudy"){
    icon="2682849_cloud_cloudy_day_forecast_sun_icon.png"
   }
   else{
    icon="118959_clear_weather_icon.png"
   }
   weatherWidget.innerHTML=`
   <img src="${icon}" alt="Weather Icon" id="weather_icon" width="50">
   <p>${condition} ${temp}°F</p>
   <p>${windSpeed} ${windDir}</p>`;
}

document.addEventListener('DOMContentLoaded',function(){
const weatherWidget=document.getElementById('weathering');
if(weatherWidget){
    gettingWeather().then(data=>{display(data);});
}
});
