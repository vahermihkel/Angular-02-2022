import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avaleht',
  templateUrl: './avaleht.component.html',
  styleUrls: ['./avaleht.component.css']
})
export class AvalehtComponent implements OnInit {
  tooted = [
    {nimi: 41, hind: 1999}, // [object Object]
    {nimi: 13, hind: 721},
    {nimi: true, hind: 1500},
    {nimi: 'sadasd', hind: 199}
  ]; 

  constructor() { }

  ngOnInit(): void {
  }

}
