import axios from "axios";

export default {
  getProjects: function () {
    return axios.get("/api/projects");
  },

  loadCurrentWeather: function (position) {
    let { lat, lon } = position;
    const BASEURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=93db34aab5dfd344d185ccd0f5cfd855`;
    return axios.get(BASEURL);
  },
 
  loadFiveDay: function (position) {
    let { lat, lon } = position;
    const BASEURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&exclude=hourly&units=imperial&appid=93db34aab5dfd344d185ccd0f5cfd855`;
    return axios.get(BASEURL);
  }

};


