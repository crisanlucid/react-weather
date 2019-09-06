import React, { useState, Fragment } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, Card, CardText, CardBody, CardTitle, Alert } from 'reactstrap';
import WeatherList from './WeatherList';
import './fonts/Weather&Time.ttf';
import './CardWeather.css';

const CardWeather = () => {
	const defaultConfig = { city: 'Berlin' };
	const [formState, setFormState] = useState(defaultConfig);
	const [error, setError] = useState('');
	const { city } = formState;
	const submitHandler = (e) => {
		e.preventDefault();
		const { city } = e.target.elements;
		setFormState({
			...formState,
			city: city.value,
		});
		setError({
			...error,
			isError: false,
			text: '',
		});

		//validation
		// to do

		//submit and error
		//throw new Error(JSON.stringify(formState), null, 2);
		const params = {
			units: 'metric',
			appid: 'b6c7fa4350e9b33982817f1450c57cdf',
			q: city.value,
			days: 7,
		};

		//CORS API
		const options = {
			mode: 'no-cors',
		};

		fetch(
			`https://api.openweathermap.org/data/2.5/forecast?q=${city.value}&units=${params.units}&cnt=${params.days}&appid=${params.appid}`,
		)
			.then((data) => {
				if (!data.ok && data.type !== 'opaque') throw new Error('Please insert another city');
				console.log(data);
				return data.json();
			})
			.then((data) => {
				const { list } = data;
				console.log({ list });

				setFormState({
					...formState,
					forecast: list,
					city: `${data.city.name},${data.city.country}`,
				});
			})
			.catch((e) => {
				console.log(e);
				setError({
					...error,
					isError: true,
					text: e.toString(),
				});
			});
	};
	return (
		<Fragment>
			<Card>
				<CardBody>
					<CardTitle>Card Weather</CardTitle>
					<CardText>Show weather in your city</CardText>
					<Form onSubmit={submitHandler} method='POST'>
						{error.isError && <Alert color='danger'>{error.text}</Alert>}
						<FormGroup row>
							<Label for='city-input' sm={2}>
								City:
							</Label>
							<Col sm={10}>
								<Input name='city' id='city-input' placeholder='Berlin, DE' required />
							</Col>
						</FormGroup>
						<Button>Submit</Button>
					</Form>
					<div className='u-mt'>
						{formState.forecast && <WeatherList list={formState.forecast} city={formState.city} />}
					</div>
				</CardBody>
			</Card>
		</Fragment>
	);
};

export default CardWeather;
