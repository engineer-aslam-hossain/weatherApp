const key = "6ec66aee978a63584e58358ec8ae5488";

// const baseURL =
//     "https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=6ec66aee978a63584e58358ec8ae5488";

// fetch(baseURL)
//     .then(data => console.log(data.json()))
//     .catch(error => console.log(error));

const requestCity = async city => {
    const baseURL = "https://api.openweathermap.org/data/2.5/weather?";
    const query = `q=${city}&appid=${key}`;

    const response = await fetch(baseURL + query);
    const data = await response.json();
    return data;
};

requestCity("dhaka");