import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ostukorv',
  templateUrl: './ostukorv.component.html',
  styleUrls: ['./ostukorv.component.css']
})
export class OstukorvComponent implements OnInit {
  tooted = [41,13,55,156];
  ostukorviKogusumma = 0; 
  // neid muutujaid näidatakse HTML-s

  constructor() { }

  ngOnInit(): void { // siis kui componendi sisse tullakse
    this.tooted.forEach(element => this.ostukorviKogusumma = this.ostukorviKogusumma + element);
  }

  // tavalised sulud funktsiooni nime järel
  // on väärtuste vastu võtmiseks
  tyhjenda() {
    this.tooted = [];
    this.ostukorviKogusumma = 0;
  }

  lisaToode(toode: any) {
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
    this.tooted.push(toode);
    this.ostukorviKogusumma = 0;
    this.tooted.forEach(element => this.ostukorviKogusumma = this.ostukorviKogusumma + element);
  }

  kustutaToode(toode: any) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
    // järjekorranumber üles leida
    const j2rjekorraNumber = this.tooted.indexOf(toode);
    console.log(j2rjekorraNumber);
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    // kustutada järjekorranumbri alusel
    this.tooted.splice(j2rjekorraNumber,1);
    this.ostukorviKogusumma = 0;
    this.tooted.forEach(element => this.ostukorviKogusumma = this.ostukorviKogusumma + element);
  }

}
