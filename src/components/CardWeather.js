import React, { useState } from 'react';
import './CardWeather.css';

const keyLocalStorage = 'formWeather';

const CardWeather = () => {
	const defaultConfig = JSON.parse(window.localStorage.getItem(keyLocalStorage)) || { city: 'Berlin' };
	const [formState, setFormState] = useState(defaultConfig);
	const { city } = formState;
	return <div>MyWeather - {city}</div>;
};

export default CardWeather;
