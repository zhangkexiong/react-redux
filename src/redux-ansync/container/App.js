import React,{Component} from "react";
import CitySelect from "../component/CitySelect";
import WeatherInfo from "../component/WeatherInfo";

export default class App extends Component{
        render() {
            return (
                <div>
                    <CitySelect />
                    <WeatherInfo />
                </div>
            );
        }
}