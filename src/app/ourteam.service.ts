import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OurteamService {
  http: any;

  constructor() { }
  public getJSON(): Observable<any> {
    return this.http.get("./assets/our-team.json");
}
}
