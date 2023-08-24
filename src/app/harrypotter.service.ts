import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HarryPotterCharacter } from './harrypotter.interface';
import { GryffindorComponent } from './components/pages/gryffindor/gryffindor.component';

@Injectable({
  providedIn: 'root',
})
export class HarrypotterService {
  constructor(private http: HttpClient) {}

  getHarrypotterList(): Observable<HarryPotterCharacter[]> {
    return this.http.get<HarryPotterCharacter[]>(
      'https://hp-api.onrender.com/api/characters'
    );
  }

  getHouseMembers(houseName: string): Observable<any> {
    const apiUrl = `https://hp-api.onrender.com/api/characters/house/${GryffindorComponent}`;
    return this.http.get(apiUrl);
  }
}
