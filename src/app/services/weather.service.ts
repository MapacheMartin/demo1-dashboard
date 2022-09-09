import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  get(lat, lng): Observable<any> {
    return this.http.get<any>(
      `${environment.weatherApi}/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`
    );
  }
}
