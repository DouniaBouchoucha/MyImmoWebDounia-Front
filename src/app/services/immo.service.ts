import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Immo } from '../domain/immo';



@Injectable({
  providedIn: 'root'
})
export class ImmoService {
  URL: string = ' http://localhost:8080/immo';

  constructor(private client: HttpClient) { } // DI

  public getAllImmo(): Observable<Immo[]> {

    return this.client.get<Immo[]>(this.URL);
  }

  public getImmoById(id: number): Observable<Immo> {
    return this.client.get<Immo>(this.URL+'/'+id);

  }

}
