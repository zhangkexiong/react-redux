import {FETCH_ERROR, FETCH_START, FETCH_SUCCESS} from "./actionTypes";

export const fetchWeatherStart = () => ({type:FETCH_START});

export const fetchWeatherSuccess = (result) => ({
    type:FETCH_SUCCESS,
    result
});

export const fetchWeatherError = (error) => ({
    type:FETCH_ERROR,
    error
});

export const fetchWeather = (cityCode) => {
    return (dispatch) => {
        const apiUrl = `/data/cityinfo/${cityCode}.html`;

        dispatch(fetchWeatherStart());

        return fetch(apiUrl).then(response=>{
            if(response.status!==200){
                throw new Error('Fail to get response with status ' + response.status);
            }
            response.json().then(responseJson=>{
                dispatch(fetchWeatherSuccess(responseJson.weatherinfo))
            }).catch((error)=>{
                dispatch(fetchWeatherError(error))
            }).catch((error=>{
                dispatch(fetchWeatherError(error))
            }))
        })
    }
}