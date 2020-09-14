import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {
  @Input() Heeroo: string;

  constructor() { }

  ngOnInit(): void {
  }

}
