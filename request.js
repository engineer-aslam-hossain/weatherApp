const key = "6ec66aee978a63584e58358ec8ae5488";

const requestCity = async city => {
    const baseURL = "https://api.openweathermap.org/data/2.5/weather?";
    const query = `q=${city}&appid=${key}`;

    const response = await fetch(baseURL + query);
    const data = await response.json();
    return data;
};

requestCity("dhaka");