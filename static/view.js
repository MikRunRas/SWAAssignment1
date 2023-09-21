export default (window) => {
  const document = window.document;
  const currentWeather = document.getElementById("weather_data");
  const forecast = document.getElementById("forecast_data");
  const past = document.getElementById("past_24_hours");
  const listeners = [];

  const listen = (l) => listeners.push(l);

  const displayError = (e) => {
    const msg_board = document.getElementById("error_messages");
    msg_board.innerText = e;
  };

  const prompt = window.prompt.bind(window);

  // ------------------
  // |  Current Data  |
  // ------------------

  const updateCurrent = (model) => {
    // console.log("> Updating Current");
    // model.dump()

    // Start Table Row
    let row = document.createElement("tr");

    // Update individual View Sections
    let temp = model.temperature;
    updateCurrentValueUnit(row, temp);

    let wind = model.wind_speed;
    updateCurrentValueUnit(row, wind);

    let perc = model.percipitation;
    updateCurrentValueUnit(row, perc);

    // let cloud = model.cloud_coverage;
    // updateCurrentCloudCoverage(cloud)

    // updateCurrentValueUnit(row, cloud);

    // End Table Row
    currentWeather.appendChild(row);
  };

  // function updateCurrentTemperature(row, t_data) {
  //   let td = document.createElement("td");
  //   td.textContent = `${t_data.value}${t_data.unit}`;

  //   row.appendChild(td);
  // }

  // function updateCurrentPercipitation(row, p_data) {
  //   let td = document.createElement("td");
  //   td.textContent = `${p_data.value}${p_data.unit}`;

  //   row.appendChild(td);
  // }

  // function updateCurrentWindSpeed(row, w_data) {
  //   let td = document.createElement("td");
  //   td.textContent = `${w_data.value}${w_data.unit}`;

  //   row.appendChild(td);
  // }

  // function updateCurrentCloudCoverage(row, c_data) {
  //   let td = document.createElement("td");
  //   td.textContent = `${c_data.value}${c_data.unit}`;

  //   row.appendChild(td);
  // }

  function updateCurrentValueUnit(row, data) {
    // Create TD element
    let td = document.createElement("td");
    // Add Data Value and Unit to the Context
    td.textContent = `${data.value}${data.unit}`;
    // Add TD to the TR
    row.appendChild(td);
  }


  // -------------------
  // |  Forecast Data  |
  // -------------------

  const updateForecast = (model) => {
    // console.log("> Updating Forecast");

    // Start Table Row
    let row = document.createElement("tr");

    // Update individual View Sections
    let temp = model.temperature;
    updateForecastBox(row, temp);

    let wind = model.wind_speed;
    updateForecastBox(row, wind);

    let perc = model.percipitation;
    updateForecastBox(row, perc);

    let cloud = model.cloud_coverage;
    updateForecastBox(row, cloud)

    // End Table Row
    forecast.appendChild(row);
  };

  function updateForecastBox(row, data) {
    let td = document.createElement("td");
    td.textContent = `From ${data.from} to ${data.to} ${data.unit}`;
    row.appendChild(td);
    }

    // ------------------------
    // |  Past 24 Hours Data  |
    // ------------------------

    const updatePast24Hours = (model) => {
        // Start Table Row
        let row = document.createElement("tr");

        let minTemp = model.minTemp
        let maxTemp = model.maxTemp
        let averageWindspeed = model.averageWindspeed
        let totalRainfall = model.totalRainfall

        updatePast24HoursValueUnit(row, minTemp)
        updatePast24HoursValueUnit(row, maxTemp)
        updatePast24HoursValueUnit(row, averageWindspeed)
        updatePast24HoursValueUnit(row, totalRainfall)

        // End Table Row
        past.appendChild(row);
    }

    function updatePast24HoursValueUnit(row, data) {
        // Create TD element
        let td = document.createElement("td");
        // Add Data Value and Unit to the Context
        td.textContent = `${data.value}${data.unit}`;
        // Add TD to the TR
        row.appendChild(td);
    }

    return { listen, prompt, displayError, updateCurrent, updateForecast, updatePast24Hours };
};

