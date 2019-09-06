### the task
implement a very basic weather service called "myWeather"

### expectations
- it does not have to be a perfectly working solution
- it should not take more than 4-5h
- consider the use case of mobile and/or tablet users
- nice design as a plus

### note
if the solution requires setup (starting a server or docker-container etc.), please leave an instruction

### stories
as a user of myWeather I want to see the forecast in the city of my choice

###### AC
- there is an input, where the user can type the name of the city
- the value of the input can be submitted to the "myWeater"-Service
- when the form is submitted, the user sees a list/row of tiles for the upcoming days
- a tile shows temperature, min/max limits, and condition
- the condition is displayed with an icon (see zip)
  - if the condition can not be matched with an icon, use the "sunny"-icon
- the min and max temperatures are displayed in the corners of the current temperature in a form comparable to superscript and subscript
- if the user did an error or there is no such city in myWeather service, he gets notified
---

### resources
- please find a zip for icons in the folder
- for weather-data you can use [openweathermap](https://openweathermap.org/api)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).




## Run Server
require [nodejs](https://nodejs.org/en/) and [npm](https://www.npmjs.com/get-npm)

```
npm i
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


