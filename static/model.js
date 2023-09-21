export default model => {
    let temperature = model.temperature
    let percipitation = model.percipitation
    let wind_speed = model.wind
    let cloud_coverage = model.cloud

    return {
        temperature,
        percipitation,
        wind_speed,
        cloud_coverage
    }
}