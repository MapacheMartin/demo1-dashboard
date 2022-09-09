import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  private profileImage: BehaviorSubject<any> = new BehaviorSubject(
    '/assets/images/melr.jpg'
  );

  getProfile(): Observable<any> {
    return this.profileImage.asObservable();
  }

  setProfile(profile: any) {
    this.profileImage.next(profile);
  }
}
