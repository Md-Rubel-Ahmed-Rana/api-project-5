

const getCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => displayCountry(data))
}


const displayCountry = (countries) => {
    const countryContainer = document.getElementById("country-container")
    for (const country of countries){
        console.log(country);
        const countryDiv = document.createElement("div");
        countryDiv.classList.add("country");
        countryDiv.innerHTML = `
            <img src= ${country.flags.png} />
            <h1>Country: ${country.name.common}</h1>
            <h1>Capital: ${country.capital ? country.capital : "No Capital"}</h1>
            <p> Time Zone: ${country.timezones}</p>
        `;
        countryContainer.appendChild(countryDiv)
    }
}
getCountries()