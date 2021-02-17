import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LigaNosService {
  private apiKey = 'e11de0e5f0ed432eb84ce978679870df';

  constructor(private http: HttpClient) { }
  getCurrentFutebol(url: string) {

    //Pagina por defeito: Primeira Liga
    let pagina = 'https://api.football-data.org/v2/competitions/PPL/teams';

    const httpOptions = {
      headers: new HttpHeaders({
        'X-Auth-Token': this.apiKey,
      })
    }
    return this.http.get(pagina, httpOptions);
  }

}
