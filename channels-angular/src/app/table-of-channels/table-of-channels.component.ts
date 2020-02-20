import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Elements {
  id: number;
  name: string;
  url: string;
}

@Component({
  selector: 'app-table-of-channels',
  templateUrl: './table-of-channels.component.html',
  styleUrls: ['./table-of-channels.component.css']
})
export class TableOfChannelsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'url', 'actions'];
  dataSource = new MatTableDataSource<Elements>(ELEMENT_DATA);
  constructor() { }



  ngOnInit() {
  }

}

const ELEMENT_DATA: Elements[] = [
  {
    id: 1,
    name: 'HRT',
    url: 'http://hrt.hr',
  },
  {
    id: 2,
    name: 'RTL',
    url: 'http://rtl.hr',
  },
  {
    id: 3,
    name: 'Nova Tv',
    url: 'http://novatv.hr',
  },
];


