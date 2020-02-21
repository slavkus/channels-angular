import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

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

export interface ChannelsFilter {
  name: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})

export class DataAccessService {
  private options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  public jwtToken: string;
  public channelData: any;
  constructor(private client: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
    })
  };

  postUser() {
    return this.client.post<Authorization>('http://176.31.182.158:3001/auth/local',
      { identifier: 'uniqcaster', password: 'cast457' }, this.options).subscribe((data: Authorization) => {
        this.jwtToken = JSON.stringify(data.jwt).slice(1, -1);
        localStorage.setItem('token', this.jwtToken);
        if (this.jwtToken) {
          this.postChannels(this.jwtToken);
        }
      },
        error => {
          console.log('Error, error');
        });
  }

  postChannels(jwtToken: string) {
    const params = new HttpParams().set('Authorization: ', 'Bearer ' + jwtToken);
    return this.client.post('http://176.31.182.158:3001/channels', params)
      .subscribe((data) => {
        this.channelData = data;
      },
        error => {
        });
  }

  getData() {
    return this.channelData;
  }

  deleteChannel(id: number): Observable<{}> {
    return this.client.delete('http://176.31.182.158:3001/channels/' + id, this.httpOptions);
  }

  addChannel(name: string, url: string){
    return this.client.post<ChannelsFilter>('http://176.31.182.158:3001/channels', this.httpOptions);
  }

  updateChannel(id: number): Observable<ChannelsFilter> {
    return this.client.put<ChannelsFilter>('http://176.31.182.158:3001/channels', this.httpOptions);
  }
}
