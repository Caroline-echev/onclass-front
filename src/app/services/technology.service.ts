import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Technology } from 'src/app/common/technology/technology.class';

@Injectable()
export class TechnologyService {
  private apiUrl: string = 'http://localhost:8090/technology';

  constructor(private httpClient: HttpClient) {}

  getTechnologies(): Observable<Technology[]> {
    return this.httpClient.get<Technology[]>(this.apiUrl + '/getTechnologies');
  }

  addTechnology(technology: Technology): Observable<Technology> {
    return this.httpClient.post<Technology>(this.apiUrl + '/addTechnology', technology);
  }
}
