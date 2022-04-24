document.querySelector('button').addEventListener('click',getNortheastIkonWeather)
let userday
let dateUserEntered
let weather
  const sugarbush = new GetSkiMountainWeather('Sugarbush','44.14','-72.89')
  const killington = new GetSkiMountainWeather('Killington','43.68','-72.78')
  const loon = new GetSkiMountainWeather('Loon','44.04','-71.62')
  const stratton = new GetSkiMountainWeather('Stratton','43.11','-72.91')
  
function getNortheastIkonWeather(){
  dateUserEntered = document.getElementById("userDate").value
  userday = dateUserEntered.split('-')[2]-Date().split(' ')[2]



  let northeastIkonMountains = [sugarbush.resortName,killington.resortName,loon.resortName,stratton.resortName]

  northeastIkonMountains.forEach(element =>{
    document.getElementById(`${element}`).innerHTML = `${element} Weather on ${dateUserEntered}`
    let ul = document.getElementById(`${element}Weather`)
    let domElement = document.createElement('li')
   //domElement.innerHTML=element.toLowerCase.weather()
    ul.append(domElement)
  })

  console.log(sugarbush.weather)
  console.log(killington.weather)
  loon.weather
  stratton.weather
}

function GetSkiMountainWeather(resortName,latitude,longitude){
    this.resortName = resortName
    this.latitude = latitude
    this.longitude = longitude

    Object.defineProperty(this,'weather',{
      get: function(){
        let weatherAPICode = 'a4f874d6cfc16e89ad81afe29013cf31'
        let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=imperial&appid=${weatherAPICode}`
          fetch(url)
          .then(res => res.json()) // parse response as JSON
          .then(data => {
            return 4
            data.daily[userday].temp.day
          })
          .catch(err => {
          console.log(`error ${err}`)
          })
      }});
  }

/*
function killingtonWeather(){
  //Lat and Long Coord
  let killingtonLat = 43.68
  let killingtonLon = -72.78

  let lat = killingtonLat
  let lon = killingtonLon

  let weatherAPICode = 'a4f874d6cfc16e89ad81afe29013cf31'

    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=imperial&appid=${weatherAPICode}`
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
  }

*/