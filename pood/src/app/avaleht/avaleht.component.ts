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

            // {nimi: 'sadasd', hind: 199}
  onLisaOstukorvi(toode: any) {
    // '[{nimi: true, hind: 1500},{nimi: 'sadasd', hind: 199}]'
    const ostukorvStoragest = sessionStorage.getItem("ostukorv");
    if (ostukorvStoragest) {
                          //[{nimi: true, hind: 1500},{nimi: 'sadasd', hind: 199}]
      const ostukorviTooted = JSON.parse(ostukorvStoragest);
          // [{nimi: true, hind: 1500},{nimi: 'sadasd', hind: 199},{nimi: 'sadasd', hind: 199}]
      ostukorviTooted.push(toode);
      sessionStorage.setItem("ostukorv",JSON.stringify(ostukorviTooted));
    } else {
      const ostukorviTooted: any = [];
      ostukorviTooted.push(toode);
      sessionStorage.setItem("ostukorv",JSON.stringify(ostukorviTooted));
    }

    // toode1,toode2
    // .push() toode3
    // toode1,toode2,toode3
  }
}
