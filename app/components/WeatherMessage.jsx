var React = require('react');

var WeatherMessage = React.createClass({
    render: function () {
        var {temp, location} = this.props;
        return (
            <div>
                <p>It's {temp} here in {location}</p>
            </div>
        );
    }
});

module.exports = WeatherMessage;