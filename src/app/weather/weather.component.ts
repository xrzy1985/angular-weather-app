import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from './service/weather.service';
import { WeatherData } from './model/weather.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  @Input() title: string;
  temperature: number = 60.23;
  min: number = 20.11;
  max: number = 90.99;
  humid: number = 77;
  humidity: string = String(this.humid) + ' %';
  wind: number = 11;
  windSpeed: string = String(this.wind) + ' mph';
  isCelsius: boolean = false;
  celsiusOrFahrenheit: string = this.isCelsius ? ' ° C' : ' ° F';

  city: string = 'Acworth';
  state: string = 'Ga';
  country: string = 'USA';

  useLocation: boolean = false;
  geoLocationData: any;

  weatherData: WeatherData[] = [];

  constructor(private weatherService: WeatherService) {
    this.title = '';
    this.geoLocationData = undefined;
  }

  ngDoCheck(): void {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        (data: GeolocationPosition) => {
          this.geoLocationData = data;
          this.useLocation = true;
          // console.log('Geolocation: ', this.geoLocationData);
        },
        (data: any) => {
          this.geoLocationData = undefined;
          this.useLocation = false;
        }
      );
    }
  }

  ngOnInit(): void {
    this.weatherService
      .getWeatherData(this.formatLocation(true))
      .subscribe({
        next: (resp: any) => {
          this.weatherData.length = 0;
          this.weatherData.push(resp);
          console.log(this.weatherData[0]);
        },
      });
  }

  formatLocation(trigger: boolean): string {
    return this.city + ', ' + this.state + (!trigger ? '' : ', ' + this.country)
  }
}
