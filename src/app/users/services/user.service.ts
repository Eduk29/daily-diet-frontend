import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private readonly httpClient: HttpClient) {}

  public create(user: IUser): Observable<IUser> {
    const url = `${environment.apiBasePath}/${environment.userEndpoints.base}/${environment.userEndpoints.create}`;
    return this.httpClient.post<IUser>(url, user);
  }

  public listAll(): Observable<IUser> {
    const url = `${environment.apiBasePath}/${environment.userEndpoints.base}/${environment.userEndpoints.listAll}`;
    return this.httpClient.get<IUser>(url);
  }
}
