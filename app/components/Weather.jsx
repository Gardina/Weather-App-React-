const React = require('react');

const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');

const ErrorModal = require('ErrorModal');
const Weather = React.createClass({

	getInitialState: function () {
		return {
			isLoading: false,

		};
	},

	handleSearch: function(location) {
		this.setState({
			isLoading: true,
			errorMessage: undefined
		});

		var that = this;
		openWeatherMap.getTemp(location).then((temp) => {
			that.setState( {
				isLoading: false,
				location: location,
				temp: temp
			});
		}, (e) => {
			that.setState({
				isLoading: false,
				errorMessage: e.message
			});
		});
	},

	render: function () {
		var{isLoading, temp, location, errorMessage} = this.state;

		function renderMessage() {
			if (isLoading) {
				return <h3 className="text-center">Fetching weather ... </h3>;
			} else if (temp, location) {
				return <WeatherMessage temp={temp} location={location}></WeatherMessage>;
			}
		}

		function renderError () {
			if (typeof errorMessage === 'string') {
				return (
					<ErrorModal message={errorMessage}/>
				);
			}
		}

		return (
      <div>
				<h1 className="text-center">Get Weather</h1>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
				{renderError()}
			</div>
		);
	}
});

module.exports = Weather;
