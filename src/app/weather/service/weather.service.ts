import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { WeatherData } from '../model/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  constructor(private http: HttpClient ) {}

  getWeatherData(location: string): Observable<any> {
    return this.http.get(environment.WEATHER.WEATHER_API_BASE_URL, {
      headers: new HttpHeaders()
        .set(
          environment.WEATHER.X_RAPID_API_KEY_HEADER,
          environment.WEATHER.X_RAPID_API_KEY_VALUE
        )
        .set(
          environment.WEATHER.X_RAPID_API_HOST_HEADER,
          environment.WEATHER.X_RAPID_API_HOST_VALUE
        ),
      params: new HttpParams()
        .set('q', location)
        .set('units', 'imperial')
        .set('mode', 'json'),
    });
  }
}
