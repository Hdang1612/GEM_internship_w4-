import { User, UserDataResponse } from './../shared/types/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../environment';
@Injectable({ providedIn: 'root' })
export class UserService {
  options = {
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
  getListUser(page: number): Observable<UserDataResponse> {
    return this.http
      .get<UserDataResponse>(`${environment.apiUrl}/users`, {
        ...this.options,
        params: new HttpParams().set('page', page),
      })
      .pipe(catchError(this.handleError()));
  }
  getUserDetail(id: string | null): Observable<any> {
    return this.http
      .get<any>(`${environment.apiUrl}/users/${id}`, this.options)
      .pipe(catchError(this.handleError()));
  }
  deleteUser(id: number): Observable<any> {
    return this.http
      .delete<any>(`${environment.apiUrl}/users/${id}`, this.options)
      .pipe(catchError(this.handleError()));
  }
  createUser(user: User): Observable<any> {
    return this.http
      .post<any>(`${environment.apiUrl}/users`, user, this.options)
      .pipe(catchError(this.handleError()));
  }
  updateUser(user: User, id: number): Observable<any> {
    return this.http
      .put<any>(`${environment.apiUrl}/users/${id}`, user, this.options)
      .pipe(catchError(this.handleError()));
  }
}
