import React, { useState, Fragment } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, Card, CardText, CardBody, CardTitle } from 'reactstrap';

import './CardWeather.css';

const keyLocalStorage = 'formWeather';

const CardWeather = () => {
	const defaultConfig = JSON.parse(window.localStorage.getItem(keyLocalStorage)) || { city: 'Berlin' };
	const [formState, setFormState] = useState(defaultConfig);
	const { city } = formState;
	const submitHandler = (e) => {
		e.preventDefault();
		console.log('Submit');
	};
	return (
		<Fragment>
			<Card>
				<CardBody>
					<CardTitle>Card Weather</CardTitle>
					<CardText>Show weather in your city</CardText>
					<Form onSubmit={submitHandler} method='POST'>
						<FormGroup row>
							<Label for='City' sm={2}>
								City
							</Label>
							<Col sm={10}>
								<Input type='city' name='ciy' id='City' placeholder='Berlin' />
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
