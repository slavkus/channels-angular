import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {
  private options = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

  constructor(private client: HttpClient) { }

  postUser() {
    return this.client.post('http://176.31.182.158:3001/auth/local', 
    {identifier: 'uniqcaster', password: 'cast457'}, this.options).subscribe(data => {
      console.log('POST Request is successful ', data);
    },
    error => {
      console.log('Error, error');
    });
  }
}
