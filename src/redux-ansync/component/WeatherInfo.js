import {FAILURE, LOADING, SUCCESS} from "../reducers/status";
import  React,{Component} from "react";
import {connect} from "react-redux";

const Weather = ({status,cityName,weather,lowestTemp,highestTemp}) => {
    alert(status)
    switch (status){
        case LOADING:{
            return <div>天气信息请求中...</div>;
        }
        case SUCCESS:{
            alert(cityName)
            return <div> {cityName} {weather} 最低气温 {lowestTemp} 最高气温 {highestTemp}</div>
        }
        case FAILURE:{
            return <div>天气信息装载失败</div>
        }
        default: {
            throw new Error('unexpected status ' + status);
        }
    }
}

const mapStateToProps = (state) => {
    const weatherData = state.weatherDate;
    console.dir(weatherData);
    return {
        status: weatherData.status,
        cityName: weatherData.city,
        weather: weatherData.weather,
        lowestTemp: weatherData.temp1,
        highestTemp: weatherData.temp2
    };
}

export default connect(mapStateToProps)(Weather)