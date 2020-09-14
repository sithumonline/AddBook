import { Component, OnInit } from '@angular/core';
var faker = require('faker');

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  name: string = 'Card';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  bio: string = faker.lorem.sentence();

  constructor() {
    this.changeName('Mick');
  }

  ngOnInit(): void {
    this.log();
  }

  changeName(name: string): void {
    this.name = name;
  }

  onKey(event: any) {
    //this.name = event.target.value;
    this.changeName(event.target.value);
  }

  addHero(newHero: string) {
    this.heroes.push(newHero);
  }

  log() {
    console.log(`Hee.. I'm ${faker.name.findName()}`);
  }
}
