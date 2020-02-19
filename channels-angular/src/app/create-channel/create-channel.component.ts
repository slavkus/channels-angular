import { DataAccessService } from './../services/data-access.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-channel',
  templateUrl: './create-channel.component.html',
  styleUrls: ['./create-channel.component.css']
})
export class CreateChannelComponent implements OnInit {

  constructor(private dataAccessService: DataAccessService) { }

  ngOnInit() {
  }

  onClickMe() {
    this.dataAccessService.postUser();
    console.log('Was clicked.');
    alert('Clicked');
  }

}
