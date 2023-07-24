import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {
  private apiUrl = 'http://127.0.0.1:8000/challenge';  // replace with your API URL

  constructor(private http: HttpClient) { }

  getPrompt(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
