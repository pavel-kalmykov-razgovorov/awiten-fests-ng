import { Component, OnInit } from '@angular/core';
import { Festival } from "./festival.model";

@Component({
  selector: 'app-festivals',
  templateUrl: './festivals.component.html',
  styleUrls: ['./festivals.component.css']
})
export class FestivalsComponent implements OnInit {
  festivals: Festival[] = [
    new Festival('A Test Festival','This is a random location')
  ];
  constructor() { }

  ngOnInit() {
  }

}
