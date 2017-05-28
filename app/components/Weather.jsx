const React = require('react');

const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');

const Weather = React.createClass({

	getInitialState: function () {
		return {
			isLoading: false
		};
	},

	handleSearch: function(location) {
		this.setState({
			isLoading: true
		});

		var that = this;
		openWeatherMap.getTemp(location).then((temp) => {
			that.setState( {
				isLoading: false,
				location: location,
				temp: temp
			});
		}, (err) => {
			that.setState({
				isLoading: false
			});
			alert(err);
		});
	},

	render: function () {
		var{isLoading, temp, location} = this.state;

		function renderMessage() {
			if (isLoading) {
				return <h3 className="text-center">Fetching weather ... </h3>;
			} else if (temp, location) {
				return <WeatherMessage temp={temp} location={location}></WeatherMessage>;
			}
		}

		return (
      <div>
				<h1 className="text-center">Get Weather</h1>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
			</div>
		);
	}
});

module.exports = Weather;
