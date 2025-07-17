import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Auth } from '../shared/types/auth';
import { tokenResponse } from '../shared/types/token';
import { environment } from '../environment';
@Injectable({ providedIn: 'root' })
export class AuthService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': environment.apiKey,
    }),
  };
  private handleError() {
    return (error: any) => {
      return throwError(() => error);
    };
  }
  constructor(private http: HttpClient) {}
  login(userInfo: Auth): Observable<tokenResponse> {
    return this.http
      .post<tokenResponse>(
        `${environment.apiUrl}/login`,
        userInfo,
        this.httpOptions
      )
      .pipe(catchError(this.handleError()));
  }
}
