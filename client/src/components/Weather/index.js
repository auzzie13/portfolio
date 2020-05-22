import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Moment from 'react-moment';
import "./style.css";
import API from "../../utils/API";

function Weather() {
  const [current, setCurrent] = useState({
    cityName: "",
    currentTemp: "",
    feelsLike: "",
    humidity: "",
    description: "",
    icon: "",
  });

  const [fiveDay, setFiveDay] = useState({
    dayOneHigh: "",
    dayOneLow: "",
    dayOneHumidity: "",
    dayOneDescription: "",
    dayOneIcon: "",
    dayTwoHigh: "",
    dayTwoLow: "",
    dayTwoHumidity: "",
    dayTwoDescription: "",
    dayTwoIcon: "",
    dayThreeHigh: "",
    dayThreeLow: "",
    dayThreeHumidity: "",
    dayThreeDescription: "",
    dayThreeIcon: "",
    dayFourHigh: "",
    dayFourLow: "",
    dayFourHumidity: "",
    dayFourDescription: "",
    dayFourIcon: "",
    dayFiveHigh: "",
    dayFiveLow: "",
    dayFiveHumidity: "",
    dayFiveDescription: "",
    dayFiveIcon: "",
  });

  useEffect(() => {


    const success = (pos) => {
      var { coords } = pos;
      // setPosition({
      //     lat: coords.latitude,
      //     lon: coords.longitude
      // });

      API.loadCurrentWeather({
        lat: coords.latitude,
        lon: coords.longitude,
      })
        .then(({ data }) => {
          console.log(data);
          setCurrent({
            cityName: data.name,
            currentTemp: Math.floor(data.main.temp),
            feelsLike: Math.floor(data.main.feels_like),
            humidity: data.main.humidity,
            description: data.weather[0].description,
            icon:
              "http://openweathermap.org/img/w/" +
              data.weather[0].icon +
              ".png",
          });
        })
        .catch((err) => console.log("caught", err));

      API.loadFiveDay({
        lat: coords.latitude,
        lon: coords.longitude,
      }).then(({ data }) => {
        console.log(data);
        setFiveDay({
          dayOneHigh: Math.floor(data.daily[0].temp.max),
          dayOneLow: Math.floor(data.daily[0].temp.min),
          dayOneHumidity: data.daily[0].humidity,
          dayOneDescription: data.daily[0].weather[0].description,
          dayOneIcon:
            "http://openweathermap.org/img/w/" +
            data.daily[0].weather[0].icon +
            ".png",
          dayTwoHigh: Math.floor(data.daily[1].temp.max),
          dayTwoLow: Math.floor(data.daily[1].temp.min),
          dayTwoHumidity: data.daily[1].humidity,
          dayTwoDescription: data.daily[1].weather[0].description,
          dayTwoIcon:
            "http://openweathermap.org/img/w/" +
            data.daily[1].weather[0].icon +
            ".png",
          dayThreeHigh: Math.floor(data.daily[2].temp.max),
          dayThreeLow: Math.floor(data.daily[2].temp.min),
          dayThreeHumidity: data.daily[2].humidity,
          dayThreeDescription: data.daily[2].weather[0].description,
          dayThreeIcon:
            "http://openweathermap.org/img/w/" +
            data.daily[2].weather[0].icon +
            ".png",
          dayFourHigh: Math.floor(data.daily[3].temp.max),
          dayFourLow: Math.floor(data.daily[3].temp.min),
          dayFourHumidity: data.daily[3].humidity,
          dayFourDescription: data.daily[3].weather[0].description,
          dayFourIcon:
            "http://openweathermap.org/img/w/" +
            data.daily[3].weather[0].icon +
            ".png",
          dayFiveHigh: Math.floor(data.daily[4].temp.max),
          dayFiveLow: Math.floor(data.daily[4].temp.min),
          dayFiveHumidity: data.daily[4].humidity,
          dayFiveDescription: data.daily[4].weather[0].description,
          dayFiveIcon:
            "http://openweathermap.org/img/w/" +
            data.daily[4].weather[0].icon +
            ".png",
        });
      });
    };

    const error = (err) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    };

    navigator.geolocation.getCurrentPosition(success, error);

  }, []);

  let date = new Date()

  return (
    <Container id="weather-container" fluid> Your Local Forecast:
      <Row>
        <Col id="current-weather">
          <h1>{current.cityName}
          <br></br>
          <Moment format="ddd MMM DD">{date}</Moment>
          </h1>
          <div>
            Current Temperature: {current.currentTemp}
            <span>&#176;</span>
          </div>
          <div>
            Feels Like: {current.feelsLike}
            <span>&#176;</span>
          </div>
          <div>
            Humidity: {current.humidity}
            <span>%</span>
          </div>
          <div>Description: {current.description}</div>
          <img src={current.icon} />
        </Col>
        </Row>
        <Row xs={2} md={2} lg={5} id="five-day">
          <Col id="day1">
            <div>{current.cityName}
            <br></br>
            <Moment format="ddd MMM DD" add={{ days: 1 }}>{date}</Moment>
            </div>
            <div>
              High: {fiveDay.dayOneHigh}
              <span>&#176;</span>
            </div>
            <div>
              Low: {fiveDay.dayOneLow}
              <span>&#176;</span>
            </div>
            <div>
              Humidity: {fiveDay.dayOneHumidity}
              <span>%</span>
            </div>
            <div>Description: {fiveDay.dayOneDescription}</div>
            <img src={fiveDay.dayOneIcon} />
          </Col>
          <Col id="day2">
          <div>{current.cityName}
          <br></br>
            <Moment format="ddd MMM DD" add={{ days: 2 }}>{date}</Moment>
          </div>
            <div>
              High: {fiveDay.dayTwoHigh}
              <span>&#176;</span>
            </div>
            <div>
              Low: {fiveDay.dayTwoLow}
              <span>&#176;</span>
            </div>
            <div>
              Humidity: {fiveDay.dayTwoHumidity}
              <span>%</span>
            </div>
            <div>Description: {fiveDay.dayTwoDescription}</div>
            <img src={fiveDay.dayTwoIcon} />
          </Col>
          <Col id="day3">
          <div>{current.cityName}
          <br></br>
            <Moment format="ddd MMM DD" add={{ days: 3 }}>{date}</Moment>
          </div>
            <div>
              High: {fiveDay.dayThreeHigh}
              <span>&#176;</span>
            </div>
            <div>
              Low: {fiveDay.dayThreeLow}
              <span>&#176;</span>
            </div>
            <div>
              Humidity: {fiveDay.dayThreeHumidity}
              <span>%</span>
            </div>
            <div>Description: {fiveDay.dayThreeDescription}</div>
            <img src={fiveDay.dayThreeIcon} />
          </Col>
          <Col id="day4">
          <div>{current.cityName}
          <br></br>
            <Moment format="ddd MMM DD" add={{ days: 4 }}>{date}</Moment>
          </div>
            <div>
              High: {fiveDay.dayFourHigh}
              <span>&#176;</span>
            </div>
            <div>
              Low: {fiveDay.dayFourLow}
              <span>&#176;</span>
            </div>
            <div>
              Humidity: {fiveDay.dayFourHumidity}
              <span>%</span>
            </div>
            <div>Description: {fiveDay.dayFourDescription}</div>
            <img src={fiveDay.dayFourIcon} />
          </Col>
          <Col id="day5">
          <div>{current.cityName}
          <br></br>
            <Moment format="ddd MMM DD" add={{ days: 5 }}>{date}</Moment>
          </div>
            <div>
              High: {fiveDay.dayFiveHigh}
              <span>&#176;</span>
            </div>
            <div>
              Low: {fiveDay.dayFiveLow}
              <span>&#176;</span>
            </div>
            <div>
              Humidity: {fiveDay.dayFiveHumidity}
              <span>%</span>
            </div>
            <div>Description: {fiveDay.dayFiveDescription}</div>
            <img src={fiveDay.dayFiveIcon} />
          </Col>
        </Row>
      
    </Container>
  );
}

export default Weather;
