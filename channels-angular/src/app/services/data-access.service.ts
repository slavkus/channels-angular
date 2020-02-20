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

interface ChannelsAccess {
  name: string;
  id: number;
  url: string;
  lang: string;
  template: string;
  createdAt: string;
  updatedAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {
  private options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  public jwtToken: string;
  constructor(private client: HttpClient) { }

  postUser() {
    return this.client.post<Authorization>('http://176.31.182.158:3001/auth/local',
      { identifier: 'uniqcaster', password: 'cast457' }, this.options).subscribe((data: Authorization) => {
        // console.log('POST Request is successful ', data);
        this.jwtToken = JSON.stringify(data.jwt);
        if (this.jwtToken) {
          this.postChannels(this.jwtToken);
        }
        console.log('JWT Token: ' + this.jwtToken);
      },
        error => {
          // console.log('Error, error');
        });
  }

  postChannels(jwtToken: string) {
    console.log('JWT In Channels ' + jwtToken);
    const optionsChannel = new HttpHeaders().set('Authorization:', 'Bearer ' + jwtToken);
    return this.client.post<ChannelsAccess>('http://176.31.182.158:3001/channels', optionsChannel)
    .subscribe((data: ChannelsAccess) => {
      console.log('POST Request is successful ', data);
    },
      error => {
        console.log('Error, error');
      });
  }
}