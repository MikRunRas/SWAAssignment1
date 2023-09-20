const Event = (time, place) => {
    // Fields
    const _time = time
    const _place = place

    // Functions
    const getTime = () => _time
    const getPlace = () => _place

    // Return Object
    return {
        getTime,
        getPlace
    }
}

const WeatherData = (time, place, value, type, unit) => {
    // composition?
    const event = Event(time, place)

    // Fields
    const _type = type
    const _value = value
    const _unit = unit

    // Functions
    const getType = () => _type
    const getValue = () => _value
    const getUnit = () => _unit

    // Return Object
    return {
        ...event,
        getType,
        getValue,
        getUnit
    }
}

const Temperature = (time, place, value, type, unit) => {
    // ??
    const weatherData = WeatherData(time, place, value, type, unit)

    // Functions
    const convertToC = (farenheit) => -1
    const convertToF = (celcius) => -1

    // Return Object
    return {
        ...weatherData,
        convertToC,
        convertToF
    }
}

const Precipitation = (time, place, value, type, unit, precipitationType) => {
    const weatherData = WeatherData(time, place, value, type, unit)

    // Fields
    const _precipitationType = precipitationType

    // Functions
    const getPrecipitationType = () => _precipitationType
    const convertToInches = (mm) => -1
    const convertToMm = (inches) => -1

    // Return Object
    return {
        ...weatherData,
        getPrecipitationType,
        convertToInches,
        convertToMm
    }
}

const Wind = (time, place, value, type, unit, direction) => {
    const weatherData = WeatherData(time, place, value, type, unit)

    // Fields
    const _direction = direction

    // Functions
    const getDirection = () => _direction
    const convertToMPH = (MetersPrSecond) => -1
    const convertToMS = (MilesPrHour) => -1

    // Return Object
    return {
        ...weatherData,
        getDirection,
        convertToMPH,
        convertToMS
    }
}

const CloudCoverage = (time, place, value, type, unit) => {
    const _weatherData = WeatherData(time, place, value, type, unit)

    // Return Object
    return {
        ...weatherData
    }
}

export { Temperature, Precipitation, Wind, CloudCoverage }