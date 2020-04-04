import { Component, OnInit } from '@angular/core';
import { Team } from 'src/team';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  teams = Team;
  constructor() { }

  ngOnInit(): void {
  }

}
