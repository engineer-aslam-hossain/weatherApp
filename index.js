const searchForm = document.querySelector(".search-location");
const cityValue = document.querySelector(".search-location input");
const cityName = document.querySelector(".city-name p");
const cardBody = document.querySelector(".card-body");
const timeImg = document.querySelector(".card-top img");
const cardInfo = document.querySelector(".back-card");
const translateCelcius = kelvin => {
    const celcius = Math.round(kelvin - 273.15);
    return celcius;
};

const isDayTime = icon => {
    if (icon.includes("d")) {
        return true;
    } else {
        return false;
    }
};

const updateWeatherApp = city => {
    const imgIcon = city.weather[0].icon;
    const imgSrc = `https://openweathermap.org/img/wn/${imgIcon}@2x.png`;
    cityName.textContent = city.name;
    cardBody.innerHTML = ` <div class="card-body">
    <div class="card-mid row">
        <div class="col-8 text-center temp">
            <span>${translateCelcius(city.main.temp)}&deg;C</span>
        </div>
        <div class="col-4 condition-temp">
            <p class="condition">${city.weather[0].description} </p>
            <p class="high">${translateCelcius(city.main.temp_max)}&deg;C</p>
            <p class="low">${translateCelcius(city.main.temp_min)}&deg;C</p>
        </div>
    </div>
    <div class="icon-container card shadow mx-auto">
        <img src="${imgSrc}" >
    </div>
    <div class="card-bottom px-5 py-4 row">
        <div class="col text-center p-0">
            <p>${translateCelcius(city.main.feels_like)}&deg;C</p>
            <span>Feels like</span>
        </div>
        <div class="col text-center p-0">
            <p>${city.main.humidity}%</p>
            <span>Humidity</span>
        </div>
    </div>
</div>`;

    if (isDayTime(imgIcon)) {
        timeImg.setAttribute("src", "img/day_image.svg");
        cityName.classList.remove("text-white");
        cityName.classList.add("text-black");
    } else {
        timeImg.setAttribute("src", "img/night_image.svg");
        cityName.classList.add("text-white");
    }
    cardInfo.classList.remove("d-none");
};

searchForm.addEventListener("submit", e => {
    e.preventDefault();

    const searchCity = cityValue.value.trim();
    searchForm.reset();

    requestCity(searchCity)
        .then(data => {
            updateWeatherApp(data);
        })
        .catch(error => console.log(error));
});