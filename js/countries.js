const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
};

loadCountries()

const displayCountries = (countries) => {
    const countriesContainer = document.getElementById('countries')

    countries.forEach(country => {
        const div = document.createElement('div');

        div.innerHTML = `
            <h3>${country.name.common}</h3>
            <p>${country.capital}</p>
            <button onclick="loadCountryByName('${country.name.common}')">Details</button>
        `;

        div.classList.add('countries')

        countriesContainer.appendChild(div)
        // console.log(country)
    });

    // console.log(countries);
};

const loadCountryByName = (name) => {

    const url = `https://restcountries.com/v3.1/name/${name}
    `
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))


};

const displayCountryDetail = country => {
    const countryDetail = document.getElementById('country-detail')
    countryDetail.innerHTML = `
            <h3>${country.name.common}</h3>
            <p>${country.capital}</p>
            <img width="300px" src="${country.flags.png}" />
            <p>${country.population}</p>
        `;
    console.log(country);
}