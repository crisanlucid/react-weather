import React, { useState, Fragment } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, Card, CardText, CardBody, CardTitle, Alert } from 'reactstrap';

import './CardWeather.css';
import { forStatement } from '@babel/types';

const keyLocalStorage = 'formWeather';

const CardWeather = () => {
	const defaultConfig = JSON.parse(window.localStorage.getItem(keyLocalStorage)) || { city: 'Berlin' };
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

		//submit and error
		//throw new Error(JSON.stringify(formState), null, 2);
		fetch(`https://samples.openweathermap.org/data/2.5/forecast?q=${city.value}&appid=b6c7fa4350e9b33982817f1450c57cdf`)
			.then((data) => {
				if (!data.ok) throw new Error(data.statusText);
				console.log(data);
				return data.json();
			})
			.then((data) => {
				console.log('data', data);
			})
			.catch((e) => {
				console.log(e);
				setError({
					...error,
					isError: true,
					text: e.toString(),
				});
				// throw new Error(e, null, 2);
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
								City
							</Label>
							<Col sm={10}>
								<Input name='city' id='citdangery-input' placeholder='Berlin' />
							</Col>
						</FormGroup>
						<Button>Submit</Button>
					</Form>
				</CardBody>
			</Card>
		</Fragment>
	);
};

export default CardWeather;
