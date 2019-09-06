import React from 'react';
import { Col, Row, Card } from 'reactstrap';

const iconFind = function({ main }) {
	console.log({ main });
	let res;
	//to do:update list
	switch (main.toLowerCase()) {
		case 'clear':
			res = 'A';
			break;
		case 'clouds':
			res = 'C';
			break;
		case 'rain':
			res = 'R';
			break;
		default:
			res = 'A';
			break;
	}

	return res;
};

const formatDate = function(t) {
	const weekday = [];
	weekday[0] = 'Sunday';
	weekday[1] = 'Monday';
	weekday[2] = 'Tuesday';
	weekday[3] = 'Wednesday';
	weekday[4] = 'Thursday';
	weekday[5] = 'Friday';
	weekday[6] = 'Saturday';

	return weekday[t.getDay()];
};

const WeatherList = ({ list, city }) => {
	return (
		<Card className='weather-widget'>
			<div className='weather-widget__inner'>
				<h3 className='weather-widget__title'>{city}</h3>
				{list.map((day) => {
					return (
						<div className='weather-widget__temperature' key={day.dt}>
							<Row noGutters={true} className='weather-widget__row'>
								<Col xs={3}>
									<div className='weather-widget__img'>{iconFind(day.weather[0])}</div>
								</Col>
								<Col xs={3}>
									<p className='weather-widget__weekday'>{formatDate(new Date(day.dt * 1000))}</p>
								</Col>
								<Col xs={5}>
									{day.main.temp}
									<span className='weather_widget__temperature-avg'>
										<sup className='weather-widget__temperature-max'>{day.main.temp_max}</sup>
										<sub className='weather-widget__temperature-min'>{day.main.temp_min}</sub>
									</span>
								</Col>
							</Row>
						</div>
					);
				})}
			</div>
		</Card>
	);
};

export default WeatherList;
