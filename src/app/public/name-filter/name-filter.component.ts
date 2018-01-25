import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-name-filter',
  templateUrl: './name-filter.component.html',
  styleUrls: ['./name-filter.component.css']
})
export class NameFilterComponent implements OnInit {
  @Input() elementType = 'elemento';

  constructor() { }

  ngOnInit() {
  }

}
