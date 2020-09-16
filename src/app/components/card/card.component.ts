import { Component, OnInit, Input } from '@angular/core';
import * as faker from 'faker';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() Book: any;
  img: string = faker.image.city();

  constructor() {}

  ngOnInit(): void {}
}
