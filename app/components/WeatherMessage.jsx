var React = require('react');

var WeatherMessage = ({temp, location}) => {
    return (
        <div>
            <p><b>It's {temp} &#8457; here in {location}</b></p>
        </div>
    );
}

module.exports = WeatherMessage;