import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchWeather} from "../actions/actions";

const CITY_CODES = {
    '北京': 101010100,
    '上海': 101020100,
    '广州': 101280101,
    '深圳': 101280601
};

class CitySelect extends Component {
    constructor() {
        super(...arguments);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        const defaultCity = Object.keys(CITY_CODES)[0];
        this.props.onSelectCity(CITY_CODES[defaultCity])
    }

    onChange(ev) {
        const cityCode = ev.target.value;
        alert(cityCode);
        this.props.onSelectCity(cityCode)
    }
    render() {
        return (<select onChange={this.onChange}>
            {
                Object.keys(CITY_CODES).map(
                    cityName => <option key={cityName} value={CITY_CODES[cityName]}>{cityName}</option>
                )
            }
        </select>);
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSelectCity:(cityCode) => dispatch(fetchWeather(cityCode))
    }
}

export default connect(null,mapDispatchToProps)(CitySelect);