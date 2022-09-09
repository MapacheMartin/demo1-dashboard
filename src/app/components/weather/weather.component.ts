import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  userDeniedLocation: boolean = false;
  loading: boolean = false;
  loaded: boolean = false;

  lat: any = undefined;
  lng: any = undefined;
  currentWeather: any = {};
  constructor(private _weather: WeatherService) {}

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(
      this.successCallback.bind(this),
      this.errorCallback.bind(this)
    );
  }

  successCallback(position: any) {
    this.lat = position.coords.latitude;
    this.lng = position.coords.longitude;
    this.getWeather();
  }

  errorCallback(event: any) {
    this.userDeniedLocation = true;
    console.error(event);
  }

  getWeather() {
    this.loaded = false;
    this.loading = true;
    this._weather.get(this.lat, this.lng).subscribe({
      next: (e) => {
        this.loaded = true;
        this.loading = false;
        this.currentWeather = e.current_weather;
        this.currentWeather.image = this.insertImage(
          e.current_weather.weathercode
        );
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  insertImage(weatherCode) {
    var weather = '';
    switch (weatherCode) {
      case 0:
        weather = 'assets/images/weather/sun.svg';
        break;
      case 1:
        weather = 'assets/images/weather/cloud-sun.svg';
        break;
      case 2:
        weather = 'assets/images/weather/clouds-sun.svg';
        break;
      case 3:
        weather = 'assets/images/weather/cloud.svg';
        break;
      case 45:
        weather = 'assets/images/weather/cloud-fog.svg';
        break;
      case 48:
        weather = 'assets/images/weather/cloud-fog-2.svg';
        break;
      case 51:
        weather = 'assets/images/weather/cloud-drizzle.svg';
        break;
      case 53:
        weather = 'assets/images/weather/cloud-drizzle.svg';
        break;
      case 55:
        weather = 'assets/images/weather/cloud-drizzle.svg';
        break;
      case 56:
        weather = 'assets/images/weather/cloud-drizzle.svg';
        break;
      case 57:
        weather = 'assets/images/weather/cloud-drizzle.svg';
        break;
      case 61:
        weather = 'assets/images/weather/cloud-rain-2.svg';
        break;
      case 63:
        weather = 'assets/images/weather/cloud-rain.svg';
        break;
      case 65:
        weather = 'assets/images/weather/cloud-rain.svg';
        break;
      case 66:
        weather = 'assets/images/weather/cloud-rain-2.svg';
        break;
      case 67:
        weather = 'assets/images/weather/cloud-rain.svg';
        break;
      case 71:
        weather = 'assets/images/weather/cloud-snow.svg';
        break;
      case 73:
        weather = 'assets/images/weather/cloud-snow.svg';
        break;
      case 75:
        weather = 'assets/images/weather/cloud-snow.svg';
        break;
      case 77:
        weather = 'assets/images/weather/cloud-snow.svg';
        break;
      case 80:
        weather = 'assets/images/weather/cloud-hail-sun.svg';
        break;
      case 81:
        weather = 'assets/images/weather/cloud-hail-sun.svg';
        break;
      case 82:
        weather = 'assets/images/weather/cloud-hail-sun.svg';
        break;
      case 85:
        weather = 'assets/images/weather/snow.svg';
        break;
      case 86:
        weather = 'assets/images/weather/snow.svg';
        break;
      case 95:
        weather = 'assets/images/weather/cloud-drizzle-lightning.svg';
        break;
      case 96:
        weather = 'assets/images/weather/cloud-hail-lightning.svg';
        break;
      case 99:
        weather = 'assets/images/weather/cloud-hail-lightning.svg';
        break;
      default:
        weather = 'assets/images/weather/thermometer-25.svg';
        break;
    }
    return weather;
  }
}
