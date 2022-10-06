// Export class
export class Weather {

    //constructor method (se ejecuta solo)
    constructor(city, countryCode) 
    {
        this.apikey = '01dca16ddfe1eb36e8784152e5d68f7b';
        this.city = city;
        this.countryCode = countryCode; 
    }


//asinchronich method and inner a await 
async getWeather()
{
    //URL of API
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`;
    // se hace la peticion con fetch y await es paara especificarr que puede tardar
    const response = await fetch(URL);

    const data = await response.json();
    return data;
}
//cambiar la ciudad
changeLocation(city, countryCode)
{
    this.city = city;
    this.countryCode = countryCode;
}
}