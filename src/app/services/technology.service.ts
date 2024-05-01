import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Technology } from 'src/app/common/technology/technology';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {
  private apiUrl: string = 'http://localhost:8090/technology/getTechnologies';

  constructor(private httpClient: HttpClient) {}

  getTechnologies(): Observable<Technology[]> {
    return this.httpClient.get<Technology[]>(this.apiUrl);
  }
}
