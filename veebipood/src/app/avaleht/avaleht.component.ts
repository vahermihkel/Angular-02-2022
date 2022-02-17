import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avaleht',
  templateUrl: './avaleht.component.html',
  styleUrls: ['./avaleht.component.css']
})
export class AvalehtComponent implements OnInit {

  s6na = "312"; // vasakul pool võrdusmärgist on muutuja, paremal pool selle väärtus
  number = 312; // 1. numbriga on võimalik teha tehteid ---- number + number = loogiline number
                // sõnaline number + sõnaline number = kokkuliitmine nagu sõnadega
                // 5 + 8 = 13
                // "5" + "8" = "58"   --- "raud" + "tee"
  kahendV22rtus = false; // true/false --- "y" / "n" --- 0 / 1  --- kahevahel: "p"   ---- 2
          // checkbox - nõustunud/mittenõustunud tingimustega
          // täisealine / mitte
  
  massiiv = ["dasdas","asdasd"];
  list = [13,13,3124,123];
  arrray = [true,false,true];

  constructor() { 
    console.log("AvalehtComponent constructor käivitub");
  }

  ngOnInit(): void {
    console.log("AvalehtComponent ngOnInit käivitub");
  }

  funktsioon() {
    console.log("funktsioon käivitub");
    this.kahendV22rtus = !this.kahendV22rtus;
    this.number = this.number + 100;
  }

}
