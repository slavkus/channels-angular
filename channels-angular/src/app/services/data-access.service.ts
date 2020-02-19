import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface Authorization {
  jwt: string;
  user: {
    username: string;
    email: string;
    lang: string;
    template: string;
    id_ref: number;
    provider: string;
    id: number;
    createdAt: string;
    updatedAt: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {
  private options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  private authorizationResponse: Authorization;
  private jwtToken: string;
  constructor(private client: HttpClient) { }

  postUser() {
    return this.client.post<Authorization>('http://176.31.182.158:3001/auth/local',
      { identifier: 'uniqcaster', password: 'cast457' }, this.options).subscribe((data: Authorization) => {
        console.log('POST Request is successful ', data);
        this.jwtToken = data.jwt;
        console.log('JWT Token: ' + this.jwtToken);
      },
        error => {
          console.log('Error, error');
        });
  }
}
