import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquipaNosService {

  private apiKey = 'e11de0e5f0ed432eb84ce978679870df';
  private url = 'https://api.football-data.org/v2/teams/';

  constructor(private http: HttpClient) { }

  getEquipa(id: number) {

    const httpOptions = {
      headers: new HttpHeaders({
        'X-Auth-Token': this.apiKey,
      })
    }
    return this.http.get(this.url + id, httpOptions);
  }
}
